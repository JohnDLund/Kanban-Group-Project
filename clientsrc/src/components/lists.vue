<template>
  <div>
    <div class="d-flex justify-content-between">
      <button
        class="btn btn-sm btn-warning mb-2"
        data-toggle="modal"
        :data-target="'#editListModal' + listData.id"
      >Edit</button>

      <div
        class="modal fade text-dark"
        :id="'editListModal' + listData.id"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit "{{listData.title}}"</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="form" @submit="editList">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Edit list ..."
                  v-model="editedListObject.title"
                />
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-sm btn-danger mb-2" @click="removeList">X</button>
    </div>
    <h4 class="lists p-2">{{listData.title}}</h4>
    <tasks
      class="rounded border border-primary bg-primary m-2"
      v-for="task in tasks"
      :taskData="task"
      :key="task.id"
    ></tasks>
    <div class="input-group my-4 d-flex justify-content-center">
      <div class="input-group-prepend">
        <span class="input-group-text">+</span>
      </div>
      <form @submit="createTask">
        <input
          type="text"
          class="form-control"
          placeholder="Enter New Task ..."
          v-model="newTaskObject.title"
        />
      </form>
    </div>
  </div>
</template>


<script>
import tasks from "../components/tasks";
export default {
  name: "lists",
  props: ["listData"],
  data() {
    return {
      editedListObject: {},
      newTaskObject: {},
    };
  },
  mounted() {
    this.$store.dispatch("getTasks", this.listData.id);
  },

  computed: {
    tasks() {
      return this.$store.state.tasks[this.listData.id];
    },
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    removeList() {
      this.$store.dispatch("deleteList", this.listData);
    },

    editList() {
      this.$store.dispatch("editList", {
        id: this.listData.id,
        title: this.editedListObject.title,
        boardId: this.listData.boardId,
        creatorEmail: this.user.email,
      });
      $("#" + listData.id).modal("hide");
    },
    createTask() {
      this.$store.dispatch("createTask", {
        title: this.newTaskObject.title,
        listId: this.listData.id,
        creatorEmail: this.user.email,
      });
    },
  },

  components: {
    tasks,
  },
};
</script>


<style scoped>
</style>