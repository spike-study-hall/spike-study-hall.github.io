goog.provide('frp.primitives.event');
goog.require('cljs.core');
goog.require('cljs.analyzer.api');
goog.require('clojure.set');
goog.require('aid.core');
goog.require('aid.unit');
goog.require('cats.core');
goog.require('cats.monad.maybe');
goog.require('cats.protocols');
goog.require('cats.util');
goog.require('com.rpl.specter');
goog.require('loom.alg');
goog.require('loom.graph');
goog.require('frp.helpers');
goog.require('frp.primitives.net');
goog.require('frp.protocols');
goog.require('frp.time');
goog.require('frp.tuple');
frp.primitives.event.get_occs = (function frp$primitives$event$get_occs(entity_id,net){
var G__28693 = new cljs.core.Keyword(null,"occs","occs",-482222641).cljs$core$IFn$_invoke$arity$1(net);
return (entity_id.cljs$core$IFn$_invoke$arity$1 ? entity_id.cljs$core$IFn$_invoke$arity$1(G__28693) : entity_id.call(null,G__28693));
});
frp.primitives.event.garbage_collect = (function frp$primitives$event$garbage_collect(p1__28694_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var pred__28695 = aid.core.call_pred;
var expr__28696 = p1__28694_SHARP_;
if(cljs.core.truth_((pred__28695.cljs$core$IFn$_invoke$arity$2 ? pred__28695.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,expr__28696) : pred__28695.call(null,cljs.core.empty_QMARK_,expr__28696)))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([frp.tuple.fst.cljs$core$IFn$_invoke$arity$1(cljs.core.last(p1__28694_SHARP_))]);
}
})(),frp.time.epoch),frp.tuple.fst),p1__28694_SHARP_);
});
frp.primitives.event.set_occs = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (occs,entity_id,net){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28698;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28699 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null));
frp.primitives.event.pathcache28698 = info28699;

return info28699;
})():info__20611__auto__);
var precompiled28700 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),entity_id], null),entity_id], null);
return (precompiled28700.cljs$core$IFn$_invoke$arity$1 ? precompiled28700.cljs$core$IFn$_invoke$arity$1(G__28701) : precompiled28700.call(null,G__28701));
} else {
return precompiled28700;
}
})(),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.END,occs),frp.primitives.event.garbage_collect),net);
}));
frp.primitives.event.call_functions = aid.core.flip(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,aid.core.flip(aid.core.funcall)));
frp.primitives.event.call_functions_BANG_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (net_id,fs){
var G__28702 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(fs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(net_id,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,frp.primitives.net.universe_state),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.curry.cljs$core$IFn$_invoke$arity$2((3),com.rpl.specter.setval_STAR_),net_id))));
var G__28703 = (function (){var G__28704 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__28704) : net_id.call(null,G__28704));
})();
return (frp.primitives.event.call_functions.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions.cljs$core$IFn$_invoke$arity$2(G__28702,G__28703) : frp.primitives.event.call_functions.call(null,G__28702,G__28703));
}));
frp.primitives.event.modify_net_BANG_ = (function frp$primitives$event$modify_net_BANG_(occ,net_id,entity_id,net){
var G__28705 = net_id;
var G__28706 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified","modified",-2134587826),com.rpl.specter.MAP_VALS], null),false),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.Keyword(null,"time","time",1385887882),frp.tuple.fst.cljs$core$IFn$_invoke$arity$1(occ)),(function (){var G__28707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [occ], null);
var G__28708 = entity_id;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2(G__28707,G__28708) : frp.primitives.event.set_occs.call(null,G__28707,G__28708));
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified","modified",-2134587826),entity_id], null),true)], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"modifications","modifications",2043415709).cljs$core$IFn$_invoke$arity$1(net),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loom.alg.topsort.cljs$core$IFn$_invoke$arity$1((function (){var G__28711 = new cljs.core.Keyword(null,"dependency","dependency",1300131203).cljs$core$IFn$_invoke$arity$1(net);
var fexpr__28710 = ((function (G__28711,G__28705){
return (function() { 
var G__28899__delegate = function (more__28712__auto__){
return loom.graph.subgraph(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,more__28712__auto__),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(loom.alg.bf_traverse),entity_id),more__28712__auto__));
};
var G__28899 = function (var_args){
var more__28712__auto__ = null;
if (arguments.length > 0) {
var G__28900__i = 0, G__28900__a = new Array(arguments.length -  0);
while (G__28900__i < G__28900__a.length) {G__28900__a[G__28900__i] = arguments[G__28900__i + 0]; ++G__28900__i;}
  more__28712__auto__ = new cljs.core.IndexedSeq(G__28900__a,0,null);
} 
return G__28899__delegate.call(this,more__28712__auto__);};
G__28899.cljs$lang$maxFixedArity = 0;
G__28899.cljs$lang$applyTo = (function (arglist__28901){
var more__28712__auto__ = cljs.core.seq(arglist__28901);
return G__28899__delegate(more__28712__auto__);
});
G__28899.cljs$core$IFn$_invoke$arity$variadic = G__28899__delegate;
return G__28899;
})()
;})(G__28711,G__28705))
;
return fexpr__28710.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__28711], 0));
})())], 0)));
return (frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__28705,G__28706) : frp.primitives.event.call_functions_BANG_.call(null,G__28705,G__28706));
});
frp.primitives.event.initial_reloading = cljs.core.PersistentArrayMap.EMPTY;
if((typeof frp !== 'undefined') && (typeof frp.primitives !== 'undefined') && (typeof frp.primitives.event !== 'undefined') && (typeof frp.primitives.event.reloading_state !== 'undefined')){
} else {
frp.primitives.event.reloading_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frp.primitives.event.initial_reloading);
}
frp.primitives.event.invoke_STAR__STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (net_id,entity_id,a){
frp.primitives.event.modify_net_BANG_((function (){var G__28713 = frp.primitives.net.get_new_time(frp.time.now());
var G__28714 = a;
return (frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2 ? frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2(G__28713,G__28714) : frp.tuple.tuple.call(null,G__28713,G__28714));
})(),net_id,entity_id,(function (){var G__28715 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__28715) : net_id.call(null,G__28715));
})());

