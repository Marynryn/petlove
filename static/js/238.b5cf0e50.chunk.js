"use strict";(self.webpackChunkpetlove=self.webpackChunkpetlove||[]).push([[238],{87690:(e,r,t)=>{t.d(r,{A:()=>k});var o=t(27565),i=t(47854),s=t(86849),n=t(11370),a=t(35142),l=t(10723),x=t(5802),d=t(75633),p=t(56762),c=t(36937),h=t(57064),u=t(2382),g=t(14586),m=t(27929);const f=()=>(0,m.jsxs)(i.A,{sx:{pb:" 20px"},children:[(0,m.jsx)(i.A,{sx:{width:"80px",height:"80px",my:"20px",mx:"auto",backgroundColor:"#FFF4DF",borderRadius:"100%",textAlign:"center"},children:(0,m.jsx)(x.A,{sx:{textAlign:"center",fontSize:"44px",fontWeight:800},children:"\ud83d\udc36"})}),(0,m.jsx)(x.A,{sx:{textAlign:"center",color:"var(--secondary-color)",mb:"20px",fontSize:"20px",fontWeight:700},children:"Attention"}),(0,m.jsx)(x.A,{sx:{mb:"24px",fontSize:"14px",fontWeight:500,textAlign:"center",lineHeight:1.28,letterSpacing:"-0.28px"},children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,m.jsxs)(i.A,{px:"20px",children:[" ",(0,m.jsx)(g.Q,{})]})]});var j=t(87046),b=t(97468),A=t(18413),y=t(84606),v=t(14060);const w=e=>{let{popularity:r}=e;if(!r)return null;const t=Math.min(r,5),o=[];for(let i=1;i<=5;i++)o.push(i<=t?(0,m.jsx)(a.A,{sx:{color:"rgba(255, 197, 49, 1)",fontSize:"16px",pr:"4px"}},i):(0,m.jsx)(v.A,{sx:{color:"rgba(38, 38, 38, 0.05)",fontSize:"16px",pr:"4px"}},i));return(0,m.jsx)(i.A,{children:o})},S=e=>{let{props:r}=e;const t=(0,l.wA)(),[s,n]=(0,o.useState)(!1),a=(0,l.d4)(b.Pz);(0,o.useEffect)((()=>{t((0,j.Wc)(r._id));const e=JSON.parse(localStorage.getItem("favorites"))||[];n(e.includes(r._id))}),[t,r._id]),console.log(a),(0,o.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("favorites"))||[];if(s&&!e.includes(r._id))e.push(r._id);else if(!s&&e.includes(r._id)){const t=e.indexOf(r._id);t>-1&&e.splice(t,1)}localStorage.setItem("favorites",JSON.stringify(e))}),[s,r._id]);const p=()=>{t(s?(0,j.$p)(a._id):(0,j.Pj)(a._id)),n(!s)},u={backgroundColor:"var(--secondary-color)",color:"var(--background-color)",height:"46px",width:"100%",textTransform:"capitalize",fontSize:"16px",borderRadius:"30px",fontWeight:500,"&:hover":{backgroundColor:"#F9B020"}};return(0,m.jsxs)(i.A,{sx:{py:"20px",textAlign:"center",position:"relative",height:"386px",width:"295px"},children:[(0,m.jsxs)(i.A,{children:[(0,m.jsx)(i.A,{sx:{position:"absolute",right:"55%",borderRadius:"30px",backgroundColor:" #FFF4DF"},children:(0,m.jsx)(x.A,{sx:{p:"8px 14px",textTransform:"capitalize",fontWeight:500,fontSize:"12px",color:"var(--secondary-color)"},children:a.category})}),(0,m.jsx)("img",{src:a.imgURL,alt:a.title,style:{width:"120px",height:"120px",objectFit:"cover",marginBottom:"24px",borderRadius:"100%",mx:"auto"}})]}),(0,m.jsxs)(i.A,{sx:{},children:[(0,m.jsx)(x.A,{sx:{fontWeight:700,fontSize:"16px",mb:"10px"},children:a.title}),(0,m.jsxs)(i.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:"24px"},children:[(0,m.jsx)(w,{popularity:a.popularity}),(0,m.jsx)(x.A,{sx:{fontSize:"14px"},children:a.popularity})]})]}),(0,m.jsxs)(i.A,{px:"26px",children:[" ",(0,m.jsx)(y.A,{props:a,hidden:!0})]}),(0,m.jsx)(x.A,{sx:{fontWeight:500,fontSize:"14px",overflow:"hidden",letterSpacing:"-0.28px",mb:"42px"},children:a.comment}),(0,m.jsxs)(i.A,{style:{display:"flex",gap:"10px",position:"absolute",bottom:"20px",width:"100%",px:"8px"},children:[s?(0,m.jsxs)(d.A,{onClick:p,sx:u,children:["Remove from\xa0\xa0",(0,m.jsx)("svg",{width:18,height:18,children:(0,m.jsx)("use",{href:"".concat(c.A,"#icon-trash-01"),style:{paddingLeft:"8px",fill:"var(--background-color)"}})})]}):(0,m.jsxs)(d.A,{onClick:p,sx:u,children:[" Add to\xa0\xa0",(0,m.jsx)(h.A,{pl:"8px",sx:{fontSize:"18px",stroke:"var(--background-color)"}})]}),a.user&&(0,m.jsx)(A.A,{href:"mailto:".concat(a.user.email),target:"_blank",rel:"noopener",sx:{textDecoration:"none",width:"100%"},children:(0,m.jsx)(d.A,{sx:{backgroundColor:" #FFF4DF",color:"var(--secondary-color)",height:"46px",width:"100%",textTransform:"capitalize",fontSize:"16px",borderRadius:"30px",fontWeight:500,"&:hover":{backgroundColor:"#FBE7C1"}},children:"Contact"})})]})]})};var C=t(7493);const z=e=>{let{props:r}=e;const t=(0,l.wA)(),[s,n]=(0,o.useState)(!1),[g,A]=(0,o.useState)(!1),[v,w]=(0,o.useState)(!1),{isLogIn:z}=(0,C.Q)(),k=(0,l.d4)(b.jd);(0,o.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("favorites"))||k;n(k.includes(r._id)||e.includes(r._id))}),[k,r._id]);return(0,m.jsxs)(i.A,{p:"24px",width:"100%",bgcolor:"var(--background-color)",sx:{minWidth:"232px",borderRadius:"16px",height:"430px",position:"relative"},children:[(0,m.jsx)("img",{src:r.imgURL,alt:r.title,style:{width:"100%",objectFit:"cover",marginBottom:"24px",height:"178px",borderRadius:"16px"}}),(0,m.jsxs)(i.A,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,m.jsx)(x.A,{sx:{fontWeight:700,fontSize:"16px"},children:r.title}),(0,m.jsxs)(i.A,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsx)(a.A,{sx:{color:"var(--secondary-color)",width:"16px",height:"16px"}}),(0,m.jsx)(x.A,{sx:{fontSize:"14px"},children:r.popularity})]})]}),(0,m.jsx)(y.A,{props:r}),(0,m.jsx)(x.A,{sx:{fontWeight:500,fontSize:"14px",overflow:"hidden",letterSpacing:"-0.28px"},children:r.comment}),(0,m.jsxs)(i.A,{style:{display:"flex",gap:"10px",bottom:"24px",position:"absolute",width:"100%"},children:[(0,m.jsx)(d.A,{sx:{backgroundColor:"var(--secondary-color)",color:"var(--background-color)",width:"231px",height:"46px",textTransform:"capitalize",fontSize:"14px",borderRadius:"30px",fontWeight:500},onClick:()=>{z?w(!0):A(!0)},children:"Learn more"}),(0,m.jsx)(i.A,{sx:{borderRadius:"30px",backgroundColor:" #FFF4DF",width:"46px",height:"46px",display:"flex",justifyContent:"center"},children:(0,m.jsx)(p.A,{onClick:()=>{if(z){const e=JSON.parse(localStorage.getItem("favorites"))||[];s?(t((0,j.$p)(r._id)),localStorage.setItem("favorites",JSON.stringify(e.filter((e=>e!==r._id))))):(t((0,j.Pj)(r._id)),localStorage.setItem("favorites",JSON.stringify([...e,r._id]))),n(!s)}else A(!0)},children:s?(0,m.jsx)(i.A,{children:(0,m.jsx)("svg",{width:18,height:18,children:(0,m.jsx)("use",{href:"".concat(c.A,"#icon-trash-01"),style:{fill:"var(--secondary-color)"}})})}):(0,m.jsx)(h.A,{sx:{fill:"var(--secondary-color)"}})})})]}),(0,m.jsx)(u.A,{isOpen:g,onClose:()=>A(!1),children:(0,m.jsx)(f,{})}),(0,m.jsx)(u.A,{isOpen:v,onClose:()=>w(!1),children:(0,m.jsx)(S,{props:r})})]})},k=e=>{let{props:r}=e;return 0===r.length?null:(0,m.jsx)(i.A,{children:(0,m.jsx)(s.A,{sx:{p:0},children:r.map((e=>(0,m.jsx)(n.Ay,{sx:{p:0,mb:"24px"},children:(0,m.jsx)(z,{props:e})},e._id)))})})}},84606:(e,r,t)=>{t.d(r,{A:()=>l});t(27565);var o=t(72471),i=t(47854),s=t(5802),n=t(11030),a=t(27929);const l=e=>{let{props:r,hidden:t}=e;const l="/profile"===(0,n.zy)().pathname,x={fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5},d={fontWeight:500,fontSize:"12px",letterSpacing:"-0.24px",textTransform:"capitalize"};return(0,a.jsxs)(i.A,{sx:{display:"flex",gap:"10px",mt:"8px",mb:l?0:"16px",justifyContent:"space-between",minWidth:l?"100px":"232px",overflow:"hidden",textOverflow:"ellipsis",flexWrap:l?"wrap":"nowrap"},children:[(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{sx:x,children:"Name"}),(0,a.jsx)(s.A,{sx:d,children:r.name})]}),(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{sx:x,children:"Birthday"}),(0,a.jsx)(s.A,{sx:d,children:(0,o.b)(r.birthday)})]}),(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{sx:x,children:"Sex"}),(0,a.jsx)(s.A,{sx:d,children:r.sex})]}),(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{sx:x,children:"Species"}),(0,a.jsx)(s.A,{sx:d,children:r.species})]}),!t&&(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{sx:{fontWeight:500,fontSize:"10px",letterSpacing:"-0.2px",opacity:.5,overflow:"hidden",textOverflow:"ellipsis"},children:"Category"}),(0,a.jsx)(s.A,{sx:d,children:r.category})]})]})}},72471:(e,r,t)=>{function o(e){if(void 0===e)return;const r=new Date(e),t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).format(r).split("/");return"".concat(t[0],".").concat(t[1],".").concat(t[2])}function i(e){if(!e)return;const r=new Date(e),t=r.getFullYear(),o=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0");return"".concat(t,"-").concat(o,"-").concat(i)}t.d(r,{H:()=>i,b:()=>o})},2079:(e,r,t)=>{t.d(r,{Q:()=>i});var o=t(99236);const i=async e=>{try{const r=new FormData;r.append("file",e),r.append("upload_preset","mqypjnxr");const t=await o.A.post("https://api.cloudinary.com/v1_1/dikdzvcu8/image/upload",r);if(200===t.status){const e=t.data.secure_url;return console.log("Image URL:",e),e}return console.error("Failed to upload image:",t.statusText),null}catch(r){return console.error("Error uploading image:",r.message),null}}},8238:(e,r,t)=>{t.r(r),t.d(r,{Profile:()=>T,default:()=>Y});var o=t(47854),i=t(27565),s=t(91742),n=t(45435),a=t(5802),l=t(87690),x=t(10723),d=t(87046),p=t(97468),c=t(27929);const h=()=>{const[e,r]=(0,i.useState)(0),[t,h]=(0,i.useState)([]),u=(0,x.wA)(),g=(0,x.d4)(p.UH),m=(0,x.d4)(p.mB);(0,i.useEffect)((()=>{u((0,d.Mz)())}),[u]),(0,i.useEffect)((()=>{h(g)}),[g]),console.log(t);const f={backgroundColor:"var(--secondary-color)",textDecoration:"none",height:"46px",textTransform:"capitalize",borderRadius:"30px","&:hover":{backgroundColor:"#F9B020"},"&.MuiTab-root":{color:"var(--background-color)",fontWeight:500,fontSize:"14px",textDecoration:"none"},"&.MuiTouchRipple-root":{display:"none"}},j={textTransform:"capitalize",backgroundColor:"var(--background-color)",color:"var(--primary-color)",borderRadius:"30px","&.MuiTab-root":{fontWeight:500,fontSize:"14px",textDecoration:"none"}};return(0,c.jsxs)(o.A,{children:[(0,c.jsxs)(s.A,{sx:{textDecoration:"none",mb:"20px","& .MuiTabs-indicator":{display:"none"},"& .MuiTabs- flexContainer":{gap:"10px"}},value:e,onChange:(e,t)=>{r(t)},children:[(0,c.jsx)(n.A,{label:"My favorite pets",sx:0===e?f:j}),(0,c.jsx)(n.A,{label:"Viewed",ml:8,sx:1===e?f:j})]}),0===e?t.length>0?(0,c.jsx)(l.A,{props:t}):(0,c.jsxs)(a.A,{sx:{mt:"80px",mb:"140px",fontWeight:500,fontSize:"14px",textAlign:"center"},children:["Oops,  ",(0,c.jsx)(a.A,{component:"span",sx:{mt:"80px",mb:"140px",fontWeight:700,fontSize:"14px",color:"var(--secondary-color)"},children:" looks like there aren't any furries "}),' on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.']}):1===e?(0,c.jsx)(l.A,{props:m.noticesViewed}):null]})};var u=t(2382),g=t(36937),m=t(75633),f=t(42826),j=t(56762),b=t(39442),A=t(44927),y=t(19079),v=t(41918),w=t(2079),S=t(86488);const C=e=>{let{onClose:r}=e;const t=(0,x.d4)(p.mB),s=(0,x.wA)(),n=(0,i.useRef)(null),[l,h]=(0,i.useState)(!1),{register:u,handleSubmit:m,setValue:C,formState:{errors:z}}=(0,b.mN)({resolver:(0,A.t)(y.Fk),defaultValues:{name:t.name||"",email:t.email||"",phone:t.phone||"",avatar:t.avatar||""}});return(0,c.jsxs)(o.A,{sx:{pt:"20px",pb:"20px",width:"295px"},children:[(0,c.jsx)(a.A,{sx:{fontSize:"20px",fontWeight:700},children:"Edit information"}),""===t.avatar?(0,c.jsx)(o.A,{sx:{width:"80px",height:"80px",mx:"auto",backgroundColor:"#FFF4DF",borderRadius:"100%",textAlign:"center",mt:"20px",mb:"12px"},children:(0,c.jsx)("svg",{width:40,height:40,style:{padding:"20px"},children:(0,c.jsx)("use",{href:"".concat(g.A,"#icon-Vector-2"),style:{fill:"var(--secondary-color)"}})})}):(0,c.jsx)(o.A,{sx:{width:"80px",height:"80px",mx:"auto",borderRadius:"100%",textAlign:"center",mt:"20px",mb:"12px"},children:(0,c.jsx)("img",{src:t.avatar,alt:"Avatar",style:{width:"100%",height:"100%",borderRadius:"50%"}})}),(0,c.jsxs)("form",{onSubmit:m((async e=>{const t={};for(const r in e)e[r]&&""!==e[r].trim()&&(t[r]=e[r]);h(!0);try{await s((0,d.bV)(t)),r()}catch(o){console.error("Error updating user:",o),v.Ay.error("Error updating user: "+o.message)}finally{h(!1)}})),children:[(0,c.jsxs)(o.A,{sx:{display:"flex",gap:"8px",mb:"10px"},children:[(0,c.jsx)(f.A,{sx:{mt:0,mb:0,width:"160px","& .MuiOutlinedInput-root":{borderRadius:"30px","& fieldset":{border:t.avatar?"1px solid var(--secondary-color)":"1px solid rgba(38, 38, 38, 0.15)"},"&:hover fieldset":{borderColor:"var(--secondary-color)"},"&.Mui-focused fieldset":{borderColor:"var(--secondary-color)"},"& .MuiInputBase-input::placeholder":{color:"var(--primary-color)",opacity:1}},"& .MuiOutlinedInput-input":{padding:"12px",height:"16px",fontSize:"14px",fontWeight:500},"& .MuiFormHelperText-root":{height:"12px",margin:0,fontSize:"10px",color:"#EF2447"}},placeholder:"Avatar URL",value:t.avatar,onChange:e=>C("avatar",e.target.value),fullWidth:!0,margin:"normal"}),(0,c.jsxs)(o.A,{sx:{height:"42px"},children:[(0,c.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},ref:n,onChange:async e=>{const r=e.target.files[0];if(r)try{const e=await(0,w.Q)(r);console.log(e),C("avatar",e)}catch(t){console.error("Error uploading file:",t.message)}}}),(0,c.jsxs)(j.A,{sx:{display:"flex",borderRadius:"30px",backgroundColor:"#FFF4DF",height:"42px","&:hover":{backgroundColor:"var(--secondary-color)"},"&:active":{backgroundColor:"var(--secondary-color)"}},onClick:()=>n.current.click(),children:[(0,c.jsx)(a.A,{sx:{pl:"4px",fontSize:"12px",fontWeight:500,mr:"8px"},children:"Upload photo"}),(0,c.jsx)("svg",{width:18,height:18,children:(0,c.jsx)("use",{href:"".concat(g.A,"#icon-upload-cloud"),style:{fill:"var(--secondary-color)"}})})]})]})]}),(0,c.jsx)(f.A,{sx:{mt:0,mb:"10px","& .MuiOutlinedInput-root":{borderRadius:"30px","& fieldset":{border:t.name?"1px solid var(--secondary-color)":"1px solid rgba(38, 38, 38, 0.15)"},"&:hover fieldset":{borderColor:"var(--secondary-color)"},"&.Mui-focused fieldset":{borderColor:"var(--secondary-color)"},"& .MuiInputBase-input::placeholder":{color:"var(--primary-color)",opacity:1}},"& .MuiOutlinedInput-input":{padding:"12px",height:"16px",fontSize:"14px",fontWeight:500},"& .MuiFormHelperText-root":{height:"12px",margin:0,fontSize:"10px",color:"#EF2447"}},placeholder:"Name",...u("name"),error:!!z.name,helperText:z.name?z.name.message:"",fullWidth:!0,margin:"normal"}),(0,c.jsx)(f.A,{sx:{mt:0,mb:"10px","& .MuiOutlinedInput-root":{borderRadius:"30px","& fieldset":{border:t.email?"1px solid var(--secondary-color)":"1px solid rgba(38, 38, 38, 0.15)"},"&:hover fieldset":{borderColor:"var(--secondary-color)"},"&.Mui-focused fieldset":{borderColor:"var(--secondary-color)"},"& .MuiInputBase-input::placeholder":{color:"var(--primary-color)",opacity:1}},"& .MuiOutlinedInput-input":{padding:"12px",height:"16px",fontSize:"14px",fontWeight:500},"& .MuiFormHelperText-root":{height:"12px",margin:0,fontSize:"10px",color:"#EF2447"}},placeholder:"Email",...u("email"),error:!!z.email,helperText:z.email?z.email.message:"",fullWidth:!0,margin:"normal"}),(0,c.jsx)(f.A,{sx:{mt:0,mb:"10px","& .MuiOutlinedInput-root":{borderRadius:"30px","& fieldset":{border:t.phone?"1px solid var(--secondary-color)":"1px solid rgba(38, 38, 38, 0.15)"},"&:hover fieldset":{borderColor:"var(--secondary-color)"},"&.Mui-focused fieldset":{borderColor:"var(--secondary-color)"},"& .MuiInputBase-input::placeholder":{color:"var(--primary-color)",opacity:1}},"& .MuiOutlinedInput-input":{padding:"12px",height:"16px",fontSize:"14px",fontWeight:500},"& .MuiFormHelperText-root":{height:"12px",margin:0,fontSize:"10px",color:"#EF2447"}},placeholder:"+380",...u("phone"),error:!!z.phone,helperText:z.phone?z.phone.message:"",fullWidth:!0,margin:"normal"}),(0,c.jsx)(o.A,{mt:2,display:"flex",justifyContent:"flex-end",children:(0,c.jsx)(S.A,{bgColor:"var(--secondary-color)",textColor:"var(--background-color)",type:"submit",disabled:l,children:"Go to profile"})})]})]})},z=()=>{const[e,r]=(0,i.useState)(!1);return(0,c.jsxs)(o.A,{sx:{width:"38px",height:"38px",borderRadius:"100%",background:"#FFF4DF",display:"flex",justifyContent:"center"},children:[(0,c.jsx)(m.A,{type:"button",onClick:()=>{r(!0)},children:(0,c.jsx)("svg",{width:18,height:18,children:(0,c.jsx)("use",{href:"".concat(g.A,"#icon-edit-2"),style:{paddingLeft:"8px",fill:"var(--secondary-color)"}})})}),(0,c.jsx)(u.A,{isOpen:e,onClose:()=>r(!1),children:(0,c.jsx)(C,{onClose:()=>r(!1)})})]})};var k=t(67052);const F=e=>{let{props:r}=e;const t=(0,x.d4)(p.mB),i={border:"1px solid #F6B83D",borderRadius:"30px",fontSize:"14px",fontWeight:500,height:"42px",display:"flex",alignItems:"center",pl:"12px",mb:"10px"};return(0,c.jsxs)(o.A,{mb:"30px",children:[""===t.avatar?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.A,{sx:{width:"94px",height:"94px",mx:"auto",backgroundColor:"#FFF4DF",borderRadius:"100%",textAlign:"center",mt:"20px",mb:"12px"},children:(0,c.jsx)("svg",{width:40,height:40,style:{padding:"20px"},children:(0,c.jsx)("use",{href:"".concat(g.A,"#icon-Vector-2"),style:{fill:"var(--secondary-color)"}})})}),(0,c.jsx)(a.A,{sx:{textDecoration:"underline",fontSize:"12px",fontWeight:500,textAlign:"center",mt:"8px",mb:"28px"},children:" Upload photo"})]}):(0,c.jsx)(o.A,{sx:{width:"94px",height:"94px",mx:"auto",borderRadius:"100%",textAlign:"center",mt:"20px",mb:"12px"},children:(0,c.jsx)("img",{src:t.avatar,alt:"Avatar",style:{width:"100%",height:"100%",borderRadius:"50%"}})}),(0,c.jsx)(a.A,{sx:{fontSize:"16px",fontWeight:700,mb:"20px"},children:"My information"}),r.name?(0,c.jsx)(a.A,{sx:i,children:r.name}):(0,c.jsx)(a.A,{sx:{border:"1px solid rgba(38, 38, 38, 0.15)",borderRadius:"30px",fontSize:"14px",fontWeight:500,height:"42px",display:"flex",alignItems:"center",pl:"12px",mb:"10px"},children:"Name"}),r.email?(0,c.jsx)(a.A,{sx:i,children:r.email}):(0,c.jsx)(a.A,{sx:{border:"1px solid rgba(38, 38, 38, 0.15)",borderRadius:"30px",fontSize:"14px",fontWeight:500,height:"42px",display:"flex",alignItems:"center",pl:"12px",mb:"10px"},children:"Email"}),r.phone?(0,c.jsxs)(a.A,{sx:i,children:[r.phone," "]}):(0,c.jsx)(a.A,{sx:{border:"1px solid rgba(38, 38, 38, 0.15)",borderRadius:"30px",fontSize:"14px",fontWeight:500,height:"42px",display:"flex",alignItems:"center",pl:"12px",mb:"10px"},children:"+3805 "})]})};var R=t(20477);const I=()=>(0,c.jsx)("div",{children:(0,c.jsx)(R.k2,{to:"/add-pet",style:{textDecoration:"none"},children:(0,c.jsxs)(S.A,{bgColor:"var(--secondary-color)",textColor:"var(--background-color)",type:"submit",children:[(0,c.jsx)(a.A,{sx:{fontSize:"14px",fontWeight:500,pl:"16px",mr:"4px"},children:"Add pet"}),(0,c.jsx)("svg",{width:18,height:18,style:{paddingRight:"8px"},children:(0,c.jsx)("use",{href:"".concat(g.A,"#icon-plus"),style:{stroke:"var(--background-color)"}})})]})})});var W=t(86849),M=t(11370),q=t(84606);const O=e=>{let{props:r}=e;const t=(0,x.wA)();return(0,c.jsxs)(o.A,{sx:{p:"12px 12px 16px 16px",textAlign:"center",position:"relative",display:"flex",border:"1px solid rgba(38, 38, 38, 0.10)",borderRadius:"20px",width:"100%"},children:[(0,c.jsx)(o.A,{children:(0,c.jsx)("img",{src:r.imgURL,alt:r.title,style:{width:"66px",height:"66px",objectFit:"cover",borderRadius:"100%",mx:"auto"}})}),(0,c.jsxs)(o.A,{sx:{display:"flex",gap:"4px",ml:"14px"},children:[(0,c.jsxs)(o.A,{children:[(0,c.jsx)(a.A,{sx:{fontWeight:700,fontSize:"14px",mb:"2px",textTransform:"capitalize",textOverflow:"ellipsis"},children:r.title}),(0,c.jsx)(q.A,{props:r,hidden:!0})]}),(0,c.jsx)(m.A,{onClick:()=>{t((0,d.Cs)(r._id))},sx:{backgroundColor:"#FFF4DF",height:"30px",width:"30px",borderRadius:"100%","&:hover":{backgroundColor:"#F9B020"},minWidth:"30px",p:0},children:(0,c.jsx)("svg",{width:16,height:16,children:(0,c.jsx)("use",{href:"".concat(g.A,"#icon-trash-01"),style:{fill:"var(--secondary-color)"}})})})]})]})},_=()=>{const e=(0,x.d4)(p.XY);return console.log(e),0===e.length?(0,c.jsx)(o.A,{height:"1px"}):(0,c.jsx)(o.A,{children:(0,c.jsx)(W.A,{sx:{p:0},children:e.map((e=>(0,c.jsx)(M.Ay,{sx:{p:0,mb:"24px"},children:(0,c.jsx)(O,{props:e})},e._id)))})})},D=()=>(0,c.jsxs)("div",{children:[(0,c.jsxs)(o.A,{sx:{display:"flex",justifyContent:"space-between",mb:"20px",alignItems:"center"},children:[(0,c.jsx)(a.A,{variant:"h4",sx:{fontSize:"16px",fontWeight:700},children:"My pets"}),(0,c.jsx)(I,{})]}),(0,c.jsx)(_,{})]}),E=e=>{let{props:r}=e;return(0,c.jsxs)(o.A,{sx:{borderRadius:"30px",backgroundColor:"var(--background-color)",p:"18px 20px 40px 20px",mt:"18px",mb:"40px"},children:[(0,c.jsxs)(o.A,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,c.jsxs)(o.A,{sx:{p:"10px 14px",display:"flex",alignItems:"center",backgroundColor:"var(--secondary-color)",borderRadius:"30px",height:" 18px",width:"52px"},children:[(0,c.jsx)(a.A,{sx:{mr:"4px",p:0,fontSize:"14px",fontWeight:500,color:"var(--background-color)"},children:"User"}),(0,c.jsx)("svg",{width:16,height:16,children:(0,c.jsx)("use",{href:"".concat(g.A,"#icon-Vector-2"),style:{fill:"var(--background-color)"}})})]}),(0,c.jsx)(z,{})]}),(0,c.jsx)(F,{props:r}),(0,c.jsx)(D,{}),(0,c.jsx)(o.A,{width:"114px",sx:{mt:"20px"},children:(0,c.jsx)(k.A,{})})]})},T=()=>{const e=(0,x.wA)(),r=(0,x.d4)(p.mB);return(0,i.useEffect)((()=>{e((0,d.Mz)())}),[e]),(0,c.jsxs)(o.A,{children:[(0,c.jsx)(E,{props:r}),(0,c.jsx)(h,{})]})},Y=T},19079:(e,r,t)=>{t.d(r,{Fk:()=>n,Pt:()=>a,Qr:()=>i,X5:()=>s});var o=t(57685);const i=o.Ik({name:o.Yj().required(" Name is required").min(2,"Name must be at least 8 characters").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]*$/,"Name can only contain letters, numbers, and spaces"),email:o.Yj().trim().email().required("Email is required").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid email format"),password:o.Yj().required("Password is required").min(7,"Password must be at least 7 characters"),confirmPassword:o.Yj().oneOf([o.KR("password"),null],"Passwords must match").required("Confirm Password is required")}),s=o.Ik({email:o.Yj().trim().email().required("Email is required").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid email format"),password:o.Yj().required("Password is required").min(7,"Password must be at least 7 characters")}),n=o.Ik().shape({name:o.Yj().nullable(!0).default(""),email:o.Yj().nullable().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid email format").required("Email is required"),avatar:o.Yj().nullable(!0).matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,{message:"Invalid image URL",excludeEmptyString:!0}),phone:o.Yj().nullable(!0).matches(/^\+38\d{10}$/,{message:"Invalid phone number format",excludeEmptyString:!0})}),a=o.Ik().shape({title:o.Yj().required("Title is required"),name:o.Yj().required("Name is required"),imgUrl:o.Yj().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid URL format").required("Image URL is required"),species:o.Yj().required("Species is required"),birthday:o.Yj().matches(/^\d{4}-\d{2}-\d{2}$/,"Invalid date format").required("Birthday is required"),sex:o.Yj().required("Sex is required")})}}]);
//# sourceMappingURL=238.b5cf0e50.chunk.js.map