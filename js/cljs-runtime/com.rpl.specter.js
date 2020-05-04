goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__23499__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__23499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23507__i = 0, G__23507__a = new Array(arguments.length -  0);
while (G__23507__i < G__23507__a.length) {G__23507__a[G__23507__i] = arguments[G__23507__i + 0]; ++G__23507__i;}
  args = new cljs.core.IndexedSeq(G__23507__a,0,null);
} 
return G__23499__delegate.call(this,args);};
G__23499.cljs$lang$maxFixedArity = 0;
G__23499.cljs$lang$applyTo = (function (arglist__23508){
var args = cljs.core.seq(arglist__23508);
return G__23499__delegate(args);
});
G__23499.cljs$core$IFn$_invoke$arity$variadic = G__23499__delegate;
return G__23499;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23516 = arguments.length;
var i__4731__auto___23517 = (0);
while(true){
if((i__4731__auto___23517 < len__4730__auto___23516)){
args__4736__auto__.push((arguments[i__4731__auto___23517]));

var G__23521 = (i__4731__auto___23517 + (1));
i__4731__auto___23517 = G__23521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq21662){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21662));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__21714 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21715 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__21714,G__21715) : com.rpl.specter.compiled_select.call(null,G__21714,G__21715));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__21716 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21717 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__21716,G__21717) : com.rpl.specter.compiled_select_one.call(null,G__21716,G__21717));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__21718 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21719 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__21718,G__21719) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__21718,G__21719));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__21720 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21721 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__21720,G__21721) : com.rpl.specter.compiled_select_first.call(null,G__21720,G__21721));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__21722 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21723 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__21722,G__21723) : com.rpl.specter.compiled_select_any.call(null,G__21722,G__21723));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__21733 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21734 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21733,G__21734) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__21733,G__21734));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__21748 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__21749 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__21748,G__21749) : com.rpl.specter.compiled_traverse.call(null,G__21748,G__21749));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__21760 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__21760) : com.rpl.specter.compiled_traverse_all.call(null,G__21760));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__21762 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21763 = transform_fn;
var G__21764 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__21762,G__21763,G__21764) : com.rpl.specter.compiled_transform.call(null,G__21762,G__21763,G__21764));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__21775 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21776 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__21775,G__21776) : com.rpl.specter.compiled_multi_transform.call(null,G__21775,G__21776));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__21784 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21785 = val;
var G__21786 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__21784,G__21785,G__21786) : com.rpl.specter.compiled_setval.call(null,G__21784,G__21785,G__21786));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23563 = arguments.length;
var i__4731__auto___23564 = (0);
while(true){
if((i__4731__auto___23564 < len__4730__auto___23563)){
args__4736__auto__.push((arguments[i__4731__auto___23564]));

var G__23565 = (i__4731__auto___23564 + (1));
i__4731__auto___23564 = G__23565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__21799){
var map__21800 = p__21799;
var map__21800__$1 = (((((!((map__21800 == null))))?(((((map__21800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21800):map__21800);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21800__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__21819 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21820 = transform_fn;
var G__21821 = structure;
var G__21822 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__21823 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__21819,G__21820,G__21821,G__21822,G__21823) : com.rpl.specter.compiled_replace_in.call(null,G__21819,G__21820,G__21821,G__21822,G__21823));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq21789){
var G__21790 = cljs.core.first(seq21789);
var seq21789__$1 = cljs.core.next(seq21789);
var G__21791 = cljs.core.first(seq21789__$1);
var seq21789__$2 = cljs.core.next(seq21789__$1);
var G__21792 = cljs.core.first(seq21789__$2);
var seq21789__$3 = cljs.core.next(seq21789__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21790,G__21791,G__21792,seq21789__$3);
});

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (latenavfn){
return (function() { 
var G__23609__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__23609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23610__i = 0, G__23610__a = new Array(arguments.length -  0);
while (G__23610__i < G__23610__a.length) {G__23610__a[G__23610__i] = arguments[G__23610__i + 0]; ++G__23610__i;}
  args = new cljs.core.IndexedSeq(G__23610__a,0,null);
} 
return G__23609__delegate.call(this,args);};
G__23609.cljs$lang$maxFixedArity = 0;
G__23609.cljs$lang$applyTo = (function (arglist__23611){
var args = cljs.core.seq(arglist__23611);
return G__23609__delegate(args);
});
G__23609.cljs$core$IFn$_invoke$arity$variadic = G__23609__delegate;
return G__23609;
})()
;})(latenavfn))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21828 = (function (meta21829){
this.meta21829 = meta21829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21830,meta21829__$1){
var self__ = this;
var _21830__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21828(meta21829__$1));
});

com.rpl.specter.t_com$rpl$specter21828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21830){
var self__ = this;
var _21830__$1 = this;
return self__.meta21829;
});

com.rpl.specter.t_com$rpl$specter21828.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21828.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter21828.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter21828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21829","meta21829",-1038304101,null)], null);
});

com.rpl.specter.t_com$rpl$specter21828.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21828.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21828";

com.rpl.specter.t_com$rpl$specter21828.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21828");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21828.
 */
com.rpl.specter.__GT_t_com$rpl$specter21828 = (function com$rpl$specter$__GT_t_com$rpl$specter21828(meta21829){
return (new com.rpl.specter.t_com$rpl$specter21828(meta21829));
});

}

return (new com.rpl.specter.t_com$rpl$specter21828(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21850 = (function (afn,meta21851){
this.afn = afn;
this.meta21851 = meta21851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21852,meta21851__$1){
var self__ = this;
var _21852__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21850(self__.afn,meta21851__$1));
});

com.rpl.specter.t_com$rpl$specter21850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21852){
var self__ = this;
var _21852__$1 = this;
return self__.meta21851;
});

com.rpl.specter.t_com$rpl$specter21850.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21850.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter21850.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter21850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta21851","meta21851",1080122325,null)], null);
});

com.rpl.specter.t_com$rpl$specter21850.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21850.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21850";

com.rpl.specter.t_com$rpl$specter21850.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21850");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21850.
 */
com.rpl.specter.__GT_t_com$rpl$specter21850 = (function com$rpl$specter$__GT_t_com$rpl$specter21850(afn__$1,meta21851){
return (new com.rpl.specter.t_com$rpl$specter21850(afn__$1,meta21851));
});

}

return (new com.rpl.specter.t_com$rpl$specter21850(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21866 = (function (afn,meta21867){
this.afn = afn;
this.meta21867 = meta21867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21868,meta21867__$1){
var self__ = this;
var _21868__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21866(self__.afn,meta21867__$1));
});

com.rpl.specter.t_com$rpl$specter21866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21868){
var self__ = this;
var _21868__$1 = this;
return self__.meta21867;
});

com.rpl.specter.t_com$rpl$specter21866.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21866.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter21866.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
});

com.rpl.specter.t_com$rpl$specter21866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta21867","meta21867",917774921,null)], null);
});

com.rpl.specter.t_com$rpl$specter21866.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21866.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21866";

com.rpl.specter.t_com$rpl$specter21866.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21866");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21866.
 */
com.rpl.specter.__GT_t_com$rpl$specter21866 = (function com$rpl$specter$__GT_t_com$rpl$specter21866(afn__$1,meta21867){
return (new com.rpl.specter.t_com$rpl$specter21866(afn__$1,meta21867));
});

}

return (new com.rpl.specter.t_com$rpl$specter21866(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__21877 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__21877) : com.rpl.specter.terminal.call(null,G__21877));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21892 = (function (meta21893){
this.meta21893 = meta21893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21894,meta21893__$1){
var self__ = this;
var _21894__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21892(meta21893__$1));
});

com.rpl.specter.t_com$rpl$specter21892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21894){
var self__ = this;
var _21894__$1 = this;
return self__.meta21893;
});

com.rpl.specter.t_com$rpl$specter21892.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21892.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21892.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21893","meta21893",31563593,null)], null);
});

com.rpl.specter.t_com$rpl$specter21892.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21892.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21892";

com.rpl.specter.t_com$rpl$specter21892.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21892");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21892.
 */
com.rpl.specter.__GT_t_com$rpl$specter21892 = (function com$rpl$specter$__GT_t_com$rpl$specter21892(meta21893){
return (new com.rpl.specter.t_com$rpl$specter21892(meta21893));
});

}

return (new com.rpl.specter.t_com$rpl$specter21892(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21916 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21916 = (function (meta21917){
this.meta21917 = meta21917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21918,meta21917__$1){
var self__ = this;
var _21918__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21916(meta21917__$1));
});

com.rpl.specter.t_com$rpl$specter21916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21918){
var self__ = this;
var _21918__$1 = this;
return self__.meta21917;
});

com.rpl.specter.t_com$rpl$specter21916.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21916.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21916.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter21916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21917","meta21917",1333025949,null)], null);
});

com.rpl.specter.t_com$rpl$specter21916.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21916.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21916";

com.rpl.specter.t_com$rpl$specter21916.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21916");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21916.
 */
com.rpl.specter.__GT_t_com$rpl$specter21916 = (function com$rpl$specter$__GT_t_com$rpl$specter21916(meta21917){
return (new com.rpl.specter.t_com$rpl$specter21916(meta21917));
});

}

