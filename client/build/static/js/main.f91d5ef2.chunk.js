(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{319:function(e,t,a){e.exports=a(701)},324:function(e,t,a){},565:function(e,t){},567:function(e,t){},600:function(e,t){},601:function(e,t){},700:function(e,t,a){},701:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(315),s=a.n(l),o=(a(324),a(197)),c=a(74),u=a(198),i=a.n(u),m=a(51),d=a(316),p=a(53),f=a(52),b=a.n(f);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=n.a.createContext({authenticated:!0});function y(){return Object(r.useContext)(E)}function h(e){var t=e.children,a=function(){var e=b.a.User.current(),t={authenticated:!!e,user:e},a=Object(r.useState)(t),n=Object(p.a)(a,2),l=n[0],s=n[1];return{user:l,signin:function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=g({},l)).authenticated=!0,r.user=t,s(r),a&&"function"===typeof a&&a();case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),signup:function(e,t){var a=g({},l);a.authenticated=!0,a.user=e,s(a),t&&"function"===typeof t&&t()},signout:function(e){var t=g({},l);b.a.User.logOut().then((function(){t.authenticated=!1,t.user=null,s(t)})),e&&"function"===typeof e&&e()}}}();return n.a.createElement(E.Provider,{value:a},t)}var O=a(71),k=a(72),j=function(){function e(){Object(O.a)(this,e),this.config={appId:"myAppId",masterKey:"myMasterKey",serverUrl:"http://tests.pacee.net/react/parse"},this.parse=b.a,this.parse.initialize(this.config.appId,"",this.config.masterKey),this.parse.serverURL=this.config.serverUrl}return Object(k.a)(e,[{key:"getParse",value:function(){return this.parse}}]),e}(),w=n.a.createContext();function N(){return Object(r.useContext)(w)}function P(e){var t=e.children;return n.a.createElement(w.Provider,{value:new j},t)}var D=a(102),S=a(101),C=a(103),x=function(e){function t(){return Object(O.a)(this,t),Object(D.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"dashboard"},n.a.createElement("h1",null,"Dashboard"))}}]),t}(r.Component),U=a(73),T=a.n(U),L=function(e){return n.a.createElement("div",{key:e.id},n.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},n.a.createElement("h3",{className:"uk-card-title"},e.title),n.a.createElement("p",null,e.body)))},A=function(e){function t(){var e,a;Object(O.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(D.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(n)))).state={products:[]},a}return Object(C.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.zalando.com/articles").then((function(e){return e.json()})).then((function(t){return e.setState({products:t})}))}},{key:"render",value:function(){var e=this.state.products.map((function(e){return n.a.createElement(L,{key:e.id,id:e.id,title:e.title,body:e.body})}));return n.a.createElement("div",null,n.a.createElement("h1",{className:"uk-text-center"},"Home"),n.a.createElement("div",{className:"uk-child-width-1-3@m uk-grid-small uk-grid-match products","data-uk-grid":!0},e))}}]),t}(r.Component);var I=function(){var e=y();return n.a.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},n.a.createElement("div",{className:"uk-navbar-right"},e.user.authenticated?n.a.createElement("ul",{className:"uk-navbar-nav"},n.a.createElement("li",null,n.a.createElement("a",{onClick:e.signout},"Logout"))):n.a.createElement("ul",{className:"uk-navbar-nav"},n.a.createElement("li",null,n.a.createElement("a",{"data-uk-toggle":"target: #login-modal"},"Log in")),n.a.createElement("li",null,n.a.createElement("a",{"data-uk-toggle":"target: #register-modal"},"Sign up")))))};function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){var t=y(),a=N().getParse(),l=Object(r.useState)({username:{value:"",error:{status:!1,msg:""}},password:{value:"",error:{status:!1,msg:""}},response:{error:{status:"",msg:""}}}),s=Object(p.a)(l,2),o=s[0],c=s[1],u=function(e){var t=e.target,a=K({},o);a[t.name].value=t.value,c(a)},i=function(e,t,a,r){var n=K({},o);n[e].error.msg=a,n[e].error.status=t,n[e].error.code=r,c(n)};return n.a.createElement("div",{id:"login-modal","data-uk-modal":!0},n.a.createElement("div",{className:"uk-modal-dialog"},n.a.createElement("button",{className:"uk-modal-close-default",type:"button","data-uk-close":!0}),n.a.createElement("div",{className:"uk-modal-header"},n.a.createElement("h2",null,"Log in")),n.a.createElement("div",{className:"uk-modal-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"uk-margin"},n.a.createElement("label",null,"Username"),n.a.createElement("input",{className:"uk-input",type:"text",name:"username",onChange:function(e){u(e)}}),o.username.error.status?n.a.createElement("p",{style:{color:"red"}},o.username.error.msg):""),n.a.createElement("div",{className:"uk-margin"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{className:"uk-input",type:"password",name:"password",onChange:function(e){u(e)}}),o.password.error.status?n.a.createElement("p",{style:{color:"red"}},o.password.error.msg):"")),n.a.createElement("div",{className:"uk-margin"},n.a.createElement("a",{"data-uk-toggle":"target: #resetpwd-modal"},"forgotten password"))),n.a.createElement("div",{className:"uk-modal-footer uk-text-right"},n.a.createElement("button",{onClick:function(){!function(){if(o.username.value?i("username",!1,""):i("username",!0,"The field needs to be filled in"),o.password.value?i("password",!1,""):i("password",!0,"The field needs to be filled in"),!o.username.error.status&&!o.password.error.status){var e={username:o.username.value,password:o.password.value};a.User.logIn(e.username,e.password).then((function(e){t.signin(e,(function(){T.a.modal("#login-modal").hide()}))})).catch((function(e){var t=e.message;return i("response",!0,t,e.code)}))}}()},className:"uk-button uk-button-primary",type:"button"},"Log in"),o.response.error.status?n.a.createElement("p",{style:{color:"red"}},o.response.error.msg):"",205===o.response.error.code&&n.a.createElement("a",{"data-uk-toggle":"target: #resendmail-modal"},"Resend onfirmation mail."))))};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=function(e){var t=y(),a=(N().getParse(),Object(r.useState)({username:{value:"",error:{status:!1,msg:""}},email:{value:"",error:{status:!1,msg:""}},password:{value:"",error:{status:!1,msg:""}},response:{error:{status:"",msg:""}}})),l=Object(p.a)(a,2),s=l[0],o=l[1],c=function(e){var t=e.target,a=J({},s);a[t.name].value=t.value,o(a)},u=function(e,t,a){var r=J({},s);r[e].error.msg=a,r[e].error.status=t,o(r)};return n.a.createElement("div",{id:"register-modal","data-uk-modal":!0},n.a.createElement("div",{className:"uk-modal-dialog"},n.a.createElement("button",{className:"uk-modal-close-default",type:"button","data-uk-close":!0}),n.a.createElement("div",{className:"uk-modal-header"},n.a.createElement("h2",null,"Log in")),n.a.createElement("div",{className:"uk-modal-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"uk-margin"},n.a.createElement("label",null,"Username"),n.a.createElement("input",{className:"uk-input",type:"text",name:"username",onChange:function(e){c(e)}}),s.username.error.status?n.a.createElement("p",{style:{color:"red"}},s.username.error.msg):""),n.a.createElement("div",{className:"uk-margin"},n.a.createElement("label",null,"email"),n.a.createElement("input",{className:"uk-input",type:"text",name:"email",onChange:function(e){c(e)}}),s.email.error.status?n.a.createElement("p",{style:{color:"red"}},s.email.error.msg):""),n.a.createElement("div",{className:"uk-margin"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{className:"uk-input",type:"password",name:"password",onChange:function(e){c(e)}}),s.password.error.status?n.a.createElement("p",{style:{color:"red"}},s.password.error.msg):""))),n.a.createElement("div",{className:"uk-modal-footer uk-text-right"},n.a.createElement("button",{onClick:function(){!function(){if(s.username.value?u("username",!1,""):u("username",!0,"The field needs to be filled in"),s.email.value?u("email",!1,""):u("email",!0,"The field needs to be filled in"),s.password.value?u("password",!1,""):u("password",!0,"The field needs to be filled in"),!s.username.error.status&&!s.email.error.status&&!s.password.error.status){var e={username:s.username.value,email:s.email.value,password:s.password.value},a=new b.a.User;a.set("username",e.username),a.set("password",e.password),a.set("email",e.email),a.signUp().then((function(e){t.signup(e,(function(e){T.a.modal("#register-modal").hide()}))})).catch((function(e){return u("response",!0,e.message)}))}}()},className:"uk-button uk-button-primary",type:"button"},"Save"),s.response.error.status?n.a.createElement("p",{style:{color:"red"}},s.response.error.msg):"")))};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=function(e){var t=Object(r.useState)({email:{value:"",error:{status:!1,msg:""}},response:{error:{status:"",msg:""}}}),a=Object(p.a)(t,2),l=a[0],s=a[1],o=function(e,t,a){var r=H({},l);r[e].error.msg=a,r[e].error.status=t,s(r)};return n.a.createElement("div",{id:"resetpwd-modal","data-uk-modal":!0},n.a.createElement("div",{className:"uk-modal-dialog"},n.a.createElement("button",{className:"uk-modal-close-default",type:"button","data-uk-close":!0}),n.a.createElement("div",{className:"uk-modal-header"},n.a.createElement("h2",null,"Reset password")),n.a.createElement("div",{className:"uk-modal-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"uk-margin"},n.a.createElement("label",null,"email"),n.a.createElement("input",{className:"uk-input",type:"text",name:"email",onChange:function(e){!function(e){var t=e.target,a=H({},l);a[t.name].value=t.value,s(a)}(e)}}),l.email.error.status?n.a.createElement("p",{style:{color:"red"}},l.email.error.msg):""))),n.a.createElement("div",{className:"uk-modal-footer uk-text-right"},n.a.createElement("button",{onClick:function(){!function(){if(l.email.value?o("email",!1,""):o("email",!0,"The field needs to be filled in"),!l.email.error.status){var e={email:l.email.value};b.a.User.requestPasswordReset(e.email).then((function(){alert("reset email has been sent"),T.a.modal("#register-modal").hide()})).catch((function(e){return o("response",!0,e.message)}))}}()},className:"uk-button uk-button-primary",type:"button"},"Save"),l.response.error.status?n.a.createElement("p",{style:{color:"red"}},l.response.error.msg):"")))};function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(e){var t=Object(r.useState)({email:{value:"",error:{status:!1,msg:""}},response:{error:{status:"",msg:""}}}),a=Object(p.a)(t,2),l=a[0],s=a[1],o=function(e,t,a){var r=Q({},l);r[e].error.msg=a,r[e].error.status=t,s(r)};return n.a.createElement("div",{id:"resendmail-modal","data-uk-modal":!0},n.a.createElement("div",{className:"uk-modal-dialog"},n.a.createElement("button",{className:"uk-modal-close-default",type:"button","data-uk-close":!0}),n.a.createElement("div",{className:"uk-modal-header"},n.a.createElement("h2",null,"Resend confirmation email")),n.a.createElement("div",{className:"uk-modal-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"uk-margin"},n.a.createElement("label",null,"email"),n.a.createElement("input",{className:"uk-input",type:"text",name:"email",onChange:function(e){!function(e){var t=e.target,a=Q({},l);a[t.name].value=t.value,s(a)}(e)}}),l.email.error.status?n.a.createElement("p",{style:{color:"red"}},l.email.error.msg):""))),n.a.createElement("div",{className:"uk-modal-footer uk-text-right"},n.a.createElement("button",{onClick:function(){!function(){if(l.email.value?o("email",!1,""):o("email",!0,"The field needs to be filled in"),!l.email.error.status){l.email.value;console.log("ok")}}()},className:"uk-button uk-button-primary",type:"button"},"Save"),l.response.error.status?n.a.createElement("p",{style:{color:"red"}},l.response.error.msg):"")))},W=function(e){function t(){var e,a;Object(O.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(D.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(n)))).closeModal=function(){T.a.modal("#login-modal").hide()},a}return Object(C.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"website"},n.a.createElement(I,null),n.a.createElement(M,null),n.a.createElement(q,null),n.a.createElement(F,null),n.a.createElement(V,null),n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/about"},n.a.createElement("h1",null,"About")),n.a.createElement(c.a,{path:"/"},n.a.createElement(A,null))))}}]),t}(r.Component);a(700);var X=function(){return n.a.createElement(P,null,n.a.createElement(h,null,n.a.createElement(o.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/dashboard"},n.a.createElement(x,null)),n.a.createElement(c.a,{path:"/"},n.a.createElement(W,null)))))))};s.a.render(n.a.createElement(X,null),document.getElementById("root"))}},[[319,1,2]]]);
//# sourceMappingURL=main.f91d5ef2.chunk.js.map