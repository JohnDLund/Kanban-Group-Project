(function(t){function e(e){for(var s,r,n=e[0],d=e[1],l=e[2],u=0,m=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);c&&c(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var d=a[n];0!==i[d]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07cf":function(t,e,a){},"2a9b":function(t,e,a){"use strict";var s=a("da2a"),i=a.n(s);i.a},"3fa6":function(t,e,a){},4951:function(t,e,a){"use strict";var s=a("07cf"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view",{key:t.$route.fullPath})],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e(),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Boards")]),t._v(" "),a("div",{staticClass:"dropdown-menu bg-secondary",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},t._l(t.boards,(function(e){return a("router-link",{key:e.id,staticClass:"dropdown-item bg-secondary text-white text-capitalize text-center",attrs:{href:"#",to:{name:"board",params:{boardId:e.id}}}},[t._v(t._s(e.title))])})))]):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],d=a("bc3a"),l=a.n(d);l.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var c={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),this.$store.dispatch("getBoards"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}},computed:{boards(){return this.$store.state.boards}},components:{}},u=c,m=a("2877"),p=Object(m["a"])(u,r,n,!1,null,null,null),h=p.exports,b=a("335d"),v={name:"App",async beforeCreate(){try{await Object(b["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},f=v,g=(a("5c0b"),Object(m["a"])(f,i,o,!1,null,null,null)),k=g.exports,C=a("8c4f"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home bg-inlet"},[a("h1",[t._v("Thank you for using John & Codys Kanban Board")])])}],y={name:"home",data(){return{}},computed:{},methods:{},components:{}},x=y,j=(a("2a9b"),Object(m["a"])(x,w,_,!1,null,"042ed014",null)),O=j.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards bg-beach"},[a("h2",[t._v("WELCOME TO THE BOARDS!!!")]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"form-control text-center text-capitalize",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"form-control text-center text-capitalize",attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-outline-success mt-2",attrs:{type:"submit"}},[t._v("Create Board")])])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.boards,(function(e){return a("div",{key:e.id,staticClass:"col-12 col-md-4 pr-0",attrs:{boardData:e}},[a("div",{staticClass:"bg-transparent text-dark p-2 rounded border d-flex justify-content-between"},[a("i",{staticClass:"fa fa-2x fa-pencil text-warning",on:{click:function(e){t.editBoardClicked=!t.editBoardClicked}}}),t._v(" "),a("router-link",{attrs:{to:{name:"board",params:{boardId:e.id}}}},[a("h3",{staticClass:"text-capitalize"},[t._v(t._s(e.title)+":")]),t._v(" "),a("h3",{staticClass:"text-capitalize"},[t._v(t._s(e.description))])]),t._v(" "),a("i",{staticClass:"fa fa-2x fa-trash-o text-danger",on:{click:function(a){t.removeBoard(e.id)}}})],1),t._v(" "),1==t.editBoardClicked?a("form",{staticClass:"form mx-2 shadow-lg",on:{submit:function(a){t.editBoard(e.id)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedBoardObject.title,expression:"editedBoardObject.title"}],staticClass:"form-control mb-1 text-capitalize",attrs:{type:"text",placeholder:"Edit list ..."},domProps:{value:t.editedBoardObject.title},on:{input:function(e){e.target.composing||t.$set(t.editedBoardObject,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedBoardObject.description,expression:"editedBoardObject.description"}],staticClass:"form-control mb-1 text-capitalize",attrs:{type:"text",placeholder:"Edit description ..."},domProps:{value:t.editedBoardObject.description},on:{input:function(e){e.target.composing||t.$set(t.editedBoardObject,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-block btn-success",attrs:{type:"submit"}},[t._v("Save Change")])]):t._e()])})))])},T=[],D={name:"boards",props:["boardData"],mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""},editedBoardObject:{},editBoardClicked:!1}},computed:{boards(){return this.$store.state.boards},user(){return this.$store.state.user}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},removeBoard(t){this.$store.dispatch("deleteBoard",t)},editBoard(t){this.editedBoardObject.title?this.editedBoardObject.title:this.boardData.title,this.editedBoardObject.description?this.editedBoardObject.description:this.boardData.description;this.$store.dispatch("editBoard",{id:t,title:this.editedBoardObject.title,description:this.editedBoardObject.description,creatorEmail:this.user.email}),this.editBoardClicked=!1,this.editedBoardObject.title="",this.editedBoardObject.description=""}}},L=D,I=(a("735b"),Object(m["a"])(L,B,T,!1,null,"11501a54",null)),E=I.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container-fluid bg-otter"},[a("div",{staticClass:"row justify-content-center text-warning"},[a("h1",{staticClass:"col-12 p-4 shadow-md"},[t._v(t._s(t.board.title))])]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.addNewList(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newListObject.title,expression:"newListObject.title"}],staticClass:"form-control mb-2 text-capitalize",attrs:{type:"text",placeholder:"Create New List ..."},domProps:{value:t.newListObject.title},on:{input:function(e){e.target.composing||t.$set(t.newListObject,"title",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"listScroll"},t._l(t.lists,(function(t){return a("lists",{key:t.id,staticClass:"col-12 col-md-3 listWrapper bg-transparent text-dark p-2 m-2 rounded border",attrs:{listData:t}})})))])},P=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{dropzone:"list"},on:{dragover:function(t){t.preventDefault()},drop:function(e){e.preventDefault(),t.moveTask()}}},[a("div",{staticClass:"d-flex justify-content-between"},[a("i",{staticClass:"fa fa-pencil text-warning",attrs:{"data-toggle":"modal","data-target":"#editListModal"+t.listData.id}}),t._v(" "),a("div",{staticClass:"modal fade text-dark",attrs:{id:"editListModal"+t.listData.id,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v('Edit "'+t._s(t.listData.title)+'"')]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.editList(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedListObject.title,expression:"editedListObject.title"}],staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Edit list ..."},domProps:{value:t.editedListObject.title},on:{input:function(e){e.target.composing||t.$set(t.editedListObject,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save changes")])])])])])]),t._v(" "),a("i",{staticClass:"fa fa-trash-o text-danger",on:{click:t.removeList}})]),t._v(" "),a("h4",{staticClass:"lists p-2 text-capitalize"},[a("u",[t._v(t._s(t.listData.title))])]),t._v(" "),t._l(t.tasks,(function(e){return a("tasks",{key:e.id,staticClass:"rounded border border-warning bg-secondary text-white m-2",attrs:{taskData:e,listId:t.listData.id,draggable:"true"}})})),t._v(" "),a("div",{staticClass:"input-group my-4 d-flex justify-content-center"},[a("div",{staticClass:"input-group-prepend"}),t._v(" "),a("form",{on:{submit:t.createTask}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTaskObject.title,expression:"newTaskObject.title"}],staticClass:"form-control text-capitalize",attrs:{type:"text",placeholder:"Enter New Task ..."},domProps:{value:t.newTaskObject.title},on:{input:function(e){e.target.composing||t.$set(t.newTaskObject,"title",e.target.value)}}})])])],2)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{dragstart:function(e){t.moveTask()}}},[a("div",{staticClass:"tasks d-flex justify-content-between p-2"},[a("i",{staticClass:"fa fa-pencil text-warning",attrs:{"data-toggle":"modal","data-target":"#editTaskModal"+t.taskData.id}}),t._v(" "),a("div",{staticClass:"modal fade text-dark",attrs:{id:"editTaskModal"+t.taskData.id,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v('Edit "'+t._s(t.taskData.title)+'"')]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.editTask(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedTaskObject.title,expression:"editedTaskObject.title"}],staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Edit list ..."},domProps:{value:t.editedTaskObject.title},on:{input:function(e){e.target.composing||t.$set(t.editedTaskObject,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save changes")])])])])])]),t._v(" "),a("h5",{staticClass:"text-capitalize",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Click to show/hide Comments"},on:{click:function(e){t.commentsClicked=!t.commentsClicked}}},[t._v(t._s(t.taskData.title))]),t._v(" "),a("i",{staticClass:"fa fa-trash-o text-danger",on:{click:t.deleteTask}})]),t._v(" "),t.commentsClicked?a("div",[t._l(t.comments,(function(e){return a("comment",{key:e.id,attrs:{commentData:e,taskId:t.taskData.id,listId:t.taskData.listId}})})),t._v(" "),a("div",{staticClass:"input-group my-4 d-flex justify-content-center"},[a("div",{staticClass:"input-group-prepend"}),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommentObject.comment,expression:"newCommentObject.comment"}],staticClass:"form-control text-capitalize",attrs:{type:"text",placeholder:"Enter New Comment ..."},domProps:{value:t.newCommentObject.comment},on:{input:function(e){e.target.composing||t.$set(t.newCommentObject,"comment",e.target.value)}}})])])],2):t._e()])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("div",{staticClass:"card border border-secondary rounded shadow m-1",staticStyle:{overflow:"auto display:block","border-bottom":"solid 1px black"}},[a("div",{staticClass:"card-body border border-danger bg-secondary text-wrap text-capitalize"},[t._v("\n      "+t._s(t.commentData.user)+": "+t._s(t.commentData.comment)+"\n      "),a("i",{staticClass:"fa fa-trash-o text-danger",on:{click:t.deleteComment}})])])])},J=[],R={name:"comment",props:["commentData","taskId","listId"],data(){return{}},computed:{user(){}},methods:{deleteComment(){this.$store.dispatch("deleteComment",{body:this.commentData,id:this.commentData._id,taskId:this.taskId,listId:this.listId})}},components:{}},K=R,W=Object(m["a"])(K,U,J,!1,null,"71d8b9de",null),H=W.exports,Y={mounted(){$((function(){$('[data-toggle="tooltip"]').tooltip()}))},name:"tasks",props:["taskData","listId"],data(){return{commentsClicked:!1,editedTaskObject:{},newCommentObject:{}}},computed:{user(){return this.$store.state.user},comments(){return this.taskData.comments},lists(){return this.$store.state.lists}},methods:{moveTask(){event.dataTransfer.setData("data",JSON.stringify(this.taskData)),event.dataTransfer.setData("list",this.listId)},createComment(){this.$store.dispatch("createComment",{comment:this.newCommentObject.comment,user:this.user.name,taskId:this.taskData.id,listId:this.taskData.listId}),this.newCommentObject.comment=""},deleteTask(){this.$store.dispatch("deleteTask",this.taskData)},editTask(){this.$store.dispatch("editTask",{id:this.taskData.id,title:this.editedTaskObject.title,listId:this.taskData.listId,creatorEmail:this.user.email}),$("#editTaskModal"+this.taskData.id).modal("hide"),$(".modal-backdrop").remove()}},components:{comment:H}},q=Y,F=Object(m["a"])(q,S,A,!1,null,"a9144f5e",null),X=F.exports,G={name:"lists",props:["listData"],data(){return{editedListObject:{},newTaskObject:{}}},mounted(){this.$store.dispatch("getTasks",this.listData.id)},computed:{tasks(){return this.$store.state.tasks[this.listData.id]},user(){return this.$store.state.user}},methods:{moveTask(){let t=JSON.parse(event.dataTransfer.getData("data")),e={oldListId:event.dataTransfer.getData("list"),taskToMove:t,newListId:this.listData.id};console.log(e),this.$store.dispatch("moveTask",e)},removeList(){this.$store.dispatch("deleteList",this.listData)},editList(){this.$store.dispatch("editList",{id:this.listData.id,title:this.editedListObject.title,boardId:this.listData.boardId,creatorEmail:this.user.email}),$("#editListModal"+this.listData.id).modal("hide"),$(".modal-backdrop").remove()},createTask(){this.$store.dispatch("createTask",{title:this.newTaskObject.title,listId:this.listData.id,creatorEmail:this.user.email}),this.newTaskObject.title=""}},components:{tasks:X}},Q=G,V=Object(m["a"])(Q,N,z,!1,null,"22988570",null),Z=V.exports,tt={name:"board",props:["boardData"],data(){return{newListObject:{}}},mounted(){this.$store.dispatch("getBoard",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId)},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists},user(){return this.$store.state.user}},methods:{getInfo(){console.log(this.$store.state.activeBoard)},addNewList(){this.$store.dispatch("addList",{title:this.newListObject.title,boardId:this.board.id,creatorEmail:this.user.email}),this.newListObject.title=""}},components:{lists:Z}},et=tt,at=(a("4951"),Object(m["a"])(et,M,P,!1,null,"6b4df884",null)),st=at.exports;s["a"].use(C["a"]);var it=new C["a"]({routes:[{path:"/",name:"home",component:O},{path:"/boards",name:"boards",component:E,beforeEnter:b["b"]},{path:"/boards/:boardId",name:"board",component:st,beforeEnter:b["b"]},{path:"*",redirect:"/"}]}),ot=a("2f62");s["a"].use(ot["a"]);let rt=window.location.host.includes("localhost")?"//localhost:3000/":"/",nt=l.a.create({baseURL:rt+"api/",timeout:3e3,withCredentials:!0});var dt=new ot["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.tasks)},removeFromList(t,e){let a=t.lists.find(t=>t.id==e.oldListId);a.tasks=a.tasks.filter(t=>t.id!=e.taskToMove.id)},addToList(t,e){let a=t.lists.find(t=>t.id==e.newListId);a.tasks.push(e.taskToMove)}},actions:{setBearer({},t){nt.defaults.headers.authorization=t},resetBearer(){nt.defaults.headers.authorization=""},async moveTask({commit:t,dispatch:e},a){try{a.taskToMove.listId=a.newListId;await nt.put("tasks/"+a.taskToMove.id,a.taskToMove);e("getTasks",a.oldListId),e("getTasks",a.newListId)}catch(s){console.error(s)}},async getProfile({commit:t}){try{let e=await nt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){nt.get("boards").then(e=>{console.log(e.data),t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},a){nt.post("boards",a).then(t=>{e("getBoards")})},async getBoard({commit:t},e){try{let a=await nt.get("boards/"+e);console.log("got the boards",a.data),t("setActiveBoard",a.data)}catch(a){console.error(a)}},async deleteBoard({dispatch:t},e){try{let a=await nt.delete("boards/"+e);console.log("deleted a board",a.data),t("getBoards",e)}catch(a){console.error(a)}},async editBoard({dispatch:t},e){try{console.log("boardData",e);let a=await nt.put("boards/"+e.id,e);console.log("edited the board",a.data),t("getBoards",e.boardId)}catch(a){console.error(a)}},async getLists({commit:t},e){try{let a=await nt.get("boards/"+e+"/lists");console.log("got the lists",a.data),t("setLists",a.data)}catch(a){console.error(a)}},async addList({dispatch:t},e){try{let a=await nt.post("lists/",e);console.log("added a list",a.data),t("getLists",e.boardId)}catch(a){console.error(a)}},async deleteList({dispatch:t},e){try{let a=await nt.delete("lists/"+e.id);console.log("deleted a list",a.data),t("getLists",e.boardId)}catch(a){console.error(a)}},async editList({dispatch:t},e){try{console.log("listData",e);let a=await nt.put("lists/"+e.id,e);console.log("edited the list",a.data),t("getLists",e.boardId)}catch(a){console.error(a)}},async getTasks({commit:t},e){try{let a=await nt.get("lists/"+e+"/tasks");console.log("got the tasks",a.data),t("setTasks",{listId:e,tasks:a.data})}catch(a){console.error(a)}},async createTask({commit:t,dispatch:e},a){try{let t=await nt.post("tasks/",a);console.log("created new task",t.data),e("getTasks",a.listId)}catch(s){console.error(s)}},async deleteTask({dispatch:t},e){try{let a=await nt.delete("tasks/"+e.id);console.log("deleted a task",a.data),t("getTasks",e.listId)}catch(a){console.error(a)}},async editTask({dispatch:t},e){try{let a=await nt.put("tasks/"+e.id,e);console.log("edited the task",a.data),t("getTasks",e.listId)}catch(a){console.error(a)}},async createComment({commit:t,dispatch:e},a){try{let t=await nt.post("tasks/"+a.taskId+"/comments",a);console.log("created new comment",t.data),e("getTasks",a.listId)}catch(s){console.error(s)}},async deleteComment({dispatch:t},e){try{let a=await nt.delete("tasks/"+e.taskId+"/comments/"+e.id);console.log("deleted a comment",a.data),t("getTasks",e.listId)}catch(a){console.error(a)}}}});const lt="bcw-cody.us.auth0.com",ct="https://kanbanapi.com",ut="kcsNdzeYDX8Ys5aRyv21vgvKtcLnl1fK";s["a"].use(b["a"],{domain:lt,clientId:ut,audience:ct,onRedirectCallback:t=>{it.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:it,store:dt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"735b":function(t,e,a){"use strict";var s=a("3fa6"),i=a.n(s);i.a},"9c0c":function(t,e,a){},da2a:function(t,e,a){}});