return (new com.rpl.specter.t_com$rpl$specter21916(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18611__auto__,v){
var ret__18612__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21924 = (function (meta21925){
this.meta21925 = meta21925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21926,meta21925__$1){
var self__ = this;
var _21926__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21924(meta21925__$1));
});

com.rpl.specter.t_com$rpl$specter21924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21926){
var self__ = this;
var _21926__$1 = this;
return self__.meta21925;
});

com.rpl.specter.t_com$rpl$specter21924.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21924.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19817__auto____$1){
return (function (curr__18611__auto__,v){
var ret__18612__auto__ = next_fn(v);
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
});})(next_fn,this__19817__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.t_com$rpl$specter21924.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21925","meta21925",61180208,null)], null);
});

com.rpl.specter.t_com$rpl$specter21924.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21924.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21924";

com.rpl.specter.t_com$rpl$specter21924.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21924");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21924.
 */
com.rpl.specter.__GT_t_com$rpl$specter21924 = (function com$rpl$specter$__GT_t_com$rpl$specter21924(meta21925){
return (new com.rpl.specter.t_com$rpl$specter21924(meta21925));
});

}

return (new com.rpl.specter.t_com$rpl$specter21924(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18611__auto__,k){
var ret__18612__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21932 = (function (meta21933){
this.meta21933 = meta21933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21934,meta21933__$1){
var self__ = this;
var _21934__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21932(meta21933__$1));
});

com.rpl.specter.t_com$rpl$specter21932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21934){
var self__ = this;
var _21934__$1 = this;
return self__.meta21933;
});

com.rpl.specter.t_com$rpl$specter21932.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21932.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19817__auto____$1){
return (function (curr__18611__auto__,k){
var ret__18612__auto__ = next_fn(k);
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
});})(next_fn,this__19817__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.t_com$rpl$specter21932.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21933","meta21933",-1058009114,null)], null);
});

com.rpl.specter.t_com$rpl$specter21932.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21932.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21932";

com.rpl.specter.t_com$rpl$specter21932.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21932");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21932.
 */
com.rpl.specter.__GT_t_com$rpl$specter21932 = (function com$rpl$specter$__GT_t_com$rpl$specter21932(meta21933){
return (new com.rpl.specter.t_com$rpl$specter21932(meta21933));
});

}

return (new com.rpl.specter.t_com$rpl$specter21932(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21956 = (function (meta21957){
this.meta21957 = meta21957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21958,meta21957__$1){
var self__ = this;
var _21958__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21956(meta21957__$1));
});

com.rpl.specter.t_com$rpl$specter21956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21958){
var self__ = this;
var _21958__$1 = this;
return self__.meta21957;
});

com.rpl.specter.t_com$rpl$specter21956.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21956.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__21963 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,structure);
var G__21964 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__21963,G__21964) : next_fn__20603__auto__.call(null,G__21963,G__21964));
});

com.rpl.specter.t_com$rpl$specter21956.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__21967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,structure);
var G__21968 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__21967,G__21968) : next_fn__20603__auto__.call(null,G__21967,G__21968));
});

com.rpl.specter.t_com$rpl$specter21956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21957","meta21957",1526763723,null)], null);
});

com.rpl.specter.t_com$rpl$specter21956.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21956.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21956";

com.rpl.specter.t_com$rpl$specter21956.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21956");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21956.
 */
com.rpl.specter.__GT_t_com$rpl$specter21956 = (function com$rpl$specter$__GT_t_com$rpl$specter21956(meta21957){
return (new com.rpl.specter.t_com$rpl$specter21956(meta21957));
});

}

return (new com.rpl.specter.t_com$rpl$specter21956(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__21984 = structure;
var G__21985 = s;
var G__21986 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__21987 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__21984,G__21985,G__21986,G__21987) : com.rpl.specter.navs.srange_transform.call(null,G__21984,G__21985,G__21986,G__21987));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21993 = (function (start_index_fn,end_index_fn,meta21994){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta21994 = meta21994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21995,meta21994__$1){
var self__ = this;
var _21995__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21993(self__.start_index_fn,self__.end_index_fn,meta21994__$1));
});

com.rpl.specter.t_com$rpl$specter21993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21995){
var self__ = this;
var _21995__$1 = this;
return self__.meta21994;
});

com.rpl.specter.t_com$rpl$specter21993.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21993.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
});

com.rpl.specter.t_com$rpl$specter21993.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__21997 = structure;
var G__21998 = s;
var G__21999 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__22000 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__21997,G__21998,G__21999,G__22000) : com.rpl.specter.navs.srange_transform.call(null,G__21997,G__21998,G__21999,G__22000));
});

com.rpl.specter.t_com$rpl$specter21993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta21994","meta21994",416908935,null)], null);
});

com.rpl.specter.t_com$rpl$specter21993.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21993.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21993";

com.rpl.specter.t_com$rpl$specter21993.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter21993");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21993.
 */
com.rpl.specter.__GT_t_com$rpl$specter21993 = (function com$rpl$specter$__GT_t_com$rpl$specter21993(start_index_fn__$1,end_index_fn__$1,meta21994){
return (new com.rpl.specter.t_com$rpl$specter21993(start_index_fn__$1,end_index_fn__$1,meta21994));
});

}

return (new com.rpl.specter.t_com$rpl$specter21993(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22004 = (function (start,end,meta22005){
this.start = start;
this.end = end;
this.meta22005 = meta22005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22006,meta22005__$1){
var self__ = this;
var _22006__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22004(self__.start,self__.end,meta22005__$1));
});

com.rpl.specter.t_com$rpl$specter22004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22006){
var self__ = this;
var _22006__$1 = this;
return self__.meta22005;
});

com.rpl.specter.t_com$rpl$specter22004.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22004.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter22004.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter22004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta22005","meta22005",1308478722,null)], null);
});

com.rpl.specter.t_com$rpl$specter22004.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22004.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22004";

com.rpl.specter.t_com$rpl$specter22004.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22004");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22004.
 */
com.rpl.specter.__GT_t_com$rpl$specter22004 = (function com$rpl$specter$__GT_t_com$rpl$specter22004(start__$1,end__$1,meta22005){
return (new com.rpl.specter.t_com$rpl$specter22004(start__$1,end__$1,meta22005));
});

}

return (new com.rpl.specter.t_com$rpl$specter22004(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18611__auto__,p__22020){
var vec__22021 = p__22020;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,(1),null);
var ret__18612__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22035 = (function (pred,meta22036){
this.pred = pred;
this.meta22036 = meta22036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22037,meta22036__$1){
var self__ = this;
var _22037__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22035(self__.pred,meta22036__$1));
});

com.rpl.specter.t_com$rpl$specter22035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22037){
var self__ = this;
var _22037__$1 = this;
return self__.meta22036;
});

com.rpl.specter.t_com$rpl$specter22035.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22035.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19817__auto____$1){
return (function (curr__18611__auto__,p__22044){
var vec__22045 = p__22044;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(1),null);
var ret__18612__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
});})(next_fn,this__19817__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter22035.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter22035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta22036","meta22036",-789690076,null)], null);
});

com.rpl.specter.t_com$rpl$specter22035.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22035.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22035";

com.rpl.specter.t_com$rpl$specter22035.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22035");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22035.
 */
com.rpl.specter.__GT_t_com$rpl$specter22035 = (function com$rpl$specter$__GT_t_com$rpl$specter22035(pred__$1,meta22036){
return (new com.rpl.specter.t_com$rpl$specter22035(pred__$1,meta22036));
});

}

return (new com.rpl.specter.t_com$rpl$specter22035(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__22051 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22051) : next_fn.call(null,G__22051));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__22052 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22052) : next_fn.call(null,G__22052));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22053 = (function (meta22054){
this.meta22054 = meta22054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22055,meta22054__$1){
var self__ = this;
var _22055__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22053(meta22054__$1));
});

com.rpl.specter.t_com$rpl$specter22053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22055){
var self__ = this;
var _22055__$1 = this;
return self__.meta22054;
});

com.rpl.specter.t_com$rpl$specter22053.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22053.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter22053.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter22053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22054","meta22054",-2005104583,null)], null);
});

com.rpl.specter.t_com$rpl$specter22053.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22053.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22053";

com.rpl.specter.t_com$rpl$specter22053.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22053");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22053.
 */
com.rpl.specter.__GT_t_com$rpl$specter22053 = (function com$rpl$specter$__GT_t_com$rpl$specter22053(meta22054){
return (new com.rpl.specter.t_com$rpl$specter22053(meta22054));
});

}

return (new com.rpl.specter.t_com$rpl$specter22053(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__22095 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22095) : next_fn.call(null,G__22095));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__22098 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22098) : next_fn.call(null,G__22098));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22100 = (function (meta22101){
this.meta22101 = meta22101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22102,meta22101__$1){
var self__ = this;
var _22102__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22100(meta22101__$1));
});

com.rpl.specter.t_com$rpl$specter22100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22102){
var self__ = this;
var _22102__$1 = this;
return self__.meta22101;
});

com.rpl.specter.t_com$rpl$specter22100.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22100.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter22100.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter22100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22101","meta22101",1227177654,null)], null);
});

