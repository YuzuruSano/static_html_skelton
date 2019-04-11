!(function(t) {
  var e = {};
  function o(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = t),
    (o.c = e),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          o.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 50));
})({
  2: function(t, e) {
    t.exports = jQuery;
  },
  50: function(t, e, o) {
    "use strict";
    o.r(e),
      function(t) {
        function n(t, e) {
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        o.d(e, "default", function() {
          return r;
        });
        var r = (function() {
          function e(t) {
            var o = t.target,
              n = void 0 === o ? "#totop" : o,
              r = t.stop_at,
              i = void 0 === r ? "#footer" : r,
              u = t.fixer,
              a = void 0 === u ? 100 : u,
              s = t.speed,
              f = void 0 === s ? 200 : s,
              c = t.stop,
              l = void 0 === c || c;
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.target = n),
              (this.stop_at = i),
              (this.fixer = a),
              (this.speed = f),
              (this.stop = l);
          }
          var o, r, i;
          return (
            (o = e),
            (r = [
              {
                key: "clear_fixed_position",
                value: function() {
                  var e = t(document).height(),
                    o = t(window).height() + t(window).scrollTop(),
                    n = t(this.stop_at).innerHeight();
                  e - o <= n
                    ? t(this.target).css({
                        position: "absolute",
                        bottom: n + 30
                      })
                    : t(this.target).css({ position: "fixed", bottom: 30 });
                }
              },
              {
                key: "exec",
                value: function() {
                  var e = [this.target, this.fixer, this.speed],
                    o = e[0],
                    n = e[1],
                    r = e[2],
                    i = this;
                  t(window).on("load scroll", function() {
                    t(this).scrollTop() > n ? t(o).fadeIn(r) : t(o).fadeOut(r),
                      i.stop && i.clear_fixed_position();
                  });
                }
              }
            ]) && n(o.prototype, r),
            i && n(o, i),
            e
          );
        })();
      }.call(this, o(2));
  }
});
//# sourceMappingURL=ToTop.js.map
