_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t);var a=n("q1tI"),l=n.n(a),s=n("YFqc"),p=n.n(s),y=n("nOHt"),h=n.n(y),v=l.a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(f,e);var t,n,c,i=d(f);function f(){return r(this,f),i.apply(this,arguments)}return t=f,c=[{key:"getInitialProps",value:function(e){return console.log(e),new Promise((function(e,t){setTimeout((function(){e({appName:"Super App"})}),1e3)}))}}],(n=[{key:"render",value:function(){return v("div",null,v("h1",null,"The Main Page of ",this.props.appName),v("p",null,"Go to"," ",v(p.a,{href:"/auth"},v("a",null,"Auth"))),v("button",{onClick:function(){return h.a.push("/auth")}},"Go to Auth"))}}])&&o(t.prototype,n),c&&o(t,c),f}(a.Component);t.default=b},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var u,c=o(n("q1tI")),i=n("elyg"),f=n("nOHt"),a=new Map,l=window.IntersectionObserver,s={};var p=function(e,t){var n=u||(l?u=new l((function(e){e.forEach((function(e){if(a.has(e.target)){var t=a.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),a.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),a.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}a.delete(e)}):function(){}};function y(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),s[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),u=o[0],a=o[1],h=(0,f.useRouter)(),v=h&&h.pathname||"/",d=c.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href);return{href:t,as:e.as?(0,i.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),b=d.href,w=d.as;c.default.useEffect((function(){if(t&&l&&u&&u.tagName&&(0,i.isLocalURL)(b)&&!s[b+"%"+w])return p(u,(function(){y(h,b,w)}))}),[t,u,b,w,h]);var m=e.children,_=e.replace,g=e.shallow,E=e.scroll;"string"===typeof m&&(m=c.default.createElement("a",null,m));var O=c.Children.only(m),R={ref:function(e){e&&a(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,b,w,_,g,E)}};return t&&(R.onMouseEnter=function(e){(0,i.isLocalURL)(b)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),y(h,b,w,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(R.href=(0,i.addBasePath)(w)),c.default.cloneElement(O,R)};t.default=h},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);