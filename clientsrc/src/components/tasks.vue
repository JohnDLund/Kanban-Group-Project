<template>
  <div>
    <div
      class="tasks d-flex justify-content-between p-2"
      @click="commentsClicked = !commentsClicked"
    >
      <i
        class="fa fa-pencil text-warning"
        data-toggle="modal"
        :data-target="'#editTaskModal' + taskData.id"
      ></i>

      <div
        class="modal fade text-dark"
        :id="'editTaskModal' + taskData.id"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit "{{taskData.title}}"</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="form" @submit="editTask">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Edit list ..."
                  v-model="editedTaskObject.title"
                />
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {{taskData.title}}
      <i class="fa fa-trash-o text-danger" @click="deleteTask"></i>
    </div>
    <div v-if="commentsClicked">
      <comments v-for="comment in comments" :commentData="comment" :key="comment.id"></comments>
    </div>
  </div>
</template>


<script>
import comments from "../components/comments";
export default {
  name: "tasks",
  props: ["taskData"],
  data() {
    return {
      commentsClicked: false,
      editedTaskObject: {},
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    comments() {
      return this.$store.state.tasks.comments;
    },
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.taskData);
    },
    editTask() {
      this.$store.dispatch("editTask", {
        id: this.taskData.id,
        title: this.editedTaskObject.title,
        listId: this.taskData.listId,
        creatorEmail: this.user.email,
      });
      $("#editTaskModal" + this.taskData.id).modal("hide");
    },
  },
  components: {
    comments,
  },
};
</script>


<style scoped>
</style>