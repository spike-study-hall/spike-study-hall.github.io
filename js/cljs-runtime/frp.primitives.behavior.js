goog.provide('frp.primitives.behavior');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('aid.core');
goog.require('cats.builtin');
goog.require('cats.core');
goog.require('cats.protocols');
goog.require('cats.util');
goog.require('com.rpl.specter');
goog.require('frp.primitives.event');
goog.require('frp.primitives.net');
goog.require('frp.protocols');
goog.require('frp.tuple');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
frp.primitives.behavior.Behavior = (function (net_id,entity_id,__meta,__extmap,__hash){
this.net_id = net_id;
this.entity_id = entity_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
frp.primitives.behavior.Behavior.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

frp.primitives.behavior.Behavior.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k60912,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__60916 = k60912;
var G__60916__$1 = (((G__60916 instanceof cljs.core.Keyword))?G__60916.fqn:null);
switch (G__60916__$1) {
case "net-id":
return self__.net_id;

break;
case "entity-id":
return self__.entity_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60912,else__4388__auto__);

}
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__60918){
var vec__60919 = p__60918;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60919,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60919,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#frp.primitives.behavior.Behavior{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"net-id","net-id",418155108),self__.net_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),self__.entity_id],null))], null),self__.__extmap));
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60911){
var self__ = this;
var G__60911__$1 = this;
return (new cljs.core.RecordIter((0),G__60911__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-id","net-id",418155108),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

frp.primitives.behavior.Behavior.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new frp.primitives.behavior.Behavior(self__.net_id,self__.entity_id,self__.__meta,self__.__extmap,self__.__hash));
});

frp.primitives.behavior.Behavior.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__60929 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1846950857 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__60929(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60913,other60914){
var self__ = this;
var this60913__$1 = this;
return (((!((other60914 == null)))) && ((this60913__$1.constructor === other60914.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60913__$1.net_id,other60914.net_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60913__$1.entity_id,other60914.entity_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60913__$1.__extmap,other60914.__extmap)));
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"net-id","net-id",418155108),null,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new frp.primitives.behavior.Behavior(self__.net_id,self__.entity_id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__60911){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__60930 = cljs.core.keyword_identical_QMARK_;
var expr__60931 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__60933 = new cljs.core.Keyword(null,"net-id","net-id",418155108);
var G__60934 = expr__60931;
return (pred__60930.cljs$core$IFn$_invoke$arity$2 ? pred__60930.cljs$core$IFn$_invoke$arity$2(G__60933,G__60934) : pred__60930.call(null,G__60933,G__60934));
})())){
return (new frp.primitives.behavior.Behavior(G__60911,self__.entity_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__60935 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093);
var G__60936 = expr__60931;
return (pred__60930.cljs$core$IFn$_invoke$arity$2 ? pred__60930.cljs$core$IFn$_invoke$arity$2(G__60935,G__60936) : pred__60930.call(null,G__60935,G__60936));
})())){
return (new frp.primitives.behavior.Behavior(self__.net_id,G__60911,self__.__meta,self__.__extmap,null));
} else {
return (new frp.primitives.behavior.Behavior(self__.net_id,self__.entity_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__60911),null));
}
}
});

frp.primitives.behavior.Behavior.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"net-id","net-id",418155108),self__.net_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),self__.entity_id,null))], null),self__.__extmap));
});

frp.primitives.behavior.Behavior.prototype.frp$protocols$Entity$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.Behavior.prototype.frp$protocols$Entity$_get_keyword$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"behavior","behavior",1202392908);
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__60911){
var self__ = this;
var this__4384__auto____$1 = this;
return (new frp.primitives.behavior.Behavior(self__.net_id,self__.entity_id,G__60911,self__.__extmap,self__.__hash));
});

frp.primitives.behavior.Behavior.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

