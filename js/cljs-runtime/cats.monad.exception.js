goog.provide('cats.monad.exception');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('cats.util');
goog.require('cats.context');
cats.monad.exception.throw_exception = (function cats$monad$exception$throw_exception(message){
throw (new Error(message));
});
/**
 * Return true if `v` is an instance of
 *   the Throwable or js/Error type.
 */
cats.monad.exception.throwable_QMARK_ = (function cats$monad$exception$throwable_QMARK_(e){
return (e instanceof Error);
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
cats.monad.exception.Success = (function (success,__meta,__extmap,__hash){
this.success = success;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cats.monad.exception.Success.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cats.monad.exception.Success.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50071,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50088 = k50071;
var G__50088__$1 = (((G__50088 instanceof cljs.core.Keyword))?G__50088.fqn:null);
switch (G__50088__$1) {
case "success":
return self__.success;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50071,else__4388__auto__);

}
});

cats.monad.exception.Success.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50089){
var vec__50090 = p__50089;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50090,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50090,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cats.monad.exception.Success.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cats.monad.exception.Success{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null))], null),self__.__extmap));
});

cats.monad.exception.Success.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50070){
var self__ = this;
var G__50070__$1 = this;
return (new cljs.core.RecordIter((0),G__50070__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cats.monad.exception.Success.prototype.cats$protocols$Extract$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.Success.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.success;
});

cats.monad.exception.Success.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cats.monad.exception.Success.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cats.monad.exception.Success(self__.success,self__.__meta,self__.__extmap,self__.__hash));
});

cats.monad.exception.Success.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

cats.monad.exception.Success.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50094 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1387152273 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50094(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cats.monad.exception.Success.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50072,other50073){
var self__ = this;
var this50072__$1 = this;
return (((!((other50073 == null)))) && ((this50072__$1.constructor === other50073.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50072__$1.success,other50073.success)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50072__$1.__extmap,other50073.__extmap)));
});

cats.monad.exception.Success.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cats.monad.exception.Success(self__.success,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cats.monad.exception.Success.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.Success.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#<Success ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.success], 0)),">"].join('');
});

cats.monad.exception.Success.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50070){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50095 = cljs.core.keyword_identical_QMARK_;
var expr__50096 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50098 = new cljs.core.Keyword(null,"success","success",1890645906);
var G__50099 = expr__50096;
return (pred__50095.cljs$core$IFn$_invoke$arity$2 ? pred__50095.cljs$core$IFn$_invoke$arity$2(G__50098,G__50099) : pred__50095.call(null,G__50098,G__50099));
})())){
return (new cats.monad.exception.Success(G__50070,self__.__meta,self__.__extmap,null));
} else {
return (new cats.monad.exception.Success(self__.success,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50070),null));
}
});

cats.monad.exception.Success.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"success","success",1890645906),self__.success,null))], null),self__.__extmap));
});

cats.monad.exception.Success.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.success;
});

cats.monad.exception.Success.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.Success.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.exception.context;
});

cats.monad.exception.Success.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50070){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cats.monad.exception.Success(self__.success,G__50070,self__.__extmap,self__.__hash));
});

cats.monad.exception.Success.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cats.monad.exception.Success.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"success","success",-763789863,null)], null);
});

cats.monad.exception.Success.cljs$lang$type = true;

cats.monad.exception.Success.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cats.monad.exception/Success",null,(1),null));
});

cats.monad.exception.Success.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cats.monad.exception/Success");
});

/**
 * Positional factory function for cats.monad.exception/Success.
 */
cats.monad.exception.__GT_Success = (function cats$monad$exception$__GT_Success(success){
return (new cats.monad.exception.Success(success,null,null,null));
});

/**
 * Factory function for cats.monad.exception/Success, taking a map of keywords to field values.
 */
cats.monad.exception.map__GT_Success = (function cats$monad$exception$map__GT_Success(G__50075){
var extmap__4424__auto__ = (function (){var G__50104 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50075,new cljs.core.Keyword(null,"success","success",1890645906));
if(cljs.core.record_QMARK_(G__50075)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50104);
} else {
return G__50104;
}
})();
return (new cats.monad.exception.Success(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__50075),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
cats.monad.exception.Failure = (function (failure,__meta,__extmap,__hash){
this.failure = failure;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cats.monad.exception.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cats.monad.exception.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50107,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50112 = k50107;
var G__50112__$1 = (((G__50112 instanceof cljs.core.Keyword))?G__50112.fqn:null);
switch (G__50112__$1) {
case "failure":
return self__.failure;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50107,else__4388__auto__);

}
});

