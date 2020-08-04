<template>
  <div>
    <h4 class="lists">{{listData.title}}</h4>
    <tasks
      class="col-2 border border-primary"
      v-for="task in tasks"
      :taskData="task"
      :key="task.id"
    ></tasks>
  </div>
</template>


<script>
import tasks from "../components/tasks";
export default {
  name: "lists",
  props: ["listData"],
  data() {
    return {};
  },
  mounted() {},

  computed: {
    tasks() {
      return this.$store.state.tasks.data.filter(
        (t) => this.listData.id == t.listId
      );
    },
  },
  methods: {},
  components: {
    tasks,
  },
};
</script>


<style scoped>
</style>