goog.provide('cats.builtin');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cats.monad.maybe');
goog.require('cats.protocols');
goog.require('cats.context');
goog.require('cats.core');
goog.require('cats.util');
goog.object.set(cats.protocols.Contextual,"null",true);

var G__63883_64246 = cats.protocols._get_context;
var G__63884_64247 = "null";
var G__63885_64248 = ((function (G__63883_64246,G__63884_64247){
return (function (_){
return cats.monad.maybe.context;
});})(G__63883_64246,G__63884_64247))
;
goog.object.set(G__63883_64246,G__63884_64247,G__63885_64248);

goog.object.set(cats.protocols.Extract,"null",true);

var G__63887_64249 = cats.protocols._extract;
var G__63888_64250 = "null";
var G__63889_64251 = ((function (G__63887_64249,G__63888_64250){
return (function (_){
return null;
});})(G__63887_64249,G__63888_64250))
;
goog.object.set(G__63887_64249,G__63888_64250,G__63889_64251);
cats.builtin.sequence_context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin63898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin63898 = (function (meta63899){
this.meta63899 = meta63899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(sv_SINGLEQUOTE_,cljs.core.reverse(sv));
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
var self__ = this;
var ctx__$1 = this;
var as = ctx__$1.cats$protocols$Functor$_fmap$arity$3(null,f,tv);
return ctx__$1.cats$protocols$Foldable$_foldr$arity$4(null,((function (as,ctx__$1){
return (function (a,acc){
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic(cats.core.fmap.cljs$core$IFn$_invoke$arity$2(((function (as,ctx__$1){
return (function (x){
return ((function (as,ctx__$1){
return (function (xs){
return cljs.core.cons(x,xs);
});
;})(as,ctx__$1))
});})(as,ctx__$1))
,a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc], 0));
});})(as,ctx__$1))
,cats.core.pure.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY),as);
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var x = cljs.core.first(xs);
if((x == null)){
return z;
} else {
var xs__$1 = cljs.core.rest(xs);
var G__63920 = x;
var G__63921 = ctx__$1.cats$protocols$Foldable$_foldr$arity$4(null,f,z,xs__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__63920,G__63921) : f.call(null,G__63920,G__63921));
}
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,xs);
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,v,null,(1),null));
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__63896_SHARP_,p2__63897_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__63896_SHARP_,p2__63897_SHARP_);
});})(___$1))
,cljs.core.List.EMPTY,(function (){var G__63929 = self;
var vec__63930 = G__63929;
var seq__63931 = cljs.core.seq(vec__63930);
var first__63932 = cljs.core.first(seq__63931);
var seq__63931__$1 = cljs.core.next(seq__63931);
var h = first__63932;
var t = seq__63931__$1;
var c = vec__63930;
var result = cljs.core.List.EMPTY;
var G__63929__$1 = G__63929;
var result__$1 = result;
while(true){
var vec__63941 = G__63929__$1;
var seq__63942 = cljs.core.seq(vec__63941);
var first__63943 = cljs.core.first(seq__63942);
var seq__63942__$1 = cljs.core.next(seq__63942);
var h__$1 = first__63943;
var t__$1 = seq__63942__$1;
var c__$1 = vec__63941;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_(c__$1)){
return result__$2;
} else {
var G__64264 = t__$1;
var G__64265 = cljs.core.cons((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(h__$1) : f.call(null,h__$1)),result__$2);
G__63929__$1 = G__64264;
result__$1 = G__64265;
continue;
}
break;
}
})());
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
var G__63947 = v;
var vec__63949 = G__63947;
var seq__63950 = cljs.core.seq(vec__63949);
var first__63951 = cljs.core.first(seq__63950);
var seq__63950__$1 = cljs.core.next(seq__63950);
var h = first__63951;
var t = seq__63950__$1;
var c = vec__63949;
var result = cljs.core.List.EMPTY;
var G__63947__$1 = G__63947;
var result__$1 = result;
while(true){
var vec__63956 = G__63947__$1;
var seq__63957 = cljs.core.seq(vec__63956);
var first__63958 = cljs.core.first(seq__63957);
var seq__63957__$1 = cljs.core.next(seq__63957);
var h__$1 = first__63958;
var t__$1 = seq__63957__$1;
var c__$1 = vec__63956;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_(c__$1)){
return cljs.core.reverse(result__$2);
} else {
var G__64268 = t__$1;
var G__64269 = cljs.core.cons((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(h__$1) : f.call(null,h__$1)),result__$2);
G__63947__$1 = G__64268;
result__$1 = G__64269;
continue;
}
break;
}
});

