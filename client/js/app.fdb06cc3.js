(function(t){function e(e){for(var s,r,n=e[0],d=e[1],l=e[2],m=0,u=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var d=a[n];0!==i[d]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e(),t._v(" "),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Boards")]),t._v(" "),a("div",{staticClass:"dropdown-menu bg-secondary",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},t._l(t.boards,(function(e){return a("a",{key:e.id,staticClass:"dropdown-item bg-secondary text-white",attrs:{href:"#"}},[t._v(t._s(e.title))])})))])]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],d=a("bc3a"),l=a.n(d);l.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var c={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}},computed:{boards(){return this.$store.state.boards}},components:{}},m=c,u=a("2877"),p=Object(u["a"])(m,r,n,!1,null,null,null),h=p.exports,b=a("335d"),v={name:"App",async beforeCreate(){try{await Object(b["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},g=v,f=(a("5c0b"),Object(u["a"])(g,i,o,!1,null,null,null)),k=f.exports,w=a("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("This is your home page.")])])}],y={name:"home",data(){return{}},computed:{},methods:{},components:{}},x=y,j=Object(u["a"])(x,_,C,!1,null,"155e0cbc",null),O=j.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards"},[t._v("\n  WELCOME TO THE BOARDS!!!\n  "),a("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._v(" "),t._l(t.boards,(function(e){return a("div",{key:e.id,staticClass:"col-12",attrs:{boardData:e}},[a("router-link",{attrs:{to:{name:"board",params:{boardId:e.id}}}},[a("div",{staticClass:"bg-dark text-primary p-2 m-2 rounded border border-white"},[t._v(t._s(e.title))])])],1)}))],2)},T=[],D={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}}}},I=D,B=Object(u["a"])(I,L,T,!1,null,null,null),E=B.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container-fluid bg-secondary"},[a("div",{staticClass:"row justify-content-center text-white"},[a("h1",{staticClass:"col-12 p-4"},[t._v(t._s(t.board.title))])]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("form",{staticClass:"form-inline",on:{submit:t.addNewList}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newListObject.title,expression:"newListObject.title"}],staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Create New List ..."},domProps:{value:t.newListObject.title},on:{input:function(e){e.target.composing||t.$set(t.newListObject,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[t._v("Submit")])])]),t._v(" "),a("div",{staticClass:"listScroll"},t._l(t.lists,(function(t){return a("lists",{key:t.id,staticClass:"col-12 col-md-3 listWrapper bg-dark text-white p-2 m-2 rounded border border-white",attrs:{listData:t}})})))])},P=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-content-between"},[a("i",{staticClass:"fa fa-pencil text-warning",attrs:{"data-toggle":"modal","data-target":"#editListModal"+t.listData.id}}),t._v(" "),a("div",{staticClass:"modal fade text-dark",attrs:{id:"editListModal"+t.listData.id,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v('Edit "'+t._s(t.listData.title)+'"')]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",on:{submit:t.editList}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedListObject.title,expression:"editedListObject.title"}],staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Edit list ..."},domProps:{value:t.editedListObject.title},on:{input:function(e){e.target.composing||t.$set(t.editedListObject,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save changes")])])])])])]),t._v(" "),a("i",{staticClass:"fa fa-trash-o text-danger",on:{click:t.removeList}})]),t._v(" "),a("h4",{staticClass:"lists p-2"},[t._v(t._s(t.listData.title))]),t._v(" "),t._l(t.tasks,(function(t){return a("tasks",{key:t.id,staticClass:"rounded border border-primary bg-primary m-2",attrs:{taskData:t}})})),t._v(" "),a("div",{staticClass:"input-group my-4 d-flex justify-content-center"},[a("div",{staticClass:"input-group-prepend"}),t._v(" "),a("form",{on:{submit:t.createTask}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTaskObject.title,expression:"newTaskObject.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter New Task ..."},domProps:{value:t.newTaskObject.title},on:{input:function(e){e.target.composing||t.$set(t.newTaskObject,"title",e.target.value)}}})])])],2)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tasks d-flex justify-content-between p-2",on:{click:function(e){t.commentsClicked=!t.commentsClicked}}},[a("i",{staticClass:"fa fa-pencil text-warning",attrs:{"data-toggle":"modal","data-target":"#editTaskModal"+t.taskData.id}}),t._v(" "),a("div",{staticClass:"modal fade text-dark",attrs:{id:"editTaskModal"+t.taskData.id,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v('Edit "'+t._s(t.taskData.title)+'"')]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",on:{submit:t.editTask}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedTaskObject.title,expression:"editedTaskObject.title"}],staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Edit list ..."},domProps:{value:t.editedTaskObject.title},on:{input:function(e){e.target.composing||t.$set(t.editedTaskObject,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save changes")])])])])])]),t._v("\n    "+t._s(t.taskData.title)+"\n    "),a("div",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),t._v(" "),a("div",{staticClass:"dropdown-menu bg-secondary",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},t._l(t.lists,(function(e){return a("a",{key:e.id,staticClass:"dropdown-item bg-secondary text-white",attrs:{href:"#"},on:{click:function(a){t.changeList(e.id)}}},[t._v(t._s(e.title))])})))]),t._v(" "),a("i",{staticClass:"fa fa-trash-o text-danger",on:{click:t.deleteTask}})]),t._v(" "),t.commentsClicked?a("div",[t._l(t.comments,(function(e){return a("comment",{key:e.id,attrs:{commentData:e,taskId:t.taskData.id,listId:t.taskData.listId}})})),t._v(" "),a("div",{staticClass:"input-group my-4 d-flex justify-content-center"},[a("div",{staticClass:"input-group-prepend"}),t._v(" "),a("form",{on:{submit:t.createComment}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommentObject.comment,expression:"newCommentObject.comment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter New Comment ..."},domProps:{value:t.newCommentObject.comment},on:{input:function(e){e.target.composing||t.$set(t.newCommentObject,"comment",e.target.value)}}})])])],2):t._e()])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("div",{staticClass:"card border border-secondary rounded shadow m-1",staticStyle:{overflow:"auto display:block","border-bottom":"solid 1px black"}},[a("div",{staticClass:"card-body bg-secondary text-wrap"},[t._v("\n      "+t._s(t.commentData.user)+": "+t._s(t.commentData.comment)+"\n      "),a("i",{staticClass:"fa fa-trash-o text-danger",on:{click:t.deleteComment}})])])])},z=[],K={name:"comment",props:["commentData","taskId","listId"],data(){return{}},computed:{user(){}},methods:{deleteComment(){this.$store.dispatch("deleteComment",{body:this.commentData,id:this.commentData._id,taskId:this.taskId,listId:this.listId})}},components:{}},W=K,H=Object(u["a"])(W,R,z,!1,null,"634db6fa",null),J=H.exports,Y={name:"tasks",props:["taskData"],data(){return{commentsClicked:!1,editedTaskObject:{},newCommentObject:{}}},computed:{user(){return this.$store.state.user},comments(){return this.taskData.comments},lists(){return this.$store.state.lists}},methods:{changeList(t){this.$store.dispatch("changeList",{listId:t,oldId:this.taskData.listId,taskId:this.taskData.id})},createComment(){this.$store.dispatch("createComment",{comment:this.newCommentObject.comment,user:this.user.name,taskId:this.taskData.id,listId:this.taskData.listId}),this.newCommentObject.comment=""},deleteTask(){this.$store.dispatch("deleteTask",this.taskData)},editTask(){this.$store.dispatch("editTask",{id:this.taskData.id,title:this.editedTaskObject.title,listId:this.taskData.listId,creatorEmail:this.user.email}),$("#editTaskModal"+this.taskData.id).modal("hide")}},components:{comment:J}},q=Y,X=Object(u["a"])(q,A,U,!1,null,"24fec1bf",null),F=X.exports,G={name:"lists",props:["listData"],data(){return{editedListObject:{},newTaskObject:{}}},mounted(){this.$store.dispatch("getTasks",this.listData.id)},computed:{tasks(){return this.$store.state.tasks[this.listData.id]},user(){return this.$store.state.user}},methods:{removeList(){this.$store.dispatch("deleteList",this.listData)},editList(){this.$store.dispatch("editList",{id:this.listData.id,title:this.editedListObject.title,boardId:this.listData.boardId,creatorEmail:this.user.email}),$("#editListModal"+this.listData.id).modal("hide")},createTask(){this.$store.dispatch("createTask",{title:this.newTaskObject.title,listId:this.listData.id,creatorEmail:this.user.email}),this.newTaskObject.title=""}},components:{tasks:F}},Q=G,V=Object(u["a"])(Q,N,S,!1,null,"b73ce54c",null),Z=V.exports,tt={name:"board",props:["boardData"],data(){return{newListObject:{}}},mounted(){this.$store.dispatch("getBoard",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId)},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists},user(){return this.$store.state.user}},methods:{getInfo(){console.log(this.$store.state.activeBoard)},addNewList(){this.$store.dispatch("addList",{title:this.newListObject.title,boardId:this.board.id,creatorEmail:this.user.email})}},components:{lists:Z}},et=tt,at=Object(u["a"])(et,M,P,!1,null,null,null),st=at.exports;s["a"].use(w["a"]);var it=new w["a"]({routes:[{path:"/",name:"home",component:O},{path:"/boards",name:"boards",component:E,beforeEnter:b["b"]},{path:"/boards/:boardId",name:"board",component:st},{path:"*",redirect:"/"}]}),ot=a("2f62");s["a"].use(ot["a"]);let rt=window.location.host.includes("localhost")?"//localhost:3000/":"/",nt=l.a.create({baseURL:rt+"api/",timeout:3e3,withCredentials:!0});var dt=new ot["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.tasks)}},actions:{setBearer({},t){nt.defaults.headers.authorization=t},resetBearer(){nt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await nt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){nt.get("boards").then(e=>{console.log(e.data),t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},a){nt.post("boards",a).then(t=>{e("getBoards")})},async getBoard({commit:t},e){try{let a=await nt.get("boards/"+e);console.log("got the boards",a.data),t("setActiveBoard",a.data)}catch(a){console.error(a)}},async getLists({commit:t},e){try{let a=await nt.get("boards/"+e+"/lists");console.log("got the lists",a.data),t("setLists",a.data)}catch(a){console.error(a)}},async addList({dispatch:t},e){try{let a=await nt.post("lists/",e);console.log("added a list",a.data),t("getLists",e.boardId)}catch(a){console.error(a)}},async deleteList({dispatch:t},e){try{let a=await nt.delete("lists/"+e.id);console.log("deleted a list",a.data),t("getLists",e.boardId)}catch(a){console.error(a)}},async editList({dispatch:t},e){try{console.log("lisData",e);let a=await nt.put("lists/"+e.id,e);console.log("edited the list",a.data),t("getLists",e.boardId)}catch(a){console.error(a)}},async getTasks({commit:t},e){try{let a=await nt.get("lists/"+e+"/tasks");console.log("got the tasks",a.data),t("setTasks",{listId:e,tasks:a.data})}catch(a){console.error(a)}},async createTask({commit:t,dispatch:e},a){try{let t=await nt.post("tasks/",a);console.log("created new task",t.data),e("getTasks",a.listId)}catch(s){console.error(s)}},async deleteTask({dispatch:t},e){try{let a=await nt.delete("tasks/"+e.id);console.log("deleted a task",a.data),t("getTasks",e.listId)}catch(a){console.error(a)}},async editTask({dispatch:t},e){try{let a=await nt.put("tasks/"+e.id,e);console.log("edited the task",a.data),t("getTasks",e.listId)}catch(a){console.error(a)}},async createComment({commit:t,dispatch:e},a){try{let t=await nt.post("tasks/"+a.taskId+"/comments",a);console.log("created new comment",t.data),e("getTasks",a.listId)}catch(s){console.error(s)}},async deleteComment({dispatch:t},e){try{let a=await nt.delete("tasks/"+e.taskId+"/comments/"+e.id);console.log("deleted a comment",a.data),t("getTasks",e.listId)}catch(a){console.error(a)}},async changeList({dispatch:t},e){try{let a=await nt.put("tasks/"+e.taskId,e);console.log("moved task",a.data),t("getTasks",e.listId),t("getTasks",e.oldId)}catch(a){console.error(a)}}}});const lt="bcw-cody.us.auth0.com",ct="https://kanbanapi.com",mt="kcsNdzeYDX8Ys5aRyv21vgvKtcLnl1fK";s["a"].use(b["a"],{domain:lt,clientId:mt,audience:ct,onRedirectCallback:t=>{it.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:it,store:dt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"9c0c":function(t,e,a){}});