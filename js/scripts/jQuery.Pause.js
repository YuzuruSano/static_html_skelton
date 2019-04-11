!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 44));
})({
  2: function(t, e) {
    t.exports = jQuery;
  },
  44: function(t, e, n) {
    (function(t) {
      !(function() {
        var e = t,
          n = "jQuery.pause",
          r = 1,
          o = e.fn.animate,
          u = {};
        function i() {
          return new Date().getTime();
        }
        (e.fn.animate = function(t, a, f, c) {
          var s = e.speed(a, f, c);
          return (
            (s.complete = s.old),
            this.each(function() {
              this[n] || (this[n] = r++);
              var a = e.extend({}, s);
              o.apply(e(this), [t, e.extend({}, a)]),
                (u[this[n]] = {
                  run: !0,
                  prop: t,
                  opt: a,
                  start: i(),
                  done: 0
                });
            })
          );
        }),
          (e.fn.pause = function() {
            return this.each(function() {
              this[n] || (this[n] = r++);
              var t = u[this[n]];
              t &&
                t.run &&
                ((t.done += i() - t.start),
                t.done > t.opt.duration
                  ? delete u[this[n]]
                  : (e(this).stop(), (t.run = !1)));
            });
          }),
          (e.fn.resume = function() {
            return this.each(function() {
              this[n] || (this[n] = r++);
              var t = u[this[n]];
              t &&
                !t.run &&
                ((t.opt.duration -= t.done),
                (t.done = 0),
                (t.run = !0),
                (t.start = i()),
                o.apply(e(this), [t.prop, e.extend({}, t.opt)]));
            });
          });
      })();
    }.call(this, n(2)));
  }
});
//# sourceMappingURL=jQuery.Pause.js.map
