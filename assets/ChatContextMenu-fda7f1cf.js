import{u,a,j as e,r as m,_ as f}from"./index-4696ae0f.js";import{s as h}from"./sprite-94821839.js";import{C as j,D as M}from"./DeleteButton-61233522.js";import"./ChatPage-f03e86e4.js";import"./useCloseModal-802af8f3.js";import"./FileInput-92924cf4.js";import"./useResizeWindow-95586f27.js";import"./convertTimeWithZero-0e4ead24.js";const D=({groupedMessages:c,textContent:l=!0,color:n})=>{const{t:o}=u(),{chatUID:i}=a(s=>s.currentChatInfo),r=a(s=>s.updateEditingMessage),t=a(s=>s.selectedDocDataMessage),p=a(s=>s.resetSelectedMessages),g=()=>{if(!c)return;const s=Object.values(c).reduce((d,x)=>d.concat(x),[]);if(i&&s&&t&&t.length===1){const d={selectedMessage:t[0]};r(d),p()}};return e.jsxs("button",{className:"flex w-full items-center justify-between px-8 py-2 text-white hover:cursor-pointer hover:rounded-md hover:bg-darkZincOpacity90",type:"button",onClick:g,"aria-label":"Edit message",children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:h+"#icon-pencil",fill:n})}),l&&e.jsx("span",{className:"text-base",children:o("ContextMenu.Edit")})]})},w=({textContent:c=!0})=>{const{t:l}=u(),n=a(t=>t.isSelectedMessages),o=a(t=>t.updateIsSelectedMessages),i=a(t=>t.updateSelectedDocDataMessage),r=()=>{n?(i(null),o(!1)):o(!0)};return e.jsxs("button",{className:"flex w-full items-center justify-between px-8 py-2 text-white transition-all duration-150 hover:cursor-pointer hover:rounded-md hover:bg-darkZincOpacity90",type:"button",onClick:r,"aria-label":"Select message",children:[e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:h+"#icon-select",fill:"#FFFFFF"})}),c&&e.jsx("span",{className:"text-base",children:l("ContextMenu.Select")})]})},b=m.lazy(()=>f(()=>import("./Reactions-8b181fad.js"),["assets/Reactions-8b181fad.js","assets/index-4696ae0f.js","assets/index-af5a0e8a.css"])),k=({groupedMessages:c})=>{var o,i;const l=a(r=>r.currentUser.uid),n=a(r=>r.selectedDocDataMessage);return e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsxs("div",{className:"pointer-events-auto h-56 w-56 rounded-3xl bg-mainBlack p-2",children:[n&&n.length===1&&((i=(o=n[0])==null?void 0:o.data())==null?void 0:i.senderUserID)===l&&e.jsx(D,{groupedMessages:c,color:"white"}),e.jsx(j,{white:"white",dark:"white"}),e.jsx(M,{color:"white"}),e.jsx(w,{color:"white"})]})]})};export{k as default};