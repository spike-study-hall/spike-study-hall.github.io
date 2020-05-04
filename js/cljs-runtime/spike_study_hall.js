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
spike_study_hall.peer = (new peerjs.Peer(({"host": "lit-spire-00768.herokuapp.com", "debug": true, "port": (80)})));
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
return (function (p1__60132_SHARP_){
return cljs.core.reset_BANG_(ref,p1__60132_SHARP_);
});})(ref))
], null)], null);
});})(ref))
], null));
});
spike_study_hall.app_compoment = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.setval_STAR_,com.rpl.specter.BEFORE_ELEM,new cljs.core.Keyword(null,"div","div",1057191632)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,spike_study_hall.video_component)));
spike_study_hall.app = (cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 ? cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2(spike_study_hall.app_compoment,spike_study_hall.streams) : cats.core._LT_$_GT_.call(null,spike_study_hall.app_compoment,spike_study_hall.streams));
var G__60133_60182 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aid.core.flip(reagent.dom.render),document.getElementById("app"));
var G__60134_60183 = spike_study_hall.app;
(frp.core.run.cljs$core$IFn$_invoke$arity$2 ? frp.core.run.cljs$core$IFn$_invoke$arity$2(G__60133_60182,G__60134_60183) : frp.core.run.call(null,G__60133_60182,G__60134_60183));
var activation__47786__auto___60184 = frp.primitives.event.activate_STAR_(frp.primitives.event.positive_infinity);
var G__60135_60185 = cljs.core.PersistentVector.fromArray(["com.rpl.specter","shadow.animate","reagent.impl.util","shadow.cljs.devtools.client.console","cljs-time.internal.parse","cljs.core.async.impl.channels","reagent.impl.protocols","cljs.core.async.impl.dispatch","cats.builtin","shadow.object","cljs.tools.reader.impl.commons","cljs-http.core","shadow.util","frp.primitives.net","cljs.tools.reader.edn","shadow.xhr","cats.monad.exception","frp.primitives.behavior","cats.context","cljs.tools.reader","reagent.ratom","cljs-time.internal.unparse","reagent.core","cljs.core.async.interop","no.en.core","cljs.tools.reader.impl.errors","frp.helpers","cljs.core","loom.alg-generic","loom.alg","cljs-http.client","loom.graph","cljs.tools.reader.reader-types","frp.clojure.core","cljs-http.util","cljs.analyzer.api","cljs.env","shadow.dom","cljs.core.async","reagent.impl.template","reagent.impl.batching","cljs.core.async.impl.buffers","cljs-time.core","cljs.core.async.impl.protocols","cats.protocols","shadow.cljs.devtools.client.browser","cognitect.transit","tailrecursion.priority-map","frp.core","cljs.tools.reader.impl.inspect","clojure.set","spike-study-hall","reagent.impl.component","cats.core","cljs.pprint","shadow.cljs.devtools.client.env","cljs-time.coerce","com.rpl.specter.impl","cljs.tools.reader.impl.utils","cljs-time.internal.core","cljs.tagged-literals","loom.flow","com.rpl.specter.navs","cats.monad.maybe","aid.core","cats.util","frp.derived","frp.tuple","linked.set","cljs.analyzer","frp.io","frp.primitives.event","frp.time","reagent.impl.input","linked.map","reagent.debug","cljs.repl","aid.unit","cljs.core.async.impl.ioc-helpers","cljs-time.format","clojure.string","cljs.spec.alpha","frp.protocols","clojure.data","cljs.reader","clojure.walk","com.rpl.specter.protocols","cljs.core.async.impl.timers","shadow.cljs.devtools.client.hud","linked.core","reagent.dom","cljs.spec.gen.alpha","cljs.user"], true);
(frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1 ? frp.primitives.event.reload.cljs$core$IFn$_invoke$arity$1(G__60135_60185) : frp.primitives.event.reload.call(null,G__60135_60185));

