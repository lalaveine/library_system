(function(e){function a(a){for(var r,n,i=a[0],l=a[1],u=a[2],d=0,c=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&c.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(a);while(c.length)c.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],r=!0,i=1;i<t.length;i++){var l=t[i];0!==s[l]&&(r=!1)}r&&(o.splice(a--,1),e=n(n.s=t[0]))}return e}var r={},s={app:0},o=[];function n(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)n.d(t,r,function(a){return e[a]}.bind(null,r));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var u=0;u<i.length;u++)a(i[u]);var m=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},2310:function(e,a,t){},"3a7d":function(e,a,t){},4678:function(e,a,t){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var a=o(e);return t(a)}function o(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,a,t){"use strict";t.r(a);var r=t("2b0e"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"main"},[e._v(" "+e._s(e.data)+" "),t("Menu"),t("router-view")],1)},o=[],n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"menu"},[t("h2",[e._v("Menu")]),t("a-menu",{staticStyle:{width:"256px"},attrs:{"default-selected-keys":["1"],"open-keys":e.openKeys,mode:"vertical"},on:{"update:openKeys":function(a){e.openKeys=a},"update:open-keys":function(a){e.openKeys=a},click:e.handleClick}},[t("a-menu-item",{key:"1"},[t("router-link",{attrs:{to:"/"}},[e._v("Journal")])],1),t("a-menu-item",{key:"2"},[t("router-link",{attrs:{to:"/search"}},[e._v("Search data")])],1),t("a-menu-item",{key:"3"},[t("router-link",{attrs:{to:"/input"}},[e._v("Input data")])],1)],1)],1)},i=[],l=t("55f1"),u={components:{"a-menu":l["a"],"a-menu-item":l["a"].Item,"a-menuu-item-group":l["a"].ItemGroup}},m=u,d=(t("efa6"),t("2877")),c=Object(d["a"])(m,n,i,!1,null,null,null),p=c.exports,f=(t("202f"),t("8c4f")),b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-tabs",{attrs:{"default-active-key":"1"}},[t("a-tab-pane",{key:"1",attrs:{tab:"Book search"}},[t("BookSearch")],1),t("a-tab-pane",{key:"2",attrs:{tab:"Reader search","force-render":""}},[t("ReaderSearch")],1)],1)],1)},h=[],v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",[e._v("Book search")]),t("hr"),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Book name:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["book-name"],expression:"['book-name']"}],attrs:{placeholder:"Input book name"}})],1),t("a-form-item",{attrs:{label:"Number of copies:"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["copies"],expression:"[ 'copies' ]"}],attrs:{placeholder:"Input number"}})],1),t("a-form-item",{attrs:{label:"Date:"}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["data"],expression:"[ 'data' ]"}]})],1),t("a-form-item",{attrs:{label:"Rutern date:"}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["return-date"],expression:"[ 'return-date' ]"}]})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1),t("a-table",{attrs:{columns:e.columns,"data-source":e.data}})],1)},j=[],y=t("5efb"),g=t("3af3"),k=t("b558"),w=t("0020"),x=t("09d9"),I=t("0bb7");const _=[{title:"Book name",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"Publish year",dataIndex:"age",key:"age"},{title:"BBK",dataIndex:"address",key:"address 1",ellipsis:!0},{title:"Addresses",dataIndex:"addressess",key:"address 3",ellipsis:!0},{title:"Author",dataIndex:"address",key:"address 2",ellipsis:!0},{title:"Action"}],S=[{title:"ID",dataIndex:"id",key:"id",scopedSlots:{customRender:"name"}},{title:"Book",dataIndex:"book",key:"book",scopedSlots:{customRender:"name"}},{title:"Reader",dataIndex:"reader",key:"reader",scopedSlots:{customRender:"name"}},{title:"Date",dataIndex:"date",key:"age"},{title:"Return date",dataIndex:"mail",key:"address 1",ellipsis:!0}],P=[{title:"ID",dataIndex:"reader_id",key:"reader_id",scopedSlots:{customRender:"name"}},{title:"Name",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"Surname",dataIndex:"surname",key:"surname"},{title:"Middle name",dataIndex:"middle_name",key:"middle_name",scopedSlots:{customRender:"name"}},{title:"E-mail",dataIndex:"email",key:"email",ellipsis:!0}];var B={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item,"a-table":w["a"],"a-input-number":x["a"],"a-date-picker":I["a"]},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"book-search"}),data:[],columns:_,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{e||console.log("Received values of form: ",a)})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if("copies"!==t&&e[t]||"copies"===t&&"number"===typeof e[t])return!1;return!0}}},O=B,q=(t("8c45"),Object(d["a"])(O,v,j,!1,null,null,null)),D=q.exports,N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",[e._v("Reader search")]),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Name:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name"],expression:"['name']"}],attrs:{placeholder:"Input reader's name"}})],1),t("a-form-item",{attrs:{label:"Surname"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["surname"],expression:"['surname']"}],attrs:{placeholder:"Input reader's name"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1),t("a-table",{attrs:{columns:e.columns,"data-source":e.data}})],1)},F=[],R=t("bc3a"),z=t.n(R),E={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item,"a-table":w["a"]},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"reader-search"}),data:[],columns:P,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{e||console.log("Received values of form: ",a)})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if(e[t])return!1;return!0}},mounted(){console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).PORT),z.a.get(`http://localhost:${Object({NODE_ENV:"production",BASE_URL:"/"}).PORT}/test`).then(e=>{let{data:a}=e;this.data=a})}},$=E,L=(t("cb79"),Object(d["a"])($,N,F,!1,null,null,null)),V=L.exports,A=t("ccb9"),C={components:{"a-tabs":A["a"],"a-tab-pane":A["a"].TabPane,BookSearch:D,ReaderSearch:V}},T=C,M=Object(d["a"])(T,b,h,!1,null,null,null),K=M.exports,U=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-tabs",{attrs:{"default-active-key":"1"}},[t("a-tab-pane",{key:"1",attrs:{tab:"Reader Input"}},[t("ReaderInput")],1),t("a-tab-pane",{key:"2",attrs:{tab:"Book Input"}},[t("BookInput")],1),t("a-tab-pane",{key:"3",attrs:{tab:"Author Input"}},[t("AuthorInput")],1),t("a-tab-pane",{key:"4",attrs:{tab:"Library Input"}},[t("LibraryInput")],1),t("a-tab-pane",{key:"5",attrs:{tab:"Publisher Input"}},[t("PublisherInput")],1)],1)],1)},J=[],G=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"reader-input"},[t("h1",[e._v("Add a new reader")]),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Name:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"Please input name!"}]}],expression:"['name', { rules: [{ required: true, message: 'Please input name!' }] }]"}],attrs:{placeholder:"Input reader's name"}})],1),t("a-form-item",{attrs:{label:"Surname"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["surname",{rules:[{required:!0,message:"Please input surname!"}]}],expression:"['surname', { rules: [{ required: true, message: 'Please input surname!' }] }]"}],attrs:{placeholder:"Input reader's name"}})],1),t("a-form-item",{attrs:{label:"E-mail"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mail",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input e-mail!"}]}],expression:"['mail', { rules: [{\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            }, { required: true, message: 'Please input e-mail!' }] }]"}],attrs:{placeholder:"Input reader's mail"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1)],1)},H=[],Q={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"add-reader"}),data:[],columns:P,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{if(!e){console.log("Received values of form: ",a);const e=axios.create({baseURL:"http://example.com"});e.post("/user/12345",a).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if("copies"!==t&&e[t]||"copies"===t&&"number"===typeof e[t])return!1;return!0}}},W=Q,X=(t("a733"),Object(d["a"])(W,G,H,!1,null,null,null)),Y=X.exports,Z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"reader-input"},[t("h1",[e._v("Add a new book")]),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Title:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"Please input title!"}]}],expression:"['title', { rules: [{ required: true, message: 'Please input title!' }] }]"}],attrs:{placeholder:"Input book's title"}})],1),t("a-form-item",{attrs:{label:"BBK:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["bbk",{rules:[{required:!0,message:"Please input bbk!"}]}],expression:"['bbk', { rules: [{ required: true, message: 'Please input bbk!' }] }]"}],attrs:{placeholder:"Input book's bbk"}})],1),t("a-form-item",{attrs:{label:"Author:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["author",{rules:[{required:!0,message:"Please input author!"}]}],expression:"['author', { rules: [{ required: true, message: 'Please input author!' }] }]"}],attrs:{placeholder:"Input book's author"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1)],1)},ee=[],ae={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"add-reader"}),data:[],columns:P,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{e||console.log("Received values of form: ",a)})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if("copies"!==t&&e[t]||"copies"===t&&"number"===typeof e[t])return!1;return!0}}},te=ae,re=(t("ae2f"),Object(d["a"])(te,Z,ee,!1,null,null,null)),se=re.exports,oe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"reader-input"},[t("h1",[e._v("Add a new Author")]),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Name:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"Please write  Author's name"}]}],expression:"['title', { rules: [{ required: true, message: 'Please write  Author\\'s name' }] }]"}],attrs:{placeholder:"Author's name"}})],1),t("a-form-item",{attrs:{label:"Surname:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["author",{rules:[{required:!0,message:"Please input author!"}]}],expression:"['author', { rules: [{ required: true, message: 'Please input author!' }] }]"}],attrs:{placeholder:"Input surname author"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1)],1)},ne=[],ie={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"add-reader"}),data:[],columns:P,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{e||console.log("Received values of form: ",a)})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if("copies"!==t&&e[t]||"copies"===t&&"number"===typeof e[t])return!1;return!0}}},le=ie,ue=(t("abeb"),Object(d["a"])(le,oe,ne,!1,null,null,null)),me=ue.exports,de=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"reader-input"},[t("h1",[e._v("Library")]),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Library:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"Please input Library's name!"}]}],expression:"['title', { rules: [{ required: true, message: 'Please input Library\\'s name!' }] }]"}],attrs:{placeholder:"Input Library's name"}})],1),t("a-form-item",{attrs:{label:"title:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["bbk",{rules:[{required:!0,message:"Please input title!"}]}],expression:"['bbk', { rules: [{ required: true, message: 'Please input title!' }] }]"}],attrs:{placeholder:"Input book's title"}})],1),t("a-form-item",{attrs:{label:"adress:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["adress",{rules:[{required:!0,message:"Please input adress!"}]}],expression:"['adress', { rules: [{ required: true, message: 'Please input adress!' }] }]"}],attrs:{placeholder:"Input library's adress"}})],1),t("a-form-item",{attrs:{label:"Email:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"Please input email adress!"}]}],expression:"['email', { rules: [{ required: true, message: 'Please input email adress!' }] }]"}],attrs:{placeholder:"Input E-mail"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1)],1)},ce=[],pe={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"add-reader"}),data:[],columns:P,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{e||console.log("Received values of form: ",a)})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if("copies"!==t&&e[t]||"copies"===t&&"number"===typeof e[t])return!1;return!0}}},fe=pe,be=(t("a1a5"),Object(d["a"])(fe,de,ce,!1,null,null,null)),he=be.exports,ve=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"reader-input"},[t("h1",[e._v("Publisher")]),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Name:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"Please input publisher's name!"}]}],expression:"['title', { rules: [{ required: true, message: 'Please input publisher\\'s name!' }] }]"}],attrs:{placeholder:"Input publisher's name"}})],1),t("a-form-item",{attrs:{label:"title:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["bbk",{rules:[{required:!0,message:"Please input title!"}]}],expression:"['bbk', { rules: [{ required: true, message: 'Please input title!' }] }]"}],attrs:{placeholder:"Input book's title"}})],1),t("a-form-item",{attrs:{label:"adress:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["adress",{rules:[{required:!0,message:"Please input adress!"}]}],expression:"['adress', { rules: [{ required: true, message: 'Please input adress!' }] }]"}],attrs:{placeholder:"Input library's adress"}})],1),t("a-form-item",{attrs:{label:"Email:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email",{rules:[{required:!0,message:"Please input email adress!"}]}],expression:"['Email', { rules: [{ required: true, message: 'Please input email adress!' }] }]"}],attrs:{placeholder:"Input E-mail"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1)],1)},je=[],ye={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"add-reader"}),data:[],columns:P,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{if(!e){console.log("Received values of form: ",a);const e=axios.create({baseURL:"http://example.com"});e.post("/user/12345",a).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if("copies"!==t&&e[t]||"copies"===t&&"number"===typeof e[t])return!1;return!0}}},ge=ye,ke=(t("cbf1"),Object(d["a"])(ge,ve,je,!1,null,null,null)),we=ke.exports,xe={components:{"a-tabs":A["a"],"a-tab-pane":A["a"].TabPane,ReaderInput:Y,BookInput:se,AuthorInput:me,LibraryInput:he,PublisherInput:we}},Ie=xe,_e=Object(d["a"])(Ie,U,J,!1,null,null,null),Se=_e.exports,Pe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",[e._v("Journal")]),t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"Book name:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["book-name",{rules:[{required:!0,message:"Please input surname!"}]}],expression:"['book-name', { rules: [{ required: true, message: 'Please input surname!' }] }]"}],attrs:{placeholder:"Input book name"}})],1),t("hr"),t("a-form-item",{attrs:{label:"Reader:"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["reader",{rules:[{required:!0,message:"Please input reader!"}]}],expression:"[ 'reader', { rules: [{ required: true, message: 'Please input reader!' }] } ]"}],attrs:{placeholder:"Input reader"}})],1),t("hr"),t("a-form-item",{attrs:{label:"Rutern date:"}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["return-date",{rules:[{required:!0,message:"Please input return date!"}]}],expression:"[ 'return-date', { rules: [{ required: true, message: 'Please input return date!' }] } ]"}]})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.getButtonDisabled()}},[e._v("Submit")])],1)],1),t("a-table",{attrs:{columns:e.columns,"data-source":e.data}})],1)},Be=[],Oe={name:"BookSearch",components:{"a-button":y["a"],"a-form":g["a"],"a-input":k["a"],"a-form-item":g["a"].Item,"a-table":w["a"],"a-date-picker":I["a"]},data(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"journal"}),data:[],columns:S,isButtonDisabled:!0}},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields((e,a)=>{e||console.log("Received values of form: ",a)})},getButtonDisabled(){const e=this.form.getFieldsValue(),a=Object.keys(this.form.getFieldsValue());for(let t of a)if("copies"!==t&&e[t]||"copies"===t&&"number"===typeof e[t])return!1;return!0}}},qe=Oe,De=(t("c851"),Object(d["a"])(qe,Pe,Be,!1,null,null,null)),Ne=De.exports;r["a"].use(f["a"]);var Fe=new f["a"]({mode:"history",routes:[{path:"/",component:Ne},{path:"/search",component:K},{path:"/input",component:Se}]}),Re={name:"main",components:{Menu:p},router:Fe,data(){return{data:""}}},ze=Re,Ee=(t("c266"),Object(d["a"])(ze,s,o,!1,null,null,null)),$e=Ee.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e($e)}).$mount("#app")},"72ee":function(e,a,t){},"806c":function(e,a,t){},"8c45":function(e,a,t){"use strict";var r=t("806c"),s=t.n(r);s.a},"8d50":function(e,a,t){},"8dc1":function(e,a,t){},9880:function(e,a,t){},a1a5:function(e,a,t){"use strict";var r=t("c6ed"),s=t.n(r);s.a},a733:function(e,a,t){"use strict";var r=t("f0f4"),s=t.n(r);s.a},abeb:function(e,a,t){"use strict";var r=t("2310"),s=t.n(r);s.a},ae2f:function(e,a,t){"use strict";var r=t("72ee"),s=t.n(r);s.a},bd55:function(e,a,t){},c266:function(e,a,t){"use strict";var r=t("3a7d"),s=t.n(r);s.a},c6ed:function(e,a,t){},c851:function(e,a,t){"use strict";var r=t("bd55"),s=t.n(r);s.a},cb79:function(e,a,t){"use strict";var r=t("8dc1"),s=t.n(r);s.a},cbf1:function(e,a,t){"use strict";var r=t("9880"),s=t.n(r);s.a},efa6:function(e,a,t){"use strict";var r=t("8d50"),s=t.n(r);s.a},f0f4:function(e,a,t){}});
//# sourceMappingURL=app.5c64396e.js.map