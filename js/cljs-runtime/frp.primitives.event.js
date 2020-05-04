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
var G__56253 = new cljs.core.Keyword(null,"occs","occs",-482222641).cljs$core$IFn$_invoke$arity$1(net);
return (entity_id.cljs$core$IFn$_invoke$arity$1 ? entity_id.cljs$core$IFn$_invoke$arity$1(G__56253) : entity_id.call(null,G__56253));
});
frp.primitives.event.garbage_collect = (function frp$primitives$event$garbage_collect(p1__56254_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var pred__56255 = aid.core.call_pred;
var expr__56256 = p1__56254_SHARP_;
if(cljs.core.truth_((pred__56255.cljs$core$IFn$_invoke$arity$2 ? pred__56255.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,expr__56256) : pred__56255.call(null,cljs.core.empty_QMARK_,expr__56256)))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([frp.tuple.fst.cljs$core$IFn$_invoke$arity$1(cljs.core.last(p1__56254_SHARP_))]);
}
})(),frp.time.epoch),frp.tuple.fst),p1__56254_SHARP_);
});
frp.primitives.event.set_occs = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (occs,entity_id,net){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56258;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56259 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null));
frp.primitives.event.pathcache56258 = info56259;

return info56259;
})():info__41236__auto__);
var precompiled56260 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occs","occs",-482222641),entity_id], null),entity_id], null);
return (precompiled56260.cljs$core$IFn$_invoke$arity$1 ? precompiled56260.cljs$core$IFn$_invoke$arity$1(G__56261) : precompiled56260.call(null,G__56261));
} else {
return precompiled56260;
}
})(),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.END,occs),frp.primitives.event.garbage_collect),net);
}));
frp.primitives.event.call_functions = aid.core.flip(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,aid.core.flip(aid.core.funcall)));
frp.primitives.event.call_functions_BANG_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (net_id,fs){
var G__56262 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(fs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(net_id,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,frp.primitives.net.universe_state),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.curry.cljs$core$IFn$_invoke$arity$2((3),com.rpl.specter.setval_STAR_),net_id))));
var G__56263 = (function (){var G__56264 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__56264) : net_id.call(null,G__56264));
})();
return (frp.primitives.event.call_functions.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions.cljs$core$IFn$_invoke$arity$2(G__56262,G__56263) : frp.primitives.event.call_functions.call(null,G__56262,G__56263));
}));
frp.primitives.event.modify_net_BANG_ = (function frp$primitives$event$modify_net_BANG_(occ,net_id,entity_id,net){
var G__56265 = net_id;
var G__56266 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified","modified",-2134587826),com.rpl.specter.MAP_VALS], null),false),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.Keyword(null,"time","time",1385887882),frp.tuple.fst.cljs$core$IFn$_invoke$arity$1(occ)),(function (){var G__56267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [occ], null);
var G__56268 = entity_id;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2(G__56267,G__56268) : frp.primitives.event.set_occs.call(null,G__56267,G__56268));
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified","modified",-2134587826),entity_id], null),true)], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"modifications","modifications",2043415709).cljs$core$IFn$_invoke$arity$1(net),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loom.alg.topsort.cljs$core$IFn$_invoke$arity$1((function (){var G__56271 = new cljs.core.Keyword(null,"dependency","dependency",1300131203).cljs$core$IFn$_invoke$arity$1(net);
var fexpr__56270 = ((function (G__56271,G__56265){
return (function() { 
var G__56459__delegate = function (more__56272__auto__){
return loom.graph.subgraph(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,more__56272__auto__),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(loom.alg.bf_traverse),entity_id),more__56272__auto__));
};
var G__56459 = function (var_args){
var more__56272__auto__ = null;
if (arguments.length > 0) {
var G__56460__i = 0, G__56460__a = new Array(arguments.length -  0);
while (G__56460__i < G__56460__a.length) {G__56460__a[G__56460__i] = arguments[G__56460__i + 0]; ++G__56460__i;}
  more__56272__auto__ = new cljs.core.IndexedSeq(G__56460__a,0,null);
} 
return G__56459__delegate.call(this,more__56272__auto__);};
G__56459.cljs$lang$maxFixedArity = 0;
G__56459.cljs$lang$applyTo = (function (arglist__56461){
var more__56272__auto__ = cljs.core.seq(arglist__56461);
return G__56459__delegate(more__56272__auto__);
});
G__56459.cljs$core$IFn$_invoke$arity$variadic = G__56459__delegate;
return G__56459;
})()
;})(G__56271,G__56265))
;
return fexpr__56270.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__56271], 0));
})())], 0)));
return (frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__56265,G__56266) : frp.primitives.event.call_functions_BANG_.call(null,G__56265,G__56266));
});
frp.primitives.event.initial_reloading = cljs.core.PersistentArrayMap.EMPTY;
if((typeof frp !== 'undefined') && (typeof frp.primitives !== 'undefined') && (typeof frp.primitives.event !== 'undefined') && (typeof frp.primitives.event.reloading_state !== 'undefined')){
} else {
frp.primitives.event.reloading_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frp.primitives.event.initial_reloading);
}
frp.primitives.event.invoke_STAR__STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (net_id,entity_id,a){
frp.primitives.event.modify_net_BANG_((function (){var G__56273 = frp.primitives.net.get_new_time(frp.time.now());
var G__56274 = a;
return (frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2 ? frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2(G__56273,G__56274) : frp.tuple.tuple.call(null,G__56273,G__56274));
})(),net_id,entity_id,(function (){var G__56275 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__56275) : net_id.call(null,G__56275));
})());

