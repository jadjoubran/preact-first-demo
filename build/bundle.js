!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function o(){var t=n(3).default;i=(0,r.render)((0,r.h)(t,null),document.body,i)}var r=n(1);n(15);var i=void 0;n(9),o()},function(t,e,n){!function(t,n){n(e)}(this,function(t){function e(t,e,n){this.nodeName=t,this.attributes=e,this.children=n,this.key=e&&e.key}function n(t,n){var o,r,i,u,a;for(a=arguments.length;a-- >2;)B.push(arguments[a]);for(n&&n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((i=B.pop())instanceof Array)for(a=i.length;a--;)B.push(i[a]);else null!=i&&i!==!0&&i!==!1&&("number"==typeof i&&(i=String(i)),u="string"==typeof i,u&&r?o[o.length-1]+=i:((o||(o=[])).push(i),r=u));var l=new e(t,n||void 0,o||E);return A.vnode&&A.vnode(l),l}function o(t,e){if(e)for(var n in e)t[n]=e[n];return t}function r(t){return o({},t)}function i(t,e){for(var n=e.split("."),o=0;o<n.length&&t;o++)t=t[n[o]];return t}function u(t){return"function"==typeof t}function a(t){return"string"==typeof t}function l(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function c(t,e){return n(t.nodeName,o(r(t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function f(t,e,n){var o=e.split(".");return function(e){for(var r=e&&e.target||this,u={},l=u,c=a(n)?i(e,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:e,f=0;f<o.length-1;f++)l=l[o[f]]||(l[o[f]]=!f&&t.state[o[f]]||{});l[o[f]]=c,t.setState(u)}}function s(t){!t._dirty&&(t._dirty=!0)&&1==Z.push(t)&&(A.debounceRendering||G)(p)}function p(){var t,e=Z;for(Z=[];t=e.pop();)t._dirty&&R(t)}function d(t){var e=t&&t.nodeName;return e&&u(e)&&!(e.prototype&&e.prototype.render)}function h(t,e){return t.nodeName(y(t),e||V)}function v(t,e){return a(e)?t instanceof Text:a(e.nodeName)?!t._componentConstructor&&m(t,e.nodeName):u(e.nodeName)?!t._componentConstructor||t._componentConstructor===e.nodeName||d(e):void 0}function m(t,e){return t.normalizedNodeName===e||H(t.nodeName)===H(e)}function y(t){var e=r(t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function g(t){var e=t.parentNode;e&&e.removeChild(t)}function b(t,e,n,o,r){if("className"===e&&(e="class"),"class"===e&&o&&"object"==typeof o&&(o=l(o)),"key"===e);else if("class"!==e||r)if("style"===e){if((!o||a(o)||a(n))&&(t.style.cssText=o||""),o&&"object"==typeof o){if(!a(n))for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"!=typeof o[i]||Q[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var c=t._listeners||(t._listeners={});e=H(e.substring(2)),o?c[e]||t.addEventListener(e,w,!!X[e]):c[e]&&t.removeEventListener(e,w,!!X[e]),c[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t)_(t,e,null==o?"":o),null!=o&&o!==!1||t.removeAttribute(e);else{var f=r&&e.match(/^xlink\:?(.+)/);null==o||o===!1?f?t.removeAttributeNS("http://www.w3.org/1999/xlink",H(f[1])):t.removeAttribute(e):"object"==typeof o||u(o)||(f?t.setAttributeNS("http://www.w3.org/1999/xlink",H(f[1]),o):t.setAttribute(e,o))}else t.className=o||""}function _(t,e,n){try{t[e]=n}catch(t){}}function w(t){return this._listeners[t.type](A.event&&A.event(t)||t)}function C(t){if(g(t),t instanceof Element){t._component=t._componentConstructor=null;var e=t.normalizedNodeName||H(t.nodeName);($[e]||($[e]=[])).push(t)}}function x(t,e){var n=H(t),o=$[n]&&$[n].pop()||(e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t));return o.normalizedNodeName=n,o}function O(){for(var t;t=F.pop();)A.afterMount&&A.afterMount(t),t.componentDidMount&&t.componentDidMount()}function N(t,e,n,o,r,i){q++||(Y=r&&void 0!==r.ownerSVGElement,tt=t&&!(J in t));var u=k(t,e,n,o);return r&&u.parentNode!==r&&r.appendChild(u),--q||(tt=!1,i||O()),u}function k(t,e,n,o){for(var r=e&&e.attributes&&e.attributes.ref;d(e);)e=h(e,n);if(null==e&&(e=""),a(e))return t&&t instanceof Text&&t.parentNode?t.nodeValue!=e&&(t.nodeValue=e):(t&&S(t),t=document.createTextNode(e)),t;if(u(e.nodeName))return W(t,e,n,o);var i=t,l=String(e.nodeName),c=Y,f=e.children;if(Y="svg"===l||"foreignObject"!==l&&Y,t){if(!m(t,l)){for(i=x(l,Y);t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),S(t)}}else i=x(l,Y);var s=i.firstChild,p=i[J];if(!p){i[J]=p={};for(var v=i.attributes,y=v.length;y--;)p[v[y].name]=v[y].value}return!tt&&f&&1===f.length&&"string"==typeof f[0]&&s&&s instanceof Text&&!s.nextSibling?s.nodeValue!=f[0]&&(s.nodeValue=f[0]):(f&&f.length||s)&&U(i,f,n,o,!!p.dangerouslySetInnerHTML),j(i,e.attributes,p),r&&(p.ref=r)(i),Y=c,i}function U(t,e,n,o,r){var i,u,a,l,c=t.childNodes,f=[],s={},p=0,d=0,h=c.length,m=0,y=e&&e.length;if(h)for(var b=0;b<h;b++){var _=c[b],w=_[J],C=y?(u=_._component)?u.__key:w?w.key:null:null;null!=C?(p++,s[C]=_):(tt||r||w||_ instanceof Text)&&(f[m++]=_)}if(y)for(var b=0;b<y;b++){a=e[b],l=null;var C=a.key;if(null!=C)p&&C in s&&(l=s[C],s[C]=void 0,p--);else if(!l&&d<m)for(i=d;i<m;i++)if(u=f[i],u&&v(u,a)){l=u,f[i]=void 0,i===m-1&&m--,i===d&&d++;break}l=k(l,a,n,o),l&&l!==t&&(b>=h?t.appendChild(l):l!==c[b]&&(l===c[b+1]&&g(c[b]),t.insertBefore(l,c[b]||null)))}if(p)for(var b in s)s[b]&&S(s[b]);for(;d<=m;)l=f[m--],l&&S(l)}function S(t,e){var n=t._component;if(n)I(n,!e);else{t[J]&&t[J].ref&&t[J].ref(null),e||C(t);for(var o;o=t.lastChild;)S(o,e)}}function j(t,e,n){var o;for(o in n)e&&o in e||null==n[o]||b(t,o,n[o],n[o]=void 0,Y);if(e)for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||b(t,o,n[o],n[o]=e[o],Y)}function M(t){var e=t.constructor.name,n=et[e];n?n.push(t):et[e]=[t]}function P(t,e,n){var o=new t(e,n),r=et[t.name];if(D.call(o,e,n),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function T(t,e,n,o,r){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&A.syncComponentUpdates===!1&&t.base?s(t):R(t,1,r)),t.__ref&&t.__ref(t))}function R(t,e,n,i){if(!t._disable){var a,l,c,f,s=t.props,p=t.state,v=t.context,m=t.prevProps||s,g=t.prevState||p,b=t.prevContext||v,_=t.base,w=t.nextBase,C=_||w,x=t._component;if(_&&(t.props=m,t.state=g,t.context=b,2!==e&&t.shouldComponentUpdate&&t.shouldComponentUpdate(s,p,v)===!1?a=!0:t.componentWillUpdate&&t.componentWillUpdate(s,p,v),t.props=s,t.state=p,t.context=v),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!a){for(t.render&&(l=t.render(s,p,v)),t.getChildContext&&(v=o(r(v),t.getChildContext()));d(l);)l=h(l,v);var k,U,j=l&&l.nodeName;if(u(j)){var M=y(l);c=x,c&&c.constructor===j&&M.key==c.__key?T(c,M,1,v):(k=c,c=P(j,M,v),c.nextBase=c.nextBase||w,c._parentComponent=t,t._component=c,T(c,M,0,v),R(c,1,n,!0)),U=c.base}else f=C,k=x,k&&(f=t._component=null),(C||1===e)&&(f&&(f._component=null),U=N(f,l,v,n||!_,C&&C.parentNode,!0));if(C&&U!==C&&c!==x){var W=C.parentNode;W&&U!==W&&(W.replaceChild(U,C),k||(C._component=null,S(C)))}if(k&&I(k,U!==C),t.base=U,U&&!i){for(var D=t,L=t;L=L._parentComponent;)(D=L).base=U;U._component=D,U._componentConstructor=D.constructor}}!_||n?F.unshift(t):a||(t.componentDidUpdate&&t.componentDidUpdate(m,g,b),A.afterUpdate&&A.afterUpdate(t));var B,E=t._renderCallbacks;if(E)for(;B=E.pop();)B.call(t);q||i||O()}}function W(t,e,n,o){for(var r=t&&t._component,i=r,u=t,a=r&&t._componentConstructor===e.nodeName,l=a,c=y(e);r&&!l&&(r=r._parentComponent);)l=r.constructor===e.nodeName;return r&&l&&(!o||r._component)?(T(r,c,3,n,o),t=r.base):(i&&!a&&(I(i,!0),t=u=null),r=P(e.nodeName,c,n),t&&!r.nextBase&&(r.nextBase=t,u=null),T(r,c,1,n,o),t=r.base,u&&t!==u&&(u._component=null,S(u))),t}function I(t,e){A.beforeUnmount&&A.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;if(o)I(o,e);else if(n){n[J]&&n[J].ref&&n[J].ref(null),t.nextBase=n,e&&(g(n),M(t));for(var r;r=n.lastChild;)S(r,!e)}t.__ref&&t.__ref(null),t.componentDidUnmount&&t.componentDidUnmount()}function D(t,e){this._dirty=!0,this.context=e,this.props=t,this.state||(this.state={})}function L(t,e,n){return N(n,t,{},!1,e)}var A={},B=[],E=[],z={},H=function(t){return z[t]||(z[t]=t.toLowerCase())},K="undefined"!=typeof Promise&&Promise.resolve(),G=K?function(t){K.then(t)}:setTimeout,V={},J="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",Q={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},X={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Z=[],$={},F=[],q=0,Y=!1,tt=!1,et={};o(D.prototype,{linkState:function(t,e){var n=this._linkedStates||(this._linkedStates={});return n[t+e]||(n[t+e]=f(this,t,e))},setState:function(t,e){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,u(t)?t(n,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),s(this)},forceUpdate:function(){R(this,2)},render:function(){}}),t.h=n,t.cloneElement=c,t.Component=D,t.render=L,t.rerender=p,t.options=A})},function(t,e,n){!function(e,o){t.exports=o(n(1))}(this,function(t){"use strict";function e(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),u={},a=void 0;if(i&&i[1])for(var l=i[1].split("&"),c=0;c<l.length;c++){var f=l[c].split("=");u[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=o(t.replace(r,"")),e=o(e||"");for(var s=Math.max(t.length,e.length),p=0;p<s;p++)if(e[p]&&":"===e[p].charAt(0)){var d=e[p].replace(/(^\:|[+*?]+$)/g,""),h=(e[p].match(/[+*?]+$/)||_)[0]||"",v=~h.indexOf("+"),m=~h.indexOf("*"),y=t[p]||"";if(!y&&!m&&(h.indexOf("?")<0||v)){a=!1;break}if(u[d]=decodeURIComponent(y),v||m){u[d]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){a=!1;break}return(n.default===!0||a!==!1)&&u}function n(t,e){var n=t.attributes||_,o=e.attributes||_;if(n.default)return 1;if(o.default)return-1;var i=r(n.path)-r(o.path);return i||n.path.length-o.path.length}function o(t){return i(t).split("/")}function r(t){return(i(t).match(/\/+/g)||"").length}function i(t){return t.replace(/(^\/+|\/+$)/g,"")}function u(t,e){}function a(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}function c(t){return N in t}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push";C&&C[e]?C[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function s(){var t=void 0;return t=C&&C.location?C.location:C&&C.getCurrentLocation?C.getCurrentLocation():"undefined"!=typeof location?location:O,""+(t.pathname||"")+(t.search||"")}function p(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),d(t)&&f(t,e?"replace":"push"),h(t)}function d(t){for(var e=x.length;e--;)if(x[e].canRoute(t))return!0;return!1}function h(t){for(var e=!1,n=0;n<x.length;n++)x[n].routeTo(t)===!0&&(e=!0);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return p(e)}}function m(t){if(0===t.button)return v(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)){var e=t.target;do if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&c(e)){if(0!==t.button)return;if(v(e))return y(t)}while(e=e.parentNode)}}function b(){k||("function"==typeof addEventListener&&(C||addEventListener("popstate",function(){return h(s())}),addEventListener("click",g)),k=!0)}var _={},w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},C=null,x=[],O={},N="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",k=!1,U=function(e){return t.h("a",w({},e,{onClick:m}))},S=function(t){function o(e){u(this,o);var n=a(this,t.call(this,e));return e.history&&(C=e.history),n.state={url:n.props.url||s()},b(),n}return l(o,t),o.prototype.shouldComponentUpdate=function(t){return t.static!==!0||t.url!==this.props.url||t.onChange!==this.props.onChange},o.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},o.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},o.prototype.componentWillMount=function(){x.push(this),this.updating=!0},o.prototype.componentDidMount=function(){var t=this;C&&(this.unlisten=C.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},o.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),x.splice(x.indexOf(this),1)},o.prototype.componentWillUpdate=function(){this.updating=!0},o.prototype.componentDidUpdate=function(){this.updating=!1},o.prototype.getMatchingChildren=function(t,o,r){return t.slice().sort(n).filter(function(t){var n=t.attributes,i=n.path,u=e(o,i,n);if(u){if(r!==!1){n.url=o,n.matches=u;for(var a in u)u.hasOwnProperty(a)&&(n[a]=u[a])}return!0}})},o.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return r!==a&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:a,active:i,current:u})),u},o}(t.Component),j=function(e){var n=e.component,o=e.url,r=e.matches;return t.h(n,{url:o,matches:r})};return S.route=p,S.Router=S,S.Route=j,S.Link=U,S})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function i(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(2),c=n(4),f=o(c),s=n(5),p=o(s),d=n(8),h=o(d),v=n(6),m=o(v),y=function(t){function e(){var n,o,u;r(this,e);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=o=i(this,t.call.apply(t,[this].concat(l))),o.handleRoute=function(t){o.currentUrl=t.url},u=n,i(o,u)}return u(e,t),e.prototype.render=function(){return(0,a.h)("div",{id:"app"},(0,a.h)(f.default,null),(0,a.h)(l.Router,{onChange:this.handleRoute},(0,a.h)(p.default,{path:"/"}),(0,a.h)(h.default,{path:"/profile/",user:"me"}),(0,a.h)(h.default,{path:"/profile/:user"}),(0,a.h)(m.default,{path:"/new-trip"})))},e}(a.Component);e.default=y},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function i(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}e.__esModule=!0,e.default=void 0;var a=n(1),l=(n(2),n(10)),c=o(l),f=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return u(e,t),e.prototype.render=function(){var t="My trips";return(0,a.h)("div",null,(0,a.h)("header",{class:c.default.header},(0,a.h)("h1",null,t)),(0,a.h)("div",{class:c.default.blindHeader}))},e}(a.Component);e.default=f},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function i(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(11),c=o(l),f=n(7),s=o(f),p=n(2),d=function(t){function e(n){r(this,e);var o=i(this,t.call(this,n)),u=window.localStorage.getItem("trips")||"[]";return o.state.trips=JSON.parse(u),o}return u(e,t),e.prototype.render=function(){return console.log(this.state.trips),this.state.trips.length?(0,a.h)("div",{class:c.default.home},this.state.trips.map(function(t){return(0,a.h)("li",null,t.name)})):(0,a.h)("div",null,(0,a.h)(s.default,null),(0,a.h)(p.Link,{href:"/new-trip",class:c.default.fab},(0,a.h)("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),(0,a.h)("path",{d:"M0 0h24v24H0z",fill:"none"}))))},e}(a.Component);e.default=d},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function i(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(12),c=o(l),f=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return u(e,t),e.prototype.newTrip=function(t){t.preventDefault();var e=document.getElementById("trip-name").value;if(!e)return!1;var n=window.localStorage.getItem("trips")||"[]";n=JSON.parse(n),n.push({name:e}),window.localStorage.setItem("trips",JSON.stringify(n)),window.location.href="/"},e.prototype.render=function(){return(0,a.h)("form",{onSubmit:this.newTrip},(0,a.h)("input",{type:"text",id:"trip-name",class:c.default.newTrip,placeholder:"Trip destination"}),(0,a.h)("input",{type:"submit",style:"opacity:0;"}))},e}(a.Component);e.default=f},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function i(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(13),c=o(l),f=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return u(e,t),e.prototype.render=function(){return(0,a.h)("div",{class:c.default.NoTrips},(0,a.h)("div",null,(0,a.h)("img",{src:"/assets/no_trips.png",alt:"No trips",width:"100"}),(0,a.h)("h3",null,"No trips yet"),(0,a.h)("p",null,"When you start planning, your trips will live here.")))},e}(a.Component);e.default=f},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function i(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(14),c=o(l),f=function(t){function e(){var n,o,u;r(this,e);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=o=i(this,t.call.apply(t,[this].concat(l))),o.state={count:0},u=n,i(o,u)}return u(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.updateTime.bind(this),1e3),this.updateTime(),this.setState({count:this.state.count+1})},e.prototype.componentWillUnmount=function(){clearInterval(this.timer)},e.prototype.updateTime=function(){var t=(new Date).toLocaleString();this.setState({time:t})},e.prototype.render=function(t,e){var n=t.user,o=e.time,r=e.count;return(0,a.h)("div",{class:c.default.profile},(0,a.h)("h1",null,"Profile: ",n),(0,a.h)("p",null,"This is the user profile for a user named ",n,"."),(0,a.h)("div",null,"Current time: ",o),(0,a.h)("div",null,"Profile route mounted ",r," times."))},e}(a.Component);e.default=f},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(16),i=o(r);i.default.install({onUpdateReady:function(){console.log("update ready"),i.default.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},function(t,e){t.exports={header:"_3fP58XuPgCmDWOEWzAZZKf",blindHeader:"_3pJ5csfhXM1OOUgw-IZ6dG"}},function(t,e){t.exports={home:"_2xyY27-hSytDZNDhO4G8vI",fab:"WBO7NQZTDRllXKuBzB46U"}},function(t,e){t.exports={newTrip:"_2XwCKf0Cv1IuQ9q-Uh3g0h"}},function(t,e){t.exports={NoTrips:"cviQLdlgch7kkekC2DvAG"}},function(t,e){t.exports={profile:"JmD9RgpseyQdqQb9x-LXt"}},function(t,e){},function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function o(t){if(t||(t={}),n()){var e=navigator.serviceWorker.register("/sw.js"),o=function(t){function e(){switch(u.state){case"redundant":r("onUpdateFailed"),u.onstatechange=null;break;case"installing":o||r("onUpdating");break;case"installed":i||r("onUpdateReady");break;case"activated":r("onUpdated"),u.onstatechange=null}}function n(){switch(u.state){case"redundant":u.onstatechange=null;break;case"installing":break;case"installed":break;case"activated":r("onInstalled"),u.onstatechange=null}}var o,i,u=t.installing||t.waiting;if(u&&!u.onstatechange){var a;t.active?(e(),a=e):(n(),a=n),o=!0,t.waiting&&(i=!0),u.onstatechange=a}},r=function(e){"function"==typeof t[e]&&t[e]({source:"ServiceWorker"})};return void e.then(function(t){t&&(o(t),t.onupdatefound=function(){o(t)})}).catch(function(t){return r("onError"),Promise.reject(t)})}}function r(t,e){if(n())return void navigator.serviceWorker.getRegistration().then(function(n){return n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),void(t&&t())):void(e&&e())})}function i(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}e.install=o,e.applyUpdate=r,e.update=i}]);
//# sourceMappingURL=bundle.js.map