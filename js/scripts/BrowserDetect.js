!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 53));
})([
  ,
  function(e, t) {
    var r = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = r);
  },
  ,
  function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function(e, t, r) {
    e.exports = !r(8)(function() {
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
  function(e, t, r) {
    var n = r(16),
      i = r(23);
    e.exports = r(4)
      ? function(e, t, r) {
          return n.f(e, t, i(1, r));
        }
      : function(e, t, r) {
          return (e[t] = r), e;
        };
  },
  function(e, t) {
    var r = (e.exports = { version: "2.6.1" });
    "number" == typeof __e && (__e = r);
  },
  function(e, t, r) {
    var n = r(25)("wks"),
      i = r(11),
      o = r(1).Symbol,
      s = "function" == typeof o;
    (e.exports = function(e) {
      return n[e] || (n[e] = (s && o[e]) || (s ? o : i)("Symbol." + e));
    }).store = n;
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function(e, t, r) {
    var n = r(3);
    e.exports = function(e) {
      if (!n(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function(e, t) {
    var r = {}.toString;
    e.exports = function(e) {
      return r.call(e).slice(8, -1);
    };
  },
  function(e, t) {
    var r = 0,
      n = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++r + n).toString(36)
      );
    };
  },
  function(e, t, r) {
    var n = r(17);
    e.exports = function(e, t, r) {
      if ((n(e), void 0 === t)) return e;
      switch (r) {
        case 1:
          return function(r) {
            return e.call(t, r);
          };
        case 2:
          return function(r, n) {
            return e.call(t, r, n);
          };
        case 3:
          return function(r, n, i) {
            return e.call(t, r, n, i);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function(e, t, r) {
    var n = r(1),
      i = r(5),
      o = r(24),
      s = r(11)("src"),
      a = Function.toString,
      u = ("" + a).split("toString");
    (r(6).inspectSource = function(e) {
      return a.call(e);
    }),
      (e.exports = function(e, t, r, a) {
        var c = "function" == typeof r;
        c && (o(r, "name") || i(r, "name", t)),
          e[t] !== r &&
            (c && (o(r, s) || i(r, s, e[t] ? "" + e[t] : u.join(String(t)))),
            e === n
              ? (e[t] = r)
              : a
              ? e[t]
                ? (e[t] = r)
                : i(e, t, r)
              : (delete e[t], i(e, t, r)));
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && this[s]) || a.call(this);
      });
  },
  function(e, t) {
    var r = Math.ceil,
      n = Math.floor;
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? n : r)(e);
    };
  },
  function(e, t, r) {
    var n = r(9),
      i = r(20),
      o = r(22),
      s = Object.defineProperty;
    t.f = r(4)
      ? Object.defineProperty
      : function(e, t, r) {
          if ((n(e), (t = o(t, !0)), n(r), i))
            try {
              return s(e, t, r);
            } catch (e) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported!");
          return "value" in r && (e[t] = r.value), e;
        };
  },
  function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function(e, t, r) {
    var n = r(15),
      i = Math.min;
    e.exports = function(e) {
      return e > 0 ? i(n(e), 9007199254740991) : 0;
    };
  },
  function(e, t, r) {
    var n = r(1),
      i = r(6),
      o = r(5),
      s = r(14),
      a = r(12),
      u = function(e, t, r) {
        var c,
          f,
          d,
          l,
          p = e & u.F,
          v = e & u.G,
          h = e & u.S,
          b = e & u.P,
          g = e & u.B,
          m = v ? n : h ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
          y = v ? i : i[t] || (i[t] = {}),
          w = y.prototype || (y.prototype = {});
        for (c in (v && (r = t), r))
          (d = ((f = !p && m && void 0 !== m[c]) ? m : r)[c]),
            (l =
              g && f
                ? a(d, n)
                : b && "function" == typeof d
                ? a(Function.call, d)
                : d),
            m && s(m, c, d, e & u.U),
            y[c] != d && o(y, c, l),
            b && w[c] != d && (w[c] = d);
      };
    (n.core = i),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (e.exports = u);
  },
  function(e, t, r) {
    e.exports =
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
  function(e, t, r) {
    var n = r(3),
      i = r(1).document,
      o = n(i) && n(i.createElement);
    e.exports = function(e) {
      return o ? i.createElement(e) : {};
    };
  },
  function(e, t, r) {
    var n = r(3);
    e.exports = function(e, t) {
      if (!n(e)) return e;
      var r, i;
      if (t && "function" == typeof (r = e.toString) && !n((i = r.call(e))))
        return i;
      if ("function" == typeof (r = e.valueOf) && !n((i = r.call(e)))) return i;
      if (!t && "function" == typeof (r = e.toString) && !n((i = r.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  },
  function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return r.call(e, t);
    };
  },
  function(e, t, r) {
    var n = r(6),
      i = r(1),
      o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: n.version,
      mode: r(26) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(e, t) {
    e.exports = !1;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, r) {
    "use strict";
    var n,
      i,
      o = r(43),
      s = RegExp.prototype.exec,
      a = String.prototype.replace,
      u = s,
      c = ((n = /a/),
      (i = /b*/g),
      s.call(n, "a"),
      s.call(i, "a"),
      0 !== n.lastIndex || 0 !== i.lastIndex),
      f = void 0 !== /()??/.exec("")[1];
    (c || f) &&
      (u = function(e) {
        var t,
          r,
          n,
          i,
          u = this;
        return (
          f && (r = new RegExp("^" + u.source + "$(?!\\s)", o.call(u))),
          c && (t = u.lastIndex),
          (n = s.call(u, e)),
          c && n && (u.lastIndex = u.global ? n.index + n[0].length : t),
          f &&
            n &&
            n.length > 1 &&
            a.call(n[0], r, function() {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (n[i] = void 0);
            }),
          n
        );
      }),
      (e.exports = u);
  },
  ,
  function(e, t, r) {
    "use strict";
    var n = r(40)(!0);
    e.exports = function(e, t, r) {
      return t + (r ? n(e, t).length : 1);
    };
  },
  function(e, t, r) {
    "use strict";
    var n = r(41),
      i = RegExp.prototype.exec;
    e.exports = function(e, t) {
      var r = e.exec;
      if ("function" == typeof r) {
        var o = r.call(e, t);
        if ("object" != typeof o)
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== n(e))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t);
    };
  },
  function(e, t, r) {
    "use strict";
    r(42);
    var n = r(14),
      i = r(5),
      o = r(8),
      s = r(13),
      a = r(7),
      u = r(35),
      c = a("species"),
      f = !o(function() {
        var e = /./;
        return (
          (e.exec = function() {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      d = (function() {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function() {
          return t.apply(this, arguments);
        };
        var r = "ab".split(e);
        return 2 === r.length && "a" === r[0] && "b" === r[1];
      })();
    e.exports = function(e, t, r) {
      var l = a(e),
        p = !o(function() {
          var t = {};
          return (
            (t[l] = function() {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        v = p
          ? !o(function() {
              var t = !1,
                r = /a/;
              return (
                (r.exec = function() {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((r.constructor = {}),
                  (r.constructor[c] = function() {
                    return r;
                  })),
                r[l](""),
                !t
              );
            })
          : void 0;
      if (!p || !v || ("replace" === e && !f) || ("split" === e && !d)) {
        var h = /./[l],
          b = r(s, l, ""[e], function(e, t, r, n, i) {
            return t.exec === u
              ? p && !i
                ? { done: !0, value: h.call(t, r, n) }
                : { done: !0, value: e.call(r, t, n) }
              : { done: !1 };
          }),
          g = b[0],
          m = b[1];
        n(String.prototype, e, g),
          i(
            RegExp.prototype,
            l,
            2 == t
              ? function(e, t) {
                  return m.call(e, this, t);
                }
              : function(e) {
                  return m.call(e, this);
                }
          );
      }
    };
  },
  function(e, t, r) {
    var n = r(15),
      i = r(13);
    e.exports = function(e) {
      return function(t, r) {
        var o,
          s,
          a = String(i(t)),
          u = n(r),
          c = a.length;
        return u < 0 || u >= c
          ? e
            ? ""
            : void 0
          : (o = a.charCodeAt(u)) < 55296 ||
            o > 56319 ||
            u + 1 === c ||
            (s = a.charCodeAt(u + 1)) < 56320 ||
            s > 57343
          ? e
            ? a.charAt(u)
            : o
          : e
          ? a.slice(u, u + 2)
          : s - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function(e, t, r) {
    var n = r(10),
      i = r(7)("toStringTag"),
      o =
        "Arguments" ==
        n(
          (function() {
            return arguments;
          })()
        );
    e.exports = function(e) {
      var t, r, s;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (r = (function(e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), i))
        ? r
        : o
        ? n(t)
        : "Object" == (s = n(t)) && "function" == typeof t.callee
        ? "Arguments"
        : s;
    };
  },
  function(e, t, r) {
    "use strict";
    var n = r(35);
    r(19)({ target: "RegExp", proto: !0, forced: n !== /./.exec }, { exec: n });
  },
  function(e, t, r) {
    "use strict";
    var n = r(9);
    e.exports = function() {
      var e = n(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  ,
  function(e, t, r) {
    e.exports = (function(e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function(e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function(e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function(e, t) {
          if ((1 & t && (e = r(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function(t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function(e) {
          var t =
            e && e.__esModule
              ? function() {
                  return e.default;
                }
              : function() {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 86))
      );
    })({
      17: function(e, t, r) {
        var n, i, o;
        (i = []),
          void 0 ===
            (o =
              "function" ==
              typeof (n = function() {
                "use strict";
                function t(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                var r = (function() {
                  function e() {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  return (
                    (r = e),
                    (n = [
                      {
                        key: "getFirstMatch",
                        value: function(e, t) {
                          var r = t.match(e);
                          return (r && r.length > 0 && r[1]) || "";
                        }
                      },
                      {
                        key: "getSecondMatch",
                        value: function(e, t) {
                          var r = t.match(e);
                          return (r && r.length > 1 && r[2]) || "";
                        }
                      },
                      {
                        key: "matchAndReturnConst",
                        value: function(e, t, r) {
                          if (e.test(t)) return r;
                        }
                      },
                      {
                        key: "getWindowsVersionName",
                        value: function(e) {
                          switch (e) {
                            case "NT":
                              return "NT";
                            case "XP":
                              return "XP";
                            case "NT 5.0":
                              return "2000";
                            case "NT 5.1":
                              return "XP";
                            case "NT 5.2":
                              return "2003";
                            case "NT 6.0":
                              return "Vista";
                            case "NT 6.1":
                              return "7";
                            case "NT 6.2":
                              return "8";
                            case "NT 6.3":
                              return "8.1";
                            case "NT 10.0":
                              return "10";
                            default:
                              return;
                          }
                        }
                      },
                      {
                        key: "getAndroidVersionName",
                        value: function(e) {
                          var t = e
                            .split(".")
                            .splice(0, 2)
                            .map(function(e) {
                              return parseInt(e, 10) || 0;
                            });
                          if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                            return 1 === t[0] && t[1] < 6
                              ? "Cupcake"
                              : 1 === t[0] && t[1] >= 6
                              ? "Donut"
                              : 2 === t[0] && t[1] < 2
                              ? "Eclair"
                              : 2 === t[0] && 2 === t[1]
                              ? "Froyo"
                              : 2 === t[0] && t[1] > 2
                              ? "Gingerbread"
                              : 3 === t[0]
                              ? "Honeycomb"
                              : 4 === t[0] && t[1] < 1
                              ? "Ice Cream Sandwich"
                              : 4 === t[0] && t[1] < 4
                              ? "Jelly Bean"
                              : 4 === t[0] && t[1] >= 4
                              ? "KitKat"
                              : 5 === t[0]
                              ? "Lollipop"
                              : 6 === t[0]
                              ? "Marshmallow"
                              : 7 === t[0]
                              ? "Nougat"
                              : 8 === t[0]
                              ? "Oreo"
                              : void 0;
                        }
                      },
                      {
                        key: "getVersionPrecision",
                        value: function(e) {
                          return e.split(".").length;
                        }
                      },
                      {
                        key: "compareVersions",
                        value: function(t, r) {
                          var n =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2],
                            i = e.getVersionPrecision(t),
                            o = e.getVersionPrecision(r),
                            s = Math.max(i, o),
                            a = 0,
                            u = e.map([t, r], function(t) {
                              var r = s - e.getVersionPrecision(t),
                                n = t + new Array(r + 1).join(".0");
                              return e
                                .map(n.split("."), function(e) {
                                  return new Array(20 - e.length).join("0") + e;
                                })
                                .reverse();
                            });
                          for (
                            n && (a = s - Math.min(i, o)), s -= 1;
                            s >= a;

                          ) {
                            if (u[0][s] > u[1][s]) return 1;
                            if (u[0][s] === u[1][s]) {
                              if (s === a) return 0;
                              s -= 1;
                            } else if (u[0][s] < u[1][s]) return -1;
                          }
                        }
                      },
                      {
                        key: "map",
                        value: function(e, t) {
                          var r,
                            n = [];
                          if (Array.prototype.map)
                            return Array.prototype.map.call(e, t);
                          for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                          return n;
                        }
                      }
                    ]) && t(r, n),
                    e
                  );
                  var r, n;
                })();
                e.exports = r;
              })
                ? n.apply(t, i)
                : n) || (e.exports = o);
      },
      86: function(e, t, r) {
        var n, i, o;
        (i = [t, r(87)]),
          void 0 ===
            (o =
              "function" ==
              typeof (n = function(r, n) {
                "use strict";
                function i(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                var o;
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0),
                  (n = (o = n) && o.__esModule ? o : { default: o });
                var s = (function() {
                  function e() {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  return (
                    (t = e),
                    (r = [
                      {
                        key: "getParser",
                        value: function(e) {
                          var t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                          if ("string" != typeof e)
                            throw new Error("UserAgent should be a string");
                          return new n.default(e, t);
                        }
                      },
                      {
                        key: "parse",
                        value: function(e) {
                          return new n.default(e).getResult();
                        }
                      }
                    ]) && i(t, r),
                    e
                  );
                  var t, r;
                })();
                (r.default = s), (e.exports = t.default);
              })
                ? n.apply(t, i)
                : n) || (e.exports = o);
      },
      87: function(e, t, r) {
        var n, i, o;
        (i = [t, r(88), r(89), r(90), r(91), r(17)]),
          void 0 ===
            (o =
              "function" ==
              typeof (n = function(r, n, i, o, s, a) {
                "use strict";
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  return (c =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function(e) {
                          return typeof e;
                        }
                      : function(e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        })(e);
                }
                function f(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0),
                  (n = u(n)),
                  (i = u(i)),
                  (o = u(o)),
                  (s = u(s));
                var d = (function() {
                  function e(t) {
                    var r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (
                      ((function(e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      null == t || "" === t)
                    )
                      throw new Error("UserAgent parameter can't be empty");
                    (this._ua = t),
                      (this.parsedResult = {}),
                      !0 !== r && this.parse();
                  }
                  return (
                    (t = e),
                    (r = [
                      {
                        key: "getUA",
                        value: function() {
                          return this._ua;
                        }
                      },
                      {
                        key: "test",
                        value: function(e) {
                          return e.test(this._ua);
                        }
                      },
                      {
                        key: "parseBrowser",
                        value: function() {
                          var e = this;
                          this.parsedResult.browser = {};
                          var t = n.default.find(function(t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array)
                              return t.test.some(function(t) {
                                return e.test(t);
                              });
                            throw new Error(
                              "Browser's test function is not valid"
                            );
                          });
                          return (
                            t &&
                              (this.parsedResult.browser = t.describe(
                                this.getUA()
                              )),
                            this.parsedResult.browser
                          );
                        }
                      },
                      {
                        key: "getBrowser",
                        value: function() {
                          return this.parsedResult.browser
                            ? this.parsedResult.browser
                            : this.parseBrowser();
                        }
                      },
                      {
                        key: "getBrowserName",
                        value: function(e) {
                          return e
                            ? String(this.getBrowser().name).toLowerCase() || ""
                            : this.getBrowser().name || "";
                        }
                      },
                      {
                        key: "getBrowserVersion",
                        value: function() {
                          return this.getBrowser().version;
                        }
                      },
                      {
                        key: "getOS",
                        value: function() {
                          return this.parsedResult.os
                            ? this.parsedResult.os
                            : this.parseOS();
                        }
                      },
                      {
                        key: "parseOS",
                        value: function() {
                          var e = this;
                          this.parsedResult.os = {};
                          var t = i.default.find(function(t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array)
                              return t.test.some(function(t) {
                                return e.test(t);
                              });
                            throw new Error(
                              "Browser's test function is not valid"
                            );
                          });
                          return (
                            t &&
                              (this.parsedResult.os = t.describe(this.getUA())),
                            this.parsedResult.os
                          );
                        }
                      },
                      {
                        key: "getOSName",
                        value: function(e) {
                          var t = this.getOS(),
                            r = t.name;
                          return e ? String(r).toLowerCase() || "" : r || "";
                        }
                      },
                      {
                        key: "getOSVersion",
                        value: function() {
                          return this.getOS().version;
                        }
                      },
                      {
                        key: "getPlatform",
                        value: function() {
                          return this.parsedResult.platform
                            ? this.parsedResult.platform
                            : this.parsePlatform();
                        }
                      },
                      {
                        key: "getPlatformType",
                        value: function() {
                          var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            t = this.getPlatform(),
                            r = t.type;
                          return e ? String(r).toLowerCase() || "" : r || "";
                        }
                      },
                      {
                        key: "parsePlatform",
                        value: function() {
                          var e = this;
                          this.parsedResult.platform = {};
                          var t = o.default.find(function(t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array)
                              return t.test.some(function(t) {
                                return e.test(t);
                              });
                            throw new Error(
                              "Browser's test function is not valid"
                            );
                          });
                          return (
                            t &&
                              (this.parsedResult.platform = t.describe(
                                this.getUA()
                              )),
                            this.parsedResult.platform
                          );
                        }
                      },
                      {
                        key: "getEngine",
                        value: function() {
                          return this.parsedResult.engine
                            ? this.parsedResult.engine
                            : this.parseEngine();
                        }
                      },
                      {
                        key: "getEngineName",
                        value: function(e) {
                          return e
                            ? String(this.getEngine().name).toLowerCase() || ""
                            : this.getEngine().name || "";
                        }
                      },
                      {
                        key: "parseEngine",
                        value: function() {
                          var e = this;
                          this.parsedResult.engine = {};
                          var t = s.default.find(function(t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array)
                              return t.test.some(function(t) {
                                return e.test(t);
                              });
                            throw new Error(
                              "Browser's test function is not valid"
                            );
                          });
                          return (
                            t &&
                              (this.parsedResult.engine = t.describe(
                                this.getUA()
                              )),
                            this.parsedResult.engine
                          );
                        }
                      },
                      {
                        key: "parse",
                        value: function() {
                          return (
                            this.parseBrowser(),
                            this.parseOS(),
                            this.parsePlatform(),
                            this.parseEngine(),
                            this
                          );
                        }
                      },
                      {
                        key: "getResult",
                        value: function() {
                          return Object.assign({}, this.parsedResult);
                        }
                      },
                      {
                        key: "satisfies",
                        value: function(e) {
                          var t = this,
                            r = {},
                            n = 0,
                            i = {},
                            o = 0,
                            s = Object.keys(e);
                          if (
                            (s.forEach(function(t) {
                              var s = e[t];
                              "string" == typeof s
                                ? ((i[t] = s), (o += 1))
                                : "object" === c(s) && ((r[t] = s), (n += 1));
                            }),
                            n > 0)
                          ) {
                            var a = Object.keys(r),
                              u = a.find(function(e) {
                                return t.isOS(e);
                              });
                            if (u) {
                              var f = this.satisfies(r[u]);
                              if (void 0 !== f) return f;
                            }
                            var d = a.find(function(e) {
                              return t.isPlatform(e);
                            });
                            if (d) {
                              var l = this.satisfies(r[d]);
                              if (void 0 !== l) return l;
                            }
                          }
                          if (o > 0) {
                            var p = Object.keys(i),
                              v = p.find(function(e) {
                                return t.isBrowser(e);
                              });
                            if (void 0 !== v) return this.compareVersion(i[v]);
                          }
                        }
                      },
                      {
                        key: "isBrowser",
                        value: function(e) {
                          return (
                            this.getBrowserName(!0) === String(e).toLowerCase()
                          );
                        }
                      },
                      {
                        key: "compareVersion",
                        value: function(e) {
                          var t = [0],
                            r = e,
                            n = !1,
                            i = this.getBrowserVersion();
                          if ("string" == typeof i)
                            return (
                              ">" === e[0] || "<" === e[0]
                                ? ((r = e.substr(1)),
                                  "=" === e[1]
                                    ? ((n = !0), (r = e.substr(2)))
                                    : (t = []),
                                  ">" === e[0] ? t.push(1) : t.push(-1))
                                : "=" === e[0]
                                ? (r = e.substr(1))
                                : "~" === e[0] && ((n = !0), (r = e.substr(1))),
                              t.indexOf((0, a.compareVersions)(i, r, n)) > -1
                            );
                        }
                      },
                      {
                        key: "isOS",
                        value: function(e) {
                          return this.getOSName(!0) === String(e).toLowerCase();
                        }
                      },
                      {
                        key: "isPlatform",
                        value: function(e) {
                          return (
                            this.getPlatformType(!0) === String(e).toLowerCase()
                          );
                        }
                      },
                      {
                        key: "isEngine",
                        value: function(e) {
                          return (
                            this.getEngineName(!0) === String(e).toLowerCase()
                          );
                        }
                      },
                      {
                        key: "is",
                        value: function(e) {
                          return (
                            this.isBrowser(e) ||
                            this.isOS(e) ||
                            this.isPlatform(e)
                          );
                        }
                      },
                      {
                        key: "some",
                        value: function() {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [];
                          return t.some(function(t) {
                            return e.is(t);
                          });
                        }
                      }
                    ]) && f(t.prototype, r),
                    e
                  );
                  var t, r;
                })();
                (r.default = d), (e.exports = t.default);
              })
                ? n.apply(t, i)
                : n) || (e.exports = o);
      },
      88: function(e, t, r) {
        var n, i, o;
        (i = [t, r(17)]),
          void 0 ===
            (o =
              "function" ==
              typeof (n = function(r, n) {
                "use strict";
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0);
                var i = /version\/(\d+(\.?_?\d+)+)/i,
                  o = [
                    {
                      test: [/googlebot/i],
                      describe: function(e) {
                        var t = { name: "Googlebot" },
                          r =
                            (0, n.getFirstMatch)(
                              /googlebot\/(\d+(\.\d+))/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/opera/i],
                      describe: function(e) {
                        var t = { name: "Opera" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:opera)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/opr\/|opios/i],
                      describe: function(e) {
                        var t = { name: "Opera" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:opr|opios)[\s\/](\S+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/SamsungBrowser/i],
                      describe: function(e) {
                        var t = { name: "Samsung Internet for Android" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/Whale/i],
                      describe: function(e) {
                        var t = { name: "NAVER Whale Browser" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:whale)[\s\/](\d+(?:\.\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/MZBrowser/i],
                      describe: function(e) {
                        var t = { name: "MZ Browser" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/focus/i],
                      describe: function(e) {
                        var t = { name: "Focus" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:focus)[\s\/](\d+(?:\.\d+)+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/swing/i],
                      describe: function(e) {
                        var t = { name: "Swing" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:swing)[\s\/](\d+(?:\.\d+)+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/coast/i],
                      describe: function(e) {
                        var t = { name: "Opera Coast" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:coast)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/yabrowser/i],
                      describe: function(e) {
                        var t = { name: "Yandex Browser" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/ucbrowser/i],
                      describe: function(e) {
                        var t = { name: "UC Browser" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/Maxthon|mxios/i],
                      describe: function(e) {
                        var t = { name: "Maxthon" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/epiphany/i],
                      describe: function(e) {
                        var t = { name: "Epiphany" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/puffin/i],
                      describe: function(e) {
                        var t = { name: "Puffin" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/sleipnir/i],
                      describe: function(e) {
                        var t = { name: "Sleipnir" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/k-meleon/i],
                      describe: function(e) {
                        var t = { name: "K-Meleon" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/micromessenger/i],
                      describe: function(e) {
                        var t = { name: "WeChat" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/msie|trident/i],
                      describe: function(e) {
                        var t = { name: "Internet Explorer" },
                          r = (0, n.getFirstMatch)(
                            /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/edg([ea]|ios)/i],
                      describe: function(e) {
                        var t = { name: "Microsoft Edge" },
                          r = (0, n.getSecondMatch)(
                            /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/vivaldi/i],
                      describe: function(e) {
                        var t = { name: "Vivaldi" },
                          r = (0, n.getFirstMatch)(
                            /vivaldi\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/seamonkey/i],
                      describe: function(e) {
                        var t = { name: "SeaMonkey" },
                          r = (0, n.getFirstMatch)(
                            /seamonkey\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/sailfish/i],
                      describe: function(e) {
                        var t = { name: "Sailfish" },
                          r = (0, n.getFirstMatch)(
                            /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/silk/i],
                      describe: function(e) {
                        var t = { name: "Amazon Silk" },
                          r = (0, n.getFirstMatch)(
                            /silk\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/phantom/i],
                      describe: function(e) {
                        var t = { name: "PhantomJS" },
                          r = (0, n.getFirstMatch)(
                            /phantomjs\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/slimerjs/i],
                      describe: function(e) {
                        var t = { name: "SlimerJS" },
                          r = (0, n.getFirstMatch)(
                            /slimerjs\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                      describe: function(e) {
                        var t = { name: "BlackBerry" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/(web|hpw)[o0]s/i],
                      describe: function(e) {
                        var t = { name: "WebOS Browser" },
                          r =
                            (0, n.getFirstMatch)(i, e) ||
                            (0, n.getFirstMatch)(
                              /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                              e
                            );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/bada/i],
                      describe: function(e) {
                        var t = { name: "Bada" },
                          r = (0, n.getFirstMatch)(
                            /dolfin\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/tizen/i],
                      describe: function(e) {
                        var t = { name: "Tizen" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/qupzilla/i],
                      describe: function(e) {
                        var t = { name: "QupZilla" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/firefox|iceweasel|fxios/i],
                      describe: function(e) {
                        var t = { name: "Firefox" },
                          r = (0, n.getFirstMatch)(
                            /(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/chromium/i],
                      describe: function(e) {
                        var t = { name: "Chromium" },
                          r =
                            (0, n.getFirstMatch)(
                              /(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i,
                              e
                            ) || (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/chrome|crios|crmo/i],
                      describe: function(e) {
                        var t = { name: "Chrome" },
                          r = (0, n.getFirstMatch)(
                            /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                            e
                          );
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: function(e) {
                        var t = !e.test(/like android/i),
                          r = e.test(/android/i);
                        return t && r;
                      },
                      describe: function(e) {
                        var t = { name: "Android Browser" },
                          r = (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/safari|applewebkit/i],
                      describe: function(e) {
                        var t = { name: "Safari" },
                          r = (0, n.getFirstMatch)(i, e);
                        return r && (t.version = r), t;
                      }
                    },
                    {
                      test: [/.*/i],
                      describe: function(e) {
                        return {
                          name: (0, n.getFirstMatch)(/^(.*)\/(.*) /, e),
                          version: (0, n.getSecondMatch)(/^(.*)\/(.*) /, e)
                        };
                      }
                    }
                  ];
                (r.default = o), (e.exports = t.default);
              })
                ? n.apply(t, i)
                : n) || (e.exports = o);
      },
      89: function(e, t, r) {
        var n, i, o;
        (i = [t, r(17)]),
          void 0 ===
            (o =
              "function" ==
              typeof (n = function(r, n) {
                "use strict";
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0);
                var i = [
                  {
                    test: [/windows phone/i],
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                        /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                        e
                      );
                      return { name: "Windows Phone", version: t };
                    }
                  },
                  {
                    test: [/windows/i],
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                          /Windows ((NT|XP)( \d\d?.\d)?)/i,
                          e
                        ),
                        r = (0, n.getWindowsVersionName)(t);
                      return { name: "Windows", version: t, versionName: r };
                    }
                  },
                  {
                    test: [/macintosh/i],
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                        /mac os x (\d+(\.?_?\d+)+)/i,
                        e
                      ).replace(/[_\s]/g, ".");
                      return { name: "macOS", version: t };
                    }
                  },
                  {
                    test: [/(ipod|iphone|ipad)/i],
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                        /os (\d+([_\s]\d+)*) like mac os x/i,
                        e
                      ).replace(/[_\s]/g, ".");
                      return { name: "iOS", version: t };
                    }
                  },
                  {
                    test: function(e) {
                      var t = !e.test(/like android/i),
                        r = e.test(/android/i);
                      return t && r;
                    },
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                          /android[\s\/-](\d+(\.\d+)*)/i,
                          e
                        ),
                        r = (0, n.getAndroidVersionName)(t),
                        i = { name: "Android", version: t };
                      return r && (i.versionName = r), i;
                    }
                  },
                  {
                    test: [/(web|hpw)[o0]s/i],
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                          /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                          e
                        ),
                        r = { name: "WebOS" };
                      return t && t.length && (r.version = t), r;
                    }
                  },
                  {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                    describe: function(e) {
                      var t =
                        (0, n.getFirstMatch)(
                          /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                          e
                        ) ||
                        (0, n.getFirstMatch)(
                          /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                          e
                        ) ||
                        (0, n.getFirstMatch)(/\bbb(\d+)/i, e);
                      return { name: "BlackBerry", version: t };
                    }
                  },
                  {
                    test: [/bada/i],
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(/bada\/(\d+(\.\d+)*)/i, e);
                      return { name: "Bada", version: t };
                    }
                  },
                  {
                    test: [/tizen/i],
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                        /tizen[\/\s](\d+(\.\d+)*)/i,
                        e
                      );
                      return { name: "Tizen", version: t };
                    }
                  },
                  {
                    test: [/linux/i],
                    describe: function() {
                      return { name: "Linux" };
                    }
                  },
                  {
                    test: [/CrOS/],
                    describe: function() {
                      return { name: "Chrome OS" };
                    }
                  }
                ];
                (r.default = i), (e.exports = t.default);
              })
                ? n.apply(t, i)
                : n) || (e.exports = o);
      },
      90: function(e, t, r) {
        var n, i, o;
        (i = [t, r(17)]),
          void 0 ===
            (o =
              "function" ==
              typeof (n = function(r, n) {
                "use strict";
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0);
                var i = {
                    tablet: "tablet",
                    mobile: "mobile",
                    desktop: "desktop"
                  },
                  o = [
                    {
                      test: [/googlebot/i],
                      describe: function() {
                        return { type: "bot", vendor: "Google" };
                      }
                    },
                    {
                      test: [/huawei/i],
                      describe: function(e) {
                        var t = (0, n.getFirstMatch)(/(can-l01)/i, e) && "Nova",
                          r = { type: i.mobile, vendor: "Huawei" };
                        return t && (r.model = t), r;
                      }
                    },
                    {
                      test: [/nexus\s*(?:7|8|9|10).*/i],
                      describe: function() {
                        return { type: i.tablet, vendor: "Nexus" };
                      }
                    },
                    {
                      test: [/ipad/i],
                      describe: function() {
                        return {
                          type: i.tablet,
                          vendor: "Apple",
                          model: "iPad"
                        };
                      }
                    },
                    {
                      test: [/kftt build/i],
                      describe: function() {
                        return {
                          type: i.tablet,
                          vendor: "Amazon",
                          model: "Kindle Fire HD 7"
                        };
                      }
                    },
                    {
                      test: [/silk/i],
                      describe: function() {
                        return { type: i.tablet, vendor: "Amazon" };
                      }
                    },
                    {
                      test: [/tablet/i],
                      describe: function() {
                        return { type: i.tablet };
                      }
                    },
                    {
                      test: function(e) {
                        var t = e.test(/ipod|iphone/i),
                          r = e.test(/like (ipod|iphone)/i);
                        return t && !r;
                      },
                      describe: function(e) {
                        var t = (0, n.getFirstMatch)(/(ipod|iphone)/i, e);
                        return { type: i.mobile, vendor: "Apple", model: t };
                      }
                    },
                    {
                      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                      describe: function() {
                        return { type: i.mobile, vendor: "Nexus" };
                      }
                    },
                    {
                      test: [/[^-]mobi/i],
                      describe: function() {
                        return { type: i.mobile };
                      }
                    },
                    {
                      test: function(e) {
                        return "blackberry" === e.getBrowserName(!0);
                      },
                      describe: function() {
                        return { type: i.mobile, vendor: "BlackBerry" };
                      }
                    },
                    {
                      test: function(e) {
                        return "bada" === e.getBrowserName(!0);
                      },
                      describe: function() {
                        return { type: i.mobile };
                      }
                    },
                    {
                      test: function(e) {
                        return "windows phone" === e.getBrowserName();
                      },
                      describe: function() {
                        return { type: i.mobile, vendor: "Microsoft" };
                      }
                    },
                    {
                      test: function(e) {
                        var t = Number(String(e.getOSVersion()).split(".")[0]);
                        return "android" === e.getOSName(!0) && t >= 3;
                      },
                      describe: function() {
                        return { type: i.tablet };
                      }
                    },
                    {
                      test: function(e) {
                        return "android" === e.getOSName(!0);
                      },
                      describe: function() {
                        return { type: i.mobile };
                      }
                    },
                    {
                      test: function(e) {
                        return "macos" === e.getOSName(!0);
                      },
                      describe: function() {
                        return { type: i.desktop, vendor: "Apple" };
                      }
                    },
                    {
                      test: function(e) {
                        return "windows" === e.getOSName(!0);
                      },
                      describe: function() {
                        return { type: i.desktop };
                      }
                    },
                    {
                      test: function(e) {
                        return "linux" === e.getOSName(!0);
                      },
                      describe: function() {
                        return { type: i.desktop };
                      }
                    }
                  ];
                (r.default = o), (e.exports = t.default);
              })
                ? n.apply(t, i)
                : n) || (e.exports = o);
      },
      91: function(e, t, r) {
        var n, i, o;
        (i = [t, r(17)]),
          void 0 ===
            (o =
              "function" ==
              typeof (n = function(r, n) {
                "use strict";
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0);
                var i = [
                  {
                    test: function(e) {
                      return "microsoft edge" === e.getBrowserName(!0);
                    },
                    describe: function(e) {
                      var t = (0, n.getFirstMatch)(
                        /edge\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                      return { name: "EdgeHTML", version: t };
                    }
                  },
                  {
                    test: [/trident/i],
                    describe: function(e) {
                      var t = { name: "Trident" },
                        r = (0, n.getFirstMatch)(
                          /trident\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                      return r && (t.version = r), t;
                    }
                  },
                  {
                    test: function(e) {
                      return e.test(/presto/i);
                    },
                    describe: function(e) {
                      var t = { name: "Presto" },
                        r = (0, n.getFirstMatch)(
                          /presto\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                      return r && (t.version = r), t;
                    }
                  },
                  {
                    test: function(e) {
                      var t = e.test(/gecko/i),
                        r = e.test(/like gecko/i);
                      return t && !r;
                    },
                    describe: function(e) {
                      var t = { name: "Gecko" },
                        r = (0, n.getFirstMatch)(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                      return r && (t.version = r), t;
                    }
                  },
                  {
                    test: [/(apple)?webkit\/537\.36/i],
                    describe: function() {
                      return { name: "Blink" };
                    }
                  },
                  {
                    test: [/(apple)?webkit/i],
                    describe: function(e) {
                      var t = { name: "WebKit" },
                        r = (0, n.getFirstMatch)(
                          /webkit\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                      return r && (t.version = r), t;
                    }
                  }
                ];
                (r.default = i), (e.exports = t.default);
              })
                ? n.apply(t, i)
                : n) || (e.exports = o);
      }
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "default", function() {
        return s;
      });
    r(54), r(55);
    var n = r(45),
      i = r.n(n);
    function o(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var s = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.browser = i.a.getParser(window.navigator.userAgent)),
          (this.browserData = this.browser.parsedResult),
          (this.browserDetected = this.browserData.browser),
          (this.browserType = this.browserData.platform.type),
          (this.bodyElement = document.querySelector("body")),
          (this.bodyClass = this.bodyElement.classList),
          this.checkBrowser(),
          this.checkTablet(),
          this.checkMobile(),
          this.checkWinOS();
      }
      var t, r, n;
      return (
        (t = e),
        (r = [
          {
            key: "checkBrowser",
            value: function() {
              if ("Internet Explorer" === this.browserDetected.name) {
                var e = "ie_" + Math.floor(browserDetected.version);
                this.bodyClass.add("ie " + e);
              } else
                "Microsoft Edge" === this.browserDetected.name
                  ? this.bodyClass.add("edge")
                  : "Firefox" === this.browserDetected.name
                  ? this.bodyClass.add("ff")
                  : "Safari" === this.browserDetected.name &&
                    this.bodyClass.add("safari");
            }
          },
          {
            key: "checkTablet",
            value: function() {
              "tablet" == this.browserType && this.bodyClass.add("tablet");
            }
          },
          {
            key: "checkMobile",
            value: function() {
              "mobile" === this.browserType &&
                (this.bodyClass.add("device--mobile"),
                "Android" === this.browserType &&
                  this.bodyClass.add("device--mobile--android"));
            }
          },
          {
            key: "checkWinOS",
            value: function() {
              var e,
                t = navigator.userAgent;
              (e = t.match(/Win(dows )?NT 10\.0/)
                ? "win10"
                : t.match(/Win(dows )?NT 6\.3/)
                ? "win8_1"
                : t.match(/Win(dows )?NT 6\.2/)
                ? "win8"
                : t.match(/Win(dows )?NT 6\.1/)
                ? "win7"
                : "") && this.bodyClass.add(e);
            }
          }
        ]) && o(t.prototype, r),
        n && o(t, n),
        e
      );
    })();
    new s();
  },
  function(e, t, r) {
    "use strict";
    var n = r(9),
      i = r(18),
      o = r(37),
      s = r(38);
    r(39)("match", 1, function(e, t, r, a) {
      return [
        function(r) {
          var n = e(this),
            i = null == r ? void 0 : r[t];
          return void 0 !== i ? i.call(r, n) : new RegExp(r)[t](String(n));
        },
        function(e) {
          var t = a(r, e, this);
          if (t.done) return t.value;
          var u = n(e),
            c = String(this);
          if (!u.global) return s(u, c);
          var f = u.unicode;
          u.lastIndex = 0;
          for (var d, l = [], p = 0; null !== (d = s(u, c)); ) {
            var v = String(d[0]);
            (l[p] = v),
              "" === v && (u.lastIndex = o(c, i(u.lastIndex), f)),
              p++;
          }
          return 0 === p ? null : l;
        }
      ];
    });
  },
  function(e, t, r) {
    var n = r(16).f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    "name" in i ||
      (r(4) &&
        n(i, "name", {
          configurable: !0,
          get: function() {
            try {
              return ("" + this).match(o)[1];
            } catch (e) {
              return "";
            }
          }
        }));
  }
]);
//# sourceMappingURL=BrowserDetect.js.map