return frp.primitives.net.run_effects_twice_BANG_(net_id);
}));
frp.primitives.event.debugging = goog.DEBUG;
frp.primitives.event.invoke_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (net_id,entity_id,a){
if(cljs.core.truth_((function (){var G__56278 = (function (){var G__56279 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__56279) : net_id.call(null,G__56279));
})();
var fexpr__56277 = ((function (G__56278){
return (function() { 
var G__56462__delegate = function (more__56280__auto__){
var or__4131__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"active","active",1895962068)),more__56280__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,frp.time.epoch),new cljs.core.Keyword(null,"time","time",1385887882)),more__56280__auto__);
}
};
var G__56462 = function (var_args){
var more__56280__auto__ = null;
if (arguments.length > 0) {
var G__56464__i = 0, G__56464__a = new Array(arguments.length -  0);
while (G__56464__i < G__56464__a.length) {G__56464__a[G__56464__i] = arguments[G__56464__i + 0]; ++G__56464__i;}
  more__56280__auto__ = new cljs.core.IndexedSeq(G__56464__a,0,null);
} 
return G__56462__delegate.call(this,more__56280__auto__);};
G__56462.cljs$lang$maxFixedArity = 0;
G__56462.cljs$lang$applyTo = (function (arglist__56466){
var more__56280__auto__ = cljs.core.seq(arglist__56466);
return G__56462__delegate(more__56280__auto__);
});
G__56462.cljs$core$IFn$_invoke$arity$variadic = G__56462__delegate;
return G__56462;
})()
;})(G__56278))
;
return fexpr__56277.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__56278], 0));
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

frp.primitives.event.Event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k56282,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__56287 = k56282;
var G__56287__$1 = (((G__56287 instanceof cljs.core.Keyword))?G__56287.fqn:null);
switch (G__56287__$1) {
case "net-id":
return self__.net_id;

break;
case "entity-id":
return self__.entity_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56282,else__4388__auto__);

}
});

frp.primitives.event.Event.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__56288){
var vec__56289 = p__56288;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56289,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56289,(1),null);
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

frp.primitives.event.Event.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56281){
var self__ = this;
var G__56281__$1 = this;
return (new cljs.core.RecordIter((0),G__56281__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-id","net-id",418155108),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__56292 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1907190251 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__56292(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

frp.primitives.event.Event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56283,other56284){
var self__ = this;
var this56283__$1 = this;
return (((!((other56284 == null)))) && ((this56283__$1.constructor === other56284.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56283__$1.net_id,other56284.net_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56283__$1.entity_id,other56284.entity_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56283__$1.__extmap,other56284.__extmap)));
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

frp.primitives.event.Event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__56281){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__56293 = cljs.core.keyword_identical_QMARK_;
var expr__56294 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__56296 = new cljs.core.Keyword(null,"net-id","net-id",418155108);
var G__56297 = expr__56294;
return (pred__56293.cljs$core$IFn$_invoke$arity$2 ? pred__56293.cljs$core$IFn$_invoke$arity$2(G__56296,G__56297) : pred__56293.call(null,G__56296,G__56297));
})())){
return (new frp.primitives.event.Event(G__56281,self__.entity_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56298 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093);
var G__56299 = expr__56294;
return (pred__56293.cljs$core$IFn$_invoke$arity$2 ? pred__56293.cljs$core$IFn$_invoke$arity$2(G__56298,G__56299) : pred__56293.call(null,G__56298,G__56299));
})())){
return (new frp.primitives.event.Event(self__.net_id,G__56281,self__.__meta,self__.__extmap,null));
} else {
return (new frp.primitives.event.Event(self__.net_id,self__.entity_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__56281),null));
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

frp.primitives.event.Event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__56281){
var self__ = this;
var this__4384__auto____$1 = this;
return (new frp.primitives.event.Event(self__.net_id,self__.entity_id,G__56281,self__.__extmap,self__.__hash));
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
var G__56487 = null;
var G__56487__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3(self__.net_id,self__.entity_id,aid.unit.unit) : frp.primitives.event.invoke_STAR_.call(null,self__.net_id,self__.entity_id,aid.unit.unit));
});
var G__56487__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.invoke_STAR_.cljs$core$IFn$_invoke$arity$3(self__.net_id,self__.entity_id,a) : frp.primitives.event.invoke_STAR_.call(null,self__.net_id,self__.entity_id,a));
});
G__56487 = function(self__,a){
switch(arguments.length){
case 1:
return G__56487__1.call(this,self__);
case 2:
return G__56487__2.call(this,self__,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__56487.cljs$core$IFn$_invoke$arity$1 = G__56487__1;
G__56487.cljs$core$IFn$_invoke$arity$2 = G__56487__2;
return G__56487;
})()
;

frp.primitives.event.Event.prototype.apply = (function (self__,args56286){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56286)));
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
return frp.primitives.event.get_occs(self__.entity_id,(function (){var G__56300 = cljs.core.deref(frp.primitives.net.universe_state);
return (self__.net_id.cljs$core$IFn$_invoke$arity$1 ? self__.net_id.cljs$core$IFn$_invoke$arity$1(G__56300) : self__.net_id.call(null,G__56300));
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
frp.primitives.event.map__GT_Event = (function frp$primitives$event$map__GT_Event(G__56285){
var extmap__4424__auto__ = (function (){var G__56301 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56285,new cljs.core.Keyword(null,"net-id","net-id",418155108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)], 0));
if(cljs.core.record_QMARK_(G__56285)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56301);
} else {
return G__56301;
}
})();
return (new frp.primitives.event.Event(new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(G__56285),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(G__56285),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cats.util.make_printable(frp.primitives.event.Event);
frp.primitives.event.event_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,frp.primitives.event.Event);
frp.primitives.event.event_STAR__STAR_ = (function frp$primitives$event$event_STAR__STAR_(net_id,entity_id,fs){
var G__56302_56496 = net_id;
var G__56303_56497 = cljs.core.cons((function (){var G__56304 = cljs.core.PersistentVector.EMPTY;
var G__56305 = entity_id;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$2(G__56304,G__56305) : frp.primitives.event.set_occs.call(null,G__56304,G__56305));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__56306 = aid.core.curry.cljs$core$IFn$_invoke$arity$2((3),aid.core.flip(aid.core.funcall));
return (fexpr__56306.cljs$core$IFn$_invoke$arity$1 ? fexpr__56306.cljs$core$IFn$_invoke$arity$1(entity_id) : fexpr__56306.call(null,entity_id));
})(),fs));
(frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__56302_56496,G__56303_56497) : frp.primitives.event.call_functions_BANG_.call(null,G__56302_56496,G__56303_56497));

return (new frp.primitives.event.Event(net_id,entity_id,null,null,null));
});
frp.primitives.event.event_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (net_id,fs){
return frp.primitives.event.event_STAR__STAR_(net_id,(function (){var G__56307 = new cljs.core.Keyword(null,"occs","occs",-482222641).cljs$core$IFn$_invoke$arity$1((function (){var G__56308 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__56308) : net_id.call(null,G__56308));
})());
return (frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1(G__56307) : frp.primitives.net.get_id.call(null,G__56307));
})(),fs);
}));
frp.primitives.event.get_unit = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.tuple.tuple,frp.time.epoch);
frp.primitives.event.add_edge = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (parent_id,child_id,net){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56309;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56310 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203)], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
frp.primitives.event.pathcache56309 = info56310;

