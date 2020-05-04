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
var G__23832__delegate = function (args){
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
var G__23832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23833__i = 0, G__23833__a = new Array(arguments.length -  0);
while (G__23833__i < G__23833__a.length) {G__23833__a[G__23833__i] = arguments[G__23833__i + 0]; ++G__23833__i;}
  args = new cljs.core.IndexedSeq(G__23833__a,0,null);
} 
return G__23832__delegate.call(this,args);};
G__23832.cljs$lang$maxFixedArity = 0;
G__23832.cljs$lang$applyTo = (function (arglist__23834){
var args = cljs.core.seq(arglist__23834);
return G__23832__delegate(args);
});
G__23832.cljs$core$IFn$_invoke$arity$variadic = G__23832__delegate;
return G__23832;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23835 = arguments.length;
var i__4731__auto___23836 = (0);
while(true){
if((i__4731__auto___23836 < len__4730__auto___23835)){
args__4736__auto__.push((arguments[i__4731__auto___23836]));

var G__23837 = (i__4731__auto___23836 + (1));
i__4731__auto___23836 = G__23837;
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
com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq23031){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23031));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__23045 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23046 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__23045,G__23046) : com.rpl.specter.compiled_select.call(null,G__23045,G__23046));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__23049 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23050 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__23049,G__23050) : com.rpl.specter.compiled_select_one.call(null,G__23049,G__23050));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__23053 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23054 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__23053,G__23054) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__23053,G__23054));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__23057 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23058 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__23057,G__23058) : com.rpl.specter.compiled_select_first.call(null,G__23057,G__23058));
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
var G__23059 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23060 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__23059,G__23060) : com.rpl.specter.compiled_select_any.call(null,G__23059,G__23060));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__23061 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23062 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23061,G__23062) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__23061,G__23062));
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
var G__23065 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__23066 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__23065,G__23066) : com.rpl.specter.compiled_traverse.call(null,G__23065,G__23066));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__23071 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__23071) : com.rpl.specter.compiled_traverse_all.call(null,G__23071));
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
var G__23081 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23083 = transform_fn;
var G__23084 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__23081,G__23083,G__23084) : com.rpl.specter.compiled_transform.call(null,G__23081,G__23083,G__23084));
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
var G__23097 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23098 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__23097,G__23098) : com.rpl.specter.compiled_multi_transform.call(null,G__23097,G__23098));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__23105 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23106 = val;
var G__23107 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__23105,G__23106,G__23107) : com.rpl.specter.compiled_setval.call(null,G__23105,G__23106,G__23107));
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
var len__4730__auto___23848 = arguments.length;
var i__4731__auto___23849 = (0);
while(true){
if((i__4731__auto___23849 < len__4730__auto___23848)){
args__4736__auto__.push((arguments[i__4731__auto___23849]));

var G__23850 = (i__4731__auto___23849 + (1));
i__4731__auto___23849 = G__23850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__23149){
var map__23152 = p__23149;
var map__23152__$1 = (((((!((map__23152 == null))))?(((((map__23152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23152):map__23152);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23152__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__23166 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__23167 = transform_fn;
var G__23168 = structure;
var G__23169 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__23170 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__23166,G__23167,G__23168,G__23169,G__23170) : com.rpl.specter.compiled_replace_in.call(null,G__23166,G__23167,G__23168,G__23169,G__23170));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq23117){
var G__23118 = cljs.core.first(seq23117);
var seq23117__$1 = cljs.core.next(seq23117);
var G__23119 = cljs.core.first(seq23117__$1);
var seq23117__$2 = cljs.core.next(seq23117__$1);
var G__23120 = cljs.core.first(seq23117__$2);
var seq23117__$3 = cljs.core.next(seq23117__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23118,G__23119,G__23120,seq23117__$3);
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
var G__23854__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__23854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23855__i = 0, G__23855__a = new Array(arguments.length -  0);
while (G__23855__i < G__23855__a.length) {G__23855__a[G__23855__i] = arguments[G__23855__i + 0]; ++G__23855__i;}
  args = new cljs.core.IndexedSeq(G__23855__a,0,null);
} 
return G__23854__delegate.call(this,args);};
G__23854.cljs$lang$maxFixedArity = 0;
G__23854.cljs$lang$applyTo = (function (arglist__23856){
var args = cljs.core.seq(arglist__23856);
return G__23854__delegate(args);
});
G__23854.cljs$core$IFn$_invoke$arity$variadic = G__23854__delegate;
return G__23854;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23177 = (function (meta23178){
this.meta23178 = meta23178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23179,meta23178__$1){
var self__ = this;
var _23179__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23177(meta23178__$1));
});

com.rpl.specter.t_com$rpl$specter23177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23179){
var self__ = this;
var _23179__$1 = this;
return self__.meta23178;
});

com.rpl.specter.t_com$rpl$specter23177.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23177.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter23177.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter23177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23178","meta23178",-1628263425,null)], null);
});

com.rpl.specter.t_com$rpl$specter23177.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23177.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23177";

com.rpl.specter.t_com$rpl$specter23177.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23177");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23177.
 */
com.rpl.specter.__GT_t_com$rpl$specter23177 = (function com$rpl$specter$__GT_t_com$rpl$specter23177(meta23178){
return (new com.rpl.specter.t_com$rpl$specter23177(meta23178));
});

}

return (new com.rpl.specter.t_com$rpl$specter23177(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23186 = (function (afn,meta23187){
this.afn = afn;
this.meta23187 = meta23187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23188,meta23187__$1){
var self__ = this;
var _23188__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23186(self__.afn,meta23187__$1));
});

com.rpl.specter.t_com$rpl$specter23186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23188){
var self__ = this;
var _23188__$1 = this;
return self__.meta23187;
});

com.rpl.specter.t_com$rpl$specter23186.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23186.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter23186.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter23186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta23187","meta23187",1161126531,null)], null);
});

com.rpl.specter.t_com$rpl$specter23186.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23186.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23186";

com.rpl.specter.t_com$rpl$specter23186.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23186");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23186.
 */
com.rpl.specter.__GT_t_com$rpl$specter23186 = (function com$rpl$specter$__GT_t_com$rpl$specter23186(afn__$1,meta23187){
return (new com.rpl.specter.t_com$rpl$specter23186(afn__$1,meta23187));
});

}

return (new com.rpl.specter.t_com$rpl$specter23186(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23189 = (function (afn,meta23190){
this.afn = afn;
this.meta23190 = meta23190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23191,meta23190__$1){
var self__ = this;
var _23191__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23189(self__.afn,meta23190__$1));
});

com.rpl.specter.t_com$rpl$specter23189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23191){
var self__ = this;
var _23191__$1 = this;
return self__.meta23190;
});

com.rpl.specter.t_com$rpl$specter23189.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23189.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter23189.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
});

com.rpl.specter.t_com$rpl$specter23189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta23190","meta23190",1826049374,null)], null);
});

com.rpl.specter.t_com$rpl$specter23189.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23189.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23189";

com.rpl.specter.t_com$rpl$specter23189.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23189");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23189.
 */
com.rpl.specter.__GT_t_com$rpl$specter23189 = (function com$rpl$specter$__GT_t_com$rpl$specter23189(afn__$1,meta23190){
return (new com.rpl.specter.t_com$rpl$specter23189(afn__$1,meta23190));
});

}

return (new com.rpl.specter.t_com$rpl$specter23189(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__23195 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__23195) : com.rpl.specter.terminal.call(null,G__23195));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23199 = (function (meta23200){
this.meta23200 = meta23200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23201,meta23200__$1){
var self__ = this;
var _23201__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23199(meta23200__$1));
});

com.rpl.specter.t_com$rpl$specter23199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23201){
var self__ = this;
var _23201__$1 = this;
return self__.meta23200;
});

com.rpl.specter.t_com$rpl$specter23199.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23199.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter23199.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter23199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23200","meta23200",2047086532,null)], null);
});

com.rpl.specter.t_com$rpl$specter23199.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23199.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23199";

com.rpl.specter.t_com$rpl$specter23199.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23199");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23199.
 */
com.rpl.specter.__GT_t_com$rpl$specter23199 = (function com$rpl$specter$__GT_t_com$rpl$specter23199(meta23200){
return (new com.rpl.specter.t_com$rpl$specter23199(meta23200));
});

}

return (new com.rpl.specter.t_com$rpl$specter23199(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23202 = (function (meta23203){
this.meta23203 = meta23203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23204,meta23203__$1){
var self__ = this;
var _23204__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23202(meta23203__$1));
});

com.rpl.specter.t_com$rpl$specter23202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23204){
var self__ = this;
var _23204__$1 = this;
return self__.meta23203;
});

com.rpl.specter.t_com$rpl$specter23202.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23202.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter23202.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23203","meta23203",-1710436056,null)], null);
});

com.rpl.specter.t_com$rpl$specter23202.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23202.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23202";

com.rpl.specter.t_com$rpl$specter23202.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23202");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23202.
 */
com.rpl.specter.__GT_t_com$rpl$specter23202 = (function com$rpl$specter$__GT_t_com$rpl$specter23202(meta23203){
return (new com.rpl.specter.t_com$rpl$specter23202(meta23203));
});

}

