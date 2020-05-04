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
return (function (p1__60633_SHARP_){
return cljs.core.reset_BANG_(ref,p1__60633_SHARP_);
});})(ref))
], null)], null);
});})(ref))
], null));
});
spike_study_hall.app_compoment = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.BEFORE_ELEM,new cljs.core.Keyword(null,"div","div",1057191632)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,spike_study_hall.video_component)));
spike_study_hall.app = (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(spike_study_hall.app_compoment,spike_study_hall.streams) : cats.core._LT_$_GT_.call(null,spike_study_hall.app_compoment,spike_study_hall.streams));
var G__60634_60683 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(reagent.dom.render),document.getElementById("app"));
var G__60635_60684 = spike_study_hall.app;
(frp.core.run.cljs$core$IFn$_invoke$arity$2 ? frp.core.run.cljs$core$IFn$_invoke$arity$2(G__60634_60683,G__60635_60684) : frp.core.run.call(null,G__60634_60683,G__60635_60684));
var activation__47786__auto___60685 = frp.primitives.event.activate_STAR_(frp.primitives.event.positive_infinity);
var G__60636_60686 = cljs.core.PersistentVector.fromArray(["com.rpl.specter","shadow.animate","reagent.impl.util","shadow.cljs.devtools.client.console","cljs-time.internal.parse","cljs.core.async.impl.channels","reagent.impl.protocols","cljs.core.async.impl.dispatch","cats.builtin","shadow.object","cljs.tools.reader.impl.commons","cljs-http.core","shadow.util","frp.primitives.net","cljs.tools.reader.edn","shadow.xhr","cats.monad.exception","frp.primitives.behavior","cats.context","cljs.tools.reader","reagent.ratom","cljs-time.internal.unparse","reagent.core","cljs.core.async.interop","no.en.core","cljs.tools.reader.impl.errors","frp.helpers","cljs.core","loom.alg-generic","loom.alg","cljs-http.client","loom.graph","cljs.tools.reader.reader-types","frp.clojure.core","cljs-http.util","cljs.analyzer.api","cljs.env","shadow.dom","cljs.core.async","reagent.impl.template","reagent.impl.batching","cljs.core.async.impl.buffers","cljs-time.core","cljs.core.async.impl.protocols","cats.protocols","shadow.cljs.devtools.client.browser","cognitect.transit","tailrecursion.priority-map","frp.core","cljs.tools.reader.impl.inspect","clojure.set","spike-study-hall","reagent.impl.component","cats.core","cljs.pprint","shadow.cljs.devtools.client.env","cljs-time.coerce","com.rpl.specter.impl","cljs.tools.reader.impl.utils","cljs-time.internal.core","cljs.tagged-literals","loom.flow","com.rpl.specter.navs","cats.monad.maybe","aid.core","cats.util","frp.derived","frp.tuple","linked.set","cljs.analyzer","frp.io","frp.primitives.event","frp.time","reagent.impl.input","linked.map","reagent.debug","cljs.repl","aid.unit","cljs.core.async.impl.ioc-helpers","cljs-time.format","clojure.string","cljs.spec.alpha","frp.protocols","clojure.data","cljs.reader","clojure.walk","com.rpl.specter.protocols","cljs.core.async.impl.timers","shadow.cljs.devtools.client.hud","linked.core","reagent.dom","cljs.spec.gen.alpha","cljs.user"], true);
(frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1(G__60636_60686) : frp.primitives.event.reload.call(null,G__60636_60686));