cats.monad.exception.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50115){
var vec__50116 = p__50115;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50116,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50116,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cats.monad.exception.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cats.monad.exception.Failure{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null))], null),self__.__extmap));
});

cats.monad.exception.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50106){
var self__ = this;
var G__50106__$1 = this;
return (new cljs.core.RecordIter((0),G__50106__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure","failure",720415879)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cats.monad.exception.Failure.prototype.cats$protocols$Extract$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.Failure.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.failure;
});

cats.monad.exception.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cats.monad.exception.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cats.monad.exception.Failure(self__.failure,self__.__meta,self__.__extmap,self__.__hash));
});

cats.monad.exception.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

cats.monad.exception.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50130 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-552440840 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50130(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cats.monad.exception.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50108,other50109){
var self__ = this;
var this50108__$1 = this;
return (((!((other50109 == null)))) && ((this50108__$1.constructor === other50109.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50108__$1.failure,other50109.failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50108__$1.__extmap,other50109.__extmap)));
});

cats.monad.exception.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cats.monad.exception.Failure(self__.failure,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cats.monad.exception.Failure.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.Failure.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#<Failure ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.failure], 0)),">"].join('');
});

cats.monad.exception.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50106){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50136 = cljs.core.keyword_identical_QMARK_;
var expr__50137 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50139 = new cljs.core.Keyword(null,"failure","failure",720415879);
var G__50140 = expr__50137;
return (pred__50136.cljs$core$IFn$_invoke$arity$2 ? pred__50136.cljs$core$IFn$_invoke$arity$2(G__50139,G__50140) : pred__50136.call(null,G__50139,G__50140));
})())){
return (new cats.monad.exception.Failure(G__50106,self__.__meta,self__.__extmap,null));
} else {
return (new cats.monad.exception.Failure(self__.failure,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50106),null));
}
});

cats.monad.exception.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure,null))], null),self__.__extmap));
});

cats.monad.exception.Failure.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw self__.failure;
});

cats.monad.exception.Failure.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.Failure.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.exception.context;
});

cats.monad.exception.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50106){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cats.monad.exception.Failure(self__.failure,G__50106,self__.__extmap,self__.__hash));
});

cats.monad.exception.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cats.monad.exception.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"failure","failure",-1934019890,null)], null);
});

cats.monad.exception.Failure.cljs$lang$type = true;

cats.monad.exception.Failure.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cats.monad.exception/Failure",null,(1),null));
});

cats.monad.exception.Failure.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cats.monad.exception/Failure");
});

/**
 * Positional factory function for cats.monad.exception/Failure.
 */
cats.monad.exception.__GT_Failure = (function cats$monad$exception$__GT_Failure(failure){
return (new cats.monad.exception.Failure(failure,null,null,null));
});

/**
 * Factory function for cats.monad.exception/Failure, taking a map of keywords to field values.
 */
