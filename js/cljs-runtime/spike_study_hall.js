goog.provide('spike_study_hall');
goog.require('cljs.core');
goog.require('aid.core');
goog.require('aid.unit');
goog.require('cats.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.interop');
goog.require('cljs_http.client');
goog.require('com.rpl.specter');
goog.require('frp.clojure.core');
goog.require('frp.core');
var module$node_modules$peerjs$dist$peerjs_min=shadow.js.require("module$node_modules$peerjs$dist$peerjs_min", {});
goog.require('reagent.dom');
goog.require('reagent.core');
spike_study_hall.peer = (new peerjs.Peer(({"host": "lit-spire-00768.herokuapp.com", "port": (80), "secure": true})));
spike_study_hall.main = (function spike_study_hall$main(){
return null;
});
spike_study_hall.stream = frp.derived.event();
spike_study_hall.streams = (frp.clojure.core.vector.cljs$core$IFn$_invoke$arity$1 ? frp.clojure.core.vector.cljs$core$IFn$_invoke$arity$1(spike_study_hall.stream) : frp.clojure.core.vector.call(null,spike_study_hall.stream));
spike_study_hall.video_component = (function spike_study_hall$video_component(stream_STAR_){
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(aid.unit.unit);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (ref){
return (function (){
return cljs.core.deref(ref).srcObject = stream_STAR_;
});})(ref))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (ref){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),true,new cljs.core.Keyword(null,"width","width",-384071477),(256),new cljs.core.Keyword(null,"ref","ref",1289896967),((function (ref){
return (function (p1__29654_SHARP_){
return cljs.core.reset_BANG_(ref,p1__29654_SHARP_);
});})(ref))
], null)], null);
});})(ref))
], null));
});
spike_study_hall.app_compoment = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.BEFORE_ELEM,new cljs.core.Keyword(null,"div","div",1057191632)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,spike_study_hall.video_component)));
spike_study_hall.app = (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(spike_study_hall.app_compoment,spike_study_hall.streams) : cats.core._LT_$_GT_.call(null,spike_study_hall.app_compoment,spike_study_hall.streams));
var G__29655_29704 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(reagent.dom.render),document.getElementById("app"));
var G__29656_29705 = spike_study_hall.app;
(frp.core.run.cljs$core$IFn$_invoke$arity$2 ? frp.core.run.cljs$core$IFn$_invoke$arity$2(G__29655_29704,G__29656_29705) : frp.core.run.call(null,G__29655_29704,G__29656_29705));
var activation__28687__auto___29706 = frp.primitives.event.activate_STAR_(frp.primitives.event.positive_infinity);
var G__29657_29707 = cljs.core.PersistentVector.fromArray(["com.rpl.specter","reagent.impl.util","shadow.cljs.devtools.client.console","cljs-time.internal.parse","cljs.core.async.impl.channels","reagent.impl.protocols","cljs.core.async.impl.dispatch","cats.builtin","cljs.tools.reader.impl.commons","cljs-http.core","frp.primitives.net","cljs.tools.reader.edn","cats.monad.exception","frp.primitives.behavior","cats.context","cljs.tools.reader","reagent.ratom","cljs-time.internal.unparse","reagent.core","cljs.core.async.interop","no.en.core","cljs.tools.reader.impl.errors","frp.helpers","cljs.core","loom.alg-generic","loom.alg","cljs-http.client","loom.graph","cljs.tools.reader.reader-types","frp.clojure.core","cljs-http.util","cljs.analyzer.api","cljs.env","cljs.core.async","reagent.impl.template","reagent.impl.batching","cljs.core.async.impl.buffers","cljs-time.core","cljs.core.async.impl.protocols","cats.protocols","cognitect.transit","tailrecursion.priority-map","frp.core","cljs.tools.reader.impl.inspect","clojure.set","spike-study-hall","reagent.impl.component","cats.core","cljs-time.coerce","com.rpl.specter.impl","cljs.tools.reader.impl.utils","cljs-time.internal.core","cljs.tagged-literals","loom.flow","com.rpl.specter.navs","cats.monad.maybe","aid.core","cats.util","frp.derived","frp.tuple","linked.set","cljs.analyzer","frp.io","frp.primitives.event","frp.time","reagent.impl.input","linked.map","reagent.debug","aid.unit","cljs.core.async.impl.ioc-helpers","cljs-time.format","clojure.string","frp.protocols","cljs.reader","clojure.walk","com.rpl.specter.protocols","cljs.core.async.impl.timers","linked.core","reagent.dom","cljs.user"], true);
(frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1(G__29657_29707) : frp.primitives.event.reload.call(null,G__29657_29707));