return frp.primitives.net.run_effects_twice_BANG_(net_id);
}));
frp.primitives.event.debugging = goog.DEBUG;
frp.primitives.event.invoke_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (net_id,entity_id,a){
if(cljs.core.truth_((function (){var G__28718 = (function (){var G__28719 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__28719) : net_id.call(null,G__28719));
})();
var fexpr__28717 = ((function (G__28718){
return (function() { 
var G__28902__delegate = function (more__28720__auto__){
var or__4131__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"active","active",1895962068)),more__28720__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,frp.time.epoch),new cljs.core.Keyword(null,"time","time",1385887882)),more__28720__auto__);
}
};
var G__28902 = function (var_args){
var more__28720__auto__ = null;
if (arguments.length > 0) {
var G__28903__i = 0, G__28903__a = new Array(arguments.length -  0);
while (G__28903__i < G__28903__a.length) {G__28903__a[G__28903__i] = arguments[G__28903__i + 0]; ++G__28903__i;}
  more__28720__auto__ = new cljs.core.IndexedSeq(G__28903__a,0,null);
} 
return G__28902__delegate.call(this,more__28720__auto__);};
G__28902.cljs$lang$maxFixedArity = 0;
G__28902.cljs$lang$applyTo = (function (arglist__28904){
var more__28720__auto__ = cljs.core.seq(arglist__28904);
return G__28902__delegate(more__28720__auto__);
});
G__28902.cljs$core$IFn$_invoke$arity$variadic = G__28902__delegate;
return G__28902;
})()
;})(G__28718))
;
return fexpr__28717.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__28718], 0));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [net_id,new cljs.core.Keyword(null,"invocations","invocations",-1981777494),com.rpl.specter.AFTER_ELEM], null),(function (){
return (frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$3(net_id,entity_id,a) : frp.primitives.event.invoke_STAR__STAR_.call(null,net_id,entity_id,a));
})));
} else {
if(cljs.core.truth_(frp.primitives.event.debugging)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.reloading_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-id-invocations","entity-id-invocations",-1645954748),com.rpl.specter.AFTER_ELEM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,a], null)));
} else {
}

return (frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$3(net_id,entity_id,a) : frp.primitives.event.invoke_STAR__STAR_.call(null,net_id,entity_id,a));
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {frp.protocols.Entity}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cats.protocols.Contextual}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cats.protocols.Printable}
*/
frp.primitives.event.Event = (function (net_id,entity_id,__meta,__extmap,__hash){
this.net_id = net_id;
this.entity_id = entity_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748939;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
frp.primitives.event.Event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

frp.primitives.event.Event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k28722,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__28727 = k28722;
var G__28727__$1 = (((G__28727 instanceof cljs.core.Keyword))?G__28727.fqn:null);
switch (G__28727__$1) {
case "net-id":
return self__.net_id;

break;
case "entity-id":
return self__.entity_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28722,else__4388__auto__);

}
});

frp.primitives.event.Event.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__28728){
var vec__28729 = p__28728;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28729,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28729,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

frp.primitives.event.Event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#frp.primitives.event.Event{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"net-id","net-id",418155108),self__.net_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),self__.entity_id],null))], null),self__.__extmap));
});

frp.primitives.event.Event.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28721){
var self__ = this;
var G__28721__$1 = this;
return (new cljs.core.RecordIter((0),G__28721__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-id","net-id",418155108),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

frp.primitives.event.Event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

frp.primitives.event.Event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new frp.primitives.event.Event(self__.net_id,self__.entity_id,self__.__meta,self__.__extmap,self__.__hash));
});

frp.primitives.event.Event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

frp.primitives.event.Event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__28732 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1907190251 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__28732(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

frp.primitives.event.Event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28723,other28724){
var self__ = this;
var this28723__$1 = this;
return (((!((other28724 == null)))) && ((this28723__$1.constructor === other28724.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28723__$1.net_id,other28724.net_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28723__$1.entity_id,other28724.entity_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28723__$1.__extmap,other28724.__extmap)));
});

frp.primitives.event.Event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"net-id","net-id",418155108),null,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new frp.primitives.event.Event(self__.net_id,self__.entity_id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

frp.primitives.event.Event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__28721){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__28733 = cljs.core.keyword_identical_QMARK_;
var expr__28734 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__28736 = new cljs.core.Keyword(null,"net-id","net-id",418155108);
var G__28737 = expr__28734;
return (pred__28733.cljs$core$IFn$_invoke$arity$2 ? pred__28733.cljs$core$IFn$_invoke$arity$2(G__28736,G__28737) : pred__28733.call(null,G__28736,G__28737));
})())){
return (new frp.primitives.event.Event(G__28721,self__.entity_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28738 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093);
var G__28739 = expr__28734;
return (pred__28733.cljs$core$IFn$_invoke$arity$2 ? pred__28733.cljs$core$IFn$_invoke$arity$2(G__28738,G__28739) : pred__28733.call(null,G__28738,G__28739));
})())){
return (new frp.primitives.event.Event(self__.net_id,G__28721,self__.__meta,self__.__extmap,null));
} else {
return (new frp.primitives.event.Event(self__.net_id,self__.entity_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__28721),null));
}
}
});

frp.primitives.event.Event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"net-id","net-id",418155108),self__.net_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),self__.entity_id,null))], null),self__.__extmap));
});

frp.primitives.event.Event.prototype.frp$protocols$Entity$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.Event.prototype.frp$protocols$Entity$_get_keyword$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"event","event",301435442);
});

frp.primitives.event.Event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__28721){
var self__ = this;
var this__4384__auto____$1 = this;
return (new frp.primitives.event.Event(self__.net_id,self__.entity_id,G__28721,self__.__extmap,self__.__hash));
});

frp.primitives.event.Event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

frp.primitives.event.Event.prototype.call = (function() {
var G__28906 = null;
var G__28906__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3(self__.net_id,self__.entity_id,aid.unit.unit) : frp.primitives.event.invoke_STAR_.call(null,self__.net_id,self__.entity_id,aid.unit.unit));
});
var G__28906__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3(self__.net_id,self__.entity_id,a) : frp.primitives.event.invoke_STAR_.call(null,self__.net_id,self__.entity_id,a));
});
G__28906 = function(self__,a){
switch(arguments.length){
case 1:
return G__28906__1.call(this,self__);
case 2:
return G__28906__2.call(this,self__,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__28906.cljs$core$IFn$_invoke$arity$1 = G__28906__1;
G__28906.cljs$core$IFn$_invoke$arity$2 = G__28906__2;
return G__28906;
})()
;

frp.primitives.event.Event.prototype.apply = (function (self__,args28726){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28726)));
});

