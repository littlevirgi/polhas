(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{f6b42:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-page-container",[n("router-view")],1)],1)},o=[],i=n("ded3"),r=n.n(i),u=n("2f62"),a={name:"AdminLayout",computed:r()({},Object(u["e"])({isCheckLogin:function(e){return e.user.isCheckLogin},shop:function(e){return e.shop},user:function(e){return e.user}})),created:function(){this.$store.dispatch("getAdminConfig"),this.shop||this.$store.dispatch("getShop"),this.user||this.$store.dispatch("user/getUser")}},c=a,h=n("2877"),p=n("4d5a"),d=n("09e3"),f=n("eebe"),l=n.n(f),g=Object(h["a"])(c,s,o,!1,null,null,null);t["default"]=g.exports;l()(g,"components",{QLayout:p["a"],QPageContainer:d["a"]})}}]);