(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=(a(16),a(9)),s=a(1),i=a(2),u=a(4),d=a(3),m=a(5),h=a(7),k=function(e){var t=e.tasks,a=e.deleteTask,n=t.length?t.map(function(e){return c.a.createElement(h.a,null,c.a.createElement("div",{key:e.id,className:"center"},c.a.createElement("span",{onClick:function(){a(e.id)}},e.content)))}):c.a.createElement(h.a,null,c.a.createElement("p",{className:"center"},"No tasks."));return c.a.createElement("div",{className:"task list"},c.a.createElement(h.a,null,c.a.createElement("h4",null,n)))},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={content:""},a.handleChange=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addTask(a.state),a.setState({content:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"What do you have to do?"),c.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={date:new Date},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateClock()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"updateClock",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,this.state.date.toLocaleTimeString()))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={tasks:[]},a.deleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e});a.setState({tasks:t})},a.addTask=function(e){e.id=Math.random();var t=[].concat(Object(o.a)(a.state.tasks),[e]);a.setState({tasks:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("h1",null,"Tasks"),c.a.createElement(f,{clock:!0}),c.a.createElement(k,{tasks:this.state.tasks,deleteTask:this.deleteTask}),c.a.createElement(v,{addTask:this.addTask}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4a7e970d.chunk.js.map