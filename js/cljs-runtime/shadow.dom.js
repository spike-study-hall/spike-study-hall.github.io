goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46275 = coll;
var G__46276 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46275,G__46276) : shadow.dom.lazy_native_coll_seq.call(null,G__46275,G__46276));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46291 = arguments.length;
switch (G__46291) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46322 = arguments.length;
switch (G__46322) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46352 = arguments.length;
switch (G__46352) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46360 = arguments.length;
switch (G__46360) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46365 = arguments.length;
switch (G__46365) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__46366 = document;
var G__46367 = shadow.dom.dom_node(el);
return goog.dom.contains(G__46366,G__46367);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__46368 = shadow.dom.dom_node(parent);
var G__46369 = shadow.dom.dom_node(el);
return goog.dom.contains(G__46368,G__46369);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__46370 = shadow.dom.dom_node(el);
var G__46371 = cls;
return goog.dom.classlist.add(G__46370,G__46371);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__46372 = shadow.dom.dom_node(el);
var G__46373 = cls;
return goog.dom.classlist.remove(G__46372,G__46373);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46387 = arguments.length;
switch (G__46387) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__46390 = shadow.dom.dom_node(el);
var G__46391 = cls;
return goog.dom.classlist.toggle(G__46390,G__46391);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46398){if((e46398 instanceof Object)){
var e = e46398;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46398;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46409 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46410 = null;
var count__46411 = (0);
var i__46412 = (0);
while(true){
if((i__46412 < count__46411)){
var el = chunk__46410.cljs$core$IIndexed$_nth$arity$2(null,i__46412);
var handler_46997__$1 = ((function (seq__46409,chunk__46410,count__46411,i__46412,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46409,chunk__46410,count__46411,i__46412,el))
;
var G__46428_46998 = el;
var G__46429_46999 = cljs.core.name(ev);
var G__46430_47000 = handler_46997__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46428_46998,G__46429_46999,G__46430_47000) : shadow.dom.dom_listen.call(null,G__46428_46998,G__46429_46999,G__46430_47000));


var G__47001 = seq__46409;
var G__47002 = chunk__46410;
var G__47003 = count__46411;
var G__47004 = (i__46412 + (1));
seq__46409 = G__47001;
chunk__46410 = G__47002;
count__46411 = G__47003;
i__46412 = G__47004;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46409);
if(temp__5735__auto__){
var seq__46409__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46409__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46409__$1);
var G__47005 = cljs.core.chunk_rest(seq__46409__$1);
var G__47006 = c__4550__auto__;
var G__47007 = cljs.core.count(c__4550__auto__);
var G__47008 = (0);
seq__46409 = G__47005;
chunk__46410 = G__47006;
count__46411 = G__47007;
i__46412 = G__47008;
continue;
} else {
var el = cljs.core.first(seq__46409__$1);
var handler_47009__$1 = ((function (seq__46409,chunk__46410,count__46411,i__46412,el,seq__46409__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46409,chunk__46410,count__46411,i__46412,el,seq__46409__$1,temp__5735__auto__))
;
var G__46434_47010 = el;
var G__46435_47011 = cljs.core.name(ev);
var G__46436_47012 = handler_47009__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46434_47010,G__46435_47011,G__46436_47012) : shadow.dom.dom_listen.call(null,G__46434_47010,G__46435_47011,G__46436_47012));


var G__47013 = cljs.core.next(seq__46409__$1);
var G__47014 = null;
var G__47015 = (0);
var G__47016 = (0);
seq__46409 = G__47013;
chunk__46410 = G__47014;
count__46411 = G__47015;
i__46412 = G__47016;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46444 = arguments.length;
switch (G__46444) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__46459 = shadow.dom.dom_node(el);
var G__46460 = cljs.core.name(ev);
var G__46461 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46459,G__46460,G__46461) : shadow.dom.dom_listen.call(null,G__46459,G__46460,G__46461));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__46465 = shadow.dom.dom_node(el);
var G__46466 = cljs.core.name(ev);
var G__46467 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__46465,G__46466,G__46467) : shadow.dom.dom_listen_remove.call(null,G__46465,G__46466,G__46467));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46468 = cljs.core.seq(events);
var chunk__46469 = null;
var count__46470 = (0);
var i__46471 = (0);
while(true){
if((i__46471 < count__46470)){
var vec__46478 = chunk__46469.cljs$core$IIndexed$_nth$arity$2(null,i__46471);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46478,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46478,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47018 = seq__46468;
var G__47019 = chunk__46469;
var G__47020 = count__46470;
var G__47021 = (i__46471 + (1));
seq__46468 = G__47018;
chunk__46469 = G__47019;
count__46470 = G__47020;
i__46471 = G__47021;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46468);
if(temp__5735__auto__){
var seq__46468__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46468__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46468__$1);
var G__47022 = cljs.core.chunk_rest(seq__46468__$1);
var G__47023 = c__4550__auto__;
var G__47024 = cljs.core.count(c__4550__auto__);
var G__47025 = (0);
seq__46468 = G__47022;
chunk__46469 = G__47023;
count__46470 = G__47024;
i__46471 = G__47025;
continue;
} else {
var vec__46481 = cljs.core.first(seq__46468__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46481,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47026 = cljs.core.next(seq__46468__$1);
var G__47027 = null;
var G__47028 = (0);
var G__47029 = (0);
seq__46468 = G__47026;
chunk__46469 = G__47027;
count__46470 = G__47028;
i__46471 = G__47029;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46484 = cljs.core.seq(styles);
var chunk__46485 = null;
var count__46486 = (0);
var i__46487 = (0);
while(true){
if((i__46487 < count__46486)){
var vec__46503 = chunk__46485.cljs$core$IIndexed$_nth$arity$2(null,i__46487);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46503,(1),null);
var G__46507_47030 = dom;
var G__46508_47031 = cljs.core.name(k);
var G__46509_47032 = (((v == null))?"":v);
goog.style.setStyle(G__46507_47030,G__46508_47031,G__46509_47032);


var G__47033 = seq__46484;
var G__47034 = chunk__46485;
var G__47035 = count__46486;
var G__47036 = (i__46487 + (1));
seq__46484 = G__47033;
chunk__46485 = G__47034;
count__46486 = G__47035;
i__46487 = G__47036;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46484);
if(temp__5735__auto__){
var seq__46484__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46484__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46484__$1);
var G__47037 = cljs.core.chunk_rest(seq__46484__$1);
var G__47038 = c__4550__auto__;
var G__47039 = cljs.core.count(c__4550__auto__);
var G__47040 = (0);
seq__46484 = G__47037;
chunk__46485 = G__47038;
count__46486 = G__47039;
i__46487 = G__47040;
continue;
} else {
var vec__46514 = cljs.core.first(seq__46484__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(1),null);
var G__46519_47041 = dom;
var G__46520_47042 = cljs.core.name(k);
var G__46521_47043 = (((v == null))?"":v);
goog.style.setStyle(G__46519_47041,G__46520_47042,G__46521_47043);


var G__47044 = cljs.core.next(seq__46484__$1);
var G__47045 = null;
var G__47046 = (0);
var G__47047 = (0);
seq__46484 = G__47044;
chunk__46485 = G__47045;
count__46486 = G__47046;
i__46487 = G__47047;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46526_47048 = key;
var G__46526_47049__$1 = (((G__46526_47048 instanceof cljs.core.Keyword))?G__46526_47048.fqn:null);
switch (G__46526_47049__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47051 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_47051,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_47051,"aria-");
}
})())){
el.setAttribute(ks_47051,value);
} else {
(el[ks_47051] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__46539 = shadow.dom.dom_node(el);
var G__46540 = cls;
return goog.dom.classlist.contains(G__46539,G__46540);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46556){
var map__46558 = p__46556;
var map__46558__$1 = (((((!((map__46558 == null))))?(((((map__46558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46558):map__46558);
var props = map__46558__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46558__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46561 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46564 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46564,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46564;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46568 = arguments.length;
switch (G__46568) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46574){
var vec__46575 = p__46574;
var seq__46576 = cljs.core.seq(vec__46575);
var first__46577 = cljs.core.first(seq__46576);
var seq__46576__$1 = cljs.core.next(seq__46576);
var nn = first__46577;
var first__46577__$1 = cljs.core.first(seq__46576__$1);
var seq__46576__$2 = cljs.core.next(seq__46576__$1);
var np = first__46577__$1;
var nc = seq__46576__$2;
var node = vec__46575;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46578 = nn;
var G__46579 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46578,G__46579) : create_fn.call(null,G__46578,G__46579));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46580 = nn;
var G__46581 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46580,G__46581) : create_fn.call(null,G__46580,G__46581));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46582 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46582,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46582,(1),null);
var seq__46585_47053 = cljs.core.seq(node_children);
var chunk__46586_47054 = null;
var count__46587_47055 = (0);
var i__46588_47056 = (0);
while(true){
if((i__46588_47056 < count__46587_47055)){
var child_struct_47057 = chunk__46586_47054.cljs$core$IIndexed$_nth$arity$2(null,i__46588_47056);
var children_47058 = shadow.dom.dom_node(child_struct_47057);
if(cljs.core.seq_QMARK_(children_47058)){
var seq__46606_47059 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47058));
var chunk__46608_47060 = null;
var count__46609_47061 = (0);
var i__46610_47062 = (0);
while(true){
if((i__46610_47062 < count__46609_47061)){
var child_47063 = chunk__46608_47060.cljs$core$IIndexed$_nth$arity$2(null,i__46610_47062);
if(cljs.core.truth_(child_47063)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47063);


var G__47064 = seq__46606_47059;
var G__47065 = chunk__46608_47060;
var G__47066 = count__46609_47061;
var G__47067 = (i__46610_47062 + (1));
seq__46606_47059 = G__47064;
chunk__46608_47060 = G__47065;
count__46609_47061 = G__47066;
i__46610_47062 = G__47067;
continue;
} else {
var G__47068 = seq__46606_47059;
var G__47069 = chunk__46608_47060;
var G__47070 = count__46609_47061;
var G__47071 = (i__46610_47062 + (1));
seq__46606_47059 = G__47068;
chunk__46608_47060 = G__47069;
count__46609_47061 = G__47070;
i__46610_47062 = G__47071;
continue;
}
} else {
var temp__5735__auto___47072 = cljs.core.seq(seq__46606_47059);
if(temp__5735__auto___47072){
var seq__46606_47073__$1 = temp__5735__auto___47072;
if(cljs.core.chunked_seq_QMARK_(seq__46606_47073__$1)){
var c__4550__auto___47074 = cljs.core.chunk_first(seq__46606_47073__$1);
var G__47075 = cljs.core.chunk_rest(seq__46606_47073__$1);
var G__47076 = c__4550__auto___47074;
var G__47077 = cljs.core.count(c__4550__auto___47074);
var G__47078 = (0);
seq__46606_47059 = G__47075;
chunk__46608_47060 = G__47076;
count__46609_47061 = G__47077;
i__46610_47062 = G__47078;
continue;
} else {
var child_47079 = cljs.core.first(seq__46606_47073__$1);
if(cljs.core.truth_(child_47079)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47079);


var G__47080 = cljs.core.next(seq__46606_47073__$1);
var G__47081 = null;
var G__47082 = (0);
var G__47083 = (0);
seq__46606_47059 = G__47080;
chunk__46608_47060 = G__47081;
count__46609_47061 = G__47082;
i__46610_47062 = G__47083;
continue;
} else {
var G__47084 = cljs.core.next(seq__46606_47073__$1);
var G__47085 = null;
var G__47086 = (0);
var G__47087 = (0);
seq__46606_47059 = G__47084;
chunk__46608_47060 = G__47085;
count__46609_47061 = G__47086;
i__46610_47062 = G__47087;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47058);
}


var G__47088 = seq__46585_47053;
var G__47089 = chunk__46586_47054;
var G__47090 = count__46587_47055;
var G__47091 = (i__46588_47056 + (1));
seq__46585_47053 = G__47088;
chunk__46586_47054 = G__47089;
count__46587_47055 = G__47090;
i__46588_47056 = G__47091;
continue;
} else {
var temp__5735__auto___47092 = cljs.core.seq(seq__46585_47053);
if(temp__5735__auto___47092){
var seq__46585_47093__$1 = temp__5735__auto___47092;
if(cljs.core.chunked_seq_QMARK_(seq__46585_47093__$1)){
var c__4550__auto___47094 = cljs.core.chunk_first(seq__46585_47093__$1);
var G__47095 = cljs.core.chunk_rest(seq__46585_47093__$1);
var G__47096 = c__4550__auto___47094;
var G__47097 = cljs.core.count(c__4550__auto___47094);
var G__47098 = (0);
seq__46585_47053 = G__47095;
chunk__46586_47054 = G__47096;
count__46587_47055 = G__47097;
i__46588_47056 = G__47098;
continue;
} else {
var child_struct_47099 = cljs.core.first(seq__46585_47093__$1);
var children_47100 = shadow.dom.dom_node(child_struct_47099);
if(cljs.core.seq_QMARK_(children_47100)){
var seq__46625_47101 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47100));
var chunk__46627_47102 = null;
var count__46628_47103 = (0);
var i__46629_47104 = (0);
while(true){
if((i__46629_47104 < count__46628_47103)){
var child_47105 = chunk__46627_47102.cljs$core$IIndexed$_nth$arity$2(null,i__46629_47104);
if(cljs.core.truth_(child_47105)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47105);


var G__47106 = seq__46625_47101;
var G__47107 = chunk__46627_47102;
var G__47108 = count__46628_47103;
var G__47109 = (i__46629_47104 + (1));
seq__46625_47101 = G__47106;
chunk__46627_47102 = G__47107;
count__46628_47103 = G__47108;
i__46629_47104 = G__47109;
continue;
} else {
var G__47110 = seq__46625_47101;
var G__47111 = chunk__46627_47102;
var G__47112 = count__46628_47103;
var G__47113 = (i__46629_47104 + (1));
seq__46625_47101 = G__47110;
chunk__46627_47102 = G__47111;
count__46628_47103 = G__47112;
i__46629_47104 = G__47113;
continue;
}
} else {
var temp__5735__auto___47114__$1 = cljs.core.seq(seq__46625_47101);
if(temp__5735__auto___47114__$1){
var seq__46625_47115__$1 = temp__5735__auto___47114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46625_47115__$1)){
var c__4550__auto___47116 = cljs.core.chunk_first(seq__46625_47115__$1);
var G__47117 = cljs.core.chunk_rest(seq__46625_47115__$1);
var G__47118 = c__4550__auto___47116;
var G__47119 = cljs.core.count(c__4550__auto___47116);
var G__47120 = (0);
seq__46625_47101 = G__47117;
chunk__46627_47102 = G__47118;
count__46628_47103 = G__47119;
i__46629_47104 = G__47120;
continue;
} else {
var child_47121 = cljs.core.first(seq__46625_47115__$1);
if(cljs.core.truth_(child_47121)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47121);


var G__47122 = cljs.core.next(seq__46625_47115__$1);
var G__47123 = null;
var G__47124 = (0);
var G__47125 = (0);
seq__46625_47101 = G__47122;
chunk__46627_47102 = G__47123;
count__46628_47103 = G__47124;
i__46629_47104 = G__47125;
continue;
} else {
var G__47126 = cljs.core.next(seq__46625_47115__$1);
var G__47127 = null;
var G__47128 = (0);
var G__47129 = (0);
seq__46625_47101 = G__47126;
chunk__46627_47102 = G__47127;
count__46628_47103 = G__47128;
i__46629_47104 = G__47129;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47100);
}


var G__47130 = cljs.core.next(seq__46585_47093__$1);
var G__47131 = null;
var G__47132 = (0);
var G__47133 = (0);
seq__46585_47053 = G__47130;
chunk__46586_47054 = G__47131;
count__46587_47055 = G__47132;
i__46588_47056 = G__47133;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__46647 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__46647);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46650 = cljs.core.seq(node);
var chunk__46651 = null;
var count__46652 = (0);
var i__46653 = (0);
while(true){
if((i__46653 < count__46652)){
var n = chunk__46651.cljs$core$IIndexed$_nth$arity$2(null,i__46653);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47134 = seq__46650;
var G__47135 = chunk__46651;
var G__47136 = count__46652;
var G__47137 = (i__46653 + (1));
seq__46650 = G__47134;
chunk__46651 = G__47135;
count__46652 = G__47136;
i__46653 = G__47137;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46650);
if(temp__5735__auto__){
var seq__46650__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46650__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46650__$1);
var G__47138 = cljs.core.chunk_rest(seq__46650__$1);
var G__47139 = c__4550__auto__;
var G__47140 = cljs.core.count(c__4550__auto__);
var G__47141 = (0);
seq__46650 = G__47138;
chunk__46651 = G__47139;
count__46652 = G__47140;
i__46653 = G__47141;
continue;
} else {
var n = cljs.core.first(seq__46650__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47142 = cljs.core.next(seq__46650__$1);
var G__47143 = null;
var G__47144 = (0);
var G__47145 = (0);
seq__46650 = G__47142;
chunk__46651 = G__47143;
count__46652 = G__47144;
i__46653 = G__47145;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__46656 = shadow.dom.dom_node(new$);
var G__46657 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__46656,G__46657);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46660 = arguments.length;
switch (G__46660) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46669 = arguments.length;
switch (G__46669) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46679 = arguments.length;
switch (G__46679) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47149 = arguments.length;
var i__4731__auto___47150 = (0);
while(true){
if((i__4731__auto___47150 < len__4730__auto___47149)){
args__4736__auto__.push((arguments[i__4731__auto___47150]));

var G__47151 = (i__4731__auto___47150 + (1));
i__4731__auto___47150 = G__47151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46695_47152 = cljs.core.seq(nodes);
var chunk__46696_47153 = null;
var count__46697_47154 = (0);
var i__46698_47155 = (0);
while(true){
if((i__46698_47155 < count__46697_47154)){
var node_47156 = chunk__46696_47153.cljs$core$IIndexed$_nth$arity$2(null,i__46698_47155);
fragment.appendChild(shadow.dom._to_dom(node_47156));


var G__47157 = seq__46695_47152;
var G__47158 = chunk__46696_47153;
var G__47159 = count__46697_47154;
var G__47160 = (i__46698_47155 + (1));
seq__46695_47152 = G__47157;
chunk__46696_47153 = G__47158;
count__46697_47154 = G__47159;
i__46698_47155 = G__47160;
continue;
} else {
var temp__5735__auto___47161 = cljs.core.seq(seq__46695_47152);
if(temp__5735__auto___47161){
var seq__46695_47162__$1 = temp__5735__auto___47161;
if(cljs.core.chunked_seq_QMARK_(seq__46695_47162__$1)){
var c__4550__auto___47163 = cljs.core.chunk_first(seq__46695_47162__$1);
var G__47164 = cljs.core.chunk_rest(seq__46695_47162__$1);
var G__47165 = c__4550__auto___47163;
var G__47166 = cljs.core.count(c__4550__auto___47163);
var G__47167 = (0);
seq__46695_47152 = G__47164;
chunk__46696_47153 = G__47165;
count__46697_47154 = G__47166;
i__46698_47155 = G__47167;
continue;
} else {
var node_47168 = cljs.core.first(seq__46695_47162__$1);
fragment.appendChild(shadow.dom._to_dom(node_47168));


var G__47169 = cljs.core.next(seq__46695_47162__$1);
var G__47170 = null;
var G__47171 = (0);
var G__47172 = (0);
seq__46695_47152 = G__47169;
chunk__46696_47153 = G__47170;
count__46697_47154 = G__47171;
i__46698_47155 = G__47172;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq46691){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46691));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46707_47173 = cljs.core.seq(scripts);
var chunk__46708_47174 = null;
var count__46709_47175 = (0);
var i__46710_47176 = (0);
while(true){
if((i__46710_47176 < count__46709_47175)){
var vec__46721_47177 = chunk__46708_47174.cljs$core$IIndexed$_nth$arity$2(null,i__46710_47176);
var script_tag_47178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46721_47177,(0),null);
var script_body_47179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46721_47177,(1),null);
eval(script_body_47179);


var G__47180 = seq__46707_47173;
var G__47181 = chunk__46708_47174;
var G__47182 = count__46709_47175;
var G__47183 = (i__46710_47176 + (1));
seq__46707_47173 = G__47180;
chunk__46708_47174 = G__47181;
count__46709_47175 = G__47182;
i__46710_47176 = G__47183;
continue;
} else {
var temp__5735__auto___47184 = cljs.core.seq(seq__46707_47173);
if(temp__5735__auto___47184){
var seq__46707_47185__$1 = temp__5735__auto___47184;
if(cljs.core.chunked_seq_QMARK_(seq__46707_47185__$1)){
var c__4550__auto___47186 = cljs.core.chunk_first(seq__46707_47185__$1);
var G__47187 = cljs.core.chunk_rest(seq__46707_47185__$1);
var G__47188 = c__4550__auto___47186;
var G__47189 = cljs.core.count(c__4550__auto___47186);
var G__47190 = (0);
seq__46707_47173 = G__47187;
chunk__46708_47174 = G__47188;
count__46709_47175 = G__47189;
i__46710_47176 = G__47190;
continue;
} else {
var vec__46728_47191 = cljs.core.first(seq__46707_47185__$1);
var script_tag_47192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46728_47191,(0),null);
var script_body_47193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46728_47191,(1),null);
eval(script_body_47193);


var G__47194 = cljs.core.next(seq__46707_47185__$1);
var G__47195 = null;
var G__47196 = (0);
var G__47197 = (0);
seq__46707_47173 = G__47194;
chunk__46708_47174 = G__47195;
count__46709_47175 = G__47196;
i__46710_47176 = G__47197;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__46733){
var vec__46734 = p__46733;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46734,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46734,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__46740 = shadow.dom.dom_node(el);
var G__46741 = cls;
return goog.dom.getAncestorByClass(G__46740,G__46741);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46743 = arguments.length;
switch (G__46743) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__46744 = shadow.dom.dom_node(el);
var G__46745 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__46744,G__46745);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__46746 = shadow.dom.dom_node(el);
var G__46747 = cljs.core.name(tag);
var G__46748 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__46746,G__46747,G__46748);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__46749 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__46749);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__46750 = shadow.dom.dom_node(dom);
var G__46751 = value;
return goog.dom.forms.setValue(G__46750,G__46751);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46752 = cljs.core.seq(style_keys);
var chunk__46753 = null;
var count__46754 = (0);
var i__46755 = (0);
while(true){
if((i__46755 < count__46754)){
var it = chunk__46753.cljs$core$IIndexed$_nth$arity$2(null,i__46755);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47199 = seq__46752;
var G__47200 = chunk__46753;
var G__47201 = count__46754;
var G__47202 = (i__46755 + (1));
seq__46752 = G__47199;
chunk__46753 = G__47200;
count__46754 = G__47201;
i__46755 = G__47202;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46752);
if(temp__5735__auto__){
var seq__46752__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46752__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46752__$1);
var G__47203 = cljs.core.chunk_rest(seq__46752__$1);
var G__47204 = c__4550__auto__;
var G__47205 = cljs.core.count(c__4550__auto__);
var G__47206 = (0);
seq__46752 = G__47203;
chunk__46753 = G__47204;
count__46754 = G__47205;
i__46755 = G__47206;
continue;
} else {
var it = cljs.core.first(seq__46752__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47208 = cljs.core.next(seq__46752__$1);
var G__47209 = null;
var G__47210 = (0);
var G__47211 = (0);
seq__46752 = G__47208;
chunk__46753 = G__47209;
count__46754 = G__47210;
i__46755 = G__47211;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k46759,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__46772 = k46759;
var G__46772__$1 = (((G__46772 instanceof cljs.core.Keyword))?G__46772.fqn:null);
switch (G__46772__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46759,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__46776){
var vec__46778 = p__46776;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46758){
var self__ = this;
var G__46758__$1 = this;
return (new cljs.core.RecordIter((0),G__46758__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__46790 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__46790(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46760,other46761){
var self__ = this;
var this46760__$1 = this;
return (((!((other46761 == null)))) && ((this46760__$1.constructor === other46761.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46760__$1.x,other46761.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46760__$1.y,other46761.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46760__$1.__extmap,other46761.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__46758){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__46795 = cljs.core.keyword_identical_QMARK_;
var expr__46796 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__46798 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__46799 = expr__46796;
return (pred__46795.cljs$core$IFn$_invoke$arity$2 ? pred__46795.cljs$core$IFn$_invoke$arity$2(G__46798,G__46799) : pred__46795.call(null,G__46798,G__46799));
})())){
return (new shadow.dom.Coordinate(G__46758,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46800 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__46801 = expr__46796;
return (pred__46795.cljs$core$IFn$_invoke$arity$2 ? pred__46795.cljs$core$IFn$_invoke$arity$2(G__46800,G__46801) : pred__46795.call(null,G__46800,G__46801));
})())){
return (new shadow.dom.Coordinate(self__.x,G__46758,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__46758),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__46758){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46758,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46764){
var extmap__4424__auto__ = (function (){var G__46814 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46764,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46814);
} else {
return G__46814;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46764),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46764),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__46818 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__46818);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__46820 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__46820);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__46822 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__46822);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k46825,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__46835 = k46825;
var G__46835__$1 = (((G__46835 instanceof cljs.core.Keyword))?G__46835.fqn:null);
switch (G__46835__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46825,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__46837){
var vec__46838 = p__46837;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46838,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46838,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46824){
var self__ = this;
var G__46824__$1 = this;
return (new cljs.core.RecordIter((0),G__46824__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__46850 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__46850(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46826,other46827){
var self__ = this;
var this46826__$1 = this;
return (((!((other46827 == null)))) && ((this46826__$1.constructor === other46827.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46826__$1.w,other46827.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46826__$1.h,other46827.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46826__$1.__extmap,other46827.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__46824){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__46859 = cljs.core.keyword_identical_QMARK_;
var expr__46860 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__46862 = new cljs.core.Keyword(null,"w","w",354169001);
var G__46863 = expr__46860;
return (pred__46859.cljs$core$IFn$_invoke$arity$2 ? pred__46859.cljs$core$IFn$_invoke$arity$2(G__46862,G__46863) : pred__46859.call(null,G__46862,G__46863));
})())){
return (new shadow.dom.Size(G__46824,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46864 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__46865 = expr__46860;
return (pred__46859.cljs$core$IFn$_invoke$arity$2 ? pred__46859.cljs$core$IFn$_invoke$arity$2(G__46864,G__46865) : pred__46859.call(null,G__46864,G__46865));
})())){
return (new shadow.dom.Size(self__.w,G__46824,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__46824),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__46824){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46824,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46828){
var extmap__4424__auto__ = (function (){var G__46875 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46828,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46875);
} else {
return G__46875;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46828),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46828),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__46877 = shadow.dom.dom_node(el);
return goog.style.getSize(G__46877);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__47220 = (i + (1));
var G__47221 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47220;
ret = G__47221;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46891){
var vec__46892 = p__46891;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46897 = arguments.length;
switch (G__46897) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__46900_47225 = new_node;
var G__46901_47226 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__46900_47225,G__46901_47226);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__46903_47227 = new_node;
var G__46904_47228 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__46903_47227,G__46904_47228);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47229 = ps;
var G__47230 = (i + (1));
el__$1 = G__47229;
i = G__47230;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__46910 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__46910);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__46911 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__46911);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__46912 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__46912);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46913 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46913,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46913,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46913,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46916_47232 = cljs.core.seq(props);
var chunk__46917_47233 = null;
var count__46918_47234 = (0);
var i__46919_47235 = (0);
while(true){
if((i__46919_47235 < count__46918_47234)){
var vec__46926_47236 = chunk__46917_47233.cljs$core$IIndexed$_nth$arity$2(null,i__46919_47235);
var k_47237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926_47236,(0),null);
var v_47238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926_47236,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_47237);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47237),v_47238);


var G__47242 = seq__46916_47232;
var G__47243 = chunk__46917_47233;
var G__47244 = count__46918_47234;
var G__47245 = (i__46919_47235 + (1));
seq__46916_47232 = G__47242;
chunk__46917_47233 = G__47243;
count__46918_47234 = G__47244;
i__46919_47235 = G__47245;
continue;
} else {
var temp__5735__auto___47246 = cljs.core.seq(seq__46916_47232);
if(temp__5735__auto___47246){
var seq__46916_47247__$1 = temp__5735__auto___47246;
if(cljs.core.chunked_seq_QMARK_(seq__46916_47247__$1)){
var c__4550__auto___47248 = cljs.core.chunk_first(seq__46916_47247__$1);
var G__47249 = cljs.core.chunk_rest(seq__46916_47247__$1);
var G__47250 = c__4550__auto___47248;
var G__47251 = cljs.core.count(c__4550__auto___47248);
var G__47252 = (0);
seq__46916_47232 = G__47249;
chunk__46917_47233 = G__47250;
count__46918_47234 = G__47251;
i__46919_47235 = G__47252;
continue;
} else {
var vec__46929_47253 = cljs.core.first(seq__46916_47247__$1);
var k_47254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929_47253,(0),null);
var v_47255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929_47253,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_47254);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47254),v_47255);


var G__47256 = cljs.core.next(seq__46916_47247__$1);
var G__47257 = null;
var G__47258 = (0);
var G__47259 = (0);
seq__46916_47232 = G__47256;
chunk__46917_47233 = G__47257;
count__46918_47234 = G__47258;
i__46919_47235 = G__47259;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46933 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46933,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46933,(1),null);
var seq__46936_47260 = cljs.core.seq(node_children);
var chunk__46938_47261 = null;
var count__46939_47262 = (0);
var i__46940_47263 = (0);
while(true){
if((i__46940_47263 < count__46939_47262)){
var child_struct_47264 = chunk__46938_47261.cljs$core$IIndexed$_nth$arity$2(null,i__46940_47263);
if((!((child_struct_47264 == null)))){
if(typeof child_struct_47264 === 'string'){
var text_47265 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47265),child_struct_47264].join(''));
} else {
var children_47266 = shadow.dom.svg_node(child_struct_47264);
if(cljs.core.seq_QMARK_(children_47266)){
var seq__46954_47267 = cljs.core.seq(children_47266);
var chunk__46956_47268 = null;
var count__46957_47269 = (0);
var i__46958_47270 = (0);
while(true){
if((i__46958_47270 < count__46957_47269)){
var child_47271 = chunk__46956_47268.cljs$core$IIndexed$_nth$arity$2(null,i__46958_47270);
if(cljs.core.truth_(child_47271)){
node.appendChild(child_47271);


var G__47272 = seq__46954_47267;
var G__47273 = chunk__46956_47268;
var G__47274 = count__46957_47269;
var G__47275 = (i__46958_47270 + (1));
seq__46954_47267 = G__47272;
chunk__46956_47268 = G__47273;
count__46957_47269 = G__47274;
i__46958_47270 = G__47275;
continue;
} else {
var G__47276 = seq__46954_47267;
var G__47277 = chunk__46956_47268;
var G__47278 = count__46957_47269;
var G__47279 = (i__46958_47270 + (1));
seq__46954_47267 = G__47276;
chunk__46956_47268 = G__47277;
count__46957_47269 = G__47278;
i__46958_47270 = G__47279;
continue;
}
} else {
var temp__5735__auto___47280 = cljs.core.seq(seq__46954_47267);
if(temp__5735__auto___47280){
var seq__46954_47281__$1 = temp__5735__auto___47280;
if(cljs.core.chunked_seq_QMARK_(seq__46954_47281__$1)){
var c__4550__auto___47282 = cljs.core.chunk_first(seq__46954_47281__$1);
var G__47283 = cljs.core.chunk_rest(seq__46954_47281__$1);
var G__47284 = c__4550__auto___47282;
var G__47285 = cljs.core.count(c__4550__auto___47282);
var G__47286 = (0);
seq__46954_47267 = G__47283;
chunk__46956_47268 = G__47284;
count__46957_47269 = G__47285;
i__46958_47270 = G__47286;
continue;
} else {
var child_47287 = cljs.core.first(seq__46954_47281__$1);
if(cljs.core.truth_(child_47287)){
node.appendChild(child_47287);


var G__47288 = cljs.core.next(seq__46954_47281__$1);
var G__47289 = null;
var G__47290 = (0);
var G__47291 = (0);
seq__46954_47267 = G__47288;
chunk__46956_47268 = G__47289;
count__46957_47269 = G__47290;
i__46958_47270 = G__47291;
continue;
} else {
var G__47292 = cljs.core.next(seq__46954_47281__$1);
var G__47293 = null;
var G__47294 = (0);
var G__47295 = (0);
seq__46954_47267 = G__47292;
chunk__46956_47268 = G__47293;
count__46957_47269 = G__47294;
i__46958_47270 = G__47295;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47266);
}
}


var G__47296 = seq__46936_47260;
var G__47297 = chunk__46938_47261;
var G__47298 = count__46939_47262;
var G__47299 = (i__46940_47263 + (1));
seq__46936_47260 = G__47296;
chunk__46938_47261 = G__47297;
count__46939_47262 = G__47298;
i__46940_47263 = G__47299;
continue;
} else {
var G__47300 = seq__46936_47260;
var G__47301 = chunk__46938_47261;
var G__47302 = count__46939_47262;
var G__47303 = (i__46940_47263 + (1));
seq__46936_47260 = G__47300;
chunk__46938_47261 = G__47301;
count__46939_47262 = G__47302;
i__46940_47263 = G__47303;
continue;
}
} else {
var temp__5735__auto___47304 = cljs.core.seq(seq__46936_47260);
if(temp__5735__auto___47304){
var seq__46936_47305__$1 = temp__5735__auto___47304;
if(cljs.core.chunked_seq_QMARK_(seq__46936_47305__$1)){
var c__4550__auto___47306 = cljs.core.chunk_first(seq__46936_47305__$1);
var G__47307 = cljs.core.chunk_rest(seq__46936_47305__$1);
var G__47308 = c__4550__auto___47306;
var G__47309 = cljs.core.count(c__4550__auto___47306);
var G__47310 = (0);
seq__46936_47260 = G__47307;
chunk__46938_47261 = G__47308;
count__46939_47262 = G__47309;
i__46940_47263 = G__47310;
continue;
} else {
var child_struct_47311 = cljs.core.first(seq__46936_47305__$1);
if((!((child_struct_47311 == null)))){
if(typeof child_struct_47311 === 'string'){
var text_47312 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47312),child_struct_47311].join(''));
} else {
var children_47313 = shadow.dom.svg_node(child_struct_47311);
if(cljs.core.seq_QMARK_(children_47313)){
var seq__46960_47314 = cljs.core.seq(children_47313);
var chunk__46962_47315 = null;
var count__46963_47316 = (0);
var i__46964_47317 = (0);
while(true){
if((i__46964_47317 < count__46963_47316)){
var child_47318 = chunk__46962_47315.cljs$core$IIndexed$_nth$arity$2(null,i__46964_47317);
if(cljs.core.truth_(child_47318)){
node.appendChild(child_47318);


var G__47319 = seq__46960_47314;
var G__47320 = chunk__46962_47315;
var G__47321 = count__46963_47316;
var G__47322 = (i__46964_47317 + (1));
seq__46960_47314 = G__47319;
chunk__46962_47315 = G__47320;
count__46963_47316 = G__47321;
i__46964_47317 = G__47322;
continue;
} else {
var G__47323 = seq__46960_47314;
var G__47324 = chunk__46962_47315;
var G__47325 = count__46963_47316;
var G__47326 = (i__46964_47317 + (1));
seq__46960_47314 = G__47323;
chunk__46962_47315 = G__47324;
count__46963_47316 = G__47325;
i__46964_47317 = G__47326;
continue;
}
} else {
var temp__5735__auto___47327__$1 = cljs.core.seq(seq__46960_47314);
if(temp__5735__auto___47327__$1){
var seq__46960_47328__$1 = temp__5735__auto___47327__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46960_47328__$1)){
var c__4550__auto___47329 = cljs.core.chunk_first(seq__46960_47328__$1);
var G__47330 = cljs.core.chunk_rest(seq__46960_47328__$1);
var G__47331 = c__4550__auto___47329;
var G__47332 = cljs.core.count(c__4550__auto___47329);
var G__47333 = (0);
seq__46960_47314 = G__47330;
chunk__46962_47315 = G__47331;
count__46963_47316 = G__47332;
i__46964_47317 = G__47333;
continue;
} else {
var child_47334 = cljs.core.first(seq__46960_47328__$1);
if(cljs.core.truth_(child_47334)){
node.appendChild(child_47334);


var G__47335 = cljs.core.next(seq__46960_47328__$1);
var G__47336 = null;
var G__47337 = (0);
var G__47338 = (0);
seq__46960_47314 = G__47335;
chunk__46962_47315 = G__47336;
count__46963_47316 = G__47337;
i__46964_47317 = G__47338;
continue;
} else {
var G__47339 = cljs.core.next(seq__46960_47328__$1);
var G__47340 = null;
var G__47341 = (0);
var G__47342 = (0);
seq__46960_47314 = G__47339;
chunk__46962_47315 = G__47340;
count__46963_47316 = G__47341;
i__46964_47317 = G__47342;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47313);
}
}


var G__47343 = cljs.core.next(seq__46936_47305__$1);
var G__47344 = null;
var G__47345 = (0);
var G__47346 = (0);
seq__46936_47260 = G__47343;
chunk__46938_47261 = G__47344;
count__46939_47262 = G__47345;
i__46940_47263 = G__47346;
continue;
} else {
var G__47347 = cljs.core.next(seq__46936_47305__$1);
var G__47348 = null;
var G__47349 = (0);
var G__47350 = (0);
seq__46936_47260 = G__47347;
chunk__46938_47261 = G__47348;
count__46939_47262 = G__47349;
i__46940_47263 = G__47350;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__46966_47352 = shadow.dom._to_svg;
var G__46967_47353 = "string";
var G__46968_47354 = ((function (G__46966_47352,G__46967_47353){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__46966_47352,G__46967_47353))
;
goog.object.set(G__46966_47352,G__46967_47353,G__46968_47354);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__46969_47357 = shadow.dom._to_svg;
var G__46970_47358 = "null";
var G__46971_47359 = ((function (G__46969_47357,G__46970_47358){
return (function (_){
return null;
});})(G__46969_47357,G__46970_47358))
;
goog.object.set(G__46969_47357,G__46970_47358,G__46971_47359);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47360 = arguments.length;
var i__4731__auto___47361 = (0);
while(true){
if((i__4731__auto___47361 < len__4730__auto___47360)){
args__4736__auto__.push((arguments[i__4731__auto___47361]));

var G__47362 = (i__4731__auto___47361 + (1));
i__4731__auto___47361 = G__47362;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq46972){
var G__46973 = cljs.core.first(seq46972);
var seq46972__$1 = cljs.core.next(seq46972);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46973,seq46972__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46975 = arguments.length;
switch (G__46975) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__46976_47364 = shadow.dom.dom_node(el);
var G__46977_47365 = cljs.core.name(event);
var G__46978_47366 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46976_47364,G__46977_47365,G__46978_47366) : shadow.dom.dom_listen.call(null,G__46976_47364,G__46977_47365,G__46978_47366));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__44156__auto___47367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___47367,buf,chan,event_fn){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___47367,buf,chan,event_fn){
return (function (state_46983){
var state_val_46984 = (state_46983[(1)]);
if((state_val_46984 === (1))){
var state_46983__$1 = state_46983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46983__$1,(2),once_or_cleanup);
} else {
if((state_val_46984 === (2))){
var inst_46980 = (state_46983[(2)]);
var inst_46981 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46983__$1 = (function (){var statearr_46985 = state_46983;
(statearr_46985[(7)] = inst_46980);

return statearr_46985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46983__$1,inst_46981);
} else {
return null;
}
}
});})(c__44156__auto___47367,buf,chan,event_fn))
;
return ((function (switch__44056__auto__,c__44156__auto___47367,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__44057__auto__ = null;
var shadow$dom$state_machine__44057__auto____0 = (function (){
var statearr_46986 = [null,null,null,null,null,null,null,null];
(statearr_46986[(0)] = shadow$dom$state_machine__44057__auto__);

(statearr_46986[(1)] = (1));

return statearr_46986;
});
var shadow$dom$state_machine__44057__auto____1 = (function (state_46983){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_46983);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e46987){var ex__44060__auto__ = e46987;
var statearr_46988_47371 = state_46983;
(statearr_46988_47371[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_46983[(4)]))){
var statearr_46989_47372 = state_46983;
(statearr_46989_47372[(1)] = cljs.core.first((state_46983[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47373 = state_46983;
state_46983 = G__47373;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
shadow$dom$state_machine__44057__auto__ = function(state_46983){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44057__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44057__auto____1.call(this,state_46983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44057__auto____0;
shadow$dom$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44057__auto____1;
return shadow$dom$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___47367,buf,chan,event_fn))
})();
var state__44158__auto__ = (function (){var statearr_46990 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_46990[(6)] = c__44156__auto___47367);

return statearr_46990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___47367,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