com.rpl.specter.t_com$rpl$specter22100.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22100.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22100";

com.rpl.specter.t_com$rpl$specter22100.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22100");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22100.
 */
com.rpl.specter.__GT_t_com$rpl$specter22100 = (function com$rpl$specter$__GT_t_com$rpl$specter22100(meta22101){
return (new com.rpl.specter.t_com$rpl$specter22100(meta22101));
});

}

return (new com.rpl.specter.t_com$rpl$specter22100(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22129 = (function (meta22130){
this.meta22130 = meta22130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22131,meta22130__$1){
var self__ = this;
var _22131__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22129(meta22130__$1));
});

com.rpl.specter.t_com$rpl$specter22129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22131){
var self__ = this;
var _22131__$1 = this;
return self__.meta22130;
});

com.rpl.specter.t_com$rpl$specter22129.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22129.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter22129.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

com.rpl.specter.t_com$rpl$specter22129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22130","meta22130",410239833,null)], null);
});

com.rpl.specter.t_com$rpl$specter22129.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22129.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22129";

com.rpl.specter.t_com$rpl$specter22129.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22129");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22129.
 */
com.rpl.specter.__GT_t_com$rpl$specter22129 = (function com$rpl$specter$__GT_t_com$rpl$specter22129(meta22130){
return (new com.rpl.specter.t_com$rpl$specter22129(meta22130));
});

}

return (new com.rpl.specter.t_com$rpl$specter22129(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22159 = (function (meta22160){
this.meta22160 = meta22160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22161,meta22160__$1){
var self__ = this;
var _22161__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22159(meta22160__$1));
});

com.rpl.specter.t_com$rpl$specter22159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22161){
var self__ = this;
var _22161__$1 = this;
return self__.meta22160;
});

com.rpl.specter.t_com$rpl$specter22159.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22159.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter22159.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter22159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22160","meta22160",1461539371,null)], null);
});

com.rpl.specter.t_com$rpl$specter22159.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22159.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22159";

com.rpl.specter.t_com$rpl$specter22159.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22159");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22159.
 */
com.rpl.specter.__GT_t_com$rpl$specter22159 = (function com$rpl$specter$__GT_t_com$rpl$specter22159(meta22160){
return (new com.rpl.specter.t_com$rpl$specter22159(meta22160));
});

}

return (new com.rpl.specter.t_com$rpl$specter22159(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22185 = (function (meta22186){
this.meta22186 = meta22186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22187,meta22186__$1){
var self__ = this;
var _22187__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22185(meta22186__$1));
});

com.rpl.specter.t_com$rpl$specter22185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22187){
var self__ = this;
var _22187__$1 = this;
return self__.meta22186;
});

com.rpl.specter.t_com$rpl$specter22185.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22185.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter22185.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter22185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22186","meta22186",-1880693300,null)], null);
});

com.rpl.specter.t_com$rpl$specter22185.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22185.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22185";

com.rpl.specter.t_com$rpl$specter22185.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22185");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22185.
 */
com.rpl.specter.__GT_t_com$rpl$specter22185 = (function com$rpl$specter$__GT_t_com$rpl$specter22185(meta22186){
return (new com.rpl.specter.t_com$rpl$specter22185(meta22186));
});

}

return (new com.rpl.specter.t_com$rpl$specter22185(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__22206 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22206) : next_fn.call(null,G__22206));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22209 = (function (aset,meta22210){
this.aset = aset;
this.meta22210 = meta22210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22211,meta22210__$1){
var self__ = this;
var _22211__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22209(self__.aset,meta22210__$1));
});

com.rpl.specter.t_com$rpl$specter22209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22211){
var self__ = this;
var _22211__$1 = this;
return self__.meta22210;
});

com.rpl.specter.t_com$rpl$specter22209.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22209.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter22209.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter22209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta22210","meta22210",375879002,null)], null);
});

com.rpl.specter.t_com$rpl$specter22209.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22209.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22209";

com.rpl.specter.t_com$rpl$specter22209.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22209");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22209.
 */
com.rpl.specter.__GT_t_com$rpl$specter22209 = (function com$rpl$specter$__GT_t_com$rpl$specter22209(aset__$1,meta22210){
return (new com.rpl.specter.t_com$rpl$specter22209(aset__$1,meta22210));
});

}

return (new com.rpl.specter.t_com$rpl$specter22209(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__22255 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22255) : next_fn.call(null,G__22255));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22260 = (function (m_keys,meta22261){
this.m_keys = m_keys;
this.meta22261 = meta22261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22262,meta22261__$1){
var self__ = this;
var _22262__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22260(self__.m_keys,meta22261__$1));
});

com.rpl.specter.t_com$rpl$specter22260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22262){
var self__ = this;
var _22262__$1 = this;
return self__.meta22261;
});

com.rpl.specter.t_com$rpl$specter22260.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22260.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter22260.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
});

com.rpl.specter.t_com$rpl$specter22260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta22261","meta22261",1522382159,null)], null);
});

com.rpl.specter.t_com$rpl$specter22260.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22260.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22260";

com.rpl.specter.t_com$rpl$specter22260.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22260");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22260.
 */
com.rpl.specter.__GT_t_com$rpl$specter22260 = (function com$rpl$specter$__GT_t_com$rpl$specter22260(m_keys__$1,meta22261){
return (new com.rpl.specter.t_com$rpl$specter22260(m_keys__$1,meta22261));
});

}

return (new com.rpl.specter.t_com$rpl$specter22260(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24102__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22293 = (function (path,late,meta22294){
this.path = path;
this.late = late;
this.meta22294 = meta22294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22295,meta22294__$1){
var self__ = this;
var _22295__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22293(self__.path,self__.late,meta22294__$1));
});

com.rpl.specter.t_com$rpl$specter22293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22295){
var self__ = this;
var _22295__$1 = this;
return self__.meta22294;
});

com.rpl.specter.t_com$rpl$specter22293.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22293.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter22293.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__22321 = self__.late;
var G__22322 = ((function (G__22321,select_result,transformed,values_to_insert,next_fn,this__19817__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__22321,select_result,transformed,values_to_insert,next_fn,this__19817__auto____$1))
;
var G__22323 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__22321,G__22322,G__22323) : com.rpl.specter.compiled_transform.call(null,G__22321,G__22322,G__22323));
});

com.rpl.specter.t_com$rpl$specter22293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta22294","meta22294",-46420347,null)], null);
});

com.rpl.specter.t_com$rpl$specter22293.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22293.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22293";

com.rpl.specter.t_com$rpl$specter22293.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22293");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22293.
 */
com.rpl.specter.__GT_t_com$rpl$specter22293 = (function com$rpl$specter$__GT_t_com$rpl$specter22293(path__$1,late__$1,meta22294){
return (new com.rpl.specter.t_com$rpl$specter22293(path__$1,late__$1,meta22294));
});

}

return (new com.rpl.specter.t_com$rpl$specter22293(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24102 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24126__i = 0, G__24126__a = new Array(arguments.length -  0);
while (G__24126__i < G__24126__a.length) {G__24126__a[G__24126__i] = arguments[G__24126__i + 0]; ++G__24126__i;}
  path = new cljs.core.IndexedSeq(G__24126__a,0,null);
} 
return G__24102__delegate.call(this,path);};
G__24102.cljs$lang$maxFixedArity = 0;
G__24102.cljs$lang$applyTo = (function (arglist__24127){
var path = cljs.core.seq(arglist__24127);
return G__24102__delegate(path);
});
G__24102.cljs$core$IFn$_invoke$arity$variadic = G__24102__delegate;
return G__24102;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22363 = (function (key,meta22364){
this.key = key;
this.meta22364 = meta22364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22365,meta22364__$1){
var self__ = this;
var _22365__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22363(self__.key,meta22364__$1));
});

com.rpl.specter.t_com$rpl$specter22363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22365){
var self__ = this;
var _22365__$1 = this;
return self__.meta22364;
});

com.rpl.specter.t_com$rpl$specter22363.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22363.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter22363.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter22363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta22364","meta22364",420958948,null)], null);
});

com.rpl.specter.t_com$rpl$specter22363.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22363.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22363";

com.rpl.specter.t_com$rpl$specter22363.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22363");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22363.
 */
com.rpl.specter.__GT_t_com$rpl$specter22363 = (function com$rpl$specter$__GT_t_com$rpl$specter22363(key__$1,meta22364){
return (new com.rpl.specter.t_com$rpl$specter22363(key__$1,meta22364));
});

}

return (new com.rpl.specter.t_com$rpl$specter22363(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22457 = (function (elem,meta22458){
this.elem = elem;
this.meta22458 = meta22458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22459,meta22458__$1){
var self__ = this;
var _22459__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22457(self__.elem,meta22458__$1));
});

com.rpl.specter.t_com$rpl$specter22457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22459){
var self__ = this;
var _22459__$1 = this;
return self__.meta22458;
});

com.rpl.specter.t_com$rpl$specter22457.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22457.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter22457.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter22457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta22458","meta22458",-1102917667,null)], null);
});

com.rpl.specter.t_com$rpl$specter22457.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22457.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22457";

com.rpl.specter.t_com$rpl$specter22457.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22457");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22457.
 */
