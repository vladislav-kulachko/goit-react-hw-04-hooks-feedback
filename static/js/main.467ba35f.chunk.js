(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(t,e,n){t.exports={title:"Statistics_title__2Ci_0",list:"Statistics_list__1REAx",item:"Statistics_item__Csy5v",value:"Statistics_value__U7Dbz"}},function(t,e,n){t.exports={container:"Buttons_container__32ppj",button:"Buttons_button__2RuPm",blink:"Buttons_blink__2hWZe",puls:"Buttons_puls__Kc8RJ"}},,function(t,e,n){t.exports={section:"Section_section__2y9DA",title:"Section_title__2-v9d"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),i=n.n(a),r=(n(12),n(2)),u=(n(13),n(4)),l=n.n(u),o=n(0);function j(t){var e=t.handleIncrement,n=t.state,s=Object(c.useState)("0px"),a=Object(r.a)(s,2),i=a[0],u=a[1],j=Object(c.useState)("0px"),b=Object(r.a)(j,2),d=b[0],h=b[1],O=Object(c.useState)("0px"),f=Object(r.a)(O,2),x=f[0],m=f[1],p=Object(c.useState)("0px"),_=Object(r.a)(p,2),v=_[0],k=_[1],S=[],g=Array.from(n.keys());return Object(o.jsx)("div",{className:l.a.container,children:g.map((function(t,n){return Object(o.jsxs)("button",{id:t,ref:function(t){return S.push(t)},type:"button",className:l.a.button,onMouseDown:function(c){return function(t,n,c){var s=Math.max(S[n].clientWidth,S[n].clientHeight),a=S[n].getBoundingClientRect(),i=t.clientX-Math.round(a.left)-s/2+"px",r=t.clientY-Math.round(a.top)-s/2+"px";u(r),h(i),m(s+"px"),k(s+"px"),e(c)}(c,n,t)},children:[t,Object(o.jsx)("div",{className:l.a.blink,style:{top:i,left:d,width:x,height:v}})]},t)}))})}var b=n(3),d=n.n(b);function h(t){var e=t.state,n=t.children,c=Array.from(e.values()),s=Array.from(e.keys());return Object(o.jsx)(o.Fragment,{children:c.find((function(t){return t>0}))?Object(o.jsxs)("div",{className:d.a.container,children:[Object(o.jsx)("h2",{className:d.a.title,children:"Statistics:"}),Object(o.jsxs)("ul",{className:d.a.list,children:[s.map((function(t,e){return Object(o.jsxs)("li",{className:d.a.item,children:[t.slice(0,1).toUpperCase()+t.slice(1),":"," ",Object(o.jsx)("span",{className:d.a.value,children:c[e]})]},t)})),Object(o.jsxs)("li",{className:d.a.item,children:["Total: ",Object(o.jsx)("span",{className:d.a.value,children:c.reduce((function(t,e){return t+e}))})]}),Object(o.jsxs)("li",{className:d.a.item,children:["Positive feedback:"," ",Object(o.jsxs)("span",{className:d.a.value,children:[function(){var t=c.reduce((function(t,e){return t+e}));return Math.round(c[0]/t*100)}(),"%"]})]})]})]}):Object(o.jsx)(o.Fragment,{children:n})})}var O=n(6),f=n.n(O);function x(t){var e=t.children;return Object(o.jsxs)("section",{className:f.a.section,children:[Object(o.jsx)("h1",{className:f.a.title,children:"Please, leave feedback!"}),e]})}function m(t){var e=t.message;return Object(o.jsx)("p",{children:e})}function p(){var t=Object(c.useState)(new Map([["good",0],["neutral",0],["bad",0]])),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(1),i=Object(r.a)(a,2),u=i[0],l=i[1],b=Object(c.useState)(1),d=Object(r.a)(b,2),O=d[0],f=d[1],p=Object(c.useState)(1),_=Object(r.a)(p,2),v=_[0],k=_[1];return Object(o.jsxs)(x,{children:[Object(o.jsx)(j,{state:n,handleIncrement:function(t){switch(t){case"good":l((function(t){return t+1})),s(n.set(t,u));break;case"neutral":f((function(t){return t+1})),s(n.set(t,O));break;case"bad":k((function(t){return t+1})),s(n.set(t,v));break;default:throw new Error}}}),Object(o.jsx)(h,{state:n,children:Object(o.jsx)(m,{message:"O my God, urgently click!"})})]})}i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.467ba35f.chunk.js.map