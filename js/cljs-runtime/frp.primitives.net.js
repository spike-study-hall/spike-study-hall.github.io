goog.provide('frp.primitives.net');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('aid.core');
goog.require('cats.protocols');
goog.require('cats.util');
goog.require('com.rpl.specter');
goog.require('linked.core');
goog.require('loom.graph');
goog.require('frp.time');
frp.primitives.net.initial_net_id = new cljs.core.Keyword(null,"0","0",351625802);
frp.primitives.net.initial_net = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dependency","dependency",1300131203),loom.graph.digraph(),new cljs.core.Keyword(null,"function","function",-2127255473),linked.core.map.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"occs","occs",-482222641),linked.core.map.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"effect","effect",347343289),linked.core.map.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"time","time",1385887882),frp.time.epoch], null);
frp.primitives.net.initial_universe = linked.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frp.primitives.net.initial_net_id,frp.primitives.net.initial_net], 0));
frp.primitives.net.universe_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frp.primitives.net.initial_universe);
frp.primitives.net.juxt_STAR_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (){var G__62718 = cljs.core.empty_QMARK_;
var G__62719 = cljs.core.constantly(cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
var G__62720 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.juxt);
return (aid.core.if_then_else.cljs$core$IFn$_invoke$arity$3 ? aid.core.if_then_else.cljs$core$IFn$_invoke$arity$3(G__62718,G__62719,G__62720) : aid.core.if_then_else.call(null,G__62718,G__62719,G__62720));
})(),cljs.core.vector);
frp.primitives.net.run_effects_BANG__STAR_ = (function frp$primitives$net$run_effects_BANG__STAR_(p1__62721_SHARP_){
var G__62724 = (function (){var G__62725 = cljs.core.deref(frp.primitives.net.universe_state);
return (p1__62721_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62721_SHARP_.cljs$core$IFn$_invoke$arity$1(G__62725) : p1__62721_SHARP_.call(null,G__62725));
})();
var fexpr__62723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.juxt_STAR_,cljs.core.vals(new cljs.core.Keyword(null,"effect","effect",347343289).cljs$core$IFn$_invoke$arity$1((function (){var G__62726 = cljs.core.deref(frp.primitives.net.universe_state);
return (p1__62721_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62721_SHARP_.cljs$core$IFn$_invoke$arity$1(G__62726) : p1__62721_SHARP_.call(null,G__62726));
})())));
return (fexpr__62723.cljs$core$IFn$_invoke$arity$1 ? fexpr__62723.cljs$core$IFn$_invoke$arity$1(G__62724) : fexpr__62723.call(null,G__62724));
});
frp.primitives.net.set_active = (function frp$primitives$net$set_active(net_id,x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net_id,new cljs.core.Keyword(null,"active","active",1895962068)], null),x));
});
frp.primitives.net.run_invocations = (function frp$primitives$net$run_invocations(p1__62727_SHARP_){
while(true){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"invocations","invocations",-1981777494).cljs$core$IFn$_invoke$arity$1((function (){var G__62728 = cljs.core.deref(frp.primitives.net.universe_state);
return (p1__62727_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62727_SHARP_.cljs$core$IFn$_invoke$arity$1(G__62728) : p1__62727_SHARP_.call(null,G__62728));
})()))){
return null;
} else {
var f_BANG__62780 = cljs.core.first(new cljs.core.Keyword(null,"invocations","invocations",-1981777494).cljs$core$IFn$_invoke$arity$1((function (){var G__62729 = cljs.core.deref(frp.primitives.net.universe_state);
return (p1__62727_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62727_SHARP_.cljs$core$IFn$_invoke$arity$1(G__62729) : p1__62727_SHARP_.call(null,G__62729));
})()));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62727_SHARP_,new cljs.core.Keyword(null,"invocations","invocations",-1981777494)], null),cljs.core.rest));

(f_BANG__62780.cljs$core$IFn$_invoke$arity$0 ? f_BANG__62780.cljs$core$IFn$_invoke$arity$0() : f_BANG__62780.call(null));