com.rpl.specter.__GT_t_com$rpl$specter22457 = (function com$rpl$specter$__GT_t_com$rpl$specter22457(elem__$1,meta22458){
return (new com.rpl.specter.t_com$rpl$specter22457(elem__$1,meta22458));
});

}

return (new com.rpl.specter.t_com$rpl$specter22457(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22544 = (function (index,meta22545){
this.index = index;
this.meta22545 = meta22545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22546,meta22545__$1){
var self__ = this;
var _22546__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22544(self__.index,meta22545__$1));
});

com.rpl.specter.t_com$rpl$specter22544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22546){
var self__ = this;
var _22546__$1 = this;
return self__.meta22545;
});

com.rpl.specter.t_com$rpl$specter22544.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22544.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter22544.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache22567;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info22568 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,754,757,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache22567 = info22568;

return info22568;
})():info__20611__auto__);
var precompiled22569 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__22607 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled22569.cljs$core$IFn$_invoke$arity$1 ? precompiled22569.cljs$core$IFn$_invoke$arity$1(G__22607) : precompiled22569.call(null,G__22607));
} else {
return precompiled22569;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter22544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta22545","meta22545",-1882498715,null)], null);
});

com.rpl.specter.t_com$rpl$specter22544.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22544.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22544";

com.rpl.specter.t_com$rpl$specter22544.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22544");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22544.
 */
com.rpl.specter.__GT_t_com$rpl$specter22544 = (function com$rpl$specter$__GT_t_com$rpl$specter22544(index__$1,meta22545){
return (new com.rpl.specter.t_com$rpl$specter22544(index__$1,meta22545));
});

}

return (new com.rpl.specter.t_com$rpl$specter22544(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22714 = (function (i,meta22715){
this.i = i;
this.meta22715 = meta22715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22716,meta22715__$1){
var self__ = this;
var _22716__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22714(self__.i,meta22715__$1));
});

com.rpl.specter.t_com$rpl$specter22714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22716){
var self__ = this;
var _22716__$1 = this;
return self__.meta22715;
});

com.rpl.specter.t_com$rpl$specter22714.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22714.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter22714.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__24186 = (j - (1));
var G__24187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__24186;
s = G__24187;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__24188 = (j + (1));
var G__24189 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__24188;
s = G__24189;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache22792;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info22793 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,967,970,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache22792 = info22793;

return info22793;
})():info__20611__auto__);
var precompiled22794 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__22797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled22794.cljs$core$IFn$_invoke$arity$1 ? precompiled22794.cljs$core$IFn$_invoke$arity$1(G__22797) : precompiled22794.call(null,G__22797));
} else {
return precompiled22794;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache22799;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info22800 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache22799 = info22800;

return info22800;
})():info__20611__auto__);
var precompiled22801 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__22827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled22801.cljs$core$IFn$_invoke$arity$1 ? precompiled22801.cljs$core$IFn$_invoke$arity$1(G__22827) : precompiled22801.call(null,G__22827));
} else {
return precompiled22801;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter22714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta22715","meta22715",1789488515,null)], null);
});

com.rpl.specter.t_com$rpl$specter22714.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22714.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22714";

com.rpl.specter.t_com$rpl$specter22714.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22714");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22714.
 */
com.rpl.specter.__GT_t_com$rpl$specter22714 = (function com$rpl$specter$__GT_t_com$rpl$specter22714(i__$1,meta22715){
return (new com.rpl.specter.t_com$rpl$specter22714(i__$1,meta22715));
});

}

return (new com.rpl.specter.t_com$rpl$specter22714(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i){
return (function (curr__18611__auto__,e){
var ret__18612__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__22896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22896) : next_fn.call(null,G__22896));
})()
;
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
});})(i))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices){
return (function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__22909 = (function (){var G__22912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22912) : next_fn.call(null,G__22912));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22909,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22909,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__22909,newi_STAR_,newe,newi,indices){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache22918;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info22919 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices){
return (function (p1__22884_SHARP_){
return (p1__22884_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices){
return (function (p1__22886_SHARP_){
return (p1__22886_SHARP_ <= newi);
});})(info__20611__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache22918 = info22919;

return info22919;
})():info__20611__auto__);
var precompiled22920 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__22943 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices){
return (function (p1__22884_SHARP_){
return (p1__22884_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices){
return (function (p1__22886_SHARP_){
return (p1__22886_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices))
], null),com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices){
return (function (p1__22884_SHARP_){
return (p1__22884_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices){
return (function (p1__22886_SHARP_){
return (p1__22886_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled22920,dynamic_QMARK___20612__auto__,ii2,curri,vec__22909,newi_STAR_,newe,newi,indices))
], null);
return (precompiled22920.cljs$core$IFn$_invoke$arity$1 ? precompiled22920.cljs$core$IFn$_invoke$arity$1(G__22943) : precompiled22920.call(null,G__22943));
} else {
return precompiled22920;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__22909,newi_STAR_,newe,newi,indices))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache22960;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info22961 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache22960 = info22961;

return info22961;
})():info__20611__auto__);
var precompiled22962 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__22968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled22962.cljs$core$IFn$_invoke$arity$1 ? precompiled22962.cljs$core$IFn$_invoke$arity$1(G__22968) : precompiled22962.call(null,G__22968));
} else {
return precompiled22962;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache22971;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info22972 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache22971 = info22972;

return info22972;
})():info__20611__auto__);
var precompiled22973 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__22986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled22973.cljs$core$IFn$_invoke$arity$1 ? precompiled22973.cljs$core$IFn$_invoke$arity$1(G__22986) : precompiled22973.call(null,G__22986));
} else {
return precompiled22973;
}
})(),newe,s));
});})(indices))
,structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22993 = (function (start,meta22994){
this.start = start;
this.meta22994 = meta22994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22995,meta22994__$1){
var self__ = this;
var _22995__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22993(self__.start,meta22994__$1));
});

com.rpl.specter.t_com$rpl$specter22993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22995){
var self__ = this;
var _22995__$1 = this;
return self__.meta22994;
});

com.rpl.specter.t_com$rpl$specter22993.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22993.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,next_fn,this__19817__auto____$1){
return (function (curr__18611__auto__,e){
var ret__18612__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
});})(i,next_fn,this__19817__auto____$1))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.t_com$rpl$specter22993.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,next_fn,this__19817__auto____$1){
return (function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__23041 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23041,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23041,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23046;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23047 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__22884_SHARP_){
return (p1__22884_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__22886_SHARP_){
return (p1__22886_SHARP_ <= newi);
});})(info__20611__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22884#","p1__22884#",2095403419,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22886#","p1__22886#",219474755,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache23046 = info23047;

return info23047;
})():info__20611__auto__);
var precompiled23048 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23058 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__22884_SHARP_){
return (p1__22884_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__22886_SHARP_){
return (p1__22886_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
], null),com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__22884_SHARP_){
return (p1__22884_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__22886_SHARP_){
return (p1__22886_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled23048,dynamic_QMARK___20612__auto__,ii2,curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
], null);
return (precompiled23048.cljs$core$IFn$_invoke$arity$1 ? precompiled23048.cljs$core$IFn$_invoke$arity$1(G__23058) : precompiled23048.call(null,G__23058));
} else {
return precompiled23048;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__23041,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23060;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23061 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache23060 = info23061;

return info23061;
})():info__20611__auto__);
var precompiled23062 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled23062.cljs$core$IFn$_invoke$arity$1 ? precompiled23062.cljs$core$IFn$_invoke$arity$1(G__23066) : precompiled23062.call(null,G__23066));
} else {
return precompiled23062;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23067;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23068 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache23067 = info23068;

return info23068;
})():info__20611__auto__);
var precompiled23069 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled23069.cljs$core$IFn$_invoke$arity$1 ? precompiled23069.cljs$core$IFn$_invoke$arity$1(G__23073) : precompiled23069.call(null,G__23073));
} else {
return precompiled23069;
}
})(),newe,s));
});})(indices,next_fn,this__19817__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter22993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta22994","meta22994",445449056,null)], null);
});

com.rpl.specter.t_com$rpl$specter22993.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22993.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22993";

com.rpl.specter.t_com$rpl$specter22993.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter22993");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22993.
 */
com.rpl.specter.__GT_t_com$rpl$specter22993 = (function com$rpl$specter$__GT_t_com$rpl$specter22993(start__$1,meta22994){
return (new com.rpl.specter.t_com$rpl$specter22993(start__$1,meta22994));
});

}

return (new com.rpl.specter.t_com$rpl$specter22993(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23082 = (function (afn,meta23083){
this.afn = afn;
this.meta23083 = meta23083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23084,meta23083__$1){
var self__ = this;
var _23084__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23082(self__.afn,meta23083__$1));
});

com.rpl.specter.t_com$rpl$specter23082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23084){
var self__ = this;
var _23084__$1 = this;
return self__.meta23083;
});

com.rpl.specter.t_com$rpl$specter23082.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23082.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23095 = vals;
var G__23096 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23095,G__23096) : next_fn.call(null,G__23095,G__23096));
});

com.rpl.specter.t_com$rpl$specter23082.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23098 = vals;
var G__23099 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23098,G__23099) : next_fn.call(null,G__23098,G__23099));
});

