goog.provide('frp.derived');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('aid.core');
goog.require('aid.unit');
goog.require('cats.core');
goog.require('com.rpl.specter');
goog.require('frp.clojure.core');
goog.require('frp.io');
goog.require('frp.primitives.behavior');
goog.require('frp.primitives.event');
goog.require('frp.primitives.net');
goog.require('frp.time');
frp.derived.event = (function frp$derived$event(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60619 = arguments.length;
var i__4731__auto___60620 = (0);
while(true){
if((i__4731__auto___60620 < len__4730__auto___60619)){
args__4736__auto__.push((arguments[i__4731__auto___60620]));

var G__60621 = (i__4731__auto___60620 + (1));
i__4731__auto___60620 = G__60621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return frp.derived.event.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

frp.derived.event.cljs$core$IFn$_invoke$arity$variadic = (function (as){
var pred__60556 = aid.core.call_pred;
var expr__60557 = as;
if(cljs.core.truth_((pred__60556.cljs$core$IFn$_invoke$arity$2 ? pred__60556.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,expr__60557) : pred__60556.call(null,cljs.core.empty_QMARK_,expr__60557)))){
return frp.primitives.event.mempty();
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cats.core._LT__GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.pure,as));
}
});

frp.derived.event.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
frp.derived.event.cljs$lang$applyTo = (function (seq60555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60555));
});

frp.derived.behavior_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,frp.primitives.behavior.Behavior);
frp.derived.behavior = frp.primitives.behavior.pure;
frp.derived.behaviorize = (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(frp.derived.behavior_QMARK_,frp.derived.behavior) : aid.core.if_else.call(null,frp.derived.behavior_QMARK_,frp.derived.behavior));
frp.derived.eventize = (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,frp.derived.event) : aid.core.if_else.call(null,frp.primitives.event.event_QMARK_,frp.derived.event));
frp.derived.multiton_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,(1)),cljs.core.count);
/**
 * @param {...*} var_args
 */
