goog.provide('aid.unit');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('cats.util');

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cats.protocols.Contextual}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cats.protocols.Printable}
*/
aid.unit.Unit = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
aid.unit.Unit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

aid.unit.Unit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50470,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50474 = k50470;
switch (G__50474) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50470,else__4388__auto__);

}
});

aid.unit.Unit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50475){
var vec__50476 = p__50475;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

aid.unit.Unit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#aid.unit.Unit{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

aid.unit.Unit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50469){
var self__ = this;
var G__50469__$1 = this;
return (new cljs.core.RecordIter((0),G__50469__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

aid.unit.Unit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

aid.unit.Unit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new aid.unit.Unit(self__.__meta,self__.__extmap,self__.__hash));
});

aid.unit.Unit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

aid.unit.Unit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50484 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1543628894 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50484(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

aid.unit.Unit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50471,other50472){
var self__ = this;
var this50471__$1 = this;
return (((!((other50472 == null)))) && ((this50471__$1.constructor === other50472.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50471__$1.__extmap,other50472.__extmap)));
});

aid.unit.Unit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new aid.unit.Unit(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

aid.unit.Unit.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

aid.unit.Unit.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#[unit]";
});

aid.unit.Unit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50469){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50487 = cljs.core.keyword_identical_QMARK_;
var expr__50488 = k__4393__auto__;
return (new aid.unit.Unit(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50469),null));
});

aid.unit.Unit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

aid.unit.Unit.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

aid.unit.Unit.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((typeof aid !== 'undefined') && (typeof aid.unit !== 'undefined') && (typeof aid.unit.t_aid$unit50493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
*/
aid.unit.t_aid$unit50493 = (function (__meta,__extmap,__hash,_,meta50494){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this._ = _;
this.meta50494 = meta50494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
aid.unit.t_aid$unit50493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50495,meta50494__$1){
var self__ = this;
var _50495__$1 = this;
return (new aid.unit.t_aid$unit50493(self__.__meta,self__.__extmap,self__.__hash,self__._,meta50494__$1));
});})(___$1))
;

aid.unit.t_aid$unit50493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50495){
var self__ = this;
var _50495__$1 = this;
return self__.meta50494;
});})(___$1))
;

aid.unit.t_aid$unit50493.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

aid.unit.t_aid$unit50493.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

aid.unit.t_aid$unit50493.prototype.cats$protocols$Semigroup$_mappend$arity$3 = ((function (___$1){
return (function (___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return (new aid.unit.Unit(null,null,null));
});})(___$1))
;

aid.unit.t_aid$unit50493.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

aid.unit.t_aid$unit50493.prototype.cats$protocols$Monoid$_mempty$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (new aid.unit.Unit(null,null,null));
});})(___$1))
;

aid.unit.t_aid$unit50493.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("aid.unit","Unit","aid.unit/Unit",-2062240947,null)], null)),new cljs.core.Symbol(null,"meta50494","meta50494",-1166685348,null)], null);
});})(___$1))
;

aid.unit.t_aid$unit50493.cljs$lang$type = true;

aid.unit.t_aid$unit50493.cljs$lang$ctorStr = "aid.unit/t_aid$unit50493";

aid.unit.t_aid$unit50493.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"aid.unit/t_aid$unit50493");
});})(___$1))
;

/**
 * Positional factory function for aid.unit/t_aid$unit50493.
 */
aid.unit.__GT_t_aid$unit50493 = ((function (___$1){
return (function aid$unit$__GT_t_aid$unit50493(__meta__$1,__extmap__$1,__hash__$1,___$2,meta50494){
return (new aid.unit.t_aid$unit50493(__meta__$1,__extmap__$1,__hash__$1,___$2,meta50494));
});})(___$1))
;

}

return (new aid.unit.t_aid$unit50493(self__.__meta,self__.__extmap,self__.__hash,___$1,cljs.core.PersistentArrayMap.EMPTY));
});

aid.unit.Unit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50469){
var self__ = this;
var this__4384__auto____$1 = this;
return (new aid.unit.Unit(G__50469,self__.__extmap,self__.__hash));
});

aid.unit.Unit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

aid.unit.Unit.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

aid.unit.Unit.cljs$lang$type = true;

aid.unit.Unit.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"aid.unit/Unit",null,(1),null));
});

aid.unit.Unit.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"aid.unit/Unit");
});

/**
 * Positional factory function for aid.unit/Unit.
 */
aid.unit.__GT_Unit = (function aid$unit$__GT_Unit(){
return (new aid.unit.Unit(null,null,null));
});

/**
 * Factory function for aid.unit/Unit, taking a map of keywords to field values.
 */
aid.unit.map__GT_Unit = (function aid$unit$map__GT_Unit(G__50473){
var extmap__4424__auto__ = (function (){var G__50504 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__50473);
if(cljs.core.record_QMARK_(G__50473)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50504);
} else {
return G__50504;
}
})();
return (new aid.unit.Unit(null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cats.util.make_printable(aid.unit.Unit);
aid.unit.unit = (new aid.unit.Unit(null,null,null));

//# sourceMappingURL=aid.unit.js.map
