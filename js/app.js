(function(t){function n(n){for(var r,a,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)a=c[l],i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,a=1;a<e.length;a++){var s=e[a];0!==i[s]&&(r=!1)}r&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},i={app:0},o=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+".js"}function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e=i[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise(function(n,r){e=i[t]=[n,r]});n.push(e[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t),o=function(n){s.onerror=s.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,e[1](a)}i[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var p=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"2b7a":function(t,n,e){t.exports=e.p+"img/hatenablog.png"},3687:function(t,n,e){t.exports=e.p+"img/mt.png"},"47a7":function(t,n,e){},5504:function(t,n,e){t.exports=e.p+"img/run_unity_chang.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],a=(e("57d1"),e("2877")),c={},s=Object(a["a"])(c,i,o,!1,null,null,null),u=s.exports,l=e("8c4f"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("Contact"),e("About"),e("MainContents")],1)},f=[],g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"flexbox"},[e("img",{staticClass:"img",attrs:{src:t.src}}),e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.name))]),e("h2",[t._v(t._s(t.job))]),e("p",[t._v(t._s(t.skills))]),e("p")])])},d=[],m={name:"About",data:function(){return{src:e("9f2c"),name:"Naomichi Nakamura",job:"プログラマー",skills:"Python, Java, Unity, Chainer, Vue"}}},h=m,v=(e("a4dd"),Object(a["a"])(h,g,d,!1,null,"6bbc32a2",null)),b=v.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"contact"}},t._l(t.items,function(t){return e("a",{attrs:{href:t.url}},[e("img",{attrs:{src:t.src}})])}),0)},x=[],y={name:"contact",data:function(){return{items:[{url:"https://twitter.com/naomichi_mitti",src:e("d511")},{url:"https://github.com/NaomichiNakamura21",src:e("9642")},{url:"http://naomichi-dev.hatenablog.com/",src:e("2b7a")}]}}},k=y,O=(e("f805"),Object(a["a"])(k,_,x,!1,null,"7f8062f2",null)),w=O.exports,j=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"main-contents gridbox",attrs:{id:"main"}},t._l(t.contents,function(n){return r("div",{staticClass:"container"},[r("img",{staticClass:"content-image",attrs:{src:e("efac")("./"+n.src)}}),r("p",{staticClass:"content-title"},[t._v(t._s(n.title))])])}),0)},C=[],P={contents:[{title:"高専の達人",description:"ProgrammingのPも知らない時期に制作に参加、曲選択画面のUIを担当した。メインの処理は全部友人のM君がやってくれた。",lang:"Qt, HTML5 Canvas",src:"taiko.png"},{title:"電磁気学三次元可視化シミュレーションソフトウェア",description:"高専の卒業制作で開発。複数の電荷を配置することができ、その電気力線を三次元上で可視化できる。C++はこれ以降触っていない",lang:"Qt, OpenGL",src:"electric.png"},{title:"我が家の茜ちゃんプロジェクト",description:"",lang:"",src:"akane_chang.png"},{title:"はしれ！ユニティちゃん",description:"",lang:"",src:"run_unity_chang.png"},{title:"UnityRacing",description:"",lang:"",src:"racing.png"},{title:"Tsumiki Online",description:"",lang:"",src:"tsumiki.png"},{title:"Astronaut",description:"",lang:"",src:"astronaut.png"},{title:"機械翻訳",description:"",lang:"",src:"mt.png"},{title:"ポートフォリオサイト",description:"",lang:"",src:"portfolio.png"}]},E={name:"main",data:function(){return{contents:P.contents}}},M=E,T=(e("7fd0"),Object(a["a"])(M,j,C,!1,null,null,null)),N=T.exports,A={name:"home",components:{About:b,Contact:w,MainContents:N}},S=A,U=Object(a["a"])(S,p,f,!1,null,null,null),$=U.exports;r["a"].use(l["a"]);var L=new l["a"]({mode:"history",base:"/portfolio/",routes:[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]});r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:L,render:function(t){return t(u)}})},"57d1":function(t,n,e){"use strict";var r=e("47a7"),i=e.n(r);i.a},"60d2":function(t,n,e){},"67d0":function(t,n,e){},"68e3":function(t,n,e){t.exports=e.p+"img/portfolio.png"},"7fd0":function(t,n,e){"use strict";var r=e("67d0"),i=e.n(r);i.a},"8f46":function(t,n,e){t.exports=e.p+"img/tsumiki.png"},9642:function(t,n,e){t.exports=e.p+"img/GitHub.png"},"9d18":function(t,n,e){t.exports=e.p+"img/racing.png"},"9f2c":function(t,n,e){t.exports=e.p+"img/me.png"},a166:function(t,n,e){t.exports=e.p+"img/astronaut.png"},a4dd:function(t,n,e){"use strict";var r=e("60d2"),i=e.n(r);i.a},cc61:function(t,n,e){t.exports=e.p+"img/taiko.png"},d511:function(t,n,e){t.exports=e.p+"img/Twitter.png"},eb8f:function(t,n,e){t.exports=e.p+"img/electric.png"},efac:function(t,n,e){var r={"./akane_chang.png":"fb8c","./astronaut.png":"a166","./electric.png":"eb8f","./mt.png":"3687","./portfolio.png":"68e3","./racing.png":"9d18","./run_unity_chang.png":"5504","./taiko.png":"cc61","./tsumiki.png":"8f46"};function i(t){var n=o(t);return e(n)}function o(t){var n=r[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="efac"},f38e:function(t,n,e){},f805:function(t,n,e){"use strict";var r=e("f38e"),i=e.n(r);i.a},fb8c:function(t,n,e){t.exports=e.p+"img/akane_chang.png"}});
//# sourceMappingURL=app.js.map