frp.primitives.event.Event.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3(self__.net_id,self__.entity_id,aid.unit.unit) : frp.primitives.event.invoke_STAR_.call(null,self__.net_id,self__.entity_id,aid.unit.unit));
});

frp.primitives.event.Event.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3(self__.net_id,self__.entity_id,a) : frp.primitives.event.invoke_STAR_.call(null,self__.net_id,self__.entity_id,a));
});

frp.primitives.event.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frp.primitives.event.get_occs(self__.entity_id,(function (){var G__28740 = cljs.core.deref(frp.primitives.net.universe_state);
return (self__.net_id.cljs$core$IFn$_invoke$arity$1 ? self__.net_id.cljs$core$IFn$_invoke$arity$1(G__28740) : self__.net_id.call(null,G__28740));
})());
});

frp.primitives.event.Event.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.Event.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#[event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.net_id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.entity_id),"]"].join('');
});

frp.primitives.event.Event.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.Event.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (frp.primitives.event.get_context.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.get_context.cljs$core$IFn$_invoke$arity$1(self__.net_id) : frp.primitives.event.get_context.call(null,self__.net_id));
});

frp.primitives.event.Event.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null);
});

frp.primitives.event.Event.cljs$lang$type = true;

frp.primitives.event.Event.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"frp.primitives.event/Event",null,(1),null));
});

frp.primitives.event.Event.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"frp.primitives.event/Event");
});

/**
 * Positional factory function for frp.primitives.event/Event.
 */
frp.primitives.event.__GT_Event = (function frp$primitives$event$__GT_Event(net_id,entity_id){
return (new frp.primitives.event.Event(net_id,entity_id,null,null,null));
});

/**
 * Factory function for frp.primitives.event/Event, taking a map of keywords to field values.
 */
frp.primitives.event.map__GT_Event = (function frp$primitives$event$map__GT_Event(G__28725){
var extmap__4424__auto__ = (function (){var G__28741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28725,new cljs.core.Keyword(null,"net-id","net-id",418155108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)], 0));
if(cljs.core.record_QMARK_(G__28725)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28741);
} else {
return G__28741;
}
})();
return (new frp.primitives.event.Event(new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(G__28725),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(G__28725),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cats.util.make_printable(frp.primitives.event.Event);
frp.primitives.event.event_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,frp.primitives.event.Event);
frp.primitives.event.event_STAR__STAR_ = (function frp$primitives$event$event_STAR__STAR_(net_id,entity_id,fs){
var G__28742_28907 = net_id;
var G__28743_28908 = cljs.core.cons((function (){var G__28744 = cljs.core.PersistentVector.EMPTY;
var G__28745 = entity_id;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2(G__28744,G__28745) : frp.primitives.event.set_occs.call(null,G__28744,G__28745));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__28746 = aid.core.curry.cljs$core$IFn$_invoke$arity$2((3),aid.core.flip(aid.core.funcall));
return (fexpr__28746.cljs$core$IFn$_invoke$arity$1 ? fexpr__28746.cljs$core$IFn$_invoke$arity$1(entity_id) : fexpr__28746.call(null,entity_id));
})(),fs));
(frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__28742_28907,G__28743_28908) : frp.primitives.event.call_functions_BANG_.call(null,G__28742_28907,G__28743_28908));

return (new frp.primitives.event.Event(net_id,entity_id,null,null,null));
});
frp.primitives.event.event_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (net_id,fs){
return frp.primitives.event.event_STAR__STAR_(net_id,(function (){var G__28747 = new cljs.core.Keyword(null,"occs","occs",-482222641).cljs$core$IFn$_invoke$arity$1((function (){var G__28748 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__28748) : net_id.call(null,G__28748));
})());
return (frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1(G__28747) : frp.primitives.net.get_id.call(null,G__28747));
})(),fs);
}));
frp.primitives.event.get_unit = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.tuple.tuple,frp.time.epoch);
frp.primitives.event.add_edge = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (parent_id,child_id,net){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28749;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28750 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203)], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
frp.primitives.event.pathcache28749 = info28750;

return info28750;
})():info__20611__auto__);
var precompiled28751 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28752 = cljs.core.PersistentVector.EMPTY;
return (precompiled28751.cljs$core$IFn$_invoke$arity$1 ? precompiled28751.cljs$core$IFn$_invoke$arity$1(G__28752) : precompiled28751.call(null,G__28752));
} else {
return precompiled28751;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(loom.graph.add_edges),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,child_id], null)),net);
}));
frp.primitives.event.get_latests = (function frp$primitives$event$get_latests(entity_id,net){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(net)),frp.tuple.fst),frp.primitives.event.get_occs(entity_id,net));
});
frp.primitives.event.get_occs_or_latests = (function frp$primitives$event$get_occs_or_latests(initial,entity_id,net){
var fexpr__28753 = (cljs.core.truth_(initial)?frp.primitives.event.get_occs:frp.primitives.event.get_latests);
return (fexpr__28753.cljs$core$IFn$_invoke$arity$2 ? fexpr__28753.cljs$core$IFn$_invoke$arity$2(entity_id,net) : fexpr__28753.call(null,entity_id,net));
});
frp.primitives.event.modify__LT_$_GT_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(6,(function (f_BANG_,net_id,parent_id,initial,child_id,net){
var G__28754 = (function (){var _STAR_net_id_STAR__orig_val__28757 = frp.primitives.net._STAR_net_id_STAR_;
var _STAR_net_id_STAR__temp_val__28758 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(frp.primitives.net.__GT_Net(net_id));
frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__temp_val__28758;

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.core._LT_$_GT_,f_BANG_),frp.primitives.event.get_occs_or_latests(initial,parent_id,net));
}finally {frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__orig_val__28757;
}})();
var G__28755 = child_id;
var G__28756 = (function (){var G__28759 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__28759) : net_id.call(null,G__28759));
})();
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__28754,G__28755,G__28756) : frp.primitives.event.set_occs.call(null,G__28754,G__28755,G__28756));
}));
frp.primitives.event.make_call_once = (function frp$primitives$event$make_call_once(entity_id,modify_BANG_){
var G__28760 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(entity_id,new cljs.core.Keyword(null,"modified","modified",-2134587826));
var G__28761 = modify_BANG_;
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__28760,G__28761) : aid.core.if_else.call(null,G__28760,G__28761));
});
frp.primitives.event.set_modification = (function frp$primitives$event$set_modification(entity_id,modify_BANG_,net){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28762;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28763 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null));
frp.primitives.event.pathcache28762 = info28763;

