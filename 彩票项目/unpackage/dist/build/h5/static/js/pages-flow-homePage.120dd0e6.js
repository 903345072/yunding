(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-homePage","components-zaiui-common-basics-orderdetail"],{"0e5b":function(t,i,e){t.exports=e.p+"static/img/bjdc.b529018a.png"},"161a":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=a},"22d9":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},"234e":function(t,i,e){"use strict";e.r(i);var a=e("8f72"),n=e("508d");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);var o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"c444d668",null,!1,a["a"],void 0);i["default"]=c.exports},"2cc6":function(t,i,e){t.exports=e.p+"static/img/jczq.eacea4f2.png"},"508d":function(t,i,e){"use strict";e.r(i);var a=e("b16c"),n=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},"69af":function(t,i,e){"use strict";e.r(i);var a=e("161a"),n=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},"6abc":function(t,i,e){"use strict";e.r(i);var a=e("a005"),n=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},"6d5e":function(t,i,e){"use strict";e.r(i);var a=e("867c"),n=e("6abc");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);var o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"7fa02b7b",null,!1,a["a"],void 0);i["default"]=c.exports},7629:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"802c":function(t,i,e){"use strict";var a=e("80cf"),n=e.n(a);n.a},"80cf":function(t,i,e){var a=e("22d9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("1071c9a4",a,!0,{sourceMap:!1,shadowMode:!1})},"867c":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",["foot"==t.type?a("v-uni-image",{style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:e("2cc6")}}):t._e(),"basket"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:e("cfe2")}}):t._e(),"bd"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:e("0e5b")}}):t._e(),"pl3"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:e("ba95")}}):t._e(),"renjiu"==t.type||"sfc"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:e("efd7")}}):t._e()],1)],1)},n=[]},"8f72":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0,opacity:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("他的主页")])],2),e("v-uni-view",{staticStyle:{position:"fixed",left:"40rpx",top:"40rpx","z-index":"99999999",display:"flex"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack()}}},[e("v-uni-view",{staticClass:"cuIcon-back",staticStyle:{"font-size":"35rpx",color:"white"}})],1),e("v-uni-view",{staticStyle:{position:"fixed",top:"40rpx","z-index":"99999",display:"flex","justify-content":"center",width:"100%"}},[e("v-uni-view",{staticStyle:{color:"white","font-weight":"bold","font-size":"32rpx"}},[t._v("Ta的主页")])],1),e("v-uni-view",{staticStyle:{background:"url(../../static/img/homePage_bg.png) no-repeat 0 0/100% auto,#f9f9f9",position:"absolute",left:"0",top:"0",right:"0",height:"288rpx",width:"100%"}}),t.data?e("v-uni-view",[e("v-uni-view",{staticStyle:{background:"white",width:"94%",height:"170rpx",position:"relative","margin-left":"3%","border-radius":"20rpx","margin-top":"70rpx"}},[e("v-uni-view",{staticStyle:{display:"flex","align-items":"center",position:"absolute",top:"-60rpx",left:"40rpx"}},[e("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[e("v-uni-image",{staticStyle:{width:"110rpx",height:"110rpx","border-radius":"110rpx"},attrs:{src:t.config.config.url+t.data.avatar}})],1),e("v-uni-view",{staticStyle:{"z-index":"99999","font-size":"30rpx"}},[e("v-uni-view",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"20rpx"}},[e("v-uni-text",{staticStyle:{color:"white"}},[t._v(t._s(t.data.real_name))]),e("v-uni-view",{staticStyle:{background:"white",color:"#3192ff",height:"40rpx","line-height":"40rpx","text-align":"center",padding:"0 30rpx","margin-left":"20rpx","border-radius":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.guanzhu(t.data.uid)}}},[t._v(t._s(0==t.data.is_guanzhu?"关注":"取消关注"))])],1),e("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[e("v-uni-view",[t._v("粉丝"+t._s(t.data.fans_count))]),e("v-uni-view",{staticStyle:{height:"20rpx",width:"1px","border-left":"1px solid #000000",margin:"0 30rpx"}}),e("v-uni-view",[t._v("发单"+t._s(t.data.send_count))])],1)],1)],1),e("v-uni-view",{staticStyle:{position:"absolute",bottom:"20rpx",left:"20rpx","font-size":"26rpx"}},[t._v("Ta没有留下任何介绍")])],1),e("v-uni-view",{staticStyle:{width:"94%","margin-left":"3%",background:"white",display:"flex","align-items":"center","justify-content":"space-around","margin-top":"20rpx",padding:"25rpx 0rpx","border-radius":"20rpx"}},[e("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[e("v-uni-view",{staticStyle:{color:"#f53629","font-weight":"bold"}},[t._v(t._s(t.data.total_award.toFixed(2)))]),e("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[t._v("累计奖金")])],1),e("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[e("v-uni-view",{staticStyle:{color:"#f53629","font-weight":"bold"}},[t._v(t._s(t.data.profit_rate)+"%")]),e("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[t._v("7日盈利")])],1),e("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[e("v-uni-view",{staticStyle:{color:"#f53629","font-weight":"bold"}},[t._v(t._s(t.data.seven_target))]),e("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[t._v("7日命中")])],1)],1),e("v-uni-view",{staticStyle:{width:"94%","margin-left":"3%",background:"white","border-radius":"20rpx","margin-top":"20rpx",padding:"20rpx 20rpx"}},[e("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[e("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[e("v-uni-view",{staticStyle:{height:"30rpx","border-right":"8rpx solid #3192FF"}}),e("v-uni-view",[t._v("近5场战绩")])],1),t.data.fives.length>0?e("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},t._l(t.data.fives,(function(i,a){return e("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[0==i?e("v-uni-view",{staticStyle:{background:"#979797",color:"white",height:"40rpx",width:"40rpx","line-height":"40rpx","text-align":"center","border-radius":"40rpx","font-size":"20rpx"}},[t._v("黑")]):t._e(),1==i?e("v-uni-view",{staticStyle:{background:"#ff5359",color:"white",height:"40rpx",width:"40rpx","line-height":"40rpx","text-align":"center","border-radius":"40rpx","font-size":"20rpx"}},[t._v("红")]):t._e(),a<t.data.fives.length-1?e("v-uni-view",{staticStyle:{width:"30rpx","border-top":"2rpx solid #979797"}}):t._e()],1)})),1):t._e(),0==t.data.fives.length?e("v-uni-view",[t._v("暂无数据")]):t._e()],1),t.data.printed_orders.length>0?e("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},t._l(t.data.printed_orders,(function(i,a){return e("v-uni-view",{style:{"border-bottom":a<t.data.printed_orders.length-1?"1px solid #EEEEEE":null,margin:"30rpx 0",padding:"20rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goFlowDetail(i.id)}}},[e("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[e("v-uni-view",{staticStyle:{display:"flex"}},[e("gameImg",{attrs:{width:40,height:40,type:i.type}}),e("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(i.en_type))])],1),e("v-uni-view",[t._v(t._s(i.order_time))])],1),e("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between","margin-top":"15rpx"}},[0==i.state&&1==i.can_flow?e("v-uni-view",{staticStyle:{color:"white","background-color":"#3192ff",padding:"8rpx 30rpx","font-size":"22rpx","border-radius":"10rpx"}},[t._v("立即跟单")]):t._e(),1==i.state?e("v-uni-view",{staticStyle:{color:"#979797","background-color":"#f3f3f3",padding:"8rpx 30rpx","font-size":"22rpx","border-radius":"10rpx"}},[t._v("未中奖")]):t._e(),0==i.state&&0==i.can_flow?e("v-uni-view",{staticStyle:{color:"#979797","background-color":"#f3f3f3",padding:"8rpx 30rpx","font-size":"22rpx","border-radius":"10rpx"}},[t._v("未开奖")]):t._e(),2==i.state||3==i.state?e("v-uni-view",{staticStyle:{color:"white","background-color":"#ff5359",padding:"8rpx 30rpx","font-size":"22rpx","border-radius":"10rpx"}},[t._v("中奖"+t._s(i.award_money))]):t._e(),e("v-uni-view",[e("v-uni-text",[t._v("自购:"),e("span",{staticStyle:{color:"#ff5359"}},[t._v(t._s(i.amount))])]),t._v("元"),e("v-uni-text",{staticStyle:{"margin-left":"20rpx"}},[t._v("跟单:"),e("span",{staticStyle:{color:"#ff5359"}},[t._v(t._s(i.flow_count))]),t._v("人")])],1)],1)],1)})),1):t._e(),0==t.data.printed_orders.length?e("v-uni-view",{staticStyle:{"text-align":"center","min-height":"10vh","margin-top":"40rpx"}},[t._v("暂无数据")]):t._e()],1)],1):t._e()],1)},n=[]},a005:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={name:"gameImg",props:{width:null,height:null,type:null}}},b0cc:function(t,i,e){"use strict";e.r(i);var a=e("7629"),n=e("69af");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("802c");var o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"1f1d0f19",null,!1,a["a"],void 0);i["default"]=c.exports},b16c:function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("b0cc")),r=a(e("b8ab")),o=a(e("6d5e")),c={name:"homePage",components:{barTitle:n.default,gameImg:o.default},data:function(){return{config:"",data:""}},created:function(){this.config=r.default},onLoad:function(t){var i=this,e=t.uid,a={uid:e};this.$dashen.getHomePage(a).then((function(t){i.data=t.data}))},methods:{goFlowDetail:function(t){uni.navigateTo({url:"/pages/flow/flowDetail?id="+t})},guanzhu:function(t){var i=this,e={uid:t};this.$dashen.guanzhu(e).then((function(t){uni.showToast({title:"操作成功"}),i.data.is_guanzhu=0==i.data.is_guanzhu?1:0}))},goBack:function(){uni.navigateBack()}}};i.default=c},ba95:function(t,i,e){t.exports=e.p+"static/img/pl3.d66cc098.png"},cfe2:function(t,i,e){t.exports=e.p+"static/img/jclq.8aac4248.png"},efd7:function(t,i,e){t.exports=e.p+"static/img/renjiu.71c1eb9c.png"}}]);