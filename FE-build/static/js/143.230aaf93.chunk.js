(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[143],{2058:function(e,t,c){"use strict";c.r(t);var s=c(16),i=c(0),a=c(39),l=c(13),d=c.n(l),n=c(1573),b=c(1574),j=c(15),o=c(1334),p=c(2);t.default=function(){const e=Object(a.c)(),{userRuleGlobal:t}=Object(a.d)((e=>e.userReducer)),{category:c}=Object(a.d)((e=>e.objectsManagementReducer)),[s,l]=Object(i.useState)(void 0),[u,O]=Object(i.useState)([]),[f,h]=Object(i.useState)(!1),_=e=>!!t.find((t=>"expose_api_delete_file"===d.a.get(t,"domain","")&&t.actions.includes(e)));return Object(i.useEffect)((()=>{if(Object.keys(c).length>0){let e=[];Object.entries(c).forEach((t=>{let[c,s]=t;s.forEach((t=>{t.Status&&e.push({label:t.Name,value:t._id})}))})),O(e)}}),[c]),Object(p.jsxs)(r,{children:[Object(p.jsx)(o.a,{nameBreadcrumb:"Expose API Delete File",onChange:t=>{l(t),e(Object(j.Hb)({object_id:t,page:0,limit:1e5,expose_api_type:"delete_file"}))},listObjects:u}),s&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{type:"delete_file",selectedObject:s,isEdit:f,setIsEdit:h,checkRule:_}),Object(p.jsx)(b.a,{type:"delete_file",selectedObject:s,setIsEdit:h,checkRule:_})]})]})};const r=s.b.div.withConfig({displayName:"exposeAPIDelete__Wrapper",componentId:"sc-qys75o-0"})(["padding:16px 24px;"])}}]);
//# sourceMappingURL=143.230aaf93.chunk.js.map