cats.builtin.t_cats$builtin63898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63900){
var self__ = this;
var _63900__$1 = this;
return self__.meta63899;
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,v,null,(1),null));
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__63891_SHARP_,p2__63892_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__63891_SHARP_,p2__63892_SHARP_);
});})(___$1))
,cljs.core.List.EMPTY,(function (){var G__63966 = self;
var vec__63967 = G__63966;
var seq__63968 = cljs.core.seq(vec__63967);
var first__63969 = cljs.core.first(seq__63968);
var seq__63968__$1 = cljs.core.next(seq__63968);
var h = first__63969;
var t = seq__63968__$1;
var c = vec__63967;
var result = cljs.core.List.EMPTY;
var G__63966__$1 = G__63966;
var result__$1 = result;
while(true){
var vec__63986 = G__63966__$1;
var seq__63987 = cljs.core.seq(vec__63986);
var first__63988 = cljs.core.first(seq__63987);
var seq__63987__$1 = cljs.core.next(seq__63987);
var h__$1 = first__63988;
var t__$1 = seq__63987__$1;
var c__$1 = vec__63986;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_(c__$1)){
return result__$2;
} else {
var G__64270 = t__$1;
var G__64271 = cljs.core.cons((function (){var G__63992 = av;
var vec__63994 = G__63992;
var seq__63995 = cljs.core.seq(vec__63994);
var first__63996 = cljs.core.first(seq__63995);
var seq__63995__$1 = cljs.core.next(seq__63995);
var h_SINGLEQUOTE_ = first__63996;
var t_SINGLEQUOTE_ = seq__63995__$1;
var c_SINGLEQUOTE_ = vec__63994;
var result_SINGLEQUOTE_ = cljs.core.List.EMPTY;
var G__63992__$1 = G__63992;
var result_SINGLEQUOTE___$1 = result_SINGLEQUOTE_;
while(true){
var vec__64000 = G__63992__$1;
var seq__64001 = cljs.core.seq(vec__64000);
var first__64002 = cljs.core.first(seq__64001);
var seq__64001__$1 = cljs.core.next(seq__64001);
var h_SINGLEQUOTE___$1 = first__64002;
var t_SINGLEQUOTE___$1 = seq__64001__$1;
var c_SINGLEQUOTE___$1 = vec__64000;
var result_SINGLEQUOTE___$2 = result_SINGLEQUOTE___$1;
if(cljs.core.empty_QMARK_(c_SINGLEQUOTE___$1)){
return result_SINGLEQUOTE___$2;
} else {
var G__64272 = t_SINGLEQUOTE___$1;
var G__64273 = cljs.core.cons((h__$1.cljs$core$IFn$_invoke$arity$1 ? h__$1.cljs$core$IFn$_invoke$arity$1(h_SINGLEQUOTE___$1) : h__$1.call(null,h_SINGLEQUOTE___$1)),result_SINGLEQUOTE___$2);
G__63992__$1 = G__64272;
result_SINGLEQUOTE___$1 = G__64273;
continue;
}
break;
}
})(),result__$2);
G__63966__$1 = G__64270;
result__$1 = G__64271;
continue;
}
break;
}
})());
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<List>";
});

cats.builtin.t_cats$builtin63898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63900,meta63899__$1){
var self__ = this;
var _63900__$1 = this;
return (new cats.builtin.t_cats$builtin63898(meta63899__$1));
});

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin63898.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(mv_SINGLEQUOTE_,cljs.core.reverse(mv));
});

