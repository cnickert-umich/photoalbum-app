(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ed87"],{d6fe:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"albums_all container pt-4"},[t._m(0),e("Albums"),e("div",{staticClass:"w-100 fixed-bottom d-flex justify-content-end justify-content-md-center d-block d-md-none"},[e("router-link",{attrs:{to:"/albums/new"}},[e("button",{staticClass:"btn btn-primary rounded-circle p-3 m-4",staticStyle:{height:"60px",width:"60px"}},[e("i",{staticClass:"fas fa-plus fa-lg"})])])],1),e("div",{staticClass:"row d-none d-md-flex justify-content-end"},[e("router-link",{attrs:{to:"/albums/new"}},[e("button",{staticClass:"btn btn-primary"},[t._v(" New "),e("i",{staticClass:"fas fa-plus ml-2"})])])],1)],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col"},[e("h2",[t._v("My Albums")])])])}],l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},t._l(t.albums,(function(s){return e("div",{key:s.albumId,staticClass:"col-xs-6 col-md-4 col-lg-3 d-flex align-items-stretch"},[e("router-link",{staticClass:"btn w-100",attrs:{to:"/album/"+s.albumId+"/photos"}},[e("h4",[t._v(t._s(s.name))]),e("p",[t._v("ID: #"+t._s(s.albumId))])])],1)})),0)},i=[],c=e("5ce5"),u={name:"Albums",data:function(){return{albums:[]}},created:function(){var t=this,s=c["a"].getAllAlbums();s.done((function(s){t.albums=s}))},methods:{},computed:{}},o=u,r=e("2877"),d=Object(r["a"])(o,l,i,!1,null,"36769cfe",null),m=d.exports,b={name:"albums_view",components:{Albums:m}},f=b,p=Object(r["a"])(f,n,a,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21ed87.f8c16701.js.map