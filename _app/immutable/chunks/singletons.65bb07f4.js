import{H as d,s as m}from"./index.702c3da6.js";const c=[];function p(e,t=d){let n;const o=new Set;function a(s){if(m(e,s)&&(e=s,n)){const u=!c.length;for(const i of o)i[1](),c.push(i,e);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function l(s){a(s(e))}function r(s,u=d){const i=[s,u];return o.add(i),o.size===1&&(n=t(a)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:r}}var g;const E=((g=globalThis.__sveltekit_1i1j35e)==null?void 0:g.base)??"";var k;const S=((k=globalThis.__sveltekit_1i1j35e)==null?void 0:k.assets)??E,w="1683769064144",y="sveltekit:snapshot",I="sveltekit:scroll",x="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||R(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:l}}function j(e){let t=null,n=null,o=null,a=null,l=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);return{preload_code:b[o??"off"],preload_data:b[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:l==="off"?!1:l===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function l(r){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&r(s=u)})}return{notify:o,set:a,subscribe:l}}function A(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${S}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==w;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function R(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function P(e){e.client}const V={url:h({}),page:h({}),navigating:p(null),updated:A()};export{x as I,_ as P,I as S,y as a,N as b,j as c,U as d,E as e,L as f,O as g,P as h,R as i,V as s};