return info56310;
})():info__41236__auto__);
var precompiled56311 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56312 = cljs.core.PersistentVector.EMPTY;
return (precompiled56311.cljs$core$IFn$_invoke$arity$1 ? precompiled56311.cljs$core$IFn$_invoke$arity$1(G__56312) : precompiled56311.call(null,G__56312));
} else {
return precompiled56311;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(loom.graph.add_edges),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,child_id], null)),net);
}));
frp.primitives.event.get_latests = (function frp$primitives$event$get_latests(entity_id,net){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(net)),frp.tuple.fst),frp.primitives.event.get_occs(entity_id,net));
});
frp.primitives.event.get_occs_or_latests = (function frp$primitives$event$get_occs_or_latests(initial,entity_id,net){
var fexpr__56313 = (cljs.core.truth_(initial)?frp.primitives.event.get_occs:frp.primitives.event.get_latests);
return (fexpr__56313.cljs$core$IFn$_invoke$arity$2 ? fexpr__56313.cljs$core$IFn$_invoke$arity$2(entity_id,net) : fexpr__56313.call(null,entity_id,net));
});
frp.primitives.event.modify__LT_$_GT_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(6,(function (f_BANG_,net_id,parent_id,initial,child_id,net){
var G__56314 = (function (){var _STAR_net_id_STAR__orig_val__56317 = frp.primitives.net._STAR_net_id_STAR_;
var _STAR_net_id_STAR__temp_val__56318 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(frp.primitives.net.__GT_Net(net_id));
frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__temp_val__56318;

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.core._LT_$_GT_,f_BANG_),frp.primitives.event.get_occs_or_latests(initial,parent_id,net));
}finally {frp.primitives.net._STAR_net_id_STAR_ = _STAR_net_id_STAR__orig_val__56317;
}})();
var G__56315 = child_id;
var G__56316 = (function (){var G__56319 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__56319) : net_id.call(null,G__56319));
})();
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__56314,G__56315,G__56316) : frp.primitives.event.set_occs.call(null,G__56314,G__56315,G__56316));
}));
frp.primitives.event.make_call_once = (function frp$primitives$event$make_call_once(entity_id,modify_BANG_){
var G__56320 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(entity_id,new cljs.core.Keyword(null,"modified","modified",-2134587826));
var G__56321 = modify_BANG_;
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__56320,G__56321) : aid.core.if_else.call(null,G__56320,G__56321));
});
frp.primitives.event.set_modification = (function frp$primitives$event$set_modification(entity_id,modify_BANG_,net){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56322;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56323 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null));
frp.primitives.event.pathcache56322 = info56323;

return info56323;
})():info__41236__auto__);
var precompiled56324 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),entity_id], null),entity_id], null);
return (precompiled56324.cljs$core$IFn$_invoke$arity$1 ? precompiled56324.cljs$core$IFn$_invoke$arity$1(G__56325) : precompiled56324.call(null,G__56325));
} else {
return precompiled56324;
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
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56326;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56327 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(frp.primitives.event.snth,new cljs.core.Var(function(){return frp.primitives.event.snth;},new cljs.core.Symbol("frp.primitives.event","snth","frp.primitives.event/snth",-1949968363,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"frp.primitives.event","frp.primitives.event",800488888,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"snth","snth",187852491,null),"frp/primitives/event.cljc",10,1,257,257,cljs.core.List.EMPTY,null,(cljs.core.truth_(frp.primitives.event.snth)?frp.primitives.event.snth.cljs$lang$test:null)])),new cljs.core.Symbol(null,"snth","snth",187852491,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core._,new cljs.core.Var(function(){return cljs.core._;},new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"-","-",-471816912,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2606),(2606),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no ys are supplied, returns the negation of x, else subtracts\n  the ys from x and returns the result.",(cljs.core.truth_(cljs.core._)?cljs.core._.cljs$lang$test:null)])),new cljs.core.Symbol(null,"-","-",-471816912,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.count,new cljs.core.Var(function(){return cljs.core.count;},new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"count","count",-514511684,null),"cljs/core.cljs",(12),(1),(1814),(1814),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns the number of items in the collection. (count nil) returns\n  0.  Also works on strings, arrays, and Maps",(cljs.core.truth_(cljs.core.count)?cljs.core.count.cljs$lang$test:null)])),new cljs.core.Symbol(null,"count","count",-514511684,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_LocalSym(entity_id,new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(net,new cljs.core.Symbol(null,"net","net",1984574066,null))], null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null))))),(2)], null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))),(2)))], null),cljs.core.list(new cljs.core.Symbol(null,"snth","snth",187852491,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))),(2))))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.Symbol(null,"net","net",1984574066,null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Symbol(null,"snth","snth",187852491,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),cljs.core.list(new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Symbol(null,"net","net",1984574066,null)))),(2)))], null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.Symbol(null,"snth","snth",187852491,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.Symbol(null,"net","net",1984574066,null)], null));
frp.primitives.event.pathcache56326 = info56327;

