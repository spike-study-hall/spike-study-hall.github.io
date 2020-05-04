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
var G__43039__delegate = function (args){
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
var G__43039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43040__i = 0, G__43040__a = new Array(arguments.length -  0);
while (G__43040__i < G__43040__a.length) {G__43040__a[G__43040__i] = arguments[G__43040__i + 0]; ++G__43040__i;}
  args = new cljs.core.IndexedSeq(G__43040__a,0,null);
} 
return G__43039__delegate.call(this,args);};
G__43039.cljs$lang$maxFixedArity = 0;
G__43039.cljs$lang$applyTo = (function (arglist__43041){
var args = cljs.core.seq(arglist__43041);
return G__43039__delegate(args);
});
G__43039.cljs$core$IFn$_invoke$arity$variadic = G__43039__delegate;
return G__43039;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43042 = arguments.length;
var i__4731__auto___43043 = (0);
while(true){
if((i__4731__auto___43043 < len__4730__auto___43042)){
args__4736__auto__.push((arguments[i__4731__auto___43043]));

var G__43044 = (i__4731__auto___43043 + (1));
i__4731__auto___43043 = G__43044;
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
com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq42237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42237));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__42241 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42242 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__42241,G__42242) : com.rpl.specter.compiled_select.call(null,G__42241,G__42242));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__42246 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42247 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__42246,G__42247) : com.rpl.specter.compiled_select_one.call(null,G__42246,G__42247));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__42251 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42252 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__42251,G__42252) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__42251,G__42252));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__42253 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42254 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__42253,G__42254) : com.rpl.specter.compiled_select_first.call(null,G__42253,G__42254));
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
var G__42255 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42256 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__42255,G__42256) : com.rpl.specter.compiled_select_any.call(null,G__42255,G__42256));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__42263 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42264 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__42263,G__42264) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__42263,G__42264));
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
var G__42265 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__42266 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__42265,G__42266) : com.rpl.specter.compiled_traverse.call(null,G__42265,G__42266));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__42267 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__42267) : com.rpl.specter.compiled_traverse_all.call(null,G__42267));
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
var G__42268 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42269 = transform_fn;
var G__42270 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__42268,G__42269,G__42270) : com.rpl.specter.compiled_transform.call(null,G__42268,G__42269,G__42270));
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
var G__42274 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42275 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__42274,G__42275) : com.rpl.specter.compiled_multi_transform.call(null,G__42274,G__42275));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__42279 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42280 = val;
var G__42281 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__42279,G__42280,G__42281) : com.rpl.specter.compiled_setval.call(null,G__42279,G__42280,G__42281));
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
var len__4730__auto___43052 = arguments.length;
var i__4731__auto___43054 = (0);
while(true){
if((i__4731__auto___43054 < len__4730__auto___43052)){
args__4736__auto__.push((arguments[i__4731__auto___43054]));

var G__43055 = (i__4731__auto___43054 + (1));
i__4731__auto___43054 = G__43055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__42289){
var map__42290 = p__42289;
var map__42290__$1 = (((((!((map__42290 == null))))?(((((map__42290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42290):map__42290);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42290__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__42295 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__42296 = transform_fn;
var G__42297 = structure;
var G__42298 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__42299 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__42295,G__42296,G__42297,G__42298,G__42299) : com.rpl.specter.compiled_replace_in.call(null,G__42295,G__42296,G__42297,G__42298,G__42299));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq42282){
var G__42283 = cljs.core.first(seq42282);
var seq42282__$1 = cljs.core.next(seq42282);
var G__42284 = cljs.core.first(seq42282__$1);
var seq42282__$2 = cljs.core.next(seq42282__$1);
var G__42285 = cljs.core.first(seq42282__$2);
var seq42282__$3 = cljs.core.next(seq42282__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42283,G__42284,G__42285,seq42282__$3);
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
var G__43063__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__43063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43064__i = 0, G__43064__a = new Array(arguments.length -  0);
while (G__43064__i < G__43064__a.length) {G__43064__a[G__43064__i] = arguments[G__43064__i + 0]; ++G__43064__i;}
  args = new cljs.core.IndexedSeq(G__43064__a,0,null);
} 
return G__43063__delegate.call(this,args);};
G__43063.cljs$lang$maxFixedArity = 0;
G__43063.cljs$lang$applyTo = (function (arglist__43065){
var args = cljs.core.seq(arglist__43065);
return G__43063__delegate(args);
});
G__43063.cljs$core$IFn$_invoke$arity$variadic = G__43063__delegate;
return G__43063;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42300 = (function (meta42301){
this.meta42301 = meta42301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42302,meta42301__$1){
var self__ = this;
var _42302__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42300(meta42301__$1));
});

com.rpl.specter.t_com$rpl$specter42300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42302){
var self__ = this;
var _42302__$1 = this;
return self__.meta42301;
});

com.rpl.specter.t_com$rpl$specter42300.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42300.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter42300.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter42300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42301","meta42301",-1015369756,null)], null);
});

com.rpl.specter.t_com$rpl$specter42300.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42300.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42300";

com.rpl.specter.t_com$rpl$specter42300.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42300");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42300.
 */
com.rpl.specter.__GT_t_com$rpl$specter42300 = (function com$rpl$specter$__GT_t_com$rpl$specter42300(meta42301){
return (new com.rpl.specter.t_com$rpl$specter42300(meta42301));
});

}

return (new com.rpl.specter.t_com$rpl$specter42300(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42305 = (function (afn,meta42306){
this.afn = afn;
this.meta42306 = meta42306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42307,meta42306__$1){
var self__ = this;
var _42307__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42305(self__.afn,meta42306__$1));
});

com.rpl.specter.t_com$rpl$specter42305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42307){
var self__ = this;
var _42307__$1 = this;
return self__.meta42306;
});

com.rpl.specter.t_com$rpl$specter42305.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42305.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter42305.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter42305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta42306","meta42306",261680897,null)], null);
});

com.rpl.specter.t_com$rpl$specter42305.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42305.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42305";

com.rpl.specter.t_com$rpl$specter42305.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42305");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42305.
 */
com.rpl.specter.__GT_t_com$rpl$specter42305 = (function com$rpl$specter$__GT_t_com$rpl$specter42305(afn__$1,meta42306){
return (new com.rpl.specter.t_com$rpl$specter42305(afn__$1,meta42306));
});

}

return (new com.rpl.specter.t_com$rpl$specter42305(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42315 = (function (afn,meta42316){
this.afn = afn;
this.meta42316 = meta42316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42317,meta42316__$1){
var self__ = this;
var _42317__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42315(self__.afn,meta42316__$1));
});

com.rpl.specter.t_com$rpl$specter42315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42317){
var self__ = this;
var _42317__$1 = this;
return self__.meta42316;
});

com.rpl.specter.t_com$rpl$specter42315.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42315.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter42315.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
});

com.rpl.specter.t_com$rpl$specter42315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta42316","meta42316",-14787239,null)], null);
});

com.rpl.specter.t_com$rpl$specter42315.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42315.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42315";

com.rpl.specter.t_com$rpl$specter42315.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42315");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42315.
 */
com.rpl.specter.__GT_t_com$rpl$specter42315 = (function com$rpl$specter$__GT_t_com$rpl$specter42315(afn__$1,meta42316){
return (new com.rpl.specter.t_com$rpl$specter42315(afn__$1,meta42316));
});

}

return (new com.rpl.specter.t_com$rpl$specter42315(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__42321 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__42321) : com.rpl.specter.terminal.call(null,G__42321));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42325 = (function (meta42326){
this.meta42326 = meta42326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42327,meta42326__$1){
var self__ = this;
var _42327__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42325(meta42326__$1));
});

com.rpl.specter.t_com$rpl$specter42325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42327){
var self__ = this;
var _42327__$1 = this;
return self__.meta42326;
});

com.rpl.specter.t_com$rpl$specter42325.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42325.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter42325.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter42325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42326","meta42326",244293801,null)], null);
});

com.rpl.specter.t_com$rpl$specter42325.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42325.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42325";

com.rpl.specter.t_com$rpl$specter42325.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42325");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42325.
 */
com.rpl.specter.__GT_t_com$rpl$specter42325 = (function com$rpl$specter$__GT_t_com$rpl$specter42325(meta42326){
return (new com.rpl.specter.t_com$rpl$specter42325(meta42326));
});

}

return (new com.rpl.specter.t_com$rpl$specter42325(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42331 = (function (meta42332){
this.meta42332 = meta42332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42333,meta42332__$1){
var self__ = this;
var _42333__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42331(meta42332__$1));
});

com.rpl.specter.t_com$rpl$specter42331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42333){
var self__ = this;
var _42333__$1 = this;
return self__.meta42332;
});

com.rpl.specter.t_com$rpl$specter42331.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42331.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter42331.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter42331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42332","meta42332",869416170,null)], null);
});

com.rpl.specter.t_com$rpl$specter42331.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42331.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42331";

com.rpl.specter.t_com$rpl$specter42331.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42331");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42331.
 */
com.rpl.specter.__GT_t_com$rpl$specter42331 = (function com$rpl$specter$__GT_t_com$rpl$specter42331(meta42332){
return (new com.rpl.specter.t_com$rpl$specter42331(meta42332));
});

}

return (new com.rpl.specter.t_com$rpl$specter42331(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__39220__auto__,v){
var ret__39221__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42338 = (function (meta42339){
this.meta42339 = meta42339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42340,meta42339__$1){
var self__ = this;
var _42340__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42338(meta42339__$1));
});

com.rpl.specter.t_com$rpl$specter42338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42340){
var self__ = this;
var _42340__$1 = this;
return self__.meta42339;
});

