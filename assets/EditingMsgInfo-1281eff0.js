import{u as i,j as e}from"./index-1dbf5670.js";import{B as r}from"./ButtonClose-abd96f0a.js";import{s as l}from"./sprite-f89b8981.js";const m=({selectedMessage:t,handleCancelEditingMessage:a})=>{const{t:s}=i();return e.jsxs("div",{className:"relative ml-3 mr-16 flex items-center gap-3 rounded-3xl bg-mediumLightZinc px-5 dark:bg-darkBackground",children:[e.jsx("svg",{width:20,height:20,className:"fill-darkZinc dark:fill-white",children:e.jsx("use",{href:l+"#icon-pencil"})}),e.jsxs("div",{children:[e.jsx("p",{className:"flex text-mediumDarkViolet",children:s("ChatForm.EditMessage")}),e.jsx("p",{className:"max-w-[65%] overflow-hidden text-ellipsis whitespace-nowrap text-black dark:text-white lg:max-w-[85]",children:t.data().message||s("ChatForm.EmptyMessage")})]}),e.jsx("div",{className:"absolute right-12 top-0",children:e.jsx(r,{handleClickButtonClose:a})})]})};export{m as default};
