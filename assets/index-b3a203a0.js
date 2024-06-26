import{r as n,Z as Zt}from"./index-fe10a68b.js";const dt="carousel",ft="controller",qt="navigation",Qt="no-scroll",Fe="portal",Jt="root",pt="toolbar",so="captions",lo="counter",ao="download",uo="fullscreen",fo="inline",po="share",ho="slideshow",mo="thumbnails",vo="zoom",ge="loading",en="playing",_e="error",xe="complete",tn="placeholder",se=e=>`active-slide-${e}`,Eo=se(ge),go=se(en),_o=se(_e),xo=se(xe),Lo="fullsize",ht="flex_center",nn="no_scroll",mt="no_scroll_padding",on="slide_wrapper",Z="prev",q="next",Je="swipe",te="close",vt="onPointerDown",Et="onPointerMove",gt="onPointerUp",_t="onPointerLeave",xt="onPointerCancel",Lt="onKeyDown",rn="onKeyUp",Pt="onWheel",cn="Escape",sn="ArrowLeft",ln="ArrowRight",an="button",We="icon",bt="contain",et="cover",un="Unknown action type",Ct="yarl__";function G(...e){return[...e].filter(Boolean).join(" ")}function C(e){return`${Ct}${e}`}function V(e){return`--${Ct}${e}`}function le(e,t){return`${e}${t?`_${t}`:""}`}function He(e){return t=>le(e,t)}function dn(e,t){var o;return(o=e==null?void 0:e[t])!==null&&o!==void 0?o:t}function Nt(...e){return()=>{e.forEach(t=>{t()})}}function Q(e,t,o){return()=>{const r=n.useContext(o);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Be(){return typeof window<"u"}function fn(e,t=0){const o=10**t;return Math.round((e+Number.EPSILON)*o)/o}function wt(e){return e.type===void 0||e.type==="image"}function pn(e,t){return e.imageFit===et||e.imageFit!==bt&&t===et}function be(e){return typeof e=="string"?Number.parseInt(e,10):e}function Pe(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=be(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function hn(e,t){const o=Pe(t),r=o.percent!==void 0?e.width/100*o.percent:o.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function Po(){return(Be()?window==null?void 0:window.devicePixelRatio:void 0)||1}function It(e,t){return t>0?(e%t+t)%t:0}function St(e){return e.length>0}function Ot(e,t){return e[It(t,e.length)]}function Ue(e,t){return St(e)?Ot(e,t):void 0}function mn(e){return wt(e)?e.src:void 0}function bo(e,t,o){if(!o)return e;const{buttons:r,...i}=e,s=r.findIndex(l=>l===t),c=n.isValidElement(o)?n.cloneElement(o,{key:t},null):o;if(s>=0){const l=[...r];return l.splice(s,1,c),{buttons:l,...i}}return{buttons:[c,...r],...i}}function Co(){const e=t=>{t.stopPropagation()};return{onPointerDown:e,onKeyDown:e,onWheel:e}}function vn(e,t,o=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),o))}const Ve={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[te]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:bt,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function J(e,t){return{name:e,component:t}}function M(e,t){return{module:e,children:t}}function Rt(e,t,o){return e.module.name===t?o(e):e.children?[M(e.module,e.children.flatMap(r=>{var i;return(i=Rt(r,t,o))!==null&&i!==void 0?i:[]}))]:[e]}function ee(e,t,o){return e.flatMap(r=>{var i;return(i=Rt(r,t,o))!==null&&i!==void 0?i:[]})}function En(e,t=[],o=[]){let r=e;const i=m=>{const p=[...r];for(;p.length>0;){const u=p.pop();if((u==null?void 0:u.module.name)===m)return!0;u!=null&&u.children&&p.push(...u.children)}return!1},s=(m,p)=>{if(m===""){r=[M(p,r)];return}r=ee(r,m,u=>[M(p,[u])])},c=(m,p)=>{r=ee(r,m,u=>[M(u.module,[M(p,u.children)])])},l=(m,p,u)=>{r=ee(r,m,v=>{var N;return[M(v.module,[...u?[M(p)]:[],...(N=v.children)!==null&&N!==void 0?N:[],...u?[]:[M(p)]])]})},f=(m,p,u)=>{r=ee(r,m,v=>[...u?[M(p)]:[],v,...u?[]:[M(p)]])},d=m=>{c(ft,m)},h=(m,p)=>{r=ee(r,m,u=>[M(p,u.children)])},E=m=>{r=ee(r,m,p=>p.children)},x=m=>{o.push(m)};return t.forEach(m=>{m({contains:i,addParent:s,append:c,addChild:l,addSibling:f,addModule:d,replace:h,remove:E,augment:x})}),{config:r,augmentation:m=>o.reduce((p,u)=>u(p),m)}}const yt=n.createContext(null),Tt=Q("useDocument","DocumentContext",yt);function gn({nodeRef:e,children:t}){const o=n.useMemo(()=>{const r=s=>{var c;return((c=s||e.current)===null||c===void 0?void 0:c.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:s=>{var c;return((c=r(s))===null||c===void 0?void 0:c.defaultView)||window}}},[e]);return n.createElement(yt.Provider,{value:o},t)}const Mt=n.createContext(null),Ce=Q("useEvents","EventsContext",Mt);function _n({children:e}){const[t]=n.useState({});n.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const o=n.useMemo(()=>{const r=(c,l)=>{var f;(f=t[c])===null||f===void 0||f.splice(0,t[c].length,...t[c].filter(d=>d!==l))};return{publish:(...[c,l])=>{var f;(f=t[c])===null||f===void 0||f.forEach(d=>d(l))},subscribe:(c,l)=>(t[c]||(t[c]=[]),t[c].push(l),()=>r(c,l)),unsubscribe:r}},[t]);return n.createElement(Mt.Provider,{value:o},e)}const At=n.createContext(null),ae=Q("useLightboxProps","LightboxPropsContext",At);function xn({children:e,...t}){return n.createElement(At.Provider,{value:t},e)}const Dt=n.createContext(null),Ne=Q("useLightboxState","LightboxStateContext",Dt),kt=n.createContext(null),Ln=Q("useLightboxDispatch","LightboxDispatchContext",kt);function Pn(e,t){switch(t.type){case"swipe":{const{slides:o}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,s=It(i,o.length),c=Ue(o,s),l=r||t.duration?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:o,currentIndex:s,globalIndex:i,currentSlide:c,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Ue(t.slides,t.index)}:e;default:throw new Error(un)}}function bn({slides:e,index:t,children:o}){const[r,i]=n.useReducer(Pn,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Ue(e,t)});n.useEffect(()=>{i({type:"update",slides:e,index:t})},[e,t]);const s=n.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return n.createElement(kt.Provider,{value:i},n.createElement(Dt.Provider,{value:s},o))}const Wt=n.createContext(null),we=Q("useTimeouts","TimeoutsContext",Wt);function Cn({children:e}){const[t]=n.useState([]);n.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const o=n.useMemo(()=>{const r=c=>{t.splice(0,t.length,...t.filter(l=>l!==c))};return{setTimeout:(c,l)=>{const f=window.setTimeout(()=>{r(f),c()},l);return t.push(f),f},clearTimeout:c=>{c!==void 0&&(r(c),window.clearTimeout(c))}}},[t]);return n.createElement(Wt.Provider,{value:o},e)}const Ut=n.forwardRef(function({label:t,className:o,icon:r,renderIcon:i,onClick:s,style:c,...l},f){const{styles:d,labels:h}=ae();return n.createElement("button",{ref:f,type:"button","aria-label":dn(h,t),className:G(C(an),o),onClick:s,style:{...c,...d.button},...l},i?i():n.createElement(r,{className:C(We),style:d.icon}))});function Vt(e,t){const o=r=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return o.displayName=e,o}function ue(e,t){return Vt(e,n.createElement("g",{fill:"currentColor"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}function No(e,t){return Vt(e,n.createElement(n.Fragment,null,n.createElement("defs",null,n.createElement("mask",{id:"strike"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"white"}),n.createElement("path",{d:"M0 0L24 24",stroke:"black",strokeWidth:4}))),n.createElement("path",{d:"M0.70707 2.121320L21.878680 23.292883",stroke:"currentColor",strokeWidth:2}),n.createElement("g",{fill:"currentColor",mask:"url(#strike)"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t)))}const Nn=ue("Close",n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),wn=ue("Previous",n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),In=ue("Next",n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),Sn=ue("Loading",n.createElement(n.Fragment,null,Array.from({length:8}).map((e,t,o)=>n.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/o.length*(t+1),transform:`rotate(${360/o.length*t}, 12, 12)`})))),On=ue("Error",n.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),de=Be()?n.useLayoutEffect:n.useEffect;function $t(){const[e,t]=n.useState(!1);return n.useEffect(()=>{var o,r;const i=(o=window.matchMedia)===null||o===void 0?void 0:o.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const s=c=>t(c.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",s),()=>{var c;return(c=i==null?void 0:i.removeEventListener)===null||c===void 0?void 0:c.call(i,"change",s)}},[]),e}function Rn(e){let t=0,o=0,r=0;const s=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(s){const c=s[1].split(",").map(be);c.length===6?(t=c[4],o=c[5]):c.length===16&&(t=c[12],o=c[13],r=c[14])}return{x:t,y:o,z:r}}function tt(e,t){const o=n.useRef(),r=n.useRef(),i=$t();return de(()=>{var s,c,l;if(e.current&&o.current!==void 0&&!i){const{keyframes:f,duration:d,easing:h,onfinish:E}=t(o.current,e.current.getBoundingClientRect(),Rn(e.current))||{};if(f&&d){(s=r.current)===null||s===void 0||s.cancel(),r.current=void 0;try{r.current=(l=(c=e.current).animate)===null||l===void 0?void 0:l.call(c,f,{duration:d,easing:h})}catch(x){console.error(x)}r.current&&(r.current.onfinish=()=>{r.current=void 0,E==null||E()})}}o.current=void 0}),{prepareAnimation:s=>{o.current=s},isAnimationPlaying:()=>{var s;return((s=r.current)===null||s===void 0?void 0:s.playState)==="running"}}}function Ft(){const e=n.useRef(null),t=n.useRef(),[o,r]=n.useState();return{setContainerRef:n.useCallback(s=>{e.current=s,t.current&&(t.current.disconnect(),t.current=void 0);const c=()=>{if(s){const l=window.getComputedStyle(s),f=d=>parseFloat(d)||0;r({width:Math.round(s.clientWidth-f(l.paddingLeft)-f(l.paddingRight)),height:Math.round(s.clientHeight-f(l.paddingTop)-f(l.paddingBottom))})}else r(void 0)};c(),s&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(c),t.current.observe(s))},[]),containerRef:e,containerRect:o}}function Le(){const e=n.useRef(),{setTimeout:t,clearTimeout:o}=we();return n.useCallback((r,i)=>{o(e.current),e.current=t(r,i>0?i:0)},[t,o])}function T(e){const t=n.useRef(e);return de(()=>{t.current=e}),n.useCallback((...o)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...o)},[])}function nt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function $e(e,t){return n.useMemo(()=>e==null&&t==null?null:o=>{nt(e,o),nt(t,o)},[e,t])}function yn(e,t=!1){const o=n.useRef();de(()=>{t&&o.current&&(o.current=!1,e())},[t,e]);const r=n.useCallback(()=>{o.current=!0},[]),i=n.useCallback(()=>{o.current=!1},[]);return{onFocus:r,onBlur:i}}function ze(){const[e,t]=n.useState(!1);return de(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function Tn(){const[e]=n.useState({}),t=n.useCallback((i,s)=>{var c;(c=e[i])===null||c===void 0||c.forEach(l=>{s.isPropagationStopped()||l(s)})},[e]),o=n.useMemo(()=>({onPointerDown:i=>t(vt,i),onPointerMove:i=>t(Et,i),onPointerUp:i=>t(gt,i),onPointerLeave:i=>t(_t,i),onPointerCancel:i=>t(xt,i),onKeyDown:i=>t(Lt,i),onKeyUp:i=>t(rn,i),onWheel:i=>t(Pt,i)}),[t]),r=n.useCallback((i,s)=>(e[i]||(e[i]=[]),e[i].unshift(s),()=>{const c=e[i];c&&c.splice(0,c.length,...c.filter(l=>l!==s))}),[e]);return{registerSensors:o,subscribeSensors:r}}function ot(e,t){const o=n.useRef(0),r=Le(),i=T((...s)=>{o.current=Date.now(),e(s)});return n.useCallback((...s)=>{r(()=>{i(s)},t-(Date.now()-o.current))},[t,i,r])}const Ae=He("slide"),De=He("slide_image");function Mn({slide:e,offset:t,render:o,rect:r,imageFit:i,imageProps:s,onClick:c,onLoad:l,style:f}){var d,h,E,x,m,p,u;const[v,N]=n.useState(ge),{publish:P}=Ce(),{setTimeout:R}=we(),k=n.useRef(null);n.useEffect(()=>{t===0&&P(se(v))},[t,v,P]);const L=T(I=>{("decode"in I?I.decode():Promise.resolve()).catch(()=>{}).then(()=>{I.parentNode&&(N(xe),R(()=>{l==null||l(I)},0))})}),b=n.useCallback(I=>{k.current=I,I!=null&&I.complete&&L(I)},[L]),S=n.useCallback(I=>{L(I.currentTarget)},[L]),A=n.useCallback(()=>{N(_e)},[]),g=pn(e,i),_=(I,z)=>Number.isFinite(I)?I:z,w=_(Math.max(...((h=(d=e.srcSet)===null||d===void 0?void 0:d.map(I=>I.width))!==null&&h!==void 0?h:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((E=k.current)===null||E===void 0?void 0:E.naturalWidth)||0),F=_(Math.max(...((m=(x=e.srcSet)===null||x===void 0?void 0:x.map(I=>I.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((p=k.current)===null||p===void 0?void 0:p.naturalHeight)||0),U=w&&F?{maxWidth:`min(${w}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},Y=(u=e.srcSet)===null||u===void 0?void 0:u.sort((I,z)=>I.width-z.width).map(I=>`${I.src} ${I.width}w`).join(", "),y=()=>r&&!g&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,Ie=Y&&r&&Be()?`${Math.round(Math.min(y(),r.width))}px`:void 0,{style:H,className:pe,...Se}=s||{};return n.createElement(n.Fragment,null,n.createElement("img",{ref:b,onLoad:S,onError:A,onClick:c,draggable:!1,className:G(C(De()),g&&C(De("cover")),v!==xe&&C(De("loading")),pe),style:{...U,...f,...H},...Se,alt:e.alt,sizes:Ie,srcSet:Y,src:e.src}),v!==xe&&n.createElement("div",{className:C(Ae(tn))},v===ge&&(o!=null&&o.iconLoading?o.iconLoading():n.createElement(Sn,{className:G(C(We),C(Ae(ge)))})),v===_e&&(o!=null&&o.iconError?o.iconError():n.createElement(On,{className:G(C(We),C(Ae(_e)))}))))}const An=n.forwardRef(function({className:t,children:o,...r},i){const s=n.useRef(null);return n.createElement(gn,{nodeRef:s},n.createElement("div",{ref:$e(i,s),className:G(C("root"),t),...r},o))});var D;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(D||(D={}));function Dn(e,t,o,r,i){n.useEffect(()=>i?()=>{}:Nt(e(vt,t),e(Et,o),e(gt,r),e(_t,r),e(xt,r)),[e,t,o,r,i])}var B;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(B||(B={}));const ke=30;function kn(e,t,o,r,i,s,c,l,f,d,h,E,x,m){const p=n.useRef(0),u=n.useRef([]),v=n.useRef(),N=n.useRef(0),P=n.useRef(B.NONE),R=n.useCallback(g=>{v.current===g.pointerId&&(v.current=void 0,P.current=B.NONE);const _=u.current;_.splice(0,_.length,..._.filter(w=>w.pointerId!==g.pointerId))},[]),k=n.useCallback(g=>{R(g),g.persist(),u.current.push(g)},[R]),L=T(g=>{k(g)}),b=(g,_)=>d&&g>_||f&&g<-_,S=T(g=>{if(u.current.find(_=>_.pointerId===g.pointerId)&&v.current===g.pointerId){const _=Date.now()-N.current,w=p.current;P.current===B.SWIPE?Math.abs(w)>.3*o||Math.abs(w)>5&&_<r?c(w,_):l(w):P.current===B.PULL&&(b(w,2*ke)?x(w,_):m(w)),p.current=0,P.current=B.NONE}R(g)}),A=T(g=>{const _=u.current.find(w=>w.pointerId===g.pointerId);if(_){const w=v.current===g.pointerId;if(g.buttons===0){w&&p.current!==0?S(g):R(_);return}const F=g.clientX-_.clientX,U=g.clientY-_.clientY;if(v.current===void 0){const Y=y=>{k(g),v.current=g.pointerId,N.current=Date.now(),P.current=y};Math.abs(F)>Math.abs(U)&&Math.abs(F)>ke&&t(F)?(Y(B.SWIPE),i()):Math.abs(U)>Math.abs(F)&&b(U,ke)&&(Y(B.PULL),h())}else w&&(P.current===B.SWIPE?(p.current=F,s(F)):P.current===B.PULL&&(p.current=U,E(U)))}});Dn(e,L,A,S)}function Wn({preventDefaultWheelX:e,preventDefaultWheelY:t}){const o=n.useRef(null),r=T(i=>{const s=Math.abs(i.deltaX)>Math.abs(i.deltaY);(s&&e||!s&&t||i.ctrlKey)&&i.preventDefault()});return n.useCallback(i=>{var s;i?i.addEventListener("wheel",r,{passive:!1}):(s=o.current)===null||s===void 0||s.removeEventListener("wheel",r),o.current=i},[r])}function Un(e,t,o,r,i,s,c,l,f){const d=n.useRef(0),h=n.useRef(0),E=n.useRef(),x=n.useRef(),m=n.useRef(0),p=n.useRef(0),{setTimeout:u,clearTimeout:v}=we(),N=n.useCallback(()=>{E.current&&(v(E.current),E.current=void 0)},[v]),P=n.useCallback(()=>{x.current&&(v(x.current),x.current=void 0)},[v]),R=T(()=>{e!==D.SWIPE&&(d.current=0,p.current=0,N(),P())});n.useEffect(R,[e,R]);const k=T(b=>{x.current=void 0,d.current===b&&f(d.current)}),L=T(b=>{if(!b.ctrlKey&&!(Math.abs(b.deltaY)>Math.abs(b.deltaX)))if(e===D.NONE){if(Math.abs(b.deltaX)<=1.2*Math.abs(m.current)){m.current=b.deltaX;return}if(!o(-b.deltaX))return;if(h.current+=b.deltaX,N(),Math.abs(h.current)>30)h.current=0,m.current=0,p.current=Date.now(),s();else{const S=h.current;E.current=u(()=>{E.current=void 0,S===h.current&&(h.current=0)},i)}}else if(e===D.SWIPE){let S=d.current-b.deltaX;if(S=Math.min(Math.abs(S),r)*Math.sign(S),d.current=S,c(S),P(),Math.abs(S)>.2*r){m.current=b.deltaX,l(S,Date.now()-p.current);return}x.current=u(()=>k(S),2*i)}else m.current=b.deltaX});n.useEffect(()=>t(Pt,L),[t,L])}const rt=He("container"),Ht=n.createContext(null),fe=Q("useController","ControllerContext",Ht);function Vn({children:e,...t}){var o;const{carousel:r,animation:i,controller:s,on:c,styles:l,render:f}=t,{closeOnPullUp:d,closeOnPullDown:h,preventDefaultWheelX:E,preventDefaultWheelY:x}=s,[m,p]=n.useState(),u=Ne(),v=Ln(),[N,P]=n.useState(D.NONE),R=n.useRef(0),k=n.useRef(0),L=n.useRef(1),{registerSensors:b,subscribeSensors:S}=Tn(),{subscribe:A,publish:g}=Ce(),_=Le(),w=Le(),F=Le(),{containerRef:U,setContainerRef:Y,containerRect:y}=Ft(),Ie=$e(Wn({preventDefaultWheelX:E,preventDefaultWheelY:x}),Y),H=n.useRef(null),pe=$e(H,void 0),{getOwnerDocument:Se}=Tt(),I=ze(),z=a=>(I?-1:1)*(typeof a=="number"?a:1),ne=T(()=>{var a;return(a=U.current)===null||a===void 0?void 0:a.focus()}),Ke=T(()=>t),Xe=T(()=>u),he=n.useCallback(a=>g(Z,a),[g]),me=n.useCallback(a=>g(q,a),[g]),oe=n.useCallback(()=>g(te),[g]),Oe=a=>!(r.finite&&(z(a)>0&&u.currentIndex===0||z(a)<0&&u.currentIndex===u.slides.length-1)),Ge=a=>{var O;R.current=a,(O=U.current)===null||O===void 0||O.style.setProperty(V("swipe_offset"),`${Math.round(a)}px`)},Re=a=>{var O,W;k.current=a,L.current=(()=>{const ie=(()=>h&&a>0?a:d&&a<0?-a:0)();return Math.min(Math.max(fn(1-ie/60*(1-.5),2),.5),1)})(),(O=U.current)===null||O===void 0||O.style.setProperty(V("pull_offset"),`${Math.round(a)}px`),(W=U.current)===null||W===void 0||W.style.setProperty(V("pull_opacity"),`${L.current}`)},{prepareAnimation:Kt}=tt(H,(a,O,W)=>{if(H.current&&y)return{keyframes:[{transform:`translate(0, ${a.rect.y-O.y+W.y}px)`,opacity:a.opacity},{transform:"translate(0, 0)",opacity:1}],duration:a.duration,easing:i.easing.fade}}),Ye=(a,O)=>{if(d||h){Re(a);let W=0;H.current&&(W=i.fade*(O?2:1),Kt({rect:H.current.getBoundingClientRect(),opacity:L.current,duration:W})),F(()=>{Re(0),P(D.NONE)},W),P(D.ANIMATION),O||oe()}},{prepareAnimation:Xt,isAnimationPlaying:Gt}=tt(H,(a,O,W)=>{var K;if(H.current&&y&&(!((K=u.animation)===null||K===void 0)&&K.duration)){const $=Pe(r.spacing),ie=($.percent?$.percent*y.width/100:$.pixel)||0;return{keyframes:[{transform:`translate(${z(u.globalIndex-a.index)*(y.width+ie)+a.rect.x-O.x+W.x}px, 0)`},{transform:"translate(0, 0)"}],duration:u.animation.duration,easing:u.animation.easing}}}),re=T(a=>{var O,W;const K=a.offset||0,$=K?i.swipe:(O=i.navigation)!==null&&O!==void 0?O:i.swipe,ie=!K&&!Gt()?i.easing.navigation:i.easing.swipe;let{direction:ve}=a;const Ee=(W=a.count)!==null&&W!==void 0?W:1;let ye=D.ANIMATION,X=$*Ee;if(!ve){const ce=y==null?void 0:y.width,Qe=a.duration||0,Me=ce?$/ce*Math.abs(K):$;Ee!==0?(Qe<Me?X=X/Me*Math.max(Qe,Me/5):ce&&(X=$/ce*(ce-Math.abs(K))),ve=z(K)>0?Z:q):X=$/2}let Te=0;ve===Z?Oe(z(1))?Te=-Ee:(ye=D.NONE,X=$):ve===q&&(Oe(z(-1))?Te=Ee:(ye=D.NONE,X=$)),X=Math.round(X),w(()=>{Ge(0),P(D.NONE)},X),H.current&&Xt({rect:H.current.getBoundingClientRect(),index:u.globalIndex}),P(ye),g(Je,{type:"swipe",increment:Te,duration:X,easing:ie})});n.useEffect(()=>{var a,O;!((a=u.animation)===null||a===void 0)&&a.increment&&(!((O=u.animation)===null||O===void 0)&&O.duration)&&_(()=>v({type:"swipe",increment:0}),u.animation.duration)},[u.animation,v,_]);const je=[S,Oe,(y==null?void 0:y.width)||0,i.swipe,()=>P(D.SWIPE),a=>Ge(a),(a,O)=>re({offset:a,duration:O,count:1}),a=>re({offset:a,count:0})],Yt=[()=>{h&&P(D.PULL)},a=>Re(a),a=>Ye(a),a=>Ye(a,!0)];kn(...je,d,h,...Yt),Un(N,...je);const Ze=T(()=>{s.focus&&Se().querySelector(`.${C(Fe)} .${C(rt())}`)&&ne()});n.useEffect(Ze,[Ze]);const qe=T(()=>{var a;(a=c.view)===null||a===void 0||a.call(c,{index:u.currentIndex})});n.useEffect(qe,[u.globalIndex,qe]),n.useEffect(()=>Nt(A(Z,a=>re({direction:Z,...a})),A(q,a=>re({direction:q,...a})),A(Je,a=>v(a))),[A,re,v]);const jt=n.useMemo(()=>({prev:he,next:me,close:oe,focus:ne,slideRect:y?hn(y,r.padding):{width:0,height:0},containerRect:y||{width:0,height:0},subscribeSensors:S,containerRef:U,setCarouselRef:pe,toolbarWidth:m,setToolbarWidth:p}),[he,me,oe,ne,S,y,U,pe,m,p,r.padding]);return n.useImperativeHandle(s.ref,()=>({prev:he,next:me,close:oe,focus:ne,getLightboxProps:Ke,getLightboxState:Xe}),[he,me,oe,ne,Ke,Xe]),n.createElement("div",{ref:Ie,className:G(C(rt()),C(ht)),style:{...N===D.SWIPE?{[V("swipe_offset")]:`${Math.round(R.current)}px`}:null,...N===D.PULL?{[V("pull_offset")]:`${Math.round(k.current)}px`,[V("pull_opacity")]:`${L.current}`}:null,...s.touchAction!=="none"?{[V("controller_touch_action")]:s.touchAction}:null,...l.container},...s.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...b},y&&n.createElement(Ht.Provider,{value:jt},e,(o=f.controls)===null||o===void 0?void 0:o.call(f)))}const $n=J(ft,Vn);function j(e){return le(dt,e)}function it(e){return le("slide",e)}function Fn({slide:e,offset:t}){const o=n.useRef(null),{currentIndex:r}=Ne(),{slideRect:i,close:s}=fe(),{render:c,carousel:{imageFit:l,imageProps:f},on:{click:d},controller:{closeOnBackdropClick:h},styles:{slide:E}}=ae(),x=()=>{var p,u,v,N;let P=(p=c.slide)===null||p===void 0?void 0:p.call(c,{slide:e,offset:t,rect:i});return!P&&wt(e)&&(P=n.createElement(Mn,{slide:e,offset:t,render:c,rect:i,imageFit:l,imageProps:f,onClick:t===0?()=>d==null?void 0:d({index:r}):void 0})),P?n.createElement(n.Fragment,null,(u=c.slideHeader)===null||u===void 0?void 0:u.call(c,{slide:e}),((v=c.slideContainer)!==null&&v!==void 0?v:({children:R})=>R)({slide:e,children:P}),(N=c.slideFooter)===null||N===void 0?void 0:N.call(c,{slide:e})):null},m=p=>{const u=o.current,v=p.target instanceof HTMLElement?p.target:void 0;h&&v&&u&&(v===u||Array.from(u.children).find(N=>N===v)&&v.classList.contains(C(on)))&&s()};return n.createElement("div",{ref:o,className:G(C(it()),t===0&&C(it("current")),C(ht)),onClick:m,style:E},x())}function Hn(){const e=ae().styles.slide;return n.createElement("div",{className:C("slide"),style:e})}function Bn({carousel:e}){const{slides:t,currentIndex:o,globalIndex:r}=Ne(),{setCarouselRef:i}=fe(),s=Pe(e.spacing),c=Pe(e.padding),l=vn(e,t,1),f=[];if(St(t))for(let d=o-l;d<=o+l;d+=1){const h=Ot(t,d),E=r-o+d,x=e.finite&&(d<0||d>t.length-1);f.push(x?{key:E}:{key:[`${E}`,mn(h)].filter(Boolean).join("|"),offset:d-o,slide:h})}return n.createElement("div",{ref:i,className:G(C(j()),f.length>0&&C(j("with_slides"))),style:{[`${V(j("slides_count"))}`]:f.length,[`${V(j("spacing_px"))}`]:s.pixel||0,[`${V(j("spacing_percent"))}`]:s.percent||0,[`${V(j("padding_px"))}`]:c.pixel||0,[`${V(j("padding_percent"))}`]:c.percent||0}},f.map(({key:d,slide:h,offset:E})=>h?n.createElement(Fn,{key:d,slide:h,offset:E}):n.createElement(Hn,{key:d})))}const zn=J(dt,Bn);function Bt(){const{carousel:e}=ae(),{slides:t,currentIndex:o}=Ne(),r=t.length===0||e.finite&&o===0,i=t.length===0||e.finite&&o===t.length-1;return{prevDisabled:r,nextDisabled:i}}function Kn(e){var t;const o=ze(),{publish:r}=Ce(),{animation:i}=ae(),{prevDisabled:s,nextDisabled:c}=Bt(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,f=ot(()=>r(Z),l),d=ot(()=>r(q),l),h=T(E=>{switch(E.key){case cn:r(te);break;case sn:(o?c:s)||(o?d:f)();break;case ln:(o?s:c)||(o?f:d)();break}});n.useEffect(()=>e(Lt,h),[e,h])}function ct({label:e,icon:t,renderIcon:o,action:r,onClick:i,disabled:s,style:c}){return n.createElement(Ut,{label:e,icon:t,renderIcon:o,className:C(`navigation_${r}`),disabled:s,onClick:i,style:c,...yn(fe().focus,s)})}function Xn({render:{buttonPrev:e,buttonNext:t,iconPrev:o,iconNext:r},styles:i}){const{prev:s,next:c,subscribeSensors:l}=fe(),{prevDisabled:f,nextDisabled:d}=Bt();return Kn(l),n.createElement(n.Fragment,null,e?e():n.createElement(ct,{label:"Previous",action:Z,icon:wn,renderIcon:o,style:i.navigationPrev,disabled:f,onClick:s}),t?t():n.createElement(ct,{label:"Next",action:q,icon:In,renderIcon:r,style:i.navigationNext,disabled:d,onClick:c}))}const Gn=J(qt,Xn),st=C(nn),Yn=C(mt);function jn(e){return"style"in e}function lt(e,t,o){const r=window.getComputedStyle(e),i=o?"padding-left":"padding-right",s=o?r.paddingLeft:r.paddingRight,c=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(be(s)||0)+t}px`),()=>{c?e.style.setProperty(i,c):e.style.removeProperty(i)}}function Zn({noScroll:{disabled:e},children:t}){const o=ze(),{getOwnerDocument:r,getOwnerWindow:i}=Tt();return n.useEffect(()=>{if(e)return()=>{};const s=[],c=i(),{body:l,documentElement:f}=r(),d=Math.round(c.innerWidth-f.clientWidth);if(d>0){s.push(lt(l,d,o));const h=l.getElementsByTagName("*");for(let E=0;E<h.length;E+=1){const x=h[E];jn(x)&&c.getComputedStyle(x).getPropertyValue("position")==="fixed"&&!x.classList.contains(Yn)&&s.push(lt(x,d,o))}}return l.classList.add(st),()=>{l.classList.remove(st),s.forEach(h=>h())}},[o,e,r,i]),n.createElement(n.Fragment,null,t)}const qn=J(Qt,Zn);function at(e){return le(Fe,e)}function ut(e,t,o){const r=e.getAttribute(t);return e.setAttribute(t,o),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function Qn({children:e,animation:t,styles:o,className:r,on:i,portal:s,close:c}){const[l,f]=n.useState(!1),[d,h]=n.useState(!1),E=n.useRef([]),x=n.useRef(null),{setTimeout:m}=we(),{subscribe:p}=Ce(),v=$t()?0:t.fade;n.useEffect(()=>(f(!0),()=>{f(!1),h(!1)}),[]);const N=T(()=>{E.current.forEach(L=>L()),E.current=[]}),P=T(()=>{var L;h(!1),N(),(L=i.exiting)===null||L===void 0||L.call(i),m(()=>{var b;(b=i.exited)===null||b===void 0||b.call(i),c()},v)});n.useEffect(()=>p(te,P),[p,P]);const R=T(L=>{var b,S,A;L.scrollTop,h(!0),(b=i.entering)===null||b===void 0||b.call(i);const g=(A=(S=L.parentNode)===null||S===void 0?void 0:S.children)!==null&&A!==void 0?A:[];for(let _=0;_<g.length;_+=1){const w=g[_];["TEMPLATE","SCRIPT","STYLE"].indexOf(w.tagName)===-1&&w!==L&&(E.current.push(ut(w,"inert","true")),E.current.push(ut(w,"aria-hidden","true")))}E.current.push(()=>{var _,w;(w=(_=x.current)===null||_===void 0?void 0:_.focus)===null||w===void 0||w.call(_)}),m(()=>{var _;(_=i.entered)===null||_===void 0||_.call(i)},v)}),k=n.useCallback(L=>{L?R(L):N()},[R,N]);return l?Zt.createPortal(n.createElement(An,{ref:k,className:G(r,C(at()),C(mt),d&&C(at("open"))),role:"presentation","aria-live":"polite",style:{...t.fade!==Ve.animation.fade?{[V("fade_animation_duration")]:`${v}ms`}:null,...t.easing.fade!==Ve.animation.easing.fade?{[V("fade_animation_timing_function")]:t.easing.fade}:null,...o.root},onFocus:L=>{x.current||(x.current=L.relatedTarget)}},e),s.root||document.body):null}const Jn=J(Fe,Qn);function eo({children:e}){return n.createElement(n.Fragment,null,e)}const to=J(Jt,eo);function no(e){return le(pt,e)}function oo({toolbar:{buttons:e},render:{buttonClose:t,iconClose:o},styles:r}){const{close:i,setToolbarWidth:s}=fe(),{setContainerRef:c,containerRect:l}=Ft();de(()=>{s(l==null?void 0:l.width)},[s,l==null?void 0:l.width]);const f=()=>t?t():n.createElement(Ut,{key:te,label:"Close",icon:Nn,renderIcon:o,onClick:i});return n.createElement("div",{ref:c,style:r.toolbar,className:C(no())},e==null?void 0:e.map(d=>d===te?f():d))}const ro=J(pt,oo);function zt(e,t){var o;return n.createElement(e.module.component,{key:e.module.name,...t},(o=e.children)===null||o===void 0?void 0:o.map(r=>zt(r,t)))}function io(e,t={}){const{easing:o,...r}=e,{easing:i,...s}=t;return{easing:{...o,...i},...r,...s}}function wo({carousel:e,animation:t,render:o,toolbar:r,controller:i,noScroll:s,on:c,plugins:l,slides:f,index:d,...h}){const{animation:E,carousel:x,render:m,toolbar:p,controller:u,noScroll:v,on:N,slides:P,index:R,plugins:k,...L}=Ve,{config:b,augmentation:S}=En([M(Jn,[M(qn,[M($n,[M(zn),M(ro),M(Gn)])])])],l||k),A=S({animation:io(E,t),carousel:{...x,...e},render:{...m,...o},toolbar:{...p,...r},controller:{...u,...i},noScroll:{...v,...s},on:{...N,...c},...L,...h});return A.open?n.createElement(xn,{...A},n.createElement(bn,{slides:f||P,index:be(d||R)},n.createElement(Cn,null,n.createElement(_n,null,zt(M(to,b),A))))):null}export{te as ACTION_CLOSE,q as ACTION_NEXT,Z as ACTION_PREV,Je as ACTION_SWIPE,xo as ACTIVE_SLIDE_COMPLETE,_o as ACTIVE_SLIDE_ERROR,Eo as ACTIVE_SLIDE_LOADING,go as ACTIVE_SLIDE_PLAYING,ht as CLASS_FLEX_CENTER,Lo as CLASS_FULLSIZE,nn as CLASS_NO_SCROLL,mt as CLASS_NO_SCROLL_PADDING,on as CLASS_SLIDE_WRAPPER,Bn as Carousel,zn as CarouselModule,Nn as CloseIcon,Vn as Controller,Ht as ControllerContext,$n as ControllerModule,yt as DocumentContext,gn as DocumentContextProvider,an as ELEMENT_BUTTON,We as ELEMENT_ICON,Lt as EVENT_ON_KEY_DOWN,rn as EVENT_ON_KEY_UP,xt as EVENT_ON_POINTER_CANCEL,vt as EVENT_ON_POINTER_DOWN,_t as EVENT_ON_POINTER_LEAVE,Et as EVENT_ON_POINTER_MOVE,gt as EVENT_ON_POINTER_UP,Pt as EVENT_ON_WHEEL,On as ErrorIcon,Mt as EventsContext,_n as EventsProvider,bt as IMAGE_FIT_CONTAIN,et as IMAGE_FIT_COVER,Ut as IconButton,Mn as ImageSlide,wo as Lightbox,Ve as LightboxDefaultProps,kt as LightboxDispatchContext,At as LightboxPropsContext,xn as LightboxPropsProvider,An as LightboxRoot,Dt as LightboxStateContext,bn as LightboxStateProvider,Sn as LoadingIcon,dt as MODULE_CAROUSEL,ft as MODULE_CONTROLLER,qt as MODULE_NAVIGATION,Qt as MODULE_NO_SCROLL,Fe as MODULE_PORTAL,Jt as MODULE_ROOT,pt as MODULE_TOOLBAR,Xn as Navigation,ct as NavigationButton,Gn as NavigationModule,In as NextIcon,Zn as NoScroll,qn as NoScrollModule,so as PLUGIN_CAPTIONS,lo as PLUGIN_COUNTER,ao as PLUGIN_DOWNLOAD,uo as PLUGIN_FULLSCREEN,fo as PLUGIN_INLINE,po as PLUGIN_SHARE,ho as PLUGIN_SLIDESHOW,mo as PLUGIN_THUMBNAILS,vo as PLUGIN_ZOOM,Qn as Portal,Jn as PortalModule,wn as PreviousIcon,eo as Root,to as RootModule,xe as SLIDE_STATUS_COMPLETE,_e as SLIDE_STATUS_ERROR,ge as SLIDE_STATUS_LOADING,tn as SLIDE_STATUS_PLACEHOLDER,en as SLIDE_STATUS_PLAYING,D as SwipeState,Wt as TimeoutsContext,Cn as TimeoutsProvider,oo as Toolbar,ro as ToolbarModule,un as UNKNOWN_ACTION_TYPE,sn as VK_ARROW_LEFT,ln as VK_ARROW_RIGHT,cn as VK_ESCAPE,se as activeSlideStatus,bo as addToolbarButton,vn as calculatePreload,Nt as cleanup,G as clsx,le as composePrefix,hn as computeSlideRect,ue as createIcon,No as createIconDisabled,J as createModule,M as createNode,C as cssClass,V as cssVar,wo as default,Po as devicePixelRatio,Ot as getSlide,Ue as getSlideIfPresent,It as getSlideIndex,mn as getSlideKey,St as hasSlides,Be as hasWindow,pn as isImageFitCover,wt as isImageSlide,dn as label,He as makeComposePrefix,Q as makeUseContext,be as parseInt,Pe as parseLengthPercentage,fn as round,nt as setRef,Co as stopNavigationEventsPropagation,tt as useAnimation,Ft as useContainerRect,fe as useController,Le as useDelay,Tt as useDocumentContext,T as useEventCallback,Ce as useEvents,$e as useForkRef,Kn as useKeyboardNavigation,de as useLayoutEffect,Ln as useLightboxDispatch,ae as useLightboxProps,Ne as useLightboxState,yn as useLoseFocus,$t as useMotionPreference,Bt as useNavigationState,Dn as usePointerEvents,kn as usePointerSwipe,Wn as usePreventWheelDefaults,ze as useRTL,Tn as useSensors,ot as useThrottle,we as useTimeouts,Un as useWheelSwipe,En as withPlugins};