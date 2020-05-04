goog.provide('frp.tuple');
goog.require('cljs.core');
goog.require('aid.core');
goog.require('cats.context');
goog.require('cats.core');
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
frp.tuple.Tuple = (function (fst,snd,__meta,__extmap,__hash){
this.fst = fst;
this.snd = snd;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
frp.tuple.Tuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

frp.tuple.Tuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k62709,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__62713 = k62709;
var G__62713__$1 = (((G__62713 instanceof cljs.core.Keyword))?G__62713.fqn:null);
switch (G__62713__$1) {
case "fst":
return self__.fst;

break;
case "snd":
return self__.snd;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62709,else__4388__auto__);

}
});

frp.tuple.Tuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__62714){
var vec__62715 = p__62714;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62715,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62715,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

frp.tuple.Tuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#frp.tuple.Tuple{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fst","fst",-1040014328),self__.fst],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"snd","snd",643718828),self__.snd],null))], null),self__.__extmap));
});

frp.tuple.Tuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62708){
var self__ = this;
var G__62708__$1 = this;
return (new cljs.core.RecordIter((0),G__62708__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fst","fst",-1040014328),new cljs.core.Keyword(null,"snd","snd",643718828)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

frp.tuple.Tuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

frp.tuple.Tuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new frp.tuple.Tuple(self__.fst,self__.snd,self__.__meta,self__.__extmap,self__.__hash));
});

frp.tuple.Tuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

frp.tuple.Tuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__62730 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-676384811 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__62730(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

frp.tuple.Tuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62710,other62711){
var self__ = this;
var this62710__$1 = this;
return (((!((other62711 == null)))) && ((this62710__$1.constructor === other62711.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62710__$1.fst,other62711.fst)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62710__$1.snd,other62711.snd)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62710__$1.__extmap,other62711.__extmap)));
});

frp.tuple.Tuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fst","fst",-1040014328),null,new cljs.core.Keyword(null,"snd","snd",643718828),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new frp.tuple.Tuple(self__.fst,self__.snd,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

frp.tuple.Tuple.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

frp.tuple.Tuple.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#[tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.fst], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.snd], 0)),"]"].join('');
});

frp.tuple.Tuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__62708){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__62741 = cljs.core.keyword_identical_QMARK_;
var expr__62742 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__62744 = new cljs.core.Keyword(null,"fst","fst",-1040014328);
var G__62745 = expr__62742;
return (pred__62741.cljs$core$IFn$_invoke$arity$2 ? pred__62741.cljs$core$IFn$_invoke$arity$2(G__62744,G__62745) : pred__62741.call(null,G__62744,G__62745));
})())){
return (new frp.tuple.Tuple(G__62708,self__.snd,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62746 = new cljs.core.Keyword(null,"snd","snd",643718828);
var G__62747 = expr__62742;
return (pred__62741.cljs$core$IFn$_invoke$arity$2 ? pred__62741.cljs$core$IFn$_invoke$arity$2(G__62746,G__62747) : pred__62741.call(null,G__62746,G__62747));
})())){
return (new frp.tuple.Tuple(self__.fst,G__62708,self__.__meta,self__.__extmap,null));
} else {
return (new frp.tuple.Tuple(self__.fst,self__.snd,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__62708),null));
}
}
});

frp.tuple.Tuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fst","fst",-1040014328),self__.fst,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"snd","snd",643718828),self__.snd,null))], null),self__.__extmap));
});

frp.tuple.Tuple.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

frp.tuple.Tuple.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((typeof frp !== 'undefined') && (typeof frp.tuple !== 'undefined') && (typeof frp.tuple.t_frp$tuple62750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
frp.tuple.t_frp$tuple62750 = (function (fst,snd,__meta,__extmap,__hash,_,meta62751){
this.fst = fst;
this.snd = snd;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this._ = _;
this.meta62751 = meta62751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
frp.tuple.t_frp$tuple62750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_62752,meta62751__$1){
var self__ = this;
var _62752__$1 = this;
return (new frp.tuple.t_frp$tuple62750(self__.fst,self__.snd,self__.__meta,self__.__extmap,self__.__hash,self__._,meta62751__$1));
});})(___$1))
;

frp.tuple.t_frp$tuple62750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_62752){
var self__ = this;
var _62752__$1 = this;
return self__.meta62751;
});})(___$1))
;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Functor$_fmap$arity$3 = ((function (___$1){
return (function (___$1,f,___$2){
var self__ = this;
var ___$3 = this;
return (new frp.tuple.Tuple(self__.fst,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.snd) : f.call(null,self__.snd)),null,null,null));
});})(___$1))
;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Applicative$_pure$arity$2 = ((function (___$1){
return (function (___$1,a){
var self__ = this;
var ___$2 = this;
var G__62757 = cats.core.mempty.cljs$core$IFn$_invoke$arity$1(cats.context.infer.cljs$core$IFn$_invoke$arity$1(self__.fst));
var G__62758 = a;
return (frp.tuple.__GT_Tuple.cljs$core$IFn$_invoke$arity$2 ? frp.tuple.__GT_Tuple.cljs$core$IFn$_invoke$arity$2(G__62757,G__62758) : frp.tuple.__GT_Tuple.call(null,G__62757,G__62758));
});})(___$1))
;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Applicative$_fapply$arity$3 = ((function (___$1){
return (function (___$1,fab,fa){
var self__ = this;
var ___$2 = this;
return aid.core.ap(fab,fa);
});})(___$1))
;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Monad$_mreturn$arity$2 = ((function (___$1){
return (function (context,a){
var self__ = this;
var context__$1 = this;
return context__$1.cats$protocols$Applicative$_pure$arity$2(null,a);
});})(___$1))
;

