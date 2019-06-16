(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t(65)},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),s=t.n(l),c=t(31),o=t(32),i=t(36),m=t(33),u=t(37),d=t(2),p=t(7),b=t(8),h=t.n(b),v=t(14),f=t(9),E=t(15),N=t(12),g=t(10),k=t.n(g),y=function(e){var a=e.storeToken,t=e.getToken,l=e.setActiveUser,s=Object(n.useState)({firstName:"",lastName:"",email:"",companyName:"",password:"",password2:"",role:"",selectedOption:""}),c=Object(N.a)(s,2),o=c[0],i=c[1],m=Object(n.useState)({toDashboard:!1}),u=Object(N.a)(m,2),b=u[0],g=u[1],y=o.firstName,w=o.lastName,x=o.email,O=o.companyName,j=o.password,S=o.password2,T=o.role,C=o.selectedOption,U=b.toDashboard,A=function(e){var a;i(Object(E.a)({},o,(a={},Object(f.a)(a,e.target.name,e.target.value),Object(f.a)(a,"selectedOption",e.target.value),a)))},D=function(){var e=Object(v.a)(h.a.mark(function e(n){var r,s,c,o,i,m,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="/api/employees",s="/api/employees/me",j===S){e.next=9;break}alert("Passwords do not match"),e.next=27;break;case 9:return c={headers:{"Content-Type":"application/json"}},o=JSON.stringify({firstName:y,lastName:w,companyName:O,email:x,password:j,role:T}),console.log("JSON form data: "+o),e.prev=12,e.next=15,k.a.post(r,o,c);case 15:i=e.sent,a(i.data.token),m=t(),u={"x-auth-token":m},console.log("Token set in headers object"),console.log("toDashboard: "+U),setTimeout(Object(v.a)(h.a.mark(function e(){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("setTimeout contents triggered"),e.next=3,k.a.get(s,{headers:u});case 3:a=e.sent,console.log("Got employee"),l(a),g({toDashboard:!0});case 7:case"end":return e.stop()}},e)})),1e4),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(12),console.log(e.t0.response.data);case 27:case"end":return e.stop()}},e,null,[[12,24]])}));return function(a){return e.apply(this,arguments)}}();return U?r.a.createElement(p.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"has-text-black",style:{fontSize:"40px"}},"Welcome to Simple Service Agreement"),r.a.createElement("h2",{className:"has-text-black",style:{fontSize:"20px"}},"Register or ",r.a.createElement(d.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"card"},r.a.createElement("form",{onSubmit:function(e){return D(e)}},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"First Name"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"text",placeholder:"First Name",name:"firstName",value:y,onChange:function(e){return A(e)},required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Last Name"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Last Name",name:"lastName",value:w,onChange:function(e){return A(e)},required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Company Name"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Company Name",name:"companyName",value:O,onChange:function(e){return A(e)},required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Email",name:"email",value:x,onChange:function(e){return A(e)},required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",placeholder:"Password",name:"password",value:j,onChange:function(e){return A(e)},required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Confirm Password"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",placeholder:"Confirm Password",name:"password2",value:S,onChange:function(e){return A(e)},required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"radio"},"Technician",r.a.createElement("input",{type:"radio",name:"role",value:"technician",checked:"technician"===C,onChange:function(e){return A(e)}})),r.a.createElement("label",{className:"radio"},"Dispatcher",r.a.createElement("input",{type:"radio",name:"role",value:"dispatcher",checked:"dispatcher"===C,onChange:function(e){return A(e)}})),r.a.createElement("label",{className:"radio"},"Dealer",r.a.createElement("input",{type:"radio",name:"role",value:"dealer",checked:"dealer"===C,onChange:function(e){return A(e)}}))),r.a.createElement("input",{type:"submit",className:"button is-success"}))))},w=function(e){var a=e.storeToken,t=e.getToken,l=e.setActiveUser,s=Object(n.useState)({email:"",password:""}),c=Object(N.a)(s,2),o=c[0],i=c[1],m=Object(n.useState)({toDashboard:!1}),u=Object(N.a)(m,2),b=u[0],g=u[1],y=o.email,w=o.password,x=b.toDashboard,O={fontSize:"20px"},j=function(e){i(Object(E.a)({},o,Object(f.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(v.a)(h.a.mark(function e(n){var r,s,c,o,i,m,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r="/api/employees/me",s={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:y,password:w}),e.prev=7,e.next=10,k.a.post("/api/auth",c,s);case 10:return o=e.sent,a(o.data.token),i=t(),m={"x-auth-token":i},e.next=16,k.a.get(r,{headers:m});case 16:u=e.sent,l(u),g({toDashboard:!0}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),console.log(e.t0.message);case 24:case"end":return e.stop()}},e,null,[[7,21]])}));return function(a){return e.apply(this,arguments)}}();return x?r.a.createElement(p.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"has-text-black",style:{fontSize:"40px"}},"Welcome to Simple Service Agreement"),r.a.createElement("h2",{className:"has-text-black",style:O},"Login or ",r.a.createElement(d.b,{to:"/"},"Register")),r.a.createElement("h2",{className:"has-text-black",style:O},r.a.createElement(d.b,{to:"/dashboard"},"Dashboard")),r.a.createElement("div",{className:"card"},r.a.createElement("form",{onSubmit:function(e){return S(e)}},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Email",name:"email",value:y,onChange:function(e){return j(e)},required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",placeholder:"Password",name:"password",value:w,onChange:function(e){return j(e)},required:!0}))),r.a.createElement("input",{type:"submit",className:"button is-success"}))))},x=function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(d.b,{to:"/dashboard",className:"navbar-item"},"Dashboard"),r.a.createElement(d.b,{to:"/dashboard",className:"navbar-item"},"New Service Call"),r.a.createElement(d.b,{to:"/dashboard",className:"navbar-item"},"New Customer"),r.a.createElement(d.b,{to:"/dashboard",className:"navbar-item"},"All Customers"),r.a.createElement(d.b,{to:"/dashboard",className:"navbar-item"},"Look Up Customer"),r.a.createElement(d.b,{to:"/dashboard",className:"navbar-item"},"All Technicians")))},O=function(e){e.setActiveUser;var a=e.activeUser;e.getToken;return null===a?r.a.createElement("h1",null,"You must be logged in to do that"):r.a.createElement(n.Fragment,null,r.a.createElement(x,null),r.a.createElement("h1",null,"Welcome back, ",console.log("Active user: "+a)," ",a?a.data.firstName:"<name>","."))},j=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={activeUser:null,tokenStored:!1},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"storeToken",value:function(e){localStorage.setItem("token",e),this.setState({tokenStored:!0}),console.log("Token stored")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"setActiveUser",value:function(e){this.setState({activeUser:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{exact:!0,path:"/",render:function(a){return r.a.createElement(y,{storeToken:function(a){return e.storeToken(a)},setActiveUser:function(a){return e.setActiveUser(a)},getToken:function(){return e.getToken()}})}}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/login",render:function(a){return r.a.createElement(w,{storeToken:function(a){return e.storeToken(a)},setActiveUser:function(a){return e.setActiveUser(a)},getToken:function(){return e.getToken()}})}}),r.a.createElement(p.b,{exact:!0,path:"/dashboard",render:function(a){return r.a.createElement(O,{activeUser:e.state.activeUser})}}))))}}]),a}(n.Component);s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ef7185ab.chunk.js.map