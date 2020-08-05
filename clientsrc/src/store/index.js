import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks(state, payload) {
      Vue.set(state.tasks, payload.listId, payload.tasks)
      // state.tasks[payload.listId] = payload.tasks
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          console.log(res.data)
          commit('setBoards', res.data)
        })
    },

    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },

    async getBoard({ commit }, boardId) {
      try {
        let res = await api.get("boards/" + boardId)
        console.log("got the boards", res.data);
        commit("setActiveBoard", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async getLists({ commit }, boardId) {
      try {
        let res = await api.get("boards/" + boardId + "/lists")
        console.log("got the lists", res.data);
        commit("setLists", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async addList({ dispatch }, listData) {
      try {
        let res = await api.post("lists/", listData)
        console.log("added a list", res.data);
        dispatch("getLists", listData.boardId)
      } catch (err) {
        console.error(err)
      }
    },

    async deleteList({ dispatch }, listId) {
      try {
        let res = await api.delete("lists/" + listId.id)
        console.log("deleted a list", res.data);
        dispatch("getLists", listId.boardId)
      } catch (err) {
        console.error(err)
      }
    },

    async editList({ dispatch }, listData) {
      try {
        console.log("lisData", listData)
        let res = await api.put("lists/" + listData.id, listData)
        console.log("edited the list", res.data);
        dispatch("getLists", listData.boardId)
      } catch (err) {
        console.error(err)
      }
    },

    async getTasks({ commit }, listData) {
      try {
        let res = await api.get("lists/" + listData + "/tasks")
        console.log("got the tasks", res.data);
        commit("setTasks", {
          listId: listData,
          tasks: res.data
        })
      } catch (err) {
        console.error(err)
      }
    },

    async createTask({ commit, dispatch }, taskData) {
      try {
        let res = await api.post("tasks/", taskData)
        console.log("create new task", res.data);
        dispatch("getTasks", taskData.listId)
      } catch (err) {
        console.error(err)
      }
    },

    async deleteTask({ dispatch }, taskData) {
      try {
        let res = await api.delete("tasks/" + taskData.id)
        console.log("deleted a task", res.data);
        dispatch("getTasks", taskData.listId)
      } catch (err) {
        console.error(err)
      }
    },

    async editTask({ dispatch }, taskData) {
      try {
        let res = await api.put("tasks/" + taskData.id, taskData)
        console.log("edited the task", res.data);
        dispatch("getTasks", taskData.listId)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