com.rpl.specter.t_com$rpl$specter23082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta23083","meta23083",-1955246899,null)], null);
});

com.rpl.specter.t_com$rpl$specter23082.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23082.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23082";

com.rpl.specter.t_com$rpl$specter23082.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23082");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23082.
 */
com.rpl.specter.__GT_t_com$rpl$specter23082 = (function com$rpl$specter$__GT_t_com$rpl$specter23082(afn__$1,meta23083){
return (new com.rpl.specter.t_com$rpl$specter23082(afn__$1,meta23083));
});

}

return (new com.rpl.specter.t_com$rpl$specter23082(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__23102 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23102) : next_fn.call(null,G__23102));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__23103 = (function (){var G__23104 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23104) : next_fn.call(null,G__23104));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__23103) : unparse_fn.call(null,G__23103));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23105 = (function (parse_fn,unparse_fn,meta23106){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta23106 = meta23106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23107,meta23106__$1){
var self__ = this;
var _23107__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23105(self__.parse_fn,self__.unparse_fn,meta23106__$1));
});

com.rpl.specter.t_com$rpl$specter23105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23107){
var self__ = this;
var _23107__$1 = this;
return self__.meta23106;
});

com.rpl.specter.t_com$rpl$specter23105.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23105.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter23105.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var G__23108 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__23108) : self__.unparse_fn.call(null,G__23108));
});

com.rpl.specter.t_com$rpl$specter23105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta23106","meta23106",1435828948,null)], null);
});

com.rpl.specter.t_com$rpl$specter23105.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23105.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23105";

com.rpl.specter.t_com$rpl$specter23105.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23105");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23105.
 */
com.rpl.specter.__GT_t_com$rpl$specter23105 = (function com$rpl$specter$__GT_t_com$rpl$specter23105(parse_fn__$1,unparse_fn__$1,meta23106){
return (new com.rpl.specter.t_com$rpl$specter23105(parse_fn__$1,unparse_fn__$1,meta23106));
});

}

return (new com.rpl.specter.t_com$rpl$specter23105(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__23115 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23115) : next_fn.call(null,G__23115));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23120 = (function (meta23121){
this.meta23121 = meta23121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23122,meta23121__$1){
var self__ = this;
var _23122__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23120(meta23121__$1));
});

com.rpl.specter.t_com$rpl$specter23120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23122){
var self__ = this;
var _23122__$1 = this;
return self__.meta23121;
});

com.rpl.specter.t_com$rpl$specter23120.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23120.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});

com.rpl.specter.t_com$rpl$specter23120.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter23120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23121","meta23121",-2105680789,null)], null);
});

com.rpl.specter.t_com$rpl$specter23120.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23120.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23120";

com.rpl.specter.t_com$rpl$specter23120.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23120");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23120.
 */
com.rpl.specter.__GT_t_com$rpl$specter23120 = (function com$rpl$specter$__GT_t_com$rpl$specter23120(meta23121){
return (new com.rpl.specter.t_com$rpl$specter23120(meta23121));
});

}

return (new com.rpl.specter.t_com$rpl$specter23120(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18611__auto__,s){
var ret__18612__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23167 = (function (re,meta23168){
this.re = re;
this.meta23168 = meta23168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23169,meta23168__$1){
var self__ = this;
var _23169__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23167(self__.re,meta23168__$1));
});

com.rpl.specter.t_com$rpl$specter23167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23169){
var self__ = this;
var _23169__$1 = this;
return self__.meta23168;
});

com.rpl.specter.t_com$rpl$specter23167.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23167.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19817__auto____$1){
return (function (curr__18611__auto__,s){
var ret__18612__auto__ = next_fn(s);
if((ret__18612__auto__ === com.rpl.specter.NONE)){
return curr__18611__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18612__auto__)){
return cljs.core.reduced(ret__18612__auto__);
} else {
return ret__18612__auto__;
}
}
});})(next_fn,this__19817__auto____$1))
,com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
});

com.rpl.specter.t_com$rpl$specter23167.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return clojure.string.replace(structure,self__.re,next_fn);
});

com.rpl.specter.t_com$rpl$specter23167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta23168","meta23168",2110886791,null)], null);
});

com.rpl.specter.t_com$rpl$specter23167.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23167.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23167";

com.rpl.specter.t_com$rpl$specter23167.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23167");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23167.
 */
com.rpl.specter.__GT_t_com$rpl$specter23167 = (function com$rpl$specter$__GT_t_com$rpl$specter23167(re__$1,meta23168){
return (new com.rpl.specter.t_com$rpl$specter23167(re__$1,meta23168));
});

}

return (new com.rpl.specter.t_com$rpl$specter23167(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24487__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5733__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23185 = (function (path,temp__5733__auto__,late,meta23186){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta23186 = meta23186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_23187,meta23186__$1){
var self__ = this;
var _23187__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23185(self__.path,self__.temp__5733__auto__,self__.late,meta23186__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_23187){
var self__ = this;
var _23187__$1 = this;
return self__.meta23186;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23185.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23185.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5733__auto__){
return (function (p1__23181_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__23181_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23185.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5733__auto__){
return (function (p1__23182_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__23182_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23185.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23186","meta23186",-1471372660,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23185.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23185.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23185";

com.rpl.specter.t_com$rpl$specter23185.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23185");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23185.
 */
com.rpl.specter.__GT_t_com$rpl$specter23185 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23185(path__$1,temp__5733__auto____$1,late__$1,meta23186){
return (new com.rpl.specter.t_com$rpl$specter23185(path__$1,temp__5733__auto____$1,late__$1,meta23186));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23185(path,temp__5733__auto__,late,null));
});})(temp__5733__auto__))
);
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
}
};
var G__24487 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24490__i = 0, G__24490__a = new Array(arguments.length -  0);
while (G__24490__i < G__24490__a.length) {G__24490__a[G__24490__i] = arguments[G__24490__i + 0]; ++G__24490__i;}
  path = new cljs.core.IndexedSeq(G__24490__a,0,null);
} 
return G__24487__delegate.call(this,path);};
G__24487.cljs$lang$maxFixedArity = 0;
G__24487.cljs$lang$applyTo = (function (arglist__24491){
var path = cljs.core.seq(arglist__24491);
return G__24487__delegate(path);
});
G__24487.cljs$core$IFn$_invoke$arity$variadic = G__24487__delegate;
return G__24487;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24492__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return ((function (afn,temp__5733__auto__){
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
;})(afn,temp__5733__auto__))
} else {
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5733__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23195 = (function (path,temp__5733__auto__,late,meta23196){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta23196 = meta23196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_23197,meta23196__$1){
var self__ = this;
var _23197__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23195(self__.path,self__.temp__5733__auto__,self__.late,meta23196__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_23197){
var self__ = this;
var _23197__$1 = this;
return self__.meta23196;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23195.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23195.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5733__auto__){
return (function (p1__23188_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__23188_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23195.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5733__auto__){
return (function (p1__23189_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__23189_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23195.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23196","meta23196",614950509,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23195.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23195.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23195";

com.rpl.specter.t_com$rpl$specter23195.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23195");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23195.
 */
com.rpl.specter.__GT_t_com$rpl$specter23195 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23195(path__$1,temp__5733__auto____$1,late__$1,meta23196){
return (new com.rpl.specter.t_com$rpl$specter23195(path__$1,temp__5733__auto____$1,late__$1,meta23196));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23195(path,temp__5733__auto__,late,null));
});})(temp__5733__auto__))
);
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
}
};
var G__24492 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24506__i = 0, G__24506__a = new Array(arguments.length -  0);
while (G__24506__i < G__24506__a.length) {G__24506__a[G__24506__i] = arguments[G__24506__i + 0]; ++G__24506__i;}
  path = new cljs.core.IndexedSeq(G__24506__a,0,null);
} 
return G__24492__delegate.call(this,path);};
G__24492.cljs$lang$maxFixedArity = 0;
G__24492.cljs$lang$applyTo = (function (arglist__24507){
var path = cljs.core.seq(arglist__24507);
return G__24492__delegate(path);
});
G__24492.cljs$core$IFn$_invoke$arity$variadic = G__24492__delegate;
return G__24492;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24508__delegate = function (path){
var G__23209 = com.rpl.specter.ALL;
var G__23210 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__23209,G__23210) : com.rpl.specter.subselect.call(null,G__23209,G__23210));
};
var G__24508 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24509__i = 0, G__24509__a = new Array(arguments.length -  0);
while (G__24509__i < G__24509__a.length) {G__24509__a[G__24509__i] = arguments[G__24509__i + 0]; ++G__24509__i;}
  path = new cljs.core.IndexedSeq(G__24509__a,0,null);
} 
return G__24508__delegate.call(this,path);};
G__24508.cljs$lang$maxFixedArity = 0;
G__24508.cljs$lang$applyTo = (function (arglist__24510){
var path = cljs.core.seq(arglist__24510);
return G__24508__delegate(path);
});
G__24508.cljs$core$IFn$_invoke$arity$variadic = G__24508__delegate;
return G__24508;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23211 = (function (path,update_fn,late,late_fn,meta23212){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta23212 = meta23212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23213,meta23212__$1){
var self__ = this;
var _23213__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23211(self__.path,self__.update_fn,self__.late,self__.late_fn,meta23212__$1));
});