cats.monad.exception.map__GT_Failure = (function cats$monad$exception$map__GT_Failure(G__50110){
var extmap__4424__auto__ = (function (){var G__50149 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50110,new cljs.core.Keyword(null,"failure","failure",720415879));
if(cljs.core.record_QMARK_(G__50110)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50149);
} else {
return G__50149;
}
})();
return (new cats.monad.exception.Failure(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__50110),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return cats.monad.exception.__GT_Success;},new cljs.core.Symbol("cats.monad.exception","->Success","cats.monad.exception/->Success",-935407106,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"cats.monad.exception","cats.monad.exception",725225766,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Exception monad.\n\n  Also known as Try monad, popularized by Scala.\n\n  It represents a computation that may either result\n  in an exception or return a successfully computed\n  value. Is very similar to Either monad, but is\n  semantically different.\n\n  It consists in two types: Success and Failure. The\n  Success type is a simple wrapper like Right of Either\n  monad. But the Failure type is slightly different\n  from Left, because it is forced to wrap an instance\n  of Throwable (or Error in cljs).\n\n  The most common use case of this monad is for wrap\n  third party libraries that uses standard Exception\n  based error handling. In normal circumstances you\n  should use Either instead.\n\n  The types defined for Exception monad (Success and\n  Failure) also implementes the clojure IDeref interface\n  which facilitates libraries developing using monadic\n  composition without forcing a user of that library\n  to use or understand monads.\n\n  That is because when you will dereference the\n  failure instance, it will reraise the containing\n  exception."], null)),new cljs.core.Symbol(null,"->Success","->Success",1634729657,null),"cats/monad/exception.cljc",19,1,true,new cljs.core.Keyword(null,"positional","positional",-203580463),82,82,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"success","success",-763789863,null)], null)),"Positional factory function for cats.monad.exception/Success.",(cljs.core.truth_(cats.monad.exception.__GT_Success)?cats.monad.exception.__GT_Success.cljs$lang$test:null)])),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"private","private",-558947994),true], 0));
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return cats.monad.exception.__GT_Failure;},new cljs.core.Symbol("cats.monad.exception","->Failure","cats.monad.exception/->Failure",99423429,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"cats.monad.exception","cats.monad.exception",725225766,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Exception monad.\n\n  Also known as Try monad, popularized by Scala.\n\n  It represents a computation that may either result\n  in an exception or return a successfully computed\n  value. Is very similar to Either monad, but is\n  semantically different.\n\n  It consists in two types: Success and Failure. The\n  Success type is a simple wrapper like Right of Either\n  monad. But the Failure type is slightly different\n  from Left, because it is forced to wrap an instance\n  of Throwable (or Error in cljs).\n\n  The most common use case of this monad is for wrap\n  third party libraries that uses standard Exception\n  based error handling. In normal circumstances you\n  should use Either instead.\n\n  The types defined for Exception monad (Success and\n  Failure) also implementes the clojure IDeref interface\n  which facilitates libraries developing using monadic\n  composition without forcing a user of that library\n  to use or understand monads.\n\n  That is because when you will dereference the\n  failure instance, it will reraise the containing\n  exception."], null)),new cljs.core.Symbol(null,"->Failure","->Failure",1824260484,null),"cats/monad/exception.cljc",19,1,true,new cljs.core.Keyword(null,"positional","positional",-203580463),98,98,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"failure","failure",-1934019890,null)], null)),"Positional factory function for cats.monad.exception/Failure.",(cljs.core.truth_(cats.monad.exception.__GT_Failure)?cats.monad.exception.__GT_Failure.cljs$lang$test:null)])),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"private","private",-558947994),true], 0));
cats.util.make_printable(cats.monad.exception.Success);
cats.util.make_printable(cats.monad.exception.Failure);
/**
 * A Success type constructor.
 * 
 *   It wraps any arbitrary value into
 *   success type.
 */
cats.monad.exception.success = (function cats$monad$exception$success(v){
return (new cats.monad.exception.Success(v,null,null,null));
});
/**
 * A failure type constructor.
 * 
 *   If a provided parameter is an exception, it wraps
 *   it in a `Failure` instance and return it. But if
 *   a provided parameter is arbitrary data, it tries
 *   create an exception from it using clojure `ex-info`
 *   function.
 * 
 *   Take care that `ex-info` function in clojurescript
 *   differs a little bit from clojure.
 */
cats.monad.exception.failure = (function cats$monad$exception$failure(var_args){
var G__50156 = arguments.length;
switch (G__50156) {
case 1:
return cats.monad.exception.failure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.monad.exception.failure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.monad.exception.failure.cljs$core$IFn$_invoke$arity$1 = (function (e){
return cats.monad.exception.failure.cljs$core$IFn$_invoke$arity$2(e,"");
});

cats.monad.exception.failure.cljs$core$IFn$_invoke$arity$2 = (function (e,message){
if(cats.monad.exception.throwable_QMARK_(e)){
return (new cats.monad.exception.Failure(e,null,null,null));
} else {
return (new cats.monad.exception.Failure(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,e),null,null,null));
}
});

cats.monad.exception.failure.cljs$lang$maxFixedArity = 2;

/**
 * Return true if `v` is an instance of
 *   the Success type.
 */
cats.monad.exception.success_QMARK_ = (function cats$monad$exception$success_QMARK_(v){
return (v instanceof cats.monad.exception.Success);
});
/**
 * Return true if `v` is an instance of
 *   the Failure type.
 */
cats.monad.exception.failure_QMARK_ = (function cats$monad$exception$failure_QMARK_(v){
return (v instanceof cats.monad.exception.Failure);
});
/**
 * Return true in case of `v` is instance
 *   of Exception monad.
 */
cats.monad.exception.exception_QMARK_ = (function cats$monad$exception$exception_QMARK_(v){
if((((v instanceof cats.monad.exception.Failure)) || ((v instanceof cats.monad.exception.Success)))){
return true;
} else {
if((((!((v == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === v.cats$protocols$Contextual$))))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cats.protocols.Contextual,v):false)):cljs.core.native_satisfies_QMARK_(cats.protocols.Contextual,v))){
return (cats.protocols._get_context(v) === cats.monad.exception.context);
} else {
return false;

}
}
});
/**
 * Return inner value from exception monad.
 * 
 *   This is a specialized version of `cats.core/extract`
 *   for Exception monad types that allows set up
 *   the default value.
 * 
 *   If a provided `mv` is an instance of Failure type
 *   it will re raise the inner exception. If you need
 *   extract value without raising it, use `cats.core/extract`
 *   function for it.
 */
