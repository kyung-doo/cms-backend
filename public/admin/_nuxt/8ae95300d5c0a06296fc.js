(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{794:function(t,s,e){"use strict";e.r(s);e(39);var r,o=e(3),a={name:"Login",layout:"clean",fetch:(r=e.n(o)()(regeneratorRuntime.mark(function t(s){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.store,r=s.redirect,s.params,t.prev=1,t.next=4,e.dispatch({type:"cookieInit"});case 4:e.state.auth&&r("/"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}},t,this,[[1,7]])})),function(t){return r.apply(this,arguments)}),data:function(){return{form:{userid:"",password:""}}},methods:{onSubmit:function(t){var s=this;return t.preventDefault(),""===this.form.userid?(alert("아이디를 입력하세요."),void this.$refs.userid.focus()):""===this.form.password?(this.$refs.password.focus(),void alert("패스워드를 입력하세요.")):void this.$store.dispatch({type:"login",data:this.form}).then(function(){alert("관리자님 로그인 되었습니다."),s.$router.push("/")}).catch(function(t){alert(t.message)})}}},i=e(0),n=Object(i.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app flex-row align-items-center"},[e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{md:"6"}},[e("b-card-group",[e("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[e("b-card-body",[e("b-form",{on:{submit:t.onSubmit}},[e("h1",[t._v("Login")]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),t._v(" "),e("b-input-group",{staticClass:"mb-3"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-user"})])],1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.userid,expression:"form.userid"}],ref:"userid",staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.form.userid},on:{input:function(s){s.target.composing||t.$set(t.form,"userid",s.target.value)}}})],1),t._v(" "),e("b-input-group",{staticClass:"mb-4"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-lock"})])],1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],ref:"password",staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}})],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-button",{staticClass:"px-4",attrs:{type:"submit",variant:"primary"}},[t._v("Login")])],1),t._v(" "),e("b-col",{staticClass:"text-right",attrs:{cols:"6"}})],1)],1)],1)],1)],1)],1)],1)],1)])},[],!1,null,null,null);n.options.__file="login.vue";s.default=n.exports}}]);