com.rpl.specter.t_com$rpl$specter42338.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42338.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__40442__auto____$1){
return (function (curr__39220__auto__,v){
var ret__39221__auto__ = next_fn(v);
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
}
}
});})(next_fn,this__40442__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.t_com$rpl$specter42338.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter42338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42339","meta42339",494983613,null)], null);
});

com.rpl.specter.t_com$rpl$specter42338.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42338.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42338";

com.rpl.specter.t_com$rpl$specter42338.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42338");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42338.
 */
com.rpl.specter.__GT_t_com$rpl$specter42338 = (function com$rpl$specter$__GT_t_com$rpl$specter42338(meta42339){
return (new com.rpl.specter.t_com$rpl$specter42338(meta42339));
});

}

return (new com.rpl.specter.t_com$rpl$specter42338(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__39220__auto__,k){
var ret__39221__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42344 = (function (meta42345){
this.meta42345 = meta42345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42346,meta42345__$1){
var self__ = this;
var _42346__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42344(meta42345__$1));
});

com.rpl.specter.t_com$rpl$specter42344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42346){
var self__ = this;
var _42346__$1 = this;
return self__.meta42345;
});

com.rpl.specter.t_com$rpl$specter42344.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42344.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__40442__auto____$1){
return (function (curr__39220__auto__,k){
var ret__39221__auto__ = next_fn(k);
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
}
}
});})(next_fn,this__40442__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.t_com$rpl$specter42344.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter42344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42345","meta42345",391385980,null)], null);
});

com.rpl.specter.t_com$rpl$specter42344.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42344.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42344";

com.rpl.specter.t_com$rpl$specter42344.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42344");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42344.
 */
com.rpl.specter.__GT_t_com$rpl$specter42344 = (function com$rpl$specter$__GT_t_com$rpl$specter42344(meta42345){
return (new com.rpl.specter.t_com$rpl$specter42344(meta42345));
});

}

return (new com.rpl.specter.t_com$rpl$specter42344(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42350 = (function (meta42351){
this.meta42351 = meta42351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42352,meta42351__$1){
var self__ = this;
var _42352__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42350(meta42351__$1));
});

com.rpl.specter.t_com$rpl$specter42350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42352){
var self__ = this;
var _42352__$1 = this;
return self__.meta42351;
});

com.rpl.specter.t_com$rpl$specter42350.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42350.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42357 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,structure);
var G__42358 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42357,G__42358) : next_fn__41228__auto__.call(null,G__42357,G__42358));
});

com.rpl.specter.t_com$rpl$specter42350.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,structure);
var G__42360 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42359,G__42360) : next_fn__41228__auto__.call(null,G__42359,G__42360));
});

com.rpl.specter.t_com$rpl$specter42350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42351","meta42351",1661975891,null)], null);
});

com.rpl.specter.t_com$rpl$specter42350.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42350.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42350";

com.rpl.specter.t_com$rpl$specter42350.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42350");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42350.
 */
com.rpl.specter.__GT_t_com$rpl$specter42350 = (function com$rpl$specter$__GT_t_com$rpl$specter42350(meta42351){
return (new com.rpl.specter.t_com$rpl$specter42350(meta42351));
});

}

return (new com.rpl.specter.t_com$rpl$specter42350(null));
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
var G__42365 = structure;
var G__42366 = s;
var G__42367 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__42368 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__42365,G__42366,G__42367,G__42368) : com.rpl.specter.navs.srange_transform.call(null,G__42365,G__42366,G__42367,G__42368));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42369 = (function (start_index_fn,end_index_fn,meta42370){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta42370 = meta42370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42371,meta42370__$1){
var self__ = this;
var _42371__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42369(self__.start_index_fn,self__.end_index_fn,meta42370__$1));
});

com.rpl.specter.t_com$rpl$specter42369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42371){
var self__ = this;
var _42371__$1 = this;
return self__.meta42370;
});

com.rpl.specter.t_com$rpl$specter42369.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42369.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
});

com.rpl.specter.t_com$rpl$specter42369.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__42372 = structure;
var G__42373 = s;
var G__42374 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__42375 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__42372,G__42373,G__42374,G__42375) : com.rpl.specter.navs.srange_transform.call(null,G__42372,G__42373,G__42374,G__42375));
});

com.rpl.specter.t_com$rpl$specter42369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta42370","meta42370",916941488,null)], null);
});

com.rpl.specter.t_com$rpl$specter42369.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42369.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42369";

com.rpl.specter.t_com$rpl$specter42369.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42369");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42369.
 */
com.rpl.specter.__GT_t_com$rpl$specter42369 = (function com$rpl$specter$__GT_t_com$rpl$specter42369(start_index_fn__$1,end_index_fn__$1,meta42370){
return (new com.rpl.specter.t_com$rpl$specter42369(start_index_fn__$1,end_index_fn__$1,meta42370));
});

}

return (new com.rpl.specter.t_com$rpl$specter42369(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42379 = (function (start,end,meta42380){
this.start = start;
this.end = end;
this.meta42380 = meta42380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42381,meta42380__$1){
var self__ = this;
var _42381__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42379(self__.start,self__.end,meta42380__$1));
});

com.rpl.specter.t_com$rpl$specter42379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42381){
var self__ = this;
var _42381__$1 = this;
return self__.meta42380;
});

com.rpl.specter.t_com$rpl$specter42379.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42379.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter42379.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter42379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta42380","meta42380",-1848592034,null)], null);
});

com.rpl.specter.t_com$rpl$specter42379.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42379.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42379";

com.rpl.specter.t_com$rpl$specter42379.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42379");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42379.
 */
com.rpl.specter.__GT_t_com$rpl$specter42379 = (function com$rpl$specter$__GT_t_com$rpl$specter42379(start__$1,end__$1,meta42380){
return (new com.rpl.specter.t_com$rpl$specter42379(start__$1,end__$1,meta42380));
});

}

return (new com.rpl.specter.t_com$rpl$specter42379(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__39220__auto__,p__42389){
var vec__42390 = p__42389;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42390,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42390,(1),null);
var ret__39221__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42394 = (function (pred,meta42395){
this.pred = pred;
this.meta42395 = meta42395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42396,meta42395__$1){
var self__ = this;
var _42396__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42394(self__.pred,meta42395__$1));
});

com.rpl.specter.t_com$rpl$specter42394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42396){
var self__ = this;
var _42396__$1 = this;
return self__.meta42395;
});

com.rpl.specter.t_com$rpl$specter42394.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42394.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__40442__auto____$1){
return (function (curr__39220__auto__,p__42397){
var vec__42398 = p__42397;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42398,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42398,(1),null);
var ret__39221__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
}
}
});})(next_fn,this__40442__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter42394.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter42394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta42395","meta42395",-362944145,null)], null);
});

com.rpl.specter.t_com$rpl$specter42394.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42394.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42394";

com.rpl.specter.t_com$rpl$specter42394.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42394");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42394.
 */
com.rpl.specter.__GT_t_com$rpl$specter42394 = (function com$rpl$specter$__GT_t_com$rpl$specter42394(pred__$1,meta42395){
return (new com.rpl.specter.t_com$rpl$specter42394(pred__$1,meta42395));
});

}

return (new com.rpl.specter.t_com$rpl$specter42394(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__42407 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42407) : next_fn.call(null,G__42407));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__42408 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42408) : next_fn.call(null,G__42408));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42409 = (function (meta42410){
this.meta42410 = meta42410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42411,meta42410__$1){
var self__ = this;
var _42411__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42409(meta42410__$1));
});

com.rpl.specter.t_com$rpl$specter42409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42411){
var self__ = this;
var _42411__$1 = this;
return self__.meta42410;
});

com.rpl.specter.t_com$rpl$specter42409.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42409.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter42409.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter42409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42410","meta42410",-2033226064,null)], null);
});

com.rpl.specter.t_com$rpl$specter42409.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42409.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42409";

com.rpl.specter.t_com$rpl$specter42409.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42409");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42409.
 */
com.rpl.specter.__GT_t_com$rpl$specter42409 = (function com$rpl$specter$__GT_t_com$rpl$specter42409(meta42410){
return (new com.rpl.specter.t_com$rpl$specter42409(meta42410));
});

}

return (new com.rpl.specter.t_com$rpl$specter42409(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__42413 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42413) : next_fn.call(null,G__42413));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__42414 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42414) : next_fn.call(null,G__42414));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42415 = (function (meta42416){
this.meta42416 = meta42416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42417,meta42416__$1){
var self__ = this;
var _42417__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42415(meta42416__$1));
});

com.rpl.specter.t_com$rpl$specter42415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42417){
var self__ = this;
var _42417__$1 = this;
return self__.meta42416;
});

com.rpl.specter.t_com$rpl$specter42415.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42415.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter42415.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter42415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42416","meta42416",1003752909,null)], null);
});

com.rpl.specter.t_com$rpl$specter42415.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42415.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42415";

com.rpl.specter.t_com$rpl$specter42415.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42415");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42415.
 */
com.rpl.specter.__GT_t_com$rpl$specter42415 = (function com$rpl$specter$__GT_t_com$rpl$specter42415(meta42416){
return (new com.rpl.specter.t_com$rpl$specter42415(meta42416));
});

}

return (new com.rpl.specter.t_com$rpl$specter42415(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42424 = (function (meta42425){
this.meta42425 = meta42425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42426,meta42425__$1){
var self__ = this;
var _42426__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42424(meta42425__$1));
});

com.rpl.specter.t_com$rpl$specter42424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42426){
var self__ = this;
var _42426__$1 = this;
return self__.meta42425;
});

