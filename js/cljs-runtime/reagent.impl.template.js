goog.provide('reagent.impl.template');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.input');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('goog.object');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return goog.object.get(o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5737__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
var G__49002_49054 = reagent.impl.template.prop_name_cache;
var G__49003_49055 = cljs.core.name(k);
var G__49004_49056 = v;
goog.object.set(G__49002_49054,G__49003_49055,G__49004_49056);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__49009 = o;
var G__49010_49057 = G__49009;
var G__49011_49058 = reagent.impl.template.cached_prop_name(k);
var G__49012_49059 = (reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v));
goog.object.set(G__49010_49057,G__49011_49058,G__49012_49059);

return G__49009;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__49060__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__49060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49061__i = 0, G__49061__a = new Array(arguments.length -  0);
while (G__49061__i < G__49061__a.length) {G__49061__a[G__49061__i] = arguments[G__49061__i + 0]; ++G__49061__i;}
  args = new cljs.core.IndexedSeq(G__49061__a,0,null);
} 
return G__49060__delegate.call(this,args);};
G__49060.cljs$lang$maxFixedArity = 0;
G__49060.cljs$lang$applyTo = (function (arglist__49062){
var args = cljs.core.seq(arglist__49062);
return G__49060__delegate(args);
});
G__49060.cljs$core$IFn$_invoke$arity$variadic = G__49060__delegate;
return G__49060;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5737__auto__ = reagent.impl.template.cache_get(reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
var G__49020_49065 = reagent.impl.template.custom_prop_name_cache;
var G__49021_49066 = cljs.core.name(k);
var G__49022_49067 = v;
goog.object.set(G__49020_49065,G__49021_49066,G__49022_49067);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__49027 = o;
var G__49028_49069 = G__49027;
var G__49029_49070 = reagent.impl.template.cached_custom_prop_name(k);
var G__49030_49071 = reagent.impl.template.convert_prop_value(v);
goog.object.set(G__49028_49069,G__49029_49070,G__49030_49071);

return G__49027;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__49074__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__49074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49075__i = 0, G__49075__a = new Array(arguments.length -  0);
while (G__49075__i < G__49075__a.length) {G__49075__a[G__49075__i] = arguments[G__49075__i + 0]; ++G__49075__i;}
  args = new cljs.core.IndexedSeq(G__49075__a,0,null);
} 
return G__49074__delegate.call(this,args);};
G__49074.cljs$lang$maxFixedArity = 0;
G__49074.cljs$lang$applyTo = (function (arglist__49076){
var args = cljs.core.seq(arglist__49076);
return G__49074__delegate(args);
});
G__49074.cljs$core$IFn$_invoke$arity$variadic = G__49074__delegate;
return G__49074;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__49031 = props;
var G__49031__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49031,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__49031);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49031__$1,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__49031__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class((function (){var G__49032 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49032,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__49032;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return reagent.impl.template.convert_prop_value(props__$1);
}
});
reagent.impl.template.make_element_STAR_ = (function reagent$impl$template$make_element_STAR_(argv,component,jsprops,first_child,compiler){
var G__49036 = (cljs.core.count(argv) - first_child);
switch (G__49036) {
case (0):
return module$node_modules$react$index.createElement(component,jsprops);

break;
case (1):
var G__49037 = component;
var G__49038 = jsprops;
var G__49039 = reagent.impl.protocols.as_element(compiler,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null));
return module$node_modules$react$index.createElement(G__49037,G__49038,G__49039);

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv(((function (G__49036){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.protocols.as_element(compiler,v));
} else {
}

return a;
});})(G__49036))
,[component,jsprops],argv));

}
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
});

reagent.impl.template.HiccupTag.cljs$lang$type = true;

reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag";

reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.template/HiccupTag");
});

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__49040 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49040,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49040,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49040,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v,compiler){
var c = reagent.impl.component.as_class(tag,compiler);
var jsprops = ({});
jsprops.argv = v;

var temp__5739__auto___49082 = reagent.impl.util.react_key_from_vec(v);
if((temp__5739__auto___49082 == null)){
} else {
var key_49083 = temp__5739__auto___49082;
jsprops.key = key_49083;
}

return module$node_modules$react$index.createElement(c,jsprops);
});
reagent.impl.template.functional_reag_element = (function reagent$impl$template$functional_reag_element(tag,v,compiler){
if(cljs.core.truth_((function (){var or__4131__auto__ = reagent.impl.component.react_class_QMARK_(tag);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag));
}
})())){
var c = reagent.impl.component.as_class(tag,compiler);
var jsprops = ({});
jsprops.argv = v;

var temp__5739__auto___49085 = reagent.impl.util.react_key_from_vec(v);
if((temp__5739__auto___49085 == null)){
} else {
var key_49086 = temp__5739__auto___49085;
jsprops.key = key_49086;
}

return module$node_modules$react$index.createElement(c,jsprops);
} else {
var jsprops = ({});
jsprops.reagentRender = tag;

jsprops.argv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));

var temp__5739__auto___49087 = reagent.impl.util.react_key_from_vec(v);
if((temp__5739__auto___49087 == null)){
} else {
var key_49088 = temp__5739__auto___49087;
jsprops.key = key_49088;
}

var G__49043 = reagent.impl.component.functional_render_fn(compiler,tag);
var G__49044 = jsprops;
return module$node_modules$react$index.createElement(G__49043,G__49044);
}
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4131__auto__ = reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5739__auto___49090 = reagent.impl.util.react_key_from_vec(argv);
if((temp__5739__auto___49090 == null)){
} else {
var key_49091 = temp__5739__auto___49090;
jsprops.key = key_49091;
}