frp.primitives.behavior.Behavior.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__60940 = (function (){var G__60941 = cljs.core.deref(frp.primitives.net.universe_state);
return (self__.net_id.cljs$core$IFn$_invoke$arity$1 ? self__.net_id.cljs$core$IFn$_invoke$arity$1(G__60941) : self__.net_id.call(null,G__60941));
})();
var fexpr__60939 = (function (){var G__60942 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(self__.entity_id,new cljs.core.Keyword(null,"function","function",-2127255473));
var G__60943 = new cljs.core.Keyword(null,"time","time",1385887882);
return (cats.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$2(G__60942,G__60943) : cats.core._LT__STAR__GT_.call(null,G__60942,G__60943));
})();
return (fexpr__60939.cljs$core$IFn$_invoke$arity$1 ? fexpr__60939.cljs$core$IFn$_invoke$arity$1(G__60940) : fexpr__60939.call(null,G__60940));
});

frp.primitives.behavior.Behavior.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.Behavior.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#[behavior ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.net_id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.entity_id),"]"].join('');
});

frp.primitives.behavior.Behavior.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.Behavior.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (frp.primitives.behavior.get_context.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.behavior.get_context.cljs$core$IFn$_invoke$arity$1(self__.net_id) : frp.primitives.behavior.get_context.call(null,self__.net_id));
});

frp.primitives.behavior.Behavior.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null)], null);
});

frp.primitives.behavior.Behavior.cljs$lang$type = true;

frp.primitives.behavior.Behavior.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"frp.primitives.behavior/Behavior",null,(1),null));
});

frp.primitives.behavior.Behavior.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"frp.primitives.behavior/Behavior");
});

/**
 * Positional factory function for frp.primitives.behavior/Behavior.
 */
frp.primitives.behavior.__GT_Behavior = (function frp$primitives$behavior$__GT_Behavior(net_id,entity_id){
return (new frp.primitives.behavior.Behavior(net_id,entity_id,null,null,null));
});

/**
 * Factory function for frp.primitives.behavior/Behavior, taking a map of keywords to field values.
 */
