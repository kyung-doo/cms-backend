(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{731:function(e,t,n){var a=n(738);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(6).default)("4b63ffce",a,!0,{})},737:function(e,t,n){"use strict";var a=n(731);n.n(a).a},738:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"\n.memeber-page th{background:#fff\n}",""])},779:function(e,t,n){"use strict";n.r(t);n(37);var a,s=n(4),r={layout:"default",fetch:(a=n.n(s)()(regeneratorRuntime.mark(function e(t){var n,a,s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,a=t.store,s=t.redirect,t.params,e.prev=1,e.next=4,a.dispatch({type:"cookieInit"});case 4:return a.state.auth||s("/login"),e.next=7,n.$axios({method:"get",url:"/api/admin/member/",headers:{"x-access-token":a.state.auth.accessToken}});case 7:(r=e.sent).data.success?a.commit("setMembers",r.data.body):s("/login"),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}},e,this,[[1,11]])})),function(e){return a.apply(this,arguments)}),data:function(){return{tableFields:[{key:"index",label:"번호"},{key:"userid",label:"아이디"},{key:"username",label:"이름"},{key:"nickname",label:"닉네임"},{key:"email",label:"이메일"},{key:"point",label:"포인트"},{key:"denied",label:"승인"}]}},components:{}},i=(n(737),n(0)),c=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{},[n("div",{staticClass:"memeber-page"},[n("b-table",{staticClass:"text-center",attrs:{striped:"",hover:"",fields:e.tableFields,items:e.$store.state.members},scopedSlots:e._u([{key:"index",fn:function(t){return[e._v("\n        "+e._s(t.index+1)+"\n      ")]}},{key:"denied",fn:function(t){return[e._v("\n        "+e._s(t.item.denied?"차단":"승인")+"\n      ")]}}])}),e._v(" "),n("div",{staticClass:"align-right"},[n("b-button",{attrs:{type:"button",variant:"success"},on:{click:function(t){e.$router.push("/member/write")}}},[e._v("회원추가")])],1)],1)])},[],!1,null,null,null);c.options.__file="index.vue";t.default=c.exports}}]);