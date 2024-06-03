"use strict";(self.webpackChunkpetlove=self.webpackChunkpetlove||[]).push([[259],{9814:(e,o,r)=>{r.d(o,{A:()=>c});var t=r(7565),i=r(240),n=r(7854),s=r(4846),l=r(6762),a=r(6937),p=r(1030),x=r(7929);const c=e=>{let{onSearch:o,bgColor:r}=e;const[c,d]=(0,t.useState)(""),h="/notices"===(0,p.zy)().pathname;(0,t.useEffect)((()=>{o&&d("")}),[o,d]);const u={"& .MuiOutlinedInput-root":{backgroundColor:"".concat(r),borderRadius:"30px",margin:"0",border:"none",height:"42px"},"& .MuiOutlinedInput-notchedOutline":{border:h?"none":"1px solid rgba(38, 38, 38, 0.15)"},"& .MuiInputBase-input":{"&::placeholder":{opacity:h?1:.8,color:h?"var(--primary-color)":"rgba(38, 38, 38, 0.50)",fontSize:"14px",fontWeight:500}}};return(0,x.jsx)(i.A,{component:"div",sx:{boxShadow:"none",backgroundColor:"var(--background-gray)"},children:(0,x.jsxs)(n.A,{sx:{display:"flex",alignItems:"center",mt:"4px",borderRadius:"30px",position:"relative"},children:[(0,x.jsx)(s.A,{sx:u,id:"name",InputLabelProps:{shrink:!1},value:c,onChange:e=>{d(e.target.value)},placeholder:"Search",fullWidth:!0,margin:"normal",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u042f]*)*$"}),c&&(0,x.jsx)(l.A,{onClick:()=>{d(""),o("")},sx:{position:"absolute",right:"32px",p:0,top:"28px"},children:(0,x.jsx)("svg",{width:18,height:18,style:{stroke:"#EF2447",fill:"#EF2447"},children:(0,x.jsx)("use",{href:"".concat(a.A,"#icon-x")})})}),(0,x.jsx)(l.A,{type:"submit",onClick:e=>{e.preventDefault(),o(c)},sx:{position:"absolute",right:"12px",p:0,top:"28px"},children:(0,x.jsx)("svg",{width:18,height:18,style:{stroke:"var(--primary-color)",fill:"white"},children:(0,x.jsx)("use",{href:"".concat(a.A,"#icon-search")})})})]})})}},3706:(e,o,r)=>{r.d(o,{A:()=>x});r(7565);var t=r(7854),i=r(6762),n=r(2680),s=r(1142),l=r(289),a=r(1387),p=r(7929);const x=e=>{let{totalPages:o,currentPage:r,onPageChange:x}=e;const c=1===r,d=r===o,h={borderRadius:"100%",border:"1px solid rgba(38, 38, 38, 0.20)",width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,"@media (max-width: 320px)":{width:"34px",height:"34px"}},u={display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,borderRadius:"100%",border:"1px solid",width:"38px",height:"38px","@media (max-width: 320px)":{width:"34px",height:"34px"},borderColor:"var(--secondary-color)",backgroundColor:"var(--secondary-color)",color:"var(--background-color)"},g=[r];return r<o&&g.push(r+1),(0,p.jsxs)(t.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:"26px",gap:"6px",width:"334px","@media (max-width: 320px)":{width:"280px",gap:"4px"}},children:[(0,p.jsx)(i.A,{sx:h,onClick:()=>x(1),disabled:c,children:(0,p.jsx)(n.A,{sx:{p:"8px",minWidth:"18px","@media (max-width: 320px)":{p:"6px"}}})}),(0,p.jsx)(i.A,{sx:h,onClick:()=>x(r-1),disabled:c,children:(0,p.jsx)(s.A,{sx:{p:"8px","@media (max-width: 320px)":{p:"6px"}}})}),(0,p.jsxs)(t.A,{mx:"5px",sx:{display:"flex",gap:"10px","@media (max-width: 320px)":{gap:"6px",mx:0}},children:[g.map(((e,o)=>(0,p.jsx)(t.A,{sx:e===r?u:h,mx:0,onClick:()=>x(e),children:e},o))),(0,p.jsx)(t.A,{sx:h,children:"..."})]}),(0,p.jsx)(i.A,{sx:h,onClick:()=>x(r+1),disabled:d,children:(0,p.jsx)(l.A,{sx:{p:"8px","@media (max-width: 320px)":{p:"6px"}}})}),(0,p.jsx)(i.A,{sx:h,onClick:()=>x(o),disabled:d,children:(0,p.jsx)(a.A,{sx:{p:"8px","@media (max-width: 320px)":{p:"6px"}}})})]})}},8734:(e,o,r)=>{r.d(o,{A:()=>n});var t=r(5802),i=(r(7565),r(7929));const n=e=>{let{children:o}=e;return(0,i.jsxs)(t.A,{component:"h2",sx:e=>({fontSize:"28px",fontWeight:700,color:"text.primary",lineHeight:1,letterSpacing:"-1.12px",[e.breakpoints.up("md")]:{fontSize:"54px",letterSpacing:"-1.62px"}}),children:[" ",o]})}},2471:(e,o,r)=>{function t(e){const o=new Date(e),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).format(o).split("/");return"".concat(r[0],".").concat(r[1],".").concat(r[2])}r.d(o,{b:()=>t})},5259:(e,o,r)=>{r.r(o),r.d(o,{default:()=>O});var t=r(7565),i=r(723),n=r(7854),s=r(3070),l=r(5093),a=r(6937),p=r(7468),x=r(9814),c=r(2986),d=r(5633),h=r(6762),u=r(9924),g=r(7929);const f=e=>{let{reset:o}=e;const r=(0,i.wA)(),[s,l]=(0,t.useState)({popular:null,price:null});(0,t.useEffect)((()=>{o&&(l({popular:null,price:null}),r((0,c.MS)("")),r((0,c.yd)("")))}),[o,r]);const a=(e,o)=>{l((r=>({...r,[e]:o}))),"popular"===e?r((0,c.MS)(o)):"price"===e&&r((0,c.yd)(o))},p=e=>{l((o=>({...o,[e]:null}))),"popular"===e?r((0,c.MS)("")):"price"===e&&r((0,c.yd)(""))},x={borderRadius:"30px",p:"12px",height:"18px",border:"none",backgroundColor:"#FFFFFF",color:"var(--primary-color)"},f={...x,backgroundColor:"var(--secondary-color)",color:"#FFFFFF"},m=e=>({p:0,textTransform:"capitalize",height:"12px",fontSize:"14px",fontWeight:500,color:e?"#FFFFFF":"var(--primary-color)"});return(0,g.jsx)(n.A,{display:"flex",flexDirection:"column",gap:2,mb:"20px",children:(0,g.jsxs)(n.A,{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"10px",children:[(0,g.jsxs)(n.A,{sx:!0===s.popular?f:x,children:[(0,g.jsx)(d.A,{sx:m(!0===s.popular),onClick:()=>a("popular",!0),children:"Popular"}),!0===s.popular&&(0,g.jsx)(h.A,{onClick:()=>p("popular"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,g.jsx)(u.A,{fontSize:"small"})})]}),(0,g.jsxs)(n.A,{sx:!1===s.popular?f:x,children:[(0,g.jsx)(d.A,{sx:m(!1===s.popular),onClick:()=>a("popular",!1),children:"Unpopular"}),!1===s.popular&&(0,g.jsx)(h.A,{onClick:()=>p("popular"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,g.jsx)(u.A,{fontSize:"small"})})]}),(0,g.jsxs)(n.A,{sx:!0===s.price?f:x,children:[(0,g.jsx)(d.A,{sx:m(!0===s.price),onClick:()=>a("price",!0),children:"Cheap"}),!0===s.price&&(0,g.jsx)(h.A,{onClick:()=>p("price"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,g.jsx)(u.A,{fontSize:"small"})})]}),(0,g.jsxs)(n.A,{sx:!1===s.price?f:x,children:[(0,g.jsx)(d.A,{sx:m(!1===s.price),onClick:()=>a("price",!1),children:"Expensive"}),!1===s.price&&(0,g.jsx)(h.A,{onClick:()=>p("price"),size:"small",sx:{ml:"6px",p:0,color:"#FFFFFF"},children:(0,g.jsx)(u.A,{fontSize:"small"})})]})]})})};var m=r(240),j=r(6488);const A=e=>{let{onSearch:o}=e;const[r,d]=(0,t.useState)(!1),[u,A]=(0,t.useState)(null),y=(0,i.wA)(),b=(0,i.d4)(p.d5),v=(0,i.d4)(p.BS),S=(0,i.d4)(p.Rv),C=(0,i.d4)(p.NQ),w=(0,i.d4)(p._X),F=()=>{y((0,c.dr)()),o(""),d(!0),setTimeout((()=>d(!1)),0)},k=e=>[{value:"",label:"Show All"},...e.map((e=>({value:e,label:e})))],z=(e,o)=>o.find((o=>o.value===e))||null,W={control:(e,o)=>({...e,cursor:"default",width:"100%",color:"var(--primary-color)",height:"42px",borderRadius:"30px",border:"none"}),singleValue:e=>({...e,color:"var(--primary-color)",textTransform:"capitalize",paddingLeft:"2px",fontSize:"14px",fontWeight:500}),ValueContainer:e=>({...e}),input:e=>({...e,display:"none"}),indicatorSeparator:e=>({...e,display:"none"}),indicatorContainer:e=>({...e,display:"none"}),container:e=>({...e,width:"100%"}),placeholder:e=>({...e,color:"var(--primary-color)",fontSize:"14px",fontWeight:500,paddingLeft:"2px"}),dropdownIndicator:e=>({...e,color:"var(--primary-color)"}),menu:e=>({...e,borderRadius:"14px",padding:"0 12px ",maxHeight:"216px"}),menuList:e=>({...e,maxHeight:"216px !important","::-webkit-scrollbar":{width:"8px",height:"100px",paddingTop:"10px"},"::-webkit-scrollbar-thumb":{background:"rgba(0,0,0,0.2)",borderRadius:"10px"}}),option:(e,o)=>({...e,textTransform:"capitalize",color:o.isFocused?"var(--secondary-color)":"rgba(38, 38, 38, 0.60)",backgroundColor:(o.isFocused,"transparent")})};return(0,g.jsxs)(m.A,{component:"form",onReset:F,sx:{color:"var(--primary-color)",p:"20px",pt:"4px",my:"40px",boxShadow:"none",backgroundColor:"#FFF4DF",borderRadius:"30px"},children:[(0,g.jsx)(x.A,{onSearch:o,onReset:F,bgColor:"var(--background-color)"}),(0,g.jsxs)(n.A,{sx:{display:"flex",mt:"4px",mb:"12px",gap:"8px",width:"100%"},children:[(0,g.jsx)(s.Ay,{styles:W,options:k(b),onChange:e=>{y((0,c.Dz)(e?e.value:""))},value:z(w.category,k(b)),placeholder:"Category"}),(0,g.jsx)(s.Ay,{styles:W,options:k(v),onChange:e=>{y((0,c.iw)(e?e.value:""))},value:z(w.gender,k(v)),placeholder:"By gender"})]}),(0,g.jsx)(s.Ay,{styles:W,options:k(S),onChange:e=>{y((0,c.G1)(e?e.value:""))},value:z(w.species,k(S)),placeholder:"By type"}),(0,g.jsxs)(n.A,{mt:"12px",sx:{position:"relative"},children:[(0,g.jsx)(l.A,{styles:{control:(e,o)=>({...e,cursor:"default",width:"100%",color:"var(--primary-color)",height:"42px",borderRadius:"30px",border:"none"}),singleValue:e=>({...e,color:"var(--primary-color)",textTransform:"capitalize",paddingLeft:"2px",fontSize:"14px",fontWeight:500}),ValueContainer:e=>({...e}),input:e=>({...e}),indicatorSeparator:e=>({...e,display:"none"}),indicatorContainer:e=>({...e}),container:e=>({...e,width:"100%"}),placeholder:e=>({...e,color:"var(--primary-color)",fontSize:"14px",fontWeight:500,paddingLeft:"2px"}),dropdownIndicator:e=>({...e,display:"none"}),menu:e=>({...e,borderRadius:"14px",padding:" 12px ",maxHeight:"216px"}),menuList:e=>({...e,height:"94px ","::-webkit-scrollbar":{width:"8px",height:"100px",paddingTop:"10px"},"::-webkit-scrollbar-thumb":{background:"rgba(0,0,0,0.2)",borderRadius:"10px"}}),option:(e,o)=>({...e,textTransform:"capitalize",color:o.isFocused?"var(--secondary-color)":"rgba(38, 38, 38, 0.60)",backgroundColor:(o.isFocused,"transparent"),padding:"0 12px 8px 12px",fontSize:"14px",fontWeight:500})},loadOptions:(e,o)=>{const r=C.filter((o=>o.cityEn.toLowerCase().includes(e.toLowerCase())));r.sort(((e,o)=>e.cityEn.localeCompare(o.cityEn)));o(r.map((e=>({value:e._id,label:"".concat(e.cityEn,", ").concat(e.stateEn)}))))},onChange:e=>{y((0,c.Iy)(e?e.value:"")),A(e)},value:u,placeholder:"Location",isClearable:!0}),(0,g.jsx)(h.A,{type:"submit",sx:{position:"absolute",right:"12px",p:0,top:"12px"},children:(0,g.jsx)("svg",{width:18,height:18,style:{stroke:"var(--primary-color)",fill:"white"},children:(0,g.jsx)("use",{href:"".concat(a.A,"#icon-search")})})})]}),(0,g.jsx)(n.A,{sx:{my:"20px",width:"100%",height:" 1px",backgroundColor:"rgba(38, 38, 38, 0.10)"}}),(0,g.jsx)(f,{reset:r}),(0,g.jsx)(j.A,{onClick:F,bgColor:"var(--secondary-color)",textColor:"var(--background-color)",type:"reset",children:"Reset"})]})};var y=r(6849),b=r(1370),v=r(5142),S=r(5802),C=r(7064),w=r(2382),F=r(4586);const k=()=>(0,g.jsxs)(n.A,{sx:{pb:" 20px"},children:[(0,g.jsx)(n.A,{sx:{width:"80px",height:"80px",my:"20px",mx:"auto",backgroundColor:"#FFF4DF",borderRadius:"100%",textAlign:"center"},children:(0,g.jsx)(S.A,{sx:{textAlign:"center",fontSize:"44px",fontWeight:800},children:"\ud83d\udc36"})}),(0,g.jsx)(S.A,{sx:{textAlign:"center",color:"var(--secondary-color)",mb:"20px",fontSize:"20px",fontWeight:700},children:"Attention"}),(0,g.jsx)(S.A,{sx:{mb:"24px",fontSize:"14px",fontWeight:500,textAlign:"center",lineHeight:1.28,letterSpacing:"-0.28px"},children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,g.jsxs)(n.A,{px:"20px",children:[" ",(0,g.jsx)(F.Q,{})]})]}),z=()=>(0,g.jsx)("div",{children:"ModalNotice"});var W=r(7493),R=r(2471);const I=e=>{let{props:o}=e;return(0,g.jsxs)(n.A,{sx:{display:"flex",gap:"10px",mt:"8px",mb:"16px",justifyContent:"space-between",minWidth:"232px",overflow:"hidden",textOverflow:"ellipsis"},children:[(0,g.jsxs)(n.A,{children:[(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5},children:"Name"}),(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"12px",letterSpacing:"-0.24px"},children:o.name})]}),(0,g.jsxs)(n.A,{children:[(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5},children:"Birthday"}),(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"12px",letterSpacing:"-0.24px"},children:(0,R.b)(o.birthday)})]}),(0,g.jsxs)(n.A,{children:[(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5},children:"Sex"}),(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"12px",letterSpacing:"-0.24px"},children:o.sex})]}),(0,g.jsxs)(n.A,{children:[(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5},children:"Species"}),(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"12px",letterSpacing:"-0.24px"},children:o.species})]}),(0,g.jsxs)(n.A,{children:[(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5,overflow:"hidden",textOverflow:"ellipsis"},children:"Category"}),(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"12px",letterSpacing:"-0.24px"},children:o.category})]})]})},E=e=>{let{props:o}=e;const[r,i]=(0,t.useState)(!1),[s,l]=(0,t.useState)(!1),[p,x]=(0,t.useState)(!1),{isLogIn:c}=(0,W.Q)();console.log(c);return(0,g.jsxs)(n.A,{p:"24px",width:"100%",bgcolor:"var(--background-color)",sx:{minWidth:"232px",borderRadius:"16px"},children:[(0,g.jsx)("img",{src:o.imgURL,alt:o.title,style:{width:"100%",objectFit:"cover",marginBottom:"24px",height:"178px",borderRadius:"16px"}}),(0,g.jsxs)(n.A,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,g.jsx)(S.A,{sx:{fontWeight:700,fontSize:"16px"},children:o.title}),(0,g.jsxs)(n.A,{sx:{display:"flex",alignItems:"center"},children:[(0,g.jsx)(v.A,{sx:{color:"var(--secondary-color)",width:"16px",height:"16px"}}),(0,g.jsx)(S.A,{sx:{fontSize:"14px"},children:o.popularity})]})]}),(0,g.jsx)(I,{props:o}),(0,g.jsx)(S.A,{sx:{fontWeight:500,fontSize:"14px",overflow:"hidden",letterSpacing:"-0.28px",mb:"42px"},children:o.comment}),(0,g.jsxs)(n.A,{style:{display:"flex",gap:"10px"},children:[(0,g.jsx)(d.A,{sx:{backgroundColor:"var(--secondary-color)",color:"var(--background-color)",width:"calc(100% - 56px)",height:"46px",textTransform:"capitalize",fontSize:"14px",borderRadius:"30px",fontWeight:500},onClick:()=>{c?x(!0):l(!0)},children:"Learn more"}),(0,g.jsx)(n.A,{sx:{borderRadius:"30px",backgroundColor:" #FFF4DF",width:"46px",height:"46px",display:"flex",justifyContent:"center"},children:(0,g.jsx)(h.A,{onClick:()=>{c?i(!r):l(!0)},children:r?(0,g.jsx)(n.A,{children:(0,g.jsx)("svg",{width:18,height:18,children:(0,g.jsx)("use",{href:"".concat(a.A,"#icon-trash-01"),style:{fill:"var(--secondary-color)"}})})}):(0,g.jsx)(C.A,{sx:{fill:"var(--secondary-color)"}})})})]}),(0,g.jsx)(w.A,{isOpen:s,onClose:l,children:(0,g.jsx)(k,{})}),(0,g.jsx)(w.A,{isOpen:p,onClose:x,children:(0,g.jsx)(z,{props:o})})]})},L=e=>{let{notices:o}=e;return(0,g.jsx)(n.A,{children:(0,g.jsx)(y.A,{sx:{p:0},children:o.map((e=>(0,g.jsx)(b.Ay,{sx:{p:0,mb:"24px"},children:(0,g.jsx)(E,{props:e})},e._id)))})})};var T=r(3706),P=r(8734),D=r(3348);const O=()=>{const e=(0,i.wA)(),o=(0,i.d4)(p._X),r=(0,i.d4)(p.Ez),s=(0,i.d4)(p.Cm),[l,a]=(0,t.useState)(1),[x,d]=(0,t.useState)([]);(0,t.useEffect)((()=>{e((0,D.bW)()),e((0,D.Tf)()),e((0,D.Hi)()),e((0,D.Vs)())}),[e]),(0,t.useEffect)((()=>{e((0,D.of)({page:l,perPage:6,filter:o}))}),[e,l,o]),(0,t.useEffect)((()=>{(()=>{let e=r;o.gender&&(e=e.filter((e=>e.sex===o.gender))),d(e)})()}),[r,o]);return console.log(x),(0,g.jsxs)(n.A,{mt:"60px",children:[(0,g.jsx)(P.A,{children:"Find your favorite pet"}),(0,g.jsx)(A,{onSearch:o=>{e((0,c.nI)(o)),a(1)}}),(0,g.jsx)(L,{notices:x}),(x.length>6||s>1)&&(0,g.jsx)(T.A,{totalPages:s,currentPage:l,onPageChange:e=>{a(e)}})]})}}}]);
//# sourceMappingURL=259.e9467b5d.chunk.js.map