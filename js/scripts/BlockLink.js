!(function(n) {
  var t = {};
  function r(e) {
    if (t[e]) return t[e].exports;
    var o = (t[e] = { i: e, l: !1, exports: {} });
    return n[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = n),
    (r.c = t),
    (r.d = function(n, t, e) {
      r.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e });
    }),
    (r.r = function(n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (r.t = function(n, t) {
      if ((1 & t && (n = r(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (r.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var o in n)
          r.d(
            e,
            o,
            function(t) {
              return n[t];
            }.bind(null, o)
          );
      return e;
    }),
    (r.n = function(n) {
      var t =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (r.p = ""),
    r((r.s = 52));
})([
  ,
  function(n, t) {
    var r = (n.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = r);
  },
  function(n, t) {
    n.exports = jQuery;
  },
  function(n, t) {
    n.exports = function(n) {
      return "object" == typeof n ? null !== n : "function" == typeof n;
    };
  },
  function(n, t, r) {
    n.exports = !r(8)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(n, t, r) {
    var e = r(16),
      o = r(23);
    n.exports = r(4)
      ? function(n, t, r) {
          return e.f(n, t, o(1, r));
        }
      : function(n, t, r) {
          return (n[t] = r), n;
        };
  },
  function(n, t) {
    var r = (n.exports = { version: "2.6.1" });
    "number" == typeof __e && (__e = r);
  },
  function(n, t, r) {
    var e = r(25)("wks"),
      o = r(11),
      i = r(1).Symbol,
      u = "function" == typeof i;
    (n.exports = function(n) {
      return e[n] || (e[n] = (u && i[n]) || (u ? i : o)("Symbol." + n));
    }).store = e;
  },
  function(n, t) {
    n.exports = function(n) {
      try {
        return !!n();
      } catch (n) {
        return !0;
      }
    };
  },
  function(n, t, r) {
    var e = r(3);
    n.exports = function(n) {
      if (!e(n)) throw TypeError(n + " is not an object!");
      return n;
    };
  },
  function(n, t) {
    var r = {}.toString;
    n.exports = function(n) {
      return r.call(n).slice(8, -1);
    };
  },
  function(n, t) {
    var r = 0,
      e = Math.random();
    n.exports = function(n) {
      return "Symbol(".concat(
        void 0 === n ? "" : n,
        ")_",
        (++r + e).toString(36)
      );
    };
  },
  function(n, t, r) {
    var e = r(17);
    n.exports = function(n, t, r) {
      if ((e(n), void 0 === t)) return n;
      switch (r) {
        case 1:
          return function(r) {
            return n.call(t, r);
          };
        case 2:
          return function(r, e) {
            return n.call(t, r, e);
          };
        case 3:
          return function(r, e, o) {
            return n.call(t, r, e, o);
          };
      }
      return function() {
        return n.apply(t, arguments);
      };
    };
  },
  function(n, t) {
    n.exports = function(n) {
      if (null == n) throw TypeError("Can't call method on  " + n);
      return n;
    };
  },
  function(n, t, r) {
    var e = r(1),
      o = r(5),
      i = r(24),
      u = r(11)("src"),
      c = Function.toString,
      f = ("" + c).split("toString");
    (r(6).inspectSource = function(n) {
      return c.call(n);
    }),
      (n.exports = function(n, t, r, c) {
        var a = "function" == typeof r;
        a && (i(r, "name") || o(r, "name", t)),
          n[t] !== r &&
            (a && (i(r, u) || o(r, u, n[t] ? "" + n[t] : f.join(String(t)))),
            n === e
              ? (n[t] = r)
              : c
              ? n[t]
                ? (n[t] = r)
                : o(n, t, r)
              : (delete n[t], o(n, t, r)));
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && this[u]) || c.call(this);
      });
  },
  function(n, t) {
    var r = Math.ceil,
      e = Math.floor;
    n.exports = function(n) {
      return isNaN((n = +n)) ? 0 : (n > 0 ? e : r)(n);
    };
  },
  function(n, t, r) {
    var e = r(9),
      o = r(20),
      i = r(22),
      u = Object.defineProperty;
    t.f = r(4)
      ? Object.defineProperty
      : function(n, t, r) {
          if ((e(n), (t = i(t, !0)), e(r), o))
            try {
              return u(n, t, r);
            } catch (n) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported!");
          return "value" in r && (n[t] = r.value), n;
        };
  },
  function(n, t) {
    n.exports = function(n) {
      if ("function" != typeof n) throw TypeError(n + " is not a function!");
      return n;
    };
  },
  function(n, t, r) {
    var e = r(15),
      o = Math.min;
    n.exports = function(n) {
      return n > 0 ? o(e(n), 9007199254740991) : 0;
    };
  },
  function(n, t, r) {
    var e = r(1),
      o = r(6),
      i = r(5),
      u = r(14),
      c = r(12),
      f = function(n, t, r) {
        var a,
          s,
          p,
          l,
          v = n & f.F,
          y = n & f.G,
          d = n & f.S,
          h = n & f.P,
          b = n & f.B,
          x = y ? e : d ? e[t] || (e[t] = {}) : (e[t] || {}).prototype,
          g = y ? o : o[t] || (o[t] = {}),
          m = g.prototype || (g.prototype = {});
        for (a in (y && (r = t), r))
          (p = ((s = !v && x && void 0 !== x[a]) ? x : r)[a]),
            (l =
              b && s
                ? c(p, e)
                : h && "function" == typeof p
                ? c(Function.call, p)
                : p),
            x && u(x, a, p, n & f.U),
            g[a] != p && i(g, a, l),
            h && m[a] != p && (m[a] = p);
      };
    (e.core = o),
      (f.F = 1),
      (f.G = 2),
      (f.S = 4),
      (f.P = 8),
      (f.B = 16),
      (f.W = 32),
      (f.U = 64),
      (f.R = 128),
      (n.exports = f);
  },
  function(n, t, r) {
    n.exports =
      !r(4) &&
      !r(8)(function() {
        return (
          7 !=
          Object.defineProperty(r(21)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(n, t, r) {
    var e = r(3),
      o = r(1).document,
      i = e(o) && e(o.createElement);
    n.exports = function(n) {
      return i ? o.createElement(n) : {};
    };
  },
  function(n, t, r) {
    var e = r(3);
    n.exports = function(n, t) {
      if (!e(n)) return n;
      var r, o;
      if (t && "function" == typeof (r = n.toString) && !e((o = r.call(n))))
        return o;
      if ("function" == typeof (r = n.valueOf) && !e((o = r.call(n)))) return o;
      if (!t && "function" == typeof (r = n.toString) && !e((o = r.call(n))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(n, t) {
    n.exports = function(n, t) {
      return {
        enumerable: !(1 & n),
        configurable: !(2 & n),
        writable: !(4 & n),
        value: t
      };
    };
  },
  function(n, t) {
    var r = {}.hasOwnProperty;
    n.exports = function(n, t) {
      return r.call(n, t);
    };
  },
  function(n, t, r) {
    var e = r(6),
      o = r(1),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (n.exports = function(n, t) {
      return i[n] || (i[n] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: e.version,
      mode: r(26) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(n, t) {
    n.exports = !1;
  },
  function(n, t, r) {
    "use strict";
    var e = r(19),
      o = r(28)(5),
      i = !0;
    "find" in [] &&
      Array(1).find(function() {
        i = !1;
      }),
      e(e.P + e.F * i, "Array", {
        find: function(n) {
          return o(this, n, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      r(34)("find");
  },
  function(n, t, r) {
    var e = r(12),
      o = r(29),
      i = r(30),
      u = r(18),
      c = r(31);
    n.exports = function(n, t) {
      var r = 1 == n,
        f = 2 == n,
        a = 3 == n,
        s = 4 == n,
        p = 6 == n,
        l = 5 == n || p,
        v = t || c;
      return function(t, c, y) {
        for (
          var d,
            h,
            b = i(t),
            x = o(b),
            g = e(c, y, 3),
            m = u(x.length),
            w = 0,
            _ = r ? v(t, m) : f ? v(t, 0) : void 0;
          m > w;
          w++
        )
          if ((l || w in x) && ((h = g((d = x[w]), w, b)), n))
            if (r) _[w] = h;
            else if (h)
              switch (n) {
                case 3:
                  return !0;
                case 5:
                  return d;
                case 6:
                  return w;
                case 2:
                  _.push(d);
              }
            else if (s) return !1;
        return p ? -1 : a || s ? s : _;
      };
    };
  },
  function(n, t, r) {
    var e = r(10);
    n.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(n) {
          return "String" == e(n) ? n.split("") : Object(n);
        };
  },
  function(n, t, r) {
    var e = r(13);
    n.exports = function(n) {
      return Object(e(n));
    };
  },
  function(n, t, r) {
    var e = r(32);
    n.exports = function(n, t) {
      return new (e(n))(t);
    };
  },
  function(n, t, r) {
    var e = r(3),
      o = r(33),
      i = r(7)("species");
    n.exports = function(n) {
      var t;
      return (
        o(n) &&
          ("function" != typeof (t = n.constructor) ||
            (t !== Array && !o(t.prototype)) ||
            (t = void 0),
          e(t) && null === (t = t[i]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function(n, t, r) {
    var e = r(10);
    n.exports =
      Array.isArray ||
      function(n) {
        return "Array" == e(n);
      };
  },
  function(n, t, r) {
    var e = r(7)("unscopables"),
      o = Array.prototype;
    null == o[e] && r(5)(o, e, {}),
      (n.exports = function(n) {
        o[e][n] = !0;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(n, t, r) {
    "use strict";
    r.r(t),
      function(n) {
        r.d(t, "default", function() {
          return o;
        });
        r(27);
        function e(n, t) {
          for (var r = 0; r < t.length; r++) {
            var e = t[r];
            (e.enumerable = e.enumerable || !1),
              (e.configurable = !0),
              "value" in e && (e.writable = !0),
              Object.defineProperty(n, e.key, e);
          }
        }
        var o = (function() {
          function t() {
            !(function(n, t) {
              if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var r, o, i;
          return (
            (r = t),
            (o = [
              {
                key: "exec",
                value: function(t) {
                  var r =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  n(t).on("click", function() {
                    var t = n(this)
                      .find("a")
                      .first()
                      .attr("href");
                    if (
                      (t ||
                        (t = n(this)
                          .find("a")
                          .attr("href")),
                      t)
                    )
                      return !0 === r
                        ? (window.open(t), !1)
                        : ((window.location = t), !1);
                  });
                }
              }
            ]) && e(r.prototype, o),
            i && e(r, i),
            t
          );
        })();
      }.call(this, r(2));
  }
]);
//# sourceMappingURL=BlockLink.js.map
