(this.webpackJsonpapi_test=this.webpackJsonpapi_test||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(7),r=a.n(s),l=(a(14),a(5)),o=a(19),i=a(20),m=a(21),u=a(22),p=(a(15),function(){var e=Object(n.useState)({name:"",age:"",count:""}),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)("hello"),p=Object(l.a)(r,2),h=p[0],E=p[1];return c.a.createElement(o.a,{fluid:!0,className:"text-center"},c.a.createElement(i.a,null,c.a.createElement(m.a,{xs:12},c.a.createElement("h4",{className:"text-danger"},"Enter First Name:"),c.a.createElement("input",{onChange:function(e){E(e.target.value)},className:"p-1 mb-2"})),c.a.createElement(m.a,{xs:12},c.a.createElement(u.a,{onClick:function(){var e=new XMLHttpRequest;e.onload=function(){if(200===this.status){var e=JSON.parse(this.responseText);s({name:e.name,age:e.age,count:e.count}),console.log(this.getResponseHeader("X-Rate-Limit-Remaining"))}},e.open("GET","https://api.agify.io?name=".concat(h)),e.send()}},"See Age")),c.a.createElement("hr",{className:"seperator m-3"}),c.a.createElement(m.a,{xs:12},c.a.createElement("h3",{className:"text-success display-4"},"Results"),c.a.createElement("h5",null,"Name: ",a.name),c.a.createElement("h5",null,"Age: ",a.age),c.a.createElement("h5",null,"Occurances: ",a.count))))});var h=function(){return c.a.createElement("div",{className:"wrapper text-center"},c.a.createElement("h1",{className:"display-3"},"Age Predictor"),c.a.createElement("p",{className:"lead"},"A simple application that predicts the age of a person based on their first name using an external API"),c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);r.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4ec096ab.chunk.js.map