cats.builtin.t_cats$builtin63898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63899","meta63899",-398875975,null)], null);
});

cats.builtin.t_cats$builtin63898.cljs$lang$type = true;

cats.builtin.t_cats$builtin63898.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin63898";

cats.builtin.t_cats$builtin63898.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin63898");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin63898.
 */
cats.builtin.__GT_t_cats$builtin63898 = (function cats$builtin$__GT_t_cats$builtin63898(meta63899){
return (new cats.builtin.t_cats$builtin63898(meta63899));
});

}

return (new cats.builtin.t_cats$builtin63898(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.sequence_context));
cljs.core.List.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.sequence_context;
});
cljs.core.EmptyList.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.sequence_context;
});
cats.builtin.lazy_sequence_context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64010 = (function (meta64011){
this.meta64011 = meta64011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
var self__ = this;
var ctx__$1 = this;
var as = ctx__$1.cats$protocols$Functor$_fmap$arity$3(null,f,tv);
return ctx__$1.cats$protocols$Foldable$_foldr$arity$4(null,((function (as,ctx__$1){
return (function (a,acc){
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic(cats.core.fmap.cljs$core$IFn$_invoke$arity$2(((function (as,ctx__$1){
return (function (x){
return ((function (as,ctx__$1){
return (function (xs){
return cljs.core.cons(x,xs);
});
;})(as,ctx__$1))
});})(as,ctx__$1))
,a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc], 0));
});})(as,ctx__$1))
,cats.core.pure.cljs$core$IFn$_invoke$arity$1((new cljs.core.LazySeq(null,((function (as,ctx__$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(as,ctx__$1))
,null,null))),as);
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var x = cljs.core.first(xs);
if((x == null)){
return z;
} else {
var xs__$1 = cljs.core.rest(xs);
var G__64015 = x;
var G__64016 = ctx__$1.cats$protocols$Foldable$_foldr$arity$4(null,f,z,xs__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__64015,G__64016) : f.call(null,G__64015,G__64016));
}
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,xs);
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,self));
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,v);
});

cats.builtin.t_cats$builtin64010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64012){
var self__ = this;
var _64012__$1 = this;
return self__.meta64011;
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
var iter__4523__auto__ = ((function (___$1){
return (function cats$builtin$iter__64028(s__64029){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__64029__$1 = s__64029;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64029__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var f = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__64029__$1,f,xs__6292__auto__,temp__5735__auto__,___$1){
return (function cats$builtin$iter__64028_$_iter__64030(s__64031){
return (new cljs.core.LazySeq(null,((function (s__64029__$1,f,xs__6292__auto__,temp__5735__auto__,___$1){
return (function (){
var s__64031__$1 = s__64031;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64031__$1);
if(temp__5735__auto____$1){
var s__64031__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64031__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64031__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64033 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64032 = (0);
while(true){
if((i__64032 < size__4522__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__64032);
cljs.core.chunk_append(b__64033,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));

var G__64305 = (i__64032 + (1));
i__64032 = G__64305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64033),cats$builtin$iter__64028_$_iter__64030(cljs.core.chunk_rest(s__64031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64033),null);
}
} else {
var v = cljs.core.first(s__64031__$2);
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cats$builtin$iter__64028_$_iter__64030(cljs.core.rest(s__64031__$2)));
}
} else {
return null;
}
break;
}
});})(s__64029__$1,f,xs__6292__auto__,temp__5735__auto__,___$1))
,null,null));
});})(s__64029__$1,f,xs__6292__auto__,temp__5735__auto__,___$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(av));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,cats$builtin$iter__64028(cljs.core.rest(s__64029__$1)));
} else {
var G__64306 = cljs.core.rest(s__64029__$1);
s__64029__$1 = G__64306;
continue;
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__4523__auto__(self);
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<LazySequence>";
});

cats.builtin.t_cats$builtin64010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64012,meta64011__$1){
var self__ = this;
var _64012__$1 = this;
return (new cats.builtin.t_cats$builtin64010(meta64011__$1));
});

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64010.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin64010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64011","meta64011",-259801352,null)], null);
});

