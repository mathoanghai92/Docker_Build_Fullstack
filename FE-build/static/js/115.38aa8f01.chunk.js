(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[115],{1262:function(e,t,n){"use strict";t.a=n.p+"static/media/deleteObject.73bd03c7.png"},1263:function(e,t,n){"use strict";var a,c,i,l,o,r,s,d=n(21),b=n(102),j=n.n(b),u=n(320),h=n.n(u),p=n(1262),m=(n(0),n(39)),g=n(3),f=n(285),O=n(16),x=n(480),v=n(1229),_=n(2);const y=e=>{let{dataDelete:t,title:n,decs:a,methodDelete:c,setShowModalDelete:i,isLoading:l,mask:o,loadData:r,setPositionLogo:s,openConfirm:d,setOpenConfirm:b,type:j,onDelete:u}=e;const h=Object(m.c)(),{t:O}=Object(x.a)(),{showModalConfirmDelete:v}=Object(f.d)((e=>e.globalReducer)),y=()=>{"custom-view"===j&&b(!1),h(Object(g.setShowModalConfirmDelete)(!1)),i&&i(!0)};return Object(_.jsxs)(A,{title:O("common.confirmAction"),visible:"custom-view"===j?d:v,mask:o,onCancel:()=>{y()},width:400,footer:null,children:[Object(_.jsxs)(D,{children:[Object(_.jsx)("img",{alt:"",src:p.a}),Object(_.jsxs)(I,{children:[O("common.confirmDelete")," ",n,"?"]}),Object(_.jsx)(S,{children:a})]}),Object(_.jsxs)(k,{children:[Object(_.jsx)(C,{size:"large",htmlType:"submit",loading:l,onClick:()=>{c&&h(c({...t})),r(),h(Object(g.setShowModalConfirmDelete)(!1)),u&&u(),s&&s(t),"custom-view"===j&&b(!1)},children:O("common.delete")}),Object(_.jsx)(w,{size:"large",onClick:()=>{y()},children:O("common.cancel")})]})]})};t.a=Object(v.a)()(y),y.defaultProps={loadData:()=>{},type:"",openConfirm:!1,setOpenConfirm:()=>{}};const k=O.b.div(a||(a=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 34px;\n"]))),C=Object(O.b)(j.a)(c||(c=Object(d.a)(["\n  background-color: ",";\n  color: #fff;\n  margin-right: 16px;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.darker)),w=Object(O.b)(j.a)(i||(i=Object(d.a)(["\n  background-color: #fff;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.darker)),D=O.b.div(l||(l=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    width: 70px;\n    margin-bottom: 16px;\n  }\n"]))),I=O.b.span(o||(o=Object(d.a)(["\n  font-family: var(--roboto-500);\n  font-size: 18px;\n  line-height: 26px;\n  color: #2c2c2c;\n  text-align: center;\n"]))),S=O.b.span(r||(r=Object(d.a)(["\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #595959;\n"]))),A=Object(O.b)(h.a)(s||(s=Object(d.a)(["\n  .ant-modal-header {\n    border-radius: 10px 10px 0 0;\n    background: #f2f4f5;\n    padding: 7px 24px;\n  }\n\n  .ant-modal-title {\n    font-family: var(--roboto-700);\n  }\n\n  .ant-modal-close-x {\n    height: 36.6px;\n    line-height: 36.6px;\n\n    .anticon {\n      color: #141414;\n    }\n  }\n\n  .ant-modal-content {\n    border-radius: 10px;\n  }\n"])))},1290:function(e,t,n){"use strict";t.a=n.p+"static/media/copy.442fe703.svg"},1298:function(e,t,n){"use strict";t.a=n.p+"static/media/appendFields.60178c5e.svg"},1299:function(e,t,n){"use strict";var a=n(16),c=n(0),i=n(1306),l=n.n(i),o=n(13),r=n.n(o),s=n(5),d=n(1290),b=n(1298),j=n(2);function u(e){let{editorJodit:t,content:n,objectID:a,showToolbar:i,showAppend:o,optionsAppend:u,minHeight:p,readonly:m,onBlur:g,isIC:f,isPublicImage:O}=e;const[x,v]=Object(c.useState)({label:["Select..."],value:["Select..."]}),_=["undo","redo","|","bold","strikethrough","underline","italic","lineHeight","|","superscript","subscript","|","align","|","ul","ol","outdent","indent","|","font","fontsize","brush","paragraph","|","image","link","table","|","hr","eraser","copyformat","|","selectall",{name:"copyContent",tooltip:"Copy HTML to Clipboard",iconURL:d.a,exec:function(e){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.value)}},"print","|"],y=[{name:"appendField",tooltip:"Append Field",iconURL:b.a,popup:(e,t,n,a)=>{let c=e.create.div("merge-field-popup"),i=document.createElement("select");return i.appendChild(((e,t)=>{let n=document.createElement("optgroup");n.setAttribute("label",t);for(let a=0;a<e.length;a++){let t=document.createElement("option");0===a&&(t.setAttribute("disabled",!0),t.setAttribute("selected",!0)),t.setAttribute("value",r.a.get(x,"value")[r.a.get(x,"label").findIndex((t=>t===e[a]))]),t.text=e[a],n.appendChild(t)}return n})(r.a.get(x,"label"),"Append fields")),i.onchange=function(t){let n=t.target.value;n&&(e.selection.insertNode(e.create.fromHTML(n)),a())},c.appendChild(i),c}}],k={readonly:m,toolbar:!0,spellcheck:!1,language:"en",toolbarButtonSize:"medium",toolbarAdaptive:!1,showCharsCounter:!1,showWordsCounter:!1,showXPathInStatusbar:!1,askBeforePasteHTML:!0,askBeforePasteFromWord:!0,minHeight:p,buttons:i?o?_.concat(y):_:y,style:{font:"18px Arial"},uploader:{url:f?localStorage.getItem("icIntegration_link_api")+"resource/api/custom-api/upload-file":s.b+"upload-file",insertImageAsBase64URI:!1,headers:{Authorization:f?"Bearer "+localStorage.getItem("icIntegration_accessToken"):localStorage.getItem("setting_accessToken")},filesVariableName:function(e){return"file"},withCredentials:!1,format:"json",method:"POST",prepareData:function(e){return f?e.append("channel_type","email"):e.append("obj",O?"public":a),e},isSuccess:function(e){return e},process:function(e){return{files:f?r.a.get(e,"data.items",[]):[s.c+e.data[0]]}},error:function(e){console.log("error :>> ",e)},defaultHandlerSuccess:function(e){const t=this;if(console.log("data.fields",e.files),e.files&&e.files.length){const n="img";e.files.forEach((e=>{const a=t.createInside.element(n);a.setAttribute("src",f?r.a.get(e,"url",""):e),t.s.insertImage(a,null,t.o.imageDefaultWidth)}))}}}};Object(c.useEffect)((()=>{if(o){let e={label:["Select..."],value:["Select..."]};u.forEach((t=>{e.label.push(t.label),e.value.push("$".concat(t.value))})),v(e)}}),[u,o]);return Object(j.jsx)(h,{children:Object(j.jsx)(l.a,{ref:t,value:(C=n,C&&(C=(C=(C=(C=(C=C.replaceAll("</iframe>","&lt;/iframe&gt;")).replaceAll("<iframe","&lt;iframe")).replaceAll("<\/script>","&lt;/script&gt;")).replaceAll("<script","&lt;script")).replaceAll("javascript:","")),C),config:k,onBlur:g})});var C}t.a=u,u.defaultProps={editorJodit:null,content:"",objectID:void 0,showToolbar:!0,showAppend:!0,optionsAppend:[],minHeight:"250px",readonly:!1,onBlur:()=>{},isIC:!1,isPublicImage:!1};const h=a.b.div.withConfig({displayName:"Editor2__Wrapper",componentId:"sc-1289lbm-0"})([".jodit-wysiwyg{p{margin-bottom:0;}}.jodit-toolbar-button_appendField{span{width:100px;}}"])},2047:function(e,t,n){"use strict";n.r(t);var a,c,i=n(21),l=n(2074),o=n(317),r=n(1255),s=n(1252),d=n(1244),b=n(1245),j=n(708),u=n(148),h=n(726),p=n(1299),m=n(1263),g=n(5),f=n(164),O=n.n(f),x=n(0),v=n(26),_=n(194),y=n(3),k=n(203),C=n(14),w=n(285),D=n(16),I=n(2);const{RangePicker:S}=l.a,{Option:A}=o.a;t.default=()=>{const e=Object(w.c)(),t=Object(v.o)(),{search:n}=Object(v.m)(),a=new URLSearchParams(n),c=a.get("object_id"),i=a.get("id"),[l]=Object(h.useForm)(),f=Object(x.useRef)(null),{editArticle:D,optionCategory:P}=Object(w.d)((e=>e.articlesReducer)),{listObjectField:R}=Object(w.d)((e=>e.objectsReducer)),{showLoadingScreen:T}=Object(w.d)((e=>e.globalReducer)),{editKnowledgeBaseSetting:Y}=Object(w.d)((e=>e.knowledgeBaseSettingReducer)),{objectCategory:L}=Object(w.d)((e=>e.objectsManagementReducer)),[B,z]=Object(x.useState)({}),{userDetail:F}=Object(w.d)((e=>e.userReducer)),[H,N]=Object(x.useState)([]),J="YYYY/MM/DD",{title:U,body:W,start_date:q,end_date:V,section_name:G,category_name:K}=D;return Object(x.useEffect)((()=>{Y.object_id&&e(Object(C.rb)({api_version:"2",object_id:Y.object_id}))}),[Y.object_id]),Object(x.useEffect)((()=>{R.length>0&&Object.keys(Y).length>0&&R[0].main_object&&R[0].main_object.sections.map((e=>{let t=e.fields.filter((e=>e.field_id===Y.section_name)).length>0?e.fields.filter((e=>e.field_id===Y.section_name))[0].option:[];N(t)}))}),[R,Y]),Object(x.useEffect)((()=>{e(Object(k.c)()),i&&e(Object(_.c)({data:{id:i,object_id:Y.object_id},navigate:t}))}),[i]),Object(x.useEffect)((()=>{G.length>0&&e(Object(_.e)({Object_ID:Y.object_id,Source_ID:Y.section_name,Target_ID:Y.category_name,Value:G}))}),[G]),Object(x.useEffect)((()=>()=>{e(Object(_.g)())}),[]),Object(I.jsxs)(E,{children:[Object(I.jsxs)(r.a,{children:[Object(I.jsx)(r.a.Item,{onClick:()=>t("/knowledge-base-view?object_id="+Y.object_id),children:(()=>{let e="";return Object.entries(L).forEach(((t,n)=>{let[a,c]=t;c.map(((t,n)=>{t._id===Y.object_id&&(e=t.Name)}))})),e})()}),Object(I.jsx)(M,{children:i?"C\u1eadp nh\u1eadt b\xe0i vi\u1ebft":"Th\xeam m\u1edbi"})]}),Object(I.jsx)(s.a,{name:"create-article",style:{height:"100%"},onFinish:()=>{(()=>{let n=[];if(e(Object(_.h)({key:"body",value:f.current.value})),Object.keys(Y).forEach((e=>{"body"===e?f.current.value&&"_id"!==e&&0===g.f.filter((t=>t.ID===e)).length&&n.push({id_field:Y[e],id_field_related_record:null,id_related_record:null,object_related:null,value:f.current.value}):D[e]&&"_id"!==e&&0===g.f.filter((t=>t.ID===e)).length&&n.push({id_field:Y[e],id_field_related_record:null,id_related_record:null,object_related:null,value:D[e]})})),D._id){let a={id:D._id,object_id:Y.object_id,owner:F._id,data:[...n]};e(Object(C.Rc)({data:{...a},load:{object_id:c,search_with:{meta:[],data:""}},navigate:t}))}else{let a={object_id:Y.object_id,owner:F._id,data:[...n]};e(Object(C.d)({data:a,navigate:t}))}})()},form:l,children:Object(I.jsxs)(d.a,{style:{height:"100%"},children:[Object(I.jsxs)(b.a,{span:14,children:[Object(I.jsx)(d.a,{children:Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)(s.a.Item,{name:"title",valuePropName:U,rules:[{validator:function(e){let t=arguments.length>2?arguments[2]:void 0;0===U.length?t("Tr\u01b0\u1eddng n\xe0y l\xe0 b\u1eaft bu\u1ed9c"):t()},required:!0}],children:Object(I.jsx)(j.a,{placeholder:"Enter title here",onChange:t=>{e(Object(_.h)({key:"title",value:t.target.value}))},value:U})})})}),Object(I.jsx)(d.a,{style:{height:"100%"},children:Object(I.jsx)(b.a,{span:24,style:{height:"100%"},children:Object(I.jsx)(s.a.Item,{style:{height:"100%"},name:"body",rules:[{validator:function(e){arguments.length>1&&void 0!==arguments[1]||f.current.value;let t=arguments.length>2?arguments[2]:void 0;0===f.current.value.length?t("Tr\u01b0\u1eddng n\xe0y l\xe0 b\u1eaft bu\u1ed9c"):t()},required:!0}],children:Object(I.jsx)(p.a,{editorJodit:f,content:W,showAppend:!1})})})})]}),Object(I.jsxs)(b.a,{span:10,style:{paddingLeft:"1rem"},children:[Object(I.jsx)(d.a,{style:{backgroundColor:"white",padding:"1rem",border:"1px solid #D9D9D9"},children:Object(I.jsxs)(b.a,{span:24,children:[Object(I.jsx)(d.a,{children:Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)("span",{children:" General "})})}),Object(I.jsx)("hr",{}),Object(I.jsxs)(d.a,{style:{padding:"0.5rem 0rem"},children:[Object(I.jsx)(b.a,{span:4,children:Object(I.jsx)("span",{children:" Time apply"})}),Object(I.jsx)(b.a,{span:20,children:Object(I.jsx)(s.a.Item,{style:{margin:"0px"},name:"start_date",valuePropName:q,children:Object(I.jsx)(S,{placement:"topRight",value:[q&&q.length>0?O()(q,J):null,V&&V.length>0?O()(V,J):null],format:J,onChange:t=>{t[0]&&e(Object(_.h)({key:"start_date",value:O()(t[0]).format("YYYY-MM-DD")})),t[1]&&e(Object(_.h)({key:"end_date",value:O()(t[1]).format("YYYY-MM-DD")}))}})})})]}),Object(I.jsx)("hr",{}),Object(I.jsxs)(d.a,{justify:"space-between",children:[Object(I.jsx)(b.a,{span:4,children:Object(I.jsx)(u.a,{disabled:!i,onClick:()=>{z({data:{id:i,object_id:c},navigate:t}),e(Object(y.setShowModalConfirmDelete)(!0))},children:"Move to trash"})}),Object(I.jsx)(b.a,{span:4,children:Object(I.jsx)(u.a,{onClick:()=>{l.submit()},children:"Publish"})})]})]})}),Object(I.jsx)(d.a,{style:{backgroundColor:"white",padding:"1rem",border:"1px solid #D9D9D9",marginTop:"1rem"},children:Object(I.jsxs)(b.a,{span:24,children:[Object(I.jsxs)(d.a,{children:[Object(I.jsx)(b.a,{span:4,children:Object(I.jsxs)("span",{children:[" ","Section ",Object(I.jsx)("span",{style:{color:"red"},children:"*"})," "]})}),Object(I.jsx)(b.a,{span:20,children:Object(I.jsx)(s.a.Item,{name:"section_name",valuePropName:G,children:Object(I.jsx)(o.a,{value:G,onChange:t=>{e(Object(_.h)({key:"section_name",value:t})),e(Object(_.h)({key:"category_name",value:""}))},children:H&&H.map((e=>Object(I.jsx)(A,{value:e.value,children:e.label})))})})})]}),Object(I.jsxs)(d.a,{children:[Object(I.jsx)(b.a,{span:4,children:Object(I.jsxs)("span",{children:[" ","Category ",Object(I.jsx)("span",{style:{color:"red"},children:"*"})," "]})}),Object(I.jsx)(b.a,{span:20,children:Object(I.jsx)(s.a.Item,{style:{margin:"0px"},name:"category_name",valuePropName:K,children:Object(I.jsx)(o.a,{value:K,onChange:t=>{e(Object(_.h)({key:"category_name",value:t}))},children:P.map((e=>Object(I.jsx)(A,{value:e.value,children:e.label})))})})})]})]})})]})]})}),Object(I.jsx)(m.a,{title:"b\xe0i vi\u1ebft n\xe0y",decs:"Sau khi x\xf3a d\u1eef li\u1ec7u s\u1ebd kh\xf4ng th\u1ec3 ho\xe0n t\xe1c.",methodDelete:_.b,dataDelete:B,isLoading:T})]})};const E=D.b.div(a||(a=Object(i.a)(["\n  padding: 1rem;\n  height: 100%;\n  .ant-form-item-control-input {\n    height: 80%;\n    align-items: inherit;\n  }\n  .sun-editor-editable {\n    height: auto;\n  }\n  .ant-picker-range {\n    width: 100%;\n  }\n"]))),M=Object(D.b)(r.a.Item)(c||(c=Object(i.a)(["\n  font-family: var(--roboto-500);\n  font-size: 18px !important;\n  color: #2c2c2c;\n  cursor: default;\n"])))}}]);
//# sourceMappingURL=115.38aa8f01.chunk.js.map