com.rpl.specter.t_com$rpl$specter23211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23213){
var self__ = this;
var _23213__$1 = this;
return self__.meta23212;
});

com.rpl.specter.t_com$rpl$specter23211.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23211.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter23211.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter23211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta23212","meta23212",-296024390,null)], null);
});

com.rpl.specter.t_com$rpl$specter23211.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23211.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23211";

com.rpl.specter.t_com$rpl$specter23211.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23211");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23211.
 */
com.rpl.specter.__GT_t_com$rpl$specter23211 = (function com$rpl$specter$__GT_t_com$rpl$specter23211(path__$1,update_fn__$1,late__$1,late_fn__$1,meta23212){
return (new com.rpl.specter.t_com$rpl$specter23211(path__$1,update_fn__$1,late__$1,late_fn__$1,meta23212));
});

}

return (new com.rpl.specter.t_com$rpl$specter23211(path,update_fn,late,late_fn,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23214 = (function (path,reduce_fn,late,late_fn,meta23215){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta23215 = meta23215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23216,meta23215__$1){
var self__ = this;
var _23216__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23214(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta23215__$1));
});

com.rpl.specter.t_com$rpl$specter23214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23216){
var self__ = this;
var _23216__$1 = this;
return self__.meta23215;
});

com.rpl.specter.t_com$rpl$specter23214.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23214.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter23214.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter23214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta23215","meta23215",1771699504,null)], null);
});

com.rpl.specter.t_com$rpl$specter23214.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23214.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23214";

com.rpl.specter.t_com$rpl$specter23214.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23214");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23214.
 */
com.rpl.specter.__GT_t_com$rpl$specter23214 = (function com$rpl$specter$__GT_t_com$rpl$specter23214(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta23215){
return (new com.rpl.specter.t_com$rpl$specter23214(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta23215));
});

}

return (new com.rpl.specter.t_com$rpl$specter23214(path,reduce_fn,late,late_fn,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__23218 = (function (p1__23217_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__23217_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23218) : com.rpl.specter.pred.call(null,G__23218));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__23222 = (function (p1__23221_SHARP_){
return (p1__23221_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23222) : com.rpl.specter.pred.call(null,G__23222));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__23228 = (function (p1__23223_SHARP_){
return (p1__23223_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23228) : com.rpl.specter.pred.call(null,G__23228));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__23231 = (function (p1__23229_SHARP_){
return (p1__23229_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23231) : com.rpl.specter.pred.call(null,G__23231));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__23236 = (function (p1__23235_SHARP_){
return (p1__23235_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23236) : com.rpl.specter.pred.call(null,G__23236));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__23238_24556 = com.rpl.specter.protocols.implicit_nav;
var G__23239_24557 = "null";
var G__23240_24558 = ((function (G__23238_24556,G__23239_24557){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__23238_24556,G__23239_24557))
;
goog.object.set(G__23238_24556,G__23239_24557,G__23240_24558);
cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

var G__23245_24566 = com.rpl.specter.protocols.implicit_nav;
var G__23246_24567 = "string";
var G__23247_24568 = ((function (G__23245_24566,G__23246_24567){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__23245_24566,G__23246_24567))
;
goog.object.set(G__23245_24566,G__23246_24567,G__23247_24568);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

var G__23248_24569 = com.rpl.specter.protocols.implicit_nav;
var G__23249_24570 = "number";
var G__23250_24571 = ((function (G__23248_24569,G__23249_24570){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__23248_24569,G__23249_24570))
;
goog.object.set(G__23248_24569,G__23249_24570,G__23250_24571);
cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

var G__23251_24573 = com.rpl.specter.protocols.implicit_nav;
var G__23252_24574 = "boolean";
var G__23253_24575 = ((function (G__23251_24573,G__23252_24574){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__23251_24573,G__23252_24574))
;
goog.object.set(G__23251_24573,G__23252_24574,G__23253_24575);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__23254_24576 = com.rpl.specter.protocols.implicit_nav;
var G__23255_24577 = "function";
var G__23256_24578 = ((function (G__23254_24576,G__23255_24577){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__23254_24576,G__23255_24577))
;
goog.object.set(G__23254_24576,G__23255_24577,G__23256_24578);
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
});
RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__23257 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23257) : next_fn.call(null,G__23257));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__23258 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23258) : next_fn.call(null,G__23258));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23259 = (function (v,meta23260){
this.v = v;
this.meta23260 = meta23260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23261,meta23260__$1){
var self__ = this;
var _23261__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23259(self__.v,meta23260__$1));
});

com.rpl.specter.t_com$rpl$specter23259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23261){
var self__ = this;
var _23261__$1 = this;
return self__.meta23260;
});

com.rpl.specter.t_com$rpl$specter23259.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23259.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter23259.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter23259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta23260","meta23260",-1242408123,null)], null);
});

com.rpl.specter.t_com$rpl$specter23259.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23259.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23259";

com.rpl.specter.t_com$rpl$specter23259.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23259");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23259.
 */
com.rpl.specter.__GT_t_com$rpl$specter23259 = (function com$rpl$specter$__GT_t_com$rpl$specter23259(v__$1,meta23260){
return (new com.rpl.specter.t_com$rpl$specter23259(v__$1,meta23260));
});

}

return (new com.rpl.specter.t_com$rpl$specter23259(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__23272 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__23272) : com.rpl.specter.nil__GT_val.call(null,G__23272));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__23273 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__23273) : com.rpl.specter.nil__GT_val.call(null,G__23273));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__23274 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__23274) : com.rpl.specter.nil__GT_val.call(null,G__23274));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__23278 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23278) : next_fn.call(null,G__23278));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__23283 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23283) : next_fn.call(null,G__23283));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23285 = (function (meta23286){
this.meta23286 = meta23286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23287,meta23286__$1){
var self__ = this;
var _23287__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23285(meta23286__$1));
});

com.rpl.specter.t_com$rpl$specter23285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23287){
var self__ = this;
var _23287__$1 = this;
return self__.meta23286;
});

com.rpl.specter.t_com$rpl$specter23285.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23285.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});

com.rpl.specter.t_com$rpl$specter23285.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter23285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23286","meta23286",1636716973,null)], null);
});

com.rpl.specter.t_com$rpl$specter23285.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23285.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23285";

com.rpl.specter.t_com$rpl$specter23285.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23285");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23285.
 */
com.rpl.specter.__GT_t_com$rpl$specter23285 = (function com$rpl$specter$__GT_t_com$rpl$specter23285(meta23286){
return (new com.rpl.specter.t_com$rpl$specter23285(meta23286));
});

}

return (new com.rpl.specter.t_com$rpl$specter23285(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__23292 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23292) : next_fn.call(null,G__23292));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__23293 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23293) : next_fn.call(null,G__23293));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0))));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23294 = (function (meta23295){
this.meta23295 = meta23295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23296,meta23295__$1){
var self__ = this;
var _23296__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23294(meta23295__$1));
});

com.rpl.specter.t_com$rpl$specter23294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23296){
var self__ = this;
var _23296__$1 = this;
return self__.meta23295;
});

com.rpl.specter.t_com$rpl$specter23294.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23294.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.name(structure));
});

com.rpl.specter.t_com$rpl$specter23294.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0))));

}
}
});

com.rpl.specter.t_com$rpl$specter23294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23295","meta23295",1629154581,null)], null);
});

com.rpl.specter.t_com$rpl$specter23294.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23294.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23294";

com.rpl.specter.t_com$rpl$specter23294.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23294");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23294.
 */
com.rpl.specter.__GT_t_com$rpl$specter23294 = (function com$rpl$specter$__GT_t_com$rpl$specter23294(meta23295){
return (new com.rpl.specter.t_com$rpl$specter23294(meta23295));
});

}

return (new com.rpl.specter.t_com$rpl$specter23294(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__23307 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23307) : next_fn.call(null,G__23307));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__23308 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23308) : next_fn.call(null,G__23308));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0))));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23314 = (function (meta23315){
this.meta23315 = meta23315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23316,meta23315__$1){
var self__ = this;
var _23316__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23314(meta23315__$1));
});

com.rpl.specter.t_com$rpl$specter23314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23316){
var self__ = this;
var _23316__$1 = this;
return self__.meta23315;
});

com.rpl.specter.t_com$rpl$specter23314.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23314.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});

com.rpl.specter.t_com$rpl$specter23314.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0))));

}
}
});

com.rpl.specter.t_com$rpl$specter23314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23315","meta23315",1836431835,null)], null);
});

com.rpl.specter.t_com$rpl$specter23314.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23314.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23314";

com.rpl.specter.t_com$rpl$specter23314.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23314");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23314.
 */
com.rpl.specter.__GT_t_com$rpl$specter23314 = (function com$rpl$specter$__GT_t_com$rpl$specter23314(meta23315){
return (new com.rpl.specter.t_com$rpl$specter23314(meta23315));
});

}