com.rpl.specter.t_com$rpl$specter42424.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42424.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter42424.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
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

com.rpl.specter.t_com$rpl$specter42424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42425","meta42425",470299959,null)], null);
});

com.rpl.specter.t_com$rpl$specter42424.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42424.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42424";

com.rpl.specter.t_com$rpl$specter42424.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42424");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42424.
 */
com.rpl.specter.__GT_t_com$rpl$specter42424 = (function com$rpl$specter$__GT_t_com$rpl$specter42424(meta42425){
return (new com.rpl.specter.t_com$rpl$specter42424(meta42425));
});

}

return (new com.rpl.specter.t_com$rpl$specter42424(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42435 = (function (meta42436){
this.meta42436 = meta42436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42437,meta42436__$1){
var self__ = this;
var _42437__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42435(meta42436__$1));
});

com.rpl.specter.t_com$rpl$specter42435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42437){
var self__ = this;
var _42437__$1 = this;
return self__.meta42436;
});

com.rpl.specter.t_com$rpl$specter42435.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42435.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter42435.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter42435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42436","meta42436",-2108767582,null)], null);
});

com.rpl.specter.t_com$rpl$specter42435.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42435.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42435";

com.rpl.specter.t_com$rpl$specter42435.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42435");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42435.
 */
com.rpl.specter.__GT_t_com$rpl$specter42435 = (function com$rpl$specter$__GT_t_com$rpl$specter42435(meta42436){
return (new com.rpl.specter.t_com$rpl$specter42435(meta42436));
});

}

return (new com.rpl.specter.t_com$rpl$specter42435(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42439 = (function (meta42440){
this.meta42440 = meta42440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42441,meta42440__$1){
var self__ = this;
var _42441__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42439(meta42440__$1));
});

com.rpl.specter.t_com$rpl$specter42439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42441){
var self__ = this;
var _42441__$1 = this;
return self__.meta42440;
});

com.rpl.specter.t_com$rpl$specter42439.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42439.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter42439.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter42439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42440","meta42440",628070422,null)], null);
});

com.rpl.specter.t_com$rpl$specter42439.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42439.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42439";

com.rpl.specter.t_com$rpl$specter42439.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42439");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42439.
 */
com.rpl.specter.__GT_t_com$rpl$specter42439 = (function com$rpl$specter$__GT_t_com$rpl$specter42439(meta42440){
return (new com.rpl.specter.t_com$rpl$specter42439(meta42440));
});

}

return (new com.rpl.specter.t_com$rpl$specter42439(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__42446 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42446) : next_fn.call(null,G__42446));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42447 = (function (aset,meta42448){
this.aset = aset;
this.meta42448 = meta42448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42449,meta42448__$1){
var self__ = this;
var _42449__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42447(self__.aset,meta42448__$1));
});

com.rpl.specter.t_com$rpl$specter42447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42449){
var self__ = this;
var _42449__$1 = this;
return self__.meta42448;
});

com.rpl.specter.t_com$rpl$specter42447.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42447.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter42447.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter42447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta42448","meta42448",-869343813,null)], null);
});

com.rpl.specter.t_com$rpl$specter42447.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42447.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42447";

com.rpl.specter.t_com$rpl$specter42447.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42447");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42447.
 */
com.rpl.specter.__GT_t_com$rpl$specter42447 = (function com$rpl$specter$__GT_t_com$rpl$specter42447(aset__$1,meta42448){
return (new com.rpl.specter.t_com$rpl$specter42447(aset__$1,meta42448));
});

}

return (new com.rpl.specter.t_com$rpl$specter42447(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__42452 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42452) : next_fn.call(null,G__42452));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42462 = (function (m_keys,meta42463){
this.m_keys = m_keys;
this.meta42463 = meta42463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42464,meta42463__$1){
var self__ = this;
var _42464__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42462(self__.m_keys,meta42463__$1));
});

com.rpl.specter.t_com$rpl$specter42462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42464){
var self__ = this;
var _42464__$1 = this;
return self__.meta42463;
});

com.rpl.specter.t_com$rpl$specter42462.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42462.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter42462.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
});

com.rpl.specter.t_com$rpl$specter42462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta42463","meta42463",11312683,null)], null);
});

com.rpl.specter.t_com$rpl$specter42462.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42462.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42462";

com.rpl.specter.t_com$rpl$specter42462.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42462");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42462.
 */
com.rpl.specter.__GT_t_com$rpl$specter42462 = (function com$rpl$specter$__GT_t_com$rpl$specter42462(m_keys__$1,meta42463){
return (new com.rpl.specter.t_com$rpl$specter42462(m_keys__$1,meta42463));
});

}

return (new com.rpl.specter.t_com$rpl$specter42462(m_keys,null));
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
var G__43172__delegate = function (path){
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42497 = (function (path,late,meta42498){
this.path = path;
this.late = late;
this.meta42498 = meta42498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42499,meta42498__$1){
var self__ = this;
var _42499__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42497(self__.path,self__.late,meta42498__$1));
});

com.rpl.specter.t_com$rpl$specter42497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42499){
var self__ = this;
var _42499__$1 = this;
return self__.meta42498;
});

com.rpl.specter.t_com$rpl$specter42497.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42497.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter42497.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__42502 = self__.late;
var G__42503 = ((function (G__42502,select_result,transformed,values_to_insert,next_fn,this__40442__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__42502,select_result,transformed,values_to_insert,next_fn,this__40442__auto____$1))
;
var G__42504 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__42502,G__42503,G__42504) : com.rpl.specter.compiled_transform.call(null,G__42502,G__42503,G__42504));
});

com.rpl.specter.t_com$rpl$specter42497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta42498","meta42498",1515626816,null)], null);
});

com.rpl.specter.t_com$rpl$specter42497.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42497.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42497";

com.rpl.specter.t_com$rpl$specter42497.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42497");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42497.
 */
com.rpl.specter.__GT_t_com$rpl$specter42497 = (function com$rpl$specter$__GT_t_com$rpl$specter42497(path__$1,late__$1,meta42498){
return (new com.rpl.specter.t_com$rpl$specter42497(path__$1,late__$1,meta42498));
});

}

return (new com.rpl.specter.t_com$rpl$specter42497(path,late,null));
}));
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
};
var G__43172 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43196__i = 0, G__43196__a = new Array(arguments.length -  0);
while (G__43196__i < G__43196__a.length) {G__43196__a[G__43196__i] = arguments[G__43196__i + 0]; ++G__43196__i;}
  path = new cljs.core.IndexedSeq(G__43196__a,0,null);
} 
return G__43172__delegate.call(this,path);};
G__43172.cljs$lang$maxFixedArity = 0;
G__43172.cljs$lang$applyTo = (function (arglist__43201){
var path = cljs.core.seq(arglist__43201);
return G__43172__delegate(path);
});
G__43172.cljs$core$IFn$_invoke$arity$variadic = G__43172__delegate;
return G__43172;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42521 = (function (key,meta42522){
this.key = key;
this.meta42522 = meta42522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42523,meta42522__$1){
var self__ = this;
var _42523__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42521(self__.key,meta42522__$1));
});

com.rpl.specter.t_com$rpl$specter42521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42523){
var self__ = this;
var _42523__$1 = this;
return self__.meta42522;
});

com.rpl.specter.t_com$rpl$specter42521.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42521.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter42521.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter42521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta42522","meta42522",-419419804,null)], null);
});

com.rpl.specter.t_com$rpl$specter42521.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42521.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42521";

com.rpl.specter.t_com$rpl$specter42521.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42521");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42521.
 */
com.rpl.specter.__GT_t_com$rpl$specter42521 = (function com$rpl$specter$__GT_t_com$rpl$specter42521(key__$1,meta42522){
return (new com.rpl.specter.t_com$rpl$specter42521(key__$1,meta42522));
});

}

return (new com.rpl.specter.t_com$rpl$specter42521(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42536 = (function (elem,meta42537){
this.elem = elem;
this.meta42537 = meta42537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42538,meta42537__$1){
var self__ = this;
var _42538__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42536(self__.elem,meta42537__$1));
});

com.rpl.specter.t_com$rpl$specter42536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42538){
var self__ = this;
var _42538__$1 = this;
return self__.meta42537;
});

com.rpl.specter.t_com$rpl$specter42536.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42536.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter42536.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter42536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta42537","meta42537",-1033518718,null)], null);
});

com.rpl.specter.t_com$rpl$specter42536.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42536.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42536";

com.rpl.specter.t_com$rpl$specter42536.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42536");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42536.
 */
com.rpl.specter.__GT_t_com$rpl$specter42536 = (function com$rpl$specter$__GT_t_com$rpl$specter42536(elem__$1,meta42537){
return (new com.rpl.specter.t_com$rpl$specter42536(elem__$1,meta42537));
});

}

return (new com.rpl.specter.t_com$rpl$specter42536(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42554 = (function (index,meta42555){
this.index = index;
this.meta42555 = meta42555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42556,meta42555__$1){
var self__ = this;
var _42556__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42554(self__.index,meta42555__$1));
});

com.rpl.specter.t_com$rpl$specter42554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42556){
var self__ = this;
var _42556__$1 = this;
return self__.meta42555;
});

com.rpl.specter.t_com$rpl$specter42554.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42554.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter42554.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42566;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42567 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,754,757,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache42566 = info42567;

