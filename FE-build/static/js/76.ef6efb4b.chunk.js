(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[76],{1262:function(e,t,a){"use strict";t.a=a.p+"static/media/deleteObject.73bd03c7.png"},1263:function(e,t,a){"use strict";var n,c,o,i,l,r,d,s=a(21),p=a(102),b=a.n(p),j=a(320),m=a.n(j),u=a(1262),h=(a(0),a(39)),_=a(3),x=a(285),f=a(16),g=a(480),O=a(1229),y=a(2);const v=e=>{let{dataDelete:t,title:a,decs:n,methodDelete:c,setShowModalDelete:o,isLoading:i,mask:l,loadData:r,setPositionLogo:d,openConfirm:s,setOpenConfirm:p,type:b,onDelete:j}=e;const m=Object(h.c)(),{t:f}=Object(g.a)(),{showModalConfirmDelete:O}=Object(x.d)((e=>e.globalReducer)),v=()=>{"custom-view"===b&&p(!1),m(Object(_.setShowModalConfirmDelete)(!1)),o&&o(!0)};return Object(y.jsxs)(q,{title:f("common.confirmAction"),visible:"custom-view"===b?s:O,mask:l,onCancel:()=>{v()},width:400,footer:null,children:[Object(y.jsxs)(C,{children:[Object(y.jsx)("img",{alt:"",src:u.a}),Object(y.jsxs)(F,{children:[f("common.confirmDelete")," ",a,"?"]}),Object(y.jsx)(P,{children:n})]}),Object(y.jsxs)(k,{children:[Object(y.jsx)(I,{size:"large",htmlType:"submit",loading:i,onClick:()=>{c&&m(c({...t})),r(),m(Object(_.setShowModalConfirmDelete)(!1)),j&&j(),d&&d(t),"custom-view"===b&&p(!1)},children:f("common.delete")}),Object(y.jsx)(w,{size:"large",onClick:()=>{v()},children:f("common.cancel")})]})]})};t.a=Object(O.a)()(v),v.defaultProps={loadData:()=>{},type:"",openConfirm:!1,setOpenConfirm:()=>{}};const k=f.b.div(n||(n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 34px;\n"]))),I=Object(f.b)(b.a)(c||(c=Object(s.a)(["\n  background-color: ",";\n  color: #fff;\n  margin-right: 16px;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.darker)),w=Object(f.b)(b.a)(o||(o=Object(s.a)(["\n  background-color: #fff;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.darker)),C=f.b.div(i||(i=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    width: 70px;\n    margin-bottom: 16px;\n  }\n"]))),F=f.b.span(l||(l=Object(s.a)(["\n  font-family: var(--roboto-500);\n  font-size: 18px;\n  line-height: 26px;\n  color: #2c2c2c;\n  text-align: center;\n"]))),P=f.b.span(r||(r=Object(s.a)(["\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #595959;\n"]))),q=Object(f.b)(m.a)(d||(d=Object(s.a)(["\n  .ant-modal-header {\n    border-radius: 10px 10px 0 0;\n    background: #f2f4f5;\n    padding: 7px 24px;\n  }\n\n  .ant-modal-title {\n    font-family: var(--roboto-700);\n  }\n\n  .ant-modal-close-x {\n    height: 36.6px;\n    line-height: 36.6px;\n\n    .anticon {\n      color: #141414;\n    }\n  }\n\n  .ant-modal-content {\n    border-radius: 10px;\n  }\n"])))},1264:function(e,t,a){"use strict";t.a=a.p+"static/media/delete.9999fdd9.svg"},1267:function(e,t,a){"use strict";var n=a(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(1269));t.default=c.default},1269:function(e,t,a){"use strict";var n=a(24).default,c=a(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(44)),i=c(a(34)),l=c(a(108)),r=c(a(11)),d=c(a(236)),s=n(a(0)),p=a(61),b=c(a(251)),j=a(158),m=(c(a(93)),c(a(1270))),u=c(a(1271)),h=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};function _(e,t,a,n){var c=a.indexOf(e)===a.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}))}(e,t);return c?s.createElement("span",null,o):s.createElement("a",{href:"#/".concat(n.join("/"))},o)}var x=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},f=function(e,t,a){var n=(0,l.default)(e),c=x(t||"",a);return c&&n.push(c),n},g=function(e){var t,a=e.prefixCls,n=e.separator,c=void 0===n?"/":n,l=e.style,u=e.className,g=e.routes,O=e.children,y=e.itemRender,v=void 0===y?_:y,k=e.params,I=void 0===k?{}:k,w=h(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=s.useContext(p.ConfigContext),F=C.getPrefixCls,P=C.direction,q=F("breadcrumb",a);if(g&&g.length>0){var S=[];t=g.map((function(e){var t,a=x(e.path,I);a&&S.push(a),e.children&&e.children.length&&(t=s.createElement(b.default,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:v(e,I,g,f(S,e.path,I))}}))}));var n={separator:c};return t&&(n.overlay=t),s.createElement(m.default,(0,i.default)({},n,{key:a||e.breadcrumbName}),v(e,I,g,S))}))}else O&&(t=(0,d.default)(O).map((function(e,t){return e?(0,j.cloneElement)(e,{separator:c,key:t}):e})));var A=(0,r.default)(q,(0,o.default)({},"".concat(q,"-rtl"),"rtl"===P),u);return s.createElement("nav",(0,i.default)({className:A,style:l},w),s.createElement("ol",null,t))};g.Item=m.default,g.Separator=u.default;t.default=g},1270:function(e,t,a){"use strict";var n=a(24).default,c=a(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(34)),i=c(a(483)),l=n(a(0)),r=(c(a(93)),a(61)),d=c(a(485)),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},p=function(e){var t=e.prefixCls,a=e.separator,n=void 0===a?"/":a,c=e.children,p=e.menu,b=e.overlay,j=e.dropdownProps,m=s(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),u=(0,l.useContext(r.ConfigContext).getPrefixCls)("breadcrumb",t);var h;return h=function(t){if(p||b){var a=(0,o.default)({},j);return"overlay"in e&&(a.overlay=b),l.createElement(d.default,(0,o.default)({menu:p,placement:"bottom"},a),l.createElement("span",{className:"".concat(u,"-overlay-link")},t,l.createElement(i.default,null)))}return t}(h="href"in m?l.createElement("a",(0,o.default)({className:"".concat(u,"-link")},m),c):l.createElement("span",(0,o.default)({className:"".concat(u,"-link")},m),c)),void 0!==c&&null!==c?l.createElement("li",null,h,n&&l.createElement("span",{className:"".concat(u,"-separator")},n)):null};p.__ANT_BREADCRUMB_ITEM=!0;t.default=p},1271:function(e,t,a){"use strict";var n=a(24).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=a(61),i=function(e){var t=e.children,a=(0,c.useContext(o.ConfigContext).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(a,"-separator")},t||"/")};i.__ANT_BREADCRUMB_SEPARATOR=!0;t.default=i},1283:function(e,t,a){"use strict";t.a=a.p+"static/media/edit.688907bc.svg"},1302:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(720);t.default=n.Col},1340:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(720);t.default=n.Row},1405:function(e,t,a){"use strict";t.a=a.p+"static/media/details.cc90d5bf.svg"},1738:function(e,t,a){"use strict";t.a=a.p+"static/media/empty-dynamic-button.0f0c7938.webp"},2114:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(0),o=a(26),i=a(39),l=a(480),r=a(1229),d=a(13),s=a.n(d),p=a(1267),b=a.n(p),j=a(399),m=a.n(j),u=a(102),h=a.n(u),_=a(123),x=a.n(_),f=a(484),g=a.n(f),O=a(1738),y=a(1283),v=a(1264),k=a(1405),I=a(3),w=a(86),C=a(1263),F=a(320),P=a.n(F),q=a(250),S=a.n(q),A=a(210),E=a.n(A),N=a(486),D=a.n(N),M=a(719),T=a.n(M),B=a(1340),R=a.n(B),z=a(1302),W=a.n(z),V=a(2);const K=[{label:"Create",value:"create"},{label:"Update",value:"update"},{label:"Check",value:"check"}],L=[{label:"Call",value:"call"},{label:"Email",value:"email"},{label:"IC",value:"ic"}],U=[{label:"Basic",value:"basic"},{label:"Token",value:"token"}];var J=Object(r.a)()((function(){const[e]=S.a.useForm(),{t:t}=Object(l.a)(),a=Object(i.c)(),[n,o]=Object(c.useState)(""),[r,d]=Object(c.useState)(""),[p,b]=Object(c.useState)([]),[j,m]=Object(c.useState)([]),[u,_]=Object(c.useState)({contact:!1,ticket:!1,lead:!1}),[f,g]=Object(c.useState)({requiredFields:[],optionalFields:[]}),[O,y]=Object(c.useState)({requiredFields:[],optionalFields:[]}),[k,I]=Object(c.useState)({requiredFields:[],optionalFields:[]}),{showModalSetting:C,objectFields:F,detailsExposeAPI:P,allFields:q}=Object(i.d)((e=>e.exposeAPIInteractionReducer)),A=()=>{a(Object(w.n)(!1)),a(Object(w.e)({})),e.resetFields(),o(""),d(""),b([]),m([]),_({contact:!1,ticket:!1,lead:!1}),g({requiredFields:[],optionalFields:[]}),y({requiredFields:[],optionalFields:[]}),I({requiredFields:[],optionalFields:[]})},N=(e,t,a)=>{let n=s.a.cloneDeep(p);n[t][a]=e,"key"===a&&(n[t].value=e.split("_").slice(1,-1).join("_")),b(n)},M=(e,t,a)=>{let n=s.a.cloneDeep(j);n[t][a]=e,"key"===a&&(n[t].value=e.split("_").slice(1,-1).join("_")),m(n)},B=e=>s.a.map(e,(e=>({key:e.value,label:e.label,value:e.value.split("_").slice(1,-1).join("_"),required:e.required,type:e.type}))),z=(t,a)=>{_({...u,[a]:t.target.checked});let n=[],c=[];switch(a){case"contact":n=s.a.get(F,"obj_contact_00000001",[]).filter((e=>e.required&&"id"!==e.type)),c=B(n),g({requiredFields:[...c],optionalFields:[]}),e.setFieldValue("object_contact_setting_addField",void 0);break;case"ticket":n=s.a.get(F,"obj_ticket_00000001",[]).filter((e=>e.required&&"id"!==e.type)),c=B(n),y({requiredFields:[...c],optionalFields:[]}),e.setFieldValue("object_ticket_setting_addField",void 0);break;case"lead":n=s.a.get(F,"obj_lead_00000001",[]).filter((e=>e.required&&"id"!==e.type)),c=B(n),I({requiredFields:[...c],optionalFields:[]}),e.setFieldValue("object_lead_setting_addField",void 0)}},J=(e,t)=>{let a=[];switch(t){case"contact":a=B(e),g({...f,optionalFields:[...a]});break;case"ticket":a=B(e),y({...O,optionalFields:[...a]});break;case"lead":a=B(e),I({...k,optionalFields:[...a]})}},$=(e,t,a,n)=>{let c=[];switch(n){case"contact":c=a?s.a.cloneDeep(f.requiredFields):s.a.cloneDeep(f.optionalFields),c[t].value=e,g({...f,[a?"requiredFields":"optionalFields"]:[...c]});break;case"ticket":c=a?s.a.cloneDeep(O.requiredFields):s.a.cloneDeep(O.optionalFields),c[t].value=e,y({...O,[a?"requiredFields":"optionalFields"]:[...c]});break;case"lead":c=a?s.a.cloneDeep(k.requiredFields):s.a.cloneDeep(k.optionalFields),c[t].value=e,I({...k,[a?"requiredFields":"optionalFields"]:[...c]})}},ee=e=>{let t="";switch(e){case"call":t="obj_call_interaction_detail_00000001";break;case"email":t="obj_email_interaction_detail_00000001";break;case"ic":t="obj_ic_interaction_detail_00000001"}m([]),d(e),a(Object(w.k)({api_version:"2",object_id:t}))};return Object(c.useEffect)((()=>{s.a.isEmpty(P)||(e.setFieldsValue({expose_api_type:P.expose_api_type,interaction_type:P.interaction_type,authenticationType:P.authentication_type,username:P.username,password:P.password,owner:P.owner,description:P.description,field_return:P.field_return,is_batch_action:P.is_batch_action,object_contact_setting_query_key:P.object_contact_setting.query_key,object_contact_setting_upsert:P.object_contact_setting.upsert,object_contact_setting_addField:P.object_contact_setting.add_field,object_contact_setting_match_with:P.object_contact_setting.match_with,object_ticket_setting_query_key:P.object_ticket_setting.query_key,object_ticket_setting_upsert:P.object_ticket_setting.upsert,object_ticket_setting_addField:P.object_ticket_setting.add_field,object_ticket_setting_match_with:P.object_ticket_setting.match_with,object_lead_setting_query_key:P.object_lead_setting.query_key,object_lead_setting_upsert:P.object_lead_setting.upsert,object_lead_setting_addField:P.object_lead_setting.add_field,object_lead_setting_match_with:P.object_lead_setting.match_with}),ee(P.interaction_type),o(P.authentication_type),d(P.interaction_type),b(P.interaction_mapping),m(P.interaction_detail_mapping),g({requiredFields:P.object_contact_setting.requiredFields,optionalFields:P.object_contact_setting.optionalFields}),y({requiredFields:P.object_ticket_setting.requiredFields,optionalFields:P.object_ticket_setting.optionalFields}),I({requiredFields:P.object_lead_setting.requiredFields,optionalFields:P.object_lead_setting.optionalFields}),_({contact:P.object_contact_setting.upsert,ticket:P.object_ticket_setting.upsert,lead:P.object_lead_setting.upsert}))}),[P,e]),Object(c.useEffect)((()=>{a(Object(w.k)({api_version:"2",object_id:"init"}))}),[a]),Object(V.jsx)(G,{title:t("exposeAPIInteraction.settings"),visible:C,footer:null,width:800,onCancel:A,afterClose:A,children:Object(V.jsxs)(S.a,{form:e,onFinish:e=>{let t={expose_api_type:e.expose_api_type,interaction_type:e.interaction_type,authentication_type:n,username:e.username,password:e.password,owner:e.owner,description:e.description,field_return:e.field_return,is_batch_action:e.is_batch_action,interaction_mapping:p,interaction_detail_mapping:j,object_contact_setting:{query_key:e.object_contact_setting_query_key,upsert:e.object_contact_setting_upsert,add_field:e.object_contact_setting_addField,match_with:e.object_contact_setting_match_with,requiredFields:f.requiredFields,optionalFields:f.optionalFields},object_ticket_setting:{query_key:e.object_ticket_setting_query_key,upsert:e.object_ticket_setting_upsert,add_field:e.object_ticket_setting_addField,match_with:e.object_ticket_setting_match_with,requiredFields:O.requiredFields,optionalFields:O.optionalFields},object_lead_setting:{query_key:e.object_lead_setting_query_key,upsert:e.object_lead_setting_upsert,add_field:e.object_lead_setting_addField,match_with:e.object_lead_setting_match_with,requiredFields:k.requiredFields,optionalFields:k.optionalFields}};s.a.isEmpty(P)?a(Object(w.a)({...t})):a(Object(w.o)({...t,_id:P._id}))},labelCol:{span:8},wrapperCol:{span:16},colon:!1,labelAlign:"left",children:[Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.type"),name:"expose_api_type",rules:[{required:!0,message:t("common.placeholderInput")}],children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:K})}),Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.interactionType"),name:"interaction_type",rules:[{required:!0,message:t("common.placeholderInput")}],children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:L,onChange:ee})}),Object(V.jsx)(S.a.Item,{label:"Authentication type",name:"authenticationType",rules:[{required:!0,message:"Please select authentication type!"}],children:Object(V.jsx)(T.a,{placeholder:"Select authentication type",allowClear:!0,options:U,onChange:e=>(e=>{o(e)})(e)})}),"basic"===n&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(S.a.Item,{label:"User name",name:"username",rules:[{required:!0,message:"Please input user name!"}],children:Object(V.jsx)(E.a,{autocomplete:"new-password"})}),Object(V.jsx)(S.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input password!"}],children:Object(V.jsx)(E.a.Password,{autocomplete:"new-password"})})]}),Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.assignTo"),name:"owner",rules:[{required:!0,message:t("common.placeholderInput")}],children:Object(V.jsx)(E.a,{placeholder:t("common.placeholderInput")})}),Object(V.jsx)(S.a.Item,{label:"Description",name:"description",children:Object(V.jsx)(E.a,{placeholder:t("common.placeholderInput")})}),Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.fieldReturn"),name:"field_return",rules:[{required:!0,message:t("common.placeholderInput")}],children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_interaction_00000001",[])})}),Object(V.jsx)(S.a.Item,{label:"",name:"is_batch_action",valuePropName:"checked",children:Object(V.jsx)(D.a,{disabled:!s.a.isEmpty(P),children:t("exposeAPIInteraction.batchInsert")})}),Object(V.jsxs)(Q,{children:[Object(V.jsx)("legend",{children:"Interaction"}),Object(V.jsxs)(X,{onClick:()=>{b([...p,{key:void 0,value:""}])},children:["+ ",t("exposeAPIInteraction.addKey")]}),Object(V.jsx)("div",{children:p.map(((e,a)=>Object(V.jsxs)(Y,{children:[Object(V.jsx)(T.a,{style:{flex:1},placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_interaction_00000001",[]).filter((e=>"text"===e.type||"select"===e.type||"number"===e.type||"date"===e.type||"datetime-local"===e.type)),onChange:e=>N(e,a,"key"),value:e.key}),Object(V.jsx)(E.a,{style:{flex:1},onChange:e=>N(e.target.value,a,"value"),value:e.value}),Object(V.jsx)(Z,{children:Object(V.jsx)(x.a,{title:"Delete",children:Object(V.jsx)("img",{src:v.a,onClick:()=>(e=>{let t=[...p];t.splice(e,1),b(t)})(a),alt:"delete"})})})]},a)))})]}),Object(V.jsxs)(Q,{children:[Object(V.jsx)("legend",{children:"Interaction details"}),Object(V.jsxs)(X,{onClick:()=>{m([...j,{key:void 0,value:""}])},children:["+ ",t("exposeAPIInteraction.addKey")]}),Object(V.jsx)("div",{children:j.map(((e,a)=>Object(V.jsxs)(Y,{children:[Object(V.jsx)(T.a,{style:{flex:1},placeholder:t("common.placeholderSelect"),options:s.a.get(F,"call"===r?"obj_call_interaction_detail_00000001":"email"===r?"obj_email_interaction_detail_00000001":"ic"===r?"obj_ic_interaction_detail_00000001":"",[]).filter((e=>"text"===e.type||"select"===e.type||"number"===e.type||"date"===e.type||"datetime-local"===e.type)),onChange:e=>M(e,a,"key"),value:e.key}),Object(V.jsx)(E.a,{style:{flex:1},onChange:e=>M(e.target.value,a,"value"),value:e.value}),Object(V.jsx)(Z,{children:Object(V.jsx)(x.a,{title:"Delete",children:Object(V.jsx)("img",{src:v.a,onClick:()=>(e=>{let t=[...j];t.splice(e,1),m(t)})(a),alt:"delete"})})})]},a)))})]}),Object(V.jsxs)("div",{style:{border:"1px solid #ececec",borderRadius:"5px",padding:"24px 24px 0 24px",marginBottom:"24px"},children:[Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.matchContactBy"),name:"object_contact_setting_query_key",children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_contact_00000001",[]),optionFilterProp:"label",showSearch:!0})}),Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.matchWith"),name:"object_contact_setting_match_with",children:Object(V.jsx)(E.a,{placeholder:t("common.placeholderInput")})}),Object(V.jsx)(S.a.Item,{label:"",name:"object_contact_setting_upsert",valuePropName:"checked",children:Object(V.jsx)(D.a,{onChange:e=>z(e,"contact"),children:t("exposeAPIInteraction.createNewContact")})}),u.contact&&Object(V.jsxs)("div",{children:[Object(V.jsx)(S.a.Item,{label:t("workflow.addField"),name:"object_contact_setting_addField",children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_contact_00000001",[]).filter((e=>!e.required)),optionFilterProp:"label",showSearch:!0,mode:"multiple",onChange:(e,t)=>J(t,"contact")})}),f.requiredFields.map(((e,a)=>Object(V.jsxs)(R.a,{children:[Object(V.jsx)(W.a,{span:8,style:{marginBottom:"24px"},children:e.label}),Object(V.jsx)(W.a,{span:16,children:"linkingobject"===e.type?Object(V.jsx)(T.a,{options:s.a.get(q,"obj_contact_00000001",[]),placeholder:t("common.placeholderSelect"),style:{width:"100%"},onChange:e=>{$(e,a,!0,"contact")},value:e.value}):Object(V.jsx)(E.a,{onChange:e=>$(e.target.value,a,!0,"contact"),value:e.value})})]},a))),f.optionalFields.map(((e,a)=>Object(V.jsxs)(R.a,{children:[Object(V.jsx)(W.a,{span:8,style:{marginBottom:"24px"},children:e.label}),Object(V.jsx)(W.a,{span:16,children:"linkingobject"===e.type?Object(V.jsx)(T.a,{options:s.a.get(q,"obj_contact_00000001",[]),placeholder:t("common.placeholderSelect"),style:{width:"100%"},onChange:e=>{$(e,a,!1,"contact")},value:e.value}):Object(V.jsx)(E.a,{onChange:e=>$(e.target.value,a,!1,"contact"),value:e.value})})]},a)))]})]}),Object(V.jsxs)("div",{style:{border:"1px solid #ececec",borderRadius:"5px",padding:"24px 24px 0 24px",marginBottom:"24px"},children:[Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.matchTicketBy"),name:"object_ticket_setting_query_key",children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_ticket_00000001",[]),optionFilterProp:"label",showSearch:!0})}),Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.matchWith"),name:"object_ticket_setting_match_with",children:Object(V.jsx)(E.a,{placeholder:t("common.placeholderInput")})}),Object(V.jsx)(S.a.Item,{label:"",name:"object_ticket_setting_upsert",valuePropName:"checked",children:Object(V.jsx)(D.a,{onChange:e=>z(e,"ticket"),children:t("exposeAPIInteraction.createNewTicket")})}),u.ticket&&Object(V.jsxs)("div",{children:[Object(V.jsx)(S.a.Item,{label:t("workflow.addField"),name:"object_ticket_setting_addField",children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_ticket_00000001",[]).filter((e=>!e.required)),optionFilterProp:"label",showSearch:!0,mode:"multiple",onChange:(e,t)=>J(t,"ticket")})}),O.requiredFields.map(((e,a)=>Object(V.jsxs)(R.a,{children:[Object(V.jsx)(W.a,{span:8,style:{marginBottom:"24px"},children:e.label}),Object(V.jsx)(W.a,{span:16,children:"linkingobject"===e.type?Object(V.jsx)(T.a,{options:s.a.get(q,"obj_ticket_00000001",[]),placeholder:t("common.placeholderSelect"),style:{width:"100%"},onChange:e=>{$(e,a,!0,"ticket")},value:e.value}):Object(V.jsx)(E.a,{onChange:e=>$(e.target.value,a,!0,"ticket"),value:e.value})})]},a))),O.optionalFields.map(((e,a)=>Object(V.jsxs)(R.a,{children:[Object(V.jsx)(W.a,{span:8,style:{marginBottom:"24px"},children:e.label}),Object(V.jsx)(W.a,{span:16,children:"linkingobject"===e.type?Object(V.jsx)(T.a,{options:s.a.get(q,"obj_ticket_00000001",[]),placeholder:t("common.placeholderSelect"),style:{width:"100%"},onChange:e=>{$(e,a,!1,"ticket")},value:e.value}):Object(V.jsx)(E.a,{onChange:e=>$(e.target.value,a,!1,"ticket"),value:e.value})})]},a)))]})]}),Object(V.jsxs)("div",{style:{border:"1px solid #ececec",borderRadius:"5px",padding:"24px 24px 0 24px",marginBottom:"24px"},children:[Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.matchLeadBy"),name:"object_lead_setting_query_key",children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_lead_00000001",[]),optionFilterProp:"label",showSearch:!0})}),Object(V.jsx)(S.a.Item,{label:t("exposeAPIInteraction.matchWith"),name:"object_lead_setting_match_with",children:Object(V.jsx)(E.a,{placeholder:t("common.placeholderInput")})}),Object(V.jsx)(S.a.Item,{label:"",name:"object_lead_setting_upsert",valuePropName:"checked",children:Object(V.jsx)(D.a,{onChange:e=>z(e,"lead"),children:t("exposeAPIInteraction.createNewLead")})}),u.lead&&Object(V.jsxs)("div",{children:[Object(V.jsx)(S.a.Item,{label:t("workflow.addField"),name:"object_lead_setting_addField",children:Object(V.jsx)(T.a,{placeholder:t("common.placeholderSelect"),options:s.a.get(F,"obj_lead_00000001",[]).filter((e=>!e.required)),optionFilterProp:"label",showSearch:!0,mode:"multiple",onChange:(e,t)=>J(t,"lead")})}),k.requiredFields.map(((e,a)=>Object(V.jsxs)(R.a,{children:[Object(V.jsx)(W.a,{span:8,style:{marginBottom:"24px"},children:e.label}),Object(V.jsx)(W.a,{span:16,children:"linkingobject"===e.type?Object(V.jsx)(T.a,{options:s.a.get(q,"obj_lead_00000001",[]),placeholder:t("common.placeholderSelect"),style:{width:"100%"},onChange:e=>{$(e,a,!0,"lead")},value:e.value}):Object(V.jsx)(E.a,{onChange:e=>$(e.target.value,a,!0,"lead"),value:e.value})})]},a))),k.optionalFields.map(((e,a)=>Object(V.jsxs)(R.a,{children:[Object(V.jsx)(W.a,{span:8,style:{marginBottom:"24px"},children:e.label}),Object(V.jsx)(W.a,{span:16,children:"linkingobject"===e.type?Object(V.jsx)(T.a,{options:s.a.get(q,"obj_lead_00000001",[]),placeholder:t("common.placeholderSelect"),style:{width:"100%"},onChange:e=>{$(e,a,!1,"lead")},value:e.value}):Object(V.jsx)(E.a,{onChange:e=>$(e.target.value,a,!1,"lead"),value:e.value})})]},a)))]})]}),Object(V.jsxs)(H,{label:" ",children:[Object(V.jsx)(h.a,{type:"primary",htmlType:"submit",children:t("common.save")}),Object(V.jsx)(h.a,{onClick:A,children:t("common.cancel")})]})]})})}));const G=Object(n.b)(P.a).withConfig({displayName:"ModalSetting__ModalCustom",componentId:"sc-1w5l3lg-0"})([".ant-modal-content{border-radius:10px;}.ant-modal-header{border-radius:10px 10px 0 0;background:#f2f4f5;padding:7px 24px;}.ant-modal-title{font-family:var(--roboto-700);}.ant-modal-close-x{height:36.6px;line-height:36.6px;.anticon{color:#141414;}}.ant-form-item-label > label{font-size:16px;color:#2c2c2c;}.ant-collapse{border:none;background:#fff;}.ant-collapse-item{border-bottom:none;margin-bottom:16px;}.ant-collapse-content{border-top:none;}.ant-collapse-content-box{background:#fafafa;margin-top:16px;display:flex;flex-wrap:wrap;}.ant-input-number{width:100%;}.ant-checkbox-checked .ant-checkbox-inner{background-color:",";border-color:",";}"],(e=>e.theme.main),(e=>e.theme.main)),H=Object(n.b)(S.a.Item).withConfig({displayName:"ModalSetting__WrapButton",componentId:"sc-1w5l3lg-1"})(["margin-bottom:0;.ant-btn{font-size:16px;height:unset;:hover{background:",";color:#fff;}}.ant-btn-primary{margin-right:16px;background:",";border:1px solid ",";color:#fff;}.ant-form-item-control-input-content{display:flex;justify-content:flex-end;}"],(e=>e.theme.darker),(e=>e.theme.main),(e=>e.theme.main)),Q=n.b.fieldset.withConfig({displayName:"ModalSetting__Keys",componentId:"sc-1w5l3lg-2"})(["padding:8px 24px 0 24px;border:1px solid #ececec;border-radius:5px;margin-bottom:24px;legend{width:fit-content;color:",";font-size:14px;padding:0 8px;margin-bottom:0;border-bottom:none;}"],(e=>e.theme.main)),X=n.b.p.withConfig({displayName:"ModalSetting__AddKey",componentId:"sc-1w5l3lg-3"})(["color:",";cursor:pointer;width:fit-content;&:hover{color:",";}"],(e=>e.theme.main),(e=>e.theme.darker)),Y=n.b.div.withConfig({displayName:"ModalSetting__Key",componentId:"sc-1w5l3lg-4"})(["display:flex;column-gap:16px;margin-bottom:16px;"]),Z=n.b.div.withConfig({displayName:"ModalSetting__Delete",componentId:"sc-1w5l3lg-5"})(["background:#ffffff;border:1px solid #d9d9d9;width:40px;height:32px;display:flex;align-items:center;justify-content:center;&:hover{cursor:pointer;background:#eeeeee;}"]);var $=a(715),ee=a(5),te=a(4);var ae=function(){const{TextArea:e}=E.a,[t]=S.a.useForm(),a=Object(i.c)(),{showModalPayload:n,detailsPayload:o}=Object(i.d)((e=>e.exposeAPIInteractionReducer)),{userDetail:l}=Object(i.d)((e=>e.userReducer)),[r,d]=Object(c.useState)(""),p=()=>{a(Object(w.m)(!1)),a(Object(w.g)({}))};return Object(c.useEffect)((()=>{s.a.isEmpty(o)||(d(o.authentication_type),t.setFieldsValue({payload:JSON.stringify(o.payload,null,2),field_return_result:o.field_return,token:o.token,userName:o.username,authenticationType:o.authentication_type,end_point:"".concat(ee.b,"interaction-expose-api/run/").concat(l.tenant_id,"/").concat(o._id)}))}),[o,t,l]),Object(V.jsx)(ne,{title:null!==o&&void 0!==o&&o.description?o.description:"",visible:n,footer:null,width:600,onCancel:p,children:Object(V.jsxs)(S.a,{form:t,onFinish:p,labelCol:{span:6},wrapperCol:{span:18},colon:!1,labelAlign:"left",children:[Object(V.jsx)(S.a.Item,{label:"Field return",name:"field_return_result",children:Object(V.jsx)(T.a,{disabled:!0})}),Object(V.jsx)(S.a.Item,{label:"End point",disabled:!0,name:"end_point",children:Object(V.jsx)(E.a,{disabled:!0})}),Object(V.jsx)(S.a.Item,{label:"Method",disabled:!0,children:Object(V.jsx)(E.a,{disabled:!0,defaultValue:"POST"})}),Object(V.jsx)(S.a.Item,{label:"Authentication",name:"authenticationType",disabled:!0,children:Object(V.jsx)(T.a,{disabled:!0,options:[{label:"Basic",value:"basic"},{label:"Token",value:"token"}]})}),"basic"===r?Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(S.a.Item,{label:"User name",name:"userName",children:Object(V.jsx)(E.a,{disabled:!0})})}):Object(V.jsx)(S.a.Item,{label:"Token",name:"token",children:Object(V.jsx)(E.a,{disabled:!0})}),Object(V.jsxs)(S.a.Item,{label:"Payload",disabled:!0,children:[Object(V.jsx)(S.a.Item,{style:{marginBottom:0},name:"payload",disabled:!0,children:Object(V.jsx)(e,{rows:5,disabled:!0})}),Object(V.jsxs)(oe,{onClick:()=>{navigator.clipboard.writeText(t.getFieldValue("payload")),Object(te.a)("success","Copy payload successfully!")},children:[Object(V.jsx)($.a,{})," Copy"]})]}),Object(V.jsx)(ce,{children:Object(V.jsx)(h.a,{type:"primary",htmlType:"submit",children:"Close"})})]})})};const ne=Object(n.b)(P.a).withConfig({displayName:"ModalPayload__ModalCustom",componentId:"sc-nwcuob-0"})([".ant-modal-content{border-radius:10px;}.ant-modal-header{border-radius:10px 10px 0 0;background:#f2f4f5;padding:7px 24px;}.ant-modal-title{font-family:var(--roboto-700);}.ant-modal-close-x{height:36.6px;line-height:36.6px;.anticon{color:#141414;}}.ant-form-item-label > label{font-size:16px;color:#2c2c2c;}"]),ce=n.b.div.withConfig({displayName:"ModalPayload__WrapButton",componentId:"sc-nwcuob-1"})(["display:flex;justify-content:flex-end;.ant-btn{font-size:16px;height:unset;:hover{background:",";color:#fff;}}.ant-btn-primary{background:",";border:1px solid ",";color:#fff;}"],(e=>e.theme.darker),(e=>e.theme.main),(e=>e.theme.main)),oe=Object(n.b)(h.a).withConfig({displayName:"ModalPayload__CopyButton",componentId:"sc-nwcuob-2"})(["margin-right:16px;position:absolute;bottom:10px;right:-5px;&.ant-btn{font-size:16px;height:unset;:hover{background:",";color:#fff;}}&.ant-btn:active{background:#fff;border:1px solid #d9d9d9;span{color:#000;}}&.ant-btn:focus{background:#fff;border:1px solid #d9d9d9;span{color:#000;}}"],(e=>e.theme.darker));var ie=a(63);t.default=Object(r.a)()((function(e){const t=Object(i.c)(),{t:a}=Object(l.a)(),n=Object(o.o)(),{Column:r}=m.a,{Text:d}=g.a;Object(c.useEffect)((()=>{t(Object(ie.b)("Expose API Interaction"))}),[a]);const{userRuleGlobal:p}=Object(i.d)((e=>e.userReducer)),{listExposeAPI:j}=Object(i.d)((e=>e.exposeAPIInteractionReducer)),[u,h]=Object(c.useState)([]),[_,f]=Object(c.useState)({}),F=e=>!!p.find((t=>"dynamic_button"===s.a.get(t,"domain","")&&t.actions.includes(e))),P=e=>()=>{t(Object(w.d)({expose_api_id:e}))};return Object(c.useEffect)((()=>{t(Object(w.i)())}),[t]),Object(c.useEffect)((()=>{let e=[];j.map((t=>e.push({key:t._id,type:t.expose_api_type,create_date:t.created_date,interaction_type:t.interaction_type,description:t.description}))),setTimeout((()=>{h(e)}),50)}),[t,j]),Object(V.jsxs)(le,{children:[Object(V.jsxs)(re,{children:[Object(V.jsxs)(b.a,{children:[Object(V.jsx)(b.a.Item,{onClick:()=>n("/settings"),children:a("settings.settings")}),Object(V.jsx)(de,{children:"Expose API Interaction"})]}),j.length>0&&F("create")&&Object(V.jsxs)(pe,{onClick:()=>t(Object(w.n)(!0)),children:["+ ",a("exposeAPIInteraction.add")]})]}),0===j.length?Object(V.jsxs)(se,{children:[Object(V.jsx)("img",{src:O.a,alt:"empty"}),Object(V.jsxs)("p",{children:[a("object.noObject")," ",Object(V.jsx)("span",{children:"Expose API Interaction"})]}),F("create")&&Object(V.jsxs)(pe,{onClick:()=>t(Object(w.n)(!0)),children:["+ ",a("exposeAPIInteraction.add")]})]}):Object(V.jsx)(be,{children:Object(V.jsxs)(m.a,{pagination:!1,dataSource:u,scroll:{x:"max-content"},children:[Object(V.jsx)(r,{title:a("coreSetting.type"),dataIndex:"type",render:e=>Object(V.jsx)("span",{style:{textTransform:"capitalize"},children:e})},"type"),Object(V.jsx)(r,{title:a("common.description"),dataIndex:"description",render:e=>Object(V.jsx)(d,{style:{width:"300px"},ellipsis:{tooltip:e},children:e})},"description"),Object(V.jsx)(r,{title:a("exposeAPIInteraction.interactionType"),dataIndex:"interaction_type",render:e=>Object(V.jsx)("span",{style:{textTransform:"capitalize"},children:e})},"interaction_type"),Object(V.jsx)(r,{title:a("common.createdDate"),dataIndex:"create_date",width:"200px"},"create_date"),(F("edit")||F("delete"))&&Object(V.jsx)(r,{title:a("common.action"),dataIndex:"action",fixed:"right",width:"150px",render:(e,n)=>{return Object(V.jsxs)(je,{children:[Object(V.jsx)(x.a,{title:"Show payload",children:Object(V.jsx)("img",{onClick:(c=n.key,()=>{t(Object(w.f)({expose_api_id:c}))}),src:k.a,alt:"details"})}),F("edit")&&Object(V.jsx)(x.a,{title:a("common.edit"),children:Object(V.jsx)("img",{onClick:P(n.key),src:y.a,alt:"edit"})}),F("delete")&&Object(V.jsx)(x.a,{title:a("common.delete"),children:Object(V.jsx)("img",{onClick:()=>(e=>{t(Object(I.setShowModalConfirmDelete)(!0)),f({expose_api_id:e})})(n.key),src:v.a,alt:"delete"})})]});var c}},"action")]})}),Object(V.jsx)(J,{}),Object(V.jsx)(ae,{}),Object(V.jsx)(C.a,{title:"",decs:a("common.descriptionDelete"),methodDelete:w.c,dataDelete:_,isLoading:!1})]})}));const le=n.b.div.withConfig({displayName:"ExposeAPIInteraction__Wrapper",componentId:"sc-ikny9a-0"})(["padding:16px 24px;.ant-breadcrumb-link{cursor:pointer;}.ant-switch-checked{background-color:",";}"],(e=>e.theme.main)),re=n.b.div.withConfig({displayName:"ExposeAPIInteraction__WrapBreadcrumb",componentId:"sc-ikny9a-1"})(["display:flex;justify-content:space-between;align-items:center;"]),de=Object(n.b)(b.a.Item).withConfig({displayName:"ExposeAPIInteraction__BreadcrumbItem",componentId:"sc-ikny9a-2"})(["font-family:var(--roboto-500);font-size:18px !important;color:#2c2c2c;cursor:default;"]),se=n.b.div.withConfig({displayName:"ExposeAPIInteraction__Empty",componentId:"sc-ikny9a-3"})(["display:flex;flex-direction:column;align-items:center;margin-top:24px;font-size:16px;p{color:#2c2c2c;margin-bottom:16px;}span{color:",";}img{margin-bottom:8px;border-radius:50%;}"],(e=>e.theme.main)),pe=Object(n.b)(h.a).withConfig({displayName:"ExposeAPIInteraction__AddButton",componentId:"sc-ikny9a-4"})(["background:",";border:1px solid ",";height:40px;span{color:#fff;font-size:16px;}:hover{background:","!important;color:#fff !important;}:active{background:",";color:#fff;}:focus{background:",";color:#fff;}"],(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.main),(e=>e.theme.main)),be=n.b.div.withConfig({displayName:"ExposeAPIInteraction__WrapWorkflows",componentId:"sc-ikny9a-5"})(["background:#fff;padding:24px;margin-top:16px;.ant-table-thead > tr > th{font-size:16px;color:#2c2c2c;background:#f0f0f0;border-right:1px solid #d9d9d9;border-bottom:1px solid #d9d9d9;padding:8.5px 16px;:before{display:none;}:first-child{border-left:1px solid #d9d9d9;}}.ant-table-tbody > tr > td{font-size:16px;color:#2c2c2c;padding:8.5px 16px;:first-child{border-left:1px solid #d9d9d9;}:last-child{border-right:1px solid #d9d9d9;}}.ant-table-content{::-webkit-scrollbar{height:8px;}}"]),je=n.b.div.withConfig({displayName:"ExposeAPIInteraction__WrapAction",componentId:"sc-ikny9a-6"})(["img{cursor:pointer;margin-left:8px;:hover{background:#eeeeee;}}"])}}]);
//# sourceMappingURL=76.ef6efb4b.chunk.js.map