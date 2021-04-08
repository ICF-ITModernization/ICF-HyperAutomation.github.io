_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{PkgG:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n("nKUr"),c=n("e+cM");function o(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(c.b,{children:[Object(r.jsx)("h1",{className:"text-3xl",children:"ServiceNow Integrated Chatbot"}),Object(r.jsx)("p",{className:"mt-4",children:'This Chatbot uses the ServiceNow integrated "Virtual Agent"'}),Object(r.jsx)(c.a,{children:Object(r.jsx)("iframe",{id:"sn_va_web_client",title:"ServiceNow Virtual Agent Client",src:"https://incentivetechnologygroupllcdemo14.service-now.com/sn_va_web_client_app_embed.do?sysparm_skip_load_history=true",className:"h-full"})})]})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),i=n("elyg"),l=n("nOHt"),a=n("vNVm"),s={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],l=n[1];return{href:o,as:e.as?(0,i.resolveHref)(c,e.as):l||o}}),[c,e.href,e.as]),d=f.href,b=f.as,p=e.children,h=e.replace,v=e.shallow,j=e.scroll,O=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var m=o.Children.only(p),x=m&&"object"===typeof m&&m.ref,g=(0,a.useIntersection)({rootMargin:"200px"}),y=r(g,2),w=y[0],N=y[1],_=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,o.useEffect)((function(){var e=N&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof O?O:n&&n.locale,c=s[d+"%"+b+(r?"%"+r:"")];e&&!c&&u(n,d,b,{locale:r})}),[b,d,N,O,t,n]);var k={ref:_,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,l,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:a,scroll:l}))}(e,n,d,b,h,v,j,O)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(n,d,b,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var P="undefined"!==typeof O?O:n&&n.locale,E=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(b,P,n&&n.locales,n&&n.domainLocales);k.href=E||(0,i.addBasePath)((0,i.addLocale)(b,P,n&&n.defaultLocale))}return o.default.cloneElement(m,k)};t.default=f},"e+cM":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return b}));var r=n("nKUr"),c=n("q1tI");function o(e){var t=Object(c.useState)(!0),n=t[0],o=t[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"fixed flex flex-col h-screen items-end p-4 right-0 inset-y-0 mr-24",children:[Object(r.jsx)("div",{className:"border flex-1 mb-2 overflow-hidden rounded rounded-lg transition duration-700 ".concat(n?"":"invisible opacity-0"),children:e.children}),Object(r.jsxs)("button",{className:"bg-[#0785f2] border border-[#0785f2] focus:outline-none focus:ring h-12 hover:bg-[#031d40] hover:border-[#031d40] inline-flex items-center justify-around ring-offset-1 rounded-full text-white w-12 mt-auto",onClick:function(){return o((function(e){return!e}))},children:[Object(r.jsx)("span",{className:"sr-only",children:"Open Chatbot"}),Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-8 w-8",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"})})]})]})})}function i(e){return Object(r.jsxs)("div",{className:"min-h-screen flex flex-col bg-black text-white",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("nav",{className:"font-bold",children:[Object(r.jsx)(b,{className:"inline-block py-2 px-4 hover:underline text-[#30f298]",to:"/",children:"Home"}),Object(r.jsx)(b,{className:"inline-block py-2 px-4 ml-2 hover:underline text-[#5bcbf5]",to:"/service-now",children:"ServiceNow"}),Object(r.jsx)(b,{className:"inline-block py-2 px-4 ml-2 hover:underline text-[#ffc628]",to:"/one-reach-ai",children:"OneReach.ai"}),Object(r.jsx)(b,{className:"inline-block py-2 px-4 ml-2 hover:underline text-[#0785f2]",to:"/druid",children:"Druid"})]})}),Object(r.jsx)("main",{className:"container mx-auto p-4 flex-1 flex flex-col",children:e.children})]})}var l=n("rePB");function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=n("YFqc"),u=n.n(s);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=c.forwardRef((function(e,t){var n=e.to,c=a(e,["to"]);return Object(r.jsx)(u.a,{href:n,children:Object(r.jsx)("a",d(d({},c),{},{ref:t}))})}))},oOWF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-now",function(){return n("PkgG")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,c.useRef)(),s=(0,c.useState)(!1),u=r(s,2),f=u[0],d=u[1],b=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[b,f]};var c=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var l=new Map}},[["oOWF",0,1,2]]]);