return info42567;
})():info__41236__auto__);
var precompiled42568 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42587 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled42568.cljs$core$IFn$_invoke$arity$1 ? precompiled42568.cljs$core$IFn$_invoke$arity$1(G__42587) : precompiled42568.call(null,G__42587));
} else {
return precompiled42568;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter42554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta42555","meta42555",264750294,null)], null);
});

com.rpl.specter.t_com$rpl$specter42554.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42554.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42554";

com.rpl.specter.t_com$rpl$specter42554.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42554");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42554.
 */
com.rpl.specter.__GT_t_com$rpl$specter42554 = (function com$rpl$specter$__GT_t_com$rpl$specter42554(index__$1,meta42555){
return (new com.rpl.specter.t_com$rpl$specter42554(index__$1,meta42555));
});

}

return (new com.rpl.specter.t_com$rpl$specter42554(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42594 = (function (i,meta42595){
this.i = i;
this.meta42595 = meta42595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42596,meta42595__$1){
var self__ = this;
var _42596__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42594(self__.i,meta42595__$1));
});

com.rpl.specter.t_com$rpl$specter42594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42596){
var self__ = this;
var _42596__$1 = this;
return self__.meta42595;
});

com.rpl.specter.t_com$rpl$specter42594.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42594.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter42594.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__43238 = (j - (1));
var G__43239 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__43238;
s = G__43239;
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
var G__43243 = (j + (1));
var G__43244 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__43243;
s = G__43244;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42601;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42602 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,967,970,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache42601 = info42602;

return info42602;
})():info__41236__auto__);
var precompiled42603 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled42603.cljs$core$IFn$_invoke$arity$1 ? precompiled42603.cljs$core$IFn$_invoke$arity$1(G__42604) : precompiled42603.call(null,G__42604));
} else {
return precompiled42603;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42605;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42606 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache42605 = info42606;

return info42606;
})():info__41236__auto__);
var precompiled42607 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled42607.cljs$core$IFn$_invoke$arity$1 ? precompiled42607.cljs$core$IFn$_invoke$arity$1(G__42608) : precompiled42607.call(null,G__42608));
} else {
return precompiled42607;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter42594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta42595","meta42595",-1751599155,null)], null);
});

com.rpl.specter.t_com$rpl$specter42594.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42594.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42594";

com.rpl.specter.t_com$rpl$specter42594.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42594");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42594.
 */
com.rpl.specter.__GT_t_com$rpl$specter42594 = (function com$rpl$specter$__GT_t_com$rpl$specter42594(i__$1,meta42595){
return (new com.rpl.specter.t_com$rpl$specter42594(i__$1,meta42595));
});

}

return (new com.rpl.specter.t_com$rpl$specter42594(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i){
return (function (curr__39220__auto__,e){
var ret__39221__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__42611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42611) : next_fn.call(null,G__42611));
})()
;
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
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
var vec__42612 = (function (){var G__42615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42615) : next_fn.call(null,G__42615));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42612,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42612,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__42612,newi_STAR_,newe,newi,indices){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42617;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42618 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__41236__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices){
return (function (p1__42609_SHARP_){
return (p1__42609_SHARP_ >= (curri + (1)));
});})(info__41236__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__41236__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices){
return (function (p1__42610_SHARP_){
return (p1__42610_SHARP_ <= newi);
});})(info__41236__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache42617 = info42618;

return info42618;
})():info__41236__auto__);
var precompiled42619 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42620 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices){
return (function (p1__42609_SHARP_){
return (p1__42609_SHARP_ >= (curri + (1)));
});})(info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices))
,((function (info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices){
return (function (p1__42610_SHARP_){
return (p1__42610_SHARP_ <= newi);
});})(info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices))
], null),com.rpl.specter.ALL,((function (info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices){
return (function (p1__42609_SHARP_){
return (p1__42609_SHARP_ >= (curri + (1)));
});})(info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices))
,((function (info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices){
return (function (p1__42610_SHARP_){
return (p1__42610_SHARP_ <= newi);
});})(info__41236__auto__,info__41236__auto____$1,precompiled42619,dynamic_QMARK___41237__auto__,ii2,curri,vec__42612,newi_STAR_,newe,newi,indices))
], null);
return (precompiled42619.cljs$core$IFn$_invoke$arity$1 ? precompiled42619.cljs$core$IFn$_invoke$arity$1(G__42620) : precompiled42619.call(null,G__42620));
} else {
return precompiled42619;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__42612,newi_STAR_,newe,newi,indices))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42621;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42622 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache42621 = info42622;

return info42622;
})():info__41236__auto__);
var precompiled42623 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled42623.cljs$core$IFn$_invoke$arity$1 ? precompiled42623.cljs$core$IFn$_invoke$arity$1(G__42624) : precompiled42623.call(null,G__42624));
} else {
return precompiled42623;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42625;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42626 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache42625 = info42626;

return info42626;
})():info__41236__auto__);
var precompiled42627 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled42627.cljs$core$IFn$_invoke$arity$1 ? precompiled42627.cljs$core$IFn$_invoke$arity$1(G__42628) : precompiled42627.call(null,G__42628));
} else {
return precompiled42627;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42629 = (function (start,meta42630){
this.start = start;
this.meta42630 = meta42630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42631,meta42630__$1){
var self__ = this;
var _42631__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42629(self__.start,meta42630__$1));
});

com.rpl.specter.t_com$rpl$specter42629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42631){
var self__ = this;
var _42631__$1 = this;
return self__.meta42630;
});

com.rpl.specter.t_com$rpl$specter42629.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42629.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,next_fn,this__40442__auto____$1){
return (function (curr__39220__auto__,e){
var ret__39221__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
}
}
});})(i,next_fn,this__40442__auto____$1))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.t_com$rpl$specter42629.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,next_fn,this__40442__auto____$1){
return (function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__42641 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42641,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42641,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42644;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42645 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__41236__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1){
return (function (p1__42609_SHARP_){
return (p1__42609_SHARP_ >= (curri + (1)));
});})(info__41236__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__41236__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1){
return (function (p1__42610_SHARP_){
return (p1__42610_SHARP_ <= newi);
});})(info__41236__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__42609#","p1__42609#",-2002673885,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__42610#","p1__42610#",-2112308161,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache42644 = info42645;

return info42645;
})():info__41236__auto__);
var precompiled42646 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42647 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1){
return (function (p1__42609_SHARP_){
return (p1__42609_SHARP_ >= (curri + (1)));
});})(info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1))
,((function (info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1){
return (function (p1__42610_SHARP_){
return (p1__42610_SHARP_ <= newi);
});})(info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1))
], null),com.rpl.specter.ALL,((function (info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1){
return (function (p1__42609_SHARP_){
return (p1__42609_SHARP_ >= (curri + (1)));
});})(info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1))
,((function (info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1){
return (function (p1__42610_SHARP_){
return (p1__42610_SHARP_ <= newi);
});})(info__41236__auto__,info__41236__auto____$1,precompiled42646,dynamic_QMARK___41237__auto__,ii2,curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1))
], null);
return (precompiled42646.cljs$core$IFn$_invoke$arity$1 ? precompiled42646.cljs$core$IFn$_invoke$arity$1(G__42647) : precompiled42646.call(null,G__42647));
} else {
return precompiled42646;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__42641,newi_STAR_,newe,newi,indices,next_fn,this__40442__auto____$1))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42648;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42649 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache42648 = info42649;

return info42649;
})():info__41236__auto__);
var precompiled42650 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled42650.cljs$core$IFn$_invoke$arity$1 ? precompiled42650.cljs$core$IFn$_invoke$arity$1(G__42651) : precompiled42650.call(null,G__42651));
} else {
return precompiled42650;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__41236__auto__ = com.rpl.specter.pathcache42652;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info42653 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache42652 = info42653;

return info42653;
})():info__41236__auto__);
var precompiled42654 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__42655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled42654.cljs$core$IFn$_invoke$arity$1 ? precompiled42654.cljs$core$IFn$_invoke$arity$1(G__42655) : precompiled42654.call(null,G__42655));
} else {
return precompiled42654;
}
})(),newe,s));
});})(indices,next_fn,this__40442__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter42629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta42630","meta42630",1673593931,null)], null);
});

com.rpl.specter.t_com$rpl$specter42629.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42629.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42629";

com.rpl.specter.t_com$rpl$specter42629.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42629");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42629.
 */
com.rpl.specter.__GT_t_com$rpl$specter42629 = (function com$rpl$specter$__GT_t_com$rpl$specter42629(start__$1,meta42630){
return (new com.rpl.specter.t_com$rpl$specter42629(start__$1,meta42630));
});

}

return (new com.rpl.specter.t_com$rpl$specter42629(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42656 = (function (afn,meta42657){
this.afn = afn;
this.meta42657 = meta42657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42658,meta42657__$1){
var self__ = this;
var _42658__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42656(self__.afn,meta42657__$1));
});

com.rpl.specter.t_com$rpl$specter42656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42658){
var self__ = this;
var _42658__$1 = this;
return self__.meta42657;
});

com.rpl.specter.t_com$rpl$specter42656.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42656.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__42659 = vals;
var G__42660 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__42659,G__42660) : next_fn.call(null,G__42659,G__42660));
});

com.rpl.specter.t_com$rpl$specter42656.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__42661 = vals;
var G__42662 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__42661,G__42662) : next_fn.call(null,G__42661,G__42662));
});

com.rpl.specter.t_com$rpl$specter42656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta42657","meta42657",1309389296,null)], null);
});

com.rpl.specter.t_com$rpl$specter42656.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42656.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42656";

com.rpl.specter.t_com$rpl$specter42656.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42656");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42656.
 */
