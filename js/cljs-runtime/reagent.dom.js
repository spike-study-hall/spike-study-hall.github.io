goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__49673 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49674 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49674;

try{var G__49675 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__49676 = container;
var G__49677 = ((function (G__49675,G__49676,_STAR_always_update_STAR__orig_val__49673,_STAR_always_update_STAR__temp_val__49674){
return (function (){
var _STAR_always_update_STAR__orig_val__49678 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49679 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49679;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49678;
}});})(G__49675,G__49676,_STAR_always_update_STAR__orig_val__49673,_STAR_always_update_STAR__temp_val__49674))
;
return module$node_modules$react_dom$index.render(G__49675,G__49676,G__49677);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49673;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__49681 = arguments.length;
switch (G__49681) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__49682 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49682,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49682,(1),null);
var f = ((function (vec__49682,compiler,callback){
return (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});})(vec__49682,compiler,callback))
;
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.input.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__49685_49704 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__49686_49705 = null;
var count__49687_49706 = (0);
var i__49688_49707 = (0);
while(true){
if((i__49688_49707 < count__49687_49706)){
var vec__49695_49708 = chunk__49686_49705.cljs$core$IIndexed$_nth$arity$2(null,i__49688_49707);
var container_49709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49695_49708,(0),null);
var comp_49710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49695_49708,(1),null);
reagent.dom.re_render_component(comp_49710,container_49709);


var G__49711 = seq__49685_49704;
var G__49712 = chunk__49686_49705;
var G__49713 = count__49687_49706;
var G__49714 = (i__49688_49707 + (1));
seq__49685_49704 = G__49711;
chunk__49686_49705 = G__49712;
count__49687_49706 = G__49713;
i__49688_49707 = G__49714;
continue;
} else {
var temp__5735__auto___49715 = cljs.core.seq(seq__49685_49704);
if(temp__5735__auto___49715){
var seq__49685_49716__$1 = temp__5735__auto___49715;
if(cljs.core.chunked_seq_QMARK_(seq__49685_49716__$1)){
var c__4550__auto___49717 = cljs.core.chunk_first(seq__49685_49716__$1);
var G__49718 = cljs.core.chunk_rest(seq__49685_49716__$1);
var G__49719 = c__4550__auto___49717;
var G__49720 = cljs.core.count(c__4550__auto___49717);
var G__49721 = (0);
seq__49685_49704 = G__49718;
chunk__49686_49705 = G__49719;
count__49687_49706 = G__49720;
i__49688_49707 = G__49721;
continue;
} else {
var vec__49700_49722 = cljs.core.first(seq__49685_49716__$1);
var container_49723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49700_49722,(0),null);
var comp_49724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49700_49722,(1),null);
reagent.dom.re_render_component(comp_49724,container_49723);


var G__49725 = cljs.core.next(seq__49685_49716__$1);
var G__49726 = null;
var G__49727 = (0);
var G__49728 = (0);
seq__49685_49704 = G__49725;
chunk__49686_49705 = G__49726;
count__49687_49706 = G__49727;
i__49688_49707 = G__49728;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