return (new com.rpl.specter.t_com$rpl$specter23202(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23211 = (function (meta23212){
this.meta23212 = meta23212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23213,meta23212__$1){
var self__ = this;
var _23213__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23211(meta23212__$1));
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

com.rpl.specter.t_com$rpl$specter23211.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter23211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23212","meta23212",-296024390,null)], null);
});

com.rpl.specter.t_com$rpl$specter23211.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23211.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23211";

com.rpl.specter.t_com$rpl$specter23211.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23211");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23211.
 */
com.rpl.specter.__GT_t_com$rpl$specter23211 = (function com$rpl$specter$__GT_t_com$rpl$specter23211(meta23212){
return (new com.rpl.specter.t_com$rpl$specter23211(meta23212));
});

}

return (new com.rpl.specter.t_com$rpl$specter23211(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23220 = (function (meta23221){
this.meta23221 = meta23221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23222,meta23221__$1){
var self__ = this;
var _23222__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23220(meta23221__$1));
});

com.rpl.specter.t_com$rpl$specter23220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23222){
var self__ = this;
var _23222__$1 = this;
return self__.meta23221;
});

com.rpl.specter.t_com$rpl$specter23220.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23220.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23220.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter23220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23221","meta23221",-853352546,null)], null);
});

com.rpl.specter.t_com$rpl$specter23220.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23220.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23220";

com.rpl.specter.t_com$rpl$specter23220.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23220");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23220.
 */
com.rpl.specter.__GT_t_com$rpl$specter23220 = (function com$rpl$specter$__GT_t_com$rpl$specter23220(meta23221){
return (new com.rpl.specter.t_com$rpl$specter23220(meta23221));
});

}

return (new com.rpl.specter.t_com$rpl$specter23220(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23225 = (function (meta23226){
this.meta23226 = meta23226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23227,meta23226__$1){
var self__ = this;
var _23227__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23225(meta23226__$1));
});

com.rpl.specter.t_com$rpl$specter23225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23227){
var self__ = this;
var _23227__$1 = this;
return self__.meta23226;
});

com.rpl.specter.t_com$rpl$specter23225.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23225.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23228 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,structure);
var G__23229 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23228,G__23229) : next_fn__20603__auto__.call(null,G__23228,G__23229));
});

com.rpl.specter.t_com$rpl$specter23225.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,structure);
var G__23231 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23230,G__23231) : next_fn__20603__auto__.call(null,G__23230,G__23231));
});

com.rpl.specter.t_com$rpl$specter23225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23226","meta23226",618019040,null)], null);
});

com.rpl.specter.t_com$rpl$specter23225.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23225.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23225";

com.rpl.specter.t_com$rpl$specter23225.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23225");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23225.
 */
com.rpl.specter.__GT_t_com$rpl$specter23225 = (function com$rpl$specter$__GT_t_com$rpl$specter23225(meta23226){
return (new com.rpl.specter.t_com$rpl$specter23225(meta23226));
});

}

return (new com.rpl.specter.t_com$rpl$specter23225(null));
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
var G__23232 = structure;
var G__23233 = s;
var G__23234 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__23235 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__23232,G__23233,G__23234,G__23235) : com.rpl.specter.navs.srange_transform.call(null,G__23232,G__23233,G__23234,G__23235));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23236 = (function (start_index_fn,end_index_fn,meta23237){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta23237 = meta23237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23238,meta23237__$1){
var self__ = this;
var _23238__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23236(self__.start_index_fn,self__.end_index_fn,meta23237__$1));
});

com.rpl.specter.t_com$rpl$specter23236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23238){
var self__ = this;
var _23238__$1 = this;
return self__.meta23237;
});

com.rpl.specter.t_com$rpl$specter23236.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23236.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23236.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__23249 = structure;
var G__23250 = s;
var G__23251 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__23252 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__23249,G__23250,G__23251,G__23252) : com.rpl.specter.navs.srange_transform.call(null,G__23249,G__23250,G__23251,G__23252));
});

com.rpl.specter.t_com$rpl$specter23236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta23237","meta23237",-911584570,null)], null);
});

com.rpl.specter.t_com$rpl$specter23236.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23236.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23236";

com.rpl.specter.t_com$rpl$specter23236.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23236");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23236.
 */
com.rpl.specter.__GT_t_com$rpl$specter23236 = (function com$rpl$specter$__GT_t_com$rpl$specter23236(start_index_fn__$1,end_index_fn__$1,meta23237){
return (new com.rpl.specter.t_com$rpl$specter23236(start_index_fn__$1,end_index_fn__$1,meta23237));
});

}

return (new com.rpl.specter.t_com$rpl$specter23236(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23259 = (function (start,end,meta23260){
this.start = start;
this.end = end;
this.meta23260 = meta23260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23261,meta23260__$1){
var self__ = this;
var _23261__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23259(self__.start,self__.end,meta23260__$1));
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
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter23259.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter23259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta23260","meta23260",-1242408123,null)], null);
});

com.rpl.specter.t_com$rpl$specter23259.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23259.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23259";

com.rpl.specter.t_com$rpl$specter23259.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23259");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23259.
 */
com.rpl.specter.__GT_t_com$rpl$specter23259 = (function com$rpl$specter$__GT_t_com$rpl$specter23259(start__$1,end__$1,meta23260){
return (new com.rpl.specter.t_com$rpl$specter23259(start__$1,end__$1,meta23260));
});

}

return (new com.rpl.specter.t_com$rpl$specter23259(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18611__auto__,p__23266){
var vec__23267 = p__23266;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23267,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23267,(1),null);
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23276 = (function (pred,meta23277){
this.pred = pred;
this.meta23277 = meta23277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23278,meta23277__$1){
var self__ = this;
var _23278__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23276(self__.pred,meta23277__$1));
});

com.rpl.specter.t_com$rpl$specter23276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23278){
var self__ = this;
var _23278__$1 = this;
return self__.meta23277;
});

com.rpl.specter.t_com$rpl$specter23276.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23276.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19817__auto____$1){
return (function (curr__18611__auto__,p__23283){
var vec__23284 = p__23283;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23284,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23284,(1),null);
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

com.rpl.specter.t_com$rpl$specter23276.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter23276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta23277","meta23277",369343897,null)], null);
});

com.rpl.specter.t_com$rpl$specter23276.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23276.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23276";

com.rpl.specter.t_com$rpl$specter23276.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23276");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23276.
 */
com.rpl.specter.__GT_t_com$rpl$specter23276 = (function com$rpl$specter$__GT_t_com$rpl$specter23276(pred__$1,meta23277){
return (new com.rpl.specter.t_com$rpl$specter23276(pred__$1,meta23277));
});

}

return (new com.rpl.specter.t_com$rpl$specter23276(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__23291 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23291) : next_fn.call(null,G__23291));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__23292 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23292) : next_fn.call(null,G__23292));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23293 = (function (meta23294){
this.meta23294 = meta23294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23295,meta23294__$1){
var self__ = this;
var _23295__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23293(meta23294__$1));
});

com.rpl.specter.t_com$rpl$specter23293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23295){
var self__ = this;
var _23295__$1 = this;
return self__.meta23294;
});

com.rpl.specter.t_com$rpl$specter23293.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23293.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter23293.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23294","meta23294",-633408569,null)], null);
});

com.rpl.specter.t_com$rpl$specter23293.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23293.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23293";

com.rpl.specter.t_com$rpl$specter23293.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23293");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23293.
 */
com.rpl.specter.__GT_t_com$rpl$specter23293 = (function com$rpl$specter$__GT_t_com$rpl$specter23293(meta23294){
return (new com.rpl.specter.t_com$rpl$specter23293(meta23294));
});

}

return (new com.rpl.specter.t_com$rpl$specter23293(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__23296 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23296) : next_fn.call(null,G__23296));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__23300 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23300) : next_fn.call(null,G__23300));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23301 = (function (meta23302){
this.meta23302 = meta23302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23303,meta23302__$1){
var self__ = this;
var _23303__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23301(meta23302__$1));
});

com.rpl.specter.t_com$rpl$specter23301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23303){
var self__ = this;
var _23303__$1 = this;
return self__.meta23302;
});

com.rpl.specter.t_com$rpl$specter23301.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23301.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter23301.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23302","meta23302",1133329697,null)], null);
});

com.rpl.specter.t_com$rpl$specter23301.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23301.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23301";

com.rpl.specter.t_com$rpl$specter23301.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23301");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23301.
 */
com.rpl.specter.__GT_t_com$rpl$specter23301 = (function com$rpl$specter$__GT_t_com$rpl$specter23301(meta23302){
return (new com.rpl.specter.t_com$rpl$specter23301(meta23302));
});

}

return (new com.rpl.specter.t_com$rpl$specter23301(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23307 = (function (meta23308){
this.meta23308 = meta23308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23309,meta23308__$1){
var self__ = this;
var _23309__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23307(meta23308__$1));
});

com.rpl.specter.t_com$rpl$specter23307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23309){
var self__ = this;
var _23309__$1 = this;
return self__.meta23308;
});

