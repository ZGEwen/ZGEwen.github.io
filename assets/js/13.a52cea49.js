(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{300:function(t,e,n){},437:function(t,e,n){"use strict";var a=n(300);n.n(a).a},445:function(t,e,n){"use strict";n.r(e);var a=n(20),o=n(1);const s={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:function(){return{rawPopupConfig:{message:"有新内容了",buttonText:"刷新"},updateEvent:null}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"有新内容了",buttonText:"刷新"}&&(this.rawPopupConfig=s)},computed:{popupConfig:function(){return Object(o.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||s["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||s["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(437),n(2)),p=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=p.exports}}]);