var c__38105__auto___60687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38105__auto___60687){
return (function (){
var f__38106__auto__ = (function (){var switch__38082__auto__ = ((function (c__38105__auto___60687){
return (function (state_60668){
var state_val_60669 = (state_60668[(1)]);
if((state_val_60669 === (1))){
var inst_60639 = navigator.mediaDevices.getDisplayMedia();
var inst_60640 = cljs.core.async.interop.p__GT_c(inst_60639);
var state_60668__$1 = state_60668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60668__$1,(2),inst_60640);
} else {
if((state_val_60669 === (2))){
var inst_60642 = (state_60668[(7)]);
var inst_60642__$1 = (state_60668[(2)]);
var inst_60643 = (inst_60642__$1 instanceof cljs.core.ExceptionInfo);
var inst_60644 = cljs.core.ex_data(inst_60642__$1);
var inst_60645 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_60644);
var inst_60646 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60645,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_60647 = ((inst_60643) && (inst_60646));
var state_60668__$1 = (function (){var statearr_60670 = state_60668;
(statearr_60670[(7)] = inst_60642__$1);

return statearr_60670;
})();
if(cljs.core.truth_(inst_60647)){
var statearr_60671_60688 = state_60668__$1;
(statearr_60671_60688[(1)] = (3));

} else {
var statearr_60672_60689 = state_60668__$1;
(statearr_60672_60689[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60669 === (3))){
var inst_60642 = (state_60668[(7)]);
var inst_60649 = (function(){throw inst_60642})();
var state_60668__$1 = state_60668;
var statearr_60673_60690 = state_60668__$1;
(statearr_60673_60690[(2)] = inst_60649);

(statearr_60673_60690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60669 === (4))){
var inst_60642 = (state_60668[(7)]);
var state_60668__$1 = state_60668;
var statearr_60674_60691 = state_60668__$1;
(statearr_60674_60691[(2)] = inst_60642);

(statearr_60674_60691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60669 === (5))){
var inst_60652 = (state_60668[(8)]);
var inst_60652__$1 = (state_60668[(2)]);
var inst_60653 = (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(inst_60652__$1) : spike_study_hall.stream.call(null,inst_60652__$1));
var inst_60654 = (function (){var local_stream = inst_60652__$1;
return ((function (local_stream,inst_60652,inst_60652__$1,inst_60653,state_val_60669,c__38105__auto___60687){
return (function (id){
return spike_study_hall.peer.call(id,local_stream).on("stream",((function (local_stream,inst_60652,inst_60652__$1,inst_60653,state_val_60669,c__38105__auto___60687){
return (function (p1__60637_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__60637_SHARP_) : spike_study_hall.stream.call(null,p1__60637_SHARP_));
});})(local_stream,inst_60652,inst_60652__$1,inst_60653,state_val_60669,c__38105__auto___60687))
);
});
;})(local_stream,inst_60652,inst_60652__$1,inst_60653,state_val_60669,c__38105__auto___60687))
})();
var inst_60655 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,spike_study_hall.peer.id);
var inst_60656 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60657 = [false];
var inst_60658 = cljs.core.PersistentHashMap.fromArrays(inst_60656,inst_60657);
var inst_60659 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://lit-spire-00768.herokuapp.com/peerjs/peers",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60658], 0));
var state_60668__$1 = (function (){var statearr_60675 = state_60668;
(statearr_60675[(9)] = inst_60654);

(statearr_60675[(10)] = inst_60655);

(statearr_60675[(8)] = inst_60652__$1);

(statearr_60675[(11)] = inst_60653);

return statearr_60675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60668__$1,(6),inst_60659);
} else {
if((state_val_60669 === (6))){
var inst_60654 = (state_60668[(9)]);
var inst_60655 = (state_60668[(10)]);
var inst_60652 = (state_60668[(8)]);
var inst_60661 = (state_60668[(2)]);
var inst_60662 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_60661);
var inst_60663 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_60655,inst_60662);
var inst_60664 = cljs.core.run_BANG_(inst_60654,inst_60663);
var inst_60665 = (function (){var local_stream = inst_60652;
return ((function (local_stream,inst_60654,inst_60655,inst_60652,inst_60661,inst_60662,inst_60663,inst_60664,state_val_60669,c__38105__auto___60687){
return (function (connection){
var G__60676 = connection;
G__60676.answer(local_stream);

G__60676.on("stream",((function (G__60676,local_stream,inst_60654,inst_60655,inst_60652,inst_60661,inst_60662,inst_60663,inst_60664,state_val_60669,c__38105__auto___60687){
return (function (p1__60638_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__60638_SHARP_) : spike_study_hall.stream.call(null,p1__60638_SHARP_));
});})(G__60676,local_stream,inst_60654,inst_60655,inst_60652,inst_60661,inst_60662,inst_60663,inst_60664,state_val_60669,c__38105__auto___60687))
);

return G__60676;
});
;})(local_stream,inst_60654,inst_60655,inst_60652,inst_60661,inst_60662,inst_60663,inst_60664,state_val_60669,c__38105__auto___60687))
})();
var inst_60666 = spike_study_hall.peer.on("call",inst_60665);
var state_60668__$1 = (function (){var statearr_60677 = state_60668;
(statearr_60677[(12)] = inst_60664);

return statearr_60677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60668__$1,inst_60666);
} else {
return null;
}
}
}
}
}
}
});})(c__38105__auto___60687))
;
return ((function (switch__38082__auto__,c__38105__auto___60687){
return (function() {
var spike_study_hall$state_machine__38083__auto__ = null;
var spike_study_hall$state_machine__38083__auto____0 = (function (){
var statearr_60678 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60678[(0)] = spike_study_hall$state_machine__38083__auto__);

(statearr_60678[(1)] = (1));

return statearr_60678;
});
var spike_study_hall$state_machine__38083__auto____1 = (function (state_60668){
while(true){
var ret_value__38084__auto__ = (function (){try{while(true){
var result__38085__auto__ = switch__38082__auto__(state_60668);
if(cljs.core.keyword_identical_QMARK_(result__38085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38085__auto__;
}
break;
}
}catch (e60679){var ex__38086__auto__ = e60679;
var statearr_60680_60692 = state_60668;
(statearr_60680_60692[(2)] = ex__38086__auto__);


if(cljs.core.seq((state_60668[(4)]))){
var statearr_60681_60693 = state_60668;
(statearr_60681_60693[(1)] = cljs.core.first((state_60668[(4)])));

} else {
throw ex__38086__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60694 = state_60668;
state_60668 = G__60694;
continue;
} else {
return ret_value__38084__auto__;
}
break;
}
});
spike_study_hall$state_machine__38083__auto__ = function(state_60668){
switch(arguments.length){
case 0:
return spike_study_hall$state_machine__38083__auto____0.call(this);
case 1:
return spike_study_hall$state_machine__38083__auto____1.call(this,state_60668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spike_study_hall$state_machine__38083__auto__.cljs$core$IFn$_invoke$arity$0 = spike_study_hall$state_machine__38083__auto____0;
spike_study_hall$state_machine__38083__auto__.cljs$core$IFn$_invoke$arity$1 = spike_study_hall$state_machine__38083__auto____1;
return spike_study_hall$state_machine__38083__auto__;
})()
;})(switch__38082__auto__,c__38105__auto___60687))
})();
var state__38107__auto__ = (function (){var statearr_60682 = (f__38106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38106__auto__.cljs$core$IFn$_invoke$arity$0() : f__38106__auto__.call(null));
(statearr_60682[(6)] = c__38105__auto___60687);

return statearr_60682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38107__auto__);
});})(c__38105__auto___60687))
);


//# sourceMappingURL=spike_study_hall.js.map
