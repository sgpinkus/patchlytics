if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>n(e,r),u={module:{uri:r},exports:l,require:o};s[r]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AccountDump-Cx_whSbS.js",revision:null},{url:"assets/index-CZZ6kHt2.css",revision:null},{url:"assets/index-DF0YKx5E.js",revision:null},{url:"assets/marker-icon-pLJP3ndA.png",revision:null},{url:"assets/materialdesignicons-webfont-BEZhCrOs.woff",revision:null},{url:"assets/materialdesignicons-webfont-CMxqBFRe.woff2",revision:null},{url:"assets/materialdesignicons-webfont-CyuVDWYP.ttf",revision:null},{url:"assets/materialdesignicons-webfont-DkY_eBaD.eot",revision:null},{url:"index.html",revision:"bb96e6d129274368e756ec0172552afd"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/(spaces|pages|account)/,/^\/$/]}))}));