var c__22906__auto___29708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22906__auto___29708){
return (function (){
var f__22907__auto__ = (function (){var switch__22883__auto__ = ((function (c__22906__auto___29708){
return (function (state_29689){
var state_val_29690 = (state_29689[(1)]);
if((state_val_29690 === (1))){
var inst_29660 = navigator.mediaDevices.getDisplayMedia();
var inst_29661 = cljs.core.async.interop.p__GT_c(inst_29660);
var state_29689__$1 = state_29689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29689__$1,(2),inst_29661);
} else {
if((state_val_29690 === (2))){
var inst_29663 = (state_29689[(7)]);
var inst_29663__$1 = (state_29689[(2)]);
var inst_29664 = (inst_29663__$1 instanceof cljs.core.ExceptionInfo);
var inst_29665 = cljs.core.ex_data(inst_29663__$1);
var inst_29666 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29665);
var inst_29667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29666,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29668 = ((inst_29664) && (inst_29667));
var state_29689__$1 = (function (){var statearr_29691 = state_29689;
(statearr_29691[(7)] = inst_29663__$1);

return statearr_29691;
})();
if(cljs.core.truth_(inst_29668)){
var statearr_29692_29709 = state_29689__$1;
(statearr_29692_29709[(1)] = (3));

} else {
var statearr_29693_29710 = state_29689__$1;
(statearr_29693_29710[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (3))){
var inst_29663 = (state_29689[(7)]);
var inst_29670 = (function(){throw inst_29663})();
var state_29689__$1 = state_29689;
var statearr_29694_29711 = state_29689__$1;
(statearr_29694_29711[(2)] = inst_29670);

(statearr_29694_29711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (4))){
var inst_29663 = (state_29689[(7)]);
var state_29689__$1 = state_29689;
var statearr_29695_29712 = state_29689__$1;
(statearr_29695_29712[(2)] = inst_29663);

(statearr_29695_29712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (5))){
var inst_29673 = (state_29689[(8)]);
var inst_29673__$1 = (state_29689[(2)]);
var inst_29674 = (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(inst_29673__$1) : spike_study_hall.stream.call(null,inst_29673__$1));
var inst_29675 = (function (){var local_stream = inst_29673__$1;
return ((function (local_stream,inst_29673,inst_29673__$1,inst_29674,state_val_29690,c__22906__auto___29708){
return (function (id){
return spike_study_hall.peer.call(id,local_stream).on("stream",((function (local_stream,inst_29673,inst_29673__$1,inst_29674,state_val_29690,c__22906__auto___29708){
return (function (p1__29658_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__29658_SHARP_) : spike_study_hall.stream.call(null,p1__29658_SHARP_));
});})(local_stream,inst_29673,inst_29673__$1,inst_29674,state_val_29690,c__22906__auto___29708))
);
});
;})(local_stream,inst_29673,inst_29673__$1,inst_29674,state_val_29690,c__22906__auto___29708))
})();
var inst_29676 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,spike_study_hall.peer.id);
var inst_29677 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_29678 = [false];
var inst_29679 = cljs.core.PersistentHashMap.fromArrays(inst_29677,inst_29678);
var inst_29680 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://lit-spire-00768.herokuapp.com/peerjs/peers",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_29679], 0));
var state_29689__$1 = (function (){var statearr_29696 = state_29689;
(statearr_29696[(9)] = inst_29676);

(statearr_29696[(10)] = inst_29675);

(statearr_29696[(11)] = inst_29674);

(statearr_29696[(8)] = inst_29673__$1);

return statearr_29696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29689__$1,(6),inst_29680);
} else {
if((state_val_29690 === (6))){
var inst_29676 = (state_29689[(9)]);
var inst_29675 = (state_29689[(10)]);
var inst_29673 = (state_29689[(8)]);
var inst_29682 = (state_29689[(2)]);
var inst_29683 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29682);
var inst_29684 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_29676,inst_29683);
var inst_29685 = cljs.core.run_BANG_(inst_29675,inst_29684);
var inst_29686 = (function (){var local_stream = inst_29673;
return ((function (local_stream,inst_29676,inst_29675,inst_29673,inst_29682,inst_29683,inst_29684,inst_29685,state_val_29690,c__22906__auto___29708){
return (function (connection){
var G__29697 = connection;
G__29697.answer(local_stream);

G__29697.on("stream",((function (G__29697,local_stream,inst_29676,inst_29675,inst_29673,inst_29682,inst_29683,inst_29684,inst_29685,state_val_29690,c__22906__auto___29708){
return (function (p1__29659_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__29659_SHARP_) : spike_study_hall.stream.call(null,p1__29659_SHARP_));
});})(G__29697,local_stream,inst_29676,inst_29675,inst_29673,inst_29682,inst_29683,inst_29684,inst_29685,state_val_29690,c__22906__auto___29708))
);

return G__29697;
});
;})(local_stream,inst_29676,inst_29675,inst_29673,inst_29682,inst_29683,inst_29684,inst_29685,state_val_29690,c__22906__auto___29708))
})();
var inst_29687 = spike_study_hall.peer.on("call",inst_29686);
var state_29689__$1 = (function (){var statearr_29698 = state_29689;
(statearr_29698[(12)] = inst_29685);

return statearr_29698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29689__$1,inst_29687);
} else {
return null;
}
}
}
}
}
}
});})(c__22906__auto___29708))
;
return ((function (switch__22883__auto__,c__22906__auto___29708){
return (function() {
var spike_study_hall$state_machine__22884__auto__ = null;
var spike_study_hall$state_machine__22884__auto____0 = (function (){
var statearr_29699 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29699[(0)] = spike_study_hall$state_machine__22884__auto__);

(statearr_29699[(1)] = (1));

return statearr_29699;
});
var spike_study_hall$state_machine__22884__auto____1 = (function (state_29689){
while(true){
var ret_value__22885__auto__ = (function (){try{while(true){
var result__22886__auto__ = switch__22883__auto__(state_29689);
if(cljs.core.keyword_identical_QMARK_(result__22886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22886__auto__;
}
break;
}
}catch (e29700){var ex__22887__auto__ = e29700;
var statearr_29701_29713 = state_29689;
(statearr_29701_29713[(2)] = ex__22887__auto__);


if(cljs.core.seq((state_29689[(4)]))){
var statearr_29702_29714 = state_29689;
(statearr_29702_29714[(1)] = cljs.core.first((state_29689[(4)])));

} else {
throw ex__22887__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29715 = state_29689;
state_29689 = G__29715;
continue;
} else {
return ret_value__22885__auto__;
}
break;
}
});
spike_study_hall$state_machine__22884__auto__ = function(state_29689){
switch(arguments.length){
case 0:
return spike_study_hall$state_machine__22884__auto____0.call(this);
case 1:
return spike_study_hall$state_machine__22884__auto____1.call(this,state_29689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spike_study_hall$state_machine__22884__auto__.cljs$core$IFn$_invoke$arity$0 = spike_study_hall$state_machine__22884__auto____0;
spike_study_hall$state_machine__22884__auto__.cljs$core$IFn$_invoke$arity$1 = spike_study_hall$state_machine__22884__auto____1;
return spike_study_hall$state_machine__22884__auto__;
})()
;})(switch__22883__auto__,c__22906__auto___29708))
})();
var state__22908__auto__ = (function (){var statearr_29703 = (f__22907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22907__auto__.cljs$core$IFn$_invoke$arity$0() : f__22907__auto__.call(null));
(statearr_29703[(6)] = c__22906__auto___29708);

return statearr_29703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22908__auto__);
});})(c__22906__auto___29708))
);


//# sourceMappingURL=spike_study_hall.js.map