cats.builtin.t_cats$builtin64010.cljs$lang$type = true;

cats.builtin.t_cats$builtin64010.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64010";

cats.builtin.t_cats$builtin64010.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64010");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64010.
 */
cats.builtin.__GT_t_cats$builtin64010 = (function cats$builtin$__GT_t_cats$builtin64010(meta64011){
return (new cats.builtin.t_cats$builtin64010(meta64011));
});

}

return (new cats.builtin.t_cats$builtin64010(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.lazy_sequence_context));
cljs.core.LazySeq.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.lazy_sequence_context;
});
cats.builtin.range_context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64050 = (function (meta64051){
this.meta64051 = meta64051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64052,meta64051__$1){
var self__ = this;
var _64052__$1 = this;
return (new cats.builtin.t_cats$builtin64050(meta64051__$1));
});

cats.builtin.t_cats$builtin64050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64052){
var self__ = this;
var _64052__$1 = this;
return self__.meta64051;
});

cats.builtin.t_cats$builtin64050.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64050.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64050.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var x = cljs.core.first(xs);
if((x == null)){
return z;
} else {
var xs__$1 = cljs.core.rest(xs);
var G__64056 = x;
var G__64057 = ctx__$1.cats$protocols$Foldable$_foldr$arity$4(null,f,z,xs__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__64056,G__64057) : f.call(null,G__64056,G__64057));
}
});

cats.builtin.t_cats$builtin64050.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,xs);
});

cats.builtin.t_cats$builtin64050.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64050.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Range>";
});

cats.builtin.t_cats$builtin64050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64051","meta64051",102638203,null)], null);
});

cats.builtin.t_cats$builtin64050.cljs$lang$type = true;

cats.builtin.t_cats$builtin64050.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64050";

cats.builtin.t_cats$builtin64050.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64050");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64050.
 */
cats.builtin.__GT_t_cats$builtin64050 = (function cats$builtin$__GT_t_cats$builtin64050(meta64051){
return (new cats.builtin.t_cats$builtin64050(meta64051));
});

}

return (new cats.builtin.t_cats$builtin64050(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.range_context));
cljs.core.Range.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.range_context;
});
cats.builtin.vector_context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64063 = (function (meta64064){
this.meta64064 = meta64064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
var self__ = this;
var ctx__$1 = this;
var as = ctx__$1.cats$protocols$Functor$_fmap$arity$3(null,f,tv);
return ctx__$1.cats$protocols$Foldable$_foldl$arity$4(null,((function (as,ctx__$1){
return (function (acc,a){
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic(cats.core.fmap.cljs$core$IFn$_invoke$arity$2(((function (as,ctx__$1){
return (function (x){
return ((function (as,ctx__$1){
return (function (xs){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,x);
});
;})(as,ctx__$1))
});})(as,ctx__$1))
,a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc], 0));
});})(as,ctx__$1))
,cats.core.pure.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),as);
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var rf = ((function (ctx__$1){
return (function cats$builtin$rf(acc,v){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,acc) : f.call(null,v,acc));
});})(ctx__$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,z,cljs.core.reverse(xs));
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,xs);
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self], 0)));
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,v));
});

