(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[116],{1267:function(e,t,n){"use strict";var a=n(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(1269));t.default=c.default},1269:function(e,t,n){"use strict";var a=n(24).default,c=n(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(44)),l=c(n(34)),o=c(n(108)),i=c(n(11)),s=c(n(236)),d=a(n(0)),u=n(61),b=c(n(251)),f=n(158),p=(c(n(93)),c(n(1270))),m=c(n(1271)),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};function v(e,t,n,a){var c=n.indexOf(e)===n.length-1,r=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return c?d.createElement("span",null,r):d.createElement("a",{href:"#/".concat(a.join("/"))},r)}var h=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},O=function(e,t,n){var a=(0,o.default)(e),c=h(t||"",n);return c&&a.push(c),a},g=function(e){var t,n=e.prefixCls,a=e.separator,c=void 0===a?"/":a,o=e.style,m=e.className,g=e.routes,y=e.children,x=e.itemRender,_=void 0===x?v:x,C=e.params,E=void 0===C?{}:C,w=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),N=d.useContext(u.ConfigContext),k=N.getPrefixCls,S=N.direction,I=k("breadcrumb",n);if(g&&g.length>0){var P=[];t=g.map((function(e){var t,n=h(e.path,E);n&&P.push(n),e.children&&e.children.length&&(t=d.createElement(b.default,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:_(e,E,g,O(P,e.path,E))}}))}));var a={separator:c};return t&&(a.overlay=t),d.createElement(p.default,(0,l.default)({},a,{key:n||e.breadcrumbName}),_(e,E,g,P))}))}else y&&(t=(0,s.default)(y).map((function(e,t){return e?(0,f.cloneElement)(e,{separator:c,key:t}):e})));var R=(0,i.default)(I,(0,r.default)({},"".concat(I,"-rtl"),"rtl"===S),m);return d.createElement("nav",(0,l.default)({className:R,style:o},w),d.createElement("ol",null,t))};g.Item=p.default,g.Separator=m.default;t.default=g},1270:function(e,t,n){"use strict";var a=n(24).default,c=n(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(34)),l=c(n(483)),o=a(n(0)),i=(c(n(93)),n(61)),s=c(n(485)),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},u=function(e){var t=e.prefixCls,n=e.separator,a=void 0===n?"/":n,c=e.children,u=e.menu,b=e.overlay,f=e.dropdownProps,p=d(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),m=(0,o.useContext(i.ConfigContext).getPrefixCls)("breadcrumb",t);var j;return j=function(t){if(u||b){var n=(0,r.default)({},f);return"overlay"in e&&(n.overlay=b),o.createElement(s.default,(0,r.default)({menu:u,placement:"bottom"},n),o.createElement("span",{className:"".concat(m,"-overlay-link")},t,o.createElement(l.default,null)))}return t}(j="href"in p?o.createElement("a",(0,r.default)({className:"".concat(m,"-link")},p),c):o.createElement("span",(0,r.default)({className:"".concat(m,"-link")},p),c)),void 0!==c&&null!==c?o.createElement("li",null,j,a&&o.createElement("span",{className:"".concat(m,"-separator")},a)):null};u.__ANT_BREADCRUMB_ITEM=!0;t.default=u},1271:function(e,t,n){"use strict";var a=n(24).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),r=n(61),l=function(e){var t=e.children,n=(0,c.useContext(r.ConfigContext).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(n,"-separator")},t||"/")};l.__ANT_BREADCRUMB_SEPARATOR=!0;t.default=l},1334:function(e,t,n){"use strict";var a=n(16),c=n(480),r=n(26),l=n(1267),o=n.n(l),i=n(719),s=n.n(i),d=n(2);t.a=function(e){let{nameBreadcrumb:t,listObjects:n,onChange:a}=e;const{t:l}=Object(c.a)(),i=Object(r.o)();return Object(d.jsxs)(u,{children:[Object(d.jsxs)(o.a,{children:[Object(d.jsx)(o.a.Item,{onClick:()=>i("/settings"),children:l("consolidatedView.setting")}),Object(d.jsx)(b,{children:t})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("span",{style:{fontSize:"16px",marginRight:"16px"},children:l("coreSetting.selectObject")}),Object(d.jsx)(s.a,{placeholder:l("common.placeholderSelect"),options:n,onChange:a,optionFilterProp:!1,showSearch:!0})]})]})};const u=a.b.div.withConfig({displayName:"selectObject__Wrapper",componentId:"sc-ffqf3j-0"})(["margin-bottom:16px;.ant-breadcrumb-link{cursor:pointer;}"]),b=Object(a.b)(o.a.Item).withConfig({displayName:"selectObject__BreadcrumbItem",componentId:"sc-ffqf3j-1"})(["font-family:var(--roboto-500);font-size:18px !important;color:#2c2c2c;cursor:default;"]),f=a.b.div.withConfig({displayName:"selectObject__WrapSelectObject",componentId:"sc-ffqf3j-2"})(["display:flex;justify-content:center;align-items:center;.ant-select{width:400px;}"])},1810:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(0),r=n(39),l=n(13),o=n.n(l),i=n(250),s=n.n(i),d=n(210),u=n.n(d),b=n(719),f=n.n(b),p=n(102),m=n.n(p),j=n(28),v=n(14),h=n(15),O=n(1334),g=n(2);t.default=function(){var e,t,a;const l=Object(r.c)(),[i]=s.a.useForm(),d=n(188),{listObjectField:b}=Object(r.d)((e=>e.objectsReducer)),{userDetail:p,userRuleGlobal:w}=Object(r.d)((e=>e.userReducer)),{detailsVoiceBot:N}=Object(r.d)((e=>e.consolidatedViewSettingsReducer)),{category:k}=Object(r.d)((e=>e.objectsManagementReducer)),[S,I]=Object(c.useState)(void 0),[P,R]=Object(c.useState)([]),[B,F]=Object(c.useState)([]),M=e=>!!w.find((t=>"voice_bot"===o.a.get(t,"domain","")&&t.actions.includes(e)));return Object(c.useEffect)((()=>{if(Object.keys(k).length>0){let e=[];Object.entries(k).forEach((t=>{let[n,a]=t;a.forEach((t=>{t.Status&&e.push({label:t.Name,value:t._id})}))})),R(e)}}),[k]),Object(c.useEffect)((()=>{let e=[];b.forEach((t=>{null!==Object.values(t)[0]&&(Object.values(t)[0].readable||Object.values(t)[0].writeable)&&"main_object"===Object.keys(t)[0]&&Object.values(t)[0].sections.forEach((t=>{t.fields.forEach((t=>{!1!==t.hidden||!1!==t.permission_hidden||o.a.get(t,"encrypted",!1)||e.push({label:t.related_name,value:t.full_field_id,type:t.type})}))}))})),F(e)}),[b]),Object(c.useEffect)((()=>{let e=d.decode(localStorage.getItem("setting_accessToken"));l(Object(j.L)({_id:e.crm_claims?JSON.parse(e.crm_claims).ID:e.ID}))}),[l,d]),Object(c.useEffect)((()=>{var e;N&&null!==(e=Object.keys(N))&&void 0!==e&&e.length&&i.setFieldsValue({tenant:N.tenant_vbee,object:N.object_vbee,fields:N.field_ids})}),[N,i]),Object(g.jsxs)(y,{children:[Object(g.jsx)(O.a,{nameBreadcrumb:"Voice bot setting",onChange:e=>{I(e),l(Object(v.rb)({api_version:"2",object_id:e})),i.resetFields(),l(Object(h.Z)({object_id:e}))},listObjects:P}),S&&Object(g.jsx)(x,{children:Object(g.jsxs)(s.a,{form:i,onFinish:e=>{var t;let n={tenant_id:p.tenant_id,tenant_vbee:e.tenant,object_id:S,object_vbee:e.object,field_ids:e.fields};(null===(t=Object.keys(N))||void 0===t?void 0:t.length)>0?l(Object(h.wd)({...n})):l(Object(h.z)({...n}))},labelCol:{span:7},wrapperCol:{span:17},colon:!1,labelAlign:"right",children:[Object(g.jsx)(s.a.Item,{label:Object(g.jsxs)(_,{children:[null===p||void 0===p?void 0:p.tenant_name,Object(g.jsx)("span",{children:"Tenant"})]}),name:"tenant",children:Object(g.jsx)(u.a,{placeholder:"Please input"})}),Object(g.jsx)(s.a.Item,{label:Object(g.jsxs)(C,{children:[P.find((e=>e.value===S)).label,Object(g.jsx)("span",{children:"Object"})]}),name:"object",children:Object(g.jsx)(u.a,{placeholder:"Please input"})}),Object(g.jsx)(s.a.Item,{label:"Fields",name:"fields",children:Object(g.jsx)(f.a,{mode:"multiple",placeholder:"Please select",options:B,optionFilterProp:"label"})}),Object(g.jsx)(E,{children:Object(g.jsx)(m.a,{disabled:N&&(null===(e=Object.keys(N))||void 0===e?void 0:e.length)>0&&!M("edit")||N&&0===(null===(t=Object.keys(N))||void 0===t?void 0:t.length)&&!M("create"),type:"primary",htmlType:"submit",children:N&&(null===(a=Object.keys(N))||void 0===a?void 0:a.length)>0?Object(g.jsx)("span",{children:"Update"}):Object(g.jsx)("span",{children:"Save"})})})]})})]})};const y=a.b.div.withConfig({displayName:"voiceBotSetting__Wrapper",componentId:"sc-1dbv4ms-0"})(["padding:16px 24px;.ant-form{margin:0 auto;width:700px;}.ant-form-item-label > label{height:100%;font-size:16px;color:#2c2c2c;float:left;text-align:left;}"]),x=a.b.div.withConfig({displayName:"voiceBotSetting__Wrap",componentId:"sc-1dbv4ms-1"})(["height:fit-content;background:#fff;border-radius:10px;padding:40px;"]),_=a.b.div.withConfig({displayName:"voiceBotSetting__TenantName",componentId:"sc-1dbv4ms-2"})(["display:flex;flex-direction:column;font-family:var(--roboto-700);span{font-size:14px;font-family:var(--roboto-400);color:#8c8c8c;}"]),C=Object(a.b)(_).withConfig({displayName:"voiceBotSetting__ObjectName",componentId:"sc-1dbv4ms-3"})([""]),E=a.b.div.withConfig({displayName:"voiceBotSetting__WrapButton",componentId:"sc-1dbv4ms-4"})(["margin:16px 0;display:flex;justify-content:center;.ant-btn-primary{width:160px;font-size:16px;background:",";border:1px solid ",";color:#fff;height:unset;:hover{background:",";color:#fff;}}"],(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker))}}]);
//# sourceMappingURL=116.70b6c64c.chunk.js.map