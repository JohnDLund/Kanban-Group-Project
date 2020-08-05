<template>
  <div class="board container-fluid">
    <div class="row justify-content-center">
      <h1 class="col-12">{{board.title}}</h1>
      <div class="row justify-content-center">
        <div class="col-12">
          <form class="form-inline" @submit="addNewList">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Enter New List ..."
              v-model="newListObject.title"
            />
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <lists
        class="col-2 border border-primary listWrapper"
        v-for="list in lists"
        :listData="list"
        :key="list.id"
      ></lists>
    </div>
  </div>
</template>

<script>
import lists from "../components/lists";
export default {
  name: "board",
  props: ["boardData"],
  data() {
    return {
      newListObject: {},
    };
  },
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
    this.$store.dispatch("getLists", this.$route.params.boardId);
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    getInfo() {
      console.log(this.$store.state.activeBoard);
    },
    addNewList() {
      this.$store.dispatch("addList", {
        title: this.newListObject.title,
        boardId: this.board.id,
        creatorEmail: this.user.email,
      });
    },
  },
  components: {
    lists,
  },
};
</script>