return info28763;
})():info__20611__auto__);
var precompiled28764 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),entity_id], null),entity_id], null);
return (precompiled28764.cljs$core$IFn$_invoke$arity$1 ? precompiled28764.cljs$core$IFn$_invoke$arity$1(G__28765) : precompiled28764.call(null,G__28765));
} else {
return precompiled28764;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.primitives.event.make_call_once(entity_id,modify_BANG_),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified","modified",-2134587826),entity_id], null),true)], null),net);
});
frp.primitives.event.make_set_modification_modification = (function frp$primitives$event$make_set_modification_modification(modify_BANG_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (entity_id,net){
return frp.primitives.event.set_modification(entity_id,(modify_BANG_.cljs$core$IFn$_invoke$arity$2 ? modify_BANG_.cljs$core$IFn$_invoke$arity$2(false,entity_id) : modify_BANG_.call(null,false,entity_id)),net);
}),(modify_BANG_.cljs$core$IFn$_invoke$arity$1 ? modify_BANG_.cljs$core$IFn$_invoke$arity$1(true) : modify_BANG_.call(null,true))], null);
});
frp.primitives.event.snth = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,com.rpl.specter.srange),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat,(2)));
frp.primitives.event.insert_modification = (function frp$primitives$event$insert_modification(modify_BANG_,entity_id,net){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28766;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28767 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(frp.primitives.event.snth,new cljs.core.Var(function(){return frp.primitives.event.snth;},new cljs.core.Symbol("frp.primitives.event","snth","frp.primitives.event/snth",-1949968363,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"frp.primitives.event","frp.primitives.event",800488888,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"snth","snth",187852491,null),"frp/primitives/event.cljc",10,1,257,257,cljs.core.List.EMPTY,null,(cljs.core.truth_(frp.primitives.event.snth)?frp.primitives.event.snth.cljs$lang$test:null)])),new cljs.core.Symbol(null,"snth","snth",187852491,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core._,new cljs.core.Var(function(){return cljs.core._;},new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"-","-",-471816912,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2606),(2606),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no ys are supplied, returns the negation of x, else subtracts\n  the ys from x and returns the result.",(cljs.core.truth_(cljs.core._)?cljs.core._.cljs$lang$test:null)])),new cljs.core.Symbol(null,"-","-",-471816912,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.count,new cljs.core.Var(function(){return cljs.core.count;},new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"count","count",-514511684,null),"cljs/core.cljs",(12),(1),(1814),(1814),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns the number of items in the collection. (count nil) returns\n  0.  Also works on strings, arrays, and Maps",(cljs.core.truth_(cljs.core.count)?cljs.core.count.cljs$lang$test:null)])),new cljs.core.Symbol(null,"count","count",-514511684,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(net,new cljs.core.Symbol(null,"net","net",1984574066,null))], null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null))))),(2)], null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))),(2)))], null),cljs.core.list(new cljs.core.Symbol(null,"snth","snth",187852491,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))),(2))))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.Symbol(null,"net","net",1984574066,null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Symbol(null,"snth","snth",187852491,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))),(2)))], null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.Symbol(null,"snth","snth",187852491,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.Symbol(null,"net","net",1984574066,null)], null));
frp.primitives.event.pathcache28766 = info28767;

return info28767;
})():info__20611__auto__);
var precompiled28768 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28769 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),entity_id,(function (){var G__28770 = (cljs.core.count((function (){var G__28771 = new cljs.core.Keyword(null,"modifications","modifications",2043415709).cljs$core$IFn$_invoke$arity$1(net);
return (entity_id.cljs$core$IFn$_invoke$arity$1 ? entity_id.cljs$core$IFn$_invoke$arity$1(G__28771) : entity_id.call(null,G__28771));
})()) - (2));
return (frp.primitives.event.snth.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.snth.cljs$core$IFn$_invoke$arity$1(G__28770) : frp.primitives.event.snth.call(null,G__28770));
})()], null),entity_id,frp.primitives.event.snth,cljs.core._,cljs.core.count,entity_id,net], null);
return (precompiled28768.cljs$core$IFn$_invoke$arity$1 ? precompiled28768.cljs$core$IFn$_invoke$arity$1(G__28769) : precompiled28768.call(null,G__28769));
} else {
return precompiled28768;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.primitives.event.make_call_once(entity_id,modify_BANG_)], null),net);
});
frp.primitives.event.insert_merge_sync = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (parent_id,child_id,net){
return frp.primitives.event.insert_modification((function (p1__28772_SHARP_){
var G__28773 = frp.primitives.event.get_latests(parent_id,p1__28772_SHARP_);
var G__28774 = child_id;
var G__28775 = p1__28772_SHARP_;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__28773,G__28774,G__28775) : frp.primitives.event.set_occs.call(null,G__28773,G__28774,G__28775));
}),child_id,net);
}));
frp.primitives.event.delay_time_occs = (function frp$primitives$event$delay_time_occs(t,occs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.core._LT__STAR__GT_,(frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2 ? frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2(t,cljs.core.identity) : frp.tuple.tuple.call(null,t,cljs.core.identity))),occs);
});
frp.primitives.event.delay_sync = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (parent_id,child_id,net){
cljs.core.run_BANG_((function (p1__28776_SHARP_){
if(cljs.core.truth_((function (){var G__28778 = frp.tuple.fst.cljs$core$IFn$_invoke$arity$1(p1__28776_SHARP_);
var fexpr__28777 = cljs.core.set(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.time.epoch,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(net)], null));
return (fexpr__28777.cljs$core$IFn$_invoke$arity$1 ? fexpr__28777.cljs$core$IFn$_invoke$arity$1(G__28778) : fexpr__28777.call(null,G__28778));
})())){
return null;
} else {
throw (new Error("Assert failed: ((set [time/epoch (:time net)]) (tuple/fst p1__28776#))"));
}
}),frp.primitives.event.get_occs(parent_id,net));

