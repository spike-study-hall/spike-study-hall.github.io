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
return (function (p1__23420_SHARP_){
var G__23421 = preds;
var G__23422 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__23420_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__23421,G__23422) : loom.alg_generic.paths.call(null,G__23421,G__23422));
});})(this_node))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_node){
return (function (p1__23419_SHARP_){
return cljs.core.not_any_QMARK_(((function (this_node){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__23419_SHARP_], null));
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23423_SHARP_){
var G__23425 = cljs.core.peek(p1__23423_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__23425) : preds.call(null,G__23425));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__23426){
var vec__23427 = p__23426;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23427,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23427,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__23430 = p;
var G__23431 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__23430,G__23431) : span.call(null,G__23430,G__23431));
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
var len__4730__auto___24004 = arguments.length;
var i__4731__auto___24005 = (0);
while(true){
if((i__4731__auto___24005 < len__4730__auto___24004)){
args__4736__auto__.push((arguments[i__4731__auto___24005]));

var G__24006 = (i__4731__auto___24005 + (1));
i__4731__auto___24005 = G__24006;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23440){
var map__23441 = p__23440;
var map__23441__$1 = (((((!((map__23441 == null))))?(((((map__23441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23441):map__23441);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23441__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__23441,map__23441__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5735__auto__,map__23441,map__23441__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5735__auto__,map__23441,map__23441__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__23441,map__23441__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq23435){
var G__23436 = cljs.core.first(seq23435);
var seq23435__$1 = cljs.core.next(seq23435);
var G__23437 = cljs.core.first(seq23435__$1);
var seq23435__$2 = cljs.core.next(seq23435__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23436,G__23437,seq23435__$2);
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
var len__4730__auto___24018 = arguments.length;
var i__4731__auto___24020 = (0);
while(true){
if((i__4731__auto___24020 < len__4730__auto___24018)){
args__4736__auto__.push((arguments[i__4731__auto___24020]));

var G__24021 = (i__4731__auto___24020 + (1));
i__4731__auto___24020 = G__24021;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23456){
var map__23457 = p__23456;
var map__23457__$1 = (((((!((map__23457 == null))))?(((((map__23457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23457):map__23457);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23457__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__23457,map__23457__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5733__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5733__auto__)){
var nbr = temp__5733__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__23457,map__23457__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__23457,map__23457__$1,seen))
,null,null)));
} else {
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__24026 = successors__$1;
var G__24027 = parent;
var G__24028 = cljs.core.peek(nbrstack);
var G__24029 = cljs.core.pop(stack);
var G__24030 = cljs.core.pop(nbrstack);
var G__24031 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__24026;
start__$1 = G__24027;
nbrs = G__24028;
stack = G__24029;
nbrstack = G__24030;
seen__$1 = G__24031;
continue;
} else {
return null;
}
}
break;
}
});})(map__23457,map__23457__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq23450){
var G__23451 = cljs.core.first(seq23450);
var seq23450__$1 = cljs.core.next(seq23450);
var G__23452 = cljs.core.first(seq23450__$1);
var seq23450__$2 = cljs.core.next(seq23450__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23451,G__23452,seq23450__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24032 = arguments.length;
var i__4731__auto___24033 = (0);
while(true){
if((i__4731__auto___24033 < len__4730__auto___24032)){
args__4736__auto__.push((arguments[i__4731__auto___24033]));

var G__24034 = (i__4731__auto___24033 + (1));
i__4731__auto___24033 = G__24034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23469){
var map__23470 = p__23469;
var map__23470__$1 = (((((!((map__23470 == null))))?(((((map__23470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23470):map__23470);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23470__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23470__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__24035 = seen__$2;
var G__24036 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__24037 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__24035;
preds = G__24036;
stack = G__24037;
continue;
} else {
var G__24038 = seen__$2;
var G__24039 = preds;
var G__24040 = cljs.core.pop(stack);
seen__$1 = G__24038;
preds = G__24039;
stack = G__24040;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq23466){
var G__23467 = cljs.core.first(seq23466);
var seq23466__$1 = cljs.core.next(seq23466);
var G__23468 = cljs.core.first(seq23466__$1);
var seq23466__$2 = cljs.core.next(seq23466__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23467,G__23468,seq23466__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24041 = arguments.length;
var i__4731__auto___24042 = (0);
while(true){
if((i__4731__auto___24042 < len__4730__auto___24041)){
args__4736__auto__.push((arguments[i__4731__auto___24042]));

var G__24043 = (i__4731__auto___24042 + (1));
i__4731__auto___24042 = G__24043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23482){
var map__23483 = p__23482;
var map__23483__$1 = (((((!((map__23483 == null))))?(((((map__23483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23483):map__23483);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23483__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23483__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__24044 = seen__$2;
var G__24045 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__24046 = cljs.core.pop(stack);
seen__$1 = G__24044;
result = G__24045;
stack = G__24046;
continue;
} else {
var G__24047 = seen__$2;
var G__24048 = result;
var G__24049 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__24047;
result = G__24048;
stack = G__24049;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq23479){
var G__23480 = cljs.core.first(seq23479);
var seq23479__$1 = cljs.core.next(seq23479);
var G__23481 = cljs.core.first(seq23479__$1);
var seq23479__$2 = cljs.core.next(seq23479__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23480,G__23481,seq23479__$2);
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
var len__4730__auto___24051 = arguments.length;
var i__4731__auto___24052 = (0);
while(true){
if((i__4731__auto___24052 < len__4730__auto___24051)){
args__4736__auto__.push((arguments[i__4731__auto___24052]));

var G__24053 = (i__4731__auto___24052 + (1));
i__4731__auto___24052 = G__24053;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23492){
var map__23494 = p__23492;
var map__23494__$1 = (((((!((map__23494 == null))))?(((((map__23494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23494):map__23494);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23494__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23494__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__24054 = start__$1;
var G__24055 = cljs.core.next(nbrs);
var G__24056 = stack;
var G__24057 = nbrstack;
var G__24058 = seen__$2;
var G__24059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__24054;
nbrs = G__24055;
stack = G__24056;
nbrstack = G__24057;
seen__$1 = G__24058;
edges = G__24059;
continue;
} else {
var G__24060 = nbr;
var G__24061 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__24062 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__24063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__24064 = seen__$2;
var G__24065 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__24060;
nbrs = G__24061;
stack = G__24062;
nbrstack = G__24063;
seen__$1 = G__24064;
edges = G__24065;
continue;
}
} else {
var temp__5733__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5733__auto____$1)){
var parent = temp__5733__auto____$1;
var G__24066 = parent;
var G__24067 = cljs.core.peek(nbrstack);
var G__24068 = cljs.core.pop(stack);
var G__24069 = cljs.core.pop(nbrstack);
var G__24070 = seen__$2;
var G__24071 = edges;
start__$1 = G__24066;
nbrs = G__24067;
stack = G__24068;
nbrstack = G__24069;
seen__$1 = G__24070;
edges = G__24071;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq23489){
var G__23490 = cljs.core.first(seq23489);
var seq23489__$1 = cljs.core.next(seq23489);
var G__23491 = cljs.core.first(seq23489__$1);
var seq23489__$2 = cljs.core.next(seq23489__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23490,G__23491,seq23489__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__23500 = arguments.length;
switch (G__23500) {
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
var G__24073 = seen__$2;
var G__24074 = explored__$1;
var G__24075 = result;
var G__24076 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__24073;
explored__$1 = G__24074;
result = G__24075;
stack = G__24076;
continue;
}
} else {
var G__24077 = seen__$2;
var G__24078 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__24079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__24080 = cljs.core.pop(stack);
seen__$1 = G__24077;
explored__$1 = G__24078;
result = G__24079;
stack = G__24080;
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
var len__4730__auto___24081 = arguments.length;
var i__4731__auto___24082 = (0);
while(true){
if((i__4731__auto___24082 < len__4730__auto___24081)){
args__4736__auto__.push((arguments[i__4731__auto___24082]));

var G__24083 = (i__4731__auto___24082 + (1));
i__4731__auto___24082 = G__24083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23518){
var map__23519 = p__23518;
var map__23519__$1 = (((((!((map__23519 == null))))?(((((map__23519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23519):map__23519);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23519__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23519__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23519__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__23519,map__23519__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__23519,map__23519__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5735__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__23532 = temp__5735__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23532,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23532,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function (p1__23510_SHARP_){
var G__23535 = p1__23510_SHARP_;
var G__23536 = node;
var G__23537 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__23535,G__23536,G__23537) : nbr_pred.call(null,G__23535,G__23536,G__23537));
});})(vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function (p1__23509_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__23509_SHARP_);
});})(vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__23538(s__23539){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function (){
var s__23539__$1 = s__23539;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23539__$1);
if(temp__5735__auto____$1){
var s__23539__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23539__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23539__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23541 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23540 = (0);
while(true){
if((i__23540 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23540);
cljs.core.chunk_append(b__23541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__24103 = (i__23540 + (1));
i__23540 = G__24103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23541),loom$alg_generic$step_$_iter__23538(cljs.core.chunk_rest(s__23539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23541),null);
}
} else {
var nbr = cljs.core.first(s__23539__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__23538(cljs.core.rest(s__23539__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
,null,null));
});})(nbrs,vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function (p1__23511_SHARP_,p2__23512_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23511_SHARP_,p2__23512_SHARP_,node);
});})(nbrs,vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
,preds,nbrs));
});})(vec__23532,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function loom$alg_generic$iter__23542(s__23543){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen){
return (function (){
var s__23543__$1 = s__23543;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23543__$1);
if(temp__5735__auto__){
var s__23543__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23543__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23543__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23545 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23544 = (0);
while(true){
if((i__23544 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23544);
cljs.core.chunk_append(b__23545,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__24104 = (i__23544 + (1));
i__23544 = G__24104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23545),loom$alg_generic$iter__23542(cljs.core.chunk_rest(s__23543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23545),null);
}
} else {
var s = cljs.core.first(s__23543__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__23542(cljs.core.rest(s__23543__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__23519,map__23519__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq23513){
var G__23514 = cljs.core.first(seq23513);
var seq23513__$1 = cljs.core.next(seq23513);
var G__23515 = cljs.core.first(seq23513__$1);
var seq23513__$2 = cljs.core.next(seq23513__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23514,G__23515,seq23513__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24105 = arguments.length;
var i__4731__auto___24106 = (0);
while(true){
if((i__4731__auto___24106 < len__4730__auto___24105)){
args__4736__auto__.push((arguments[i__4731__auto___24106]));

var G__24107 = (i__4731__auto___24106 + (1));
i__4731__auto___24106 = G__24107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__23549){
var map__23550 = p__23549;
var map__23550__$1 = (((((!((map__23550 == null))))?(((((map__23550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23550):map__23550);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__23550,map__23550__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__23550,map__23550__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq23546){
var G__23547 = cljs.core.first(seq23546);
var seq23546__$1 = cljs.core.next(seq23546);
var G__23548 = cljs.core.first(seq23546__$1);
var seq23546__$2 = cljs.core.next(seq23546__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23547,G__23548,seq23546__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24108 = arguments.length;
var i__4731__auto___24111 = (0);
while(true){
if((i__4731__auto___24111 < len__4730__auto___24108)){
args__4736__auto__.push((arguments[i__4731__auto___24111]));

var G__24112 = (i__4731__auto___24111 + (1));
i__4731__auto___24111 = G__24112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__23556){
var map__23557 = p__23556;
var map__23557__$1 = (((((!((map__23557 == null))))?(((((map__23557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23557):map__23557);
var opts = map__23557__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5735__auto__ = cljs.core.some(((function (opts__$1,map__23557,map__23557__$1,opts){
return (function (p__23559){
var vec__23560 = p__23559;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__23557,map__23557__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq23552){
var G__23553 = cljs.core.first(seq23552);
var seq23552__$1 = cljs.core.next(seq23552);
var G__23554 = cljs.core.first(seq23552__$1);
var seq23552__$2 = cljs.core.next(seq23552__$1);
var G__23555 = cljs.core.first(seq23552__$2);
var seq23552__$3 = cljs.core.next(seq23552__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23553,G__23554,G__23555,seq23552__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__24128 = m2;
var G__24129 = m1;
m1 = G__24128;
m2 = G__24129;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__23573(s__23574){
return (new cljs.core.LazySeq(null,(function (){
var s__23574__$1 = s__23574;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23574__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var node = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__23574__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__23573_$_iter__23575(s__23576){
return (new cljs.core.LazySeq(null,((function (s__23574__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23576__$1 = s__23576;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23576__$1);
if(temp__5735__auto____$1){
var s__23576__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23576__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23576__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23578 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23577 = (0);
while(true){
if((i__23577 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23577);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__23578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__24133 = (i__23577 + (1));
i__23577 = G__24133;
continue;
} else {
var G__24134 = (i__23577 + (1));
i__23577 = G__24134;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23578),loom$alg_generic$reverse_edges_$_iter__23573_$_iter__23575(cljs.core.chunk_rest(s__23576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23578),null);
}
} else {
var nbr = cljs.core.first(s__23576__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__23573_$_iter__23575(cljs.core.rest(s__23576__$2)));
} else {
var G__24146 = cljs.core.rest(s__23576__$2);
s__23576__$1 = G__24146;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23574__$1,node,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23574__$1,node,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__23573(cljs.core.rest(s__23574__$1)));
} else {
var G__24152 = cljs.core.rest(s__23574__$1);
s__23574__$1 = G__24152;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__23581(s__23582){
return (new cljs.core.LazySeq(null,(function (){
var s__23582__$1 = s__23582;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23582__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__23582__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__23581_$_iter__23583(s__23584){
return (new cljs.core.LazySeq(null,((function (s__23582__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23584__$1 = s__23584;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23584__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var from = cljs.core.first(xs__6292__auto____$1);
var iterys__4519__auto__ = ((function (s__23584__$1,s__23582__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__23581_$_iter__23583_$_iter__23585(s__23586){
return (new cljs.core.LazySeq(null,((function (s__23584__$1,s__23582__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23586__$1 = s__23586;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__23586__$1);
if(temp__5735__auto____$2){
var s__23586__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__23586__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23586__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23588 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23587 = (0);
while(true){
if((i__23587 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23587);
cljs.core.chunk_append(b__23588,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__24156 = (i__23587 + (1));
i__23587 = G__24156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23588),loom$alg_generic$conj_paths_$_iter__23581_$_iter__23583_$_iter__23585(cljs.core.chunk_rest(s__23586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23588),null);
}
} else {
var to = cljs.core.first(s__23586__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__23581_$_iter__23583_$_iter__23585(cljs.core.rest(s__23586__$2)));
}
} else {
return null;
}
break;
}
});})(s__23584__$1,s__23582__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23584__$1,s__23582__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__23581_$_iter__23583(cljs.core.rest(s__23584__$1)));
} else {
var G__24158 = cljs.core.rest(s__23584__$1);
s__23584__$1 = G__24158;
continue;
}
} else {
return null;
}
break;
}
});})(s__23582__$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23582__$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__23581(cljs.core.rest(s__23582__$1)));
} else {
var G__24161 = cljs.core.rest(s__23582__$1);
s__23582__$1 = G__24161;
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
return (function (p1__23600_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__23600_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__23618){
var vec__23619 = p__23618;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(1),null);
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
var G__24162 = outgoing__$1;
var G__24163 = incoming;
var G__24164 = q1__$1;
var G__24165 = q2;
outgoing = G__24162;
incoming = G__24163;
q1 = G__24164;
q2 = G__24165;
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
var G__24168 = outgoing;
var G__24169 = incoming__$1;
var G__24170 = q1;
var G__24171 = q2__$1;
outgoing = G__24168;
incoming = G__24169;
q1 = G__24170;
q2 = G__24171;
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
var G__23648 = arguments.length;
switch (G__23648) {
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
var step = (function loom$alg_generic$step(p__23666){
var vec__23667 = p__23666;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23667,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23667,(1),null);
var temp__5735__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__23672 = temp__5735__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23672,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23672,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23672,(2),null);
var fpq = vec__23672;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__23672,dist_su,_,u,fpq,temp__5735__auto__,vec__23667,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__23672,dist_su,_,u,fpq,temp__5735__auto__,vec__23667,state,pq){
return (function (p__23675,v){
var vec__23676 = p__23675;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23676,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23676,(1),null);
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
});})(vec__23672,dist_su,_,u,fpq,temp__5735__auto__,vec__23667,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__23672,dist_su,_,u,fpq,temp__5735__auto__,vec__23667,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__23679){
var vec__23681 = p__23679;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(0),null);
var vec__23684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23684,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23684,(1),null);
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
var temp__5733__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23693){
var vec__23694 = p__23693;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23694,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23694,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__23698 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23698,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23698,(1),null);
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
return cljs.core.long$((function (){var G__23708 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__23708);
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
var len__4730__auto___24208 = arguments.length;
var i__4731__auto___24209 = (0);
while(true){
if((i__4731__auto___24209 < len__4730__auto___24208)){
args__4736__auto__.push((arguments[i__4731__auto___24209]));

var G__24210 = (i__4731__auto___24209 + (1));
i__4731__auto___24209 = G__24210;
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
var seq__23720_24213 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__23727_24214 = null;
var count__23728_24215 = (0);
var i__23729_24216 = (0);
while(true){
if((i__23729_24216 < count__23728_24215)){
var bitmap_24217 = chunk__23727_24214.cljs$core$IIndexed$_nth$arity$2(null,i__23729_24216);
var seq__23730_24218 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_24217));
var chunk__23732_24219 = null;
var count__23733_24220 = (0);
var i__23734_24221 = (0);
while(true){
if((i__23734_24221 < count__23733_24220)){
var vec__23789_24222 = chunk__23732_24219.cljs$core$IIndexed$_nth$arity$2(null,i__23734_24221);
var idx_24223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23789_24222,(0),null);
var value_24224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23789_24222,(1),null);
var masked_value_24226 = (value_24224 | (new_bitmap[idx_24223]));
(new_bitmap[idx_24223] = masked_value_24226);


var G__24227 = seq__23730_24218;
var G__24228 = chunk__23732_24219;
var G__24229 = count__23733_24220;
var G__24230 = (i__23734_24221 + (1));
seq__23730_24218 = G__24227;
chunk__23732_24219 = G__24228;
count__23733_24220 = G__24229;
i__23734_24221 = G__24230;
continue;
} else {
var temp__5735__auto___24231 = cljs.core.seq(seq__23730_24218);
if(temp__5735__auto___24231){
var seq__23730_24232__$1 = temp__5735__auto___24231;
if(cljs.core.chunked_seq_QMARK_(seq__23730_24232__$1)){
var c__4550__auto___24233 = cljs.core.chunk_first(seq__23730_24232__$1);
var G__24234 = cljs.core.chunk_rest(seq__23730_24232__$1);
var G__24235 = c__4550__auto___24233;
var G__24236 = cljs.core.count(c__4550__auto___24233);
var G__24237 = (0);
seq__23730_24218 = G__24234;
chunk__23732_24219 = G__24235;
count__23733_24220 = G__24236;
i__23734_24221 = G__24237;
continue;
} else {
var vec__23801_24238 = cljs.core.first(seq__23730_24232__$1);
var idx_24239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801_24238,(0),null);
var value_24240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801_24238,(1),null);
var masked_value_24241 = (value_24240 | (new_bitmap[idx_24239]));
(new_bitmap[idx_24239] = masked_value_24241);


var G__24242 = cljs.core.next(seq__23730_24232__$1);
var G__24243 = null;
var G__24244 = (0);
var G__24245 = (0);
seq__23730_24218 = G__24242;
chunk__23732_24219 = G__24243;
count__23733_24220 = G__24244;
i__23734_24221 = G__24245;
continue;
}
} else {
}
}
break;
}

var G__24246 = seq__23720_24213;
var G__24247 = chunk__23727_24214;
var G__24248 = count__23728_24215;
var G__24249 = (i__23729_24216 + (1));
seq__23720_24213 = G__24246;
chunk__23727_24214 = G__24247;
count__23728_24215 = G__24248;
i__23729_24216 = G__24249;
continue;
} else {
var temp__5735__auto___24250 = cljs.core.seq(seq__23720_24213);
if(temp__5735__auto___24250){
var seq__23720_24251__$1 = temp__5735__auto___24250;
if(cljs.core.chunked_seq_QMARK_(seq__23720_24251__$1)){
var c__4550__auto___24252 = cljs.core.chunk_first(seq__23720_24251__$1);
var G__24253 = cljs.core.chunk_rest(seq__23720_24251__$1);
var G__24254 = c__4550__auto___24252;
var G__24255 = cljs.core.count(c__4550__auto___24252);
var G__24256 = (0);
seq__23720_24213 = G__24253;
chunk__23727_24214 = G__24254;
count__23728_24215 = G__24255;
i__23729_24216 = G__24256;
continue;
} else {
var bitmap_24257 = cljs.core.first(seq__23720_24251__$1);
var seq__23721_24258 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_24257));
var chunk__23723_24259 = null;
var count__23724_24260 = (0);
var i__23725_24261 = (0);
while(true){
if((i__23725_24261 < count__23724_24260)){
var vec__23831_24262 = chunk__23723_24259.cljs$core$IIndexed$_nth$arity$2(null,i__23725_24261);
var idx_24263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23831_24262,(0),null);
var value_24264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23831_24262,(1),null);
var masked_value_24265 = (value_24264 | (new_bitmap[idx_24263]));
(new_bitmap[idx_24263] = masked_value_24265);


var G__24266 = seq__23721_24258;
var G__24267 = chunk__23723_24259;
var G__24268 = count__23724_24260;
var G__24269 = (i__23725_24261 + (1));
seq__23721_24258 = G__24266;
chunk__23723_24259 = G__24267;
count__23724_24260 = G__24268;
i__23725_24261 = G__24269;
continue;
} else {
var temp__5735__auto___24270__$1 = cljs.core.seq(seq__23721_24258);
if(temp__5735__auto___24270__$1){
var seq__23721_24272__$1 = temp__5735__auto___24270__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23721_24272__$1)){
var c__4550__auto___24291 = cljs.core.chunk_first(seq__23721_24272__$1);
var G__24312 = cljs.core.chunk_rest(seq__23721_24272__$1);
var G__24313 = c__4550__auto___24291;
var G__24314 = cljs.core.count(c__4550__auto___24291);
var G__24315 = (0);
seq__23721_24258 = G__24312;
chunk__23723_24259 = G__24313;
count__23724_24260 = G__24314;
i__23725_24261 = G__24315;
continue;
} else {
var vec__23840_24330 = cljs.core.first(seq__23721_24272__$1);
var idx_24331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23840_24330,(0),null);
var value_24332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23840_24330,(1),null);
var masked_value_24335 = (value_24332 | (new_bitmap[idx_24331]));
(new_bitmap[idx_24331] = masked_value_24335);


var G__24336 = cljs.core.next(seq__23721_24272__$1);
var G__24337 = null;
var G__24338 = (0);
var G__24339 = (0);
seq__23721_24258 = G__24336;
chunk__23723_24259 = G__24337;
count__23724_24260 = G__24338;
i__23725_24261 = G__24339;
continue;
}
} else {
}
}
break;
}

var G__24344 = cljs.core.next(seq__23720_24251__$1);
var G__24345 = null;
var G__24346 = (0);
var G__24347 = (0);
seq__23720_24213 = G__24344;
chunk__23727_24214 = G__24345;
count__23728_24215 = G__24346;
i__23729_24216 = G__24347;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq23714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23714));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__23852(s__23853){
return (new cljs.core.LazySeq(null,(function (){
var s__23853__$1 = s__23853;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23853__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var chunk = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__23853__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__23852_$_iter__23854(s__23855){
return (new cljs.core.LazySeq(null,((function (s__23853__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23855__$1 = s__23855;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23855__$1);
if(temp__5735__auto____$1){
var s__23855__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23855__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23855__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23857 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23856 = (0);
while(true){
if((i__23856 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23856);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__23857,idx);

var G__24349 = (i__23856 + (1));
i__23856 = G__24349;
continue;
} else {
var G__24350 = (i__23856 + (1));
i__23856 = G__24350;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23857),loom$alg_generic$bm_get_indicies_$_iter__23852_$_iter__23854(cljs.core.chunk_rest(s__23855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23857),null);
}
} else {
var offset = cljs.core.first(s__23855__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__23852_$_iter__23854(cljs.core.rest(s__23855__$2)));
} else {
var G__24351 = cljs.core.rest(s__23855__$2);
s__23855__$1 = G__24351;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23853__$1,chunk,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23853__$1,chunk,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__23852(cljs.core.rest(s__23853__$1)));
} else {
var G__24352 = cljs.core.rest(s__23853__$1);
s__23853__$1 = G__24352;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k23871,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__23888 = k23871;
var G__23888__$1 = (((G__23888 instanceof cljs.core.Keyword))?G__23888.fqn:null);
switch (G__23888__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23871,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__23893){
var vec__23894 = p__23893;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23894,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23894,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23870){
var self__ = this;
var G__23870__$1 = this;
return (new cljs.core.RecordIter((0),G__23870__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__23913 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__23913(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23872,other23873){
var self__ = this;
var this23872__$1 = this;
return (((!((other23873 == null)))) && ((this23872__$1.constructor === other23873.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23872__$1.node__GT_idx,other23873.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23872__$1.idx__GT_node,other23873.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23872__$1.bitmaps,other23873.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23872__$1.__extmap,other23873.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__23870){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__23920 = cljs.core.keyword_identical_QMARK_;
var expr__23921 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__23923 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__23924 = expr__23921;
return (pred__23920.cljs$core$IFn$_invoke$arity$2 ? pred__23920.cljs$core$IFn$_invoke$arity$2(G__23923,G__23924) : pred__23920.call(null,G__23923,G__23924));
})())){
return (new loom.alg_generic.Ancestry(G__23870,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23925 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__23926 = expr__23921;
return (pred__23920.cljs$core$IFn$_invoke$arity$2 ? pred__23920.cljs$core$IFn$_invoke$arity$2(G__23925,G__23926) : pred__23920.call(null,G__23925,G__23926));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__23870,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23927 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__23928 = expr__23921;
return (pred__23920.cljs$core$IFn$_invoke$arity$2 ? pred__23920.cljs$core$IFn$_invoke$arity$2(G__23927,G__23928) : pred__23920.call(null,G__23927,G__23928));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__23870,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__23870),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__23870){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__23870,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__23879){
var extmap__4424__auto__ = (function (){var G__23951 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23879,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__23879)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23951);
} else {
return G__23951;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__23879),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__23879),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__23879),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___24405 = arguments.length;
var i__4731__auto___24406 = (0);
while(true){
if((i__4731__auto___24406 < len__4730__auto___24405)){
args__4736__auto__.push((arguments[i__4731__auto___24406]));

var G__24410 = (i__4731__auto___24406 + (1));
i__4731__auto___24406 = G__24410;
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
var map__23975 = ancestry;
var map__23975__$1 = (((((!((map__23975 == null))))?(((((map__23975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23975):map__23975);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23975__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23975__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23975__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq23967){
var G__23968 = cljs.core.first(seq23967);
var seq23967__$1 = cljs.core.next(seq23967);
var G__23969 = cljs.core.first(seq23967__$1);
var seq23967__$2 = cljs.core.next(seq23967__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23968,G__23969,seq23967__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__23985 = ancestry;
var map__23985__$1 = (((((!((map__23985 == null))))?(((((map__23985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23985):map__23985);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23985__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23985__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__23993 = ancestry;
var map__23993__$1 = (((((!((map__23993 == null))))?(((((map__23993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23993):map__23993);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