var G__62781 = p1__62727_SHARP_;
p1__62727_SHARP_ = G__62781;
continue;
}
break;
}
});
frp.primitives.net.get_new_time = (function frp$primitives$net$get_new_time(p1__62731_SHARP_){
while(true){
var current = frp.time.now();
var pred__62732 = cljs.core._EQ_;
var expr__62733 = p1__62731_SHARP_;
if(cljs.core.truth_((pred__62732.cljs$core$IFn$_invoke$arity$2 ? pred__62732.cljs$core$IFn$_invoke$arity$2(current,expr__62733) : pred__62732.call(null,current,expr__62733)))){
var G__62782 = p1__62731_SHARP_;
p1__62731_SHARP_ = G__62782;
continue;
} else {
return current;
}
break;
}
});
frp.primitives.net.run_effects_twice_BANG_ = (function frp$primitives$net$run_effects_twice_BANG_(net_id){
frp.primitives.net.set_active(net_id,false);

frp.primitives.net.run_effects_BANG__STAR_(net_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net_id,new cljs.core.Keyword(null,"time","time",1385887882)], null),frp.primitives.net.get_new_time(frp.time.now())));

frp.primitives.net.run_effects_BANG__STAR_(net_id);

frp.primitives.net.set_active(net_id,true);

return frp.primitives.net.run_invocations(net_id);
});
frp.primitives.net.invoke_net = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (net_id,x){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__62735 = cljs.core.deref(frp.primitives.net.universe_state);
return (net_id.cljs$core$IFn$_invoke$arity$1 ? net_id.cljs$core$IFn$_invoke$arity$1(G__62735) : net_id.call(null,G__62735));
})(),x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,net_id,x));

return frp.primitives.net.run_effects_twice_BANG_(net_id);
} else {
return null;
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
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cats.protocols.Printable}
*/
frp.primitives.net.Net = (function (net_id,__meta,__extmap,__hash){
this.net_id = net_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748939;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
frp.primitives.net.Net.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

frp.primitives.net.Net.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k62737,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__62749 = k62737;
var G__62749__$1 = (((G__62749 instanceof cljs.core.Keyword))?G__62749.fqn:null);
switch (G__62749__$1) {
case "net-id":
return self__.net_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62737,else__4388__auto__);

}
});

frp.primitives.net.Net.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__62753){
var vec__62754 = p__62753;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62754,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62754,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

frp.primitives.net.Net.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#frp.primitives.net.Net{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"net-id","net-id",418155108),self__.net_id],null))], null),self__.__extmap));
});

frp.primitives.net.Net.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62736){
var self__ = this;
var G__62736__$1 = this;
return (new cljs.core.RecordIter((0),G__62736__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-id","net-id",418155108)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

frp.primitives.net.Net.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

frp.primitives.net.Net.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new frp.primitives.net.Net(self__.net_id,self__.__meta,self__.__extmap,self__.__hash));
});

frp.primitives.net.Net.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

frp.primitives.net.Net.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__62763 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (715378814 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__62763(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

frp.primitives.net.Net.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62738,other62739){
var self__ = this;
var this62738__$1 = this;
return (((!((other62739 == null)))) && ((this62738__$1.constructor === other62739.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62738__$1.net_id,other62739.net_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62738__$1.__extmap,other62739.__extmap)));
});

frp.primitives.net.Net.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"net-id","net-id",418155108),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new frp.primitives.net.Net(self__.net_id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

frp.primitives.net.Net.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__62736){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__62764 = cljs.core.keyword_identical_QMARK_;
var expr__62765 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__62767 = new cljs.core.Keyword(null,"net-id","net-id",418155108);
var G__62768 = expr__62765;
return (pred__62764.cljs$core$IFn$_invoke$arity$2 ? pred__62764.cljs$core$IFn$_invoke$arity$2(G__62767,G__62768) : pred__62764.call(null,G__62767,G__62768));
})())){
return (new frp.primitives.net.Net(G__62736,self__.__meta,self__.__extmap,null));
} else {
return (new frp.primitives.net.Net(self__.net_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__62736),null));
}
});

frp.primitives.net.Net.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"net-id","net-id",418155108),self__.net_id,null))], null),self__.__extmap));
});

frp.primitives.net.Net.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__62736){
var self__ = this;
var this__4384__auto____$1 = this;
return (new frp.primitives.net.Net(self__.net_id,G__62736,self__.__extmap,self__.__hash));
});

frp.primitives.net.Net.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

frp.primitives.net.Net.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (frp.primitives.net.invoke_net.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.net.invoke_net.cljs$core$IFn$_invoke$arity$2(self__.net_id,x) : frp.primitives.net.invoke_net.call(null,self__.net_id,x));
});