com.rpl.specter.t_com$rpl$specter23307.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23307.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter23307.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23308","meta23308",1821911569,null)], null);
});

com.rpl.specter.t_com$rpl$specter23307.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23307.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23307";

com.rpl.specter.t_com$rpl$specter23307.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23307");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23307.
 */
com.rpl.specter.__GT_t_com$rpl$specter23307 = (function com$rpl$specter$__GT_t_com$rpl$specter23307(meta23308){
return (new com.rpl.specter.t_com$rpl$specter23307(meta23308));
});

}

return (new com.rpl.specter.t_com$rpl$specter23307(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23321 = (function (meta23322){
this.meta23322 = meta23322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23323,meta23322__$1){
var self__ = this;
var _23323__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23321(meta23322__$1));
});

com.rpl.specter.t_com$rpl$specter23321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23323){
var self__ = this;
var _23323__$1 = this;
return self__.meta23322;
});

com.rpl.specter.t_com$rpl$specter23321.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23321.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter23321.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23322","meta23322",-1765597778,null)], null);
});

com.rpl.specter.t_com$rpl$specter23321.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23321.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23321";

com.rpl.specter.t_com$rpl$specter23321.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23321");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23321.
 */
com.rpl.specter.__GT_t_com$rpl$specter23321 = (function com$rpl$specter$__GT_t_com$rpl$specter23321(meta23322){
return (new com.rpl.specter.t_com$rpl$specter23321(meta23322));
});

}

return (new com.rpl.specter.t_com$rpl$specter23321(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23327 = (function (meta23328){
this.meta23328 = meta23328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23329,meta23328__$1){
var self__ = this;
var _23329__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23327(meta23328__$1));
});

com.rpl.specter.t_com$rpl$specter23327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23329){
var self__ = this;
var _23329__$1 = this;
return self__.meta23328;
});

com.rpl.specter.t_com$rpl$specter23327.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23327.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter23327.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23328","meta23328",-421470531,null)], null);
});

com.rpl.specter.t_com$rpl$specter23327.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23327.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23327";

com.rpl.specter.t_com$rpl$specter23327.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23327");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23327.
 */
com.rpl.specter.__GT_t_com$rpl$specter23327 = (function com$rpl$specter$__GT_t_com$rpl$specter23327(meta23328){
return (new com.rpl.specter.t_com$rpl$specter23327(meta23328));
});

}

return (new com.rpl.specter.t_com$rpl$specter23327(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__23334 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23334) : next_fn.call(null,G__23334));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23335 = (function (aset,meta23336){
this.aset = aset;
this.meta23336 = meta23336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23337,meta23336__$1){
var self__ = this;
var _23337__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23335(self__.aset,meta23336__$1));
});

com.rpl.specter.t_com$rpl$specter23335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23337){
var self__ = this;
var _23337__$1 = this;
return self__.meta23336;
});

com.rpl.specter.t_com$rpl$specter23335.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23335.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter23335.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta23336","meta23336",2142331135,null)], null);
});

com.rpl.specter.t_com$rpl$specter23335.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23335.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23335";

com.rpl.specter.t_com$rpl$specter23335.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23335");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23335.
 */
com.rpl.specter.__GT_t_com$rpl$specter23335 = (function com$rpl$specter$__GT_t_com$rpl$specter23335(aset__$1,meta23336){
return (new com.rpl.specter.t_com$rpl$specter23335(aset__$1,meta23336));
});

}

return (new com.rpl.specter.t_com$rpl$specter23335(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__23346 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23346) : next_fn.call(null,G__23346));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23347 = (function (m_keys,meta23348){
this.m_keys = m_keys;
this.meta23348 = meta23348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23349,meta23348__$1){
var self__ = this;
var _23349__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23347(self__.m_keys,meta23348__$1));
});

com.rpl.specter.t_com$rpl$specter23347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23349){
var self__ = this;
var _23349__$1 = this;
return self__.meta23348;
});

com.rpl.specter.t_com$rpl$specter23347.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23347.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter23347.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta23348","meta23348",-1766986330,null)], null);
});

com.rpl.specter.t_com$rpl$specter23347.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23347.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23347";

com.rpl.specter.t_com$rpl$specter23347.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23347");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23347.
 */
com.rpl.specter.__GT_t_com$rpl$specter23347 = (function com$rpl$specter$__GT_t_com$rpl$specter23347(m_keys__$1,meta23348){
return (new com.rpl.specter.t_com$rpl$specter23347(m_keys__$1,meta23348));
});

}

return (new com.rpl.specter.t_com$rpl$specter23347(m_keys,null));
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
var G__24176__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23350 = (function (path,late,meta23351){
this.path = path;
this.late = late;
this.meta23351 = meta23351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23352,meta23351__$1){
var self__ = this;
var _23352__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23350(self__.path,self__.late,meta23351__$1));
});

com.rpl.specter.t_com$rpl$specter23350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23352){
var self__ = this;
var _23352__$1 = this;
return self__.meta23351;
});

com.rpl.specter.t_com$rpl$specter23350.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23350.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter23350.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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
var G__23353 = self__.late;
var G__23354 = ((function (G__23353,select_result,transformed,values_to_insert,next_fn,this__19817__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__23353,select_result,transformed,values_to_insert,next_fn,this__19817__auto____$1))
;
var G__23355 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__23353,G__23354,G__23355) : com.rpl.specter.compiled_transform.call(null,G__23353,G__23354,G__23355));
});

com.rpl.specter.t_com$rpl$specter23350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23351","meta23351",990926325,null)], null);
});

com.rpl.specter.t_com$rpl$specter23350.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23350.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23350";

com.rpl.specter.t_com$rpl$specter23350.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23350");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23350.
 */
com.rpl.specter.__GT_t_com$rpl$specter23350 = (function com$rpl$specter$__GT_t_com$rpl$specter23350(path__$1,late__$1,meta23351){
return (new com.rpl.specter.t_com$rpl$specter23350(path__$1,late__$1,meta23351));
});

}

return (new com.rpl.specter.t_com$rpl$specter23350(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24176 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24196__i = 0, G__24196__a = new Array(arguments.length -  0);
while (G__24196__i < G__24196__a.length) {G__24196__a[G__24196__i] = arguments[G__24196__i + 0]; ++G__24196__i;}
  path = new cljs.core.IndexedSeq(G__24196__a,0,null);
} 
return G__24176__delegate.call(this,path);};
G__24176.cljs$lang$maxFixedArity = 0;
G__24176.cljs$lang$applyTo = (function (arglist__24197){
var path = cljs.core.seq(arglist__24197);
return G__24176__delegate(path);
});
G__24176.cljs$core$IFn$_invoke$arity$variadic = G__24176__delegate;
return G__24176;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23357 = (function (key,meta23358){
this.key = key;
this.meta23358 = meta23358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23359,meta23358__$1){
var self__ = this;
var _23359__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23357(self__.key,meta23358__$1));
});

com.rpl.specter.t_com$rpl$specter23357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23359){
var self__ = this;
var _23359__$1 = this;
return self__.meta23358;
});

com.rpl.specter.t_com$rpl$specter23357.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23357.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter23357.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter23357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta23358","meta23358",-385099968,null)], null);
});

com.rpl.specter.t_com$rpl$specter23357.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23357.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23357";

com.rpl.specter.t_com$rpl$specter23357.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23357");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23357.
 */
com.rpl.specter.__GT_t_com$rpl$specter23357 = (function com$rpl$specter$__GT_t_com$rpl$specter23357(key__$1,meta23358){
return (new com.rpl.specter.t_com$rpl$specter23357(key__$1,meta23358));
});

}

return (new com.rpl.specter.t_com$rpl$specter23357(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23364 = (function (elem,meta23365){
this.elem = elem;
this.meta23365 = meta23365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23366,meta23365__$1){
var self__ = this;
var _23366__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23364(self__.elem,meta23365__$1));
});

com.rpl.specter.t_com$rpl$specter23364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23366){
var self__ = this;
var _23366__$1 = this;
return self__.meta23365;
});

com.rpl.specter.t_com$rpl$specter23364.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23364.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter23364.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter23364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta23365","meta23365",-1542795246,null)], null);
});

com.rpl.specter.t_com$rpl$specter23364.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23364.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23364";

com.rpl.specter.t_com$rpl$specter23364.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23364");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23364.
 */
com.rpl.specter.__GT_t_com$rpl$specter23364 = (function com$rpl$specter$__GT_t_com$rpl$specter23364(elem__$1,meta23365){
return (new com.rpl.specter.t_com$rpl$specter23364(elem__$1,meta23365));
});

}

return (new com.rpl.specter.t_com$rpl$specter23364(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23378 = (function (index,meta23379){
this.index = index;
this.meta23379 = meta23379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23380,meta23379__$1){
var self__ = this;
var _23380__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23378(self__.index,meta23379__$1));
});

com.rpl.specter.t_com$rpl$specter23378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23380){
var self__ = this;
var _23380__$1 = this;
return self__.meta23379;
});

