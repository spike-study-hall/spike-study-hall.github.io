goog.provide('cats.monad.maybe');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('cats.context');
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
 * @implements {cats.protocols.Extract}
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
cats.monad.maybe.Just = (function (just,__meta,__extmap,__hash){
this.just = just;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cats.monad.maybe.Just.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cats.monad.maybe.Just.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50240,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50247 = k50240;
var G__50247__$1 = (((G__50247 instanceof cljs.core.Keyword))?G__50247.fqn:null);
switch (G__50247__$1) {
case "just":
return self__.just;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50240,else__4388__auto__);

}
});

cats.monad.maybe.Just.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50255){
var vec__50256 = p__50255;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50256,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50256,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cats.monad.maybe.Just.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cats.monad.maybe.Just{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"just","just",466318146),self__.just],null))], null),self__.__extmap));
});

cats.monad.maybe.Just.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50239){
var self__ = this;
var G__50239__$1 = this;
return (new cljs.core.RecordIter((0),G__50239__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"just","just",466318146)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cats.monad.maybe.Just.prototype.cats$protocols$Extract$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Just.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.just;
});

cats.monad.maybe.Just.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cats.monad.maybe.Just.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cats.monad.maybe.Just(self__.just,self__.__meta,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Just.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

cats.monad.maybe.Just.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50271 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (2090233643 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50271(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cats.monad.maybe.Just.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50241,other50242){
var self__ = this;
var this50241__$1 = this;
return (((!((other50242 == null)))) && ((this50241__$1.constructor === other50242.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50241__$1.just,other50242.just)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50241__$1.__extmap,other50242.__extmap)));
});

cats.monad.maybe.Just.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"just","just",466318146),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cats.monad.maybe.Just(self__.just,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cats.monad.maybe.Just.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Just.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#<Just ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.just], 0)),">"].join('');
});

cats.monad.maybe.Just.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50239){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50272 = cljs.core.keyword_identical_QMARK_;
var expr__50273 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50275 = new cljs.core.Keyword(null,"just","just",466318146);
var G__50276 = expr__50273;
return (pred__50272.cljs$core$IFn$_invoke$arity$2 ? pred__50272.cljs$core$IFn$_invoke$arity$2(G__50275,G__50276) : pred__50272.call(null,G__50275,G__50276));
})())){
return (new cats.monad.maybe.Just(G__50239,self__.__meta,self__.__extmap,null));
} else {
return (new cats.monad.maybe.Just(self__.just,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50239),null));
}
});

cats.monad.maybe.Just.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"just","just",466318146),self__.just,null))], null),self__.__extmap));
});

cats.monad.maybe.Just.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.just;
});

cats.monad.maybe.Just.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Just.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.context;
});

cats.monad.maybe.Just.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50239){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cats.monad.maybe.Just(self__.just,G__50239,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Just.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cats.monad.maybe.Just.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"just","just",2106849673,null)], null);
});

cats.monad.maybe.Just.cljs$lang$type = true;

cats.monad.maybe.Just.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cats.monad.maybe/Just",null,(1),null));
});

cats.monad.maybe.Just.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cats.monad.maybe/Just");
});

/**
 * Positional factory function for cats.monad.maybe/Just.
 */
cats.monad.maybe.__GT_Just = (function cats$monad$maybe$__GT_Just(just){
return (new cats.monad.maybe.Just(just,null,null,null));
});

/**
 * Factory function for cats.monad.maybe/Just, taking a map of keywords to field values.
 */
cats.monad.maybe.map__GT_Just = (function cats$monad$maybe$map__GT_Just(G__50243){
var extmap__4424__auto__ = (function (){var G__50290 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50243,new cljs.core.Keyword(null,"just","just",466318146));
if(cljs.core.record_QMARK_(G__50243)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50290);
} else {
return G__50290;
}
})();
return (new cats.monad.maybe.Just(new cljs.core.Keyword(null,"just","just",466318146).cljs$core$IFn$_invoke$arity$1(G__50243),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


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
 * @implements {cats.protocols.Extract}
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
cats.monad.maybe.Nothing = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cats.monad.maybe.Nothing.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cats.monad.maybe.Nothing.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50292,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50300 = k50292;
switch (G__50300) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50292,else__4388__auto__);

}
});

