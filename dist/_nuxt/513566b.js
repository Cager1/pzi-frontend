(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{490:function(e,t,n){"use strict";n.r(t);var o=n(30),r=(n(113),n(29),n(219),n(114),n(92));Object(r.d)("eager");var c={components:{ValidationObserver:r.a,ValidationProvider:r.b},name:"roles-table",data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Uloga",value:"name",align:"start"},{text:"Korisnika",value:"amount"},{text:"Actions",value:"actions",sortable:!1}],items:[],editedIndex:-1,editedName:"",editedItem:{name:"",amount:0},defaultItem:{name:"",amount:0},snackbar:!1,timeout:2e3,message:"",color:""}},mounted:function(){this.getRoles()},computed:{formTitle:function(){return-1===this.editedIndex?"Dodaj ulogu":"Uredi ulogu"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{getRoles:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.items=[],n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=4,e.$axios.$get("/admin/roles",n).then((function(t){for(var n=t,i=0;i<n.length;i++){var o={name:n[i].name,amount:0};e.items.push(o)}})).catch((function(e){console.log(e)}));case 4:return t.next=6,e.$axios.$get("/admin/users",n).then((function(t){console.log(t);for(var n=t[0],i=0;i<n.length;i++)for(var o=0;o<e.items.length;o++)n[i].role.name===e.items[o].name&&e.items[o].amount++})).catch((function(e){console.log(e)}));case 6:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=3,e.$axios.$delete("/admin/roles/"+e.items[e.editedIndex].name,n).then((function(t){console.log(t),e.message=t.message,e.color="success",e.snackbar=!0,e.getRoles()})).catch((function(t){console.log(t),e.message=t.message,e.color="error",e.snackbar=!0}));case 3:e.items.splice(e.editedIndex,1),e.closeDelete();case 5:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=3,e.$axios.$post("/admin/roles",e.editedItem,n).then((function(t){e.editedIndex>-1?Object.assign(e.items[e.editedIndex],e.editedItem):e.items.push(e.editedItem),e.message=t.message,e.color="success",e.snackbar=!0,e.getRoles(),console.log(t)})).catch((function(t){e.message=t.message,e.color="error",e.snackbar=!0,console.log(t)}));case 3:e.close();case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedName=e.name,this.editedItem=Object.assign({},e),this.dialog=!0},update:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=3,e.$axios.$put("/admin/roles/"+e.editedName,e.editedItem,n).then((function(t){console.log(t),e.editedIndex>-1?Object.assign(e.items[e.editedIndex],e.editedItem):e.items.push(e.editedItem),e.message=t.message,e.color="success",e.snackbar=!0})).catch((function(t){console.log(t),e.message=t.message,e.color="success",e.snackbar=!0}));case 3:e.close();case 4:case"end":return t.stop()}}),t)})))()}}},l=n(97),d=n(135),m=n.n(d),v=n(424),f=n(208),h=n(112),x=n(438),k=n(445),_=n(583),I=n(594),V=n(426),w=n(423),O=n(442),$=n(452),D=n(443),y=n(494),C=n(73),R=n(450),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":5},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Uloge")]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),o),[e._v("\n              Nova Uloga\n            ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("ValidationObserver",{ref:"observer"},[n("ValidationProvider",{attrs:{name:"name",rules:"required|max:100"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-text-field",{attrs:{counter:100,"error-messages":o,required:"",label:"Ime Uloge"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})]}}])})],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                Odustani\n              ")]),e._v(" "),"Dodaj ulogu"===e.formTitle?n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                Spremi\n              ")]):e._e(),e._v(" "),"Uredi ulogu"===e.formTitle?n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.update}},[e._v("\n                Spremi\n              ")]):e._e()],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:e.getRoles}},[e._v("\n        Reset\n      ")])]},proxy:!0}])}),e._v(" "),n("v-snackbar",{attrs:{outlined:"","multi-line":"",color:e.color,timeout:e.timeout,"content-class":"text-center"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.message)+"\n  ")])],1)}),[],!1,null,"0608bacd",null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:x.a,VContainer:k.a,VDataTable:_.a,VDialog:I.a,VDivider:V.a,VIcon:w.a,VRow:O.a,VSnackbar:$.a,VSpacer:D.a,VTextField:y.a,VToolbar:C.a,VToolbarTitle:R.a})}}]);