(window.webpackJsonp=window.webpackJsonp||[]).push([[21,12],{452:function(t,e,r){"use strict";var n=r(2),o=(r(43),r(58),r(220),r(11),r(5),r(13),r(52),r(136),r(10),r(12),r(17),r(18),r(14)),c=r(137),l=r(217);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},491:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(113),r(114)),c=r.n(o),l={name:"password-reset-mail",data:function(){return{user:{email:""}}},methods:{password_reset:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("http://pzi022022.studenti.sumit.sum.ba/backend/api/forgot-password",t.user).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},f=r(97),d=r(135),h=r.n(d),m=r(424),v=r(452),w=r(500),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.password_reset.apply(null,arguments)}}},[r("v-text-field",{attrs:{type:"email",name:"email",label:"E-mail",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),r("v-btn",{attrs:{type:"submit"}},[t._v("Posalji")])],1)}),[],!1,null,"214e8964",null);e.default=component.exports;h()(component,{VBtn:m.a,VForm:v.a,VTextField:w.a})},592:function(t,e,r){"use strict";r.r(e);var n={name:"forgot-password",auth:"guest"},o=r(97),c=r(135),l=r.n(c),f=r(445),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("password-reset-mail")],1)}),[],!1,null,"c959a93e",null);e.default=component.exports;l()(component,{PasswordResetMail:r(491).default}),l()(component,{VContainer:f.a})}}]);