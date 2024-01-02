(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[148],{2110:function(e,t,o){"use strict";o.r(t);var r=o(16),a=o(0),i=o(39),n=o(26),s=o(480),c=o(1229),l=o(1244),d=o(1245),p=o(708),m=o(1252),h=o(148),g=o.p+"static/media/forgotPassword.3bd7abea.jpg",b=o.p+"static/media/changePassword.f0e74a54.png",f=o(267),x=o(644),u=o(5),j=(o(522),o(63)),w=o(2);t.default=Object(c.a)()((e=>{const{t:t}=Object(s.a)(),r=Object(i.c)(),c=Object(n.o)(),{pathname:f}=Object(n.m)(),_=o(188),P=window.location.search,C=new URLSearchParams(P).get("token"),{isLoading:N}=Object(i.d)((e=>e.authenticatedReducer)),[z,E]=Object(a.useState)(""),I=e=>{f.split("/").includes("forgot-password")?r(Object(j.d)({email:e.trim()})):r(Object(j.q)({reset_token:C,password:_.sign({password:e.new_pass},u.g,{algorithm:"HS256"}),confirm_password:_.sign({password:e.verify_pass},u.g,{algorithm:"HS256"})}))};return Object(w.jsx)(y,{children:Object(w.jsx)(v,{children:Object(w.jsxs)(l.a,{children:[Object(w.jsx)(d.a,{span:10,children:Object(w.jsx)("img",{src:f.split("/").includes("forgot-password")?g:b,alt:"welcome-back",className:"welcome_back"})}),Object(w.jsx)(d.a,{span:14,children:f.split("/").includes("forgot-password")?Object(w.jsxs)(O,{children:[Object(w.jsx)("img",{src:x.a,alt:"",className:"logo"}),Object(w.jsx)("div",{style:{display:"flex",justifyContent:"left",width:"90%",fontStyle:"normal",fontWeight:"bold",fontSize:"16px",lineHeight:"22px",textAlign:"center",color:"#000",marginBottom:"8px"},children:Object(w.jsx)("span",{children:"Email c\u1ee7a b\u1ea1n"})}),Object(w.jsx)(p.a,{type:"email",style:{width:"90%"},size:"large",onChange:e=>{E(e.target.value)}}),Object(w.jsx)(k,{loading:N,onClick:()=>{I(z)},disabled:0===z.length,children:"Kh\xf4i ph\u1ee5c l\u1ea1i m\u1eadt kh\u1ea9u"}),Object(w.jsx)("div",{className:"backToLogin",onClick:()=>{c("/login")},children:"V\u1ec1 trang \u0111\u0103ng nh\u1eadp"})]}):Object(w.jsxs)(O,{children:[Object(w.jsx)("img",{src:x.a,alt:"",className:"logo"}),Object(w.jsxs)(m.a,{onFinish:e=>I(e),layout:"vertical",autoComplete:"off",requiredMark:!1,children:[Object(w.jsx)(m.a.Item,{label:"M\u1eadt kh\u1ea9u m\u1edbi",name:"new_pass",rules:[{required:!0,message:"Please input your new password!"},()=>({validator:(e,o)=>o?o.length<8?Promise.reject(new Error(t("user.errorPass"))):o.match(/(?=.*?[a-z])/)?o.match(/(?=.*?[0-9])/)?o.match(/(?=.*?[,./=+<({})>[|!@#$%^&*?_-])/)||o.includes("]")||o.includes("\\")?o.match(/(?=.*?[A-Z])/)?Promise.resolve():Promise.reject(new Error(t("user.errorPass3"))):Promise.reject(new Error(t("user.errorPass4"))):Promise.reject(new Error(t("user.errorPass5"))):Promise.reject(new Error(t("user.errorPass2"))):Promise.resolve()})],children:Object(w.jsx)(p.a.Password,{placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u m\u1edbi",style:{height:"54px"}})}),Object(w.jsx)(m.a.Item,{label:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u m\u1edbi",name:"verify_pass",rules:[{required:!0,message:"Please input your verify password!"},e=>{let{getFieldValue:o}=e;return{validator:(e,r)=>r&&o("new_pass")!==r?Promise.reject(new Error(t("user.errorPass6"))):Promise.resolve()}}],children:Object(w.jsx)(p.a.Password,{placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u m\u1edbi",style:{height:"54px"}})}),Object(w.jsx)(m.a.Item,{children:Object(w.jsx)(h.a,{type:"primary",htmlType:"submit",style:{backgroundColor:"#20a2a2",borderColor:"#20a2a2",height:"54px"},loading:N,children:"Save"})})]})]})})]})})})}));const y=r.b.div.withConfig({displayName:"forgotPassword__PageWrapper",componentId:"sc-1der8ll-0"})(["height:100vh;background-image:url(",");background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;.forgot-password{color:#20a2a2;cursor:pointer;:hover{text-decoration:underline;}}"],f.a),k=Object(r.b)(h.a).withConfig({displayName:"forgotPassword__CustomButton",componentId:"sc-1der8ll-1"})(["display:flex;margin-top:48px;justify-content:center;align-items:center;padding:26px;width:90%;background:#20a2a2;font-family:var(--roboto-700);font-size:16px;color:#fff;"]),v=r.b.div.withConfig({displayName:"forgotPassword__ContentWrapper",componentId:"sc-1der8ll-2"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:926px;height:580px;background-color:#fff;.ant-btn:hover{border-color:#20a2a2;color:#20a2a2;}.backToLogin{font-style:normal;font-family:var(--roboto-700);font-size:16px;line-height:22px;text-align:center;color:#016eff;margin-top:16px;:hover{cursor:pointer;text-decoration:underline;}}.ant-input-lg{height:66px;}.ant-btn:active{color:#fff;background-color:#1c8f8f !important;border-color:#1c8f8f !important;}.ant-btn:focus{color:#fff !important;background-color:#1c8f8f !important;border-color:#1c8f8f !important;}.welcome_back{width:386px;}@media screen and (max-width:1199px){width:694.5px;height:435px;.welcome_back{width:289.5px;}}"]),O=r.b.div.withConfig({displayName:"forgotPassword__FormWrapper",componentId:"sc-1der8ll-3"})(["display:flex;justify-content:flex-start;align-items:center;flex-direction:column;width:100%;height:100%;.logo{width:185px;height:72px;margin-top:127px;margin-bottom:24px;}.login_title{font-family:var(--roboto-700);font-size:28px;line-height:33px;text-align:center;letter-spacing:0.04em;font-variant:small-caps;margin-bottom:16px;color:#545454;}.ant-form{width:466px;}.input__username{margin-bottom:6px;}.remember_me__container{display:flex;justify-content:flex-start;width:100%;font-family:var(--roboto-400);font-size:16px;line-height:22px;color:rgba(0,0,0,0.85);.ant-checkbox-checked .ant-checkbox-inner{background-color:#20a2a2;border-color:#20a2a2;}}.ant-btn-primary{width:100%;border-color:#20a2a2;background-color:#20a2a2;}.ant-btn{height:42px;}@media screen and (max-width:1199px){.logo{width:138.75px;height:54px;margin-top:28.8px;margin-bottom:18px;}.login_title{font-family:var(--roboto-700);font-size:21px;line-height:24.5px;text-align:center;letter-spacing:0.04em;font-variant:small-caps;margin-bottom:12px;color:#545454;}.ant-form{width:349.5px;}.input__username{margin-bottom:4.5px;}.remember_me__container{display:flex;justify-content:flex-start;width:100%;font-family:var(--roboto-400);font-size:12px;line-height:16.5px;margin-bottom:0;color:rgba(0,0,0,0.85);.ant-checkbox-checked .ant-checkbox-inner{background-color:#20a2a2;border-color:#20a2a2;}}.ant-btn-primary{width:100%;border-color:#20a2a2;background-color:#20a2a2;}.ant-btn{height:31.5px;}}"])}}]);
//# sourceMappingURL=148.10e84a02.chunk.js.map