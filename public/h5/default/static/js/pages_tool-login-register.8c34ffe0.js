(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-login-register"],{"013c":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c975"),a("a9e3"),a("ac1f"),a("5319"),a("acd8");var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},o={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(e){return-1!==["dark","light"].indexOf(e)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var e=this,t=getCurrentPages()[0];this.$pageVm=t.$vm||t,uni.onWindowResize((function(t){e.$emit("resize",t)})),this.$pageVm.$on("hook:onPageScroll",(function(t){e.$emit("scroll",t)})),this.$watch("backgroundTextStyle",(function(){e.setBackgroundTextStyle()})),this.$watch((function(){return[e.rootFontSize,e.pageStyle]}),(function(){e.setPageMeta()})),this.$watch((function(){return[e.backgroundColor,e.backgroundColorTop,e.backgroundColorBottom]}),(function(){e.setBackgroundColor()})),this.$watch((function(){return[e.scrollTop,e.scrollDuration]}),(function(){e.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle()},mounted:function(){this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(e,t){e.setStyle({pullToRefresh:{support:t,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var e=this,t=String(this.scrollTop);if(-1!==t.indexOf("rpx")&&(t=uni.upx2px(t.replace("rpx",""))),t=parseFloat(t),!isNaN(t)){var a=function a(o){o.scrollTop===t&&(e.$pageVm.$off("hook:onPageScroll",a),e.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:t,duration:this.scrollDuration,success:function(){e.$pageVm.$on("hook:onPageScroll",a)}})}}}};t.default=o},"04b1":function(e,t,a){var i=a("c2ca");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("329f4b13",i,!0,{sourceMap:!1,shadowMode:!1})},"0583":function(e,t,a){"use strict";var i=a("127c"),o=a.n(i);o.a},"09a1":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c975"),a("ac1f"),a("5319"),a("14d9"),a("00b4");var o=i(a("7129")),r=i(a("dafc")),n=i(a("89f7")),c=i(a("adc2")),s={components:{uniPopup:o.default,registerReward:n.default},data:function(){return{allowRegister:!0,registerMode:"account",formData:{mobile:"",account:"",password:"",rePassword:"",vercode:"",dynacode:"",key:""},regisiterAgreement:{title:"",content:""},captcha:{id:"",img:""},isSub:!1,back:"",dynacodeData:{seconds:120,timer:null,codeText:"获取动态码",isSend:!1},registerConfig:{register:""},authInfo:null}},onLoad:function(e){e.back&&(this.back=e.back),this.getCaptcha(),this.getRegisiterAggrement(),this.getRegisterConfig(),this.authInfo=uni.getStorageSync("authInfo")},onShow:function(){},onReady:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()},methods:{switchRegisterMode:function(){this.registerMode="mobile"==this.registerMode?"account":"mobile"},openPopup:function(){this.$refs.registerPopup.open()},toClose:function(){this.$refs.registerPopup.close()},getRegisiterAggrement:function(){var e=this;this.$api.sendRequest({url:"/api/register/aggrement",success:function(t){t.code>=0&&(e.regisiterAgreement=t.data,e.regisiterAgreement.content&&(e.regisiterAgreement.content=(0,c.default)(e.regisiterAgreement.content)))}})},getRegisterConfig:function(){var e=this;this.$api.sendRequest({url:"/api/register/config",success:function(t){t.code>=0&&(e.registerConfig=t.data.value,""==e.registerConfig.register?(e.$util.showToast({title:"平台未启用注册!"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index")}),1e3)):-1!=e.registerConfig.register.indexOf("username")?e.registerMode="account":e.registerMode="mobile",e.$refs.loadingCover&&e.$refs.loadingCover.hide())}})},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},register:function(){var e=this;if("account"==this.registerMode){var t="/api/register/username";a={username:this.formData.account,password:this.formData.password}}else{t="/api/register/mobile";var a={mobile:this.formData.mobile,key:this.formData.key,code:this.formData.dynacode}}if(""!=this.captcha.id&&(a.captcha_id=this.captcha.id,a.captcha_code=this.formData.vercode),this.authInfo&&(Object.assign(a,this.authInfo),this.authInfo.nickName&&(a.nickname=this.authInfo.nickName),this.authInfo.avatarUrl&&(a.headimg=this.authInfo.avatarUrl)),uni.getStorageSync("source_member")&&(a.source_member=uni.getStorageSync("source_member")),this.verify(a)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:t,data:a,success:function(t){t.code>=0?uni.setStorage({key:"token",data:t.data.token,success:function(){var t=e.back?e.back:"/pages/member/index";e.$util.showToast({title:"注册成功"}),e.$refs.registerReward.open(t)}}):(e.isSub=!1,e.getCaptcha(),e.$util.showToast({title:t.message}))},fail:function(t){e.isSub=!1,e.getCaptcha()}})}},verify:function(e){if("mobile"==this.registerMode){var t=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}),t.push({name:"code",checkType:"required",errorMsg:this.$lang("dynacodePlaceholder")})}if("account"==this.registerMode){t=[{name:"username",checkType:"required",errorMsg:"请输入账号"},{name:"password",checkType:"required",errorMsg:"请输入密码"}];var a=this.registerConfig;if(!/^[A-Za-z0-9]+$/.test(e.username))return void this.$util.showToast({title:"用户名只能输入数字跟英文"});if(a.pwd_len>0&&t.push({name:"password",checkType:"lengthMin",checkRule:a.pwd_len,errorMsg:"密码长度不能小于"+a.pwd_len+"位"}),""!=a.pwd_complexity){var i="密码需包含",o="";-1!=a.pwd_complexity.indexOf("number")&&(o+="(?=.*?[0-9])",i+="数字"),-1!=a.pwd_complexity.indexOf("letter")&&(o+="(?=.*?[a-z])",i+="、小写字母"),-1!=a.pwd_complexity.indexOf("upper_case")&&(o+="(?=.*?[A-Z])",i+="、大写字母"),-1!=a.pwd_complexity.indexOf("symbol")&&(o+="(?=.*?[#?!@$%^&*-])",i+="、特殊字符"),t.push({name:"password",checkType:"reg",checkRule:o,errorMsg:i})}if(this.formData.password!=this.formData.rePassword)return this.$util.showToast({title:"两次密码不一致"}),!1;""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")})}var n=r.default.check(e,t);return!!n||(this.$util.showToast({title:r.default.error}),!1)},toLogin:function(){this.back?this.$util.redirectTo("/pages_tool/login/login",{back:encodeURIComponent(this.back)}):this.$util.redirectTo("/pages_tool/login/login")},sendMobileCode:function(){var e=this;if(120==this.dynacodeData.seconds&&!this.dynacodeData.isSend){var t={mobile:this.formData.mobile,captcha_id:this.captcha.id,captcha_code:this.formData.vercode},a=r.default.check(t,[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"}]);a?(this.dynacodeData.isSend=!0,this.dynacodeData.timer=setInterval((function(){e.dynacodeData.seconds--,e.dynacodeData.codeText=e.dynacodeData.seconds+"s后可重新获取"}),1e3),this.$api.sendRequest({url:"/api/register/mobileCode",data:t,success:function(t){t.code>=0?e.formData.key=t.data.key:(e.$util.showToast({title:t.message}),e.refreshDynacodeData())},fail:function(){e.$util.showToast({title:"request:fail"}),e.refreshDynacodeData()}})):this.$util.showToast({title:r.default.error})}},refreshDynacodeData:function(){this.getCaptcha(),clearInterval(this.dynacodeData.timer),this.dynacodeData={seconds:120,timer:null,codeText:"获取动态码",isSend:!1}}},watch:{"dynacodeData.seconds":{handler:function(e,t){0==e&&this.refreshDynacodeData()},immediate:!0,deep:!0}}};t.default=s},"127c":function(e,t,a){var i=a("b634");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("283e58b2",i,!0,{sourceMap:!1,shadowMode:!1})},"34c7":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticStyle:{display:"none"}},[this._t("default")],2)},o=[]},"43f1":function(e,t,a){"use strict";a.r(t);var i=a("4eeb"),o=a("77f8");for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("5652"),a("0583");var n=a("f0c5"),c=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,"8acccf20",null,!1,i["a"],void 0);t["default"]=c.exports},"4eeb":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var i={pageMeta:a("6d42").default,uniPopup:a("7129").default,loadingCover:a("cfb1").default,registerReward:a("89f7").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-meta",{attrs:{"page-style":e.themeColor}}),a("v-uni-scroll-view",{staticClass:"container",attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"header-wrap"},[a("v-uni-view",{staticClass:"title"},[e._v("注册")]),a("v-uni-view",{staticClass:"regisiter-agreement"},[a("v-uni-text",{staticClass:"color-tip"},[e._v("已有账号,")]),a("v-uni-text",{staticClass:"color-base-text",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toLogin.apply(void 0,arguments)}}},[e._v("立即登录")])],1)],1),a("v-uni-view",{staticClass:"body-wrap"},[a("v-uni-view",{staticClass:"form-wrap"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"mobile"==e.registerMode,expression:"registerMode == 'mobile'"}],staticClass:"input-wrap"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"area-code"},[e._v("+86")]),a("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"仅限中国大陆手机号注册","placeholder-class":"input-placeholder",maxlength:"11"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"account"==e.registerMode,expression:"registerMode == 'account'"}],staticClass:"input-wrap"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入账号","placeholder-class":"input-placeholder"},model:{value:e.formData.account,callback:function(t){e.$set(e.formData,"account",t)},expression:"formData.account"}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"account"==e.registerMode,expression:"registerMode == 'account'"}],staticClass:"input-wrap"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码","placeholder-class":"input-placeholder"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"account"==e.registerMode,expression:"registerMode == 'account'"}],staticClass:"input-wrap"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请确认密码","placeholder-class":"input-placeholder"},model:{value:e.formData.rePassword,callback:function(t){e.$set(e.formData,"rePassword",t)},expression:"formData.rePassword"}})],1)],1),a("v-uni-view",{staticClass:"input-wrap"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入验证码","placeholder-class":"input-placeholder"},model:{value:e.formData.vercode,callback:function(t){e.$set(e.formData,"vercode",t)},expression:"formData.vercode"}}),a("v-uni-image",{staticClass:"captcha",attrs:{src:e.captcha.img},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCaptcha.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"mobile"==e.registerMode,expression:"registerMode == 'mobile'"}],staticClass:"input-wrap"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入动态码","placeholder-class":"input-placeholder"},model:{value:e.formData.dynacode,callback:function(t){e.$set(e.formData,"dynacode",t)},expression:"formData.dynacode"}}),a("v-uni-view",{staticClass:"dynacode",class:120==e.dynacodeData.seconds?"color-base-text":"color-tip",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendMobileCode.apply(void 0,arguments)}}},[e._v(e._s(e.dynacodeData.codeText))])],1)],1)],1),a("v-uni-view",{staticClass:"login-mode-box"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:"mobile"==e.registerMode&&-1!=e.registerConfig.register.indexOf("username"),expression:"registerMode == 'mobile' && registerConfig.register.indexOf('username') != -1"}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.switchRegisterMode.apply(void 0,arguments)}}},[e._v("使用用户名注册")]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:"account"==e.registerMode&&-1!=e.registerConfig.register.indexOf("mobile"),expression:"registerMode == 'account' && registerConfig.register.indexOf('mobile') != -1"}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.switchRegisterMode.apply(void 0,arguments)}}},[e._v("使用手机号注册")])],1),a("v-uni-view",{staticClass:"btn_view"},[a("v-uni-button",{staticClass:"login-btn color-base-border color-base-bg",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1),a("v-uni-view",{staticClass:"regisiter-agreement"},[e._v("点击注册即代表您已同意"),a("v-uni-text",{staticClass:"color-base-text",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup.apply(void 0,arguments)}}},[e._v("《注册协议》")])],1)],1),a("v-uni-view",{on:{touchmove:function(t){t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[a("uni-popup",{ref:"registerPopup",attrs:{type:"center",maskClick:!1}},[a("v-uni-view",{staticClass:"conten-box"},[a("v-uni-view",{staticClass:"close"},[a("v-uni-text",{staticClass:"iconfont icon-close",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toClose.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"title"},[e._v(e._s(e.regisiterAgreement.title))]),a("v-uni-view",{staticClass:"con"},[a("v-uni-scroll-view",{staticClass:"con",attrs:{"scroll-y":"true"}},[a("v-uni-rich-text",{attrs:{nodes:e.regisiterAgreement.content}})],1)],1)],1)],1)],1),a("loading-cover",{ref:"loadingCover"}),a("register-reward",{ref:"registerReward"})],1)],1)},r=[]},5652:function(e,t,a){"use strict";var i=a("04b1"),o=a.n(i);o.a},"6d42":function(e,t,a){"use strict";a.r(t);var i=a("34c7"),o=a("8f28");for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);var n=a("f0c5"),c=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=c.exports},"77f8":function(e,t,a){"use strict";a.r(t);var i=a("09a1"),o=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"8f28":function(e,t,a){"use strict";a.r(t);var i=a("013c"),o=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},adc2:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c975"),a("ac1f"),a("466d"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("14d9"),a("13d5"),a("d3b7"),a("3c65");var o=i(a("e84e")),r=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,n=/^<\/([-A-Za-z0-9_]+)[^>]*>/,c=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),l=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),d=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),p=h("script,style");function h(e){for(var t={},a=e.split(","),i=0;i<a.length;i++)t[a[i]]=!0;return t}var g=function(e){e=function(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}(e),e=function(e){return e=e.replace(/<!--[\s\S]*-->/gi,""),e}(e),e=function(e){var t='<img style="width:100% !important;display:block;max-width: '.concat("100%",' !important;"');return e=e.replace(/\\/g,"").replace(/<img/g,t),e=e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(e,a){return t+' src="'+o.default.img(a)+'"/>'})),e}(e),e=function(e){return e=e.replace(/style\s*=\s*["][^>]*;[^"]?/gi,(function(e,t){return e=e.replace(/[:](\s?)[\s\S]*/gi,(function(e,t){return e.replace(/"/g,"'")})),e})),e}(e);var t=[],a={node:"root",children:[]};return function(e,t){var a,i,o,h=[],g=e;h.last=function(){return this[this.length-1]};while(e){if(i=!0,h.last()&&p[h.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+h.last()+"[^>]*>"),(function(e,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(a),""})),b("",h.last());else if(0==e.indexOf("\x3c!--")?(a=e.indexOf("--\x3e"),a>=0&&(t.comment&&t.comment(e.substring(4,a)),e=e.substring(a+3),i=!1)):0==e.indexOf("</")?(o=e.match(n),o&&(e=e.substring(o[0].length),o[0].replace(n,b),i=!1)):0==e.indexOf("<")&&(o=e.match(r),o&&(e=e.substring(o[0].length),o[0].replace(r,m),i=!1)),i){a=e.indexOf("<");var v=a<0?e:e.substring(0,a);e=a<0?"":e.substring(a),t.chars&&t.chars(v)}if(e==g)throw"Parse Error: "+e;g=e}function m(e,a,i,o){if(a=a.toLowerCase(),l[a])while(h.last()&&d[h.last()])b("",h.last());if(u[a]&&h.last()==a&&b("",a),o=s[a]||!!o,o||h.push(a),t.start){var r=[];i.replace(c,(function(e,t){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[t]?t:"";r.push({name:t,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(a,r,o)}}function b(e,a){if(a){for(i=h.length-1;i>=0;i--)if(h[i]==a)break}else var i=0;if(i>=0){for(var o=h.length-1;o>=i;o--)t.end&&t.end(h[o]);h.length=i}}b()}(e,{start:function(e,i,o){var r={name:e};if(0!==i.length&&(r.attrs=function(e){return e.reduce((function(e,t){var a=t.value,i=t.name;return e[i]?e[i]=e[i]+" "+a:e[i]=a,e}),{})}(i)),o){var n=t[0]||a;n.children||(n.children=[]),n.children.push(r)}else t.unshift(r)},end:function(e){var i=t.shift();if(i.name!==e&&console.error("invalid state: mismatch end tag"),0===t.length)a.children.push(i);else{var o=t[0];o.children||(o.children=[]),o.children.push(i)}},chars:function(e){var i={type:"text",text:e};if(0===t.length)a.children.push(i);else{var o=t[0];o.children||(o.children=[]),o.children.push(i)}},comment:function(e){var a={node:"comment",text:e},i=t[0];i.children||(i.children=[]),i.children.push(a)}}),a.children};t.default=g},b634:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.conten-box[data-v-8acccf20]{padding:0 %?30?% %?30?%}.conten-box .title[data-v-8acccf20]{text-align:center;margin-top:%?50?%;margin-bottom:%?10?%}.conten-box .close[data-v-8acccf20]{position:absolute;right:%?30?%;top:%?10?%}.conten-box .con[data-v-8acccf20]{height:%?500?%}[data-v-8acccf20] .reward-popup .uni-popup__wrapper-box{background:none!important;max-width:unset!important;max-height:unset!important;overflow:unset!important}',""]),e.exports=t},c2ca:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-8acccf20] .uni-scroll-view{background-color:#fff}[data-v-8acccf20] .uni-scroll-view::-webkit-scrollbar{\r\n  /* 隐藏滚动条，但依旧具备可以滚动的功能 */display:none}uni-page-body[data-v-8acccf20]{width:100%;background:#fff!important}body.?%PAGE?%[data-v-8acccf20]{background:#fff!important}.align-right[data-v-8acccf20]{color:#838383}.container[data-v-8acccf20]{width:100vw;height:100vh}.header-wrap[data-v-8acccf20]{width:80%;margin:calc(%?120?% + 44px) auto 0;background-repeat:no-repeat;background-size:contain;background-position:bottom;position:relative}.header-wrap .title[data-v-8acccf20]{font-size:%?60?%;font-weight:700}.body-wrap[data-v-8acccf20]{margin-top:%?100?%;padding-bottom:%?100?%}.body-wrap .form-wrap[data-v-8acccf20]{width:80%;margin:0 auto}.body-wrap .form-wrap .input-wrap[data-v-8acccf20]{position:relative;width:100%;box-sizing:border-box;height:%?60?%;margin-top:%?60?%}.body-wrap .form-wrap .input-wrap .iconfont[data-v-8acccf20]{width:%?60?%;height:%?60?%;position:absolute;left:0;right:0;line-height:%?60?%;font-size:%?32?%;color:#303133;font-weight:600}.body-wrap .form-wrap .input-wrap .content[data-v-8acccf20]{display:flex;height:%?60?%;border-bottom:%?2?% solid #eee;align-items:center}.body-wrap .form-wrap .input-wrap .content .input[data-v-8acccf20]{flex:1;height:%?60?%;line-height:%?60?%;font-size:%?28?%}.body-wrap .form-wrap .input-wrap .content .input-placeholder[data-v-8acccf20]{font-size:%?28?%;color:#bfbfbf;line-height:%?60?%}.body-wrap .form-wrap .input-wrap .content .captcha[data-v-8acccf20]{margin:%?4?%;height:%?52?%;width:%?140?%}.body-wrap .form-wrap .input-wrap .content .dynacode[data-v-8acccf20]{line-height:%?60?%;font-size:%?24?%}.body-wrap .form-wrap .input-wrap .content .area-code[data-v-8acccf20]{line-height:%?60?%;margin-right:%?20?%;font-size:%?28?%}.body-wrap .forget-section[data-v-8acccf20]{display:flex;width:80%;margin:%?40?% auto}.body-wrap .forget-section uni-view[data-v-8acccf20]{flex:1;font-size:%?24?%;line-height:1}.body-wrap .btn_view[data-v-8acccf20]{width:100%;margin:%?94?% auto auto;padding:0 %?30?%;box-sizing:border-box}.body-wrap .login-btn[data-v-8acccf20]{height:%?90?%;line-height:%?90?%;border-radius:%?10?%;text-align:center;border:%?2?% solid;width:100%;margin:0}.body-wrap .auth-login[data-v-8acccf20]{margin-top:%?20?%;width:calc(100% - %?4?%);height:%?90?%;line-height:%?90?%;border-radius:%?10?%;border:%?2?% solid;color:#fff;text-align:center;margin-left:0;background-color:#fff}.body-wrap .auth-login uni-text[data-v-8acccf20]{color:#d0d0d0}.body-wrap .auth-login .iconfont[data-v-8acccf20]{font-size:%?70?%}.body-wrap .auth-login .icon-weixin[data-v-8acccf20]{color:#1aad19}.body-wrap .regisiter-agreement[data-v-8acccf20]{text-align:center;margin-top:%?30?%;line-height:1;color:#838383;line-height:%?60?%}.body-wrap .regisiter-agreement[data-v-8acccf20]{font-size:%?24?%}.login-btn-box[data-v-8acccf20]{margin-top:%?50?%}.login-btn-box.active[data-v-8acccf20]{margin:%?30?% 0 %?50?%}.back-btn[data-v-8acccf20]{font-size:%?52?%;position:fixed;left:%?24?%;top:%?72?%;z-index:9;color:#000}.login-mode-box[data-v-8acccf20]{display:flex;justify-content:flex-end;color:#909399;margin:auto;margin-top:%?44?%;font-size:%?26?%;width:80%}',""]),e.exports=t}}]);