var c__38105__auto___60186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38105__auto___60186){
return (function (){
var f__38106__auto__ = (function (){var switch__38082__auto__ = ((function (c__38105__auto___60186){
return (function (state_60167){
var state_val_60168 = (state_60167[(1)]);
if((state_val_60168 === (1))){
var inst_60138 = navigator.mediaDevices.getDisplayMedia();
var inst_60139 = cljs.core.async.interop.p__GT_c(inst_60138);
var state_60167__$1 = state_60167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60167__$1,(2),inst_60139);
} else {
if((state_val_60168 === (2))){
var inst_60141 = (state_60167[(7)]);
var inst_60141__$1 = (state_60167[(2)]);
var inst_60142 = (inst_60141__$1 instanceof cljs.core.ExceptionInfo);
var inst_60143 = cljs.core.ex_data(inst_60141__$1);
var inst_60144 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_60143);
var inst_60145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60144,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_60146 = ((inst_60142) && (inst_60145));
var state_60167__$1 = (function (){var statearr_60169 = state_60167;
(statearr_60169[(7)] = inst_60141__$1);

return statearr_60169;
})();
if(cljs.core.truth_(inst_60146)){
var statearr_60170_60187 = state_60167__$1;
(statearr_60170_60187[(1)] = (3));

} else {
var statearr_60171_60188 = state_60167__$1;
(statearr_60171_60188[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (3))){
var inst_60141 = (state_60167[(7)]);
var inst_60148 = (function(){throw inst_60141})();
var state_60167__$1 = state_60167;
var statearr_60172_60189 = state_60167__$1;
(statearr_60172_60189[(2)] = inst_60148);

(statearr_60172_60189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (4))){
var inst_60141 = (state_60167[(7)]);
var state_60167__$1 = state_60167;
var statearr_60173_60190 = state_60167__$1;
(statearr_60173_60190[(2)] = inst_60141);

(statearr_60173_60190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (5))){
var inst_60151 = (state_60167[(8)]);
var inst_60151__$1 = (state_60167[(2)]);
var inst_60152 = (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(inst_60151__$1) : spike_study_hall.stream.call(null,inst_60151__$1));
var inst_60153 = (function (){var local_stream = inst_60151__$1;
return ((function (local_stream,inst_60151,inst_60151__$1,inst_60152,state_val_60168,c__38105__auto___60186){
return (function (id){
return spike_study_hall.peer.call(id,local_stream).on("stream",((function (local_stream,inst_60151,inst_60151__$1,inst_60152,state_val_60168,c__38105__auto___60186){
return (function (p1__60136_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__60136_SHARP_) : spike_study_hall.stream.call(null,p1__60136_SHARP_));
});})(local_stream,inst_60151,inst_60151__$1,inst_60152,state_val_60168,c__38105__auto___60186))
);
});
;})(local_stream,inst_60151,inst_60151__$1,inst_60152,state_val_60168,c__38105__auto___60186))
})();
var inst_60154 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,spike_study_hall.peer.id);
var inst_60155 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60156 = [false];
var inst_60157 = cljs.core.PersistentHashMap.fromArrays(inst_60155,inst_60156);
var inst_60158 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://lit-spire-00768.herokuapp.com/peerjs/peers",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60157], 0));
var state_60167__$1 = (function (){var statearr_60174 = state_60167;
(statearr_60174[(9)] = inst_60153);

(statearr_60174[(10)] = inst_60154);

(statearr_60174[(11)] = inst_60152);

(statearr_60174[(8)] = inst_60151__$1);

return statearr_60174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60167__$1,(6),inst_60158);
} else {
if((state_val_60168 === (6))){
var inst_60153 = (state_60167[(9)]);
var inst_60154 = (state_60167[(10)]);
var inst_60151 = (state_60167[(8)]);
var inst_60160 = (state_60167[(2)]);
var inst_60161 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_60160);
var inst_60162 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_60154,inst_60161);
var inst_60163 = cljs.core.run_BANG_(inst_60153,inst_60162);
var inst_60164 = (function (){var local_stream = inst_60151;
return ((function (local_stream,inst_60153,inst_60154,inst_60151,inst_60160,inst_60161,inst_60162,inst_60163,state_val_60168,c__38105__auto___60186){
return (function (connection){
var G__60175 = connection;
G__60175.answer(local_stream);

G__60175.on("stream",((function (G__60175,local_stream,inst_60153,inst_60154,inst_60151,inst_60160,inst_60161,inst_60162,inst_60163,state_val_60168,c__38105__auto___60186){
return (function (p1__60137_SHARP_){
return (spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1 ? spike_study_hall.stream.cljs$core$IFn$_invoke$arity$1(p1__60137_SHARP_) : spike_study_hall.stream.call(null,p1__60137_SHARP_));
});})(G__60175,local_stream,inst_60153,inst_60154,inst_60151,inst_60160,inst_60161,inst_60162,inst_60163,state_val_60168,c__38105__auto___60186))
);

return G__60175;
});
;})(local_stream,inst_60153,inst_60154,inst_60151,inst_60160,inst_60161,inst_60162,inst_60163,state_val_60168,c__38105__auto___60186))
})();
var inst_60165 = spike_study_hall.peer.on("call",inst_60164);
var state_60167__$1 = (function (){var statearr_60176 = state_60167;
(statearr_60176[(12)] = inst_60163);

return statearr_60176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60167__$1,inst_60165);
} else {
return null;
}
}
}
}
}
}
});})(c__38105__auto___60186))
;
return ((function (switch__38082__auto__,c__38105__auto___60186){
return (function() {
var spike_study_hall$state_machine__38083__auto__ = null;
var spike_study_hall$state_machine__38083__auto____0 = (function (){
var statearr_60177 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60177[(0)] = spike_study_hall$state_machine__38083__auto__);

(statearr_60177[(1)] = (1));

return statearr_60177;
});
var spike_study_hall$state_machine__38083__auto____1 = (function (state_60167){
while(true){
var ret_value__38084__auto__ = (function (){try{while(true){
var result__38085__auto__ = switch__38082__auto__(state_60167);
if(cljs.core.keyword_identical_QMARK_(result__38085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38085__auto__;
}
break;
}
}catch (e60178){var ex__38086__auto__ = e60178;
var statearr_60179_60191 = state_60167;
(statearr_60179_60191[(2)] = ex__38086__auto__);


if(cljs.core.seq((state_60167[(4)]))){
var statearr_60180_60192 = state_60167;
(statearr_60180_60192[(1)] = cljs.core.first((state_60167[(4)])));

} else {
throw ex__38086__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60193 = state_60167;
state_60167 = G__60193;
continue;
} else {
return ret_value__38084__auto__;
}
break;
}
});
spike_study_hall$state_machine__38083__auto__ = function(state_60167){
switch(arguments.length){
case 0:
return spike_study_hall$state_machine__38083__auto____0.call(this);
case 1:
return spike_study_hall$state_machine__38083__auto____1.call(this,state_60167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spike_study_hall$state_machine__38083__auto__.cljs$core$IFn$_invoke$arity$0 = spike_study_hall$state_machine__38083__auto____0;
spike_study_hall$state_machine__38083__auto__.cljs$core$IFn$_invoke$arity$1 = spike_study_hall$state_machine__38083__auto____1;
return spike_study_hall$state_machine__38083__auto__;
})()
;})(switch__38082__auto__,c__38105__auto___60186))
})();
var state__38107__auto__ = (function (){var statearr_60181 = (f__38106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38106__auto__.cljs$core$IFn$_invoke$arity$0() : f__38106__auto__.call(null));
(statearr_60181[(6)] = c__38105__auto___60186);

return statearr_60181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38107__auto__);
});})(c__38105__auto___60186))
);


//# sourceMappingURL=spike_study_hall.js.map
