goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__40950 = e.target.readyState;
var fexpr__40949 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__40949.cljs$core$IFn$_invoke$arity$1 ? fexpr__40949.cljs$core$IFn$_invoke$arity$1(G__40950) : fexpr__40949.call(null,G__40950));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__40954,handler){
var map__40956 = p__40954;
var map__40956__$1 = (((((!((map__40956 == null))))?(((((map__40956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40956):map__40956);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40956__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40956__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__40953_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__40953_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___40974 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___40974)){
var response_type_40975 = temp__5735__auto___40974;
(this$__$1.responseType = cljs.core.name(response_type_40975));
} else {
}

var seq__40958_40976 = cljs.core.seq(headers);
var chunk__40959_40977 = null;
var count__40960_40978 = (0);
var i__40961_40979 = (0);
while(true){
if((i__40961_40979 < count__40960_40978)){
var vec__40968_40980 = chunk__40959_40977.cljs$core$IIndexed$_nth$arity$2(null,i__40961_40979);
var k_40981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40968_40980,(0),null);
var v_40982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40968_40980,(1),null);
this$__$1.setRequestHeader(k_40981,v_40982);


var G__40983 = seq__40958_40976;
var G__40984 = chunk__40959_40977;
var G__40985 = count__40960_40978;
var G__40986 = (i__40961_40979 + (1));
seq__40958_40976 = G__40983;
chunk__40959_40977 = G__40984;
count__40960_40978 = G__40985;
i__40961_40979 = G__40986;
continue;
} else {
var temp__5735__auto___40987 = cljs.core.seq(seq__40958_40976);
if(temp__5735__auto___40987){
var seq__40958_40988__$1 = temp__5735__auto___40987;
if(cljs.core.chunked_seq_QMARK_(seq__40958_40988__$1)){
var c__4550__auto___40989 = cljs.core.chunk_first(seq__40958_40988__$1);
var G__40990 = cljs.core.chunk_rest(seq__40958_40988__$1);
var G__40991 = c__4550__auto___40989;
var G__40992 = cljs.core.count(c__4550__auto___40989);
var G__40993 = (0);
seq__40958_40976 = G__40990;
chunk__40959_40977 = G__40991;
count__40960_40978 = G__40992;
i__40961_40979 = G__40993;
continue;
} else {
var vec__40971_40994 = cljs.core.first(seq__40958_40988__$1);
var k_40995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40971_40994,(0),null);
var v_40996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40971_40994,(1),null);
this$__$1.setRequestHeader(k_40995,v_40996);


var G__40997 = cljs.core.next(seq__40958_40988__$1);
var G__40998 = null;
var G__40999 = (0);
var G__41000 = (0);
seq__40958_40976 = G__40997;
chunk__40959_40977 = G__40998;
count__40960_40978 = G__40999;
i__40961_40979 = G__41000;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4120__auto__ = body;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
