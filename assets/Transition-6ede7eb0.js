import{_ as O}from"./objectWithoutPropertiesLoose-68193569.js";import{_ as g}from"./useResizeWindow-95586f27.js";import{R as x,X as v}from"./index-4696ae0f.js";function k(p,s){p.prototype=Object.create(s.prototype),p.prototype.constructor=p,g(p,s)}const b={disabled:!1},N=x.createContext(null);var D=function(s){return s.scrollTop},m="unmounted",l="exited",f="entering",h="entered",T="exiting",u=function(p){k(s,p);function s(r,e){var t;t=p.call(this,r,e)||this;var n=e,i=n&&!n.isMounting?r.enter:r.appear,a;return t.appearStatus=null,r.in?i?(a=l,t.appearStatus=f):a=h:r.unmountOnExit||r.mountOnEnter?a=m:a=l,t.state={status:a},t.nextCallback=null,t}s.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===m?{status:l}:null};var o=s.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=T)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,t,n,i;return t=n=i=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,i=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:i}},o.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&D(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:m})},o.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,a=this.props.nodeRef?[i]:[v.findDOMNode(this),i],c=a[0],E=a[1],S=this.getTimeouts(),C=i?S.appear:S.enter;if(!e&&!n||b.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(C,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||b.disabled){this.safeSetState({status:l},function(){e.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:T},function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(i)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),i=e==null&&!this.props.addEndListener;if(!n||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=a[0],E=a[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var i=O(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(N.Provider,{value:null},typeof n=="function"?n(e,i):x.cloneElement(x.Children.only(n),i))},s}(x.Component);u.contextType=N;u.propTypes={};function d(){}u.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};u.UNMOUNTED=m;u.EXITED=l;u.ENTERING=f;u.ENTERED=h;u.EXITING=T;const M=u;export{M as T};