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
    tasks: []
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
    setTasks(state, tasks) {
      state.tasks = tasks
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

    async addList({ dispatch }, boardData) {
      try {
        let res = await api.post("lists/", boardData)
        console.log("added a list", res.data);
        dispatch("getLists", boardData.boardId)
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

    async getTasks({ commit }) {
      try {
        let res = await api.get("tasks")
        console.log("got the tasks", res.data);
        commit("setTasks", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
