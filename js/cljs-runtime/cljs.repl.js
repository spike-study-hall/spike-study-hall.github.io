goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40048){
var map__40049 = p__40048;
var map__40049__$1 = (((((!((map__40049 == null))))?(((((map__40049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40049):map__40049);
var m = map__40049__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40049__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40051_40200 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40052_40201 = null;
var count__40053_40202 = (0);
var i__40054_40203 = (0);
while(true){
if((i__40054_40203 < count__40053_40202)){
var f_40204 = chunk__40052_40201.cljs$core$IIndexed$_nth$arity$2(null,i__40054_40203);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40204], 0));


var G__40205 = seq__40051_40200;
var G__40206 = chunk__40052_40201;
var G__40207 = count__40053_40202;
var G__40208 = (i__40054_40203 + (1));
seq__40051_40200 = G__40205;
chunk__40052_40201 = G__40206;
count__40053_40202 = G__40207;
i__40054_40203 = G__40208;
continue;
} else {
var temp__5735__auto___40209 = cljs.core.seq(seq__40051_40200);
if(temp__5735__auto___40209){
var seq__40051_40210__$1 = temp__5735__auto___40209;
if(cljs.core.chunked_seq_QMARK_(seq__40051_40210__$1)){
var c__4550__auto___40211 = cljs.core.chunk_first(seq__40051_40210__$1);
var G__40212 = cljs.core.chunk_rest(seq__40051_40210__$1);
var G__40213 = c__4550__auto___40211;
var G__40214 = cljs.core.count(c__4550__auto___40211);
var G__40215 = (0);
seq__40051_40200 = G__40212;
chunk__40052_40201 = G__40213;
count__40053_40202 = G__40214;
i__40054_40203 = G__40215;
continue;
} else {
var f_40216 = cljs.core.first(seq__40051_40210__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40216], 0));


var G__40217 = cljs.core.next(seq__40051_40210__$1);
var G__40218 = null;
var G__40219 = (0);
var G__40220 = (0);
seq__40051_40200 = G__40217;
chunk__40052_40201 = G__40218;
count__40053_40202 = G__40219;
i__40054_40203 = G__40220;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40221 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40221], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40221)))?cljs.core.second(arglists_40221):arglists_40221)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40064_40224 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40065_40225 = null;
var count__40066_40226 = (0);
var i__40067_40227 = (0);
while(true){
if((i__40067_40227 < count__40066_40226)){
var vec__40089_40228 = chunk__40065_40225.cljs$core$IIndexed$_nth$arity$2(null,i__40067_40227);
var name_40229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40089_40228,(0),null);
var map__40092_40230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40089_40228,(1),null);
var map__40092_40231__$1 = (((((!((map__40092_40230 == null))))?(((((map__40092_40230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40092_40230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40092_40230):map__40092_40230);
var doc_40232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40092_40231__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40092_40231__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40229], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40233], 0));

if(cljs.core.truth_(doc_40232)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40232], 0));
} else {
}


var G__40236 = seq__40064_40224;
var G__40237 = chunk__40065_40225;
var G__40238 = count__40066_40226;
var G__40239 = (i__40067_40227 + (1));
seq__40064_40224 = G__40236;
chunk__40065_40225 = G__40237;
count__40066_40226 = G__40238;
i__40067_40227 = G__40239;
continue;
} else {
var temp__5735__auto___40240 = cljs.core.seq(seq__40064_40224);
if(temp__5735__auto___40240){
var seq__40064_40241__$1 = temp__5735__auto___40240;
if(cljs.core.chunked_seq_QMARK_(seq__40064_40241__$1)){
var c__4550__auto___40242 = cljs.core.chunk_first(seq__40064_40241__$1);
var G__40243 = cljs.core.chunk_rest(seq__40064_40241__$1);
var G__40244 = c__4550__auto___40242;
var G__40245 = cljs.core.count(c__4550__auto___40242);
var G__40246 = (0);
seq__40064_40224 = G__40243;
chunk__40065_40225 = G__40244;
count__40066_40226 = G__40245;
i__40067_40227 = G__40246;
continue;
} else {
var vec__40094_40248 = cljs.core.first(seq__40064_40241__$1);
var name_40249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40094_40248,(0),null);
var map__40097_40250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40094_40248,(1),null);
var map__40097_40251__$1 = (((((!((map__40097_40250 == null))))?(((((map__40097_40250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40097_40250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40097_40250):map__40097_40250);
var doc_40252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097_40251__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097_40251__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40249], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40253], 0));

if(cljs.core.truth_(doc_40252)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40252], 0));
} else {
}


var G__40255 = cljs.core.next(seq__40064_40241__$1);
var G__40256 = null;
var G__40257 = (0);
var G__40258 = (0);
seq__40064_40224 = G__40255;
chunk__40065_40225 = G__40256;
count__40066_40226 = G__40257;
i__40067_40227 = G__40258;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40099 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40100 = null;
var count__40101 = (0);
var i__40102 = (0);
while(true){
if((i__40102 < count__40101)){
var role = chunk__40100.cljs$core$IIndexed$_nth$arity$2(null,i__40102);
var temp__5735__auto___40259__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40259__$1)){
var spec_40260 = temp__5735__auto___40259__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40260)], 0));
} else {
}