frp.primitives.behavior.map__GT_Behavior = (function frp$primitives$behavior$map__GT_Behavior(G__60915){
var extmap__4424__auto__ = (function (){var G__60949 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60915,new cljs.core.Keyword(null,"net-id","net-id",418155108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entity-id","entity-id",1485898093)], 0));
if(cljs.core.record_QMARK_(G__60915)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60949);
} else {
return G__60949;
}
})();
return (new frp.primitives.behavior.Behavior(new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(G__60915),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(G__60915),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cats.util.make_printable(frp.primitives.behavior.Behavior);
frp.primitives.behavior.behavior_STAR__STAR_ = (function frp$primitives$behavior$behavior_STAR__STAR_(net_id,entity_id,f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [net_id,new cljs.core.Keyword(null,"function","function",-2127255473),entity_id], null),f));

return (new frp.primitives.behavior.Behavior(net_id,entity_id,null,null,null));
});
frp.primitives.behavior.behavior_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (net_id,f){
return frp.primitives.behavior.behavior_STAR__STAR_(net_id,(function (){var G__60957 = new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1((function (){var G__60958 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__60958) : net_id.call(null,G__60958));
})());
return (frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1(G__60957) : frp.primitives.net.get_id.call(null,G__60957));
})(),f);
}));
frp.primitives.behavior.get_function = (function frp$primitives$behavior$get_function(b,net){
var G__60964 = new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(net);
var fexpr__60963 = new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(b);
return (fexpr__60963.cljs$core$IFn$_invoke$arity$1 ? fexpr__60963.cljs$core$IFn$_invoke$arity$1(G__60964) : fexpr__60963.call(null,G__60964));
});
frp.primitives.behavior.get_value = (function frp$primitives$behavior$get_value(b,t,net){
var fexpr__60966 = frp.primitives.behavior.get_function(b,net);
return (fexpr__60966.cljs$core$IFn$_invoke$arity$1 ? fexpr__60966.cljs$core$IFn$_invoke$arity$1(t) : fexpr__60966.call(null,t));
});
frp.primitives.behavior.get_universe_value = (function frp$primitives$behavior$get_universe_value(b,t,universe){
return frp.primitives.behavior.get_value(b,t,(function (){var fexpr__60972 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(b);
return (fexpr__60972.cljs$core$IFn$_invoke$arity$1 ? fexpr__60972.cljs$core$IFn$_invoke$arity$1(universe) : fexpr__60972.call(null,universe));
})());
});
frp.primitives.behavior.pure_STAR_ = (function frp$primitives$behavior$pure_STAR_(net_id,f){
var G__60973 = net_id;
var G__60974 = cljs.core.constantly(f);
return (frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2(G__60973,G__60974) : frp.primitives.behavior.behavior_STAR_.call(null,G__60973,G__60974));
});
frp.primitives.behavior.pure = (function frp$primitives$behavior$pure(p1__60975_SHARP_){
return frp.primitives.behavior.pure_STAR_(frp.primitives.net._STAR_net_id_STAR_,p1__60975_SHARP_);
});
frp.primitives.behavior.join = (function frp$primitives$behavior$join(b){
var G__60978 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(b);
var G__60979 = ((function (G__60978){
return (function (p1__60977_SHARP_){
return frp.primitives.behavior.get_value(frp.primitives.behavior.get_value(b,p1__60977_SHARP_,(function (){var G__60981 = cljs.core.deref(frp.primitives.net.universe_state);
var fexpr__60980 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(b);
return (fexpr__60980.cljs$core$IFn$_invoke$arity$1 ? fexpr__60980.cljs$core$IFn$_invoke$arity$1(G__60981) : fexpr__60980.call(null,G__60981));
})()),p1__60977_SHARP_,(function (){var G__60983 = cljs.core.deref(frp.primitives.net.universe_state);
var fexpr__60982 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(b);
return (fexpr__60982.cljs$core$IFn$_invoke$arity$1 ? fexpr__60982.cljs$core$IFn$_invoke$arity$1(G__60983) : fexpr__60982.call(null,G__60983));
})());
});})(G__60978))
;
return (frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2(G__60978,G__60979) : frp.primitives.behavior.behavior_STAR_.call(null,G__60978,G__60979));
});
frp.primitives.behavior.get_context = (function frp$primitives$behavior$get_context(net_id){
if((typeof frp !== 'undefined') && (typeof frp.primitives !== 'undefined') && (typeof frp.primitives.behavior !== 'undefined') && (typeof frp.primitives.behavior.t_frp$primitives$behavior60986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {frp.protocols.Entity}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
frp.primitives.behavior.t_frp$primitives$behavior60986 = (function (net_id,meta60987){
this.net_id = net_id;
this.meta60987 = meta60987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60988,meta60987__$1){
var self__ = this;
var _60988__$1 = this;
return (new frp.primitives.behavior.t_frp$primitives$behavior60986(self__.net_id,meta60987__$1));
});

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60988){
var self__ = this;
var _60988__$1 = this;
return self__.meta60987;
});

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.frp$protocols$Entity$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.frp$protocols$Entity$_get_net_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.net_id;
});

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f_BANG_,fa){
var self__ = this;
var ___$1 = this;
var G__60989 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(fa);
var G__60990 = ((function (G__60989,___$1){
return (function (p1__60984_SHARP_){
var G__60991 = frp.primitives.behavior.get_universe_value(fa,p1__60984_SHARP_,cljs.core.deref(frp.primitives.net.universe_state));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__60991) : f_BANG_.call(null,G__60991));
});})(G__60989,___$1))
;
return (frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2(G__60989,G__60990) : frp.primitives.behavior.behavior_STAR_.call(null,G__60989,G__60990));
});

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (context_STAR_,a){
var self__ = this;
var context_STAR___$1 = this;
return frp.primitives.behavior.pure_STAR_(context_STAR___$1.frp$protocols$Entity$_get_net_id$arity$1(null),a);
});

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,fab,fa){
var self__ = this;
var ___$1 = this;
var G__60993 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(fab);
var G__60994 = ((function (G__60993,___$1){
return (function (p1__60985_SHARP_){
var G__60996 = frp.primitives.behavior.get_universe_value(fa,p1__60985_SHARP_,cljs.core.deref(frp.primitives.net.universe_state));
var fexpr__60995 = frp.primitives.behavior.get_universe_value(fab,p1__60985_SHARP_,cljs.core.deref(frp.primitives.net.universe_state));
return (fexpr__60995.cljs$core$IFn$_invoke$arity$1 ? fexpr__60995.cljs$core$IFn$_invoke$arity$1(G__60996) : fexpr__60995.call(null,G__60996));
});})(G__60993,___$1))
;
return (frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2(G__60993,G__60994) : frp.primitives.behavior.behavior_STAR_.call(null,G__60993,G__60994));
});

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (context_STAR_,a){
var self__ = this;
var context_STAR___$1 = this;
return context_STAR___$1.cats$protocols$Applicative$_pure$arity$2(null,a);
});

