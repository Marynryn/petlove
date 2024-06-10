"use strict";(self.webpackChunkpetlove=self.webpackChunkpetlove||[]).push([[776],{87690:(e,o,t)=>{t.d(o,{A:()=>z});var r=t(27565),i=t(47854),n=t(86849),s=t(11370),p=t(35142),a=t(10723),l=t(5802),x=t(75633),d=t(56762),c=t(36937),h=t(57064),u=t(2382),g=t(14586),m=t(4668),A=t(27929);const f=()=>(0,A.jsxs)(i.A,{sx:{pb:" 20px",[m.A.breakpoints.up("md")]:{p:"40px",width:"346px"}},children:[(0,A.jsx)(i.A,{sx:{width:"80px",height:"80px",my:"20px",mx:"auto",backgroundColor:"#FFF4DF",borderRadius:"100%",textAlign:"center"},children:(0,A.jsx)(l.A,{sx:{textAlign:"center",fontSize:"44px",fontWeight:800},children:"\ud83d\udc36"})}),(0,A.jsx)(l.A,{sx:{textAlign:"center",color:"var(--secondary-color)",mb:"20px",fontSize:"20px",fontWeight:700,[m.A.breakpoints.up("md")]:{fontSize:"24px"}},children:"Attention"}),(0,A.jsx)(l.A,{sx:{mb:"24px",fontSize:"14px",fontWeight:500,textAlign:"center",lineHeight:1.28,letterSpacing:"-0.28px"},children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,A.jsxs)(i.A,{px:"20px",sx:{[m.A.breakpoints.up("md")]:{width:"280px",p:0}},children:[" ",(0,A.jsx)(g.Q,{})]})]});var b=t(87046),j=t(97468),y=t(18413),k=t(84606),v=t(14060);const w=e=>{let{popularity:o}=e;if(!o)return null;const t=Math.min(o,5),r=[];for(let i=1;i<=5;i++)r.push(i<=t?(0,A.jsx)(p.A,{sx:{color:"rgba(255, 197, 49, 1)",fontSize:"16px",pr:"4px"}},i):(0,A.jsx)(v.A,{sx:{color:"rgba(38, 38, 38, 0.05)",fontSize:"16px",pr:"4px"}},i));return(0,A.jsx)(i.A,{children:r})},S=e=>{let{props:o}=e;const t=(0,a.wA)(),[n,s]=(0,r.useState)(!1),p=(0,a.d4)(j.Pz);(0,r.useEffect)((()=>{t((0,b.Wc)(o._id));const e=JSON.parse(localStorage.getItem("favorites"))||[];s(e.includes(o._id))}),[t,o._id]),console.log(p),(0,r.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("favorites"))||[];if(n&&!e.includes(o._id))e.push(o._id);else if(!n&&e.includes(o._id)){const t=e.indexOf(o._id);t>-1&&e.splice(t,1)}localStorage.setItem("favorites",JSON.stringify(e))}),[n,o._id]);const d=()=>{t(n?(0,b.$p)(p._id):(0,b.Pj)(p._id)),s(!n)},u={backgroundColor:"var(--secondary-color)",color:"var(--background-color)",height:"46px",width:"100%",textTransform:"capitalize",fontSize:"14px",borderRadius:"30px",fontWeight:500,"&:hover":{backgroundColor:"#F9B020"},[m.A.breakpoints.up("md")]:{width:"160px"}};return(0,A.jsxs)(i.A,{sx:{py:"20px",textAlign:"center",position:"relative",height:"386px",width:"280px",[m.A.breakpoints.up("md")]:{px:"52px",width:"334px",height:"406px"}},children:[(0,A.jsxs)(i.A,{children:[(0,A.jsx)(i.A,{sx:{position:"absolute",right:"55%",borderRadius:"30px",backgroundColor:" #FFF4DF"},children:(0,A.jsx)(l.A,{sx:{p:"8px 14px",textTransform:"capitalize",fontWeight:500,fontSize:"12px",color:"var(--secondary-color)"},children:p.category})}),(0,A.jsx)(i.A,{component:"img",src:p.imgURL,alt:p.title,sx:{width:"120px",height:"120px",objectFit:"cover",mb:"24px",borderRadius:"100%",mx:"auto",[m.A.breakpoints.up("md")]:{width:"150px",height:"150px",mb:"16px"}}})]}),(0,A.jsxs)(i.A,{sx:{},children:[(0,A.jsx)(l.A,{sx:{fontWeight:700,fontSize:"16px",mb:"10px",[m.A.breakpoints.up("md")]:{fontSize:"18px"}},children:p.title}),(0,A.jsxs)(i.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:"24px"},children:[(0,A.jsx)(w,{popularity:p.popularity}),(0,A.jsx)(l.A,{sx:{fontSize:"14px"},children:p.popularity})]})]}),(0,A.jsxs)(i.A,{px:"26px",sx:{[m.A.breakpoints.up("md")]:{px:"43px"}},children:[" ",(0,A.jsx)(k.A,{props:p,hidden:!0})]}),(0,A.jsx)(l.A,{sx:{fontWeight:500,fontSize:"14px",overflow:"hidden",letterSpacing:"-0.28px",mb:"42px",[m.A.breakpoints.up("md")]:{px:"34px"}},children:p.comment}),(0,A.jsxs)(i.A,{sx:{display:"flex",gap:"10px",position:"absolute",bottom:"20px",width:"100%",px:"8px",[m.A.breakpoints.up("md")]:{width:"330px",p:0}},children:[n?(0,A.jsxs)(x.A,{onClick:d,sx:u,children:["Remove from\xa0\xa0",(0,A.jsx)("svg",{width:18,height:18,children:(0,A.jsx)("use",{href:"".concat(c.A,"#icon-trash-01"),style:{paddingLeft:"8px",fill:"var(--background-color)"}})})]}):(0,A.jsxs)(x.A,{onClick:d,sx:u,children:[" Add to\xa0\xa0",(0,A.jsx)(h.A,{pl:"8px",sx:{fontSize:"18px",stroke:"var(--background-color)"}})]}),p.user&&(0,A.jsx)(y.A,{href:"mailto:".concat(p.user.email),target:"_blank",rel:"noopener",sx:{textDecoration:"none",width:"100%",[m.A.breakpoints.up("md")]:{width:"160px"}},children:(0,A.jsx)(x.A,{sx:{backgroundColor:" #FFF4DF",color:"var(--secondary-color)",height:"46px",width:"100%",textTransform:"capitalize",fontSize:"16px",borderRadius:"30px",fontWeight:500,"&:hover":{backgroundColor:"#FBE7C1"},[m.A.breakpoints.up("md")]:{width:"160px"}},children:"Contact"})})]})]})};var F=t(7493);const C=e=>{let{props:o}=e;const t=(0,a.wA)(),[n,s]=(0,r.useState)(!1),[g,y]=(0,r.useState)(!1),[v,w]=(0,r.useState)(!1),{isLogIn:C}=(0,F.Q)(),z=(0,a.d4)(j.UH).map((e=>e._id));(0,r.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("favorites"))||[];s(z.includes(o._id)||e.includes(o._id))}),[z,o._id]),(0,r.useEffect)((()=>{localStorage.setItem("favorites",JSON.stringify(z))}),[z]);return(0,A.jsxs)(i.A,{p:"24px",width:"100%",bgcolor:"var(--background-color)",sx:{minWidth:"232px",borderRadius:"16px",height:"430px",position:"relative",[m.A.breakpoints.up("md")]:{p:"32px",height:"380px"}},children:[(0,A.jsx)(i.A,{component:"img",src:o.imgURL,alt:o.title,sx:{width:"100%",objectFit:"cover",marginBottom:"24px",height:"178px",borderRadius:"16px"}}),(0,A.jsxs)(i.A,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,A.jsx)(l.A,{sx:{fontWeight:700,fontSize:"16px",textOverflow:"ellipsis",overflow:"hidden",[m.A.breakpoints.up("md")]:{fontSize:"18px"}},children:o.title}),(0,A.jsxs)(i.A,{sx:{display:"flex",alignItems:"center"},children:[(0,A.jsx)(p.A,{sx:{color:"var(--secondary-color)",width:"16px",height:"16px"}}),(0,A.jsx)(l.A,{sx:{fontSize:"14px"},children:o.popularity})]})]}),(0,A.jsx)(k.A,{props:o}),(0,A.jsx)(l.A,{sx:{fontWeight:500,fontSize:"14px",overflow:"hidden",letterSpacing:"-0.28px",[m.A.breakpoints.up("md")]:{lineHeight:"18px"}},children:o.comment}),(0,A.jsxs)(i.A,{sx:{display:"flex",gap:"10px",width:"280px",bottom:"25px",position:"absolute",justifyContent:"space-between",[m.A.breakpoints.down("sm")]:{width:"100%"},[m.A.breakpoints.up("md")]:{bottom:"32px"}},children:[(0,A.jsx)(x.A,{sx:{backgroundColor:"var(--secondary-color)",color:"var(--background-color)",width:"180px",height:"46px",textTransform:"capitalize",fontSize:"14px",borderRadius:"30px",fontWeight:500,[m.A.breakpoints.up("md")]:{width:"230px"}},onClick:()=>{C?w(!0):y(!0)},children:"Learn more"}),(0,A.jsx)(i.A,{sx:{borderRadius:"30px",backgroundColor:" #FFF4DF",width:"46px",height:"46px",display:"flex",justifyContent:"center"},children:(0,A.jsx)(d.A,{onClick:()=>{if(C){const e=JSON.parse(localStorage.getItem("favorites"))||[];n?(t((0,b.$p)(o._id)),localStorage.setItem("favorites",JSON.stringify(e.filter((e=>e!==o._id))))):(t((0,b.Pj)(o._id)),localStorage.setItem("favorites",JSON.stringify([...e,o._id]))),s(!n)}else y(!0)},children:n?(0,A.jsx)(i.A,{children:(0,A.jsx)("svg",{width:18,height:18,children:(0,A.jsx)("use",{href:"".concat(c.A,"#icon-trash-01"),style:{fill:"var(--secondary-color)"}})})}):(0,A.jsx)(h.A,{sx:{fill:"var(--secondary-color)"}})})})]}),(0,A.jsx)(u.A,{isOpen:g,onClose:()=>y(!1),children:(0,A.jsx)(f,{})}),(0,A.jsx)(u.A,{isOpen:v,onClose:()=>w(!1),children:(0,A.jsx)(S,{props:o})})]})},z=e=>{let{props:o}=e;return 0===o.length?null:(0,A.jsx)(i.A,{children:(0,A.jsx)(n.A,{sx:{p:0,[m.A.breakpoints.up("md")]:{display:"flex",flexWrap:"wrap",gap:"20px 20px"}},children:o.map((e=>(0,A.jsx)(s.Ay,{sx:{p:0,mb:"24px",[m.A.breakpoints.up("md")]:{width:"342px",mb:0}},children:(0,A.jsx)(C,{props:e})},e._id)))})})}},84606:(e,o,t)=>{t.d(o,{A:()=>a});t(27565);var r=t(72471),i=t(47854),n=t(5802),s=t(11030),p=t(27929);const a=e=>{let{props:o,hidden:t,addPet:a}=e;const l="/profile"===(0,s.zy)().pathname,x={fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5,textAlign:"left"},d={fontWeight:500,fontSize:"12px",letterSpacing:"-0.24px",textTransform:"capitalize",textAlign:"left",overflow:"hidden",textOverflow:"ellipsis",width:"52px",height:"18px"};return(0,p.jsxs)(i.A,{sx:{display:"flex",gap:"10px",mt:"8px",mb:a?0:"16px",justifyContent:"space-between",minWidth:l?"100px":"232px",overflow:"hidden",textOverflow:"ellipsis",flexWrap:a?"wrap":"nowrap"},children:[(0,p.jsxs)(i.A,{children:[(0,p.jsx)(n.A,{sx:x,children:"Name"}),(0,p.jsx)(n.A,{sx:d,children:o.name})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)(n.A,{sx:x,children:"Birthday"}),(0,p.jsx)(n.A,{sx:d,children:(0,r.b)(o.birthday)})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)(n.A,{sx:x,children:"Sex"}),(0,p.jsx)(n.A,{sx:d,children:o.sex})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)(n.A,{sx:x,children:"Species"}),(0,p.jsx)(n.A,{sx:d,children:o.species})]}),!t&&(0,p.jsxs)(i.A,{children:[(0,p.jsx)(n.A,{sx:{fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5,overflow:"hidden",textOverflow:"ellipsis"},children:"Category"}),(0,p.jsx)(n.A,{sx:d,children:o.category})]})]})}},9814:(e,o,t)=>{t.d(o,{A:()=>c});var r=t(27565),i=t(20240),n=t(47854),s=t(42826),p=t(56762),a=t(36937),l=t(11030),x=t(4668),d=t(27929);const c=e=>{let{onSearch:o,bgColor:t}=e;const[c,h]=(0,r.useState)(""),u="/notices"===(0,l.zy)().pathname;(0,r.useEffect)((()=>{o&&h("")}),[o,h]);const g={mt:0,mb:0,"& .MuiOutlinedInput-root":{backgroundColor:"".concat(t),borderRadius:"30px",margin:"0",border:"none",height:"42px",mt:0,mb:0,[x.A.breakpoints.up("md")]:{height:"48px"}},"& .MuiFormControl-root.MuiTextField-root":{mt:0,mb:0},"& .MuiOutlinedInput-notchedOutline":{border:u?"none":"1px solid rgba(38, 38, 38, 0.15)"},"& .MuiInputBase-input":{m:0,mt:0,mb:0,"&::placeholder":{opacity:u?1:.8,color:u?"var(--primary-color)":"rgba(38, 38, 38, 0.50)",fontSize:"14px",fontWeight:500}}};return(0,d.jsx)(i.A,{component:"div",sx:{m:0,boxShadow:"none",backgroundColor:"var(--background-gray)"},children:(0,d.jsxs)(n.A,{sx:{display:"flex",alignItems:"center",mt:"4px",borderRadius:"30px",position:"relative",[x.A.breakpoints.up("md")]:{m:0}},children:[(0,d.jsx)(s.A,{sx:g,id:"name",InputLabelProps:{shrink:!1},value:c,onChange:e=>{h(e.target.value)},placeholder:"Search",fullWidth:!0,margin:"normal",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u042f]*)*$"}),c&&(0,d.jsx)(p.A,{onClick:()=>{h(""),o("")},sx:{position:"absolute",right:"32px",p:0,top:"18px"},children:(0,d.jsx)("svg",{width:18,height:18,style:{stroke:"#EF2447",fill:"#EF2447"},children:(0,d.jsx)("use",{href:"".concat(a.A,"#icon-x")})})}),(0,d.jsx)(p.A,{type:"submit",onClick:e=>{e.preventDefault(),o(c)},sx:{position:"absolute",right:"12px",p:0,top:"18px"},children:(0,d.jsx)("svg",{width:18,height:18,style:{stroke:"var(--primary-color)",fill:"white"},children:(0,d.jsx)("use",{href:"".concat(a.A,"#icon-search")})})})]})})}},73706:(e,o,t)=>{t.d(o,{A:()=>d});t(27565);var r=t(47854),i=t(56762),n=t(22680),s=t(81142),p=t(289),a=t(51387),l=t(4668),x=t(27929);const d=e=>{let{totalPages:o,currentPage:t,onPageChange:d}=e;const c=1===t,h=t===o,u={borderRadius:"100%",border:"1px solid rgba(38, 38, 38, 0.20)",width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,[l.A.breakpoints.down("sm")]:{width:"34px",height:"34px"},[l.A.breakpoints.up("md")]:{width:"44px",height:"44px"}},g={display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,borderRadius:"100%",border:"1px solid",width:"38px",height:"38px",[l.A.breakpoints.down("sm")]:{width:"34px",height:"34px"},[l.A.breakpoints.up("md")]:{width:"44px",height:"44px"},borderColor:"var(--secondary-color)",backgroundColor:"var(--secondary-color)",color:"var(--background-color)"},m=[t];return t<o&&m.push(t+1),(0,x.jsxs)(r.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:"26px",gap:"6px",width:"334px",mb:"20px",[l.A.breakpoints.down("sm")]:{width:"280px",gap:"4px"},[l.A.breakpoints.up("md")]:{mx:"auto",width:"440px",gap:"8px",mt:"60px",mb:"48px"}},children:[(0,x.jsx)(i.A,{sx:u,onClick:()=>d(1),disabled:c,children:(0,x.jsx)(n.A,{sx:{p:"8px",minWidth:"18px",[l.A.breakpoints.down("sm")]:{p:"6px"}}})}),(0,x.jsx)(i.A,{sx:u,onClick:()=>d(t-1),disabled:c,children:(0,x.jsx)(s.A,{sx:{p:"8px",[l.A.breakpoints.down("sm")]:{p:"6px"}}})}),(0,x.jsxs)(r.A,{mx:"5px",sx:{display:"flex",gap:"10px",[l.A.breakpoints.down("sm")]:{gap:"6px",mx:0},[l.A.breakpoints.up("md")]:{mx:"24px"}},children:[m.map(((e,o)=>(0,x.jsx)(r.A,{sx:e===t?g:u,mx:0,onClick:()=>d(e),children:e},o))),(0,x.jsx)(r.A,{sx:u,children:"..."})]}),(0,x.jsx)(i.A,{sx:u,onClick:()=>d(t+1),disabled:h,children:(0,x.jsx)(p.A,{sx:{p:"8px",[l.A.breakpoints.down("sm")]:{p:"6px"}}})}),(0,x.jsx)(i.A,{sx:u,onClick:()=>d(o),disabled:h,children:(0,x.jsx)(a.A,{sx:{p:"8px",[l.A.breakpoints.down("sm")]:{p:"6px"}}})})]})}},38734:(e,o,t)=>{t.d(o,{A:()=>n});var r=t(5802),i=(t(27565),t(27929));const n=e=>{let{children:o}=e;return(0,i.jsxs)(r.A,{component:"h2",sx:e=>({fontSize:"28px",fontWeight:700,color:"text.primary",lineHeight:1,letterSpacing:"-1.12px",[e.breakpoints.up("md")]:{fontSize:"54px",letterSpacing:"-1.62px"}}),children:[" ",o]})}},72471:(e,o,t)=>{function r(e){if(void 0===e)return;const o=new Date(e),t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).format(o).split("/");return"".concat(t[0],".").concat(t[1],".").concat(t[2])}function i(e){if(!e)return;const o=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return"".concat(o,"-").concat(t,"-").concat(r)}t.d(o,{H:()=>i,b:()=>r})},27776:(e,o,t)=>{t.r(o),t.d(o,{default:()=>S});var r=t(27565),i=t(10723),n=t(47854),s=t(23070),p=t(85093),a=t(36937),l=t(97468),x=t(9814),d=t(62986),c=t(75633),h=t(56762),u=t(99924),g=t(4668),m=t(27929);const A=e=>{let{reset:o}=e;const t=(0,i.wA)(),[s,p]=(0,r.useState)({popular:null,price:null});(0,r.useEffect)((()=>{o&&(p({popular:null,price:null}),t((0,d.MS)("")),t((0,d.yd)("")))}),[o,t]);const a=(e,o)=>{p((t=>({...t,[e]:o}))),"popular"===e?t((0,d.MS)(o)):"price"===e&&t((0,d.yd)(o))},l=e=>{p((o=>({...o,[e]:null}))),"popular"===e?t((0,d.MS)("")):"price"===e&&t((0,d.yd)(""))},x={borderRadius:"30px",p:"12px",height:"18px",border:"none",backgroundColor:"#FFFFFF",color:"var(--primary-color)",[g.A.breakpoints.up("md")]:{height:"20px",p:"14px"}},A={...x,backgroundColor:"var(--secondary-color)",color:"#FFFFFF"},f=e=>({p:0,textTransform:"capitalize",height:"12px",fontSize:"14px",fontWeight:500,color:e?"#FFFFFF":"var(--primary-color)",[g.A.breakpoints.up("md")]:{fontSize:"16px"}});return(0,m.jsx)(n.A,{display:"flex",flexDirection:"column",gap:2,mb:"20px",children:(0,m.jsxs)(n.A,{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"10px",children:[(0,m.jsxs)(n.A,{sx:"popular"===s.popular?A:x,children:[(0,m.jsx)(c.A,{sx:f("popular"===s.popular),onClick:()=>a("popular","popular"),children:"Popular"}),"popular"===s.popular&&(0,m.jsx)(h.A,{onClick:()=>l("popular"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,m.jsx)(u.A,{fontSize:"small"})})]}),(0,m.jsxs)(n.A,{sx:"unpopular"===s.popular?A:x,children:[(0,m.jsx)(c.A,{sx:f("unpopular"===s.popular),onClick:()=>a("popular","unpopular"),children:"Unpopular"}),"unpopular"===s.popular&&(0,m.jsx)(h.A,{onClick:()=>l("popular"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,m.jsx)(u.A,{fontSize:"small"})})]}),(0,m.jsxs)(n.A,{sx:"cheap"===s.price?A:x,children:[(0,m.jsx)(c.A,{sx:f("cheap"===s.price),onClick:()=>a("price","cheap"),children:"Cheap"}),"cheap"===s.price&&(0,m.jsx)(h.A,{onClick:()=>l("price"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,m.jsx)(u.A,{fontSize:"small"})})]}),(0,m.jsxs)(n.A,{sx:"expensive"===s.price?A:x,children:[(0,m.jsx)(c.A,{sx:f("expensive"===s.price),onClick:()=>a("price","expensive"),children:"Expensive"}),"expensive"===s.price&&(0,m.jsx)(h.A,{onClick:()=>l("price"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,m.jsx)(u.A,{fontSize:"small"})})]})]})})};var f=t(20240),b=t(86488),j=t(87046);const y=e=>{let{onSearch:o}=e;const[t,c]=(0,r.useState)(!1),[u,y]=(0,r.useState)(null),k=(0,i.wA)(),v=(0,i.d4)(l.d5),w=(0,i.d4)(l.BS),S=(0,i.d4)(l.Rv),F=(0,i.d4)(l.NQ),C=(0,i.d4)(l._X);(0,r.useEffect)((()=>{k((0,j.bW)()),k((0,j.Tf)()),k((0,j.Hi)()),k((0,j.Vs)())}),[k]);const z=()=>{k((0,d.dr)()),o(""),c(!0),setTimeout((()=>c(!1)),0)},W=e=>[{value:"",label:"Show All"},...e.map((e=>({value:e,label:e})))],R=(e,o)=>o.find((o=>o.value===e))||null,I={control:(e,o)=>({...e,cursor:"default",width:"100%",color:"var(--primary-color)",height:"42px",borderRadius:"30px",border:"none",[g.A.breakpoints.up("md")]:{height:"48px"}}),singleValue:e=>({...e,color:"var(--primary-color)",textTransform:"capitalize",paddingLeft:"2px",fontSize:"14px",fontWeight:500}),ValueContainer:e=>({...e}),input:e=>({...e,display:"none"}),indicatorSeparator:e=>({...e,display:"none"}),indicatorContainer:e=>({...e,display:"none"}),container:e=>({...e,width:"100%"}),placeholder:e=>({...e,color:"var(--primary-color)",fontSize:"14px",fontWeight:500,paddingLeft:"2px"}),dropdownIndicator:e=>({...e,color:"var(--primary-color)",paddingLeft:0}),menu:e=>({...e,borderRadius:"14px",padding:"0 12px ",maxHeight:"216px"}),menuList:e=>({...e,maxHeight:"216px !important","::-webkit-scrollbar":{width:"8px",height:"100px",paddingTop:"10px"},"::-webkit-scrollbar-thumb":{background:"rgba(0,0,0,0.2)",borderRadius:"10px"}}),option:(e,o)=>({...e,textTransform:"capitalize",color:o.isFocused?"var(--secondary-color)":"rgba(38, 38, 38, 0.60)",backgroundColor:(o.isFocused,"transparent")})};return(0,m.jsxs)(f.A,{component:"form",onReset:z,sx:{color:"var(--primary-color)",p:"20px",pt:"4px",my:"40px",boxShadow:"none",backgroundColor:"#FFF4DF",borderRadius:"30px",[g.A.breakpoints.up("md")]:{mt:"44px",mb:"32px",p:"32px 40px"}},children:[(0,m.jsxs)(n.A,{sx:{[g.A.breakpoints.up("md")]:{display:"flex",gap:"16px",width:"100%",mb:"16px"}},children:[(0,m.jsx)(n.A,{sx:{[g.A.breakpoints.up("md")]:{width:"265px"}},children:(0,m.jsx)(x.A,{onSearch:o,onReset:z,bgColor:"var(--background-color)"})}),(0,m.jsxs)(n.A,{sx:{display:"flex",mt:"4px",mb:"12px",gap:"8px",width:"100%",[g.A.breakpoints.up("md")]:{width:"356px",m:0}},children:[(0,m.jsx)(s.Ay,{styles:I,options:W(v),onChange:e=>{k((0,d.Dz)(e?e.value:""))},value:R(C.category,W(v)),placeholder:"Category"}),(0,m.jsx)(s.Ay,{styles:I,options:W(w),onChange:e=>{k((0,d.iw)(e?e.value:""))},value:R(C.gender,W(w)),placeholder:"By gender"})]})]}),(0,m.jsxs)(n.A,{sx:{[g.A.breakpoints.up("md")]:{width:"433px",display:"flex",gap:"16px"}},children:[" ",(0,m.jsx)(n.A,{sx:{[g.A.breakpoints.up("md")]:{width:"190px",m:0}},children:(0,m.jsx)(s.Ay,{styles:I,options:W(S),onChange:e=>{k((0,d.G1)(e?e.value:""))},value:R(C.species,W(S)),placeholder:"By type"})}),(0,m.jsxs)(n.A,{mt:"12px",sx:{position:"relative",[g.A.breakpoints.up("md")]:{width:"233px",mt:0}},children:[(0,m.jsx)(p.A,{styles:{control:(e,o)=>({...e,cursor:"default",width:"100%",color:"var(--primary-color)",height:"42px",borderRadius:"30px",border:"none",[g.A.breakpoints.up("md")]:{height:"48px"}}),singleValue:e=>({...e,color:"var(--primary-color)",textTransform:"capitalize",paddingLeft:"2px",fontSize:"14px",fontWeight:500}),ValueContainer:e=>({...e}),input:e=>({...e}),indicatorSeparator:e=>({...e,display:"none"}),indicatorContainer:e=>({...e}),container:e=>({...e,width:"100%"}),placeholder:e=>({...e,color:"var(--primary-color)",fontSize:"14px",fontWeight:500,paddingLeft:"2px"}),dropdownIndicator:e=>({...e,display:"none"}),menu:e=>({...e,borderRadius:"14px",padding:" 12px ",maxHeight:"216px"}),menuList:e=>({...e,height:"94px ","::-webkit-scrollbar":{width:"8px",height:"100px",paddingTop:"10px"},"::-webkit-scrollbar-thumb":{background:"rgba(0,0,0,0.2)",borderRadius:"10px"}}),option:(e,o)=>({...e,textTransform:"capitalize",color:o.isFocused?"var(--secondary-color)":"rgba(38, 38, 38, 0.60)",backgroundColor:(o.isFocused,"transparent"),padding:"0 12px 8px 12px",fontSize:"14px",fontWeight:500})},loadOptions:(e,o)=>{const t=F.filter((o=>o.cityEn.toLowerCase().includes(e.toLowerCase())));t.sort(((e,o)=>e.cityEn.localeCompare(o.cityEn)));o(t.map((e=>({value:e._id,label:"".concat(e.cityEn,", ").concat(e.stateEn)}))))},onChange:e=>{k((0,d.Iy)(e?e.value:"")),y(e)},value:u,placeholder:"Location",isClearable:!0}),(0,m.jsx)(h.A,{type:"submit",sx:{position:"absolute",right:"12px",p:0,top:"12px"},children:(0,m.jsx)("svg",{width:18,height:18,style:{stroke:"var(--primary-color)",fill:"white"},children:(0,m.jsx)("use",{href:"".concat(a.A,"#icon-search")})})})]})]}),(0,m.jsx)(n.A,{sx:{my:"20px",width:"100%",height:" 1px",backgroundColor:"rgba(38, 38, 38, 0.10)"}}),(0,m.jsx)(A,{reset:t}),(0,m.jsx)(n.A,{sx:{[g.A.breakpoints.up("md")]:{width:"200px",ml:"  auto ",mr:0}},children:(0,m.jsx)(b.A,{onClick:z,bgColor:"var(--secondary-color)",textColor:"var(--background-color)",type:"reset",children:"Reset"})})]})};var k=t(87690),v=t(73706),w=t(38734);const S=()=>{const e=(0,i.wA)(),o=(0,i.d4)(l._X),t=(0,i.d4)(l.Ez),s=(0,i.d4)(l.Cm),[p,a]=(0,r.useState)(1),[x,c]=(0,r.useState)([]);console.log(p),(0,r.useEffect)((()=>{e((0,j.of)({page:p,perPage:6,filter:o}))}),[e,p,o]),(0,r.useEffect)((()=>{(()=>{let e=t;o.gender&&(e=e.filter((e=>e.sex===o.gender))),c(e)})()}),[t,o]);return console.log(x),(0,m.jsxs)(n.A,{mt:"60px",sx:{[g.A.breakpoints.up("md")]:{mt:"96px"}},children:[(0,m.jsx)(w.A,{children:"Find your favorite pet"}),(0,m.jsx)(y,{onSearch:o=>{e((0,d.nI)(o)),a(1)}}),(0,m.jsx)(k.A,{props:x}),(x.length>6||s>1)&&(0,m.jsx)(v.A,{totalPages:s,currentPage:p,onPageChange:e=>{a(e)}})]})}}}]);
//# sourceMappingURL=776.dc849ef9.chunk.js.map