cats.builtin.t_cats$builtin64063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64065){
var self__ = this;
var _64065__$1 = this;
return self__.meta64064;
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (___$1){
return (function cats$builtin$iter__64080(s__64081){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__64081__$1 = s__64081;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64081__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var f = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__64081__$1,f,xs__6292__auto__,temp__5735__auto__,___$1){
return (function cats$builtin$iter__64080_$_iter__64082(s__64083){
return (new cljs.core.LazySeq(null,((function (s__64081__$1,f,xs__6292__auto__,temp__5735__auto__,___$1){
return (function (){
var s__64083__$1 = s__64083;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64083__$1);
if(temp__5735__auto____$1){
var s__64083__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64083__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64083__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64085 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64084 = (0);
while(true){
if((i__64084 < size__4522__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__64084);
cljs.core.chunk_append(b__64085,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));

var G__64340 = (i__64084 + (1));
i__64084 = G__64340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64085),cats$builtin$iter__64080_$_iter__64082(cljs.core.chunk_rest(s__64083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64085),null);
}
} else {
var v = cljs.core.first(s__64083__$2);
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cats$builtin$iter__64080_$_iter__64082(cljs.core.rest(s__64083__$2)));
}
} else {
return null;
}
break;
}
});})(s__64081__$1,f,xs__6292__auto__,temp__5735__auto__,___$1))
,null,null));
});})(s__64081__$1,f,xs__6292__auto__,temp__5735__auto__,___$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(av));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,cats$builtin$iter__64080(cljs.core.rest(s__64081__$1)));
} else {
var G__64342 = cljs.core.rest(s__64081__$1);
s__64081__$1 = G__64342;
continue;
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__4523__auto__(self);
})());
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Vector>";
});

cats.builtin.t_cats$builtin64063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64065,meta64064__$1){
var self__ = this;
var _64065__$1 = this;
return (new cats.builtin.t_cats$builtin64063(meta64064__$1));
});

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64063.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin64063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64064","meta64064",1839231577,null)], null);
});

cats.builtin.t_cats$builtin64063.cljs$lang$type = true;

cats.builtin.t_cats$builtin64063.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64063";

cats.builtin.t_cats$builtin64063.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64063");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64063.
 */
cats.builtin.__GT_t_cats$builtin64063 = (function cats$builtin$__GT_t_cats$builtin64063(meta64064){
return (new cats.builtin.t_cats$builtin64063(meta64064));
});

}

return (new cats.builtin.t_cats$builtin64063(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.vector_context));
cljs.core.PersistentVector.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.vector_context;
});
cats.builtin.map_context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64104 = (function (meta64105){
this.meta64105 = meta64105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64106,meta64105__$1){
var self__ = this;
var _64106__$1 = this;
return (new cats.builtin.t_cats$builtin64104(meta64105__$1));
});

cats.builtin.t_cats$builtin64104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64106){
var self__ = this;
var _64106__$1 = this;
return self__.meta64105;
});

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sv,sv_SINGLEQUOTE_], 0));
});

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p__64116){
var vec__64117 = p__64116;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64117,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64117,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value))], null);
});})(___$1))
,v));
});

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var rf = ((function (ctx__$1){
return (function cats$builtin$rf(acc,v){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,acc) : f.call(null,v,acc));
});})(ctx__$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,z,xs);
});

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,xs);
});

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64104.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Map>";
});

cats.builtin.t_cats$builtin64104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64105","meta64105",-1562168895,null)], null);
});

cats.builtin.t_cats$builtin64104.cljs$lang$type = true;

cats.builtin.t_cats$builtin64104.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64104";

cats.builtin.t_cats$builtin64104.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64104");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64104.
 */
cats.builtin.__GT_t_cats$builtin64104 = (function cats$builtin$__GT_t_cats$builtin64104(meta64105){
return (new cats.builtin.t_cats$builtin64104(meta64105));
});

}

return (new cats.builtin.t_cats$builtin64104(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.map_context));
cljs.core.PersistentArrayMap.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.map_context;
});
cljs.core.PersistentHashMap.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.map_context;
});
cljs.core.PersistentTreeMap.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.map_context;
});
cats.builtin.set_context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64141 = (function (meta64142){
this.meta64142 = meta64142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(sv,cljs.core.set(sv_SINGLEQUOTE_));
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,self));
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,self){
var self__ = this;
var ___$1 = this;
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,self));
});

