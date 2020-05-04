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
spike_study_hall.peer = (new peerjs.Peer(({"host": "lit-spire-00768.herokuapp.com", "port": (80)})));
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
return (function (p1__56692_SHARP_){
return cljs.core.reset_BANG_(ref,p1__56692_SHARP_);
});})(ref))
], null)], null);
});})(ref))
], null));
});
spike_study_hall.app_compoment = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.BEFORE_ELEM,new cljs.core.Keyword(null,"div","div",1057191632)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,spike_study_hall.video_component)));
spike_study_hall.app = (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(spike_study_hall.app_compoment,spike_study_hall.streams) : cats.core._LT_$_GT_.call(null,spike_study_hall.app_compoment,spike_study_hall.streams));
var G__56693_56741 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(reagent.dom.render),document.getElementById("app"));
var G__56694_56742 = spike_study_hall.app;
(frp.core.run.cljs$core$IFn$_invoke$arity$2 ? frp.core.run.cljs$core$IFn$_invoke$arity$2(G__56693_56741,G__56694_56742) : frp.core.run.call(null,G__56693_56741,G__56694_56742));
var activation__47786__auto___56743 = frp.primitives.event.activate_STAR_(frp.primitives.event.positive_infinity);
var G__56695_56744 = cljs.core.PersistentVector.fromArray(["com.rpl.specter","shadow.animate","reagent.impl.util","shadow.cljs.devtools.client.console","cljs-time.internal.parse","cljs.core.async.impl.channels","reagent.impl.protocols","cljs.core.async.impl.dispatch","cats.builtin","shadow.object","cljs.tools.reader.impl.commons","cljs-http.core","shadow.util","frp.primitives.net","cljs.tools.reader.edn","shadow.xhr","cats.monad.exception","frp.primitives.behavior","cats.context","cljs.tools.reader","reagent.ratom","cljs-time.internal.unparse","reagent.core","cljs.core.async.interop","no.en.core","cljs.tools.reader.impl.errors","frp.helpers","cljs.core","loom.alg-generic","loom.alg","cljs-http.client","loom.graph","cljs.tools.reader.reader-types","frp.clojure.core","cljs-http.util","cljs.analyzer.api","cljs.env","shadow.dom","cljs.core.async","reagent.impl.template","reagent.impl.batching","cljs.core.async.impl.buffers","cljs-time.core","cljs.core.async.impl.protocols","cats.protocols","shadow.cljs.devtools.client.browser","cognitect.transit","tailrecursion.priority-map","frp.core","cljs.tools.reader.impl.inspect","clojure.set","spike-study-hall","reagent.impl.component","cats.core","cljs.pprint","shadow.cljs.devtools.client.env","cljs-time.coerce","com.rpl.specter.impl","cljs.tools.reader.impl.utils","cljs-time.internal.core","cljs.tagged-literals","loom.flow","com.rpl.specter.navs","cats.monad.maybe","aid.core","cats.util","frp.derived","frp.tuple","linked.set","cljs.analyzer","frp.io","frp.primitives.event","frp.time","reagent.impl.input","linked.map","reagent.debug","cljs.repl","aid.unit","cljs.core.async.impl.ioc-helpers","cljs-time.format","clojure.string","cljs.spec.alpha","frp.protocols","clojure.data","cljs.reader","clojure.walk","com.rpl.specter.protocols","cljs.core.async.impl.timers","shadow.cljs.devtools.client.hud","linked.core","reagent.dom","cljs.spec.gen.alpha","cljs.user"], true);
(frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1(G__56695_56744) : frp.primitives.event.reload.call(null,G__56695_56744));