frp.tuple.t_frp$tuple62750.prototype.cats$protocols$Monad$_mbind$arity$3 = ((function (___$1){
return (function (___$1,ma,f){
var self__ = this;
var ___$2 = this;
var G__62761 = new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1((cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(f,ma) : cats.core._LT_$_GT_.call(null,f,ma)));
var fexpr__62760 = ((function (G__62761,___$2,___$1){
return (function() { 
var G__62784__delegate = function (more__62762__auto__){
return (new frp.tuple.Tuple(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.core._LT__GT_,self__.fst),new cljs.core.Keyword(null,"fst","fst",-1040014328)),more__62762__auto__),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snd","snd",643718828),more__62762__auto__),null,null,null));
};
var G__62784 = function (var_args){
var more__62762__auto__ = null;
if (arguments.length > 0) {
var G__62787__i = 0, G__62787__a = new Array(arguments.length -  0);
while (G__62787__i < G__62787__a.length) {G__62787__a[G__62787__i] = arguments[G__62787__i + 0]; ++G__62787__i;}
  more__62762__auto__ = new cljs.core.IndexedSeq(G__62787__a,0,null);
} 
return G__62784__delegate.call(this,more__62762__auto__);};
G__62784.cljs$lang$maxFixedArity = 0;
G__62784.cljs$lang$applyTo = (function (arglist__62788){
var more__62762__auto__ = cljs.core.seq(arglist__62788);
return G__62784__delegate(more__62762__auto__);
});
G__62784.cljs$core$IFn$_invoke$arity$variadic = G__62784__delegate;
return G__62784;
})()
;})(G__62761,___$2,___$1))
;
return fexpr__62760.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__62761], 0));
});})(___$1))
;

frp.tuple.t_frp$tuple62750.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fst","fst",600517199,null),new cljs.core.Symbol(null,"snd","snd",-2010716941,null),new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("frp.tuple","Tuple","frp.tuple/Tuple",257711213,null)], null)),new cljs.core.Symbol(null,"meta62751","meta62751",1308605404,null)], null);
});})(___$1))
;

frp.tuple.t_frp$tuple62750.cljs$lang$type = true;

frp.tuple.t_frp$tuple62750.cljs$lang$ctorStr = "frp.tuple/t_frp$tuple62750";

frp.tuple.t_frp$tuple62750.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"frp.tuple/t_frp$tuple62750");
});})(___$1))
;

/**
 * Positional factory function for frp.tuple/t_frp$tuple62750.
 */
frp.tuple.__GT_t_frp$tuple62750 = ((function (___$1){
return (function frp$tuple$__GT_t_frp$tuple62750(fst__$1,snd__$1,__meta__$1,__extmap__$1,__hash__$1,___$2,meta62751){
return (new frp.tuple.t_frp$tuple62750(fst__$1,snd__$1,__meta__$1,__extmap__$1,__hash__$1,___$2,meta62751));
});})(___$1))
;

}

return (new frp.tuple.t_frp$tuple62750(self__.fst,self__.snd,self__.__meta,self__.__extmap,self__.__hash,___$1,cljs.core.PersistentArrayMap.EMPTY));
});

frp.tuple.Tuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__62708){
var self__ = this;
var this__4384__auto____$1 = this;
return (new frp.tuple.Tuple(self__.fst,self__.snd,G__62708,self__.__extmap,self__.__hash));
});

frp.tuple.Tuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

frp.tuple.Tuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fst","fst",600517199,null),new cljs.core.Symbol(null,"snd","snd",-2010716941,null)], null);
});

frp.tuple.Tuple.cljs$lang$type = true;

frp.tuple.Tuple.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"frp.tuple/Tuple",null,(1),null));
});

frp.tuple.Tuple.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"frp.tuple/Tuple");
});

/**
 * Positional factory function for frp.tuple/Tuple.
 */
frp.tuple.__GT_Tuple = (function frp$tuple$__GT_Tuple(fst,snd){
return (new frp.tuple.Tuple(fst,snd,null,null,null));
});

/**
 * Factory function for frp.tuple/Tuple, taking a map of keywords to field values.
 */
frp.tuple.map__GT_Tuple = (function frp$tuple$map__GT_Tuple(G__62712){
var extmap__4424__auto__ = (function (){var G__62769 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62712,new cljs.core.Keyword(null,"fst","fst",-1040014328),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snd","snd",643718828)], 0));
if(cljs.core.record_QMARK_(G__62712)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62769);
} else {
return G__62769;
}
})();
return (new frp.tuple.Tuple(new cljs.core.Keyword(null,"fst","fst",-1040014328).cljs$core$IFn$_invoke$arity$1(G__62712),new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(G__62712),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cats.util.make_printable(frp.tuple.Tuple);
frp.tuple.tuple = frp.tuple.__GT_Tuple;
frp.tuple.snd = new cljs.core.Keyword(null,"snd","snd",643718828);
frp.tuple.fst = new cljs.core.Keyword(null,"fst","fst",-1040014328);

//# sourceMappingURL=frp.tuple.js.map
