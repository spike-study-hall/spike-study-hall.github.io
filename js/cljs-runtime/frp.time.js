goog.provide('frp.time');
goog.require('cljs.core');
goog.require('cats.core');
goog.require('cats.protocols');
goog.require('cats.util');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');

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
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cats.protocols.Contextual}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cats.protocols.Printable}
*/
frp.time.Time = (function (x,__meta,__extmap,__hash){
this.x = x;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 141312;
});
frp.time.Time.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

frp.time.Time.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k60095,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__60099 = k60095;
var G__60099__$1 = (((G__60099 instanceof cljs.core.Keyword))?G__60099.fqn:null);
switch (G__60099__$1) {
case "x":
return self__.x;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60095,else__4388__auto__);

}
});

frp.time.Time.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__60100){
var vec__60101 = p__60100;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60101,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60101,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

frp.time.Time.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#frp.time.Time{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null))], null),self__.__extmap));
});

frp.time.Time.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60094){
var self__ = this;
var G__60094__$1 = this;
return (new cljs.core.RecordIter((0),G__60094__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

frp.time.Time.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

frp.time.Time.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new frp.time.Time(self__.x,self__.__meta,self__.__extmap,self__.__hash));
});

frp.time.Time.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

frp.time.Time.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__60104 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1968212920 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__60104(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

frp.time.Time.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60096,other60097){
var self__ = this;
var this60096__$1 = this;
return (((!((other60097 == null)))) && ((this60096__$1.constructor === other60097.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60096__$1.x,other60097.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60096__$1.__extmap,other60097.__extmap)));
});

frp.time.Time.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new frp.time.Time(self__.x,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

frp.time.Time.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

frp.time.Time.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#[time ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.x),"]"].join('');
});

frp.time.Time.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__60094){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__60107 = cljs.core.keyword_identical_QMARK_;
var expr__60108 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__60110 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__60111 = expr__60108;
return (pred__60107.cljs$core$IFn$_invoke$arity$2 ? pred__60107.cljs$core$IFn$_invoke$arity$2(G__60110,G__60111) : pred__60107.call(null,G__60110,G__60111));
})())){
return (new frp.time.Time(G__60094,self__.__meta,self__.__extmap,null));
} else {
return (new frp.time.Time(self__.x,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__60094),null));
}
});

frp.time.Time.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null))], null),self__.__extmap));
});

frp.time.Time.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

frp.time.Time.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((typeof frp !== 'undefined') && (typeof frp.time !== 'undefined') && (typeof frp.time.t_frp$time60112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
*/
frp.time.t_frp$time60112 = (function (x,__meta,__extmap,__hash,_,meta60113){
this.x = x;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this._ = _;
this.meta60113 = meta60113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
frp.time.t_frp$time60112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_60114,meta60113__$1){
var self__ = this;
var _60114__$1 = this;
return (new frp.time.t_frp$time60112(self__.x,self__.__meta,self__.__extmap,self__.__hash,self__._,meta60113__$1));
});})(___$1))
;

frp.time.t_frp$time60112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_60114){
var self__ = this;
var _60114__$1 = this;
return self__.meta60113;
});})(___$1))
;

frp.time.t_frp$time60112.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

frp.time.t_frp$time60112.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

frp.time.t_frp$time60112.prototype.cats$protocols$Semigroup$_mappend$arity$3 = ((function (___$1){
return (function (___$1,x_STAR_,y_STAR_){
var self__ = this;
var ___$2 = this;
return (new frp.time.Time((function (){var x__4219__auto__ = cljs.core.deref(x_STAR_);
var y__4220__auto__ = cljs.core.deref(y_STAR_);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),null,null,null));
});})(___$1))
;

frp.time.t_frp$time60112.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

frp.time.t_frp$time60112.prototype.cats$protocols$Monoid$_mempty$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (new frp.time.Time((0),null,null,null));
});})(___$1))
;

frp.time.t_frp$time60112.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

