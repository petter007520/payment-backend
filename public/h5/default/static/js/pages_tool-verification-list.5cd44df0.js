(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-verification-list"],{"013c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c975"),i("a9e3"),i("ac1f"),i("5319"),i("acd8");var n={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},a={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle()},mounted:function(){this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var i=function i(a){a.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",i),t.$emit("scrolldone",n))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",i)}})}}}};e.default=a},"34c7":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticStyle:{display:"none"}},[this._t("default")],2)},a=[]},"37f7":function(t,e,i){"use strict";var n=i("e636"),a=i.n(n);a.a},3820:function(t,e,i){"use strict";i.r(e);var n=i("79b6"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},6031:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.verify-container[data-v-5889b59d]{width:100vw;height:100vh}.align-right[data-v-5889b59d]{text-align:right}.type-wrap[data-v-5889b59d]{display:flex;background-color:#fff;height:%?90?%}.type-wrap > uni-view[data-v-5889b59d]{flex:1;text-align:center}.type-wrap > uni-view uni-text[data-v-5889b59d]{line-height:%?86?%;border-bottom:%?4?% solid #fff;display:inline-block;font-size:%?30?%}.swiper-box[data-v-5889b59d]{width:100%;height:calc(100vh - %?100?%)}.swiper-box .swiper-item[data-v-5889b59d]{width:100%;height:100%}.swiper-box .swiper-item .verify-list[data-v-5889b59d]{width:100%;height:100%}.verify-list .item[data-v-5889b59d]{margin:%?24?%;border-radius:%?10?%;background:#fff;position:relative;padding:%?30?%}.verify-list .item .header[data-v-5889b59d]{display:flex;padding-bottom:%?30?%}.verify-list .item .header uni-view[data-v-5889b59d]{line-height:1;flex:1;max-width:50%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.verify-list .item .xian[data-v-5889b59d]{width:100%;border:.5px solid #eee}.verify-list .item .body .content-item[data-v-5889b59d]{display:flex;padding-top:%?24?%}.verify-list .item .body .content-item .img-wrap[data-v-5889b59d]{width:%?120?%;height:%?120?%;border-radius:%?10?%;overflow:hidden}.verify-list .item .body .content-item .img-wrap uni-image[data-v-5889b59d]{width:100%;height:100%}.verify-list .item .body .content-item .info-wrap[data-v-5889b59d]{flex:1;display:flex;flex-direction:column;justify-content:space-between;width:100%;padding-right:%?23?%}.verify-list .item .body .content-item .info-wrap .name-wrap[data-v-5889b59d]{flex:1;padding-left:%?23?%}.verify-list .item .body .content-item .info-wrap .name-wrap .goods-name[data-v-5889b59d]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;line-height:1.5;color:#000;font-size:%?28?%}.verify-list .item .body .content-item .info-wrap .money-wrap[data-v-5889b59d]{margin-top:%?20?%;padding:0 %?23?%;display:flex;justify-content:space-between;width:100%;align-items:center}.verify-list .item .body .content-item .info-wrap .money-wrap > uni-view[data-v-5889b59d]{line-height:1}.verify-list .item .body .content-item .info-wrap .money-wrap .unit[data-v-5889b59d]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.verify-list .item .body .content-item .info-wrap .money-wrap .iconfont[data-v-5889b59d]{line-height:1}.verify-list .item .body .content-item .money-wrap[data-v-5889b59d]{font-weight:700}',""]),t.exports=e},"6cc1":function(t,e,i){"use strict";i.r(e);var n=i("7e47"),a=i("3820");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("37f7");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5889b59d",null,!1,n["a"],void 0);e["default"]=s.exports},"6d42":function(t,e,i){"use strict";i.r(e);var n=i("34c7"),a=i("8f28");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},"79b6":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("b64b"),i("14d9"),i("acd8");var n={data:function(){return{scrollInto:"",type:0,typeList:[],verifyList:[],isShow:!1}},onShow:function(){this.getVerifyType()},methods:{toDetail:function(t){this.$util.redirectTo("/pages_tool/verification/detail",{code:t})},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e),this.isShow=!1},switchTab:function(t){this.type!==t&&(this.type=t,this.scrollInto=this.typeList[t].type)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},getVerifyType:function(){var t=this;this.$api.sendRequest({url:"/api/verify/getVerifyType",success:function(e){e.code>=0&&(t.typeList=[],t.verifyList=[],Object.keys(e.data).forEach((function(i){t.typeList.push({type:i,name:e.data[i].name}),t.verifyList.push({page:1,totalPage:1,list:[],isLoading:!1}),t.getVerifyList(i,1,t.typeList.length-1)})))},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getVerifyList:function(t,e,i){var n=this;this.verifyList[i].isLoading||1!=e&&e>this.verifyList[i].totalPage||(this.verifyList[i].isLoading=!0,this.verifyList[i].loadingType="loading",this.$api.sendRequest({url:"/api/verify/lists",data:{verify_type:t,page:e},success:function(t){n.verifyList[i].page=e,1==e&&(n.verifyList[i].list=[],uni.stopPullDownRefresh()),t.data.list.length&&t.data.list.forEach((function(t){n.verifyList[i].list.push(t)})),n.verifyList[i].totalPage=t.data.page_count,n.verifyList[i].isLoading=!1,n.verifyList[i].loadingType=e==n.verifyList[i].totalPage?"nomore":"more",n.$refs.loadingCover&&n.$refs.loadingCover.hide(),n.isShow=!0}}))},scrolltolower:function(){var t=this.type;this.getVerifyList(this.typeList[t].type,this.verifyList[t].page+1,t)},onPullDownRefresh:function(){var t=this.type;this.getVerifyList(this.typeList[t].type,1,t)},imageError:function(t,e,i){this.verifyList[t].list[e].item_array[i].img=this.$util.getDefaultImage().goods,this.$forceUpdate()}},filters:{abs:function(t){return Math.abs(parseFloat(t)).toFixed(2)}}};e.default=n},"7e47":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={pageMeta:i("6d42").default,nsEmpty:i("7441").default,loadingCover:i("cfb1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-meta",{attrs:{"page-style":t.themeColor}}),i("v-uni-view",{staticClass:"verify-container"},[i("v-uni-view",{staticClass:"type-wrap"},t._l(t.typeList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-tab-item",attrs:{id:e.pickup,"data-current":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:t.type==n?"uni-tab-item-title-active color-base-text color-base-border":""},[t._v(t._s(e.name))])],1)})),1),i("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{flex:"1"},attrs:{current:t.type,duration:200},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabchange.apply(void 0,arguments)}}},t._l(t.typeList,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticClass:"verify-list",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)}}},[void 0!=t.verifyList[n]&&t.verifyList[n].list.length>0?t._l(t.verifyList[n].list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.verify_code)}}},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"color-tip font-size-goods-tag"},[t._v("核销码："+t._s(e.verify_code))]),i("v-uni-view",{staticClass:"color-tip align-right font-size-goods-tag"},[t._v("核销员："+t._s(e.verifier_name))])],1),i("v-uni-view",{staticClass:"xian"}),i("v-uni-view",{staticClass:"body"},t._l(e.item_array,(function(o,r){return i("v-uni-view",{key:r,staticClass:"content-item"},[i("v-uni-view",{staticClass:"img-wrap"},[i("v-uni-image",{attrs:{src:t.$util.img(o.img),mode:"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imageError(n,a,r)}}})],1),i("v-uni-view",{staticClass:"info-wrap"},[i("v-uni-view",{staticClass:"name-wrap"},[i("v-uni-view",{staticClass:"goods-name font-size-tag"},[t._v(t._s(o.name))]),i("v-uni-view",{staticClass:"font-size-goods-tag color-tip"},[t._v("核销时间："+t._s(t.$util.timeStampTurnTime(e.verify_time)))])],1),i("v-uni-view",{staticClass:"money-wrap"},[i("v-uni-view",{staticClass:"align-right color-tip font-size-goods-tag"},[i("v-uni-text",{staticClass:"iconfont icon-close font-size-goods-tag"}),i("v-uni-text",[t._v(t._s(o.num))])],1)],1)],1),i("v-uni-view",{staticClass:"money-wrap"},[i("v-uni-view",[i("v-uni-text",{staticClass:"color-base-text font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",{staticClass:"font-size-base color-base-text"},[t._v(t._s(t._f("abs")(o.price)))])],1)],1)],1)})),1)],1)],1)})):[i("ns-empty",{attrs:{isIndex:!1,text:"暂无核销记录!"}})]],2)],1)})),1),i("loading-cover",{ref:"loadingCover"})],1)],1)},o=[]},"8f28":function(t,e,i){"use strict";i.r(e);var n=i("013c"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e636:function(t,e,i){var n=i("6031");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7b15dab5",n,!0,{sourceMap:!1,shadowMode:!1})}}]);