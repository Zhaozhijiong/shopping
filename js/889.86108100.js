"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[889],{889:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("van-nav-bar",{attrs:{title:"商品评价","left-text":"返回","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("div",{staticClass:"comment-list"},t._l(t.commentList,(function(e){return s("div",{key:e.content_id,staticClass:"comment-item"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:t.defaultImg,alt:""}}),s("div",{staticClass:"name"},[t._v(t._s("hhh"))]),s("van-rate",{attrs:{size:16,value:e.sorce/2,color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),s("div",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")]),s("div",{staticClass:"time"},[t._v(" "+t._s(e.content_time)+" ")])])})),0)],1)},o=[],a=e(7867),i=e(7767),r={name:"commentsIndex",data(){return{commentList:[],defaultImg:i,page:1}},created(){this.getCommentsList()},methods:{async getCommentsList(){const{data:{list:t}}=await(0,a.DB)(this.goodsId,this.page);this.commentList=t.data}},computed:{goodsId(){return this.$route.params.id}}},c=r,d=e(1656),m=(0,d.A)(c,n,o,!1,null,"14d40032",null),l=m.exports},7867:function(t,s,e){e.d(s,{B7:function(){return o},DB:function(){return r},My:function(){return i},Yv:function(){return a}});var n=e(5720);const o=t=>n.A.get("/goods/detail",{params:{goodsId:t}}),a=(t,s)=>n.A.get("/comment/listRows",{params:{goodsId:t,limit:s}}),i=t=>n.A.get("/comment/total",{params:{goodsId:t}}),r=(t,s)=>n.A.get("/comment/list",{params:{scoreType:-1,goodsId:t,page:s}})}}]);
//# sourceMappingURL=889.86108100.js.map