return info56327;
})():info__41236__auto__);
var precompiled56328 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56329 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifications","modifications",2043415709),entity_id,(function (){var G__56330 = (cljs.core.count((function (){var G__56331 = new cljs.core.Keyword(null,"modifications","modifications",2043415709).cljs$core$IFn$_invoke$arity$1(net);
return (entity_id.cljs$core$IFn$_invoke$arity$1 ? entity_id.cljs$core$IFn$_invoke$arity$1(G__56331) : entity_id.call(null,G__56331));
})()) - (2));
return (frp.primitives.event.snth.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.snth.cljs$core$IFn$_invoke$arity$1(G__56330) : frp.primitives.event.snth.call(null,G__56330));
})()], null),entity_id,frp.primitives.event.snth,cljs.core._,cljs.core.count,entity_id,net], null);
return (precompiled56328.cljs$core$IFn$_invoke$arity$1 ? precompiled56328.cljs$core$IFn$_invoke$arity$1(G__56329) : precompiled56328.call(null,G__56329));
} else {
return precompiled56328;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.primitives.event.make_call_once(entity_id,modify_BANG_)], null),net);
});
frp.primitives.event.insert_merge_sync = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (parent_id,child_id,net){
return frp.primitives.event.insert_modification((function (p1__56332_SHARP_){
var G__56333 = frp.primitives.event.get_latests(parent_id,p1__56332_SHARP_);
var G__56334 = child_id;
var G__56335 = p1__56332_SHARP_;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__56333,G__56334,G__56335) : frp.primitives.event.set_occs.call(null,G__56333,G__56334,G__56335));
}),child_id,net);
}));
frp.primitives.event.delay_time_occs = (function frp$primitives$event$delay_time_occs(t,occs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.core._LT__STAR__GT_,(frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2 ? frp.tuple.tuple.cljs$core$IFn$_invoke$arity$2(t,cljs.core.identity) : frp.tuple.tuple.call(null,t,cljs.core.identity))),occs);
});
frp.primitives.event.delay_sync = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (parent_id,child_id,net){
cljs.core.run_BANG_((function (p1__56336_SHARP_){
if(cljs.core.truth_((function (){var G__56338 = frp.tuple.fst.cljs$core$IFn$_invoke$arity$1(p1__56336_SHARP_);
var fexpr__56337 = cljs.core.set(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.time.epoch,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(net)], null));
return (fexpr__56337.cljs$core$IFn$_invoke$arity$1 ? fexpr__56337.cljs$core$IFn$_invoke$arity$1(G__56338) : fexpr__56337.call(null,G__56338));
})())){
return null;
} else {
throw (new Error("Assert failed: ((set [time/epoch (:time net)]) (tuple/fst p1__56336#))"));
}
}),frp.primitives.event.get_occs(parent_id,net));

