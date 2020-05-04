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
var G__56465 = arguments.length;
switch (G__56465) {
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
var G__56472 = new cljs.core.Keyword(null,"event-value","event-value",1898135138);
var G__56473 = frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.drop.cljs$core$IFn$_invoke$arity$1((0)),((function (G__56472){
return (function (p__56474,element){
var map__56475 = p__56474;
var map__56475__$1 = (((((!((map__56475 == null))))?(((((map__56475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56475):map__56475);
var event_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56475__$1,new cljs.core.Keyword(null,"event-value","event-value",1898135138));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56475__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-value","event-value",1898135138),(cljs.core.truth_(start)?element:(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(event_value,element) : f.call(null,event_value,element))),new cljs.core.Keyword(null,"start","start",-355208981),false], null);
});})(G__56472))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-value","event-value",1898135138),aid.unit.unit,new cljs.core.Keyword(null,"start","start",-355208981),true], null),e);
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__56472,G__56473) : cats.core._LT_$_GT_.call(null,G__56472,G__56473));
});

frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,x,e){
var G__56478 = (function (){var _STAR_net_id_STAR__orig_val__56481 = frp.primitives.net._STAR_net_id_STAR_;
var _STAR_net_id_STAR__temp_val__56482 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(e);
frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__temp_val__56482;

try{return frp.primitives.event.pure(x);
}finally {frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__orig_val__56481;
}})();
var G__56479 = frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.drop.cljs$core$IFn$_invoke$arity$1((0)),f,x,e);
return (cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$2(G__56478,G__56479) : cats.core._LT__GT_.call(null,G__56478,G__56479));
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
var G__56489 = arguments.length;
switch (G__56489) {
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
return frp.clojure.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,n),cljs.core.count),(function (){var G__56491 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"occs","occs",-482222641));
var G__56492 = frp.clojure.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__56491){
return (function (reduction,element){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.clojure.core.pathcache56493;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56494 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),"frp.clojure.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
frp.clojure.core.pathcache56493 = info56494;

return info56494;
})():info__41236__auto__);
var precompiled56495 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56498 = cljs.core.PersistentVector.EMPTY;
return (precompiled56495.cljs$core$IFn$_invoke$arity$1 ? precompiled56495.cljs$core$IFn$_invoke$arity$1(G__56498) : precompiled56495.call(null,G__56498));
} else {
return precompiled56495;
}
})(),cljs.core.inc,com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.clojure.core.pathcache56499;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56500 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641)], null),"frp.clojure.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
frp.clojure.core.pathcache56499 = info56500;

return info56500;
})():info__41236__auto__);
var precompiled56501 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56502 = cljs.core.PersistentVector.EMPTY;
return (precompiled56501.cljs$core$IFn$_invoke$arity$1 ? precompiled56501.cljs$core$IFn$_invoke$arity$1(G__56502) : precompiled56501.call(null,G__56502));
} else {
return precompiled56501;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,n),cljs.core.count)),com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.clojure.core.pathcache56506;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56507 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null)], null),"frp.clojure.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.clojure.core.pathcache56506 = info56507;

return info56507;
})():info__41236__auto__);
var precompiled56508 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56511 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.ALL,com.rpl.specter.AFTER_ELEM], null),com.rpl.specter.ALL,com.rpl.specter.AFTER_ELEM], null);
return (precompiled56508.cljs$core$IFn$_invoke$arity$1 ? precompiled56508.cljs$core$IFn$_invoke$arity$1(G__56511) : precompiled56508.call(null,G__56511));
} else {
return precompiled56508;
}
})(),element,(function (){var G__56512 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.zero_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(cljs.core.mod),step),new cljs.core.Keyword(null,"start","start",-355208981));
var G__56513 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.AFTER_ELEM], null),cljs.core.PersistentVector.EMPTY);
var G__56514 = reduction;
return (aid.core.if_then.cljs$core$IFn$_invoke$arity$3 ? aid.core.if_then.cljs$core$IFn$_invoke$arity$3(G__56512,G__56513,G__56514) : aid.core.if_then.call(null,G__56512,G__56513,G__56514));
})())));
});})(G__56491))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occs","occs",-482222641),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),(0)], null),e);
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__56491,G__56492) : cats.core._LT_$_GT_.call(null,G__56491,G__56492));
})());
});

frp.clojure.core.partition.cljs$lang$maxFixedArity = 3;

frp.clojure.core.vector = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.clojure.core.reduce,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
frp.clojure.core.dedupe = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frp.primitives.event.transduce,cljs.core.dedupe.cljs$core$IFn$_invoke$arity$0(),frp.clojure.core.reduce_STAR_);
frp.clojure.core.merge = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.clojure.core.reduce,cljs.core.merge);

//# sourceMappingURL=frp.clojure.core.js.map