com.rpl.specter.t_com$rpl$specter23378.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23378.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter23378.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23389;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23390 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,754,757,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache23389 = info23390;

return info23390;
})():info__20611__auto__);
var precompiled23391 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23399 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled23391.cljs$core$IFn$_invoke$arity$1 ? precompiled23391.cljs$core$IFn$_invoke$arity$1(G__23399) : precompiled23391.call(null,G__23399));
} else {
return precompiled23391;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter23378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta23379","meta23379",1068702334,null)], null);
});

com.rpl.specter.t_com$rpl$specter23378.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23378.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23378";

com.rpl.specter.t_com$rpl$specter23378.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23378");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23378.
 */
com.rpl.specter.__GT_t_com$rpl$specter23378 = (function com$rpl$specter$__GT_t_com$rpl$specter23378(index__$1,meta23379){
return (new com.rpl.specter.t_com$rpl$specter23378(index__$1,meta23379));
});

}

return (new com.rpl.specter.t_com$rpl$specter23378(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23407 = (function (i,meta23408){
this.i = i;
this.meta23408 = meta23408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23409,meta23408__$1){
var self__ = this;
var _23409__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23407(self__.i,meta23408__$1));
});

com.rpl.specter.t_com$rpl$specter23407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23409){
var self__ = this;
var _23409__$1 = this;
return self__.meta23408;
});

com.rpl.specter.t_com$rpl$specter23407.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23407.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter23407.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__24233 = (j - (1));
var G__24234 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__24233;
s = G__24234;
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
var G__24236 = (j + (1));
var G__24237 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__24236;
s = G__24237;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23420;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23421 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,967,970,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache23420 = info23421;

return info23421;
})():info__20611__auto__);
var precompiled23422 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled23422.cljs$core$IFn$_invoke$arity$1 ? precompiled23422.cljs$core$IFn$_invoke$arity$1(G__23424) : precompiled23422.call(null,G__23424));
} else {
return precompiled23422;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23425;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23426 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache23425 = info23426;

return info23426;
})():info__20611__auto__);
var precompiled23427 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled23427.cljs$core$IFn$_invoke$arity$1 ? precompiled23427.cljs$core$IFn$_invoke$arity$1(G__23428) : precompiled23427.call(null,G__23428));
} else {
return precompiled23427;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter23407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta23408","meta23408",1617418577,null)], null);
});

com.rpl.specter.t_com$rpl$specter23407.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23407.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23407";

com.rpl.specter.t_com$rpl$specter23407.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23407");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23407.
 */
com.rpl.specter.__GT_t_com$rpl$specter23407 = (function com$rpl$specter$__GT_t_com$rpl$specter23407(i__$1,meta23408){
return (new com.rpl.specter.t_com$rpl$specter23407(i__$1,meta23408));
});

}

return (new com.rpl.specter.t_com$rpl$specter23407(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i){
return (function (curr__18611__auto__,e){
var ret__18612__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__23431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23431) : next_fn.call(null,G__23431));
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
var vec__23432 = (function (){var G__23435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23435) : next_fn.call(null,G__23435));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23432,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23432,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__23432,newi_STAR_,newe,newi,indices){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23436;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23437 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices){
return (function (p1__23429_SHARP_){
return (p1__23429_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices){
return (function (p1__23430_SHARP_){
return (p1__23430_SHARP_ <= newi);
});})(info__20611__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache23436 = info23437;

return info23437;
})():info__20611__auto__);
var precompiled23438 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23439 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices){
return (function (p1__23429_SHARP_){
return (p1__23429_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices){
return (function (p1__23430_SHARP_){
return (p1__23430_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices))
], null),com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices){
return (function (p1__23429_SHARP_){
return (p1__23429_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices){
return (function (p1__23430_SHARP_){
return (p1__23430_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled23438,dynamic_QMARK___20612__auto__,ii2,curri,vec__23432,newi_STAR_,newe,newi,indices))
], null);
return (precompiled23438.cljs$core$IFn$_invoke$arity$1 ? precompiled23438.cljs$core$IFn$_invoke$arity$1(G__23439) : precompiled23438.call(null,G__23439));
} else {
return precompiled23438;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__23432,newi_STAR_,newe,newi,indices))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23440;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23441 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache23440 = info23441;

return info23441;
})():info__20611__auto__);
var precompiled23442 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled23442.cljs$core$IFn$_invoke$arity$1 ? precompiled23442.cljs$core$IFn$_invoke$arity$1(G__23443) : precompiled23442.call(null,G__23443));
} else {
return precompiled23442;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23445;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23446 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache23445 = info23446;

return info23446;
})():info__20611__auto__);
var precompiled23447 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled23447.cljs$core$IFn$_invoke$arity$1 ? precompiled23447.cljs$core$IFn$_invoke$arity$1(G__23448) : precompiled23447.call(null,G__23448));
} else {
return precompiled23447;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23449 = (function (start,meta23450){
this.start = start;
this.meta23450 = meta23450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23451,meta23450__$1){
var self__ = this;
var _23451__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23449(self__.start,meta23450__$1));
});

com.rpl.specter.t_com$rpl$specter23449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23451){
var self__ = this;
var _23451__$1 = this;
return self__.meta23450;
});

com.rpl.specter.t_com$rpl$specter23449.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23449.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23449.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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
var vec__23477 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23477,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23477,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23480;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23481 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__23429_SHARP_){
return (p1__23429_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__20611__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__23430_SHARP_){
return (p1__23430_SHARP_ <= newi);
});})(info__20611__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__23429#","p1__23429#",1371290445,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__23430#","p1__23430#",-1707690359,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache23480 = info23481;

return info23481;
})():info__20611__auto__);
var precompiled23482 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23486 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__23429_SHARP_){
return (p1__23429_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__23430_SHARP_){
return (p1__23430_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
], null),com.rpl.specter.ALL,((function (info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__23429_SHARP_){
return (p1__23429_SHARP_ >= (curri + (1)));
});})(info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
,((function (info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1){
return (function (p1__23430_SHARP_){
return (p1__23430_SHARP_ <= newi);
});})(info__20611__auto__,info__20611__auto____$1,precompiled23482,dynamic_QMARK___20612__auto__,ii2,curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
], null);
return (precompiled23482.cljs$core$IFn$_invoke$arity$1 ? precompiled23482.cljs$core$IFn$_invoke$arity$1(G__23486) : precompiled23482.call(null,G__23486));
} else {
return precompiled23482;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__23477,newi_STAR_,newe,newi,indices,next_fn,this__19817__auto____$1))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23490;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23491 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache23490 = info23491;

return info23491;
})():info__20611__auto__);
var precompiled23492 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled23492.cljs$core$IFn$_invoke$arity$1 ? precompiled23492.cljs$core$IFn$_invoke$arity$1(G__23496) : precompiled23492.call(null,G__23496));
} else {
return precompiled23492;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__20611__auto__ = com.rpl.specter.pathcache23497;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23498 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache23497 = info23498;

return info23498;
})():info__20611__auto__);
var precompiled23499 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled23499.cljs$core$IFn$_invoke$arity$1 ? precompiled23499.cljs$core$IFn$_invoke$arity$1(G__23503) : precompiled23499.call(null,G__23503));
} else {
return precompiled23499;
}
})(),newe,s));
});})(indices,next_fn,this__19817__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter23449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta23450","meta23450",-31854318,null)], null);
});

com.rpl.specter.t_com$rpl$specter23449.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23449.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23449";

com.rpl.specter.t_com$rpl$specter23449.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23449");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23449.
 */
com.rpl.specter.__GT_t_com$rpl$specter23449 = (function com$rpl$specter$__GT_t_com$rpl$specter23449(start__$1,meta23450){
return (new com.rpl.specter.t_com$rpl$specter23449(start__$1,meta23450));
});

}

return (new com.rpl.specter.t_com$rpl$specter23449(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23507 = (function (afn,meta23508){
this.afn = afn;
this.meta23508 = meta23508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23509,meta23508__$1){
var self__ = this;
var _23509__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23507(self__.afn,meta23508__$1));
});

com.rpl.specter.t_com$rpl$specter23507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23509){
var self__ = this;
var _23509__$1 = this;
return self__.meta23508;
});

com.rpl.specter.t_com$rpl$specter23507.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23507.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23513 = vals;
var G__23514 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23513,G__23514) : next_fn.call(null,G__23513,G__23514));
});

com.rpl.specter.t_com$rpl$specter23507.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23515 = vals;
var G__23516 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23515,G__23516) : next_fn.call(null,G__23515,G__23516));
});

com.rpl.specter.t_com$rpl$specter23507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta23508","meta23508",1378165782,null)], null);
});

com.rpl.specter.t_com$rpl$specter23507.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23507.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23507";

com.rpl.specter.t_com$rpl$specter23507.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23507");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23507.
 */
com.rpl.specter.__GT_t_com$rpl$specter23507 = (function com$rpl$specter$__GT_t_com$rpl$specter23507(afn__$1,meta23508){
return (new com.rpl.specter.t_com$rpl$specter23507(afn__$1,meta23508));
});

}