var G__56339 = frp.primitives.event.delay_time_occs(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(net),frp.primitives.event.get_occs(parent_id,net));
var G__56340 = child_id;
var G__56341 = net;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__56339,G__56340,G__56341) : frp.primitives.event.set_occs.call(null,G__56339,G__56340,G__56341));
}));
frp.primitives.event.modify_join = aid.core.curry.cljs$core$IFn$_invoke$arity$2(5,(function (net_id,parent_id,initial,child_id,net){
var G__56342 = net_id;
var G__56343 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,((function (G__56342){
return (function (parent_id_STAR_,_){
var G__56344 = net_id;
var G__56345 = (function (){var fexpr__56346 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(frp.primitives.event.add_edge,frp.primitives.event.insert_merge_sync,frp.primitives.event.delay_sync);
return (fexpr__56346.cljs$core$IFn$_invoke$arity$2 ? fexpr__56346.cljs$core$IFn$_invoke$arity$2(parent_id_STAR_,child_id) : fexpr__56346.call(null,parent_id_STAR_,child_id));
})();
return (frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__56344,G__56345) : frp.primitives.event.call_functions_BANG_.call(null,G__56344,G__56345));
});})(G__56342))
),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),frp.tuple.snd),frp.primitives.event.get_occs_or_latests(initial,parent_id,net));
return (frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.call_functions_BANG_.cljs$core$IFn$_invoke$arity$2(G__56342,G__56343) : frp.primitives.event.call_functions_BANG_.call(null,G__56342,G__56343));
}));
frp.primitives.event.merge_one = (function frp$primitives$event$merge_one(parent,merged){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56347;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56348 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.primitives.event.pathcache56347 = info56348;

return info56348;
})():info__41236__auto__);
var precompiled56349 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.AFTER_ELEM], null);
return (precompiled56349.cljs$core$IFn$_invoke$arity$1 ? precompiled56349.cljs$core$IFn$_invoke$arity$1(G__56350) : precompiled56349.call(null,G__56350));
} else {
return precompiled56349;
}
})(),cljs.core.first(parent),merged);
});
frp.primitives.event.merge_occs_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (merged,left,right){
while(true){
if(cljs.core.empty_QMARK_(left)){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56351;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56352 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"com/rpl/specter.cljc",6,1,789,791,cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
frp.primitives.event.pathcache56351 = info56352;

return info56352;
})():info__41236__auto__);
var precompiled56353 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56354 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.END], null);
return (precompiled56353.cljs$core$IFn$_invoke$arity$1 ? precompiled56353.cljs$core$IFn$_invoke$arity$1(G__56354) : precompiled56353.call(null,G__56354));
} else {
return precompiled56353;
}
})(),right,merged);
} else {
if(cljs.core.empty_QMARK_(right)){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56355;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56356 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"com/rpl/specter.cljc",6,1,789,791,cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
frp.primitives.event.pathcache56355 = info56356;

return info56356;
})():info__41236__auto__);
var precompiled56357 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.END], null);
return (precompiled56357.cljs$core$IFn$_invoke$arity$1 ? precompiled56357.cljs$core$IFn$_invoke$arity$1(G__56358) : precompiled56357.call(null,G__56358));
} else {
return precompiled56357;
}
})(),left,merged);
} else {
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.helpers._LT__EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.tuple.fst,cljs.core.first),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))))){
var G__56532 = frp.primitives.event.merge_one(left,merged);
var G__56533 = cljs.core.rest(left);
var G__56534 = right;
merged = G__56532;
left = G__56533;
right = G__56534;
continue;
} else {
var G__56536 = frp.primitives.event.merge_one(right,merged);
var G__56537 = left;
var G__56538 = cljs.core.rest(right);
merged = G__56536;
left = G__56537;
right = G__56538;
continue;

}
}
}
break;
}
}));
frp.primitives.event.merge_occs = (function (){var G__56359 = cljs.core.PersistentVector.EMPTY;
return (frp.primitives.event.merge_occs_STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.merge_occs_STAR_.cljs$core$IFn$_invoke$arity$1(G__56359) : frp.primitives.event.merge_occs_STAR_.call(null,G__56359));
})();
frp.primitives.event.modify__LT__GT_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(5,(function (left_id,right_id,initial,child_id,net){
var G__56360 = (function (){var G__56363 = frp.primitives.event.get_occs_or_latests(initial,left_id,net);
var G__56364 = frp.primitives.event.get_occs_or_latests(initial,right_id,net);
return (frp.primitives.event.merge_occs.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.merge_occs.cljs$core$IFn$_invoke$arity$2(G__56363,G__56364) : frp.primitives.event.merge_occs.call(null,G__56363,G__56364));
})();
var G__56361 = child_id;
var G__56362 = net;
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__56360,G__56361,G__56362) : frp.primitives.event.set_occs.call(null,G__56360,G__56361,G__56362));
}));
frp.primitives.event.pure_STAR_ = (function frp$primitives$event$pure_STAR_(net_id,a){
var G__56365 = net_id;
var G__56366 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__56367 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1(a) : frp.primitives.event.get_unit.call(null,a))],null));
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$1(G__56367) : frp.primitives.event.set_occs.call(null,G__56367));
})()],null));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__56365,G__56366) : frp.primitives.event.event_STAR_.call(null,G__56365,G__56366));
});
frp.primitives.event.pure = (function frp$primitives$event$pure(p1__56368_SHARP_){
return frp.primitives.event.pure_STAR_(frp.primitives.net._STAR_net_id_STAR_,p1__56368_SHARP_);
});
frp.primitives.event.mempty_STAR_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(frp.primitives.event.event_STAR_),cljs.core.PersistentVector.EMPTY);
frp.primitives.event.mempty = (function frp$primitives$event$mempty(){
return (frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1(frp.primitives.net._STAR_net_id_STAR_) : frp.primitives.event.mempty_STAR_.call(null,frp.primitives.net._STAR_net_id_STAR_));
});
frp.primitives.event.get_context = (function frp$primitives$event$get_context(net_id){
if((typeof frp !== 'undefined') && (typeof frp.primitives !== 'undefined') && (typeof frp.primitives.event !== 'undefined') && (typeof frp.primitives.event.t_frp$primitives$event56369 !== 'undefined')){
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
frp.primitives.event.t_frp$primitives$event56369 = (function (net_id,meta56370){
this.net_id = net_id;
this.meta56370 = meta56370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,left_event,right_event){
var self__ = this;
var ___$1 = this;
var G__56372 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(left_event);
var G__56373 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.make_set_modification_modification((function (){var G__56374 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(left_event);
var G__56375 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(right_event);
return (frp.primitives.event.modify__LT__GT_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.modify__LT__GT_.cljs$core$IFn$_invoke$arity$2(G__56374,G__56375) : frp.primitives.event.modify__LT__GT_.call(null,G__56374,G__56375));
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.add_edge,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_event,right_event], null)));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__56372,G__56373) : frp.primitives.event.event_STAR_.call(null,G__56372,G__56373));
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f_BANG_,fa){
var self__ = this;
var ___$1 = this;
var G__56376 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(fa);
var G__56377 = cljs.core.cons((function (){var G__56378 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(fa);
return (frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1(G__56378) : frp.primitives.event.add_edge.call(null,G__56378));
})(),frp.primitives.event.make_set_modification_modification((function (){var fexpr__56383 = ((function (G__56376,___$1){
return (function() { 
var G__56554__delegate = function (more__56384__auto__){
var G__56386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"net-id","net-id",418155108),more__56384__auto__);
var G__56387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),more__56384__auto__);
var fexpr__56385 = (frp.primitives.event.modify__LT_$_GT_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.modify__LT_$_GT_.cljs$core$IFn$_invoke$arity$1(f_BANG_) : frp.primitives.event.modify__LT_$_GT_.call(null,f_BANG_));
return (fexpr__56385.cljs$core$IFn$_invoke$arity$2 ? fexpr__56385.cljs$core$IFn$_invoke$arity$2(G__56386,G__56387) : fexpr__56385.call(null,G__56386,G__56387));
};
var G__56554 = function (var_args){
var more__56384__auto__ = null;
if (arguments.length > 0) {
var G__56555__i = 0, G__56555__a = new Array(arguments.length -  0);
while (G__56555__i < G__56555__a.length) {G__56555__a[G__56555__i] = arguments[G__56555__i + 0]; ++G__56555__i;}
  more__56384__auto__ = new cljs.core.IndexedSeq(G__56555__a,0,null);
} 
return G__56554__delegate.call(this,more__56384__auto__);};
G__56554.cljs$lang$maxFixedArity = 0;
G__56554.cljs$lang$applyTo = (function (arglist__56556){
var more__56384__auto__ = cljs.core.seq(arglist__56556);
return G__56554__delegate(more__56384__auto__);
});
G__56554.cljs$core$IFn$_invoke$arity$variadic = G__56554__delegate;
return G__56554;
})()
;})(G__56376,___$1))
;
return fexpr__56383.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fa], 0));
})()));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__56376,G__56377) : frp.primitives.event.event_STAR_.call(null,G__56376,G__56377));
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (context,a){
var self__ = this;
var context__$1 = this;
return context__$1.cats$protocols$Applicative$_pure$arity$2(null,a);
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,ma,f_BANG_){
var self__ = this;
var ___$1 = this;
var mb = (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(f_BANG_,ma) : cats.core._LT_$_GT_.call(null,f_BANG_,ma));
var G__56388 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(mb);
var G__56389 = cljs.core.cons((function (){var G__56390 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(mb);
return (frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1(G__56390) : frp.primitives.event.add_edge.call(null,G__56390));
})(),frp.primitives.event.make_set_modification_modification((function (){var fexpr__56394 = ((function (G__56388,mb,___$1){
return (function() { 
var G__56560__delegate = function (more__56395__auto__){
var G__56396 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"net-id","net-id",418155108),more__56395__auto__);
var G__56397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),more__56395__auto__);
return (frp.primitives.event.modify_join.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.modify_join.cljs$core$IFn$_invoke$arity$2(G__56396,G__56397) : frp.primitives.event.modify_join.call(null,G__56396,G__56397));
};
var G__56560 = function (var_args){
var more__56395__auto__ = null;
if (arguments.length > 0) {
var G__56561__i = 0, G__56561__a = new Array(arguments.length -  0);
while (G__56561__i < G__56561__a.length) {G__56561__a[G__56561__i] = arguments[G__56561__i + 0]; ++G__56561__i;}
  more__56395__auto__ = new cljs.core.IndexedSeq(G__56561__a,0,null);
} 
return G__56560__delegate.call(this,more__56395__auto__);};
G__56560.cljs$lang$maxFixedArity = 0;
G__56560.cljs$lang$applyTo = (function (arglist__56562){
var more__56395__auto__ = cljs.core.seq(arglist__56562);
return G__56560__delegate(more__56395__auto__);
});
G__56560.cljs$core$IFn$_invoke$arity$variadic = G__56560__delegate;
return G__56560;
})()
;})(G__56388,mb,___$1))
;
return fexpr__56394.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mb], 0));
})()));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__56388,G__56389) : frp.primitives.event.event_STAR_.call(null,G__56388,G__56389));
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56371){
var self__ = this;
var _56371__$1 = this;
return self__.meta56370;
});