cats.monad.maybe.Nothing.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50305){
var vec__50306 = p__50305;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50306,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50306,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cats.monad.maybe.Nothing.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cats.monad.maybe.Nothing{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50291){
var self__ = this;
var G__50291__$1 = this;
return (new cljs.core.RecordIter((0),G__50291__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cats.monad.maybe.Nothing.prototype.cats$protocols$Extract$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Nothing.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cats.monad.maybe.Nothing.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cats.monad.maybe.Nothing.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cats.monad.maybe.Nothing(self__.__meta,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Nothing.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50310 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-947132735 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50310(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cats.monad.maybe.Nothing.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50293,other50294){
var self__ = this;
var this50293__$1 = this;
return (((!((other50294 == null)))) && ((this50293__$1.constructor === other50294.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50293__$1.__extmap,other50294.__extmap)));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cats.monad.maybe.Nothing(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cats.monad.maybe.Nothing.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Nothing.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Nothing>";
});

cats.monad.maybe.Nothing.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50291){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50312 = cljs.core.keyword_identical_QMARK_;
var expr__50313 = k__4393__auto__;
return (new cats.monad.maybe.Nothing(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50291),null));
});

cats.monad.maybe.Nothing.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cats.monad.maybe.Nothing.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Nothing.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.context;
});

cats.monad.maybe.Nothing.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50291){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cats.monad.maybe.Nothing(G__50291,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Nothing.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cats.monad.maybe.Nothing.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cats.monad.maybe.Nothing.cljs$lang$type = true;

cats.monad.maybe.Nothing.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cats.monad.maybe/Nothing",null,(1),null));
});

cats.monad.maybe.Nothing.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cats.monad.maybe/Nothing");
});

/**
 * Positional factory function for cats.monad.maybe/Nothing.
 */
cats.monad.maybe.__GT_Nothing = (function cats$monad$maybe$__GT_Nothing(){
return (new cats.monad.maybe.Nothing(null,null,null));
});

/**
 * Factory function for cats.monad.maybe/Nothing, taking a map of keywords to field values.
 */
cats.monad.maybe.map__GT_Nothing = (function cats$monad$maybe$map__GT_Nothing(G__50295){
var extmap__4424__auto__ = (function (){var G__50337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__50295);
if(cljs.core.record_QMARK_(G__50295)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50337);
} else {
return G__50337;
}
})();
return (new cats.monad.maybe.Nothing(null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return cats.monad.maybe.__GT_Nothing;},new cljs.core.Symbol("cats.monad.maybe","->Nothing","cats.monad.maybe/->Nothing",-1239093988,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"cats.monad.maybe","cats.monad.maybe",-1702951244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Maybe monad implementation and helpers functions\n  for working with maybe related types.\n\n      (require '[cats.monad.maybe :as maybe])\n\n      (maybe/just 1)\n      ;; => #<Just [1]>\n  "], null)),new cljs.core.Symbol(null,"->Nothing","->Nothing",-812940060,null),"cats/monad/maybe.cljc",19,1,true,new cljs.core.Keyword(null,"positional","positional",-203580463),61,61,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Positional factory function for cats.monad.maybe/Nothing.",(cljs.core.truth_(cats.monad.maybe.__GT_Nothing)?cats.monad.maybe.__GT_Nothing.cljs$lang$test:null)])),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"private","private",-558947994),true], 0));
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return cats.monad.maybe.__GT_Just;},new cljs.core.Symbol("cats.monad.maybe","->Just","cats.monad.maybe/->Just",-1241334328,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"cats.monad.maybe","cats.monad.maybe",-1702951244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Maybe monad implementation and helpers functions\n  for working with maybe related types.\n\n      (require '[cats.monad.maybe :as maybe])\n\n      (maybe/just 1)\n      ;; => #<Just [1]>\n  "], null)),new cljs.core.Symbol(null,"->Just","->Just",1235461808,null),"cats/monad/maybe.cljc",16,1,true,new cljs.core.Keyword(null,"positional","positional",-203580463),45,45,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"just","just",2106849673,null)], null)),"Positional factory function for cats.monad.maybe/Just.",(cljs.core.truth_(cats.monad.maybe.__GT_Just)?cats.monad.maybe.__GT_Just.cljs$lang$test:null)])),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"private","private",-558947994),true], 0));
cats.util.make_printable(cats.monad.maybe.Just);
cats.util.make_printable(cats.monad.maybe.Nothing);
/**
 * Return true in case of `v` is instance
 *   of Maybe monad.
 */
cats.monad.maybe.maybe_QMARK_ = (function cats$monad$maybe$maybe_QMARK_(v){
var or__4131__auto__ = (v instanceof cats.monad.maybe.Just);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (v instanceof cats.monad.maybe.Nothing);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto__ = (((!((v == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === v.cats$protocols$Contextual$))))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cats.protocols.Contextual,v):false)):cljs.core.native_satisfies_QMARK_(cats.protocols.Contextual,v));
if(and__4120__auto__){
return (cats.protocols._get_context(v) === cats.monad.maybe.context);
} else {
return and__4120__auto__;
}
}
}
});
/**
 * A Just type constructor.
 */
