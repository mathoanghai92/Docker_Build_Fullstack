(this["webpackJsonpcrm-v3"]=this["webpackJsonpcrm-v3"]||[]).push([[81],{1262:function(e,t,a){"use strict";t.a=a.p+"static/media/deleteObject.73bd03c7.png"},1263:function(e,t,a){"use strict";var n,c,l,o,i,r,s,d=a(21),u=a(102),b=a.n(u),p=a(320),m=a.n(p),j=a(1262),h=(a(0),a(39)),f=a(3),g=a(285),O=a(16),x=a(480),_=a(1229),y=a(2);const v=e=>{let{dataDelete:t,title:a,decs:n,methodDelete:c,setShowModalDelete:l,isLoading:o,mask:i,loadData:r,setPositionLogo:s,openConfirm:d,setOpenConfirm:u,type:b,onDelete:p}=e;const m=Object(h.c)(),{t:O}=Object(x.a)(),{showModalConfirmDelete:_}=Object(g.d)((e=>e.globalReducer)),v=()=>{"custom-view"===b&&u(!1),m(Object(f.setShowModalConfirmDelete)(!1)),l&&l(!0)};return Object(y.jsxs)(q,{title:O("common.confirmAction"),visible:"custom-view"===b?d:_,mask:i,onCancel:()=>{v()},width:400,footer:null,children:[Object(y.jsxs)(k,{children:[Object(y.jsx)("img",{alt:"",src:j.a}),Object(y.jsxs)(I,{children:[O("common.confirmDelete")," ",a,"?"]}),Object(y.jsx)(E,{children:n})]}),Object(y.jsxs)(w,{children:[Object(y.jsx)(S,{size:"large",htmlType:"submit",loading:o,onClick:()=>{c&&m(c({...t})),r(),m(Object(f.setShowModalConfirmDelete)(!1)),p&&p(),s&&s(t),"custom-view"===b&&u(!1)},children:O("common.delete")}),Object(y.jsx)(C,{size:"large",onClick:()=>{v()},children:O("common.cancel")})]})]})};t.a=Object(_.a)()(v),v.defaultProps={loadData:()=>{},type:"",openConfirm:!1,setOpenConfirm:()=>{}};const w=O.b.div(n||(n=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 34px;\n"]))),S=Object(O.b)(b.a)(c||(c=Object(d.a)(["\n  background-color: ",";\n  color: #fff;\n  margin-right: 16px;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.main),(e=>e.theme.darker)),C=Object(O.b)(b.a)(l||(l=Object(d.a)(["\n  background-color: #fff;\n  border-radius: 4px;\n\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"])),(e=>e.theme.darker)),k=O.b.div(o||(o=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    width: 70px;\n    margin-bottom: 16px;\n  }\n"]))),I=O.b.span(i||(i=Object(d.a)(["\n  font-family: var(--roboto-500);\n  font-size: 18px;\n  line-height: 26px;\n  color: #2c2c2c;\n  text-align: center;\n"]))),E=O.b.span(r||(r=Object(d.a)(["\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #595959;\n"]))),q=Object(O.b)(m.a)(s||(s=Object(d.a)(["\n  .ant-modal-header {\n    border-radius: 10px 10px 0 0;\n    background: #f2f4f5;\n    padding: 7px 24px;\n  }\n\n  .ant-modal-title {\n    font-family: var(--roboto-700);\n  }\n\n  .ant-modal-close-x {\n    height: 36.6px;\n    line-height: 36.6px;\n\n    .anticon {\n      color: #141414;\n    }\n  }\n\n  .ant-modal-content {\n    border-radius: 10px;\n  }\n"])))},1264:function(e,t,a){"use strict";t.a=a.p+"static/media/delete.9999fdd9.svg"},1267:function(e,t,a){"use strict";var n=a(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(1269));t.default=c.default},1269:function(e,t,a){"use strict";var n=a(24).default,c=a(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(44)),o=c(a(34)),i=c(a(108)),r=c(a(11)),s=c(a(236)),d=n(a(0)),u=a(61),b=c(a(251)),p=a(158),m=(c(a(93)),c(a(1270))),j=c(a(1271)),h=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};function f(e,t,a,n){var c=a.indexOf(e)===a.length-1,l=function(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}))}(e,t);return c?d.createElement("span",null,l):d.createElement("a",{href:"#/".concat(n.join("/"))},l)}var g=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},O=function(e,t,a){var n=(0,i.default)(e),c=g(t||"",a);return c&&n.push(c),n},x=function(e){var t,a=e.prefixCls,n=e.separator,c=void 0===n?"/":n,i=e.style,j=e.className,x=e.routes,_=e.children,y=e.itemRender,v=void 0===y?f:y,w=e.params,S=void 0===w?{}:w,C=h(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),k=d.useContext(u.ConfigContext),I=k.getPrefixCls,E=k.direction,q=I("breadcrumb",a);if(x&&x.length>0){var N=[];t=x.map((function(e){var t,a=g(e.path,S);a&&N.push(a),e.children&&e.children.length&&(t=d.createElement(b.default,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:v(e,S,x,O(N,e.path,S))}}))}));var n={separator:c};return t&&(n.overlay=t),d.createElement(m.default,(0,o.default)({},n,{key:a||e.breadcrumbName}),v(e,S,x,N))}))}else _&&(t=(0,s.default)(_).map((function(e,t){return e?(0,p.cloneElement)(e,{separator:c,key:t}):e})));var P=(0,r.default)(q,(0,l.default)({},"".concat(q,"-rtl"),"rtl"===E),j);return d.createElement("nav",(0,o.default)({className:P,style:i},C),d.createElement("ol",null,t))};x.Item=m.default,x.Separator=j.default;t.default=x},1270:function(e,t,a){"use strict";var n=a(24).default,c=a(17).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(34)),o=c(a(483)),i=n(a(0)),r=(c(a(93)),a(61)),s=c(a(485)),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},u=function(e){var t=e.prefixCls,a=e.separator,n=void 0===a?"/":a,c=e.children,u=e.menu,b=e.overlay,p=e.dropdownProps,m=d(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),j=(0,i.useContext(r.ConfigContext).getPrefixCls)("breadcrumb",t);var h;return h=function(t){if(u||b){var a=(0,l.default)({},p);return"overlay"in e&&(a.overlay=b),i.createElement(s.default,(0,l.default)({menu:u,placement:"bottom"},a),i.createElement("span",{className:"".concat(j,"-overlay-link")},t,i.createElement(o.default,null)))}return t}(h="href"in m?i.createElement("a",(0,l.default)({className:"".concat(j,"-link")},m),c):i.createElement("span",(0,l.default)({className:"".concat(j,"-link")},m),c)),void 0!==c&&null!==c?i.createElement("li",null,h,n&&i.createElement("span",{className:"".concat(j,"-separator")},n)):null};u.__ANT_BREADCRUMB_ITEM=!0;t.default=u},1271:function(e,t,a){"use strict";var n=a(24).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),l=a(61),o=function(e){var t=e.children,a=(0,c.useContext(l.ConfigContext).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(a,"-separator")},t||"/")};o.__ANT_BREADCRUMB_SEPARATOR=!0;t.default=o},1282:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a(12),l=a(29),o=a(0),i=a(11),r=a.n(i),s=a(82),d=a(35),u=o.forwardRef((function(e,t){var a,i=e.prefixCls,u=void 0===i?"rc-switch":i,b=e.className,p=e.checked,m=e.defaultChecked,j=e.disabled,h=e.loadingIcon,f=e.checkedChildren,g=e.unCheckedChildren,O=e.onClick,x=e.onChange,_=e.onKeyDown,y=Object(l.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),v=Object(s.a)(!1,{value:p,defaultValue:m}),w=Object(c.a)(v,2),S=w[0],C=w[1];function k(e,t){var a=S;return j||(C(a=e),null===x||void 0===x||x(a,t)),a}var I=r()(u,b,(a={},Object(n.a)(a,"".concat(u,"-checked"),S),Object(n.a)(a,"".concat(u,"-disabled"),j),a));return o.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":S,disabled:j,className:I,ref:t,onKeyDown:function(e){e.which===d.a.LEFT?k(!1,e):e.which===d.a.RIGHT&&k(!0,e),null===_||void 0===_||_(e)},onClick:function(e){var t=k(!S,e);null===O||void 0===O||O(t,e)}}),h,o.createElement("span",{className:"".concat(u,"-inner")},S?f:g))}));u.displayName="Switch",t.default=u},1283:function(e,t,a){"use strict";t.a=a.p+"static/media/edit.688907bc.svg"},1334:function(e,t,a){"use strict";var n=a(16),c=a(480),l=a(26),o=a(1267),i=a.n(o),r=a(719),s=a.n(r),d=a(2);t.a=function(e){let{nameBreadcrumb:t,listObjects:a,onChange:n}=e;const{t:o}=Object(c.a)(),r=Object(l.o)();return Object(d.jsxs)(u,{children:[Object(d.jsxs)(i.a,{children:[Object(d.jsx)(i.a.Item,{onClick:()=>r("/settings"),children:o("consolidatedView.setting")}),Object(d.jsx)(b,{children:t})]}),Object(d.jsxs)(p,{children:[Object(d.jsx)("span",{style:{fontSize:"16px",marginRight:"16px"},children:o("coreSetting.selectObject")}),Object(d.jsx)(s.a,{placeholder:o("common.placeholderSelect"),options:a,onChange:n,optionFilterProp:!1,showSearch:!0})]})]})};const u=n.b.div.withConfig({displayName:"selectObject__Wrapper",componentId:"sc-ffqf3j-0"})(["margin-bottom:16px;.ant-breadcrumb-link{cursor:pointer;}"]),b=Object(n.b)(i.a.Item).withConfig({displayName:"selectObject__BreadcrumbItem",componentId:"sc-ffqf3j-1"})(["font-family:var(--roboto-500);font-size:18px !important;color:#2c2c2c;cursor:default;"]),p=n.b.div.withConfig({displayName:"selectObject__WrapSelectObject",componentId:"sc-ffqf3j-2"})(["display:flex;justify-content:center;align-items:center;.ant-select{width:400px;}"])},1423:function(e,t,a){"use strict";var n=a(9),c=a(8),l=a(177),o=a(11),i=a.n(o),r=a(1282),s=a(0),d=a(101),u=a(125),b=a(111),p=a(491),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},j=s.forwardRef((function(e,t){var a=e.prefixCls,o=e.size,j=e.disabled,h=e.loading,f=e.className,g=void 0===f?"":f,O=m(e,["prefixCls","size","disabled","loading","className"]),x=s.useContext(d.b),_=x.getPrefixCls,y=x.direction,v=s.useContext(b.b),w=s.useContext(u.b),S=(null!==j&&void 0!==j?j:w)||h,C=_("switch",a),k=s.createElement("div",{className:"".concat(C,"-handle")},h&&s.createElement(l.a,{className:"".concat(C,"-loading-icon")})),I=i()(Object(c.a)(Object(c.a)(Object(c.a)({},"".concat(C,"-small"),"small"===(o||v)),"".concat(C,"-loading"),h),"".concat(C,"-rtl"),"rtl"===y),g);return s.createElement(p.a,{insertExtraNode:!0},s.createElement(r.default,Object(n.a)({},O,{prefixCls:C,className:I,disabled:S,ref:t,loadingIcon:k})))}));j.__ANT_SWITCH=!0,t.a=j},1846:function(e,t,a){"use strict";a.r(t);var n,c=a(16),l=a(0),o=a(39),i=a(13),r=a.n(i),s=a(250),d=a.n(s),u=a(210),b=a.n(u),p=a(719),m=a.n(p),j=a(488),h=a.n(j),f=a(102),g=a.n(f),O=a(486),x=a.n(O),_=a(15),y=a(21),v=a(2);var w=function(e){let{item:t,relatedFields:a,listUser:n,onChangeValue:c}=e;return Object(v.jsx)(S,{children:"select"===t.type||"dynamic-field"===t.type||"user"===t.type||"linkingobject"===t.type?Object(v.jsx)(d.a.Item,{label:t.label,name:t.value,rules:[{required:t.required,message:"Please select ".concat(t.label,"!")}],children:Object(v.jsx)(m.a,{placeholder:"Select ".concat(t.label),allowClear:!0,options:"user"===t.type?n:"linkingobject"===t.type?a:t.option,onChange:e=>c(t.value,e)})}):Object(v.jsx)(d.a.Item,{label:t.label,name:t.value,rules:[{required:t.required,message:"Please input ".concat(t.label,"!")}],children:Object(v.jsx)(b.a,{placeholder:"Input ".concat(t.label),onChange:e=>c(t.value,e.target.value)})})})};const S=c.b.div(n||(n=Object(y.a)([""])));var C,k=a(480);var I=function(e){let{item:t,relatedFields:a,listUser:n,onChangeValue:c}=e;const{t:l}=Object(k.a)();return Object(v.jsx)(E,{children:"select"===t.type||"dynamic-field"===t.type||"user"===t.type||"linkingobject"===t.type?Object(v.jsx)(d.a.Item,{label:t.label,name:"".concat(t.value,"Update"),rules:[{required:t.required,message:"".concat(l("coreSetting.pleaseSelect")," ").concat(t.label,"!")}],children:Object(v.jsx)(m.a,{placeholder:"".concat(l("coreSetting.select")," ").concat(t.label),allowClear:!0,options:"user"===t.type?n:"linkingobject"===t.type?a:t.option,onChange:e=>c(t.value,e,"update")})}):Object(v.jsx)(d.a.Item,{label:t.label,name:"".concat(t.value,"Update"),rules:[{required:t.required,message:"".concat(l("coreSetting.pleaseInput")," ").concat(t.label,"!")}],children:Object(v.jsx)(b.a,{placeholder:"".concat(l("coreSetting.input")," ").concat(t.label),onChange:e=>c(t.value,e.target.value,"update")})})})};const E=c.b.div(C||(C=Object(y.a)([""])));var q=a(399),N=a.n(q),P=a(123),F=a.n(P),T=a(484),A=a.n(T),R=a(1283),D=a(1264),B=a(3),U=a(1263);var M=function(e){let{selectedObject:t,setIsEdit:a,checkRule:n}=e;const c=Object(o.c)(),{Column:i}=N.a,{Text:r}=A.a,{listCoreSetting:s,loading:d}=Object(o.d)((e=>e.consolidatedViewSettingsReducer)),{t:u}=Object(k.a)(),[b,p]=Object(l.useState)([]),[m,j]=Object(l.useState)({});return Object(l.useEffect)((()=>{c(Object(_.Db)({object_id:t}))}),[t,c]),Object(l.useEffect)((()=>{if(null!==s){let e=[];s.map(((t,a)=>e.push({key:t._id,name:t.name,api_url:t.api_url,method:t.method,created_by:t.created_by,created_date:t.created_date,action:""}))),p(e)}}),[s]),Object(v.jsxs)(L,{children:[Object(v.jsxs)(N.a,{pagination:!1,dataSource:b,children:[Object(v.jsx)(i,{title:"Name of component",dataIndex:"name",width:"229px"},"name"),Object(v.jsx)(i,{title:"API URL",dataIndex:"api_url",width:"320px",render:e=>Object(v.jsx)(r,{ellipsis:{tooltip:e},children:e})},"api_url"),Object(v.jsx)(i,{title:"Method",dataIndex:"method",width:"198px"},"method"),Object(v.jsx)(i,{title:u("coreSetting.createBy"),dataIndex:"created_by",width:"213px"},"created_by"),Object(v.jsx)(i,{title:u("coreSetting.createTime"),dataIndex:"created_date",width:"229px"},"created_date"),(n("edit")||n("delete"))&&Object(v.jsx)(i,{title:u("coreSetting.action"),dataIndex:"action",width:"107px",fixed:"right",render:(e,t)=>Object(v.jsxs)(V,{children:[n("edit")&&Object(v.jsx)(F.a,{title:"Edit",children:Object(v.jsx)("img",{onClick:()=>{return e=t.key,a(!0),void c(Object(_.Nb)({api_id:e}));var e},src:R.a,alt:"edit"})}),n("delete")&&Object(v.jsx)(F.a,{title:"Delete",children:Object(v.jsx)("img",{onClick:()=>{return e=t.key,c(Object(B.setShowModalConfirmDelete)(!0)),void j({api_id:e});var e},src:D.a,alt:"delete"})})]})},"action")]}),Object(v.jsx)(U.a,{title:"",decs:u("common.descriptionDelete"),methodDelete:_.F,dataDelete:m,isLoading:d.coreSetting})]})};const L=c.b.div.withConfig({displayName:"listCoreSetting__Wrapper",componentId:"sc-uglq9h-0"})(["width:calc(96% + 32px);padding:16px;background:#fff;border-radius:16px;margin-bottom:16px;"]),V=c.b.div.withConfig({displayName:"listCoreSetting__WrapAction",componentId:"sc-uglq9h-1"})(["img{cursor:pointer;margin-left:8px;width:18px;:hover{background:#eeeeee;}}"]);var W=a(1334),z=a(1423);const{Option:G}=m.a;t.default=function(){const e=Object(o.c)(),[t]=d.a.useForm(),{t:a}=Object(k.a)(),{userRuleGlobal:n}=Object(o.d)((e=>e.userReducer)),{fieldsObject:c,statusCoreSetting:i,detailsCoreSetting:s,components:u}=Object(o.d)((e=>e.consolidatedViewSettingsReducer)),{fields_related:p}=Object(o.d)((e=>e.fieldsManagementReducer)),{listFieldsObject:j}=Object(o.d)((e=>e.reportReducer)),{listAllUser:f}=Object(o.d)((e=>e.userReducer)),{category:O}=Object(o.d)((e=>e.objectsManagementReducer)),[y,S]=Object(l.useState)(void 0),[C,E]=Object(l.useState)([]),q=[{label:"GET",value:"GET"},{label:"POST",value:"POST"}],[N,P]=Object(l.useState)([]),[F,T]=Object(l.useState)([]),[A,R]=Object(l.useState)([]),[D,B]=Object(l.useState)([]),[U,L]=Object(l.useState)([]),[V,ce]=Object(l.useState)(!1),[le,oe]=Object(l.useState)(""),[ie,re]=Object(l.useState)(""),[se,de]=Object(l.useState)(""),[ue,be]=Object(l.useState)(0),[pe,me]=Object(l.useState)(!1),[je,he]=Object(l.useState)(!1),[fe,ge]=Object(l.useState)([]),[Oe,xe]=Object(l.useState)([]),[_e,ye]=Object(l.useState)([]),[ve,we]=Object(l.useState)([]),[Se,Ce]=Object(l.useState)([]),[ke,Ie]=Object(l.useState)([]),[Ee,qe]=Object(l.useState)({}),[Ne,Pe]=Object(l.useState)({}),[Fe,Te]=Object(l.useState)(""),Ae=e=>!!n.find((t=>"external_app_integration"===r.a.get(t,"domain","")&&t.actions.includes(e))),Re=(e,t,a)=>{let n=[...Oe];n[a]="key"===t?{[e]:Object.values(n[a])[0]}:{[Object.keys(n[a])[0]]:e},xe(n)},De=(e,t,a)=>{"create"===a?Ie(t):we(t)},Be=(e,t,a)=>{if("update"===a){let a={...Ee};a[e]=t,qe(a)}else{let a={...Ne};a[e]=t,Pe(a)}},Ue=Object(l.useCallback)(((a,n)=>{e(Object(_.dc)({object_id:a})),n||(Ie([]),t.setFieldsValue({notRequiredFieldCreate:[]}))}),[e,t]);return Object(l.useEffect)((()=>{if(null!==c){let e=[],t=[];c.forEach((a=>{"id"!==a.type&&(a.required?t.push({label:a.name,value:a.ID,type:a.type,option:a.option||[],required:a.required}):e.push({label:a.name,value:a.ID,type:a.type,option:a.option||[]}))})),B(e),Ce(t)}}),[c]),Object(l.useEffect)((()=>{let e=[];f.forEach((t=>{t.Active&&e.push({label:""===t.Middle_Name?t.Last_Name+" "+t.First_Name:t.Last_Name+" "+t.Middle_Name+" "+t.First_Name,value:t._id})})),L(e)}),[f]),Object(l.useEffect)((()=>{let e=[],t=[],a=[];p.forEach((n=>{e.push({label:n.name,value:n.ID,type:n.type,option:n.option||[]}),"id"!==n.type&&(n.required?a.push({label:n.name,value:n.ID,type:n.type,option:n.option||[],required:n.required}):t.push({label:n.name,value:n.ID,type:n.type,option:n.option||[]}))})),ye(a),R(t),P(e)}),[p]),Object(l.useEffect)((()=>{let e=[];j.forEach((t=>{null!==Object.values(t)[0]&&(Object.values(t)[0].readable||Object.values(t)[0].writeable)&&Object.values(t)[0].sections.forEach((t=>{t.fields.forEach((t=>{!1===t.hidden&&!1===t.permission_hidden&&e.push({label:t.related_name,value:t.full_field_id,type:t.type})}))}))})),T(e)}),[j]),Object(l.useEffect)((()=>{if(Object.keys(O).length>0){let e=[];Object.entries(O).forEach((t=>{let[a,n]=t;n.forEach((t=>{t.Status&&e.push({label:t.Name,value:t._id})}))})),E(e)}}),[O]),Object(l.useEffect)((()=>{if(V&&null!==s){let e=[];s.request_body.forEach((a=>{e.push(a.value),t.setFieldsValue({[a.value+"Body"]:a.selected_value})}));let a={},n=[],c=[];s.mapping_update.forEach((e=>{a[e.value]=e.selected_value,t.setFieldsValue({[e.value+"Update"]:e.selected_value}),!1===e.required&&(c.push(e),n.push(e.value))}));let l={},o=[],i=[];s.mapping_create.forEach((e=>{l[e.value]=e.selected_value,t.setFieldsValue({[e.value]:e.selected_value}),!1===e.required&&(i.push(e),o.push(e.value))})),Ie(i),we(c),he(r.a.get(s,"get_new_token_when_call",!1)),xe(r.a.get(s,"api_get_token.request_body",[])),Pe(l),qe(a),ge(s.request_body),Ue(s.object_create_record,!0),re(s.authentication_type),de(s.component_type),be(s.columns?s.columns:0),me(s.enable_listview_with_details),s.details_column_setting&&s.details_column_setting.forEach(((e,a)=>{t.setFieldsValue({["section".concat(a)]:e.section_name,["show_field".concat(a)]:e.display_fields})})),t.setFieldsValue({name:s.name,key_object:s.key_object,apiUrl:s.api_url,authenticationType:s.authentication_type,userName:s.user_name,method:s.method,componentType:s.component_type,object:s.object_create_record,requestBody:e,notRequiredFieldCreate:o,notRequiredFieldUpdate:n,query_key:s.query_key,token:null===s||void 0===s?void 0:s.token,api_url:r.a.get(s,"api_get_token.api_url",""),content_type:r.a.get(s,"api_get_token.content_type",""),methodToken:r.a.get(s,"api_get_token.method",""),get_new_token_when_call:r.a.get(s,"get_new_token_when_call",!1),columns:s.columns,enable_listview_with_details:s.enable_listview_with_details,list_of_components:s.list_of_components}),Te(s.object_create_record),oe(s._id)}}),[s,t,V,Ue]),Object(l.useEffect)((()=>{"success"===i&&(t.resetFields(),Ce([]),Ie([]),ge([]),we([]),Pe([]),qe([]),xe([]),he(!1),re(""),de(""),be(0),me(!1),ce(!1),e(Object(_.Db)({object_id:y})),e(Object(_.Gc)()))}),[t,i,e,y]),Object(l.useEffect)((()=>{Fe&&e(Object(_.vb)({object_id:Fe}))}),[e,Fe]),Object(l.useEffect)((()=>{t.resetFields(),Ce([]),Ie([]),ge([]),we([]),Pe([]),qe([]),xe([]),he(!1),re(""),de(""),me(!1),be(0),ce(!1),e(Object(_.Ob)()),Te(""),e(Object(_.xb)([]))}),[y,t,e]),Object(v.jsxs)(K,{children:[Object(v.jsx)(W.a,{nameBreadcrumb:"External app integration",onChange:t=>{S(t),e(Object(_.Gb)({api_version:"2",object_id:t}))},listObjects:C}),y&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(d.a,{form:t,onFinish:t=>{let a={};t.requestBody.map((e=>a[e]=t["".concat(e,"Body")]));let n=Se.concat(ke),c=[];n.forEach((e=>{c.push(e.value)}));let l=Object.keys(Ne),o={...Ne};l.forEach((e=>{!1===c.includes(e)&&delete o[e]}));let i=_e.concat(ve),s=[];i.forEach((e=>{s.push(e.value)}));let d=Object.keys(Ee),u={...Ee};d.forEach((e=>{!1===s.includes(e)&&delete u[e]}));let b=[];if("DETAILS"===t.componentType)for(let e=0;e<ue;e++)b.push({display_fields:t["show_field".concat(e)],section_name:t["section".concat(e)]});let p={name:t.name,key_object:t.key_object,object_id:y,api_url:t.apiUrl,authentication_type:t.authenticationType,user_name:t.userName,password:r.a.get(t,"password",void 0),token:t.token,method:t.method,component_type:t.componentType,object_create_record:t.object,request_body:a,mapping_update:u,mapping_create:o,query_key:t.query_key,get_new_token_when_call:r.a.get(t,"get_new_token_when_call",!1),api_get_token:{api_url:r.a.get(t,"api_url",""),method:r.a.get(t,"methodToken","POST"),request_body:Oe,content_type:r.a.get(t,"content_type","")},columns:t.columns,details_column_setting:b,enable_listview_with_details:"TABLE"===t.componentType?pe:void 0,list_of_components:t.list_of_components};e(V?Object(_.Sc)({...p,api_id:le}):Object(_.j)({...p}))},colon:!1,labelAlign:"left",layout:"vertical",children:[Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{col:je,children:Object(v.jsxs)(Q,{children:[Object(v.jsx)("legend",{children:a("coreSetting.infomation")}),Object(v.jsx)(d.a.Item,{label:"Name of component",name:"name",rules:[{required:!0,message:"Please input name component!"}],children:Object(v.jsx)(b.a,{})}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.keyOfObject"),name:"key_object",rules:[{required:!0,message:a("coreSetting.messageKey")}],children:Object(v.jsx)(b.a,{})}),Object(v.jsx)(d.a.Item,{label:"API URL",name:"apiUrl",rules:[{required:!0,message:a("coreSetting.messAPIURL")}],children:Object(v.jsx)(b.a,{})}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.authenticationType"),name:"authenticationType",rules:[{required:!0,message:a("coreSetting.messageAuthenticationType")}],children:Object(v.jsx)(m.a,{placeholder:a("coreSetting.placeholderAuthenticationType"),allowClear:!0,options:[{label:"Basic auth",value:"BASIC_AUTH"},{label:"Token",value:"token"}],onChange:e=>(e=>{re(e)})(e)})}),"BASIC_AUTH"===ie&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(d.a.Item,{label:a("coreSetting.userName"),name:"userName",rules:[{required:!0,message:a("coreSetting.messUserName")}],children:Object(v.jsx)(b.a,{})}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.password"),name:"password",children:Object(v.jsx)(b.a.Password,{autocomplete:"new-password"})})]}),"token"===ie&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(te,{name:"get_new_token_when_call",valuePropName:"checked",children:Object(v.jsx)(x.a,{onChange:e=>he(e.target.checked),children:"Get new token when call"})}),!je&&Object(v.jsx)(d.a.Item,{label:"Token",name:"token",rules:[{required:!0,message:"Please input token"}],children:Object(v.jsx)(b.a,{})})]}),Object(v.jsx)(te,{label:a("coreSetting.method"),name:"method",rules:[{required:!0,message:a("coreSetting.messMethod")}],children:Object(v.jsx)(h.a.Group,{optionType:"button",options:q})}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.requestBody"),name:"requestBody",rules:[{required:!0,message:a("coreSetting.messageRequestBody")}],children:Object(v.jsx)(m.a,{mode:"multiple",placeholder:a("coreSetting.placeholderRequestBody"),options:N,onChange:(e,t)=>((e,t)=>{let a=[...t];a.forEach(((t,n)=>{void 0===t.label&&(a[n]={label:e[n],value:e[n]})})),ge(a)})(e,t),optionFilterProp:"label",showSearch:!0})}),fe.length>0&&Object(v.jsx)(Z,{children:fe.map((e=>Object(v.jsx)(d.a.Item,{label:e.label,name:"".concat(e.value,"Body"),rules:[{required:!0,message:"Please input ".concat(e.label,"!")}],children:Object(v.jsx)(b.a,{})})))}),Object(v.jsx)(te,{label:a("coreSetting.type"),name:"componentType",rules:[{required:!0,message:a("coreSetting.messType")}],children:Object(v.jsx)(h.a.Group,{optionType:"button",options:[{label:"TABLE",value:"TABLE"},{label:"DETAILS",value:"DETAILS"}],onChange:e=>{de(e.target.value)}})}),"DETAILS"===se&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(d.a.Item,{label:"Columns",name:"columns",rules:[{required:!0,message:"Please choose columns"}],children:Object(v.jsx)(m.a,{placeholder:"Select columns ",allowClear:!0,options:[{label:1,value:1},{label:2,value:2},{label:3,value:3},{label:4,value:4},{label:5,value:5}],onChange:e=>{be(e)}})}),(e=>{let t=[];for(let a=0;a<e;a++)t.push({section:"section".concat(a),field:"show_field".concat(a)});return t.map(((e,t)=>Object(v.jsxs)(ne,{children:[Object(v.jsx)(d.a.Item,{label:"Section name",name:e.section,rules:[{required:!0,message:"Please input!"}],children:Object(v.jsx)(b.a,{placeholder:"Please input"})}),Object(v.jsx)(d.a.Item,{label:"Show field",name:e.field,rules:[{required:!0,message:"Please input!"}],children:Object(v.jsx)(m.a,{placeholder:"Please select",mode:"tags",option:[]})})]},t)))})(ue)]}),"TABLE"===se&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(te,{name:"enable_listview_with_details",label:"Enable listview with detail",valuePropName:"checked",children:Object(v.jsx)(z.a,{checkedChildren:a("knowledgeBase.on"),unCheckedChildren:a("knowledgeBase.off"),onChange:e=>{me(e)}})}),pe&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(d.a.Item,{label:"Components",name:"list_of_components",children:Object(v.jsx)(m.a,{placeholder:"Select components",mode:"multiple",children:u.map(((e,t)=>("tab"===e.type||e.component_type&&!e.enable_listview_with_details)&&e._id!==(null===s||void 0===s?void 0:s._id)&&Object(v.jsx)(G,{value:JSON.stringify(e),children:e.name},t)))})})})]})]})}),je&&Object(v.jsx)(J,{col:je,children:Object(v.jsxs)(Q,{children:[Object(v.jsx)("legend",{children:a("coreSetting.mappingFieldsToken")}),Object(v.jsx)(d.a.Item,{label:"API url",name:"api_url",rules:[{required:!0,message:"Please input API url!"}],children:Object(v.jsx)(b.a,{})}),Object(v.jsx)(d.a.Item,{label:"Content type",name:"content_type",rules:[{required:!0,message:"Please input Content type!"}],children:Object(v.jsx)(m.a,{options:[{label:"application/json",value:"application/json"},{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded"}]})}),Object(v.jsx)(te,{label:a("coreSetting.method"),name:"methodToken",rules:[{required:!0,message:a("coreSetting.messMethod")}],children:Object(v.jsx)(h.a.Group,{optionType:"button",options:q})}),Oe.length>0&&Object(v.jsx)(v.Fragment,{children:Oe.map(((e,t)=>Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[Object(v.jsx)(b.a,{placeholder:"key",value:Object.keys(e)[0],style:{width:"48%"},onChange:e=>Re(e.target.value,"key",t)}),Object(v.jsx)(b.a,{placeholder:"value",value:Object.values(e)[0],style:{width:"48%"},onChange:e=>Re(e.target.value,"value",t)})]},t)))}),Object(v.jsx)(ae,{onClick:()=>{xe([...Oe,{}])},children:Object(v.jsx)("span",{children:"+ Add new"})})]})}),Object(v.jsx)(J,{col:je,children:Object(v.jsxs)(X,{children:[Object(v.jsx)("legend",{children:a("coreSetting.mappingFieldsUpdate")}),_e.length>0&&Object(v.jsx)(v.Fragment,{children:_e.map(((e,t)=>Object(v.jsx)(I,{item:e,idx:t,relatedFields:F,listUser:U,onChangeValue:Be})))}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.addFields"),name:"notRequiredFieldUpdate",children:Object(v.jsx)(m.a,{mode:"multiple",placeholder:a("coreSetting.placeholderAddfields"),optionFilterProp:"label",options:A,onChange:(e,t)=>De(0,t,"update")})}),ve.length>0&&Object(v.jsx)($,{children:ve.map(((e,t)=>Object(v.jsx)(I,{item:e,idx:t,relatedFields:F,listUser:U,onChangeValue:Be})))})]})}),Object(v.jsx)(J,{col:je,children:Object(v.jsxs)(Y,{children:[Object(v.jsx)("legend",{children:a("coreSetting.mappingFieldsCreate")}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.selectObject"),name:"object",rules:[{required:!0,message:a("coreSetting.messSelectObject")}],children:Object(v.jsx)(m.a,{placeholder:a("coreSetting.selectObject"),optionFilterProp:"label",showSearch:!0,options:C,onChange:e=>{Ue(e),Te(e)}})}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.queryKey"),name:"query_key",rules:[{required:!0,message:a("coreSetting.messQueryKey")}],children:Object(v.jsx)(b.a,{})}),Se.length>0&&Object(v.jsx)(v.Fragment,{children:Se.map(((e,t)=>Object(v.jsx)(w,{item:e,idx:t,relatedFields:F,listUser:U,onChangeValue:Be})))}),Object(v.jsx)(d.a.Item,{label:a("coreSetting.addFields"),name:"notRequiredFieldCreate",children:Object(v.jsx)(m.a,{mode:"multiple",placeholder:a("coreSetting.placeholderAddfields"),optionFilterProp:"label",options:D,onChange:(e,t)=>De(0,t,"create")})}),ke.length>0&&Object(v.jsx)($,{children:ke.map(((e,t)=>Object(v.jsx)(w,{item:e,idx:t,relatedFields:F,listUser:U,onChangeValue:Be})))})]})})]}),Object(v.jsx)(ee,{children:Object(v.jsx)(g.a,{disabled:V&&!Ae("edit")||!V&&!Ae("create"),type:"primary",htmlType:"submit",children:a("common.save")})})]}),Object(v.jsx)(M,{selectedObject:y,setIsEdit:ce,checkRule:Ae})]})]})};const K=c.b.div.withConfig({displayName:"coreSetting__Wrapper",componentId:"sc-11xuvqi-0"})(["padding:16px 24px;.ant-form{margin-right:16px;}.ant-radio-button-wrapper-checked{color:",";border-color:"," !important;}.ant-radio-button-wrapper:hover{color:",";}.ant-form-item{margin-bottom:8px;}.ant-checkbox-checked .ant-checkbox-inner{background-color:",";border-color:",";}"],(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker),(e=>e.theme.main),(e=>e.theme.main)),H=c.b.div.withConfig({displayName:"coreSetting__Wrap",componentId:"sc-11xuvqi-1"})(["width:100%;display:flex;background:#ffffff;justify-content:space-between;padding:10px 16px 24px 16px;border-radius:2px;"]),J=c.b.div.withConfig({displayName:"coreSetting__WrapInfo",componentId:"sc-11xuvqi-2"})(["width:",";border-radius:2px;"],(e=>{let{col:t}=e;return t?"24%":"33%"})),Q=c.b.fieldset.withConfig({displayName:"coreSetting__BasicInfo",componentId:"sc-11xuvqi-3"})(["border:1px solid #ebebeb;max-height:497px;overflow-y:auto;background:#fff;padding:0 16px 8px 16px;border-radius:10px;legend{background:#fff;padding:5px 10px;width:fit-content;color:",";border-radius:5px;font-size:16px;font-family:var(--roboto-500);margin-bottom:0;border-bottom:none;}"],(e=>e.theme.main)),X=Object(c.b)(Q).withConfig({displayName:"coreSetting__MappingUpdate",componentId:"sc-11xuvqi-4"})([""]),Y=Object(c.b)(Q).withConfig({displayName:"coreSetting__MappingCreate",componentId:"sc-11xuvqi-5"})(["margin-right:0;"]),Z=c.b.div.withConfig({displayName:"coreSetting__WrapField",componentId:"sc-11xuvqi-6"})(["display:flex;flex-direction:column;border:1px solid #d9d9d9;border-radius:5px;padding:8px;max-height:90px;overflow-y:auto;margin-bottom:8px;.ant-form-item{:last-child{margin-bottom:0;}}"]),$=Object(c.b)(Z).withConfig({displayName:"coreSetting__WrapFieldUpdate",componentId:"sc-11xuvqi-7"})(["max-height:unset;.ant-form-item{:last-child{margin-bottom:8px;}}"]),ee=c.b.div.withConfig({displayName:"coreSetting__WrapButton",componentId:"sc-11xuvqi-8"})(["margin:16px 0;display:flex;justify-content:center;.ant-btn-primary{width:160px;font-size:16px;background:",";border:1px solid ",";color:#fff;height:unset;:hover{background:",";color:#fff;}}"],(e=>e.theme.main),(e=>e.theme.main),(e=>e.theme.darker)),te=Object(c.b)(d.a.Item).withConfig({displayName:"coreSetting__CustomFormItem",componentId:"sc-11xuvqi-9"})([".ant-form-item-row{flex-direction:row;align-items:center;justify-content:space-between;.ant-form-item-label{padding-bottom:0;}.ant-form-item-control{flex:unset;width:unset;}}.ant-switch{width:54px;}.ant-switch-checked{background-color:",";}"],(e=>e.theme.main)),ae=c.b.div.withConfig({displayName:"coreSetting__AddNew",componentId:"sc-11xuvqi-10"})(["width:fit-content;display:flex;align-items:center;cursor:pointer;span{margin-left:8px;color:",";font-size:16px;}"],(e=>e.theme.main)),ne=c.b.div.withConfig({displayName:"coreSetting__WrapSession",componentId:"sc-11xuvqi-11"})(["border:1px solid #ebebeb;border-radius:10px;padding:8px;width:100%;margin-bottom:8px;"])}}]);
//# sourceMappingURL=81.3d2dc347.chunk.js.map