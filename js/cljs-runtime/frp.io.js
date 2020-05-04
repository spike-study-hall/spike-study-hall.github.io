goog.provide('frp.io');
goog.require('cljs.core');
goog.require('aid.core');
goog.require('com.rpl.specter');
goog.require('frp.primitives.behavior');
goog.require('frp.primitives.event');
goog.require('frp.primitives.net');
goog.require('frp.tuple');
frp.io.run_event_effect_BANG_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (f_BANG_,e,net){
return cljs.core.run_BANG_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f_BANG_,frp.tuple.snd),frp.primitives.event.get_latests(new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(e),net));
}));
frp.io.get_net_value = aid.core.curry.cljs$core$IFn$_invoke$arity$2(2,(function (b,net){
return frp.primitives.behavior.get_value(b,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(net),net);
}));
frp.io.memoize_one = (function frp$io$memoize_one(f_BANG_){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (state){
return (function() { 
var G__56611__delegate = function (more){
var pred__56591 = cljs.core._EQ_;
var expr__56592 = more;
if(cljs.core.truth_((function (){var G__56594 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var G__56595 = expr__56592;
return (pred__56591.cljs$core$IFn$_invoke$arity$2 ? pred__56591.cljs$core$IFn$_invoke$arity$2(G__56594,G__56595) : pred__56591.call(null,G__56594,G__56595));
})())){
return new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
} else {
var G__56596 = ((function (pred__56591,expr__56592,state){
return (function (p1__56590_SHARP_){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arguments","arguments",-1182834456),more,new cljs.core.Keyword(null,"return","return",-1891502105),p1__56590_SHARP_], null));
});})(pred__56591,expr__56592,state))
;
var G__56597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f_BANG_,more);
return (frp.primitives.event.effect.cljs$core$IFn$_invoke$arity$2 ? frp.primitives.event.effect.cljs$core$IFn$_invoke$arity$2(G__56596,G__56597) : frp.primitives.event.effect.call(null,G__56596,G__56597));
}
};
var G__56611 = function (var_args){
var more = null;
if (arguments.length > 0) {
var G__56612__i = 0, G__56612__a = new Array(arguments.length -  0);
while (G__56612__i < G__56612__a.length) {G__56612__a[G__56612__i] = arguments[G__56612__i + 0]; ++G__56612__i;}
  more = new cljs.core.IndexedSeq(G__56612__a,0,null);
} 
return G__56611__delegate.call(this,more);};
G__56611.cljs$lang$maxFixedArity = 0;
G__56611.cljs$lang$applyTo = (function (arglist__56613){
var more = cljs.core.seq(arglist__56613);
return G__56611__delegate(more);
});
G__56611.cljs$core$IFn$_invoke$arity$variadic = G__56611__delegate;
return G__56611;
})()
;
;})(state))
});
frp.io.run_behavior_effect_BANG_ = aid.core.curry.cljs$core$IFn$_invoke$arity$2(3,(function (f_BANG_,b,net){
var G__56598 = (frp.io.get_net_value.cljs$core$IFn$_invoke$arity$2 ? frp.io.get_net_value.cljs$core$IFn$_invoke$arity$2(b,net) : frp.io.get_net_value.call(null,b,net));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__56598) : f_BANG_.call(null,G__56598));
}));
frp.io.run_STAR_ = (function frp$io$run_STAR_(effect_id,f_BANG_,x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frp.primitives.net.universe_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"effect","effect",347343289),effect_id], null),(function (){var fexpr__56603 = (function (){var pred__56604 = aid.core.call_pred;
var expr__56605 = x;
if(cljs.core.truth_((pred__56604.cljs$core$IFn$_invoke$arity$2 ? pred__56604.cljs$core$IFn$_invoke$arity$2(frp.primitives.event.event_QMARK_,expr__56605) : pred__56604.call(null,frp.primitives.event.event_QMARK_,expr__56605)))){
return (frp.io.run_event_effect_BANG_.cljs$core$IFn$_invoke$arity$1 ? frp.io.run_event_effect_BANG_.cljs$core$IFn$_invoke$arity$1(f_BANG_) : frp.io.run_event_effect_BANG_.call(null,f_BANG_));
} else {
var G__56607 = frp.io.memoize_one(f_BANG_);
return (frp.io.run_behavior_effect_BANG_.cljs$core$IFn$_invoke$arity$1 ? frp.io.run_behavior_effect_BANG_.cljs$core$IFn$_invoke$arity$1(G__56607) : frp.io.run_behavior_effect_BANG_.call(null,G__56607));
}
})();
return (fexpr__56603.cljs$core$IFn$_invoke$arity$1 ? fexpr__56603.cljs$core$IFn$_invoke$arity$1(x) : fexpr__56603.call(null,x));
})()));
});
frp.io.run = (function frp$io$run(f_BANG_,x){
return frp.io.run_STAR_((function (){var G__56608 = new cljs.core.Keyword(null,"effect","effect",347343289).cljs$core$IFn$_invoke$arity$1((function (){var G__56610 = cljs.core.deref(frp.primitives.net.universe_state);
var fexpr__56609 = new cljs.core.Keyword(null,"net-id","net-id",418155108).cljs$core$IFn$_invoke$arity$1(x);
return (fexpr__56609.cljs$core$IFn$_invoke$arity$1 ? fexpr__56609.cljs$core$IFn$_invoke$arity$1(G__56610) : fexpr__56609.call(null,G__56610));
})());
return (frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.net.get_id.cljs$core$IFn$_invoke$arity$1(G__56608) : frp.primitives.net.get_id.call(null,G__56608));
})(),f_BANG_,x);
});

//# sourceMappingURL=frp.io.js.map