com.rpl.specter.__GT_t_com$rpl$specter42656 = (function com$rpl$specter$__GT_t_com$rpl$specter42656(afn__$1,meta42657){
return (new com.rpl.specter.t_com$rpl$specter42656(afn__$1,meta42657));
});

}

return (new com.rpl.specter.t_com$rpl$specter42656(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__42667 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42667) : next_fn.call(null,G__42667));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__42668 = (function (){var G__42669 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42669) : next_fn.call(null,G__42669));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__42668) : unparse_fn.call(null,G__42668));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42670 = (function (parse_fn,unparse_fn,meta42671){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta42671 = meta42671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42672,meta42671__$1){
var self__ = this;
var _42672__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42670(self__.parse_fn,self__.unparse_fn,meta42671__$1));
});

com.rpl.specter.t_com$rpl$specter42670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42672){
var self__ = this;
var _42672__$1 = this;
return self__.meta42671;
});

com.rpl.specter.t_com$rpl$specter42670.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42670.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter42670.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
var G__42675 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__42675) : self__.unparse_fn.call(null,G__42675));
});

com.rpl.specter.t_com$rpl$specter42670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta42671","meta42671",-562533943,null)], null);
});

com.rpl.specter.t_com$rpl$specter42670.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42670.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42670";

com.rpl.specter.t_com$rpl$specter42670.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42670");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42670.
 */
com.rpl.specter.__GT_t_com$rpl$specter42670 = (function com$rpl$specter$__GT_t_com$rpl$specter42670(parse_fn__$1,unparse_fn__$1,meta42671){
return (new com.rpl.specter.t_com$rpl$specter42670(parse_fn__$1,unparse_fn__$1,meta42671));
});

}

return (new com.rpl.specter.t_com$rpl$specter42670(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__42676 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42676) : next_fn.call(null,G__42676));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42677 = (function (meta42678){
this.meta42678 = meta42678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42679,meta42678__$1){
var self__ = this;
var _42679__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42677(meta42678__$1));
});

com.rpl.specter.t_com$rpl$specter42677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42679){
var self__ = this;
var _42679__$1 = this;
return self__.meta42678;
});

com.rpl.specter.t_com$rpl$specter42677.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42677.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});

com.rpl.specter.t_com$rpl$specter42677.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter42677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42678","meta42678",-624461022,null)], null);
});

com.rpl.specter.t_com$rpl$specter42677.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42677.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42677";

com.rpl.specter.t_com$rpl$specter42677.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42677");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42677.
 */
com.rpl.specter.__GT_t_com$rpl$specter42677 = (function com$rpl$specter$__GT_t_com$rpl$specter42677(meta42678){
return (new com.rpl.specter.t_com$rpl$specter42677(meta42678));
});

}

return (new com.rpl.specter.t_com$rpl$specter42677(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__39220__auto__,s){
var ret__39221__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42684 = (function (re,meta42685){
this.re = re;
this.meta42685 = meta42685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42686,meta42685__$1){
var self__ = this;
var _42686__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42684(self__.re,meta42685__$1));
});

com.rpl.specter.t_com$rpl$specter42684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42686){
var self__ = this;
var _42686__$1 = this;
return self__.meta42685;
});

com.rpl.specter.t_com$rpl$specter42684.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42684.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__40442__auto____$1){
return (function (curr__39220__auto__,s){
var ret__39221__auto__ = next_fn(s);
if((ret__39221__auto__ === com.rpl.specter.NONE)){
return curr__39220__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__39221__auto__)){
return cljs.core.reduced(ret__39221__auto__);
} else {
return ret__39221__auto__;
}
}
});})(next_fn,this__40442__auto____$1))
,com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
});

com.rpl.specter.t_com$rpl$specter42684.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return clojure.string.replace(structure,self__.re,next_fn);
});

com.rpl.specter.t_com$rpl$specter42684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta42685","meta42685",1229867762,null)], null);
});

com.rpl.specter.t_com$rpl$specter42684.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42684.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42684";

com.rpl.specter.t_com$rpl$specter42684.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42684");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42684.
 */
com.rpl.specter.__GT_t_com$rpl$specter42684 = (function com$rpl$specter$__GT_t_com$rpl$specter42684(re__$1,meta42685){
return (new com.rpl.specter.t_com$rpl$specter42684(re__$1,meta42685));
});

}

return (new com.rpl.specter.t_com$rpl$specter42684(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__43508__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5733__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42691 = (function (path,temp__5733__auto__,late,meta42692){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta42692 = meta42692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_42693,meta42692__$1){
var self__ = this;
var _42693__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42691(self__.path,self__.temp__5733__auto__,self__.late,meta42692__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_42693){
var self__ = this;
var _42693__$1 = this;
return self__.meta42692;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42691.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42691.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5733__auto__){
return (function (p1__42689_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__42689_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42691.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5733__auto__){
return (function (p1__42690_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__42690_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42691.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta42692","meta42692",-11212419,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42691.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42691.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42691";

com.rpl.specter.t_com$rpl$specter42691.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42691");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42691.
 */
com.rpl.specter.__GT_t_com$rpl$specter42691 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter42691(path__$1,temp__5733__auto____$1,late__$1,meta42692){
return (new com.rpl.specter.t_com$rpl$specter42691(path__$1,temp__5733__auto____$1,late__$1,meta42692));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter42691(path,temp__5733__auto__,late,null));
});})(temp__5733__auto__))
);
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
}
};
var G__43508 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43539__i = 0, G__43539__a = new Array(arguments.length -  0);
while (G__43539__i < G__43539__a.length) {G__43539__a[G__43539__i] = arguments[G__43539__i + 0]; ++G__43539__i;}
  path = new cljs.core.IndexedSeq(G__43539__a,0,null);
} 
return G__43508__delegate.call(this,path);};
G__43508.cljs$lang$maxFixedArity = 0;
G__43508.cljs$lang$applyTo = (function (arglist__43542){
var path = cljs.core.seq(arglist__43542);
return G__43508__delegate(path);
});
G__43508.cljs$core$IFn$_invoke$arity$variadic = G__43508__delegate;
return G__43508;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__43546__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return ((function (afn,temp__5733__auto__){
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
;})(afn,temp__5733__auto__))
} else {
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5733__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42700 = (function (path,temp__5733__auto__,late,meta42701){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta42701 = meta42701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_42702,meta42701__$1){
var self__ = this;
var _42702__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42700(self__.path,self__.temp__5733__auto__,self__.late,meta42701__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_42702){
var self__ = this;
var _42702__$1 = this;
return self__.meta42701;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42700.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42700.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5733__auto__){
return (function (p1__42698_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__42698_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42700.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5733__auto__){
return (function (p1__42699_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__42699_SHARP_);
});})(this$__$1,temp__5733__auto__))
,vals,structure,next_fn);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42700.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta42701","meta42701",-505846899,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42700.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42700.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42700";

com.rpl.specter.t_com$rpl$specter42700.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42700");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42700.
 */
com.rpl.specter.__GT_t_com$rpl$specter42700 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter42700(path__$1,temp__5733__auto____$1,late__$1,meta42701){
return (new com.rpl.specter.t_com$rpl$specter42700(path__$1,temp__5733__auto____$1,late__$1,meta42701));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter42700(path,temp__5733__auto__,late,null));
});})(temp__5733__auto__))
);
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
}
};
var G__43546 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43573__i = 0, G__43573__a = new Array(arguments.length -  0);
while (G__43573__i < G__43573__a.length) {G__43573__a[G__43573__i] = arguments[G__43573__i + 0]; ++G__43573__i;}
  path = new cljs.core.IndexedSeq(G__43573__a,0,null);
} 
return G__43546__delegate.call(this,path);};
G__43546.cljs$lang$maxFixedArity = 0;
G__43546.cljs$lang$applyTo = (function (arglist__43574){
var path = cljs.core.seq(arglist__43574);
return G__43546__delegate(path);
});
G__43546.cljs$core$IFn$_invoke$arity$variadic = G__43546__delegate;
return G__43546;
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
var G__43582__delegate = function (path){
var G__42728 = com.rpl.specter.ALL;
var G__42730 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__42728,G__42730) : com.rpl.specter.subselect.call(null,G__42728,G__42730));
};
var G__43582 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43592__i = 0, G__43592__a = new Array(arguments.length -  0);
while (G__43592__i < G__43592__a.length) {G__43592__a[G__43592__i] = arguments[G__43592__i + 0]; ++G__43592__i;}
  path = new cljs.core.IndexedSeq(G__43592__a,0,null);
} 
return G__43582__delegate.call(this,path);};
G__43582.cljs$lang$maxFixedArity = 0;
G__43582.cljs$lang$applyTo = (function (arglist__43594){
var path = cljs.core.seq(arglist__43594);
return G__43582__delegate(path);
});
G__43582.cljs$core$IFn$_invoke$arity$variadic = G__43582__delegate;
return G__43582;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42754 = (function (path,update_fn,late,late_fn,meta42755){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta42755 = meta42755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42756,meta42755__$1){
var self__ = this;
var _42756__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42754(self__.path,self__.update_fn,self__.late,self__.late_fn,meta42755__$1));
});

com.rpl.specter.t_com$rpl$specter42754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42756){
var self__ = this;
var _42756__$1 = this;
return self__.meta42755;
});

com.rpl.specter.t_com$rpl$specter42754.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42754.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter42754.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter42754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta42755","meta42755",-716568812,null)], null);
});

com.rpl.specter.t_com$rpl$specter42754.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42754.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42754";

com.rpl.specter.t_com$rpl$specter42754.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42754");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42754.
 */
