(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-zaiui-common-basics-orderdetail~pages-order-orderdetail~pages-order-orderlist~pages-user-~86c58a53"],{"015e":function(e,t,i){"use strict";i.r(t);var n=i("a3e4"),r=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=r.a},"03e8":function(e,t,i){"use strict";i.r(t);var n=i("3f6a"),r=i("a01d");for(var l in r)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(l);var a=i("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"2ad464cd",null,!1,n["a"],void 0);t["default"]=c.exports},"1dde5":function(e,t,i){"use strict";i.r(t);var n=i("1deb"),r=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=r.a},"1deb":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}}},"276c":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),4!=e.orderdetail.mode?i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")])],1):e._e()],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"23%","text-align":"center",color:"grey"}},[e._v("期号")]),i("v-uni-view",{staticStyle:{width:"53%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"28%","text-align":"center",color:"grey"}},[e._v("投注方式")]),i("v-uni-view",{staticStyle:{width:"28%","text-align":"center",color:"grey"}},[e._v("赛果")])],1),i("v-uni-view",{style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"28%","text-align":"center",color:"black"}},[e._v(e._s(e.orderdetail.qh))]),i("v-uni-view",{staticStyle:{width:"53%","font-size":"24rpx"}},[i("v-uni-view",{style:{"text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:1==e.orderdetail.order_details[0]["bet_content"]["ret"]?"red":"black"}},[e._v(e._s(e.orderdetail.order_details[0]["bet_content"]["content"]))])],1)],1),i("v-uni-view",{staticStyle:{width:"28%","text-align":"center",color:"black"}},[1==e.orderdetail.pl_type?i("v-uni-text",[e._v("直选")]):e._e(),2==e.orderdetail.pl_type?i("v-uni-text",[e._v("组三")]):e._e(),3==e.orderdetail.pl_type?i("v-uni-text",[e._v("组六")]):e._e()],1),i("v-uni-view",{style:{width:"33%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(e.orderdetail.order_details[0]["bet_content"]["caiguo"]))])],1)],1)],1)],1)},r=[]},"3a51":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticStyle:{position:"relative",left:"0",right:"0",height:"400rpx","background-image":"linear-gradient(90deg, #6bb4f9, #f70af4)"}},[0==e.orderdetail.flag?i("v-uni-view",{staticClass:"cuIcon-close",staticStyle:{position:"absolute",left:"30rpx",top:"30rpx","font-size":"40rpx",color:"white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close()}}}):e._e(),1==e.orderdetail.flag?i("v-uni-view",{staticClass:"cuIcon-back",staticStyle:{position:"absolute",left:"30rpx",top:"30rpx","font-size":"40rpx",color:"white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}}):e._e(),i("v-uni-view",{staticStyle:{"text-align":"center",padding:"30rpx 0","font-size":"35rpx",color:"white"}},[e._v("订单详情")]),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",width:"100%",color:"white"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.award_money>0?e.orderdetail.award_money:"暂无"))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("中奖金额")])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.en_state))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("订单状态")])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.amount))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("投注金额")])],1)],1)],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","margin-top":"-150rpx","z-index":"999999999",position:"relative"}},[i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx"}},["foot"==e.orderdetail.type?i("footdetail",{attrs:{orderdetail:e.orderdetail}}):e._e(),"basket"==e.orderdetail.type?i("basketdetail",{attrs:{orderdetail:e.orderdetail}}):e._e(),"pl3"==e.orderdetail.type?i("pl3detail",{attrs:{orderdetail:e.orderdetail}}):e._e(),"bd"==e.orderdetail.type?i("bddetail",{attrs:{orderdetail:e.orderdetail}}):e._e(),"sfc"==e.orderdetail.type||"renjiu"==e.orderdetail.type?i("sfcdetail",{attrs:{orderdetail:e.orderdetail}}):e._e()],1),4==e.orderdetail.mode?i("v-uni-view",[i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center",width:"680rpx"}},[i("v-uni-view",{staticStyle:{width:"160rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[e._v("过关")]),i("v-uni-view",{staticStyle:{width:"260rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[e._v("单注组合")]),i("v-uni-view",{staticStyle:{width:"260rpx","text-align":"center",height:"60rpx","line-height":"60rpx"}},[e._v("注数分布")])],1)],1),i("v-uni-view",{staticStyle:{width:"100%","text-align":"center",display:"flex","align-items":"center","flex-direction":"column","margin-bottom":"20rpx"}},[i("v-uni-view",{staticStyle:{width:"680rpx",border:"1px solid grey","border-top":"none","border-bottom":"none"}},e._l(e.orderdetail.dd,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{"border-bottom":"1px solid grey"}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticStyle:{width:"160rpx",height:"120rpx","line-height":"120rpx"}},[e._v(e._s(1!=t.bet_content.length?t.bet_content.length+"串1":"单关"))]),i("v-uni-view",{staticStyle:{width:"260rpx",height:"120rpx",display:"flex","flex-direction":"column","justify-content":"space-around","align-items":"center","border-left":"1px solid grey","border-right":"1px solid grey"}},[e._l(t.bet_content,(function(t,n){return n<2?i("v-uni-view",{key:n,staticStyle:{"font-size":"22rpx"}},[e._v(e._s(t["h_name"])+"|"+e._s(t["name"])+"("+e._s(t["pl"])+")")]):e._e()})),i("v-uni-view",{staticClass:"cuIcon-unfold",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeDisplay(n)}}})],2),i("v-uni-view",{staticStyle:{width:"260rpx",height:"120rpx","line-height":"120rpx",display:"flex","align-items":"center","text-align":"center","justify-content":"center"}},[e._v(e._s(t["num"]))])],1),i("v-uni-view",{ref:n,refInFor:!0,staticStyle:{display:"none"}},[i("v-uni-view",{staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center","background-color":"#f4ede4","font-weight":"bold"}},[i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("主队")]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("客队")]),i("v-uni-view",{staticStyle:{"text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("投注内容")])],1),e._l(t.bet_content,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center","background-color":"#f4ede4"}},[i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["week"]))]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["h_name"]))]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["a_name"]))]),i("v-uni-view",{staticStyle:{"text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["name"])+"("+e._s(t["pl"])+")")])],1)}))],2)],1)})),1)],1)],1):e._e(),i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx",color:"grey","line-height":"60rpx",margin:"30rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",{staticStyle:{color:"#000000","font-size":"32rpx"}},[e._v("订单信息")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("订单编号")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.order_no))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("付款时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.order_time))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("出票时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.tick_time))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("截止时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.stop_time))])],1)],1),i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx",color:"grey","line-height":"60rpx",position:"relative","margin-bottom":"140rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",{staticStyle:{color:"#000000","font-size":"32rpx"}},[e._v("彩票照片")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.config.config.url+e.orderdetail.order_pic}})],1)],1)],1)],1)},r=[]},"3f6a":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.chuan))])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("主队/客队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果(全/半)")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["game_no"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["h_name"])+"("),t[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[e._v("+"+e._s(t[0]["p_goal"]))]):e._e(),t[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[e._v(e._s(t[0]["p_goal"]))]):e._e(),e._v(")")],1),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["a_name"]))])],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{"text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(t)?"red":"black"}},[e._v(e._s(t.name))]),i("v-uni-view",[e._v("("+e._s(t.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))]),i("v-uni-view",[e._v("半:"+e._s(t[0]["bcbf"]?t[0]["bcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},r=[]},"4d86":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.chuan))])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("主队/客队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果(全/半)")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["h_name"])+"("),t[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[e._v("+"+e._s(t[0]["p_goal"]))]):e._e(),t[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[e._v(e._s(t[0]["p_goal"]))]):e._e(),e._v(")")],1),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["a_name"]))])],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{"text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(t)?"red":"black"}},[e._v(e._s(t.name))]),i("v-uni-view",[e._v("("+e._s(t.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))]),i("v-uni-view",[e._v("半:"+e._s(t[0]["bcbf"]?t[0]["bcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},r=[]},7327:function(e,t,i){"use strict";i.r(t);var n=i("4d86"),r=i("7cc5");for(var l in r)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(l);var a=i("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"0a581963",null,!1,n["a"],void 0);t["default"]=c.exports},"7cc5":function(e,t,i){"use strict";i.r(t);var n=i("d151"),r=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=r.a},8543:function(e,t,i){"use strict";i.r(t);var n=i("91f5"),r=i("dcdf");for(var l in r)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(l);var a=i("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"420ef20f",null,!1,n["a"],void 0);t["default"]=c.exports},"91f5":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),4!=e.orderdetail.mode?i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.chuan))])],1):e._e()],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("客队/主队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["a_name"]))]),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["h_name"])+"("),t[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[e._v("+"+e._s(t[0]["p_goal"]))]):e._e(),t[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[e._v(e._s(t[0]["p_goal"]))]):e._e(),e._v(")")],1)],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(n,r){return i("v-uni-view",{key:r,style:{"text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(n)?"red":"black"}},[e._v(e._s(n.name)),i("v-uni-text",{staticStyle:{color:"#007AFF"}},[e._v(e._s(3==n.met.substr(0,1)?"("+t[0]["dxf"]+")":""))])],1),i("v-uni-view",[e._v("("+e._s(n.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},r=[]},a01d:function(e,t,i){"use strict";i.r(t);var n=i("dbc4"),r=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=r.a},a3e4:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={name:"pl3detail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}}},bda6:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#005500",display:"inline-block",padding:"4rpx 16rpx","border-radius":"10rpx","margin-right":"10rpx"}},[e._v(e._s(e.orderdetail.order_detail_[0][0]["qh"])+"期")]),i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.en_type))])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("主队/客队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果(全)")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["num"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["h_name"]))]),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["a_name"]))])],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{"text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(t)?"red":"black"}},[e._v(e._s(t.name))])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},r=[]},c439:function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("e25e");var r=n(i("7327")),l=n(i("8543")),a=n(i("f2fd")),c=n(i("03e8")),o=n(i("b8ab")),d=n(i("b0cc")),u=n(i("f757")),s={name:"orderdetail",components:{footdetail:r.default,basketdetail:l.default,barTitle:d.default,pl3detail:a.default,bddetail:c.default,sfcdetail:u.default},computed:{scrollH:function(){var e=uni.getSystemInfoSync(),t=e.windowWidth,i=750/t,n=parseInt(e.windowHeight*i);return n}},data:function(){return{order:{},config:"",pageHeight:0}},props:{orderdetail:null},created:function(){this.config=o.default},onLoad:function(e){},methods:{changeDisplay:function(e){this.$refs[e][0].$el.style.display="none"!=this.$refs[e][0].$el.style.display?"none":"block"},close:function(){this.$emit("closeWindow")},goBack:function(){uni.reLaunch({url:"/pages/app/index"})}}};t.default=s},c8e1:function(e,t,i){"use strict";i.r(t);var n=i("c439"),r=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=r.a},d151:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}}},d439:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}}},dbc4:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}}},dcdf:function(e,t,i){"use strict";i.r(t);var n=i("d439"),r=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=r.a},e1d7:function(e,t,i){"use strict";i.r(t);var n=i("3a51"),r=i("c8e1");for(var l in r)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(l);var a=i("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=c.exports},f2fd:function(e,t,i){"use strict";i.r(t);var n=i("276c"),r=i("015e");for(var l in r)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(l);var a=i("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"3ca93a66",null,!1,n["a"],void 0);t["default"]=c.exports},f757:function(e,t,i){"use strict";i.r(t);var n=i("bda6"),r=i("1dde5");for(var l in r)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(l);var a=i("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"9c672648",null,!1,n["a"],void 0);t["default"]=c.exports}}]);