var G__28779 = frp.primitives.event.delay_time_occs(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(net),frp.primitives.event.get_occs(parent_id,net));
var G__28780 = child_id;
var G__28781 = net;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__28779,G__28780,G__28781) : frp.primitives.event.set_occs.call(null,G__28779,G__28780,G__28781));
}));
frp.primitives.event.modify_join = aid.core.curry.cljs$core$IFn$_invoke$arity$2(5,(function (net_id,parent_id,initial,child_id,net){
var G__28782 = net_id;
var G__28783 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,((function (G__28782){
return (function (parent_id_STAR_,_){
var G__28784 = net_id;
var G__28785 = (function (){var fexpr__28786 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(frp.primitives.event.add_edge,frp.primitives.event.insert_merge_sync,frp.primitives.event.delay_sync);
return (fexpr__28786.cljs$core$IFn$_invoke$arity$2 ? fexpr__28786.cljs$core$IFn$_invoke$arity$2(parent_id_STAR_,child_id) : fexpr__28786.call(null,parent_id_STAR_,child_id));
})();
return (frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__28784,G__28785) : frp.primitives.event.call_functions_BANG_.call(null,G__28784,G__28785));
});})(G__28782))
),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),frp.tuple.snd),frp.primitives.event.get_occs_or_latests(initial,parent_id,net));
return (frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__28782,G__28783) : frp.primitives.event.call_functions_BANG_.call(null,G__28782,G__28783));
}));
frp.primitives.event.merge_one = (function frp$primitives$event$merge_one(parent,merged){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28787;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28788 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.primitives.event.pathcache28787 = info28788;

return info28788;
})():info__20611__auto__);
var precompiled28789 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.AFTER_ELEM], null);
return (precompiled28789.cljs$core$IFn$_invoke$arity$1 ? precompiled28789.cljs$core$IFn$_invoke$arity$1(G__28790) : precompiled28789.call(null,G__28790));
} else {
return precompiled28789;
}
})(),cljs.core.first(parent),merged);
});
frp.primitives.event.merge_occs_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (merged,left,right){
while(true){
if(cljs.core.empty_QMARK_(left)){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28791;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28792 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"com/rpl/specter.cljc",6,1,789,791,cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
frp.primitives.event.pathcache28791 = info28792;

return info28792;
})():info__20611__auto__);
var precompiled28793 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.END], null);
return (precompiled28793.cljs$core$IFn$_invoke$arity$1 ? precompiled28793.cljs$core$IFn$_invoke$arity$1(G__28794) : precompiled28793.call(null,G__28794));
} else {
return precompiled28793;
}
})(),right,merged);
} else {
if(cljs.core.empty_QMARK_(right)){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28795;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28796 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"com/rpl/specter.cljc",6,1,789,791,cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
frp.primitives.event.pathcache28795 = info28796;

return info28796;
})():info__20611__auto__);
var precompiled28797 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.END], null);
return (precompiled28797.cljs$core$IFn$_invoke$arity$1 ? precompiled28797.cljs$core$IFn$_invoke$arity$1(G__28798) : precompiled28797.call(null,G__28798));
} else {
return precompiled28797;
}
})(),left,merged);
} else {
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.helpers._LT__EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.tuple.fst,cljs.core.first),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))))){
var G__28911 = frp.primitives.event.merge_one(left,merged);
var G__28912 = cljs.core.rest(left);
var G__28913 = right;
merged = G__28911;
left = G__28912;
right = G__28913;
continue;
} else {
var G__28914 = frp.primitives.event.merge_one(right,merged);
var G__28915 = left;
var G__28916 = cljs.core.rest(right);
merged = G__28914;
left = G__28915;
right = G__28916;
continue;

}
}
}
break;
}
}));
frp.primitives.event.merge_occs = (function (){var G__28799 = cljs.core.PersistentVector.EMPTY;
return (frp.primitives.event.merge_occs_STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.merge_occs_STAR_.cljs$core$IFn$_invoke$arity$1(G__28799) : frp.primitives.event.merge_occs_STAR_.call(null,G__28799));
})();
frp.primitives.event.modify__LT__GT_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(5,(function (left_id,right_id,initial,child_id,net){
var G__28800 = (function (){var G__28803 = frp.primitives.event.get_occs_or_latests(initial,left_id,net);
var G__28804 = frp.primitives.event.get_occs_or_latests(initial,right_id,net);
return (frp.primitives.event.merge_occs.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.merge_occs.cljs$core$IFn$_invoke$arity$2(G__28803,G__28804) : frp.primitives.event.merge_occs.call(null,G__28803,G__28804));
})();
var G__28801 = child_id;
var G__28802 = net;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__28800,G__28801,G__28802) : frp.primitives.event.set_occs.call(null,G__28800,G__28801,G__28802));
}));
frp.primitives.event.pure_STAR_ = (function frp$primitives$event$pure_STAR_(net_id,a){
var G__28805 = net_id;
var G__28806 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__28807 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1(a) : frp.primitives.event.get_unit.call(null,a))],null));
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$1(G__28807) : frp.primitives.event.set_occs.call(null,G__28807));
})()],null));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__28805,G__28806) : frp.primitives.event.event_STAR_.call(null,G__28805,G__28806));
});
frp.primitives.event.pure = (function frp$primitives$event$pure(p1__28808_SHARP_){
return frp.primitives.event.pure_STAR_(frp.primitives.net._STAR_net_id_STAR_,p1__28808_SHARP_);
});
frp.primitives.event.mempty_STAR_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(frp.primitives.event.event_STAR_),cljs.core.PersistentVector.EMPTY);
frp.primitives.event.mempty = (function frp$primitives$event$mempty(){
return (frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1(frp.primitives.net._STAR_net_id_STAR_) : frp.primitives.event.mempty_STAR_.call(null,frp.primitives.net._STAR_net_id_STAR_));
});
frp.primitives.event.get_context = (function frp$primitives$event$get_context(net_id){
if((typeof frp !== 'undefined') && (typeof frp.primitives !== 'undefined') && (typeof frp.primitives.event !== 'undefined') && (typeof frp.primitives.event.t_frp$primitives$event28809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {frp.protocols.Entity}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
frp.primitives.event.t_frp$primitives$event28809 = (function (net_id,meta28810){
this.net_id = net_id;
this.meta28810 = meta28810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,left_event,right_event){
var self__ = this;
var ___$1 = this;
var G__28812 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(left_event);
var G__28813 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.make_set_modification_modification((function (){var G__28814 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(left_event);
var G__28815 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(right_event);
return (frp.primitives.event.modify__LT__GT_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.modify__LT__GT_.cljs$core$IFn$_invoke$arity$2(G__28814,G__28815) : frp.primitives.event.modify__LT__GT_.call(null,G__28814,G__28815));
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.add_edge,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_event,right_event], null)));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__28812,G__28813) : frp.primitives.event.event_STAR_.call(null,G__28812,G__28813));
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f_BANG_,fa){
var self__ = this;
var ___$1 = this;
var G__28816 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(fa);
var G__28817 = cljs.core.cons((function (){var G__28818 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(fa);
return (frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1(G__28818) : frp.primitives.event.add_edge.call(null,G__28818));
})(),frp.primitives.event.make_set_modification_modification((function (){var fexpr__28823 = ((function (G__28816,___$1){
return (function() { 
var G__28921__delegate = function (more__28824__auto__){
var G__28826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"net-id","net-id",418155108),more__28824__auto__);
var G__28827 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),more__28824__auto__);
var fexpr__28825 = (frp.primitives.event.modify__LT_$_GT_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.modify__LT_$_GT_.cljs$core$IFn$_invoke$arity$1(f_BANG_) : frp.primitives.event.modify__LT_$_GT_.call(null,f_BANG_));
return (fexpr__28825.cljs$core$IFn$_invoke$arity$2 ? fexpr__28825.cljs$core$IFn$_invoke$arity$2(G__28826,G__28827) : fexpr__28825.call(null,G__28826,G__28827));
};
var G__28921 = function (var_args){
var more__28824__auto__ = null;
if (arguments.length > 0) {
var G__28925__i = 0, G__28925__a = new Array(arguments.length -  0);
while (G__28925__i < G__28925__a.length) {G__28925__a[G__28925__i] = arguments[G__28925__i + 0]; ++G__28925__i;}
  more__28824__auto__ = new cljs.core.IndexedSeq(G__28925__a,0,null);
} 
return G__28921__delegate.call(this,more__28824__auto__);};
G__28921.cljs$lang$maxFixedArity = 0;
G__28921.cljs$lang$applyTo = (function (arglist__28927){
var more__28824__auto__ = cljs.core.seq(arglist__28927);
return G__28921__delegate(more__28824__auto__);
});
G__28921.cljs$core$IFn$_invoke$arity$variadic = G__28921__delegate;
return G__28921;
})()
;})(G__28816,___$1))
;
return fexpr__28823.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fa], 0));
})()));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__28816,G__28817) : frp.primitives.event.event_STAR_.call(null,G__28816,G__28817));
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (context,a){
var self__ = this;
var context__$1 = this;
return context__$1.cats$protocols$Applicative$_pure$arity$2(null,a);
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,ma,f_BANG_){
var self__ = this;
var ___$1 = this;
var mb = (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(f_BANG_,ma) : cats.core._LT_$_GT_.call(null,f_BANG_,ma));
var G__28828 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(mb);
var G__28829 = cljs.core.cons((function (){var G__28830 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(mb);
return (frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1(G__28830) : frp.primitives.event.add_edge.call(null,G__28830));
})(),frp.primitives.event.make_set_modification_modification((function (){var fexpr__28834 = ((function (G__28828,mb,___$1){
return (function() { 
var G__28928__delegate = function (more__28835__auto__){
var G__28836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"net-id","net-id",418155108),more__28835__auto__);
var G__28837 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),more__28835__auto__);
return (frp.primitives.event.modify_join.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.modify_join.cljs$core$IFn$_invoke$arity$2(G__28836,G__28837) : frp.primitives.event.modify_join.call(null,G__28836,G__28837));
};
var G__28928 = function (var_args){
var more__28835__auto__ = null;
if (arguments.length > 0) {
var G__28930__i = 0, G__28930__a = new Array(arguments.length -  0);
while (G__28930__i < G__28930__a.length) {G__28930__a[G__28930__i] = arguments[G__28930__i + 0]; ++G__28930__i;}
  more__28835__auto__ = new cljs.core.IndexedSeq(G__28930__a,0,null);
} 
return G__28928__delegate.call(this,more__28835__auto__);};
G__28928.cljs$lang$maxFixedArity = 0;
G__28928.cljs$lang$applyTo = (function (arglist__28931){
var more__28835__auto__ = cljs.core.seq(arglist__28931);
return G__28928__delegate(more__28835__auto__);
});
G__28928.cljs$core$IFn$_invoke$arity$variadic = G__28928__delegate;
return G__28928;
})()
;})(G__28828,mb,___$1))
;
return fexpr__28834.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mb], 0));
})()));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__28828,G__28829) : frp.primitives.event.event_STAR_.call(null,G__28828,G__28829));
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28811){
var self__ = this;
var _28811__$1 = this;
return self__.meta28810;
});

