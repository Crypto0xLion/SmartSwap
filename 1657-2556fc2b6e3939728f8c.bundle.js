"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [1657], {
        43815: function (t, e, r) {
            r.d(e, {
                b: function () {
                    return n
                }
            });
            var n = function (t) {
                return null
            };
            n.displayName = "Cell"
        },
        25048: function (t, e, r) {
            r.d(e, {
                _: function () {
                    return k
                }
            });
            var n = r(13218),
                o = r.n(n),
                i = r(23560),
                a = r.n(i),
                c = r(14293),
                l = r.n(c),
                u = r(67294),
                f = r(94184),
                s = r.n(f),
                p = r(88169),
                y = r(52017),
                h = r(69055),
                d = r(40048);

            function b(t) {
                return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, b(t)
            }

            function m(t) {
                return function (t) {
                    if (Array.isArray(t)) return v(t)
                }(t) || function (t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return v(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e)
                }(t) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function g(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(r), !0).forEach((function (e) {
                        O(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function O(t, e, r) {
                return (e = function (t) {
                    var e = function (t, e) {
                        if ("object" !== b(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== b(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === b(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function j() {
                return j = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, j.apply(this, arguments)
            }
            var x = function (t) {
                    var e = t.value,
                        r = t.formatter,
                        n = l()(t.children) ? e : t.children;
                    return a()(r) ? r(n) : n
                },
                S = function (t, e, r) {
                    var n, o, i = t.position,
                        a = t.viewBox,
                        c = t.offset,
                        f = t.className,
                        p = a,
                        y = p.cx,
                        b = p.cy,
                        m = p.innerRadius,
                        v = p.outerRadius,
                        g = p.startAngle,
                        w = p.endAngle,
                        O = p.clockWise,
                        x = (m + v) / 2,
                        S = function (t, e) {
                            return (0, h.uY)(e - t) * Math.min(Math.abs(e - t), 360)
                        }(g, w),
                        P = S >= 0 ? 1 : -1;
                    "insideStart" === i ? (n = g + P * c, o = O) : "insideEnd" === i ? (n = w - P * c, o = !O) : "end" === i && (n = w + P * c, o = O), o = S <= 0 ? o : !o;
                    var A = (0, d.op)(y, b, x, n),
                        E = (0, d.op)(y, b, x, n + 359 * (o ? 1 : -1)),
                        k = "M".concat(A.x, ",").concat(A.y, "\n    A").concat(x, ",").concat(x, ",0,1,").concat(o ? 0 : 1, ",\n    ").concat(E.x, ",").concat(E.y),
                        B = l()(t.id) ? (0, h.EL)("recharts-radial-line-") : t.id;
                    return u.createElement("text", j({}, r, {
                        dominantBaseline: "central",
                        className: s()("recharts-radial-bar-label", f)
                    }), u.createElement("defs", null, u.createElement("path", {
                        id: B,
                        d: k
                    })), u.createElement("textPath", {
                        xlinkHref: "#".concat(B)
                    }, e))
                },
                P = function (t) {
                    var e = t.viewBox,
                        r = t.offset,
                        n = t.position,
                        o = e,
                        i = o.cx,
                        a = o.cy,
                        c = o.innerRadius,
                        l = o.outerRadius,
                        u = (o.startAngle + o.endAngle) / 2;
                    if ("outside" === n) {
                        var f = (0, d.op)(i, a, l + r, u),
                            s = f.x;
                        return {
                            x: s,
                            y: f.y,
                            textAnchor: s >= i ? "start" : "end",
                            verticalAnchor: "middle"
                        }
                    }
                    if ("center" === n) return {
                        x: i,
                        y: a,
                        textAnchor: "middle",
                        verticalAnchor: "middle"
                    };
                    if ("centerTop" === n) return {
                        x: i,
                        y: a,
                        textAnchor: "middle",
                        verticalAnchor: "start"
                    };
                    if ("centerBottom" === n) return {
                        x: i,
                        y: a,
                        textAnchor: "middle",
                        verticalAnchor: "end"
                    };
                    var p = (c + l) / 2,
                        y = (0, d.op)(i, a, p, u);
                    return {
                        x: y.x,
                        y: y.y,
                        textAnchor: "middle",
                        verticalAnchor: "middle"
                    }
                },
                A = function (t) {
                    var e = t.viewBox,
                        r = t.parentViewBox,
                        n = t.offset,
                        i = t.position,
                        a = e,
                        c = a.x,
                        l = a.y,
                        u = a.width,
                        f = a.height,
                        s = f >= 0 ? 1 : -1,
                        p = s * n,
                        y = s > 0 ? "end" : "start",
                        d = s > 0 ? "start" : "end",
                        b = u >= 0 ? 1 : -1,
                        m = b * n,
                        v = b > 0 ? "end" : "start",
                        g = b > 0 ? "start" : "end";
                    if ("top" === i) return w(w({}, {
                        x: c + u / 2,
                        y: l - s * n,
                        textAnchor: "middle",
                        verticalAnchor: y
                    }), r ? {
                        height: Math.max(l - r.y, 0),
                        width: u
                    } : {});
                    if ("bottom" === i) return w(w({}, {
                        x: c + u / 2,
                        y: l + f + p,
                        textAnchor: "middle",
                        verticalAnchor: d
                    }), r ? {
                        height: Math.max(r.y + r.height - (l + f), 0),
                        width: u
                    } : {});
                    if ("left" === i) {
                        var O = {
                            x: c - m,
                            y: l + f / 2,
                            textAnchor: v,
                            verticalAnchor: "middle"
                        };
                        return w(w({}, O), r ? {
                            width: Math.max(O.x - r.x, 0),
                            height: f
                        } : {})
                    }
                    if ("right" === i) {
                        var j = {
                            x: c + u + m,
                            y: l + f / 2,
                            textAnchor: g,
                            verticalAnchor: "middle"
                        };
                        return w(w({}, j), r ? {
                            width: Math.max(r.x + r.width - j.x, 0),
                            height: f
                        } : {})
                    }
                    var x = r ? {
                        width: u,
                        height: f
                    } : {};
                    return "insideLeft" === i ? w({
                        x: c + m,
                        y: l + f / 2,
                        textAnchor: g,
                        verticalAnchor: "middle"
                    }, x) : "insideRight" === i ? w({
                        x: c + u - m,
                        y: l + f / 2,
                        textAnchor: v,
                        verticalAnchor: "middle"
                    }, x) : "insideTop" === i ? w({
                        x: c + u / 2,
                        y: l + p,
                        textAnchor: "middle",
                        verticalAnchor: d
                    }, x) : "insideBottom" === i ? w({
                        x: c + u / 2,
                        y: l + f - p,
                        textAnchor: "middle",
                        verticalAnchor: y
                    }, x) : "insideTopLeft" === i ? w({
                        x: c + m,
                        y: l + p,
                        textAnchor: g,
                        verticalAnchor: d
                    }, x) : "insideTopRight" === i ? w({
                        x: c + u - m,
                        y: l + p,
                        textAnchor: v,
                        verticalAnchor: d
                    }, x) : "insideBottomLeft" === i ? w({
                        x: c + m,
                        y: l + f - p,
                        textAnchor: g,
                        verticalAnchor: y
                    }, x) : "insideBottomRight" === i ? w({
                        x: c + u - m,
                        y: l + f - p,
                        textAnchor: v,
                        verticalAnchor: y
                    }, x) : o()(i) && ((0, h.hj)(i.x) || (0, h.hU)(i.x)) && ((0, h.hj)(i.y) || (0, h.hU)(i.y)) ? w({
                        x: c + (0, h.h1)(i.x, u),
                        y: l + (0, h.h1)(i.y, f),
                        textAnchor: "end",
                        verticalAnchor: "end"
                    }, x) : w({
                        x: c + u / 2,
                        y: l + f / 2,
                        textAnchor: "middle",
                        verticalAnchor: "middle"
                    }, x)
                },
                E = function (t) {
                    return "cx" in t && (0, h.hj)(t.cx)
                };

            function k(t) {
                var e, r = t.viewBox,
                    n = t.position,
                    o = t.value,
                    i = t.children,
                    c = t.content,
                    f = t.className,
                    h = void 0 === f ? "" : f,
                    d = t.textBreakAll;
                if (!r || l()(o) && l()(i) && !(0, u.isValidElement)(c) && !a()(c)) return null;
                if ((0, u.isValidElement)(c)) return (0, u.cloneElement)(c, t);
                if (a()(c)) {
                    if (e = (0, u.createElement)(c, t), (0, u.isValidElement)(e)) return e
                } else e = x(t);
                var b = E(r),
                    m = (0, y.L6)(t, !0);
                if (b && ("insideStart" === n || "insideEnd" === n || "end" === n)) return S(t, e, m);
                var v = b ? P(t) : A(t);
                return u.createElement(p.x, j({
                    className: s()("recharts-label", h)
                }, m, v, {
                    breakAll: d
                }), e)
            }
            k.displayName = "Label", k.defaultProps = {
                offset: 5
            };
            var B = function (t) {
                var e = t.cx,
                    r = t.cy,
                    n = t.angle,
                    o = t.startAngle,
                    i = t.endAngle,
                    a = t.r,
                    c = t.radius,
                    l = t.innerRadius,
                    u = t.outerRadius,
                    f = t.x,
                    s = t.y,
                    p = t.top,
                    y = t.left,
                    d = t.width,
                    b = t.height,
                    m = t.clockWise,
                    v = t.labelViewBox;
                if (v) return v;
                if ((0, h.hj)(d) && (0, h.hj)(b)) {
                    if ((0, h.hj)(f) && (0, h.hj)(s)) return {
                        x: f,
                        y: s,
                        width: d,
                        height: b
                    };
                    if ((0, h.hj)(p) && (0, h.hj)(y)) return {
                        x: p,
                        y: y,
                        width: d,
                        height: b
                    }
                }
                return (0, h.hj)(f) && (0, h.hj)(s) ? {
                    x: f,
                    y: s,
                    width: 0,
                    height: 0
                } : (0, h.hj)(e) && (0, h.hj)(r) ? {
                    cx: e,
                    cy: r,
                    startAngle: o || n || 0,
                    endAngle: i || n || 0,
                    innerRadius: l || 0,
                    outerRadius: u || c || a || 0,
                    clockWise: m
                } : t.viewBox ? t.viewBox : {}
            };
            k.parseViewBox = B, k.renderCallByParent = function (t, e) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (!t || !t.children && r && !t.label) return null;
                var n = t.children,
                    i = B(t),
                    c = (0, y.NN)(n, k).map((function (t, r) {
                        return (0, u.cloneElement)(t, {
                            viewBox: e || i,
                            key: "label-".concat(r)
                        })
                    }));
                if (!r) return c;
                var l = function (t, e) {
                    return t ? !0 === t ? u.createElement(k, {
                        key: "label-implicit",
                        viewBox: e
                    }) : (0, h.P2)(t) ? u.createElement(k, {
                        key: "label-implicit",
                        viewBox: e,
                        value: t
                    }) : (0, u.isValidElement)(t) ? t.type === k ? (0, u.cloneElement)(t, {
                        key: "label-implicit",
                        viewBox: e
                    }) : u.createElement(k, {
                        key: "label-implicit",
                        content: t,
                        viewBox: e
                    }) : a()(t) ? u.createElement(k, {
                        key: "label-implicit",
                        content: t,
                        viewBox: e
                    }) : o()(t) ? u.createElement(k, j({
                        viewBox: e
                    }, t, {
                        key: "label-implicit"
                    })) : null : null
                }(t.label, e || i);
                return [l].concat(m(c))
            }
        },
        2763: function (t, e, r) {
            r.d(e, {
                e: function () {
                    return k
                }
            });
            var n = r(13218),
                o = r.n(n),
                i = r(23560),
                a = r.n(i),
                c = r(14293),
                l = r.n(c),
                u = r(10928),
                f = r.n(u),
                s = r(1469),
                p = r.n(s),
                y = r(67294),
                h = r(25048),
                d = r(48710),
                b = r(52017),
                m = r(73634);

            function v(t) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, v(t)
            }
            var g = ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"];

            function w(t) {
                return function (t) {
                    if (Array.isArray(t)) return O(t)
                }(t) || function (t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return O(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(t, e)
                }(t) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function j() {
                return j = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, j.apply(this, arguments)
            }

            function x(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(r), !0).forEach((function (e) {
                        P(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function P(t, e, r) {
                return (e = function (t) {
                    var e = function (t, e) {
                        if ("object" !== v(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== v(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === v(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function A(t, e) {
                if (null == t) return {};
                var r, n, o = function (t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var E = {
                valueAccessor: function (t) {
                    return p()(t.value) ? f()(t.value) : t.value
                }
            };

            function k(t) {
                var e = t.data,
                    r = t.valueAccessor,
                    n = t.dataKey,
                    o = t.clockWise,
                    i = t.id,
                    a = t.textBreakAll,
                    c = A(t, g);
                return e && e.length ? y.createElement(d.m, {
                    className: "recharts-label-list"
                }, e.map((function (t, e) {
                    var u = l()(n) ? r(t, e) : (0, m.F$)(t && t.payload, n),
                        f = l()(i) ? {} : {
                            id: "".concat(i, "-").concat(e)
                        };
                    return y.createElement(h._, j({}, (0, b.L6)(t, !0), c, f, {
                        parentViewBox: t.parentViewBox,
                        index: e,
                        value: u,
                        textBreakAll: a,
                        viewBox: h._.parseViewBox(l()(o) ? t : S(S({}, t), {}, {
                            clockWise: o
                        })),
                        key: "label-".concat(e)
                    }))
                }))) : null
            }
            k.displayName = "LabelList", k.renderCallByParent = function (t, e) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (!t || !t.children && r && !t.label) return null;
                var n = t.children,
                    i = (0, b.NN)(n, k).map((function (t, r) {
                        return (0, y.cloneElement)(t, {
                            data: e,
                            key: "labelList-".concat(r)
                        })
                    }));
                return r ? [function (t, e) {
                    return t ? !0 === t ? y.createElement(k, {
                        key: "labelList-implicit",
                        data: e
                    }) : y.isValidElement(t) || a()(t) ? y.createElement(k, {
                        key: "labelList-implicit",
                        data: e,
                        content: t
                    }) : o()(t) ? y.createElement(k, j({
                        data: e
                    }, t, {
                        key: "labelList-implicit"
                    })) : null : null
                }(t.label, e)].concat(w(i)) : i
            }, k.defaultProps = E
        },
        23872: function (t, e, r) {
            r.d(e, {
                D: function () {
                    return _
                }
            });
            var n = r(23560),
                o = r.n(n),
                i = r(45578),
                a = r.n(i),
                c = r(67294),
                l = r(94184),
                u = r.n(l),
                f = r(20514),
                s = r(41068),
                p = r(79896);

            function y(t) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, y(t)
            }

            function h() {
                return h = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, h.apply(this, arguments)
            }

            function d(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, O(n.key), n)
                }
            }

            function m(t, e) {
                return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function v(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = g(t);
                    if (e) {
                        var o = g(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return function (t, e) {
                        if (e && ("object" === y(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(this, r)
                }
            }

            function g(t) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(t)
            }

            function w(t, e, r) {
                return (e = O(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function O(t) {
                var e = function (t, e) {
                    if ("object" !== y(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== y(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === y(e) ? e : String(e)
            }
            var j = 32,
                x = function (t) {
                    ! function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && m(t, e)
                    }(i, t);
                    var e, r, n, o = v(i);

                    function i() {
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), o.apply(this, arguments)
                    }
                    return e = i, r = [{
                        key: "renderIcon",
                        value: function (t) {
                            var e = this.props.inactiveColor,
                                r = 16,
                                n = j / 6,
                                o = j / 3,
                                i = t.inactive ? e : t.color;
                            if ("plainline" === t.type) return c.createElement("line", {
                                strokeWidth: 4,
                                fill: "none",
                                stroke: i,
                                strokeDasharray: t.payload.strokeDasharray,
                                x1: 0,
                                y1: r,
                                x2: j,
                                y2: r,
                                className: "recharts-legend-icon"
                            });
                            if ("line" === t.type) return c.createElement("path", {
                                strokeWidth: 4,
                                fill: "none",
                                stroke: i,
                                d: "M0,".concat(r, "h").concat(o, "\n            A").concat(n, ",").concat(n, ",0,1,1,").concat(2 * o, ",").concat(r, "\n            H").concat(j, "M").concat(2 * o, ",").concat(r, "\n            A").concat(n, ",").concat(n, ",0,1,1,").concat(o, ",").concat(r),
                                className: "recharts-legend-icon"
                            });
                            if ("rect" === t.type) return c.createElement("path", {
                                stroke: "none",
                                fill: i,
                                d: "M0,".concat(4, "h").concat(j, "v").concat(24, "h").concat(-32, "z"),
                                className: "recharts-legend-icon"
                            });
                            if (c.isValidElement(t.legendIcon)) {
                                var a = function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? d(Object(r), !0).forEach((function (e) {
                                            w(t, e, r[e])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                        }))
                                    }
                                    return t
                                }({}, t);
                                return delete a.legendIcon, c.cloneElement(t.legendIcon, a)
                            }
                            return c.createElement(s.v, {
                                fill: i,
                                cx: r,
                                cy: r,
                                size: j,
                                sizeType: "diameter",
                                type: t.type
                            })
                        }
                    }, {
                        key: "renderItems",
                        value: function () {
                            var t = this,
                                e = this.props,
                                r = e.payload,
                                n = e.iconSize,
                                o = e.layout,
                                i = e.formatter,
                                a = e.inactiveColor,
                                l = {
                                    x: 0,
                                    y: 0,
                                    width: j,
                                    height: j
                                },
                                s = {
                                    display: "horizontal" === o ? "inline-block" : "block",
                                    marginRight: 10
                                },
                                y = {
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginRight: 4
                                };
                            return r.map((function (e, r) {
                                var o, d = e.formatter || i,
                                    b = u()((w(o = {
                                        "recharts-legend-item": !0
                                    }, "legend-item-".concat(r), !0), w(o, "inactive", e.inactive), o));
                                if ("none" === e.type) return null;
                                var m = e.inactive ? a : e.color;
                                return c.createElement("li", h({
                                    className: b,
                                    style: s,
                                    key: "legend-item-".concat(r)
                                }, (0, p.bw)(t.props, e, r)), c.createElement(f.T, {
                                    width: n,
                                    height: n,
                                    viewBox: l,
                                    style: y
                                }, t.renderIcon(e)), c.createElement("span", {
                                    className: "recharts-legend-item-text",
                                    style: {
                                        color: m
                                    }
                                }, d ? d(e.value, e, r) : e.value))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var t = this.props,
                                e = t.payload,
                                r = t.layout,
                                n = t.align;
                            if (!e || !e.length) return null;
                            var o = {
                                padding: 0,
                                margin: 0,
                                textAlign: "horizontal" === r ? n : "left"
                            };
                            return c.createElement("ul", {
                                className: "recharts-default-legend",
                                style: o
                            }, this.renderItems())
                        }
                    }], r && b(e.prototype, r), n && b(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), i
                }(c.PureComponent);
            w(x, "displayName", "Legend"), w(x, "defaultProps", {
                iconSize: 14,
                layout: "horizontal",
                align: "center",
                verticalAlign: "middle",
                inactiveColor: "#ccc"
            });
            var S = r(69055);

            function P(t) {
                return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, P(t)
            }
            var A = ["ref"];

            function E(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(r), !0).forEach((function (e) {
                        C(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function B(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, W(n.key), n)
                }
            }

            function N(t, e) {
                return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                    return t.__proto__ = e, t
                }, N(t, e)
            }

            function R(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = T(t);
                    if (e) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return function (t, e) {
                        if (e && ("object" === P(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return D(t)
                    }(this, r)
                }
            }

            function D(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function T(t) {
                return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, T(t)
            }

            function C(t, e, r) {
                return (e = W(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function W(t) {
                var e = function (t, e) {
                    if ("object" !== P(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== P(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === P(e) ? e : String(e)
            }

            function I(t, e) {
                if (null == t) return {};
                var r, n, o = function (t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function H(t) {
                return t.value
            }

            function M(t, e) {
                return !0 === t ? a()(e, H) : o()(t) ? a()(e, t) : e
            }
            var _ = function (t) {
                ! function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && N(t, e)
                }(a, t);
                var e, r, n, i = R(a);

                function a() {
                    var t;
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a);
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return C(D(t = i.call.apply(i, [this].concat(r))), "state", {
                        boxWidth: -1,
                        boxHeight: -1
                    }), t
                }
                return e = a, n = [{
                    key: "getWithHeight",
                    value: function (t, e) {
                        var r = t.props.layout;
                        return "vertical" === r && (0, S.hj)(t.props.height) ? {
                            height: t.props.height
                        } : "horizontal" === r ? {
                            width: t.props.width || e
                        } : null
                    }
                }], (r = [{
                    key: "componentDidMount",
                    value: function () {
                        this.updateBBox()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function () {
                        this.updateBBox()
                    }
                }, {
                    key: "getBBox",
                    value: function () {
                        return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null
                    }
                }, {
                    key: "getBBoxSnapshot",
                    value: function () {
                        var t = this.state,
                            e = t.boxWidth,
                            r = t.boxHeight;
                        return e >= 0 && r >= 0 ? {
                            width: e,
                            height: r
                        } : null
                    }
                }, {
                    key: "getDefaultPosition",
                    value: function (t) {
                        var e, r, n = this.props,
                            o = n.layout,
                            i = n.align,
                            a = n.verticalAlign,
                            c = n.margin,
                            l = n.chartWidth,
                            u = n.chartHeight;
                        return t && (void 0 !== t.left && null !== t.left || void 0 !== t.right && null !== t.right) || (e = "center" === i && "vertical" === o ? {
                            left: ((l || 0) - (this.getBBoxSnapshot() || {
                                width: 0
                            }).width) / 2
                        } : "right" === i ? {
                            right: c && c.right || 0
                        } : {
                            left: c && c.left || 0
                        }), t && (void 0 !== t.top && null !== t.top || void 0 !== t.bottom && null !== t.bottom) || (r = "middle" === a ? {
                            top: ((u || 0) - (this.getBBoxSnapshot() || {
                                height: 0
                            }).height) / 2
                        } : "bottom" === a ? {
                            bottom: c && c.bottom || 0
                        } : {
                            top: c && c.top || 0
                        }), k(k({}, e), r)
                    }
                }, {
                    key: "updateBBox",
                    value: function () {
                        var t = this.state,
                            e = t.boxWidth,
                            r = t.boxHeight,
                            n = this.props.onBBoxUpdate;
                        if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                            var o = this.wrapperNode.getBoundingClientRect();
                            (Math.abs(o.width - e) > 1 || Math.abs(o.height - r) > 1) && this.setState({
                                boxWidth: o.width,
                                boxHeight: o.height
                            }, (function () {
                                n && n(o)
                            }))
                        } else -1 === e && -1 === r || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        }, (function () {
                            n && n(null)
                        }))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t = this,
                            e = this.props,
                            r = e.content,
                            n = e.width,
                            i = e.height,
                            a = e.wrapperStyle,
                            l = e.payloadUniqBy,
                            u = e.payload,
                            f = k(k({
                                position: "absolute",
                                width: n || "auto",
                                height: i || "auto"
                            }, this.getDefaultPosition(a)), a);
                        return c.createElement("div", {
                            className: "recharts-legend-wrapper",
                            style: f,
                            ref: function (e) {
                                t.wrapperNode = e
                            }
                        }, function (t, e) {
                            if (c.isValidElement(t)) return c.cloneElement(t, e);
                            if (o()(t)) return c.createElement(t, e);
                            e.ref;
                            var r = I(e, A);
                            return c.createElement(x, r)
                        }(r, k(k({}, this.props), {}, {
                            payload: M(l, u)
                        })))
                    }
                }]) && B(e.prototype, r), n && B(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(c.PureComponent);
            C(_, "displayName", "Legend"), C(_, "defaultProps", {
                iconSize: 14,
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
            })
        },
        29009: function (t, e, r) {
            r.d(e, {
                h: function () {
                    return p
                }
            });
            var n = r(94184),
                o = r.n(n),
                i = r(67294),
                a = r(99612),
                c = r(69055),
                l = r(6213);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, u.apply(this, arguments)
            }

            function f(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, c = [],
                            l = !0,
                            u = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                l = !1
                            } else
                                for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); l = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return c
                    }
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return s(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var p = (0, i.forwardRef)((function (t, e) {
                var r = t.aspect,
                    n = t.width,
                    s = void 0 === n ? "100%" : n,
                    p = t.height,
                    y = void 0 === p ? "100%" : p,
                    h = t.minWidth,
                    d = void 0 === h ? 0 : h,
                    b = t.minHeight,
                    m = t.maxHeight,
                    v = t.children,
                    g = t.debounce,
                    w = void 0 === g ? 0 : g,
                    O = t.id,
                    j = t.className,
                    x = t.onResize,
                    S = f((0, i.useState)({
                        containerWidth: -1,
                        containerHeight: -1
                    }), 2),
                    P = S[0],
                    A = S[1],
                    E = (0, i.useRef)(null);
                (0, i.useImperativeHandle)(e, (function () {
                    return E
                }), [E]);
                var k = (0, i.useCallback)((function () {
                        return E.current ? {
                            containerWidth: E.current.clientWidth,
                            containerHeight: E.current.clientHeight
                        } : null
                    }), []),
                    B = (0, i.useCallback)((function () {
                        var t = k();
                        if (t) {
                            var e = t.containerWidth,
                                r = t.containerHeight;
                            x && x(e, r), A((function (t) {
                                var n = t.containerWidth,
                                    o = t.containerHeight;
                                return e !== n || r !== o ? {
                                    containerWidth: e,
                                    containerHeight: r
                                } : t
                            }))
                        }
                    }), [k, x]),
                    N = (0, i.useMemo)((function () {
                        var t = P.containerWidth,
                            e = P.containerHeight;
                        if (t < 0 || e < 0) return null;
                        (0, l.Z)((0, c.hU)(s) || (0, c.hU)(y), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", s, y), (0, l.Z)(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
                        var n = (0, c.hU)(s) ? t : s,
                            o = (0, c.hU)(y) ? e : y;
                        return r && r > 0 && (n ? o = n / r : o && (n = o * r), m && o > m && (o = m)), (0, l.Z)(n > 0 || o > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", n, o, s, y, d, b, r), (0, i.cloneElement)(v, {
                            width: n,
                            height: o
                        })
                    }), [r, v, y, m, b, d, P, s]);
                (0, i.useEffect)((function () {
                    var t = k();
                    t && A(t)
                }), [k]);
                var R = {
                    width: s,
                    height: y,
                    minWidth: d,
                    minHeight: b,
                    maxHeight: m
                };
                return i.createElement(a.ZP, {
                    handleWidth: !0,
                    handleHeight: !0,
                    onResize: B,
                    targetRef: E,
                    refreshMode: w > 0 ? "debounce" : void 0,
                    refreshRate: w
                }, i.createElement("div", u({}, null != O ? {
                    id: "".concat(O)
                } : {}, {
                    className: o()("recharts-responsive-container", j),
                    style: R,
                    ref: E
                }), N))
            }))
        },
        88169: function (t, e, r) {
            r.d(e, {
                x: function () {
                    return S
                }
            });
            var n = r(14293),
                o = r.n(n),
                i = r(67294),
                a = r(84275),
                c = r.n(a),
                l = r(94184),
                u = r.n(l),
                f = r(69055),
                s = r(47523),
                p = r(52017),
                y = r(41209),
                h = ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"];

            function d() {
                return d = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, d.apply(this, arguments)
            }

            function b(t, e) {
                if (null == t) return {};
                var r, n, o = function (t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function m(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, c = [],
                            l = !0,
                            u = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                l = !1
                            } else
                                for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); l = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return c
                    }
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return v(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var g = /[ \f\n\r\t\v\u2028\u2029]+/,
                w = function (t) {
                    var e = t.children,
                        r = t.breakAll,
                        n = t.style;
                    try {
                        var i = [];
                        return o()(e) || (i = r ? e.toString().split("") : e.toString().split(g)), {
                            wordsWithComputedWidth: i.map((function (t) {
                                return {
                                    word: t,
                                    width: (0, y.xE)(t, n).width
                                }
                            })),
                            spaceWidth: r ? 0 : (0, y.xE)(" ", n).width
                        }
                    } catch (t) {
                        return null
                    }
                },
                O = function (t) {
                    return [{
                        words: o()(t) ? [] : t.toString().split(g)
                    }]
                },
                j = function (t) {
                    var e = t.width,
                        r = t.scaleToFit,
                        n = t.children,
                        o = t.style,
                        i = t.breakAll,
                        a = t.maxLines;
                    if ((e || r) && !s.x.isSsr) {
                        var c = w({
                            breakAll: i,
                            children: n,
                            style: o
                        });
                        return c ? function (t, e, r, n, o) {
                            var i = t.maxLines,
                                a = t.children,
                                c = t.style,
                                l = t.breakAll,
                                u = (0, f.hj)(i),
                                s = a,
                                p = function () {
                                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function (t, e) {
                                        var i = e.word,
                                            a = e.width,
                                            c = t[t.length - 1];
                                        if (c && (null == n || o || c.width + a + r < Number(n))) c.words.push(i), c.width += a + r;
                                        else {
                                            var l = {
                                                words: [i],
                                                width: a
                                            };
                                            t.push(l)
                                        }
                                        return t
                                    }), [])
                                },
                                y = p(e);
                            if (!u) return y;
                            for (var h, d = function (t) {
                                    var e = s.slice(0, t),
                                        r = w({
                                            breakAll: l,
                                            style: c,
                                            children: e + "…"
                                        }).wordsWithComputedWidth,
                                        o = p(r),
                                        a = o.length > i || function (t) {
                                            return t.reduce((function (t, e) {
                                                return t.width > e.width ? t : e
                                            }))
                                        }(o).width > Number(n);
                                    return [a, o]
                                }, b = 0, v = s.length - 1, g = 0; b <= v && g <= s.length - 1;) {
                                var O = Math.floor((b + v) / 2),
                                    j = m(d(O - 1), 2),
                                    x = j[0],
                                    S = j[1],
                                    P = m(d(O), 1)[0];
                                if (x || P || (b = O + 1), x && P && (v = O - 1), !x && P) {
                                    h = S;
                                    break
                                }
                                g++
                            }
                            return h || y
                        }({
                            breakAll: i,
                            children: n,
                            maxLines: a,
                            style: o
                        }, c.wordsWithComputedWidth, c.spaceWidth, e, r) : O(n)
                    }
                    return O(n)
                },
                x = {
                    x: 0,
                    y: 0,
                    lineHeight: "1em",
                    capHeight: "0.71em",
                    scaleToFit: !1,
                    textAnchor: "start",
                    verticalAnchor: "end",
                    fill: "#808080"
                },
                S = function (t) {
                    var e = (0, i.useMemo)((function () {
                            return j({
                                breakAll: t.breakAll,
                                children: t.children,
                                maxLines: t.maxLines,
                                scaleToFit: t.scaleToFit,
                                style: t.style,
                                width: t.width
                            })
                        }), [t.breakAll, t.children, t.maxLines, t.scaleToFit, t.style, t.width]),
                        r = t.dx,
                        n = t.dy,
                        o = t.textAnchor,
                        a = t.verticalAnchor,
                        l = t.scaleToFit,
                        s = t.angle,
                        y = t.lineHeight,
                        m = t.capHeight,
                        v = t.className,
                        g = t.breakAll,
                        w = b(t, h);
                    if (!(0, f.P2)(w.x) || !(0, f.P2)(w.y)) return null;
                    var O, S = w.x + ((0, f.hj)(r) ? r : 0),
                        P = w.y + ((0, f.hj)(n) ? n : 0);
                    switch (a) {
                        case "start":
                            O = c()("calc(".concat(m, ")"));
                            break;
                        case "middle":
                            O = c()("calc(".concat((e.length - 1) / 2, " * -").concat(y, " + (").concat(m, " / 2))"));
                            break;
                        default:
                            O = c()("calc(".concat(e.length - 1, " * -").concat(y, ")"))
                    }
                    var A = [];
                    if (l) {
                        var E = e[0].width,
                            k = t.width;
                        A.push("scale(".concat(((0, f.hj)(k) ? k / E : 1) / E, ")"))
                    }
                    return s && A.push("rotate(".concat(s, ", ").concat(S, ", ").concat(P, ")")), A.length && (w.transform = A.join(" ")), i.createElement("text", d({}, (0, p.L6)(w, !0), {
                        x: S,
                        y: P,
                        className: u()("recharts-text", v),
                        textAnchor: o,
                        fill: w.fill.includes("url") ? x.fill : w.fill
                    }), e.map((function (t, e) {
                        return i.createElement("tspan", {
                            x: S,
                            dy: 0 === e ? O : y,
                            key: e
                        }, t.words.join(g ? "" : " "))
                    })))
                };
            S.defaultProps = x
        },
        99307: function (t, e, r) {
            r.d(e, {
                u: function () {
                    return V
                }
            });
            var n = r(14293),
                o = r.n(n),
                i = r(23560),
                a = r.n(i),
                c = r(45578),
                l = r.n(c),
                u = r(67294),
                f = r(18181),
                s = r(94184),
                p = r.n(s),
                y = r(89734),
                h = r.n(y),
                d = r(1469),
                b = r.n(d),
                m = r(69055);

            function v(t) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, v(t)
            }

            function g(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, c = [],
                            l = !0,
                            u = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                l = !1
                            } else
                                for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); l = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return c
                    }
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return w(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function O(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(r), !0).forEach((function (e) {
                        E(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function x(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, k(n.key), n)
                }
            }

            function S(t, e) {
                return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                    return t.__proto__ = e, t
                }, S(t, e)
            }

            function P(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = A(t);
                    if (e) {
                        var o = A(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return function (t, e) {
                        if (e && ("object" === v(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(this, r)
                }
            }

            function A(t) {
                return A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, A(t)
            }

            function E(t, e, r) {
                return (e = k(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function k(t) {
                var e = function (t, e) {
                    if ("object" !== v(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== v(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === v(e) ? e : String(e)
            }

            function B(t) {
                return b()(t) && (0, m.P2)(t[0]) && (0, m.P2)(t[1]) ? t.join(" ~ ") : t
            }
            var N = function (t) {
                ! function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && S(t, e)
                }(a, t);
                var e, r, n, i = P(a);

                function a() {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), i.apply(this, arguments)
                }
                return e = a, (r = [{
                    key: "renderContent",
                    value: function () {
                        var t = this.props,
                            e = t.payload,
                            r = t.separator,
                            n = t.formatter,
                            o = t.itemStyle,
                            i = t.itemSorter;
                        if (e && e.length) {
                            var a = (i ? h()(e, i) : e).map((function (t, i) {
                                if ("none" === t.type) return null;
                                var a = j({
                                        display: "block",
                                        paddingTop: 4,
                                        paddingBottom: 4,
                                        color: t.color || "#000"
                                    }, o),
                                    c = t.formatter || n || B,
                                    l = t.value,
                                    f = t.name;
                                if (c && null != l && null != f) {
                                    var s = c(l, f, t, i, e);
                                    if (Array.isArray(s)) {
                                        var p = g(s, 2);
                                        l = p[0], f = p[1]
                                    } else l = s
                                }
                                return u.createElement("li", {
                                    className: "recharts-tooltip-item",
                                    key: "tooltip-item-".concat(i),
                                    style: a
                                }, (0, m.P2)(f) ? u.createElement("span", {
                                    className: "recharts-tooltip-item-name"
                                }, f) : null, (0, m.P2)(f) ? u.createElement("span", {
                                    className: "recharts-tooltip-item-separator"
                                }, r) : null, u.createElement("span", {
                                    className: "recharts-tooltip-item-value"
                                }, l), u.createElement("span", {
                                    className: "recharts-tooltip-item-unit"
                                }, t.unit || ""))
                            }));
                            return u.createElement("ul", {
                                className: "recharts-tooltip-item-list",
                                style: {
                                    padding: 0,
                                    margin: 0
                                }
                            }, a)
                        }
                        return null
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t = this.props,
                            e = t.wrapperClassName,
                            r = t.contentStyle,
                            n = t.labelClassName,
                            i = t.labelStyle,
                            a = t.label,
                            c = t.labelFormatter,
                            l = t.payload,
                            f = j({
                                margin: 0,
                                padding: 10,
                                backgroundColor: "#fff",
                                border: "1px solid #ccc",
                                whiteSpace: "nowrap"
                            }, r),
                            s = j({
                                margin: 0
                            }, i),
                            y = !o()(a),
                            h = y ? a : "",
                            d = p()("recharts-default-tooltip", e),
                            b = p()("recharts-tooltip-label", n);
                        return y && c && null != l && (h = c(a, l)), u.createElement("div", {
                            className: d,
                            style: f
                        }, u.createElement("p", {
                            className: b,
                            style: s
                        }, u.isValidElement(h) ? h : "".concat(h)), this.renderContent())
                    }
                }]) && x(e.prototype, r), n && x(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(u.PureComponent);
            E(N, "displayName", "DefaultTooltipContent"), E(N, "defaultProps", {
                separator: " : ",
                contentStyle: {},
                itemStyle: {},
                labelStyle: {}
            });
            var R = r(47523);

            function D(t) {
                return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, D(t)
            }

            function T(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? T(Object(r), !0).forEach((function (e) {
                        W(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function W(t, e, r) {
                return (e = function (t) {
                    var e = function (t, e) {
                        if ("object" !== D(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== D(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === D(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function I(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, c = [],
                            l = !0,
                            u = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                l = !1
                            } else
                                for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); l = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return c
                    }
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return H(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var M = "recharts-tooltip-wrapper";

            function _(t) {
                return t.dataKey
            }
            var L = {
                    active: !1,
                    allowEscapeViewBox: {
                        x: !1,
                        y: !1
                    },
                    reverseDirection: {
                        x: !1,
                        y: !1
                    },
                    offset: 10,
                    viewBox: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    },
                    coordinate: {
                        x: 0,
                        y: 0
                    },
                    cursorStyle: {},
                    separator: " : ",
                    wrapperStyle: {},
                    contentStyle: {},
                    itemStyle: {},
                    labelStyle: {},
                    cursor: !0,
                    trigger: "hover",
                    isAnimationActive: !R.x.isSsr,
                    animationEasing: "ease",
                    animationDuration: 400,
                    filterNull: !0,
                    useTranslate3d: !1
                },
                V = function (t) {
                    var e, r = I((0, u.useState)(-1), 2),
                        n = r[0],
                        i = r[1],
                        c = I((0, u.useState)(-1), 2),
                        s = c[0],
                        y = c[1],
                        h = I((0, u.useState)(!1), 2),
                        d = h[0],
                        b = h[1],
                        v = I((0, u.useState)({
                            x: 0,
                            y: 0
                        }), 2),
                        g = v[0],
                        w = v[1],
                        O = (0, u.useRef)(),
                        j = t.allowEscapeViewBox,
                        x = t.reverseDirection,
                        S = t.coordinate,
                        P = t.offset,
                        A = t.position,
                        E = t.viewBox,
                        k = (0, u.useCallback)((function (t) {
                            "Escape" === t.key && (b(!0), w((function (t) {
                                return C(C({}, t), {}, {
                                    x: null == S ? void 0 : S.x,
                                    y: null == S ? void 0 : S.y
                                })
                            })))
                        }), [null == S ? void 0 : S.x, null == S ? void 0 : S.y]);
                    (0, u.useEffect)((function () {
                        return function () {
                                if (d ? (document.removeEventListener("keydown", k), (null == S ? void 0 : S.x) === g.x && (null == S ? void 0 : S.y) === g.y || b(!1)) : document.addEventListener("keydown", k), O.current && O.current.getBoundingClientRect) {
                                    var t = O.current.getBoundingClientRect();
                                    (Math.abs(t.width - n) > 1 || Math.abs(t.height - s) > 1) && (i(t.width), y(t.height))
                                } else -1 === n && -1 === s || (i(-1), y(-1))
                            }(),
                            function () {
                                document.removeEventListener("keydown", k)
                            }
                    }), [s, n, S, d, g.x, g.y, k]);
                    var B, R, D = function (t) {
                            var e = t.key,
                                r = t.tooltipDimension,
                                n = t.viewBoxDimension;
                            if (A && (0, m.hj)(A[e])) return A[e];
                            var o = S[e] - r - P,
                                i = S[e] + P;
                            return null != j && j[e] ? x[e] ? o : i : null != x && x[e] ? o < E[e] ? Math.max(i, E[e]) : Math.max(o, E[e]) : i + r > E[e] + n ? Math.max(o, E[e]) : Math.max(i, E[e])
                        },
                        T = t.payload,
                        H = t.payloadUniqBy,
                        L = t.filterNull,
                        V = t.active,
                        U = t.wrapperStyle,
                        z = t.useTranslate3d,
                        F = t.isAnimationActive,
                        $ = t.animationDuration,
                        Z = t.animationEasing,
                        K = function (t, e) {
                            return !0 === t ? l()(e, _) : a()(t) ? l()(e, t) : e
                        }(H, L && T && T.length ? T.filter((function (t) {
                            return !o()(t.value)
                        })) : T),
                        q = K && K.length,
                        Y = t.content,
                        G = C({
                            pointerEvents: "none",
                            visibility: !d && V && q ? "visible" : "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }, U);
                    A && (0, m.hj)(A.x) && (0, m.hj)(A.y) ? (B = A.x, R = A.y) : n > 0 && s > 0 && S ? (B = D({
                        key: "x",
                        tooltipDimension: n,
                        viewBoxDimension: E.width
                    }), R = D({
                        key: "y",
                        tooltipDimension: s,
                        viewBoxDimension: E.height
                    })) : G.visibility = "hidden", G = C(C({}, (0, f.bO)({
                        transform: z ? "translate3d(".concat(B, "px, ").concat(R, "px, 0)") : "translate(".concat(B, "px, ").concat(R, "px)")
                    })), G), F && V && (G = C(C({}, (0, f.bO)({
                        transition: "transform ".concat($, "ms ").concat(Z)
                    })), G));
                    var J = p()(M, (W(e = {}, "".concat(M, "-right"), (0, m.hj)(B) && S && (0, m.hj)(S.x) && B >= S.x), W(e, "".concat(M, "-left"), (0, m.hj)(B) && S && (0, m.hj)(S.x) && B < S.x), W(e, "".concat(M, "-bottom"), (0, m.hj)(R) && S && (0, m.hj)(S.y) && R >= S.y), W(e, "".concat(M, "-top"), (0, m.hj)(R) && S && (0, m.hj)(S.y) && R < S.y), e));
                    return u.createElement("div", {
                        tabIndex: -1,
                        role: "dialog",
                        className: J,
                        style: G,
                        ref: O
                    }, function (t, e) {
                        return u.isValidElement(t) ? u.cloneElement(t, e) : a()(t) ? u.createElement(t, e) : u.createElement(N, e)
                    }(Y, C(C({}, t), {}, {
                        payload: K
                    })))
                };
            V.displayName = "Tooltip", V.defaultProps = L
        },
        48710: function (t, e, r) {
            r.d(e, {
                m: function () {
                    return f
                }
            });
            var n = r(67294),
                o = r(94184),
                i = r.n(o),
                a = r(52017),
                c = ["children", "className"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, l.apply(this, arguments)
            }

            function u(t, e) {
                if (null == t) return {};
                var r, n, o = function (t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var f = n.forwardRef((function (t, e) {
                var r = t.children,
                    o = t.className,
                    f = u(t, c),
                    s = i()("recharts-layer", o);
                return n.createElement("g", l({
                    className: s
                }, (0, a.L6)(f, !0), {
                    ref: e
                }), r)
            }))
        },
        20514: function (t, e, r) {
            r.d(e, {
                T: function () {
                    return f
                }
            });
            var n = r(67294),
                o = r(94184),
                i = r.n(o),
                a = r(52017),
                c = ["children", "width", "height", "viewBox", "className", "style"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, l.apply(this, arguments)
            }

            function u(t, e) {
                if (null == t) return {};
                var r, n, o = function (t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function f(t) {
                var e = t.children,
                    r = t.width,
                    o = t.height,
                    f = t.viewBox,
                    s = t.className,
                    p = t.style,
                    y = u(t, c),
                    h = f || {
                        width: r,
                        height: o,
                        x: 0,
                        y: 0
                    },
                    d = i()("recharts-surface", s);
                return n.createElement("svg", l({}, (0, a.L6)(y, !0, "svg"), {
                    className: d,
                    width: r,
                    height: o,
                    style: p,
                    viewBox: "".concat(h.x, " ").concat(h.y, " ").concat(h.width, " ").concat(h.height)
                }), n.createElement("title", null, t.title), n.createElement("desc", null, t.desc), e)
            }
        }
    }
]);