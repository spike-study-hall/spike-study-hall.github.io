goog.provide('aid.core');
goog.require('cljs.core');
goog.require('cats.context');
goog.require('cats.core');
goog.require('cats.monad.exception');
goog.require('cats.monad.maybe');
goog.require('com.rpl.specter');
goog.require('aid.unit');
aid.core.call_pred = (function aid$core$call_pred(var_args){
var G__57562 = arguments.length;
switch (G__57562) {
case 1:
return aid.core.call_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return aid.core.call_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

aid.core.call_pred.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
});

aid.core.call_pred.cljs$core$IFn$_invoke$arity$2 = (function (pred,expr){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(expr) : pred.call(null,expr));
});

aid.core.call_pred.cljs$lang$maxFixedArity = 2;

aid.core.funcall = (function aid$core$funcall(var_args){
var G__57572 = arguments.length;
switch (G__57572) {
case 1:
return aid.core.funcall.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___57637 = arguments.length;
var i__4731__auto___57638 = (0);
while(true){
if((i__4731__auto___57638 < len__4730__auto___57637)){
args_arr__4751__auto__.push((arguments[i__4731__auto___57638]));

var G__57639 = (i__4731__auto___57638 + (1));
i__4731__auto___57638 = G__57639;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return aid.core.funcall.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

aid.core.funcall.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});

aid.core.funcall.cljs$core$IFn$_invoke$arity$variadic = (function (f,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,more);
});

/** @this {Function} */
aid.core.funcall.cljs$lang$applyTo = (function (seq57570){
var G__57571 = cljs.core.first(seq57570);
var seq57570__$1 = cljs.core.next(seq57570);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57571,seq57570__$1);
});

aid.core.funcall.cljs$lang$maxFixedArity = (1);

aid.core.curry = (function aid$core$curry(var_args){
var G__57577 = arguments.length;
switch (G__57577) {
case 2:
return aid.core.curry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___57650 = arguments.length;
var i__4731__auto___57651 = (0);
while(true){
if((i__4731__auto___57651 < len__4730__auto___57650)){
args_arr__4751__auto__.push((arguments[i__4731__auto___57651]));

var G__57652 = (i__4731__auto___57651 + (1));
i__4731__auto___57651 = G__57652;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return aid.core.curry.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

aid.core.curry.cljs$core$IFn$_invoke$arity$2 = (function (arity,f){
return (function() { 
var G__57653__delegate = function (outer_more){
var n = cljs.core.count(outer_more);
var pred__57578 = cljs.core._EQ_;
var expr__57579 = arity;
if(cljs.core.truth_((pred__57578.cljs$core$IFn$_invoke$arity$2 ? pred__57578.cljs$core$IFn$_invoke$arity$2(n,expr__57579) : pred__57578.call(null,n,expr__57579)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,outer_more);
} else {
return aid.core.curry.cljs$core$IFn$_invoke$arity$2((arity - n),((function (pred__57578,expr__57579,n){
return (function() { 
var G__57657__delegate = function (inner_more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(outer_more,inner_more));
};
var G__57657 = function (var_args){
var inner_more = null;
if (arguments.length > 0) {
var G__57658__i = 0, G__57658__a = new Array(arguments.length -  0);
while (G__57658__i < G__57658__a.length) {G__57658__a[G__57658__i] = arguments[G__57658__i + 0]; ++G__57658__i;}
  inner_more = new cljs.core.IndexedSeq(G__57658__a,0,null);
} 
return G__57657__delegate.call(this,inner_more);};
G__57657.cljs$lang$maxFixedArity = 0;
G__57657.cljs$lang$applyTo = (function (arglist__57659){
var inner_more = cljs.core.seq(arglist__57659);
return G__57657__delegate(inner_more);
});
G__57657.cljs$core$IFn$_invoke$arity$variadic = G__57657__delegate;
return G__57657;
})()
;})(pred__57578,expr__57579,n))
);
}
};
var G__57653 = function (var_args){
var outer_more = null;
if (arguments.length > 0) {
var G__57660__i = 0, G__57660__a = new Array(arguments.length -  0);
while (G__57660__i < G__57660__a.length) {G__57660__a[G__57660__i] = arguments[G__57660__i + 0]; ++G__57660__i;}
  outer_more = new cljs.core.IndexedSeq(G__57660__a,0,null);
} 
return G__57653__delegate.call(this,outer_more);};
G__57653.cljs$lang$maxFixedArity = 0;
G__57653.cljs$lang$applyTo = (function (arglist__57661){
var outer_more = cljs.core.seq(arglist__57661);
return G__57653__delegate(outer_more);
});
G__57653.cljs$core$IFn$_invoke$arity$variadic = G__57653__delegate;
return G__57653;
})()
;
});

aid.core.curry.cljs$core$IFn$_invoke$arity$variadic = (function (arity,f,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(aid.core.curry.cljs$core$IFn$_invoke$arity$2(arity,f),more);
});

/** @this {Function} */
aid.core.curry.cljs$lang$applyTo = (function (seq57574){
var G__57575 = cljs.core.first(seq57574);
var seq57574__$1 = cljs.core.next(seq57574);
var G__57576 = cljs.core.first(seq57574__$1);
var seq57574__$2 = cljs.core.next(seq57574__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57575,G__57576,seq57574__$2);
});

aid.core.curry.cljs$lang$maxFixedArity = (2);

aid.core.flip = (function aid$core$flip(f){
return (function() {
var G__57662 = null;
var G__57662__1 = (function (x){
return (function() { 
var G__57663__delegate = function (y,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,y,x,more);
};
var G__57663 = function (y,var_args){
var more = null;
if (arguments.length > 1) {
var G__57664__i = 0, G__57664__a = new Array(arguments.length -  1);
while (G__57664__i < G__57664__a.length) {G__57664__a[G__57664__i] = arguments[G__57664__i + 1]; ++G__57664__i;}
  more = new cljs.core.IndexedSeq(G__57664__a,0,null);
} 
return G__57663__delegate.call(this,y,more);};
G__57663.cljs$lang$maxFixedArity = 1;
G__57663.cljs$lang$applyTo = (function (arglist__57665){
var y = cljs.core.first(arglist__57665);
var more = cljs.core.rest(arglist__57665);
return G__57663__delegate(y,more);
});
G__57663.cljs$core$IFn$_invoke$arity$variadic = G__57663__delegate;
return G__57663;
})()
;
});
var G__57662__3 = (function() { 
var G__57666__delegate = function (x,y,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,y,x,more);
};
var G__57666 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__57667__i = 0, G__57667__a = new Array(arguments.length -  2);
while (G__57667__i < G__57667__a.length) {G__57667__a[G__57667__i] = arguments[G__57667__i + 2]; ++G__57667__i;}
  more = new cljs.core.IndexedSeq(G__57667__a,0,null);
} 
return G__57666__delegate.call(this,x,y,more);};
G__57666.cljs$lang$maxFixedArity = 2;
G__57666.cljs$lang$applyTo = (function (arglist__57668){
var x = cljs.core.first(arglist__57668);
arglist__57668 = cljs.core.next(arglist__57668);
var y = cljs.core.first(arglist__57668);
var more = cljs.core.rest(arglist__57668);
return G__57666__delegate(x,y,more);
});
G__57666.cljs$core$IFn$_invoke$arity$variadic = G__57666__delegate;
return G__57666;
})()
;
G__57662 = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return G__57662__1.call(this,x);
default:
var G__57669 = null;
if (arguments.length > 2) {
var G__57670__i = 0, G__57670__a = new Array(arguments.length -  2);
while (G__57670__i < G__57670__a.length) {G__57670__a[G__57670__i] = arguments[G__57670__i + 2]; ++G__57670__i;}
G__57669 = new cljs.core.IndexedSeq(G__57670__a,0,null);
}
return G__57662__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__57669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57662.cljs$lang$maxFixedArity = 2;
G__57662.cljs$lang$applyTo = G__57662__3.cljs$lang$applyTo;
G__57662.cljs$core$IFn$_invoke$arity$1 = G__57662__1;
G__57662.cljs$core$IFn$_invoke$arity$variadic = G__57662__3.cljs$core$IFn$_invoke$arity$variadic;
return G__57662;
})()
});
aid.core.nop = cljs.core.constantly(aid.unit.unit);
aid.core._LT_$ = (function aid$core$_LT_$(a,fa){
var G__57605 = cljs.core.constantly(a);
var G__57606 = fa;
return (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(G__57605,G__57606) : cats.core._LT_$_GT_.call(null,G__57605,G__57606));
});
aid.core.lift_a = (function aid$core$lift_a(f){
return (function() { 
var G__57671__delegate = function (more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cats.core._LT__STAR__GT_,cats.core.pure.cljs$core$IFn$_invoke$arity$2(cats.context.infer.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)),aid.core.curry.cljs$core$IFn$_invoke$arity$2(cljs.core.count(more),f)),more);
};
var G__57671 = function (var_args){
var more = null;
if (arguments.length > 0) {
var G__57672__i = 0, G__57672__a = new Array(arguments.length -  0);
while (G__57672__i < G__57672__a.length) {G__57672__a[G__57672__i] = arguments[G__57672__i + 0]; ++G__57672__i;}
  more = new cljs.core.IndexedSeq(G__57672__a,0,null);
} 
return G__57671__delegate.call(this,more);};
G__57671.cljs$lang$maxFixedArity = 0;
G__57671.cljs$lang$applyTo = (function (arglist__57673){
var more = cljs.core.seq(arglist__57673);
return G__57671__delegate(more);
});
G__57671.cljs$core$IFn$_invoke$arity$variadic = G__57671__delegate;
return G__57671;
})()
;
});
aid.core.ap = (function aid$core$ap(m1,m2){
return cats.core.bind(m1,(function (x1){
return cats.core.bind(m2,(function (x2){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1((x1.cljs$core$IFn$_invoke$arity$1 ? x1.cljs$core$IFn$_invoke$arity$1(x2) : x1.call(null,x2)));
}));
}));
});
aid.core.nothing = cats.monad.maybe.nothing();
aid.core.maybe_STAR_ = (function aid$core$maybe_STAR_(expr){
var pred__57612 = aid.core.call_pred;
var expr__57613 = expr;
if(cljs.core.truth_((pred__57612.cljs$core$IFn$_invoke$arity$2 ? pred__57612.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,expr__57613) : pred__57612.call(null,cljs.core.nil_QMARK_,expr__57613)))){
return aid.core.nothing;
} else {
return cats.monad.maybe.just(expr);
}
});
aid.core.if_then_else = aid.core.curry.cljs$core$IFn$_invoke$arity$2(4,(function (if_function,then_function,else_function,x){
var fexpr__57618 = (function() { 
var G__57674__delegate = function (more__57619__auto__){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(if_function,more__57619__auto__))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(then_function,more__57619__auto__);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(else_function,more__57619__auto__);
}
};
var G__57674 = function (var_args){
var more__57619__auto__ = null;
if (arguments.length > 0) {
var G__57675__i = 0, G__57675__a = new Array(arguments.length -  0);
while (G__57675__i < G__57675__a.length) {G__57675__a[G__57675__i] = arguments[G__57675__i + 0]; ++G__57675__i;}
  more__57619__auto__ = new cljs.core.IndexedSeq(G__57675__a,0,null);
} 
return G__57674__delegate.call(this,more__57619__auto__);};
G__57674.cljs$lang$maxFixedArity = 0;
G__57674.cljs$lang$applyTo = (function (arglist__57676){
var more__57619__auto__ = cljs.core.seq(arglist__57676);
return G__57674__delegate(more__57619__auto__);
});
G__57674.cljs$core$IFn$_invoke$arity$variadic = G__57674__delegate;
return G__57674;
})()
;
return fexpr__57618.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}));
aid.core.if_then = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (if_function,then_function,else$){
return (aid.core.if_then_else.cljs$core$IFn$_invoke$arity$4 ? aid.core.if_then_else.cljs$core$IFn$_invoke$arity$4(if_function,then_function,cljs.core.identity,else$) : aid.core.if_then_else.call(null,if_function,then_function,cljs.core.identity,else$));
}));
aid.core.if_else = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (if_function,else_function,then){
return (aid.core.if_then_else.cljs$core$IFn$_invoke$arity$4 ? aid.core.if_then_else.cljs$core$IFn$_invoke$arity$4(if_function,cljs.core.identity,else_function,then) : aid.core.if_then_else.call(null,if_function,cljs.core.identity,else_function,then));
}));
aid.core.transfer_STAR_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (apath,f,m){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53851__auto__ = aid.core.pathcache57629;
var info__53851__auto____$1 = (((info__53851__auto__ == null))?(function (){var info57630 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(apath,new cljs.core.Symbol(null,"apath","apath",567854908,null))], null),"aid.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null)], null));
aid.core.pathcache57629 = info57630;

return info57630;
})():info__53851__auto__);
var precompiled57631 = com.rpl.specter.impl.cached_path_info_precompiled(info__53851__auto____$1);
var dynamic_QMARK___53852__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53851__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53852__auto__)){
var G__57633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [apath], null);
return (precompiled57631.cljs$core$IFn$_invoke$arity$1 ? precompiled57631.cljs$core$IFn$_invoke$arity$1(G__57633) : precompiled57631.call(null,G__57633));
} else {
return precompiled57631;
}
})(),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m)),m);
}));

//# sourceMappingURL=aid.core.js.map
