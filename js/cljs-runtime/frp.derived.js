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
var len__4730__auto___56676 = arguments.length;
var i__4731__auto___56677 = (0);
while(true){
if((i__4731__auto___56677 < len__4730__auto___56676)){
args__4736__auto__.push((arguments[i__4731__auto___56677]));

var G__56678 = (i__4731__auto___56677 + (1));
i__4731__auto___56677 = G__56678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return frp.derived.event.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

frp.derived.event.cljs$core$IFn$_invoke$arity$variadic = (function (as){
var pred__56615 = aid.core.call_pred;
var expr__56616 = as;
if(cljs.core.truth_((pred__56615.cljs$core$IFn$_invoke$arity$2 ? pred__56615.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,expr__56616) : pred__56615.call(null,cljs.core.empty_QMARK_,expr__56616)))){
return frp.primitives.event.mempty();
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cats.core._LT__GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.pure,as));
}
});

frp.derived.event.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
frp.derived.event.cljs$lang$applyTo = (function (seq56614){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56614));
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
var frp$derived$has_argument_QMARK___delegate = function (more__56618__auto__){
var and__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,more__56618__auto__);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.multiton_QMARK_,more__56618__auto__);
} else {
return and__4120__auto__;
}
};
var frp$derived$has_argument_QMARK_ = function (var_args){
var more__56618__auto__ = null;
if (arguments.length > 0) {
var G__56679__i = 0, G__56679__a = new Array(arguments.length -  0);
while (G__56679__i < G__56679__a.length) {G__56679__a[G__56679__i] = arguments[G__56679__i + 0]; ++G__56679__i;}
  more__56618__auto__ = new cljs.core.IndexedSeq(G__56679__a,0,null);
} 
return frp$derived$has_argument_QMARK___delegate.call(this,more__56618__auto__);};
frp$derived$has_argument_QMARK_.cljs$lang$maxFixedArity = 0;
frp$derived$has_argument_QMARK_.cljs$lang$applyTo = (function (arglist__56680){
var more__56618__auto__ = cljs.core.seq(arglist__56680);
return frp$derived$has_argument_QMARK___delegate(more__56618__auto__);
});
frp$derived$has_argument_QMARK_.cljs$core$IFn$_invoke$arity$variadic = frp$derived$has_argument_QMARK___delegate;
return frp$derived$has_argument_QMARK_;
})()
;
frp.derived.make_only_QMARK_ = (function frp$derived$make_only_QMARK_(x,y){
return (function() { 
var G__56681__delegate = function (more__56619__auto__){
var and__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,x),more__56619__auto__);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,y)),more__56619__auto__);
} else {
return and__4120__auto__;
}
};
var G__56681 = function (var_args){
var more__56619__auto__ = null;
if (arguments.length > 0) {
var G__56682__i = 0, G__56682__a = new Array(arguments.length -  0);
while (G__56682__i < G__56682__a.length) {G__56682__a[G__56682__i] = arguments[G__56682__i + 0]; ++G__56682__i;}
  more__56619__auto__ = new cljs.core.IndexedSeq(G__56682__a,0,null);
} 
return G__56681__delegate.call(this,more__56619__auto__);};
G__56681.cljs$lang$maxFixedArity = 0;
G__56681.cljs$lang$applyTo = (function (arglist__56683){
var more__56619__auto__ = cljs.core.seq(arglist__56683);
return G__56681__delegate(more__56619__auto__);
});
G__56681.cljs$core$IFn$_invoke$arity$variadic = G__56681__delegate;
return G__56681;
})()
;
});
frp.derived.event_only_QMARK_ = frp.derived.make_only_QMARK_(frp.primitives.event.event_QMARK_,frp.derived.behavior_QMARK_);
frp.derived.behavior_only_QMARK_ = frp.derived.make_only_QMARK_(frp.derived.behavior_QMARK_,frp.primitives.event.event_QMARK_);
frp.derived.transparent_STAR_ = (function frp$derived$transparent_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56684 = arguments.length;
var i__4731__auto___56685 = (0);
while(true){
if((i__4731__auto___56685 < len__4730__auto___56684)){
args__4736__auto__.push((arguments[i__4731__auto___56685]));

var G__56686 = (i__4731__auto___56685 + (1));
i__4731__auto___56685 = G__56686;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return frp.derived.transparent_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

frp.derived.transparent_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (f,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__56628 = (function (){var pred__56629 = aid.core.call_pred;
var expr__56630 = more;
if(cljs.core.truth_((function (){var G__56632 = ((function (pred__56629,expr__56630){
return (function() { 
var G__56687__delegate = function (more__56634__auto__){
var or__4131__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.event_only_QMARK_,more__56634__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.behavior_only_QMARK_,more__56634__auto__);
}
};
var G__56687 = function (var_args){
var more__56634__auto__ = null;
if (arguments.length > 0) {
var G__56690__i = 0, G__56690__a = new Array(arguments.length -  0);
while (G__56690__i < G__56690__a.length) {G__56690__a[G__56690__i] = arguments[G__56690__i + 0]; ++G__56690__i;}
  more__56634__auto__ = new cljs.core.IndexedSeq(G__56690__a,0,null);
} 
return G__56687__delegate.call(this,more__56634__auto__);};
G__56687.cljs$lang$maxFixedArity = 0;
G__56687.cljs$lang$applyTo = (function (arglist__56691){
var more__56634__auto__ = cljs.core.seq(arglist__56691);
return G__56687__delegate(more__56634__auto__);
});
G__56687.cljs$core$IFn$_invoke$arity$variadic = G__56687__delegate;
return G__56687;
})()
;})(pred__56629,expr__56630))
;
var G__56633 = expr__56630;
return (pred__56629.cljs$core$IFn$_invoke$arity$2 ? pred__56629.cljs$core$IFn$_invoke$arity$2(G__56632,G__56633) : pred__56629.call(null,G__56632,G__56633));
})())){
return aid.core.lift_a;
} else {
return cljs.core.identity;
}
})();
return (fexpr__56628.cljs$core$IFn$_invoke$arity$1 ? fexpr__56628.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56628.call(null,f));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var pred__56635 = aid.core.call_pred;
var expr__56636 = more;
if(cljs.core.truth_((pred__56635.cljs$core$IFn$_invoke$arity$2 ? pred__56635.cljs$core$IFn$_invoke$arity$2(frp.derived.event_only_QMARK_,expr__56636) : pred__56635.call(null,frp.derived.event_only_QMARK_,expr__56636)))){
return frp.derived.eventize;
} else {
if(cljs.core.truth_((pred__56635.cljs$core$IFn$_invoke$arity$2 ? pred__56635.cljs$core$IFn$_invoke$arity$2(frp.derived.behavior_only_QMARK_,expr__56636) : pred__56635.call(null,frp.derived.behavior_only_QMARK_,expr__56636)))){
return frp.derived.behaviorize;
} else {
return cljs.core.identity;
}
}
})(),more));
});

