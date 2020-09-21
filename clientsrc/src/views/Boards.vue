<template>
  <div class="boards bg-beach">
    <h2>WELCOME TO THE BOARDS!!!</h2>
    <div class="row justify-content-center">
      <form class @submit.prevent="addBoard">
        <input
          class="form-control text-center text-capitalize"
          type="text"
          placeholder="title"
          v-model="newBoard.title"
          required
        />
        <input
          class="form-control text-center text-capitalize"
          type="text"
          placeholder="description"
          v-model="newBoard.description"
        />
        <button class="btn btn-outline-success mt-2" type="submit">Create Board</button>
      </form>
    </div>

    <div class="row">
      <div class="col-12 col-md-4 pr-0" v-for="board in boards" :boardData="board" :key="board.id">
        <div class="bg-transparent text-dark p-2 rounded border d-flex justify-content-between">
          <i class="fa fa-2x fa-pencil text-warning" @click="editBoardClicked = !editBoardClicked"></i>
          <router-link :to="{name: 'board', params: {boardId: board.id}}">
            <h3 class="text-capitalize">{{board.title}}:</h3>
            <h3 class="text-capitalize">{{board.description}}</h3>
          </router-link>
          <i class="fa fa-2x fa-trash-o text-danger" @click="removeBoard(board.id)"></i>
        </div>
        <form
          v-if="editBoardClicked == true"
          class="form mx-2 shadow-lg"
          @submit="editBoard(board.id)"
        >
          <input
            type="text"
            class="form-control mb-1 text-capitalize"
            placeholder="Edit list ..."
            v-model="editedBoardObject.title"
          />
          <input
            type="text"
            class="form-control mb-1 text-capitalize"
            placeholder="Edit description ..."
            v-model="editedBoardObject.description"
          />
          <button type="submit" class="btn btn-block btn-success">Save Change</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  props: ["boardData"],
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: "",
      },
      editedBoardObject: {},
      editBoardClicked: false,
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    removeBoard(id) {
      this.$store.dispatch("deleteBoard", id);
    },

    editBoard(id) {
      let editedBoardTitle = this.editedBoardObject.title
        ? this.editedBoardObject.title
        : this.boardData.title;
      let editedBoardDescription = this.editedBoardObject.description
        ? this.editedBoardObject.description
        : this.boardData.description;
      this.$store.dispatch("editBoard", {
        id: id,
        title: this.editedBoardObject.title,
        description: this.editedBoardObject.description,
        creatorEmail: this.user.email,
      });

      this.editBoardClicked = false;
      this.editedBoardObject.title = "";
      this.editedBoardObject.description = "";
    },
  },
};
</script>
<style scoped>
.bg-beach {
  background-image: url("~@/assets/beach.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  background-position: center;
}
</style>