goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__58292(s__58293){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__58293__$1 = s__58293;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58293__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__58322 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58322,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58322,(1),null);
var iterys__4519__auto__ = ((function (s__58293__$1,vec__58322,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__58292_$_iter__58294(s__58295){
return (new cljs.core.LazySeq(null,((function (s__58293__$1,vec__58322,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function (){
var s__58295__$1 = s__58295;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58295__$1);
if(temp__5735__auto____$1){
var s__58295__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58295__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58295__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58297 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58296 = (0);
while(true){
if((i__58296 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58296);
cljs.core.chunk_append(b__58297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__58526 = (i__58296 + (1));
i__58296 = G__58526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58297),tailrecursion$priority_map$iter__58292_$_iter__58294(cljs.core.chunk_rest(s__58295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58297),null);
}
} else {
var item = cljs.core.first(s__58295__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__58292_$_iter__58294(cljs.core.rest(s__58295__$2)));
}
} else {
return null;
}
break;
}
});})(s__58293__$1,vec__58322,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
,null,null));
});})(s__58293__$1,vec__58322,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__58292(cljs.core.rest(s__58293__$1)));
} else {
var G__58527 = cljs.core.rest(s__58293__$1);
s__58293__$1 = G__58527;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__58352(s__58353){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__58353__$1 = s__58353;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58353__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__58358 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(1),null);
var iterys__4519__auto__ = ((function (s__58353__$1,vec__58358,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__58352_$_iter__58354(s__58355){
return (new cljs.core.LazySeq(null,((function (s__58353__$1,vec__58358,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function (){
var s__58355__$1 = s__58355;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58355__$1);
if(temp__5735__auto____$1){
var s__58355__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58355__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58355__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58357 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58356 = (0);
while(true){
if((i__58356 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58356);
cljs.core.chunk_append(b__58357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__58543 = (i__58356 + (1));
i__58356 = G__58543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58357),tailrecursion$priority_map$iter__58352_$_iter__58354(cljs.core.chunk_rest(s__58355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58357),null);
}
} else {
var item = cljs.core.first(s__58355__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__58352_$_iter__58354(cljs.core.rest(s__58355__$2)));
}
} else {
return null;
}
break;
}
});})(s__58353__$1,vec__58358,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
,null,null));
});})(s__58353__$1,vec__58358,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__58352(cljs.core.rest(s__58353__$1)));
} else {
var G__58544 = cljs.core.rest(s__58353__$1);
s__58353__$1 = G__58544;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (function (){var G__58371 = item;
var G__58372 = new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517);
return (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(G__58371,G__58372) : self__.item__GT_priority.call(null,G__58371,G__58372));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5733__auto__)){
var current_priority = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__58381(s__58382){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__58382__$1 = s__58382;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58382__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__58388 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58388,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58388,(1),null);
var iterys__4519__auto__ = ((function (s__58382__$1,vec__58388,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__58381_$_iter__58383(s__58384){
return (new cljs.core.LazySeq(null,((function (s__58382__$1,vec__58388,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function (){
var s__58384__$1 = s__58384;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58384__$1);
if(temp__5735__auto____$1){
var s__58384__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58384__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58384__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58386 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58385 = (0);
while(true){
if((i__58385 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58385);
cljs.core.chunk_append(b__58386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__58567 = (i__58385 + (1));
i__58385 = G__58567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58386),tailrecursion$priority_map$iter__58381_$_iter__58383(cljs.core.chunk_rest(s__58384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58386),null);
}
} else {
var item = cljs.core.first(s__58384__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__58381_$_iter__58383(cljs.core.rest(s__58384__$2)));
}
} else {
return null;
}
break;
}
});})(s__58382__$1,vec__58388,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
,null,null));
});})(s__58382__$1,vec__58388,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__58381(cljs.core.rest(s__58382__$1)));
} else {
var G__58568 = cljs.core.rest(s__58382__$1);
s__58382__$1 = G__58568;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4523__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__58398(s__58399){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__58399__$1 = s__58399;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58399__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__58408 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58408,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58408,(1),null);
var iterys__4519__auto__ = ((function (s__58399__$1,vec__58408,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__58398_$_iter__58400(s__58401){
return (new cljs.core.LazySeq(null,((function (s__58399__$1,vec__58408,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function (){
var s__58401__$1 = s__58401;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58401__$1);
if(temp__5735__auto____$1){
var s__58401__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58401__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58401__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58403 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58402 = (0);
while(true){
if((i__58402 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58402);
cljs.core.chunk_append(b__58403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__58577 = (i__58402 + (1));
i__58402 = G__58577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58403),tailrecursion$priority_map$iter__58398_$_iter__58400(cljs.core.chunk_rest(s__58401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58403),null);
}
} else {
var item = cljs.core.first(s__58401__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__58398_$_iter__58400(cljs.core.rest(s__58401__$2)));
}
} else {
return null;
}
break;
}
});})(s__58399__$1,vec__58408,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
,null,null));
});})(s__58399__$1,vec__58408,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__58398(cljs.core.rest(s__58399__$1)));
} else {
var G__58578 = cljs.core.rest(s__58399__$1);
s__58399__$1 = G__58578;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4523__auto__(self__.priority__GT_set_of_items);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__58579 = null;
var G__58579__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__58579__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__58579 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__58579__2.call(this,self__,item);
case 3:
return G__58579__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__58579.cljs$core$IFn$_invoke$arity$2 = G__58579__2;
G__58579.cljs$core$IFn$_invoke$arity$3 = G__58579__3;
return G__58579;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args58253){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args58253)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__58421 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__58421.cljs$core$IFn$_invoke$arity$1 ? fexpr__58421.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__58421.call(null,this$__$1));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__58426(s__58427){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__58427__$1 = s__58427;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58427__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__58432 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58432,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58432,(1),null);
var iterys__4519__auto__ = ((function (s__58427__$1,vec__58432,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__58426_$_iter__58428(s__58429){
return (new cljs.core.LazySeq(null,((function (s__58427__$1,vec__58432,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function (){
var s__58429__$1 = s__58429;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58429__$1);
if(temp__5735__auto____$1){
var s__58429__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58429__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58429__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58431 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58430 = (0);
while(true){
if((i__58430 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58430);
cljs.core.chunk_append(b__58431,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__58580 = (i__58430 + (1));
i__58430 = G__58580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58431),tailrecursion$priority_map$iter__58426_$_iter__58428(cljs.core.chunk_rest(s__58429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58431),null);
}
} else {
var item = cljs.core.first(s__58429__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__58426_$_iter__58428(cljs.core.rest(s__58429__$2)));
}
} else {
return null;
}
break;
}
});})(s__58427__$1,vec__58432,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
,null,null));
});})(s__58427__$1,vec__58432,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__58426(cljs.core.rest(s__58427__$1)));
} else {
var G__58581 = cljs.core.rest(s__58427__$1);
s__58427__$1 = G__58581;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4523__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__58436(s__58437){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__58437__$1 = s__58437;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58437__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__58446 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58446,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58446,(1),null);
var iterys__4519__auto__ = ((function (s__58437__$1,vec__58446,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__58436_$_iter__58438(s__58439){
return (new cljs.core.LazySeq(null,((function (s__58437__$1,vec__58446,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function (){
var s__58439__$1 = s__58439;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58439__$1);
if(temp__5735__auto____$1){
var s__58439__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58439__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58439__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58441 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58440 = (0);
while(true){
if((i__58440 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58440);
cljs.core.chunk_append(b__58441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__58586 = (i__58440 + (1));
i__58440 = G__58586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58441),tailrecursion$priority_map$iter__58436_$_iter__58438(cljs.core.chunk_rest(s__58439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58441),null);
}
} else {
var item = cljs.core.first(s__58439__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__58436_$_iter__58438(cljs.core.rest(s__58439__$2)));
}
} else {
return null;
}
break;
}
});})(s__58437__$1,vec__58446,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
,null,null));
});})(s__58437__$1,vec__58446,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__58436(cljs.core.rest(s__58437__$1)));
} else {
var G__58587 = cljs.core.rest(s__58437__$1);
s__58437__$1 = G__58587;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4523__auto__(sets);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__58451 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__58451) : self__.keyfn.call(null,G__58451));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__58457 = arguments.length;
switch (G__58457) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2;

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58589 = arguments.length;
var i__4731__auto___58590 = (0);
while(true){
if((i__4731__auto___58590 < len__4730__auto___58589)){
args__4736__auto__.push((arguments[i__4731__auto___58590]));

var G__58591 = (i__4731__auto___58590 + (1));
i__4731__auto___58590 = G__58591;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__58599 = cljs.core.nnext(in$);
var G__58600 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__58599;
out = G__58600;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq58459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58459));
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58601 = arguments.length;
var i__4731__auto___58602 = (0);
while(true){
if((i__4731__auto___58602 < len__4730__auto___58601)){
args__4736__auto__.push((arguments[i__4731__auto___58602]));

var G__58603 = (i__4731__auto___58602 + (1));
i__4731__auto___58602 = G__58603;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__58604 = cljs.core.nnext(in$);
var G__58605 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__58604;
out = G__58605;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq58469){
var G__58470 = cljs.core.first(seq58469);
var seq58469__$1 = cljs.core.next(seq58469);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58470,seq58469__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58610 = arguments.length;
var i__4731__auto___58611 = (0);
while(true){
if((i__4731__auto___58611 < len__4730__auto___58610)){
args__4736__auto__.push((arguments[i__4731__auto___58611]));

var G__58612 = (i__4731__auto___58611 + (1));
i__4731__auto___58611 = G__58612;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__58616 = cljs.core.nnext(in$);
var G__58617 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__58616;
out = G__58617;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq58477){
var G__58478 = cljs.core.first(seq58477);
var seq58477__$1 = cljs.core.next(seq58477);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58478,seq58477__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58618 = arguments.length;
var i__4731__auto___58619 = (0);
while(true){
if((i__4731__auto___58619 < len__4730__auto___58618)){
args__4736__auto__.push((arguments[i__4731__auto___58619]));

var G__58626 = (i__4731__auto___58619 + (1));
i__4731__auto___58619 = G__58626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__58627 = cljs.core.nnext(in$);
var G__58628 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__58627;
out = G__58628;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq58492){
var G__58493 = cljs.core.first(seq58492);
var seq58492__$1 = cljs.core.next(seq58492);
var G__58494 = cljs.core.first(seq58492__$1);
var seq58492__$2 = cljs.core.next(seq58492__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58493,G__58494,seq58492__$2);
});


//# sourceMappingURL=tailrecursion.priority_map.js.map
