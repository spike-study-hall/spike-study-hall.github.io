goog.provide('loom.alg_generic');
goog.require('cljs.core');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek(path);
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this_node){
return (function (p1__23154_SHARP_){
var G__23155 = preds;
var G__23156 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__23154_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__23155,G__23156) : loom.alg_generic.paths.call(null,G__23155,G__23156));
});})(this_node))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_node){
return (function (p1__23153_SHARP_){
return cljs.core.not_any_QMARK_(((function (this_node){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__23153_SHARP_], null));
});})(this_node))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
});})(this_node))
,(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23157_SHARP_){
var G__23158 = cljs.core.peek(p1__23157_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__23158) : preds.call(null,G__23158));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__23160){
var vec__23161 = p__23160;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__23164 = p;
var G__23165 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__23164,G__23165) : span.call(null,G__23164,G__23165));
})(),n));
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,preds);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of nodes.
 */
loom.alg_generic.pre_traverse = (function loom$alg_generic$pre_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23696 = arguments.length;
var i__4731__auto___23697 = (0);
while(true){
if((i__4731__auto___23697 < len__4730__auto___23696)){
args__4736__auto__.push((arguments[i__4731__auto___23697]));

var G__23698 = (i__4731__auto___23697 + (1));
i__4731__auto___23697 = G__23698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23174){
var map__23175 = p__23174;
var map__23175__$1 = (((((!((map__23175 == null))))?(((((map__23175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23175):map__23175);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23175__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__23175,map__23175__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5735__auto__,map__23175,map__23175__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5735__auto__,map__23175,map__23175__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__23175,map__23175__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq23171){
var G__23172 = cljs.core.first(seq23171);
var seq23171__$1 = cljs.core.next(seq23171);
var G__23173 = cljs.core.first(seq23171__$1);
var seq23171__$2 = cljs.core.next(seq23171__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23172,G__23173,seq23171__$2);
});

/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23704 = arguments.length;
var i__4731__auto___23705 = (0);
while(true){
if((i__4731__auto___23705 < len__4730__auto___23704)){
args__4736__auto__.push((arguments[i__4731__auto___23705]));

var G__23706 = (i__4731__auto___23705 + (1));
i__4731__auto___23705 = G__23706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23183){
var map__23184 = p__23183;
var map__23184__$1 = (((((!((map__23184 == null))))?(((((map__23184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23184):map__23184);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23184__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__23184,map__23184__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5733__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5733__auto__)){
var nbr = temp__5733__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__23184,map__23184__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__23184,map__23184__$1,seen))
,null,null)));
} else {
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__23712 = successors__$1;
var G__23713 = parent;
var G__23714 = cljs.core.peek(nbrstack);
var G__23715 = cljs.core.pop(stack);
var G__23716 = cljs.core.pop(nbrstack);
var G__23717 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__23712;
start__$1 = G__23713;
nbrs = G__23714;
stack = G__23715;
nbrstack = G__23716;
seen__$1 = G__23717;
continue;
} else {
return null;
}
}
break;
}
});})(map__23184,map__23184__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq23180){
var G__23181 = cljs.core.first(seq23180);
var seq23180__$1 = cljs.core.next(seq23180);
var G__23182 = cljs.core.first(seq23180__$1);
var seq23180__$2 = cljs.core.next(seq23180__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23181,G__23182,seq23180__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23721 = arguments.length;
var i__4731__auto___23722 = (0);
while(true){
if((i__4731__auto___23722 < len__4730__auto___23721)){
args__4736__auto__.push((arguments[i__4731__auto___23722]));

var G__23725 = (i__4731__auto___23722 + (1));
i__4731__auto___23722 = G__23725;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23196){
var map__23197 = p__23196;
var map__23197__$1 = (((((!((map__23197 == null))))?(((((map__23197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23197):map__23197);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23197__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span(preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span(preds);
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var temp__5733__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v))));
if(cljs.core.truth_(temp__5733__auto__)){
var u = temp__5733__auto__;
var G__23747 = seen__$2;
var G__23748 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__23749 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__23747;
preds = G__23748;
stack = G__23749;
continue;
} else {
var G__23753 = seen__$2;
var G__23754 = preds;
var G__23755 = cljs.core.pop(stack);
seen__$1 = G__23753;
preds = G__23754;
stack = G__23755;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq23192){
var G__23193 = cljs.core.first(seq23192);
var seq23192__$1 = cljs.core.next(seq23192);
var G__23194 = cljs.core.first(seq23192__$1);
var seq23192__$2 = cljs.core.next(seq23192__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23193,G__23194,seq23192__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23756 = arguments.length;
var i__4731__auto___23757 = (0);
while(true){
if((i__4731__auto___23757 < len__4730__auto___23756)){
args__4736__auto__.push((arguments[i__4731__auto___23757]));

var G__23762 = (i__4731__auto___23757 + (1));
i__4731__auto___23757 = G__23762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23208){
var map__23209 = p__23208;
var map__23209__$1 = (((((!((map__23209 == null))))?(((((map__23209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23209):map__23209);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23209__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23209__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.empty_QMARK_(nbrs)){
var G__23768 = seen__$2;
var G__23769 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__23770 = cljs.core.pop(stack);
seen__$1 = G__23768;
result = G__23769;
stack = G__23770;
continue;
} else {
var G__23771 = seen__$2;
var G__23772 = result;
var G__23773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__23771;
result = G__23772;
stack = G__23773;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq23205){
var G__23206 = cljs.core.first(seq23205);
var seq23205__$1 = cljs.core.next(seq23205);
var G__23207 = cljs.core.first(seq23205__$1);
var seq23205__$2 = cljs.core.next(seq23205__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23206,G__23207,seq23205__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23774 = arguments.length;
var i__4731__auto___23775 = (0);
while(true){
if((i__4731__auto___23775 < len__4730__auto___23774)){
args__4736__auto__.push((arguments[i__4731__auto___23775]));

var G__23776 = (i__4731__auto___23775 + (1));
i__4731__auto___23775 = G__23776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23217){
var map__23218 = p__23217;
var map__23218__$1 = (((((!((map__23218 == null))))?(((((map__23218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23218):map__23218);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23218__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23218__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start__$1) : successors.call(null,start__$1));
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
var temp__5733__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5733__auto__)){
var nbr = temp__5733__auto__;
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
var G__23780 = start__$1;
var G__23781 = cljs.core.next(nbrs);
var G__23782 = stack;
var G__23783 = nbrstack;
var G__23784 = seen__$2;
var G__23785 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__23780;
nbrs = G__23781;
stack = G__23782;
nbrstack = G__23783;
seen__$1 = G__23784;
edges = G__23785;
continue;
} else {
var G__23786 = nbr;
var G__23787 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__23788 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__23789 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__23790 = seen__$2;
var G__23791 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__23786;
nbrs = G__23787;
stack = G__23788;
nbrstack = G__23789;
seen__$1 = G__23790;
edges = G__23791;
continue;
}
} else {
var temp__5733__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5733__auto____$1)){
var parent = temp__5733__auto____$1;
var G__23792 = parent;
var G__23793 = cljs.core.peek(nbrstack);
var G__23794 = cljs.core.pop(stack);
var G__23795 = cljs.core.pop(nbrstack);
var G__23796 = seen__$2;
var G__23797 = edges;
start__$1 = G__23792;
nbrs = G__23793;
stack = G__23794;
nbrstack = G__23795;
seen__$1 = G__23796;
edges = G__23797;
continue;
} else {
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,seen__$2], null);
} else {
return edges;
}
}
}
break;
}
}
});

loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq23214){
var G__23215 = cljs.core.first(seq23214);
var seq23214__$1 = cljs.core.next(seq23214);
var G__23216 = cljs.core.first(seq23214__$1);
var seq23214__$2 = cljs.core.next(seq23214__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23215,G__23216,seq23214__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__23224 = arguments.length;
switch (G__23224) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return result;
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var us = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(explored__$1,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.seq(us)){
if(cljs.core.truth_(cljs.core.some(seen__$2,us))){
return null;
} else {
var G__23806 = seen__$2;
var G__23807 = explored__$1;
var G__23808 = result;
var G__23809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__23806;
explored__$1 = G__23807;
result = G__23808;
stack = G__23809;
continue;
}
} else {
var G__23810 = seen__$2;
var G__23811 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__23812 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__23813 = cljs.core.pop(stack);
seen__$1 = G__23810;
explored__$1 = G__23811;
result = G__23812;
stack = G__23813;
continue;
}
}
break;
}
});

loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4;

/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23815 = arguments.length;
var i__4731__auto___23816 = (0);
while(true){
if((i__4731__auto___23816 < len__4730__auto___23815)){
args__4736__auto__.push((arguments[i__4731__auto___23816]));

var G__23818 = (i__4731__auto___23816 + (1));
i__4731__auto___23816 = G__23818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23246){
var map__23247 = p__23246;
var map__23247__$1 = (((((!((map__23247 == null))))?(((((map__23247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23247):map__23247);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23247__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23247__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23247__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__23247,map__23247__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__23247,map__23247__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5735__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__23270 = temp__5735__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23270,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23270,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function (p1__23240_SHARP_){
var G__23273 = p1__23240_SHARP_;
var G__23274 = node;
var G__23275 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__23273,G__23274,G__23275) : nbr_pred.call(null,G__23273,G__23274,G__23275));
});})(vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function (p1__23239_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__23239_SHARP_);
});})(vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__23279(s__23280){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function (){
var s__23280__$1 = s__23280;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23280__$1);
if(temp__5735__auto____$1){
var s__23280__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23280__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23280__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23282 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23281 = (0);
while(true){
if((i__23281 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23281);
cljs.core.chunk_append(b__23282,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__23828 = (i__23281 + (1));
i__23281 = G__23828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23282),loom$alg_generic$step_$_iter__23279(cljs.core.chunk_rest(s__23280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23282),null);
}
} else {
var nbr = cljs.core.first(s__23280__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__23279(cljs.core.rest(s__23280__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
,null,null));
});})(nbrs,vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function (p1__23241_SHARP_,p2__23242_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23241_SHARP_,p2__23242_SHARP_,node);
});})(nbrs,vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
,preds,nbrs));
});})(vec__23270,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function loom$alg_generic$iter__23287(s__23288){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen){
return (function (){
var s__23288__$1 = s__23288;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23288__$1);
if(temp__5735__auto__){
var s__23288__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23288__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23288__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23290 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23289 = (0);
while(true){
if((i__23289 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23289);
cljs.core.chunk_append(b__23290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__23844 = (i__23289 + (1));
i__23289 = G__23844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23290),loom$alg_generic$iter__23287(cljs.core.chunk_rest(s__23288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23290),null);
}
} else {
var s = cljs.core.first(s__23288__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__23287(cljs.core.rest(s__23288__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__23247,map__23247__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq23243){
var G__23244 = cljs.core.first(seq23243);
var seq23243__$1 = cljs.core.next(seq23243);
var G__23245 = cljs.core.first(seq23243__$1);
var seq23243__$2 = cljs.core.next(seq23243__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23244,G__23245,seq23243__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23845 = arguments.length;
var i__4731__auto___23846 = (0);
while(true){
if((i__4731__auto___23846 < len__4730__auto___23845)){
args__4736__auto__.push((arguments[i__4731__auto___23846]));

var G__23847 = (i__4731__auto___23846 + (1));
i__4731__auto___23846 = G__23847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23304){
var map__23305 = p__23304;
var map__23305__$1 = (((((!((map__23305 == null))))?(((((map__23305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23305):map__23305);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__23305,map__23305__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__23305,map__23305__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq23297){
var G__23298 = cljs.core.first(seq23297);
var seq23297__$1 = cljs.core.next(seq23297);
var G__23299 = cljs.core.first(seq23297__$1);
var seq23297__$2 = cljs.core.next(seq23297__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23298,G__23299,seq23297__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23851 = arguments.length;
var i__4731__auto___23852 = (0);
while(true){
if((i__4731__auto___23852 < len__4730__auto___23851)){
args__4736__auto__.push((arguments[i__4731__auto___23852]));

var G__23853 = (i__4731__auto___23852 + (1));
i__4731__auto___23852 = G__23853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__23314){
var map__23315 = p__23314;
var map__23315__$1 = (((((!((map__23315 == null))))?(((((map__23315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23315):map__23315);
var opts = map__23315__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5735__auto__ = cljs.core.some(((function (opts__$1,map__23315,map__23315__$1,opts){
return (function (p__23317){
var vec__23318 = p__23317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__23315,map__23315__$1,opts))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5735__auto__)){
var preds = temp__5735__auto__;
return cljs.core.reverse(loom.alg_generic.trace_path(preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq23310){
var G__23311 = cljs.core.first(seq23310);
var seq23310__$1 = cljs.core.next(seq23310);
var G__23312 = cljs.core.first(seq23310__$1);
var seq23310__$2 = cljs.core.next(seq23310__$1);
var G__23313 = cljs.core.first(seq23310__$2);
var seq23310__$3 = cljs.core.next(seq23310__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23311,G__23312,G__23313,seq23310__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__23857 = m2;
var G__23858 = m1;
m1 = G__23857;
m2 = G__23858;
continue;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,m2),cljs.core.keys(m1));
}
break;
}
});
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
throw (new Error("Unsupported operation `bf-path-bi`"));
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__23325(s__23326){
return (new cljs.core.LazySeq(null,(function (){
var s__23326__$1 = s__23326;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23326__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var node = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__23326__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__23325_$_iter__23330(s__23331){
return (new cljs.core.LazySeq(null,((function (s__23326__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23331__$1 = s__23331;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23331__$1);
if(temp__5735__auto____$1){
var s__23331__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23331__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23331__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23333 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23332 = (0);
while(true){
if((i__23332 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23332);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__23333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__23859 = (i__23332 + (1));
i__23332 = G__23859;
continue;
} else {
var G__23860 = (i__23332 + (1));
i__23332 = G__23860;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23333),loom$alg_generic$reverse_edges_$_iter__23325_$_iter__23330(cljs.core.chunk_rest(s__23331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23333),null);
}
} else {
var nbr = cljs.core.first(s__23331__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__23325_$_iter__23330(cljs.core.rest(s__23331__$2)));
} else {
var G__23861 = cljs.core.rest(s__23331__$2);
s__23331__$1 = G__23861;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23326__$1,node,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23326__$1,node,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__23325(cljs.core.rest(s__23326__$1)));
} else {
var G__23862 = cljs.core.rest(s__23326__$1);
s__23326__$1 = G__23862;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__23338(s__23339){
return (new cljs.core.LazySeq(null,(function (){
var s__23339__$1 = s__23339;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23339__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__23339__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__23338_$_iter__23340(s__23341){
return (new cljs.core.LazySeq(null,((function (s__23339__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23341__$1 = s__23341;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23341__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var from = cljs.core.first(xs__6292__auto____$1);
var iterys__4519__auto__ = ((function (s__23341__$1,s__23339__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__23338_$_iter__23340_$_iter__23342(s__23343){
return (new cljs.core.LazySeq(null,((function (s__23341__$1,s__23339__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23343__$1 = s__23343;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__23343__$1);
if(temp__5735__auto____$2){
var s__23343__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__23343__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23343__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23345 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23344 = (0);
while(true){
if((i__23344 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23344);
cljs.core.chunk_append(b__23345,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__23866 = (i__23344 + (1));
i__23344 = G__23866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23345),loom$alg_generic$conj_paths_$_iter__23338_$_iter__23340_$_iter__23342(cljs.core.chunk_rest(s__23343__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23345),null);
}
} else {
var to = cljs.core.first(s__23343__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__23338_$_iter__23340_$_iter__23342(cljs.core.rest(s__23343__$2)));
}
} else {
return null;
}
break;
}
});})(s__23341__$1,s__23339__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23341__$1,s__23339__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__23338_$_iter__23340(cljs.core.rest(s__23341__$1)));
} else {
var G__23872 = cljs.core.rest(s__23341__$1);
s__23341__$1 = G__23872;
continue;
}
} else {
return null;
}
break;
}
});})(s__23339__$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23339__$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__23338(cljs.core.rest(s__23339__$1)));
} else {
var G__23873 = cljs.core.rest(s__23339__$1);
s__23339__$1 = G__23873;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,predecessors);
var overlaps = ((function (find_succs,find_preds){
return (function (coll,q){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (find_succs,find_preds){
return (function (p1__23356_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__23356_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__23360){
var vec__23361 = p__23360;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
});})(find_succs,find_preds,overlaps))
,cljs.core.transient$(map),pairs));
});})(find_succs,find_preds,overlaps))
;
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq(q1)) && (cljs.core.seq(q2)))){
if((cljs.core.count(q1) <= cljs.core.count(q2))){
var pairs = (find_succs.cljs$core$IFn$_invoke$arity$2 ? find_succs.cljs$core$IFn$_invoke$arity$2(q1,outgoing) : find_succs.call(null,q1,outgoing));
var outgoing__$1 = map_set_pairs(outgoing,pairs);
var q1__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5733__auto__ = overlaps(incoming,q1__$1);
if(temp__5733__auto__){
var all = temp__5733__auto__;
return loom.alg_generic.conj_paths(outgoing__$1,incoming,cljs.core.set(all));
} else {
var G__23885 = outgoing__$1;
var G__23886 = incoming;
var G__23887 = q1__$1;
var G__23888 = q2;
outgoing = G__23885;
incoming = G__23886;
q1 = G__23887;
q2 = G__23888;
continue;
}
} else {
var pairs = (find_preds.cljs$core$IFn$_invoke$arity$2 ? find_preds.cljs$core$IFn$_invoke$arity$2(q2,incoming) : find_preds.call(null,q2,incoming));
var incoming__$1 = map_set_pairs(incoming,pairs);
var q2__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5733__auto__ = overlaps(outgoing,q2__$1);
if(temp__5733__auto__){
var all = temp__5733__auto__;
return loom.alg_generic.conj_paths(outgoing,incoming__$1,cljs.core.set(all));
} else {
var G__23889 = outgoing;
var G__23890 = incoming__$1;
var G__23891 = q1;
var G__23892 = q2__$1;
outgoing = G__23889;
incoming = G__23890;
q1 = G__23891;
q2 = G__23892;
continue;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in the
 *   format {node [distance predecessor]}. When f is provided, returns
 *   a lazy-seq of (f node state) for each node
 */
loom.alg_generic.dijkstra_traverse = (function loom$alg_generic$dijkstra_traverse(var_args){
var G__23370 = arguments.length;
switch (G__23370) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__23385){
var vec__23386 = p__23385;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23386,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23386,(1),null);
var temp__5735__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__23392 = temp__5735__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23392,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23392,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23392,(2),null);
var fpq = vec__23392;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__23392,dist_su,_,u,fpq,temp__5735__auto__,vec__23386,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__23392,dist_su,_,u,fpq,temp__5735__auto__,vec__23386,state,pq){
return (function (p__23395,v){
var vec__23396 = p__23395;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23396,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23396,(1),null);
var dist_suv = (dist_su + (dist.cljs$core$IFn$_invoke$arity$2 ? dist.cljs$core$IFn$_invoke$arity$2(u,v) : dist.call(null,u,v)));
var dist_sv = cljs.core.first((state__$1.cljs$core$IFn$_invoke$arity$1 ? state__$1.cljs$core$IFn$_invoke$arity$1(v) : state__$1.call(null,v)));
if(cljs.core.truth_((function (){var and__4120__auto__ = dist_sv;
if(cljs.core.truth_(and__4120__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash(v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash(v),v], null))], null);
}
});})(vec__23392,dist_su,_,u,fpq,temp__5735__auto__,vec__23386,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__23392,dist_su,_,u,fpq,temp__5735__auto__,vec__23386,state,pq))
,null,null)));
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash(start),start], null)], 0))], null));
});

loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4;

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__23400){
var vec__23401 = p__23400;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23401,(0),null);
var vec__23404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23401,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23404,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23404,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in(span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second(cljs.core.last(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__5733__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23410){
var vec__23411 = p__23410;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__23414 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23414,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23414,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse(loom.alg_generic.trace_path(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.second,end_state),end)),cljs.core.first((end_state.cljs$core$IFn$_invoke$arity$1 ? end_state.cljs$core$IFn$_invoke$arity$1(end) : end_state.call(null,end)))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first(loom.alg_generic.dijkstra_path_dist(successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$((32));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$((function (){var G__23423 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__23423);
})());
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((1));
});
loom.alg_generic.bm_copy = (function loom$alg_generic$bm_copy(bm,size){
return bm.slice((0),size);
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__4219__auto__ = cljs.core.count(bitmap);
var y__4220__auto__ = loom.alg_generic.bm_longs((idx + (1)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var new_bitmap = loom.alg_generic.bm_copy(bitmap,size);
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (new_bitmap[chunk]);
var new_value = (value | mask);
(new_bitmap[chunk] = new_value);

return new_bitmap;
});
/**
 * Get boolean state of bit in 'bitmap at 'idx.
 */
loom.alg_generic.bm_get = (function loom$alg_generic$bm_get(bitmap,idx){
if((loom.alg_generic.bm_longs((idx + (1))) <= cljs.core.count(bitmap))){
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (bitmap[chunk]);
var masked_value = (value & mask);
return (!((masked_value === (0))));
} else {
return null;
}
});
/**
 * Logically OR 'bitmaps together.
 */
loom.alg_generic.bm_or = (function loom$alg_generic$bm_or(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23918 = arguments.length;
var i__4731__auto___23919 = (0);
while(true){
if((i__4731__auto___23919 < len__4730__auto___23918)){
args__4736__auto__.push((arguments[i__4731__auto___23919]));

var G__23920 = (i__4731__auto___23919 + (1));
i__4731__auto___23919 = G__23920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_(bitmaps)){
return loom.alg_generic.bm_new();
} else {
var size = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy(cljs.core.first(bitmaps),size);
var seq__23452_23923 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__23459_23924 = null;
var count__23460_23925 = (0);
var i__23461_23926 = (0);
while(true){
if((i__23461_23926 < count__23460_23925)){
var bitmap_23928 = chunk__23459_23924.cljs$core$IIndexed$_nth$arity$2(null,i__23461_23926);
var seq__23462_23929 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_23928));
var chunk__23464_23930 = null;
var count__23465_23931 = (0);
var i__23466_23932 = (0);
while(true){
if((i__23466_23932 < count__23465_23931)){
var vec__23520_23933 = chunk__23464_23930.cljs$core$IIndexed$_nth$arity$2(null,i__23466_23932);
var idx_23934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23520_23933,(0),null);
var value_23935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23520_23933,(1),null);
var masked_value_23936 = (value_23935 | (new_bitmap[idx_23934]));
(new_bitmap[idx_23934] = masked_value_23936);


var G__23937 = seq__23462_23929;
var G__23938 = chunk__23464_23930;
var G__23939 = count__23465_23931;
var G__23940 = (i__23466_23932 + (1));
seq__23462_23929 = G__23937;
chunk__23464_23930 = G__23938;
count__23465_23931 = G__23939;
i__23466_23932 = G__23940;
continue;
} else {
var temp__5735__auto___23941 = cljs.core.seq(seq__23462_23929);
if(temp__5735__auto___23941){
var seq__23462_23942__$1 = temp__5735__auto___23941;
if(cljs.core.chunked_seq_QMARK_(seq__23462_23942__$1)){
var c__4550__auto___23943 = cljs.core.chunk_first(seq__23462_23942__$1);
var G__23944 = cljs.core.chunk_rest(seq__23462_23942__$1);
var G__23945 = c__4550__auto___23943;
var G__23946 = cljs.core.count(c__4550__auto___23943);
var G__23947 = (0);
seq__23462_23929 = G__23944;
chunk__23464_23930 = G__23945;
count__23465_23931 = G__23946;
i__23466_23932 = G__23947;
continue;
} else {
var vec__23524_23948 = cljs.core.first(seq__23462_23942__$1);
var idx_23949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23524_23948,(0),null);
var value_23950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23524_23948,(1),null);
var masked_value_23951 = (value_23950 | (new_bitmap[idx_23949]));
(new_bitmap[idx_23949] = masked_value_23951);


var G__23953 = cljs.core.next(seq__23462_23942__$1);
var G__23954 = null;
var G__23955 = (0);
var G__23956 = (0);
seq__23462_23929 = G__23953;
chunk__23464_23930 = G__23954;
count__23465_23931 = G__23955;
i__23466_23932 = G__23956;
continue;
}
} else {
}
}
break;
}

var G__23958 = seq__23452_23923;
var G__23959 = chunk__23459_23924;
var G__23960 = count__23460_23925;
var G__23961 = (i__23461_23926 + (1));
seq__23452_23923 = G__23958;
chunk__23459_23924 = G__23959;
count__23460_23925 = G__23960;
i__23461_23926 = G__23961;
continue;
} else {
var temp__5735__auto___23962 = cljs.core.seq(seq__23452_23923);
if(temp__5735__auto___23962){
var seq__23452_23963__$1 = temp__5735__auto___23962;
if(cljs.core.chunked_seq_QMARK_(seq__23452_23963__$1)){
var c__4550__auto___23964 = cljs.core.chunk_first(seq__23452_23963__$1);
var G__23965 = cljs.core.chunk_rest(seq__23452_23963__$1);
var G__23966 = c__4550__auto___23964;
var G__23967 = cljs.core.count(c__4550__auto___23964);
var G__23968 = (0);
seq__23452_23923 = G__23965;
chunk__23459_23924 = G__23966;
count__23460_23925 = G__23967;
i__23461_23926 = G__23968;
continue;
} else {
var bitmap_23969 = cljs.core.first(seq__23452_23963__$1);
var seq__23453_23972 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_23969));
var chunk__23455_23973 = null;
var count__23456_23974 = (0);
var i__23457_23975 = (0);
while(true){
if((i__23457_23975 < count__23456_23974)){
var vec__23539_23976 = chunk__23455_23973.cljs$core$IIndexed$_nth$arity$2(null,i__23457_23975);
var idx_23977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23539_23976,(0),null);
var value_23978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23539_23976,(1),null);
var masked_value_23979 = (value_23978 | (new_bitmap[idx_23977]));
(new_bitmap[idx_23977] = masked_value_23979);


var G__23980 = seq__23453_23972;
var G__23981 = chunk__23455_23973;
var G__23982 = count__23456_23974;
var G__23983 = (i__23457_23975 + (1));
seq__23453_23972 = G__23980;
chunk__23455_23973 = G__23981;
count__23456_23974 = G__23982;
i__23457_23975 = G__23983;
continue;
} else {
var temp__5735__auto___23984__$1 = cljs.core.seq(seq__23453_23972);
if(temp__5735__auto___23984__$1){
var seq__23453_23985__$1 = temp__5735__auto___23984__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23453_23985__$1)){
var c__4550__auto___23986 = cljs.core.chunk_first(seq__23453_23985__$1);
var G__23987 = cljs.core.chunk_rest(seq__23453_23985__$1);
var G__23988 = c__4550__auto___23986;
var G__23989 = cljs.core.count(c__4550__auto___23986);
var G__23990 = (0);
seq__23453_23972 = G__23987;
chunk__23455_23973 = G__23988;
count__23456_23974 = G__23989;
i__23457_23975 = G__23990;
continue;
} else {
var vec__23542_23991 = cljs.core.first(seq__23453_23985__$1);
var idx_23992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542_23991,(0),null);
var value_23993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542_23991,(1),null);
var masked_value_23994 = (value_23993 | (new_bitmap[idx_23992]));
(new_bitmap[idx_23992] = masked_value_23994);


var G__23995 = cljs.core.next(seq__23453_23985__$1);
var G__23996 = null;
var G__23997 = (0);
var G__23998 = (0);
seq__23453_23972 = G__23995;
chunk__23455_23973 = G__23996;
count__23456_23974 = G__23997;
i__23457_23975 = G__23998;
continue;
}
} else {
}
}
break;
}

var G__23999 = cljs.core.next(seq__23452_23963__$1);
var G__24000 = null;
var G__24001 = (0);
var G__24002 = (0);
seq__23452_23923 = G__23999;
chunk__23459_23924 = G__24000;
count__23460_23925 = G__24001;
i__23461_23926 = G__24002;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
});

loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq23444){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23444));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__23549(s__23550){
return (new cljs.core.LazySeq(null,(function (){
var s__23550__$1 = s__23550;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23550__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var chunk = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__23550__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__23549_$_iter__23551(s__23552){
return (new cljs.core.LazySeq(null,((function (s__23550__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23552__$1 = s__23552;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23552__$1);
if(temp__5735__auto____$1){
var s__23552__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23552__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23552__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23554 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23553 = (0);
while(true){
if((i__23553 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23553);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__23554,idx);

var G__24006 = (i__23553 + (1));
i__23553 = G__24006;
continue;
} else {
var G__24008 = (i__23553 + (1));
i__23553 = G__24008;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23554),loom$alg_generic$bm_get_indicies_$_iter__23549_$_iter__23551(cljs.core.chunk_rest(s__23552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23554),null);
}
} else {
var offset = cljs.core.first(s__23552__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__23549_$_iter__23551(cljs.core.rest(s__23552__$2)));
} else {
var G__24011 = cljs.core.rest(s__23552__$2);
s__23552__$1 = G__24011;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23550__$1,chunk,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23550__$1,chunk,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__23549(cljs.core.rest(s__23550__$1)));
} else {
var G__24012 = cljs.core.rest(s__23550__$1);
s__23550__$1 = G__24012;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bitmap)));
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.alg_generic.Ancestry = (function (node__GT_idx,idx__GT_node,bitmaps,__meta,__extmap,__hash){
this.node__GT_idx = node__GT_idx;
this.idx__GT_node = idx__GT_node;
this.bitmaps = bitmaps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k23556,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__23563 = k23556;
var G__23563__$1 = (((G__23563 instanceof cljs.core.Keyword))?G__23563.fqn:null);
switch (G__23563__$1) {
case "node->idx":
return self__.node__GT_idx;

break;
case "idx->node":
return self__.idx__GT_node;

break;
case "bitmaps":
return self__.bitmaps;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23556,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__23564){
var vec__23567 = p__23564;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23567,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23567,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23555){
var self__ = this;
var G__23555__$1 = this;
return (new cljs.core.RecordIter((0),G__23555__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__23573 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__23573(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23557,other23558){
var self__ = this;
var this23557__$1 = this;
return (((!((other23558 == null)))) && ((this23557__$1.constructor === other23558.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23557__$1.node__GT_idx,other23558.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23557__$1.idx__GT_node,other23558.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23557__$1.bitmaps,other23558.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23557__$1.__extmap,other23558.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__23555){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__23579 = cljs.core.keyword_identical_QMARK_;
var expr__23580 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__23582 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__23583 = expr__23580;
return (pred__23579.cljs$core$IFn$_invoke$arity$2 ? pred__23579.cljs$core$IFn$_invoke$arity$2(G__23582,G__23583) : pred__23579.call(null,G__23582,G__23583));
})())){
return (new loom.alg_generic.Ancestry(G__23555,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23584 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__23585 = expr__23580;
return (pred__23579.cljs$core$IFn$_invoke$arity$2 ? pred__23579.cljs$core$IFn$_invoke$arity$2(G__23584,G__23585) : pred__23579.call(null,G__23584,G__23585));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__23555,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23586 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__23587 = expr__23580;
return (pred__23579.cljs$core$IFn$_invoke$arity$2 ? pred__23579.cljs$core$IFn$_invoke$arity$2(G__23586,G__23587) : pred__23579.call(null,G__23586,G__23587));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__23555,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__23555),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__23555){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__23555,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.alg-generic/Ancestry",null,(1),null));
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.alg-generic/Ancestry");
});

/**
 * Positional factory function for loom.alg-generic/Ancestry.
 */
loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

/**
 * Factory function for loom.alg-generic/Ancestry, taking a map of keywords to field values.
 */
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__23562){
var extmap__4424__auto__ = (function (){var G__23590 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23562,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__23562)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23590);
} else {
return G__23590;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__23562),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__23562),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__23562),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24038 = arguments.length;
var i__4731__auto___24039 = (0);
while(true){
if((i__4731__auto___24039 < len__4730__auto___24038)){
args__4736__auto__.push((arguments[i__4731__auto___24039]));

var G__24041 = (i__4731__auto___24039 + (1));
i__4731__auto___24039 = G__24041;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_(ancestry,node)){
return ancestry;
} else {
var map__23597 = ancestry;
var map__23597__$1 = (((((!((map__23597 == null))))?(((((map__23597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23597):map__23597);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count(node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx__GT_node,nid,node);
var pidxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_(pidxs))?loom.alg_generic.bm_new():cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.bm_or,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry(node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
});

loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq23594){
var G__23595 = cljs.core.first(seq23594);
var seq23594__$1 = cljs.core.next(seq23594);
var G__23596 = cljs.core.first(seq23594__$1);
var seq23594__$2 = cljs.core.next(seq23594__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23595,G__23596,seq23594__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__23602 = ancestry;
var map__23602__$1 = (((((!((map__23602 == null))))?(((((map__23602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23602):map__23602);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23602__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23602__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(childer) : node__GT_idx.call(null,childer));
var pidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(parenter) : node__GT_idx.call(null,parenter));
return cljs.core.boolean$((cljs.core.truth_((function (){var and__4120__auto__ = cidx;
if(cljs.core.truth_(and__4120__auto__)){
return pidx;
} else {
return and__4120__auto__;
}
})())?loom.alg_generic.bm_get(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__23604 = ancestry;
var map__23604__$1 = (((((!((map__23604 == null))))?(((((map__23604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23604):map__23604);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(child) : node__GT_idx.call(null,child));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(idx__GT_node,loom.alg_generic.bm_get_indicies(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=loom.alg_generic.js.map
