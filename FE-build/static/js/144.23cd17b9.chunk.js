(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[144],{1809:function(e,t,a){"use strict";a.r(t);var o=a(16),c=a(0),n=a(39),r=a(13),d=a.n(r),p=a(1573),i=a(1574),s=a(15),b=a(1334),u=a(389),l=a(2);const h=[{label:"Update",value:"update"},{label:"Batch update",value:"batch_update"}];t.default=function(){const e=Object(n.c)(),{userRuleGlobal:t}=Object(n.d)((e=>e.userReducer)),{category:a}=Object(n.d)((e=>e.objectsManagementReducer)),[o,r]=Object(c.useState)(void 0),[m,O]=Object(c.useState)([]),[f,g]=Object(c.useState)("update"),[w,x]=Object(c.useState)(!1),v=e=>!!t.find((t=>"expose_api_update"===d.a.get(t,"domain","")&&t.actions.includes(e)));return Object(c.useEffect)((()=>{f&&o&&e(Object(s.Hb)({object_id:o,page:0,limit:1e5,expose_api_type:f}))}),[f,o,e]),Object(c.useEffect)((()=>{if(Object.keys(a).length>0){let e=[];Object.entries(a).forEach((t=>{let[a,o]=t;o.forEach((t=>{t.Status&&e.push({label:t.Name,value:t._id})}))})),O(e)}}),[a]),Object(l.jsxs)(j,{children:[Object(l.jsx)(b.a,{nameBreadcrumb:"Expose API Update",onChange:e=>{r(e)},listObjects:m}),o&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u.a.Group,{options:h,onChange:e=>g(e.target.value),value:f,optionType:"button"}),Object(l.jsx)(p.a,{type:f,selectedObject:o,isEdit:w,setIsEdit:x,checkRule:v}),Object(l.jsx)(i.a,{type:f,selectedObject:o,setIsEdit:x,checkRule:v})]})]})};const j=o.b.div.withConfig({displayName:"exposeAPIUpdate__Wrapper",componentId:"sc-2h5kd6-0"})(["padding:16px 24px;.ant-radio-group{margin-bottom:16px;}.ant-radio-button-wrapper:hover{color:",";}.ant-radio-button-wrapper-checked:not( .ant-radio-button-wrapper-disabled ):hover,.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){color:"," !important;border-color:"," !important;}.ant-radio-button-wrapper-checked:not( .ant-radio-button-wrapper-disabled ):focus-within{box-shadow:none;}.ant-radio-button-wrapper-checked:not( .ant-radio-button-wrapper-disabled )::before{background-color:",";}"],(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.main))}}]);
//# sourceMappingURL=144.23cd17b9.chunk.js.map