goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44323 = arguments.length;
switch (G__44323) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44327 = (function (f,blockable,meta44329){
this.f = f;
this.blockable = blockable;
this.meta44329 = meta44329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44330,meta44329__$1){
var self__ = this;
var _44330__$1 = this;
return (new cljs.core.async.t_cljs$core$async44327(self__.f,self__.blockable,meta44329__$1));
});

cljs.core.async.t_cljs$core$async44327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44330){
var self__ = this;
var _44330__$1 = this;
return self__.meta44329;
});

cljs.core.async.t_cljs$core$async44327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44329","meta44329",753500584,null)], null);
});

cljs.core.async.t_cljs$core$async44327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44327";

cljs.core.async.t_cljs$core$async44327.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44327");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44327.
 */
cljs.core.async.__GT_t_cljs$core$async44327 = (function cljs$core$async$__GT_t_cljs$core$async44327(f__$1,blockable__$1,meta44329){
return (new cljs.core.async.t_cljs$core$async44327(f__$1,blockable__$1,meta44329));
});

}

return (new cljs.core.async.t_cljs$core$async44327(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44397 = arguments.length;
switch (G__44397) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44414 = arguments.length;
switch (G__44414) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44477 = arguments.length;
switch (G__44477) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46108 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46108) : fn1.call(null,val_46108));
} else {
cljs.core.async.impl.dispatch.run(((function (val_46108,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46108) : fn1.call(null,val_46108));
});})(val_46108,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44479 = arguments.length;
switch (G__44479) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___46110 = n;
var x_46111 = (0);
while(true){
if((x_46111 < n__4607__auto___46110)){
(a[x_46111] = x_46111);

var G__46112 = (x_46111 + (1));
x_46111 = G__46112;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44494 = (function (flag,meta44495){
this.flag = flag;
this.meta44495 = meta44495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44496,meta44495__$1){
var self__ = this;
var _44496__$1 = this;
return (new cljs.core.async.t_cljs$core$async44494(self__.flag,meta44495__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44496){
var self__ = this;
var _44496__$1 = this;
return self__.meta44495;
});})(flag))
;

cljs.core.async.t_cljs$core$async44494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44494.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44495","meta44495",33383209,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44494";

cljs.core.async.t_cljs$core$async44494.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44494");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44494.
 */
cljs.core.async.__GT_t_cljs$core$async44494 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44494(flag__$1,meta44495){
return (new cljs.core.async.t_cljs$core$async44494(flag__$1,meta44495));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44494(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44497 = (function (flag,cb,meta44498){
this.flag = flag;
this.cb = cb;
this.meta44498 = meta44498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44499,meta44498__$1){
var self__ = this;
var _44499__$1 = this;
return (new cljs.core.async.t_cljs$core$async44497(self__.flag,self__.cb,meta44498__$1));
});

cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44499){
var self__ = this;
var _44499__$1 = this;
return self__.meta44498;
});

cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44498","meta44498",-1118795646,null)], null);
});

cljs.core.async.t_cljs$core$async44497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44497";

cljs.core.async.t_cljs$core$async44497.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44497");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44497.
 */
cljs.core.async.__GT_t_cljs$core$async44497 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44497(flag__$1,cb__$1,meta44498){
return (new cljs.core.async.t_cljs$core$async44497(flag__$1,cb__$1,meta44498));
});

}

