goog.provide('frp.core');
goog.require('cljs.core');
goog.require('frp.derived');
goog.require('frp.io');
goog.require('frp.primitives.behavior');
goog.require('frp.primitives.event');
frp.core.restart = frp.primitives.behavior.restart;
frp.core.event = frp.derived.event;
frp.core.behavior = frp.derived.behavior;
frp.core.time = frp.primitives.behavior.time;
frp.core.stepper = frp.primitives.behavior.stepper;
frp.core.transduce = frp.primitives.event.transduce;
frp.core.snapshot = frp.primitives.event.snapshot;
frp.core.run = frp.io.run;
frp.core.accum = frp.derived.accum;
frp.core.switcher = frp.derived.switcher;

//# sourceMappingURL=frp.core.js.map