frp.derived.has_argument_QMARK_ = (function() { 
var frp$derived$has_argument_QMARK___delegate = function (more__60559__auto__){
var and__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,more__60559__auto__);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.multiton_QMARK_,more__60559__auto__);
} else {
return and__4120__auto__;
}
};
var frp$derived$has_argument_QMARK_ = function (var_args){
var more__60559__auto__ = null;
if (arguments.length > 0) {
var G__60622__i = 0, G__60622__a = new Array(arguments.length -  0);
while (G__60622__i < G__60622__a.length) {G__60622__a[G__60622__i] = arguments[G__60622__i + 0]; ++G__60622__i;}
  more__60559__auto__ = new cljs.core.IndexedSeq(G__60622__a,0,null);
} 
return frp$derived$has_argument_QMARK___delegate.call(this,more__60559__auto__);};
frp$derived$has_argument_QMARK_.cljs$lang$maxFixedArity = 0;
frp$derived$has_argument_QMARK_.cljs$lang$applyTo = (function (arglist__60623){
var more__60559__auto__ = cljs.core.seq(arglist__60623);
return frp$derived$has_argument_QMARK___delegate(more__60559__auto__);
});
frp$derived$has_argument_QMARK_.cljs$core$IFn$_invoke$arity$variadic = frp$derived$has_argument_QMARK___delegate;
return frp$derived$has_argument_QMARK_;
})()
;
frp.derived.make_only_QMARK_ = (function frp$derived$make_only_QMARK_(x,y){
return (function() { 
var G__60624__delegate = function (more__60560__auto__){
var and__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,x),more__60560__auto__);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,y)),more__60560__auto__);
} else {
return and__4120__auto__;
}
};
var G__60624 = function (var_args){
var more__60560__auto__ = null;
if (arguments.length > 0) {
var G__60625__i = 0, G__60625__a = new Array(arguments.length -  0);
while (G__60625__i < G__60625__a.length) {G__60625__a[G__60625__i] = arguments[G__60625__i + 0]; ++G__60625__i;}
  more__60560__auto__ = new cljs.core.IndexedSeq(G__60625__a,0,null);
} 
return G__60624__delegate.call(this,more__60560__auto__);};
G__60624.cljs$lang$maxFixedArity = 0;
G__60624.cljs$lang$applyTo = (function (arglist__60626){
var more__60560__auto__ = cljs.core.seq(arglist__60626);
return G__60624__delegate(more__60560__auto__);
});
G__60624.cljs$core$IFn$_invoke$arity$variadic = G__60624__delegate;
return G__60624;
})()
;
});
frp.derived.event_only_QMARK_ = frp.derived.make_only_QMARK_(frp.primitives.event.event_QMARK_,frp.derived.behavior_QMARK_);
frp.derived.behavior_only_QMARK_ = frp.derived.make_only_QMARK_(frp.derived.behavior_QMARK_,frp.primitives.event.event_QMARK_);
frp.derived.transparent_STAR_ = (function frp$derived$transparent_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60627 = arguments.length;
var i__4731__auto___60628 = (0);
while(true){
if((i__4731__auto___60628 < len__4730__auto___60627)){
args__4736__auto__.push((arguments[i__4731__auto___60628]));

var G__60629 = (i__4731__auto___60628 + (1));
i__4731__auto___60628 = G__60629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return frp.derived.transparent_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

frp.derived.transparent_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (f,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__60569 = (function (){var pred__60570 = aid.core.call_pred;
var expr__60571 = more;
if(cljs.core.truth_((function (){var G__60575 = ((function (pred__60570,expr__60571){
return (function() { 
var G__60630__delegate = function (more__60577__auto__){
var or__4131__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.event_only_QMARK_,more__60577__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.behavior_only_QMARK_,more__60577__auto__);
}
};
var G__60630 = function (var_args){
var more__60577__auto__ = null;
if (arguments.length > 0) {
var G__60631__i = 0, G__60631__a = new Array(arguments.length -  0);
while (G__60631__i < G__60631__a.length) {G__60631__a[G__60631__i] = arguments[G__60631__i + 0]; ++G__60631__i;}
  more__60577__auto__ = new cljs.core.IndexedSeq(G__60631__a,0,null);
} 
return G__60630__delegate.call(this,more__60577__auto__);};
G__60630.cljs$lang$maxFixedArity = 0;
G__60630.cljs$lang$applyTo = (function (arglist__60632){
var more__60577__auto__ = cljs.core.seq(arglist__60632);
return G__60630__delegate(more__60577__auto__);
});
G__60630.cljs$core$IFn$_invoke$arity$variadic = G__60630__delegate;
return G__60630;
})()
;})(pred__60570,expr__60571))
;
var G__60576 = expr__60571;
return (pred__60570.cljs$core$IFn$_invoke$arity$2 ? pred__60570.cljs$core$IFn$_invoke$arity$2(G__60575,G__60576) : pred__60570.call(null,G__60575,G__60576));
})())){
return aid.core.lift_a;
} else {
return cljs.core.identity;
}
})();
return (fexpr__60569.cljs$core$IFn$_invoke$arity$1 ? fexpr__60569.cljs$core$IFn$_invoke$arity$1(f) : fexpr__60569.call(null,f));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var pred__60578 = aid.core.call_pred;
var expr__60579 = more;
if(cljs.core.truth_((pred__60578.cljs$core$IFn$_invoke$arity$2 ? pred__60578.cljs$core$IFn$_invoke$arity$2(frp.derived.event_only_QMARK_,expr__60579) : pred__60578.call(null,frp.derived.event_only_QMARK_,expr__60579)))){
return frp.derived.eventize;
} else {
if(cljs.core.truth_((pred__60578.cljs$core$IFn$_invoke$arity$2 ? pred__60578.cljs$core$IFn$_invoke$arity$2(frp.derived.behavior_only_QMARK_,expr__60579) : pred__60578.call(null,frp.derived.behavior_only_QMARK_,expr__60579)))){
return frp.derived.behaviorize;
} else {
return cljs.core.identity;
}
}
})(),more));
});

