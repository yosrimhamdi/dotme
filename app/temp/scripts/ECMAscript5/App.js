"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  var r;
  /*!
   * jQuery JavaScript Library v3.4.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2019-05-01T21:04Z
   */

  !function (t, n) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";

    var i = [],
        a = n.document,
        s = Object.getPrototypeOf,
        u = i.slice,
        l = i.concat,
        c = i.push,
        f = i.indexOf,
        p = {},
        d = p.toString,
        h = p.hasOwnProperty,
        g = h.toString,
        v = g.call(Object),
        y = {},
        m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        x = function x(e) {
      return null != e && e === e.window;
    },
        b = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(e, t, n) {
      var r,
          o,
          i = (n = n || a).createElement("script");
      if (i.text = e, t) for (r in b) {
        (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
      }
      n.head.appendChild(i).parentNode.removeChild(i);
    }

    function T(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? p[d.call(e)] || "object" : _typeof(e);
    }

    var C = function C(e, t) {
      return new C.fn.init(e, t);
    },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function S(e) {
      var t = !!e && "length" in e && e.length,
          n = T(e);
      return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    C.fn = C.prototype = {
      jquery: "3.4.1",
      constructor: C,
      length: 0,
      toArray: function toArray() {
        return u.call(this);
      },
      get: function get(e) {
        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = C.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return C.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(C.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(u.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: c,
      sort: i.sort,
      splice: i.splice
    }, C.extend = C.fn.extend = function () {
      var e,
          t,
          n,
          r,
          o,
          i,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;

      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
        if (null != (e = arguments[s])) for (t in e) {
          r = e[t], "__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        }
      }

      return a;
    }, C.extend({
      expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === v);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t) {
        w(e, {
          nonce: t && t.nonce
        });
      },
      each: function each(e, t) {
        var n,
            r = 0;
        if (S(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
          ;
        } else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
        return e;
      },
      trim: function trim(e) {
        return null == e ? "" : (e + "").replace(E, "");
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (S(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : f.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++) {
          e[o++] = t[r];
        }

        return e.length = o, e;
      },
      grep: function grep(e, t, n) {
        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) {
          !t(e[o], o) !== a && r.push(e[o]);
        }

        return r;
      },
      map: function map(e, t, n) {
        var r,
            o,
            i = 0,
            a = [];
        if (S(e)) for (r = e.length; i < r; i++) {
          null != (o = t(e[i], i, n)) && a.push(o);
        } else for (i in e) {
          null != (o = t(e[i], i, n)) && a.push(o);
        }
        return l.apply([], a);
      },
      guid: 1,
      support: y
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      p["[object " + t + "]"] = t.toLowerCase();
    });

    var k =
    /*!
     * Sizzle CSS Selector Engine v2.3.4
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2019-04-08
     */
    function (e) {
      var t,
          n,
          r,
          o,
          i,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v,
          y,
          m,
          x,
          b = "sizzle" + 1 * new Date(),
          w = e.document,
          T = 0,
          C = 0,
          E = ue(),
          S = ue(),
          k = ue(),
          N = ue(),
          A = function A(e, t) {
        return e === t && (f = !0), 0;
      },
          j = {}.hasOwnProperty,
          D = [],
          L = D.pop,
          q = D.push,
          H = D.push,
          O = D.slice,
          P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
          $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
          F = new RegExp(M + "+", "g"),
          B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          _ = new RegExp("^" + M + "*," + M + "*"),
          z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          U = new RegExp(M + "|>"),
          X = new RegExp($),
          V = new RegExp("^" + I + "$"),
          G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
          Y = /HTML$/i,
          Q = /^(?:input|select|textarea|button)$/i,
          J = /^h\d$/i,
          K = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ne = function ne(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          oe = function oe(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          ie = function ie() {
        p();
      },
          ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        H.apply(D = O.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: D.length ? function (e, t) {
            q.apply(e, O.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function se(e, t, r, o) {
        var i,
            s,
            l,
            c,
            f,
            h,
            y,
            m = t && t.ownerDocument,
            T = t ? t.nodeType : 9;
        if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

        if (!o && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
          if (11 !== T && (f = Z.exec(e))) if (i = f[1]) {
            if (9 === T) {
              if (!(l = t.getElementById(i))) return r;
              if (l.id === i) return r.push(l), r;
            } else if (m && (l = m.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r;
          } else {
            if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
            if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(i)), r;
          }

          if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
            if (y = e, m = t, 1 === T && U.test(e)) {
              for ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) {
                h[s] = "#" + c + " " + xe(h[s]);
              }

              y = h.join(","), m = ee.test(e) && ye(t.parentNode) || t;
            }

            try {
              return H.apply(r, m.querySelectorAll(y)), r;
            } catch (t) {
              N(e, !0);
            } finally {
              c === b && t.removeAttribute("id");
            }
          }
        }

        return u(e.replace(B, "$1"), t, r, o);
      }

      function ue() {
        var e = [];
        return function t(n, o) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o;
        };
      }

      function le(e) {
        return e[b] = !0, e;
      }

      function ce(e) {
        var t = d.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function fe(e, t) {
        for (var n = e.split("|"), o = n.length; o--;) {
          r.attrHandle[n[o]] = t;
        }
      }

      function pe(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function de(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function he(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function ge(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function ve(e) {
        return le(function (t) {
          return t = +t, le(function (n, r) {
            for (var o, i = e([], n.length, t), a = i.length; a--;) {
              n[o = i[a]] && (n[o] = !(r[o] = n[o]));
            }
          });
        });
      }

      function ye(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in n = se.support = {}, i = se.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || "HTML");
      }, p = se.setDocument = function (e) {
        var t,
            o,
            a = e ? e.ownerDocument || e : w;
        return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !i(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ce(function (e) {
          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function (e) {
          return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
        }), n.getById ? (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n,
                r,
                o,
                i = t.getElementById(e);

            if (i) {
              if ((n = i.getAttributeNode("id")) && n.value === e) return [i];

              for (o = t.getElementsByName(e), r = 0; i = o[r++];) {
                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
              }
            }

            return [];
          }
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              o = 0,
              i = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; n = i[o++];) {
              1 === n.nodeType && r.push(n);
            }

            return r;
          }

          return i;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function (e) {
          h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = d.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
        })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
          n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", $);
        }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, A = t ? function (e, t) {
          if (e === t) return f = !0, 0;
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return f = !0, 0;
          var n,
              r = 0,
              o = e.parentNode,
              i = t.parentNode,
              a = [e],
              s = [t];
          if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : c ? P(c, e) - P(c, t) : 0;
          if (o === i) return pe(e, t);

          for (n = e; n = n.parentNode;) {
            a.unshift(n);
          }

          for (n = t; n = n.parentNode;) {
            s.unshift(n);
          }

          for (; a[r] === s[r];) {
            r++;
          }

          return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
        }, d) : d;
      }, se.matches = function (e, t) {
        return se(e, null, null, t);
      }, se.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !N[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
          var r = m.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {
          N(t, !0);
        }
        return se(t, d, null, [e]).length > 0;
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var o = r.attrHandle[t.toLowerCase()],
            i = o && j.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
        return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }, se.escape = function (e) {
        return (e + "").replace(re, oe);
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, se.uniqueSort = function (e) {
        var t,
            r = [],
            o = 0,
            i = 0;

        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
          for (; t = e[i++];) {
            t === e[i] && (o = r.push(i));
          }

          for (; o--;) {
            e.splice(r[o], 1);
          }
        }

        return c = null, e;
      }, o = se.getText = function (e) {
        var t,
            n = "",
            r = 0,
            i = e.nodeType;

        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += o(e);
            }
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; t = e[r++];) {
          n += o(t);
        }

        return n;
      }, (r = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = E[e + " "];
            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, n) {
            return function (r) {
              var o = se.attr(r, e);
              return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(e, t, n, r, o) {
            var i = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
            return 1 === r && 0 === o ? function (e) {
              return !!e.parentNode;
            } : function (t, n, u) {
              var l,
                  c,
                  f,
                  p,
                  d,
                  h,
                  g = i !== a ? "nextSibling" : "previousSibling",
                  v = t.parentNode,
                  y = s && t.nodeName.toLowerCase(),
                  m = !u && !s,
                  x = !1;

              if (v) {
                if (i) {
                  for (; g;) {
                    for (p = t; p = p[g];) {
                      if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                    }

                    h = g = "only" === e && !h && "nextSibling";
                  }

                  return !0;
                }

                if (h = [a ? v.firstChild : v.lastChild], a && m) {
                  for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) {
                    if (1 === p.nodeType && ++x && p === t) {
                      c[e] = [T, d, x];
                      break;
                    }
                  }
                } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) {
                  ;
                }

                return (x -= o) === r || x % r == 0 && x / r >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var n,
                o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
              for (var r, i = o(e, t), a = i.length; a--;) {
                e[r = P(e, i[a])] = !(n[r] = i[a]);
              }
            }) : function (e) {
              return o(e, 0, n);
            }) : o;
          }
        },
        pseudos: {
          not: le(function (e) {
            var t = [],
                n = [],
                r = s(e.replace(B, "$1"));
            return r[b] ? le(function (e, t, n, o) {
              for (var i, a = r(e, null, o, []), s = e.length; s--;) {
                (i = a[s]) && (e[s] = !(t[s] = i));
              }
            }) : function (e, o, i) {
              return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
            };
          }),
          has: le(function (e) {
            return function (t) {
              return se(e, t).length > 0;
            };
          }),
          contains: le(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || o(t)).indexOf(e) > -1;
            };
          }),
          lang: le(function (e) {
            return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;

              do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === h;
          },
          focus: function focus(e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !r.pseudos.empty(e);
          },
          header: function header(e) {
            return J.test(e.nodeName);
          },
          input: function input(e) {
            return Q.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
              e.push(r);
            }

            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }

            return e;
          })
        }
      }).pseudos.nth = r.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        r.pseudos[t] = de(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        r.pseudos[t] = he(t);
      }

      function me() {}

      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }

        return r;
      }

      function be(e, t, n) {
        var r = t.dir,
            o = t.next,
            i = o || r,
            a = n && "parentNode" === i,
            s = C++;
        return t.first ? function (t, n, o) {
          for (; t = t[r];) {
            if (1 === t.nodeType || a) return e(t, n, o);
          }

          return !1;
        } : function (t, n, u) {
          var l,
              c,
              f,
              p = [T, s];

          if (u) {
            for (; t = t[r];) {
              if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            }
          } else for (; t = t[r];) {
            if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;else {
              if ((l = c[i]) && l[0] === T && l[1] === s) return p[2] = l[2];
              if (c[i] = p, p[2] = e(t, n, u)) return !0;
            }
          }

          return !1;
        };
      }

      function we(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var o = e.length; o--;) {
            if (!e[o](t, n, r)) return !1;
          }

          return !0;
        } : e[0];
      }

      function Te(e, t, n, r, o) {
        for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
          (i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
        }

        return a;
      }

      function Ce(e, t, n, r, o, i) {
        return r && !r[b] && (r = Ce(r)), o && !o[b] && (o = Ce(o, i)), le(function (i, a, s, u) {
          var l,
              c,
              f,
              p = [],
              d = [],
              h = a.length,
              g = i || function (e, t, n) {
            for (var r = 0, o = t.length; r < o; r++) {
              se(e, t[r], n);
            }

            return n;
          }(t || "*", s.nodeType ? [s] : s, []),
              v = !e || !i && t ? g : Te(g, p, e, s, u),
              y = n ? o || (i ? e : h || r) ? [] : a : v;

          if (n && n(v, y, s, u), r) for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;) {
            (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
          }

          if (i) {
            if (o || e) {
              if (o) {
                for (l = [], c = y.length; c--;) {
                  (f = y[c]) && l.push(v[c] = f);
                }

                o(null, y = [], l, u);
              }

              for (c = y.length; c--;) {
                (f = y[c]) && (l = o ? P(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f));
              }
            }
          } else y = Te(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : H.apply(a, y);
        });
      }

      function Ee(e) {
        for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function (e) {
          return e === t;
        }, s, !0), f = be(function (e) {
          return P(t, e) > -1;
        }, s, !0), p = [function (e, n, r) {
          var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
          return t = null, o;
        }]; u < i; u++) {
          if (n = r.relative[e[u].type]) p = [be(we(p), n)];else {
            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
              for (o = ++u; o < i && !r.relative[e[o].type]; o++) {
                ;
              }

              return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                value: " " === e[u - 2].type ? "*" : ""
              })).replace(B, "$1"), n, u < o && Ee(e.slice(u, o)), o < i && Ee(e = e.slice(o)), o < i && xe(e));
            }

            p.push(n);
          }
        }

        return we(p);
      }

      return me.prototype = r.filters = r.pseudos, r.setFilters = new me(), a = se.tokenize = function (e, t) {
        var n,
            o,
            i,
            a,
            s,
            u,
            l,
            c = S[e + " "];
        if (c) return t ? 0 : c.slice(0);

        for (s = e, u = [], l = r.preFilter; s;) {
          for (a in n && !(o = _.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = z.exec(s)) && (n = o.shift(), i.push({
            value: n,
            type: o[0].replace(B, " ")
          }), s = s.slice(n.length)), r.filter) {
            !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
              value: n,
              type: a,
              matches: o
            }), s = s.slice(n.length));
          }

          if (!n) break;
        }

        return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
      }, s = se.compile = function (e, t) {
        var n,
            o = [],
            i = [],
            s = k[e + " "];

        if (!s) {
          for (t || (t = a(e)), n = t.length; n--;) {
            (s = Ee(t[n]))[b] ? o.push(s) : i.push(s);
          }

          (s = k(e, function (e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                i = function i(_i, a, s, u, c) {
              var f,
                  h,
                  v,
                  y = 0,
                  m = "0",
                  x = _i && [],
                  b = [],
                  w = l,
                  C = _i || o && r.find.TAG("*", c),
                  E = T += null == w ? 1 : Math.random() || .1,
                  S = C.length;

              for (c && (l = a === d || a || c); m !== S && null != (f = C[m]); m++) {
                if (o && f) {
                  for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];) {
                    if (v(f, a || d, s)) {
                      u.push(f);
                      break;
                    }
                  }

                  c && (T = E);
                }

                n && ((f = !v && f) && y--, _i && x.push(f));
              }

              if (y += m, n && m !== y) {
                for (h = 0; v = t[h++];) {
                  v(x, b, a, s);
                }

                if (_i) {
                  if (y > 0) for (; m--;) {
                    x[m] || b[m] || (b[m] = L.call(u));
                  }
                  b = Te(b);
                }

                H.apply(u, b), c && !_i && b.length > 0 && y + t.length > 1 && se.uniqueSort(u);
              }

              return c && (T = E, l = w), x;
            };

            return n ? le(i) : i;
          }(i, o))).selector = e;
        }

        return s;
      }, u = se.select = function (e, t, n, o) {
        var i,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !o && a(e = p.selector || e);

        if (n = n || [], 1 === d.length) {
          if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
            p && (t = t.parentNode), e = e.slice(u.shift().value.length);
          }

          for (i = G.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);) {
            if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
              if (u.splice(i, 1), !(e = o.length && xe(u))) return H.apply(n, o), n;
              break;
            }
          }
        }

        return (p || s(e, d))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
      }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      }), ce(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || fe("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ce(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || fe("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ce(function (e) {
        return null == e.getAttribute("disabled");
      }) || fe(R, function (e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), se;
    }(n);

    C.find = k, C.expr = k.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = k.uniqueSort, C.text = k.getText, C.isXMLDoc = k.isXML, C.contains = k.contains, C.escapeSelector = k.escape;

    var N = function N(e, t, n) {
      for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (o && C(e).is(n)) break;
          r.push(e);
        }
      }

      return r;
    },
        A = function A(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        j = C.expr.match.needsContext;

    function D(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function q(e, t, n) {
      return m(t) ? C.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? C.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? C.grep(e, function (e) {
        return f.call(t, e) > -1 !== n;
      }) : C.filter(t, e, n);
    }

    C.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, C.fn.extend({
      find: function find(e) {
        var t,
            n,
            r = this.length,
            o = this;
        if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
          for (t = 0; t < r; t++) {
            if (C.contains(o[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < r; t++) {
          C.find(e, o[t], n);
        }

        return r > 1 ? C.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(q(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(q(this, e || [], !0));
      },
      is: function is(e) {
        return !!q(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length;
      }
    });
    var H,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function (e, t, n) {
      var r, o;
      if (!e) return this;

      if (n = n || H, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), L.test(r[1]) && C.isPlainObject(t)) for (r in t) {
            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return (o = a.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
    }).prototype = C.fn, H = C(a);
    var P = /^(?:parents|prev(?:Until|All))/,
        R = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function M(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    C.fn.extend({
      has: function has(e) {
        var t = C(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (C.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            r = 0,
            o = this.length,
            i = [],
            a = "string" != typeof e && C(e);
        if (!j.test(e)) for (; r < o; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
              i.push(n);
              break;
            }
          }
        }
        return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), C.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return N(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return N(e, "parentNode", n);
      },
      next: function next(e) {
        return M(e, "nextSibling");
      },
      prev: function prev(e) {
        return M(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return N(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return N(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return N(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return N(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return A((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return A(e.firstChild);
      },
      contents: function contents(e) {
        return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
      }
    }, function (e, t) {
      C.fn[e] = function (n, r) {
        var o = C.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), this.length > 1 && (R[e] || C.uniqueSort(o), P.test(e) && o.reverse()), this.pushStack(o);
      };
    });
    var I = /[^\x20\t\r\n\f]+/g;

    function W(e) {
      return e;
    }

    function $(e) {
      throw e;
    }

    function F(e, t, n, r) {
      var o;

      try {
        e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    C.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return C.each(e.match(I) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : C.extend({}, e);

      var t,
          n,
          r,
          o,
          i = [],
          a = [],
          s = -1,
          u = function u() {
        for (o = o || e.once, r = t = !0; a.length; s = -1) {
          for (n = a.shift(); ++s < i.length;) {
            !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
          }
        }

        e.memory || (n = !1), t = !1, o && (i = n ? [] : "");
      },
          l = {
        add: function add() {
          return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
            C.each(n, function (n, r) {
              m(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r);
            });
          }(arguments), n && !t && u()), this;
        },
        remove: function remove() {
          return C.each(arguments, function (e, t) {
            for (var n; (n = C.inArray(t, i, n)) > -1;) {
              i.splice(n, 1), n <= s && s--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? C.inArray(e, i) > -1 : i.length > 0;
        },
        empty: function empty() {
          return i && (i = []), this;
        },
        disable: function disable() {
          return o = a = [], i = n = "", this;
        },
        disabled: function disabled() {
          return !i;
        },
        lock: function lock() {
          return o = a = [], n || t || (i = n = ""), this;
        },
        locked: function locked() {
          return !!o;
        },
        fireWith: function fireWith(e, n) {
          return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
        },
        fire: function fire() {
          return l.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!r;
        }
      };

      return l;
    }, C.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            o = {
          state: function state() {
            return r;
          },
          always: function always() {
            return i.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return o.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return C.Deferred(function (n) {
              C.each(t, function (t, r) {
                var o = m(e[r[4]]) && e[r[4]];
                i[r[1]](function () {
                  var e = o && o.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, r, o) {
            var i = 0;

            function a(e, t, r, o) {
              return function () {
                var s = this,
                    u = arguments,
                    l = function l() {
                  var n, l;

                  if (!(e < i)) {
                    if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    l = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, m(l) ? o ? l.call(n, a(i, t, W, o), a(i, t, $, o)) : (i++, l.call(n, a(i, t, W, o), a(i, t, $, o), a(i, t, W, t.notifyWith))) : (r !== W && (s = void 0, u = [n]), (o || t.resolveWith)(s, u));
                  }
                },
                    c = o ? l : function () {
                  try {
                    l();
                  } catch (n) {
                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= i && (r !== $ && (s = void 0, u = [n]), t.rejectWith(s, u));
                  }
                };

                e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c));
              };
            }

            return C.Deferred(function (n) {
              t[0][3].add(a(0, n, m(o) ? o : W, n.notifyWith)), t[1][3].add(a(0, n, m(e) ? e : W)), t[2][3].add(a(0, n, m(r) ? r : $));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? C.extend(e, o) : o;
          }
        },
            i = {};
        return C.each(t, function (e, n) {
          var a = n[2],
              s = n[5];
          o[n[1]] = a.add, s && a.add(function () {
            r = s;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function () {
            return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
          }, i[n[0] + "With"] = a.fireWith;
        }), o.promise(i), e && e.call(i, i), i;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            r = Array(n),
            o = u.call(arguments),
            i = C.Deferred(),
            a = function a(e) {
          return function (n) {
            r[e] = this, o[e] = arguments.length > 1 ? u.call(arguments) : n, --t || i.resolveWith(r, o);
          };
        };

        if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || m(o[n] && o[n].then))) return i.then();

        for (; n--;) {
          F(o[n], a(n), i.reject);
        }

        return i.promise();
      }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, C.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };

    var _ = C.Deferred();

    function z() {
      a.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), C.ready();
    }

    C.fn.ready = function (e) {
      return _.then(e)["catch"](function (e) {
        C.readyException(e);
      }), this;
    }, C.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || _.resolveWith(a, [C]));
      }
    }), C.ready.then = _.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));

    var U = function U(e, t, n, r, o, i, a) {
      var s = 0,
          u = e.length,
          l = null == n;
      if ("object" === T(n)) for (s in o = !0, n) {
        U(e, t, s, n[s], !0, i, a);
      } else if (void 0 !== r && (o = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(C(e), n);
      })), t)) for (; s < u; s++) {
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      }
      return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
    },
        X = /^-ms-/,
        V = /-([a-z])/g;

    function G(e, t) {
      return t.toUpperCase();
    }

    function Y(e) {
      return e.replace(X, "ms-").replace(V, G);
    }

    var Q = function Q(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function J() {
      this.expando = C.expando + J.uid++;
    }

    J.uid = 1, J.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var r,
            o = this.cache(e);
        if ("string" == typeof t) o[Y(t)] = n;else for (r in t) {
          o[Y(r)] = t[r];
        }
        return o;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            r = e[this.expando];

        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(I) || []).length;

            for (; n--;) {
              delete r[t[n]];
            }
          }

          (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !C.isEmptyObject(t);
      }
    };
    var K = new J(),
        Z = new J(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;

    function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}

        Z.set(e, t, n);
      } else n = void 0;
      return n;
    }

    C.extend({
      hasData: function hasData(e) {
        return Z.hasData(e) || K.hasData(e);
      },
      data: function data(e, t, n) {
        return Z.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        Z.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return K.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        K.remove(e, t);
      }
    }), C.fn.extend({
      data: function data(e, t) {
        var n,
            r,
            o,
            i = this[0],
            a = i && i.attributes;

        if (void 0 === e) {
          if (this.length && (o = Z.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
            for (n = a.length; n--;) {
              a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), ne(i, r, o[r]));
            }

            K.set(i, "hasDataAttrs", !0);
          }

          return o;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Z.set(this, e);
        }) : U(this, function (t) {
          var n;
          if (i && void 0 === t) return void 0 !== (n = Z.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;
          this.each(function () {
            Z.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Z.remove(this, e);
        });
      }
    }), C.extend({
      queue: function queue(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = C.queue(e, t),
            r = n.length,
            o = n.shift(),
            i = C._queueHooks(e, t);

        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
          C.dequeue(e, t);
        }, i)), !r && i && i.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return K.get(e, n) || K.access(e, n, {
          empty: C.Callbacks("once memory").add(function () {
            K.remove(e, [t + "queue", n]);
          })
        });
      }
    }), C.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = C.queue(this, e, t);
          C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            r = 1,
            o = C.Deferred(),
            i = this,
            a = this.length,
            s = function s() {
          --r || o.resolveWith(i, [i]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
          (n = K.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        }

        return s(), o.promise(t);
      }
    });

    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ae = a.documentElement,
        se = function se(e) {
      return C.contains(e.ownerDocument, e);
    },
        ue = {
      composed: !0
    };

    ae.getRootNode && (se = function se(e) {
      return C.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
    });

    var le = function le(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === C.css(e, "display");
    },
        ce = function ce(e, t, n, r) {
      var o,
          i,
          a = {};

      for (i in t) {
        a[i] = e.style[i], e.style[i] = t[i];
      }

      for (i in o = n.apply(e, r || []), t) {
        e.style[i] = a[i];
      }

      return o;
    };

    function fe(e, t, n, r) {
      var o,
          i,
          a = 20,
          s = r ? function () {
        return r.cur();
      } : function () {
        return C.css(e, t, "");
      },
          u = s(),
          l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && oe.exec(C.css(e, t));

      if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; a--;) {
          C.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
        }

        c *= 2, C.style(e, t, c + l), n = n || [];
      }

      return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o;
    }

    var pe = {};

    function de(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = pe[r];
      return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), pe[r] = o, o);
    }

    function he(e, t) {
      for (var n, r, o = [], i = 0, a = e.length; i < a; i++) {
        (r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = K.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && le(r) && (o[i] = de(r))) : "none" !== n && (o[i] = "none", K.set(r, "display", n)));
      }

      for (i = 0; i < a; i++) {
        null != o[i] && (e[i].style.display = o[i]);
      }

      return e;
    }

    C.fn.extend({
      show: function show() {
        return he(this, !0);
      },
      hide: function hide() {
        return he(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          le(this) ? C(this).show() : C(this).hide();
        });
      }
    });
    var ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ye = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function xe(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? C.merge([e], n) : n;
    }

    function be(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
    }

    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
    var we,
        Te,
        Ce = /<|&#?\w+;/;

    function Ee(e, t, n, r, o) {
      for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
        if ((i = e[d]) || 0 === i) if ("object" === T(i)) C.merge(p, i.nodeType ? [i] : i);else if (Ce.test(i)) {
          for (a = a || f.appendChild(t.createElement("div")), s = (ve.exec(i) || ["", ""])[1].toLowerCase(), u = me[s] || me._default, a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2], c = u[0]; c--;) {
            a = a.lastChild;
          }

          C.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(i));
      }

      for (f.textContent = "", d = 0; i = p[d++];) {
        if (r && C.inArray(i, r) > -1) o && o.push(i);else if (l = se(i), a = xe(f.appendChild(i), "script"), l && be(a), n) for (c = 0; i = a[c++];) {
          ye.test(i.type || "") && n.push(i);
        }
      }

      return f;
    }

    we = a.createDocumentFragment().appendChild(a.createElement("div")), (Te = a.createElement("input")).setAttribute("type", "radio"), Te.setAttribute("checked", "checked"), Te.setAttribute("name", "t"), we.appendChild(Te), y.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
    var Se = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ne = /^([^.]*)(?:\.(.+)|)/;

    function Ae() {
      return !0;
    }

    function je() {
      return !1;
    }

    function De(e, t) {
      return e === function () {
        try {
          return a.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function Le(e, t, n, r, o, i) {
      var a, s;

      if ("object" == _typeof(t)) {
        for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
          Le(e, s, n, r, t[s], i);
        }

        return e;
      }

      if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = je;else if (!o) return e;
      return 1 === i && (a = o, (o = function o(e) {
        return C().off(e), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = C.guid++)), e.each(function () {
        C.event.add(this, t, o, r, n);
      });
    }

    function qe(e, t, n) {
      n ? (K.set(e, t, !1), C.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var r,
              o,
              i = K.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (i.length) (C.event.special[t] || {}).delegateType && e.stopPropagation();else if (i = u.call(arguments), K.set(this, t, i), r = n(this, t), this[t](), i !== (o = K.get(this, t)) || r ? K.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
          } else i.length && (K.set(this, t, {
            value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === K.get(e, t) && C.event.add(e, t, Ae);
    }

    C.event = {
      global: {},
      add: function add(e, t, n, r, o) {
        var i,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.get(e);
        if (v) for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ae, o), n.guid || (n.guid = C.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
          return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(I) || [""]).length; l--;) {
          d = g = (s = Ne.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = C.event.special[d] || {}, c = C.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && C.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[d] = !0);
        }
      },
      remove: function remove(e, t, n, r, o) {
        var i,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.hasData(e) && K.get(e);

        if (v && (u = v.events)) {
          for (l = (t = (t || "").match(I) || [""]).length; l--;) {
            if (d = g = (s = Ne.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
              for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) {
                c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              }

              a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || C.removeEvent(e, d, v.handle), delete u[d]);
            } else for (d in u) {
              C.event.remove(e, d + t[l], n, r, !0);
            }
          }

          C.isEmptyObject(u) && K.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            s = C.event.fix(e),
            u = new Array(arguments.length),
            l = (K.get(this, "events") || {})[s.type] || [],
            c = C.event.special[s.type] || {};

        for (u[0] = s, t = 1; t < arguments.length; t++) {
          u[t] = arguments[t];
        }

        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
          for (a = C.event.handlers.call(this, s, l), t = 0; (o = a[t++]) && !s.isPropagationStopped();) {
            for (s.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) {
              s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
            }
          }

          return c.postDispatch && c.postDispatch.call(this, s), s.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            r,
            o,
            i,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
        if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (i = [], a = {}, n = 0; n < u; n++) {
              void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(l) > -1 : C.find(o, this, null, [l]).length), a[o] && i.push(r);
            }

            i.length && s.push({
              elem: l,
              handlers: i
            });
          }
        }
        return l = this, u < t.length && s.push({
          elem: l,
          handlers: t.slice(u)
        }), s;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(C.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: m(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[C.expando] ? e : new C.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && D(t, "input") && qe(t, "click", Ae), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && D(t, "input") && qe(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return ge.test(t.type) && t.click && D(t, "input") && K.get(t, "click") || D(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : je, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
    }, C.Event.prototype = {
      constructor: C.Event,
      isDefaultPrevented: je,
      isPropagationStopped: je,
      isImmediatePropagationStopped: je,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, C.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, C.event.addProp), C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      C.event.special[e] = {
        setup: function setup() {
          return qe(this, e, De), !1;
        },
        trigger: function trigger() {
          return qe(this, e), !0;
        },
        delegateType: t
      };
    }), C.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      C.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n,
              r = this,
              o = e.relatedTarget,
              i = e.handleObj;
          return o && (o === r || C.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), C.fn.extend({
      on: function on(e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function one(e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function off(e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

        if ("object" == _typeof(e)) {
          for (o in e) {
            this.off(o, t, e[o]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = je), this.each(function () {
          C.event.remove(this, e, n, t);
        });
      }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
      return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }

    function Ie(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function We(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function $e(e, t) {
      var n, r, o, i, a, s, u, l;

      if (1 === t.nodeType) {
        if (K.hasData(e) && (i = K.access(e), a = K.set(t, i), l = i.events)) for (o in delete a.handle, a.events = {}, l) {
          for (n = 0, r = l[o].length; n < r; n++) {
            C.event.add(t, o, l[o][n]);
          }
        }
        Z.hasData(e) && (s = Z.access(e), u = C.extend({}, s), Z.set(t, u));
      }
    }

    function Fe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function Be(e, t, n, r) {
      t = l.apply([], t);
      var o,
          i,
          a,
          s,
          u,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = m(h);
      if (g || p > 1 && "string" == typeof h && !y.checkClone && Pe.test(h)) return e.each(function (o) {
        var i = e.eq(o);
        g && (t[0] = h.call(this, o, i.html())), Be(i, t, n, r);
      });

      if (p && (i = (o = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
        for (s = (a = C.map(xe(o, "script"), Ie)).length; f < p; f++) {
          u = o, f !== d && (u = C.clone(u, !0, !0), s && C.merge(a, xe(u, "script"))), n.call(e[f], u, f);
        }

        if (s) for (c = a[a.length - 1].ownerDocument, C.map(a, We), f = 0; f < s; f++) {
          u = a[f], ye.test(u.type || "") && !K.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }) : w(u.textContent.replace(Re, ""), u, c));
        }
      }

      return e;
    }

    function _e(e, t, n) {
      for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) {
        n || 1 !== r.nodeType || C.cleanData(xe(r)), r.parentNode && (n && se(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
      }

      return e;
    }

    C.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(He, "<$1></$2>");
      },
      clone: function clone(e, t, n) {
        var r,
            o,
            i,
            a,
            s = e.cloneNode(!0),
            u = se(e);
        if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (a = xe(s), r = 0, o = (i = xe(e)).length; r < o; r++) {
          Fe(i[r], a[r]);
        }
        if (t) if (n) for (i = i || xe(e), a = a || xe(s), r = 0, o = i.length; r < o; r++) {
          $e(i[r], a[r]);
        } else $e(e, s);
        return (a = xe(s, "script")).length > 0 && be(a, !u && xe(e, "script")), s;
      },
      cleanData: function cleanData(e) {
        for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++) {
          if (Q(n)) {
            if (t = n[K.expando]) {
              if (t.events) for (r in t.events) {
                o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
              }
              n[K.expando] = void 0;
            }

            n[Z.expando] && (n[Z.expando] = void 0);
          }
        }
      }
    }), C.fn.extend({
      detach: function detach(e) {
        return _e(this, e, !0);
      },
      remove: function remove(e) {
        return _e(this, e);
      },
      text: function text(e) {
        return U(this, function (e) {
          return void 0 === e ? C.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return Be(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return Be(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Me(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return Be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return Be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (C.cleanData(xe(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return C.clone(this, e, t);
        });
      },
      html: function html(e) {
        return U(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Oe.test(e) && !me[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = C.htmlPrefilter(e);

            try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return Be(this, arguments, function (t) {
          var n = this.parentNode;
          C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), C.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      C.fn[e] = function (e) {
        for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) {
          n = a === i ? this : this.clone(!0), C(o[a])[t](n), c.apply(r, n.get());
        }

        return this.pushStack(r);
      };
    });

    var ze = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        Ue = function Ue(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        Xe = new RegExp(ie.join("|"), "i");

    function Ve(e, t, n) {
      var r,
          o,
          i,
          a,
          s = e.style;
      return (n = n || Ue(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = C.style(e, t)), !y.pixelBoxStyles() && ze.test(a) && Xe.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a;
    }

    function Ge(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (c) {
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(l).appendChild(c);
          var e = n.getComputedStyle(c);
          r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), ae.removeChild(l), c = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var r,
          o,
          i,
          s,
          u,
          l = a.createElement("div"),
          c = a.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(y, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), o;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), s;
        },
        pixelPosition: function pixelPosition() {
          return e(), r;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), u;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), i;
        }
      }));
    }();
    var Ye = ["Webkit", "Moz", "ms"],
        Qe = a.createElement("div").style,
        Je = {};

    function Ke(e) {
      var t = C.cssProps[e] || Je[e];
      return t || (e in Qe ? e : Je[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) {
          if ((e = Ye[n] + t) in Qe) return e;
        }
      }(e) || e);
    }

    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function rt(e, t, n) {
      var r = oe.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function ot(e, t, n, r, o, i) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
      if (n === (r ? "border" : "content")) return 0;

      for (; a < 4; a += 2) {
        "margin" === n && (u += C.css(e, n + ie[a], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + ie[a], !0, o)), "margin" !== n && (u -= C.css(e, "border" + ie[a] + "Width", !0, o))) : (u += C.css(e, "padding" + ie[a], !0, o), "padding" !== n ? u += C.css(e, "border" + ie[a] + "Width", !0, o) : s += C.css(e, "border" + ie[a] + "Width", !0, o));
      }

      return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u;
    }

    function it(e, t, n) {
      var r = Ue(e),
          o = (!y.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
          i = o,
          a = Ve(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);

      if (ze.test(a)) {
        if (!n) return a;
        a = "auto";
      }

      return (!y.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ot(e, t, n || (o ? "border" : "content"), i, r, a) + "px";
    }

    function at(e, t, n, r, o) {
      return new at.prototype.init(e, t, n, r, o);
    }

    C.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = Ve(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
              i,
              a,
              s = Y(t),
              u = et.test(t),
              l = e.style;
          if (u || (t = Ke(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
          "string" === (i = _typeof(n)) && (o = oe.exec(n)) && o[1] && (n = fe(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
        }
      },
      css: function css(e, t, n, r) {
        var o,
            i,
            a,
            s = Y(t);
        return et.test(t) || (t = Ke(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ve(e, t, r)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o;
      }
    }), C.each(["height", "width"], function (e, t) {
      C.cssHooks[t] = {
        get: function get(e, n, r) {
          if (n) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : ce(e, tt, function () {
            return it(e, t, r);
          });
        },
        set: function set(e, n, r) {
          var o,
              i = Ue(e),
              a = !y.scrollboxSize() && "absolute" === i.position,
              s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i),
              u = r ? ot(e, t, r, s, i) : 0;
          return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ot(e, t, "border", !1, i) - .5)), u && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), rt(0, n, u);
        }
      };
    }), C.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), C.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      C.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
          }

          return o;
        }
      }, "margin" !== e && (C.cssHooks[e + t].set = rt);
    }), C.fn.extend({
      css: function css(e, t) {
        return U(this, function (e, t, n) {
          var r,
              o,
              i = {},
              a = 0;

          if (Array.isArray(t)) {
            for (r = Ue(e), o = t.length; a < o; a++) {
              i[t[a]] = C.css(e, t[a], !1, r);
            }

            return i;
          }

          return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), C.Tween = at, at.prototype = {
      constructor: at,
      init: function init(e, t, n, r, o, i) {
        this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = at.propHooks[this.prop];
        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
      }
    }, at.prototype.init.prototype = at.prototype, at.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, C.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, C.fx = at.prototype.init, C.fx.step = {};
    var st,
        ut,
        lt = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function ft() {
      ut && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ft) : n.setTimeout(ft, C.fx.interval), C.fx.tick());
    }

    function pt() {
      return n.setTimeout(function () {
        st = void 0;
      }), st = Date.now();
    }

    function dt(e, t) {
      var n,
          r = 0,
          o = {
        height: e
      };

      for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        o["margin" + (n = ie[r])] = o["padding" + n] = e;
      }

      return t && (o.opacity = o.width = e), o;
    }

    function ht(e, t, n) {
      for (var r, o = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), i = 0, a = o.length; i < a; i++) {
        if (r = o[i].call(n, t, e)) return r;
      }
    }

    function gt(e, t, n) {
      var r,
          o,
          i = 0,
          a = gt.prefilters.length,
          s = C.Deferred().always(function () {
        delete u.elem;
      }),
          u = function u() {
        if (o) return !1;

        for (var t = st || pt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) {
          l.tweens[i].run(r);
        }

        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
      },
          l = s.promise({
        elem: e,
        props: C.extend({}, t),
        opts: C.extend(!0, {
          specialEasing: {},
          easing: C.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: st || pt(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function stop(t) {
          var n = 0,
              r = t ? l.tweens.length : 0;
          if (o) return this;

          for (o = !0; n < r; n++) {
            l.tweens[n].run(1);
          }

          return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
        }
      }),
          c = l.props;

      for (!function (e, t) {
        var n, r, o, i, a;

        for (n in e) {
          if (o = t[r = Y(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && ("expand" in a)) for (n in i = a.expand(i), delete e[r], i) {
            (n in e) || (e[n] = i[n], t[n] = o);
          } else t[r] = o;
        }
      }(c, l.opts.specialEasing); i < a; i++) {
        if (r = gt.prefilters[i].call(l, e, c, l.opts)) return m(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      }

      return C.map(c, ht, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(u, {
        elem: e,
        anim: l,
        queue: l.opts.queue
      })), l;
    }

    C.Animation = C.extend(gt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return fe(n.elem, e, oe.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        m(e) ? (t = e, e = ["*"]) : e = e.match(I);

        for (var n, r = 0, o = e.length; r < o; r++) {
          n = e[r], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var r,
            o,
            i,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && le(e),
            v = K.get(e, "fxshow");

        for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s();
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
          });
        })), t) {
          if (o = t[r], lt.test(o)) {
            if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
              if ("show" !== o || !v || void 0 === v[r]) continue;
              g = !0;
            }

            d[r] = v && v[r] || C.style(e, r);
          }
        }

        if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = K.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (he([e], !0), l = e.style.display || l, c = C.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (p.done(function () {
          h.display = l;
        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), u = !1, d) {
          u || (v ? "hidden" in v && (g = v.hidden) : v = K.access(e, "fxshow", {
            display: l
          }), i && (v.hidden = !g), g && he([e], !0), p.done(function () {
            for (r in g || he([e]), K.remove(e, "fxshow"), d) {
              C.style(e, r, d[r]);
            }
          })), u = ht(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
      }
    }), C.speed = function (e, t, n) {
      var r = e && "object" == _typeof(e) ? C.extend({}, e) : {
        complete: n || !n && t || m(e) && e,
        duration: e,
        easing: n && t || t && !m(t) && t
      };
      return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
      }, r;
    }, C.fn.extend({
      fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function animate(e, t, n, r) {
        var o = C.isEmptyObject(e),
            i = C.speed(t, n, r),
            a = function a() {
          var t = gt(this, C.extend({}, e), i);
          (o || K.get(this, "finish")) && t.stop(!0);
        };

        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
      },
      stop: function stop(e, t, n) {
        var r = function r(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              o = null != e && e + "queueHooks",
              i = C.timers,
              a = K.get(this);
          if (o) a[o] && a[o].stop && r(a[o]);else for (o in a) {
            a[o] && a[o].stop && ct.test(o) && r(a[o]);
          }

          for (o = i.length; o--;) {
            i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
          }

          !t && n || C.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = K.get(this),
              r = n[e + "queue"],
              o = n[e + "queueHooks"],
              i = C.timers,
              a = r ? r.length : 0;

          for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) {
            i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
          }

          for (t = 0; t < a; t++) {
            r[t] && r[t].finish && r[t].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), C.each(["toggle", "show", "hide"], function (e, t) {
      var n = C.fn[t];

      C.fn[t] = function (e, r, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, o);
      };
    }), C.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      C.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), C.timers = [], C.fx.tick = function () {
      var e,
          t = 0,
          n = C.timers;

      for (st = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || C.fx.stop(), st = void 0;
    }, C.fx.timer = function (e) {
      C.timers.push(e), C.fx.start();
    }, C.fx.interval = 13, C.fx.start = function () {
      ut || (ut = !0, ft());
    }, C.fx.stop = function () {
      ut = null;
    }, C.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, C.fn.delay = function (e, t) {
      return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var o = n.setTimeout(t, e);

        r.stop = function () {
          n.clearTimeout(o);
        };
      });
    }, function () {
      var e = a.createElement("input"),
          t = a.createElement("select").appendChild(a.createElement("option"));
      e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value;
    }();
    var vt,
        yt = C.expr.attrHandle;
    C.fn.extend({
      attr: function attr(e, t) {
        return U(this, C.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          C.removeAttr(this, e);
        });
      }
    }), C.extend({
      attr: function attr(e, t, n) {
        var r,
            o,
            i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!y.radioValue && "radio" === t && D(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            r = 0,
            o = t && t.match(I);
        if (o && 1 === e.nodeType) for (; n = o[r++];) {
          e.removeAttribute(n);
        }
      }
    }), vt = {
      set: function set(e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = yt[t] || C.find.attr;

      yt[t] = function (e, t, r) {
        var o,
            i,
            a = t.toLowerCase();
        return r || (i = yt[a], yt[a] = o, o = null != n(e, t, r) ? a : null, yt[a] = i), o;
      };
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;

    function bt(e) {
      return (e.match(I) || []).join(" ");
    }

    function wt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function Tt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || [];
    }

    C.fn.extend({
      prop: function prop(e, t) {
        return U(this, C.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[C.propFix[e] || e];
        });
      }
    }), C.extend({
      prop: function prop(e, t, n) {
        var r,
            o,
            i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = C.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : mt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), y.optSelected || (C.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this;
    }), C.fn.extend({
      addClass: function addClass(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            s,
            u = 0;
        if (m(e)) return this.each(function (t) {
          C(this).addClass(e.call(this, t, wt(this)));
        });
        if ((t = Tt(e)).length) for (; n = this[u++];) {
          if (o = wt(n), r = 1 === n.nodeType && " " + bt(o) + " ") {
            for (a = 0; i = t[a++];) {
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            }

            o !== (s = bt(r)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            s,
            u = 0;
        if (m(e)) return this.each(function (t) {
          C(this).removeClass(e.call(this, t, wt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = Tt(e)).length) for (; n = this[u++];) {
          if (o = wt(n), r = 1 === n.nodeType && " " + bt(o) + " ") {
            for (a = 0; i = t[a++];) {
              for (; r.indexOf(" " + i + " ") > -1;) {
                r = r.replace(" " + i + " ", " ");
              }
            }

            o !== (s = bt(r)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            r = "string" === n || Array.isArray(e);

        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
          C(this).toggleClass(e.call(this, n, wt(this), t), t);
        }) : this.each(function () {
          var t, o, i, a;
          if (r) for (o = 0, i = C(this), a = Tt(e); t = a[o++];) {
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = wt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;

        for (t = " " + e + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + bt(wt(n)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var Ct = /\r/g;
    C.fn.extend({
      val: function val(e) {
        var t,
            n,
            r,
            o = this[0];
        return arguments.length ? (r = m(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, function (e) {
            return null == e ? "" : e + "";
          })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
        })) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0;
      }
    }), C.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = C.find.attr(e, "value");
            return null != t ? t : bt(C.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                r,
                o = e.options,
                i = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? i + 1 : o.length;

            for (r = i < 0 ? u : a ? i : 0; r < u; r++) {
              if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                if (t = C(n).val(), a) return t;
                s.push(t);
              }
            }

            return s;
          },
          set: function set(e, t) {
            for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;) {
              ((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
            }

            return n || (e.selectedIndex = -1), i;
          }
        }
      }
    }), C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
        }
      }, y.checkOn || (C.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), y.focusin = "onfocusin" in n;

    var Et = /^(?:focusinfocus|focusoutblur)$/,
        St = function St(e) {
      e.stopPropagation();
    };

    C.extend(C.event, {
      trigger: function trigger(e, t, r, o) {
        var i,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            g = [r || a],
            v = h.call(e, "type") ? e.type : e,
            y = h.call(e, "namespace") ? e.namespace.split(".") : [];

        if (s = d = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."), v = y.shift(), y.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == _typeof(e) && e)).isTrigger = o ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[v] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
          if (!o && !p.noBubble && !x(r)) {
            for (l = p.delegateType || v, Et.test(l + v) || (s = s.parentNode); s; s = s.parentNode) {
              g.push(s), u = s;
            }

            u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n);
          }

          for (i = 0; (s = g[i++]) && !e.isPropagationStopped();) {
            d = s, e.type = i > 1 ? l : p.bindType || v, (f = (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && Q(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
          }

          return e.type = v, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Q(r) || c && m(r[v]) && !x(r) && ((u = r[c]) && (r[c] = null), C.event.triggered = v, e.isPropagationStopped() && d.addEventListener(v, St), r[v](), e.isPropagationStopped() && d.removeEventListener(v, St), C.event.triggered = void 0, u && (r[c] = u)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var r = C.extend(new C.Event(), n, {
          type: e,
          isSimulated: !0
        });
        C.event.trigger(r, null, t);
      }
    }), C.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return C.event.trigger(e, t, n, !0);
      }
    }), y.focusin || C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function n(e) {
        C.event.simulate(t, e.target, C.event.fix(e));
      };

      C.event.special[t] = {
        setup: function setup() {
          var r = this.ownerDocument || this,
              o = K.access(r, t);
          o || r.addEventListener(e, n, !0), K.access(r, t, (o || 0) + 1);
        },
        teardown: function teardown() {
          var r = this.ownerDocument || this,
              o = K.access(r, t) - 1;
          o ? K.access(r, t, o) : (r.removeEventListener(e, n, !0), K.remove(r, t));
        }
      };
    });
    var kt = n.location,
        Nt = Date.now(),
        At = /\?/;

    C.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t;
    };

    var jt = /\[\]$/,
        Dt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        qt = /^(?:input|select|textarea|keygen)/i;

    function Ht(e, t, n, r) {
      var o;
      if (Array.isArray(t)) C.each(t, function (t, o) {
        n || jt.test(e) ? r(e, o) : Ht(e + "[" + ("object" == _typeof(o) && null != o ? t : "") + "]", o, n, r);
      });else if (n || "object" !== T(t)) r(e, t);else for (o in t) {
        Ht(e + "[" + o + "]", t[o], n, r);
      }
    }

    C.param = function (e, t) {
      var n,
          r = [],
          o = function o(e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
        o(this.name, this.value);
      });else for (n in e) {
        Ht(n, e[n], t, o);
      }
      return r.join("&");
    }, C.fn.extend({
      serialize: function serialize() {
        return C.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = C.prop(this, "elements");
          return e ? C.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !C(this).is(":disabled") && qt.test(this.nodeName) && !Lt.test(e) && (this.checked || !ge.test(e));
        }).map(function (e, t) {
          var n = C(this).val();
          return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(Dt, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(Dt, "\r\n")
          };
        }).get();
      }
    });

    var Ot = /%20/g,
        Pt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        $t = {},
        Ft = {},
        Bt = "*/".concat("*"),
        _t = a.createElement("a");

    function zt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r,
            o = 0,
            i = t.toLowerCase().match(I) || [];
        if (m(n)) for (; r = i[o++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        }
      };
    }

    function Ut(e, t, n, r) {
      var o = {},
          i = e === Ft;

      function a(s) {
        var u;
        return o[s] = !0, C.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
        }), u;
      }

      return a(t.dataTypes[0]) || !o["*"] && a("*");
    }

    function Xt(e, t) {
      var n,
          r,
          o = C.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      }

      return r && C.extend(!0, e, r), e;
    }

    _t.href = kt.href, C.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Bt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": C.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e);
      },
      ajaxPrefilter: zt($t),
      ajaxTransport: zt(Ft),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var r,
            o,
            i,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h = C.ajaxSetup({}, t),
            g = h.context || h,
            v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
            y = C.Deferred(),
            m = C.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            w = {},
            T = "canceled",
            E = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (c) {
              if (!s) for (s = {}; t = Mt.exec(i);) {
                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = s[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return c ? i : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (c) E.always(e[E.status]);else for (t in e) {
              x[t] = [x[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || T;
            return r && r.abort(t), S(0, t), this;
          }
        };

        if (y.promise(E), h.url = ((e || h.url || kt.href) + "").replace(Wt, kt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
          l = a.createElement("a");

          try {
            l.href = h.url, l.href = l.href, h.crossDomain = _t.protocol + "//" + _t.host != l.protocol + "//" + l.host;
          } catch (e) {
            h.crossDomain = !0;
          }
        }

        if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Ut($t, h, t, E), c) return E;

        for (p in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), o = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (At.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Rt, "$1"), d = (At.test(o) ? "&" : "?") + "_=" + Nt++ + d), h.url = o + d), h.ifModified && (C.lastModified[o] && E.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && E.setRequestHeader("If-None-Match", C.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
          E.setRequestHeader(p, h.headers[p]);
        }

        if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

        if (T = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), r = Ut(Ft, h, t, E)) {
          if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
          h.async && h.timeout > 0 && (u = n.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));

          try {
            c = !1, r.send(b, S);
          } catch (e) {
            if (c) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");

        function S(e, t, a, s) {
          var l,
              p,
              d,
              b,
              w,
              T = t;
          c || (c = !0, u && n.clearTimeout(u), r = void 0, i = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (b = function (e, t, n) {
            for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
              u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (r) for (o in s) {
              if (s[o] && s[o].test(r)) {
                u.unshift(o);
                break;
              }
            }
            if (u[0] in n) i = u[0];else {
              for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                  i = o;
                  break;
                }

                a || (a = o);
              }

              i = i || a;
            }
            if (i) return i !== u[0] && u.unshift(i), n[i];
          }(h, E, a)), b = function (e, t, n, r) {
            var o,
                i,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
            if (c[1]) for (a in e.converters) {
              l[a.toLowerCase()] = e.converters[a];
            }

            for (i = c.shift(); i;) {
              if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) if ("*" === i) i = u;else if ("*" !== u && u !== i) {
                if (!(a = l[u + " " + i] || l["* " + i])) for (o in l) {
                  if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                    break;
                  }
                }
                if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + i
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(h, b, E, l), l ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w), (w = E.getResponseHeader("etag")) && (C.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, l = !(d = b.error))) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || T) + "", l ? y.resolveWith(g, [p, T, E]) : y.rejectWith(g, [E, T, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, T]), f && (v.trigger("ajaxComplete", [E, h]), --C.active || C.event.trigger("ajaxStop")));
        }

        return E;
      },
      getJSON: function getJSON(e, t, n) {
        return C.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return C.get(e, void 0, t, "script");
      }
    }), C.each(["get", "post"], function (e, t) {
      C[t] = function (e, n, r, o) {
        return m(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: r
        }, C.isPlainObject(e) && e));
      };
    }), C._evalUrl = function (e, t) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          C.globalEval(e, t);
        }
      });
    }, C.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (m(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return m(e) ? this.each(function (t) {
          C(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = C(this),
              n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = m(e);
        return this.each(function (n) {
          C(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          C(this).replaceWith(this.childNodes);
        }), this;
      }
    }), C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    }, C.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, C.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };
    var Vt = {
      0: 200,
      1223: 204
    },
        Gt = C.ajaxSettings.xhr();
    y.cors = !!Gt && "withCredentials" in Gt, y.ajax = Gt = !!Gt, C.ajaxTransport(function (e) {
      var _t3, r;

      if (y.cors || Gt && !e.crossDomain) return {
        send: function send(o, i) {
          var a,
              s = e.xhr();
          if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
            s[a] = e.xhrFields[a];
          }

          for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
            s.setRequestHeader(a, o[a]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()));
            };
          }, s.onload = _t3(), r = s.onerror = s.ontimeout = _t3("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
            4 === s.readyState && n.setTimeout(function () {
              _t3 && r();
            });
          }, _t3 = _t3("abort");

          try {
            s.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), C.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), C.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return C.globalEval(e), e;
        }
      }
    }), C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), C.ajaxTransport("script", function (e) {
      var t, _n;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(r, o) {
          t = C("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), a.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    });
    var Yt,
        Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Qt.pop() || C.expando + "_" + Nt++;
        return this[e] = !0, e;
      }
    }), C.ajaxPrefilter("json jsonp", function (e, t, r) {
      var o,
          i,
          a,
          s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Jt, "$1" + o) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
        return a || C.error(o + " was not called"), a[0];
      }, e.dataTypes[0] = "json", i = n[o], n[o] = function () {
        a = arguments;
      }, r.always(function () {
        void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Qt.push(o)), a && m(i) && i(a[0]), a = i = void 0;
      }), "script";
    }), y.createHTMLDocument = ((Yt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), C.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = !n && [], (o = L.exec(e)) ? [t.createElement(o[1])] : (o = Ee([e], t, i), i && i.length && C(i).remove(), C.merge([], o.childNodes)));
      var r, o, i;
    }, C.fn.load = function (e, t, n) {
      var r,
          o,
          i,
          a = this,
          s = e.indexOf(" ");
      return s > -1 && (r = bt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (o = "POST"), a.length > 0 && C.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        a.each(function () {
          n.apply(this, i || [e.responseText, t, e]);
        });
      }), this;
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), C.expr.pseudos.animated = function (e) {
      return C.grep(C.timers, function (t) {
        return e === t.elem;
      }).length;
    }, C.offset = {
      setOffset: function setOffset(e, t, n) {
        var r,
            o,
            i,
            a,
            s,
            u,
            l = C.css(e, "position"),
            c = C(e),
            f = {};
        "static" === l && (e.style.position = "relative"), s = c.offset(), i = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), m(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : c.css(f);
      }
    }, C.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          C.offset.setOffset(this, e, t);
        });
        var t,
            n,
            r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              o = {
            top: 0,
            left: 0
          };
          if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - o.top - C.css(r, "marginTop", !0),
            left: t.left - o.left - C.css(r, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === C.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || ae;
        });
      }
    }), C.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;

      C.fn[e] = function (r) {
        return U(this, function (e, r, o) {
          var i;
          if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
          i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
        }, e, r, arguments.length);
      };
    }), C.each(["top", "left"], function (e, t) {
      C.cssHooks[t] = Ge(y.pixelPosition, function (e, n) {
        if (n) return n = Ve(e, t), ze.test(n) ? C(e).position()[t] + "px" : n;
      });
    }), C.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      C.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        C.fn[r] = function (o, i) {
          var a = arguments.length && (n || "boolean" != typeof o),
              s = n || (!0 === o || !0 === i ? "margin" : "border");
          return U(this, function (t, n, o) {
            var i;
            return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s);
          }, t, a ? o : void 0, a);
        };
      });
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      C.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), C.fn.extend({
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), C.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }
    }), C.proxy = function (e, t) {
      var n, r, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = u.call(arguments, 2), (o = function o() {
        return e.apply(t || this, r.concat(u.call(arguments)));
      }).guid = e.guid = e.guid || C.guid++, o;
    }, C.holdReady = function (e) {
      e ? C.readyWait++ : C.ready(!0);
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = m, C.isWindow = x, C.camelCase = Y, C.type = T, C.now = Date.now, C.isNumeric = function (e) {
      var t = C.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, void 0 === (r = function () {
      return C;
    }.apply(t, [])) || (e.exports = r);
    var Kt = n.jQuery,
        Zt = n.$;
    return C.noConflict = function (e) {
      return n.$ === C && (n.$ = Zt), e && n.jQuery === C && (n.jQuery = Kt), C;
    }, o || (n.jQuery = n.$ = C), C;
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(0),
      o = n.n(r);
  o()("body");
  var i = o()(".content-wrapper");
  o()(document).on("load", function () {
    console.log("hello");
  }), o()(".button").click(function () {
    i.toggleClass("translate-on-click");
  });
}]);