cats.builtin.t_cats$builtin64141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64143){
var self__ = this;
var _64143__$1 = this;
return self__.meta64142;
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.set((function (){var iter__4523__auto__ = ((function (___$1){
return (function cats$builtin$iter__64151(s__64152){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__64152__$1 = s__64152;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64152__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var f = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__64152__$1,f,xs__6292__auto__,temp__5735__auto__,___$1){
return (function cats$builtin$iter__64151_$_iter__64153(s__64154){
return (new cljs.core.LazySeq(null,((function (s__64152__$1,f,xs__6292__auto__,temp__5735__auto__,___$1){
return (function (){
var s__64154__$1 = s__64154;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64154__$1);
if(temp__5735__auto____$1){
var s__64154__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64154__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64154__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64156 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64155 = (0);
while(true){
if((i__64155 < size__4522__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__64155);
cljs.core.chunk_append(b__64156,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));

var G__64373 = (i__64155 + (1));
i__64155 = G__64373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64156),cats$builtin$iter__64151_$_iter__64153(cljs.core.chunk_rest(s__64154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64156),null);
}
} else {
var v = cljs.core.first(s__64154__$2);
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cats$builtin$iter__64151_$_iter__64153(cljs.core.rest(s__64154__$2)));
}
} else {
return null;
}
break;
}
});})(s__64152__$1,f,xs__6292__auto__,temp__5735__auto__,___$1))
,null,null));
});})(s__64152__$1,f,xs__6292__auto__,temp__5735__auto__,___$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(av));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,cats$builtin$iter__64151(cljs.core.rest(s__64152__$1)));
} else {
var G__64377 = cljs.core.rest(s__64152__$1);
s__64152__$1 = G__64377;
continue;
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__4523__auto__(self);
})());
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Set>";
});

cats.builtin.t_cats$builtin64141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64143,meta64142__$1){
var self__ = this;
var _64143__$1 = this;
return (new cats.builtin.t_cats$builtin64141(meta64142__$1));
});

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64141.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin64141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64142","meta64142",-1618894090,null)], null);
});

cats.builtin.t_cats$builtin64141.cljs$lang$type = true;

cats.builtin.t_cats$builtin64141.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64141";

cats.builtin.t_cats$builtin64141.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64141");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64141.
 */
cats.builtin.__GT_t_cats$builtin64141 = (function cats$builtin$__GT_t_cats$builtin64141(meta64142){
return (new cats.builtin.t_cats$builtin64141(meta64142));
});

}

return (new cats.builtin.t_cats$builtin64141(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.set_context));
cljs.core.PersistentHashSet.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.set_context;
});
cats.builtin.function_context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64184 = (function (meta64185){
this.meta64185 = meta64185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (ctx,f,g){
var self__ = this;
var ctx__$1 = this;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,g);
});

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.identity;
});

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.constantly(v);
});

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (r){
var fexpr__64190 = (function (){var G__64192 = (self.cljs$core$IFn$_invoke$arity$1 ? self.cljs$core$IFn$_invoke$arity$1(r) : self.call(null,r));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64192) : f.call(null,G__64192));
})();
return (fexpr__64190.cljs$core$IFn$_invoke$arity$1 ? fexpr__64190.cljs$core$IFn$_invoke$arity$1(r) : fexpr__64190.call(null,r));
});
;})(___$1))
});

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,self){
var self__ = this;
var ___$1 = this;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,self);
});

cats.builtin.t_cats$builtin64184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64186){
var self__ = this;
var _64186__$1 = this;
return self__.meta64185;
});

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.constantly(v);
});

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (x){
var G__64198 = (av.cljs$core$IFn$_invoke$arity$1 ? av.cljs$core$IFn$_invoke$arity$1(x) : av.call(null,x));
var fexpr__64197 = (self.cljs$core$IFn$_invoke$arity$1 ? self.cljs$core$IFn$_invoke$arity$1(x) : self.call(null,x));
return (fexpr__64197.cljs$core$IFn$_invoke$arity$1 ? fexpr__64197.cljs$core$IFn$_invoke$arity$1(G__64198) : fexpr__64197.call(null,G__64198));
});
;})(___$1))
});

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64184.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Function>";
});

cats.builtin.t_cats$builtin64184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64186,meta64185__$1){
var self__ = this;
var _64186__$1 = this;
return (new cats.builtin.t_cats$builtin64184(meta64185__$1));
});

cats.builtin.t_cats$builtin64184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64185","meta64185",1979679321,null)], null);
});

