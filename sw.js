if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const o=e=>n(e,l),u={module:{uri:l},exports:r,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AccountDump-9f1c638f.js",revision:null},{url:"assets/default-avatar-3edf7752.svg",revision:null},{url:"assets/index-a5948fa0.css",revision:null},{url:"assets/index-f77edd93.js",revision:null},{url:"assets/marker-icon-a6bc9516.png",revision:null},{url:"assets/materialdesignicons-webfont-28c8f97f.woff",revision:null},{url:"assets/materialdesignicons-webfont-31010194.woff2",revision:null},{url:"assets/materialdesignicons-webfont-5159a347.eot",revision:null},{url:"assets/materialdesignicons-webfont-be825c12.ttf",revision:null},{url:"index.html",revision:"f0ece0a505ceeb6692baf3100aef5d62"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/(spaces|pages|account)/,/^\/$/]}))}));