frp.primitives.event.t_frp$primitives$event28809.prototype.frp$protocols$Entity$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event28809.prototype.frp$protocols$Entity$_get_net_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.net_id;
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (context){
var self__ = this;
var context__$1 = this;
var G__28838 = context__$1.frp$protocols$Entity$_get_net_id$arity$1(null);
return (frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1(G__28838) : frp.primitives.event.mempty_STAR_.call(null,G__28838));
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28811,meta28810__$1){
var self__ = this;
var _28811__$1 = this;
return (new frp.primitives.event.t_frp$primitives$event28809(self__.net_id,meta28810__$1));
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (context,a){
var self__ = this;
var context__$1 = this;
return frp.primitives.event.pure_STAR_(context__$1.frp$protocols$Entity$_get_net_id$arity$1(null),a);
});

frp.primitives.event.t_frp$primitives$event28809.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,fab,fa){
var self__ = this;
var ___$1 = this;
return aid.core.ap(fab,fa);
});

frp.primitives.event.t_frp$primitives$event28809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Symbol(null,"meta28810","meta28810",1190649680,null)], null);
});

frp.primitives.event.t_frp$primitives$event28809.cljs$lang$type = true;

frp.primitives.event.t_frp$primitives$event28809.cljs$lang$ctorStr = "frp.primitives.event/t_frp$primitives$event28809";

frp.primitives.event.t_frp$primitives$event28809.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"frp.primitives.event/t_frp$primitives$event28809");
});

/**
 * Positional factory function for frp.primitives.event/t_frp$primitives$event28809.
 */
frp.primitives.event.__GT_t_frp$primitives$event28809 = (function frp$primitives$event$get_context_$___GT_t_frp$primitives$event28809(net_id__$1,meta28810){
return (new frp.primitives.event.t_frp$primitives$event28809(net_id__$1,meta28810));
});

}

