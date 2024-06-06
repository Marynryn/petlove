"use strict";(self.webpackChunkpetlove=self.webpackChunkpetlove||[]).push([[495],{38734:(e,r,n)=>{n.d(r,{A:()=>s});var o=n(5802),t=(n(27565),n(27929));const s=e=>{let{children:r}=e;return(0,t.jsxs)(o.A,{component:"h2",sx:e=>({fontSize:"28px",fontWeight:700,color:"text.primary",lineHeight:1,letterSpacing:"-1.12px",[e.breakpoints.up("md")]:{fontSize:"54px",letterSpacing:"-1.62px"}}),children:[" ",r]})}},16495:(e,r,n)=>{n.r(r),n.d(r,{Friends:()=>f,default:()=>y});var o=n(47854),t=n(27565),s=n(86849),i=n(11370),l=n(5802),a=n(18413),c=n(27929);const d=e=>{let{props:r}=e;const n={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textDecoration:"none",color:"var(--primary-color)","&:hover":{color:"blue"}},t={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:500,fontSize:"14px",letterSpacing:"-0.28px",color:"rgba(38, 38, 38, 0.50)",display:"flex",justifyContent:"start",alignItems:"center",mb:"8px"},s={fontWeight:500,fontSize:"14px",letterSpacing:"-0.28px",color:"var(--primary-color)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};return(0,c.jsxs)(o.A,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},children:[r.email?(0,c.jsxs)(l.A,{sx:t,children:["Email:\xa0",(0,c.jsx)(a.A,{href:"mailto:".concat(r.email),sx:n,children:r.email})]}):(0,c.jsxs)(l.A,{sx:t,children:["Email:\xa0",(0,c.jsx)("span",{style:s,children:"address only"})]}),r.address&&r.addressUrl?(0,c.jsxs)(l.A,{sx:t,children:["Address:\xa0",(0,c.jsx)(a.A,{href:r.addressUrl,target:"_blank",rel:"noopener",sx:n,children:r.address})]}):(0,c.jsxs)(l.A,{sx:t,children:["Address:\xa0",(0,c.jsx)("span",{style:s,children:"website only"})]}),r.phone?(0,c.jsxs)(l.A,{sx:t,children:["Phone:\xa0",(0,c.jsx)(a.A,{href:"tel:".concat(r.phone),sx:n,children:r.phone})]}):(0,c.jsxs)(l.A,{sx:t,children:["Phone:\xa0",(0,c.jsx)("span",{style:s,children:"email only"})]})]})},p=e=>{let{props:r}=e;const n=(new Date).getDay(),t=r.workDays&&r.workDays.length>0?r.workDays[n]:null,s={display:"flex",justifyContent:"end",color:"var(--secondary-color)",fontWeight:500,fontSize:"12px"};return(0,c.jsxs)(o.A,{sx:{height:"auto",bgcolor:"var(--background-color)",minWidth:"248px",width:"100%",borderRadius:"15px",p:"12px 12px 40px 20px"},children:[t?(0,c.jsx)(o.A,{sx:s,children:t.isOpen?(0,c.jsxs)(l.A,{variant:"body2",p:"8px",sx:{borderRadius:"30px",backgroundColor:" #FFF4DF"},children:[t.from," - ",t.to]}):(0,c.jsx)(l.A,{variant:"body2",p:"8px",sx:{borderRadius:"30px",backgroundColor:" #FFF4DF"},children:"Closed"})}):(0,c.jsx)(o.A,{sx:s,children:(0,c.jsx)(l.A,{variant:"body2",p:"8px",sx:{borderRadius:"30px",backgroundColor:" #FFF4DF"},children:"Day and night"})}),(0,c.jsxs)(o.A,{sx:{display:"flex",gap:"14px"},children:[(0,c.jsx)(o.A,{children:(0,c.jsx)("img",{src:r.imageUrl,alt:r.title,style:{width:"80px",height:"80px",borderRadius:"15px"}})}),(0,c.jsxs)(o.A,{sx:{minWidth:"135px"},children:[(0,c.jsx)(l.A,{sx:{fontWeight:700,fontSize:"16px",mb:"14px"},children:r.title}),(0,c.jsx)(d,{props:r})]})]}),(0,c.jsx)(o.A,{sx:{mt:"20px"}})]})},x=e=>{let{friends:r}=e;return(0,c.jsx)(o.A,{children:(0,c.jsx)(s.A,{sx:{p:0,mt:"40px"},children:r.map((e=>(0,c.jsx)(i.Ay,{sx:{p:0,mb:"20px"},children:(0,c.jsx)(p,{props:e})},e._id)))})})};var u=n(38734),h=n(10723),A=n(87046),m=n(97468);const f=()=>{const e=(0,h.wA)(),r=(0,h.d4)(m.GO);return console.log(r),(0,t.useEffect)((()=>{e((0,A.M7)())}),[e]),(0,c.jsxs)(o.A,{my:"60px",children:[(0,c.jsx)(u.A,{children:"Our friends"}),(0,c.jsx)(x,{friends:r})]})},y=f},18413:(e,r,n)=>{n.d(r,{A:()=>k});var o=n(98587),t=n(58168),s=n(27565),i=n(71099),l=n(68788),a=n(23637),c=n(93725),d=n(30562),p=n(88177),x=n(84847),u=n(5802),h=n(31406),A=n(92230);function m(e){return(0,A.Ay)("MuiLink",e)}const f=(0,h.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var y=n(32256),b=n(32388);const j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=e=>{let{theme:r,ownerState:n}=e;const o=(e=>j[e]||e)(n.color),t=(0,y.Yn)(r,"palette.".concat(o),!1)||n.color,s=(0,y.Yn)(r,"palette.".concat(o,"Channel"));return"vars"in r&&s?"rgba(".concat(s," / 0.4)"):(0,b.X4)(t,.4)};var g=n(27929);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],S=(0,c.Ay)(u.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r["underline".concat((0,a.A)(n.underline))],"button"===n.component&&r.button]}})((e=>{let{theme:r,ownerState:n}=e;return(0,t.A)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,t.A)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:v({theme:r,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(f.focusVisible)]:{outline:"auto"}})})),k=s.forwardRef((function(e,r){const n=(0,d.A)({props:e,name:"MuiLink"}),{className:c,color:u="primary",component:h="a",onBlur:A,onFocus:f,TypographyClasses:y,underline:b="always",variant:v="inherit",sx:k}=n,F=(0,o.A)(n,w),{isFocusVisibleRef:D,onBlur:C,onFocus:R,ref:W}=(0,p.A)(),[z,O]=s.useState(!1),M=(0,x.A)(r,W),V=(0,t.A)({},n,{color:u,component:h,focusVisible:z,underline:b,variant:v}),B=(e=>{const{classes:r,component:n,focusVisible:o,underline:t}=e,s={root:["root","underline".concat((0,a.A)(t)),"button"===n&&"button",o&&"focusVisible"]};return(0,l.A)(s,m,r)})(V);return(0,g.jsx)(S,(0,t.A)({color:u,className:(0,i.A)(B.root,c),classes:y,component:h,onBlur:e=>{C(e),!1===D.current&&O(!1),A&&A(e)},onFocus:e=>{R(e),!0===D.current&&O(!0),f&&f(e)},ref:M,ownerState:V,variant:v,sx:[...Object.keys(j).includes(u)?[]:[{color:u}],...Array.isArray(k)?k:[k]]},F))}))}}]);
//# sourceMappingURL=495.439822fb.chunk.js.map