return (new com.rpl.specter.t_com$rpl$specter23507(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__23523 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23523) : next_fn.call(null,G__23523));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__23527 = (function (){var G__23528 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23528) : next_fn.call(null,G__23528));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__23527) : unparse_fn.call(null,G__23527));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23529 = (function (parse_fn,unparse_fn,meta23530){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta23530 = meta23530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23531,meta23530__$1){
var self__ = this;
var _23531__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23529(self__.parse_fn,self__.unparse_fn,meta23530__$1));
});

com.rpl.specter.t_com$rpl$specter23529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23531){
var self__ = this;
var _23531__$1 = this;
return self__.meta23530;
});

com.rpl.specter.t_com$rpl$specter23529.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23529.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter23529.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
var G__23538 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__23538) : self__.unparse_fn.call(null,G__23538));
});

com.rpl.specter.t_com$rpl$specter23529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta23530","meta23530",460426626,null)], null);
});

com.rpl.specter.t_com$rpl$specter23529.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23529.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23529";

com.rpl.specter.t_com$rpl$specter23529.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23529");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23529.
 */
com.rpl.specter.__GT_t_com$rpl$specter23529 = (function com$rpl$specter$__GT_t_com$rpl$specter23529(parse_fn__$1,unparse_fn__$1,meta23530){
return (new com.rpl.specter.t_com$rpl$specter23529(parse_fn__$1,unparse_fn__$1,meta23530));
});

}

return (new com.rpl.specter.t_com$rpl$specter23529(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__23545 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23545) : next_fn.call(null,G__23545));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23546 = (function (meta23547){
this.meta23547 = meta23547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23548,meta23547__$1){
var self__ = this;
var _23548__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23546(meta23547__$1));
});

com.rpl.specter.t_com$rpl$specter23546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23548){
var self__ = this;
var _23548__$1 = this;
return self__.meta23547;
});

com.rpl.specter.t_com$rpl$specter23546.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23546.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});

com.rpl.specter.t_com$rpl$specter23546.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23547","meta23547",-72554604,null)], null);
});

com.rpl.specter.t_com$rpl$specter23546.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23546.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23546";

com.rpl.specter.t_com$rpl$specter23546.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23546");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23546.
 */
com.rpl.specter.__GT_t_com$rpl$specter23546 = (function com$rpl$specter$__GT_t_com$rpl$specter23546(meta23547){
return (new com.rpl.specter.t_com$rpl$specter23546(meta23547));
});

}

return (new com.rpl.specter.t_com$rpl$specter23546(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23559 = (function (re,meta23560){
this.re = re;
this.meta23560 = meta23560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23561,meta23560__$1){
var self__ = this;
var _23561__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23559(self__.re,meta23560__$1));
});

com.rpl.specter.t_com$rpl$specter23559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23561){
var self__ = this;
var _23561__$1 = this;
return self__.meta23560;
});

com.rpl.specter.t_com$rpl$specter23559.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23559.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23559.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return clojure.string.replace(structure,self__.re,next_fn);
});

com.rpl.specter.t_com$rpl$specter23559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta23560","meta23560",-511101670,null)], null);
});

com.rpl.specter.t_com$rpl$specter23559.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23559.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23559";

com.rpl.specter.t_com$rpl$specter23559.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23559");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23559.
 */
com.rpl.specter.__GT_t_com$rpl$specter23559 = (function com$rpl$specter$__GT_t_com$rpl$specter23559(re__$1,meta23560){
return (new com.rpl.specter.t_com$rpl$specter23559(re__$1,meta23560));
});

}

return (new com.rpl.specter.t_com$rpl$specter23559(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24409__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5733__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23570 = (function (path,temp__5733__auto__,late,meta23571){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta23571 = meta23571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_23572,meta23571__$1){
var self__ = this;
var _23572__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23570(self__.path,self__.temp__5733__auto__,self__.late,meta23571__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_23572){
var self__ = this;
var _23572__$1 = this;
return self__.meta23571;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23570.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23570.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5733__auto__){
return (function (p1__23565_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__23565_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23570.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5733__auto__){
return (function (p1__23566_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__23566_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23570.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23571","meta23571",643199602,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23570.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23570.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23570";

com.rpl.specter.t_com$rpl$specter23570.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23570");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23570.
 */
com.rpl.specter.__GT_t_com$rpl$specter23570 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23570(path__$1,temp__5733__auto____$1,late__$1,meta23571){
return (new com.rpl.specter.t_com$rpl$specter23570(path__$1,temp__5733__auto____$1,late__$1,meta23571));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23570(path,temp__5733__auto__,late,null));
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
var G__24409 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24428__i = 0, G__24428__a = new Array(arguments.length -  0);
while (G__24428__i < G__24428__a.length) {G__24428__a[G__24428__i] = arguments[G__24428__i + 0]; ++G__24428__i;}
  path = new cljs.core.IndexedSeq(G__24428__a,0,null);
} 
return G__24409__delegate.call(this,path);};
G__24409.cljs$lang$maxFixedArity = 0;
G__24409.cljs$lang$applyTo = (function (arglist__24429){
var path = cljs.core.seq(arglist__24429);
return G__24409__delegate(path);
});
G__24409.cljs$core$IFn$_invoke$arity$variadic = G__24409__delegate;
return G__24409;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24430__delegate = function (path){
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23576 = (function (path,temp__5733__auto__,late,meta23577){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta23577 = meta23577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_23578,meta23577__$1){
var self__ = this;
var _23578__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23576(self__.path,self__.temp__5733__auto__,self__.late,meta23577__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_23578){
var self__ = this;
var _23578__$1 = this;
return self__.meta23577;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23576.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23576.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5733__auto__){
return (function (p1__23574_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__23574_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23576.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5733__auto__){
return (function (p1__23575_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__23575_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23576.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23577","meta23577",124314199,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23576.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23576.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23576";

com.rpl.specter.t_com$rpl$specter23576.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23576");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23576.
 */
com.rpl.specter.__GT_t_com$rpl$specter23576 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23576(path__$1,temp__5733__auto____$1,late__$1,meta23577){
return (new com.rpl.specter.t_com$rpl$specter23576(path__$1,temp__5733__auto____$1,late__$1,meta23577));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23576(path,temp__5733__auto__,late,null));
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
var G__24430 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24521__i = 0, G__24521__a = new Array(arguments.length -  0);
while (G__24521__i < G__24521__a.length) {G__24521__a[G__24521__i] = arguments[G__24521__i + 0]; ++G__24521__i;}
  path = new cljs.core.IndexedSeq(G__24521__a,0,null);
} 
return G__24430__delegate.call(this,path);};
G__24430.cljs$lang$maxFixedArity = 0;
G__24430.cljs$lang$applyTo = (function (arglist__24523){
var path = cljs.core.seq(arglist__24523);
return G__24430__delegate(path);
});
G__24430.cljs$core$IFn$_invoke$arity$variadic = G__24430__delegate;
return G__24430;
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
var G__24530__delegate = function (path){
var G__23588 = com.rpl.specter.ALL;
var G__23589 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__23588,G__23589) : com.rpl.specter.subselect.call(null,G__23588,G__23589));
};
var G__24530 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24540__i = 0, G__24540__a = new Array(arguments.length -  0);
while (G__24540__i < G__24540__a.length) {G__24540__a[G__24540__i] = arguments[G__24540__i + 0]; ++G__24540__i;}
  path = new cljs.core.IndexedSeq(G__24540__a,0,null);
} 
return G__24530__delegate.call(this,path);};
G__24530.cljs$lang$maxFixedArity = 0;
G__24530.cljs$lang$applyTo = (function (arglist__24542){
var path = cljs.core.seq(arglist__24542);
return G__24530__delegate(path);
});
G__24530.cljs$core$IFn$_invoke$arity$variadic = G__24530__delegate;
return G__24530;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23591 = (function (path,update_fn,late,late_fn,meta23592){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta23592 = meta23592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23593,meta23592__$1){
var self__ = this;
var _23593__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23591(self__.path,self__.update_fn,self__.late,self__.late_fn,meta23592__$1));
});

com.rpl.specter.t_com$rpl$specter23591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23593){
var self__ = this;
var _23593__$1 = this;
return self__.meta23592;
});

com.rpl.specter.t_com$rpl$specter23591.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23591.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter23591.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter23591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta23592","meta23592",-2037850213,null)], null);
});

com.rpl.specter.t_com$rpl$specter23591.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23591.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23591";

com.rpl.specter.t_com$rpl$specter23591.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23591");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23591.
 */
com.rpl.specter.__GT_t_com$rpl$specter23591 = (function com$rpl$specter$__GT_t_com$rpl$specter23591(path__$1,update_fn__$1,late__$1,late_fn__$1,meta23592){
return (new com.rpl.specter.t_com$rpl$specter23591(path__$1,update_fn__$1,late__$1,late_fn__$1,meta23592));
});

}

return (new com.rpl.specter.t_com$rpl$specter23591(path,update_fn,late,late_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23599 = (function (path,reduce_fn,late,late_fn,meta23600){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta23600 = meta23600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23601,meta23600__$1){
var self__ = this;
var _23601__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23599(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta23600__$1));
});

com.rpl.specter.t_com$rpl$specter23599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23601){
var self__ = this;
var _23601__$1 = this;
return self__.meta23600;
});

com.rpl.specter.t_com$rpl$specter23599.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23599.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter23599.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter23599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta23600","meta23600",1030507660,null)], null);
});