return (new frp.primitives.event.t_frp$primitives$event28809(net_id,cljs.core.PersistentArrayMap.EMPTY));
});
frp.primitives.event.get_elements = (function frp$primitives$event$get_elements(step_BANG_,entity_id,initial,net){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.core._LT_$_GT_,cljs.core.deref),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.monad.maybe.just_QMARK_,frp.tuple.snd),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,new cljs.core.Keyword(null,"snd","snd",643718828),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.unreduced,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(step_BANG_,aid.core.nothing))),frp.primitives.event.get_occs_or_latests(initial,entity_id,net))));
});
frp.primitives.event.get_transduction = (function frp$primitives$event$get_transduction(init,occs,reduction){
return cljs.core.last(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1(init) : frp.primitives.event.get_unit.call(null,init))],null)),occs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reduction], 0)));
});
frp.primitives.event.get_accumulator = aid.core.curry.cljs$core$IFn$_invoke$arity$2(6,(function (f_BANG_,init,entity_id,net,reduction,element){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28839;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28840 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.primitives.event.pathcache28839 = info28840;

return info28840;
})():info__20611__auto__);
var precompiled28841 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.AFTER_ELEM], null);
return (precompiled28841.cljs$core$IFn$_invoke$arity$1 ? precompiled28841.cljs$core$IFn$_invoke$arity$1(G__28842) : precompiled28841.call(null,G__28842));
} else {
return precompiled28841;
}
})(),(function (){var G__28844 = frp.primitives.event.get_transduction(init,frp.primitives.event.get_occs(entity_id,net),reduction);
var G__28845 = element;
var fexpr__28843 = aid.core.lift_a(f_BANG_);
return (fexpr__28843.cljs$core$IFn$_invoke$arity$2 ? fexpr__28843.cljs$core$IFn$_invoke$arity$2(G__28844,G__28845) : fexpr__28843.call(null,G__28844,G__28845));
})(),reduction);
}));
frp.primitives.event.make_modify_transduce = (function frp$primitives$event$make_modify_transduce(p1__28846_SHARP_){
var step_BANG_ = (function (){var G__28847 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cats.monad.maybe.just,cljs.core.second,cljs.core.vector);
return (p1__28846_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28846_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28847) : p1__28846_SHARP_.call(null,G__28847));
})();
return aid.core.curry.cljs$core$IFn$_invoke$arity$2(7,((function (step_BANG_){
return (function (f_BANG_,init,net_id,parent_id,initial,child_id,net){
var G__28848 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((frp.primitives.event.get_accumulator.cljs$core$IFn$_invoke$arity$4 ? frp.primitives.event.get_accumulator.cljs$core$IFn$_invoke$arity$4(f_BANG_,init,child_id,net) : frp.primitives.event.get_accumulator.call(null,f_BANG_,init,child_id,net)),cljs.core.PersistentVector.EMPTY,frp.primitives.event.get_elements(step_BANG_,parent_id,initial,net));
var G__28849 = child_id;
var G__28850 = (function (){var G__28851 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__28851) : net_id.call(null,G__28851));
})();
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__28848,G__28849,G__28850) : frp.primitives.event.set_occs.call(null,G__28848,G__28849,G__28850));
});})(step_BANG_))
);
});
frp.primitives.event.transduce = (function frp$primitives$event$transduce(var_args){
var G__28853 = arguments.length;
switch (G__28853) {
case 3:
return frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$3 = (function (xform,f,e){
return frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),e);
});

frp.primitives.event.transduce.cljs$core$IFn$_invoke$arity$4 = (function (xform,f,init,e){
var G__28854 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(e);
var G__28855 = cljs.core.cons((function (){var G__28856 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(e);
return (frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1(G__28856) : frp.primitives.event.add_edge.call(null,G__28856));
})(),frp.primitives.event.make_set_modification_modification((function (){var fexpr__28863 = ((function (G__28854){
return (function() { 
var G__28952__delegate = function (more__28864__auto__){
var G__28867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"net-id","net-id",418155108),more__28864__auto__);
var G__28868 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),more__28864__auto__);
var fexpr__28866 = (function (){var fexpr__28869 = frp.primitives.event.make_modify_transduce(xform);
return (fexpr__28869.cljs$core$IFn$_invoke$arity$2 ? fexpr__28869.cljs$core$IFn$_invoke$arity$2(f,init) : fexpr__28869.call(null,f,init));
})();
return (fexpr__28866.cljs$core$IFn$_invoke$arity$2 ? fexpr__28866.cljs$core$IFn$_invoke$arity$2(G__28867,G__28868) : fexpr__28866.call(null,G__28867,G__28868));
};
var G__28952 = function (var_args){
var more__28864__auto__ = null;
if (arguments.length > 0) {
var G__28956__i = 0, G__28956__a = new Array(arguments.length -  0);
while (G__28956__i < G__28956__a.length) {G__28956__a[G__28956__i] = arguments[G__28956__i + 0]; ++G__28956__i;}
  more__28864__auto__ = new cljs.core.IndexedSeq(G__28956__a,0,null);
} 
return G__28952__delegate.call(this,more__28864__auto__);};
G__28952.cljs$lang$maxFixedArity = 0;
G__28952.cljs$lang$applyTo = (function (arglist__28957){
var more__28864__auto__ = cljs.core.seq(arglist__28957);
return G__28952__delegate(more__28864__auto__);
});
G__28952.cljs$core$IFn$_invoke$arity$variadic = G__28952__delegate;
return G__28952;
})()
;})(G__28854))
;
return fexpr__28863.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
})()));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__28854,G__28855) : frp.primitives.event.event_STAR_.call(null,G__28854,G__28855));
});

frp.primitives.event.transduce.cljs$lang$maxFixedArity = 4;

frp.primitives.event.snapshot = (function frp$primitives$event$snapshot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28960 = arguments.length;
var i__4731__auto___28961 = (0);
while(true){
if((i__4731__auto___28961 < len__4730__auto___28960)){
args__4736__auto__.push((arguments[i__4731__auto___28961]));

var G__28962 = (i__4731__auto___28961 + (1));
i__4731__auto___28961 = G__28962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return frp.primitives.event.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

frp.primitives.event.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (e,bs){
var G__28873 = (function (p1__28870_SHARP_){
return cljs.core.cons(p1__28870_SHARP_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,bs));
});
var G__28874 = e;
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__28873,G__28874) : cats.core._LT_$_GT_.call(null,G__28873,G__28874));
});