var G__40261 = seq__40099;
var G__40262 = chunk__40100;
var G__40263 = count__40101;
var G__40264 = (i__40102 + (1));
seq__40099 = G__40261;
chunk__40100 = G__40262;
count__40101 = G__40263;
i__40102 = G__40264;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40099);
if(temp__5735__auto____$1){
var seq__40099__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40099__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40099__$1);
var G__40265 = cljs.core.chunk_rest(seq__40099__$1);
var G__40266 = c__4550__auto__;
var G__40267 = cljs.core.count(c__4550__auto__);
var G__40268 = (0);
seq__40099 = G__40265;
chunk__40100 = G__40266;
count__40101 = G__40267;
i__40102 = G__40268;
continue;
} else {
var role = cljs.core.first(seq__40099__$1);
var temp__5735__auto___40269__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40269__$2)){
var spec_40270 = temp__5735__auto___40269__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40270)], 0));
} else {
}


var G__40271 = cljs.core.next(seq__40099__$1);
var G__40272 = null;
var G__40273 = (0);
var G__40274 = (0);
seq__40099 = G__40271;
chunk__40100 = G__40272;
count__40101 = G__40273;
i__40102 = G__40274;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40275 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40276 = cljs.core.ex_cause(t);
via = G__40275;
t = G__40276;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40115 = datafied_throwable;
var map__40115__$1 = (((((!((map__40115 == null))))?(((((map__40115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40115):map__40115);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40115__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40115__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40115__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40116 = cljs.core.last(via);
var map__40116__$1 = (((((!((map__40116 == null))))?(((((map__40116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40116):map__40116);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40116__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40116__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40116__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40117 = data;
var map__40117__$1 = (((((!((map__40117 == null))))?(((((map__40117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40117):map__40117);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40118 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40118__$1 = (((((!((map__40118 == null))))?(((((map__40118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40118):map__40118);
var top_data = map__40118__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40126 = phase;
var G__40126__$1 = (((G__40126 instanceof cljs.core.Keyword))?G__40126.fqn:null);
switch (G__40126__$1) {
case "read-source":
var map__40127 = data;
var map__40127__$1 = (((((!((map__40127 == null))))?(((((map__40127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40127):map__40127);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40127__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40127__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40129 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40129__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40129,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40129);
var G__40129__$2 = (cljs.core.truth_((function (){var fexpr__40131 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40131.cljs$core$IFn$_invoke$arity$1 ? fexpr__40131.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40131.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40129__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40129__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40129__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40129__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40132 = top_data;
var G__40132__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40132,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40132);
var G__40132__$2 = (cljs.core.truth_((function (){var fexpr__40135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40135.cljs$core$IFn$_invoke$arity$1 ? fexpr__40135.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40135.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40132__$1);
var G__40132__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40132__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40132__$2);
var G__40132__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40132__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40132__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40132__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40132__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40139 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(3),null);
var G__40145 = top_data;
var G__40145__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40145,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40145);
var G__40145__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40145__$1);
var G__40145__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40145__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40145__$2);
var G__40145__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40145__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40145__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40145__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40145__$4;
}

break;
case "execution":
var vec__40146 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40146,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40146,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40146,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40146,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__40146,source__$1,method,file,line,G__40126,G__40126__$1,map__40115,map__40115__$1,via,trace,phase,map__40116,map__40116__$1,type,message,data,map__40117,map__40117__$1,problems,fn,caller,map__40118,map__40118__$1,top_data,source){
return (function (p1__40114_SHARP_){
var or__4131__auto__ = (p1__40114_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__40150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40150.cljs$core$IFn$_invoke$arity$1 ? fexpr__40150.cljs$core$IFn$_invoke$arity$1(p1__40114_SHARP_) : fexpr__40150.call(null,p1__40114_SHARP_));
}
});})(vec__40146,source__$1,method,file,line,G__40126,G__40126__$1,map__40115,map__40115__$1,via,trace,phase,map__40116,map__40116__$1,type,message,data,map__40117,map__40117__$1,problems,fn,caller,map__40118,map__40118__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__40151 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40151__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40151,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40151);
var G__40151__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40151__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40151__$1);
var G__40151__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40151__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40151__$2);
var G__40151__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40151__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40151__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40151__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40151__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40126__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40156){
var map__40157 = p__40156;
var map__40157__$1 = (((((!((map__40157 == null))))?(((((map__40157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40157):map__40157);
var triage_data = map__40157__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40160 = phase;
var G__40160__$1 = (((G__40160 instanceof cljs.core.Keyword))?G__40160.fqn:null);
switch (G__40160__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40161 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40162 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40163 = loc;
var G__40164 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40165_40290 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40166_40291 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40167_40292 = true;
var _STAR_print_fn_STAR__temp_val__40168_40293 = ((function (_STAR_print_newline_STAR__orig_val__40165_40290,_STAR_print_fn_STAR__orig_val__40166_40291,_STAR_print_newline_STAR__temp_val__40167_40292,sb__4661__auto__,G__40161,G__40162,G__40163,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__40165_40290,_STAR_print_fn_STAR__orig_val__40166_40291,_STAR_print_newline_STAR__temp_val__40167_40292,sb__4661__auto__,G__40161,G__40162,G__40163,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40167_40292;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40168_40293;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__40165_40290,_STAR_print_fn_STAR__orig_val__40166_40291,_STAR_print_newline_STAR__temp_val__40167_40292,_STAR_print_fn_STAR__temp_val__40168_40293,sb__4661__auto__,G__40161,G__40162,G__40163,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__40165_40290,_STAR_print_fn_STAR__orig_val__40166_40291,_STAR_print_newline_STAR__temp_val__40167_40292,_STAR_print_fn_STAR__temp_val__40168_40293,sb__4661__auto__,G__40161,G__40162,G__40163,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__40154_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40154_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__40165_40290,_STAR_print_fn_STAR__orig_val__40166_40291,_STAR_print_newline_STAR__temp_val__40167_40292,_STAR_print_fn_STAR__temp_val__40168_40293,sb__4661__auto__,G__40161,G__40162,G__40163,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__40165_40290,_STAR_print_fn_STAR__orig_val__40166_40291,_STAR_print_newline_STAR__temp_val__40167_40292,_STAR_print_fn_STAR__temp_val__40168_40293,sb__4661__auto__,G__40161,G__40162,G__40163,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40166_40291;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40165_40290;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40161,G__40162,G__40163,G__40164) : format.call(null,G__40161,G__40162,G__40163,G__40164));

break;
case "macroexpansion":
var G__40169 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40170 = cause_type;
var G__40171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40172 = loc;
var G__40173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40169,G__40170,G__40171,G__40172,G__40173) : format.call(null,G__40169,G__40170,G__40171,G__40172,G__40173));

break;
case "compile-syntax-check":
var G__40174 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40175 = cause_type;
var G__40176 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40177 = loc;
var G__40178 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40174,G__40175,G__40176,G__40177,G__40178) : format.call(null,G__40174,G__40175,G__40176,G__40177,G__40178));

break;
case "compilation":
var G__40179 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40180 = cause_type;
var G__40181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40182 = loc;
var G__40183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40179,G__40180,G__40181,G__40182,G__40183) : format.call(null,G__40179,G__40180,G__40181,G__40182,G__40183));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40184 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40185 = symbol;
var G__40186 = loc;
var G__40187 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40188_40295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40189_40296 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40190_40297 = true;
var _STAR_print_fn_STAR__temp_val__40191_40298 = ((function (_STAR_print_newline_STAR__orig_val__40188_40295,_STAR_print_fn_STAR__orig_val__40189_40296,_STAR_print_newline_STAR__temp_val__40190_40297,sb__4661__auto__,G__40184,G__40185,G__40186,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__40188_40295,_STAR_print_fn_STAR__orig_val__40189_40296,_STAR_print_newline_STAR__temp_val__40190_40297,sb__4661__auto__,G__40184,G__40185,G__40186,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40190_40297;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40191_40298;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__40188_40295,_STAR_print_fn_STAR__orig_val__40189_40296,_STAR_print_newline_STAR__temp_val__40190_40297,_STAR_print_fn_STAR__temp_val__40191_40298,sb__4661__auto__,G__40184,G__40185,G__40186,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__40188_40295,_STAR_print_fn_STAR__orig_val__40189_40296,_STAR_print_newline_STAR__temp_val__40190_40297,_STAR_print_fn_STAR__temp_val__40191_40298,sb__4661__auto__,G__40184,G__40185,G__40186,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__40155_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40155_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__40188_40295,_STAR_print_fn_STAR__orig_val__40189_40296,_STAR_print_newline_STAR__temp_val__40190_40297,_STAR_print_fn_STAR__temp_val__40191_40298,sb__4661__auto__,G__40184,G__40185,G__40186,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__40188_40295,_STAR_print_fn_STAR__orig_val__40189_40296,_STAR_print_newline_STAR__temp_val__40190_40297,_STAR_print_fn_STAR__temp_val__40191_40298,sb__4661__auto__,G__40184,G__40185,G__40186,G__40160,G__40160__$1,loc,class_name,simple_class,cause_type,format,map__40157,map__40157__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40189_40296;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40188_40295;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40184,G__40185,G__40186,G__40187) : format.call(null,G__40184,G__40185,G__40186,G__40187));
} else {
var G__40192 = "Execution error%s at %s(%s).\n%s\n";
var G__40193 = cause_type;
var G__40194 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40195 = loc;
var G__40196 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40192,G__40193,G__40194,G__40195,G__40196) : format.call(null,G__40192,G__40193,G__40194,G__40195,G__40196));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40160__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