com.rpl.specter.__GT_t_com$rpl$specter42754 = (function com$rpl$specter$__GT_t_com$rpl$specter42754(path__$1,update_fn__$1,late__$1,late_fn__$1,meta42755){
return (new com.rpl.specter.t_com$rpl$specter42754(path__$1,update_fn__$1,late__$1,late_fn__$1,meta42755));
});

}

return (new com.rpl.specter.t_com$rpl$specter42754(path,update_fn,late,late_fn,null));
}));
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42757 = (function (path,reduce_fn,late,late_fn,meta42758){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta42758 = meta42758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42759,meta42758__$1){
var self__ = this;
var _42759__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42757(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta42758__$1));
});

com.rpl.specter.t_com$rpl$specter42757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42759){
var self__ = this;
var _42759__$1 = this;
return self__.meta42758;
});

com.rpl.specter.t_com$rpl$specter42757.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42757.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter42757.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter42757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta42758","meta42758",-1070270311,null)], null);
});

com.rpl.specter.t_com$rpl$specter42757.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42757.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42757";

com.rpl.specter.t_com$rpl$specter42757.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42757");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42757.
 */
com.rpl.specter.__GT_t_com$rpl$specter42757 = (function com$rpl$specter$__GT_t_com$rpl$specter42757(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta42758){
return (new com.rpl.specter.t_com$rpl$specter42757(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta42758));
});

}

return (new com.rpl.specter.t_com$rpl$specter42757(path,reduce_fn,late,late_fn,null));
}));
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__42764 = (function (p1__42763_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42763_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__42764) : com.rpl.specter.pred.call(null,G__42764));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__42766 = (function (p1__42765_SHARP_){
return (p1__42765_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__42766) : com.rpl.specter.pred.call(null,G__42766));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__42768 = (function (p1__42767_SHARP_){
return (p1__42767_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__42768) : com.rpl.specter.pred.call(null,G__42768));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__42770 = (function (p1__42769_SHARP_){
return (p1__42769_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__42770) : com.rpl.specter.pred.call(null,G__42770));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__42772 = (function (p1__42771_SHARP_){
return (p1__42771_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__42772) : com.rpl.specter.pred.call(null,G__42772));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__42773_43688 = com.rpl.specter.protocols.implicit_nav;
var G__42774_43689 = "null";
var G__42775_43690 = ((function (G__42773_43688,G__42774_43689){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__42773_43688,G__42774_43689))
;
goog.object.set(G__42773_43688,G__42774_43689,G__42775_43690);
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

var G__42776_43695 = com.rpl.specter.protocols.implicit_nav;
var G__42777_43696 = "string";
var G__42778_43697 = ((function (G__42776_43695,G__42777_43696){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__42776_43695,G__42777_43696))
;
goog.object.set(G__42776_43695,G__42777_43696,G__42778_43697);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

var G__42779_43699 = com.rpl.specter.protocols.implicit_nav;
var G__42780_43700 = "number";
var G__42781_43701 = ((function (G__42779_43699,G__42780_43700){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__42779_43699,G__42780_43700))
;
goog.object.set(G__42779_43699,G__42780_43700,G__42781_43701);
cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

var G__42788_43703 = com.rpl.specter.protocols.implicit_nav;
var G__42789_43704 = "boolean";
var G__42790_43705 = ((function (G__42788_43703,G__42789_43704){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__42788_43703,G__42789_43704))
;
goog.object.set(G__42788_43703,G__42789_43704,G__42790_43705);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__42791_43710 = com.rpl.specter.protocols.implicit_nav;
var G__42792_43711 = "function";
var G__42793_43712 = ((function (G__42791_43710,G__42792_43711){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__42791_43710,G__42792_43711))
;
goog.object.set(G__42791_43710,G__42792_43711,G__42793_43712);
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
var G__42797 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42797) : next_fn.call(null,G__42797));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__42798 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42798) : next_fn.call(null,G__42798));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42799 = (function (v,meta42800){
this.v = v;
this.meta42800 = meta42800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42801,meta42800__$1){
var self__ = this;
var _42801__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42799(self__.v,meta42800__$1));
});

com.rpl.specter.t_com$rpl$specter42799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42801){
var self__ = this;
var _42801__$1 = this;
return self__.meta42800;
});

com.rpl.specter.t_com$rpl$specter42799.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42799.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter42799.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter42799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta42800","meta42800",1687486499,null)], null);
});

com.rpl.specter.t_com$rpl$specter42799.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42799.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42799";

com.rpl.specter.t_com$rpl$specter42799.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42799");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42799.
 */
com.rpl.specter.__GT_t_com$rpl$specter42799 = (function com$rpl$specter$__GT_t_com$rpl$specter42799(v__$1,meta42800){
return (new com.rpl.specter.t_com$rpl$specter42799(v__$1,meta42800));
});

}

return (new com.rpl.specter.t_com$rpl$specter42799(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__42811 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__42811) : com.rpl.specter.nil__GT_val.call(null,G__42811));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__42812 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__42812) : com.rpl.specter.nil__GT_val.call(null,G__42812));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__42813 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__42813) : com.rpl.specter.nil__GT_val.call(null,G__42813));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__42817 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42817) : next_fn.call(null,G__42817));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__42821 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42821) : next_fn.call(null,G__42821));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42822 = (function (meta42823){
this.meta42823 = meta42823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42824,meta42823__$1){
var self__ = this;
var _42824__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42822(meta42823__$1));
});

com.rpl.specter.t_com$rpl$specter42822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42824){
var self__ = this;
var _42824__$1 = this;
return self__.meta42823;
});

com.rpl.specter.t_com$rpl$specter42822.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42822.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});

com.rpl.specter.t_com$rpl$specter42822.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter42822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42823","meta42823",-1204862880,null)], null);
});

com.rpl.specter.t_com$rpl$specter42822.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42822.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42822";

com.rpl.specter.t_com$rpl$specter42822.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42822");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42822.
 */
com.rpl.specter.__GT_t_com$rpl$specter42822 = (function com$rpl$specter$__GT_t_com$rpl$specter42822(meta42823){
return (new com.rpl.specter.t_com$rpl$specter42822(meta42823));
});

}

return (new com.rpl.specter.t_com$rpl$specter42822(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__42828 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42828) : next_fn.call(null,G__42828));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__42829 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42829) : next_fn.call(null,G__42829));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42848 = (function (meta42849){
this.meta42849 = meta42849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42850,meta42849__$1){
var self__ = this;
var _42850__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42848(meta42849__$1));
});

com.rpl.specter.t_com$rpl$specter42848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42850){
var self__ = this;
var _42850__$1 = this;
return self__.meta42849;
});

com.rpl.specter.t_com$rpl$specter42848.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42848.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(cljs.core.name(structure));
});

com.rpl.specter.t_com$rpl$specter42848.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
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

com.rpl.specter.t_com$rpl$specter42848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42849","meta42849",-1510360325,null)], null);
});

com.rpl.specter.t_com$rpl$specter42848.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42848.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42848";

com.rpl.specter.t_com$rpl$specter42848.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42848");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42848.
 */
com.rpl.specter.__GT_t_com$rpl$specter42848 = (function com$rpl$specter$__GT_t_com$rpl$specter42848(meta42849){
return (new com.rpl.specter.t_com$rpl$specter42848(meta42849));
});

}

return (new com.rpl.specter.t_com$rpl$specter42848(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__42863 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42863) : next_fn.call(null,G__42863));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__42864 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__42864) : next_fn.call(null,G__42864));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42865 = (function (meta42866){
this.meta42866 = meta42866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42867,meta42866__$1){
var self__ = this;
var _42867__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42865(meta42866__$1));
});

com.rpl.specter.t_com$rpl$specter42865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42867){
var self__ = this;
var _42867__$1 = this;
return self__.meta42866;
});

com.rpl.specter.t_com$rpl$specter42865.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42865.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});

com.rpl.specter.t_com$rpl$specter42865.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__40442__auto__,vals__40443__auto__,structure,next_fn__40444__auto__){
var self__ = this;
var this__40442__auto____$1 = this;
var next_fn = ((function (this__40442__auto____$1){
return (function (s__40445__auto__){
return (next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__40444__auto__.cljs$core$IFn$_invoke$arity$2(vals__40443__auto__,s__40445__auto__) : next_fn__40444__auto__.call(null,vals__40443__auto__,s__40445__auto__));
});})(this__40442__auto____$1))
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

com.rpl.specter.t_com$rpl$specter42865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42866","meta42866",1650386949,null)], null);
});

com.rpl.specter.t_com$rpl$specter42865.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42865.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42865";

com.rpl.specter.t_com$rpl$specter42865.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42865");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42865.
 */
com.rpl.specter.__GT_t_com$rpl$specter42865 = (function com$rpl$specter$__GT_t_com$rpl$specter42865(meta42866){
return (new com.rpl.specter.t_com$rpl$specter42865(meta42866));
});

}

return (new com.rpl.specter.t_com$rpl$specter42865(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__43808__delegate = function (path){
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42869 = (function (path,late,meta42870){
this.path = path;
this.late = late;
this.meta42870 = meta42870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42871,meta42870__$1){
var self__ = this;
var _42871__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42869(self__.path,self__.late,meta42870__$1));
});

com.rpl.specter.t_com$rpl$specter42869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42871){
var self__ = this;
var _42871__$1 = this;
return self__.meta42870;
});

com.rpl.specter.t_com$rpl$specter42869.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42869.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42873 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__42874 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42873,G__42874) : next_fn__41228__auto__.call(null,G__42873,G__42874));
});

