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
return (function (p1__42214_SHARP_){
var G__42216 = preds;
var G__42217 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__42214_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__42216,G__42217) : loom.alg_generic.paths.call(null,G__42216,G__42217));
});})(this_node))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_node){
return (function (p1__42213_SHARP_){
return cljs.core.not_any_QMARK_(((function (this_node){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__42213_SHARP_], null));
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42218_SHARP_){
var G__42219 = cljs.core.peek(p1__42218_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__42219) : preds.call(null,G__42219));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__42221){
var vec__42223 = p__42221;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42223,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42223,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__42226 = p;
var G__42227 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__42226,G__42227) : span.call(null,G__42226,G__42227));
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
var len__4730__auto___42738 = arguments.length;
var i__4731__auto___42746 = (0);
while(true){
if((i__4731__auto___42746 < len__4730__auto___42738)){
args__4736__auto__.push((arguments[i__4731__auto___42746]));

var G__42753 = (i__4731__auto___42746 + (1));
i__4731__auto___42746 = G__42753;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__42238){
var map__42239 = p__42238;
var map__42239__$1 = (((((!((map__42239 == null))))?(((((map__42239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42239):map__42239);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42239__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__42239,map__42239__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5735__auto__,map__42239,map__42239__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5735__auto__,map__42239,map__42239__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__42239,map__42239__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq42229){
var G__42232 = cljs.core.first(seq42229);
var seq42229__$1 = cljs.core.next(seq42229);
var G__42233 = cljs.core.first(seq42229__$1);
var seq42229__$2 = cljs.core.next(seq42229__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42232,G__42233,seq42229__$2);
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
var len__4730__auto___42760 = arguments.length;
var i__4731__auto___42761 = (0);
while(true){
if((i__4731__auto___42761 < len__4730__auto___42760)){
args__4736__auto__.push((arguments[i__4731__auto___42761]));

var G__42762 = (i__4731__auto___42761 + (1));
i__4731__auto___42761 = G__42762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__42248){
var map__42249 = p__42248;
var map__42249__$1 = (((((!((map__42249 == null))))?(((((map__42249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42249):map__42249);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42249__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__42249,map__42249__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5733__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5733__auto__)){
var nbr = temp__5733__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__42249,map__42249__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__42249,map__42249__$1,seen))
,null,null)));
} else {
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__42782 = successors__$1;
var G__42783 = parent;
var G__42784 = cljs.core.peek(nbrstack);
var G__42785 = cljs.core.pop(stack);
var G__42786 = cljs.core.pop(nbrstack);
var G__42787 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__42782;
start__$1 = G__42783;
nbrs = G__42784;
stack = G__42785;
nbrstack = G__42786;
seen__$1 = G__42787;
continue;
} else {
return null;
}
}
break;
}
});})(map__42249,map__42249__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq42243){
var G__42244 = cljs.core.first(seq42243);
var seq42243__$1 = cljs.core.next(seq42243);
var G__42245 = cljs.core.first(seq42243__$1);
var seq42243__$2 = cljs.core.next(seq42243__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42244,G__42245,seq42243__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42794 = arguments.length;
var i__4731__auto___42795 = (0);
while(true){
if((i__4731__auto___42795 < len__4730__auto___42794)){
args__4736__auto__.push((arguments[i__4731__auto___42795]));

var G__42796 = (i__4731__auto___42795 + (1));
i__4731__auto___42795 = G__42796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__42260){
var map__42261 = p__42260;
var map__42261__$1 = (((((!((map__42261 == null))))?(((((map__42261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42261):map__42261);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42261__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42261__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__42802 = seen__$2;
var G__42803 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__42804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__42802;
preds = G__42803;
stack = G__42804;
continue;
} else {
var G__42805 = seen__$2;
var G__42806 = preds;
var G__42807 = cljs.core.pop(stack);
seen__$1 = G__42805;
preds = G__42806;
stack = G__42807;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq42257){
var G__42258 = cljs.core.first(seq42257);
var seq42257__$1 = cljs.core.next(seq42257);
var G__42259 = cljs.core.first(seq42257__$1);
var seq42257__$2 = cljs.core.next(seq42257__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42258,G__42259,seq42257__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42808 = arguments.length;
var i__4731__auto___42809 = (0);
while(true){
if((i__4731__auto___42809 < len__4730__auto___42808)){
args__4736__auto__.push((arguments[i__4731__auto___42809]));

var G__42810 = (i__4731__auto___42809 + (1));
i__4731__auto___42809 = G__42810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__42276){
var map__42277 = p__42276;
var map__42277__$1 = (((((!((map__42277 == null))))?(((((map__42277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42277):map__42277);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42277__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42277__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__42814 = seen__$2;
var G__42815 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__42816 = cljs.core.pop(stack);
seen__$1 = G__42814;
result = G__42815;
stack = G__42816;
continue;
} else {
var G__42818 = seen__$2;
var G__42819 = result;
var G__42820 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__42818;
result = G__42819;
stack = G__42820;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq42271){
var G__42272 = cljs.core.first(seq42271);
var seq42271__$1 = cljs.core.next(seq42271);
var G__42273 = cljs.core.first(seq42271__$1);
var seq42271__$2 = cljs.core.next(seq42271__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42272,G__42273,seq42271__$2);
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
var len__4730__auto___42825 = arguments.length;
var i__4731__auto___42826 = (0);
while(true){
if((i__4731__auto___42826 < len__4730__auto___42825)){
args__4736__auto__.push((arguments[i__4731__auto___42826]));

var G__42827 = (i__4731__auto___42826 + (1));
i__4731__auto___42826 = G__42827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__42292){
var map__42293 = p__42292;
var map__42293__$1 = (((((!((map__42293 == null))))?(((((map__42293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42293):map__42293);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42293__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42293__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__42830 = start__$1;
var G__42831 = cljs.core.next(nbrs);
var G__42832 = stack;
var G__42833 = nbrstack;
var G__42834 = seen__$2;
var G__42835 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__42830;
nbrs = G__42831;
stack = G__42832;
nbrstack = G__42833;
seen__$1 = G__42834;
edges = G__42835;
continue;
} else {
var G__42836 = nbr;
var G__42837 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__42838 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__42839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__42840 = seen__$2;
var G__42841 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__42836;
nbrs = G__42837;
stack = G__42838;
nbrstack = G__42839;
seen__$1 = G__42840;
edges = G__42841;
continue;
}
} else {
var temp__5733__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5733__auto____$1)){
var parent = temp__5733__auto____$1;
var G__42842 = parent;
var G__42843 = cljs.core.peek(nbrstack);
var G__42844 = cljs.core.pop(stack);
var G__42845 = cljs.core.pop(nbrstack);
var G__42846 = seen__$2;
var G__42847 = edges;
start__$1 = G__42842;
nbrs = G__42843;
stack = G__42844;
nbrstack = G__42845;
seen__$1 = G__42846;
edges = G__42847;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq42286){
var G__42287 = cljs.core.first(seq42286);
var seq42286__$1 = cljs.core.next(seq42286);
var G__42288 = cljs.core.first(seq42286__$1);
var seq42286__$2 = cljs.core.next(seq42286__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42287,G__42288,seq42286__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__42304 = arguments.length;
switch (G__42304) {
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
var G__42852 = seen__$2;
var G__42853 = explored__$1;
var G__42854 = result;
var G__42855 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__42852;
explored__$1 = G__42853;
result = G__42854;
stack = G__42855;
continue;
}
} else {
var G__42856 = seen__$2;
var G__42857 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__42858 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__42859 = cljs.core.pop(stack);
seen__$1 = G__42856;
explored__$1 = G__42857;
result = G__42858;
stack = G__42859;
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
var len__4730__auto___42860 = arguments.length;
var i__4731__auto___42861 = (0);
while(true){
if((i__4731__auto___42861 < len__4730__auto___42860)){
args__4736__auto__.push((arguments[i__4731__auto___42861]));

var G__42862 = (i__4731__auto___42861 + (1));
i__4731__auto___42861 = G__42862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__42318){
var map__42319 = p__42318;
var map__42319__$1 = (((((!((map__42319 == null))))?(((((map__42319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42319):map__42319);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__42319,map__42319__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__42319,map__42319__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5735__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__42341 = temp__5735__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42341,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42341,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function (p1__42309_SHARP_){
var G__42347 = p1__42309_SHARP_;
var G__42348 = node;
var G__42349 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__42347,G__42348,G__42349) : nbr_pred.call(null,G__42347,G__42348,G__42349));
});})(vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function (p1__42308_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__42308_SHARP_);
});})(vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__42353(s__42354){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function (){
var s__42354__$1 = s__42354;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42354__$1);
if(temp__5735__auto____$1){
var s__42354__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42354__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42354__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42356 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42355 = (0);
while(true){
if((i__42355 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42355);
cljs.core.chunk_append(b__42356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__42868 = (i__42355 + (1));
i__42355 = G__42868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42356),loom$alg_generic$step_$_iter__42353(cljs.core.chunk_rest(s__42354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42356),null);
}
} else {
var nbr = cljs.core.first(s__42354__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__42353(cljs.core.rest(s__42354__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
,null,null));
});})(nbrs,vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function (p1__42310_SHARP_,p2__42311_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42310_SHARP_,p2__42311_SHARP_,node);
});})(nbrs,vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
,preds,nbrs));
});})(vec__42341,node,depth,temp__5735__auto__,f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function loom$alg_generic$iter__42361(s__42362){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen){
return (function (){
var s__42362__$1 = s__42362;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42362__$1);
if(temp__5735__auto__){
var s__42362__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42362__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42362__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42364 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42363 = (0);
while(true){
if((i__42363 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42363);
cljs.core.chunk_append(b__42364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__42872 = (i__42363 + (1));
i__42363 = G__42872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42364),loom$alg_generic$iter__42361(cljs.core.chunk_rest(s__42362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42364),null);
}
} else {
var s = cljs.core.first(s__42362__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__42361(cljs.core.rest(s__42362__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__42319,map__42319__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq42312){
var G__42313 = cljs.core.first(seq42312);
var seq42312__$1 = cljs.core.next(seq42312);
var G__42314 = cljs.core.first(seq42312__$1);
var seq42312__$2 = cljs.core.next(seq42312__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42313,G__42314,seq42312__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42877 = arguments.length;
var i__4731__auto___42878 = (0);
while(true){
if((i__4731__auto___42878 < len__4730__auto___42877)){
args__4736__auto__.push((arguments[i__4731__auto___42878]));

var G__42879 = (i__4731__auto___42878 + (1));
i__4731__auto___42878 = G__42879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__42382){
var map__42383 = p__42382;
var map__42383__$1 = (((((!((map__42383 == null))))?(((((map__42383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42383):map__42383);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42383__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__42383,map__42383__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__42383,map__42383__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq42376){
var G__42377 = cljs.core.first(seq42376);
var seq42376__$1 = cljs.core.next(seq42376);
var G__42378 = cljs.core.first(seq42376__$1);
var seq42376__$2 = cljs.core.next(seq42376__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42377,G__42378,seq42376__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42880 = arguments.length;
var i__4731__auto___42881 = (0);
while(true){
if((i__4731__auto___42881 < len__4730__auto___42880)){
args__4736__auto__.push((arguments[i__4731__auto___42881]));

var G__42882 = (i__4731__auto___42881 + (1));
i__4731__auto___42881 = G__42882;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__42393){
var map__42401 = p__42393;
var map__42401__$1 = (((((!((map__42401 == null))))?(((((map__42401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42401):map__42401);
var opts = map__42401__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5735__auto__ = cljs.core.some(((function (opts__$1,map__42401,map__42401__$1,opts){
return (function (p__42403){
var vec__42404 = p__42403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42404,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42404,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42404,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__42401,map__42401__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq42385){
var G__42386 = cljs.core.first(seq42385);
var seq42385__$1 = cljs.core.next(seq42385);
var G__42387 = cljs.core.first(seq42385__$1);
var seq42385__$2 = cljs.core.next(seq42385__$1);
var G__42388 = cljs.core.first(seq42385__$2);
var seq42385__$3 = cljs.core.next(seq42385__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42386,G__42387,G__42388,seq42385__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__42890 = m2;
var G__42891 = m1;
m1 = G__42890;
m2 = G__42891;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__42418(s__42419){
return (new cljs.core.LazySeq(null,(function (){
var s__42419__$1 = s__42419;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42419__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var node = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__42419__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__42418_$_iter__42420(s__42421){
return (new cljs.core.LazySeq(null,((function (s__42419__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__42421__$1 = s__42421;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42421__$1);
if(temp__5735__auto____$1){
var s__42421__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42421__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42421__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42423 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42422 = (0);
while(true){
if((i__42422 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42422);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__42423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__42899 = (i__42422 + (1));
i__42422 = G__42899;
continue;
} else {
var G__42900 = (i__42422 + (1));
i__42422 = G__42900;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42423),loom$alg_generic$reverse_edges_$_iter__42418_$_iter__42420(cljs.core.chunk_rest(s__42421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42423),null);
}
} else {
var nbr = cljs.core.first(s__42421__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__42418_$_iter__42420(cljs.core.rest(s__42421__$2)));
} else {
var G__42901 = cljs.core.rest(s__42421__$2);
s__42421__$1 = G__42901;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__42419__$1,node,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__42419__$1,node,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__42418(cljs.core.rest(s__42419__$1)));
} else {
var G__42905 = cljs.core.rest(s__42419__$1);
s__42419__$1 = G__42905;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__42427(s__42428){
return (new cljs.core.LazySeq(null,(function (){
var s__42428__$1 = s__42428;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42428__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__42428__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__42427_$_iter__42429(s__42430){
return (new cljs.core.LazySeq(null,((function (s__42428__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__42430__$1 = s__42430;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42430__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var from = cljs.core.first(xs__6292__auto____$1);
var iterys__4519__auto__ = ((function (s__42430__$1,s__42428__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__42427_$_iter__42429_$_iter__42431(s__42432){
return (new cljs.core.LazySeq(null,((function (s__42430__$1,s__42428__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__42432__$1 = s__42432;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__42432__$1);
if(temp__5735__auto____$2){
var s__42432__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__42432__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42432__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42434 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42433 = (0);
while(true){
if((i__42433 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42433);
cljs.core.chunk_append(b__42434,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__42908 = (i__42433 + (1));
i__42433 = G__42908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42434),loom$alg_generic$conj_paths_$_iter__42427_$_iter__42429_$_iter__42431(cljs.core.chunk_rest(s__42432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42434),null);
}
} else {
var to = cljs.core.first(s__42432__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__42427_$_iter__42429_$_iter__42431(cljs.core.rest(s__42432__$2)));
}
} else {
return null;
}
break;
}
});})(s__42430__$1,s__42428__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__42430__$1,s__42428__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__42427_$_iter__42429(cljs.core.rest(s__42430__$1)));
} else {
var G__42912 = cljs.core.rest(s__42430__$1);
s__42430__$1 = G__42912;
continue;
}
} else {
return null;
}
break;
}
});})(s__42428__$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__42428__$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__42427(cljs.core.rest(s__42428__$1)));
} else {
var G__42915 = cljs.core.rest(s__42428__$1);
s__42428__$1 = G__42915;
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
return (function (p1__42438_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__42438_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__42442){
var vec__42443 = p__42442;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42443,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42443,(1),null);
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
var G__42920 = outgoing__$1;
var G__42921 = incoming;
var G__42922 = q1__$1;
var G__42923 = q2;
outgoing = G__42920;
incoming = G__42921;
q1 = G__42922;
q2 = G__42923;
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
var G__42927 = outgoing;
var G__42928 = incoming__$1;
var G__42929 = q1;
var G__42930 = q2__$1;
outgoing = G__42927;
incoming = G__42928;
q1 = G__42929;
q2 = G__42930;
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
var G__42454 = arguments.length;
switch (G__42454) {
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
var step = (function loom$alg_generic$step(p__42469){
var vec__42470 = p__42469;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42470,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42470,(1),null);
var temp__5735__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__42473 = temp__5735__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42473,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42473,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42473,(2),null);
var fpq = vec__42473;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__42473,dist_su,_,u,fpq,temp__5735__auto__,vec__42470,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__42473,dist_su,_,u,fpq,temp__5735__auto__,vec__42470,state,pq){
return (function (p__42476,v){
var vec__42477 = p__42476;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(1),null);
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
});})(vec__42473,dist_su,_,u,fpq,temp__5735__auto__,vec__42470,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__42473,dist_su,_,u,fpq,temp__5735__auto__,vec__42470,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__42480){
var vec__42481 = p__42480;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42481,(0),null);
var vec__42484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42481,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42484,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42484,(1),null);
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
var temp__5733__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42487){
var vec__42488 = p__42487;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42488,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42488,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__42491 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42491,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42491,(1),null);
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
return cljs.core.long$((function (){var G__42500 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__42500);
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
var len__4730__auto___42935 = arguments.length;
var i__4731__auto___42936 = (0);
while(true){
if((i__4731__auto___42936 < len__4730__auto___42935)){
args__4736__auto__.push((arguments[i__4731__auto___42936]));

var G__42941 = (i__4731__auto___42936 + (1));
i__4731__auto___42936 = G__42941;
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
var seq__42505_42942 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__42512_42943 = null;
var count__42513_42944 = (0);
var i__42514_42945 = (0);
while(true){
if((i__42514_42945 < count__42513_42944)){
var bitmap_42946 = chunk__42512_42943.cljs$core$IIndexed$_nth$arity$2(null,i__42514_42945);
var seq__42515_42947 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_42946));
var chunk__42517_42948 = null;
var count__42518_42949 = (0);
var i__42519_42950 = (0);
while(true){
if((i__42519_42950 < count__42518_42949)){
var vec__42560_42951 = chunk__42517_42948.cljs$core$IIndexed$_nth$arity$2(null,i__42519_42950);
var idx_42952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42560_42951,(0),null);
var value_42953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42560_42951,(1),null);
var masked_value_42954 = (value_42953 | (new_bitmap[idx_42952]));
(new_bitmap[idx_42952] = masked_value_42954);


var G__42955 = seq__42515_42947;
var G__42956 = chunk__42517_42948;
var G__42957 = count__42518_42949;
var G__42958 = (i__42519_42950 + (1));
seq__42515_42947 = G__42955;
chunk__42517_42948 = G__42956;
count__42518_42949 = G__42957;
i__42519_42950 = G__42958;
continue;
} else {
var temp__5735__auto___42959 = cljs.core.seq(seq__42515_42947);
if(temp__5735__auto___42959){
var seq__42515_42960__$1 = temp__5735__auto___42959;
if(cljs.core.chunked_seq_QMARK_(seq__42515_42960__$1)){
var c__4550__auto___42961 = cljs.core.chunk_first(seq__42515_42960__$1);
var G__42962 = cljs.core.chunk_rest(seq__42515_42960__$1);
var G__42963 = c__4550__auto___42961;
var G__42964 = cljs.core.count(c__4550__auto___42961);
var G__42965 = (0);
seq__42515_42947 = G__42962;
chunk__42517_42948 = G__42963;
count__42518_42949 = G__42964;
i__42519_42950 = G__42965;
continue;
} else {
var vec__42563_42966 = cljs.core.first(seq__42515_42960__$1);
var idx_42967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42563_42966,(0),null);
var value_42968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42563_42966,(1),null);
var masked_value_42972 = (value_42968 | (new_bitmap[idx_42967]));
(new_bitmap[idx_42967] = masked_value_42972);


var G__42973 = cljs.core.next(seq__42515_42960__$1);
var G__42974 = null;
var G__42975 = (0);
var G__42976 = (0);
seq__42515_42947 = G__42973;
chunk__42517_42948 = G__42974;
count__42518_42949 = G__42975;
i__42519_42950 = G__42976;
continue;
}
} else {
}
}
break;
}

var G__42977 = seq__42505_42942;
var G__42978 = chunk__42512_42943;
var G__42979 = count__42513_42944;
var G__42980 = (i__42514_42945 + (1));
seq__42505_42942 = G__42977;
chunk__42512_42943 = G__42978;
count__42513_42944 = G__42979;
i__42514_42945 = G__42980;
continue;
} else {
var temp__5735__auto___42981 = cljs.core.seq(seq__42505_42942);
if(temp__5735__auto___42981){
var seq__42505_42982__$1 = temp__5735__auto___42981;
if(cljs.core.chunked_seq_QMARK_(seq__42505_42982__$1)){
var c__4550__auto___42983 = cljs.core.chunk_first(seq__42505_42982__$1);
var G__42984 = cljs.core.chunk_rest(seq__42505_42982__$1);
var G__42985 = c__4550__auto___42983;
var G__42986 = cljs.core.count(c__4550__auto___42983);
var G__42987 = (0);
seq__42505_42942 = G__42984;
chunk__42512_42943 = G__42985;
count__42513_42944 = G__42986;
i__42514_42945 = G__42987;
continue;
} else {
var bitmap_42988 = cljs.core.first(seq__42505_42982__$1);
var seq__42506_42989 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_42988));
var chunk__42508_42990 = null;
var count__42509_42991 = (0);
var i__42510_42992 = (0);
while(true){
if((i__42510_42992 < count__42509_42991)){
var vec__42575_42993 = chunk__42508_42990.cljs$core$IIndexed$_nth$arity$2(null,i__42510_42992);
var idx_42994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42575_42993,(0),null);
var value_42995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42575_42993,(1),null);
var masked_value_42996 = (value_42995 | (new_bitmap[idx_42994]));
(new_bitmap[idx_42994] = masked_value_42996);


var G__42998 = seq__42506_42989;
var G__42999 = chunk__42508_42990;
var G__43000 = count__42509_42991;
var G__43001 = (i__42510_42992 + (1));
seq__42506_42989 = G__42998;
chunk__42508_42990 = G__42999;
count__42509_42991 = G__43000;
i__42510_42992 = G__43001;
continue;
} else {
var temp__5735__auto___43002__$1 = cljs.core.seq(seq__42506_42989);
if(temp__5735__auto___43002__$1){
var seq__42506_43004__$1 = temp__5735__auto___43002__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42506_43004__$1)){
var c__4550__auto___43005 = cljs.core.chunk_first(seq__42506_43004__$1);
var G__43006 = cljs.core.chunk_rest(seq__42506_43004__$1);
var G__43007 = c__4550__auto___43005;
var G__43008 = cljs.core.count(c__4550__auto___43005);
var G__43009 = (0);
seq__42506_42989 = G__43006;
chunk__42508_42990 = G__43007;
count__42509_42991 = G__43008;
i__42510_42992 = G__43009;
continue;
} else {
var vec__42578_43010 = cljs.core.first(seq__42506_43004__$1);
var idx_43011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42578_43010,(0),null);
var value_43012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42578_43010,(1),null);
var masked_value_43013 = (value_43012 | (new_bitmap[idx_43011]));
(new_bitmap[idx_43011] = masked_value_43013);


var G__43014 = cljs.core.next(seq__42506_43004__$1);
var G__43015 = null;
var G__43016 = (0);
var G__43017 = (0);
seq__42506_42989 = G__43014;
chunk__42508_42990 = G__43015;
count__42509_42991 = G__43016;
i__42510_42992 = G__43017;
continue;
}
} else {
}
}
break;
}

var G__43018 = cljs.core.next(seq__42505_42982__$1);
var G__43019 = null;
var G__43020 = (0);
var G__43021 = (0);
seq__42505_42942 = G__43018;
chunk__42512_42943 = G__43019;
count__42513_42944 = G__43020;
i__42514_42945 = G__43021;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq42501){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42501));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__42581(s__42582){
return (new cljs.core.LazySeq(null,(function (){
var s__42582__$1 = s__42582;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42582__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var chunk = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__42582__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__42581_$_iter__42583(s__42584){
return (new cljs.core.LazySeq(null,((function (s__42582__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__42584__$1 = s__42584;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42584__$1);
if(temp__5735__auto____$1){
var s__42584__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42584__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42584__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42586 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42585 = (0);
while(true){
if((i__42585 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42585);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__42586,idx);

var G__43022 = (i__42585 + (1));
i__42585 = G__43022;
continue;
} else {
var G__43023 = (i__42585 + (1));
i__42585 = G__43023;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42586),loom$alg_generic$bm_get_indicies_$_iter__42581_$_iter__42583(cljs.core.chunk_rest(s__42584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42586),null);
}
} else {
var offset = cljs.core.first(s__42584__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__42581_$_iter__42583(cljs.core.rest(s__42584__$2)));
} else {
var G__43026 = cljs.core.rest(s__42584__$2);
s__42584__$1 = G__43026;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__42582__$1,chunk,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__42582__$1,chunk,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__42581(cljs.core.rest(s__42582__$1)));
} else {
var G__43027 = cljs.core.rest(s__42582__$1);
s__42582__$1 = G__43027;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k42589,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__42593 = k42589;
var G__42593__$1 = (((G__42593 instanceof cljs.core.Keyword))?G__42593.fqn:null);
switch (G__42593__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42589,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__42597){
var vec__42598 = p__42597;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42598,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42598,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42588){
var self__ = this;
var G__42588__$1 = this;
return (new cljs.core.RecordIter((0),G__42588__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__42616 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__42616(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42590,other42591){
var self__ = this;
var this42590__$1 = this;
return (((!((other42591 == null)))) && ((this42590__$1.constructor === other42591.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42590__$1.node__GT_idx,other42591.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42590__$1.idx__GT_node,other42591.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42590__$1.bitmaps,other42591.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42590__$1.__extmap,other42591.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__42588){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__42632 = cljs.core.keyword_identical_QMARK_;
var expr__42633 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__42635 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__42636 = expr__42633;
return (pred__42632.cljs$core$IFn$_invoke$arity$2 ? pred__42632.cljs$core$IFn$_invoke$arity$2(G__42635,G__42636) : pred__42632.call(null,G__42635,G__42636));
})())){
return (new loom.alg_generic.Ancestry(G__42588,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42637 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__42638 = expr__42633;
return (pred__42632.cljs$core$IFn$_invoke$arity$2 ? pred__42632.cljs$core$IFn$_invoke$arity$2(G__42637,G__42638) : pred__42632.call(null,G__42637,G__42638));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__42588,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42639 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__42640 = expr__42633;
return (pred__42632.cljs$core$IFn$_invoke$arity$2 ? pred__42632.cljs$core$IFn$_invoke$arity$2(G__42639,G__42640) : pred__42632.call(null,G__42639,G__42640));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__42588,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__42588),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__42588){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__42588,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__42592){
var extmap__4424__auto__ = (function (){var G__42663 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42592,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__42592)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42663);
} else {
return G__42663;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__42592),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__42592),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__42592),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___43056 = arguments.length;
var i__4731__auto___43057 = (0);
while(true){
if((i__4731__auto___43057 < len__4730__auto___43056)){
args__4736__auto__.push((arguments[i__4731__auto___43057]));

var G__43058 = (i__4731__auto___43057 + (1));
i__4731__auto___43057 = G__43058;
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
var map__42673 = ancestry;
var map__42673__$1 = (((((!((map__42673 == null))))?(((((map__42673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42673):map__42673);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42673__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42673__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42673__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq42664){
var G__42665 = cljs.core.first(seq42664);
var seq42664__$1 = cljs.core.next(seq42664);
var G__42666 = cljs.core.first(seq42664__$1);
var seq42664__$2 = cljs.core.next(seq42664__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42665,G__42666,seq42664__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__42680 = ancestry;
var map__42680__$1 = (((((!((map__42680 == null))))?(((((map__42680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42680):map__42680);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42680__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42680__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__42682 = ancestry;
var map__42682__$1 = (((((!((map__42682 == null))))?(((((map__42682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42682):map__42682);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