frp.derived.transparent_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
frp.derived.transparent_STAR_.cljs$lang$applyTo = (function (seq56620){
var G__56621 = cljs.core.first(seq56620);
var seq56620__$1 = cljs.core.next(seq56620);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56621,seq56620__$1);
});

frp.derived.accum = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.clojure.core.reduce,aid.core.flip(aid.core.funcall));
frp.derived.switcher = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.join,frp.primitives.behavior.stepper);
frp.derived.SECOND = (com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1((1)) : com.rpl.specter.nthpath.call(null,(1)));
frp.derived.set_non_action = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.FIRST,true);
frp.derived.sfirst = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second);
frp.derived.get_undo_redo = (function frp$derived$get_undo_redo(size,undo,redo,net){
var G__56640 = frp.derived.sfirst;
var G__56641 = (function (){var G__56642 = frp.clojure.core.filter(cljs.core.first,(function (){var G__56643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null);
var G__56644 = (function (){var G__56645 = aid.core._LT_$((function (){var G__56648 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.derived.multiton_QMARK_,cljs.core.second);
var G__56649 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(frp.derived.set_non_action,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,frp.derived.SECOND,cljs.core.rest),(function (){var G__56650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,com.rpl.specter.BEFORE_ELEM], null);
var G__56651 = frp.derived.sfirst;
return (aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2 ? aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2(G__56650,G__56651) : aid.core.transfer_STAR_.call(null,G__56650,G__56651));
})());
return (aid.core.if_then.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_then.cljs$core$IFn$_invoke$arity$2(G__56648,G__56649) : aid.core.if_then.call(null,G__56648,G__56649));
})(),undo);
var G__56646 = aid.core._LT_$((function (){var G__56652 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.last);
var G__56653 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(frp.derived.set_non_action,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,com.rpl.specter.LAST,cljs.core.rest),(function (){var G__56654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.derived.SECOND,com.rpl.specter.BEFORE_ELEM], null);
var G__56655 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.last);
return (aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2 ? aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2(G__56654,G__56655) : aid.core.transfer_STAR_.call(null,G__56654,G__56655));
})());
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__56652,G__56653) : aid.core.if_else.call(null,G__56652,G__56653));
})(),redo);
var G__56647 = (function (){var G__56656 = ((function (G__56645,G__56646,G__56643,G__56640){
return (function (p1__56639_SHARP_){
var G__56658 = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(aid.core.funcall),new cljs.core.Keyword(null,"occs","occs",-482222641).cljs$core$IFn$_invoke$arity$1(p1__56639_SHARP_)),cljs.core.set,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,new cljs.core.Keyword(null,"occs","occs",-482222641)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.flatten,cljs.core.rest], 0));
var G__56659 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.FIRST,false),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.LAST,cljs.core.PersistentVector.EMPTY),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,frp.derived.SECOND,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(size + (1))),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.BEFORE_ELEM,p1__56639_SHARP_))));
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__56658,G__56659) : aid.core.if_else.call(null,G__56658,G__56659));
});})(G__56645,G__56646,G__56643,G__56640))
;
var G__56657 = net;
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__56656,G__56657) : cats.core._LT_$_GT_.call(null,G__56656,G__56657));
})();
return (cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$3 ? cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$3(G__56645,G__56646,G__56647) : cats.core._LT__GT_.call(null,G__56645,G__56646,G__56647));
})();
return (frp.derived.accum.cljs$core$IFn$_invoke$arity$2 ? frp.derived.accum.cljs$core$IFn$_invoke$arity$2(G__56643,G__56644) : frp.derived.accum.call(null,G__56643,G__56644));
})());
return (frp.clojure.core.dedupe.cljs$core$IFn$_invoke$arity$1 ? frp.clojure.core.dedupe.cljs$core$IFn$_invoke$arity$1(G__56642) : frp.clojure.core.dedupe.call(null,G__56642));
})();
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__56640,G__56641) : cats.core._LT_$_GT_.call(null,G__56640,G__56641));
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