com.rpl.specter.t_com$rpl$specter42869.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42875 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__42876 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42875,G__42876) : next_fn__41228__auto__.call(null,G__42875,G__42876));
});

com.rpl.specter.t_com$rpl$specter42869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta42870","meta42870",-1404494254,null)], null);
});

com.rpl.specter.t_com$rpl$specter42869.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42869.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42869";

com.rpl.specter.t_com$rpl$specter42869.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42869");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42869.
 */
com.rpl.specter.__GT_t_com$rpl$specter42869 = (function com$rpl$specter$__GT_t_com$rpl$specter42869(path__$1,late__$1,meta42870){
return (new com.rpl.specter.t_com$rpl$specter42869(path__$1,late__$1,meta42870));
});

}

return (new com.rpl.specter.t_com$rpl$specter42869(path,late,null));
}));
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
};
var G__43808 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43817__i = 0, G__43817__a = new Array(arguments.length -  0);
while (G__43817__i < G__43817__a.length) {G__43817__a[G__43817__i] = arguments[G__43817__i + 0]; ++G__43817__i;}
  path = new cljs.core.IndexedSeq(G__43817__a,0,null);
} 
return G__43808__delegate.call(this,path);};
G__43808.cljs$lang$maxFixedArity = 0;
G__43808.cljs$lang$applyTo = (function (arglist__43818){
var path = cljs.core.seq(arglist__43818);
return G__43808__delegate(path);
});
G__43808.cljs$core$IFn$_invoke$arity$variadic = G__43808__delegate;
return G__43808;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__43821__delegate = function (path){
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42883 = (function (path,late,meta42884){
this.path = path;
this.late = late;
this.meta42884 = meta42884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42885,meta42884__$1){
var self__ = this;
var _42885__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42883(self__.path,self__.late,meta42884__$1));
});

com.rpl.specter.t_com$rpl$specter42883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42885){
var self__ = this;
var _42885__$1 = this;
return self__.meta42884;
});

com.rpl.specter.t_com$rpl$specter42883.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42883.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42886 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__42887 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42886,G__42887) : next_fn__41228__auto__.call(null,G__42886,G__42887));
});

com.rpl.specter.t_com$rpl$specter42883.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42888 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__42889 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42888,G__42889) : next_fn__41228__auto__.call(null,G__42888,G__42889));
});

com.rpl.specter.t_com$rpl$specter42883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta42884","meta42884",-1556215359,null)], null);
});

com.rpl.specter.t_com$rpl$specter42883.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42883.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42883";

com.rpl.specter.t_com$rpl$specter42883.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42883");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42883.
 */
com.rpl.specter.__GT_t_com$rpl$specter42883 = (function com$rpl$specter$__GT_t_com$rpl$specter42883(path__$1,late__$1,meta42884){
return (new com.rpl.specter.t_com$rpl$specter42883(path__$1,late__$1,meta42884));
});

}

return (new com.rpl.specter.t_com$rpl$specter42883(path,late,null));
}));
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
};
var G__43821 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43834__i = 0, G__43834__a = new Array(arguments.length -  0);
while (G__43834__i < G__43834__a.length) {G__43834__a[G__43834__i] = arguments[G__43834__i + 0]; ++G__43834__i;}
  path = new cljs.core.IndexedSeq(G__43834__a,0,null);
} 
return G__43821__delegate.call(this,path);};
G__43821.cljs$lang$maxFixedArity = 0;
G__43821.cljs$lang$applyTo = (function (arglist__43835){
var path = cljs.core.seq(arglist__43835);
return G__43821__delegate(path);
});
G__43821.cljs$core$IFn$_invoke$arity$variadic = G__43821__delegate;
return G__43821;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42892 = (function (val,meta42893){
this.val = val;
this.meta42893 = meta42893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42894,meta42893__$1){
var self__ = this;
var _42894__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42892(self__.val,meta42893__$1));
});

com.rpl.specter.t_com$rpl$specter42892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42894){
var self__ = this;
var _42894__$1 = this;
return self__.meta42893;
});

com.rpl.specter.t_com$rpl$specter42892.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42892.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,self__.val);
var G__42896 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42895,G__42896) : next_fn__41228__auto__.call(null,G__42895,G__42896));
});

com.rpl.specter.t_com$rpl$specter42892.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__41226__auto__,vals__41227__auto__,structure,next_fn__41228__auto__){
var self__ = this;
var this__41226__auto____$1 = this;
var G__42897 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__41227__auto__,self__.val);
var G__42898 = structure;
return (next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__41228__auto__.cljs$core$IFn$_invoke$arity$2(G__42897,G__42898) : next_fn__41228__auto__.call(null,G__42897,G__42898));
});

com.rpl.specter.t_com$rpl$specter42892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta42893","meta42893",-1990497006,null)], null);
});

com.rpl.specter.t_com$rpl$specter42892.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42892.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42892";

com.rpl.specter.t_com$rpl$specter42892.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42892");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42892.
 */
com.rpl.specter.__GT_t_com$rpl$specter42892 = (function com$rpl$specter$__GT_t_com$rpl$specter42892(val__$1,meta42893){
return (new com.rpl.specter.t_com$rpl$specter42892(val__$1,meta42893));
});

}

return (new com.rpl.specter.t_com$rpl$specter42892(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__43846__delegate = function (path){
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42902 = (function (path,late,meta42903){
this.path = path;
this.late = late;
this.meta42903 = meta42903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42904,meta42903__$1){
var self__ = this;
var _42904__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42902(self__.path,self__.late,meta42903__$1));
});

com.rpl.specter.t_com$rpl$specter42902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42904){
var self__ = this;
var _42904__$1 = this;
return self__.meta42903;
});

com.rpl.specter.t_com$rpl$specter42902.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42902.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter42902.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter42902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta42903","meta42903",-1553995200,null)], null);
});

com.rpl.specter.t_com$rpl$specter42902.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42902.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42902";

com.rpl.specter.t_com$rpl$specter42902.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42902");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42902.
 */
com.rpl.specter.__GT_t_com$rpl$specter42902 = (function com$rpl$specter$__GT_t_com$rpl$specter42902(path__$1,late__$1,meta42903){
return (new com.rpl.specter.t_com$rpl$specter42902(path__$1,late__$1,meta42903));
});

}

return (new com.rpl.specter.t_com$rpl$specter42902(path,late,null));
}));
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
};
var G__43846 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43881__i = 0, G__43881__a = new Array(arguments.length -  0);
while (G__43881__i < G__43881__a.length) {G__43881__a[G__43881__i] = arguments[G__43881__i + 0]; ++G__43881__i;}
  path = new cljs.core.IndexedSeq(G__43881__a,0,null);
} 
return G__43846__delegate.call(this,path);};
G__43846.cljs$lang$maxFixedArity = 0;
G__43846.cljs$lang$applyTo = (function (arglist__43882){
var path = cljs.core.seq(arglist__43882);
return G__43846__delegate(path);
});
G__43846.cljs$core$IFn$_invoke$arity$variadic = G__43846__delegate;
return G__43846;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42909 = (function (meta42910){
this.meta42910 = meta42910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42911,meta42910__$1){
var self__ = this;
var _42911__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42909(meta42910__$1));
});

com.rpl.specter.t_com$rpl$specter42909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42911){
var self__ = this;
var _42911__$1 = this;
return self__.meta42910;
});

com.rpl.specter.t_com$rpl$specter42909.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42909.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__42913 = cljs.core.PersistentVector.EMPTY;
var G__42914 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__42913,G__42914) : next_fn.call(null,G__42913,G__42914));
});

com.rpl.specter.t_com$rpl$specter42909.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__42916 = cljs.core.PersistentVector.EMPTY;
var G__42917 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__42916,G__42917) : next_fn.call(null,G__42916,G__42917));
});

com.rpl.specter.t_com$rpl$specter42909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42910","meta42910",-1960299224,null)], null);
});

com.rpl.specter.t_com$rpl$specter42909.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42909.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42909";

com.rpl.specter.t_com$rpl$specter42909.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42909");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42909.
 */
com.rpl.specter.__GT_t_com$rpl$specter42909 = (function com$rpl$specter$__GT_t_com$rpl$specter42909(meta42910){
return (new com.rpl.specter.t_com$rpl$specter42909(meta42910));
});

}

return (new com.rpl.specter.t_com$rpl$specter42909(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__43895 = null;
var G__43895__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__43895__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5733__auto__){
return (function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42924 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta42925){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta42925 = meta42925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5733__auto__){
return (function (_42926,meta42925__$1){
var self__ = this;
var _42926__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42924(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta42925__$1));
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5733__auto__){
return (function (_42926){
var self__ = this;
var _42926__$1 = this;
return self__.meta42925;
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42924.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42924.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42924.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42924.getBasis = ((function (afn,temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta42925","meta42925",58310249,null)], null);
});})(afn,temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42924.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42924.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42924";

com.rpl.specter.t_com$rpl$specter42924.cljs$lang$ctorPrWriter = ((function (afn,temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42924");
});})(afn,temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42924.
 */
com.rpl.specter.__GT_t_com$rpl$specter42924 = ((function (afn,temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter42924(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta42925){
return (new com.rpl.specter.t_com$rpl$specter42924(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta42925));
});})(afn,temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter42924(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
});})(afn,temp__5733__auto__))
);
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
} else {
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5733__auto__){
return (function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42932 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta42933){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta42933 = meta42933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5733__auto__){
return (function (_42934,meta42933__$1){
var self__ = this;
var _42934__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42932(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta42933__$1));
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5733__auto__){
return (function (_42934){
var self__ = this;
var _42934__$1 = this;
return self__.meta42933;
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42932.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42932.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5733__auto__){
return (function (p1__42918_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__42918_SHARP_);
});})(this$__$1,temp__5733__auto__))
,self__.late_then,self__.late_else);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42932.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5733__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5733__auto__){
return (function (p1__42919_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__42919_SHARP_);
});})(this$__$1,temp__5733__auto__))
,self__.late_then,self__.late_else);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42932.getBasis = ((function (temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta42933","meta42933",-1512190832,null)], null);
});})(temp__5733__auto__))
;

