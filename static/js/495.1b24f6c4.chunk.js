"use strict";(self.webpackChunkpetlove=self.webpackChunkpetlove||[]).push([[495],{38734:(e,n,r)=>{r.d(n,{A:()=>s});var o=r(5802),t=(r(27565),r(27929));const s=e=>{let{children:n}=e;return(0,t.jsxs)(o.A,{component:"h2",sx:e=>({fontSize:"28px",fontWeight:700,color:"text.primary",lineHeight:1,letterSpacing:"-1.12px",[e.breakpoints.up("md")]:{fontSize:"54px",letterSpacing:"-1.62px"}}),children:[" ",n]})}},16495:(e,n,r)=>{r.r(n),r.d(n,{Friends:()=>b,default:()=>y});var o=r(47854),t=r(27565),s=r(86849),i=r(11370),l=r(5802),a=r(18413),p=r(27929);const c=e=>{let{props:n}=e;const r={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textDecoration:"none",color:"var(--primary-color)","&:hover":{color:"blue"}},t={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:500,fontSize:"14px",letterSpacing:"-0.28px",color:"rgba(38, 38, 38, 0.50)",display:"flex",justifyContent:"start",alignItems:"center",mb:"8px",height:"18px",lineHeight:"18px"},s={fontWeight:500,fontSize:"14px",letterSpacing:"-0.28px",color:"var(--primary-color)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};return(0,p.jsxs)(o.A,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},children:[n.email?(0,p.jsxs)(l.A,{sx:t,children:["Email:\xa0",(0,p.jsx)(a.A,{href:"mailto:".concat(n.email),sx:r,children:n.email})]}):(0,p.jsxs)(l.A,{sx:t,children:["Email:\xa0",(0,p.jsx)("span",{style:s,children:"address only"})]}),n.address&&n.addressUrl?(0,p.jsxs)(l.A,{sx:t,children:["Address:\xa0",(0,p.jsx)(a.A,{href:n.addressUrl,target:"_blank",rel:"noopener",sx:r,children:n.address})]}):(0,p.jsxs)(l.A,{sx:t,children:["Address:\xa0",(0,p.jsx)("span",{style:s,children:"website only"})]}),n.phone?(0,p.jsxs)(l.A,{sx:t,children:["Phone:\xa0",(0,p.jsx)(a.A,{href:"tel:".concat(n.phone),sx:r,children:n.phone})]}):(0,p.jsxs)(l.A,{sx:t,children:["Phone:\xa0",(0,p.jsx)("span",{style:s,children:"email only"})]})]})};var x=r(4668);const d=e=>{let{props:n}=e;const r=(new Date).getDay(),t=n.workDays&&n.workDays.length>0?n.workDays[r]:null,s={display:"flex",justifyContent:"end",color:"var(--secondary-color)",fontWeight:400,fontSize:"12px"};return(0,p.jsxs)(o.A,{sx:{bgcolor:"var(--background-color)",minWidth:"248px",width:"100%",borderRadius:"15px",p:"12px 12px 30px 20px",[x.A.breakpoints.up("md")]:{}},children:[t?(0,p.jsx)(o.A,{sx:s,children:t.isOpen?(0,p.jsxs)(l.A,{p:"8px",sx:{borderRadius:"30px",fontSize:"12px",backgroundColor:" #FFF4DF"},children:[t.from," - ",t.to]}):(0,p.jsx)(l.A,{p:"8px",sx:{borderRadius:"30px",fontSize:"12px",backgroundColor:" #FFF4DF"},children:"Closed"})}):(0,p.jsx)(o.A,{sx:s,children:(0,p.jsx)(l.A,{p:"8px",sx:{borderRadius:"30px",backgroundColor:" #FFF4DF",fontSize:"12px"},children:"Day and night"})}),(0,p.jsxs)(o.A,{sx:{display:"flex",gap:"14px"},children:[(0,p.jsx)(o.A,{children:(0,p.jsx)(o.A,{component:"img",src:n.imageUrl,alt:n.title,sx:{width:"80px",height:"80px",borderRadius:"15px",[x.A.breakpoints.up("md")]:{width:"90px",height:"90px"}}})}),(0,p.jsxs)(o.A,{sx:{minWidth:"135px"},children:[(0,p.jsx)(l.A,{sx:{fontWeight:700,fontSize:"16px",mb:"14px",[x.A.breakpoints.up("md")]:{mb:"20px",fontSize:"18px"}},children:n.title}),(0,p.jsx)(c,{props:n})]})]})]})},u=e=>{let{friends:n}=e;return(0,p.jsx)(o.A,{children:(0,p.jsx)(s.A,{sx:{p:0,mt:"40px",[x.A.breakpoints.up("md")]:{display:"flex",flexWrap:"wrap",mt:"44px",gap:"25px 20px"}},children:n.map((e=>(0,p.jsx)(i.Ay,{sx:{p:0,mb:"20px",[x.A.breakpoints.up("md")]:{width:"342px",height:"196px",mb:0}},children:(0,p.jsx)(d,{props:e})},e._id)))})})};var h=r(38734),m=r(10723),A=r(87046),f=r(97468);const b=()=>{const e=(0,m.wA)(),n=(0,m.d4)(f.GO);return console.log(n),(0,t.useEffect)((()=>{e((0,A.M7)())}),[e]),(0,p.jsxs)(o.A,{my:"60px",sx:{[x.A.breakpoints.up("md")]:{mt:"96px",mb:"48px"}},children:[(0,p.jsx)(h.A,{children:"Our friends"}),(0,p.jsx)(u,{friends:n})]})},y=b},18413:(e,n,r)=>{r.d(n,{A:()=>S});var o=r(98587),t=r(58168),s=r(27565),i=r(71099),l=r(68788),a=r(23637),p=r(93725),c=r(30562),x=r(88177),d=r(84847),u=r(5802),h=r(31406),m=r(92230);function A(e){return(0,m.Ay)("MuiLink",e)}const f=(0,h.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var b=r(32256),y=r(32388);const g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=e=>{let{theme:n,ownerState:r}=e;const o=(e=>g[e]||e)(r.color),t=(0,b.Yn)(n,"palette.".concat(o),!1)||r.color,s=(0,b.Yn)(n,"palette.".concat(o,"Channel"));return"vars"in n&&s?"rgba(".concat(s," / 0.4)"):(0,y.X4)(t,.4)};var j=r(27929);const v=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,p.Ay)(u.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n["underline".concat((0,a.A)(r.underline))],"button"===r.component&&n.button]}})((e=>{let{theme:n,ownerState:r}=e;return(0,t.A)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,t.A)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:w({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(f.focusVisible)]:{outline:"auto"}})})),S=s.forwardRef((function(e,n){const r=(0,c.A)({props:e,name:"MuiLink"}),{className:p,color:u="primary",component:h="a",onBlur:m,onFocus:f,TypographyClasses:b,underline:y="always",variant:w="inherit",sx:S}=r,F=(0,o.A)(r,v),{isFocusVisibleRef:D,onBlur:C,onFocus:z,ref:R}=(0,x.A)(),[W,O]=s.useState(!1),M=(0,d.A)(n,R),V=(0,t.A)({},r,{color:u,component:h,focusVisible:W,underline:y,variant:w}),B=(e=>{const{classes:n,component:r,focusVisible:o,underline:t}=e,s={root:["root","underline".concat((0,a.A)(t)),"button"===r&&"button",o&&"focusVisible"]};return(0,l.A)(s,A,n)})(V);return(0,j.jsx)(k,(0,t.A)({color:u,className:(0,i.A)(B.root,p),classes:b,component:h,onBlur:e=>{C(e),!1===D.current&&O(!1),m&&m(e)},onFocus:e=>{z(e),!0===D.current&&O(!0),f&&f(e)},ref:M,ownerState:V,variant:w,sx:[...Object.keys(g).includes(u)?[]:[{color:u}],...Array.isArray(S)?S:[S]]},F))}))}}]);
//# sourceMappingURL=495.1b24f6c4.chunk.js.map