(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-status-pay_status"],{"0555":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-43b5bbec]{background-color:#eff5f8}body.?%PAGE?%[data-v-43b5bbec]{background-color:#eff5f8}.zaiui-status-view[data-v-43b5bbec]{position:relative;text-align:center;margin:%?90.9?% 0 %?54.54?%;display:flex;height:%?116.36?%;align-items:center;justify-content:center}.zaiui-status-view .status-img[data-v-43b5bbec]{position:absolute;width:%?127.27?%}.zaiui-status-view .status-bg-view[data-v-43b5bbec]{position:relative;border-radius:50%;border:%?6?% solid #fff;width:%?54.54?%;height:%?54.54?%;top:%?-63.63?%;left:%?69.09?%;display:flex;justify-content:center;align-items:center}.zaiui-status-view .status-bg-view .icon[data-v-43b5bbec]{font-size:%?32.72?%}.zaiui-padding[data-v-43b5bbec]{position:relative;padding:%?18.18?% %?63.63?%}.zaiui-btn-view[data-v-43b5bbec]{position:relative;display:flex;align-items:center;justify-content:center}.zaiui-btn-view .cu-btn[data-v-43b5bbec]{background:#fff}.zaiui-ad-view[data-v-43b5bbec]{margin-top:%?72.72?%}.zaiui-ad-view .qrcode-img-view[data-v-43b5bbec]{display:flex;justify-content:center;align-items:center;margin-top:%?18.18?%}.zaiui-ad-view .qrcode-img-view .qrcode-img[data-v-43b5bbec]{width:%?327.27?%;border-radius:3%}",""]),t.exports=i},"175d":function(t,i,a){"use strict";a.r(i);var e=a("1fce"),n=a("b4b9");for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("7b15");var s=a("f0c5"),u=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"43b5bbec",null,!1,e["a"],void 0);i["default"]=u.exports},1944:function(t,i,a){"use strict";a.r(i);var e=a("20ce"),n=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},"1fce":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white"}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2),a("v-uni-view",{staticClass:"zaiui-status-view"},[a("v-uni-image",{staticClass:"status-img",attrs:{src:"/static/zaiui/img/pay.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"bg-red status-bg-view"},[a("v-uni-text",{staticClass:"cuIcon-check icon"})],1)],1),a("v-uni-view",{staticClass:"text-bold text-black text-xl text-center"},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"text-gray text-sm text-center zaiui-padding"},[t._v(t._s(t.introduce))]),a("v-uni-view",{staticClass:"zaiui-btn-view"},[a("v-uni-button",{staticClass:"cu-btn radius line-red"},[t._v("查看订单详情")])],1),a("v-uni-view",{staticClass:"zaiui-padding zaiui-ad-view"},[a("v-uni-view",{staticClass:"text-gray text-sm text-center"},[a("v-uni-text",[t._v("扫描下方二维码，或打开微信搜索【")]),a("v-uni-text",{staticClass:"text-blue"},[t._v("测试的内容")]),a("v-uni-text",[t._v("】 ,微信关注公众号【")]),a("v-uni-text",{staticClass:"text-blue"},[t._v("测试的内容")]),a("v-uni-text",[t._v("】优惠信息早知道，更多福利等你来拿!")])],1),a("v-uni-view",{staticClass:"qrcode-img-view"},[a("v-uni-image",{staticClass:"qrcode-img",attrs:{src:"/static/images/reward/qrcode.png",mode:"widthFix"}})],1)],1)],1)},n=[]},"20ce":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},"257b":function(t,i,a){var e=a("0555");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f065").default;n("707cdd19",e,!0,{sourceMap:!1,shadowMode:!1})},"29c9":function(t,i,a){"use strict";var e=a("b769"),n=a.n(e);n.a},"3ca7":function(t,i,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("7a97")),c=e(a("3274")),s={components:{barTitle:n.default},data:function(){return{title:"支付成功",introduce:"平台已收到您的钱款，已通知卖家发货。平台会及时通知您的交易状态，请您关注。"}},onLoad:function(){},onReady:function(){c.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{}};i.default=s},"544e":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"7a97":function(t,i,a){"use strict";a.r(i);var e=a("544e"),n=a("1944");for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("29c9");var s=a("f0c5"),u=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"d67b7c4c",null,!1,e["a"],void 0);i["default"]=u.exports},"7b15":function(t,i,a){"use strict";var e=a("257b"),n=a.n(e);n.a},"9ff1":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-d67b7c4c]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-d67b7c4c]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-d67b7c4c]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-d67b7c4c]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-d67b7c4c]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-d67b7c4c]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-d67b7c4c]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},b4b9:function(t,i,a){"use strict";a.r(i);var e=a("3ca7"),n=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},b769:function(t,i,a){var e=a("9ff1");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f065").default;n("05b27fa5",e,!0,{sourceMap:!1,shadowMode:!1})}}]);