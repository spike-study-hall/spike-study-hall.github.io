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
var len__4730__auto___61120 = arguments.length;
var i__4731__auto___61121 = (0);
while(true){
if((i__4731__auto___61121 < len__4730__auto___61120)){
args__4736__auto__.push((arguments[i__4731__auto___61121]));

var G__61122 = (i__4731__auto___61121 + (1));
i__4731__auto___61121 = G__61122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return frp.derived.event.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

frp.derived.event.cljs$core$IFn$_invoke$arity$variadic = (function (as){
var pred__61052 = aid.core.call_pred;
var expr__61053 = as;
if(cljs.core.truth_((pred__61052.cljs$core$IFn$_invoke$arity$2 ? pred__61052.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,expr__61053) : pred__61052.call(null,cljs.core.empty_QMARK_,expr__61053)))){
return frp.primitives.event.mempty();
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cats.core._LT__GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.pure,as));
}
});

frp.derived.event.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
frp.derived.event.cljs$lang$applyTo = (function (seq61049){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61049));
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
var frp$derived$has_argument_QMARK___delegate = function (more__61055__auto__){
var and__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,more__61055__auto__);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.multiton_QMARK_,more__61055__auto__);
} else {
return and__4120__auto__;
}
};
var frp$derived$has_argument_QMARK_ = function (var_args){
var more__61055__auto__ = null;
if (arguments.length > 0) {
var G__61123__i = 0, G__61123__a = new Array(arguments.length -  0);
while (G__61123__i < G__61123__a.length) {G__61123__a[G__61123__i] = arguments[G__61123__i + 0]; ++G__61123__i;}
  more__61055__auto__ = new cljs.core.IndexedSeq(G__61123__a,0,null);
} 
return frp$derived$has_argument_QMARK___delegate.call(this,more__61055__auto__);};
frp$derived$has_argument_QMARK_.cljs$lang$maxFixedArity = 0;
frp$derived$has_argument_QMARK_.cljs$lang$applyTo = (function (arglist__61124){
var more__61055__auto__ = cljs.core.seq(arglist__61124);
return frp$derived$has_argument_QMARK___delegate(more__61055__auto__);
});
frp$derived$has_argument_QMARK_.cljs$core$IFn$_invoke$arity$variadic = frp$derived$has_argument_QMARK___delegate;
return frp$derived$has_argument_QMARK_;
})()
;
frp.derived.make_only_QMARK_ = (function frp$derived$make_only_QMARK_(x,y){
return (function() { 
var G__61125__delegate = function (more__61056__auto__){
var and__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,x),more__61056__auto__);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,y)),more__61056__auto__);
} else {
return and__4120__auto__;
}
};
var G__61125 = function (var_args){
var more__61056__auto__ = null;
if (arguments.length > 0) {
var G__61126__i = 0, G__61126__a = new Array(arguments.length -  0);
while (G__61126__i < G__61126__a.length) {G__61126__a[G__61126__i] = arguments[G__61126__i + 0]; ++G__61126__i;}
  more__61056__auto__ = new cljs.core.IndexedSeq(G__61126__a,0,null);
} 
return G__61125__delegate.call(this,more__61056__auto__);};
G__61125.cljs$lang$maxFixedArity = 0;
G__61125.cljs$lang$applyTo = (function (arglist__61127){
var more__61056__auto__ = cljs.core.seq(arglist__61127);
return G__61125__delegate(more__61056__auto__);
});
G__61125.cljs$core$IFn$_invoke$arity$variadic = G__61125__delegate;
return G__61125;
})()
;
});
frp.derived.event_only_QMARK_ = frp.derived.make_only_QMARK_(frp.primitives.event.event_QMARK_,frp.derived.behavior_QMARK_);
frp.derived.behavior_only_QMARK_ = frp.derived.make_only_QMARK_(frp.derived.behavior_QMARK_,frp.primitives.event.event_QMARK_);
frp.derived.transparent_STAR_ = (function frp$derived$transparent_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61128 = arguments.length;
var i__4731__auto___61129 = (0);
while(true){
if((i__4731__auto___61129 < len__4730__auto___61128)){
args__4736__auto__.push((arguments[i__4731__auto___61129]));

var G__61130 = (i__4731__auto___61129 + (1));
i__4731__auto___61129 = G__61130;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return frp.derived.transparent_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

frp.derived.transparent_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (f,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__61065 = (function (){var pred__61066 = aid.core.call_pred;
var expr__61067 = more;
if(cljs.core.truth_((function (){var G__61069 = ((function (pred__61066,expr__61067){
return (function() { 
var G__61131__delegate = function (more__61071__auto__){
var or__4131__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.event_only_QMARK_,more__61071__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frp.derived.behavior_only_QMARK_,more__61071__auto__);
}
};
var G__61131 = function (var_args){
var more__61071__auto__ = null;
if (arguments.length > 0) {
var G__61132__i = 0, G__61132__a = new Array(arguments.length -  0);
while (G__61132__i < G__61132__a.length) {G__61132__a[G__61132__i] = arguments[G__61132__i + 0]; ++G__61132__i;}
  more__61071__auto__ = new cljs.core.IndexedSeq(G__61132__a,0,null);
} 
return G__61131__delegate.call(this,more__61071__auto__);};
G__61131.cljs$lang$maxFixedArity = 0;
G__61131.cljs$lang$applyTo = (function (arglist__61133){
var more__61071__auto__ = cljs.core.seq(arglist__61133);
return G__61131__delegate(more__61071__auto__);
});
G__61131.cljs$core$IFn$_invoke$arity$variadic = G__61131__delegate;
return G__61131;
})()
;})(pred__61066,expr__61067))
;
var G__61070 = expr__61067;
return (pred__61066.cljs$core$IFn$_invoke$arity$2 ? pred__61066.cljs$core$IFn$_invoke$arity$2(G__61069,G__61070) : pred__61066.call(null,G__61069,G__61070));
})())){
return aid.core.lift_a;
} else {
return cljs.core.identity;
}
})();
return (fexpr__61065.cljs$core$IFn$_invoke$arity$1 ? fexpr__61065.cljs$core$IFn$_invoke$arity$1(f) : fexpr__61065.call(null,f));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var pred__61072 = aid.core.call_pred;
var expr__61073 = more;
if(cljs.core.truth_((pred__61072.cljs$core$IFn$_invoke$arity$2 ? pred__61072.cljs$core$IFn$_invoke$arity$2(frp.derived.event_only_QMARK_,expr__61073) : pred__61072.call(null,frp.derived.event_only_QMARK_,expr__61073)))){
return frp.derived.eventize;
} else {
if(cljs.core.truth_((pred__61072.cljs$core$IFn$_invoke$arity$2 ? pred__61072.cljs$core$IFn$_invoke$arity$2(frp.derived.behavior_only_QMARK_,expr__61073) : pred__61072.call(null,frp.derived.behavior_only_QMARK_,expr__61073)))){
return frp.derived.behaviorize;
} else {
return cljs.core.identity;
}
}
})(),more));
});

