(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),u=(a(29),a(7)),o=a(5),i=a(8),m=a(9),s=a(11),d=a(10),E=a(12),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard"},l.a.createElement("h1",null,"Dashboard"))}}]),t}(n.Component),h=a(21),p=a.n(h),k=function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},l.a.createElement("h3",{className:"uk-card-title"},e.title),l.a.createElement("p",null,e.body)))},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={products:[]},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.zalando.com/articles").then((function(e){return e.json()})).then((function(t){return e.setState({products:t})}))}},{key:"render",value:function(){var e=this.state.products.map((function(e){return l.a.createElement(k,{key:e.id,id:e.id,title:e.title,body:e.body})}));return l.a.createElement("div",null,l.a.createElement("h1",{className:"uk-text-center"},"Home"),l.a.createElement("div",{className:"uk-child-width-1-3@m uk-grid-small uk-grid-match products","data-uk-grid":!0},e))}}]),t}(n.Component);var f=function(){return l.a.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},l.a.createElement("div",{className:"uk-navbar-right"},l.a.createElement("ul",{className:"uk-navbar-nav"},l.a.createElement("li",null,l.a.createElement("a",{"data-uk-toggle":"target: #login-modal"},"Log in")))))},y=function(e){return l.a.createElement("div",{id:"login-modal","data-uk-modal":!0},l.a.createElement("div",{className:"uk-modal-dialog"},l.a.createElement("button",{className:"uk-modal-close-default",type:"button","data-uk-close":!0}),l.a.createElement("div",{className:"uk-modal-header"},l.a.createElement("h2",null,"Log in")),l.a.createElement("div",{className:"uk-modal-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"uk-margin"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{className:"uk-input",type:"text"})),l.a.createElement("div",{className:"uk-margin"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{className:"uk-input",type:"text"})))),l.a.createElement("div",{className:"uk-modal-footer uk-text-right"},l.a.createElement(u.b,{to:"/dashboard",onClick:e.login,className:"uk-button uk-button-primary",type:"button"},"Save"))))},g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).closeModal=function(){p.a.modal("#login-modal").hide()},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"website"},l.a.createElement(f,null),l.a.createElement(y,{login:this.closeModal}),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/about"},l.a.createElement("h1",null,"About")),l.a.createElement(o.a,{path:"/"},l.a.createElement(v,null))))}}]),t}(n.Component);a(37);var N=function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/dashboard"},l.a.createElement(b,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(g,null)))))};c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.632fdc40.chunk.js.map