cats.monad.exception.extract = (function cats$monad$exception$extract(var_args){
var G__50169 = arguments.length;
switch (G__50169) {
case 1:
return cats.monad.exception.extract.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.monad.exception.extract.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.monad.exception.extract.cljs$core$IFn$_invoke$arity$1 = (function (mv){
if(cats.monad.exception.exception_QMARK_(mv)){
} else {
throw (new Error("Assert failed: (exception? mv)"));
}

if(cats.monad.exception.success_QMARK_(mv)){
return cats.protocols._extract(mv);
} else {
throw cats.protocols._extract(mv);
}
});

cats.monad.exception.extract.cljs$core$IFn$_invoke$arity$2 = (function (mv,default$){
if(cats.monad.exception.exception_QMARK_(mv)){
} else {
throw (new Error("Assert failed: (exception? mv)"));
}

if(cats.monad.exception.success_QMARK_(mv)){
return cats.protocols._extract(mv);
} else {
return default$;
}
});

cats.monad.exception.extract.cljs$lang$maxFixedArity = 2;

cats.monad.exception.exec_try_on = (function cats$monad$exception$exec_try_on(func){
try{var result = (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
if(cats.monad.exception.throwable_QMARK_(result)){
return cats.monad.exception.failure.cljs$core$IFn$_invoke$arity$1(result);
} else {
if(cats.monad.exception.exception_QMARK_(result)){
return result;
} else {
return cats.monad.exception.success(result);

}
}
}catch (e50173){if((e50173 instanceof Error)){
var e = e50173;
return cats.monad.exception.failure.cljs$core$IFn$_invoke$arity$1(e);
} else {
throw e50173;

}
}});
cats.monad.exception.exec_try_or_else = (function cats$monad$exception$exec_try_or_else(func,defaultvalue){
var result = cats.monad.exception.exec_try_on(func);
if(cats.monad.exception.failure_QMARK_(result)){
return cats.monad.exception.success(defaultvalue);
} else {
return result;
}
});
cats.monad.exception.exec_try_or_recover = (function cats$monad$exception$exec_try_or_recover(func,recoverfn){
var result = cats.monad.exception.exec_try_on(func);
if(cats.context.context_QMARK_(cats.monad.exception.context)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__50175 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__50176 = cats.monad.exception.context;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__50176;

try{if(cats.monad.exception.failure_QMARK_(result)){
var G__50177 = result.failure;
return (recoverfn.cljs$core$IFn$_invoke$arity$1 ? recoverfn.cljs$core$IFn$_invoke$arity$1(G__50177) : recoverfn.call(null,G__50177));
} else {
return result;
}
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__50175;
}});
/**
 * Wrap a function in a try monad.
 * 
 *   Is a high order function that accept a function
 *   as parameter and returns an other that returns
 *   success or failure depending of result of the
 *   first function.
 */
cats.monad.exception.wrap = (function cats$monad$exception$wrap(func){
var metadata = cljs.core.meta(func);
return cljs.core.with_meta(((function (metadata){
return (function() { 
var G__50227__delegate = function (args){
var func__49986__auto__ = ((function (metadata){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
});})(metadata))
;
return cats.monad.exception.exec_try_on(func__49986__auto__);
};
var G__50227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50228__i = 0, G__50228__a = new Array(arguments.length -  0);
while (G__50228__i < G__50228__a.length) {G__50228__a[G__50228__i] = arguments[G__50228__i + 0]; ++G__50228__i;}
  args = new cljs.core.IndexedSeq(G__50228__a,0,null);
} 
return G__50227__delegate.call(this,args);};
G__50227.cljs$lang$maxFixedArity = 0;
G__50227.cljs$lang$applyTo = (function (arglist__50229){
var args = cljs.core.seq(arglist__50229);
return G__50227__delegate(args);
});
G__50227.cljs$core$IFn$_invoke$arity$variadic = G__50227__delegate;
return G__50227;
})()
;})(metadata))
,metadata);
});
cats.monad.exception.context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.monad !== 'undefined') && (typeof cats.monad.exception !== 'undefined') && (typeof cats.monad.exception.t_cats$monad$exception50192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.Printable}
*/
cats.monad.exception.t_cats$monad$exception50192 = (function (meta50193){
this.meta50193 = meta50193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.monad.exception.t_cats$monad$exception50192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50194,meta50193__$1){
var self__ = this;
var _50194__$1 = this;
return (new cats.monad.exception.t_cats$monad$exception50192(meta50193__$1));
});

