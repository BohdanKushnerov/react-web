import{Z as a,j as c}from"./index-1dbf5670.js";import{u as n}from"./useCloseModal-32ba7e76.js";const l=document.querySelector("#modal-root"),p=({handleToggleModal:o,children:r,contentClasses:e})=>{n(o);const s=t=>{t.target===t.currentTarget&&o()};return a.createPortal(c.jsx("div",{onClick:s,className:`absolute left-0 top-0 z-10 h-screen w-screen bg-transparent ${e}`,children:r}),l)};export{p as M};