frp.derived.transparent_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
frp.derived.transparent_STAR_.cljs$lang$applyTo = (function (seq61057){
var G__61058 = cljs.core.first(seq61057);
var seq61057__$1 = cljs.core.next(seq61057);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61058,seq61057__$1);
});

frp.derived.accum = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frp.clojure.core.reduce,aid.core.flip(aid.core.funcall));
frp.derived.switcher = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.join,frp.primitives.behavior.stepper);
frp.derived.SECOND = (com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1((1)) : com.rpl.specter.nthpath.call(null,(1)));
frp.derived.set_non_action = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.FIRST,true);
frp.derived.sfirst = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second);
frp.derived.get_undo_redo = (function frp$derived$get_undo_redo(size,undo,redo,net){
var G__61077 = frp.derived.sfirst;
var G__61078 = (function (){var G__61079 = frp.clojure.core.filter(cljs.core.first,(function (){var G__61080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null);
var G__61081 = (function (){var G__61082 = aid.core._LT_$((function (){var G__61085 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frp.derived.multiton_QMARK_,cljs.core.second);
var G__61086 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(frp.derived.set_non_action,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,frp.derived.SECOND,cljs.core.rest),(function (){var G__61087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,com.rpl.specter.BEFORE_ELEM], null);
var G__61088 = frp.derived.sfirst;
return (aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2 ? aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2(G__61087,G__61088) : aid.core.transfer_STAR_.call(null,G__61087,G__61088));
})());
return (aid.core.if_then.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_then.cljs$core$IFn$_invoke$arity$2(G__61085,G__61086) : aid.core.if_then.call(null,G__61085,G__61086));
})(),undo);
var G__61083 = aid.core._LT_$((function (){var G__61089 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.last);
var G__61090 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(frp.derived.set_non_action,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,com.rpl.specter.LAST,cljs.core.rest),(function (){var G__61091 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frp.derived.SECOND,com.rpl.specter.BEFORE_ELEM], null);
var G__61092 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.last);
return (aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2 ? aid.core.transfer_STAR_.cljs$core$IFn$_invoke$arity$2(G__61091,G__61092) : aid.core.transfer_STAR_.call(null,G__61091,G__61092));
})());
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__61089,G__61090) : aid.core.if_else.call(null,G__61089,G__61090));
})(),redo);
var G__61084 = (function (){var G__61093 = ((function (G__61082,G__61083,G__61080,G__61077){
return (function (p1__61076_SHARP_){
var G__61095 = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(aid.core.funcall),new cljs.core.Keyword(null,"occs","occs",-482222641).cljs$core$IFn$_invoke$arity$1(p1__61076_SHARP_)),cljs.core.set,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,new cljs.core.Keyword(null,"occs","occs",-482222641)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.flatten,cljs.core.rest], 0));
var G__61096 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.FIRST,false),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.LAST,cljs.core.PersistentVector.EMPTY),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.transform_STAR_,frp.derived.SECOND,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(size + (1))),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.BEFORE_ELEM,p1__61076_SHARP_))));
return (aid.core.if_else.cljs$core$IFn$_invoke$arity$2 ? aid.core.if_else.cljs$core$IFn$_invoke$arity$2(G__61095,G__61096) : aid.core.if_else.call(null,G__61095,G__61096));
});})(G__61082,G__61083,G__61080,G__61077))
;
var G__61094 = net;
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__61093,G__61094) : cats.core._LT_$_GT_.call(null,G__61093,G__61094));
})();
return (cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$3 ? cats.core._LT__GT_.cljs$core$IFn$_invoke$arity$3(G__61082,G__61083,G__61084) : cats.core._LT__GT_.call(null,G__61082,G__61083,G__61084));
})();
return (frp.derived.accum.cljs$core$IFn$_invoke$arity$2 ? frp.derived.accum.cljs$core$IFn$_invoke$arity$2(G__61080,G__61081) : frp.derived.accum.call(null,G__61080,G__61081));
})());
return (frp.clojure.core.dedupe.cljs$core$IFn$_invoke$arity$1 ? frp.clojure.core.dedupe.cljs$core$IFn$_invoke$arity$1(G__61079) : frp.clojure.core.dedupe.call(null,G__61079));
})();
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__61077,G__61078) : cats.core._LT_$_GT_.call(null,G__61077,G__61078));
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