var G__56660 = cljs.core.deref(history);
return (net.cljs$core$IFn$_invoke$arity$1 ? net.cljs$core$IFn$_invoke$arity$1(G__56660) : net.call(null,G__56660));
});})(net,outer_result))
,inner_result);

frp.io.run(history,frp.derived.get_undo_redo(size,undo,redo,net));

var pred__56661 = aid.core.call_pred;
var expr__56662 = inner_result;
if(cljs.core.truth_((pred__56661.cljs$core$IFn$_invoke$arity$2 ? pred__56661.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,expr__56662) : pred__56661.call(null,frp.primitives.event.event_QMARK_,expr__56662)))){
return outer_result;
} else {
var G__56668 = frp.primitives.behavior.time;
var G__56669 = initial_result;
var G__56670 = frp.primitives.behavior.stepper(aid.unit.unit,outer_result);
var fexpr__56667 = aid.core.lift_a(((function (G__56668,G__56669,G__56670,pred__56661,expr__56662,net,outer_result){
return (function (t,initial_result_STAR_,outer_result_STAR_){
var pred__56671 = cljs.core._EQ_;
var expr__56672 = t;
if(cljs.core.truth_((pred__56671.cljs$core$IFn$_invoke$arity$2 ? pred__56671.cljs$core$IFn$_invoke$arity$2(frp.time.epoch,expr__56672) : pred__56671.call(null,frp.time.epoch,expr__56672)))){
return initial_result_STAR_;
} else {
return outer_result_STAR_;
}
});})(G__56668,G__56669,G__56670,pred__56661,expr__56662,net,outer_result))
);
return (fexpr__56667.cljs$core$IFn$_invoke$arity$3 ? fexpr__56667.cljs$core$IFn$_invoke$arity$3(G__56668,G__56669,G__56670) : fexpr__56667.call(null,G__56668,G__56669,G__56670));
}
});
frp.derived.get_binding = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (event_STAR_,action){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1 ? frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1(action) : frp.derived.get_alias.call(null,action)),event_STAR_], null);
}));
frp.derived.get_bindings = (function frp$derived$get_bindings(event_STAR_,actions){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((frp.derived.get_binding.cljs$core$IFn$_invoke$arity$1 ? frp.derived.get_binding.cljs$core$IFn$_invoke$arity$1(event_STAR_) : frp.derived.get_binding.call(null,event_STAR_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actions], 0));
});

//# sourceMappingURL=frp.derived.js.map
