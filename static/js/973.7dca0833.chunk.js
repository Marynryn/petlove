"use strict";(self.webpackChunkpetlove=self.webpackChunkpetlove||[]).push([[973],{9814:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(27565),i=n(20240),o=n(47854),p=n(42826),s=n(56762),a=n(36937),x=n(11030),l=n(4668),d=n(27929);const c=e=>{let{onSearch:t,bgColor:n}=e;const[c,h]=(0,r.useState)(""),u="/notices"===(0,x.zy)().pathname;(0,r.useEffect)((()=>{t&&h("")}),[t,h]);const b={mt:0,mb:0,"& .MuiOutlinedInput-root":{backgroundColor:"".concat(n),borderRadius:"30px",margin:"0",border:"none",height:"42px",mt:0,mb:0,[l.A.breakpoints.up("md")]:{height:"48px"}},"& .MuiFormControl-root.MuiTextField-root":{mt:0,mb:0},"& .MuiOutlinedInput-notchedOutline":{border:u?"none":"1px solid rgba(38, 38, 38, 0.15)"},"& .MuiInputBase-input":{m:0,mt:0,mb:0,"&::placeholder":{opacity:u?1:.8,color:u?"var(--primary-color)":"rgba(38, 38, 38, 0.50)",fontSize:"14px",fontWeight:500}}};return(0,d.jsx)(i.A,{component:"div",sx:{m:0,boxShadow:"none",backgroundColor:"var(--background-gray)"},children:(0,d.jsxs)(o.A,{sx:{display:"flex",alignItems:"center",mt:"4px",borderRadius:"30px",position:"relative",[l.A.breakpoints.up("md")]:{m:0}},children:[(0,d.jsx)(p.A,{sx:b,id:"name",InputLabelProps:{shrink:!1},value:c,onChange:e=>{h(e.target.value)},placeholder:"Search",fullWidth:!0,margin:"normal",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u042f]*)*$"}),c&&(0,d.jsx)(s.A,{onClick:()=>{h(""),t("")},sx:{position:"absolute",right:"32px",p:0,top:"12px",[l.A.breakpoints.up("md")]:{top:"16px"}},children:(0,d.jsx)("svg",{width:18,height:18,style:{stroke:"#EF2447",fill:"#EF2447"},children:(0,d.jsx)("use",{href:"".concat(a.A,"#icon-x")})})}),(0,d.jsx)(s.A,{type:"submit",onClick:e=>{e.preventDefault(),t(c)},sx:{position:"absolute",right:"12px",p:0,top:"12px",[l.A.breakpoints.up("md")]:{top:"16px"}},children:(0,d.jsx)("svg",{width:18,height:18,style:{stroke:"var(--primary-color)",fill:"white"},children:(0,d.jsx)("use",{href:"".concat(a.A,"#icon-search")})})})]})})}},73706:(e,t,n)=>{n.d(t,{A:()=>d});n(27565);var r=n(47854),i=n(56762),o=n(22680),p=n(81142),s=n(289),a=n(51387),x=n(4668),l=n(27929);const d=e=>{let{totalPages:t,currentPage:n,onPageChange:d}=e;const c=1===n,h=n===t,u={borderRadius:"100%",border:"1px solid rgba(38, 38, 38, 0.20)",width:"38px",height:"38px",":hover":{scale:"1.05"},display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,[x.A.breakpoints.down("sm")]:{width:"34px",height:"34px"},[x.A.breakpoints.up("md")]:{width:"44px",height:"44px"}},b={display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,borderRadius:"100%",border:"1px solid",width:"38px",height:"38px",":hover":{scale:"1.05"},[x.A.breakpoints.down("sm")]:{width:"34px",height:"34px"},[x.A.breakpoints.up("md")]:{width:"44px",height:"44px"},borderColor:"var(--secondary-color)",backgroundColor:"var(--secondary-color)",color:"var(--background-color)"},A=[n];return n<t&&A.push(n+1),(0,l.jsxs)(r.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:"26px",gap:"6px",width:"334px",mb:"20px",[x.A.breakpoints.down("sm")]:{width:"280px",gap:"4px"},[x.A.breakpoints.up("md")]:{mx:"auto",width:"440px",gap:"8px",mt:"60px",mb:"48px"}},children:[(0,l.jsx)(i.A,{sx:u,onClick:()=>d(1),disabled:c,children:(0,l.jsx)(o.A,{sx:{p:"8px",minWidth:"18px",[x.A.breakpoints.down("sm")]:{p:"6px"}}})}),(0,l.jsx)(i.A,{sx:u,onClick:()=>d(n-1),disabled:c,children:(0,l.jsx)(p.A,{sx:{p:"8px",[x.A.breakpoints.down("sm")]:{p:"6px"}}})}),(0,l.jsxs)(r.A,{mx:"5px",sx:{display:"flex",gap:"10px",[x.A.breakpoints.down("sm")]:{gap:"6px",mx:0},[x.A.breakpoints.up("md")]:{mx:"24px"}},children:[A.map(((e,t)=>(0,l.jsx)(r.A,{sx:e===n?b:u,mx:0,onClick:()=>d(e),children:e},t))),(0,l.jsx)(r.A,{sx:{...u,display:h?"none":"flex"},children:"..."})]}),(0,l.jsx)(i.A,{sx:u,onClick:()=>d(n+1),disabled:h,children:(0,l.jsx)(s.A,{sx:{p:"8px",[x.A.breakpoints.down("sm")]:{p:"6px"}}})}),(0,l.jsx)(i.A,{sx:u,onClick:()=>d(t),disabled:h,children:(0,l.jsx)(a.A,{sx:{p:"8px",[x.A.breakpoints.down("sm")]:{p:"6px"}}})})]})}},38734:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5802),i=(n(27565),n(27929));const o=e=>{let{children:t}=e;return(0,i.jsxs)(r.A,{component:"h2",sx:e=>({fontSize:"28px",fontWeight:700,color:"text.primary",lineHeight:1,letterSpacing:"-1.12px",[e.breakpoints.up("md")]:{fontSize:"54px",letterSpacing:"-1.62px"}}),children:[" ",t]})}},72471:(e,t,n)=>{function r(e){if(void 0===e)return;const t=new Date(e),n=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).format(t).split("/");return"".concat(n[0],".").concat(n[1],".").concat(n[2])}function i(e){if(!e)return;const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(r)}n.d(t,{H:()=>i,b:()=>r})},9973:(e,t,n)=>{n.r(t),n.d(t,{News:()=>k,default:()=>v});var r=n(47854),i=n(27565),o=n(72471),p=n(5802),s=n(4668),a=n(27929);const x=e=>{let{props:t}=e;return(0,a.jsxs)(r.A,{children:[(0,a.jsx)(r.A,{component:"img",src:t.imgUrl,alt:t.title,sx:{width:"100%",[s.A.breakpoints.up("md")]:{width:"335px"},mb:"20px",height:"190px",borderRadius:"15px",[s.A.breakpoints.up("md")]:{height:"226px",width:"340px",mb:"28px"},[s.A.breakpoints.up("lg")]:{width:"360px"}}}),(0,a.jsx)(p.A,{sx:{fontWeight:700,fontSize:"16px",mb:"12px",[s.A.breakpoints.up("md")]:{height:"52px",mb:"14px",fontSize:"20px",width:"340px",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",textOverflow:"ellipsis",lineHeight:"26px",[s.A.breakpoints.up("lg")]:{width:"360px"}}},children:t.title}),(0,a.jsx)(p.A,{sx:{fontWeight:500,fontSize:"14px",mb:"19px",height:"80px",letterSpacing:"-0.28px",[s.A.breakpoints.up("md")]:{mb:"28px",fontSize:"16px",letterSpacing:"-0.32px",width:"340px",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:4,overflow:"hidden",textOverflow:"ellipsis",lineHeight:"20px",[s.A.breakpoints.up("lg")]:{width:"360px"}}},children:t.text}),(0,a.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",[s.A.breakpoints.up("md")]:{mb:"28px"}},children:[(0,a.jsx)(p.A,{sx:{fontSize:"14px",[s.A.breakpoints.up("md")]:{fontSize:"16px"}},children:(0,o.b)(t.date)}),(0,a.jsx)("a",{href:t.url,style:{color:"var(--secondary-color)",textAlign:"center",textDecoration:"none"},children:(0,a.jsx)(p.A,{sx:{fontSize:"14px",[s.A.breakpoints.up("md")]:{fontSize:"16px"}},children:"Read more"})})]})]})};var l=n(86849),d=n(11370);const c=e=>{let{news:t}=e;return(0,a.jsx)(l.A,{sx:{p:0,mt:"34px",[s.A.breakpoints.up("md")]:{mt:"44px",display:"flex",flexWrap:"wrap",gap:" 32px 24px"},[s.A.breakpoints.up("lg")]:{gap:"40px 35px"}},children:t.map((e=>(0,a.jsx)(d.Ay,{sx:{[s.A.breakpoints.up("sm")]:{width:"335px"},p:0,mb:"24px",[s.A.breakpoints.up("md")]:{width:"340px",m:"0",height:"476px"},[s.A.breakpoints.up("lg")]:{width:"360px"}},children:(0,a.jsx)(x,{props:e})},e._id)))})};var h=n(9814),u=n(38734),b=n(10723),A=n(73706),m=n(87046),g=n(97468),f=n(62986);const k=e=>{let{onSearch:t}=e;const n=(0,b.wA)(),o=(0,b.d4)(g.x2),p=(0,b.d4)(g.Og),x=(0,b.d4)(g.TG),[l,d]=(0,i.useState)(1);(0,i.useEffect)((()=>{n((0,m.aE)({filter:o,page:l,perPage:6}))}),[n,o,l]);return(0,a.jsxs)(r.A,{sx:{mt:"60px",[s.A.breakpoints.up("md")]:{mt:"96px"},[s.A.breakpoints.up("lg")]:{mt:"107px"}},children:[(0,a.jsxs)(r.A,{sx:{[s.A.breakpoints.up("md")]:{display:"flex",justifyContent:"space-between"}},children:[" ",(0,a.jsx)(r.A,{sx:{mb:"20px",[s.A.breakpoints.up("md")]:{mb:0}},children:(0,a.jsx)(u.A,{children:"News"})}),(0,a.jsx)(h.A,{onSearch:e=>{n((0,f.R6)(e)),d(1)}})]}),(0,a.jsx)(c,{news:p}),x>1&&(0,a.jsx)(A.A,{totalPages:x,currentPage:l,onPageChange:e=>{d(e)}})]})},v=k},81142:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(20549)),o=n(27929);t.A=(0,i.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft")},289:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(20549)),o=n(27929);t.A=(0,i.default)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},22680:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(20549)),o=n(27929);t.A=(0,i.default)([(0,o.jsx)("path",{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},"0"),(0,o.jsx)("path",{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},"1")],"KeyboardDoubleArrowLeft")},51387:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(20549)),o=n(27929);t.A=(0,i.default)([(0,o.jsx)("path",{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},"0"),(0,o.jsx)("path",{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},"1")],"KeyboardDoubleArrowRight")},20549:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(58799)},58799:(e,t,n)=>{n.r(t),n.d(t,{capitalize:()=>i.A,createChainedFunction:()=>o,createSvgIcon:()=>p.A,debounce:()=>s.A,deprecatedPropType:()=>a,isMuiElement:()=>x.A,ownerDocument:()=>l.A,ownerWindow:()=>d.A,requirePropFactory:()=>c,setRef:()=>h,unstable_ClassNameGenerator:()=>v,unstable_useEnhancedEffect:()=>u.A,unstable_useId:()=>b.A,unsupportedProp:()=>A,useControlled:()=>m.A,useEventCallback:()=>g.A,useForkRef:()=>f.A,useIsFocusVisible:()=>k.A});var r=n(50852),i=n(23637);const o=n(50714).A;var p=n(86946),s=n(7680);const a=function(e,t){return()=>null};var x=n(98387),l=n(61293),d=n(71324);n(58168);const c=function(e,t){return()=>null};const h=n(91334).A;var u=n(71559),b=n(12337);const A=function(e,t,n,r,i){return null};var m=n(33586),g=n(18197),f=n(84847),k=n(88177);const v={configure:e=>{r.A.configure(e)}}},12337:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(74654).A}}]);
//# sourceMappingURL=973.7dca0833.chunk.js.map