(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{495:function(e,t,r){"use strict";r.r(t);var o=r(30),n=(r(57),r(12),r(67),r(113),r(114)),c=r.n(n),l=r(92);Object(l.d)("eager");var v={name:"job-form",components:{ValidationObserver:l.a,ValidationProvider:l.b},data:function(){return{config:{},job:{title:"",description:"",selection:[],user_id:0},services:[],snackbar:!1,timeout:2e3,message:"",color:"success"}},watch:{},mounted:function(){this.job.user_id=this.$auth.$state.user.id,console.log(this.job),this.config={headers:{Authorization:this.$auth.strategy.token.get()}},this.getServices()},methods:{getServices:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("http://pzi022022.studenti.sumit.sum.ba/backend/api/services",e.config).then((function(t){e.services=t.data})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},publishJob:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.job.service_id=37,t.next=3,c.a.post("http://pzi022022.studenti.sumit.sum.ba/backend/api/job",e.job,e.config).then((function(t){console.log(t),e.message="Posao uspiješno objavljen.",e.color="success",e.snackbar=!0,e.clear()})).catch((function(t){for(var r in console.log(t.response),e.errors=t.response.data.errors,console.log(e.errors),e.errors)e.errors[r][0]=e.errors[r][0].charAt(0).toUpperCase()+e.errors[r][0].slice(1);for(var o in e.errors)e.$refs.observer.errors[o].push(e.errors[o][0]);e.message="Objavljivanje posla nauspjesno",e.color="error",e.snackbar=!0}));case 3:case"end":return t.stop()}}),t)})))()},clear:function(){this.job.title="",this.job.description="",this.job.selection=[]}}},d=r(97),m=r(135),f=r.n(m),h=r(424),j=r(208),k=r(112),_=r(452),x=r(454),w=r(500),V=r(590),O=r(606),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticStyle:{padding:"20px"},attrs:{elevation:"24",shaped:""}},[r("v-card-title",[e._v("Objavite Posao")]),e._v(" "),r("ValidationObserver",{ref:"observer"},[r("v-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.publishJob.apply(null,arguments)}}},[r("ValidationProvider",{attrs:{name:"name",rules:"required|max:100"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("v-text-field",{attrs:{counter:100,"error-messages":o,name:"name",label:"Naslov posla",required:""},model:{value:e.job.name,callback:function(t){e.$set(e.job,"name",t)},expression:"job.name"}})]}}])}),e._v(" "),r("ValidationProvider",{attrs:{name:"description",rules:"required|max:1000"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("v-textarea",{attrs:{name:"description",counter:1e3,"error-messages":o,label:"Opis posla",hint:"Ovdje opišite svoj posao"},model:{value:e.job.description,callback:function(t){e.$set(e.job,"description",t)},expression:"job.description"}})]}}])}),e._v(" "),[r("v-treeview",{attrs:{items:e.services,selectable:"",hoverable:"","item-key":"id","open-on-click":""},model:{value:e.job.selection,callback:function(t){e.$set(e.job,"selection",t)},expression:"job.selection"}})],e._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[e._v("\n        Objavi\n      ")]),e._v(" "),r("v-btn",{on:{click:e.clear}},[e._v("\n        Očisti\n      ")])],2)],1),e._v(" "),r("v-snackbar",{attrs:{outlined:"","multi-line":"",color:e.color,timeout:e.timeout,"content-class":"text-center"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.message)+"\n  ")])],1)}),[],!1,null,"ee2f3e18",null);t.default=component.exports;f()(component,{VBtn:h.a,VCard:j.a,VCardTitle:k.d,VForm:_.a,VSnackbar:x.a,VTextField:w.a,VTextarea:V.a,VTreeview:O.a})}}]);