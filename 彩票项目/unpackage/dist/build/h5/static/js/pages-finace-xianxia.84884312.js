(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finace-xianxia","components-zaiui-common-basics-orderdetail"],{"161a":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},"22d9":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"60b0":function(t,a,i){"use strict";var e=i("8921"),n=i.n(e);n.a},"69af":function(t,a,i){"use strict";i.r(a);var e=i("161a"),n=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},7629:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"802c":function(t,a,i){"use strict";var e=i("80cf"),n=i.n(e);n.a},"80cf":function(t,a,i){var e=i("22d9");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1071c9a4",e,!0,{sourceMap:!1,shadowMode:!1})},8921:function(t,a,i){var e=i("c85d");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("e25e5d7e",e,!0,{sourceMap:!1,shadowMode:!1})},"9dc1":function(t,a,i){"use strict";i.r(a);var e=i("c34d"),n=i("d997");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("60b0");var r=i("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"6818a102",null,!1,e["a"],void 0);a["default"]=c.exports},b0cc:function(t,a,i){"use strict";i.r(a);var e=i("7629"),n=i("69af");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("802c");var r=i("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"1f1d0f19",null,!1,e["a"],void 0);a["default"]=c.exports},c34d:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("线下支付")])],2),i("v-uni-view",{staticStyle:{"line-height":"80rpx",margin:"10rpx 30rpx"}},[i("v-uni-view",[i("v-uni-text",[t._v("支付金额")]),i("v-uni-text",{staticStyle:{color:"red","margin-left":"60rpx","font-size":"40rpx"}},[t._v(t._s(t.money)+"元")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",[t._v("收款二维码")]),i("v-uni-view",{staticStyle:{"margin-left":"100rpx"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previews(t.getSrc())}}},[i("v-uni-image",{staticStyle:{width:"300rpx",height:"300rpx"},attrs:{src:t.getSrc()}})],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#e8edee","box-shadow":"10px 0px 5px 0px rgba(0,0,0,0.2)",padding:"10rpx 20rpx","border-radius":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",[t._v("开户行")]),i("v-uni-view",{staticStyle:{"margin-left":"100rpx"}},[t._v(t._s(t.bank_name))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",{staticStyle:{"white-space":"nowrap"}},[t._v("卡号")]),i("v-uni-view",{staticStyle:{"margin-left":"100rpx","white-space":"nowrap"}},[t._v(t._s(t.bank_card))]),i("v-uni-button",{staticStyle:{"margin-left":"50rpx","font-size":"25rpx","white-space":"nowrap"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyqq()}}},[t._v("复制卡号")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",[t._v("持卡人")]),i("v-uni-view",{staticStyle:{"margin-left":"100rpx"}},[t._v(t._s(t.bank_user))])],1)],1),i("v-uni-button",{staticStyle:{width:"100%","text-align":"center",color:"black",padding:"10rpx 10rpx","margin-top":"20rpx",background:"yellow"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goKeFu()}}},[t._v("已完成支付")]),i("v-uni-view",[t._v("充值提示:扫码支付每天上午11:00-凌晨03:00实时到账")]),i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-text",[t._v("操作方法:")]),i("v-uni-text",{staticStyle:{color:"red"}},[t._v("点击图片->截图保存到相册->打开支付宝/微信扫一扫")])],1),i("v-uni-view",{staticStyle:{color:"blue"}},[t._v("支付成功后返回当前页面提交申请，方可到账。注:务必提交实际支付金额否则不能到账")])],1)],1)},n=[]},c85d:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".dd[data-v-6818a102]{display:inline-block;color:#000;padding:%?20?% 0;border:1px solid #eee;border-radius:%?20?%;width:23%;text-align:center;margin:%?20?% %?30?%;font-weight:700}.active[data-v-6818a102]{color:#007aff;border:1px solid #007aff}.zaiui-goods-details-box[data-v-6818a102]{position:relative;padding:%?27.27?% %?18.18?%}.zaiui-goods-details-box .cu-avatar[data-v-6818a102]{position:absolute;height:%?99.99?%;width:%?99.99?%;left:%?18.18?%}.zaiui-goods-details-box .goods-info-view[data-v-6818a102]{position:relative;padding-left:%?127.27?%;height:%?99.99?%;line-height:1.4}.zaiui-goods-details-box .goods-info-view .text-price[data-v-6818a102]{position:absolute;bottom:%?-9.09?%;right:0}.zaiui-pay-view[data-v-6818a102]{position:relative}.zaiui-pay-view .zaiui-pay-bar[data-v-6818a102]{position:relative;padding:%?18.18?%}.zaiui-pay-view .zaiui-pay-bar .cu-avatar[data-v-6818a102]{background-color:#fff;position:absolute;width:%?36.36?%;height:%?36.36?%;top:%?25.45?%}.zaiui-pay-view .zaiui-pay-bar .content[data-v-6818a102]{position:relative;left:%?50.9?%;width:calc(100% - %?127.27?%);line-height:1.8}.zaiui-pay-view .zaiui-pay-bar .content .cu-tag[data-v-6818a102]{position:relative;top:%?-3.63?%}.zaiui-pay-view .zaiui-pay-bar .action[data-v-6818a102]{position:absolute;right:%?21.81?%;top:%?40?%}.zaiui-pay-view .zaiui-pay-bar .action .zaiui-radio[data-v-6818a102]{-webkit-transform:scale(.9);transform:scale(.9)}.zaiui-pay-view .zaiui-pay-bar + .zaiui-pay-bar[data-v-6818a102]{border-top:%?2?% solid rgba(0,0,0,.1)}",""]),t.exports=a},cc0a:function(t,a,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("14d9");var n=e(i("b0cc")),o=e(i("b8ab")),r={name:"recharge",components:{barTitle:n.default},data:function(){return{cur_index:6,money:0,value:"",money_arr:[11,52,101,202,501,1001],checkAll:!0,radio:"alixianxia",bank_card:"",bank_name:"",bank_user:"",ewm:"",kefuurl:"",timer:""}},onLoad:function(t){var a=this;this.money=t.price,this.$api.getxianxia({}).then((function(t){a.bank_card=t.data.bank_card,a.bank_name=t.data.bank_name,a.bank_user=t.data.bank_user,a.ewm=t.data.ewm,a.kefuurl=t.data.kefuurl}))},methods:{previews:function(t){var a=[];a.push(t),uni.previewImage({current:0,urls:a,loop:!0})},touchEnd:function(){clearTimeout(this.timer)},touchStart:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout((function(){t.downloadIamge(t.qrcodeUrl64,"pic")}),1e3)},downloadIamge:function(t,a){var i=new Image;i.setAttribute("crossOrigin","anonymous"),i.onload=function(){var t=document.createElement("canvas");t.width=i.width,t.height=i.height;var e=t.getContext("2d");e.drawImage(i,0,0,i.width,i.height);var n=t.toDataURL("image/png"),o=document.createElement("a"),r=new MouseEvent("click");o.download=a||"photo",o.href=n,o.dispatchEvent(r)},i.src=t},goKeFu:function(){setTimeout((function(){uni.navigateBack({})}),300)},copyqq:function(){uni.setClipboardData({data:this.bank_card,success:function(){uni.showToast({title:"复制成功"})}})},getSrc:function(){return o.default.config.url+this.ewm},goWithdraw:function(){uni.navigateTo({url:"/pages/finace/withdraw"})},goBill:function(){uni.navigateTo({url:"/pages/finace/bill?uid="})},doRecharge:function(){this.radio,this.value;if(!this.value)return uni.showToast({title:"请选择充值金额",icon:"erro"}),!1;console.log(this.radio)},input:function(t){this.value=t.detail.value},change:function(t){this.cur_index=t,this.value=this.money_arr[t]},RadioChange:function(t){this.radio=t.detail.value},payBtnTap:function(){uni.navigateTo({url:"/pages/status/pay_status"})},payTap:function(t){this.radio=t}}};a.default=r},d997:function(t,a,i){"use strict";i.r(a);var e=i("cc0a"),n=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a}}]);