return reagent.impl.protocols.make_element(compiler,argv,module$node_modules$react$index.Fragment,jsprops,first_child);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__5737__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__5737__auto__ == null)){
var v = reagent.impl.template.parse_tag(x);
goog.object.set(reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5737__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4131__auto__ = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.input.input_component_QMARK_(component)){
var input_class = (function (){var or__4131__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var x = reagent.impl.component.create_class(reagent.impl.input.input_spec,compiler);
compiler.reagentInput = x;

return x;
}
})();
return reagent.impl.protocols.as_element(compiler,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.meta(argv)));
} else {
var temp__5739__auto___49096 = reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5739__auto___49096 == null)){
} else {
var key_49097 = temp__5739__auto___49096;
jsprops.key = key_49097;
}

return reagent.impl.protocols.make_element(compiler,argv,component,jsprops,first_child);
}
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49045_SHARP_){
return reagent.impl.protocols.as_element(compiler,p1__49045_SHARP_);
}),s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((reagent.impl.util.react_key_from_vec(val) == null)))){
o.no_key = true;
} else {
}

return reagent.impl.protocols.as_element(compiler,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__49046 = reagent.ratom.check_derefs(((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev(x,ctx,compiler);
});})(ctx))
);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49046,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49046,(1),null);
if(cljs.core.truth_(derefed)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.hiccup_element = (function reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__49049 = pos;
switch (G__49049) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.template.cached_parse(n),v,(1),compiler);

break;
case (0):
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

return reagent.impl.template.native_element(reagent.impl.template.__GT_HiccupTag(component,null,null,null),v,(2),compiler);

break;
default:
var G__49105 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
var G__49106 = compiler;
v = G__49105;
compiler = G__49106;
continue;

}
break;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v,compiler,functional_components_QMARK_){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
}

if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return reagent.impl.template.fragment_element(v,compiler);
} else {
if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
return reagent.impl.template.hiccup_element(v,compiler);
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1),compiler);
} else {
if(cljs.core.truth_(functional_components_QMARK_)){
return reagent.impl.template.functional_reag_element(tag,v,compiler);
} else {
return reagent.impl.template.reag_element(tag,v,compiler);
}

}
}
}
});
reagent.impl.template.as_element_STAR_ = (function reagent$impl$template$as_element_STAR_(x,compiler,functional_components_QMARK_){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x,compiler,functional_components_QMARK_);
} else {
if(cljs.core.seq_QMARK_(x)){
return reagent.impl.template.expand_seq_check(x,compiler);

} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
reagent.impl.template.create_compiler = (function reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.t_reagent$impl$template49051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reagent.impl.protocols.Compiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagent.impl.template.t_reagent$impl$template49051 = (function (opts,id,meta49052){
this.opts = opts;
this.id = id;
this.meta49052 = meta49052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.impl.template.t_reagent$impl$template49051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id){
return (function (_49053,meta49052__$1){
var self__ = this;
var _49053__$1 = this;
return (new reagent.impl.template.t_reagent$impl$template49051(self__.opts,self__.id,meta49052__$1));
});})(id))
;

reagent.impl.template.t_reagent$impl$template49051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id){
return (function (_49053){
var self__ = this;
var _49053__$1 = this;
return self__.meta49052;
});})(id))
;

reagent.impl.template.t_reagent$impl$template49051.prototype.reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL;

reagent.impl.template.t_reagent$impl$template49051.prototype.reagent$impl$protocols$Compiler$get_id$arity$1 = ((function (id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});})(id))
;

reagent.impl.template.t_reagent$impl$template49051.prototype.reagent$impl$protocols$Compiler$as_element$arity$2 = ((function (id){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.as_element_STAR_(x,this$__$1,new cljs.core.Keyword(null,"functional-components?","functional-components?",-1282932893).cljs$core$IFn$_invoke$arity$1(self__.opts) === true);
});})(id))
;

reagent.impl.template.t_reagent$impl$template49051.prototype.reagent$impl$protocols$Compiler$make_element$arity$5 = ((function (id){
return (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.make_element_STAR_(argv,component,jsprops,first_child,this$__$1);
});})(id))
;

reagent.impl.template.t_reagent$impl$template49051.getBasis = ((function (id){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta49052","meta49052",-177217578,null)], null);
});})(id))
;

reagent.impl.template.t_reagent$impl$template49051.cljs$lang$type = true;

reagent.impl.template.t_reagent$impl$template49051.cljs$lang$ctorStr = "reagent.impl.template/t_reagent$impl$template49051";

reagent.impl.template.t_reagent$impl$template49051.cljs$lang$ctorPrWriter = ((function (id){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.template/t_reagent$impl$template49051");
});})(id))
;

/**
 * Positional factory function for reagent.impl.template/t_reagent$impl$template49051.
 */
reagent.impl.template.__GT_t_reagent$impl$template49051 = ((function (id){
return (function reagent$impl$template$create_compiler_$___GT_t_reagent$impl$template49051(opts__$1,id__$1,meta49052){
return (new reagent.impl.template.t_reagent$impl$template49051(opts__$1,id__$1,meta49052));
});})(id))
;

}

return (new reagent.impl.template.t_reagent$impl$template49051(opts,id,cljs.core.PersistentArrayMap.EMPTY));
});
reagent.impl.template.default_compiler_STAR_ = reagent.impl.template.create_compiler(cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.template.default_compiler = reagent.impl.template.default_compiler_STAR_;
reagent.impl.template.set_default_compiler_BANG_ = (function reagent$impl$template$set_default_compiler_BANG_(compiler){
return reagent.impl.template.default_compiler = compiler;
});

//# sourceMappingURL=reagent.impl.template.js.map