cats.builtin.t_cats$builtin64184.cljs$lang$type = true;

cats.builtin.t_cats$builtin64184.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64184";

cats.builtin.t_cats$builtin64184.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64184");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64184.
 */
cats.builtin.__GT_t_cats$builtin64184 = (function cats$builtin$__GT_t_cats$builtin64184(meta64185){
return (new cats.builtin.t_cats$builtin64184(meta64185));
});

}

return (new cats.builtin.t_cats$builtin64184(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.function_context));
cljs.core.IFn.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IFn.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.function_context;
});
goog.object.set(cats.protocols.Contextual,"function",true);

var G__64207_64385 = cats.protocols._get_context;
var G__64208_64386 = "function";
var G__64209_64387 = ((function (G__64207_64385,G__64208_64386){
return (function (_){
return cats.builtin.function_context;
});})(G__64207_64385,G__64208_64386))
;
goog.object.set(G__64207_64385,G__64208_64386,G__64209_64387);
cats.builtin.any_monoid = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64210 = (function (meta64211){
this.meta64211 = meta64211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64212,meta64211__$1){
var self__ = this;
var _64212__$1 = this;
return (new cats.builtin.t_cats$builtin64210(meta64211__$1));
});

cats.builtin.t_cats$builtin64210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64212){
var self__ = this;
var _64212__$1 = this;
return self__.meta64211;
});

cats.builtin.t_cats$builtin64210.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64210.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64210.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = sv;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return sv_SINGLEQUOTE_;
}
});

cats.builtin.t_cats$builtin64210.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64210.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

cats.builtin.t_cats$builtin64210.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64210.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Any>";
});

cats.builtin.t_cats$builtin64210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64211","meta64211",1263763899,null)], null);
});

cats.builtin.t_cats$builtin64210.cljs$lang$type = true;

cats.builtin.t_cats$builtin64210.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64210";

cats.builtin.t_cats$builtin64210.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64210");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64210.
 */
cats.builtin.__GT_t_cats$builtin64210 = (function cats$builtin$__GT_t_cats$builtin64210(meta64211){
return (new cats.builtin.t_cats$builtin64210(meta64211));
});

}

return (new cats.builtin.t_cats$builtin64210(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.any_monoid));
cats.builtin.all_monoid = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64222 = (function (meta64223){
this.meta64223 = meta64223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64224,meta64223__$1){
var self__ = this;
var _64224__$1 = this;
return (new cats.builtin.t_cats$builtin64222(meta64223__$1));
});

cats.builtin.t_cats$builtin64222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64224){
var self__ = this;
var _64224__$1 = this;
return self__.meta64223;
});

cats.builtin.t_cats$builtin64222.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64222.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64222.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
var and__4120__auto__ = sv;
if(cljs.core.truth_(and__4120__auto__)){
return sv_SINGLEQUOTE_;
} else {
return and__4120__auto__;
}
});

cats.builtin.t_cats$builtin64222.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64222.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cats.builtin.t_cats$builtin64222.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64222.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<All>";
});

cats.builtin.t_cats$builtin64222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64223","meta64223",-429012479,null)], null);
});

cats.builtin.t_cats$builtin64222.cljs$lang$type = true;

cats.builtin.t_cats$builtin64222.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64222";

cats.builtin.t_cats$builtin64222.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64222");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64222.
 */
cats.builtin.__GT_t_cats$builtin64222 = (function cats$builtin$__GT_t_cats$builtin64222(meta64223){
return (new cats.builtin.t_cats$builtin64222(meta64223));
});

}

return (new cats.builtin.t_cats$builtin64222(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.all_monoid));
cats.builtin.sum_monoid = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64227 = (function (meta64228){
this.meta64228 = meta64228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64229,meta64228__$1){
var self__ = this;
var _64229__$1 = this;
return (new cats.builtin.t_cats$builtin64227(meta64228__$1));
});

cats.builtin.t_cats$builtin64227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64229){
var self__ = this;
var _64229__$1 = this;
return self__.meta64228;
});

