(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[96],{1262:function(e,t,n){"use strict";t.a=n.p+"static/media/deleteObject.73bd03c7.png"},1263:function(e,t,n){"use strict";var l,i,a,o,c,d,r,s=n(21),p=n(102),m=n.n(p),f=n(320),b=n.n(f),u=n(1262),j=(n(0),n(39)),h=n(3),g=n(285),O=n(16),x=n(480),_=n(1229),v=n(2);const y=e=>{let{dataDelete:t,title:n,decs:l,methodDelete:i,setShowModalDelete:a,isLoading:o,mask:c,loadData:d,setPositionLogo:r,openConfirm:s,setOpenConfirm:p,type:m,onDelete:f}=e;const b=Object(j.c)(),{t:O}=Object(x.a)(),{showModalConfirmDelete:_}=Object(g.d)((e=>e.globalReducer)),y=()=>{"custom-view"===m&&p(!1),b(Object(h.setShowModalConfirmDelete)(!1)),a&&a(!0)};return Object(v.jsxs)(A,{title:O("common.confirmAction"),visible:"custom-view"===m?s:_,mask:c,onCancel:()=>{y()},width:400,footer:null,children:[Object(v.jsxs)(w,{children:[Object(v.jsx)("img",{alt:"",src:u.a}),Object(v.jsxs)(T,{children:[O("common.confirmDelete")," ",n,"?"]}),Object(v.jsx)(I,{children:l})]}),Object(v.jsxs)(k,{children:[Object(v.jsx)(S,{size:"large",htmlType:"submit",loading:o,onClick:()=>{i&&b(i({...t})),d(),b(Object(h.setShowModalConfirmDelete)(!1)),f&&f(),r&&r(t),"custom-view"===m&&p(!1)},children:O("common.delete")}),Object(v.jsx)(C,{size:"large",onClick:()=>{y()},children:O("common.cancel")})]})]})};t.a=Object(_.a)()(y),y.defaultProps={loadData:()=>{},type:"",openConfirm:!1,setOpenConfirm:()=>{}};const k=O.b.div(l||(l=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 34px;\n"]))),S=Object(O.b)(m.a)(i||(i=Object(s.a)(["\n  background-color: ",";\n  color: #fff;\n  margin-right: 16px;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.darker)),C=Object(O.b)(m.a)(a||(a=Object(s.a)(["\n  background-color: #fff;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.darker)),w=O.b.div(o||(o=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    width: 70px;\n    margin-bottom: 16px;\n  }\n"]))),T=O.b.span(c||(c=Object(s.a)(["\n  font-family: var(--roboto-500);\n  font-size: 18px;\n  line-height: 26px;\n  color: #2c2c2c;\n  text-align: center;\n"]))),I=O.b.span(d||(d=Object(s.a)(["\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #595959;\n"]))),A=Object(O.b)(b.a)(r||(r=Object(s.a)(["\n  .ant-modal-header {\n    border-radius: 10px 10px 0 0;\n    background: #f2f4f5;\n    padding: 7px 24px;\n  }\n\n  .ant-modal-title {\n    font-family: var(--roboto-700);\n  }\n\n  .ant-modal-close-x {\n    height: 36.6px;\n    line-height: 36.6px;\n\n    .anticon {\n      color: #141414;\n    }\n  }\n\n  .ant-modal-content {\n    border-radius: 10px;\n  }\n"])))},1290:function(e,t,n){"use strict";t.a=n.p+"static/media/copy.442fe703.svg"},1298:function(e,t,n){"use strict";t.a=n.p+"static/media/appendFields.60178c5e.svg"},1299:function(e,t,n){"use strict";var l=n(16),i=n(0),a=n(1306),o=n.n(a),c=n(13),d=n.n(c),r=n(5),s=n(1290),p=n(1298),m=n(2);function f(e){let{editorJodit:t,content:n,objectID:l,showToolbar:a,showAppend:c,optionsAppend:f,minHeight:u,readonly:j,onBlur:h,isIC:g,isPublicImage:O}=e;const[x,_]=Object(i.useState)({label:["Select..."],value:["Select..."]}),v=["undo","redo","|","bold","strikethrough","underline","italic","lineHeight","|","superscript","subscript","|","align","|","ul","ol","outdent","indent","|","font","fontsize","brush","paragraph","|","image","link","table","|","hr","eraser","copyformat","|","selectall",{name:"copyContent",tooltip:"Copy HTML to Clipboard",iconURL:s.a,exec:function(e){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.value)}},"print","|"],y=[{name:"appendField",tooltip:"Append Field",iconURL:p.a,popup:(e,t,n,l)=>{let i=e.create.div("merge-field-popup"),a=document.createElement("select");return a.appendChild(((e,t)=>{let n=document.createElement("optgroup");n.setAttribute("label",t);for(let l=0;l<e.length;l++){let t=document.createElement("option");0===l&&(t.setAttribute("disabled",!0),t.setAttribute("selected",!0)),t.setAttribute("value",d.a.get(x,"value")[d.a.get(x,"label").findIndex((t=>t===e[l]))]),t.text=e[l],n.appendChild(t)}return n})(d.a.get(x,"label"),"Append fields")),a.onchange=function(t){let n=t.target.value;n&&(e.selection.insertNode(e.create.fromHTML(n)),l())},i.appendChild(a),i}}],k={readonly:j,toolbar:!0,spellcheck:!1,language:"en",toolbarButtonSize:"medium",toolbarAdaptive:!1,showCharsCounter:!1,showWordsCounter:!1,showXPathInStatusbar:!1,askBeforePasteHTML:!0,askBeforePasteFromWord:!0,minHeight:u,buttons:a?c?v.concat(y):v:y,style:{font:"18px Arial"},uploader:{url:g?localStorage.getItem("icIntegration_link_api")+"resource/api/custom-api/upload-file":r.b+"upload-file",insertImageAsBase64URI:!1,headers:{Authorization:g?"Bearer "+localStorage.getItem("icIntegration_accessToken"):localStorage.getItem("setting_accessToken")},filesVariableName:function(e){return"file"},withCredentials:!1,format:"json",method:"POST",prepareData:function(e){return g?e.append("channel_type","email"):e.append("obj",O?"public":l),e},isSuccess:function(e){return e},process:function(e){return{files:g?d.a.get(e,"data.items",[]):[r.c+e.data[0]]}},error:function(e){console.log("error :>> ",e)},defaultHandlerSuccess:function(e){const t=this;if(console.log("data.fields",e.files),e.files&&e.files.length){const n="img";e.files.forEach((e=>{const l=t.createInside.element(n);l.setAttribute("src",g?d.a.get(e,"url",""):e),t.s.insertImage(l,null,t.o.imageDefaultWidth)}))}}}};Object(i.useEffect)((()=>{if(c){let e={label:["Select..."],value:["Select..."]};f.forEach((t=>{e.label.push(t.label),e.value.push("$".concat(t.value))})),_(e)}}),[f,c]);return Object(m.jsx)(b,{children:Object(m.jsx)(o.a,{ref:t,value:(S=n,S&&(S=(S=(S=(S=(S=S.replaceAll("</iframe>","&lt;/iframe&gt;")).replaceAll("<iframe","&lt;iframe")).replaceAll("<\/script>","&lt;/script&gt;")).replaceAll("<script","&lt;script")).replaceAll("javascript:","")),S),config:k,onBlur:h})});var S}t.a=f,f.defaultProps={editorJodit:null,content:"",objectID:void 0,showToolbar:!0,showAppend:!0,optionsAppend:[],minHeight:"250px",readonly:!1,onBlur:()=>{},isIC:!1,isPublicImage:!1};const b=l.b.div.withConfig({displayName:"Editor2__Wrapper",componentId:"sc-1289lbm-0"})([".jodit-wysiwyg{p{margin-bottom:0;}}.jodit-toolbar-button_appendField{span{width:100px;}}"])},1477:function(e,t,n){"use strict";t.a=n.p+"static/media/empty-email.5f015976.svg"},1482:function(e,t,n){"use strict";t.a=n.p+"static/media/deleteIcon.73dc892f.svg"},1556:function(e,t,n){"use strict";t.a=n.p+"static/media/editIcon.e5074932.svg"},2129:function(e,t,n){"use strict";n.r(t);var l=n(21),i=n(13),a=n.n(i),o=n(0),c=n(480),d=n(26),r=n(285),s=n(16),p=n(159),m=n(1255),f=n(1250),b=n(148),u=n(3),j=n(14),h=n(113),g=n(1263),O=n(39),x=n(1229),_=n(320),v=n.n(_),y=n(250),k=n.n(y),S=n(102),C=n.n(S),w=n(210),T=n.n(w),I=n(719),A=n.n(I),M=n(488),D=n.n(M),E=n(157),F=n(1299),L=n(2);var P=Object(x.a)()((function(e){let{listOptionObjectField:t,optionsAppend:n,setOptionsAppend:l}=e;const i=Object(O.c)(),{t:a}=Object(c.a)(),[d]=k.a.useForm(),r=Object(o.useRef)(null),{showDrawer:s,editSMSTemplate:p}=Object(O.d)((e=>e.smsTemplateReducer)),{content:m,description:f,object_id:b,selected_fields:u,selected_general_fields:g,sms_template_name:x,unicode:_}=p,{listObject:v}=Object(O.d)((e=>e.objectsManagementReducer)),y=()=>{i(Object(h.h)(!1)),i(Object(j.sb)([])),i(Object(h.g)({})),l([]),d.resetFields()};return Object(o.useEffect)((()=>{let e=[];t.length>0&&u&&u.forEach((n=>{t.forEach((t=>{t.sections.forEach((t=>{let l=t.fields.filter((e=>e.full_field_id&&e.full_field_id===n||!e.full_field_id&&e.field_id===n))[0];l&&e.push({label:l.related_name?l.related_name:l.name,value:n})}))}))})),g&&g.forEach((t=>{e.push(E.p.filter((e=>e.value===t))[0])})),l(e)}),[g,u,t]),Object(L.jsx)(N,{title:p._id?a("SMSTemplate.editSMSTemplate"):a("SMSTemplate.addNewTemplate"),visible:s,footer:null,width:800,onCancel:y,children:Object(L.jsxs)(k.a,{form:d,onFinish:()=>{p._id?i(Object(h.k)({...p,content:r.current.value.replaceAll(/<[^>]*>/g,"")})):i(Object(h.a)({...p,content:r.current.value.replaceAll(/<[^>]*>/g,"")}))},labelCol:{span:8},wrapperCol:{span:16},colon:!1,labelAlign:"left",children:[Object(L.jsx)(k.a.Item,{label:a("SMSTemplate.smsTemplateName"),name:"sms_template_name",rules:[{validator:function(e){let t=arguments.length>2?arguments[2]:void 0;0===x.length?t(a("common.requiredField")):t()},required:!0}],valuePropName:x,children:Object(L.jsx)(T.a,{onChange:e=>{i(Object(h.j)({key:"sms_template_name",value:e.target.value}))},value:x})}),Object(L.jsx)(k.a.Item,{label:a("common.description"),name:"description",valuePropName:f,children:Object(L.jsx)(T.a,{onChange:e=>{i(Object(h.j)({key:"description",value:e.target.value}))},value:f})}),Object(L.jsx)(k.a.Item,{label:a("object.object"),name:"object",rules:[{validator:function(e){let t=arguments.length>2?arguments[2]:void 0;0===b.length?t(a("common.requiredField")):t()},required:!0}],valuePropName:b,children:Object(L.jsx)(A.a,{value:b,disabled:!!p._id,onChange:e=>{i(Object(h.j)({key:"object_id",value:e})),i(Object(h.j)({key:"selected_fields",value:[]})),i(Object(h.j)({key:"selected_general_fields",value:[]}))},showSearch:!0,optionFilterProp:"children",filterOption:(e,t)=>t.children?t.children.toLowerCase().indexOf(e.toLowerCase())>=0:t.label?t.label.toLowerCase().indexOf(e.toLowerCase())>=0:void 0,children:v&&v.map((e=>{if(e.Status)return Object(L.jsx)(A.a.Option,{value:e._id,children:e.Name})}))})}),Object(L.jsx)(k.a.Item,{label:a("SMSTemplate.fields"),valuePropName:u,name:"selected_fields",rules:[{validator:function(e){let t=arguments.length>2?arguments[2]:void 0;0===u.length?t(a("common.requiredField")):t()},required:!0}],children:Object(L.jsx)(A.a,{style:{width:"100%"},mode:"multiple",value:u,onDeselect:e=>{i(Object(h.j)({key:"content",value:m.replaceAll("$"+e,"")}))},onChange:e=>{i(Object(h.j)({key:"selected_fields",value:e}))},optionFilterProp:"children",filterOption:(e,t)=>t.children?t.children.toLowerCase().indexOf(e.toLowerCase())>=0:t.label?t.label.toLowerCase().indexOf(e.toLowerCase())>=0:void 0,children:t&&t.map((e=>e.sections&&Object(L.jsx)(A.a.OptGroup,{label:e.object_name,children:e.sections.map((t=>t.fields.map((t=>Object(L.jsx)(L.Fragment,{children:"file"!==t.type&&"formula"!==t.type&&"dynamic"!==t.type&&!t.hidden&&Object(L.jsx)(A.a.Option,{value:t.full_field_id?t.full_field_id:t.field_id,children:t.type&&!e.main_object?e.object_name+"."+t.name:t.name},t.full_field_id?t.full_field_id:t.field_id)})))))})))})}),Object(L.jsx)(k.a.Item,{label:a("SMSTemplate.generalFields"),valuePropName:g,name:"selected_general_fields",rules:[{validator:function(e){let t=arguments.length>2?arguments[2]:void 0;0===g.length?t(a("common.requiredField")):t()},required:!0}],children:Object(L.jsx)(A.a,{style:{width:"100%"},value:g,mode:"multiple",onDeselect:e=>{i(Object(h.j)({key:"content",value:m.replaceAll("$"+e,"")}))},onChange:e=>{i(Object(h.j)({key:"selected_general_fields",value:e}))},optionFilterProp:"children",filterOption:(e,t)=>t.children?t.children.toLowerCase().indexOf(e.toLowerCase())>=0:t.label?t.label.toLowerCase().indexOf(e.toLowerCase())>=0:void 0,children:E.p&&E.p.map((e=>Object(L.jsx)(A.a.Option,{value:e.value,children:e.label})))})}),Object(L.jsx)(k.a.Item,{valuePropName:_,label:"Unicode",name:"unicode",rules:[{validator:function(e){let t=arguments.length>2?arguments[2]:void 0;0===_.length?t(a("common.requiredField")):t()},required:!0}],children:Object(L.jsx)(D.a.Group,{options:[{label:"0",value:0},{label:"1",value:1}],optionType:"button",value:_,onChange:e=>{i(Object(h.j)({key:"unicode",value:e.target.value}))}})}),Object(L.jsx)(k.a.Item,{wrapperCol:{span:24},valuePropName:m,name:"content",children:Object(L.jsx)(F.a,{editorJodit:r,showToolbar:!1,optionsAppend:n,content:m,minHeightInput:"300px"})}),Object(L.jsxs)(z,{label:" ",children:[Object(L.jsx)(C.a,{type:"primary",htmlType:"submit",children:a("common.save")}),Object(L.jsx)(C.a,{onClick:y,children:a("common.cancel")})]})]})})}));const N=Object(s.b)(v.a).withConfig({displayName:"ModalSMSTemplate__ModalCustom",componentId:"sc-1s82o43-0"})([".ant-modal-content{border-radius:10px;}.ant-modal-header{border-radius:10px 10px 0 0;background:#f2f4f5;padding:7px 24px;}.ant-modal-title{font-family:var(--roboto-700);}.ant-modal-close-x{height:36.6px;line-height:36.6px;.anticon{color:#141414;}}.ant-form-item-label > label{font-size:16px;color:#2c2c2c;}"]),z=Object(s.b)(k.a.Item).withConfig({displayName:"ModalSMSTemplate__WrapButton",componentId:"sc-1s82o43-1"})(["margin-bottom:0;.ant-btn{font-size:16px;height:unset;:hover{background:",";color:#fff;}}.ant-btn-primary{margin-right:16px;background:",";border:1px solid ",";color:#fff;}.ant-form-item-control-input-content{display:flex;justify-content:flex-end;}"],(e=>e.theme.darker),(e=>e.theme.main),(e=>e.theme.main));var R,q,B,H,J,W,U,$=n(1477),G=n(1482),Q=n(1556),V=n(63);t.default=()=>{const{t:e}=Object(c.a)(),t=Object(r.c)(),n=Object(d.o)(),{userRuleGlobal:l}=Object(r.d)((e=>e.userReducer)),{listSMSTemplate:i,editSMSTemplate:s}=Object(r.d)((e=>e.smsTemplateReducer)),{listObjectField:b}=Object(r.d)((e=>e.objectsReducer)),{showLoadingScreen:O}=Object(r.d)((e=>e.globalReducer)),{content:x,object_id:_,selected_fields:v}=s,[y,k]=Object(o.useState)(""),[S,C]=Object(o.useState)([]),[w,T]=Object(o.useState)(""),[I,A]=Object(o.useState)({}),[M,D]=Object(o.useState)([]);Object(o.useEffect)((()=>{t(Object(V.b)(e("SMSTemplate.smsTemplate")))}),[e]);const E=[{name:"Created Date",full_field_id:"created_date",type:"date"},{name:"Created By",full_field_id:"created_by",type:"text"},{name:"Modify Time",full_field_id:"modify_time",type:"date"},{name:"Modified by",full_field_id:"modify_by",type:"text"},{name:"Assign To",full_field_id:"owner",type:"text"}],F=e=>!!l.find((t=>"sms_template"===a.a.get(t,"domain","")&&t.actions.includes(e))),N=[{title:e("SMSTemplate.smsTemplateName"),dataIndex:"sms_template_name",key:"sms_template_name",render:e=>e},{title:e("object.object"),dataIndex:"object_name",key:"object_name",render:e=>e},{title:e("common.description"),dataIndex:"description",key:"description",render:e=>e},{title:e("common.action"),key:"operation",fixed:"right",width:100,render:t=>Object(L.jsxs)(Y,{children:[F("edit")&&Object(L.jsx)(p.a,{title:e("common.edit"),children:Object(L.jsx)("img",{alt:"Edit",src:Q.a,onClick:()=>R(t)})}),F("delete")&&Object(L.jsx)(p.a,{title:e("common.delete"),children:Object(L.jsx)("img",{alt:"Delete",src:G.a,onClick:()=>q(t)})})]})}],z=()=>{t(Object(h.h)(!0)),t(Object(h.g)({object_id:"",selected_fields:[],selected_general_fields:[],sms_template_name:"",unicode:"",content:""}))},R=e=>{t(Object(h.f)({_id:e._id}))},q=e=>{t(Object(u.setShowModalConfirmDelete)(!0)),A({_id:e._id})};return Object(o.useEffect)((()=>{t(Object(h.d)())}),[t]),Object(o.useEffect)((()=>{_&&t(Object(j.rb)({api_version:"2",object_id:_}))}),[_]),Object(o.useEffect)((()=>{let e=[];b.length>0&&b.map((n=>{Object.keys(n).forEach((l=>{let i=!0,o={...n[l]},c=o.object_name;o.sections=o.sections&&o.sections.map((e=>{let n={...e};return n.fields.filter((e=>e.hidden)).forEach((e=>{let n=[...v];a.a.remove(n,(t=>t===e.full_field_id)),t(Object(h.j)({key:"selected_fields",value:n})),t(Object(h.j)({key:"content",value:x.replaceAll("$"+e.full_field_id,"")}))})),"main_object"!==l&&i&&(i=!1,n.fields=[...n.fields,{full_field_id:e.fields&&e.fields.length>0&&e.fields[0].full_field_id?e.fields[0].full_field_id.replace(e.fields[0].field_id,"created_date"):"created_date",name:c+".Created date"},{full_field_id:e.fields&&e.fields.length>0&&e.fields[0].full_field_id?e.fields[0].full_field_id.replace(e.fields[0].field_id,"created_by"):"created_by",name:c+".Created by"},{full_field_id:e.fields&&e.fields.length>0&&e.fields[0].full_field_id?e.fields[0].full_field_id.replace(e.fields[0].field_id,"modify_by"):"modify_by",name:c+".Modified by"},{full_field_id:e.fields&&e.fields.length>0&&e.fields[0].full_field_id?e.fields[0].full_field_id.replace(e.fields[0].field_id,"modify_date"):"modify_date",name:c+".Modify date"},{full_field_id:e.fields&&e.fields.length>0&&e.fields[0].full_field_id?e.fields[0].full_field_id.replace(e.fields[0].field_id,"owner"):"owner",name:c+".Assign to"}]),n})),o.main_object="main_object"===l,o.main_object&&(o.sections[0].fields=[...o.sections[0].fields,...E]),e.push(o)}))})),D(e)}),[b]),Object(o.useEffect)((()=>()=>{t(Object(h.i)()),k(""),C([]),T(""),D([])}),[]),Object(L.jsxs)(X,{children:[Object(L.jsxs)(Z,{children:[Object(L.jsxs)(m.a,{children:[Object(L.jsx)(m.a.Item,{onClick:()=>n("/settings"),children:e("settings.settings")}),Object(L.jsx)(K,{children:e("SMSTemplate.smsTemplate")})]}),i.length>0&&F("create")&&Object(L.jsxs)(ee,{onClick:z,children:["+ ",e("SMSTemplate.addNewTemplate")]})]}),i.length>0?Object(L.jsx)(ne,{children:Object(L.jsx)(f.a,{dataSource:i,columns:N,pagination:{position:["bottomRight"],showSizeChanger:!0,defaultPageSize:10,showQuickJumper:!0}})}):Object(L.jsxs)(te,{children:[Object(L.jsx)("img",{src:$.a,alt:"empty"}),Object(L.jsxs)("p",{children:[e("object.noObject")," ",Object(L.jsx)("span",{children:e("SMSTemplate.smsTemplate")})]}),F("create")&&Object(L.jsxs)(ee,{onClick:z,children:["+ ",e("SMSTemplate.addNewTemplate")]})]}),Object(L.jsx)(P,{listOptionObjectField:M,optionsAppend:S,setOptionsAppend:C}),Object(L.jsx)(g.a,{title:e("SMSTemplate.deleteSMS"),decs:e("common.descriptionDelete"),methodDelete:h.c,dataDelete:I,isLoading:O})]})};const X=s.b.div(R||(R=Object(l.a)(["\n  padding: 16px 24px;\n\n  .ant-breadcrumb-link {\n    cursor: pointer;\n  }\n"]))),K=Object(s.b)(m.a.Item)(q||(q=Object(l.a)(["\n  font-family: var(--roboto-500);\n  font-size: 18px !important;\n  color: #2c2c2c;\n  cursor: default;\n"]))),Y=s.b.div(B||(B=Object(l.a)(["\n  img {\n    cursor: pointer;\n    margin-left: 8px;\n\n    :hover {\n      background: #eeeeee;\n    }\n  }\n"]))),Z=s.b.div(H||(H=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),ee=Object(s.b)(b.a)(J||(J=Object(l.a)(["\n  background: ",";\n  border: 1px solid ",";\n  height: 40px;\n\n  span {\n    color: #fff !important;\n    font-size: 16px;\n  }\n\n  :hover {\n    background: ","!important;\n    color: #fff !important;\n  }\n\n  :active {\n    background: ",";\n    color: #fff;\n  }\n\n  :focus {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.main),(e=>e.theme.main)),te=s.b.div(W||(W=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 24px;\n  font-size: 16px;\n\n  p {\n    color: #2c2c2c;\n    margin-bottom: 16px;\n  }\n\n  span {\n    color: ",";\n  }\n\n  img {\n    margin-bottom: 8px;\n  }\n"])),(e=>e.theme.main)),ne=s.b.div(U||(U=Object(l.a)(["\n  background: #fff;\n  padding: 24px;\n  margin-top: 16px;\n\n  .ant-table-thead > tr > th {\n    font-size: 16px;\n    color: #2c2c2c;\n    background: #f0f0f0;\n    border-right: 1px solid #d9d9d9;\n    border-bottom: 1px solid #d9d9d9;\n    padding: 8.5px 16px;\n\n    :before {\n      display: none;\n    }\n\n    :first-child {\n      border-left: 1px solid #d9d9d9;\n    }\n  }\n\n  .ant-table-tbody > tr > td {\n    font-size: 16px;\n    color: #2c2c2c;\n    padding: 8.5px 16px;\n\n    :first-child {\n      border-left: 1px solid #d9d9d9;\n    }\n\n    :last-child {\n      border-right: 1px solid #d9d9d9;\n    }\n  }\n\n  .ant-table-content {\n    ::-webkit-scrollbar {\n      height: 8px;\n    }\n  }\n\n  .ant-pagination {\n    width: 100%;\n    background: #fff;\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 0;\n  }\n\n  .ant-pagination-item-active {\n    border-color: ",";\n\n    a {\n      color: ",";\n    }\n  }\n\n  .ant-pagination-item:hover {\n    border-color: ",";\n\n    a {\n      color: ",";\n    }\n  }\n\n  .ant-pagination-next:hover .ant-pagination-item-link {\n    color: ",";\n    border-color: ",";\n  }\n\n  .ant-pagination-prev:hover .ant-pagination-item-link {\n    color: ",";\n    border-color: ",";\n  }\n"])),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker))}}]);
//# sourceMappingURL=96.0e944145.chunk.js.map