var c__38105__auto___56745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38105__auto___56745){
return (function (){
var f__38106__auto__ = (function (){var switch__38082__auto__ = ((function (c__38105__auto___56745){
return (function (state_56727){
var state_val_56728 = (state_56727[(1)]);
if((state_val_56728 === (1))){
var inst_56698 = navigator.mediaDevices.getDisplayMedia();
var inst_56699 = cljs.core.async.interop.p__GT_c(inst_56698);
var state_56727__$1 = state_56727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56727__$1,(2),inst_56699);
} else {
if((state_val_56728 === (2))){
var inst_56701 = (state_56727[(7)]);
var inst_56701__$1 = (state_56727[(2)]);
var inst_56702 = (inst_56701__$1 instanceof cljs.core.ExceptionInfo);
var inst_56703 = cljs.core.ex_data(inst_56701__$1);
var inst_56704 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56703);
var inst_56705 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56704,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56706 = ((inst_56702) && (inst_56705));
var state_56727__$1 = (function (){var statearr_56729 = state_56727;
(statearr_56729[(7)] = inst_56701__$1);

return statearr_56729;
})();
if(cljs.core.truth_(inst_56706)){
var statearr_56730_56746 = state_56727__$1;
(statearr_56730_56746[(1)] = (3));

} else {
var statearr_56731_56747 = state_56727__$1;
(statearr_56731_56747[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56728 === (3))){
var inst_56701 = (state_56727[(7)]);
var inst_56708 = (function(){throw inst_56701})();
var state_56727__$1 = state_56727;
var statearr_56732_56748 = state_56727__$1;
(statearr_56732_56748[(2)] = inst_56708);

(statearr_56732_56748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56728 === (4))){
var inst_56701 = (state_56727[(7)]);
var state_56727__$1 = state_56727;
var statearr_56733_56749 = state_56727__$1;
(statearr_56733_56749[(2)] = inst_56701);

(statearr_56733_56749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56728 === (5))){
var inst_56711 = (state_56727[(8)]);
var inst_56711__$1 = (state_56727[(2)]);
var inst_56712 = (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(inst_56711__$1) : spike_study_hall.stream.call(null,inst_56711__$1));
var inst_56713 = (function (){var local_stream = inst_56711__$1;
return ((function (local_stream,inst_56711,inst_56711__$1,inst_56712,state_val_56728,c__38105__auto___56745){
return (function (id){
return spike_study_hall.peer.call(id,local_stream).on("stream",((function (local_stream,inst_56711,inst_56711__$1,inst_56712,state_val_56728,c__38105__auto___56745){
return (function (p1__56696_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__56696_SHARP_) : spike_study_hall.stream.call(null,p1__56696_SHARP_));
});})(local_stream,inst_56711,inst_56711__$1,inst_56712,state_val_56728,c__38105__auto___56745))
);
});
;})(local_stream,inst_56711,inst_56711__$1,inst_56712,state_val_56728,c__38105__auto___56745))
})();
var inst_56714 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,spike_study_hall.peer.id);
var inst_56715 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_56716 = [false];
var inst_56717 = cljs.core.PersistentHashMap.fromArrays(inst_56715,inst_56716);
var inst_56718 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://lit-spire-00768.herokuapp.com/peerjs/peers",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56717], 0));
var state_56727__$1 = (function (){var statearr_56734 = state_56727;
(statearr_56734[(9)] = inst_56712);

(statearr_56734[(10)] = inst_56713);

(statearr_56734[(8)] = inst_56711__$1);

(statearr_56734[(11)] = inst_56714);

return statearr_56734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56727__$1,(6),inst_56718);
} else {
if((state_val_56728 === (6))){
var inst_56713 = (state_56727[(10)]);
var inst_56711 = (state_56727[(8)]);
var inst_56714 = (state_56727[(11)]);
var inst_56720 = (state_56727[(2)]);
var inst_56721 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_56720);
var inst_56722 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_56714,inst_56721);
var inst_56723 = cljs.core.run_BANG_(inst_56713,inst_56722);
var inst_56724 = (function (){var local_stream = inst_56711;
return ((function (local_stream,inst_56713,inst_56711,inst_56714,inst_56720,inst_56721,inst_56722,inst_56723,state_val_56728,c__38105__auto___56745){
return (function (connection){
return connection.answer(local_stream).on("stream",((function (local_stream,inst_56713,inst_56711,inst_56714,inst_56720,inst_56721,inst_56722,inst_56723,state_val_56728,c__38105__auto___56745){
return (function (p1__56697_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__56697_SHARP_) : spike_study_hall.stream.call(null,p1__56697_SHARP_));
});})(local_stream,inst_56713,inst_56711,inst_56714,inst_56720,inst_56721,inst_56722,inst_56723,state_val_56728,c__38105__auto___56745))
);
});
;})(local_stream,inst_56713,inst_56711,inst_56714,inst_56720,inst_56721,inst_56722,inst_56723,state_val_56728,c__38105__auto___56745))
})();
var inst_56725 = spike_study_hall.peer.on("call",inst_56724);
var state_56727__$1 = (function (){var statearr_56735 = state_56727;
(statearr_56735[(12)] = inst_56723);

return statearr_56735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56727__$1,inst_56725);
} else {
return null;
}
}
}
}
}
}
});})(c__38105__auto___56745))
;
return ((function (switch__38082__auto__,c__38105__auto___56745){
return (function() {
var spike_study_hall$state_machine__38083__auto__ = null;
var spike_study_hall$state_machine__38083__auto____0 = (function (){
var statearr_56736 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56736[(0)] = spike_study_hall$state_machine__38083__auto__);

(statearr_56736[(1)] = (1));

return statearr_56736;
});
var spike_study_hall$state_machine__38083__auto____1 = (function (state_56727){
while(true){
var ret_value__38084__auto__ = (function (){try{while(true){
var result__38085__auto__ = switch__38082__auto__(state_56727);
if(cljs.core.keyword_identical_QMARK_(result__38085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38085__auto__;
}
break;
}
}catch (e56737){var ex__38086__auto__ = e56737;
var statearr_56738_56750 = state_56727;
(statearr_56738_56750[(2)] = ex__38086__auto__);


if(cljs.core.seq((state_56727[(4)]))){
var statearr_56739_56751 = state_56727;
(statearr_56739_56751[(1)] = cljs.core.first((state_56727[(4)])));

} else {
throw ex__38086__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56752 = state_56727;
state_56727 = G__56752;
continue;
} else {
return ret_value__38084__auto__;
}
break;
}
});
spike_study_hall$state_machine__38083__auto__ = function(state_56727){
switch(arguments.length){
case 0:
return spike_study_hall$state_machine__38083__auto____0.call(this);
case 1:
return spike_study_hall$state_machine__38083__auto____1.call(this,state_56727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spike_study_hall$state_machine__38083__auto__.cljs$core$IFn$_invoke$arity$0 = spike_study_hall$state_machine__38083__auto____0;
spike_study_hall$state_machine__38083__auto__.cljs$core$IFn$_invoke$arity$1 = spike_study_hall$state_machine__38083__auto____1;
return spike_study_hall$state_machine__38083__auto__;
})()
;})(switch__38082__auto__,c__38105__auto___56745))
})();
var state__38107__auto__ = (function (){var statearr_56740 = (f__38106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38106__auto__.cljs$core$IFn$_invoke$arity$0() : f__38106__auto__.call(null));
(statearr_56740[(6)] = c__38105__auto___56745);

return statearr_56740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38107__auto__);
});})(c__38105__auto___56745))
);


//# sourceMappingURL=spike_study_hall.js.map