cats.monad.maybe.just = (function cats$monad$maybe$just(v){
if((!((v == null)))){
} else {
throw (new Error("Assert failed: (some? v)"));
}

return (new cats.monad.maybe.Just(v,null,null,null));
});
/**
 * A Nothing type constructor.
 */
cats.monad.maybe.nothing = (function cats$monad$maybe$nothing(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cats.monad.maybe.Nothing(null,null,null)),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),null);
});
/**
 * Returns true if `v` is an instance
 *   of `Just` type.
 */
cats.monad.maybe.just_QMARK_ = (function cats$monad$maybe$just_QMARK_(v){
return (v instanceof cats.monad.maybe.Just);
});
/**
 * Returns true if `v` is an instance
 *   of `Nothing` type or is nil.
 */
cats.monad.maybe.nothing_QMARK_ = (function cats$monad$maybe$nothing_QMARK_(v){
return (((v == null)) || ((v instanceof cats.monad.maybe.Nothing)));
});
/**
 * Return inner value from maybe monad.
 * 
 *   This is a specialized version of `cats.core/extract`
 *   for Maybe monad types that allows set up
 *   the default value.
 * 
 *   Let see some examples:
 * 
 *    (from-maybe (just 1))
 *    ;=> 1
 * 
 *    (from-maybe (nothing))
 *    ;=> nil
 * 
 *    (from-maybe (nothing) 42)
 *    ;=> 42
 *   
 */
