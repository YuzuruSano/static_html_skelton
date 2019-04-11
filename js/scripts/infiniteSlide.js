!(function(t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function(n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 58));
})([
  ,
  function(t, n) {
    var e = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  function(t, n) {
    t.exports = jQuery;
  },
  function(t, n) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function(t, n, e) {
    t.exports = !e(8)(function() {
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
  function(t, n, e) {
    var r = e(16),
      o = e(23);
    t.exports = e(4)
      ? function(t, n, e) {
          return r.f(t, n, o(1, e));
        }
      : function(t, n, e) {
          return (t[n] = e), t;
        };
  },
  function(t, n) {
    var e = (t.exports = { version: "2.6.1" });
    "number" == typeof __e && (__e = e);
  },
  function(t, n, e) {
    var r = e(25)("wks"),
      o = e(11),
      i = e(1).Symbol,
      u = "function" == typeof i;
    (t.exports = function(t) {
      return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
    }).store = r;
  },
  function(t, n) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, n, e) {
    var r = e(3);
    t.exports = function(t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  function(t, n) {
    var e = {}.toString;
    t.exports = function(t) {
      return e.call(t).slice(8, -1);
    };
  },
  function(t, n) {
    var e = 0,
      r = Math.random();
    t.exports = function(t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++e + r).toString(36)
      );
    };
  },
  function(t, n, e) {
    var r = e(17);
    t.exports = function(t, n, e) {
      if ((r(t), void 0 === n)) return t;
      switch (e) {
        case 1:
          return function(e) {
            return t.call(n, e);
          };
        case 2:
          return function(e, r) {
            return t.call(n, e, r);
          };
        case 3:
          return function(e, r, o) {
            return t.call(n, e, r, o);
          };
      }
      return function() {
        return t.apply(n, arguments);
      };
    };
  },
  function(t, n) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function(t, n, e) {
    var r = e(1),
      o = e(5),
      i = e(24),
      u = e(11)("src"),
      c = Function.toString,
      f = ("" + c).split("toString");
    (e(6).inspectSource = function(t) {
      return c.call(t);
    }),
      (t.exports = function(t, n, e, c) {
        var s = "function" == typeof e;
        s && (i(e, "name") || o(e, "name", n)),
          t[n] !== e &&
            (s && (i(e, u) || o(e, u, t[n] ? "" + t[n] : f.join(String(n)))),
            t === r
              ? (t[n] = e)
              : c
              ? t[n]
                ? (t[n] = e)
                : o(t, n, e)
              : (delete t[n], o(t, n, e)));
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && this[u]) || c.call(this);
      });
  },
  function(t, n) {
    var e = Math.ceil,
      r = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
    };
  },
  function(t, n, e) {
    var r = e(9),
      o = e(20),
      i = e(22),
      u = Object.defineProperty;
    n.f = e(4)
      ? Object.defineProperty
      : function(t, n, e) {
          if ((r(t), (n = i(n, !0)), r(e), o))
            try {
              return u(t, n, e);
            } catch (t) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported!");
          return "value" in e && (t[n] = e.value), t;
        };
  },
  function(t, n) {
    t.exports = function(t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  function(t, n, e) {
    var r = e(15),
      o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function(t, n, e) {
    var r = e(1),
      o = e(6),
      i = e(5),
      u = e(14),
      c = e(12),
      f = function(t, n, e) {
        var s,
          a,
          p,
          l,
          d = t & f.F,
          h = t & f.G,
          v = t & f.S,
          y = t & f.P,
          x = t & f.B,
          m = h ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
          b = h ? o : o[n] || (o[n] = {}),
          g = b.prototype || (b.prototype = {});
        for (s in (h && (e = n), e))
          (p = ((a = !d && m && void 0 !== m[s]) ? m : e)[s]),
            (l =
              x && a
                ? c(p, r)
                : y && "function" == typeof p
                ? c(Function.call, p)
                : p),
            m && u(m, s, p, t & f.U),
            b[s] != p && i(b, s, l),
            y && g[s] != p && (g[s] = p);
      };
    (r.core = o),
      (f.F = 1),
      (f.G = 2),
      (f.S = 4),
      (f.P = 8),
      (f.B = 16),
      (f.W = 32),
      (f.U = 64),
      (f.R = 128),
      (t.exports = f);
  },
  function(t, n, e) {
    t.exports =
      !e(4) &&
      !e(8)(function() {
        return (
          7 !=
          Object.defineProperty(e(21)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(t, n, e) {
    var r = e(3),
      o = e(1).document,
      i = r(o) && r(o.createElement);
    t.exports = function(t) {
      return i ? o.createElement(t) : {};
    };
  },
  function(t, n, e) {
    var r = e(3);
    t.exports = function(t, n) {
      if (!r(t)) return t;
      var e, o;
      if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
        return o;
      if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t)))) return o;
      if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, n) {
    t.exports = function(t, n) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n
      };
    };
  },
  function(t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function(t, n) {
      return e.call(t, n);
    };
  },
  function(t, n, e) {
    var r = e(6),
      o = e(1),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function(t, n) {
      return i[t] || (i[t] = void 0 !== n ? n : {});
    })("versions", []).push({
      version: r.version,
      mode: e(26) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(t, n) {
    t.exports = !1;
  },
  function(t, n, e) {
    "use strict";
    var r = e(19),
      o = e(28)(5),
      i = !0;
    "find" in [] &&
      Array(1).find(function() {
        i = !1;
      }),
      r(r.P + r.F * i, "Array", {
        find: function(t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      e(34)("find");
  },
  function(t, n, e) {
    var r = e(12),
      o = e(29),
      i = e(30),
      u = e(18),
      c = e(31);
    t.exports = function(t, n) {
      var e = 1 == t,
        f = 2 == t,
        s = 3 == t,
        a = 4 == t,
        p = 6 == t,
        l = 5 == t || p,
        d = n || c;
      return function(n, c, h) {
        for (
          var v,
            y,
            x = i(n),
            m = o(x),
            b = r(c, h, 3),
            g = u(m.length),
            w = 0,
            _ = e ? d(n, g) : f ? d(n, 0) : void 0;
          g > w;
          w++
        )
          if ((l || w in m) && ((y = b((v = m[w]), w, x)), t))
            if (e) _[w] = y;
            else if (y)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return w;
                case 2:
                  _.push(v);
              }
            else if (a) return !1;
        return p ? -1 : s || a ? a : _;
      };
    };
  },
  function(t, n, e) {
    var r = e(10);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return "String" == r(t) ? t.split("") : Object(t);
        };
  },
  function(t, n, e) {
    var r = e(13);
    t.exports = function(t) {
      return Object(r(t));
    };
  },
  function(t, n, e) {
    var r = e(32);
    t.exports = function(t, n) {
      return new (r(t))(n);
    };
  },
  function(t, n, e) {
    var r = e(3),
      o = e(33),
      i = e(7)("species");
    t.exports = function(t) {
      var n;
      return (
        o(t) &&
          ("function" != typeof (n = t.constructor) ||
            (n !== Array && !o(n.prototype)) ||
            (n = void 0),
          r(n) && null === (n = n[i]) && (n = void 0)),
        void 0 === n ? Array : n
      );
    };
  },
  function(t, n, e) {
    var r = e(10);
    t.exports =
      Array.isArray ||
      function(t) {
        return "Array" == r(t);
      };
  },
  function(t, n, e) {
    var r = e(7)("unscopables"),
      o = Array.prototype;
    null == o[r] && e(5)(o, r, {}),
      (t.exports = function(t) {
        o[r][t] = !0;
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
  function(t, n, e) {
    (function(t) {
      !(function() {
        var n = t,
          e = "jQuery.pause",
          r = 1,
          o = n.fn.animate,
          i = {};
        function u() {
          return new Date().getTime();
        }
        (n.fn.animate = function(t, c, f, s) {
          var a = n.speed(c, f, s);
          return (
            (a.complete = a.old),
            this.each(function() {
              this[e] || (this[e] = r++);
              var c = n.extend({}, a);
              o.apply(n(this), [t, n.extend({}, c)]),
                (i[this[e]] = {
                  run: !0,
                  prop: t,
                  opt: c,
                  start: u(),
                  done: 0
                });
            })
          );
        }),
          (n.fn.pause = function() {
            return this.each(function() {
              this[e] || (this[e] = r++);
              var t = i[this[e]];
              t &&
                t.run &&
                ((t.done += u() - t.start),
                t.done > t.opt.duration
                  ? delete i[this[e]]
                  : (n(this).stop(), (t.run = !1)));
            });
          }),
          (n.fn.resume = function() {
            return this.each(function() {
              this[e] || (this[e] = r++);
              var t = i[this[e]];
              t &&
                !t.run &&
                ((t.opt.duration -= t.done),
                (t.done = 0),
                (t.run = !0),
                (t.start = u()),
                o.apply(n(this), [t.prop, n.extend({}, t.opt)]));
            });
          });
      })();
    }.call(this, e(2)));
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
  function(t, n, e) {
    "use strict";
    e.r(n),
      function(t) {
        var n;
        e(27), e(44);
        (n = t).fn.infiniteslide = function(t) {
          var e = n.extend(
              { height: 400, speed: 30, direction: "left", pauseonhover: !0 },
              t
            ),
            r = function(t) {
              var r = new n.Deferred(),
                o = t.children("ul");
              "right" == e.direction &&
                o.css("left", (-1 * o.width()) / 2 + "px");
              var i = 500 * o.children().length;
              return (
                setTimeout(function() {
                  !(function t() {
                    "left" == e.direction
                      ? o.animate(
                          { left: "-" + o.width() / 2 + "px" },
                          (o.width() / 2) * e.speed,
                          "linear",
                          function() {
                            o.css("left", 0), t();
                          }
                        )
                      : "right" == e.direction &&
                        o.animate(
                          { left: "0px" },
                          (o.width() / 2) * e.speed,
                          "linear",
                          function() {
                            o.css("left", (-1 * o.width()) / 2 + "px"), t();
                          }
                        ),
                      e.pauseonhover &&
                        o
                          .on("mouseenter", function() {
                            n(this).pause();
                          })
                          .on("mouseleave", function() {
                            n(this).resume();
                          });
                  })();
                }, i),
                r.promise()
              );
            };
          return this.each(function() {
            var t, e, o, i, u;
            ((t = n(this)),
            (e = new n.Deferred()),
            (o = t.find("ul")),
            (i = t.find("li")),
            (u = 0),
            t.find("img").each(function(t, e) {
              n("<img />").attr("src", n(this).attr("src")),
                (u += parseInt(n(this).width() + 20));
            }),
            t.css({ overflow: "hidden" }),
            o
              .css({
                width: 2 * u + "px",
                position: "relative",
                overflow: "hidden"
              })
              .children("li")
              .css({ display: "inline", float: "left" }),
            i.hide().each(function(t, e) {
              n(this)
                .delay(200 * t)
                .fadeIn("slow", function() {
                  n(this)
                    .clone()
                    .css("display", "inline")
                    .appendTo(o);
                });
            }),
            e.resolve(),
            e.promise()).then(r(n(this)));
          });
        };
      }.call(this, e(2));
  }
]);
//# sourceMappingURL=infiniteSlide.js.map