frp.primitives.event.snapshot.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
frp.primitives.event.snapshot.cljs$lang$applyTo = (function (seq28871){
var G__28872 = cljs.core.first(seq28871);
var seq28871__$1 = cljs.core.next(seq28871);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28872,seq28871__$1);
});

frp.primitives.event.handle = (function frp$primitives$event$handle(p1__28875_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1((function (){var G__28876 = cljs.core.deref(frp.primitives.net.universe_state);
return (p1__28875_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28875_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28876) : p1__28875_SHARP_.call(null,G__28876));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28875_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null),frp.primitives.net.get_new_time(frp.time.now())));

return frp.primitives.net.run_effects_twice_BANG_(p1__28875_SHARP_);
} else {
return null;
}
});
frp.primitives.event.append_cancellation = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (net_id,f_BANG_,universe){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28877;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28878 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(net_id,new cljs.core.Symbol(null,"net-id","net-id",2058686635,null)),new cljs.core.Keyword(null,"cancellations","cancellations",724023423),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Keyword(null,"cancellations","cancellations",724023423),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null),new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.primitives.event.pathcache28877 = info28878;

return info28878;
})():info__20611__auto__);
var precompiled28879 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28880 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [net_id,new cljs.core.Keyword(null,"cancellations","cancellations",724023423),com.rpl.specter.AFTER_ELEM], null),net_id,com.rpl.specter.AFTER_ELEM], null);
return (precompiled28879.cljs$core$IFn$_invoke$arity$1 ? precompiled28879.cljs$core$IFn$_invoke$arity$1(G__28880) : precompiled28879.call(null,G__28880));
} else {
return precompiled28879;
}
})(),f_BANG_,universe);
}));
frp.primitives.event.positive_infinity = Number.POSITIVE_INFINITY;
frp.primitives.event.run_universe_effects_BANG_ = (function frp$primitives$event$run_universe_effects_BANG_(p1__28881_SHARP_){
return cljs.core.run_BANG_(p1__28881_SHARP_,cljs.core.keys(cljs.core.deref(frp.primitives.net.universe_state)));
});
frp.primitives.event.run_effects_once_BANG_ = (function frp$primitives$event$run_effects_once_BANG_(net_id){
frp.primitives.net.set_active(net_id,false);

frp.primitives.net.run_effects_BANG__STAR_(net_id);

return frp.primitives.net.set_active(net_id,true);
});
frp.primitives.event.activate_STAR_ = (function frp$primitives$event$activate_STAR_(rate){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,(function (universe){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (reduction,element){
var G__28882 = element;
var G__28883 = (function (){var pred__28885 = cljs.core._EQ_;
var expr__28886 = rate;
if(cljs.core.truth_((pred__28885.cljs$core$IFn$_invoke$arity$2 ? pred__28885.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.positive_infinity,expr__28886) : pred__28885.call(null,frp.primitives.event.positive_infinity,expr__28886)))){
return aid.core.nop;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clearInterval,setInterval(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.handle,element),rate));
}
})();
var G__28884 = reduction;
return (frp.primitives.event.append_cancellation.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.append_cancellation.cljs$core$IFn$_invoke$arity$3(G__28882,G__28883,G__28884) : frp.primitives.event.append_cancellation.call(null,G__28882,G__28883,G__28884));
}),universe,cljs.core.keys(universe));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"active","active",1895962068)], null),true));

frp.primitives.event.run_universe_effects_BANG_(frp.primitives.event.run_effects_once_BANG_);

frp.time.start();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"time","time",1385887882)], null),frp.primitives.net.get_new_time(frp.time.now())));

return frp.primitives.event.run_universe_effects_BANG_(frp.primitives.net.run_effects_twice_BANG_);
});
frp.primitives.event.effect = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (f,x){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));

return x;
}));
frp.primitives.event.reload_STAR_ = (function frp$primitives$event$reload_STAR_(alias_id){
if(cljs.core.truth_(frp.primitives.event.debugging)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.reloading_state,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic((function (){var G__28889 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.run_BANG_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,(frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$1(frp.primitives.net.initial_net_id) : frp.primitives.event.invoke_STAR__STAR_.call(null,frp.primitives.net.initial_net_id))),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,com.rpl.specter.FIRST,alias_id))),new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376));
return (frp.primitives.event.effect.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.effect.cljs$core$IFn$_invoke$arity$1(G__28889) : frp.primitives.event.effect.call(null,G__28889));
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.Keyword(null,"entity-id-invocations","entity-id-invocations",-1645954748),cljs.core.PersistentVector.EMPTY),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),alias_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__28888_SHARP_){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28890;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28891 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"com/rpl/specter.cljc",6,1,789,791,cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
frp.primitives.event.pathcache28890 = info28891;

return info28891;
})():info__20611__auto__);
var precompiled28892 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376),com.rpl.specter.END], null),com.rpl.specter.END], null);
return (precompiled28892.cljs$core$IFn$_invoke$arity$1 ? precompiled28892.cljs$core$IFn$_invoke$arity$1(G__28893) : precompiled28892.call(null,G__28893));
} else {
return precompiled28892;
}
})(),com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__20611__auto__ = frp.primitives.event.pathcache28894;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info28895 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null))], null)], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null));
frp.primitives.event.pathcache28894 = info28895;

return info28895;
})():info__20611__auto__);
var precompiled28896 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__28897 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null),com.rpl.specter.ALL,com.rpl.specter.FIRST], null);
return (precompiled28896.cljs$core$IFn$_invoke$arity$1 ? precompiled28896.cljs$core$IFn$_invoke$arity$1(G__28897) : precompiled28896.call(null,G__28897));
} else {
return precompiled28896;
}
})(),clojure.set.map_invert(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(p1__28888_SHARP_)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(p1__28888_SHARP_)),cljs.core.first),new cljs.core.Keyword(null,"entity-id-invocations","entity-id-invocations",-1645954748).cljs$core$IFn$_invoke$arity$1(p1__28888_SHARP_))),p1__28888_SHARP_);
})], 0)));
} else {
return null;
}
});
frp.primitives.event.get_alias_id = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.hash_map),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(cljs.core.subs),(2)),cljs.core.str),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),cljs.core.deref))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,cljs.core.deref)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.second),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat,cljs.core.ns_interns_STAR_),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.find_ns),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.symbol)], 0));
frp.primitives.event.reload = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.reload_STAR_,frp.primitives.event.get_alias_id);

//# sourceMappingURL=frp.primitives.event.js.map
