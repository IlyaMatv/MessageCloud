(this.webpackJsonpcloud=this.webpackJsonpcloud||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports={dropdown:"Navbar_dropdown__1rC1_",dropbtn:"Navbar_dropbtn__170cd",navbar:"Navbar_navbar__1hejU",active:"Navbar_active__2rhy8"}},,,function(e,t,a){e.exports={name:"NameCmp_name__3eazm",gold:"NameCmp_gold__orPZM",nameItem:"NameCmp_nameItem__3H5-v"}},,,,function(e,t,a){e.exports={text:"MessageText_text__1dURR",time:"MessageText_time__3pCMV"}},,,,,,function(e,t,a){e.exports={wrap:"Monday_wrap__3awTT"}},function(e,t,a){e.exports={message:"MessageCloud_message__13Fso"}},function(e,t,a){e.exports={name:"Name_name__28ddV"}},function(e,t,a){e.exports={login:"Login_login__1nzls"}},function(e,t,a){e.exports={error:"LoginAddItem_error__XB666"}},function(e,t,a){e.exports={users:"LoginUsers_users__2TyMp"}},,function(e,t,a){},,function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),c=(a(40),a(41),a(13)),i=a.n(c),l=a(12),u=function(e){return r.a.createElement("div",{className:i.a.dropdown},r.a.createElement("button",{className:i.a.dropbtn},"choose day"),r.a.createElement("nav",{className:i.a.navbar},r.a.createElement(l.b,{to:"/Monday",activeClassName:i.a.active},"Monday"),r.a.createElement(l.b,{to:"/Tuesday",activeClassName:i.a.active},"Tuesday")))},d=a(9),m=a(26),p=a.n(m),f=a(16),v=a.n(f),h=function(e){var t=["\u0431\u0443\u0434\u0434\u0438\u0441\u0442","\u043a\u043e\u043d\u0442\u0440\u0430\u0431\u0430\u043d\u0434\u0438\u0441\u0442","\u0442\u0440\u0430\u043a\u0442\u043e\u0440\u0438\u0441\u0442"].map((function(e,t){return r.a.createElement("div",{key:t,className:1===t?v.a.gold:v.a.nameItem},e)}));return r.a.createElement("div",{className:v.a.name},r.a.createElement("div",null,"\u041c\u0430\u0442\u0432\u0435\u0439\u0447\u0443\u043a \u0418\u043b\u044c\u044f"),t)},k=a(27),E=a.n(k),g=a(28),C=a.n(g),b=function(e){return r.a.createElement("div",{className:C.a.name},"\u0418\u043b\u044c\u044f \u041c\u0430\u0442\u0432\u0435\u0439\u0447\u0443\u043a")},y=a(20),T=a.n(y),_=function(e){return r.a.createElement("div",{className:T.a.text},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia nam incidunt.",r.a.createElement("div",{className:T.a.time},"21:00"))},N=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement(b,null),r.a.createElement(_,null))},O=a(2),j=a(4),S=a(3),A=a(5),w=a(29),x=a.n(w),I=a(15),F=a(30),M=a.n(F),V=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",error:!1},a.onTitleChanged=function(e){a.setState({title:e.currentTarget.value,error:!1})},a.onAddName=function(){var e=a.state.title;a.setState({title:""});var t=[].concat(Object(I.a)(a.props.users),[e]);""===e?(a.setState({error:!0}),alert("enter your name")):(a.setState((function(){return{error:!1}}),a.props.addUser(t)),alert("Welcome ".concat(e)))},a.onKeyPress=function(e){"Enter"===e.key&&a.onAddName()},a.render=function(){var e=!0===a.state.error?M.a.error:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:e,value:a.state.title,onKeyPress:a.onKeyPress,onChange:a.onTitleChanged,type:"text",placeholder:"your name"}),r.a.createElement("button",{onClick:a.onAddName},"click!"))},a}return Object(A.a)(t,e),t}(r.a.Component),L=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.count))},U=a(31),D=a.n(U),H=function(e){var t=e.users.map((function(e){return"".concat(e,"; ")}));return r.a.createElement("div",{className:D.a.users},t)},P=function(e){return r.a.createElement("button",{onClick:e.deleteUser},"delete")},K=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={count:0,users:[]},a.addUser=function(e){a.setState({count:a.state.count+1,users:e})},a.deleteUser=function(){a.setState({count:0,users:[]})},a.render=function(){return r.a.createElement("div",{className:x.a.login},r.a.createElement(L,{count:a.state.count}),r.a.createElement(V,{addUser:a.addUser,count:a.state.count,users:a.state.users}),r.a.createElement(H,{users:a.state.users}),r.a.createElement(P,{deleteUser:a.deleteUser}))},a}return Object(A.a)(t,e),t}(r.a.Component),B=function(e){return r.a.createElement("div",{className:p.a.wrap},r.a.createElement(h,null),r.a.createElement(N,null),r.a.createElement(K,null))},J=a(34),W=a(32),z=(a(11),function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1},a.activateEditMode=function(){a.setState({editMode:!0})},a.deActivateEditMode=function(){a.setState({editMode:!1})},a.onIsDoneChanged=function(e){a.props.onTaskStatusChanged(a.props.task.id,e.currentTarget.checked)},a.onTitleChanged=function(e){a.props.changeTitle(a.props.task.id,e.currentTarget.value)},a.render=function(){var e=a.props.task.isDone?"todoList-task done":"todoList-task";return r.a.createElement("div",{className:e},r.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanged}),r.a.createElement("span",null,a.props.task.id," : "),a.state.editMode?r.a.createElement("input",{onChange:a.onTitleChanged,onBlur:a.deActivateEditMode,autoFocus:!0,value:a.props.task.title}):r.a.createElement("span",{onClick:a.activateEditMode},a.props.task.title),r.a.createElement("span",null," priority - ",a.props.task.priority))},a}return Object(A.a)(t,e),t}(r.a.Component)),R=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=a.props.tasks.map((function(e){return r.a.createElement(z,{key:e.id,changeTitle:a.props.changeTitle,task:e,onTaskStatusChanged:a.props.onTaskStatusChanged})}));return r.a.createElement("div",{className:"todoList-tasks"},e)},a}return Object(A.a)(t,e),t}(r.a.Component),q=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={isHidden:!1},a.onAllFilterClick=function(){a.props.onFilterChanged("All")},a.onCompletedFilterClick=function(){a.props.onFilterChanged("Completed")},a.onActiveFilterClick=function(){a.props.onFilterChanged("Active")},a.onShowFiltersClick=function(){a.setState({isHidden:!1})},a.onHideFiltersClick=function(){a.setState({isHidden:!0})},a.render=function(){var e="All"===a.props.filterValue?"filter-active":"",t="Completed"===a.props.filterValue?"filter-active":"",n="Active"===a.props.filterValue?"filter-active":"";return r.a.createElement("div",{className:"todoList-footer"},!a.state.isHidden&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a.onAllFilterClick,className:e},"All"),r.a.createElement("button",{onClick:a.onCompletedFilterClick,className:t},"Completed"),r.a.createElement("button",{onClick:a.onActiveFilterClick,className:n},"Active")),!a.state.isHidden&&r.a.createElement("span",{onClick:a.onHideFiltersClick},"hide"),a.state.isHidden&&r.a.createElement("span",{onClick:a.onShowFiltersClick},"show"))},a}return Object(A.a)(t,e),t}(r.a.Component),X=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={error:!1,title:""},a.onAddItemClick=function(){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.addItem(e))},a.onTitleChanged=function(e){a.setState({error:!1,title:e.currentTarget.value})},a.onKeyPress=function(e){"Enter"===e.key&&a.onAddItemClick()},a.render=function(){return r.a.createElement("div",{className:"addNewItemForm"},r.a.createElement("input",{className:a.state.error?"error":"",onKeyPress:a.onKeyPress,type:"text",placeholder:"New item name",onChange:a.onTitleChanged,value:a.state.title}),r.a.createElement("button",{onClick:a.onAddItemClick},"Add"),r.a.createElement("button",{onClick:a.props.deleteTask},"delete"))},a}return Object(A.a)(t,e),t}(r.a.Component),Z=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={error:!1,title:""},a.onAddTaskClick=function(){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.onTaskAdded(e))},a.onTitleChanged=function(e){a.setState({error:!1,title:e.currentTarget.value})},a.onKeyPress=function(e){"Enter"===e.key&&a.onAddTaskClick()},a.render=function(){return r.a.createElement("h3",{className:"todoList-header__title"},a.props.title)},a}return Object(A.a)(t,e),t}(r.a.Component),$=function(e,t){localStorage.setItem(e,JSON.stringify(t))},G=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[],filterValue:"All"},a.nextTaskId=0,a.addTask=function(e){var t={id:a.nextTaskId,title:e,isDone:!1,priority:"low"};a.nextTaskId++;var n=[].concat(Object(I.a)(a.state.tasks),[t]);a.setState({tasks:n},(function(){$("our-state",a.state)}))},a.deleteTask=function(){a.setState({tasks:[]},localStorage.removeItem("our-state")),a.nextTaskId=0},a.onFilterChanged=function(e){a.setState({filterValue:e},$("our-state",a.state))},a.changeTask=function(e,t){var n=a.state.tasks.map((function(a){return a.id!==e?a:Object(J.a)({},a,{},t)}));a.setState({tasks:n})},a.onTaskStatusChanged=function(e,t){a.changeTask(e,{isDone:t})},a.onTitleChanged=function(e,t){a.changeTask(e,{title:t})},a.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"todoList"},r.a.createElement("div",{className:"todoList-header"},r.a.createElement(Z,{title:a.props.title}),r.a.createElement(X,{addItem:a.addTask,deleteTask:a.deleteTask})),r.a.createElement(R,{onTaskStatusChanged:a.onTaskStatusChanged,changeTitle:a.onTitleChanged,tasks:a.state.tasks.filter((function(e){return"All"===a.state.filterValue||("Active"===a.state.filterValue?!1===e.isDone:"Completed"===a.state.filterValue?!0===e.isDone:void 0)}))}),r.a.createElement(q,{onFilterChanged:a.onFilterChanged,filterValue:a.state.filterValue})))},a}return Object(A.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(e,t){var a=localStorage.getItem(e);return a&&(t=JSON.parse(a)),t}("our-state",this.state);this.setState(t,(function(){t.tasks.forEach((function(t){t.id>=e.nextTaskId&&(e.nextTaskId=t.id+1)}))}))}}]),t}(r.a.Component),Q=a(33),Y=a.n(Q),ee=function(e){return r.a.createElement("div",{className:Y.a},r.a.createElement(G,null))};var te=function(){return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"navbar_wrap"},r.a.createElement(u,null)),r.a.createElement("div",{className:"content_wrap"},r.a.createElement(d.a,{path:"/Monday",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(d.a,{path:"/Tuesday",render:function(){return r.a.createElement(ee,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l.a,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.382d4faf.chunk.js.map