com.rpl.specter.t_com$rpl$specter23599.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23599.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23599";

com.rpl.specter.t_com$rpl$specter23599.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23599");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23599.
 */
com.rpl.specter.__GT_t_com$rpl$specter23599 = (function com$rpl$specter$__GT_t_com$rpl$specter23599(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta23600){
return (new com.rpl.specter.t_com$rpl$specter23599(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta23600));
});

}

return (new com.rpl.specter.t_com$rpl$specter23599(path,reduce_fn,late,late_fn,null));
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
var G__23607 = (function (p1__23606_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__23606_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23607) : com.rpl.specter.pred.call(null,G__23607));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__23609 = (function (p1__23608_SHARP_){
return (p1__23608_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23609) : com.rpl.specter.pred.call(null,G__23609));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__23611 = (function (p1__23610_SHARP_){
return (p1__23610_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23611) : com.rpl.specter.pred.call(null,G__23611));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__23613 = (function (p1__23612_SHARP_){
return (p1__23612_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23613) : com.rpl.specter.pred.call(null,G__23613));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__23615 = (function (p1__23614_SHARP_){
return (p1__23614_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__23615) : com.rpl.specter.pred.call(null,G__23615));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__23616_24589 = com.rpl.specter.protocols.implicit_nav;
var G__23617_24590 = "null";
var G__23618_24591 = ((function (G__23616_24589,G__23617_24590){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__23616_24589,G__23617_24590))
;
goog.object.set(G__23616_24589,G__23617_24590,G__23618_24591);
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

var G__23629_24594 = com.rpl.specter.protocols.implicit_nav;
var G__23630_24595 = "string";
var G__23631_24596 = ((function (G__23629_24594,G__23630_24595){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__23629_24594,G__23630_24595))
;
goog.object.set(G__23629_24594,G__23630_24595,G__23631_24596);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

var G__23632_24599 = com.rpl.specter.protocols.implicit_nav;
var G__23633_24600 = "number";
var G__23634_24601 = ((function (G__23632_24599,G__23633_24600){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__23632_24599,G__23633_24600))
;
goog.object.set(G__23632_24599,G__23633_24600,G__23634_24601);
cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

var G__23635_24603 = com.rpl.specter.protocols.implicit_nav;
var G__23636_24604 = "boolean";
var G__23637_24605 = ((function (G__23635_24603,G__23636_24604){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__23635_24603,G__23636_24604))
;
goog.object.set(G__23635_24603,G__23636_24604,G__23637_24605);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__23638_24606 = com.rpl.specter.protocols.implicit_nav;
var G__23639_24607 = "function";
var G__23640_24608 = ((function (G__23638_24606,G__23639_24607){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__23638_24606,G__23639_24607))
;
goog.object.set(G__23638_24606,G__23639_24607,G__23640_24608);
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
var G__23658 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23658) : next_fn.call(null,G__23658));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__23659 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23659) : next_fn.call(null,G__23659));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23660 = (function (v,meta23661){
this.v = v;
this.meta23661 = meta23661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23662,meta23661__$1){
var self__ = this;
var _23662__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23660(self__.v,meta23661__$1));
});

com.rpl.specter.t_com$rpl$specter23660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23662){
var self__ = this;
var _23662__$1 = this;
return self__.meta23661;
});

com.rpl.specter.t_com$rpl$specter23660.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23660.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter23660.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter23660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta23661","meta23661",834007060,null)], null);
});

com.rpl.specter.t_com$rpl$specter23660.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23660.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23660";

com.rpl.specter.t_com$rpl$specter23660.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23660");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23660.
 */
com.rpl.specter.__GT_t_com$rpl$specter23660 = (function com$rpl$specter$__GT_t_com$rpl$specter23660(v__$1,meta23661){
return (new com.rpl.specter.t_com$rpl$specter23660(v__$1,meta23661));
});

}

return (new com.rpl.specter.t_com$rpl$specter23660(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__23686 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__23686) : com.rpl.specter.nil__GT_val.call(null,G__23686));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__23687 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__23687) : com.rpl.specter.nil__GT_val.call(null,G__23687));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__23688 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__23688) : com.rpl.specter.nil__GT_val.call(null,G__23688));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__23691 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23691) : next_fn.call(null,G__23691));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__23692 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23692) : next_fn.call(null,G__23692));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23693 = (function (meta23694){
this.meta23694 = meta23694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23695,meta23694__$1){
var self__ = this;
var _23695__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23693(meta23694__$1));
});

com.rpl.specter.t_com$rpl$specter23693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23695){
var self__ = this;
var _23695__$1 = this;
return self__.meta23694;
});

com.rpl.specter.t_com$rpl$specter23693.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23693.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});

com.rpl.specter.t_com$rpl$specter23693.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter23693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23694","meta23694",-1595621996,null)], null);
});

com.rpl.specter.t_com$rpl$specter23693.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23693.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23693";

com.rpl.specter.t_com$rpl$specter23693.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23693");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23693.
 */
com.rpl.specter.__GT_t_com$rpl$specter23693 = (function com$rpl$specter$__GT_t_com$rpl$specter23693(meta23694){
return (new com.rpl.specter.t_com$rpl$specter23693(meta23694));
});

}

return (new com.rpl.specter.t_com$rpl$specter23693(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__23699 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23699) : next_fn.call(null,G__23699));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__23700 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23700) : next_fn.call(null,G__23700));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23701 = (function (meta23702){
this.meta23702 = meta23702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23703,meta23702__$1){
var self__ = this;
var _23703__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23701(meta23702__$1));
});

com.rpl.specter.t_com$rpl$specter23701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23703){
var self__ = this;
var _23703__$1 = this;
return self__.meta23702;
});

com.rpl.specter.t_com$rpl$specter23701.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23701.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.name(structure));
});

com.rpl.specter.t_com$rpl$specter23701.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23702","meta23702",-340841808,null)], null);
});

com.rpl.specter.t_com$rpl$specter23701.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23701.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23701";

com.rpl.specter.t_com$rpl$specter23701.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23701");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23701.
 */
com.rpl.specter.__GT_t_com$rpl$specter23701 = (function com$rpl$specter$__GT_t_com$rpl$specter23701(meta23702){
return (new com.rpl.specter.t_com$rpl$specter23701(meta23702));
});

}

return (new com.rpl.specter.t_com$rpl$specter23701(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__23707 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23707) : next_fn.call(null,G__23707));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__23708 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__23708) : next_fn.call(null,G__23708));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23709 = (function (meta23710){
this.meta23710 = meta23710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23711,meta23710__$1){
var self__ = this;
var _23711__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23709(meta23710__$1));
});

com.rpl.specter.t_com$rpl$specter23709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23711){
var self__ = this;
var _23711__$1 = this;
return self__.meta23710;
});

com.rpl.specter.t_com$rpl$specter23709.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23709.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var next_fn = ((function (this__19817__auto____$1){
return (function (s__19820__auto__){
return (next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19819__auto__.cljs$core$IFn$_invoke$arity$2(vals__19818__auto__,s__19820__auto__) : next_fn__19819__auto__.call(null,vals__19818__auto__,s__19820__auto__));
});})(this__19817__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});

com.rpl.specter.t_com$rpl$specter23709.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19817__auto__,vals__19818__auto__,structure,next_fn__19819__auto__){
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

com.rpl.specter.t_com$rpl$specter23709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23710","meta23710",705296821,null)], null);
});

com.rpl.specter.t_com$rpl$specter23709.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23709.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23709";

com.rpl.specter.t_com$rpl$specter23709.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23709");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23709.
 */
com.rpl.specter.__GT_t_com$rpl$specter23709 = (function com$rpl$specter$__GT_t_com$rpl$specter23709(meta23710){
return (new com.rpl.specter.t_com$rpl$specter23709(meta23710));
});

}

return (new com.rpl.specter.t_com$rpl$specter23709(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24697__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23718 = (function (path,late,meta23719){
this.path = path;
this.late = late;
this.meta23719 = meta23719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23720,meta23719__$1){
var self__ = this;
var _23720__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23718(self__.path,self__.late,meta23719__$1));
});

com.rpl.specter.t_com$rpl$specter23718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23720){
var self__ = this;
var _23720__$1 = this;
return self__.meta23719;
});

com.rpl.specter.t_com$rpl$specter23718.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23718.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23723 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__23724 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23723,G__23724) : next_fn__20603__auto__.call(null,G__23723,G__23724));
});

com.rpl.specter.t_com$rpl$specter23718.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23726 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__23727 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23726,G__23727) : next_fn__20603__auto__.call(null,G__23726,G__23727));
});

com.rpl.specter.t_com$rpl$specter23718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23719","meta23719",-1102103733,null)], null);
});

