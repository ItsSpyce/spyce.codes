(this["webpackJsonpspyce.codes"]=this["webpackJsonpspyce.codes"]||[]).push([[0],{21:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),o=e.n(c),i=e(12),a=e.n(i),u=(e(21),e.p,e(2)),s={BLUE_100:"#208fc9",BLUE_200:"#00a1d0",BLUE_300:"#00b2d3",BLUE_400:"#00c2d0",BLUE_500:"#2cd1ca",BG_100:"#2a303b",BG_200:"#383d46",BG_300:"#757575",FG_100:"white",RED_100:"#cc3333",fontFamily:"source-code-pro, monospace",fontSize:"16pt",breakpointMobile:"688px",breakpointTablet:"992px",breakpointDesktop:"1312px"},b=e(8),d=e(4),l=e.p+"static/media/minus.595a628f.svg",p=e.p+"static/media/square.8c2fd5ee.svg",j=e.p+"static/media/x.6c9a4ba7.svg",f=e(3);function h(){var n=Object(f.a)(["\n  background-color: ",";\n"]);return h=function(){return n},n}function x(){var n=Object(f.a)(["\n  height: 16px;\n  width: 16px;\n  margin: 6px;\n"]);return x=function(){return n},n}function O(){var n=Object(f.a)(["\n  border-radius: 50%;\n  background-color: #757575;\n  display: inline;\n  height: 28px;\n  width: 28px;\n  cursor: pointer;\n"]);return O=function(){return n},n}function m(){var n=Object(f.a)(["\n  list-style: none;\n  display: flex;\n  flex: auto;\n  align-items: center;\n  justify-content: space-around;\n  padding: 4px 8px;\n  width: 130px;\n"]);return m=function(){return n},n}function g(){var n=Object(f.a)(["\n  padding: 2px 4px;\n  background-color: ",";\n  position: relative;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n\n  &::after {\n    content: '';\n    background-image: linear-gradient(\n      to right top,\n      #208fc9,\n      #00a1d0,\n      #00b2d3,\n      #00c2d0,\n      #2cd1ca\n    );\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 2px;\n  }\n"]);return g=function(){return n},n}var v=u.b.div(g(),(function(n){return n.theme.BG_200})),y=u.b.ul(m()),k=u.b.div(O()),w=u.b.img(x()),_=Object(u.b)(k)(h(),(function(n){return n.theme.RED_100})),B=function(){return Object(r.jsx)(v,{children:Object(r.jsxs)(y,{children:[Object(r.jsx)(_,{children:Object(r.jsx)(w,{src:j})}),Object(r.jsx)(k,{children:Object(r.jsx)(w,{src:l})}),Object(r.jsx)(k,{children:Object(r.jsx)(w,{src:p})})]})})};function S(){var n=Object(f.a)(["\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  display: inline;\n  color: white;\n  font-family: source-code-pro, monospace;\n  font-size: 16pt;\n  display: inline;\n"]);return S=function(){return n},n}function C(){var n=Object(f.a)(["\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  display: inline;\n  color: white;\n  font-family: source-code-pro, monospace;\n  font-size: 16pt;\n  display: inline;\n"]);return C=function(){return n},n}function E(){var n=Object(f.a)(["\n  color: ",";\n  display: inline;\n\n  &::after {\n    color: white;\n    content: ':';\n    margin-right: 4px;\n  }\n"]);return E=function(){return n},n}function F(){var n=Object(f.a)([""]);return F=function(){return n},n}var L=u.b.div(F()),U=u.b.div(E(),(function(n){return n.theme.BLUE_400})),D=u.b.input(C()),T=u.b.div(S()),G=function(n){var t=n.isPrior,e=(n.result,n.content),o=n.onSubmit,i=n.nextCommand,a=n.priorCommand,u=Object(c.useState)(e||""),s=Object(d.a)(u,2),b=s[0],l=s[1];return Object(r.jsxs)(L,{children:[Object(r.jsx)(U,{children:"visitor@spyce.codes"}),!t&&Object(r.jsx)(D,{value:b,onChange:function(n){return l(n.currentTarget.value)},onKeyDown:function(n){switch(n.keyCode){case 13:n.preventDefault(),o(b),l("");break;case 38:return n.preventDefault(),l(a());case 40:return n.preventDefault(),l(i())}},autoFocus:!0}),t&&Object(r.jsx)(T,{children:e})]})};function P(){var n=Object(f.a)([""]);return P=function(){return n},n}function I(){var n=Object(f.a)(["\n  display: block;\n\n  & > * {\n    display: inline;\n  }\n"]);return I=function(){return n},n}function z(){var n=Object(f.a)(["\n  padding: 20px 8px;\n  overflow-y: auto;\n"]);return z=function(){return n},n}function M(){var n=Object(f.a)(["\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\n  background-color: ",";\n  height: 800px;\n  width: 900px;\n  margin: 20vh auto 0 auto;\n\n  a {\n    color: ",";\n\n    &::before {\n      content: '#';\n    }\n  }\n\n  @media (max-width: ",") {\n    width: 500px;\n  }\n"]);return M=function(){return n},n}var J=u.b.div(M(),(function(n){return n.theme.BG_100}),(function(n){return n.theme.BLUE_100}),(function(n){return n.theme.breakpointTablet})),R=u.b.div(z()),q=u.b.div(I()),H=u.b.div(P()),K=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Login successful"}),Object(r.jsx)("p",{children:'Welcome to spyce.codes! For a full list of commands, use "?" or "help"'})]})},V={help:function(){return Object.keys(V)},"?":function(){return Object.keys(V)},links:function(){return[Object(r.jsx)("a",{href:"https://twitter.com/SpyceCodes",target:"_blank",rel:"noreferrer",children:"Twitter"}),Object(r.jsx)("a",{href:"https://twitch.tv/SpyceVT",target:"_blank",rel:"noreferrer",children:"Twitch"}),Object(r.jsx)("a",{href:"https://github.com/ItsSpyce",target:"_blank",rel:"noreferrer",children:"GitHub"})]},about:function(){return["My my...curious, aren't we?","I'm just a vtuber here to show people the fun of coding and playing games, hopefully you'll stick around?"]}},W=function(){var n=Object(c.useState)([]),t=Object(d.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)([]),a=Object(d.a)(i,2),u=a[0],s=a[1],l=Object(c.useState)([]),p=Object(d.a)(l,2),j=p[0],f=p[1],h=Object(c.useState)(j.length),x=Object(d.a)(h,2),O=x[0],m=x[1];return Object(r.jsxs)(J,{children:[Object(r.jsx)(B,{}),Object(r.jsxs)(R,{children:[Object(r.jsx)(K,{}),e.map((function(n,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(G,{content:n,isPrior:!0}),Object(r.jsx)(r.Fragment,{children:u[t].map((function(n,t){return Object(r.jsx)(H,{children:n},t)}))})]},t)})),Object(r.jsx)(q,{children:Object(r.jsx)(G,{isPrior:!1,onSubmit:function(n){f([].concat(Object(b.a)(j),[n]));var t=V[n.trim()],r=t?t():['Unknown command. Use "?" or "help" for a list of commands'];s([].concat(Object(b.a)(u),[r])),o([].concat(Object(b.a)(e),[n])),m(e.length+1)},nextCommand:function(){if(O===j.length-1)return j[O]||"";var n=O+1;return m(n),j[n]},priorCommand:function(){if(0===O)return j[0]||"";var n=O-1;return m(n),j[n]}})})]})]})};var A=function(){return Object(r.jsx)(u.a,{theme:s,children:Object(r.jsx)(W,{})})},N=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),o(n),i(n)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),N()}},[[24,1,2]]]);
//# sourceMappingURL=main.ac8d4fff.chunk.js.map