frp.primitives.behavior.t_frp$primitives$behavior60986.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,ma,f_BANG_){
var self__ = this;
var ___$1 = this;
return frp.primitives.behavior.join((cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(f_BANG_,ma) : cats.core._LT_$_GT_.call(null,f_BANG_,ma)));
});

frp.primitives.behavior.t_frp$primitives$behavior60986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null),new cljs.core.Symbol(null,"meta60987","meta60987",437938324,null)], null);
});

frp.primitives.behavior.t_frp$primitives$behavior60986.cljs$lang$type = true;

frp.primitives.behavior.t_frp$primitives$behavior60986.cljs$lang$ctorStr = "frp.primitives.behavior/t_frp$primitives$behavior60986";

frp.primitives.behavior.t_frp$primitives$behavior60986.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"frp.primitives.behavior/t_frp$primitives$behavior60986");
});

/**
 * Positional factory function for frp.primitives.behavior/t_frp$primitives$behavior60986.
 */
frp.primitives.behavior.__GT_t_frp$primitives$behavior60986 = (function frp$primitives$behavior$get_context_$___GT_t_frp$primitives$behavior60986(net_id__$1,meta60987){
return (new frp.primitives.behavior.t_frp$primitives$behavior60986(net_id__$1,meta60987));
});

}

