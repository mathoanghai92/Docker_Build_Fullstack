(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[147],{2054:function(e,t,c){"use strict";c.r(t);var i=c(16),o=c(0),a=c.n(o),n=c(1387),r=c.n(n),s=c(148),l=c(39),d=c(15),b=c(2);const j=Object(n.WidthProvider)(r.a),f=a.a.memo((e=>{let{i:t}=e,c=Object(l.c)();return Object(o.useEffect)((()=>{c(Object(d.hc)({object_id:"obj_hopdong_38293910",placement:"middle"}))}),[t,c]),Object(b.jsx)("span",{children:t})})),g=i.b.div.withConfig({displayName:"reactGrid__Wrap",componentId:"sc-8dglc6-0"})(["width:100%;"]),m=i.b.div.withConfig({displayName:"reactGrid__CustomLayout",componentId:"sc-8dglc6-1"})(["background:#0bb865 !important;font-size:18px;color:#fff;display:flex;justify-content:center;align-items:center;"]);t.default=()=>{const[e,t]=Object(o.useState)([]);Object(o.useEffect)((()=>{if(localStorage.getItem("local-grid")){const e=JSON.parse(localStorage.getItem("local-grid"));t(e)}}),[]),Object(o.useEffect)((()=>{localStorage.setItem("local-grid",JSON.stringify(e))}),[e]);return Object(b.jsxs)(g,{children:[Object(b.jsx)(s.a,{danger:!0,onClick:()=>{let c=[...e];c.push({i:Math.random(),x:0,y:0,w:2,h:1}),t(c)},children:"Add"}),Object(b.jsx)(j,{onLayoutChange:e=>{t(e)},children:e.map((c=>Object(b.jsxs)(m,{"data-grid":c,onDoubleClick:()=>{let i=[...e];i=i.filter((e=>e.i!==c.i)),t(i)},children:["Number: ",Object(b.jsx)(f,{i:c.i})]},c.i)))})]})}}}]);
//# sourceMappingURL=147.e37c82ce.chunk.js.map