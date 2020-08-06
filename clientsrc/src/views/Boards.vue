<template>
  <div class="boards">
    WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div class="row">
      <div class="col-3" v-for="board in boards" :boardData="board" :key="board.id">
        <div
          class="bg-dark text-primary p-2 m-2 rounded border border-white d-flex justify-content-between"
        >
          <i
            class="fa fa-pencil text-warning"
            data-toggle="modal"
            :data-target="'#editBoardModal' + board.id"
          ></i>
          <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
          <i class="fa fa-trash-o text-danger" @click="removeBoard(board.id)"></i>
        </div>
        <div
          class="modal fade text-dark"
          :id="'editBoardModal' + board.id"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit "{{board.title}}"</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="form" @submit="editBoard(board.id)">
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Edit list ..."
                    v-model="editedBoardObject.title"
                  />
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
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
      this.$store.dispatch("editBoard", {
        id: id,
        title: this.editedBoardObject.title,
        creatorEmail: this.user.email,
      });
      this.title = "";
      $("#editBoardModal" + id).modal("hide");
    },
  },
};
</script>