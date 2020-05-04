goog.provide('frp.clojure.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('aid.core');
goog.require('aid.unit');
goog.require('cats.core');
goog.require('com.rpl.specter');
goog.require('frp.primitives.event');
goog.require('frp.primitives.net');
frp.clojure.core.reduce = (function frp$clojure$core$reduce(var_args){
var G__60401 = arguments.length;
switch (G__60401) {
case 2:
return frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,e){
var G__60402 = new cljs.core.Keyword(null,"event-value","event-value",1898135138);
var G__60403 = frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.drop.cljs$core$IFn$_invoke$arity$1((0)),((function (G__60402){
return (function (p__60404,element){
var map__60405 = p__60404;
var map__60405__$1 = (((((!((map__60405 == null))))?(((((map__60405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60405):map__60405);
var event_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60405__$1,new cljs.core.Keyword(null,"event-value","event-value",1898135138));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60405__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-value","event-value",1898135138),(cljs.core.truth_(start)?element:(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(event_value,element) : f.call(null,event_value,element))),new cljs.core.Keyword(null,"start","start",-355208981),false], null);
});})(G__60402))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-value","event-value",1898135138),aid.unit.unit,new cljs.core.Keyword(null,"start","start",-355208981),true], null),e);
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__60402,G__60403) : cats.core._LT_$_GT_.call(null,G__60402,G__60403));
});

frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,x,e){
var G__60414 = (function (){var _STAR_net_id_STAR__orig_val__60416 = frp.primitives.net._STAR_net_id_STAR_;
var _STAR_net_id_STAR__temp_val__60417 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(e);
frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__temp_val__60417;

try{return frp.primitives.event.pure(x);
}finally {frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__orig_val__60416;
}})();
var G__60415 = frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.drop.cljs$core$IFn$_invoke$arity$1((0)),f,x,e);
return (cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$2(G__60414,G__60415) : cats.core._LT__GT_.call(null,G__60414,G__60415));
});

frp.clojure.core.reduce.cljs$lang$maxFixedArity = 3;

frp.clojure.core.reduce_STAR_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.vector);
frp.clojure.core.filter = (function frp$clojure$core$filter(pred,e){
return frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(pred),frp.clojure.core.reduce_STAR_,aid.unit.unit,e);
});
frp.clojure.core.remove = (function frp$clojure$core$remove(pred,e){
return frp.clojure.core.filter(cljs.core.complement(pred),e);
});
frp.clojure.core.max = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.clojure.core.reduce,cljs.core.max,Number.NEGATIVE_INFINITY);
frp.clojure.core.min = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.clojure.core.reduce,cljs.core.min,frp.primitives.event.positive_infinity);
frp.clojure.core._PLUS_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.clojure.core.reduce,cljs.core._PLUS_);
frp.clojure.core.count = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.primitives.event.transduce,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.constantly((1))),cljs.core._PLUS_);
frp.clojure.core.drop = (function frp$clojure$core$drop(n,e){
return frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.drop.cljs$core$IFn$_invoke$arity$1(n),frp.clojure.core.reduce_STAR_,e);
});
frp.clojure.core.merge_with = (function frp$clojure$core$merge_with(f,e){
return frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,f),e);
});
frp.clojure.core.group_by = (function frp$clojure$core$group_by(f,e){
return frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$3((function (reduction,element){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(reduction,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(element) : f.call(null,element)),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.AFTER_ELEM,element));
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
frp.clojure.core.distinct = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.primitives.event.transduce,cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),frp.clojure.core.reduce_STAR_);
frp.clojure.core.partition = (function frp$clojure$core$partition(var_args){
var G__60429 = arguments.length;
switch (G__60429) {
case 2:
return frp.clojure.core.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frp.clojure.core.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

frp.clojure.core.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,e){
return frp.clojure.core.partition.cljs$core$IFn$_invoke$arity$3(n,n,e);
});

frp.clojure.core.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,step,e){
return frp.clojure.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,n),cljs.core.count),(function (){var G__60430 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"occs","occs",-482222641));
var G__60431 = frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__60430){
return (function (reduction,element){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.clojure.core.pathcache60432;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info60433 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),"frp.clojure.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
frp.clojure.core.pathcache60432 = info60433;

return info60433;
})():info__41236__auto__);
var precompiled60434 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__60435 = cljs.core.PersistentVector.EMPTY;
return (precompiled60434.cljs$core$IFn$_invoke$arity$1 ? precompiled60434.cljs$core$IFn$_invoke$arity$1(G__60435) : precompiled60434.call(null,G__60435));
} else {
return precompiled60434;
}
})(),cljs.core.inc,com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.clojure.core.pathcache60436;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info60437 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641)], null),"frp.clojure.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
frp.clojure.core.pathcache60436 = info60437;

return info60437;
})():info__41236__auto__);
var precompiled60438 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__60440 = cljs.core.PersistentVector.EMPTY;
return (precompiled60438.cljs$core$IFn$_invoke$arity$1 ? precompiled60438.cljs$core$IFn$_invoke$arity$1(G__60440) : precompiled60438.call(null,G__60440));
} else {
return precompiled60438;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,n),cljs.core.count)),com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.clojure.core.pathcache60441;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info60442 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null)], null),"frp.clojure.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.clojure.core.pathcache60441 = info60442;

return info60442;
})():info__41236__auto__);
var precompiled60443 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__60445 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.ALL,com.rpl.specter.AFTER_ELEM], null),com.rpl.specter.ALL,com.rpl.specter.AFTER_ELEM], null);
return (precompiled60443.cljs$core$IFn$_invoke$arity$1 ? precompiled60443.cljs$core$IFn$_invoke$arity$1(G__60445) : precompiled60443.call(null,G__60445));
} else {
return precompiled60443;
}
})(),element,(function (){var G__60446 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.zero_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(cljs.core.mod),step),new cljs.core.Keyword(null,"start","start",-355208981));
var G__60447 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.AFTER_ELEM], null),cljs.core.PersistentVector.EMPTY);
var G__60448 = reduction;
return (aid.core.if_then.cljs$core$IFn$_invoke$arity$3 ? aid.core.if_then.cljs$core$IFn$_invoke$arity$3(G__60446,G__60447,G__60448) : aid.core.if_then.call(null,G__60446,G__60447,G__60448));
})())));
});})(G__60430))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occs","occs",-482222641),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),(0)], null),e);
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__60430,G__60431) : cats.core._LT_$_GT_.call(null,G__60430,G__60431));
})());
});

frp.clojure.core.partition.cljs$lang$maxFixedArity = 3;

frp.clojure.core.vector = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.clojure.core.reduce,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
frp.clojure.core.dedupe = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.primitives.event.transduce,cljs.core.dedupe.cljs$core$IFn$_invoke$arity$0(),frp.clojure.core.reduce_STAR_);
frp.clojure.core.merge = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.clojure.core.reduce,cljs.core.merge);

//# sourceMappingURL=frp.clojure.core.js.map
