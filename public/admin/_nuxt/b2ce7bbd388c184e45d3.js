(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{779:function(t,s,o){"use strict";o.r(s);var r={name:"Login",layout:"clean",fetch:function(t){var s=t.store,o=t.redirect;t.params;s.dispatch({type:"cookieInit"}).then(function(){s.state.auth&&o("/")})},data:function(){return{form:{userid:"",password:""}}},methods:{onSubmit:function(t){var s=this;return t.preventDefault(),""===this.form.userid?(alert("아이디를 입력하세요."),void this.$refs.userid.focus()):""===this.form.password?(this.$refs.password.focus(),void alert("패스워드를 입력하세요.")):void this.$store.dispatch({type:"login",data:this.form}).then(function(){alert("관리자님 로그인 되었습니다."),s.$router.push("/")}).catch(function(t){alert(t.message)})}}},e=o(0),a=Object(e.a)(r,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"app flex-row align-items-center"},[o("div",{staticClass:"container"},[o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{md:"6"}},[o("b-card-group",[o("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[o("b-card-body",[o("b-form",{on:{submit:t.onSubmit}},[o("h1",[t._v("Login")]),t._v(" "),o("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),t._v(" "),o("b-input-group",{staticClass:"mb-3"},[o("b-input-group-prepend",[o("b-input-group-text",[o("i",{staticClass:"icon-user"})])],1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.userid,expression:"form.userid"}],ref:"userid",staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.form.userid},on:{input:function(s){s.target.composing||t.$set(t.form,"userid",s.target.value)}}})],1),t._v(" "),o("b-input-group",{staticClass:"mb-4"},[o("b-input-group-prepend",[o("b-input-group-text",[o("i",{staticClass:"icon-lock"})])],1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],ref:"password",staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}})],1),t._v(" "),o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("b-button",{staticClass:"px-4",attrs:{type:"submit",variant:"primary"}},[t._v("Login")])],1),t._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"6"}})],1)],1)],1)],1)],1)],1)],1)],1)])},[],!1,null,null,null);a.options.__file="login.vue";s.default=a.exports}}]);