com.rpl.specter.t_com$rpl$specter23718.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23718.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23718";

com.rpl.specter.t_com$rpl$specter23718.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23718");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23718.
 */
com.rpl.specter.__GT_t_com$rpl$specter23718 = (function com$rpl$specter$__GT_t_com$rpl$specter23718(path__$1,late__$1,meta23719){
return (new com.rpl.specter.t_com$rpl$specter23718(path__$1,late__$1,meta23719));
});

}

return (new com.rpl.specter.t_com$rpl$specter23718(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24697 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24704__i = 0, G__24704__a = new Array(arguments.length -  0);
while (G__24704__i < G__24704__a.length) {G__24704__a[G__24704__i] = arguments[G__24704__i + 0]; ++G__24704__i;}
  path = new cljs.core.IndexedSeq(G__24704__a,0,null);
} 
return G__24697__delegate.call(this,path);};
G__24697.cljs$lang$maxFixedArity = 0;
G__24697.cljs$lang$applyTo = (function (arglist__24705){
var path = cljs.core.seq(arglist__24705);
return G__24697__delegate(path);
});
G__24697.cljs$core$IFn$_invoke$arity$variadic = G__24697__delegate;
return G__24697;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24706__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23728 = (function (path,late,meta23729){
this.path = path;
this.late = late;
this.meta23729 = meta23729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23730,meta23729__$1){
var self__ = this;
var _23730__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23728(self__.path,self__.late,meta23729__$1));
});

com.rpl.specter.t_com$rpl$specter23728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23730){
var self__ = this;
var _23730__$1 = this;
return self__.meta23729;
});

com.rpl.specter.t_com$rpl$specter23728.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23728.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23731 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__23732 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23731,G__23732) : next_fn__20603__auto__.call(null,G__23731,G__23732));
});

com.rpl.specter.t_com$rpl$specter23728.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__23734 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23733,G__23734) : next_fn__20603__auto__.call(null,G__23733,G__23734));
});

com.rpl.specter.t_com$rpl$specter23728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23729","meta23729",1581184030,null)], null);
});

com.rpl.specter.t_com$rpl$specter23728.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23728.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23728";

com.rpl.specter.t_com$rpl$specter23728.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23728");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23728.
 */
com.rpl.specter.__GT_t_com$rpl$specter23728 = (function com$rpl$specter$__GT_t_com$rpl$specter23728(path__$1,late__$1,meta23729){
return (new com.rpl.specter.t_com$rpl$specter23728(path__$1,late__$1,meta23729));
});

}

return (new com.rpl.specter.t_com$rpl$specter23728(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24706 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24725__i = 0, G__24725__a = new Array(arguments.length -  0);
while (G__24725__i < G__24725__a.length) {G__24725__a[G__24725__i] = arguments[G__24725__i + 0]; ++G__24725__i;}
  path = new cljs.core.IndexedSeq(G__24725__a,0,null);
} 
return G__24706__delegate.call(this,path);};
G__24706.cljs$lang$maxFixedArity = 0;
G__24706.cljs$lang$applyTo = (function (arglist__24726){
var path = cljs.core.seq(arglist__24726);
return G__24706__delegate(path);
});
G__24706.cljs$core$IFn$_invoke$arity$variadic = G__24706__delegate;
return G__24706;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23735 = (function (val,meta23736){
this.val = val;
this.meta23736 = meta23736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23737,meta23736__$1){
var self__ = this;
var _23737__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23735(self__.val,meta23736__$1));
});

com.rpl.specter.t_com$rpl$specter23735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23737){
var self__ = this;
var _23737__$1 = this;
return self__.meta23736;
});

com.rpl.specter.t_com$rpl$specter23735.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23735.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23738 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,self__.val);
var G__23739 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23738,G__23739) : next_fn__20603__auto__.call(null,G__23738,G__23739));
});

com.rpl.specter.t_com$rpl$specter23735.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__20601__auto__,vals__20602__auto__,structure,next_fn__20603__auto__){
var self__ = this;
var this__20601__auto____$1 = this;
var G__23740 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__20602__auto__,self__.val);
var G__23741 = structure;
return (next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__20603__auto__.cljs$core$IFn$_invoke$arity$2(G__23740,G__23741) : next_fn__20603__auto__.call(null,G__23740,G__23741));
});

com.rpl.specter.t_com$rpl$specter23735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta23736","meta23736",-2014514961,null)], null);
});

com.rpl.specter.t_com$rpl$specter23735.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23735.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23735";

com.rpl.specter.t_com$rpl$specter23735.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23735");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23735.
 */
com.rpl.specter.__GT_t_com$rpl$specter23735 = (function com$rpl$specter$__GT_t_com$rpl$specter23735(val__$1,meta23736){
return (new com.rpl.specter.t_com$rpl$specter23735(val__$1,meta23736));
});

}

return (new com.rpl.specter.t_com$rpl$specter23735(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24741__delegate = function (path){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23742 = (function (path,late,meta23743){
this.path = path;
this.late = late;
this.meta23743 = meta23743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23744,meta23743__$1){
var self__ = this;
var _23744__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23742(self__.path,self__.late,meta23743__$1));
});

com.rpl.specter.t_com$rpl$specter23742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23744){
var self__ = this;
var _23744__$1 = this;
return self__.meta23743;
});

com.rpl.specter.t_com$rpl$specter23742.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23742.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter23742.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter23742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23743","meta23743",-869393321,null)], null);
});

com.rpl.specter.t_com$rpl$specter23742.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23742.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23742";

com.rpl.specter.t_com$rpl$specter23742.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23742");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23742.
 */
com.rpl.specter.__GT_t_com$rpl$specter23742 = (function com$rpl$specter$__GT_t_com$rpl$specter23742(path__$1,late__$1,meta23743){
return (new com.rpl.specter.t_com$rpl$specter23742(path__$1,late__$1,meta23743));
});

}

return (new com.rpl.specter.t_com$rpl$specter23742(path,late,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
};
var G__24741 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24752__i = 0, G__24752__a = new Array(arguments.length -  0);
while (G__24752__i < G__24752__a.length) {G__24752__a[G__24752__i] = arguments[G__24752__i + 0]; ++G__24752__i;}
  path = new cljs.core.IndexedSeq(G__24752__a,0,null);
} 
return G__24741__delegate.call(this,path);};
G__24741.cljs$lang$maxFixedArity = 0;
G__24741.cljs$lang$applyTo = (function (arglist__24753){
var path = cljs.core.seq(arglist__24753);
return G__24741__delegate(path);
});
G__24741.cljs$core$IFn$_invoke$arity$variadic = G__24741__delegate;
return G__24741;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23750 = (function (meta23751){
this.meta23751 = meta23751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23752,meta23751__$1){
var self__ = this;
var _23752__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23750(meta23751__$1));
});

com.rpl.specter.t_com$rpl$specter23750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23752){
var self__ = this;
var _23752__$1 = this;
return self__.meta23751;
});

com.rpl.specter.t_com$rpl$specter23750.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23750.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23758 = cljs.core.PersistentVector.EMPTY;
var G__23759 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23758,G__23759) : next_fn.call(null,G__23758,G__23759));
});

com.rpl.specter.t_com$rpl$specter23750.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23760 = cljs.core.PersistentVector.EMPTY;
var G__23761 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23760,G__23761) : next_fn.call(null,G__23760,G__23761));
});

com.rpl.specter.t_com$rpl$specter23750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23751","meta23751",-1904081860,null)], null);
});

com.rpl.specter.t_com$rpl$specter23750.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23750.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23750";

com.rpl.specter.t_com$rpl$specter23750.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23750");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23750.
 */
com.rpl.specter.__GT_t_com$rpl$specter23750 = (function com$rpl$specter$__GT_t_com$rpl$specter23750(meta23751){
return (new com.rpl.specter.t_com$rpl$specter23750(meta23751));
});

}