frp.primitives.event.t_frp$primitives$event56369.prototype.frp$protocols$Entity$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event56369.prototype.frp$protocols$Entity$_get_net_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.net_id;
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (context){
var self__ = this;
var context__$1 = this;
var G__56398 = context__$1.frp$protocols$Entity$_get_net_id$arity$1(null);
return (frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.mempty_STAR_.cljs$core$IFn$_invoke$arity$1(G__56398) : frp.primitives.event.mempty_STAR_.call(null,G__56398));
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56371,meta56370__$1){
var self__ = this;
var _56371__$1 = this;
return (new frp.primitives.event.t_frp$primitives$event56369(self__.net_id,meta56370__$1));
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (context,a){
var self__ = this;
var context__$1 = this;
return frp.primitives.event.pure_STAR_(context__$1.frp$protocols$Entity$_get_net_id$arity$1(null),a);
});

frp.primitives.event.t_frp$primitives$event56369.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,fab,fa){
var self__ = this;
var ___$1 = this;
return aid.core.ap(fab,fa);
});

frp.primitives.event.t_frp$primitives$event56369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Symbol(null,"meta56370","meta56370",165455483,null)], null);
});

frp.primitives.event.t_frp$primitives$event56369.cljs$lang$type = true;

frp.primitives.event.t_frp$primitives$event56369.cljs$lang$ctorStr = "frp.primitives.event/t_frp$primitives$event56369";

frp.primitives.event.t_frp$primitives$event56369.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"frp.primitives.event/t_frp$primitives$event56369");
});

/**
 * Positional factory function for frp.primitives.event/t_frp$primitives$event56369.
 */
frp.primitives.event.__GT_t_frp$primitives$event56369 = (function frp$primitives$event$get_context_$___GT_t_frp$primitives$event56369(net_id__$1,meta56370){
return (new frp.primitives.event.t_frp$primitives$event56369(net_id__$1,meta56370));
});

}