return (new frp.primitives.behavior.t_frp$primitives$behavior60986(net_id,cljs.core.PersistentArrayMap.EMPTY));
});
frp.primitives.behavior.stop = (function frp$primitives$behavior$stop(){
var fexpr__60997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.juxt,aid.core.nop,new cljs.core.Keyword(null,"cancellations","cancellations",724023423).cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.deref(frp.primitives.net.universe_state))));
return (fexpr__60997.cljs$core$IFn$_invoke$arity$0 ? fexpr__60997.cljs$core$IFn$_invoke$arity$0() : fexpr__60997.call(null));
});
frp.primitives.behavior.rename_id = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (to,from,universe){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = frp.primitives.behavior.pathcache61001;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info61002 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(new cljs.core.Keyword(null,"net-id","net-id",418155108),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(to,new cljs.core.Symbol(null,"to","to",1832630534,null))], null),cljs.core.list(new cljs.core.Keyword(null,"net-id","net-id",418155108),new cljs.core.Symbol(null,"to","to",1832630534,null))),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.apply,new cljs.core.Var(function(){return cljs.core.apply;},new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"apply","apply",-1334050276,null),"cljs/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(5),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(5),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null,null)], null),(1),(3922),(3922),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"Applies fn f to the argument list formed by prepending intervening arguments to args.",(cljs.core.truth_(cljs.core.apply)?cljs.core.apply.cljs$lang$test:null)])),new cljs.core.Symbol(null,"apply","apply",-1334050276,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.multi_path,new cljs.core.Var(function(){return com.rpl.specter.multi_path;},new cljs.core.Symbol("com.rpl.specter","multi-path","com.rpl.specter/multi-path",-1001794121,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"multi-path","multi-path",-1340561368,null),"com/rpl/specter.cljc",26,1,1408,1408,cljs.core.List.EMPTY,"A path that branches on multiple paths. For updates,\n   applies updates to the paths in order.",(cljs.core.truth_(com.rpl.specter.multi_path)?com.rpl.specter.multi_path.cljs$lang$test:null)])),new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.map,new cljs.core.Var(function(){return cljs.core.map;},new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),"cljs/core.cljs",(10),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(4),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(4),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"colls","colls",-397642425,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null,null)], null),(1),(4693),(4693),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"colls","colls",-397642425,null)], null)),"Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.",(cljs.core.truth_(cljs.core.map)?cljs.core.map.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map","map",-1282745308,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.must,new cljs.core.Var(function(){return com.rpl.specter.must;},new cljs.core.Symbol("com.rpl.specter","must","com.rpl.specter/must",-588449247,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"must","must",1396579466,null),"com/rpl/specter.cljc",7,1,956,959,cljs.core.List.EMPTY,"Navigate to the specified keys one after another, only if they exist\n             in the data structure. If navigate to NONE, that element is removed\n             from the map or vector.",(cljs.core.truth_(com.rpl.specter.must)?com.rpl.specter.must.cljs$lang$test:null)])),new cljs.core.Symbol("s","must","s/must",1396580223,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (){var pred__60998 = aid.core.call_pred;
var expr__60999 = to;
if(cljs.core.truth_((pred__60998.cljs$core$IFn$_invoke$arity$2 ? pred__60998.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,expr__60999) : pred__60998.call(null,frp.primitives.event.event_QMARK_,expr__60999)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null);
}
})(),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("aid.core","call-pred","aid.core/call-pred",-1451789807,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null),new cljs.core.Symbol(null,"to","to",1832630534,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("event","event?","event/event?",-2135293057,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null))))], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("s","must","s/must",1396580223,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("aid.core","call-pred","aid.core/call-pred",-1451789807,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null),new cljs.core.Symbol(null,"to","to",1832630534,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("event","event?","event/event?",-2135293057,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("s","must","s/must",1396580223,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("aid.core","call-pred","aid.core/call-pred",-1451789807,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null),new cljs.core.Symbol(null,"to","to",1832630534,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("event","event?","event/event?",-2135293057,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null))))))], null)], null),"frp.primitives.behavior",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"to","to",1832630534,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"net-id","net-id",418155108),new cljs.core.Symbol(null,"to","to",1832630534,null)),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("s","must","s/must",1396580223,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("aid.core","call-pred","aid.core/call-pred",-1451789807,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null),new cljs.core.Symbol(null,"to","to",1832630534,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("event","event?","event/event?",-2135293057,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null)))))], null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol("s","must","s/must",1396580223,null),cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("aid.core","call-pred","aid.core/call-pred",-1451789807,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null),new cljs.core.Symbol(null,"to","to",1832630534,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__60998","pred__60998",-2041700802,null),new cljs.core.Symbol("event","event?","event/event?",-2135293057,null),new cljs.core.Symbol(null,"expr__60999","expr__60999",1367012642,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null)))], null));
frp.primitives.behavior.pathcache61001 = info61002;

return info61002;
})():info__41236__auto__);
var precompiled61003 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__61004 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(to),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.multi_path,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.must,(function (){var pred__60998 = aid.core.call_pred;
var expr__60999 = to;
if(cljs.core.truth_((pred__60998.cljs$core$IFn$_invoke$arity$2 ? pred__60998.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,expr__60999) : pred__60998.call(null,frp.primitives.event.event_QMARK_,expr__60999)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null);
}
})()))], null),to,cljs.core.apply,com.rpl.specter.multi_path,cljs.core.map,com.rpl.specter.must,(function (){var pred__60998 = aid.core.call_pred;
var expr__60999 = to;
if(cljs.core.truth_((pred__60998.cljs$core$IFn$_invoke$arity$2 ? pred__60998.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,expr__60999) : pred__60998.call(null,frp.primitives.event.event_QMARK_,expr__60999)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),new cljs.core.Keyword(null,"modifications","modifications",2043415709),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"occs","occs",-482222641)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null);
}
})()], null);
return (precompiled61003.cljs$core$IFn$_invoke$arity$1 ? precompiled61003.cljs$core$IFn$_invoke$arity$1(G__61004) : precompiled61003.call(null,G__61004));
} else {
return precompiled61003;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(clojure.set.rename_keys),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)))),universe);
}));
frp.primitives.behavior.redef = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,frp.primitives.net.universe_state),frp.primitives.behavior.rename_id);
frp.primitives.behavior.time = (new frp.primitives.behavior.Behavior(frp.primitives.net.initial_net_id,new cljs.core.Keyword("frp.primitives.behavior","time","frp.primitives.behavior/time",32562900),null,null,null));
frp.primitives.behavior.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frp.primitives.behavior.register_BANG_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,frp.primitives.behavior.registry),(function (){var fexpr__61005 = aid.core.curry.cljs$core$IFn$_invoke$arity$2((3),com.rpl.specter.setval_STAR_);
return (fexpr__61005.cljs$core$IFn$_invoke$arity$1 ? fexpr__61005.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.AFTER_ELEM) : fexpr__61005.call(null,com.rpl.specter.AFTER_ELEM));
})());
frp.primitives.behavior.start = (function frp$primitives$behavior$start(){
cljs.core.reset_BANG_(frp.primitives.net.universe_state,frp.primitives.net.initial_universe);

var G__61006_61050 = frp.primitives.behavior.time;
var G__61007_61051 = (frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.initial_net_id,cljs.core.identity) : frp.primitives.behavior.behavior_STAR_.call(null,frp.primitives.net.initial_net_id,cljs.core.identity));
(frp.primitives.behavior.redef.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.behavior.redef.cljs$core$IFn$_invoke$arity$2(G__61006_61050,G__61007_61051) : frp.primitives.behavior.redef.call(null,G__61006_61050,G__61007_61051));

return cljs.core.run_BANG_(aid.core.funcall,cljs.core.deref(frp.primitives.behavior.registry));
});
frp.primitives.behavior.restart = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(frp.primitives.behavior.stop,frp.primitives.behavior.start);
frp.primitives.behavior.last_pred = (function frp$primitives$behavior$last_pred(default$,pred,coll){
return cljs.core.last(cljs.core.cons(default$,cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),cljs.core.reverse(coll)))));
});
frp.primitives.behavior.get_stepper_value = (function frp$primitives$behavior$get_stepper_value(a,e,t,universe){
return frp.tuple.snd.cljs$core$IFn$_invoke$arity$1(frp.primitives.behavior.last_pred((frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.get_unit.cljs$core$IFn$_invoke$arity$1(a) : frp.primitives.event.get_unit.call(null,a)),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.deref(t)),cljs.core.deref,frp.tuple.fst),frp.primitives.event.get_occs(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(e),(function (){var fexpr__61014 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(e);
return (fexpr__61014.cljs$core$IFn$_invoke$arity$1 ? fexpr__61014.cljs$core$IFn$_invoke$arity$1(universe) : fexpr__61014.call(null,universe));
})())));
});
frp.primitives.behavior.stepper = (function frp$primitives$behavior$stepper(a,e){
var G__61016 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(e);
var G__61017 = ((function (G__61016){
return (function (p1__61015_SHARP_){
return frp.primitives.behavior.get_stepper_value(a,e,p1__61015_SHARP_,cljs.core.deref(frp.primitives.net.universe_state));
});})(G__61016))
;
return (frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.behavior.behavior_STAR_.cljs$core$IFn$_invoke$arity$2(G__61016,G__61017) : frp.primitives.behavior.behavior_STAR_.call(null,G__61016,G__61017));
});
(frp.primitives.behavior.restart.cljs$core$IFn$_invoke$arity$0 ? frp.primitives.behavior.restart.cljs$core$IFn$_invoke$arity$0() : frp.primitives.behavior.restart.call(null));

//# sourceMappingURL=frp.primitives.behavior.js.map