com.rpl.specter.t_com$rpl$specter42932.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42932.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42932";

com.rpl.specter.t_com$rpl$specter42932.cljs$lang$ctorPrWriter = ((function (temp__5733__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42932");
});})(temp__5733__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42932.
 */
com.rpl.specter.__GT_t_com$rpl$specter42932 = ((function (temp__5733__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter42932(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta42933){
return (new com.rpl.specter.t_com$rpl$specter42932(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta42933));
});})(temp__5733__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter42932(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
});})(temp__5733__auto__))
);
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
}
});
G__43895 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__43895__2.call(this,cond_p,then_path);
case 3:
return G__43895__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43895.cljs$core$IFn$_invoke$arity$2 = G__43895__2;
G__43895.cljs$core$IFn$_invoke$arity$3 = G__43895__3;
return G__43895;
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
var G__43946__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__42937){
var vec__42938 = p__42937;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42938,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42938,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__43946 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__43947__i = 0, G__43947__a = new Array(arguments.length -  0);
while (G__43947__i < G__43947__a.length) {G__43947__a[G__43947__i] = arguments[G__43947__i + 0]; ++G__43947__i;}
  conds = new cljs.core.IndexedSeq(G__43947__a,0,null);
} 
return G__43946__delegate.call(this,conds);};
G__43946.cljs$lang$maxFixedArity = 0;
G__43946.cljs$lang$applyTo = (function (arglist__43948){
var conds = cljs.core.seq(arglist__43948);
return G__43946__delegate(conds);
});
G__43946.cljs$core$IFn$_invoke$arity$variadic = G__43946__delegate;
return G__43946;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__43957 = null;
var G__43957__0 = (function (){
return com.rpl.specter.STAY;
});
var G__43957__1 = (function (path){
return path;
});
var G__43957__2 = (function (path1,path2){
var builder__41229__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter42969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter42969 = (function (path1,path2,late1,late2,meta42970){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta42970 = meta42970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter42969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42971,meta42970__$1){
var self__ = this;
var _42971__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter42969(self__.path1,self__.path2,self__.late1,self__.late2,meta42970__$1));
});

com.rpl.specter.t_com$rpl$specter42969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42971){
var self__ = this;
var _42971__$1 = this;
return self__.meta42970;
});

com.rpl.specter.t_com$rpl$specter42969.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter42969.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter42969.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter42969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta42970","meta42970",1298665940,null)], null);
});

com.rpl.specter.t_com$rpl$specter42969.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter42969.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter42969";

com.rpl.specter.t_com$rpl$specter42969.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.rpl.specter/t_com$rpl$specter42969");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter42969.
 */
com.rpl.specter.__GT_t_com$rpl$specter42969 = (function com$rpl$specter$__GT_t_com$rpl$specter42969(path1__$1,path2__$1,late1__$1,late2__$1,meta42970){
return (new com.rpl.specter.t_com$rpl$specter42969(path1__$1,path2__$1,late1__$1,late2__$1,meta42970));
});

}

return (new com.rpl.specter.t_com$rpl$specter42969(path1,path2,late1,late2,null));
}));
var curr_params__41230__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__41230__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__41229__auto__,curr_params__41230__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__41229__auto__,curr_params__41230__auto__,null);
}
});
var G__43957__3 = (function() { 
var G__43974__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__43974 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__43975__i = 0, G__43975__a = new Array(arguments.length -  2);
while (G__43975__i < G__43975__a.length) {G__43975__a[G__43975__i] = arguments[G__43975__i + 2]; ++G__43975__i;}
  paths = new cljs.core.IndexedSeq(G__43975__a,0,null);
} 
return G__43974__delegate.call(this,path1,path2,paths);};
G__43974.cljs$lang$maxFixedArity = 2;
G__43974.cljs$lang$applyTo = (function (arglist__43976){
var path1 = cljs.core.first(arglist__43976);
arglist__43976 = cljs.core.next(arglist__43976);
var path2 = cljs.core.first(arglist__43976);
var paths = cljs.core.rest(arglist__43976);
return G__43974__delegate(path1,path2,paths);
});
G__43974.cljs$core$IFn$_invoke$arity$variadic = G__43974__delegate;
return G__43974;
})()
;
G__43957 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__43957__0.call(this);
case 1:
return G__43957__1.call(this,path1);
case 2:
return G__43957__2.call(this,path1,path2);
default:
var G__43979 = null;
if (arguments.length > 2) {
var G__43980__i = 0, G__43980__a = new Array(arguments.length -  2);
while (G__43980__i < G__43980__a.length) {G__43980__a[G__43980__i] = arguments[G__43980__i + 2]; ++G__43980__i;}
G__43979 = new cljs.core.IndexedSeq(G__43980__a,0,null);
}
return G__43957__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__43979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43957.cljs$lang$maxFixedArity = 2;
G__43957.cljs$lang$applyTo = G__43957__3.cljs$lang$applyTo;
G__43957.cljs$core$IFn$_invoke$arity$0 = G__43957__0;
G__43957.cljs$core$IFn$_invoke$arity$1 = G__43957__1;
G__43957.cljs$core$IFn$_invoke$arity$2 = G__43957__2;
G__43957.cljs$core$IFn$_invoke$arity$variadic = G__43957__3.cljs$core$IFn$_invoke$arity$variadic;
return G__43957;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__43985__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__43985 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43986__i = 0, G__43986__a = new Array(arguments.length -  0);
while (G__43986__i < G__43986__a.length) {G__43986__a[G__43986__i] = arguments[G__43986__i + 0]; ++G__43986__i;}
  path = new cljs.core.IndexedSeq(G__43986__a,0,null);
} 
return G__43985__delegate.call(this,path);};
G__43985.cljs$lang$maxFixedArity = 0;
G__43985.cljs$lang$applyTo = (function (arglist__43987){
var path = cljs.core.seq(arglist__43987);
return G__43985__delegate(path);
});
G__43985.cljs$core$IFn$_invoke$arity$variadic = G__43985__delegate;
return G__43985;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__43989__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__43989 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__43990__i = 0, G__43990__a = new Array(arguments.length -  0);
while (G__43990__i < G__43990__a.length) {G__43990__a[G__43990__i] = arguments[G__43990__i + 0]; ++G__43990__i;}
  path = new cljs.core.IndexedSeq(G__43990__a,0,null);
} 
return G__43989__delegate.call(this,path);};
G__43989.cljs$lang$maxFixedArity = 0;
G__43989.cljs$lang$applyTo = (function (arglist__43991){
var path = cljs.core.seq(arglist__43991);
return G__43989__delegate(path);
});
G__43989.cljs$core$IFn$_invoke$arity$variadic = G__43989__delegate;
return G__43989;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__41236__auto__ = com.rpl.specter.pathcache43029;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info43030 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2117),(2117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache43029 = info43030;

return info43030;
})():info__41236__auto__);
var precompiled43031 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__43032 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled43031.cljs$core$IFn$_invoke$arity$1 ? precompiled43031.cljs$core$IFn$_invoke$arity$1(G__43032) : precompiled43031.call(null,G__43032));
} else {
return precompiled43031;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__41236__auto__ = com.rpl.specter.pathcache43033;
var info__41236__auto____$1 = (((info__41236__auto__ == null))?(function (){var info43034 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2117),(2117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,688,690,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache43033 = info43034;

return info43034;
})():info__41236__auto__);
var precompiled43035 = com.rpl.specter.impl.cached_path_info_precompiled(info__41236__auto____$1);
var dynamic_QMARK___41237__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__41236__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___41237__auto__)){
var G__43036 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled43035.cljs$core$IFn$_invoke$arity$1 ? precompiled43035.cljs$core$IFn$_invoke$arity$1(G__43036) : precompiled43035.call(null,G__43036));
} else {
return precompiled43035;
}
})());

return p;
}));
var empty__GT_NONE_44035 = (function (){var G__43037 = cljs.core.empty_QMARK_;
var G__43038 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__43037,G__43038) : com.rpl.specter.if_path.call(null,G__43037,G__43038));
})();
var compact_STAR__44036 = ((function (empty__GT_NONE_44035){
return (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_44035) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_44035));
});})(empty__GT_NONE_44035))
;
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (empty__GT_NONE_44035,compact_STAR__44036){
return (function() { 
var G__44038__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__44036,path);
};
var G__44038 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__44041__i = 0, G__44041__a = new Array(arguments.length -  0);
while (G__44041__i < G__44041__a.length) {G__44041__a[G__44041__i] = arguments[G__44041__i + 0]; ++G__44041__i;}
  path = new cljs.core.IndexedSeq(G__44041__a,0,null);
} 
return G__44038__delegate.call(this,path);};
G__44038.cljs$lang$maxFixedArity = 0;
G__44038.cljs$lang$applyTo = (function (arglist__44042){
var path = cljs.core.seq(arglist__44042);
return G__44038__delegate(path);
});
G__44038.cljs$core$IFn$_invoke$arity$variadic = G__44038__delegate;
return G__44038;
})()
;})(empty__GT_NONE_44035,compact_STAR__44036))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