return (new com.rpl.specter.t_com$rpl$specter23314(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24651__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23333 = (function (path,late,meta23334){
this.path = path;
this.late = late;
this.meta23334 = meta23334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23335,meta23334__$1){
var self__ = this;
var _23335__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23333(self__.path,self__.late,meta23334__$1));
});

com.rpl.specter.t_com$rpl$specter23333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23335){
var self__ = this;
var _23335__$1 = this;
return self__.meta23334;
});

com.rpl.specter.t_com$rpl$specter23333.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23333.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__23345 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23344,G__23345) : next_fn__20603__auto__.call(null,G__23344,G__23345));
});

com.rpl.specter.t_com$rpl$specter23333.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23346 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__23347 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23346,G__23347) : next_fn__20603__auto__.call(null,G__23346,G__23347));
});

com.rpl.specter.t_com$rpl$specter23333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23334","meta23334",750416336,null)], null);
});

com.rpl.specter.t_com$rpl$specter23333.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23333.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23333";

com.rpl.specter.t_com$rpl$specter23333.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23333");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23333.
 */
com.rpl.specter.__GT_t_com$rpl$specter23333 = (function com$rpl$specter$__GT_t_com$rpl$specter23333(path__$1,late__$1,meta23334){
return (new com.rpl.specter.t_com$rpl$specter23333(path__$1,late__$1,meta23334));
});

}

return (new com.rpl.specter.t_com$rpl$specter23333(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24651 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24674__i = 0, G__24674__a = new Array(arguments.length -  0);
while (G__24674__i < G__24674__a.length) {G__24674__a[G__24674__i] = arguments[G__24674__i + 0]; ++G__24674__i;}
  path = new cljs.core.IndexedSeq(G__24674__a,0,null);
} 
return G__24651__delegate.call(this,path);};
G__24651.cljs$lang$maxFixedArity = 0;
G__24651.cljs$lang$applyTo = (function (arglist__24675){
var path = cljs.core.seq(arglist__24675);
return G__24651__delegate(path);
});
G__24651.cljs$core$IFn$_invoke$arity$variadic = G__24651__delegate;
return G__24651;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24679__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23356 = (function (path,late,meta23357){
this.path = path;
this.late = late;
this.meta23357 = meta23357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23358,meta23357__$1){
var self__ = this;
var _23358__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23356(self__.path,self__.late,meta23357__$1));
});

com.rpl.specter.t_com$rpl$specter23356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23358){
var self__ = this;
var _23358__$1 = this;
return self__.meta23357;
});

com.rpl.specter.t_com$rpl$specter23356.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23356.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23364 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__23365 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23364,G__23365) : next_fn__20603__auto__.call(null,G__23364,G__23365));
});

com.rpl.specter.t_com$rpl$specter23356.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23370 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__23371 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23370,G__23371) : next_fn__20603__auto__.call(null,G__23370,G__23371));
});

com.rpl.specter.t_com$rpl$specter23356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23357","meta23357",-623074436,null)], null);
});

com.rpl.specter.t_com$rpl$specter23356.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23356.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23356";

com.rpl.specter.t_com$rpl$specter23356.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23356");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23356.
 */
com.rpl.specter.__GT_t_com$rpl$specter23356 = (function com$rpl$specter$__GT_t_com$rpl$specter23356(path__$1,late__$1,meta23357){
return (new com.rpl.specter.t_com$rpl$specter23356(path__$1,late__$1,meta23357));
});

}

return (new com.rpl.specter.t_com$rpl$specter23356(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24679 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24717__i = 0, G__24717__a = new Array(arguments.length -  0);
while (G__24717__i < G__24717__a.length) {G__24717__a[G__24717__i] = arguments[G__24717__i + 0]; ++G__24717__i;}
  path = new cljs.core.IndexedSeq(G__24717__a,0,null);
} 
return G__24679__delegate.call(this,path);};
G__24679.cljs$lang$maxFixedArity = 0;
G__24679.cljs$lang$applyTo = (function (arglist__24720){
var path = cljs.core.seq(arglist__24720);
return G__24679__delegate(path);
});
G__24679.cljs$core$IFn$_invoke$arity$variadic = G__24679__delegate;
return G__24679;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23378 = (function (val,meta23379){
this.val = val;
this.meta23379 = meta23379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23380,meta23379__$1){
var self__ = this;
var _23380__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23378(self__.val,meta23379__$1));
});

com.rpl.specter.t_com$rpl$specter23378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23380){
var self__ = this;
var _23380__$1 = this;
return self__.meta23379;
});

com.rpl.specter.t_com$rpl$specter23378.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23378.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23391 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,self__.val);
var G__23392 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23391,G__23392) : next_fn__20603__auto__.call(null,G__23391,G__23392));
});

com.rpl.specter.t_com$rpl$specter23378.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,self__.val);
var G__23395 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23394,G__23395) : next_fn__20603__auto__.call(null,G__23394,G__23395));
});

com.rpl.specter.t_com$rpl$specter23378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta23379","meta23379",1068702334,null)], null);
});

com.rpl.specter.t_com$rpl$specter23378.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23378.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23378";

com.rpl.specter.t_com$rpl$specter23378.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23378");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23378.
 */
com.rpl.specter.__GT_t_com$rpl$specter23378 = (function com$rpl$specter$__GT_t_com$rpl$specter23378(val__$1,meta23379){
return (new com.rpl.specter.t_com$rpl$specter23378(val__$1,meta23379));
});

}

return (new com.rpl.specter.t_com$rpl$specter23378(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24745__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23408 = (function (path,late,meta23409){
this.path = path;
this.late = late;
this.meta23409 = meta23409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23410,meta23409__$1){
var self__ = this;
var _23410__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23408(self__.path,self__.late,meta23409__$1));
});

com.rpl.specter.t_com$rpl$specter23408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23410){
var self__ = this;
var _23410__$1 = this;
return self__.meta23409;
});

com.rpl.specter.t_com$rpl$specter23408.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23408.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter23408.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter23408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23409","meta23409",-1116339269,null)], null);
});

com.rpl.specter.t_com$rpl$specter23408.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23408.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23408";

com.rpl.specter.t_com$rpl$specter23408.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23408");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23408.
 */
com.rpl.specter.__GT_t_com$rpl$specter23408 = (function com$rpl$specter$__GT_t_com$rpl$specter23408(path__$1,late__$1,meta23409){
return (new com.rpl.specter.t_com$rpl$specter23408(path__$1,late__$1,meta23409));
});

}

return (new com.rpl.specter.t_com$rpl$specter23408(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24745 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24768__i = 0, G__24768__a = new Array(arguments.length -  0);
while (G__24768__i < G__24768__a.length) {G__24768__a[G__24768__i] = arguments[G__24768__i + 0]; ++G__24768__i;}
  path = new cljs.core.IndexedSeq(G__24768__a,0,null);
} 
return G__24745__delegate.call(this,path);};
G__24745.cljs$lang$maxFixedArity = 0;
G__24745.cljs$lang$applyTo = (function (arglist__24771){
var path = cljs.core.seq(arglist__24771);
return G__24745__delegate(path);
});
G__24745.cljs$core$IFn$_invoke$arity$variadic = G__24745__delegate;
return G__24745;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23432 = (function (meta23433){
this.meta23433 = meta23433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23434,meta23433__$1){
var self__ = this;
var _23434__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23432(meta23433__$1));
});

com.rpl.specter.t_com$rpl$specter23432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23434){
var self__ = this;
var _23434__$1 = this;
return self__.meta23433;
});

com.rpl.specter.t_com$rpl$specter23432.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23432.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23438 = cljs.core.PersistentVector.EMPTY;
var G__23439 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23438,G__23439) : next_fn.call(null,G__23438,G__23439));
});

com.rpl.specter.t_com$rpl$specter23432.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23443 = cljs.core.PersistentVector.EMPTY;
var G__23444 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23443,G__23444) : next_fn.call(null,G__23443,G__23444));
});

com.rpl.specter.t_com$rpl$specter23432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23433","meta23433",-735596377,null)], null);
});

com.rpl.specter.t_com$rpl$specter23432.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23432.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23432";

com.rpl.specter.t_com$rpl$specter23432.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23432");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23432.
 */
com.rpl.specter.__GT_t_com$rpl$specter23432 = (function com$rpl$specter$__GT_t_com$rpl$specter23432(meta23433){
return (new com.rpl.specter.t_com$rpl$specter23432(meta23433));
});

}

return (new com.rpl.specter.t_com$rpl$specter23432(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__24790 = null;
var G__24790__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__24790__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5733__auto__){
return (function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23447 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta23448){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta23448 = meta23448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5733__auto__){
return (function (_23449,meta23448__$1){
var self__ = this;
var _23449__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23447(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta23448__$1));
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5733__auto__){
return (function (_23449){
var self__ = this;
var _23449__$1 = this;
return self__.meta23448;
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23447.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23447.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23447.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23447.getBasis = ((function (afn,temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta23448","meta23448",-841757351,null)], null);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23447.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23447.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23447";

com.rpl.specter.t_com$rpl$specter23447.cljs$lang$ctorPrWriter = ((function (afn,temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23447");
});})(afn,temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23447.
 */
com.rpl.specter.__GT_t_com$rpl$specter23447 = ((function (afn,temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23447(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta23448){
return (new com.rpl.specter.t_com$rpl$specter23447(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta23448));
});})(afn,temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23447(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
});})(afn,temp__5733__auto__))
);
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
} else {
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5733__auto__){
return (function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23453 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta23454){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta23454 = meta23454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_23455,meta23454__$1){
var self__ = this;
var _23455__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23453(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta23454__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_23455){
var self__ = this;
var _23455__$1 = this;
return self__.meta23454;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23453.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23453.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5733__auto__){
return (function (p1__23445_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__23445_SHARP_);
});})(this$__$1,temp__5733__auto__))
,self__.late_then,self__.late_else);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23453.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5733__auto__){
return (function (p1__23446_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__23446_SHARP_);
});})(this$__$1,temp__5733__auto__))
,self__.late_then,self__.late_else);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23453.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta23454","meta23454",1805906588,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23453.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23453.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23453";