var G__61098 = cljs.core.deref(history);
return (net.cljs$core$IFn$_invoke$arity$1 ? net.cljs$core$IFn$_invoke$arity$1(G__61098) : net.call(null,G__61098));
});})(net,outer_result))
,inner_result);

frp.io.run(history,frp.derived.get_undo_redo(size,undo,redo,net));

var pred__61099 = aid.core.call_pred;
var expr__61100 = inner_result;
if(cljs.core.truth_((pred__61099.cljs$core$IFn$_invoke$arity$2 ? pred__61099.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,expr__61100) : pred__61099.call(null,frp.primitives.event.event_QMARK_,expr__61100)))){
return outer_result;
} else {
var G__61107 = frp.primitives.behavior.time;
var G__61108 = initial_result;
var G__61109 = frp.primitives.behavior.stepper(aid.unit.unit,outer_result);
var fexpr__61106 = aid.core.lift_a(((function (G__61107,G__61108,G__61109,pred__61099,expr__61100,net,outer_result){
return (function (t,initial_result_STAR_,outer_result_STAR_){
var pred__61110 = cljs.core._EQ_;
var expr__61111 = t;
if(cljs.core.truth_((pred__61110.cljs$core$IFn$_invoke$arity$2 ? pred__61110.cljs$core$IFn$_invoke$arity$2(frp.time.epoch,expr__61111) : pred__61110.call(null,frp.time.epoch,expr__61111)))){
return initial_result_STAR_;
} else {
return outer_result_STAR_;
}
});})(G__61107,G__61108,G__61109,pred__61099,expr__61100,net,outer_result))
);
return (fexpr__61106.cljs$core$IFn$_invoke$arity$3 ? fexpr__61106.cljs$core$IFn$_invoke$arity$3(G__61107,G__61108,G__61109) : fexpr__61106.call(null,G__61107,G__61108,G__61109));
}
});
frp.derived.get_binding = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (event_STAR_,action){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1 ? frp.derived.get_alias.cljs$core$IFn$_invoke$arity$1(action) : frp.derived.get_alias.call(null,action)),event_STAR_], null);
}));
frp.derived.get_bindings = (function frp$derived$get_bindings(event_STAR_,actions){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((frp.derived.get_binding.cljs$core$IFn$_invoke$arity$1 ? frp.derived.get_binding.cljs$core$IFn$_invoke$arity$1(event_STAR_) : frp.derived.get_binding.call(null,event_STAR_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actions], 0));
});

//# sourceMappingURL=frp.derived.js.map