frp.derived.transparent_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
frp.derived.transparent_STAR_.cljs$lang$applyTo = (function (seq60561){
var G__60562 = cljs.core.first(seq60561);
var seq60561__$1 = cljs.core.next(seq60561);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60562,seq60561__$1);
});

frp.derived.accum = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.clojure.core.reduce,aid.core.flip(aid.core.funcall));
frp.derived.switcher = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.join,frp.primitives.behavior.stepper);
frp.derived.SECOND = (com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1((1)) : com.rpl.specter.nthpath.call(null,(1)));
frp.derived.set_non_action = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.FIRST,true);
frp.derived.sfirst = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second);
frp.derived.get_undo_redo = (function frp$derived$get_undo_redo(size,undo,redo,net){
var G__60583 = frp.derived.sfirst;
var G__60584 = (function (){var G__60585 = frp.clojure.core.filter(cljs.core.first,(function (){var G__60586 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null);
var G__60587 = (function (){var G__60588 = aid.core._LT_$((function (){var G__60591 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.derived.multiton_QMARK_,cljs.core.second);
var G__60592 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(frp.derived.set_non_action,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,frp.derived.SECOND,cljs.core.rest),(function (){var G__60593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,com.rpl.specter.BEFORE_ELEM], null);
var G__60594 = frp.derived.sfirst;
return (aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2 ? aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2(G__60593,G__60594) : aid.core.transfer_STAR_.call(null,G__60593,G__60594));
})());
return (aid.core.if_then.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_then.cljs$core$IFn$_invoke$arity$2(G__60591,G__60592) : aid.core.if_then.call(null,G__60591,G__60592));
})(),undo);
var G__60589 = aid.core._LT_$((function (){var G__60595 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.last);
var G__60596 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(frp.derived.set_non_action,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,com.rpl.specter.LAST,cljs.core.rest),(function (){var G__60597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.derived.SECOND,com.rpl.specter.BEFORE_ELEM], null);
var G__60598 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.last);
return (aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2 ? aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2(G__60597,G__60598) : aid.core.transfer_STAR_.call(null,G__60597,G__60598));
})());
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__60595,G__60596) : aid.core.if_else.call(null,G__60595,G__60596));
})(),redo);
var G__60590 = (function (){var G__60599 = ((function (G__60588,G__60589,G__60586,G__60583){
return (function (p1__60582_SHARP_){
var G__60601 = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(aid.core.funcall),new cljs.core.Keyword(null,"occs","occs",-482222641).cljs$core$IFn$_invoke$arity$1(p1__60582_SHARP_)),cljs.core.set,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,new cljs.core.Keyword(null,"occs","occs",-482222641)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.flatten,cljs.core.rest], 0));
var G__60602 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.FIRST,false),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.LAST,cljs.core.PersistentVector.EMPTY),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,frp.derived.SECOND,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(size + (1))),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.BEFORE_ELEM,p1__60582_SHARP_))));
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__60601,G__60602) : aid.core.if_else.call(null,G__60601,G__60602));
});})(G__60588,G__60589,G__60586,G__60583))
;
var G__60600 = net;
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__60599,G__60600) : cats.core._LT_$_GT_.call(null,G__60599,G__60600));
})();
return (cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$3 ? cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$3(G__60588,G__60589,G__60590) : cats.core._LT__GT_.call(null,G__60588,G__60589,G__60590));
})();
return (frp.derived.accum.cljs$core$IFn$_invoke$arity$2 ? frp.derived.accum.cljs$core$IFn$_invoke$arity$2(G__60586,G__60587) : frp.derived.accum.call(null,G__60586,G__60587));
})());
return (frp.clojure.core.dedupe.cljs$core$IFn$_invoke$arity$1 ? frp.clojure.core.dedupe.cljs$core$IFn$_invoke$arity$1(G__60585) : frp.clojure.core.dedupe.call(null,G__60585));
})();
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__60583,G__60584) : cats.core._LT_$_GT_.call(null,G__60583,G__60584));
});
frp.derived.prefix = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
frp.derived.get_alias = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,frp.derived.prefix));
frp.derived.get_event_alias = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.array_map),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,frp.derived.get_alias)));
frp.derived.run_aciton = (function frp$derived$run_aciton(action){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("frp.io","run","frp.io/run",566231162,null),null,(1),null)),(new cljs.core.List(null,(frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1 ? frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1(action) : frp.derived.get_alias.call(null,action)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,action,null,(1),null))], 0))));
});
frp.derived.run_actions = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,frp.derived.run_aciton);
frp.derived.get_result = (function frp$derived$get_result(history,size,undo,redo,initial_result,inner_result){
var net = frp.derived.event();
var outer_result = frp.derived.event();
frp.io.run(((function (net,outer_result){
return (function (x){
(outer_result.cljs$core$IFn$_invoke$arity$1 ? outer_result.cljs$core$IFn$_invoke$arity$1(x) : outer_result.call(null,x));

var G__60603 = cljs.core.deref(history);
return (net.cljs$core$IFn$_invoke$arity$1 ? net.cljs$core$IFn$_invoke$arity$1(G__60603) : net.call(null,G__60603));
});})(net,outer_result))
,inner_result);

frp.io.run(history,frp.derived.get_undo_redo(size,undo,redo,net));

var pred__60604 = aid.core.call_pred;
var expr__60605 = inner_result;
if(cljs.core.truth_((pred__60604.cljs$core$IFn$_invoke$arity$2 ? pred__60604.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,expr__60605) : pred__60604.call(null,frp.primitives.event.event_QMARK_,expr__60605)))){
return outer_result;
} else {
var G__60611 = frp.primitives.behavior.time;
var G__60612 = initial_result;
var G__60613 = frp.primitives.behavior.stepper(aid.unit.unit,outer_result);
var fexpr__60610 = aid.core.lift_a(((function (G__60611,G__60612,G__60613,pred__60604,expr__60605,net,outer_result){
return (function (t,initial_result_STAR_,outer_result_STAR_){
var pred__60614 = cljs.core._EQ_;
var expr__60615 = t;
if(cljs.core.truth_((pred__60614.cljs$core$IFn$_invoke$arity$2 ? pred__60614.cljs$core$IFn$_invoke$arity$2(frp.time.epoch,expr__60615) : pred__60614.call(null,frp.time.epoch,expr__60615)))){
return initial_result_STAR_;
} else {
return outer_result_STAR_;
}
});})(G__60611,G__60612,G__60613,pred__60604,expr__60605,net,outer_result))
);
return (fexpr__60610.cljs$core$IFn$_invoke$arity$3 ? fexpr__60610.cljs$core$IFn$_invoke$arity$3(G__60611,G__60612,G__60613) : fexpr__60610.call(null,G__60611,G__60612,G__60613));
}
});
frp.derived.get_binding = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (event_STAR_,action){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1 ? frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1(action) : frp.derived.get_alias.call(null,action)),event_STAR_], null);
}));
frp.derived.get_bindings = (function frp$derived$get_bindings(event_STAR_,actions){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((frp.derived.get_binding.cljs$core$IFn$_invoke$arity$1 ? frp.derived.get_binding.cljs$core$IFn$_invoke$arity$1(event_STAR_) : frp.derived.get_binding.call(null,event_STAR_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actions], 0));
});

//# sourceMappingURL=frp.derived.js.map