return (new cljs.core.async.t_cljs$core$async44497(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44501_SHARP_){
var G__44508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44501_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44508) : fret.call(null,G__44508));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44503_SHARP_){
var G__44509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44503_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44509) : fret.call(null,G__44509));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46139 = (i + (1));
i = G__46139;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46144 = arguments.length;
var i__4731__auto___46145 = (0);
while(true){
if((i__4731__auto___46145 < len__4730__auto___46144)){
args__4736__auto__.push((arguments[i__4731__auto___46145]));

var G__46146 = (i__4731__auto___46145 + (1));
i__4731__auto___46145 = G__46146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44512){
var map__44513 = p__44512;
var map__44513__$1 = (((((!((map__44513 == null))))?(((((map__44513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44513):map__44513);
var opts = map__44513__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44510){
var G__44511 = cljs.core.first(seq44510);
var seq44510__$1 = cljs.core.next(seq44510);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44511,seq44510__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44527 = arguments.length;
switch (G__44527) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44156__auto___46156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46156){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46156){
return (function (state_44576){
var state_val_44577 = (state_44576[(1)]);
if((state_val_44577 === (7))){
var inst_44567 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44583_46157 = state_44576__$1;
(statearr_44583_46157[(2)] = inst_44567);

(statearr_44583_46157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (1))){
var state_44576__$1 = state_44576;
var statearr_44584_46159 = state_44576__$1;
(statearr_44584_46159[(2)] = null);

(statearr_44584_46159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (4))){
var inst_44542 = (state_44576[(7)]);
var inst_44542__$1 = (state_44576[(2)]);
var inst_44547 = (inst_44542__$1 == null);
var state_44576__$1 = (function (){var statearr_44585 = state_44576;
(statearr_44585[(7)] = inst_44542__$1);

return statearr_44585;
})();
if(cljs.core.truth_(inst_44547)){
var statearr_44586_46164 = state_44576__$1;
(statearr_44586_46164[(1)] = (5));

} else {
var statearr_44587_46165 = state_44576__$1;
(statearr_44587_46165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (13))){
var state_44576__$1 = state_44576;
var statearr_44598_46166 = state_44576__$1;
(statearr_44598_46166[(2)] = null);

(statearr_44598_46166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (6))){
var inst_44542 = (state_44576[(7)]);
var state_44576__$1 = state_44576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44576__$1,(11),to,inst_44542);
} else {
if((state_val_44577 === (3))){
var inst_44572 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44576__$1,inst_44572);
} else {
if((state_val_44577 === (12))){
var state_44576__$1 = state_44576;
var statearr_44599_46168 = state_44576__$1;
(statearr_44599_46168[(2)] = null);

(statearr_44599_46168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (2))){
var state_44576__$1 = state_44576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44576__$1,(4),from);
} else {
if((state_val_44577 === (11))){
var inst_44559 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
if(cljs.core.truth_(inst_44559)){
var statearr_44600_46172 = state_44576__$1;
(statearr_44600_46172[(1)] = (12));

} else {
var statearr_44601_46173 = state_44576__$1;
(statearr_44601_46173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (9))){
var state_44576__$1 = state_44576;
var statearr_44602_46174 = state_44576__$1;
(statearr_44602_46174[(2)] = null);

(statearr_44602_46174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (5))){
var state_44576__$1 = state_44576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44604_46178 = state_44576__$1;
(statearr_44604_46178[(1)] = (8));

} else {
var statearr_44605_46179 = state_44576__$1;
(statearr_44605_46179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (14))){
var inst_44565 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44606_46180 = state_44576__$1;
(statearr_44606_46180[(2)] = inst_44565);

(statearr_44606_46180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (10))){
var inst_44556 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44607_46182 = state_44576__$1;
(statearr_44607_46182[(2)] = inst_44556);

(statearr_44607_46182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (8))){
var inst_44550 = cljs.core.async.close_BANG_(to);
var state_44576__$1 = state_44576;
var statearr_44608_46183 = state_44576__$1;
(statearr_44608_46183[(2)] = inst_44550);

(statearr_44608_46183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46156))
;
return ((function (switch__44056__auto__,c__44156__auto___46156){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_44609 = [null,null,null,null,null,null,null,null];
(statearr_44609[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_44609[(1)] = (1));

return statearr_44609;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_44576){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44576);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44610){var ex__44060__auto__ = e44610;
var statearr_44611_46188 = state_44576;
(statearr_44611_46188[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44576[(4)]))){
var statearr_44612_46189 = state_44576;
(statearr_44612_46189[(1)] = cljs.core.first((state_44576[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46190 = state_44576;
state_44576 = G__46190;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_44576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_44576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46156))
})();
var state__44158__auto__ = (function (){var statearr_44613 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44613[(6)] = c__44156__auto___46156);

return statearr_44613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46156))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__44614){
var vec__44615 = p__44614;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44615,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44615,(1),null);
var job = vec__44615;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44156__auto___46194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46194,res,vec__44615,v,p,job,jobs,results){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46194,res,vec__44615,v,p,job,jobs,results){
return (function (state_44622){
var state_val_44623 = (state_44622[(1)]);
if((state_val_44623 === (1))){
var state_44622__$1 = state_44622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44622__$1,(2),res,v);
} else {
if((state_val_44623 === (2))){
var inst_44619 = (state_44622[(2)]);
var inst_44620 = cljs.core.async.close_BANG_(res);
var state_44622__$1 = (function (){var statearr_44624 = state_44622;
(statearr_44624[(7)] = inst_44619);

return statearr_44624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44622__$1,inst_44620);
} else {
return null;
}
}
});})(c__44156__auto___46194,res,vec__44615,v,p,job,jobs,results))
;
return ((function (switch__44056__auto__,c__44156__auto___46194,res,vec__44615,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0 = (function (){
var statearr_44625 = [null,null,null,null,null,null,null,null];
(statearr_44625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__);

(statearr_44625[(1)] = (1));

return statearr_44625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1 = (function (state_44622){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44622);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44626){var ex__44060__auto__ = e44626;
var statearr_44627_46198 = state_44622;
(statearr_44627_46198[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44622[(4)]))){
var statearr_44628_46199 = state_44622;
(statearr_44628_46199[(1)] = cljs.core.first((state_44622[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46201 = state_44622;
state_44622 = G__46201;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = function(state_44622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1.call(this,state_44622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46194,res,vec__44615,v,p,job,jobs,results))
})();
var state__44158__auto__ = (function (){var statearr_44629 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44629[(6)] = c__44156__auto___46194);

return statearr_44629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46194,res,vec__44615,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44630){
var vec__44631 = p__44630;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44631,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44631,(1),null);
var job = vec__44631;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___46205 = n;
var __46206 = (0);
while(true){
if((__46206 < n__4607__auto___46205)){
var G__44634_46207 = type;
var G__44634_46208__$1 = (((G__44634_46207 instanceof cljs.core.Keyword))?G__44634_46207.fqn:null);
switch (G__44634_46208__$1) {
case "compute":
var c__44156__auto___46212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46206,c__44156__auto___46212,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (__46206,c__44156__auto___46212,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async){
return (function (state_44647){
var state_val_44648 = (state_44647[(1)]);
if((state_val_44648 === (1))){
var state_44647__$1 = state_44647;
var statearr_44649_46214 = state_44647__$1;
(statearr_44649_46214[(2)] = null);

(statearr_44649_46214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44648 === (2))){
var state_44647__$1 = state_44647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44647__$1,(4),jobs);
} else {
if((state_val_44648 === (3))){
var inst_44645 = (state_44647[(2)]);
var state_44647__$1 = state_44647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44647__$1,inst_44645);
} else {
if((state_val_44648 === (4))){
var inst_44637 = (state_44647[(2)]);
var inst_44638 = process(inst_44637);
var state_44647__$1 = state_44647;
if(cljs.core.truth_(inst_44638)){
var statearr_44650_46217 = state_44647__$1;
(statearr_44650_46217[(1)] = (5));

} else {
var statearr_44651_46218 = state_44647__$1;
(statearr_44651_46218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44648 === (5))){
var state_44647__$1 = state_44647;
var statearr_44652_46221 = state_44647__$1;
(statearr_44652_46221[(2)] = null);

(statearr_44652_46221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44648 === (6))){
var state_44647__$1 = state_44647;
var statearr_44653_46224 = state_44647__$1;
(statearr_44653_46224[(2)] = null);

(statearr_44653_46224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44648 === (7))){
var inst_44643 = (state_44647[(2)]);
var state_44647__$1 = state_44647;
var statearr_44654_46225 = state_44647__$1;
(statearr_44654_46225[(2)] = inst_44643);

(statearr_44654_46225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46206,c__44156__auto___46212,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async))
;
return ((function (__46206,switch__44056__auto__,c__44156__auto___46212,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0 = (function (){
var statearr_44655 = [null,null,null,null,null,null,null];
(statearr_44655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__);

(statearr_44655[(1)] = (1));

return statearr_44655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1 = (function (state_44647){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44647);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44656){var ex__44060__auto__ = e44656;
var statearr_44657_46226 = state_44647;
(statearr_44657_46226[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44647[(4)]))){
var statearr_44658_46227 = state_44647;
(statearr_44658_46227[(1)] = cljs.core.first((state_44647[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46228 = state_44647;
state_44647 = G__46228;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = function(state_44647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1.call(this,state_44647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__;
})()
;})(__46206,switch__44056__auto__,c__44156__auto___46212,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async))
})();
var state__44158__auto__ = (function (){var statearr_44659 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44659[(6)] = c__44156__auto___46212);

return statearr_44659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(__46206,c__44156__auto___46212,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async))
);


break;
case "async":
var c__44156__auto___46229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46206,c__44156__auto___46229,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (__46206,c__44156__auto___46229,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async){
return (function (state_44672){
var state_val_44673 = (state_44672[(1)]);
if((state_val_44673 === (1))){
var state_44672__$1 = state_44672;
var statearr_44674_46230 = state_44672__$1;
(statearr_44674_46230[(2)] = null);

(statearr_44674_46230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (2))){
var state_44672__$1 = state_44672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44672__$1,(4),jobs);
} else {
if((state_val_44673 === (3))){
var inst_44670 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44672__$1,inst_44670);
} else {
if((state_val_44673 === (4))){
var inst_44662 = (state_44672[(2)]);
var inst_44663 = async(inst_44662);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44663)){
var statearr_44675_46232 = state_44672__$1;
(statearr_44675_46232[(1)] = (5));

} else {
var statearr_44676_46233 = state_44672__$1;
(statearr_44676_46233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (5))){
var state_44672__$1 = state_44672;
var statearr_44677_46234 = state_44672__$1;
(statearr_44677_46234[(2)] = null);

(statearr_44677_46234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (6))){
var state_44672__$1 = state_44672;
var statearr_44678_46235 = state_44672__$1;
(statearr_44678_46235[(2)] = null);

(statearr_44678_46235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (7))){
var inst_44668 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
var statearr_44679_46237 = state_44672__$1;
(statearr_44679_46237[(2)] = inst_44668);

(statearr_44679_46237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46206,c__44156__auto___46229,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async))
;
return ((function (__46206,switch__44056__auto__,c__44156__auto___46229,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0 = (function (){
var statearr_44680 = [null,null,null,null,null,null,null];
(statearr_44680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__);

(statearr_44680[(1)] = (1));

return statearr_44680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1 = (function (state_44672){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44672);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44681){var ex__44060__auto__ = e44681;
var statearr_44682_46238 = state_44672;
(statearr_44682_46238[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44672[(4)]))){
var statearr_44683_46239 = state_44672;
(statearr_44683_46239[(1)] = cljs.core.first((state_44672[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46240 = state_44672;
state_44672 = G__46240;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = function(state_44672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1.call(this,state_44672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__;
})()
;})(__46206,switch__44056__auto__,c__44156__auto___46229,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async))
})();
var state__44158__auto__ = (function (){var statearr_44684 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44684[(6)] = c__44156__auto___46229);

return statearr_44684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(__46206,c__44156__auto___46229,G__44634_46207,G__44634_46208__$1,n__4607__auto___46205,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44634_46208__$1)].join('')));

}

var G__46241 = (__46206 + (1));
__46206 = G__46241;
continue;
} else {
}
break;
}

var c__44156__auto___46242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46242,jobs,results,process,async){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46242,jobs,results,process,async){
return (function (state_44713){
var state_val_44714 = (state_44713[(1)]);
if((state_val_44714 === (7))){
var inst_44709 = (state_44713[(2)]);
var state_44713__$1 = state_44713;
var statearr_44717_46243 = state_44713__$1;
(statearr_44717_46243[(2)] = inst_44709);

(statearr_44717_46243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44714 === (1))){
var state_44713__$1 = state_44713;
var statearr_44718_46244 = state_44713__$1;
(statearr_44718_46244[(2)] = null);

(statearr_44718_46244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44714 === (4))){
var inst_44691 = (state_44713[(7)]);
var inst_44691__$1 = (state_44713[(2)]);
var inst_44692 = (inst_44691__$1 == null);
var state_44713__$1 = (function (){var statearr_44719 = state_44713;
(statearr_44719[(7)] = inst_44691__$1);

return statearr_44719;
})();
if(cljs.core.truth_(inst_44692)){
var statearr_44720_46245 = state_44713__$1;
(statearr_44720_46245[(1)] = (5));

} else {
var statearr_44721_46246 = state_44713__$1;
(statearr_44721_46246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44714 === (6))){
var inst_44696 = (state_44713[(8)]);
var inst_44691 = (state_44713[(7)]);
var inst_44696__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44701 = [inst_44691,inst_44696__$1];
var inst_44702 = (new cljs.core.PersistentVector(null,2,(5),inst_44697,inst_44701,null));
var state_44713__$1 = (function (){var statearr_44722 = state_44713;
(statearr_44722[(8)] = inst_44696__$1);

return statearr_44722;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44713__$1,(8),jobs,inst_44702);
} else {
if((state_val_44714 === (3))){
var inst_44711 = (state_44713[(2)]);
var state_44713__$1 = state_44713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44713__$1,inst_44711);
} else {
if((state_val_44714 === (2))){
var state_44713__$1 = state_44713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44713__$1,(4),from);
} else {
if((state_val_44714 === (9))){
var inst_44706 = (state_44713[(2)]);
var state_44713__$1 = (function (){var statearr_44723 = state_44713;
(statearr_44723[(9)] = inst_44706);

return statearr_44723;
})();
var statearr_44724_46256 = state_44713__$1;
(statearr_44724_46256[(2)] = null);

(statearr_44724_46256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44714 === (5))){
var inst_44694 = cljs.core.async.close_BANG_(jobs);
var state_44713__$1 = state_44713;
var statearr_44725_46257 = state_44713__$1;
(statearr_44725_46257[(2)] = inst_44694);

(statearr_44725_46257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44714 === (8))){
var inst_44696 = (state_44713[(8)]);
var inst_44704 = (state_44713[(2)]);
var state_44713__$1 = (function (){var statearr_44726 = state_44713;
(statearr_44726[(10)] = inst_44704);

return statearr_44726;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44713__$1,(9),results,inst_44696);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46242,jobs,results,process,async))
;
return ((function (switch__44056__auto__,c__44156__auto___46242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0 = (function (){
var statearr_44727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__);

(statearr_44727[(1)] = (1));

return statearr_44727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1 = (function (state_44713){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44713);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44728){var ex__44060__auto__ = e44728;
var statearr_44729_46258 = state_44713;
(statearr_44729_46258[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44713[(4)]))){
var statearr_44730_46259 = state_44713;
(statearr_44730_46259[(1)] = cljs.core.first((state_44713[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46260 = state_44713;
state_44713 = G__46260;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = function(state_44713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1.call(this,state_44713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46242,jobs,results,process,async))
})();
var state__44158__auto__ = (function (){var statearr_44731 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44731[(6)] = c__44156__auto___46242);

return statearr_44731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46242,jobs,results,process,async))
);


var c__44156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto__,jobs,results,process,async){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto__,jobs,results,process,async){
return (function (state_44769){
var state_val_44770 = (state_44769[(1)]);
if((state_val_44770 === (7))){
var inst_44765 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44771_46261 = state_44769__$1;
(statearr_44771_46261[(2)] = inst_44765);

(statearr_44771_46261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (20))){
var state_44769__$1 = state_44769;
var statearr_44772_46262 = state_44769__$1;
(statearr_44772_46262[(2)] = null);

(statearr_44772_46262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (1))){
var state_44769__$1 = state_44769;
var statearr_44773_46263 = state_44769__$1;
(statearr_44773_46263[(2)] = null);

(statearr_44773_46263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (4))){
var inst_44734 = (state_44769[(7)]);
var inst_44734__$1 = (state_44769[(2)]);
var inst_44735 = (inst_44734__$1 == null);
var state_44769__$1 = (function (){var statearr_44774 = state_44769;
(statearr_44774[(7)] = inst_44734__$1);

return statearr_44774;
})();
if(cljs.core.truth_(inst_44735)){
var statearr_44775_46264 = state_44769__$1;
(statearr_44775_46264[(1)] = (5));

} else {
var statearr_44776_46265 = state_44769__$1;
(statearr_44776_46265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (15))){
var inst_44747 = (state_44769[(8)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44769__$1,(18),to,inst_44747);
} else {
if((state_val_44770 === (21))){
var inst_44760 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44777_46266 = state_44769__$1;
(statearr_44777_46266[(2)] = inst_44760);

(statearr_44777_46266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (13))){
var inst_44762 = (state_44769[(2)]);
var state_44769__$1 = (function (){var statearr_44778 = state_44769;
(statearr_44778[(9)] = inst_44762);

return statearr_44778;
})();
var statearr_44779_46267 = state_44769__$1;
(statearr_44779_46267[(2)] = null);

(statearr_44779_46267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (6))){
var inst_44734 = (state_44769[(7)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44769__$1,(11),inst_44734);
} else {
if((state_val_44770 === (17))){
var inst_44755 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
if(cljs.core.truth_(inst_44755)){
var statearr_44780_46268 = state_44769__$1;
(statearr_44780_46268[(1)] = (19));

} else {
var statearr_44781_46269 = state_44769__$1;
(statearr_44781_46269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (3))){
var inst_44767 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44769__$1,inst_44767);
} else {
if((state_val_44770 === (12))){
var inst_44744 = (state_44769[(10)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44769__$1,(14),inst_44744);
} else {
if((state_val_44770 === (2))){
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44769__$1,(4),results);
} else {
if((state_val_44770 === (19))){
var state_44769__$1 = state_44769;
var statearr_44782_46270 = state_44769__$1;
(statearr_44782_46270[(2)] = null);

(statearr_44782_46270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (11))){
var inst_44744 = (state_44769[(2)]);
var state_44769__$1 = (function (){var statearr_44783 = state_44769;
(statearr_44783[(10)] = inst_44744);

return statearr_44783;
})();
var statearr_44790_46271 = state_44769__$1;
(statearr_44790_46271[(2)] = null);

(statearr_44790_46271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (9))){
var state_44769__$1 = state_44769;
var statearr_44791_46272 = state_44769__$1;
(statearr_44791_46272[(2)] = null);

(statearr_44791_46272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (5))){
var state_44769__$1 = state_44769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44795_46273 = state_44769__$1;
(statearr_44795_46273[(1)] = (8));

} else {
var statearr_44799_46274 = state_44769__$1;
(statearr_44799_46274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (14))){
var inst_44747 = (state_44769[(8)]);
var inst_44749 = (state_44769[(11)]);
var inst_44747__$1 = (state_44769[(2)]);
var inst_44748 = (inst_44747__$1 == null);
var inst_44749__$1 = cljs.core.not(inst_44748);
var state_44769__$1 = (function (){var statearr_44803 = state_44769;
(statearr_44803[(8)] = inst_44747__$1);

(statearr_44803[(11)] = inst_44749__$1);

return statearr_44803;
})();
if(inst_44749__$1){
var statearr_44804_46277 = state_44769__$1;
(statearr_44804_46277[(1)] = (15));

} else {
var statearr_44808_46278 = state_44769__$1;
(statearr_44808_46278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (16))){
var inst_44749 = (state_44769[(11)]);
var state_44769__$1 = state_44769;
var statearr_44809_46279 = state_44769__$1;
(statearr_44809_46279[(2)] = inst_44749);

(statearr_44809_46279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (10))){
var inst_44741 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44810_46280 = state_44769__$1;
(statearr_44810_46280[(2)] = inst_44741);

(statearr_44810_46280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (18))){
var inst_44752 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44811_46281 = state_44769__$1;
(statearr_44811_46281[(2)] = inst_44752);

(statearr_44811_46281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (8))){
var inst_44738 = cljs.core.async.close_BANG_(to);
var state_44769__$1 = state_44769;
var statearr_44812_46282 = state_44769__$1;
(statearr_44812_46282[(2)] = inst_44738);

(statearr_44812_46282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto__,jobs,results,process,async))
;
return ((function (switch__44056__auto__,c__44156__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0 = (function (){
var statearr_44813 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__);

(statearr_44813[(1)] = (1));

return statearr_44813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1 = (function (state_44769){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44769);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44814){var ex__44060__auto__ = e44814;
var statearr_44815_46283 = state_44769;
(statearr_44815_46283[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44769[(4)]))){
var statearr_44816_46284 = state_44769;
(statearr_44816_46284[(1)] = cljs.core.first((state_44769[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46285 = state_44769;
state_44769 = G__46285;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__ = function(state_44769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1.call(this,state_44769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto__,jobs,results,process,async))
})();
var state__44158__auto__ = (function (){var statearr_44817 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44817[(6)] = c__44156__auto__);

return statearr_44817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto__,jobs,results,process,async))
);

return c__44156__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44819 = arguments.length;
switch (G__44819) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44821 = arguments.length;
switch (G__44821) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44829 = arguments.length;
switch (G__44829) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44156__auto___46292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46292,tc,fc){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46292,tc,fc){
return (function (state_44861){
var state_val_44862 = (state_44861[(1)]);
if((state_val_44862 === (7))){
var inst_44857 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44866_46293 = state_44861__$1;
(statearr_44866_46293[(2)] = inst_44857);

(statearr_44866_46293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (1))){
var state_44861__$1 = state_44861;
var statearr_44870_46294 = state_44861__$1;
(statearr_44870_46294[(2)] = null);

(statearr_44870_46294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (4))){
var inst_44837 = (state_44861[(7)]);
var inst_44837__$1 = (state_44861[(2)]);
var inst_44839 = (inst_44837__$1 == null);
var state_44861__$1 = (function (){var statearr_44871 = state_44861;
(statearr_44871[(7)] = inst_44837__$1);

return statearr_44871;
})();
if(cljs.core.truth_(inst_44839)){
var statearr_44872_46295 = state_44861__$1;
(statearr_44872_46295[(1)] = (5));

} else {
var statearr_44876_46296 = state_44861__$1;
(statearr_44876_46296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (13))){
var state_44861__$1 = state_44861;
var statearr_44877_46297 = state_44861__$1;
(statearr_44877_46297[(2)] = null);

(statearr_44877_46297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (6))){
var inst_44837 = (state_44861[(7)]);
var inst_44844 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44837) : p.call(null,inst_44837));
var state_44861__$1 = state_44861;
if(cljs.core.truth_(inst_44844)){
var statearr_44881_46298 = state_44861__$1;
(statearr_44881_46298[(1)] = (9));

} else {
var statearr_44882_46299 = state_44861__$1;
(statearr_44882_46299[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (3))){
var inst_44859 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44861__$1,inst_44859);
} else {
if((state_val_44862 === (12))){
var state_44861__$1 = state_44861;
var statearr_44887_46300 = state_44861__$1;
(statearr_44887_46300[(2)] = null);

(statearr_44887_46300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (2))){
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44861__$1,(4),ch);
} else {
if((state_val_44862 === (11))){
var inst_44837 = (state_44861[(7)]);
var inst_44848 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44861__$1,(8),inst_44848,inst_44837);
} else {
if((state_val_44862 === (9))){
var state_44861__$1 = state_44861;
var statearr_44888_46301 = state_44861__$1;
(statearr_44888_46301[(2)] = tc);

(statearr_44888_46301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (5))){
var inst_44841 = cljs.core.async.close_BANG_(tc);
var inst_44842 = cljs.core.async.close_BANG_(fc);
var state_44861__$1 = (function (){var statearr_44889 = state_44861;
(statearr_44889[(8)] = inst_44841);

return statearr_44889;
})();
var statearr_44890_46302 = state_44861__$1;
(statearr_44890_46302[(2)] = inst_44842);

(statearr_44890_46302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (14))){
var inst_44855 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44891_46307 = state_44861__$1;
(statearr_44891_46307[(2)] = inst_44855);

(statearr_44891_46307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (10))){
var state_44861__$1 = state_44861;
var statearr_44892_46308 = state_44861__$1;
(statearr_44892_46308[(2)] = fc);

(statearr_44892_46308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (8))){
var inst_44850 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
if(cljs.core.truth_(inst_44850)){
var statearr_44893_46309 = state_44861__$1;
(statearr_44893_46309[(1)] = (12));

} else {
var statearr_44894_46310 = state_44861__$1;
(statearr_44894_46310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46292,tc,fc))
;
return ((function (switch__44056__auto__,c__44156__auto___46292,tc,fc){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_44895 = [null,null,null,null,null,null,null,null,null];
(statearr_44895[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_44895[(1)] = (1));

return statearr_44895;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_44861){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44861);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44896){var ex__44060__auto__ = e44896;
var statearr_44897_46313 = state_44861;
(statearr_44897_46313[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44861[(4)]))){
var statearr_44898_46314 = state_44861;
(statearr_44898_46314[(1)] = cljs.core.first((state_44861[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46316 = state_44861;
state_44861 = G__46316;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_44861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_44861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46292,tc,fc))
})();
var state__44158__auto__ = (function (){var statearr_44899 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44899[(6)] = c__44156__auto___46292);

return statearr_44899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46292,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto__){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto__){
return (function (state_44923){
var state_val_44924 = (state_44923[(1)]);
if((state_val_44924 === (7))){
var inst_44919 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
var statearr_44925_46317 = state_44923__$1;
(statearr_44925_46317[(2)] = inst_44919);

(statearr_44925_46317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (1))){
var inst_44902 = init;
var inst_44903 = inst_44902;
var state_44923__$1 = (function (){var statearr_44926 = state_44923;
(statearr_44926[(7)] = inst_44903);

return statearr_44926;
})();
var statearr_44927_46318 = state_44923__$1;
(statearr_44927_46318[(2)] = null);

(statearr_44927_46318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (4))){
var inst_44906 = (state_44923[(8)]);
var inst_44906__$1 = (state_44923[(2)]);
var inst_44907 = (inst_44906__$1 == null);
var state_44923__$1 = (function (){var statearr_44929 = state_44923;
(statearr_44929[(8)] = inst_44906__$1);

return statearr_44929;
})();
if(cljs.core.truth_(inst_44907)){
var statearr_44930_46320 = state_44923__$1;
(statearr_44930_46320[(1)] = (5));

} else {
var statearr_44931_46321 = state_44923__$1;
(statearr_44931_46321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (6))){
var inst_44906 = (state_44923[(8)]);
var inst_44910 = (state_44923[(9)]);
var inst_44903 = (state_44923[(7)]);
var inst_44910__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44903,inst_44906) : f.call(null,inst_44903,inst_44906));
var inst_44911 = cljs.core.reduced_QMARK_(inst_44910__$1);
var state_44923__$1 = (function (){var statearr_44932 = state_44923;
(statearr_44932[(9)] = inst_44910__$1);

return statearr_44932;
})();
if(inst_44911){
var statearr_44933_46323 = state_44923__$1;
(statearr_44933_46323[(1)] = (8));

} else {
var statearr_44934_46324 = state_44923__$1;
(statearr_44934_46324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (3))){
var inst_44921 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44923__$1,inst_44921);
} else {
if((state_val_44924 === (2))){
var state_44923__$1 = state_44923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44923__$1,(4),ch);
} else {
if((state_val_44924 === (9))){
var inst_44910 = (state_44923[(9)]);
var inst_44903 = inst_44910;
var state_44923__$1 = (function (){var statearr_44935 = state_44923;
(statearr_44935[(7)] = inst_44903);

return statearr_44935;
})();
var statearr_44936_46325 = state_44923__$1;
(statearr_44936_46325[(2)] = null);

(statearr_44936_46325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (5))){
var inst_44903 = (state_44923[(7)]);
var state_44923__$1 = state_44923;
var statearr_44937_46326 = state_44923__$1;
(statearr_44937_46326[(2)] = inst_44903);

(statearr_44937_46326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (10))){
var inst_44917 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
var statearr_44938_46327 = state_44923__$1;
(statearr_44938_46327[(2)] = inst_44917);

(statearr_44938_46327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (8))){
var inst_44910 = (state_44923[(9)]);
var inst_44913 = cljs.core.deref(inst_44910);
var state_44923__$1 = state_44923;
var statearr_44942_46328 = state_44923__$1;
(statearr_44942_46328[(2)] = inst_44913);

(statearr_44942_46328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto__))
;
return ((function (switch__44056__auto__,c__44156__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44057__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44057__auto____0 = (function (){
var statearr_44946 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44946[(0)] = cljs$core$async$reduce_$_state_machine__44057__auto__);

(statearr_44946[(1)] = (1));

return statearr_44946;
});
var cljs$core$async$reduce_$_state_machine__44057__auto____1 = (function (state_44923){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44923);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44953){var ex__44060__auto__ = e44953;
var statearr_44954_46332 = state_44923;
(statearr_44954_46332[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44923[(4)]))){
var statearr_44958_46333 = state_44923;
(statearr_44958_46333[(1)] = cljs.core.first((state_44923[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46334 = state_44923;
state_44923 = G__46334;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44057__auto__ = function(state_44923){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44057__auto____1.call(this,state_44923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44057__auto____0;
cljs$core$async$reduce_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44057__auto____1;
return cljs$core$async$reduce_$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto__))
})();
var state__44158__auto__ = (function (){var statearr_44965 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44965[(6)] = c__44156__auto__);

return statearr_44965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto__))
);

return c__44156__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto__,f__$1){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto__,f__$1){
return (function (state_44974){
var state_val_44975 = (state_44974[(1)]);
if((state_val_44975 === (1))){
var inst_44969 = cljs.core.async.reduce(f__$1,init,ch);
var state_44974__$1 = state_44974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44974__$1,(2),inst_44969);
} else {
if((state_val_44975 === (2))){
var inst_44971 = (state_44974[(2)]);
var inst_44972 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44971) : f__$1.call(null,inst_44971));
var state_44974__$1 = state_44974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44974__$1,inst_44972);
} else {
return null;
}
}
});})(c__44156__auto__,f__$1))
;
return ((function (switch__44056__auto__,c__44156__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44057__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44057__auto____0 = (function (){
var statearr_44988 = [null,null,null,null,null,null,null];
(statearr_44988[(0)] = cljs$core$async$transduce_$_state_machine__44057__auto__);

(statearr_44988[(1)] = (1));

return statearr_44988;
});
var cljs$core$async$transduce_$_state_machine__44057__auto____1 = (function (state_44974){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_44974);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e44989){var ex__44060__auto__ = e44989;
var statearr_44990_46339 = state_44974;
(statearr_44990_46339[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_44974[(4)]))){
var statearr_44991_46340 = state_44974;
(statearr_44991_46340[(1)] = cljs.core.first((state_44974[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46341 = state_44974;
state_44974 = G__46341;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44057__auto__ = function(state_44974){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44057__auto____1.call(this,state_44974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44057__auto____0;
cljs$core$async$transduce_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44057__auto____1;
return cljs$core$async$transduce_$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto__,f__$1))
})();
var state__44158__auto__ = (function (){var statearr_44992 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_44992[(6)] = c__44156__auto__);

return statearr_44992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto__,f__$1))
);

return c__44156__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44994 = arguments.length;
switch (G__44994) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto__){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto__){
return (function (state_45019){
var state_val_45020 = (state_45019[(1)]);
if((state_val_45020 === (7))){
var inst_45001 = (state_45019[(2)]);
var state_45019__$1 = state_45019;
var statearr_45021_46343 = state_45019__$1;
(statearr_45021_46343[(2)] = inst_45001);

(statearr_45021_46343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (1))){
var inst_44995 = cljs.core.seq(coll);
var inst_44996 = inst_44995;
var state_45019__$1 = (function (){var statearr_45022 = state_45019;
(statearr_45022[(7)] = inst_44996);

return statearr_45022;
})();
var statearr_45023_46344 = state_45019__$1;
(statearr_45023_46344[(2)] = null);

(statearr_45023_46344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (4))){
var inst_44996 = (state_45019[(7)]);
var inst_44999 = cljs.core.first(inst_44996);
var state_45019__$1 = state_45019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45019__$1,(7),ch,inst_44999);
} else {
if((state_val_45020 === (13))){
var inst_45013 = (state_45019[(2)]);
var state_45019__$1 = state_45019;
var statearr_45027_46345 = state_45019__$1;
(statearr_45027_46345[(2)] = inst_45013);

(statearr_45027_46345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (6))){
var inst_45004 = (state_45019[(2)]);
var state_45019__$1 = state_45019;
if(cljs.core.truth_(inst_45004)){
var statearr_45028_46346 = state_45019__$1;
(statearr_45028_46346[(1)] = (8));

} else {
var statearr_45029_46347 = state_45019__$1;
(statearr_45029_46347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (3))){
var inst_45017 = (state_45019[(2)]);
var state_45019__$1 = state_45019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45019__$1,inst_45017);
} else {
if((state_val_45020 === (12))){
var state_45019__$1 = state_45019;
var statearr_45030_46348 = state_45019__$1;
(statearr_45030_46348[(2)] = null);

(statearr_45030_46348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (2))){
var inst_44996 = (state_45019[(7)]);
var state_45019__$1 = state_45019;
if(cljs.core.truth_(inst_44996)){
var statearr_45031_46350 = state_45019__$1;
(statearr_45031_46350[(1)] = (4));

} else {
var statearr_45032_46351 = state_45019__$1;
(statearr_45032_46351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (11))){
var inst_45010 = cljs.core.async.close_BANG_(ch);
var state_45019__$1 = state_45019;
var statearr_45033_46353 = state_45019__$1;
(statearr_45033_46353[(2)] = inst_45010);

(statearr_45033_46353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (9))){
var state_45019__$1 = state_45019;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45034_46354 = state_45019__$1;
(statearr_45034_46354[(1)] = (11));

} else {
var statearr_45035_46355 = state_45019__$1;
(statearr_45035_46355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (5))){
var inst_44996 = (state_45019[(7)]);
var state_45019__$1 = state_45019;
var statearr_45036_46356 = state_45019__$1;
(statearr_45036_46356[(2)] = inst_44996);

(statearr_45036_46356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (10))){
var inst_45015 = (state_45019[(2)]);
var state_45019__$1 = state_45019;
var statearr_45037_46357 = state_45019__$1;
(statearr_45037_46357[(2)] = inst_45015);

(statearr_45037_46357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45020 === (8))){
var inst_44996 = (state_45019[(7)]);
var inst_45006 = cljs.core.next(inst_44996);
var inst_44996__$1 = inst_45006;
var state_45019__$1 = (function (){var statearr_45038 = state_45019;
(statearr_45038[(7)] = inst_44996__$1);

return statearr_45038;
})();
var statearr_45039_46359 = state_45019__$1;
(statearr_45039_46359[(2)] = null);

(statearr_45039_46359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto__))
;
return ((function (switch__44056__auto__,c__44156__auto__){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_45040 = [null,null,null,null,null,null,null,null];
(statearr_45040[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_45040[(1)] = (1));

return statearr_45040;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_45019){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45019);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45041){var ex__44060__auto__ = e45041;
var statearr_45042_46361 = state_45019;
(statearr_45042_46361[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45019[(4)]))){
var statearr_45043_46362 = state_45019;
(statearr_45043_46362[(1)] = cljs.core.first((state_45019[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46363 = state_45019;
state_45019 = G__46363;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_45019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_45019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto__))
})();
var state__44158__auto__ = (function (){var statearr_45044 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45044[(6)] = c__44156__auto__);

return statearr_45044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto__))
);

return c__44156__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45049 = (function (ch,cs,meta45050){
this.ch = ch;
this.cs = cs;
this.meta45050 = meta45050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45051,meta45050__$1){
var self__ = this;
var _45051__$1 = this;
return (new cljs.core.async.t_cljs$core$async45049(self__.ch,self__.cs,meta45050__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45051){
var self__ = this;
var _45051__$1 = this;
return self__.meta45050;
});})(cs))
;

cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45049.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45049.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45050","meta45050",1937967678,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45049";

cljs.core.async.t_cljs$core$async45049.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45049");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45049.
 */
cljs.core.async.__GT_t_cljs$core$async45049 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45049(ch__$1,cs__$1,meta45050){
return (new cljs.core.async.t_cljs$core$async45049(ch__$1,cs__$1,meta45050));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45049(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__44156__auto___46374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46374,cs,m,dchan,dctr,done){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46374,cs,m,dchan,dctr,done){
return (function (state_45184){
var state_val_45185 = (state_45184[(1)]);
if((state_val_45185 === (7))){
var inst_45180 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45186_46375 = state_45184__$1;
(statearr_45186_46375[(2)] = inst_45180);

(statearr_45186_46375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (20))){
var inst_45085 = (state_45184[(7)]);
var inst_45097 = cljs.core.first(inst_45085);
var inst_45098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45097,(0),null);
var inst_45099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45097,(1),null);
var state_45184__$1 = (function (){var statearr_45187 = state_45184;
(statearr_45187[(8)] = inst_45098);

return statearr_45187;
})();
if(cljs.core.truth_(inst_45099)){
var statearr_45188_46376 = state_45184__$1;
(statearr_45188_46376[(1)] = (22));

} else {
var statearr_45189_46377 = state_45184__$1;
(statearr_45189_46377[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (27))){
var inst_45054 = (state_45184[(9)]);
var inst_45129 = (state_45184[(10)]);
var inst_45127 = (state_45184[(11)]);
var inst_45134 = (state_45184[(12)]);
var inst_45134__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45127,inst_45129);
var inst_45135 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45134__$1,inst_45054,done);
var state_45184__$1 = (function (){var statearr_45190 = state_45184;
(statearr_45190[(12)] = inst_45134__$1);

return statearr_45190;
})();
if(cljs.core.truth_(inst_45135)){
var statearr_45191_46378 = state_45184__$1;
(statearr_45191_46378[(1)] = (30));

} else {
var statearr_45192_46379 = state_45184__$1;
(statearr_45192_46379[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (1))){
var state_45184__$1 = state_45184;
var statearr_45193_46380 = state_45184__$1;
(statearr_45193_46380[(2)] = null);

(statearr_45193_46380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (24))){
var inst_45085 = (state_45184[(7)]);
var inst_45104 = (state_45184[(2)]);
var inst_45105 = cljs.core.next(inst_45085);
var inst_45063 = inst_45105;
var inst_45064 = null;
var inst_45065 = (0);
var inst_45066 = (0);
var state_45184__$1 = (function (){var statearr_45194 = state_45184;
(statearr_45194[(13)] = inst_45065);

(statearr_45194[(14)] = inst_45104);

(statearr_45194[(15)] = inst_45064);

(statearr_45194[(16)] = inst_45066);

(statearr_45194[(17)] = inst_45063);

return statearr_45194;
})();
var statearr_45195_46381 = state_45184__$1;
(statearr_45195_46381[(2)] = null);

(statearr_45195_46381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (39))){
var state_45184__$1 = state_45184;
var statearr_45199_46382 = state_45184__$1;
(statearr_45199_46382[(2)] = null);

(statearr_45199_46382[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (4))){
var inst_45054 = (state_45184[(9)]);
var inst_45054__$1 = (state_45184[(2)]);
var inst_45055 = (inst_45054__$1 == null);
var state_45184__$1 = (function (){var statearr_45200 = state_45184;
(statearr_45200[(9)] = inst_45054__$1);

return statearr_45200;
})();
if(cljs.core.truth_(inst_45055)){
var statearr_45201_46383 = state_45184__$1;
(statearr_45201_46383[(1)] = (5));

} else {
var statearr_45202_46384 = state_45184__$1;
(statearr_45202_46384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (15))){
var inst_45065 = (state_45184[(13)]);
var inst_45064 = (state_45184[(15)]);
var inst_45066 = (state_45184[(16)]);
var inst_45063 = (state_45184[(17)]);
var inst_45081 = (state_45184[(2)]);
var inst_45082 = (inst_45066 + (1));
var tmp45196 = inst_45065;
var tmp45197 = inst_45064;
var tmp45198 = inst_45063;
var inst_45063__$1 = tmp45198;
var inst_45064__$1 = tmp45197;
var inst_45065__$1 = tmp45196;
var inst_45066__$1 = inst_45082;
var state_45184__$1 = (function (){var statearr_45203 = state_45184;
(statearr_45203[(18)] = inst_45081);

(statearr_45203[(13)] = inst_45065__$1);

(statearr_45203[(15)] = inst_45064__$1);

(statearr_45203[(16)] = inst_45066__$1);

(statearr_45203[(17)] = inst_45063__$1);

return statearr_45203;
})();
var statearr_45204_46386 = state_45184__$1;
(statearr_45204_46386[(2)] = null);

(statearr_45204_46386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (21))){
var inst_45108 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45208_46388 = state_45184__$1;
(statearr_45208_46388[(2)] = inst_45108);

(statearr_45208_46388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (31))){
var inst_45134 = (state_45184[(12)]);
var inst_45138 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45134);
var state_45184__$1 = state_45184;
var statearr_45209_46389 = state_45184__$1;
(statearr_45209_46389[(2)] = inst_45138);

(statearr_45209_46389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (32))){
var inst_45126 = (state_45184[(19)]);
var inst_45129 = (state_45184[(10)]);
var inst_45127 = (state_45184[(11)]);
var inst_45128 = (state_45184[(20)]);
var inst_45140 = (state_45184[(2)]);
var inst_45141 = (inst_45129 + (1));
var tmp45205 = inst_45126;
var tmp45206 = inst_45127;
var tmp45207 = inst_45128;
var inst_45126__$1 = tmp45205;
var inst_45127__$1 = tmp45206;
var inst_45128__$1 = tmp45207;
var inst_45129__$1 = inst_45141;
var state_45184__$1 = (function (){var statearr_45210 = state_45184;
(statearr_45210[(21)] = inst_45140);

(statearr_45210[(19)] = inst_45126__$1);

(statearr_45210[(10)] = inst_45129__$1);

(statearr_45210[(11)] = inst_45127__$1);

(statearr_45210[(20)] = inst_45128__$1);

return statearr_45210;
})();
var statearr_45211_46392 = state_45184__$1;
(statearr_45211_46392[(2)] = null);

(statearr_45211_46392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (40))){
var inst_45153 = (state_45184[(22)]);
var inst_45157 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45153);
var state_45184__$1 = state_45184;
var statearr_45212_46393 = state_45184__$1;
(statearr_45212_46393[(2)] = inst_45157);

(statearr_45212_46393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (33))){
var inst_45144 = (state_45184[(23)]);
var inst_45146 = cljs.core.chunked_seq_QMARK_(inst_45144);
var state_45184__$1 = state_45184;
if(inst_45146){
var statearr_45213_46394 = state_45184__$1;
(statearr_45213_46394[(1)] = (36));

} else {
var statearr_45214_46395 = state_45184__$1;
(statearr_45214_46395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (13))){
var inst_45075 = (state_45184[(24)]);
var inst_45078 = cljs.core.async.close_BANG_(inst_45075);
var state_45184__$1 = state_45184;
var statearr_45215_46396 = state_45184__$1;
(statearr_45215_46396[(2)] = inst_45078);

(statearr_45215_46396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (22))){
var inst_45098 = (state_45184[(8)]);
var inst_45101 = cljs.core.async.close_BANG_(inst_45098);
var state_45184__$1 = state_45184;
var statearr_45216_46397 = state_45184__$1;
(statearr_45216_46397[(2)] = inst_45101);

(statearr_45216_46397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (36))){
var inst_45144 = (state_45184[(23)]);
var inst_45148 = cljs.core.chunk_first(inst_45144);
var inst_45149 = cljs.core.chunk_rest(inst_45144);
var inst_45150 = cljs.core.count(inst_45148);
var inst_45126 = inst_45149;
var inst_45127 = inst_45148;
var inst_45128 = inst_45150;
var inst_45129 = (0);
var state_45184__$1 = (function (){var statearr_45217 = state_45184;
(statearr_45217[(19)] = inst_45126);

(statearr_45217[(10)] = inst_45129);

(statearr_45217[(11)] = inst_45127);

(statearr_45217[(20)] = inst_45128);

return statearr_45217;
})();
var statearr_45218_46399 = state_45184__$1;
(statearr_45218_46399[(2)] = null);

(statearr_45218_46399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (41))){
var inst_45144 = (state_45184[(23)]);
var inst_45159 = (state_45184[(2)]);
var inst_45160 = cljs.core.next(inst_45144);
var inst_45126 = inst_45160;
var inst_45127 = null;
var inst_45128 = (0);
var inst_45129 = (0);
var state_45184__$1 = (function (){var statearr_45219 = state_45184;
(statearr_45219[(19)] = inst_45126);

(statearr_45219[(10)] = inst_45129);

(statearr_45219[(11)] = inst_45127);

(statearr_45219[(25)] = inst_45159);

(statearr_45219[(20)] = inst_45128);

return statearr_45219;
})();
var statearr_45220_46400 = state_45184__$1;
(statearr_45220_46400[(2)] = null);

(statearr_45220_46400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (43))){
var state_45184__$1 = state_45184;
var statearr_45221_46401 = state_45184__$1;
(statearr_45221_46401[(2)] = null);

(statearr_45221_46401[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (29))){
var inst_45168 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45222_46402 = state_45184__$1;
(statearr_45222_46402[(2)] = inst_45168);

(statearr_45222_46402[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (44))){
var inst_45177 = (state_45184[(2)]);
var state_45184__$1 = (function (){var statearr_45223 = state_45184;
(statearr_45223[(26)] = inst_45177);

return statearr_45223;
})();
var statearr_45224_46403 = state_45184__$1;
(statearr_45224_46403[(2)] = null);

(statearr_45224_46403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (6))){
var inst_45118 = (state_45184[(27)]);
var inst_45117 = cljs.core.deref(cs);
var inst_45118__$1 = cljs.core.keys(inst_45117);
var inst_45119 = cljs.core.count(inst_45118__$1);
var inst_45120 = cljs.core.reset_BANG_(dctr,inst_45119);
var inst_45125 = cljs.core.seq(inst_45118__$1);
var inst_45126 = inst_45125;
var inst_45127 = null;
var inst_45128 = (0);
var inst_45129 = (0);
var state_45184__$1 = (function (){var statearr_45225 = state_45184;
(statearr_45225[(19)] = inst_45126);

(statearr_45225[(28)] = inst_45120);

(statearr_45225[(27)] = inst_45118__$1);

(statearr_45225[(10)] = inst_45129);

(statearr_45225[(11)] = inst_45127);

(statearr_45225[(20)] = inst_45128);

return statearr_45225;
})();
var statearr_45226_46404 = state_45184__$1;
(statearr_45226_46404[(2)] = null);

(statearr_45226_46404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (28))){
var inst_45126 = (state_45184[(19)]);
var inst_45144 = (state_45184[(23)]);
var inst_45144__$1 = cljs.core.seq(inst_45126);
var state_45184__$1 = (function (){var statearr_45227 = state_45184;
(statearr_45227[(23)] = inst_45144__$1);

return statearr_45227;
})();
if(inst_45144__$1){
var statearr_45228_46405 = state_45184__$1;
(statearr_45228_46405[(1)] = (33));

} else {
var statearr_45229_46406 = state_45184__$1;
(statearr_45229_46406[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (25))){
var inst_45129 = (state_45184[(10)]);
var inst_45128 = (state_45184[(20)]);
var inst_45131 = (inst_45129 < inst_45128);
var inst_45132 = inst_45131;
var state_45184__$1 = state_45184;
if(cljs.core.truth_(inst_45132)){
var statearr_45230_46407 = state_45184__$1;
(statearr_45230_46407[(1)] = (27));

} else {
var statearr_45231_46408 = state_45184__$1;
(statearr_45231_46408[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (34))){
var state_45184__$1 = state_45184;
var statearr_45232_46413 = state_45184__$1;
(statearr_45232_46413[(2)] = null);

(statearr_45232_46413[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (17))){
var state_45184__$1 = state_45184;
var statearr_45233_46414 = state_45184__$1;
(statearr_45233_46414[(2)] = null);

(statearr_45233_46414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (3))){
var inst_45182 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45184__$1,inst_45182);
} else {
if((state_val_45185 === (12))){
var inst_45113 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45234_46415 = state_45184__$1;
(statearr_45234_46415[(2)] = inst_45113);

(statearr_45234_46415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (2))){
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45184__$1,(4),ch);
} else {
if((state_val_45185 === (23))){
var state_45184__$1 = state_45184;
var statearr_45235_46419 = state_45184__$1;
(statearr_45235_46419[(2)] = null);

(statearr_45235_46419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (35))){
var inst_45166 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45236_46420 = state_45184__$1;
(statearr_45236_46420[(2)] = inst_45166);

(statearr_45236_46420[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (19))){
var inst_45085 = (state_45184[(7)]);
var inst_45089 = cljs.core.chunk_first(inst_45085);
var inst_45090 = cljs.core.chunk_rest(inst_45085);
var inst_45091 = cljs.core.count(inst_45089);
var inst_45063 = inst_45090;
var inst_45064 = inst_45089;
var inst_45065 = inst_45091;
var inst_45066 = (0);
var state_45184__$1 = (function (){var statearr_45237 = state_45184;
(statearr_45237[(13)] = inst_45065);

(statearr_45237[(15)] = inst_45064);

(statearr_45237[(16)] = inst_45066);

(statearr_45237[(17)] = inst_45063);

return statearr_45237;
})();
var statearr_45238_46424 = state_45184__$1;
(statearr_45238_46424[(2)] = null);

(statearr_45238_46424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (11))){
var inst_45085 = (state_45184[(7)]);
var inst_45063 = (state_45184[(17)]);
var inst_45085__$1 = cljs.core.seq(inst_45063);
var state_45184__$1 = (function (){var statearr_45239 = state_45184;
(statearr_45239[(7)] = inst_45085__$1);

return statearr_45239;
})();
if(inst_45085__$1){
var statearr_45240_46425 = state_45184__$1;
(statearr_45240_46425[(1)] = (16));

} else {
var statearr_45241_46426 = state_45184__$1;
(statearr_45241_46426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (9))){
var inst_45115 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45242_46427 = state_45184__$1;
(statearr_45242_46427[(2)] = inst_45115);

(statearr_45242_46427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (5))){
var inst_45061 = cljs.core.deref(cs);
var inst_45062 = cljs.core.seq(inst_45061);
var inst_45063 = inst_45062;
var inst_45064 = null;
var inst_45065 = (0);
var inst_45066 = (0);
var state_45184__$1 = (function (){var statearr_45243 = state_45184;
(statearr_45243[(13)] = inst_45065);

(statearr_45243[(15)] = inst_45064);

(statearr_45243[(16)] = inst_45066);

(statearr_45243[(17)] = inst_45063);

return statearr_45243;
})();
var statearr_45244_46431 = state_45184__$1;
(statearr_45244_46431[(2)] = null);

(statearr_45244_46431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (14))){
var state_45184__$1 = state_45184;
var statearr_45245_46432 = state_45184__$1;
(statearr_45245_46432[(2)] = null);

(statearr_45245_46432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (45))){
var inst_45174 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45246_46433 = state_45184__$1;
(statearr_45246_46433[(2)] = inst_45174);

(statearr_45246_46433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (26))){
var inst_45118 = (state_45184[(27)]);
var inst_45170 = (state_45184[(2)]);
var inst_45171 = cljs.core.seq(inst_45118);
var state_45184__$1 = (function (){var statearr_45247 = state_45184;
(statearr_45247[(29)] = inst_45170);

return statearr_45247;
})();
if(inst_45171){
var statearr_45248_46437 = state_45184__$1;
(statearr_45248_46437[(1)] = (42));

} else {
var statearr_45249_46438 = state_45184__$1;
(statearr_45249_46438[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (16))){
var inst_45085 = (state_45184[(7)]);
var inst_45087 = cljs.core.chunked_seq_QMARK_(inst_45085);
var state_45184__$1 = state_45184;
if(inst_45087){
var statearr_45250_46439 = state_45184__$1;
(statearr_45250_46439[(1)] = (19));

} else {
var statearr_45251_46440 = state_45184__$1;
(statearr_45251_46440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (38))){
var inst_45163 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45252_46442 = state_45184__$1;
(statearr_45252_46442[(2)] = inst_45163);

(statearr_45252_46442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (30))){
var state_45184__$1 = state_45184;
var statearr_45253_46443 = state_45184__$1;
(statearr_45253_46443[(2)] = null);

(statearr_45253_46443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (10))){
var inst_45064 = (state_45184[(15)]);
var inst_45066 = (state_45184[(16)]);
var inst_45074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45064,inst_45066);
var inst_45075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45074,(0),null);
var inst_45076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45074,(1),null);
var state_45184__$1 = (function (){var statearr_45254 = state_45184;
(statearr_45254[(24)] = inst_45075);

return statearr_45254;
})();
if(cljs.core.truth_(inst_45076)){
var statearr_45255_46445 = state_45184__$1;
(statearr_45255_46445[(1)] = (13));

} else {
var statearr_45256_46446 = state_45184__$1;
(statearr_45256_46446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (18))){
var inst_45111 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45257_46447 = state_45184__$1;
(statearr_45257_46447[(2)] = inst_45111);

(statearr_45257_46447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (42))){
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45184__$1,(45),dchan);
} else {
if((state_val_45185 === (37))){
var inst_45144 = (state_45184[(23)]);
var inst_45153 = (state_45184[(22)]);
var inst_45054 = (state_45184[(9)]);
var inst_45153__$1 = cljs.core.first(inst_45144);
var inst_45154 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45153__$1,inst_45054,done);
var state_45184__$1 = (function (){var statearr_45258 = state_45184;
(statearr_45258[(22)] = inst_45153__$1);

return statearr_45258;
})();
if(cljs.core.truth_(inst_45154)){
var statearr_45259_46448 = state_45184__$1;
(statearr_45259_46448[(1)] = (39));

} else {
var statearr_45260_46449 = state_45184__$1;
(statearr_45260_46449[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (8))){
var inst_45065 = (state_45184[(13)]);
var inst_45066 = (state_45184[(16)]);
var inst_45068 = (inst_45066 < inst_45065);
var inst_45069 = inst_45068;
var state_45184__$1 = state_45184;
if(cljs.core.truth_(inst_45069)){
var statearr_45261_46450 = state_45184__$1;
(statearr_45261_46450[(1)] = (10));

} else {
var statearr_45262_46451 = state_45184__$1;
(statearr_45262_46451[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46374,cs,m,dchan,dctr,done))
;
return ((function (switch__44056__auto__,c__44156__auto___46374,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44057__auto__ = null;
var cljs$core$async$mult_$_state_machine__44057__auto____0 = (function (){
var statearr_45263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45263[(0)] = cljs$core$async$mult_$_state_machine__44057__auto__);

(statearr_45263[(1)] = (1));

return statearr_45263;
});
var cljs$core$async$mult_$_state_machine__44057__auto____1 = (function (state_45184){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45184);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45264){var ex__44060__auto__ = e45264;
var statearr_45265_46452 = state_45184;
(statearr_45265_46452[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45184[(4)]))){
var statearr_45266_46453 = state_45184;
(statearr_45266_46453[(1)] = cljs.core.first((state_45184[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46454 = state_45184;
state_45184 = G__46454;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44057__auto__ = function(state_45184){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44057__auto____1.call(this,state_45184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44057__auto____0;
cljs$core$async$mult_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44057__auto____1;
return cljs$core$async$mult_$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46374,cs,m,dchan,dctr,done))
})();
var state__44158__auto__ = (function (){var statearr_45267 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45267[(6)] = c__44156__auto___46374);

return statearr_45267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46374,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45269 = arguments.length;
switch (G__45269) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46456 = arguments.length;
var i__4731__auto___46457 = (0);
while(true){
if((i__4731__auto___46457 < len__4730__auto___46456)){
args__4736__auto__.push((arguments[i__4731__auto___46457]));

var G__46458 = (i__4731__auto___46457 + (1));
i__4731__auto___46457 = G__46458;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45274){
var map__45275 = p__45274;
var map__45275__$1 = (((((!((map__45275 == null))))?(((((map__45275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45275):map__45275);
var opts = map__45275__$1;
var statearr_45277_46462 = state;
(statearr_45277_46462[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__45275,map__45275__$1,opts){
return (function (val){
var statearr_45278_46463 = state;
(statearr_45278_46463[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__45275,map__45275__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45279_46464 = state;
(statearr_45279_46464[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45270){
var G__45271 = cljs.core.first(seq45270);
var seq45270__$1 = cljs.core.next(seq45270);
var G__45272 = cljs.core.first(seq45270__$1);
var seq45270__$2 = cljs.core.next(seq45270__$1);
var G__45273 = cljs.core.first(seq45270__$2);
var seq45270__$3 = cljs.core.next(seq45270__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45271,G__45272,G__45273,seq45270__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45280 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45281){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45281 = meta45281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45282,meta45281__$1){
var self__ = this;
var _45282__$1 = this;
return (new cljs.core.async.t_cljs$core$async45280(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45281__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45282){
var self__ = this;
var _45282__$1 = this;
return self__.meta45281;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45281","meta45281",1677285205,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45280";

cljs.core.async.t_cljs$core$async45280.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45280");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45280.
 */
cljs.core.async.__GT_t_cljs$core$async45280 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45280(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45281){
return (new cljs.core.async.t_cljs$core$async45280(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45281));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45280(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44156__auto___46494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45384){
var state_val_45385 = (state_45384[(1)]);
if((state_val_45385 === (7))){
var inst_45299 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
var statearr_45386_46498 = state_45384__$1;
(statearr_45386_46498[(2)] = inst_45299);

(statearr_45386_46498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (20))){
var inst_45311 = (state_45384[(7)]);
var state_45384__$1 = state_45384;
var statearr_45387_46502 = state_45384__$1;
(statearr_45387_46502[(2)] = inst_45311);

(statearr_45387_46502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (27))){
var state_45384__$1 = state_45384;
var statearr_45388_46506 = state_45384__$1;
(statearr_45388_46506[(2)] = null);

(statearr_45388_46506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (1))){
var inst_45286 = (state_45384[(8)]);
var inst_45286__$1 = calc_state();
var inst_45288 = (inst_45286__$1 == null);
var inst_45289 = cljs.core.not(inst_45288);
var state_45384__$1 = (function (){var statearr_45389 = state_45384;
(statearr_45389[(8)] = inst_45286__$1);

return statearr_45389;
})();
if(inst_45289){
var statearr_45390_46510 = state_45384__$1;
(statearr_45390_46510[(1)] = (2));

} else {
var statearr_45391_46511 = state_45384__$1;
(statearr_45391_46511[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (24))){
var inst_45335 = (state_45384[(9)]);
var inst_45344 = (state_45384[(10)]);
var inst_45358 = (state_45384[(11)]);
var inst_45358__$1 = (inst_45335.cljs$core$IFn$_invoke$arity$1 ? inst_45335.cljs$core$IFn$_invoke$arity$1(inst_45344) : inst_45335.call(null,inst_45344));
var state_45384__$1 = (function (){var statearr_45392 = state_45384;
(statearr_45392[(11)] = inst_45358__$1);

return statearr_45392;
})();
if(cljs.core.truth_(inst_45358__$1)){
var statearr_45393_46512 = state_45384__$1;
(statearr_45393_46512[(1)] = (29));

} else {
var statearr_45394_46513 = state_45384__$1;
(statearr_45394_46513[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (4))){
var inst_45302 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
if(cljs.core.truth_(inst_45302)){
var statearr_45395_46517 = state_45384__$1;
(statearr_45395_46517[(1)] = (8));

} else {
var statearr_45396_46518 = state_45384__$1;
(statearr_45396_46518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (15))){
var inst_45329 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
if(cljs.core.truth_(inst_45329)){
var statearr_45397_46522 = state_45384__$1;
(statearr_45397_46522[(1)] = (19));

} else {
var statearr_45398_46523 = state_45384__$1;
(statearr_45398_46523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (21))){
var inst_45334 = (state_45384[(12)]);
var inst_45334__$1 = (state_45384[(2)]);
var inst_45335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45334__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45334__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45334__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45384__$1 = (function (){var statearr_45399 = state_45384;
(statearr_45399[(13)] = inst_45336);

(statearr_45399[(12)] = inst_45334__$1);

(statearr_45399[(9)] = inst_45335);

return statearr_45399;
})();
return cljs.core.async.ioc_alts_BANG_(state_45384__$1,(22),inst_45337);
} else {
if((state_val_45385 === (31))){
var inst_45366 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
if(cljs.core.truth_(inst_45366)){
var statearr_45400_46524 = state_45384__$1;
(statearr_45400_46524[(1)] = (32));

} else {
var statearr_45401_46525 = state_45384__$1;
(statearr_45401_46525[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (32))){
var inst_45343 = (state_45384[(14)]);
var state_45384__$1 = state_45384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45384__$1,(35),out,inst_45343);
} else {
if((state_val_45385 === (33))){
var inst_45334 = (state_45384[(12)]);
var inst_45311 = inst_45334;
var state_45384__$1 = (function (){var statearr_45402 = state_45384;
(statearr_45402[(7)] = inst_45311);

return statearr_45402;
})();
var statearr_45403_46527 = state_45384__$1;
(statearr_45403_46527[(2)] = null);

(statearr_45403_46527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (13))){
var inst_45311 = (state_45384[(7)]);
var inst_45318 = inst_45311.cljs$lang$protocol_mask$partition0$;
var inst_45319 = (inst_45318 & (64));
var inst_45320 = inst_45311.cljs$core$ISeq$;
var inst_45321 = (cljs.core.PROTOCOL_SENTINEL === inst_45320);
var inst_45322 = ((inst_45319) || (inst_45321));
var state_45384__$1 = state_45384;
if(cljs.core.truth_(inst_45322)){
var statearr_45404_46528 = state_45384__$1;
(statearr_45404_46528[(1)] = (16));

} else {
var statearr_45405_46529 = state_45384__$1;
(statearr_45405_46529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (22))){
var inst_45344 = (state_45384[(10)]);
var inst_45343 = (state_45384[(14)]);
var inst_45342 = (state_45384[(2)]);
var inst_45343__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45342,(0),null);
var inst_45344__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45342,(1),null);
var inst_45345 = (inst_45343__$1 == null);
var inst_45346 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45344__$1,change);
var inst_45347 = ((inst_45345) || (inst_45346));
var state_45384__$1 = (function (){var statearr_45406 = state_45384;
(statearr_45406[(10)] = inst_45344__$1);

(statearr_45406[(14)] = inst_45343__$1);

return statearr_45406;
})();
if(cljs.core.truth_(inst_45347)){
var statearr_45407_46530 = state_45384__$1;
(statearr_45407_46530[(1)] = (23));

} else {
var statearr_45408_46531 = state_45384__$1;
(statearr_45408_46531[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (36))){
var inst_45334 = (state_45384[(12)]);
var inst_45311 = inst_45334;
var state_45384__$1 = (function (){var statearr_45409 = state_45384;
(statearr_45409[(7)] = inst_45311);

return statearr_45409;
})();
var statearr_45410_46532 = state_45384__$1;
(statearr_45410_46532[(2)] = null);

(statearr_45410_46532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (29))){
var inst_45358 = (state_45384[(11)]);
var state_45384__$1 = state_45384;
var statearr_45411_46533 = state_45384__$1;
(statearr_45411_46533[(2)] = inst_45358);

(statearr_45411_46533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (6))){
var state_45384__$1 = state_45384;
var statearr_45412_46534 = state_45384__$1;
(statearr_45412_46534[(2)] = false);

(statearr_45412_46534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (28))){
var inst_45354 = (state_45384[(2)]);
var inst_45355 = calc_state();
var inst_45311 = inst_45355;
var state_45384__$1 = (function (){var statearr_45413 = state_45384;
(statearr_45413[(15)] = inst_45354);

(statearr_45413[(7)] = inst_45311);

return statearr_45413;
})();
var statearr_45414_46535 = state_45384__$1;
(statearr_45414_46535[(2)] = null);

(statearr_45414_46535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (25))){
var inst_45380 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
var statearr_45415_46536 = state_45384__$1;
(statearr_45415_46536[(2)] = inst_45380);

(statearr_45415_46536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (34))){
var inst_45378 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
var statearr_45416_46537 = state_45384__$1;
(statearr_45416_46537[(2)] = inst_45378);

(statearr_45416_46537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (17))){
var state_45384__$1 = state_45384;
var statearr_45417_46538 = state_45384__$1;
(statearr_45417_46538[(2)] = false);

(statearr_45417_46538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (3))){
var state_45384__$1 = state_45384;
var statearr_45418_46541 = state_45384__$1;
(statearr_45418_46541[(2)] = false);

(statearr_45418_46541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (12))){
var inst_45382 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45384__$1,inst_45382);
} else {
if((state_val_45385 === (2))){
var inst_45286 = (state_45384[(8)]);
var inst_45291 = inst_45286.cljs$lang$protocol_mask$partition0$;
var inst_45292 = (inst_45291 & (64));
var inst_45293 = inst_45286.cljs$core$ISeq$;
var inst_45294 = (cljs.core.PROTOCOL_SENTINEL === inst_45293);
var inst_45295 = ((inst_45292) || (inst_45294));
var state_45384__$1 = state_45384;
if(cljs.core.truth_(inst_45295)){
var statearr_45419_46542 = state_45384__$1;
(statearr_45419_46542[(1)] = (5));

} else {
var statearr_45420_46543 = state_45384__$1;
(statearr_45420_46543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (23))){
var inst_45343 = (state_45384[(14)]);
var inst_45349 = (inst_45343 == null);
var state_45384__$1 = state_45384;
if(cljs.core.truth_(inst_45349)){
var statearr_45421_46544 = state_45384__$1;
(statearr_45421_46544[(1)] = (26));

} else {
var statearr_45422_46545 = state_45384__$1;
(statearr_45422_46545[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (35))){
var inst_45369 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
if(cljs.core.truth_(inst_45369)){
var statearr_45423_46546 = state_45384__$1;
(statearr_45423_46546[(1)] = (36));

} else {
var statearr_45424_46547 = state_45384__$1;
(statearr_45424_46547[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (19))){
var inst_45311 = (state_45384[(7)]);
var inst_45331 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45311);
var state_45384__$1 = state_45384;
var statearr_45425_46548 = state_45384__$1;
(statearr_45425_46548[(2)] = inst_45331);

(statearr_45425_46548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (11))){
var inst_45311 = (state_45384[(7)]);
var inst_45315 = (inst_45311 == null);
var inst_45316 = cljs.core.not(inst_45315);
var state_45384__$1 = state_45384;
if(inst_45316){
var statearr_45426_46549 = state_45384__$1;
(statearr_45426_46549[(1)] = (13));

} else {
var statearr_45427_46550 = state_45384__$1;
(statearr_45427_46550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (9))){
var inst_45286 = (state_45384[(8)]);
var state_45384__$1 = state_45384;
var statearr_45428_46551 = state_45384__$1;
(statearr_45428_46551[(2)] = inst_45286);

(statearr_45428_46551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (5))){
var state_45384__$1 = state_45384;
var statearr_45429_46552 = state_45384__$1;
(statearr_45429_46552[(2)] = true);

(statearr_45429_46552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (14))){
var state_45384__$1 = state_45384;
var statearr_45430_46553 = state_45384__$1;
(statearr_45430_46553[(2)] = false);

(statearr_45430_46553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (26))){
var inst_45344 = (state_45384[(10)]);
var inst_45351 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45344);
var state_45384__$1 = state_45384;
var statearr_45431_46554 = state_45384__$1;
(statearr_45431_46554[(2)] = inst_45351);

(statearr_45431_46554[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (16))){
var state_45384__$1 = state_45384;
var statearr_45432_46555 = state_45384__$1;
(statearr_45432_46555[(2)] = true);

(statearr_45432_46555[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (38))){
var inst_45374 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
var statearr_45433_46557 = state_45384__$1;
(statearr_45433_46557[(2)] = inst_45374);

(statearr_45433_46557[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (30))){
var inst_45336 = (state_45384[(13)]);
var inst_45335 = (state_45384[(9)]);
var inst_45344 = (state_45384[(10)]);
var inst_45361 = cljs.core.empty_QMARK_(inst_45335);
var inst_45362 = (inst_45336.cljs$core$IFn$_invoke$arity$1 ? inst_45336.cljs$core$IFn$_invoke$arity$1(inst_45344) : inst_45336.call(null,inst_45344));
var inst_45363 = cljs.core.not(inst_45362);
var inst_45364 = ((inst_45361) && (inst_45363));
var state_45384__$1 = state_45384;
var statearr_45434_46560 = state_45384__$1;
(statearr_45434_46560[(2)] = inst_45364);

(statearr_45434_46560[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (10))){
var inst_45286 = (state_45384[(8)]);
var inst_45307 = (state_45384[(2)]);
var inst_45308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45307,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45307,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45307,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45311 = inst_45286;
var state_45384__$1 = (function (){var statearr_45435 = state_45384;
(statearr_45435[(16)] = inst_45308);

(statearr_45435[(17)] = inst_45309);

(statearr_45435[(18)] = inst_45310);

(statearr_45435[(7)] = inst_45311);

return statearr_45435;
})();
var statearr_45436_46565 = state_45384__$1;
(statearr_45436_46565[(2)] = null);

(statearr_45436_46565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (18))){
var inst_45326 = (state_45384[(2)]);
var state_45384__$1 = state_45384;
var statearr_45437_46566 = state_45384__$1;
(statearr_45437_46566[(2)] = inst_45326);

(statearr_45437_46566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (37))){
var state_45384__$1 = state_45384;
var statearr_45438_46569 = state_45384__$1;
(statearr_45438_46569[(2)] = null);

(statearr_45438_46569[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45385 === (8))){
var inst_45286 = (state_45384[(8)]);
var inst_45304 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45286);
var state_45384__$1 = state_45384;
var statearr_45439_46570 = state_45384__$1;
(statearr_45439_46570[(2)] = inst_45304);

(statearr_45439_46570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44056__auto__,c__44156__auto___46494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44057__auto__ = null;
var cljs$core$async$mix_$_state_machine__44057__auto____0 = (function (){
var statearr_45440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45440[(0)] = cljs$core$async$mix_$_state_machine__44057__auto__);

(statearr_45440[(1)] = (1));

return statearr_45440;
});
var cljs$core$async$mix_$_state_machine__44057__auto____1 = (function (state_45384){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45384);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45441){var ex__44060__auto__ = e45441;
var statearr_45442_46571 = state_45384;
(statearr_45442_46571[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45384[(4)]))){
var statearr_45443_46572 = state_45384;
(statearr_45443_46572[(1)] = cljs.core.first((state_45384[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46573 = state_45384;
state_45384 = G__46573;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44057__auto__ = function(state_45384){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44057__auto____1.call(this,state_45384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44057__auto____0;
cljs$core$async$mix_$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44057__auto____1;
return cljs$core$async$mix_$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44158__auto__ = (function (){var statearr_45444 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45444[(6)] = c__44156__auto___46494);

return statearr_45444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45446 = arguments.length;
switch (G__45446) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45449 = arguments.length;
switch (G__45449) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__45447_SHARP_){
if(cljs.core.truth_((p1__45447_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45447_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45447_SHARP_.call(null,topic)))){
return p1__45447_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45447_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45450 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45451){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45451 = meta45451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45452,meta45451__$1){
var self__ = this;
var _45452__$1 = this;
return (new cljs.core.async.t_cljs$core$async45450(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45451__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45452){
var self__ = this;
var _45452__$1 = this;
return self__.meta45451;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45451","meta45451",531257269,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45450";

cljs.core.async.t_cljs$core$async45450.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45450");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45450.
 */
cljs.core.async.__GT_t_cljs$core$async45450 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45450(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45451){
return (new cljs.core.async.t_cljs$core$async45450(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45451));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45450(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44156__auto___46603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46603,mults,ensure_mult,p){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46603,mults,ensure_mult,p){
return (function (state_45524){
var state_val_45525 = (state_45524[(1)]);
if((state_val_45525 === (7))){
var inst_45520 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
var statearr_45526_46604 = state_45524__$1;
(statearr_45526_46604[(2)] = inst_45520);

(statearr_45526_46604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (20))){
var state_45524__$1 = state_45524;
var statearr_45527_46605 = state_45524__$1;
(statearr_45527_46605[(2)] = null);

(statearr_45527_46605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (1))){
var state_45524__$1 = state_45524;
var statearr_45528_46612 = state_45524__$1;
(statearr_45528_46612[(2)] = null);

(statearr_45528_46612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (24))){
var inst_45503 = (state_45524[(7)]);
var inst_45512 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45503);
var state_45524__$1 = state_45524;
var statearr_45529_46613 = state_45524__$1;
(statearr_45529_46613[(2)] = inst_45512);

(statearr_45529_46613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (4))){
var inst_45455 = (state_45524[(8)]);
var inst_45455__$1 = (state_45524[(2)]);
var inst_45456 = (inst_45455__$1 == null);
var state_45524__$1 = (function (){var statearr_45530 = state_45524;
(statearr_45530[(8)] = inst_45455__$1);

return statearr_45530;
})();
if(cljs.core.truth_(inst_45456)){
var statearr_45531_46614 = state_45524__$1;
(statearr_45531_46614[(1)] = (5));

} else {
var statearr_45532_46615 = state_45524__$1;
(statearr_45532_46615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (15))){
var inst_45497 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
var statearr_45533_46616 = state_45524__$1;
(statearr_45533_46616[(2)] = inst_45497);

(statearr_45533_46616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (21))){
var inst_45517 = (state_45524[(2)]);
var state_45524__$1 = (function (){var statearr_45534 = state_45524;
(statearr_45534[(9)] = inst_45517);

return statearr_45534;
})();
var statearr_45535_46617 = state_45524__$1;
(statearr_45535_46617[(2)] = null);

(statearr_45535_46617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (13))){
var inst_45479 = (state_45524[(10)]);
var inst_45481 = cljs.core.chunked_seq_QMARK_(inst_45479);
var state_45524__$1 = state_45524;
if(inst_45481){
var statearr_45536_46618 = state_45524__$1;
(statearr_45536_46618[(1)] = (16));

} else {
var statearr_45537_46619 = state_45524__$1;
(statearr_45537_46619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (22))){
var inst_45509 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
if(cljs.core.truth_(inst_45509)){
var statearr_45538_46620 = state_45524__$1;
(statearr_45538_46620[(1)] = (23));

} else {
var statearr_45539_46621 = state_45524__$1;
(statearr_45539_46621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (6))){
var inst_45505 = (state_45524[(11)]);
var inst_45455 = (state_45524[(8)]);
var inst_45503 = (state_45524[(7)]);
var inst_45503__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45455) : topic_fn.call(null,inst_45455));
var inst_45504 = cljs.core.deref(mults);
var inst_45505__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45504,inst_45503__$1);
var state_45524__$1 = (function (){var statearr_45540 = state_45524;
(statearr_45540[(11)] = inst_45505__$1);

(statearr_45540[(7)] = inst_45503__$1);

return statearr_45540;
})();
if(cljs.core.truth_(inst_45505__$1)){
var statearr_45541_46622 = state_45524__$1;
(statearr_45541_46622[(1)] = (19));

} else {
var statearr_45542_46623 = state_45524__$1;
(statearr_45542_46623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (25))){
var inst_45514 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
var statearr_45543_46624 = state_45524__$1;
(statearr_45543_46624[(2)] = inst_45514);

(statearr_45543_46624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (17))){
var inst_45479 = (state_45524[(10)]);
var inst_45488 = cljs.core.first(inst_45479);
var inst_45489 = cljs.core.async.muxch_STAR_(inst_45488);
var inst_45490 = cljs.core.async.close_BANG_(inst_45489);
var inst_45491 = cljs.core.next(inst_45479);
var inst_45465 = inst_45491;
var inst_45466 = null;
var inst_45467 = (0);
var inst_45468 = (0);
var state_45524__$1 = (function (){var statearr_45544 = state_45524;
(statearr_45544[(12)] = inst_45467);

(statearr_45544[(13)] = inst_45490);

(statearr_45544[(14)] = inst_45468);

(statearr_45544[(15)] = inst_45466);

(statearr_45544[(16)] = inst_45465);

return statearr_45544;
})();
var statearr_45545_46631 = state_45524__$1;
(statearr_45545_46631[(2)] = null);

(statearr_45545_46631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (3))){
var inst_45522 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45524__$1,inst_45522);
} else {
if((state_val_45525 === (12))){
var inst_45499 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
var statearr_45546_46632 = state_45524__$1;
(statearr_45546_46632[(2)] = inst_45499);

(statearr_45546_46632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (2))){
var state_45524__$1 = state_45524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45524__$1,(4),ch);
} else {
if((state_val_45525 === (23))){
var state_45524__$1 = state_45524;
var statearr_45547_46633 = state_45524__$1;
(statearr_45547_46633[(2)] = null);

(statearr_45547_46633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (19))){
var inst_45505 = (state_45524[(11)]);
var inst_45455 = (state_45524[(8)]);
var inst_45507 = cljs.core.async.muxch_STAR_(inst_45505);
var state_45524__$1 = state_45524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45524__$1,(22),inst_45507,inst_45455);
} else {
if((state_val_45525 === (11))){
var inst_45479 = (state_45524[(10)]);
var inst_45465 = (state_45524[(16)]);
var inst_45479__$1 = cljs.core.seq(inst_45465);
var state_45524__$1 = (function (){var statearr_45548 = state_45524;
(statearr_45548[(10)] = inst_45479__$1);

return statearr_45548;
})();
if(inst_45479__$1){
var statearr_45549_46634 = state_45524__$1;
(statearr_45549_46634[(1)] = (13));

} else {
var statearr_45550_46635 = state_45524__$1;
(statearr_45550_46635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (9))){
var inst_45501 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
var statearr_45551_46636 = state_45524__$1;
(statearr_45551_46636[(2)] = inst_45501);

(statearr_45551_46636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (5))){
var inst_45462 = cljs.core.deref(mults);
var inst_45463 = cljs.core.vals(inst_45462);
var inst_45464 = cljs.core.seq(inst_45463);
var inst_45465 = inst_45464;
var inst_45466 = null;
var inst_45467 = (0);
var inst_45468 = (0);
var state_45524__$1 = (function (){var statearr_45552 = state_45524;
(statearr_45552[(12)] = inst_45467);

(statearr_45552[(14)] = inst_45468);

(statearr_45552[(15)] = inst_45466);

(statearr_45552[(16)] = inst_45465);

return statearr_45552;
})();
var statearr_45553_46637 = state_45524__$1;
(statearr_45553_46637[(2)] = null);

(statearr_45553_46637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (14))){
var state_45524__$1 = state_45524;
var statearr_45557_46638 = state_45524__$1;
(statearr_45557_46638[(2)] = null);

(statearr_45557_46638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (16))){
var inst_45479 = (state_45524[(10)]);
var inst_45483 = cljs.core.chunk_first(inst_45479);
var inst_45484 = cljs.core.chunk_rest(inst_45479);
var inst_45485 = cljs.core.count(inst_45483);
var inst_45465 = inst_45484;
var inst_45466 = inst_45483;
var inst_45467 = inst_45485;
var inst_45468 = (0);
var state_45524__$1 = (function (){var statearr_45558 = state_45524;
(statearr_45558[(12)] = inst_45467);

(statearr_45558[(14)] = inst_45468);

(statearr_45558[(15)] = inst_45466);

(statearr_45558[(16)] = inst_45465);

return statearr_45558;
})();
var statearr_45559_46639 = state_45524__$1;
(statearr_45559_46639[(2)] = null);

(statearr_45559_46639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (10))){
var inst_45467 = (state_45524[(12)]);
var inst_45468 = (state_45524[(14)]);
var inst_45466 = (state_45524[(15)]);
var inst_45465 = (state_45524[(16)]);
var inst_45473 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45466,inst_45468);
var inst_45474 = cljs.core.async.muxch_STAR_(inst_45473);
var inst_45475 = cljs.core.async.close_BANG_(inst_45474);
var inst_45476 = (inst_45468 + (1));
var tmp45554 = inst_45467;
var tmp45555 = inst_45466;
var tmp45556 = inst_45465;
var inst_45465__$1 = tmp45556;
var inst_45466__$1 = tmp45555;
var inst_45467__$1 = tmp45554;
var inst_45468__$1 = inst_45476;
var state_45524__$1 = (function (){var statearr_45560 = state_45524;
(statearr_45560[(12)] = inst_45467__$1);

(statearr_45560[(17)] = inst_45475);

(statearr_45560[(14)] = inst_45468__$1);

(statearr_45560[(15)] = inst_45466__$1);

(statearr_45560[(16)] = inst_45465__$1);

return statearr_45560;
})();
var statearr_45561_46640 = state_45524__$1;
(statearr_45561_46640[(2)] = null);

(statearr_45561_46640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (18))){
var inst_45494 = (state_45524[(2)]);
var state_45524__$1 = state_45524;
var statearr_45562_46641 = state_45524__$1;
(statearr_45562_46641[(2)] = inst_45494);

(statearr_45562_46641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45525 === (8))){
var inst_45467 = (state_45524[(12)]);
var inst_45468 = (state_45524[(14)]);
var inst_45470 = (inst_45468 < inst_45467);
var inst_45471 = inst_45470;
var state_45524__$1 = state_45524;
if(cljs.core.truth_(inst_45471)){
var statearr_45563_46642 = state_45524__$1;
(statearr_45563_46642[(1)] = (10));

} else {
var statearr_45564_46643 = state_45524__$1;
(statearr_45564_46643[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46603,mults,ensure_mult,p))
;
return ((function (switch__44056__auto__,c__44156__auto___46603,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_45565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45565[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_45565[(1)] = (1));

return statearr_45565;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_45524){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45524);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45566){var ex__44060__auto__ = e45566;
var statearr_45567_46644 = state_45524;
(statearr_45567_46644[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45524[(4)]))){
var statearr_45568_46645 = state_45524;
(statearr_45568_46645[(1)] = cljs.core.first((state_45524[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46646 = state_45524;
state_45524 = G__46646;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_45524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_45524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46603,mults,ensure_mult,p))
})();
var state__44158__auto__ = (function (){var statearr_45569 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45569[(6)] = c__44156__auto___46603);

return statearr_45569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46603,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45571 = arguments.length;
switch (G__45571) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45573 = arguments.length;
switch (G__45573) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45575 = arguments.length;
switch (G__45575) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44156__auto___46658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45618){
var state_val_45619 = (state_45618[(1)]);
if((state_val_45619 === (7))){
var state_45618__$1 = state_45618;
var statearr_45620_46661 = state_45618__$1;
(statearr_45620_46661[(2)] = null);

(statearr_45620_46661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (1))){
var state_45618__$1 = state_45618;
var statearr_45621_46662 = state_45618__$1;
(statearr_45621_46662[(2)] = null);

(statearr_45621_46662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (4))){
var inst_45579 = (state_45618[(7)]);
var inst_45578 = (state_45618[(8)]);
var inst_45581 = (inst_45579 < inst_45578);
var state_45618__$1 = state_45618;
if(cljs.core.truth_(inst_45581)){
var statearr_45622_46663 = state_45618__$1;
(statearr_45622_46663[(1)] = (6));

} else {
var statearr_45623_46664 = state_45618__$1;
(statearr_45623_46664[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (15))){
var inst_45604 = (state_45618[(9)]);
var inst_45609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45604);
var state_45618__$1 = state_45618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45618__$1,(17),out,inst_45609);
} else {
if((state_val_45619 === (13))){
var inst_45604 = (state_45618[(9)]);
var inst_45604__$1 = (state_45618[(2)]);
var inst_45605 = cljs.core.some(cljs.core.nil_QMARK_,inst_45604__$1);
var state_45618__$1 = (function (){var statearr_45624 = state_45618;
(statearr_45624[(9)] = inst_45604__$1);

return statearr_45624;
})();
if(cljs.core.truth_(inst_45605)){
var statearr_45625_46665 = state_45618__$1;
(statearr_45625_46665[(1)] = (14));

} else {
var statearr_45626_46666 = state_45618__$1;
(statearr_45626_46666[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (6))){
var state_45618__$1 = state_45618;
var statearr_45627_46668 = state_45618__$1;
(statearr_45627_46668[(2)] = null);

(statearr_45627_46668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (17))){
var inst_45611 = (state_45618[(2)]);
var state_45618__$1 = (function (){var statearr_45629 = state_45618;
(statearr_45629[(10)] = inst_45611);

return statearr_45629;
})();
var statearr_45630_46670 = state_45618__$1;
(statearr_45630_46670[(2)] = null);

(statearr_45630_46670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (3))){
var inst_45616 = (state_45618[(2)]);
var state_45618__$1 = state_45618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45618__$1,inst_45616);
} else {
if((state_val_45619 === (12))){
var _ = (function (){var statearr_45631 = state_45618;
(statearr_45631[(4)] = cljs.core.rest((state_45618[(4)])));

return statearr_45631;
})();
var state_45618__$1 = state_45618;
var ex45628 = (state_45618__$1[(2)]);
var statearr_45632_46671 = state_45618__$1;
(statearr_45632_46671[(5)] = ex45628);


if((ex45628 instanceof Object)){
var statearr_45633_46672 = state_45618__$1;
(statearr_45633_46672[(1)] = (11));

(statearr_45633_46672[(5)] = null);

} else {
throw ex45628;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (2))){
var inst_45577 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45578 = cnt;
var inst_45579 = (0);
var state_45618__$1 = (function (){var statearr_45634 = state_45618;
(statearr_45634[(7)] = inst_45579);

(statearr_45634[(8)] = inst_45578);

(statearr_45634[(11)] = inst_45577);

return statearr_45634;
})();
var statearr_45635_46673 = state_45618__$1;
(statearr_45635_46673[(2)] = null);

(statearr_45635_46673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (11))){
var inst_45583 = (state_45618[(2)]);
var inst_45584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45618__$1 = (function (){var statearr_45636 = state_45618;
(statearr_45636[(12)] = inst_45583);

return statearr_45636;
})();
var statearr_45637_46674 = state_45618__$1;
(statearr_45637_46674[(2)] = inst_45584);

(statearr_45637_46674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (9))){
var inst_45579 = (state_45618[(7)]);
var _ = (function (){var statearr_45638 = state_45618;
(statearr_45638[(4)] = cljs.core.cons((12),(state_45618[(4)])));

return statearr_45638;
})();
var inst_45590 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45579) : chs__$1.call(null,inst_45579));
var inst_45591 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45579) : done.call(null,inst_45579));
var inst_45592 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45590,inst_45591);
var ___$1 = (function (){var statearr_45639 = state_45618;
(statearr_45639[(4)] = cljs.core.rest((state_45618[(4)])));

return statearr_45639;
})();
var state_45618__$1 = state_45618;
var statearr_45640_46675 = state_45618__$1;
(statearr_45640_46675[(2)] = inst_45592);

(statearr_45640_46675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (5))){
var inst_45602 = (state_45618[(2)]);
var state_45618__$1 = (function (){var statearr_45641 = state_45618;
(statearr_45641[(13)] = inst_45602);

return statearr_45641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45618__$1,(13),dchan);
} else {
if((state_val_45619 === (14))){
var inst_45607 = cljs.core.async.close_BANG_(out);
var state_45618__$1 = state_45618;
var statearr_45642_46676 = state_45618__$1;
(statearr_45642_46676[(2)] = inst_45607);

(statearr_45642_46676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (16))){
var inst_45614 = (state_45618[(2)]);
var state_45618__$1 = state_45618;
var statearr_45643_46678 = state_45618__$1;
(statearr_45643_46678[(2)] = inst_45614);

(statearr_45643_46678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (10))){
var inst_45579 = (state_45618[(7)]);
var inst_45595 = (state_45618[(2)]);
var inst_45596 = (inst_45579 + (1));
var inst_45579__$1 = inst_45596;
var state_45618__$1 = (function (){var statearr_45644 = state_45618;
(statearr_45644[(7)] = inst_45579__$1);

(statearr_45644[(14)] = inst_45595);

return statearr_45644;
})();
var statearr_45645_46680 = state_45618__$1;
(statearr_45645_46680[(2)] = null);

(statearr_45645_46680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45619 === (8))){
var inst_45600 = (state_45618[(2)]);
var state_45618__$1 = state_45618;
var statearr_45646_46681 = state_45618__$1;
(statearr_45646_46681[(2)] = inst_45600);

(statearr_45646_46681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46658,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44056__auto__,c__44156__auto___46658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_45647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45647[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_45647[(1)] = (1));

return statearr_45647;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_45618){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45618);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45648){var ex__44060__auto__ = e45648;
var statearr_45649_46682 = state_45618;
(statearr_45649_46682[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45618[(4)]))){
var statearr_45650_46683 = state_45618;
(statearr_45650_46683[(1)] = cljs.core.first((state_45618[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46684 = state_45618;
state_45618 = G__46684;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_45618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_45618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46658,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44158__auto__ = (function (){var statearr_45651 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45651[(6)] = c__44156__auto___46658);

return statearr_45651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46658,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45654 = arguments.length;
switch (G__45654) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44156__auto___46686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46686,out){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46686,out){
return (function (state_45686){
var state_val_45687 = (state_45686[(1)]);
if((state_val_45687 === (7))){
var inst_45666 = (state_45686[(7)]);
var inst_45665 = (state_45686[(8)]);
var inst_45665__$1 = (state_45686[(2)]);
var inst_45666__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45665__$1,(0),null);
var inst_45667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45665__$1,(1),null);
var inst_45668 = (inst_45666__$1 == null);
var state_45686__$1 = (function (){var statearr_45688 = state_45686;
(statearr_45688[(7)] = inst_45666__$1);

(statearr_45688[(8)] = inst_45665__$1);

(statearr_45688[(9)] = inst_45667);

return statearr_45688;
})();
if(cljs.core.truth_(inst_45668)){
var statearr_45689_46687 = state_45686__$1;
(statearr_45689_46687[(1)] = (8));

} else {
var statearr_45690_46688 = state_45686__$1;
(statearr_45690_46688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (1))){
var inst_45655 = cljs.core.vec(chs);
var inst_45656 = inst_45655;
var state_45686__$1 = (function (){var statearr_45691 = state_45686;
(statearr_45691[(10)] = inst_45656);

return statearr_45691;
})();
var statearr_45692_46689 = state_45686__$1;
(statearr_45692_46689[(2)] = null);

(statearr_45692_46689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (4))){
var inst_45656 = (state_45686[(10)]);
var state_45686__$1 = state_45686;
return cljs.core.async.ioc_alts_BANG_(state_45686__$1,(7),inst_45656);
} else {
if((state_val_45687 === (6))){
var inst_45682 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
var statearr_45693_46690 = state_45686__$1;
(statearr_45693_46690[(2)] = inst_45682);

(statearr_45693_46690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (3))){
var inst_45684 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45686__$1,inst_45684);
} else {
if((state_val_45687 === (2))){
var inst_45656 = (state_45686[(10)]);
var inst_45658 = cljs.core.count(inst_45656);
var inst_45659 = (inst_45658 > (0));
var state_45686__$1 = state_45686;
if(cljs.core.truth_(inst_45659)){
var statearr_45695_46692 = state_45686__$1;
(statearr_45695_46692[(1)] = (4));

} else {
var statearr_45696_46693 = state_45686__$1;
(statearr_45696_46693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (11))){
var inst_45656 = (state_45686[(10)]);
var inst_45675 = (state_45686[(2)]);
var tmp45694 = inst_45656;
var inst_45656__$1 = tmp45694;
var state_45686__$1 = (function (){var statearr_45697 = state_45686;
(statearr_45697[(10)] = inst_45656__$1);

(statearr_45697[(11)] = inst_45675);

return statearr_45697;
})();
var statearr_45698_46694 = state_45686__$1;
(statearr_45698_46694[(2)] = null);

(statearr_45698_46694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (9))){
var inst_45666 = (state_45686[(7)]);
var state_45686__$1 = state_45686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45686__$1,(11),out,inst_45666);
} else {
if((state_val_45687 === (5))){
var inst_45680 = cljs.core.async.close_BANG_(out);
var state_45686__$1 = state_45686;
var statearr_45699_46699 = state_45686__$1;
(statearr_45699_46699[(2)] = inst_45680);

(statearr_45699_46699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (10))){
var inst_45678 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
var statearr_45700_46700 = state_45686__$1;
(statearr_45700_46700[(2)] = inst_45678);

(statearr_45700_46700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (8))){
var inst_45666 = (state_45686[(7)]);
var inst_45656 = (state_45686[(10)]);
var inst_45665 = (state_45686[(8)]);
var inst_45667 = (state_45686[(9)]);
var inst_45670 = (function (){var cs = inst_45656;
var vec__45661 = inst_45665;
var v = inst_45666;
var c = inst_45667;
return ((function (cs,vec__45661,v,c,inst_45666,inst_45656,inst_45665,inst_45667,state_val_45687,c__44156__auto___46686,out){
return (function (p1__45652_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45652_SHARP_);
});
;})(cs,vec__45661,v,c,inst_45666,inst_45656,inst_45665,inst_45667,state_val_45687,c__44156__auto___46686,out))
})();
var inst_45671 = cljs.core.filterv(inst_45670,inst_45656);
var inst_45656__$1 = inst_45671;
var state_45686__$1 = (function (){var statearr_45701 = state_45686;
(statearr_45701[(10)] = inst_45656__$1);

return statearr_45701;
})();
var statearr_45702_46701 = state_45686__$1;
(statearr_45702_46701[(2)] = null);

(statearr_45702_46701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46686,out))
;
return ((function (switch__44056__auto__,c__44156__auto___46686,out){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_45703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45703[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_45703[(1)] = (1));

return statearr_45703;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_45686){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45686);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45704){var ex__44060__auto__ = e45704;
var statearr_45705_46702 = state_45686;
(statearr_45705_46702[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45686[(4)]))){
var statearr_45706_46703 = state_45686;
(statearr_45706_46703[(1)] = cljs.core.first((state_45686[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46704 = state_45686;
state_45686 = G__46704;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_45686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_45686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46686,out))
})();
var state__44158__auto__ = (function (){var statearr_45707 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45707[(6)] = c__44156__auto___46686);

return statearr_45707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46686,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45709 = arguments.length;
switch (G__45709) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44156__auto___46706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46706,out){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46706,out){
return (function (state_45733){
var state_val_45734 = (state_45733[(1)]);
if((state_val_45734 === (7))){
var inst_45715 = (state_45733[(7)]);
var inst_45715__$1 = (state_45733[(2)]);
var inst_45716 = (inst_45715__$1 == null);
var inst_45717 = cljs.core.not(inst_45716);
var state_45733__$1 = (function (){var statearr_45735 = state_45733;
(statearr_45735[(7)] = inst_45715__$1);

return statearr_45735;
})();
if(inst_45717){
var statearr_45736_46714 = state_45733__$1;
(statearr_45736_46714[(1)] = (8));

} else {
var statearr_45737_46715 = state_45733__$1;
(statearr_45737_46715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (1))){
var inst_45710 = (0);
var state_45733__$1 = (function (){var statearr_45738 = state_45733;
(statearr_45738[(8)] = inst_45710);

return statearr_45738;
})();
var statearr_45739_46716 = state_45733__$1;
(statearr_45739_46716[(2)] = null);

(statearr_45739_46716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (4))){
var state_45733__$1 = state_45733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45733__$1,(7),ch);
} else {
if((state_val_45734 === (6))){
var inst_45728 = (state_45733[(2)]);
var state_45733__$1 = state_45733;
var statearr_45740_46720 = state_45733__$1;
(statearr_45740_46720[(2)] = inst_45728);

(statearr_45740_46720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (3))){
var inst_45730 = (state_45733[(2)]);
var inst_45731 = cljs.core.async.close_BANG_(out);
var state_45733__$1 = (function (){var statearr_45741 = state_45733;
(statearr_45741[(9)] = inst_45730);

return statearr_45741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45733__$1,inst_45731);
} else {
if((state_val_45734 === (2))){
var inst_45710 = (state_45733[(8)]);
var inst_45712 = (inst_45710 < n);
var state_45733__$1 = state_45733;
if(cljs.core.truth_(inst_45712)){
var statearr_45742_46724 = state_45733__$1;
(statearr_45742_46724[(1)] = (4));

} else {
var statearr_45743_46725 = state_45733__$1;
(statearr_45743_46725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (11))){
var inst_45710 = (state_45733[(8)]);
var inst_45720 = (state_45733[(2)]);
var inst_45721 = (inst_45710 + (1));
var inst_45710__$1 = inst_45721;
var state_45733__$1 = (function (){var statearr_45744 = state_45733;
(statearr_45744[(8)] = inst_45710__$1);

(statearr_45744[(10)] = inst_45720);

return statearr_45744;
})();
var statearr_45745_46726 = state_45733__$1;
(statearr_45745_46726[(2)] = null);

(statearr_45745_46726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (9))){
var state_45733__$1 = state_45733;
var statearr_45746_46727 = state_45733__$1;
(statearr_45746_46727[(2)] = null);

(statearr_45746_46727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (5))){
var state_45733__$1 = state_45733;
var statearr_45747_46731 = state_45733__$1;
(statearr_45747_46731[(2)] = null);

(statearr_45747_46731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (10))){
var inst_45725 = (state_45733[(2)]);
var state_45733__$1 = state_45733;
var statearr_45748_46732 = state_45733__$1;
(statearr_45748_46732[(2)] = inst_45725);

(statearr_45748_46732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45734 === (8))){
var inst_45715 = (state_45733[(7)]);
var state_45733__$1 = state_45733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45733__$1,(11),out,inst_45715);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46706,out))
;
return ((function (switch__44056__auto__,c__44156__auto___46706,out){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_45749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45749[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_45749[(1)] = (1));

return statearr_45749;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_45733){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45733);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45750){var ex__44060__auto__ = e45750;
var statearr_45751_46737 = state_45733;
(statearr_45751_46737[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45733[(4)]))){
var statearr_45752_46738 = state_45733;
(statearr_45752_46738[(1)] = cljs.core.first((state_45733[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46739 = state_45733;
state_45733 = G__46739;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_45733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_45733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46706,out))
})();
var state__44158__auto__ = (function (){var statearr_45753 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45753[(6)] = c__44156__auto___46706);

return statearr_45753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46706,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45755 = (function (f,ch,meta45756){
this.f = f;
this.ch = ch;
this.meta45756 = meta45756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45757,meta45756__$1){
var self__ = this;
var _45757__$1 = this;
return (new cljs.core.async.t_cljs$core$async45755(self__.f,self__.ch,meta45756__$1));
});

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45757){
var self__ = this;
var _45757__$1 = this;
return self__.meta45756;
});

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45758 = (function (f,ch,meta45756,_,fn1,meta45759){
this.f = f;
this.ch = ch;
this.meta45756 = meta45756;
this._ = _;
this.fn1 = fn1;
this.meta45759 = meta45759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45760,meta45759__$1){
var self__ = this;
var _45760__$1 = this;
return (new cljs.core.async.t_cljs$core$async45758(self__.f,self__.ch,self__.meta45756,self__._,self__.fn1,meta45759__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45760){
var self__ = this;
var _45760__$1 = this;
return self__.meta45759;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45758.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45754_SHARP_){
var G__45761 = (((p1__45754_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45754_SHARP_) : self__.f.call(null,p1__45754_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45761) : f1.call(null,G__45761));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45758.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45756","meta45756",2124404334,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45755","cljs.core.async/t_cljs$core$async45755",-474016292,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45759","meta45759",-548788208,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45758";

cljs.core.async.t_cljs$core$async45758.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45758");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45758.
 */
cljs.core.async.__GT_t_cljs$core$async45758 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45758(f__$1,ch__$1,meta45756__$1,___$2,fn1__$1,meta45759){
return (new cljs.core.async.t_cljs$core$async45758(f__$1,ch__$1,meta45756__$1,___$2,fn1__$1,meta45759));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45758(self__.f,self__.ch,self__.meta45756,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45762 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45762) : self__.f.call(null,G__45762));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45755.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45756","meta45756",2124404334,null)], null);
});

cljs.core.async.t_cljs$core$async45755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45755";

cljs.core.async.t_cljs$core$async45755.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45755");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45755.
 */
cljs.core.async.__GT_t_cljs$core$async45755 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45755(f__$1,ch__$1,meta45756){
return (new cljs.core.async.t_cljs$core$async45755(f__$1,ch__$1,meta45756));
});

}

return (new cljs.core.async.t_cljs$core$async45755(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45763 = (function (f,ch,meta45764){
this.f = f;
this.ch = ch;
this.meta45764 = meta45764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45765,meta45764__$1){
var self__ = this;
var _45765__$1 = this;
return (new cljs.core.async.t_cljs$core$async45763(self__.f,self__.ch,meta45764__$1));
});

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45765){
var self__ = this;
var _45765__$1 = this;
return self__.meta45764;
});

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async45763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45764","meta45764",946375508,null)], null);
});

cljs.core.async.t_cljs$core$async45763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45763";

cljs.core.async.t_cljs$core$async45763.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45763");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45763.
 */
cljs.core.async.__GT_t_cljs$core$async45763 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45763(f__$1,ch__$1,meta45764){
return (new cljs.core.async.t_cljs$core$async45763(f__$1,ch__$1,meta45764));
});

}

return (new cljs.core.async.t_cljs$core$async45763(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45766 = (function (p,ch,meta45767){
this.p = p;
this.ch = ch;
this.meta45767 = meta45767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45768,meta45767__$1){
var self__ = this;
var _45768__$1 = this;
return (new cljs.core.async.t_cljs$core$async45766(self__.p,self__.ch,meta45767__$1));
});

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45768){
var self__ = this;
var _45768__$1 = this;
return self__.meta45767;
});

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45766.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45767","meta45767",1700878799,null)], null);
});

cljs.core.async.t_cljs$core$async45766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45766";

cljs.core.async.t_cljs$core$async45766.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45766");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45766.
 */
cljs.core.async.__GT_t_cljs$core$async45766 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45766(p__$1,ch__$1,meta45767){
return (new cljs.core.async.t_cljs$core$async45766(p__$1,ch__$1,meta45767));
});

}

return (new cljs.core.async.t_cljs$core$async45766(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45770 = arguments.length;
switch (G__45770) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44156__auto___46757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46757,out){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46757,out){
return (function (state_45791){
var state_val_45792 = (state_45791[(1)]);
if((state_val_45792 === (7))){
var inst_45787 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
var statearr_45793_46762 = state_45791__$1;
(statearr_45793_46762[(2)] = inst_45787);

(statearr_45793_46762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (1))){
var state_45791__$1 = state_45791;
var statearr_45794_46763 = state_45791__$1;
(statearr_45794_46763[(2)] = null);

(statearr_45794_46763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (4))){
var inst_45773 = (state_45791[(7)]);
var inst_45773__$1 = (state_45791[(2)]);
var inst_45774 = (inst_45773__$1 == null);
var state_45791__$1 = (function (){var statearr_45795 = state_45791;
(statearr_45795[(7)] = inst_45773__$1);

return statearr_45795;
})();
if(cljs.core.truth_(inst_45774)){
var statearr_45796_46765 = state_45791__$1;
(statearr_45796_46765[(1)] = (5));

} else {
var statearr_45797_46766 = state_45791__$1;
(statearr_45797_46766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (6))){
var inst_45773 = (state_45791[(7)]);
var inst_45778 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45773) : p.call(null,inst_45773));
var state_45791__$1 = state_45791;
if(cljs.core.truth_(inst_45778)){
var statearr_45798_46767 = state_45791__$1;
(statearr_45798_46767[(1)] = (8));

} else {
var statearr_45799_46768 = state_45791__$1;
(statearr_45799_46768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (3))){
var inst_45789 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45791__$1,inst_45789);
} else {
if((state_val_45792 === (2))){
var state_45791__$1 = state_45791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45791__$1,(4),ch);
} else {
if((state_val_45792 === (11))){
var inst_45781 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
var statearr_45800_46769 = state_45791__$1;
(statearr_45800_46769[(2)] = inst_45781);

(statearr_45800_46769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (9))){
var state_45791__$1 = state_45791;
var statearr_45801_46770 = state_45791__$1;
(statearr_45801_46770[(2)] = null);

(statearr_45801_46770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (5))){
var inst_45776 = cljs.core.async.close_BANG_(out);
var state_45791__$1 = state_45791;
var statearr_45802_46771 = state_45791__$1;
(statearr_45802_46771[(2)] = inst_45776);

(statearr_45802_46771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (10))){
var inst_45784 = (state_45791[(2)]);
var state_45791__$1 = (function (){var statearr_45803 = state_45791;
(statearr_45803[(8)] = inst_45784);

return statearr_45803;
})();
var statearr_45804_46773 = state_45791__$1;
(statearr_45804_46773[(2)] = null);

(statearr_45804_46773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (8))){
var inst_45773 = (state_45791[(7)]);
var state_45791__$1 = state_45791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45791__$1,(11),out,inst_45773);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46757,out))
;
return ((function (switch__44056__auto__,c__44156__auto___46757,out){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_45805 = [null,null,null,null,null,null,null,null,null];
(statearr_45805[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_45805[(1)] = (1));

return statearr_45805;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_45791){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45791);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45806){var ex__44060__auto__ = e45806;
var statearr_45807_46774 = state_45791;
(statearr_45807_46774[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45791[(4)]))){
var statearr_45808_46775 = state_45791;
(statearr_45808_46775[(1)] = cljs.core.first((state_45791[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46777 = state_45791;
state_45791 = G__46777;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_45791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_45791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46757,out))
})();
var state__44158__auto__ = (function (){var statearr_45809 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45809[(6)] = c__44156__auto___46757);

return statearr_45809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46757,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45811 = arguments.length;
switch (G__45811) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto__){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto__){
return (function (state_45873){
var state_val_45874 = (state_45873[(1)]);
if((state_val_45874 === (7))){
var inst_45869 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45875_46782 = state_45873__$1;
(statearr_45875_46782[(2)] = inst_45869);

(statearr_45875_46782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (20))){
var inst_45839 = (state_45873[(7)]);
var inst_45850 = (state_45873[(2)]);
var inst_45851 = cljs.core.next(inst_45839);
var inst_45825 = inst_45851;
var inst_45826 = null;
var inst_45827 = (0);
var inst_45828 = (0);
var state_45873__$1 = (function (){var statearr_45876 = state_45873;
(statearr_45876[(8)] = inst_45827);

(statearr_45876[(9)] = inst_45850);

(statearr_45876[(10)] = inst_45825);

(statearr_45876[(11)] = inst_45826);

(statearr_45876[(12)] = inst_45828);

return statearr_45876;
})();
var statearr_45877_46783 = state_45873__$1;
(statearr_45877_46783[(2)] = null);

(statearr_45877_46783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (1))){
var state_45873__$1 = state_45873;
var statearr_45878_46784 = state_45873__$1;
(statearr_45878_46784[(2)] = null);

(statearr_45878_46784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (4))){
var inst_45814 = (state_45873[(13)]);
var inst_45814__$1 = (state_45873[(2)]);
var inst_45815 = (inst_45814__$1 == null);
var state_45873__$1 = (function (){var statearr_45879 = state_45873;
(statearr_45879[(13)] = inst_45814__$1);

return statearr_45879;
})();
if(cljs.core.truth_(inst_45815)){
var statearr_45880_46785 = state_45873__$1;
(statearr_45880_46785[(1)] = (5));

} else {
var statearr_45881_46786 = state_45873__$1;
(statearr_45881_46786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (15))){
var state_45873__$1 = state_45873;
var statearr_45885_46787 = state_45873__$1;
(statearr_45885_46787[(2)] = null);

(statearr_45885_46787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (21))){
var state_45873__$1 = state_45873;
var statearr_45886_46788 = state_45873__$1;
(statearr_45886_46788[(2)] = null);

(statearr_45886_46788[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (13))){
var inst_45827 = (state_45873[(8)]);
var inst_45825 = (state_45873[(10)]);
var inst_45826 = (state_45873[(11)]);
var inst_45828 = (state_45873[(12)]);
var inst_45835 = (state_45873[(2)]);
var inst_45836 = (inst_45828 + (1));
var tmp45882 = inst_45827;
var tmp45883 = inst_45825;
var tmp45884 = inst_45826;
var inst_45825__$1 = tmp45883;
var inst_45826__$1 = tmp45884;
var inst_45827__$1 = tmp45882;
var inst_45828__$1 = inst_45836;
var state_45873__$1 = (function (){var statearr_45887 = state_45873;
(statearr_45887[(8)] = inst_45827__$1);

(statearr_45887[(14)] = inst_45835);

(statearr_45887[(10)] = inst_45825__$1);

(statearr_45887[(11)] = inst_45826__$1);

(statearr_45887[(12)] = inst_45828__$1);

return statearr_45887;
})();
var statearr_45888_46789 = state_45873__$1;
(statearr_45888_46789[(2)] = null);

(statearr_45888_46789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (22))){
var state_45873__$1 = state_45873;
var statearr_45889_46791 = state_45873__$1;
(statearr_45889_46791[(2)] = null);

(statearr_45889_46791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (6))){
var inst_45814 = (state_45873[(13)]);
var inst_45823 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45814) : f.call(null,inst_45814));
var inst_45824 = cljs.core.seq(inst_45823);
var inst_45825 = inst_45824;
var inst_45826 = null;
var inst_45827 = (0);
var inst_45828 = (0);
var state_45873__$1 = (function (){var statearr_45890 = state_45873;
(statearr_45890[(8)] = inst_45827);

(statearr_45890[(10)] = inst_45825);

(statearr_45890[(11)] = inst_45826);

(statearr_45890[(12)] = inst_45828);

return statearr_45890;
})();
var statearr_45891_46792 = state_45873__$1;
(statearr_45891_46792[(2)] = null);

(statearr_45891_46792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (17))){
var inst_45839 = (state_45873[(7)]);
var inst_45843 = cljs.core.chunk_first(inst_45839);
var inst_45844 = cljs.core.chunk_rest(inst_45839);
var inst_45845 = cljs.core.count(inst_45843);
var inst_45825 = inst_45844;
var inst_45826 = inst_45843;
var inst_45827 = inst_45845;
var inst_45828 = (0);
var state_45873__$1 = (function (){var statearr_45892 = state_45873;
(statearr_45892[(8)] = inst_45827);

(statearr_45892[(10)] = inst_45825);

(statearr_45892[(11)] = inst_45826);

(statearr_45892[(12)] = inst_45828);

return statearr_45892;
})();
var statearr_45893_46793 = state_45873__$1;
(statearr_45893_46793[(2)] = null);

(statearr_45893_46793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (3))){
var inst_45871 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45873__$1,inst_45871);
} else {
if((state_val_45874 === (12))){
var inst_45859 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45894_46794 = state_45873__$1;
(statearr_45894_46794[(2)] = inst_45859);

(statearr_45894_46794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (2))){
var state_45873__$1 = state_45873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45873__$1,(4),in$);
} else {
if((state_val_45874 === (23))){
var inst_45867 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45895_46802 = state_45873__$1;
(statearr_45895_46802[(2)] = inst_45867);

(statearr_45895_46802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (19))){
var inst_45854 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45896_46803 = state_45873__$1;
(statearr_45896_46803[(2)] = inst_45854);

(statearr_45896_46803[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (11))){
var inst_45825 = (state_45873[(10)]);
var inst_45839 = (state_45873[(7)]);
var inst_45839__$1 = cljs.core.seq(inst_45825);
var state_45873__$1 = (function (){var statearr_45897 = state_45873;
(statearr_45897[(7)] = inst_45839__$1);

return statearr_45897;
})();
if(inst_45839__$1){
var statearr_45898_46804 = state_45873__$1;
(statearr_45898_46804[(1)] = (14));

} else {
var statearr_45899_46805 = state_45873__$1;
(statearr_45899_46805[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (9))){
var inst_45861 = (state_45873[(2)]);
var inst_45862 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45873__$1 = (function (){var statearr_45900 = state_45873;
(statearr_45900[(15)] = inst_45861);

return statearr_45900;
})();
if(cljs.core.truth_(inst_45862)){
var statearr_45901_46806 = state_45873__$1;
(statearr_45901_46806[(1)] = (21));

} else {
var statearr_45902_46807 = state_45873__$1;
(statearr_45902_46807[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (5))){
var inst_45817 = cljs.core.async.close_BANG_(out);
var state_45873__$1 = state_45873;
var statearr_45903_46808 = state_45873__$1;
(statearr_45903_46808[(2)] = inst_45817);

(statearr_45903_46808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (14))){
var inst_45839 = (state_45873[(7)]);
var inst_45841 = cljs.core.chunked_seq_QMARK_(inst_45839);
var state_45873__$1 = state_45873;
if(inst_45841){
var statearr_45904_46809 = state_45873__$1;
(statearr_45904_46809[(1)] = (17));

} else {
var statearr_45905_46810 = state_45873__$1;
(statearr_45905_46810[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (16))){
var inst_45857 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45906_46811 = state_45873__$1;
(statearr_45906_46811[(2)] = inst_45857);

(statearr_45906_46811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (10))){
var inst_45826 = (state_45873[(11)]);
var inst_45828 = (state_45873[(12)]);
var inst_45833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45826,inst_45828);
var state_45873__$1 = state_45873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45873__$1,(13),out,inst_45833);
} else {
if((state_val_45874 === (18))){
var inst_45839 = (state_45873[(7)]);
var inst_45848 = cljs.core.first(inst_45839);
var state_45873__$1 = state_45873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45873__$1,(20),out,inst_45848);
} else {
if((state_val_45874 === (8))){
var inst_45827 = (state_45873[(8)]);
var inst_45828 = (state_45873[(12)]);
var inst_45830 = (inst_45828 < inst_45827);
var inst_45831 = inst_45830;
var state_45873__$1 = state_45873;
if(cljs.core.truth_(inst_45831)){
var statearr_45907_46812 = state_45873__$1;
(statearr_45907_46812[(1)] = (10));

} else {
var statearr_45908_46813 = state_45873__$1;
(statearr_45908_46813[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto__))
;
return ((function (switch__44056__auto__,c__44156__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44057__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44057__auto____0 = (function (){
var statearr_45909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45909[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44057__auto__);

(statearr_45909[(1)] = (1));

return statearr_45909;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44057__auto____1 = (function (state_45873){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45873);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45910){var ex__44060__auto__ = e45910;
var statearr_45911_46815 = state_45873;
(statearr_45911_46815[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45873[(4)]))){
var statearr_45912_46816 = state_45873;
(statearr_45912_46816[(1)] = cljs.core.first((state_45873[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46817 = state_45873;
state_45873 = G__46817;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44057__auto__ = function(state_45873){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44057__auto____1.call(this,state_45873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44057__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44057__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto__))
})();
var state__44158__auto__ = (function (){var statearr_45913 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45913[(6)] = c__44156__auto__);

return statearr_45913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto__))
);

return c__44156__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45915 = arguments.length;
switch (G__45915) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45917 = arguments.length;
switch (G__45917) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45919 = arguments.length;
switch (G__45919) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44156__auto___46829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46829,out){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46829,out){
return (function (state_45943){
var state_val_45944 = (state_45943[(1)]);
if((state_val_45944 === (7))){
var inst_45938 = (state_45943[(2)]);
var state_45943__$1 = state_45943;
var statearr_45945_46830 = state_45943__$1;
(statearr_45945_46830[(2)] = inst_45938);

(statearr_45945_46830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (1))){
var inst_45920 = null;
var state_45943__$1 = (function (){var statearr_45946 = state_45943;
(statearr_45946[(7)] = inst_45920);

return statearr_45946;
})();
var statearr_45947_46831 = state_45943__$1;
(statearr_45947_46831[(2)] = null);

(statearr_45947_46831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (4))){
var inst_45923 = (state_45943[(8)]);
var inst_45923__$1 = (state_45943[(2)]);
var inst_45924 = (inst_45923__$1 == null);
var inst_45925 = cljs.core.not(inst_45924);
var state_45943__$1 = (function (){var statearr_45948 = state_45943;
(statearr_45948[(8)] = inst_45923__$1);

return statearr_45948;
})();
if(inst_45925){
var statearr_45949_46832 = state_45943__$1;
(statearr_45949_46832[(1)] = (5));

} else {
var statearr_45950_46833 = state_45943__$1;
(statearr_45950_46833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (6))){
var state_45943__$1 = state_45943;
var statearr_45951_46834 = state_45943__$1;
(statearr_45951_46834[(2)] = null);

(statearr_45951_46834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (3))){
var inst_45940 = (state_45943[(2)]);
var inst_45941 = cljs.core.async.close_BANG_(out);
var state_45943__$1 = (function (){var statearr_45952 = state_45943;
(statearr_45952[(9)] = inst_45940);

return statearr_45952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45943__$1,inst_45941);
} else {
if((state_val_45944 === (2))){
var state_45943__$1 = state_45943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45943__$1,(4),ch);
} else {
if((state_val_45944 === (11))){
var inst_45923 = (state_45943[(8)]);
var inst_45932 = (state_45943[(2)]);
var inst_45920 = inst_45923;
var state_45943__$1 = (function (){var statearr_45953 = state_45943;
(statearr_45953[(7)] = inst_45920);

(statearr_45953[(10)] = inst_45932);

return statearr_45953;
})();
var statearr_45954_46836 = state_45943__$1;
(statearr_45954_46836[(2)] = null);

(statearr_45954_46836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (9))){
var inst_45923 = (state_45943[(8)]);
var state_45943__$1 = state_45943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45943__$1,(11),out,inst_45923);
} else {
if((state_val_45944 === (5))){
var inst_45920 = (state_45943[(7)]);
var inst_45923 = (state_45943[(8)]);
var inst_45927 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45923,inst_45920);
var state_45943__$1 = state_45943;
if(inst_45927){
var statearr_45956_46841 = state_45943__$1;
(statearr_45956_46841[(1)] = (8));

} else {
var statearr_45957_46842 = state_45943__$1;
(statearr_45957_46842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (10))){
var inst_45935 = (state_45943[(2)]);
var state_45943__$1 = state_45943;
var statearr_45958_46843 = state_45943__$1;
(statearr_45958_46843[(2)] = inst_45935);

(statearr_45958_46843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45944 === (8))){
var inst_45920 = (state_45943[(7)]);
var tmp45955 = inst_45920;
var inst_45920__$1 = tmp45955;
var state_45943__$1 = (function (){var statearr_45959 = state_45943;
(statearr_45959[(7)] = inst_45920__$1);

return statearr_45959;
})();
var statearr_45960_46844 = state_45943__$1;
(statearr_45960_46844[(2)] = null);

(statearr_45960_46844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46829,out))
;
return ((function (switch__44056__auto__,c__44156__auto___46829,out){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_45961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45961[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_45961[(1)] = (1));

return statearr_45961;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_45943){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_45943);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e45962){var ex__44060__auto__ = e45962;
var statearr_45963_46845 = state_45943;
(statearr_45963_46845[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_45943[(4)]))){
var statearr_45964_46846 = state_45943;
(statearr_45964_46846[(1)] = cljs.core.first((state_45943[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46847 = state_45943;
state_45943 = G__46847;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_45943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_45943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46829,out))
})();
var state__44158__auto__ = (function (){var statearr_45965 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_45965[(6)] = c__44156__auto___46829);

return statearr_45965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46829,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45967 = arguments.length;
switch (G__45967) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44156__auto___46849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46849,out){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46849,out){
return (function (state_46005){
var state_val_46006 = (state_46005[(1)]);
if((state_val_46006 === (7))){
var inst_46001 = (state_46005[(2)]);
var state_46005__$1 = state_46005;
var statearr_46007_46851 = state_46005__$1;
(statearr_46007_46851[(2)] = inst_46001);

(statearr_46007_46851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (1))){
var inst_45968 = (new Array(n));
var inst_45969 = inst_45968;
var inst_45970 = (0);
var state_46005__$1 = (function (){var statearr_46008 = state_46005;
(statearr_46008[(7)] = inst_45970);

(statearr_46008[(8)] = inst_45969);

return statearr_46008;
})();
var statearr_46009_46852 = state_46005__$1;
(statearr_46009_46852[(2)] = null);

(statearr_46009_46852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (4))){
var inst_45973 = (state_46005[(9)]);
var inst_45973__$1 = (state_46005[(2)]);
var inst_45974 = (inst_45973__$1 == null);
var inst_45975 = cljs.core.not(inst_45974);
var state_46005__$1 = (function (){var statearr_46010 = state_46005;
(statearr_46010[(9)] = inst_45973__$1);

return statearr_46010;
})();
if(inst_45975){
var statearr_46011_46853 = state_46005__$1;
(statearr_46011_46853[(1)] = (5));

} else {
var statearr_46012_46854 = state_46005__$1;
(statearr_46012_46854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (15))){
var inst_45995 = (state_46005[(2)]);
var state_46005__$1 = state_46005;
var statearr_46013_46855 = state_46005__$1;
(statearr_46013_46855[(2)] = inst_45995);

(statearr_46013_46855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (13))){
var state_46005__$1 = state_46005;
var statearr_46014_46856 = state_46005__$1;
(statearr_46014_46856[(2)] = null);

(statearr_46014_46856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (6))){
var inst_45970 = (state_46005[(7)]);
var inst_45991 = (inst_45970 > (0));
var state_46005__$1 = state_46005;
if(cljs.core.truth_(inst_45991)){
var statearr_46015_46857 = state_46005__$1;
(statearr_46015_46857[(1)] = (12));

} else {
var statearr_46016_46858 = state_46005__$1;
(statearr_46016_46858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (3))){
var inst_46003 = (state_46005[(2)]);
var state_46005__$1 = state_46005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46005__$1,inst_46003);
} else {
if((state_val_46006 === (12))){
var inst_45969 = (state_46005[(8)]);
var inst_45993 = cljs.core.vec(inst_45969);
var state_46005__$1 = state_46005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46005__$1,(15),out,inst_45993);
} else {
if((state_val_46006 === (2))){
var state_46005__$1 = state_46005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46005__$1,(4),ch);
} else {
if((state_val_46006 === (11))){
var inst_45985 = (state_46005[(2)]);
var inst_45986 = (new Array(n));
var inst_45969 = inst_45986;
var inst_45970 = (0);
var state_46005__$1 = (function (){var statearr_46017 = state_46005;
(statearr_46017[(10)] = inst_45985);

(statearr_46017[(7)] = inst_45970);

(statearr_46017[(8)] = inst_45969);

return statearr_46017;
})();
var statearr_46018_46866 = state_46005__$1;
(statearr_46018_46866[(2)] = null);

(statearr_46018_46866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (9))){
var inst_45969 = (state_46005[(8)]);
var inst_45983 = cljs.core.vec(inst_45969);
var state_46005__$1 = state_46005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46005__$1,(11),out,inst_45983);
} else {
if((state_val_46006 === (5))){
var inst_45978 = (state_46005[(11)]);
var inst_45973 = (state_46005[(9)]);
var inst_45970 = (state_46005[(7)]);
var inst_45969 = (state_46005[(8)]);
var inst_45977 = (inst_45969[inst_45970] = inst_45973);
var inst_45978__$1 = (inst_45970 + (1));
var inst_45979 = (inst_45978__$1 < n);
var state_46005__$1 = (function (){var statearr_46019 = state_46005;
(statearr_46019[(11)] = inst_45978__$1);

(statearr_46019[(12)] = inst_45977);

return statearr_46019;
})();
if(cljs.core.truth_(inst_45979)){
var statearr_46020_46867 = state_46005__$1;
(statearr_46020_46867[(1)] = (8));

} else {
var statearr_46021_46868 = state_46005__$1;
(statearr_46021_46868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (14))){
var inst_45998 = (state_46005[(2)]);
var inst_45999 = cljs.core.async.close_BANG_(out);
var state_46005__$1 = (function (){var statearr_46023 = state_46005;
(statearr_46023[(13)] = inst_45998);

return statearr_46023;
})();
var statearr_46024_46869 = state_46005__$1;
(statearr_46024_46869[(2)] = inst_45999);

(statearr_46024_46869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (10))){
var inst_45989 = (state_46005[(2)]);
var state_46005__$1 = state_46005;
var statearr_46025_46870 = state_46005__$1;
(statearr_46025_46870[(2)] = inst_45989);

(statearr_46025_46870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (8))){
var inst_45978 = (state_46005[(11)]);
var inst_45969 = (state_46005[(8)]);
var tmp46022 = inst_45969;
var inst_45969__$1 = tmp46022;
var inst_45970 = inst_45978;
var state_46005__$1 = (function (){var statearr_46026 = state_46005;
(statearr_46026[(7)] = inst_45970);

(statearr_46026[(8)] = inst_45969__$1);

return statearr_46026;
})();
var statearr_46027_46871 = state_46005__$1;
(statearr_46027_46871[(2)] = null);

(statearr_46027_46871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46849,out))
;
return ((function (switch__44056__auto__,c__44156__auto___46849,out){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_46028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46028[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_46028[(1)] = (1));

return statearr_46028;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_46005){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_46005);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e46029){var ex__44060__auto__ = e46029;
var statearr_46030_46872 = state_46005;
(statearr_46030_46872[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_46005[(4)]))){
var statearr_46031_46873 = state_46005;
(statearr_46031_46873[(1)] = cljs.core.first((state_46005[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46874 = state_46005;
state_46005 = G__46874;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_46005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_46005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46849,out))
})();
var state__44158__auto__ = (function (){var statearr_46032 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_46032[(6)] = c__44156__auto___46849);

return statearr_46032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46849,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46034 = arguments.length;
switch (G__46034) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44156__auto___46878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44156__auto___46878,out){
return (function (){
var f__44157__auto__ = (function (){var switch__44056__auto__ = ((function (c__44156__auto___46878,out){
return (function (state_46076){
var state_val_46077 = (state_46076[(1)]);
if((state_val_46077 === (7))){
var inst_46072 = (state_46076[(2)]);
var state_46076__$1 = state_46076;
var statearr_46078_46879 = state_46076__$1;
(statearr_46078_46879[(2)] = inst_46072);

(statearr_46078_46879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (1))){
var inst_46035 = [];
var inst_46036 = inst_46035;
var inst_46037 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46076__$1 = (function (){var statearr_46079 = state_46076;
(statearr_46079[(7)] = inst_46037);

(statearr_46079[(8)] = inst_46036);

return statearr_46079;
})();
var statearr_46080_46880 = state_46076__$1;
(statearr_46080_46880[(2)] = null);

(statearr_46080_46880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (4))){
var inst_46040 = (state_46076[(9)]);
var inst_46040__$1 = (state_46076[(2)]);
var inst_46041 = (inst_46040__$1 == null);
var inst_46042 = cljs.core.not(inst_46041);
var state_46076__$1 = (function (){var statearr_46081 = state_46076;
(statearr_46081[(9)] = inst_46040__$1);

return statearr_46081;
})();
if(inst_46042){
var statearr_46082_46881 = state_46076__$1;
(statearr_46082_46881[(1)] = (5));

} else {
var statearr_46083_46882 = state_46076__$1;
(statearr_46083_46882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (15))){
var inst_46066 = (state_46076[(2)]);
var state_46076__$1 = state_46076;
var statearr_46084_46883 = state_46076__$1;
(statearr_46084_46883[(2)] = inst_46066);

(statearr_46084_46883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (13))){
var state_46076__$1 = state_46076;
var statearr_46085_46884 = state_46076__$1;
(statearr_46085_46884[(2)] = null);

(statearr_46085_46884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (6))){
var inst_46036 = (state_46076[(8)]);
var inst_46061 = inst_46036.length;
var inst_46062 = (inst_46061 > (0));
var state_46076__$1 = state_46076;
if(cljs.core.truth_(inst_46062)){
var statearr_46086_46885 = state_46076__$1;
(statearr_46086_46885[(1)] = (12));

} else {
var statearr_46087_46886 = state_46076__$1;
(statearr_46087_46886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (3))){
var inst_46074 = (state_46076[(2)]);
var state_46076__$1 = state_46076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46076__$1,inst_46074);
} else {
if((state_val_46077 === (12))){
var inst_46036 = (state_46076[(8)]);
var inst_46064 = cljs.core.vec(inst_46036);
var state_46076__$1 = state_46076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46076__$1,(15),out,inst_46064);
} else {
if((state_val_46077 === (2))){
var state_46076__$1 = state_46076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46076__$1,(4),ch);
} else {
if((state_val_46077 === (11))){
var inst_46040 = (state_46076[(9)]);
var inst_46044 = (state_46076[(10)]);
var inst_46054 = (state_46076[(2)]);
var inst_46055 = [];
var inst_46056 = inst_46055.push(inst_46040);
var inst_46036 = inst_46055;
var inst_46037 = inst_46044;
var state_46076__$1 = (function (){var statearr_46088 = state_46076;
(statearr_46088[(11)] = inst_46054);

(statearr_46088[(7)] = inst_46037);

(statearr_46088[(8)] = inst_46036);

(statearr_46088[(12)] = inst_46056);

return statearr_46088;
})();
var statearr_46089_46896 = state_46076__$1;
(statearr_46089_46896[(2)] = null);

(statearr_46089_46896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (9))){
var inst_46036 = (state_46076[(8)]);
var inst_46052 = cljs.core.vec(inst_46036);
var state_46076__$1 = state_46076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46076__$1,(11),out,inst_46052);
} else {
if((state_val_46077 === (5))){
var inst_46037 = (state_46076[(7)]);
var inst_46040 = (state_46076[(9)]);
var inst_46044 = (state_46076[(10)]);
var inst_46044__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46040) : f.call(null,inst_46040));
var inst_46045 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46044__$1,inst_46037);
var inst_46046 = cljs.core.keyword_identical_QMARK_(inst_46037,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46047 = ((inst_46045) || (inst_46046));
var state_46076__$1 = (function (){var statearr_46090 = state_46076;
(statearr_46090[(10)] = inst_46044__$1);

return statearr_46090;
})();
if(cljs.core.truth_(inst_46047)){
var statearr_46091_46898 = state_46076__$1;
(statearr_46091_46898[(1)] = (8));

} else {
var statearr_46092_46899 = state_46076__$1;
(statearr_46092_46899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (14))){
var inst_46069 = (state_46076[(2)]);
var inst_46070 = cljs.core.async.close_BANG_(out);
var state_46076__$1 = (function (){var statearr_46094 = state_46076;
(statearr_46094[(13)] = inst_46069);

return statearr_46094;
})();
var statearr_46095_46902 = state_46076__$1;
(statearr_46095_46902[(2)] = inst_46070);

(statearr_46095_46902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (10))){
var inst_46059 = (state_46076[(2)]);
var state_46076__$1 = state_46076;
var statearr_46096_46905 = state_46076__$1;
(statearr_46096_46905[(2)] = inst_46059);

(statearr_46096_46905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46077 === (8))){
var inst_46040 = (state_46076[(9)]);
var inst_46036 = (state_46076[(8)]);
var inst_46044 = (state_46076[(10)]);
var inst_46049 = inst_46036.push(inst_46040);
var tmp46093 = inst_46036;
var inst_46036__$1 = tmp46093;
var inst_46037 = inst_46044;
var state_46076__$1 = (function (){var statearr_46097 = state_46076;
(statearr_46097[(7)] = inst_46037);

(statearr_46097[(8)] = inst_46036__$1);

(statearr_46097[(14)] = inst_46049);

return statearr_46097;
})();
var statearr_46098_46906 = state_46076__$1;
(statearr_46098_46906[(2)] = null);

(statearr_46098_46906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44156__auto___46878,out))
;
return ((function (switch__44056__auto__,c__44156__auto___46878,out){
return (function() {
var cljs$core$async$state_machine__44057__auto__ = null;
var cljs$core$async$state_machine__44057__auto____0 = (function (){
var statearr_46099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46099[(0)] = cljs$core$async$state_machine__44057__auto__);

(statearr_46099[(1)] = (1));

return statearr_46099;
});
var cljs$core$async$state_machine__44057__auto____1 = (function (state_46076){
while(true){
var ret_value__44058__auto__ = (function (){try{while(true){
var result__44059__auto__ = switch__44056__auto__(state_46076);
if(cljs.core.keyword_identical_QMARK_(result__44059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44059__auto__;
}
break;
}
}catch (e46100){var ex__44060__auto__ = e46100;
var statearr_46101_46907 = state_46076;
(statearr_46101_46907[(2)] = ex__44060__auto__);


if(cljs.core.seq((state_46076[(4)]))){
var statearr_46102_46908 = state_46076;
(statearr_46102_46908[(1)] = cljs.core.first((state_46076[(4)])));

} else {
throw ex__44060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46909 = state_46076;
state_46076 = G__46909;
continue;
} else {
return ret_value__44058__auto__;
}
break;
}
});
cljs$core$async$state_machine__44057__auto__ = function(state_46076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44057__auto____1.call(this,state_46076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44057__auto____0;
cljs$core$async$state_machine__44057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44057__auto____1;
return cljs$core$async$state_machine__44057__auto__;
})()
;})(switch__44056__auto__,c__44156__auto___46878,out))
})();
var state__44158__auto__ = (function (){var statearr_46103 = (f__44157__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44157__auto__.cljs$core$IFn$_invoke$arity$0() : f__44157__auto__.call(null));
(statearr_46103[(6)] = c__44156__auto___46878);

return statearr_46103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44158__auto__);
});})(c__44156__auto___46878,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
