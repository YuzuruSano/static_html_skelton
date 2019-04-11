!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 36));
})({
  2: function(e, t) {
    e.exports = jQuery;
  },
  36: function(e, t, n) {
    "use strict";
    n.r(t),
      function(e) {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        n.d(t, "default", function() {
          return o;
        });
        var o = (function() {
          function t() {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var n, o, u;
          return (
            (n = t),
            (o = [
              {
                key: "getState",
                value: function() {
                  return "block" == e("#responsive_flg").css("display");
                }
              },
              {
                key: "state",
                value: function() {
                  return _.throttle(this.getState, 500);
                }
              },
              {
                key: "isPhone",
                value: function() {
                  return (
                    (navigator.userAgent.indexOf("iPhone") > 0 &&
                      -1 == navigator.userAgent.indexOf("iPod")) ||
                    (navigator.userAgent.indexOf("Android") > 0 &&
                      navigator.userAgent.indexOf("Mobile") > 0)
                  );
                }
              }
            ]) && r(n.prototype, o),
            u && r(n, u),
            t
          );
        })();
      }.call(this, n(2));
  }
});
//# sourceMappingURL=Responsive.js.map