cats.monad.exception.t_cats$monad$exception50192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50194){
var self__ = this;
var _50194__$1 = this;
return self__.meta50193;
});

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,s){
var self__ = this;
var ___$1 = this;
if(cats.monad.exception.success_QMARK_(s)){
var func__49986__auto__ = ((function (___$1){
return (function (){
var G__50195 = cats.protocols._extract(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50195) : f.call(null,G__50195));
});})(___$1))
;
return cats.monad.exception.exec_try_on(func__49986__auto__);
} else {
return s;
}
});

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cats.monad.exception.success(v);
});

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (m,af,av){
var self__ = this;
var m__$1 = this;
if(cats.monad.exception.success_QMARK_(af)){
return m__$1.cats$protocols$Functor$_fmap$arity$3(null,cats.protocols._extract(af),av);
} else {
return af;
}
});

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cats.monad.exception.success(v);
});

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,s,f){
var self__ = this;
var ___$1 = this;
if(cats.monad.exception.exception_QMARK_(s)){
} else {
throw (new Error(["Assert failed: ",["Context mismatch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cats.protocols._repr(s))," is not allowed to use with exception context."].join(''),"\n","(exception? s)"].join('')));
}

if(cats.monad.exception.success_QMARK_(s)){
var G__50196 = cats.protocols._extract(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50196) : f.call(null,G__50196));
} else {
return s;
}
});

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.exception.t_cats$monad$exception50192.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Exception>";
});

cats.monad.exception.t_cats$monad$exception50192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50193","meta50193",1522280325,null)], null);
});

cats.monad.exception.t_cats$monad$exception50192.cljs$lang$type = true;

cats.monad.exception.t_cats$monad$exception50192.cljs$lang$ctorStr = "cats.monad.exception/t_cats$monad$exception50192";

cats.monad.exception.t_cats$monad$exception50192.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.monad.exception/t_cats$monad$exception50192");
});

/**
 * Positional factory function for cats.monad.exception/t_cats$monad$exception50192.
 */
cats.monad.exception.__GT_t_cats$monad$exception50192 = (function cats$monad$exception$__GT_t_cats$monad$exception50192(meta50193){
return (new cats.monad.exception.t_cats$monad$exception50192(meta50193));
});

}

return (new cats.monad.exception.t_cats$monad$exception50192(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.monad.exception.context));

//# sourceMappingURL=cats.monad.exception.js.map
