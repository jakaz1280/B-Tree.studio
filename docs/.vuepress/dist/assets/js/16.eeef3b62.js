(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{228:function(t,s,i){"use strict";var n=i(2),e=i(85).trim;n({target:"String",proto:!0,forced:i(229)("trim")},{trim:function(){return e(this)}})},229:function(t,s,i){var n=i(3),e=i(86);t.exports=function(t){return n((function(){return!!e[t]()||"​᠎"!="​᠎"[t]()||e[t].name!==t}))}},242:function(t,s,i){},289:function(t,s,i){"use strict";var n=i(242);i.n(n).a},306:function(t,s,i){"use strict";i.r(s);i(43),i(23),i(61),i(139),i(228);var n={name:"BTreer",data:function(){return{BTreerId:"BTreerId"+this._uid,img_file:"",name:"",position:"",location:"",lang:"",qq:"",qqlink:""}},props:{data:{type:String,default:""}},methods:{},mounted:function(){var t=this.data.trim().split(/\s+/);this.name=t[0],this.img_file=t[1],this.position=t[2],this.location=t[3],this.lang=t[4].replace(/,/g," | "),this.qq=t[5],this.qqlink="http://wpa.qq.com/msgrd?v=3&uin="+this.qq+"&site=qq&menu=yes"}},e=(i(289),i(11)),r=Object(e.a)(n,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"BTreer",attrs:{id:t.BTreerId}},[i("div",{staticClass:"BTreer-img"},[i("p",[i("img",{attrs:{src:t.img_file,alt:t.name}})])]),t._v(" "),i("div",{staticClass:"BTreer-word"},[i("h3",[t._v(t._s(t.name))]),t._v(" "),i("p",[i("embed",{attrs:{src:"/assets/svg/briefcase.svg"}}),t._v("\n      "+t._s(t.position)+" @ B-Tree Design\n      Studio\n    ")]),t._v(" "),i("p",[i("embed",{attrs:{src:"/assets/svg/map-pin.svg"}}),t._v("\n      "+t._s(t.location)+"\n    ")]),t._v(" "),i("p",[i("embed",{attrs:{src:"/assets/svg/globe.svg"}}),t._v("\n      "+t._s(t.lang)+"\n    ")]),t._v(" "),i("p",[i("a",{attrs:{href:t.qqlink,target:"_blank"}},[i("i",{staticClass:"fab fa-qq"}),t._v("\n        "+t._s(t.qq)+"\n        "),i("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[i("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),i("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);