<template>
  <div class="board container-fluid">
    <div class="row justify-content-center">
      <h1 class="col-12">{{board.title}}</h1>
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
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
    this.$store.dispatch("getLists");
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
  },
  methods: {
    getInfo() {
      console.log(this.$store.state.activeBoard);
    },
  },
  components: {
    lists,
  },
};
</script>
