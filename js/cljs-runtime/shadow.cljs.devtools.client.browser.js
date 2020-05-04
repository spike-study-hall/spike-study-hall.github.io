goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48572 = arguments.length;
var i__4731__auto___48573 = (0);
while(true){
if((i__4731__auto___48573 < len__4730__auto___48572)){
args__4736__auto__.push((arguments[i__4731__auto___48573]));

var G__48574 = (i__4731__auto___48573 + (1));
i__4731__auto___48573 = G__48574;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48244){
var G__48246 = cljs.core.first(seq48244);
var seq48244__$1 = cljs.core.next(seq48244);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48246,seq48244__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__48259){
var map__48270 = p__48259;
var map__48270__$1 = (((((!((map__48270 == null))))?(((((map__48270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48270):map__48270);
var src = map__48270__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48283 = cljs.core.seq(sources);
var chunk__48284 = null;
var count__48285 = (0);
var i__48286 = (0);
while(true){
if((i__48286 < count__48285)){
var map__48291 = chunk__48284.cljs$core$IIndexed$_nth$arity$2(null,i__48286);
var map__48291__$1 = (((((!((map__48291 == null))))?(((((map__48291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48291):map__48291);
var src = map__48291__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48291__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48291__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48291__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48291__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48583 = seq__48283;
var G__48584 = chunk__48284;
var G__48585 = count__48285;
var G__48586 = (i__48286 + (1));
seq__48283 = G__48583;
chunk__48284 = G__48584;
count__48285 = G__48585;
i__48286 = G__48586;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48283);
if(temp__5735__auto__){
var seq__48283__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48283__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48283__$1);
var G__48587 = cljs.core.chunk_rest(seq__48283__$1);
var G__48588 = c__4550__auto__;
var G__48589 = cljs.core.count(c__4550__auto__);
var G__48590 = (0);
seq__48283 = G__48587;
chunk__48284 = G__48588;
count__48285 = G__48589;
i__48286 = G__48590;
continue;
} else {
var map__48293 = cljs.core.first(seq__48283__$1);
var map__48293__$1 = (((((!((map__48293 == null))))?(((((map__48293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48293):map__48293);
var src = map__48293__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48293__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48293__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48293__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48293__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48595 = cljs.core.next(seq__48283__$1);
var G__48596 = null;
var G__48597 = (0);
var G__48598 = (0);
seq__48283 = G__48595;
chunk__48284 = G__48596;
count__48285 = G__48597;
i__48286 = G__48598;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48296 = cljs.core.seq(js_requires);
var chunk__48297 = null;
var count__48298 = (0);
var i__48299 = (0);
while(true){
if((i__48299 < count__48298)){
var js_ns = chunk__48297.cljs$core$IIndexed$_nth$arity$2(null,i__48299);
var require_str_48600 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48600);


var G__48601 = seq__48296;
var G__48602 = chunk__48297;
var G__48603 = count__48298;
var G__48604 = (i__48299 + (1));
seq__48296 = G__48601;
chunk__48297 = G__48602;
count__48298 = G__48603;
i__48299 = G__48604;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48296);
if(temp__5735__auto__){
var seq__48296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48296__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48296__$1);
var G__48605 = cljs.core.chunk_rest(seq__48296__$1);
var G__48606 = c__4550__auto__;
var G__48607 = cljs.core.count(c__4550__auto__);
var G__48608 = (0);
seq__48296 = G__48605;
chunk__48297 = G__48606;
count__48298 = G__48607;
i__48299 = G__48608;
continue;
} else {
var js_ns = cljs.core.first(seq__48296__$1);
var require_str_48609 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48609);


var G__48610 = cljs.core.next(seq__48296__$1);
var G__48611 = null;
var G__48612 = (0);
var G__48613 = (0);
seq__48296 = G__48610;
chunk__48297 = G__48611;
count__48298 = G__48612;
i__48299 = G__48613;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__48302 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__48302) : callback.call(null,G__48302));
} else {
var G__48307 = shadow.cljs.devtools.client.env.files_url();
var G__48308 = ((function (G__48307){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__48307))
;
var G__48309 = "POST";
var G__48310 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__48311 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__48307,G__48308,G__48309,G__48310,G__48311);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__48336){
var map__48337 = p__48336;
var map__48337__$1 = (((((!((map__48337 == null))))?(((((map__48337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48337):map__48337);
var msg = map__48337__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48337__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48337__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__48341 = info;
var map__48341__$1 = (((((!((map__48341 == null))))?(((((map__48341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48341):map__48341);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48341__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48341__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48343(s__48344){
return (new cljs.core.LazySeq(null,((function (map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info){
return (function (){
var s__48344__$1 = s__48344;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48344__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__48353 = cljs.core.first(xs__6292__auto__);
var map__48353__$1 = (((((!((map__48353 == null))))?(((((map__48353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48353):map__48353);
var src = map__48353__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__48344__$1,map__48353,map__48353__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48343_$_iter__48345(s__48346){
return (new cljs.core.LazySeq(null,((function (s__48344__$1,map__48353,map__48353__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info){
return (function (){
var s__48346__$1 = s__48346;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48346__$1);
if(temp__5735__auto____$1){
var s__48346__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48346__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48346__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48348 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48347 = (0);
while(true){
if((i__48347 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48347);
cljs.core.chunk_append(b__48348,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48614 = (i__48347 + (1));
i__48347 = G__48614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48348),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48343_$_iter__48345(cljs.core.chunk_rest(s__48346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48348),null);
}
} else {
var warning = cljs.core.first(s__48346__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48343_$_iter__48345(cljs.core.rest(s__48346__$2)));
}
} else {
return null;
}
break;
}
});})(s__48344__$1,map__48353,map__48353__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info))
,null,null));
});})(s__48344__$1,map__48353,map__48353__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48343(cljs.core.rest(s__48344__$1)));
} else {
var G__48615 = cljs.core.rest(s__48344__$1);
s__48344__$1 = G__48615;
continue;
}
} else {
var G__48616 = cljs.core.rest(s__48344__$1);
s__48344__$1 = G__48616;
continue;
}
} else {
return null;
}
break;
}
});})(map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info))
,null,null));
});})(map__48341,map__48341__$1,sources,compiled,map__48337,map__48337__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__48358_48617 = cljs.core.seq(warnings);
var chunk__48359_48618 = null;
var count__48360_48619 = (0);
var i__48361_48620 = (0);
while(true){
if((i__48361_48620 < count__48360_48619)){
var map__48367_48621 = chunk__48359_48618.cljs$core$IIndexed$_nth$arity$2(null,i__48361_48620);
var map__48367_48622__$1 = (((((!((map__48367_48621 == null))))?(((((map__48367_48621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48367_48621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48367_48621):map__48367_48621);
var w_48623 = map__48367_48622__$1;
var msg_48624__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48367_48622__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48367_48622__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48367_48622__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48367_48622__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48627)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48625),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48626),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48624__$1)].join(''));


var G__48628 = seq__48358_48617;
var G__48629 = chunk__48359_48618;
var G__48630 = count__48360_48619;
var G__48631 = (i__48361_48620 + (1));
seq__48358_48617 = G__48628;
chunk__48359_48618 = G__48629;
count__48360_48619 = G__48630;
i__48361_48620 = G__48631;
continue;
} else {
var temp__5735__auto___48632 = cljs.core.seq(seq__48358_48617);
if(temp__5735__auto___48632){
var seq__48358_48633__$1 = temp__5735__auto___48632;
if(cljs.core.chunked_seq_QMARK_(seq__48358_48633__$1)){
var c__4550__auto___48634 = cljs.core.chunk_first(seq__48358_48633__$1);
var G__48635 = cljs.core.chunk_rest(seq__48358_48633__$1);
var G__48636 = c__4550__auto___48634;
var G__48637 = cljs.core.count(c__4550__auto___48634);
var G__48638 = (0);
seq__48358_48617 = G__48635;
chunk__48359_48618 = G__48636;
count__48360_48619 = G__48637;
i__48361_48620 = G__48638;
continue;
} else {
var map__48373_48639 = cljs.core.first(seq__48358_48633__$1);
var map__48373_48640__$1 = (((((!((map__48373_48639 == null))))?(((((map__48373_48639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48373_48639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48373_48639):map__48373_48639);
var w_48641 = map__48373_48640__$1;
var msg_48642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48373_48640__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48373_48640__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48373_48640__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48373_48640__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48645)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48643),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48644),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48642__$1)].join(''));


var G__48646 = cljs.core.next(seq__48358_48633__$1);
var G__48647 = null;
var G__48648 = (0);
var G__48649 = (0);
seq__48358_48617 = G__48646;
chunk__48359_48618 = G__48647;
count__48360_48619 = G__48648;
i__48361_48620 = G__48649;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info){
return (function (p__48377){
var map__48378 = p__48377;
var map__48378__$1 = (((((!((map__48378 == null))))?(((((map__48378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48378):map__48378);
var src = map__48378__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48378__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48378__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info){
return (function (p__48383){
var map__48384 = p__48383;
var map__48384__$1 = (((((!((map__48384 == null))))?(((((map__48384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48384):map__48384);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48384__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info){
return (function (p__48386){
var map__48391 = p__48386;
var map__48391__$1 = (((((!((map__48391 == null))))?(((((map__48391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48391):map__48391);
var rc = map__48391__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48391__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info){
return (function (p1__48329_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48329_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__48341,map__48341__$1,sources,compiled,warnings,map__48337,map__48337__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__48431){
var map__48434 = p__48431;
var map__48434__$1 = (((((!((map__48434 == null))))?(((((map__48434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48434):map__48434);
var msg = map__48434__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48434__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48440 = cljs.core.seq(updates);
var chunk__48442 = null;
var count__48443 = (0);
var i__48444 = (0);
while(true){
if((i__48444 < count__48443)){
var path = chunk__48442.cljs$core$IIndexed$_nth$arity$2(null,i__48444);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48507_48659 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48510_48660 = null;
var count__48511_48661 = (0);
var i__48512_48662 = (0);
while(true){
if((i__48512_48662 < count__48511_48661)){
var node_48663 = chunk__48510_48660.cljs$core$IIndexed$_nth$arity$2(null,i__48512_48662);
var path_match_48664 = shadow.cljs.devtools.client.browser.match_paths(node_48663.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48664)){
var new_link_48665 = (function (){var G__48521 = node_48663.cloneNode(true);
G__48521.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48664),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48521;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48664], 0));

goog.dom.insertSiblingAfter(new_link_48665,node_48663);

goog.dom.removeNode(node_48663);


var G__48666 = seq__48507_48659;
var G__48667 = chunk__48510_48660;
var G__48668 = count__48511_48661;
var G__48669 = (i__48512_48662 + (1));
seq__48507_48659 = G__48666;
chunk__48510_48660 = G__48667;
count__48511_48661 = G__48668;
i__48512_48662 = G__48669;
continue;
} else {
var G__48672 = seq__48507_48659;
var G__48673 = chunk__48510_48660;
var G__48674 = count__48511_48661;
var G__48675 = (i__48512_48662 + (1));
seq__48507_48659 = G__48672;
chunk__48510_48660 = G__48673;
count__48511_48661 = G__48674;
i__48512_48662 = G__48675;
continue;
}
} else {
var temp__5735__auto___48677 = cljs.core.seq(seq__48507_48659);
if(temp__5735__auto___48677){
var seq__48507_48678__$1 = temp__5735__auto___48677;
if(cljs.core.chunked_seq_QMARK_(seq__48507_48678__$1)){
var c__4550__auto___48679 = cljs.core.chunk_first(seq__48507_48678__$1);
var G__48680 = cljs.core.chunk_rest(seq__48507_48678__$1);
var G__48681 = c__4550__auto___48679;
var G__48682 = cljs.core.count(c__4550__auto___48679);
var G__48683 = (0);
seq__48507_48659 = G__48680;
chunk__48510_48660 = G__48681;
count__48511_48661 = G__48682;
i__48512_48662 = G__48683;
continue;
} else {
var node_48684 = cljs.core.first(seq__48507_48678__$1);
var path_match_48685 = shadow.cljs.devtools.client.browser.match_paths(node_48684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48685)){
var new_link_48686 = (function (){var G__48522 = node_48684.cloneNode(true);
G__48522.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48685),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48522;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48685], 0));

goog.dom.insertSiblingAfter(new_link_48686,node_48684);

goog.dom.removeNode(node_48684);


var G__48689 = cljs.core.next(seq__48507_48678__$1);
var G__48690 = null;
var G__48691 = (0);
var G__48692 = (0);
seq__48507_48659 = G__48689;
chunk__48510_48660 = G__48690;
count__48511_48661 = G__48691;
i__48512_48662 = G__48692;
continue;
} else {
var G__48693 = cljs.core.next(seq__48507_48678__$1);
var G__48694 = null;
var G__48695 = (0);
var G__48696 = (0);
seq__48507_48659 = G__48693;
chunk__48510_48660 = G__48694;
count__48511_48661 = G__48695;
i__48512_48662 = G__48696;
continue;
}
}
} else {
}
}
break;
}


var G__48697 = seq__48440;
var G__48698 = chunk__48442;
var G__48699 = count__48443;
var G__48700 = (i__48444 + (1));
seq__48440 = G__48697;
chunk__48442 = G__48698;
count__48443 = G__48699;
i__48444 = G__48700;
continue;
} else {
var G__48701 = seq__48440;
var G__48702 = chunk__48442;
var G__48703 = count__48443;
var G__48704 = (i__48444 + (1));
seq__48440 = G__48701;
chunk__48442 = G__48702;
count__48443 = G__48703;
i__48444 = G__48704;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48440);
if(temp__5735__auto__){
var seq__48440__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48440__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48440__$1);
var G__48705 = cljs.core.chunk_rest(seq__48440__$1);
var G__48706 = c__4550__auto__;
var G__48707 = cljs.core.count(c__4550__auto__);
var G__48708 = (0);
seq__48440 = G__48705;
chunk__48442 = G__48706;
count__48443 = G__48707;
i__48444 = G__48708;
continue;
} else {
var path = cljs.core.first(seq__48440__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48529_48709 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48532_48710 = null;
var count__48533_48711 = (0);
var i__48534_48712 = (0);
while(true){
if((i__48534_48712 < count__48533_48711)){
var node_48713 = chunk__48532_48710.cljs$core$IIndexed$_nth$arity$2(null,i__48534_48712);
var path_match_48714 = shadow.cljs.devtools.client.browser.match_paths(node_48713.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48714)){
var new_link_48715 = (function (){var G__48540 = node_48713.cloneNode(true);
G__48540.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48714),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48540;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48714], 0));

goog.dom.insertSiblingAfter(new_link_48715,node_48713);

goog.dom.removeNode(node_48713);


var G__48716 = seq__48529_48709;
var G__48717 = chunk__48532_48710;
var G__48718 = count__48533_48711;
var G__48719 = (i__48534_48712 + (1));
seq__48529_48709 = G__48716;
chunk__48532_48710 = G__48717;
count__48533_48711 = G__48718;
i__48534_48712 = G__48719;
continue;
} else {
var G__48720 = seq__48529_48709;
var G__48721 = chunk__48532_48710;
var G__48722 = count__48533_48711;
var G__48723 = (i__48534_48712 + (1));
seq__48529_48709 = G__48720;
chunk__48532_48710 = G__48721;
count__48533_48711 = G__48722;
i__48534_48712 = G__48723;
continue;
}
} else {
var temp__5735__auto___48724__$1 = cljs.core.seq(seq__48529_48709);
if(temp__5735__auto___48724__$1){
var seq__48529_48725__$1 = temp__5735__auto___48724__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48529_48725__$1)){
var c__4550__auto___48726 = cljs.core.chunk_first(seq__48529_48725__$1);
var G__48727 = cljs.core.chunk_rest(seq__48529_48725__$1);
var G__48728 = c__4550__auto___48726;
var G__48729 = cljs.core.count(c__4550__auto___48726);
var G__48730 = (0);
seq__48529_48709 = G__48727;
chunk__48532_48710 = G__48728;
count__48533_48711 = G__48729;
i__48534_48712 = G__48730;
continue;
} else {
var node_48731 = cljs.core.first(seq__48529_48725__$1);
var path_match_48732 = shadow.cljs.devtools.client.browser.match_paths(node_48731.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48732)){
var new_link_48733 = (function (){var G__48541 = node_48731.cloneNode(true);
G__48541.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48732),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48541;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48732], 0));

goog.dom.insertSiblingAfter(new_link_48733,node_48731);

goog.dom.removeNode(node_48731);


var G__48734 = cljs.core.next(seq__48529_48725__$1);
var G__48735 = null;
var G__48736 = (0);
var G__48737 = (0);
seq__48529_48709 = G__48734;
chunk__48532_48710 = G__48735;
count__48533_48711 = G__48736;
i__48534_48712 = G__48737;
continue;
} else {
var G__48738 = cljs.core.next(seq__48529_48725__$1);
var G__48739 = null;
var G__48740 = (0);
var G__48741 = (0);
seq__48529_48709 = G__48738;
chunk__48532_48710 = G__48739;
count__48533_48711 = G__48740;
i__48534_48712 = G__48741;
continue;
}
}
} else {
}
}
break;
}


var G__48742 = cljs.core.next(seq__48440__$1);
var G__48743 = null;
var G__48744 = (0);
var G__48745 = (0);
seq__48440 = G__48742;
chunk__48442 = G__48743;
count__48443 = G__48744;
i__48444 = G__48745;
continue;
} else {
var G__48746 = cljs.core.next(seq__48440__$1);
var G__48747 = null;
var G__48748 = (0);
var G__48749 = (0);
seq__48440 = G__48746;
chunk__48442 = G__48747;
count__48443 = G__48748;
i__48444 = G__48749;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__48542){
var map__48543 = p__48542;
var map__48543__$1 = (((((!((map__48543 == null))))?(((((map__48543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48543):map__48543);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48543__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__48543,map__48543__$1,id,js){
return (function (){
return eval(js);
});})(map__48543,map__48543__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__48545){
var map__48546 = p__48545;
var map__48546__$1 = (((((!((map__48546 == null))))?(((((map__48546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48546):map__48546);
var msg = map__48546__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48546__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48546__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48546__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48546__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__48546,map__48546__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__48548){
var map__48549 = p__48548;
var map__48549__$1 = (((((!((map__48549 == null))))?(((((map__48549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48549):map__48549);
var src = map__48549__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48549__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__48546,map__48546__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__48546,map__48546__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__48546,map__48546__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__48551){
var map__48552 = p__48551;
var map__48552__$1 = (((((!((map__48552 == null))))?(((((map__48552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48552):map__48552);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48552__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__48552,map__48552__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__48552,map__48552__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__48556){
var map__48557 = p__48556;
var map__48557__$1 = (((((!((map__48557 == null))))?(((((map__48557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48557):map__48557);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__48559){
var map__48560 = p__48559;
var map__48560__$1 = (((((!((map__48560 == null))))?(((((map__48560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48560):map__48560);
var msg = map__48560__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__48562 = type;
var G__48562__$1 = (((G__48562 instanceof cljs.core.Keyword))?G__48562.fqn:null);
switch (G__48562__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__48563 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__48564 = ((function (G__48563){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__48563))
;
var G__48565 = "POST";
var G__48566 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__48567 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__48563,G__48564,G__48565,G__48566,G__48567);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e48568){var e = e48568;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___48751 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___48751)){
var s_48752 = temp__5735__auto___48751;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_48752.onclose = ((function (s_48752,temp__5735__auto___48751){
return (function (e){
return null;
});})(s_48752,temp__5735__auto___48751))
;

s_48752.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
