(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-member-coupon"],{"013c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c975"),i("a9e3"),i("ac1f"),i("5319"),i("acd8");var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},n={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle()},mounted:function(){this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var i=function i(n){n.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",i),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",i)}})}}}};e.default=n},"34c7":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticStyle:{display:"none"}},[this._t("default")],2)},n=[]},"45f1":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("4e82"),i("99af");var o={data:function(){return{type:"",types:"",state:1,sort:1,list:[],isIphoneX:!1,token:null,showEmpty:!1,related_id:0}},onLoad:function(t){t.related_id&&(this.related_id=t.related_id?t.related_id:0),this.isIphoneX=this.$util.uniappIsIPhoneX()},onShow:function(){var t=this;setTimeout((function(){if(t.addonIsExist&&!t.addonIsExist.coupon)return t.$util.showToast({title:"商家未开启优惠券",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index")}),2e3)}),1e3),uni.getStorageSync("token")?(this.token=uni.getStorageSync("token"),this.$refs.mescroll&&this.$refs.mescroll.refresh()):setTimeout((function(){t.$refs.login.open("/pages_tool/member/coupon")}))},methods:{changeState:function(t){this.list=[],this.state=t,this.$refs.mescroll.refresh(!1)},changeSort:function(t,e){this.list=[],this.sort=t,this.types=e,this.$refs.mescroll.refresh(!1)},getMemberCounponList:function(t){var e=this;this.showEmpty=!1,this.$api.sendRequest({url:"/coupon/api/coupon/memberpage",data:{page:t.num,page_size:t.size,state:this.state,is_own:this.type,type:this.types,related_id:this.related_id},success:function(i){e.showEmpty=!0;var o=[],n=i.message;0==i.code&&i.data?o=i.data.list:e.$util.showToast({title:n}),t.endSuccess(o.length),1==t.num&&(e.list=[],e.related_id=0),e.list=e.list.concat(o);var a=i.data;a&&(e.couponList=a),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},imageError:function(t){this.list[t].logo=this.$util.getDefaultImage().goods,this.$forceUpdate()},toGoodsList:function(t){1==t.state&&this.$util.redirectTo("/pages/goods/list",{coupon:t.coupon_type_id})}},watch:{storeToken:function(t,e){t&&(this.token=t,this.$refs.mescroll.refresh())}}};e.default=o},6914:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={pageMeta:i("6d42").default,nsEmpty:i("7441").default,nsLogin:i("8f22").default,loadingCover:i("cfb1").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-meta",{attrs:{"page-style":t.themeColor}}),i("v-uni-view",{class:t.isIphoneX?"iphone-x":""},[t.token?i("v-uni-view",{staticClass:"cf-container color-line-border"},[i("v-uni-view",{staticClass:"tab"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeState(1)}}},[i("v-uni-text",{class:1==t.state?"color-base-text active color-base-border-bottom":""},[t._v("未使用")])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeState(2)}}},[i("v-uni-text",{class:2==t.state?"color-base-text active color-base-border-bottom":""},[t._v("已使用")])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeState(3)}}},[i("v-uni-text",{class:3==t.state?"color-base-text active color-base-border-bottom":""},[t._v("已过期")])],1)],1)],1):t._e(),t.token?i("mescroll-uni",{ref:"mescroll",attrs:{top:"100"},on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getMemberCounponList.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[i("v-uni-view",{staticClass:"coupon-listone"},t._l(t.list,(function(e,o){return i("v-uni-view",{key:o,staticClass:"item",class:["item",1!=e.state&&"item-disabled"],style:{backgroundColor:1!=e.state?"#FFF":"var(--main-color-shallow)"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsList(e)}}},[i("v-uni-view",{staticClass:"item-base"},[i("v-uni-image",{staticClass:"coupon-line",attrs:{mode:"heightFix",src:t.$util.img("public/uniapp/coupon/coupon_line.png")}}),i("v-uni-view",["divideticket"==e.type?i("v-uni-view",{staticClass:"use_price "},[i("v-uni-text",[t._v("￥")]),t._v(t._s(parseInt(e.money)))],1):t._e(),"reward"==e.type?i("v-uni-view",{staticClass:"use_price "},[i("v-uni-text",[t._v("￥")]),t._v(t._s(parseInt(e.money)))],1):"discount"==e.type?i("v-uni-view",{staticClass:"use_price"},[t._v(t._s(parseFloat(e.discount))),i("v-uni-text",[t._v("折")])],1):t._e(),e.at_least>0?i("v-uni-view",{staticClass:"use_condition font-size-tag"},[t._v("满"+t._s(e.at_least)+"元可用")]):i("v-uni-view",{staticClass:"use_condition font-size-tag"},[t._v("无门槛优惠券")])],1)],1),i("v-uni-view",{staticClass:"item-info"},[i("v-uni-view",{staticClass:"use_title"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.coupon_name))]),2==e.goods_type?i("v-uni-view",{staticClass:"max_price",class:{disabled:3==e.state}},[t._v("指定商品")]):t._e(),"0.00"!=e.discount_limit?i("v-uni-view",{staticClass:"max_price"},[t._v("(最大优惠"+t._s(e.discount_limit)+"元)")]):t._e()],1),e.end_time?i("v-uni-view",{staticClass:"use_time"},[t._v("有效期："+t._s(t.$util.timeStampTurnTime(e.end_time)))]):i("v-uni-view",{staticClass:"use_time"},[t._v("有效期：长期有效")])],1),i("v-uni-view",{staticClass:"item-btn"},[1==e.state?i("v-uni-view",{staticClass:"tag"},[t._v("去使用")]):t._e(),2==e.state?i("v-uni-view",{staticClass:"tag disabled"},[t._v("已使用")]):t._e(),3==e.state?i("v-uni-view",{staticClass:"tag disabled"},[t._v("已过期")]):t._e()],1)],1)})),1),!t.list.length&&t.showEmpty?i("v-uni-view",{staticClass:"margin-top cart-empty",attrs:{fixed:!1}},[i("ns-empty",{attrs:{isIndex:!0,emptyBtn:{url:"/pages/index/index",text:"去逛逛"},text:"暂无优惠券"}})],1):t._e()],1)],2):t._e(),i("ns-login",{ref:"ns-login"}),i("loading-cover",{ref:"loadingCover"})],1)],1)},a=[]},"6d42":function(t,e,i){"use strict";i.r(e);var o=i("34c7"),n=i("8f28");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=r.exports},7497:function(t,e,i){"use strict";var o=i("8647"),n=i.n(o);n.a},8647:function(t,e,i){var o=i("b8db");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("43b7b148",o,!0,{sourceMap:!1,shadowMode:!1})},"8b48":function(t,e,i){"use strict";i.r(e);var o=i("45f1"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"8f28":function(t,e,i){"use strict";i.r(e);var o=i("013c"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},b8db:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.cart-empty[data-v-c41ed036]{margin-top:%?208?%!important}.active[data-v-c41ed036]{border-bottom:%?4?% solid}.coupon-head[data-v-c41ed036]{display:flex;background:#fff;padding:%?20?% %?50?%}.coupon-head .sort[data-v-c41ed036]{border:%?2?% solid #c5c5c5;padding:%?1?% %?20?%;border-radius:%?10?%;cursor:pointer;margin-right:%?15?%}.cf-container[data-v-c41ed036]{background:#fff;overflow:hidden}.tab[data-v-c41ed036]{display:flex;justify-content:space-between;height:%?86?%}.tab > uni-view[data-v-c41ed036]{text-align:center;width:33%;height:%?86?%}.tab > uni-view uni-text[data-v-c41ed036]{display:inline-block;line-height:%?86?%;height:%?80?%;font-size:%?30?%}.coupon-listone[data-v-c41ed036]{margin:0 %?30?%}.coupon-listone .item[data-v-c41ed036]{display:flex;background-color:#fff2f0;background-size:100% 100%;border-radius:%?20?%;align-items:stretch;margin-top:%?20?%;overflow:hidden}.coupon-listone .item.item-disabled .item-base[data-v-c41ed036]{background:#e7e7e7!important}.coupon-listone .item .item-base[data-v-c41ed036]{position:relative;width:%?197?%;min-width:%?197?%;text-align:center;background:linear-gradient(270deg,var(--bg-color),var(--bg-color-shallow));background-repeat:no-repeat;background-size:100% 100%;padding:%?38?% %?10?% %?38?% %?18?%}.coupon-listone .item .item-base.disabled[data-v-c41ed036]{background:#dedede}.coupon-listone .item .item-base .coupon-line[data-v-c41ed036]{position:absolute;right:0;top:0;height:100%}.coupon-listone .item .item-base > uni-view[data-v-c41ed036]{width:calc(100%);height:auto;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.coupon-listone .item .item-base .use_price[data-v-c41ed036]{font-size:%?60?%;line-height:1;color:#fff}.coupon-listone .item .item-base .use_price uni-text[data-v-c41ed036]{font-size:%?32?%}.coupon-listone .item .item-base .use_price.disabled[data-v-c41ed036]{color:#909399}.coupon-listone .item .item-base .use_condition[data-v-c41ed036]{color:#fff;margin-top:%?20?%}.coupon-listone .item .item-base .use_condition.margin_top_none[data-v-c41ed036]{margin-top:0}.coupon-listone .item .item-base .use_condition.disabled[data-v-c41ed036]{color:#909399}.coupon-listone .item .item-base[data-v-c41ed036]::after{position:absolute;content:"";background-color:#f8f8f8;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?30?%;width:%?15?%;border-radius:0 %?30?% %?30?% 0}.coupon-listone .item .item-btn[data-v-c41ed036]{position:relative;width:%?160?%;min-width:%?160?%;align-self:center}.coupon-listone .item .item-btn uni-view[data-v-c41ed036]{width:%?100?%;height:%?50?%;border-radius:%?10?%;line-height:%?50?%;margin:auto;text-align:center;background-image:linear-gradient(90deg,var(--bg-color),var(--bg-color-shallow));color:var(--btn-text-color);font-size:%?24?%}.coupon-listone .item .item-btn uni-view.disabled[data-v-c41ed036]{background:#eee!important;color:#909399!important}.coupon-listone .item .item-btn[data-v-c41ed036]::after{position:absolute;content:"";background-color:#f8f8f8;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?30?%;width:%?15?%;border-radius:%?30?% 0 0 %?30?%}.coupon-listone .item .item-info[data-v-c41ed036]{flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:%?20?%;overflow:hidden;background-repeat-x:no-repeat;background-repeat-y:repeat}.coupon-listone .item .item-info .use_time[data-v-c41ed036]{padding:%?20?% 0;border-top:%?2?% dashed #ccc;font-size:%?20?%;color:#909399}.coupon-listone .item .item-info .use_title[data-v-c41ed036]{font-size:%?28?%;font-weight:500;padding:%?20?% 0}.coupon-listone .item .item-info .use_title .title[data-v-c41ed036]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.coupon-listone .item .item-info .use_title .max_price[data-v-c41ed036]{font-weight:400;font-size:%?24?%}',""]),t.exports=e},feab:function(t,e,i){"use strict";i.r(e);var o=i("6914"),n=i("8b48");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("7497");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"c41ed036",null,!1,o["a"],void 0);e["default"]=r.exports}}]);