frp.time.t_frp$time60112.prototype.cats$protocols$Functor$_fmap$arity$3 = ((function (___$1){
return (function (___$1,f,fa){
var self__ = this;
var ___$2 = this;
return (new frp.time.Time((function (){var G__60115 = cljs.core.deref(fa);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60115) : f.call(null,G__60115));
})(),null,null,null));
});})(___$1))
;

frp.time.t_frp$time60112.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("frp.time","Time","frp.time/Time",-45358289,null)], null)),new cljs.core.Symbol(null,"meta60113","meta60113",328421905,null)], null);
});})(___$1))
;

frp.time.t_frp$time60112.cljs$lang$type = true;

frp.time.t_frp$time60112.cljs$lang$ctorStr = "frp.time/t_frp$time60112";

frp.time.t_frp$time60112.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"frp.time/t_frp$time60112");
});})(___$1))
;

/**
 * Positional factory function for frp.time/t_frp$time60112.
 */
frp.time.__GT_t_frp$time60112 = ((function (___$1){
return (function frp$time$__GT_t_frp$time60112(x__$1,__meta__$1,__extmap__$1,__hash__$1,___$2,meta60113){
return (new frp.time.t_frp$time60112(x__$1,__meta__$1,__extmap__$1,__hash__$1,___$2,meta60113));
});})(___$1))
;

}

return (new frp.time.t_frp$time60112(self__.x,self__.__meta,self__.__extmap,self__.__hash,___$1,cljs.core.PersistentArrayMap.EMPTY));
});

frp.time.Time.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__60094){
var self__ = this;
var this__4384__auto____$1 = this;
return (new frp.time.Time(self__.x,G__60094,self__.__extmap,self__.__hash));
});

frp.time.Time.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

frp.time.Time.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x_STAR_,y_STAR_){
var self__ = this;
var x_STAR___$1 = this;
return cljs.core.compare(cljs.core.deref(x_STAR___$1),cljs.core.deref(y_STAR_));
});

frp.time.Time.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

frp.time.Time.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null);
});

frp.time.Time.cljs$lang$type = true;

frp.time.Time.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"frp.time/Time",null,(1),null));
});

frp.time.Time.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"frp.time/Time");
});

/**
 * Positional factory function for frp.time/Time.
 */
frp.time.__GT_Time = (function frp$time$__GT_Time(x){
return (new frp.time.Time(x,null,null,null));
});

/**
 * Factory function for frp.time/Time, taking a map of keywords to field values.
 */
frp.time.map__GT_Time = (function frp$time$map__GT_Time(G__60098){
var extmap__4424__auto__ = (function (){var G__60116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60098,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.record_QMARK_(G__60098)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60116);
} else {
return G__60116;
}
})();
return (new frp.time.Time(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60098),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cats.util.make_printable(frp.time.Time);
frp.time.time = frp.time.__GT_Time;
frp.time.real_epoch_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
frp.time.now_long = (function frp$time$now_long(){
return cljs_time.coerce.to_long(cljs_time.core.now());
});
frp.time.start = (function frp$time$start(){
return cljs.core.reset_BANG_(frp.time.real_epoch_state,(frp.time.now_long() - (1)));
});
frp.time.now = (function frp$time$now(){
var G__60117 = (frp.time.now_long() - cljs.core.deref(frp.time.real_epoch_state));
return (frp.time.time.cljs$core$IFn$_invoke$arity$1 ? frp.time.time.cljs$core$IFn$_invoke$arity$1(G__60117) : frp.time.time.call(null,G__60117));
});
frp.time.to_real_time = (function frp$time$to_real_time(p1__60118_SHARP_){
var G__60119 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(frp.time.real_epoch_state));
var G__60120 = p1__60118_SHARP_;
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__60119,G__60120) : cats.core._LT_$_GT_.call(null,G__60119,G__60120));
});
frp.time.epoch = (frp.time.time.cljs$core$IFn$_invoke$arity$1 ? frp.time.time.cljs$core$IFn$_invoke$arity$1((0)) : frp.time.time.call(null,(0)));

//# sourceMappingURL=frp.time.js.map
