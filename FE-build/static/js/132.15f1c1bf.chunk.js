(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[132],{1304:function(e,n,t){"use strict";n.a=t.p+"static/media/plus.4701f26d.svg"},1336:function(e,n,t){"use strict";var a,r,o,i,c,s,l,d=t(21),b=t(102),m=t.n(b),j=t(320),p=t.n(j),h=(t(0),t(39)),x=t(16),u=t(480),g=t(1229),f=t(2);n.a=Object(g.a)()((e=>{let{decs:n,title:t,method:a,data:r,isLoading:o,img:i,open:c,setOpen:s}=e;const l=Object(h.c)(),{t:d}=Object(u.a)();return Object(f.jsxs)(C,{title:"X\xe1c nh\u1eadn",visible:c,onCancel:()=>{s(!1)},width:400,footer:null,children:[Object(f.jsxs)(k,{children:[Object(f.jsx)("img",{alt:"",src:i}),Object(f.jsx)(_,{children:t}),Object(f.jsx)(v,{children:n})]}),Object(f.jsxs)(O,{children:[Object(f.jsx)(w,{size:"large",htmlType:"submit",loading:o,onClick:()=>{l(a({...r})),s(!1)},children:d("common.yes")}),Object(f.jsx)(A,{size:"large",onClick:()=>{s(!1)},children:d("common.no")})]})]})}));const O=x.b.div(a||(a=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 34px;\n"]))),w=Object(x.b)(m.a)(r||(r=Object(d.a)(["\n  background-color: ",";\n  color: #fff;\n  margin-right: 16px;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.darker)),A=Object(x.b)(m.a)(o||(o=Object(d.a)(["\n  background-color: #fff;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.darker)),k=x.b.div(i||(i=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    width: 70px;\n    margin-bottom: 16px;\n  }\n"]))),_=x.b.span(c||(c=Object(d.a)(["\n  font-family: var(--roboto-500);\n  font-size: 18px;\n  line-height: 26px;\n  color: #2c2c2c;\n  text-align: center;\n"]))),v=x.b.span(s||(s=Object(d.a)(["\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #595959;\n"]))),C=Object(x.b)(p.a)(l||(l=Object(d.a)(["\n  .ant-modal-header {\n    border-radius: 10px 10px 0 0;\n    background: #f2f4f5;\n    padding: 7px 24px;\n  }\n\n  .ant-modal-title {\n    font-family: var(--roboto-700);\n  }\n\n  .ant-modal-close-x {\n    height: 36.6px;\n    line-height: 36.6px;\n\n    .anticon {\n      color: #141414;\n    }\n  }\n\n  .ant-modal-content {\n    border-radius: 10px;\n  }\n"])))},2100:function(e,n,t){"use strict";t.r(n);var a,r,o,i,c=t(21),s=t(148),l=t(1304),d=t(5),b=t(0),m=t(39),j=t(31),p=t(16),h=t(1252),x=t(708),u=t(1254),g=t(480),f=t(1229),O=t(2);var w=Object(f.a)()((e=>{const{isModalVisible:n,setIsModalVisible:t}=e,{isCreatePermission:a}=Object(m.d)((e=>e.tenantsReducer)),r=Object(m.c)(),{t:o}=Object(g.a)(),[i]=h.a.useForm(),c=()=>{t(!1),i.resetFields()};Object(b.useEffect)((()=>{!1===a&&t(!1)}),[a,t]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(v,{title:"Add permission",visible:n,onOk:()=>{t(!1)},onCancel:c,footer:null,children:Object(O.jsxs)(h.a,{labelAlign:"left",name:"basic",form:i,labelCol:{span:8},wrapperCol:{span:16},initialValues:{view:!1,create:!1,update:!1,delete:!1},onFinish:e=>{r(Object(j.g)({role:"super",update_tenant:!0,create_tenant:!0,delete_tenant:!0,email:e.email,view_tenant:!0,password:e.password})),i.resetFields()},autoComplete:"off",children:[Object(O.jsx)(h.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input email!"},{type:"email",message:"Please input valid username!"}],children:Object(O.jsx)(x.a,{})}),Object(O.jsx)(h.a.Item,{label:o("user.newPass"),name:"password",rules:[{required:!0,message:o("common.placeholderInput")},()=>({validator:(e,n)=>n?n.length<8?Promise.reject(new Error(o("user.errorPass"))):n.match(/(?=.*?[a-z])/)?n.match(/(?=.*?[0-9])/)?n.match(/(?=.*?[,./=+<({})>[|!@#$%^&*?_-])/)||n.includes("]")||n.includes("\\")?n.match(/(?=.*?[A-Z])/)?Promise.resolve():Promise.reject(new Error(o("user.errorPass3"))):Promise.reject(new Error(o("user.errorPass4"))):Promise.reject(new Error(o("user.errorPass5"))):Promise.reject(new Error(o("user.errorPass2"))):Promise.resolve()})],children:Object(O.jsx)(x.a.Password,{placeholder:o("common.placeholderInput")})}),Object(O.jsx)(h.a.Item,{label:o("user.verifyPass"),name:"verify_password",dependencies:["password"],rules:[{required:!0,message:o("common.placeholderInput")},e=>{let{getFieldValue:n}=e;return{validator:(e,t)=>t&&n("password")!==t?Promise.reject(new Error(o("user.errorPass6"))):Promise.resolve()}}],children:Object(O.jsx)(x.a.Password,{placeholder:o("common.placeholderInput")})}),Object(O.jsxs)(A,{children:[Object(O.jsx)(k,{size:"large",htmlType:"submit",loading:a,children:"Save"}),Object(O.jsx)(_,{size:"large",onClick:()=>{c()},children:"Cancel"})]})]})})})}));const A=p.b.div(a||(a=Object(c.a)(["\n  display: flex;\n  justify-content: flex-end;\n  background-color: white;\n  position: sticky;\n  bottom: 0;\n  padding-bottom: 24px;\n  padding-top: 24px;\n"]))),k=Object(p.b)(s.a)(r||(r=Object(c.a)(["\n  width: 80px;\n  background-color: ",";\n  color: #fff;\n  /* font-size: 16px; */\n  background-color: ",";\n  color: #fff;\n  margin-right: 16px;\n  img {\n    width: 15px;\n    margin-right: 8px;\n  }\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n    color: #fff;\n    /* box-shadow: 0px 0px 16px rgba(62, 62, 62, 0.42);\n    transition: 0.5s; */\n  }\n"])),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.darker)),_=Object(p.b)(s.a)(o||(o=Object(c.a)(["\n  /* font-size: 16px; */\n  background-color: #fff;\n  width: 80px;\n\n  img {\n    width: 15px;\n    margin-right: 8px;\n  }\n  &:hover {\n    color: #000;\n    border-color: ",";\n    /* box-shadow: 0px 0px 16px rgba(62, 62, 62, 0.42);\n    transition: 0.5s; */\n  }\n"])),(e=>e.theme.darker)),v=Object(p.b)(u.a)(i||(i=Object(c.a)(["\n  .ant-checkbox-checked {\n    background-color: ",";\n    .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n  }\n  .ant-btn:active {\n    color: #fff;\n    background-color: ","!important;\n    border-color: ","!important;\n  }\n  .ant-btn:focus {\n    color: #2c2c2c !important;\n    background-color: ","!important;\n    border-color: ","!important;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker));var C=t(284),P=t(398),y=t(506),E=t(1336),I=t(266);const L=t(188);var z,B,V=e=>{const{item:n}=e,[t,a]=Object(b.useState)(!1);let r=L.decode(localStorage.getItem("setting_accessToken"));const{userDetail:o}=Object(m.d)((e=>e.userReducer)),i=Object(m.c)(),[c,s]=Object(b.useState)(!1),[l,d]=Object(b.useState)({}),[p,h]=Object(b.useState)(!1);return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{onDoubleClick:()=>s(!0),children:c&&r&&r.permission&&r.permission.update_tenant?Object(O.jsx)(x.a,{type:"email",defaultValue:n.email,onPressEnter:()=>{(e=>{i(Object(j.ab)({_id:e._id,role:e.role,update_tenant:e.update_tenant,create_tenant:e.create_tenant,delete_tenant:e.delete_tenant,email:e.email,view_tenant:e.view_tenant})),s(!1)})(l)},onBlur:()=>{d({_id:n._id,role:n.role,update_tenant:n.update_tenant,create_tenant:n.create_tenant,delete_tenant:n.delete_tenant,email:n.email,view_tenant:n.view_tenant}),s(!1)},onChange:e=>{d({_id:n._id,role:n.role,update_tenant:n.update_tenant,create_tenant:n.create_tenant,delete_tenant:n.delete_tenant,email:e.target.value,view_tenant:n.view_tenant})}}):n.email}),Object(O.jsx)("td",{children:Object(O.jsx)(C.a,{disabled:!0,checked:n.view_tenant,onClick:()=>{i(Object(j.ab)({_id:n._id,role:n.role,update_tenant:n.update_tenant,create_tenant:n.create_tenant,delete_tenant:n.delete_tenant,email:n.email,view_tenant:!n.view_tenant}))}})}),Object(O.jsx)("td",{children:Object(O.jsx)(C.a,{disabled:r.Email===n.email||o&&o.permission&&!1===o.permission.update_tenant,checked:n.create_tenant,onClick:()=>{i(Object(j.ab)({_id:n._id,role:n.role,update_tenant:n.update_tenant,create_tenant:!n.create_tenant,delete_tenant:n.delete_tenant,email:n.email,view_tenant:n.view_tenant}))}})}),Object(O.jsx)("td",{children:Object(O.jsx)(C.a,{disabled:r.Email===n.email||o&&o.permission&&!1===o.permission.update_tenant,checked:n.update_tenant,onClick:()=>{i(Object(j.ab)({_id:n._id,role:n.role,update_tenant:!n.update_tenant,create_tenant:n.create_tenant,delete_tenant:n.delete_tenant,email:n.email,view_tenant:n.view_tenant}))}})}),Object(O.jsx)("td",{children:Object(O.jsx)(C.a,{disabled:r.Email===n.email||o&&o.permission&&!1===o.permission.update_tenant,checked:n.delete_tenant,onClick:()=>{i(Object(j.ab)({_id:n._id,role:n.role,update_tenant:n.update_tenant,create_tenant:n.create_tenant,delete_tenant:!n.delete_tenant,email:n.email,view_tenant:n.view_tenant}))}})}),Object(O.jsxs)("td",{children:[o&&o.permission&&!1===o.permission.update_tenant&&r.Email!==n.email?"":Object(O.jsx)("img",{alt:"",src:"data:image/png;base64,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",style:{width:"16px",cursor:"pointer"},onClick:()=>a(!0)}),r.Email===n.email?"":o&&o.permission&&o.permission.delete_tenant?Object(O.jsx)("img",{alt:"",src:y.a,style:{width:"20px",marginLeft:"8px",cursor:"pointer"},onClick:()=>h(!0)}):""]}),Object(O.jsx)(E.a,{title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn thay \u0111\u1ed5i b\u1ea3n ghi n\xe0y?",decs:"Do you want to update this record with the exist setting?",open:p,setOpen:h,method:j.o,data:{email:n.email},setOpenModal:()=>{},img:P.a}),Object(O.jsx)(I.a,{showModalChangePass:t,onHideModalChangePass:()=>a(!1),getListUser:()=>{},user:r,isAdmin:!1,root:!0,email:n.email})]})};n.default=()=>{const e=Object(m.c)(),{rootPermission:n}=Object(m.d)((e=>e.tenantsReducer)),[t,a]=Object(b.useState)(!1),{userDetail:r}=Object(m.d)((e=>e.userReducer));return Object(b.useEffect)((()=>{e(Object(j.Q)())}),[e]),Object(b.useEffect)((()=>{r&&r.permission&&"normal"===r.permission.role&&window.open(d.d+"/tenants","_self")}),[r]),Object(O.jsxs)(D,{children:[Object(O.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"right",marginBottom:"16px"},children:r&&r.permission&&r.permission.create_tenant?Object(O.jsxs)(M,{size:"large",onClick:()=>{a(!0)},children:[Object(O.jsx)("img",{alt:"",src:l.a}),"Add user"]}):""}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"User"}),Object(O.jsx)("th",{children:"View"}),Object(O.jsx)("th",{children:"Create"}),Object(O.jsx)("th",{children:"Update"}),Object(O.jsx)("th",{children:"Delete"}),Object(O.jsx)("th",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:n.map(((e,n)=>Object(O.jsx)(V,{item:e})))})]})}),Object(O.jsx)(w,{isModalVisible:t,setIsModalVisible:a})]})};const D=p.b.div(z||(z=Object(c.a)(["\n  padding: 24px;\n  .container {\n    padding: 24px;\n    background-color: white;\n  }\n  table {\n    border-collapse: collapse;\n    width: 100%;\n  }\n  td {\n    border-bottom: 1px solid #ededed;\n    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);\n    text-align: left;\n    padding: 8px;\n    font-style: normal;\n    font-family: var(--roboto-400);\n    font-size: 16px;\n    line-height: 130%;\n    /* identical to box height, or 21px */\n\n    /* Character/Body text */\n\n    color: #2c2c2c;\n  }\n  th {\n    border-bottom: 1px solid #ededed;\n    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);\n    text-align: left;\n    padding: 8px;\n    /* background-color: #fff; */\n    font-family: var(--roboto-500);\n    font-size: 16px;\n    line-height: 22px;\n    /* identical to box height, or 138% */\n\n    color: #2c2c2c;\n    background: #fafafa;\n    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);\n    /* Character/Body text */\n  }\n  .ant-checkbox-checked {\n    background-color: ",";\n    .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n  }\n  .ant-btn:active {\n    color: #fff;\n    background-color: ","!important;\n    border-color: ","!important;\n  }\n  .ant-btn:focus {\n    color: #2c2c2c !important;\n    background-color: ","!important;\n    border-color: ","!important;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker),(e=>e.theme.darker)),M=Object(p.b)(s.a)(B||(B=Object(c.a)(["\n  background-color: ",";\n  color: #fff;\n  font-size: 16px;\n  img {\n    width: 15px;\n    margin-right: 8px;\n  }\n  &:hover {\n    background-color: "," !important;\n    border-color: ",";\n    color: #fff;\n    /* box-shadow: 0px 0px 16px rgba(62, 62, 62, 0.42);\n    transition: 0.5s; */\n  }\n"])),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.darker))}}]);
//# sourceMappingURL=132.15f1c1bf.chunk.js.map