cats.monad.maybe.from_maybe = (function cats$monad$maybe$from_maybe(var_args){
var G__50372 = arguments.length;
switch (G__50372) {
case 1:
return cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$1 = (function (mv){
if(cats.monad.maybe.maybe_QMARK_(mv)){
} else {
throw (new Error("Assert failed: (maybe? mv)"));
}

if(cats.monad.maybe.just_QMARK_(mv)){
return cats.protocols._extract(mv);
} else {
return null;
}
});

cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$2 = (function (mv,default$){
if(cats.monad.maybe.maybe_QMARK_(mv)){
} else {
throw (new Error("Assert failed: (maybe? mv)"));
}

if(cats.monad.maybe.just_QMARK_(mv)){
return cats.protocols._extract(mv);
} else {
return default$;
}
});

cats.monad.maybe.from_maybe.cljs$lang$maxFixedArity = 2;

cats.monad.maybe.context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.monad !== 'undefined') && (typeof cats.monad.maybe !== 'undefined') && (typeof cats.monad.maybe.t_cats$monad$maybe50388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.monad.maybe.t_cats$monad$maybe50388 = (function (meta50389){
this.meta50389 = meta50389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (ctx,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ctx__$1 = this;
if(cats.monad.maybe.nothing_QMARK_(mv)){
return mv_SINGLEQUOTE_;
} else {
if(cats.monad.maybe.nothing_QMARK_(mv_SINGLEQUOTE_)){
return mv;
} else {
return cats.monad.maybe.just((function (){var mv__$1 = cats.protocols._extract(mv);
var mv_SINGLEQUOTE___$1 = cats.protocols._extract(mv_SINGLEQUOTE_);
return cats.protocols._mappend(cats.protocols._get_context(mv__$1),mv__$1,mv_SINGLEQUOTE___$1);
})());

}
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.nothing();
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (_,f,mv){
var self__ = this;
var ___$1 = this;
if(cats.monad.maybe.just_QMARK_(mv)){
var a = (function (){var G__50406 = cats.protocols._extract(mv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50406) : f.call(null,G__50406));
})();
return cats.protocols._fmap(cats.protocols._get_context(a),cats.monad.maybe.just,a);
} else {
return cats.protocols._pure(cats.context.infer.cljs$core$IFn$_invoke$arity$0(),mv);
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.nothing();
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (_,f,z,mv){
var self__ = this;
var ___$1 = this;
if(cats.monad.maybe.just_QMARK_(mv)){
var G__50418 = z;
var G__50419 = cats.protocols._extract(mv);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__50418,G__50419) : f.call(null,G__50418,G__50419));
} else {
return z;
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (_,f,z,mv){
var self__ = this;
var ___$1 = this;
if(cats.monad.maybe.just_QMARK_(mv)){
var G__50422 = cats.protocols._extract(mv);
var G__50423 = z;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__50422,G__50423) : f.call(null,G__50422,G__50423));
} else {
return z;
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
if((v == null)){
return cats.monad.maybe.nothing();
} else {
return cats.monad.maybe.just(v);
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,mv,f){
var self__ = this;
var ___$1 = this;
if(cats.monad.maybe.maybe_QMARK_(mv)){
} else {
throw (new Error(["Assert failed: ",["Context mismatch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cats.protocols._repr(mv))," is not allowed to use with maybe context."].join(''),"\n","(maybe? mv)"].join('')));
}

if(cats.monad.maybe.nothing_QMARK_(mv)){
return mv;
} else {
var G__50428 = cats.protocols._extract(mv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50428) : f.call(null,G__50428));
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,mv){
var self__ = this;
var ___$1 = this;
if(cats.monad.maybe.nothing_QMARK_(mv)){
return mv;
} else {
return cats.monad.maybe.just((function (){var G__50429 = cats.protocols._extract(mv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50429) : f.call(null,G__50429));
})());
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50390){
var self__ = this;
var _50390__$1 = this;
return self__.meta50389;
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.just(v);
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (m,af,av){
var self__ = this;
var m__$1 = this;
if(cats.monad.maybe.nothing_QMARK_(af)){
return af;
} else {
return m__$1.cats$protocols$Functor$_fmap$arity$3(null,cats.protocols._extract(af),av);
}
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Maybe>";
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50390,meta50389__$1){
var self__ = this;
var _50390__$1 = this;
return (new cats.monad.maybe.t_cats$monad$maybe50388(meta50389__$1));
});

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe50388.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
if(cats.monad.maybe.just_QMARK_(mv)){
return mv;
} else {
return mv_SINGLEQUOTE_;
}
});

cats.monad.maybe.t_cats$monad$maybe50388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50389","meta50389",1110110774,null)], null);
});

cats.monad.maybe.t_cats$monad$maybe50388.cljs$lang$type = true;

cats.monad.maybe.t_cats$monad$maybe50388.cljs$lang$ctorStr = "cats.monad.maybe/t_cats$monad$maybe50388";

cats.monad.maybe.t_cats$monad$maybe50388.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.monad.maybe/t_cats$monad$maybe50388");
});

/**
 * Positional factory function for cats.monad.maybe/t_cats$monad$maybe50388.
 */
cats.monad.maybe.__GT_t_cats$monad$maybe50388 = (function cats$monad$maybe$__GT_t_cats$monad$maybe50388(meta50389){
return (new cats.monad.maybe.t_cats$monad$maybe50388(meta50389));
});

}

return (new cats.monad.maybe.t_cats$monad$maybe50388(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.monad.maybe.context));
/**
 * Given a collection, return a nothing if its empty or a just with its
 *   first element if its not.
 */
cats.monad.maybe.seq__GT_maybe = (function cats$monad$maybe$seq__GT_maybe(coll){
if(cljs.core.empty_QMARK_(coll)){
return cats.monad.maybe.nothing();
} else {
return cats.monad.maybe.just(cljs.core.first(coll));
}
});
/**
 * Given a maybe, return an empty seq if its nothing or a one-element seq
 *   with its value if its not.
 */
cats.monad.maybe.maybe__GT_seq = (function cats$monad$maybe$maybe__GT_seq(m){
if(cats.monad.maybe.maybe_QMARK_(m)){
} else {
throw (new Error("Assert failed: (maybe? m)"));
}

if(cats.monad.maybe.nothing_QMARK_(m)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.PersistentVector.EMPTY;
}),null,null));
} else {
return (new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cats.protocols._extract(m)], null);
}),null,null));
}
});
cats.monad.maybe._PLUS_extract_just_xform_PLUS_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cats.monad.maybe.just_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cats.protocols._extract));
/**
 * Given a collection of maybes, return a sequence of the values
 *   that the just's contain.
 */
cats.monad.maybe.cat_maybes = (function cats$monad$maybe$cat_maybes(coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cats.monad.maybe._PLUS_extract_just_xform_PLUS_,coll);
});
/**
 * Given a maybe-returning function and a collection, map the function over
 *   the collection returning the values contained in the just values of the
 *   resulting collection.
 */
cats.monad.maybe.map_maybe = (function cats$monad$maybe$map_maybe(mf,coll){
return cats.monad.maybe.cat_maybes(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mf,coll));
});

//# sourceMappingURL=cats.monad.maybe.js.map
