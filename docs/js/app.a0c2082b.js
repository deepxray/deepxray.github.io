(function(t){function e(e){for(var o,a,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i={app:0},r=[];function l(t){return s.p+"js/"+({article:"article",home:"home"}[t]||t)+"."+{article:"2c2ece8d",home:"f5fdea50"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={article:1,home:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({article:"article",home:"home"}[t]||t)+"."+{article:"0e8b985d",home:"ff8ff04c"}[t]+".css",i=s.p+o,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var c=r[l],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===o||p===i))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],p=c.getAttribute("data-href");if(p===o||p===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=i;var u=document.getElementsByTagName("head")[0];u.appendChild(f)})).then((function(){a[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=r);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=l(t);var d=new Error;c=function(e){p.onerror=p.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=p;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a8c":function(t,e,n){},"328b":function(t,e,n){},5635:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header"),n("router-view"),n("page-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-header-wrap"},[n("div",{staticClass:"ui-header"},[n("span",{staticClass:"logo"},[t._v("LOGO")]),n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",router:"","default-active":"home"},on:{select:t.onLangChange}},[n("el-menu-item",{attrs:{index:"home"}},[t._v(" "+t._s(t.$t("header.home"))+" ")]),n("el-submenu",{staticClass:"lang-selector",attrs:{index:"lang"}},[n("template",{slot:"title"},[t._v(t._s(t.$t("header.lang")))]),n("el-menu-item",{attrs:{index:"cn"}},[t._v("中文-简体")]),n("el-menu-item",{attrs:{index:"en"}},[t._v("English")])],2)],1)],1)])},l=[],s=(n("c975"),n("90b9")),c={methods:{onLangChange:function(t){["en","cn"].indexOf(t)>-1&&(s["a"].setStorage("lang",t),location.reload())}}},p=c,d=(n("a901"),n("2877")),f=Object(d["a"])(p,r,l,!1,null,null,null),u=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-footer"},[n("p",[n("i",{staticClass:"icon el-icon-message"}),t._v(" "+t._s(t.$t("footer.contact"))+" keyunluo@tencent.com")])])},g=[],m={methods:{onLangChange:function(t){["en","cn"].indexOf(t)>-1&&(s["a"].setStorage("lang",t),location.reload())}}},x=m,w=(n("b332"),Object(d["a"])(x,h,g,!1,null,null,null)),y=w.exports,b={components:{PageHeader:u,PageFooter:y}},k=b,v=Object(d["a"])(k,a,i,!1,null,null,null),A=v.exports,S=n("5c96"),W=n.n(S),z=n("a925"),F=n("ef6a"),P=n("c6d3"),_=n.n(P),O={header:{home:"首页",aboutUs:"关于我们",lang:"中文-简体"},footer:{contact:"联系我们："},op:{readMore:"了解更多"},title:{articles:"相关研究"},tip:{articleNotFound:"未找到此文章"},intro:{xray:{title:"关于 Deep X-ray",sum:"像X射线一样深度洞悉网络安全",detail:"数百年前，X射线的出现，使得我们有机会阅览隐藏在冰山之后的细节。今天，智能时代AI技术汹涌澎湃，日新月异，我们有了一个看到更加广阔的安全世界的机会。为此，腾讯安全平台部朱雀实验室开启了一个名为Deep X-Ray的系列研究项目，希望用新时代的X射线技术——AI，去穿透一切障碍，发现网络安全里的无限可能。"}},article:{wafRulesPrinter:{title:"关于 WAF 规则打印",sum:"用AI技术打印出WAF防火墙背后的防御规则",detail:'<p><br></p>\n      <p><strong><span style="font-size: 26px;">简介</span></strong></p>\n      <p><strong><img src="'.concat(_.a,'"></strong><br></p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">通常来说WAF通过正则表达式来拦截恶意请求，这使得很多WEB攻击变得不可实施，例如SQL注入。但是如果攻击者掌握了WAF后端的规则，便可以通过绕过的方式打开一个缺口。此外，对于商业WAF产品来说，好的防护规则可以使产品具备更强的防御能力，是产品的核心竞争力，如果WAF规则被泄露了，无疑会对商业价值造成巨大损失。这里我们提出了一种全新的攻击技术，我们借助机器学习强大的预测和推理能力，完全以黑盒方式探测出WAF后端的规则，可指导安全专家进一步开展渗透等后续工作。</span>&nbsp;</p>\n      <p><strong><span style="font-size: 26px;">背景</span></strong></p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">人工探测WAF规则在细节处理上很容易疏漏，并且效率底下，导致探测出的规则不准确。而机器学习善于从历史攻击payload数据中学习经验，用这种经验来预测payload某个位置上所有可能的单词，可避免探测疏漏问题。此外，原始payload中可能含有多个攻击子payload，我们难以同时推出他们，必须分而治之，然而这并不容易，因为这种组合空间太大了。而机器学习能基于已有的探测数据帮助我们判断哪些子payload更有可能是恶意的，从而快速找出那些们称之为种子的能匹配WAF规则的最小payload。最终可实现自动化、批量的窃取WAF系统的防护规则。</span></p>\n      <p><strong><span style="font-size: 26px;">原理</span></strong></p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">具体来说，我们采集公开可获取的数据，进行数据处理后，构建二分类模型生成种子payload，接着使用多分类推荐模型对种子payload中的每个位置进行探测，通过反馈是否被WAF拦截推断出该位置的正则表达式单元，最后对这些正则表达式单元进行增删并等操作，形成最终的规则集。该方法主要解决了人工探测的两个局限，首先，人工探测由于耗时耗力难以大规模展开，此外，这种经验与攻击者的技术水平息息相关，在一些细节方面很容易疏漏，最终导致推测出来的规则可能只是真实防护规则的一个子集。</span></p>\n      <p><strong><span style="font-size: 26px;">防御</span></strong></p>\n      <ol>\n          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">攻击得以实施的前提：</span>\n              <ul>\n                  <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">WAF使用基线模型分析请求并比较与正常业务的偏离程度</span></li>\n                  <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">基于AI的后端策略，该策略很难以正则表达式的形式显式的输出来</span></li>\n              </ul>\n          </li>\n          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">通过重写http响应以加深反馈结果的不确定性，可以大大增加窃取的难度</span></li>\n          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">限制探测频次，避免接口被滥用</span></li>\n      </ol>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></p>\n      <p><br></p>')}}};o["default"].use(z["a"]);var T=s["a"].getStorage(),C=new z["a"]({locale:T.lang||"en",messages:{en:F["a"],cn:O}}),I=C,E=(n("5635"),n("0fae"),n("2a8c"),n("2f62")),j={},D={};o["default"].use(E["a"]);var L=new E["a"].Store({state:{},actions:j,mutations:D}),R=(n("d3b7"),n("8c4f"));o["default"].use(R["a"]);var H=function(){return n.e("home").then(n.bind(null,"3d71"))},X=function(){return n.e("article").then(n.bind(null,"995d"))},M=[{path:"",name:"Home",component:H},{path:"/home",name:"Home",component:H},{path:"/article",name:"Article",component:X}],N=new R["a"]({base:"/",routes:M}),q=N;o["default"].config.productionTip=!1,o["default"].use(W.a),new o["default"]({store:L,router:q,i18n:I,render:function(t){return t(A)}}).$mount("#app")},"90b9":function(t,e,n){"use strict";var o=n("e80d"),a=n.n(o),i=function(t){console.log("onReportSuccess: ".concat(t))},r=function(t){console.log("onReportFail: ".concat(t))},l=new a.a({appkey:"0WEB043FW44V9LVE",strictMode:!1,delay:3e3,sessionDuration:6e4,onReportSuccess:i,onReportFail:r}),s=l,c="deepxray";e["a"]={trackData:function(t,e){s.onDirectUserAction(t,e)},reportPV:function(){s.reportPV()},getStorage:function(){var t={};try{t=JSON.parse(localStorage.getItem(c))||{}}catch(e){}return t},setStorage:function(t,e){var n=this.getStorage();console.log(111,n),n[t]=e,localStorage.setItem(c,JSON.stringify(n))}}},a901:function(t,e,n){"use strict";n("328b")},b332:function(t,e,n){"use strict";n("b70b")},b70b:function(t,e,n){},c6d3:function(t,e,n){t.exports=n.p+"img/article-waf.c9d1b7a0.png"},ef6a:function(t,e,n){"use strict";var o=n("c6d3"),a=n.n(o);e["a"]={header:{home:"Home",aboutUs:"About",lang:"English"},op:{readMore:"Read More"},title:{articles:"Our Researches"},tip:{articleNotFound:"Article not found"},footer:{contact:"Contact us with: "},intro:{xray:{title:"About Deep X-ray",sum:"Deep insight into cyber security like X-Ray",detail:"Hundreds of years ago, the advent of X-rays gave us the opportunity to read the details hidden behind the iceberg. Today, AI technology in the intelligent era is surging and changing with each passing day. We have the opportunity to see a broader and safer world. To this end, the Zhuque Laboratory of Tencent Security Platform Department has launched a series of research projects called Deep X-Ray, hoping to use the new era of X-ray AI technology to penetrate all obstacles and discover the infinite possibilities in cyber security."}},article:{wafRulesPrinter:{title:"About WAF Rules Printer",sum:"Print the defense rules behind the WAF firewall with AI technology",detail:'<p><span style="font-size: 26px;">Intro</span></p>\n      <p><strong><img src="'.concat(a.a,'"></strong><br></p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">WAF blocks malicious requests through regular expressions, which makes many web attacks impossible to implement, such as SQL injection. If the attacker has mastered the rules of the waf backend, he can construct an attack that bypasses the waf. In addition, for commercial waf products, good protection rules can empower the defense capabilities, which is the core competitiveness of the product. If the waf rules are leaked, it will probably cause huge economic losses. Here we propose a completely new attack technique. With the help of machine learning&apos;s powerful prediction and reasoning capabilities, we are the first to realize the automation and batch theft of WAF protection rules in a black box manner, which can guide security experts to further carry out follow-up work such as penetration testing.</span> </p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 26px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">Background</span></p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Manual detection of WAF rules in a traditional way will cause missing processes in details, running in low efficiency and detecting inaccurate rules. Whilst, machine learning is good at collecting learning experience from historical attack payload data. It can avoid repeat detection and omission problems of using this experience to predict all possible words in a certain position of the payload. In addition, the original payload may contain multiple attack sub-payloads, which is difficult for us to launch them at the same time because of the large combination of space. Also machine learning can help us determine which sub-payloads are more likely to be malicious based on the existing detection data, so as to quickly find the smallest payload that we call seeds that can match the waf rule. In the end, we have implemented automatic and batch stealing the rules.</span></p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 26px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">Principle</span></p>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Specifically, we collect publicly available payload, after processing the data, build a binary-class model to generate a seed payload, and then use a multi-class recommendation model to detect each location in the seed payload, and infer the regular expression unit at this position whether it is blocked by WAF , and finally add, delete, and perform operations on these regular expression units to form the final rule set. This method mainly solves the two limitations of manual detection. First, manual detection is difficult to deploy on a large scale due to time-consuming and labor-consuming. In addition, this experience is closely related to the attacker&apos;s technical level, and it is easy to omit some details, which eventually leads to speculation. The rules that come out may only be a subset of the real protection rules.</span></p>\n      <p><span style="font-size: 26px;">Defense</span></p>\n      <ol>\n          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">This attack can only be successfully implemented under ideal conditions。The attack will fail in some cases. Some wafs set a threshold based on the number of attacks and the frequency of attacks. When the threshold is exceeded, the source IP will be blocked, or Waf filters the HTTP traffice with a whitelist, or Waf filters the HTTP traffice with the method based on machine learning, these circumstances will make the attack difficult to implement.</span></li>\n          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Some suggestions for cloud vendors. Please rewrite the HTTP response before returning.Do not expose the original http response, this will also make the attack difficult to implement.</span></li>\n          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Cloud vendors, please do not give users the opportunity to test your security components, such as waf, you can limit user testing by setting thresholds or other methods.</span></li>\n      </ol>\n      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></p>\n      <p><br></p>')}}}}});
//# sourceMappingURL=app.a0c2082b.js.map