return (new frp.primitives.event.t_frp$primitives$event56369(net_id,cljs.core.PersistentArrayMap.EMPTY));
});
frp.primitives.event.get_elements = (function frp$primitives$event$get_elements(step_BANG_,entity_id,initial,net){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.core._LT_$_GT_,cljs.core.deref),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.monad.maybe.just_QMARK_,frp.tuple.snd),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,new cljs.core.Keyword(null,"snd","snd",643718828),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.unreduced,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(step_BANG_,aid.core.nothing))),frp.primitives.event.get_occs_or_latests(initial,entity_id,net))));
});
frp.primitives.event.get_transduction = (function frp$primitives$event$get_transduction(init,occs,reduction){
return cljs.core.last(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1(init) : frp.primitives.event.get_unit.call(null,init))],null)),occs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reduction], 0)));
});
frp.primitives.event.get_accumulator = aid.core.curry.cljs$core$IFn$_invoke$arity$2(6,(function (f_BANG_,init,entity_id,net,reduction,element){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56399;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56400 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.primitives.event.pathcache56399 = info56400;

return info56400;
})():info__41236__auto__);
var precompiled56401 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.AFTER_ELEM], null);
return (precompiled56401.cljs$core$IFn$_invoke$arity$1 ? precompiled56401.cljs$core$IFn$_invoke$arity$1(G__56402) : precompiled56401.call(null,G__56402));
} else {
return precompiled56401;
}
})(),(function (){var G__56404 = frp.primitives.event.get_transduction(init,frp.primitives.event.get_occs(entity_id,net),reduction);
var G__56405 = element;
var fexpr__56403 = aid.core.lift_a(f_BANG_);
return (fexpr__56403.cljs$core$IFn$_invoke$arity$2 ? fexpr__56403.cljs$core$IFn$_invoke$arity$2(G__56404,G__56405) : fexpr__56403.call(null,G__56404,G__56405));
})(),reduction);
}));
frp.primitives.event.make_modify_transduce = (function frp$primitives$event$make_modify_transduce(p1__56406_SHARP_){
var step_BANG_ = (function (){var G__56407 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cats.monad.maybe.just,cljs.core.second,cljs.core.vector);
return (p1__56406_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56406_SHARP_.cljs$core$IFn$_invoke$arity$1(G__56407) : p1__56406_SHARP_.call(null,G__56407));
})();
return aid.core.curry.cljs$core$IFn$_invoke$arity$2(7,((function (step_BANG_){
return (function (f_BANG_,init,net_id,parent_id,initial,child_id,net){
var G__56408 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((frp.primitives.event.get_accumulator.cljs$core$IFn$_invoke$arity$4 ? frp.primitives.event.get_accumulator.cljs$core$IFn$_invoke$arity$4(f_BANG_,init,child_id,net) : frp.primitives.event.get_accumulator.call(null,f_BANG_,init,child_id,net)),cljs.core.PersistentVector.EMPTY,frp.primitives.event.get_elements(step_BANG_,parent_id,initial,net));
var G__56409 = child_id;
var G__56410 = (function (){var G__56411 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__56411) : net_id.call(null,G__56411));
})();
return (frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.set_occs.cljs$core$IFn$_invoke$arity$3(G__56408,G__56409,G__56410) : frp.primitives.event.set_occs.call(null,G__56408,G__56409,G__56410));
});})(step_BANG_))
);
});
frp.primitives.event.transduce = (function frp$primitives$event$transduce(var_args){
var G__56413 = arguments.length;
switch (G__56413) {
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
var G__56414 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(e);
var G__56415 = cljs.core.cons((function (){var G__56416 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(e);
return (frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.add_edge.cljs$core$IFn$_invoke$arity$1(G__56416) : frp.primitives.event.add_edge.call(null,G__56416));
})(),frp.primitives.event.make_set_modification_modification((function (){var fexpr__56423 = ((function (G__56414){
return (function() { 
var G__56568__delegate = function (more__56424__auto__){
var G__56427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"net-id","net-id",418155108),more__56424__auto__);
var G__56428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),more__56424__auto__);
var fexpr__56426 = (function (){var fexpr__56429 = frp.primitives.event.make_modify_transduce(xform);
return (fexpr__56429.cljs$core$IFn$_invoke$arity$2 ? fexpr__56429.cljs$core$IFn$_invoke$arity$2(f,init) : fexpr__56429.call(null,f,init));
})();
return (fexpr__56426.cljs$core$IFn$_invoke$arity$2 ? fexpr__56426.cljs$core$IFn$_invoke$arity$2(G__56427,G__56428) : fexpr__56426.call(null,G__56427,G__56428));
};
var G__56568 = function (var_args){
var more__56424__auto__ = null;
if (arguments.length > 0) {
var G__56569__i = 0, G__56569__a = new Array(arguments.length -  0);
while (G__56569__i < G__56569__a.length) {G__56569__a[G__56569__i] = arguments[G__56569__i + 0]; ++G__56569__i;}
  more__56424__auto__ = new cljs.core.IndexedSeq(G__56569__a,0,null);
} 
return G__56568__delegate.call(this,more__56424__auto__);};
G__56568.cljs$lang$maxFixedArity = 0;
G__56568.cljs$lang$applyTo = (function (arglist__56570){
var more__56424__auto__ = cljs.core.seq(arglist__56570);
return G__56568__delegate(more__56424__auto__);
});
G__56568.cljs$core$IFn$_invoke$arity$variadic = G__56568__delegate;
return G__56568;
})()
;})(G__56414))
;
return fexpr__56423.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
})()));
return (frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.event_STAR_.cljs$core$IFn$_invoke$arity$2(G__56414,G__56415) : frp.primitives.event.event_STAR_.call(null,G__56414,G__56415));
});

frp.primitives.event.transduce.cljs$lang$maxFixedArity = 4;

frp.primitives.event.snapshot = (function frp$primitives$event$snapshot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56571 = arguments.length;
var i__4731__auto___56572 = (0);
while(true){
if((i__4731__auto___56572 < len__4730__auto___56571)){
args__4736__auto__.push((arguments[i__4731__auto___56572]));

var G__56573 = (i__4731__auto___56572 + (1));
i__4731__auto___56572 = G__56573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return frp.primitives.event.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

frp.primitives.event.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (e,bs){
var G__56433 = (function (p1__56430_SHARP_){
return cljs.core.cons(p1__56430_SHARP_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,bs));
});
var G__56434 = e;
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__56433,G__56434) : cats.core._LT_$_GT_.call(null,G__56433,G__56434));
});

frp.primitives.event.snapshot.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
frp.primitives.event.snapshot.cljs$lang$applyTo = (function (seq56431){
var G__56432 = cljs.core.first(seq56431);
var seq56431__$1 = cljs.core.next(seq56431);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56432,seq56431__$1);
});