com.rpl.specter.t_com$rpl$specter23453.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23453");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23453.
 */
com.rpl.specter.__GT_t_com$rpl$specter23453 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23453(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta23454){
return (new com.rpl.specter.t_com$rpl$specter23453(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta23454));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23453(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
});})(temp__5733__auto__))
);
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
}
});
G__24790 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__24790__2.call(this,cond_p,then_path);
case 3:
return G__24790__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24790.cljs$core$IFn$_invoke$arity$2 = G__24790__2;
G__24790.cljs$core$IFn$_invoke$arity$3 = G__24790__3;
return G__24790;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24831__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__23459){
var vec__23460 = p__23459;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23460,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23460,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__24831 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__24840__i = 0, G__24840__a = new Array(arguments.length -  0);
while (G__24840__i < G__24840__a.length) {G__24840__a[G__24840__i] = arguments[G__24840__i + 0]; ++G__24840__i;}
  conds = new cljs.core.IndexedSeq(G__24840__a,0,null);
} 
return G__24831__delegate.call(this,conds);};
G__24831.cljs$lang$maxFixedArity = 0;
G__24831.cljs$lang$applyTo = (function (arglist__24841){
var conds = cljs.core.seq(arglist__24841);
return G__24831__delegate(conds);
});
G__24831.cljs$core$IFn$_invoke$arity$variadic = G__24831__delegate;
return G__24831;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__24843 = null;
var G__24843__0 = (function (){
return com.rpl.specter.STAY;
});
var G__24843__1 = (function (path){
return path;
});
var G__24843__2 = (function (path1,path2){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23463 = (function (path1,path2,late1,late2,meta23464){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta23464 = meta23464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23465,meta23464__$1){
var self__ = this;
var _23465__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23463(self__.path1,self__.path2,self__.late1,self__.late2,meta23464__$1));
});

com.rpl.specter.t_com$rpl$specter23463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23465){
var self__ = this;
var _23465__$1 = this;
return self__.meta23464;
});

com.rpl.specter.t_com$rpl$specter23463.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23463.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
});

com.rpl.specter.t_com$rpl$specter23463.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter23463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta23464","meta23464",-1834237001,null)], null);
});

com.rpl.specter.t_com$rpl$specter23463.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23463.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23463";

com.rpl.specter.t_com$rpl$specter23463.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23463");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23463.
 */
com.rpl.specter.__GT_t_com$rpl$specter23463 = (function com$rpl$specter$__GT_t_com$rpl$specter23463(path1__$1,path2__$1,late1__$1,late2__$1,meta23464){
return (new com.rpl.specter.t_com$rpl$specter23463(path1__$1,path2__$1,late1__$1,late2__$1,meta23464));
});

}

return (new com.rpl.specter.t_com$rpl$specter23463(path1,path2,late1,late2,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
});
var G__24843__3 = (function() { 
var G__24851__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__24851 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__24855__i = 0, G__24855__a = new Array(arguments.length -  2);
while (G__24855__i < G__24855__a.length) {G__24855__a[G__24855__i] = arguments[G__24855__i + 2]; ++G__24855__i;}
  paths = new cljs.core.IndexedSeq(G__24855__a,0,null);
} 
return G__24851__delegate.call(this,path1,path2,paths);};
G__24851.cljs$lang$maxFixedArity = 2;
G__24851.cljs$lang$applyTo = (function (arglist__24856){
var path1 = cljs.core.first(arglist__24856);
arglist__24856 = cljs.core.next(arglist__24856);
var path2 = cljs.core.first(arglist__24856);
var paths = cljs.core.rest(arglist__24856);
return G__24851__delegate(path1,path2,paths);
});
G__24851.cljs$core$IFn$_invoke$arity$variadic = G__24851__delegate;
return G__24851;
})()
;
G__24843 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__24843__0.call(this);
case 1:
return G__24843__1.call(this,path1);
case 2:
return G__24843__2.call(this,path1,path2);
default:
var G__24859 = null;
if (arguments.length > 2) {
var G__24860__i = 0, G__24860__a = new Array(arguments.length -  2);
while (G__24860__i < G__24860__a.length) {G__24860__a[G__24860__i] = arguments[G__24860__i + 2]; ++G__24860__i;}
G__24859 = new cljs.core.IndexedSeq(G__24860__a,0,null);
}
return G__24843__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__24859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24843.cljs$lang$maxFixedArity = 2;
G__24843.cljs$lang$applyTo = G__24843__3.cljs$lang$applyTo;
G__24843.cljs$core$IFn$_invoke$arity$0 = G__24843__0;
G__24843.cljs$core$IFn$_invoke$arity$1 = G__24843__1;
G__24843.cljs$core$IFn$_invoke$arity$2 = G__24843__2;
G__24843.cljs$core$IFn$_invoke$arity$variadic = G__24843__3.cljs$core$IFn$_invoke$arity$variadic;
return G__24843;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24864__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__24864 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24865__i = 0, G__24865__a = new Array(arguments.length -  0);
while (G__24865__i < G__24865__a.length) {G__24865__a[G__24865__i] = arguments[G__24865__i + 0]; ++G__24865__i;}
  path = new cljs.core.IndexedSeq(G__24865__a,0,null);
} 
return G__24864__delegate.call(this,path);};
G__24864.cljs$lang$maxFixedArity = 0;
G__24864.cljs$lang$applyTo = (function (arglist__24866){
var path = cljs.core.seq(arglist__24866);
return G__24864__delegate(path);
});
G__24864.cljs$core$IFn$_invoke$arity$variadic = G__24864__delegate;
return G__24864;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24869__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__24869 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24870__i = 0, G__24870__a = new Array(arguments.length -  0);
while (G__24870__i < G__24870__a.length) {G__24870__a[G__24870__i] = arguments[G__24870__i + 0]; ++G__24870__i;}
  path = new cljs.core.IndexedSeq(G__24870__a,0,null);
} 
return G__24869__delegate.call(this,path);};
G__24869.cljs$lang$maxFixedArity = 0;
G__24869.cljs$lang$applyTo = (function (arglist__24872){
var path = cljs.core.seq(arglist__24872);
return G__24869__delegate(path);
});
G__24869.cljs$core$IFn$_invoke$arity$variadic = G__24869__delegate;
return G__24869;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__20611__auto__ = com.rpl.specter.pathcache23476;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23477 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2117),(2117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache23476 = info23477;

return info23477;
})():info__20611__auto__);
var precompiled23478 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23485 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled23478.cljs$core$IFn$_invoke$arity$1 ? precompiled23478.cljs$core$IFn$_invoke$arity$1(G__23485) : precompiled23478.call(null,G__23485));
} else {
return precompiled23478;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__20611__auto__ = com.rpl.specter.pathcache23486;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23487 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2117),(2117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,688,690,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache23486 = info23487;

return info23487;
})():info__20611__auto__);
var precompiled23488 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23493 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled23488.cljs$core$IFn$_invoke$arity$1 ? precompiled23488.cljs$core$IFn$_invoke$arity$1(G__23493) : precompiled23488.call(null,G__23493));
} else {
return precompiled23488;
}
})());

return p;
}));
var empty__GT_NONE_24921 = (function (){var G__23496 = cljs.core.empty_QMARK_;
var G__23497 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__23496,G__23497) : com.rpl.specter.if_path.call(null,G__23496,G__23497));
})();
var compact_STAR__24922 = ((function (empty__GT_NONE_24921){
return (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_24921) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_24921));
});})(empty__GT_NONE_24921))
;
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (empty__GT_NONE_24921,compact_STAR__24922){
return (function() { 
var G__24926__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__24922,path);
};
var G__24926 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24927__i = 0, G__24927__a = new Array(arguments.length -  0);
while (G__24927__i < G__24927__a.length) {G__24927__a[G__24927__i] = arguments[G__24927__i + 0]; ++G__24927__i;}
  path = new cljs.core.IndexedSeq(G__24927__a,0,null);
} 
return G__24926__delegate.call(this,path);};
G__24926.cljs$lang$maxFixedArity = 0;
G__24926.cljs$lang$applyTo = (function (arglist__24928){
var path = cljs.core.seq(arglist__24928);
return G__24926__delegate(path);
});
G__24926.cljs$core$IFn$_invoke$arity$variadic = G__24926__delegate;
return G__24926;
})()
;})(empty__GT_NONE_24921,compact_STAR__24922))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
