(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Byh5:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),r=t("WaXP"),i=t("ZZ/e"),o=function(){function n(n){this.popoverController=n,this.c2019=!0,this.c2020=!1}return n.prototype.ngOnInit=function(){},n.prototype.segmentChanged=function(n){"2019"===n.detail.value&&(this.c2019=!0,this.c2020=!1),"2020"===n.detail.value&&(this.c2019=!1,this.c2020=!0)},n.prototype.presentPopoverTuCuenta=function(n){return u.b(this,void 0,void 0,function(){var l;return u.e(this,function(t){switch(t.label){case 0:return[4,this.popoverController.create({component:r.a,event:n,mode:"ios",translucent:!0})];case 1:return[4,(l=t.sent()).present()];case 2:return t.sent(),[4,l.onWillDismiss()];case 3:return t.sent(),[2]}})})},n}(),a=function(){return function(){}}(),c=t("pMnS"),s=t("A+kR"),b=t("oBZk"),d=t("gIcY"),f=t("Ip0R"),p=e.wb({encapsulation:0,styles:[[""]],data:{}});function v(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,2,"div",[["class","animated fadeInDown"]],null,null,null,null,null)),(n()(),e.yb(1,0,null,null,1,"ion-img",[["src","../../assets/img/calendario2019.png"]],null,null,null,b.R,b.m)),e.xb(2,49152,null,0,i.C,[e.i,e.n,e.C],{src:[0,"src"]},null)],function(n,l){n(l,2,0,"../../assets/img/calendario2019.png")},null)}function h(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,2,"div",[["class","animated fadeInDown"]],null,null,null,null,null)),(n()(),e.yb(1,0,null,null,1,"ion-img",[["src","../../assets/img/calendario2020.jpg"]],null,null,null,b.R,b.m)),e.xb(2,49152,null,0,i.C,[e.i,e.n,e.C],{src:[0,"src"]},null)],function(n,l){n(l,2,0,"../../assets/img/calendario2020.jpg")},null)}function m(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,17,"ion-header",[],null,null,null,b.P,b.k)),e.xb(1,49152,null,0,i.A,[e.i,e.n,e.C],null,null),(n()(),e.yb(2,0,null,0,15,"ion-toolbar",[["color","footer"],["text-center",""]],null,null,null,b.jb,b.E)),e.xb(3,49152,null,0,i.Ab,[e.i,e.n,e.C],{color:[0,"color"]},null),(n()(),e.yb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.K,b.f)),e.xb(5,49152,null,0,i.k,[e.i,e.n,e.C],null,null),(n()(),e.yb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"],["text","Volver"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Kb(n,8).onClick(t)&&u),u},b.H,b.c)),e.xb(7,49152,null,0,i.f,[e.i,e.n,e.C],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.xb(8,16384,null,0,i.g,[[2,i.gb],i.Fb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.yb(9,0,null,0,2,"ion-title",[],null,null,null,b.ib,b.D)),e.xb(10,49152,null,0,i.yb,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,["Calendario"])),(n()(),e.yb(12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,b.K,b.f)),e.xb(13,49152,null,0,i.k,[e.i,e.n,e.C],null,null),(n()(),e.yb(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.presentPopoverTuCuenta(t)&&e),e},b.J,b.e)),e.xb(15,49152,null,0,i.j,[e.i,e.n,e.C],null,null),(n()(),e.yb(16,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,b.Q,b.l)),e.xb(17,49152,null,0,i.B,[e.i,e.n,e.C],{name:[0,"name"]},null),(n()(),e.yb(18,0,null,null,19,"ion-toolbar",[],null,null,null,b.jb,b.E)),e.xb(19,49152,null,0,i.Ab,[e.i,e.n,e.C],null,null),(n()(),e.yb(20,0,null,0,17,"ion-segment",[["color","footer"],["mode","md"],["value","2019"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var u=!0,r=n.component;return"ionBlur"===l&&(u=!1!==e.Kb(n,23)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Kb(n,23)._handleChangeEvent(t.target)&&u),"ionChange"===l&&(u=!1!==r.segmentChanged(t)&&u),u},b.Z,b.t)),e.Ob(5120,null,d.f,function(n){return[n]},[i.Lb]),e.xb(22,49152,null,0,i.jb,[e.i,e.n,e.C],{color:[0,"color"],mode:[1,"mode"],value:[2,"value"]},null),e.xb(23,16384,null,0,i.Lb,[e.n],null,null),(n()(),e.yb(24,0,null,0,6,"ion-segment-button",[["value","2019"]],null,null,null,b.Y,b.u)),e.xb(25,49152,null,0,i.kb,[e.i,e.n,e.C],{value:[0,"value"]},null),(n()(),e.yb(26,0,null,0,1,"ion-icon",[["name","calendar"]],null,null,null,b.Q,b.l)),e.xb(27,49152,null,0,i.B,[e.i,e.n,e.C],{name:[0,"name"]},null),(n()(),e.yb(28,0,null,0,2,"ion-label",[],null,null,null,b.U,b.p)),e.xb(29,49152,null,0,i.M,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,["2019"])),(n()(),e.yb(31,0,null,0,6,"ion-segment-button",[["value","2020"]],null,null,null,b.Y,b.u)),e.xb(32,49152,null,0,i.kb,[e.i,e.n,e.C],{value:[0,"value"]},null),(n()(),e.yb(33,0,null,0,1,"ion-icon",[["name","calendar"]],null,null,null,b.Q,b.l)),e.xb(34,49152,null,0,i.B,[e.i,e.n,e.C],{name:[0,"name"]},null),(n()(),e.yb(35,0,null,0,2,"ion-label",[],null,null,null,b.U,b.p)),e.xb(36,49152,null,0,i.M,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,["2020"])),(n()(),e.yb(38,0,null,null,5,"ion-content",[["padding",""]],null,null,null,b.M,b.h)),e.xb(39,49152,null,0,i.t,[e.i,e.n,e.C],null,null),(n()(),e.nb(16777216,null,0,1,null,v)),e.xb(41,16384,null,0,f.k,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(16777216,null,0,1,null,h)),e.xb(43,16384,null,0,f.k,[e.T,e.Q],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,"footer"),n(l,7,0,"/","Volver"),n(l,8,0,"/"),n(l,17,0,"menu"),n(l,22,0,"footer","md","2019"),n(l,25,0,"2019"),n(l,27,0,"calendar"),n(l,32,0,"2020"),n(l,34,0,"calendar"),n(l,41,0,t.c2019),n(l,43,0,t.c2020)},null)}function g(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,1,"app-calendario",[],null,null,null,m,p)),e.xb(1,114688,null,0,o,[i.Jb],null,null)],function(n,l){n(l,1,0)},null)}var y=e.ub("app-calendario",o,g,{},{},[]),C=t("HEwg"),x=t("xkgV"),w=t("ZYCi"),k=t("iTUp"),I=t("lSLK");t.d(l,"CalendarioPageModuleNgFactory",function(){return E});var E=e.vb(a,[],function(n){return e.Hb([e.Ib(512,e.l,e.gb,[[8,[c.a,s.a,y,C.a]],[3,e.l],e.A]),e.Ib(4608,f.m,f.l,[e.x,[2,f.u]]),e.Ib(4608,d.n,d.n,[]),e.Ib(4608,i.b,i.b,[e.C,e.g]),e.Ib(4608,i.Eb,i.Eb,[i.b,e.l,e.t]),e.Ib(4608,i.Jb,i.Jb,[i.b,e.l,e.t]),e.Ib(4608,x.e,x.e,[]),e.Ib(1073742336,f.b,f.b,[]),e.Ib(1073742336,d.m,d.m,[]),e.Ib(1073742336,d.e,d.e,[]),e.Ib(1073742336,i.Cb,i.Cb,[]),e.Ib(1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),e.Ib(1073742336,x.a,x.a,[]),e.Ib(1073742336,k.a,k.a,[]),e.Ib(1073742336,I.a,I.a,[]),e.Ib(1073742336,a,a,[]),e.Ib(1024,w.k,function(){return[[{path:"",component:o}]]},[])])})},CBt4:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return r});var e=t("mrSG"),u=function(n,l,t,u,r){return e.b(void 0,void 0,void 0,function(){var i;return e.e(this,function(e){switch(e.label){case 0:if(n)return[2,n.attachViewToDom(l,t,r,u)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return i="string"==typeof t?l.ownerDocument&&l.ownerDocument.createElement(t):t,u&&u.forEach(function(n){return i.classList.add(n)}),r&&Object.assign(i,r),l.appendChild(i),i.componentOnReady?[4,i.componentOnReady()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,i]}})})},r=function(n,l){if(l){if(n)return n.removeViewFromDom(l.parentElement,l);l.remove()}return Promise.resolve()}},Kc5T:function(n,l,t){"use strict";t.d(l,"a",function(){return C}),t.d(l,"b",function(){return g}),t.d(l,"c",function(){return x}),t.d(l,"d",function(){return i});var e=t("mrSG"),u=t("aiep"),r=t("JpGC"),i=function(n){return new Promise(function(l,t){Object(u.n)(function(){o(n),a(n).then(function(t){t.animation&&t.animation.destroy(),c(n),l(t)},function(l){c(n),t(l)})})})},o=function(n){var l=n.enteringEl,t=n.leavingEl;w(l,t,n.direction),n.showGoBack?l.classList.add("can-go-back"):l.classList.remove("can-go-back"),x(l,!1),t&&x(t,!1)},a=function(n){return e.b(void 0,void 0,void 0,function(){var l;return e.e(this,function(t){switch(t.label){case 0:return[4,s(n)];case 1:return[2,(l=t.sent())?b(l,n):d(n)]}})})},c=function(n){var l=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==l&&l.classList.remove("ion-page-invisible")},s=function(n){return e.b(void 0,void 0,void 0,function(){var l;return e.e(this,function(e){switch(e.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,t.e(103).then(t.bind(null,"rIMB"))]:[2,void 0];case 1:return l=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,t.e(104).then(t.bind(null,"qeQ4"))];case 3:l=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,l]}})})},b=function(n,l){return e.b(void 0,void 0,void 0,function(){var u,r;return e.e(this,function(e){switch(e.label){case 0:return[4,f(l,!0)];case 1:e.sent(),e.label=2;case 2:return e.trys.push([2,4,,5]),[4,t.e(8).then(t.bind(null,"owLA")).then(function(t){return t.create(n,l.baseEl,l)})];case 3:return u=e.sent(),[3,5];case 4:return e.sent(),u=n(l.baseEl,l),[3,5];case 5:return h(l.enteringEl,l.leavingEl),[4,v(u,l)];case 6:return r=e.sent(),u.hasCompleted=r,l.progressCallback&&l.progressCallback(void 0),u.hasCompleted&&m(l.enteringEl,l.leavingEl),[2,{hasCompleted:u.hasCompleted,animation:u}]}})})},d=function(n){return e.b(void 0,void 0,void 0,function(){var l,t;return e.e(this,function(e){switch(e.label){case 0:return l=n.enteringEl,t=n.leavingEl,[4,f(n,!1)];case 1:return e.sent(),h(l,t),m(l,t),[2,{hasCompleted:!0}]}})})},f=function(n,l){return e.b(void 0,void 0,void 0,function(){var t;return e.e(this,function(e){switch(e.label){case 0:return t=(void 0!==n.deepWait?n.deepWait:l)?[C(n.enteringEl),C(n.leavingEl)]:[y(n.enteringEl),y(n.leavingEl)],[4,Promise.all(t)];case 1:return e.sent(),[4,p(n.viewIsReady,n.enteringEl)];case 2:return e.sent(),[2]}})})},p=function(n,l){return e.b(void 0,void 0,void 0,function(){return e.e(this,function(t){switch(t.label){case 0:return n?[4,n(l)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},v=function(n,l){var t=l.progressCallback,e=new Promise(function(l){return n.onFinish(l)});return t?(n.progressStart(!0),t(n)):n.play(),e},h=function(n,l){g(l,r.c),g(n,r.a)},m=function(n,l){g(n,r.b),g(l,r.d)},g=function(n,l){if(n){var t=new CustomEvent(l,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}},y=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},C=function(n){return e.b(void 0,void 0,void 0,function(){var l;return e.e(this,function(t){switch(t.label){case 0:return(l=n)?null==l.componentOnReady?[3,2]:[4,l.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(l.children).map(C))];case 3:t.sent(),t.label=4;case 4:return[2]}})})},x=function(n,l){l?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},w=function(n,l,t){void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==l&&(l.style.zIndex="100")}},hpAr:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(n){try{if("string"!=typeof n||""===n)return n;var l=document.createDocumentFragment(),t=document.createElement("div");l.appendChild(t),t.innerHTML=n,o.forEach(function(n){for(var t=l.querySelectorAll(n),e=t.length-1;e>=0;e--){var i=t[e];i.parentNode?i.parentNode.removeChild(i):l.removeChild(i);for(var o=r(i),a=0;a<o.length;a++)u(o[a])}});for(var e=r(l),i=0;i<e.length;i++)u(e[i]);var a=document.createElement("div");a.appendChild(l);var c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(s){return console.error(s),""}},u=function(n){if(!n.nodeType||1===n.nodeType){for(var l=n.attributes.length-1;l>=0;l--){var t=n.attributes[l],e=t.name;if(i.includes(e.toLowerCase())){var o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(e)}else n.removeAttribute(e)}var a=r(n);for(l=0;l<a.length;l++)u(a[l])}},r=function(n){return null!=n.children?n.children:n.childNodes},i=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},"j5a+":function(n,l,t){"use strict";t.d(l,"a",function(){return r}),t.d(l,"b",function(){return i}),t.d(l,"c",function(){return u}),t.d(l,"d",function(){return a});var e=t("mrSG"),u=function(n,l){return null!==l.closest(n)},r=function(n){var l;return"string"==typeof n&&n.length>0?((l={"ion-color":!0})["ion-color-"+n]=!0,l):void 0},i=function(n){var l={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return l[n]=!0}),l},o=/^[a-z][a-z0-9+\-.]*:/,a=function(n,l,t){return e.b(void 0,void 0,void 0,function(){var u;return e.e(this,function(e){return null!=n&&"#"!==n[0]&&!o.test(n)&&(u=document.querySelector("ion-router"))?(null!=l&&l.preventDefault(),[2,u.push(n,t)]):[2,!1]})})}},k0If:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return u});var e=function(){return function(n,l){this.x=n,this.y=l}}(),u=function(n,l,t,e,u){var o=i(n.y,l.y,t.y,e.y,u);return r(n.x,l.x,t.x,e.x,o[0])},r=function(n,l,t,e,u){return u*(3*l*Math.pow(u-1,2)+u*(-3*t*u+3*t+e*u))-n*Math.pow(u-1,3)},i=function(n,l,t,e,u){return o((e-=u)-3*(t-=u)+3*(l-=u)-(n-=u),3*t-6*l+3*n,3*l-3*n,n).filter(function(n){return n>=0&&n<=1})},o=function(n,l,t,e){if(0===n)return function(n,l,t){var u=l*l-4*n*e;return u<0?[]:[(-l+Math.sqrt(u))/(2*n),(-l-Math.sqrt(u))/(2*n)]}(l,t);var u=(3*(t/=n)-(l/=n)*l)/3,r=(2*l*l*l-9*l*t+27*(e/=n))/27;if(0===u)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-u),-Math.sqrt(-u)];var i=Math.pow(r/2,2)+Math.pow(u/3,3);if(0===i)return[Math.pow(r/2,.5)-l/3];if(i>0)return[Math.pow(-r/2+Math.sqrt(i),1/3)-Math.pow(r/2+Math.sqrt(i),1/3)-l/3];var o=Math.sqrt(Math.pow(-u/3,3)),a=Math.acos(-r/(2*Math.sqrt(Math.pow(-u/3,3)))),c=2*Math.pow(o,1/3);return[c*Math.cos(a/3)-l/3,c*Math.cos((a+2*Math.PI)/3)-l/3,c*Math.cos((a+4*Math.PI)/3)-l/3]}},l1ru:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return a}),t.d(l,"c",function(){return o}),t.d(l,"d",function(){return d}),t.d(l,"e",function(){return f}),t.d(l,"f",function(){return r}),t.d(l,"g",function(){return u}),t.d(l,"h",function(){return b}),t.d(l,"i",function(){return c}),t.d(l,"j",function(){return s}),t.d(l,"k",function(){return i});var e=function(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)},u=function(n){return!!n.shadowRoot&&!!n.attachShadow},r=function(n){var l=n.closest("ion-item");return l?l.querySelector("ion-label"):null},i=function(n,l,t,e,r){if(n||u(l)){var i=l.querySelector("input.aux-input");i||((i=l.ownerDocument.createElement("input")).type="hidden",i.classList.add("aux-input"),l.appendChild(i)),i.disabled=r,i.name=t,i.value=e||""}},o=function(n,l,t){return Math.max(n,Math.min(l,t))},a=function(n,l){if(!n){var t="ASSERT: "+l;throw console.error(t),new Error(t)}},c=function(n){return n.timeStamp||Date.now()},s=function(n){if(n){var l=n.changedTouches;if(l&&l.length>0){var t=l[0];return{x:t.clientX,y:t.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},b=function(n){var l="rtl"===document.dir;switch(n){case"start":return l;case"end":return!l;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}},d=function(n,l){var t=n._original||n;return{_original:n,emit:f(t.emit.bind(t),l)}},f=function(n,l){var t;return void 0===l&&(l=0),function(){for(var e=[],u=0;u<arguments.length;u++)e[u]=arguments[u];clearTimeout(t),t=setTimeout.apply(void 0,[n,l].concat(e))}}},m6Kb:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),r=t("ZZ/e"),i=t("9wLH"),o=function(){function n(n,l){this.items=n,this.popoverController=l}return n.prototype.ngOnInit=function(){},n.prototype.clickItem=function(n){console.log(n),this.popoverController.dismiss({item:n})},n}(),a=function(){function n(n,l,t){this.popoverController=n,this.servicelaboral=l,this.alert=t,this.fecha_actual_laboral=new Date,this.fecha_actual_personal=new Date,this.t_laboral=!1,this.t_personal=!1}return n.prototype.ngOnInit=function(){var n=this;this.optionspickersL={buttons:[{text:"Guardar",handler:function(l){n.fecha_servicel=l.year.value+"/"+l.month.value+"/"+l.day.value,n.t_laboral=!0,n.t_personal=!1}},{text:"Cancelar",handler:function(){console.log("")}}]},this.optionspickersP={buttons:[{text:"Guardar",handler:function(l){n.fecha_serviceP=l.year.value+"/"+l.month.value+"/"+l.day.value,n.t_personal=!0,n.t_laboral=!1}},{text:"Cancelar",handler:function(){console.log("")}}]}},n.prototype.postFechaL=function(){},n.prototype.postFechaP=function(n){},n.prototype.presentPopover=function(n){return u.b(this,void 0,void 0,function(){var n,l;return u.e(this,function(t){switch(t.label){case 0:return[4,this.popoverController.create({component:o,backdropDismiss:!1,translucent:!0})];case 1:return[4,(n=t.sent()).present()];case 2:return t.sent(),[4,n.onWillDismiss()];case 3:return l=t.sent().data,this.postFechaP(l),[2]}})})},n.prototype.presentAlert=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(n){switch(n.label){case 0:return[4,this.alert.create({header:"Solicitud",subHeader:"Enviada",message:"Gracias",buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n}(),c=function(){return function(){}}(),s=t("pMnS"),b=t("A+kR"),d=t("oBZk"),f=t("gIcY"),p=t("Ip0R"),v=e.wb({encapsulation:0,styles:[[""]],data:{}});function h(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,2,"ion-button",[["class","ion-margin-top"],["expand","block"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.postFechaL()&&e),e},d.J,d.e)),e.xb(1,49152,null,0,r.j,[e.i,e.n,e.C],{expand:[0,"expand"]},null),(n()(),e.Rb(-1,0,["Enviar "]))],function(n,l){n(l,1,0,"block")},null)}function m(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,2,"ion-button",[["class","ion-margin-top"],["expand","block"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.presentPopover(t)&&e),e},d.J,d.e)),e.xb(1,49152,null,0,r.j,[e.i,e.n,e.C],{expand:[0,"expand"]},null),(n()(),e.Rb(-1,0,["Trayecto "]))],function(n,l){n(l,1,0,"block")},null)}function g(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,13,"ion-header",[],null,null,null,d.P,d.k)),e.xb(1,49152,null,0,r.A,[e.i,e.n,e.C],null,null),(n()(),e.yb(2,0,null,0,11,"ion-toolbar",[["color","footer"],["text-center",""]],null,null,null,d.jb,d.E)),e.xb(3,49152,null,0,r.Ab,[e.i,e.n,e.C],{color:[0,"color"]},null),(n()(),e.yb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.K,d.f)),e.xb(5,49152,null,0,r.k,[e.i,e.n,e.C],null,null),(n()(),e.yb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"],["text","Volver"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Kb(n,8).onClick(t)&&u),u},d.H,d.c)),e.xb(7,49152,null,0,r.f,[e.i,e.n,e.C],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.xb(8,16384,null,0,r.g,[[2,r.gb],r.Fb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.yb(9,0,null,0,2,"ion-label",[],null,null,null,d.U,d.p)),e.xb(10,49152,null,0,r.M,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,["Solicitud Tickets"])),(n()(),e.yb(12,0,null,0,1,"ion-title",[],null,null,null,d.ib,d.D)),e.xb(13,49152,null,0,r.yb,[e.i,e.n,e.C],null,null),(n()(),e.yb(14,0,null,null,44,"ion-content",[],null,null,null,d.M,d.h)),e.xb(15,49152,null,0,r.t,[e.i,e.n,e.C],null,null),(n()(),e.yb(16,0,null,0,7,"ion-slides",[["pager","true"]],null,null,null,d.db,d.y)),e.xb(17,49152,null,0,r.pb,[e.i,e.n,e.C],{pager:[0,"pager"]},null),(n()(),e.yb(18,0,null,0,2,"ion-slide",[],null,null,null,d.cb,d.x)),e.xb(19,49152,null,0,r.ob,[e.i,e.n,e.C],null,null),(n()(),e.yb(20,0,null,0,0,"img",[["alt",""],["src","../../assets/img/edi_5.webp"]],null,null,null,null,null)),(n()(),e.yb(21,0,null,0,2,"ion-slide",[],null,null,null,d.cb,d.x)),e.xb(22,49152,null,0,r.ob,[e.i,e.n,e.C],null,null),(n()(),e.yb(23,0,null,0,0,"img",[["alt",""],["src","../../assets/img/edi_5.webp "]],null,null,null,null,null)),(n()(),e.yb(24,0,null,0,34,"div",[["class","animated bounceInUp"],["padding",""],["text-center",""]],null,null,null,null,null)),(n()(),e.yb(25,0,null,null,4,"ion-item",[["text-center",""]],null,null,null,d.T,d.o)),e.xb(26,49152,null,0,r.G,[e.i,e.n,e.C],null,null),(n()(),e.yb(27,0,null,0,2,"ion-label",[],null,null,null,d.U,d.p)),e.xb(28,49152,null,0,r.M,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,[" Fecha solicitud "])),(n()(),e.yb(30,0,null,null,11,"ion-item",[],null,null,null,d.T,d.o)),e.xb(31,49152,null,0,r.G,[e.i,e.n,e.C],null,null),(n()(),e.yb(32,0,null,0,2,"ion-label",[],null,null,null,d.U,d.p)),e.xb(33,49152,null,0,r.M,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,["Laboral"])),(n()(),e.yb(35,0,null,0,6,"ion-datetime",[["max","2024-12-31"],["min","2019-01-01"],["monthShortNames","ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Kb(n,36)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Kb(n,36)._handleChangeEvent(t.target)&&u),u},d.N,d.i)),e.xb(36,16384,null,0,r.Lb,[e.n],null,null),e.Ob(1024,null,f.f,function(n){return[n]},[r.Lb]),e.xb(38,671744,null,0,f.k,[[8,null],[8,null],[8,null],[6,f.f]],{model:[0,"model"]},null),e.Ob(2048,null,f.g,null,[f.k]),e.xb(40,16384,null,0,f.h,[[4,f.g]],null,null),e.xb(41,49152,null,0,r.u,[e.i,e.n,e.C],{max:[0,"max"],min:[1,"min"],monthShortNames:[2,"monthShortNames"],pickerOptions:[3,"pickerOptions"]},null),(n()(),e.yb(42,0,null,null,11,"ion-item",[],null,null,null,d.T,d.o)),e.xb(43,49152,null,0,r.G,[e.i,e.n,e.C],null,null),(n()(),e.yb(44,0,null,0,2,"ion-label",[],null,null,null,d.U,d.p)),e.xb(45,49152,null,0,r.M,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,["Personal"])),(n()(),e.yb(47,0,null,0,6,"ion-datetime",[["max","2024-12-31"],["min","2019-01-01"],["monthShortNames","ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Kb(n,48)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Kb(n,48)._handleChangeEvent(t.target)&&u),u},d.N,d.i)),e.xb(48,16384,null,0,r.Lb,[e.n],null,null),e.Ob(1024,null,f.f,function(n){return[n]},[r.Lb]),e.xb(50,671744,null,0,f.k,[[8,null],[8,null],[8,null],[6,f.f]],{model:[0,"model"]},null),e.Ob(2048,null,f.g,null,[f.k]),e.xb(52,16384,null,0,f.h,[[4,f.g]],null,null),e.xb(53,49152,null,0,r.u,[e.i,e.n,e.C],{max:[0,"max"],min:[1,"min"],monthShortNames:[2,"monthShortNames"],pickerOptions:[3,"pickerOptions"]},null),(n()(),e.yb(54,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.nb(16777216,null,null,1,null,h)),e.xb(56,16384,null,0,p.k,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(16777216,null,null,1,null,m)),e.xb(58,16384,null,0,p.k,[e.T,e.Q],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,"footer"),n(l,7,0,"/","Volver"),n(l,8,0,"/"),n(l,17,0,"true"),n(l,38,0,t.fecha_actual_laboral.toISOString()),n(l,41,0,"2024-12-31","2019-01-01","ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic",t.optionspickersL),n(l,50,0,t.fecha_actual_personal.toISOString()),n(l,53,0,"2024-12-31","2019-01-01","ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic",t.optionspickersP),n(l,56,0,t.t_laboral),n(l,58,0,t.t_personal)},function(n,l){n(l,35,0,e.Kb(l,40).ngClassUntouched,e.Kb(l,40).ngClassTouched,e.Kb(l,40).ngClassPristine,e.Kb(l,40).ngClassDirty,e.Kb(l,40).ngClassValid,e.Kb(l,40).ngClassInvalid,e.Kb(l,40).ngClassPending),n(l,47,0,e.Kb(l,52).ngClassUntouched,e.Kb(l,52).ngClassTouched,e.Kb(l,52).ngClassPristine,e.Kb(l,52).ngClassDirty,e.Kb(l,52).ngClassValid,e.Kb(l,52).ngClassInvalid,e.Kb(l,52).ngClassPending)})}function y(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,1,"app-sotickets",[],null,null,null,g,v)),e.xb(1,114688,null,0,a,[r.Jb,i.a,r.a],null,null)],function(n,l){n(l,1,0)},null)}var C=e.ub("app-sotickets",a,y,{},{},[]),x=e.wb({encapsulation:0,styles:[[""]],data:{}});function w(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,4,"ion-item",[["detail",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.clickItem(n.context.$implicit.descripcion)&&e),e},d.T,d.o)),e.xb(1,49152,null,0,r.G,[e.i,e.n,e.C],{detail:[0,"detail"]},null),(n()(),e.yb(2,0,null,0,2,"ion-label",[],null,null,null,d.U,d.p)),e.xb(3,49152,null,0,r.M,[e.i,e.n,e.C],null,null),(n()(),e.Rb(4,0,["Item: ",""]))],function(n,l){n(l,1,0,"")},function(n,l){n(l,4,0,l.context.$implicit.descripcion)})}function k(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,6,"ion-header",[],null,null,null,d.P,d.k)),e.xb(1,49152,null,0,r.A,[e.i,e.n,e.C],null,null),(n()(),e.yb(2,0,null,0,4,"ion-toolbar",[["text-center",""]],null,null,null,d.jb,d.E)),e.xb(3,49152,null,0,r.Ab,[e.i,e.n,e.C],null,null),(n()(),e.yb(4,0,null,0,2,"ion-title",[],null,null,null,d.ib,d.D)),e.xb(5,49152,null,0,r.yb,[e.i,e.n,e.C],null,null),(n()(),e.Rb(-1,0,["Trayectos"])),(n()(),e.yb(7,0,null,null,5,"ion-content",[],null,null,null,d.M,d.h)),e.xb(8,49152,null,0,r.t,[e.i,e.n,e.C],null,null),(n()(),e.yb(9,0,null,0,3,"ion-list",[],null,null,null,d.V,d.q)),e.xb(10,49152,null,0,r.N,[e.i,e.n,e.C],null,null),(n()(),e.nb(16777216,null,0,1,null,w)),e.xb(12,278528,null,0,p.j,[e.T,e.Q,e.v],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,12,0,l.component.getitems)},null)}function I(n){return e.Tb(0,[(n()(),e.yb(0,0,null,null,1,"app-popitems",[],null,null,null,k,x)),e.xb(1,114688,null,0,o,[i.a,r.Jb],null,null)],function(n,l){n(l,1,0)},null)}var E=e.ub("app-popitems",o,I,{},{},[]),T=t("xkgV"),M=t("ZYCi"),S=t("iTUp"),K=t("lSLK");t.d(l,"SoticketsPageModuleNgFactory",function(){return L});var L=e.vb(c,[],function(n){return e.Hb([e.Ib(512,e.l,e.gb,[[8,[s.a,b.a,C,E]],[3,e.l],e.A]),e.Ib(4608,p.m,p.l,[e.x,[2,p.u]]),e.Ib(4608,f.n,f.n,[]),e.Ib(4608,r.b,r.b,[e.C,e.g]),e.Ib(4608,r.Eb,r.Eb,[r.b,e.l,e.t]),e.Ib(4608,r.Jb,r.Jb,[r.b,e.l,e.t]),e.Ib(4608,T.e,T.e,[]),e.Ib(1073742336,p.b,p.b,[]),e.Ib(1073742336,f.m,f.m,[]),e.Ib(1073742336,f.e,f.e,[]),e.Ib(1073742336,r.Cb,r.Cb,[]),e.Ib(1073742336,M.o,M.o,[[2,M.t],[2,M.m]]),e.Ib(1073742336,T.a,T.a,[]),e.Ib(1073742336,S.a,S.a,[]),e.Ib(1073742336,K.a,K.a,[]),e.Ib(1073742336,c,c,[]),e.Ib(1024,M.k,function(){return[[{path:"",component:a}]]},[])])})},s2pH:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return r}),t.d(l,"c",function(){return i}),t.d(l,"d",function(){return e});var e=function(){var n=window.TapticEngine;n&&n.selection()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},r=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}}}]);