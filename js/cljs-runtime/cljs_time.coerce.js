goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4433__auto__ = (((obj == null))?null:obj);
var m__4434__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4434__auto__.call(null,obj));
} else {
var m__4431__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4431__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__60030 = millis;
if((G__60030 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__60030) : goog.date.UtcDateTime.fromTimestamp.call(null,G__60030));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4523__auto__ = (function cljs_time$coerce$from_string_$_iter__60031(s__60032){
return (new cljs.core.LazySeq(null,(function (){
var s__60032__$1 = s__60032;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60032__$1);
if(temp__5735__auto__){
var s__60032__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60032__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__60032__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__60034 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__60033 = (0);
while(true){
if((i__60033 < size__4522__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__60033);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e60037){if((e60037 instanceof Error)){
var _ = e60037;
return null;
} else {
throw e60037;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__60034,d);

var G__60078 = (i__60033 + (1));
i__60033 = G__60078;
continue;
} else {
var G__60079 = (i__60033 + (1));
i__60033 = G__60079;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60034),cljs_time$coerce$from_string_$_iter__60031(cljs.core.chunk_rest(s__60032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60034),null);
}
} else {
var f = cljs.core.first(s__60032__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e60040){if((e60040 instanceof Error)){
var _ = e60040;
return null;
} else {
throw e60040;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__60031(cljs.core.rest(s__60032__$2)));
} else {
var G__60081 = cljs.core.rest(s__60032__$2);
s__60032__$1 = G__60081;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__60041 = date;
var G__60041__$1 = (((G__60041 == null))?null:G__60041.getTime());
if((G__60041__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__60041__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__60044 = obj;
var G__60044__$1 = (((G__60044 == null))?null:cljs_time.coerce.to_date_time(G__60044));
if((G__60044__$1 == null)){
return null;
} else {
return G__60044__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4120__auto__ = millis;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4120__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__60047 = obj;
var G__60047__$1 = (((G__60047 == null))?null:cljs_time.coerce.to_date_time(G__60047));
var G__60047__$2 = (((G__60047__$1 == null))?null:G__60047__$1.getTime());
if((G__60047__$2 == null)){
return null;
} else {
return (new Date(G__60047__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__60048 = obj;
var G__60048__$1 = (((G__60048 == null))?null:cljs_time.coerce.to_date_time(G__60048));
if((G__60048__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__60048__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
var G__60052 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__60052.setHours(dt.getHours());

G__60052.setMinutes(dt.getMinutes());

G__60052.setSeconds(dt.getSeconds());

G__60052.setMilliseconds(dt.getMilliseconds());

return G__60052;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__60053_60083 = cljs_time.coerce.to_date_time;
var G__60054_60084 = "null";
var G__60055_60085 = ((function (G__60053_60083,G__60054_60084){
return (function (_){
return null;
});})(G__60053_60083,G__60054_60084))
;
goog.object.set(G__60053_60083,G__60054_60084,G__60055_60085);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__60058_60086 = cljs_time.coerce.to_date_time;
var G__60059_60087 = "number";
var G__60060_60088 = ((function (G__60058_60086,G__60059_60087){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__60058_60086,G__60059_60087))
;
goog.object.set(G__60058_60086,G__60059_60087,G__60060_60088);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__60069_60089 = cljs_time.coerce.to_date_time;
var G__60070_60090 = "string";
var G__60071_60091 = ((function (G__60069_60089,G__60070_60090){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__60069_60089,G__60070_60090))
;
goog.object.set(G__60069_60089,G__60070_60090,G__60071_60091);

//# sourceMappingURL=cljs_time.coerce.js.map