frp.primitives.event.handle = (function frp$primitives$event$handle(p1__56435_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1((function (){var G__56436 = cljs.core.deref(frp.primitives.net.universe_state);
return (p1__56435_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56435_SHARP_.cljs$core$IFn$_invoke$arity$1(G__56436) : p1__56435_SHARP_.call(null,G__56436));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56435_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null),frp.primitives.net.get_new_time(frp.time.now())));

return frp.primitives.net.run_effects_twice_BANG_(p1__56435_SHARP_);
} else {
return null;
}
});
frp.primitives.event.append_cancellation = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (net_id,f_BANG_,universe){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56437;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56438 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(net_id,new cljs.core.Symbol(null,"net-id","net-id",2058686635,null)),new cljs.core.Keyword(null,"cancellations","cancellations",724023423),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.AFTER_ELEM,new cljs.core.Var(function(){return com.rpl.specter.AFTER_ELEM;},new cljs.core.Symbol("com.rpl.specter","AFTER-ELEM","com.rpl.specter/AFTER-ELEM",202491052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"AFTER-ELEM","AFTER-ELEM",-2084545789,null),"com/rpl/specter.cljc",13,1,833,837,cljs.core.List.EMPTY,"Navigate to 'void' element after the sequence.\n          For transformations \u2013 if result is not `NONE`,\n          then append that value.",(cljs.core.truth_(com.rpl.specter.AFTER_ELEM)?com.rpl.specter.AFTER_ELEM.cljs$lang$test:null)])),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null))], null)], null),"frp.primitives.event",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Keyword(null,"cancellations","cancellations",724023423),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null),new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Symbol("s","AFTER-ELEM","s/AFTER-ELEM",-2084545546,null)], null));
frp.primitives.event.pathcache56437 = info56438;

return info56438;
})():info__41236__auto__);
var precompiled56439 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56440 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [net_id,new cljs.core.Keyword(null,"cancellations","cancellations",724023423),com.rpl.specter.AFTER_ELEM], null),net_id,com.rpl.specter.AFTER_ELEM], null);
return (precompiled56439.cljs$core$IFn$_invoke$arity$1 ? precompiled56439.cljs$core$IFn$_invoke$arity$1(G__56440) : precompiled56439.call(null,G__56440));
} else {
return precompiled56439;
}
})(),f_BANG_,universe);
}));
frp.primitives.event.positive_infinity = Number.POSITIVE_INFINITY;
frp.primitives.event.run_universe_effects_BANG_ = (function frp$primitives$event$run_universe_effects_BANG_(p1__56441_SHARP_){
return cljs.core.run_BANG_(p1__56441_SHARP_,cljs.core.keys(cljs.core.deref(frp.primitives.net.universe_state)));
});
frp.primitives.event.run_effects_once_BANG_ = (function frp$primitives$event$run_effects_once_BANG_(net_id){
frp.primitives.net.set_active(net_id,false);

frp.primitives.net.run_effects_BANG__STAR_(net_id);

return frp.primitives.net.set_active(net_id,true);
});
frp.primitives.event.activate_STAR_ = (function frp$primitives$event$activate_STAR_(rate){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,(function (universe){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (reduction,element){
var G__56442 = element;
var G__56443 = (function (){var pred__56445 = cljs.core._EQ_;
var expr__56446 = rate;
if(cljs.core.truth_((pred__56445.cljs$core$IFn$_invoke$arity$2 ? pred__56445.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.positive_infinity,expr__56446) : pred__56445.call(null,frp.primitives.event.positive_infinity,expr__56446)))){
return aid.core.nop;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clearInterval,setInterval(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.handle,element),rate));
}
})();
var G__56444 = reduction;
return (frp.primitives.event.append_cancellation.cljs$core$IFn$_invoke$arity$3 ? frp.primitives.event.append_cancellation.cljs$core$IFn$_invoke$arity$3(G__56442,G__56443,G__56444) : frp.primitives.event.append_cancellation.call(null,G__56442,G__56443,G__56444));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.reloading_state,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic((function (){var G__56449 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.run_BANG_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,(frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.invoke_STAR__STAR_.cljs$core$IFn$_invoke$arity$1(frp.primitives.net.initial_net_id) : frp.primitives.event.invoke_STAR__STAR_.call(null,frp.primitives.net.initial_net_id))),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,com.rpl.specter.FIRST,alias_id))),new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376));
return (frp.primitives.event.effect.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.effect.cljs$core$IFn$_invoke$arity$1(G__56449) : frp.primitives.event.effect.call(null,G__56449));
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.Keyword(null,"entity-id-invocations","entity-id-invocations",-1645954748),cljs.core.PersistentVector.EMPTY),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),alias_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__56448_SHARP_){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56450;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56451 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"com/rpl/specter.cljc",6,1,789,791,cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
frp.primitives.event.pathcache56450 = info56451;

return info56451;
})():info__41236__auto__);
var precompiled56452 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias-invocations","alias-invocations",490285376),com.rpl.specter.END], null),com.rpl.specter.END], null);
return (precompiled56452.cljs$core$IFn$_invoke$arity$1 ? precompiled56452.cljs$core$IFn$_invoke$arity$1(G__56453) : precompiled56452.call(null,G__56453));
} else {
return precompiled56452;
}
})(),com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.primitives.event.pathcache56454;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info56455 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null))], null)], null),"frp.primitives.event",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null));
frp.primitives.event.pathcache56454 = info56455;

return info56455;
})():info__41236__auto__);
var precompiled56456 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__56457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null),com.rpl.specter.ALL,com.rpl.specter.FIRST], null);
return (precompiled56456.cljs$core$IFn$_invoke$arity$1 ? precompiled56456.cljs$core$IFn$_invoke$arity$1(G__56457) : precompiled56456.call(null,G__56457));
} else {
return precompiled56456;
}
})(),clojure.set.map_invert(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(p1__56448_SHARP_)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(p1__56448_SHARP_)),cljs.core.first),new cljs.core.Keyword(null,"entity-id-invocations","entity-id-invocations",-1645954748).cljs$core$IFn$_invoke$arity$1(p1__56448_SHARP_))),p1__56448_SHARP_);
})], 0)));
} else {
return null;
}
});
frp.primitives.event.get_alias_id = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.hash_map),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(cljs.core.subs),(2)),cljs.core.str),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),cljs.core.deref))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,cljs.core.deref)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.second),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat,cljs.core.ns_interns_STAR_),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.find_ns),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.symbol)], 0));
frp.primitives.event.reload = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.reload_STAR_,frp.primitives.event.get_alias_id);

//# sourceMappingURL=frp.primitives.event.js.map
