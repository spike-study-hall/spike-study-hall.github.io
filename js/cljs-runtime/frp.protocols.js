goog.provide('frp.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
frp.protocols.Entity = function(){};

frp.protocols._get_keyword = (function frp$protocols$_get_keyword(_){
if((((!((_ == null)))) && ((!((_.frp$protocols$Entity$_get_keyword$arity$1 == null)))))){
return _.frp$protocols$Entity$_get_keyword$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (frp.protocols._get_keyword[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (frp.protocols._get_keyword["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Entity.-get-keyword",_);
}
}
}
});

frp.protocols._get_net_id = (function frp$protocols$_get_net_id(_){
if((((!((_ == null)))) && ((!((_.frp$protocols$Entity$_get_net_id$arity$1 == null)))))){
return _.frp$protocols$Entity$_get_net_id$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (frp.protocols._get_net_id[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (frp.protocols._get_net_id["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Entity.-get-net-id",_);
}
}
}
});


//# sourceMappingURL=frp.protocols.js.map
