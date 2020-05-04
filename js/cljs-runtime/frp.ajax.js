goog.provide('frp.ajax');
goog.require('cljs.core');
goog.require('aid.core');
goog.require('ajax.core');
goog.require('com.rpl.specter');
goog.require('frp.derived');
goog.require('frp.primitives.event');
frp.ajax.request = aid.core.curry(3,(function (f,url,option){
return frp.primitives.event.effect((function (p1__55111_SHARP_){
var G__55112 = url;
var G__55113 = com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__43817__auto__ = frp.ajax.pathcache55114;
var info__43817__auto____$1 = (((info__43817__auto__ == null))?(function (){var info55115 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612)], null),"frp.ajax",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
frp.ajax.pathcache55114 = info55115;

return info55115;
})():info__43817__auto__);
var precompiled55116 = com.rpl.specter.impl.cached_path_info_precompiled(info__43817__auto____$1);
var dynamic_QMARK___43818__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__43817__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___43818__auto__)){
var G__55117 = cljs.core.PersistentVector.EMPTY;
return (precompiled55116.cljs$core$IFn$_invoke$arity$1 ? precompiled55116.cljs$core$IFn$_invoke$arity$1(G__55117) : precompiled55116.call(null,G__55117));
} else {
return precompiled55116;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,p1__55111_SHARP_),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.identity], null),option], 0)));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__55112,G__55113) : f.call(null,G__55112,G__55113));
}),frp.derived.event());
}));
frp.ajax.GET = frp.ajax.request(ajax.core.GET);
frp.ajax.POST = frp.ajax.request(ajax.core.POST);

//# sourceMappingURL=frp.ajax.js.map