cats.builtin.t_cats$builtin64227.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64227.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64227.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return (sv + sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin64227.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64227.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (0);
});

cats.builtin.t_cats$builtin64227.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64227.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Sum>";
});

cats.builtin.t_cats$builtin64227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64228","meta64228",1863920689,null)], null);
});

cats.builtin.t_cats$builtin64227.cljs$lang$type = true;

cats.builtin.t_cats$builtin64227.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64227";

cats.builtin.t_cats$builtin64227.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64227");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64227.
 */
cats.builtin.__GT_t_cats$builtin64227 = (function cats$builtin$__GT_t_cats$builtin64227(meta64228){
return (new cats.builtin.t_cats$builtin64227(meta64228));
});

}

return (new cats.builtin.t_cats$builtin64227(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.sum_monoid));
cats.builtin.prod_monoid = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64231 = (function (meta64232){
this.meta64232 = meta64232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64233,meta64232__$1){
var self__ = this;
var _64233__$1 = this;
return (new cats.builtin.t_cats$builtin64231(meta64232__$1));
});

cats.builtin.t_cats$builtin64231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64233){
var self__ = this;
var _64233__$1 = this;
return self__.meta64232;
});

cats.builtin.t_cats$builtin64231.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64231.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64231.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return (sv * sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin64231.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64231.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
});

cats.builtin.t_cats$builtin64231.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64231.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Product>";
});

cats.builtin.t_cats$builtin64231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64232","meta64232",-60618202,null)], null);
});

cats.builtin.t_cats$builtin64231.cljs$lang$type = true;

cats.builtin.t_cats$builtin64231.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64231";

cats.builtin.t_cats$builtin64231.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64231");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64231.
 */
cats.builtin.__GT_t_cats$builtin64231 = (function cats$builtin$__GT_t_cats$builtin64231(meta64232){
return (new cats.builtin.t_cats$builtin64231(meta64232));
});

}

return (new cats.builtin.t_cats$builtin64231(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.prod_monoid));
cats.builtin.string_monoid = (function (){
if((typeof cats !== 'undefined') && (typeof cats.builtin !== 'undefined') && (typeof cats.builtin.t_cats$builtin64239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin64239 = (function (meta64240){
this.meta64240 = meta64240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin64239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64241,meta64240__$1){
var self__ = this;
var _64241__$1 = this;
return (new cats.builtin.t_cats$builtin64239(meta64240__$1));
});

cats.builtin.t_cats$builtin64239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64241){
var self__ = this;
var _64241__$1 = this;
return self__.meta64240;
});

cats.builtin.t_cats$builtin64239.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64239.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64239.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv_SINGLEQUOTE_)].join('');
});

cats.builtin.t_cats$builtin64239.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64239.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "";
});

cats.builtin.t_cats$builtin64239.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin64239.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<String>";
});

cats.builtin.t_cats$builtin64239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64240","meta64240",132962436,null)], null);
});

cats.builtin.t_cats$builtin64239.cljs$lang$type = true;

cats.builtin.t_cats$builtin64239.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin64239";

cats.builtin.t_cats$builtin64239.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.builtin/t_cats$builtin64239");
});

/**
 * Positional factory function for cats.builtin/t_cats$builtin64239.
 */
cats.builtin.__GT_t_cats$builtin64239 = (function cats$builtin$__GT_t_cats$builtin64239(meta64240){
return (new cats.builtin.t_cats$builtin64239(meta64240));
});

}

return (new cats.builtin.t_cats$builtin64239(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable(cljs.core.type(cats.builtin.string_monoid));
goog.object.set(cats.protocols.Contextual,"string",true);

var G__64243_64393 = cats.protocols._get_context;
var G__64244_64394 = "string";
var G__64245_64395 = ((function (G__64243_64393,G__64244_64394){
return (function (_){
return cats.builtin.string_monoid;
});})(G__64243_64393,G__64244_64394))
;
goog.object.set(G__64243_64393,G__64244_64394,G__64245_64395);

//# sourceMappingURL=cats.builtin.js.map