frp.primitives.net.Net.prototype.apply = (function (self__,args62748){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args62748)));
});

frp.primitives.net.Net.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var _ = this;
return (frp.primitives.net.invoke_net.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.net.invoke_net.cljs$core$IFn$_invoke$arity$2(self__.net_id,x) : frp.primitives.net.invoke_net.call(null,self__.net_id,x));
});

frp.primitives.net.Net.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__62770 = cljs.core.deref(frp.primitives.net.universe_state);
return (self__.net_id.cljs$core$IFn$_invoke$arity$1 ? self__.net_id.cljs$core$IFn$_invoke$arity$1(G__62770) : self__.net_id.call(null,G__62770));
});

frp.primitives.net.Net.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

frp.primitives.net.Net.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#[net ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.net_id),"]"].join('');
});

frp.primitives.net.Net.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"net-id","net-id",2058686635,null)], null);
});

frp.primitives.net.Net.cljs$lang$type = true;

frp.primitives.net.Net.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"frp.primitives.net/Net",null,(1),null));
});

frp.primitives.net.Net.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"frp.primitives.net/Net");
});

/**
 * Positional factory function for frp.primitives.net/Net.
 */
frp.primitives.net.__GT_Net = (function frp$primitives$net$__GT_Net(net_id){
return (new frp.primitives.net.Net(net_id,null,null,null));
});

/**
 * Factory function for frp.primitives.net/Net, taking a map of keywords to field values.
 */
frp.primitives.net.map__GT_Net = (function frp$primitives$net$map__GT_Net(G__62740){
var extmap__4424__auto__ = (function (){var G__62772 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62740,new cljs.core.Keyword(null,"net-id","net-id",418155108));
if(cljs.core.record_QMARK_(G__62740)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62772);
} else {
return G__62772;
}
})();
return (new frp.primitives.net.Net(new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(G__62740),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cats.util.make_printable(frp.primitives.net.Net);
frp.primitives.net.parse_keyword = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string,cljs.core.name);
frp.primitives.net.get_last_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.last);
frp.primitives.net.parse_last_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.parse_keyword,frp.primitives.net.get_last_key);
frp.primitives.net.get_id_number = (function frp$primitives$net$get_id_number(p1__62773_SHARP_){
while(true){
var pred__62774 = aid.core.call_pred;
var expr__62775 = p1__62773_SHARP_;
if(cljs.core.truth_((pred__62774.cljs$core$IFn$_invoke$arity$2 ? pred__62774.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,expr__62775) : pred__62774.call(null,cljs.core.empty_QMARK_,expr__62775)))){
return (0);
} else {
if(cljs.core.truth_((function (){var G__62777 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,frp.primitives.net.parse_last_key);
var G__62778 = expr__62775;
return (pred__62774.cljs$core$IFn$_invoke$arity$2 ? pred__62774.cljs$core$IFn$_invoke$arity$2(G__62777,G__62778) : pred__62774.call(null,G__62777,G__62778));
})())){
return ((frp.primitives.net.parse_last_key.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.net.parse_last_key.cljs$core$IFn$_invoke$arity$1(p1__62773_SHARP_) : frp.primitives.net.parse_last_key.call(null,p1__62773_SHARP_)) + (1));
} else {
var G__62801 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__62773_SHARP_,(frp.primitives.net.get_last_key.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.net.get_last_key.cljs$core$IFn$_invoke$arity$1(p1__62773_SHARP_) : frp.primitives.net.get_last_key.call(null,p1__62773_SHARP_)));
p1__62773_SHARP_ = G__62801;
continue;
}
}
break;
}
});
frp.primitives.net.get_id = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword,cljs.core.str,frp.primitives.net.get_id_number);
frp.primitives.net.net = (function frp$primitives$net$net(){
var net_id = (function (){var G__62779 = cljs.core.deref(frp.primitives.net.universe_state);
return (frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1(G__62779) : frp.primitives.net.get_id.call(null,G__62779));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,net_id,frp.primitives.net.initial_net));

return frp.primitives.net.__GT_Net(net_id);
});
frp.primitives.net._STAR_net_id_STAR_ = frp.primitives.net.initial_net_id;

//# sourceMappingURL=frp.primitives.net.js.map