return (new com.rpl.specter.t_com$rpl$specter23750(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__24764 = null;
var G__24764__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__24764__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5733__auto__){
return (function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23765 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta23766){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta23766 = meta23766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5733__auto__){
return (function (_23767,meta23766__$1){
var self__ = this;
var _23767__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23765(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta23766__$1));
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5733__auto__){
return (function (_23767){
var self__ = this;
var _23767__$1 = this;
return self__.meta23766;
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23765.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23765.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23765.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23765.getBasis = ((function (afn,temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta23766","meta23766",518305408,null)], null);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23765.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23765.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23765";

com.rpl.specter.t_com$rpl$specter23765.cljs$lang$ctorPrWriter = ((function (afn,temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23765");
});})(afn,temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23765.
 */
com.rpl.specter.__GT_t_com$rpl$specter23765 = ((function (afn,temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23765(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta23766){
return (new com.rpl.specter.t_com$rpl$specter23765(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta23766));
});})(afn,temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23765(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23777 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta23778){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta23778 = meta23778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_23779,meta23778__$1){
var self__ = this;
var _23779__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23777(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta23778__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_23779){
var self__ = this;
var _23779__$1 = this;
return self__.meta23778;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23777.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23777.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5733__auto__){
return (function (p1__23763_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__23763_SHARP_);
});})(this$__$1,temp__5733__auto__))
,self__.late_then,self__.late_else);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23777.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5733__auto__){
return (function (p1__23764_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__23764_SHARP_);
});})(this$__$1,temp__5733__auto__))
,self__.late_then,self__.late_else);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23777.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta23778","meta23778",1363972700,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter23777.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23777.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23777";

com.rpl.specter.t_com$rpl$specter23777.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23777");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23777.
 */
com.rpl.specter.__GT_t_com$rpl$specter23777 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23777(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta23778){
return (new com.rpl.specter.t_com$rpl$specter23777(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta23778));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23777(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
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
G__24764 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__24764__2.call(this,cond_p,then_path);
case 3:
return G__24764__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24764.cljs$core$IFn$_invoke$arity$2 = G__24764__2;
G__24764.cljs$core$IFn$_invoke$arity$3 = G__24764__3;
return G__24764;
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
var G__24807__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__23798){
var vec__23799 = p__23798;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__24807 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__24810__i = 0, G__24810__a = new Array(arguments.length -  0);
while (G__24810__i < G__24810__a.length) {G__24810__a[G__24810__i] = arguments[G__24810__i + 0]; ++G__24810__i;}
  conds = new cljs.core.IndexedSeq(G__24810__a,0,null);
} 
return G__24807__delegate.call(this,conds);};
G__24807.cljs$lang$maxFixedArity = 0;
G__24807.cljs$lang$applyTo = (function (arglist__24812){
var conds = cljs.core.seq(arglist__24812);
return G__24807__delegate(conds);
});
G__24807.cljs$core$IFn$_invoke$arity$variadic = G__24807__delegate;
return G__24807;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__24814 = null;
var G__24814__0 = (function (){
return com.rpl.specter.STAY;
});
var G__24814__1 = (function (path){
return path;
});
var G__24814__2 = (function (path1,path2){
var builder__20604__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23803 = (function (path1,path2,late1,late2,meta23804){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta23804 = meta23804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23805,meta23804__$1){
var self__ = this;
var _23805__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23803(self__.path1,self__.path2,self__.late1,self__.late2,meta23804__$1));
});

com.rpl.specter.t_com$rpl$specter23803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23805){
var self__ = this;
var _23805__$1 = this;
return self__.meta23804;
});

com.rpl.specter.t_com$rpl$specter23803.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23803.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter23803.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter23803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta23804","meta23804",2104032137,null)], null);
});

com.rpl.specter.t_com$rpl$specter23803.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23803.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23803";

com.rpl.specter.t_com$rpl$specter23803.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter23803");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23803.
 */
com.rpl.specter.__GT_t_com$rpl$specter23803 = (function com$rpl$specter$__GT_t_com$rpl$specter23803(path1__$1,path2__$1,late1__$1,late2__$1,meta23804){
return (new com.rpl.specter.t_com$rpl$specter23803(path1__$1,path2__$1,late1__$1,late2__$1,meta23804));
});

}

return (new com.rpl.specter.t_com$rpl$specter23803(path1,path2,late1,late2,null));
}));
var curr_params__20605__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__20605__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__20604__auto__,curr_params__20605__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__20604__auto__,curr_params__20605__auto__,null);
}
});
var G__24814__3 = (function() { 
var G__24847__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__24847 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__24849__i = 0, G__24849__a = new Array(arguments.length -  2);
while (G__24849__i < G__24849__a.length) {G__24849__a[G__24849__i] = arguments[G__24849__i + 2]; ++G__24849__i;}
  paths = new cljs.core.IndexedSeq(G__24849__a,0,null);
} 
return G__24847__delegate.call(this,path1,path2,paths);};
G__24847.cljs$lang$maxFixedArity = 2;
G__24847.cljs$lang$applyTo = (function (arglist__24850){
var path1 = cljs.core.first(arglist__24850);
arglist__24850 = cljs.core.next(arglist__24850);
var path2 = cljs.core.first(arglist__24850);
var paths = cljs.core.rest(arglist__24850);
return G__24847__delegate(path1,path2,paths);
});
G__24847.cljs$core$IFn$_invoke$arity$variadic = G__24847__delegate;
return G__24847;
})()
;
G__24814 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__24814__0.call(this);
case 1:
return G__24814__1.call(this,path1);
case 2:
return G__24814__2.call(this,path1,path2);
default:
var G__24852 = null;
if (arguments.length > 2) {
var G__24853__i = 0, G__24853__a = new Array(arguments.length -  2);
while (G__24853__i < G__24853__a.length) {G__24853__a[G__24853__i] = arguments[G__24853__i + 2]; ++G__24853__i;}
G__24852 = new cljs.core.IndexedSeq(G__24853__a,0,null);
}
return G__24814__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__24852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24814.cljs$lang$maxFixedArity = 2;
G__24814.cljs$lang$applyTo = G__24814__3.cljs$lang$applyTo;
G__24814.cljs$core$IFn$_invoke$arity$0 = G__24814__0;
G__24814.cljs$core$IFn$_invoke$arity$1 = G__24814__1;
G__24814.cljs$core$IFn$_invoke$arity$2 = G__24814__2;
G__24814.cljs$core$IFn$_invoke$arity$variadic = G__24814__3.cljs$core$IFn$_invoke$arity$variadic;
return G__24814;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24856__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__24856 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24857__i = 0, G__24857__a = new Array(arguments.length -  0);
while (G__24857__i < G__24857__a.length) {G__24857__a[G__24857__i] = arguments[G__24857__i + 0]; ++G__24857__i;}
  path = new cljs.core.IndexedSeq(G__24857__a,0,null);
} 
return G__24856__delegate.call(this,path);};
G__24856.cljs$lang$maxFixedArity = 0;
G__24856.cljs$lang$applyTo = (function (arglist__24858){
var path = cljs.core.seq(arglist__24858);
return G__24856__delegate(path);
});
G__24856.cljs$core$IFn$_invoke$arity$variadic = G__24856__delegate;
return G__24856;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__24859__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__24859 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24861__i = 0, G__24861__a = new Array(arguments.length -  0);
while (G__24861__i < G__24861__a.length) {G__24861__a[G__24861__i] = arguments[G__24861__i + 0]; ++G__24861__i;}
  path = new cljs.core.IndexedSeq(G__24861__a,0,null);
} 
return G__24859__delegate.call(this,path);};
G__24859.cljs$lang$maxFixedArity = 0;
G__24859.cljs$lang$applyTo = (function (arglist__24864){
var path = cljs.core.seq(arglist__24864);
return G__24859__delegate(path);
});
G__24859.cljs$core$IFn$_invoke$arity$variadic = G__24859__delegate;
return G__24859;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__20611__auto__ = com.rpl.specter.pathcache23821;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23822 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2117),(2117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache23821 = info23822;

return info23822;
})():info__20611__auto__);
var precompiled23823 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23824 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled23823.cljs$core$IFn$_invoke$arity$1 ? precompiled23823.cljs$core$IFn$_invoke$arity$1(G__23824) : precompiled23823.call(null,G__23824));
} else {
return precompiled23823;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__20611__auto__ = com.rpl.specter.pathcache23825;
var info__20611__auto____$1 = (((info__20611__auto__ == null))?(function (){var info23826 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2117),(2117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,688,690,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache23825 = info23826;

return info23826;
})():info__20611__auto__);
var precompiled23827 = com.rpl.specter.impl.cached_path_info_precompiled(info__20611__auto____$1);
var dynamic_QMARK___20612__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__20611__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___20612__auto__)){
var G__23829 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled23827.cljs$core$IFn$_invoke$arity$1 ? precompiled23827.cljs$core$IFn$_invoke$arity$1(G__23829) : precompiled23827.call(null,G__23829));
} else {
return precompiled23827;
}
})());

return p;
}));
var empty__GT_NONE_24898 = (function (){var G__23830 = cljs.core.empty_QMARK_;
var G__23831 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__23830,G__23831) : com.rpl.specter.if_path.call(null,G__23830,G__23831));
})();
var compact_STAR__24899 = ((function (empty__GT_NONE_24898){
return (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_24898) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_24898));
});})(empty__GT_NONE_24898))
;
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (empty__GT_NONE_24898,compact_STAR__24899){
return (function() { 
var G__24901__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__24899,path);
};
var G__24901 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__24904__i = 0, G__24904__a = new Array(arguments.length -  0);
while (G__24904__i < G__24904__a.length) {G__24904__a[G__24904__i] = arguments[G__24904__i + 0]; ++G__24904__i;}
  path = new cljs.core.IndexedSeq(G__24904__a,0,null);
} 
return G__24901__delegate.call(this,path);};
G__24901.cljs$lang$maxFixedArity = 0;
G__24901.cljs$lang$applyTo = (function (arglist__24913){
var path = cljs.core.seq(arglist__24913);
return G__24901__delegate(path);
});
G__24901.cljs$core$IFn$_invoke$arity$variadic = G__24901__delegate;
return G__24901;
})()
;})(empty__GT_NONE_24898,compact_STAR__24899))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
