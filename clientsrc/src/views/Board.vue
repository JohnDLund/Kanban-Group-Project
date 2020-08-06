<template>
  <div class="board container-fluid bg-secondary">
    <div class="row justify-content-center text-white">
      <h1 class="col-12 p-4">{{board.title}}</h1>
    </div>
    <div class="row justify-content-center">
      <form class="form-inline" @submit="addNewList">
        <input
          type="text"
          class="form-control mb-2 text-capitalize"
          placeholder="Create New List ..."
          v-model="newListObject.title"
        />
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
    <div class="listScroll">
      <lists
        class="col-12 col-md-3 listWrapper bg-dark text-white p-2 m-2 rounded border border-white"
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
      this.newListObject.title = "";
    },
  },
  components: {
    lists,
  },
};
</script>
