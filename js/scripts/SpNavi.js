!(function(t) {
  var i = {};
  function e(s) {
    if (i[s]) return i[s].exports;
    var o = (i[s] = { i: s, l: !1, exports: {} });
    return t[s].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = i),
    (e.d = function(t, i, s) {
      e.o(t, i) || Object.defineProperty(t, i, { enumerable: !0, get: s });
    }),
    (e.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function(t, i) {
      if ((1 & i && (t = e(t)), 8 & i)) return t;
      if (4 & i && "object" == typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (e.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & i && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            s,
            o,
            function(i) {
              return t[i];
            }.bind(null, o)
          );
      return s;
    }),
    (e.n = function(t) {
      var i =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function(t, i) {
      return Object.prototype.hasOwnProperty.call(t, i);
    }),
    (e.p = ""),
    e((e.s = 49));
})([
  ,
  function(t, i) {
    var e = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  function(t, i) {
    t.exports = jQuery;
  },
  function(t, i) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function(t, i, e) {
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
  function(t, i, e) {
    var s = e(16),
      o = e(23);
    t.exports = e(4)
      ? function(t, i, e) {
          return s.f(t, i, o(1, e));
        }
      : function(t, i, e) {
          return (t[i] = e), t;
        };
  },
  function(t, i) {
    var e = (t.exports = { version: "2.6.1" });
    "number" == typeof __e && (__e = e);
  },
  function(t, i, e) {
    var s = e(25)("wks"),
      o = e(11),
      n = e(1).Symbol,
      r = "function" == typeof n;
    (t.exports = function(t) {
      return s[t] || (s[t] = (r && n[t]) || (r ? n : o)("Symbol." + t));
    }).store = s;
  },
  function(t, i) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, i, e) {
    var s = e(3);
    t.exports = function(t) {
      if (!s(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  function(t, i) {
    var e = {}.toString;
    t.exports = function(t) {
      return e.call(t).slice(8, -1);
    };
  },
  function(t, i) {
    var e = 0,
      s = Math.random();
    t.exports = function(t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++e + s).toString(36)
      );
    };
  },
  function(t, i, e) {
    var s = e(17);
    t.exports = function(t, i, e) {
      if ((s(t), void 0 === i)) return t;
      switch (e) {
        case 1:
          return function(e) {
            return t.call(i, e);
          };
        case 2:
          return function(e, s) {
            return t.call(i, e, s);
          };
        case 3:
          return function(e, s, o) {
            return t.call(i, e, s, o);
          };
      }
      return function() {
        return t.apply(i, arguments);
      };
    };
  },
  function(t, i) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function(t, i, e) {
    var s = e(1),
      o = e(5),
      n = e(24),
      r = e(11)("src"),
      h = Function.toString,
      a = ("" + h).split("toString");
    (e(6).inspectSource = function(t) {
      return h.call(t);
    }),
      (t.exports = function(t, i, e, h) {
        var l = "function" == typeof e;
        l && (n(e, "name") || o(e, "name", i)),
          t[i] !== e &&
            (l && (n(e, r) || o(e, r, t[i] ? "" + t[i] : a.join(String(i)))),
            t === s
              ? (t[i] = e)
              : h
              ? t[i]
                ? (t[i] = e)
                : o(t, i, e)
              : (delete t[i], o(t, i, e)));
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && this[r]) || h.call(this);
      });
  },
  function(t, i) {
    var e = Math.ceil,
      s = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? s : e)(t);
    };
  },
  function(t, i, e) {
    var s = e(9),
      o = e(20),
      n = e(22),
      r = Object.defineProperty;
    i.f = e(4)
      ? Object.defineProperty
      : function(t, i, e) {
          if ((s(t), (i = n(i, !0)), s(e), o))
            try {
              return r(t, i, e);
            } catch (t) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported!");
          return "value" in e && (t[i] = e.value), t;
        };
  },
  function(t, i) {
    t.exports = function(t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  function(t, i, e) {
    var s = e(15),
      o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(s(t), 9007199254740991) : 0;
    };
  },
  function(t, i, e) {
    var s = e(1),
      o = e(6),
      n = e(5),
      r = e(14),
      h = e(12),
      a = function(t, i, e) {
        var l,
          c,
          p,
          u,
          d = t & a.F,
          f = t & a.G,
          m = t & a.S,
          v = t & a.P,
          g = t & a.B,
          y = f ? s : m ? s[i] || (s[i] = {}) : (s[i] || {}).prototype,
          x = f ? o : o[i] || (o[i] = {}),
          S = x.prototype || (x.prototype = {});
        for (l in (f && (e = i), e))
          (p = ((c = !d && y && void 0 !== y[l]) ? y : e)[l]),
            (u =
              g && c
                ? h(p, s)
                : v && "function" == typeof p
                ? h(Function.call, p)
                : p),
            y && r(y, l, p, t & a.U),
            x[l] != p && n(x, l, u),
            v && S[l] != p && (S[l] = p);
      };
    (s.core = o),
      (a.F = 1),
      (a.G = 2),
      (a.S = 4),
      (a.P = 8),
      (a.B = 16),
      (a.W = 32),
      (a.U = 64),
      (a.R = 128),
      (t.exports = a);
  },
  function(t, i, e) {
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
  function(t, i, e) {
    var s = e(3),
      o = e(1).document,
      n = s(o) && s(o.createElement);
    t.exports = function(t) {
      return n ? o.createElement(t) : {};
    };
  },
  function(t, i, e) {
    var s = e(3);
    t.exports = function(t, i) {
      if (!s(t)) return t;
      var e, o;
      if (i && "function" == typeof (e = t.toString) && !s((o = e.call(t))))
        return o;
      if ("function" == typeof (e = t.valueOf) && !s((o = e.call(t)))) return o;
      if (!i && "function" == typeof (e = t.toString) && !s((o = e.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, i) {
    t.exports = function(t, i) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: i
      };
    };
  },
  function(t, i) {
    var e = {}.hasOwnProperty;
    t.exports = function(t, i) {
      return e.call(t, i);
    };
  },
  function(t, i, e) {
    var s = e(6),
      o = e(1),
      n = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function(t, i) {
      return n[t] || (n[t] = void 0 !== i ? i : {});
    })("versions", []).push({
      version: s.version,
      mode: e(26) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(t, i) {
    t.exports = !1;
  },
  function(t, i, e) {
    "use strict";
    var s = e(19),
      o = e(28)(5),
      n = !0;
    "find" in [] &&
      Array(1).find(function() {
        n = !1;
      }),
      s(s.P + s.F * n, "Array", {
        find: function(t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      e(34)("find");
  },
  function(t, i, e) {
    var s = e(12),
      o = e(29),
      n = e(30),
      r = e(18),
      h = e(31);
    t.exports = function(t, i) {
      var e = 1 == t,
        a = 2 == t,
        l = 3 == t,
        c = 4 == t,
        p = 6 == t,
        u = 5 == t || p,
        d = i || h;
      return function(i, h, f) {
        for (
          var m,
            v,
            g = n(i),
            y = o(g),
            x = s(h, f, 3),
            S = r(y.length),
            b = 0,
            T = e ? d(i, S) : a ? d(i, 0) : void 0;
          S > b;
          b++
        )
          if ((u || b in y) && ((v = x((m = y[b]), b, g)), t))
            if (e) T[b] = v;
            else if (v)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return m;
                case 6:
                  return b;
                case 2:
                  T.push(m);
              }
            else if (c) return !1;
        return p ? -1 : l || c ? c : T;
      };
    };
  },
  function(t, i, e) {
    var s = e(10);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return "String" == s(t) ? t.split("") : Object(t);
        };
  },
  function(t, i, e) {
    var s = e(13);
    t.exports = function(t) {
      return Object(s(t));
    };
  },
  function(t, i, e) {
    var s = e(32);
    t.exports = function(t, i) {
      return new (s(t))(i);
    };
  },
  function(t, i, e) {
    var s = e(3),
      o = e(33),
      n = e(7)("species");
    t.exports = function(t) {
      var i;
      return (
        o(t) &&
          ("function" != typeof (i = t.constructor) ||
            (i !== Array && !o(i.prototype)) ||
            (i = void 0),
          s(i) && null === (i = i[n]) && (i = void 0)),
        void 0 === i ? Array : i
      );
    };
  },
  function(t, i, e) {
    var s = e(10);
    t.exports =
      Array.isArray ||
      function(t) {
        return "Array" == s(t);
      };
  },
  function(t, i, e) {
    var s = e(7)("unscopables"),
      o = Array.prototype;
    null == o[s] && e(5)(o, s, {}),
      (t.exports = function(t) {
        o[s][t] = !0;
      });
  },
  ,
  function(t, i, e) {
    "use strict";
    e.r(i),
      function(t) {
        function s(t, i) {
          for (var e = 0; e < i.length; e++) {
            var s = i[e];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              "value" in s && (s.writable = !0),
              Object.defineProperty(t, s.key, s);
          }
        }
        e.d(i, "default", function() {
          return o;
        });
        var o = (function() {
          function i() {
            !(function(t, i) {
              if (!(t instanceof i))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
          }
          var e, o, n;
          return (
            (e = i),
            (o = [
              {
                key: "getState",
                value: function() {
                  return "block" == t("#responsive_flg").css("display");
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
            ]) && s(e.prototype, o),
            n && s(e, n),
            i
          );
        })();
      }.call(this, e(2));
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
  function(t, i, e) {
    var s; /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */ /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
    !(function(o, n, r) {
      var h =
          o.requestAnimationFrame ||
          o.webkitRequestAnimationFrame ||
          o.mozRequestAnimationFrame ||
          o.oRequestAnimationFrame ||
          o.msRequestAnimationFrame ||
          function(t) {
            o.setTimeout(t, 1e3 / 60);
          },
        a = (function() {
          var t = {},
            i = n.createElement("div").style,
            e = (function() {
              for (
                var t = ["t", "webkitT", "MozT", "msT", "OT"],
                  e = 0,
                  s = t.length;
                e < s;
                e++
              )
                if (t[e] + "ransform" in i)
                  return t[e].substr(0, t[e].length - 1);
              return !1;
            })();
          function s(t) {
            return (
              !1 !== e &&
              ("" === e ? t : e + t.charAt(0).toUpperCase() + t.substr(1))
            );
          }
          (t.getTime =
            Date.now ||
            function() {
              return new Date().getTime();
            }),
            (t.extend = function(t, i) {
              for (var e in i) t[e] = i[e];
            }),
            (t.addEvent = function(t, i, e, s) {
              t.addEventListener(i, e, !!s);
            }),
            (t.removeEvent = function(t, i, e, s) {
              t.removeEventListener(i, e, !!s);
            }),
            (t.prefixPointerEvent = function(t) {
              return o.MSPointerEvent
                ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8)
                : t;
            }),
            (t.momentum = function(t, i, e, s, o, n) {
              var h,
                a,
                l = t - i,
                c = r.abs(l) / e;
              return (
                (a = c / (n = void 0 === n ? 6e-4 : n)),
                (h = t + ((c * c) / (2 * n)) * (l < 0 ? -1 : 1)) < s
                  ? ((h = o ? s - (o / 2.5) * (c / 8) : s),
                    (a = (l = r.abs(h - t)) / c))
                  : h > 0 &&
                    ((h = o ? (o / 2.5) * (c / 8) : 0),
                    (a = (l = r.abs(t) + h) / c)),
                { destination: r.round(h), duration: a }
              );
            });
          var h = s("transform");
          return (
            t.extend(t, {
              hasTransform: !1 !== h,
              hasPerspective: s("perspective") in i,
              hasTouch: "ontouchstart" in o,
              hasPointer: !(!o.PointerEvent && !o.MSPointerEvent),
              hasTransition: s("transition") in i
            }),
            (t.isBadAndroid = (function() {
              var t = o.navigator.appVersion;
              if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                var i = t.match(/Safari\/(\d+.\d)/);
                return (
                  !(i && "object" == typeof i && i.length >= 2) ||
                  parseFloat(i[1]) < 535.19
                );
              }
              return !1;
            })()),
            t.extend((t.style = {}), {
              transform: h,
              transitionTimingFunction: s("transitionTimingFunction"),
              transitionDuration: s("transitionDuration"),
              transitionDelay: s("transitionDelay"),
              transformOrigin: s("transformOrigin")
            }),
            (t.hasClass = function(t, i) {
              return new RegExp("(^|\\s)" + i + "(\\s|$)").test(t.className);
            }),
            (t.addClass = function(i, e) {
              if (!t.hasClass(i, e)) {
                var s = i.className.split(" ");
                s.push(e), (i.className = s.join(" "));
              }
            }),
            (t.removeClass = function(i, e) {
              if (t.hasClass(i, e)) {
                var s = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                i.className = i.className.replace(s, " ");
              }
            }),
            (t.offset = function(t) {
              for (
                var i = -t.offsetLeft, e = -t.offsetTop;
                (t = t.offsetParent);

              )
                (i -= t.offsetLeft), (e -= t.offsetTop);
              return { left: i, top: e };
            }),
            (t.preventDefaultException = function(t, i) {
              for (var e in i) if (i[e].test(t[e])) return !0;
              return !1;
            }),
            t.extend((t.eventType = {}), {
              touchstart: 1,
              touchmove: 1,
              touchend: 1,
              mousedown: 2,
              mousemove: 2,
              mouseup: 2,
              pointerdown: 3,
              pointermove: 3,
              pointerup: 3,
              MSPointerDown: 3,
              MSPointerMove: 3,
              MSPointerUp: 3
            }),
            t.extend((t.ease = {}), {
              quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                  return t * (2 - t);
                }
              },
              circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(t) {
                  return r.sqrt(1 - --t * t);
                }
              },
              back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(t) {
                  return (t -= 1) * t * (5 * t + 4) + 1;
                }
              },
              bounce: {
                style: "",
                fn: function(t) {
                  return (t /= 1) < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                }
              },
              elastic: {
                style: "",
                fn: function(t) {
                  return 0 === t
                    ? 0
                    : 1 == t
                    ? 1
                    : 0.4 *
                        r.pow(2, -10 * t) *
                        r.sin(((t - 0.055) * (2 * r.PI)) / 0.22) +
                      1;
                }
              }
            }),
            (t.tap = function(t, i) {
              var e = n.createEvent("Event");
              e.initEvent(i, !0, !0),
                (e.pageX = t.pageX),
                (e.pageY = t.pageY),
                t.target.dispatchEvent(e);
            }),
            (t.click = function(t) {
              var i,
                e = t.target;
              /(SELECT|INPUT|TEXTAREA)/i.test(e.tagName) ||
                ((i = n.createEvent("MouseEvents")).initMouseEvent(
                  "click",
                  !0,
                  !0,
                  t.view,
                  1,
                  e.screenX,
                  e.screenY,
                  e.clientX,
                  e.clientY,
                  t.ctrlKey,
                  t.altKey,
                  t.shiftKey,
                  t.metaKey,
                  0,
                  null
                ),
                (i._constructed = !0),
                e.dispatchEvent(i));
            }),
            t
          );
        })();
      function l(t, i) {
        for (var e in ((this.wrapper =
          "string" == typeof t ? n.querySelector(t) : t),
        (this.scroller = this.wrapper.children[0]),
        (this.scrollerStyle = this.scroller.style),
        (this.options = {
          resizeScrollbars: !0,
          mouseWheelSpeed: 20,
          snapThreshold: 0.334,
          disablePointer: !a.hasPointer,
          disableTouch: a.hasPointer || !a.hasTouch,
          disableMouse: a.hasPointer || a.hasTouch,
          startX: 0,
          startY: 0,
          scrollY: !0,
          directionLockThreshold: 5,
          momentum: !0,
          bounce: !0,
          bounceTime: 600,
          bounceEasing: "",
          preventDefault: !0,
          preventDefaultException: {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
          },
          HWCompositing: !0,
          useTransition: !0,
          useTransform: !0,
          bindToWrapper: void 0 === o.onmousedown
        }),
        i))
          this.options[e] = i[e];
        (this.translateZ =
          this.options.HWCompositing && a.hasPerspective
            ? " translateZ(0)"
            : ""),
          (this.options.useTransition =
            a.hasTransition && this.options.useTransition),
          (this.options.useTransform =
            a.hasTransform && this.options.useTransform),
          (this.options.eventPassthrough =
            !0 === this.options.eventPassthrough
              ? "vertical"
              : this.options.eventPassthrough),
          (this.options.preventDefault =
            !this.options.eventPassthrough && this.options.preventDefault),
          (this.options.scrollY =
            "vertical" != this.options.eventPassthrough &&
            this.options.scrollY),
          (this.options.scrollX =
            "horizontal" != this.options.eventPassthrough &&
            this.options.scrollX),
          (this.options.freeScroll =
            this.options.freeScroll && !this.options.eventPassthrough),
          (this.options.directionLockThreshold = this.options.eventPassthrough
            ? 0
            : this.options.directionLockThreshold),
          (this.options.bounceEasing =
            "string" == typeof this.options.bounceEasing
              ? a.ease[this.options.bounceEasing] || a.ease.circular
              : this.options.bounceEasing),
          (this.options.resizePolling =
            void 0 === this.options.resizePolling
              ? 60
              : this.options.resizePolling),
          !0 === this.options.tap && (this.options.tap = "tap"),
          "scale" == this.options.shrinkScrollbars &&
            (this.options.useTransition = !1),
          (this.options.invertWheelDirection = this.options.invertWheelDirection
            ? -1
            : 1),
          (this.x = 0),
          (this.y = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this._events = {}),
          this._init(),
          this.refresh(),
          this.scrollTo(this.options.startX, this.options.startY),
          this.enable();
      }
      function c(t, i, e) {
        var s = n.createElement("div"),
          o = n.createElement("div");
        return (
          !0 === e &&
            ((s.style.cssText = "position:absolute;z-index:9999"),
            (o.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
          (o.className = "iScrollIndicator"),
          "h" == t
            ? (!0 === e &&
                ((s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
                (o.style.height = "100%")),
              (s.className = "iScrollHorizontalScrollbar"))
            : (!0 === e &&
                ((s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
                (o.style.width = "100%")),
              (s.className = "iScrollVerticalScrollbar")),
          (s.style.cssText += ";overflow:hidden"),
          i || (s.style.pointerEvents = "none"),
          s.appendChild(o),
          s
        );
      }
      function p(t, i) {
        for (var e in ((this.wrapper =
          "string" == typeof i.el ? n.querySelector(i.el) : i.el),
        (this.wrapperStyle = this.wrapper.style),
        (this.indicator = this.wrapper.children[0]),
        (this.indicatorStyle = this.indicator.style),
        (this.scroller = t),
        (this.options = {
          listenX: !0,
          listenY: !0,
          interactive: !1,
          resize: !0,
          defaultScrollbars: !1,
          shrink: !1,
          fade: !1,
          speedRatioX: 0,
          speedRatioY: 0
        }),
        i))
          this.options[e] = i[e];
        if (
          ((this.sizeRatioX = 1),
          (this.sizeRatioY = 1),
          (this.maxPosX = 0),
          (this.maxPosY = 0),
          this.options.interactive &&
            (this.options.disableTouch ||
              (a.addEvent(this.indicator, "touchstart", this),
              a.addEvent(o, "touchend", this)),
            this.options.disablePointer ||
              (a.addEvent(
                this.indicator,
                a.prefixPointerEvent("pointerdown"),
                this
              ),
              a.addEvent(o, a.prefixPointerEvent("pointerup"), this)),
            this.options.disableMouse ||
              (a.addEvent(this.indicator, "mousedown", this),
              a.addEvent(o, "mouseup", this))),
          this.options.fade)
        ) {
          this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
          var s = a.style.transitionDuration;
          this.wrapperStyle[s] = a.isBadAndroid ? "0.0001ms" : "0ms";
          var r = this;
          a.isBadAndroid &&
            h(function() {
              "0.0001ms" === r.wrapperStyle[s] && (r.wrapperStyle[s] = "0s");
            }),
            (this.wrapperStyle.opacity = "0");
        }
      }
      (l.prototype = {
        version: "5.2.0",
        _init: function() {
          this._initEvents(),
            (this.options.scrollbars || this.options.indicators) &&
              this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys();
        },
        destroy: function() {
          this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            (this.resizeTimeout = null),
            this._execEvent("destroy");
        },
        _transitionEnd: function(t) {
          t.target == this.scroller &&
            this.isInTransition &&
            (this._transitionTime(),
            this.resetPosition(this.options.bounceTime) ||
              ((this.isInTransition = !1), this._execEvent("scrollEnd")));
        },
        _start: function(t) {
          if (
            1 != a.eventType[t.type] &&
            0 !==
              (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2)
          )
            return;
          if (
            this.enabled &&
            (!this.initiated || a.eventType[t.type] === this.initiated)
          ) {
            !this.options.preventDefault ||
              a.isBadAndroid ||
              a.preventDefaultException(
                t.target,
                this.options.preventDefaultException
              ) ||
              t.preventDefault();
            var i,
              e = t.touches ? t.touches[0] : t;
            (this.initiated = a.eventType[t.type]),
              (this.moved = !1),
              (this.distX = 0),
              (this.distY = 0),
              (this.directionX = 0),
              (this.directionY = 0),
              (this.directionLocked = 0),
              (this.startTime = a.getTime()),
              this.options.useTransition && this.isInTransition
                ? (this._transitionTime(),
                  (this.isInTransition = !1),
                  (i = this.getComputedPosition()),
                  this._translate(r.round(i.x), r.round(i.y)),
                  this._execEvent("scrollEnd"))
                : !this.options.useTransition &&
                  this.isAnimating &&
                  ((this.isAnimating = !1), this._execEvent("scrollEnd")),
              (this.startX = this.x),
              (this.startY = this.y),
              (this.absStartX = this.x),
              (this.absStartY = this.y),
              (this.pointX = e.pageX),
              (this.pointY = e.pageY),
              this._execEvent("beforeScrollStart");
          }
        },
        _move: function(t) {
          if (this.enabled && a.eventType[t.type] === this.initiated) {
            this.options.preventDefault && t.preventDefault();
            var i,
              e,
              s,
              o,
              n = t.touches ? t.touches[0] : t,
              h = n.pageX - this.pointX,
              l = n.pageY - this.pointY,
              c = a.getTime();
            if (
              ((this.pointX = n.pageX),
              (this.pointY = n.pageY),
              (this.distX += h),
              (this.distY += l),
              (s = r.abs(this.distX)),
              (o = r.abs(this.distY)),
              !(c - this.endTime > 300 && s < 10 && o < 10))
            ) {
              if (
                (this.directionLocked ||
                  this.options.freeScroll ||
                  (s > o + this.options.directionLockThreshold
                    ? (this.directionLocked = "h")
                    : o >= s + this.options.directionLockThreshold
                    ? (this.directionLocked = "v")
                    : (this.directionLocked = "n")),
                "h" == this.directionLocked)
              ) {
                if ("vertical" == this.options.eventPassthrough)
                  t.preventDefault();
                else if ("horizontal" == this.options.eventPassthrough)
                  return void (this.initiated = !1);
                l = 0;
              } else if ("v" == this.directionLocked) {
                if ("horizontal" == this.options.eventPassthrough)
                  t.preventDefault();
                else if ("vertical" == this.options.eventPassthrough)
                  return void (this.initiated = !1);
                h = 0;
              }
              (h = this.hasHorizontalScroll ? h : 0),
                (l = this.hasVerticalScroll ? l : 0),
                (i = this.x + h),
                (e = this.y + l),
                (i > 0 || i < this.maxScrollX) &&
                  (i = this.options.bounce
                    ? this.x + h / 3
                    : i > 0
                    ? 0
                    : this.maxScrollX),
                (e > 0 || e < this.maxScrollY) &&
                  (e = this.options.bounce
                    ? this.y + l / 3
                    : e > 0
                    ? 0
                    : this.maxScrollY),
                (this.directionX = h > 0 ? -1 : h < 0 ? 1 : 0),
                (this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0),
                this.moved || this._execEvent("scrollStart"),
                (this.moved = !0),
                this._translate(i, e),
                c - this.startTime > 300 &&
                  ((this.startTime = c),
                  (this.startX = this.x),
                  (this.startY = this.y));
            }
          }
        },
        _end: function(t) {
          if (this.enabled && a.eventType[t.type] === this.initiated) {
            this.options.preventDefault &&
              !a.preventDefaultException(
                t.target,
                this.options.preventDefaultException
              ) &&
              t.preventDefault();
            t.changedTouches && t.changedTouches[0];
            var i,
              e,
              s = a.getTime() - this.startTime,
              o = r.round(this.x),
              n = r.round(this.y),
              h = r.abs(o - this.startX),
              l = r.abs(n - this.startY),
              c = 0,
              p = "";
            if (
              ((this.isInTransition = 0),
              (this.initiated = 0),
              (this.endTime = a.getTime()),
              !this.resetPosition(this.options.bounceTime))
            ) {
              if ((this.scrollTo(o, n), !this.moved))
                return (
                  this.options.tap && a.tap(t, this.options.tap),
                  this.options.click && a.click(t),
                  void this._execEvent("scrollCancel")
                );
              if (this._events.flick && s < 200 && h < 100 && l < 100)
                this._execEvent("flick");
              else {
                if (
                  (this.options.momentum &&
                    s < 300 &&
                    ((i = this.hasHorizontalScroll
                      ? a.momentum(
                          this.x,
                          this.startX,
                          s,
                          this.maxScrollX,
                          this.options.bounce ? this.wrapperWidth : 0,
                          this.options.deceleration
                        )
                      : { destination: o, duration: 0 }),
                    (e = this.hasVerticalScroll
                      ? a.momentum(
                          this.y,
                          this.startY,
                          s,
                          this.maxScrollY,
                          this.options.bounce ? this.wrapperHeight : 0,
                          this.options.deceleration
                        )
                      : { destination: n, duration: 0 }),
                    (o = i.destination),
                    (n = e.destination),
                    (c = r.max(i.duration, e.duration)),
                    (this.isInTransition = 1)),
                  this.options.snap)
                ) {
                  var u = this._nearestSnap(o, n);
                  (this.currentPage = u),
                    (c =
                      this.options.snapSpeed ||
                      r.max(
                        r.max(
                          r.min(r.abs(o - u.x), 1e3),
                          r.min(r.abs(n - u.y), 1e3)
                        ),
                        300
                      )),
                    (o = u.x),
                    (n = u.y),
                    (this.directionX = 0),
                    (this.directionY = 0),
                    (p = this.options.bounceEasing);
                }
                if (o != this.x || n != this.y)
                  return (
                    (o > 0 ||
                      o < this.maxScrollX ||
                      n > 0 ||
                      n < this.maxScrollY) &&
                      (p = a.ease.quadratic),
                    void this.scrollTo(o, n, c, p)
                  );
                this._execEvent("scrollEnd");
              }
            }
          }
        },
        _resize: function() {
          var t = this;
          clearTimeout(this.resizeTimeout),
            (this.resizeTimeout = setTimeout(function() {
              t.refresh();
            }, this.options.resizePolling));
        },
        resetPosition: function(t) {
          var i = this.x,
            e = this.y;
          return (
            (t = t || 0),
            !this.hasHorizontalScroll || this.x > 0
              ? (i = 0)
              : this.x < this.maxScrollX && (i = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0
              ? (e = 0)
              : this.y < this.maxScrollY && (e = this.maxScrollY),
            (i != this.x || e != this.y) &&
              (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
          );
        },
        disable: function() {
          this.enabled = !1;
        },
        enable: function() {
          this.enabled = !0;
        },
        refresh: function() {
          this.wrapper.offsetHeight;
          (this.wrapperWidth = this.wrapper.clientWidth),
            (this.wrapperHeight = this.wrapper.clientHeight),
            (this.scrollerWidth = this.scroller.offsetWidth),
            (this.scrollerHeight = this.scroller.offsetHeight),
            (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
            (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
            (this.hasHorizontalScroll =
              this.options.scrollX && this.maxScrollX < 0),
            (this.hasVerticalScroll =
              this.options.scrollY && this.maxScrollY < 0),
            this.hasHorizontalScroll ||
              ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
            this.hasVerticalScroll ||
              ((this.maxScrollY = 0),
              (this.scrollerHeight = this.wrapperHeight)),
            (this.endTime = 0),
            (this.directionX = 0),
            (this.directionY = 0),
            (this.wrapperOffset = a.offset(this.wrapper)),
            this._execEvent("refresh"),
            this.resetPosition();
        },
        on: function(t, i) {
          this._events[t] || (this._events[t] = []), this._events[t].push(i);
        },
        off: function(t, i) {
          if (this._events[t]) {
            var e = this._events[t].indexOf(i);
            e > -1 && this._events[t].splice(e, 1);
          }
        },
        _execEvent: function(t) {
          if (this._events[t]) {
            var i = 0,
              e = this._events[t].length;
            if (e)
              for (; i < e; i++)
                this._events[t][i].apply(this, [].slice.call(arguments, 1));
          }
        },
        scrollBy: function(t, i, e, s) {
          (t = this.x + t),
            (i = this.y + i),
            (e = e || 0),
            this.scrollTo(t, i, e, s);
        },
        scrollTo: function(t, i, e, s) {
          (s = s || a.ease.circular),
            (this.isInTransition = this.options.useTransition && e > 0);
          var o = this.options.useTransition && s.style;
          !e || o
            ? (o &&
                (this._transitionTimingFunction(s.style),
                this._transitionTime(e)),
              this._translate(t, i))
            : this._animate(t, i, e, s.fn);
        },
        scrollToElement: function(t, i, e, s, o) {
          if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
            var n = a.offset(t);
            (n.left -= this.wrapperOffset.left),
              (n.top -= this.wrapperOffset.top),
              !0 === e &&
                (e = r.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
              !0 === s &&
                (s = r.round(
                  t.offsetHeight / 2 - this.wrapper.offsetHeight / 2
                )),
              (n.left -= e || 0),
              (n.top -= s || 0),
              (n.left =
                n.left > 0
                  ? 0
                  : n.left < this.maxScrollX
                  ? this.maxScrollX
                  : n.left),
              (n.top =
                n.top > 0
                  ? 0
                  : n.top < this.maxScrollY
                  ? this.maxScrollY
                  : n.top),
              (i =
                null == i || "auto" === i
                  ? r.max(r.abs(this.x - n.left), r.abs(this.y - n.top))
                  : i),
              this.scrollTo(n.left, n.top, i, o);
          }
        },
        _transitionTime: function(t) {
          t = t || 0;
          var i = a.style.transitionDuration;
          if (((this.scrollerStyle[i] = t + "ms"), !t && a.isBadAndroid)) {
            this.scrollerStyle[i] = "0.0001ms";
            var e = this;
            h(function() {
              "0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s");
            });
          }
          if (this.indicators)
            for (var s = this.indicators.length; s--; )
              this.indicators[s].transitionTime(t);
        },
        _transitionTimingFunction: function(t) {
          if (
            ((this.scrollerStyle[a.style.transitionTimingFunction] = t),
            this.indicators)
          )
            for (var i = this.indicators.length; i--; )
              this.indicators[i].transitionTimingFunction(t);
        },
        _translate: function(t, i) {
          if (
            (this.options.useTransform
              ? (this.scrollerStyle[a.style.transform] =
                  "translate(" + t + "px," + i + "px)" + this.translateZ)
              : ((t = r.round(t)),
                (i = r.round(i)),
                (this.scrollerStyle.left = t + "px"),
                (this.scrollerStyle.top = i + "px")),
            (this.x = t),
            (this.y = i),
            this.indicators)
          )
            for (var e = this.indicators.length; e--; )
              this.indicators[e].updatePosition();
        },
        _initEvents: function(t) {
          var i = t ? a.removeEvent : a.addEvent,
            e = this.options.bindToWrapper ? this.wrapper : o;
          i(o, "orientationchange", this),
            i(o, "resize", this),
            this.options.click && i(this.wrapper, "click", this, !0),
            this.options.disableMouse ||
              (i(this.wrapper, "mousedown", this),
              i(e, "mousemove", this),
              i(e, "mousecancel", this),
              i(e, "mouseup", this)),
            a.hasPointer &&
              !this.options.disablePointer &&
              (i(this.wrapper, a.prefixPointerEvent("pointerdown"), this),
              i(e, a.prefixPointerEvent("pointermove"), this),
              i(e, a.prefixPointerEvent("pointercancel"), this),
              i(e, a.prefixPointerEvent("pointerup"), this)),
            a.hasTouch &&
              !this.options.disableTouch &&
              (i(this.wrapper, "touchstart", this),
              i(e, "touchmove", this),
              i(e, "touchcancel", this),
              i(e, "touchend", this)),
            i(this.scroller, "transitionend", this),
            i(this.scroller, "webkitTransitionEnd", this),
            i(this.scroller, "oTransitionEnd", this),
            i(this.scroller, "MSTransitionEnd", this);
        },
        getComputedPosition: function() {
          var t,
            i,
            e = o.getComputedStyle(this.scroller, null);
          return (
            this.options.useTransform
              ? ((t = +(
                  (e = e[a.style.transform].split(")")[0].split(", "))[12] ||
                  e[4]
                )),
                (i = +(e[13] || e[5])))
              : ((t = +e.left.replace(/[^-\d.]/g, "")),
                (i = +e.top.replace(/[^-\d.]/g, ""))),
            { x: t, y: i }
          );
        },
        _initIndicators: function() {
          var t,
            i = this.options.interactiveScrollbars,
            e = "string" != typeof this.options.scrollbars,
            s = [],
            o = this;
          (this.indicators = []),
            this.options.scrollbars &&
              (this.options.scrollY &&
                ((t = {
                  el: c("v", i, this.options.scrollbars),
                  interactive: i,
                  defaultScrollbars: !0,
                  customStyle: e,
                  resize: this.options.resizeScrollbars,
                  shrink: this.options.shrinkScrollbars,
                  fade: this.options.fadeScrollbars,
                  listenX: !1
                }),
                this.wrapper.appendChild(t.el),
                s.push(t)),
              this.options.scrollX &&
                ((t = {
                  el: c("h", i, this.options.scrollbars),
                  interactive: i,
                  defaultScrollbars: !0,
                  customStyle: e,
                  resize: this.options.resizeScrollbars,
                  shrink: this.options.shrinkScrollbars,
                  fade: this.options.fadeScrollbars,
                  listenY: !1
                }),
                this.wrapper.appendChild(t.el),
                s.push(t))),
            this.options.indicators && (s = s.concat(this.options.indicators));
          for (var n = s.length; n--; ) this.indicators.push(new p(this, s[n]));
          function r(t) {
            if (o.indicators)
              for (var i = o.indicators.length; i--; ) t.call(o.indicators[i]);
          }
          this.options.fadeScrollbars &&
            (this.on("scrollEnd", function() {
              r(function() {
                this.fade();
              });
            }),
            this.on("scrollCancel", function() {
              r(function() {
                this.fade();
              });
            }),
            this.on("scrollStart", function() {
              r(function() {
                this.fade(1);
              });
            }),
            this.on("beforeScrollStart", function() {
              r(function() {
                this.fade(1, !0);
              });
            })),
            this.on("refresh", function() {
              r(function() {
                this.refresh();
              });
            }),
            this.on("destroy", function() {
              r(function() {
                this.destroy();
              }),
                delete this.indicators;
            });
        },
        _initWheel: function() {
          a.addEvent(this.wrapper, "wheel", this),
            a.addEvent(this.wrapper, "mousewheel", this),
            a.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy", function() {
              clearTimeout(this.wheelTimeout),
                (this.wheelTimeout = null),
                a.removeEvent(this.wrapper, "wheel", this),
                a.removeEvent(this.wrapper, "mousewheel", this),
                a.removeEvent(this.wrapper, "DOMMouseScroll", this);
            });
        },
        _wheel: function(t) {
          if (this.enabled) {
            t.preventDefault();
            var i,
              e,
              s,
              o,
              n = this;
            if (
              (void 0 === this.wheelTimeout && n._execEvent("scrollStart"),
              clearTimeout(this.wheelTimeout),
              (this.wheelTimeout = setTimeout(function() {
                n.options.snap || n._execEvent("scrollEnd"),
                  (n.wheelTimeout = void 0);
              }, 400)),
              "deltaX" in t)
            )
              1 === t.deltaMode
                ? ((i = -t.deltaX * this.options.mouseWheelSpeed),
                  (e = -t.deltaY * this.options.mouseWheelSpeed))
                : ((i = -t.deltaX), (e = -t.deltaY));
            else if ("wheelDeltaX" in t)
              (i = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
                (e = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
            else if ("wheelDelta" in t)
              i = e = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
            else {
              if (!("detail" in t)) return;
              i = e = (-t.detail / 3) * this.options.mouseWheelSpeed;
            }
            if (
              ((i *= this.options.invertWheelDirection),
              (e *= this.options.invertWheelDirection),
              this.hasVerticalScroll || ((i = e), (e = 0)),
              this.options.snap)
            )
              return (
                (s = this.currentPage.pageX),
                (o = this.currentPage.pageY),
                i > 0 ? s-- : i < 0 && s++,
                e > 0 ? o-- : e < 0 && o++,
                void this.goToPage(s, o)
              );
            (s = this.x + r.round(this.hasHorizontalScroll ? i : 0)),
              (o = this.y + r.round(this.hasVerticalScroll ? e : 0)),
              (this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0),
              (this.directionY = e > 0 ? -1 : e < 0 ? 1 : 0),
              s > 0 ? (s = 0) : s < this.maxScrollX && (s = this.maxScrollX),
              o > 0 ? (o = 0) : o < this.maxScrollY && (o = this.maxScrollY),
              this.scrollTo(s, o, 0);
          }
        },
        _initSnap: function() {
          (this.currentPage = {}),
            "string" == typeof this.options.snap &&
              (this.options.snap = this.scroller.querySelectorAll(
                this.options.snap
              )),
            this.on("refresh", function() {
              var t,
                i,
                e,
                s,
                o,
                n,
                h = 0,
                a = 0,
                l = 0,
                c = this.options.snapStepX || this.wrapperWidth,
                p = this.options.snapStepY || this.wrapperHeight;
              if (
                ((this.pages = []),
                this.wrapperWidth &&
                  this.wrapperHeight &&
                  this.scrollerWidth &&
                  this.scrollerHeight)
              ) {
                if (!0 === this.options.snap)
                  for (
                    e = r.round(c / 2), s = r.round(p / 2);
                    l > -this.scrollerWidth;

                  ) {
                    for (
                      this.pages[h] = [], t = 0, o = 0;
                      o > -this.scrollerHeight;

                    )
                      (this.pages[h][t] = {
                        x: r.max(l, this.maxScrollX),
                        y: r.max(o, this.maxScrollY),
                        width: c,
                        height: p,
                        cx: l - e,
                        cy: o - s
                      }),
                        (o -= p),
                        t++;
                    (l -= c), h++;
                  }
                else
                  for (t = (n = this.options.snap).length, i = -1; h < t; h++)
                    (0 === h || n[h].offsetLeft <= n[h - 1].offsetLeft) &&
                      ((a = 0), i++),
                      this.pages[a] || (this.pages[a] = []),
                      (l = r.max(-n[h].offsetLeft, this.maxScrollX)),
                      (o = r.max(-n[h].offsetTop, this.maxScrollY)),
                      (e = l - r.round(n[h].offsetWidth / 2)),
                      (s = o - r.round(n[h].offsetHeight / 2)),
                      (this.pages[a][i] = {
                        x: l,
                        y: o,
                        width: n[h].offsetWidth,
                        height: n[h].offsetHeight,
                        cx: e,
                        cy: s
                      }),
                      l > this.maxScrollX && a++;
                this.goToPage(
                  this.currentPage.pageX || 0,
                  this.currentPage.pageY || 0,
                  0
                ),
                  this.options.snapThreshold % 1 == 0
                    ? ((this.snapThresholdX = this.options.snapThreshold),
                      (this.snapThresholdY = this.options.snapThreshold))
                    : ((this.snapThresholdX = r.round(
                        this.pages[this.currentPage.pageX][
                          this.currentPage.pageY
                        ].width * this.options.snapThreshold
                      )),
                      (this.snapThresholdY = r.round(
                        this.pages[this.currentPage.pageX][
                          this.currentPage.pageY
                        ].height * this.options.snapThreshold
                      )));
              }
            }),
            this.on("flick", function() {
              var t =
                this.options.snapSpeed ||
                r.max(
                  r.max(
                    r.min(r.abs(this.x - this.startX), 1e3),
                    r.min(r.abs(this.y - this.startY), 1e3)
                  ),
                  300
                );
              this.goToPage(
                this.currentPage.pageX + this.directionX,
                this.currentPage.pageY + this.directionY,
                t
              );
            });
        },
        _nearestSnap: function(t, i) {
          if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
          var e = 0,
            s = this.pages.length,
            o = 0;
          if (
            r.abs(t - this.absStartX) < this.snapThresholdX &&
            r.abs(i - this.absStartY) < this.snapThresholdY
          )
            return this.currentPage;
          for (
            t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
              i > 0 ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY);
            e < s;
            e++
          )
            if (t >= this.pages[e][0].cx) {
              t = this.pages[e][0].x;
              break;
            }
          for (s = this.pages[e].length; o < s; o++)
            if (i >= this.pages[0][o].cy) {
              i = this.pages[0][o].y;
              break;
            }
          return (
            e == this.currentPage.pageX &&
              ((e += this.directionX) < 0
                ? (e = 0)
                : e >= this.pages.length && (e = this.pages.length - 1),
              (t = this.pages[e][0].x)),
            o == this.currentPage.pageY &&
              ((o += this.directionY) < 0
                ? (o = 0)
                : o >= this.pages[0].length && (o = this.pages[0].length - 1),
              (i = this.pages[0][o].y)),
            { x: t, y: i, pageX: e, pageY: o }
          );
        },
        goToPage: function(t, i, e, s) {
          (s = s || this.options.bounceEasing),
            t >= this.pages.length
              ? (t = this.pages.length - 1)
              : t < 0 && (t = 0),
            i >= this.pages[t].length
              ? (i = this.pages[t].length - 1)
              : i < 0 && (i = 0);
          var o = this.pages[t][i].x,
            n = this.pages[t][i].y;
          (e =
            void 0 === e
              ? this.options.snapSpeed ||
                r.max(
                  r.max(
                    r.min(r.abs(o - this.x), 1e3),
                    r.min(r.abs(n - this.y), 1e3)
                  ),
                  300
                )
              : e),
            (this.currentPage = { x: o, y: n, pageX: t, pageY: i }),
            this.scrollTo(o, n, e, s);
        },
        next: function(t, i) {
          var e = this.currentPage.pageX,
            s = this.currentPage.pageY;
          ++e >= this.pages.length && this.hasVerticalScroll && ((e = 0), s++),
            this.goToPage(e, s, t, i);
        },
        prev: function(t, i) {
          var e = this.currentPage.pageX,
            s = this.currentPage.pageY;
          --e < 0 && this.hasVerticalScroll && ((e = 0), s--),
            this.goToPage(e, s, t, i);
        },
        _initKeys: function(t) {
          var i,
            e = {
              pageUp: 33,
              pageDown: 34,
              end: 35,
              home: 36,
              left: 37,
              up: 38,
              right: 39,
              down: 40
            };
          if ("object" == typeof this.options.keyBindings)
            for (i in this.options.keyBindings)
              "string" == typeof this.options.keyBindings[i] &&
                (this.options.keyBindings[i] = this.options.keyBindings[i]
                  .toUpperCase()
                  .charCodeAt(0));
          else this.options.keyBindings = {};
          for (i in e)
            this.options.keyBindings[i] = this.options.keyBindings[i] || e[i];
          a.addEvent(o, "keydown", this),
            this.on("destroy", function() {
              a.removeEvent(o, "keydown", this);
            });
        },
        _key: function(t) {
          if (this.enabled) {
            var i,
              e = this.options.snap,
              s = e ? this.currentPage.pageX : this.x,
              o = e ? this.currentPage.pageY : this.y,
              n = a.getTime(),
              h = this.keyTime || 0;
            switch (
              (this.options.useTransition &&
                this.isInTransition &&
                ((i = this.getComputedPosition()),
                this._translate(r.round(i.x), r.round(i.y)),
                (this.isInTransition = !1)),
              (this.keyAcceleration =
                n - h < 200 ? r.min(this.keyAcceleration + 0.25, 50) : 0),
              t.keyCode)
            ) {
              case this.options.keyBindings.pageUp:
                this.hasHorizontalScroll && !this.hasVerticalScroll
                  ? (s += e ? 1 : this.wrapperWidth)
                  : (o += e ? 1 : this.wrapperHeight);
                break;
              case this.options.keyBindings.pageDown:
                this.hasHorizontalScroll && !this.hasVerticalScroll
                  ? (s -= e ? 1 : this.wrapperWidth)
                  : (o -= e ? 1 : this.wrapperHeight);
                break;
              case this.options.keyBindings.end:
                (s = e ? this.pages.length - 1 : this.maxScrollX),
                  (o = e ? this.pages[0].length - 1 : this.maxScrollY);
                break;
              case this.options.keyBindings.home:
                (s = 0), (o = 0);
                break;
              case this.options.keyBindings.left:
                s += e ? -1 : (5 + this.keyAcceleration) >> 0;
                break;
              case this.options.keyBindings.up:
                o += e ? 1 : (5 + this.keyAcceleration) >> 0;
                break;
              case this.options.keyBindings.right:
                s -= e ? -1 : (5 + this.keyAcceleration) >> 0;
                break;
              case this.options.keyBindings.down:
                o -= e ? 1 : (5 + this.keyAcceleration) >> 0;
                break;
              default:
                return;
            }
            e
              ? this.goToPage(s, o)
              : (s > 0
                  ? ((s = 0), (this.keyAcceleration = 0))
                  : s < this.maxScrollX &&
                    ((s = this.maxScrollX), (this.keyAcceleration = 0)),
                o > 0
                  ? ((o = 0), (this.keyAcceleration = 0))
                  : o < this.maxScrollY &&
                    ((o = this.maxScrollY), (this.keyAcceleration = 0)),
                this.scrollTo(s, o, 0),
                (this.keyTime = n));
          }
        },
        _animate: function(t, i, e, s) {
          var o = this,
            n = this.x,
            r = this.y,
            l = a.getTime(),
            c = l + e;
          (this.isAnimating = !0),
            (function p() {
              var u,
                d,
                f,
                m = a.getTime();
              if (m >= c)
                return (
                  (o.isAnimating = !1),
                  o._translate(t, i),
                  void (
                    o.resetPosition(o.options.bounceTime) ||
                    o._execEvent("scrollEnd")
                  )
                );
              (f = s((m = (m - l) / e))),
                (u = (t - n) * f + n),
                (d = (i - r) * f + r),
                o._translate(u, d),
                o.isAnimating && h(p);
            })();
        },
        handleEvent: function(t) {
          switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
              this._start(t);
              break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
              this._move(t);
              break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
              this._end(t);
              break;
            case "orientationchange":
            case "resize":
              this._resize();
              break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
              this._transitionEnd(t);
              break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
              this._wheel(t);
              break;
            case "keydown":
              this._key(t);
              break;
            case "click":
              this.enabled &&
                !t._constructed &&
                (t.preventDefault(), t.stopPropagation());
          }
        }
      }),
        (p.prototype = {
          handleEvent: function(t) {
            switch (t.type) {
              case "touchstart":
              case "pointerdown":
              case "MSPointerDown":
              case "mousedown":
                this._start(t);
                break;
              case "touchmove":
              case "pointermove":
              case "MSPointerMove":
              case "mousemove":
                this._move(t);
                break;
              case "touchend":
              case "pointerup":
              case "MSPointerUp":
              case "mouseup":
              case "touchcancel":
              case "pointercancel":
              case "MSPointerCancel":
              case "mousecancel":
                this._end(t);
            }
          },
          destroy: function() {
            this.options.fadeScrollbars &&
              (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
              this.options.interactive &&
                (a.removeEvent(this.indicator, "touchstart", this),
                a.removeEvent(
                  this.indicator,
                  a.prefixPointerEvent("pointerdown"),
                  this
                ),
                a.removeEvent(this.indicator, "mousedown", this),
                a.removeEvent(o, "touchmove", this),
                a.removeEvent(o, a.prefixPointerEvent("pointermove"), this),
                a.removeEvent(o, "mousemove", this),
                a.removeEvent(o, "touchend", this),
                a.removeEvent(o, a.prefixPointerEvent("pointerup"), this),
                a.removeEvent(o, "mouseup", this)),
              this.options.defaultScrollbars &&
                this.wrapper.parentNode.removeChild(this.wrapper);
          },
          _start: function(t) {
            var i = t.touches ? t.touches[0] : t;
            t.preventDefault(),
              t.stopPropagation(),
              this.transitionTime(),
              (this.initiated = !0),
              (this.moved = !1),
              (this.lastPointX = i.pageX),
              (this.lastPointY = i.pageY),
              (this.startTime = a.getTime()),
              this.options.disableTouch || a.addEvent(o, "touchmove", this),
              this.options.disablePointer ||
                a.addEvent(o, a.prefixPointerEvent("pointermove"), this),
              this.options.disableMouse || a.addEvent(o, "mousemove", this),
              this.scroller._execEvent("beforeScrollStart");
          },
          _move: function(t) {
            var i,
              e,
              s,
              o,
              n = t.touches ? t.touches[0] : t;
            a.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
              (this.moved = !0),
              (i = n.pageX - this.lastPointX),
              (this.lastPointX = n.pageX),
              (e = n.pageY - this.lastPointY),
              (this.lastPointY = n.pageY),
              (s = this.x + i),
              (o = this.y + e),
              this._pos(s, o),
              t.preventDefault(),
              t.stopPropagation();
          },
          _end: function(t) {
            if (this.initiated) {
              if (
                ((this.initiated = !1),
                t.preventDefault(),
                t.stopPropagation(),
                a.removeEvent(o, "touchmove", this),
                a.removeEvent(o, a.prefixPointerEvent("pointermove"), this),
                a.removeEvent(o, "mousemove", this),
                this.scroller.options.snap)
              ) {
                var i = this.scroller._nearestSnap(
                    this.scroller.x,
                    this.scroller.y
                  ),
                  e =
                    this.options.snapSpeed ||
                    r.max(
                      r.max(
                        r.min(r.abs(this.scroller.x - i.x), 1e3),
                        r.min(r.abs(this.scroller.y - i.y), 1e3)
                      ),
                      300
                    );
                (this.scroller.x == i.x && this.scroller.y == i.y) ||
                  ((this.scroller.directionX = 0),
                  (this.scroller.directionY = 0),
                  (this.scroller.currentPage = i),
                  this.scroller.scrollTo(
                    i.x,
                    i.y,
                    e,
                    this.scroller.options.bounceEasing
                  ));
              }
              this.moved && this.scroller._execEvent("scrollEnd");
            }
          },
          transitionTime: function(t) {
            t = t || 0;
            var i = a.style.transitionDuration;
            if (((this.indicatorStyle[i] = t + "ms"), !t && a.isBadAndroid)) {
              this.indicatorStyle[i] = "0.0001ms";
              var e = this;
              h(function() {
                "0.0001ms" === e.indicatorStyle[i] &&
                  (e.indicatorStyle[i] = "0s");
              });
            }
          },
          transitionTimingFunction: function(t) {
            this.indicatorStyle[a.style.transitionTimingFunction] = t;
          },
          refresh: function() {
            this.transitionTime(),
              this.options.listenX && !this.options.listenY
                ? (this.indicatorStyle.display = this.scroller
                    .hasHorizontalScroll
                    ? "block"
                    : "none")
                : this.options.listenY && !this.options.listenX
                ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll
                    ? "block"
                    : "none")
                : (this.indicatorStyle.display =
                    this.scroller.hasHorizontalScroll ||
                    this.scroller.hasVerticalScroll
                      ? "block"
                      : "none"),
              this.scroller.hasHorizontalScroll &&
              this.scroller.hasVerticalScroll
                ? (a.addClass(this.wrapper, "iScrollBothScrollbars"),
                  a.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                  this.options.defaultScrollbars &&
                    this.options.customStyle &&
                    (this.options.listenX
                      ? (this.wrapper.style.right = "8px")
                      : (this.wrapper.style.bottom = "8px")))
                : (a.removeClass(this.wrapper, "iScrollBothScrollbars"),
                  a.addClass(this.wrapper, "iScrollLoneScrollbar"),
                  this.options.defaultScrollbars &&
                    this.options.customStyle &&
                    (this.options.listenX
                      ? (this.wrapper.style.right = "2px")
                      : (this.wrapper.style.bottom = "2px")));
            this.wrapper.offsetHeight;
            this.options.listenX &&
              ((this.wrapperWidth = this.wrapper.clientWidth),
              this.options.resize
                ? ((this.indicatorWidth = r.max(
                    r.round(
                      (this.wrapperWidth * this.wrapperWidth) /
                        (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                    ),
                    8
                  )),
                  (this.indicatorStyle.width = this.indicatorWidth + "px"))
                : (this.indicatorWidth = this.indicator.clientWidth),
              (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
              "clip" == this.options.shrink
                ? ((this.minBoundaryX = 8 - this.indicatorWidth),
                  (this.maxBoundaryX = this.wrapperWidth - 8))
                : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
              (this.sizeRatioX =
                this.options.speedRatioX ||
                (this.scroller.maxScrollX &&
                  this.maxPosX / this.scroller.maxScrollX))),
              this.options.listenY &&
                ((this.wrapperHeight = this.wrapper.clientHeight),
                this.options.resize
                  ? ((this.indicatorHeight = r.max(
                      r.round(
                        (this.wrapperHeight * this.wrapperHeight) /
                          (this.scroller.scrollerHeight ||
                            this.wrapperHeight ||
                            1)
                      ),
                      8
                    )),
                    (this.indicatorStyle.height = this.indicatorHeight + "px"))
                  : (this.indicatorHeight = this.indicator.clientHeight),
                (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                "clip" == this.options.shrink
                  ? ((this.minBoundaryY = 8 - this.indicatorHeight),
                    (this.maxBoundaryY = this.wrapperHeight - 8))
                  : ((this.minBoundaryY = 0),
                    (this.maxBoundaryY = this.maxPosY)),
                (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                (this.sizeRatioY =
                  this.options.speedRatioY ||
                  (this.scroller.maxScrollY &&
                    this.maxPosY / this.scroller.maxScrollY))),
              this.updatePosition();
          },
          updatePosition: function() {
            var t =
                (this.options.listenX &&
                  r.round(this.sizeRatioX * this.scroller.x)) ||
                0,
              i =
                (this.options.listenY &&
                  r.round(this.sizeRatioY * this.scroller.y)) ||
                0;
            this.options.ignoreBoundaries ||
              (t < this.minBoundaryX
                ? ("scale" == this.options.shrink &&
                    ((this.width = r.max(this.indicatorWidth + t, 8)),
                    (this.indicatorStyle.width = this.width + "px")),
                  (t = this.minBoundaryX))
                : t > this.maxBoundaryX
                ? "scale" == this.options.shrink
                  ? ((this.width = r.max(
                      this.indicatorWidth - (t - this.maxPosX),
                      8
                    )),
                    (this.indicatorStyle.width = this.width + "px"),
                    (t = this.maxPosX + this.indicatorWidth - this.width))
                  : (t = this.maxBoundaryX)
                : "scale" == this.options.shrink &&
                  this.width != this.indicatorWidth &&
                  ((this.width = this.indicatorWidth),
                  (this.indicatorStyle.width = this.width + "px")),
              i < this.minBoundaryY
                ? ("scale" == this.options.shrink &&
                    ((this.height = r.max(this.indicatorHeight + 3 * i, 8)),
                    (this.indicatorStyle.height = this.height + "px")),
                  (i = this.minBoundaryY))
                : i > this.maxBoundaryY
                ? "scale" == this.options.shrink
                  ? ((this.height = r.max(
                      this.indicatorHeight - 3 * (i - this.maxPosY),
                      8
                    )),
                    (this.indicatorStyle.height = this.height + "px"),
                    (i = this.maxPosY + this.indicatorHeight - this.height))
                  : (i = this.maxBoundaryY)
                : "scale" == this.options.shrink &&
                  this.height != this.indicatorHeight &&
                  ((this.height = this.indicatorHeight),
                  (this.indicatorStyle.height = this.height + "px"))),
              (this.x = t),
              (this.y = i),
              this.scroller.options.useTransform
                ? (this.indicatorStyle[a.style.transform] =
                    "translate(" +
                    t +
                    "px," +
                    i +
                    "px)" +
                    this.scroller.translateZ)
                : ((this.indicatorStyle.left = t + "px"),
                  (this.indicatorStyle.top = i + "px"));
          },
          _pos: function(t, i) {
            t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
              i < 0 ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
              (t = this.options.listenX
                ? r.round(t / this.sizeRatioX)
                : this.scroller.x),
              (i = this.options.listenY
                ? r.round(i / this.sizeRatioY)
                : this.scroller.y),
              this.scroller.scrollTo(t, i);
          },
          fade: function(t, i) {
            if (!i || this.visible) {
              clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
              var e = t ? 250 : 500,
                s = t ? 0 : 300;
              (t = t ? "1" : "0"),
                (this.wrapperStyle[a.style.transitionDuration] = e + "ms"),
                (this.fadeTimeout = setTimeout(
                  function(t) {
                    (this.wrapperStyle.opacity = t), (this.visible = +t);
                  }.bind(this, t),
                  s
                ));
            }
          }
        }),
        (l.utils = a),
        t.exports
          ? (t.exports = l)
          : void 0 ===
              (s = function() {
                return l;
              }.call(i, e, i, t)) || (t.exports = s);
    })(window, document, Math);
  },
  ,
  ,
  function(t, i, e) {
    "use strict";
    e.r(i),
      function(t) {
        e.d(i, "default", function() {
          return r;
        });
        e(27), e(36);
        var s = e(46),
          o = e.n(s);
        function n(t, i) {
          for (var e = 0; e < i.length; e++) {
            var s = i[e];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              "value" in s && (s.writable = !0),
              Object.defineProperty(t, s.key, s);
          }
        }
        var r = (function() {
          function i(t) {
            !(function(t, i) {
              if (!(t instanceof i))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              (this.touches = void 0 !== document.ontouchstart),
              (this.target = t.target),
              (this.trigger = t.trigger),
              (this.filter = t.filter),
              (this.speed = t.speed),
              this.scroll,
              (this.fixer = t.fixer),
              (this.current_scrollY = 0);
          }
          var e, s, r;
          return (
            (e = i),
            (s = [
              {
                key: "scrollOff",
                value: function(t) {
                  t.preventDefault();
                }
              },
              {
                key: "close",
                value: function(i) {
                  t(this.target).fadeOut(this.speed),
                    t(this.filter).fadeOut(this.speed),
                    i.removeClass("active"),
                    document.removeEventListener("touchmove", this.scrollOff, {
                      passive: !1
                    }),
                    t("body,html").animate(
                      { scrollTop: this.current_scrollY },
                      1
                    ),
                    t("body").attr({ style: "" });
                }
              },
              {
                key: "open",
                value: function(i, e) {
                  var s;
                  if (
                    ((this.current_scrollY = t(window).scrollTop()),
                    document.addEventListener("touchmove", this.scrollOff, {
                      passive: !1
                    }),
                    t("body").css({
                      position: "fixed",
                      width: "100%",
                      top: -1 * this.current_scrollY
                    }),
                    t(this.target).fadeIn(this.speed),
                    t(this.filter).fadeIn(this.speed),
                    i.addClass("active"),
                    (s = new o.a(this.target, {
                      scrollX: !1,
                      preventDefault: !1,
                      disablePointer: !0,
                      disableTouch: !1,
                      mouseWheel: !0
                    })),
                    e.length > 0)
                  )
                    for (var n = 0; n < e.length; n++) e[n](s);
                }
              },
              {
                key: "exec",
                value: function() {
                  for (
                    var i = arguments.length, e = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    e[s] = arguments[s];
                  var o = this;
                  t(o.target)
                    .find("#scroller > .inner")
                    .css({ "padding-bottom": this.fixer }),
                    t(this.trigger).on("click", function(i) {
                      "block" == t(o.target).css("display")
                        ? o.close(t(this))
                        : o.open(t(this), e),
                        i.preventDefault();
                    });
                }
              }
            ]) && n(e.prototype, s),
            r && n(e, r),
            i
          );
        })();
      }.call(this, e(2));
  }
]);
//# sourceMappingURL=SpNavi.js.map
