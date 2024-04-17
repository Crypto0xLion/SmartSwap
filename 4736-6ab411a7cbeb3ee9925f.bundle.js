"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [4736], {
        67814: function (e, t, n) {
            n.d(t, {
                G: function () {
                    return y
                }
            });
            var r = n(23636),
                a = n(45697),
                o = n.n(a),
                i = n(67294);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        c(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s(e)
            }

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, a = function (e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function d(e) {
                return function (e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e) {
                return t = e, (t -= 0) == t ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function (e, t) {
                    return t ? t.toUpperCase() : ""
                }))).substr(0, 1).toLowerCase() + e.substr(1);
                var t
            }
            var v = ["style"];
            var g = !1;
            try {
                g = !0
            } catch (e) {}

            function b(e) {
                return e && "object" === s(e) && e.prefix && e.iconName && e.icon ? e : r.Qc.icon ? r.Qc.icon(e) : null === e ? null : e && "object" === s(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function h(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? c({}, e, t) : {}
            }
            var y = i.forwardRef((function (e, t) {
                var n = e.icon,
                    a = e.mask,
                    o = e.symbol,
                    i = e.className,
                    l = e.title,
                    s = e.titleId,
                    f = e.maskId,
                    m = b(n),
                    p = h("classes", [].concat(d(function (e) {
                        var t, n = e.beat,
                            r = e.fade,
                            a = e.beatFade,
                            o = e.bounce,
                            i = e.shake,
                            l = e.flash,
                            u = e.spin,
                            s = e.spinPulse,
                            f = e.spinReverse,
                            d = e.pulse,
                            m = e.fixedWidth,
                            p = e.inverse,
                            v = e.border,
                            g = e.listItem,
                            b = e.flip,
                            h = e.size,
                            y = e.rotation,
                            w = e.pull,
                            x = (c(t = {
                                "fa-beat": n,
                                "fa-fade": r,
                                "fa-beat-fade": a,
                                "fa-bounce": o,
                                "fa-shake": i,
                                "fa-flash": l,
                                "fa-spin": u,
                                "fa-spin-reverse": f,
                                "fa-spin-pulse": s,
                                "fa-pulse": d,
                                "fa-fw": m,
                                "fa-inverse": p,
                                "fa-border": v,
                                "fa-li": g,
                                "fa-flip": !0 === b,
                                "fa-flip-horizontal": "horizontal" === b || "both" === b,
                                "fa-flip-vertical": "vertical" === b || "both" === b
                            }, "fa-".concat(h), null != h), c(t, "fa-rotate-".concat(y), null != y && 0 !== y), c(t, "fa-pull-".concat(w), null != w), c(t, "fa-swap-opacity", e.swapOpacity), t);
                        return Object.keys(x).map((function (e) {
                            return x[e] ? e : null
                        })).filter((function (e) {
                            return e
                        }))
                    }(e)), d(i.split(" ")))),
                    v = h("transform", "string" == typeof e.transform ? r.Qc.transform(e.transform) : e.transform),
                    x = h("mask", b(a)),
                    k = (0, r.qv)(m, u(u(u(u({}, p), v), x), {}, {
                        symbol: o,
                        title: l,
                        titleId: s,
                        maskId: f
                    }));
                if (!k) return function () {
                    var e;
                    !g && console && "function" == typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", m), null;
                var E = k.abstract,
                    P = {
                        ref: t
                    };
                return Object.keys(e).forEach((function (t) {
                    y.defaultProps.hasOwnProperty(t) || (P[t] = e[t])
                })), w(E[0], P)
            }));
            y.displayName = "FontAwesomeIcon", y.propTypes = {
                beat: o().bool,
                border: o().bool,
                beatFade: o().bool,
                bounce: o().bool,
                className: o().string,
                fade: o().bool,
                flash: o().bool,
                mask: o().oneOfType([o().object, o().array, o().string]),
                maskId: o().string,
                fixedWidth: o().bool,
                inverse: o().bool,
                flip: o().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: o().oneOfType([o().object, o().array, o().string]),
                listItem: o().bool,
                pull: o().oneOf(["right", "left"]),
                pulse: o().bool,
                rotation: o().oneOf([0, 90, 180, 270]),
                shake: o().bool,
                size: o().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: o().bool,
                spinPulse: o().bool,
                spinReverse: o().bool,
                symbol: o().oneOfType([o().bool, o().string]),
                title: o().string,
                titleId: o().string,
                transform: o().oneOfType([o().string, o().object]),
                swapOpacity: o().bool
            }, y.defaultProps = {
                border: !1,
                className: "",
                mask: null,
                maskId: null,
                fixedWidth: !1,
                inverse: !1,
                flip: !1,
                icon: null,
                listItem: !1,
                pull: null,
                pulse: !1,
                rotation: null,
                size: null,
                spin: !1,
                spinPulse: !1,
                spinReverse: !1,
                beat: !1,
                fade: !1,
                beatFade: !1,
                bounce: !1,
                shake: !1,
                symbol: !1,
                title: "",
                titleId: null,
                transform: null,
                swapOpacity: !1
            };
            var w = function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof n) return n;
                var a = (n.children || []).map((function (n) {
                        return e(t, n)
                    })),
                    o = Object.keys(n.attributes || {}).reduce((function (e, t) {
                        var r = n.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = r, delete n.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = r.split(";").map((function (e) {
                                    return e.trim()
                                })).filter((function (e) {
                                    return e
                                })).reduce((function (e, t) {
                                    var n, r = t.indexOf(":"),
                                        a = p(t.slice(0, r)),
                                        o = t.slice(r + 1).trim();
                                    return a.startsWith("webkit") ? e[(n = a, n.charAt(0).toUpperCase() + n.slice(1))] = o : e[a] = o, e
                                }), {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = r : e.attrs[p(t)] = r
                        }
                        return e
                    }), {
                        attrs: {}
                    }),
                    i = r.style,
                    l = void 0 === i ? {} : i,
                    s = f(r, v);
                return o.attrs.style = u(u({}, o.attrs.style), l), t.apply(void 0, [n.tag, u(u({}, o.attrs), s)].concat(d(a)))
            }.bind(null, i.createElement)
        },
        8679: function (e, t, n) {
            var r = n(59864),
                a = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                l = {};

            function u(e) {
                return r.isMemo(e) ? i : l[e.$$typeof] || a
            }
            l[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, l[r.Memo] = i;
            var s = Object.defineProperty,
                c = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                m = Object.getPrototypeOf,
                p = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (p) {
                        var a = m(n);
                        a && a !== p && e(t, a, r)
                    }
                    var i = c(n);
                    f && (i = i.concat(f(n)));
                    for (var l = u(t), v = u(n), g = 0; g < i.length; ++g) {
                        var b = i[g];
                        if (!(o[b] || r && r[b] || v && v[b] || l && l[b])) {
                            var h = d(n, b);
                            try {
                                s(t, b, h)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        41143: function (e) {
            e.exports = function (e, t, n, r, a, o, i, l) {
                if (!e) {
                    var u;
                    if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = [n, r, a, o, i, l],
                            c = 0;
                        (u = new Error(t.replace(/%s/g, (function () {
                            return s[c++]
                        })))).name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1, u
                }
            }
        },
        88301: function (e, t, n) {
            function r(e) {
                return e.split("-")[1]
            }

            function a(e) {
                return "y" === e ? "height" : "width"
            }

            function o(e) {
                return e.split("-")[0]
            }

            function i(e) {
                return ["top", "bottom"].includes(o(e)) ? "x" : "y"
            }

            function l(e, t, n) {
                let {
                    reference: l,
                    floating: u
                } = e;
                const s = l.x + l.width / 2 - u.width / 2,
                    c = l.y + l.height / 2 - u.height / 2,
                    f = i(t),
                    d = a(f),
                    m = l[d] / 2 - u[d] / 2,
                    p = "x" === f;
                let v;
                switch (o(t)) {
                    case "top":
                        v = {
                            x: s,
                            y: l.y - u.height
                        };
                        break;
                    case "bottom":
                        v = {
                            x: s,
                            y: l.y + l.height
                        };
                        break;
                    case "right":
                        v = {
                            x: l.x + l.width,
                            y: c
                        };
                        break;
                    case "left":
                        v = {
                            x: l.x - u.width,
                            y: c
                        };
                        break;
                    default:
                        v = {
                            x: l.x,
                            y: l.y
                        }
                }
                switch (r(t)) {
                    case "start":
                        v[f] -= m * (n && p ? -1 : 1);
                        break;
                    case "end":
                        v[f] += m * (n && p ? -1 : 1)
                }
                return v
            }
            n.d(t, {
                JB: function () {
                    return c
                },
                RR: function () {
                    return k
                },
                cv: function () {
                    return E
                },
                oo: function () {
                    return u
                },
                uY: function () {
                    return O
                },
                x7: function () {
                    return v
                }
            });
            const u = async (e, t, n) => {
                const {
                    placement: r = "bottom",
                    strategy: a = "absolute",
                    middleware: o = [],
                    platform: i
                } = n, u = o.filter(Boolean), s = await (null == i.isRTL ? void 0 : i.isRTL(t));
                let c = await i.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: a
                    }),
                    {
                        x: f,
                        y: d
                    } = l(c, r, s),
                    m = r,
                    p = {},
                    v = 0;
                for (let n = 0; n < u.length; n++) {
                    const {
                        name: o,
                        fn: g
                    } = u[n], {
                        x: b,
                        y: h,
                        data: y,
                        reset: w
                    } = await g({
                        x: f,
                        y: d,
                        initialPlacement: r,
                        placement: m,
                        strategy: a,
                        middlewareData: p,
                        rects: c,
                        platform: i,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    f = null != b ? b : f, d = null != h ? h : d, p = {
                        ...p,
                        [o]: {
                            ...p[o],
                            ...y
                        }
                    }, w && v <= 50 && (v++, "object" == typeof w && (w.placement && (m = w.placement), w.rects && (c = !0 === w.rects ? await i.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: a
                    }) : w.rects), ({
                        x: f,
                        y: d
                    } = l(c, m, s))), n = -1)
                }
                return {
                    x: f,
                    y: d,
                    placement: m,
                    strategy: a,
                    middlewareData: p
                }
            };

            function s(e) {
                return "number" != typeof e ? function (e) {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...e
                    }
                }(e) : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function c(e) {
                return {
                    ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function f(e, t) {
                var n;
                void 0 === t && (t = {});
                const {
                    x: r,
                    y: a,
                    platform: o,
                    rects: i,
                    elements: l,
                    strategy: u
                } = e, {
                    boundary: f = "clippingAncestors",
                    rootBoundary: d = "viewport",
                    elementContext: m = "floating",
                    altBoundary: p = !1,
                    padding: v = 0
                } = t, g = s(v), b = l[p ? "floating" === m ? "reference" : "floating" : m], h = c(await o.getClippingRect({
                    element: null == (n = await (null == o.isElement ? void 0 : o.isElement(b))) || n ? b : b.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(l.floating)),
                    boundary: f,
                    rootBoundary: d,
                    strategy: u
                })), y = "floating" === m ? {
                    ...i.floating,
                    x: r,
                    y: a
                } : i.reference, w = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(l.floating)), x = await (null == o.isElement ? void 0 : o.isElement(w)) && await (null == o.getScale ? void 0 : o.getScale(w)) || {
                    x: 1,
                    y: 1
                }, k = c(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: y,
                    offsetParent: w,
                    strategy: u
                }) : y);
                return {
                    top: (h.top - k.top + g.top) / x.y,
                    bottom: (k.bottom - h.bottom + g.bottom) / x.y,
                    left: (h.left - k.left + g.left) / x.x,
                    right: (k.right - h.right + g.right) / x.x
                }
            }
            const d = Math.min,
                m = Math.max;

            function p(e, t, n) {
                return m(e, d(t, n))
            }
            const v = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        const {
                            element: n,
                            padding: o = 0
                        } = e || {}, {
                            x: l,
                            y: u,
                            placement: c,
                            rects: f,
                            platform: d,
                            elements: m
                        } = t;
                        if (null == n) return {};
                        const v = s(o),
                            g = {
                                x: l,
                                y: u
                            },
                            b = i(c),
                            h = a(b),
                            y = await d.getDimensions(n),
                            w = "y" === b,
                            x = w ? "top" : "left",
                            k = w ? "bottom" : "right",
                            E = w ? "clientHeight" : "clientWidth",
                            P = f.reference[h] + f.reference[b] - g[b] - f.floating[h],
                            O = g[b] - f.reference[b],
                            S = await (null == d.getOffsetParent ? void 0 : d.getOffsetParent(n));
                        let T = S ? S[E] : 0;
                        T && await (null == d.isElement ? void 0 : d.isElement(S)) || (T = m.floating[E] || f.floating[h]);
                        const A = P / 2 - O / 2,
                            C = v[x],
                            R = T - y[h] - v[k],
                            N = T / 2 - y[h] / 2 + A,
                            M = p(C, N, R),
                            I = null != r(c) && N != M && f.reference[h] / 2 - (N < C ? v[x] : v[k]) - y[h] / 2 < 0;
                        return {
                            [b]: g[b] - (I ? N < C ? C - N : R - N : 0),
                            data: {
                                [b]: M,
                                centerOffset: N - M
                            }
                        }
                    }
                }),
                g = ["top", "right", "bottom", "left"],
                b = (g.reduce(((e, t) => e.concat(t, t + "-start", t + "-end")), []), {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                });

            function h(e) {
                return e.replace(/left|right|bottom|top/g, (e => b[e]))
            }

            function y(e, t, n) {
                void 0 === n && (n = !1);
                const o = r(e),
                    l = i(e),
                    u = a(l);
                let s = "x" === l ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                return t.reference[u] > t.floating[u] && (s = h(s)), {
                    main: s,
                    cross: h(s)
                }
            }
            const w = {
                start: "end",
                end: "start"
            };

            function x(e) {
                return e.replace(/start|end/g, (e => w[e]))
            }
            const k = function (e) {
                return void 0 === e && (e = {}), {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var n;
                        const {
                            placement: a,
                            middlewareData: i,
                            rects: l,
                            initialPlacement: u,
                            platform: s,
                            elements: c
                        } = t, {
                            mainAxis: d = !0,
                            crossAxis: m = !0,
                            fallbackPlacements: p,
                            fallbackStrategy: v = "bestFit",
                            fallbackAxisSideDirection: g = "none",
                            flipAlignment: b = !0,
                            ...w
                        } = e, k = o(a), E = o(u) === u, P = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)), O = p || (E || !b ? [h(u)] : function (e) {
                            const t = h(e);
                            return [x(e), t, x(t)]
                        }(u));
                        p || "none" === g || O.push(... function (e, t, n, a) {
                            const i = r(e);
                            let l = function (e, t, n) {
                                const r = ["left", "right"],
                                    a = ["right", "left"],
                                    o = ["top", "bottom"],
                                    i = ["bottom", "top"];
                                switch (e) {
                                    case "top":
                                    case "bottom":
                                        return n ? t ? a : r : t ? r : a;
                                    case "left":
                                    case "right":
                                        return t ? o : i;
                                    default:
                                        return []
                                }
                            }(o(e), "start" === n, a);
                            return i && (l = l.map((e => e + "-" + i)), t && (l = l.concat(l.map(x)))), l
                        }(u, b, g, P));
                        const S = [u, ...O],
                            T = await f(t, w),
                            A = [];
                        let C = (null == (n = i.flip) ? void 0 : n.overflows) || [];
                        if (d && A.push(T[k]), m) {
                            const {
                                main: e,
                                cross: t
                            } = y(a, l, P);
                            A.push(T[e], T[t])
                        }
                        if (C = [...C, {
                                placement: a,
                                overflows: A
                            }], !A.every((e => e <= 0))) {
                            var R, N;
                            const e = ((null == (R = i.flip) ? void 0 : R.index) || 0) + 1,
                                t = S[e];
                            if (t) return {
                                data: {
                                    index: e,
                                    overflows: C
                                },
                                reset: {
                                    placement: t
                                }
                            };
                            let n = null == (N = C.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : N.placement;
                            if (!n) switch (v) {
                                case "bestFit": {
                                    var M;
                                    const e = null == (M = C.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : M[0];
                                    e && (n = e);
                                    break
                                }
                                case "initialPlacement":
                                    n = u
                            }
                            if (a !== n) return {
                                reset: {
                                    placement: n
                                }
                            }
                        }
                        return {}
                    }
                }
            };
            const E = function (e) {
                return void 0 === e && (e = 0), {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        const {
                            x: n,
                            y: a
                        } = t, l = await async function (e, t) {
                            const {
                                placement: n,
                                platform: a,
                                elements: l
                            } = e, u = await (null == a.isRTL ? void 0 : a.isRTL(l.floating)), s = o(n), c = r(n), f = "x" === i(n), d = ["left", "top"].includes(s) ? -1 : 1, m = u && f ? -1 : 1, p = "function" == typeof t ? t(e) : t;
                            let {
                                mainAxis: v,
                                crossAxis: g,
                                alignmentAxis: b
                            } = "number" == typeof p ? {
                                mainAxis: p,
                                crossAxis: 0,
                                alignmentAxis: null
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...p
                            };
                            return c && "number" == typeof b && (g = "end" === c ? -1 * b : b), f ? {
                                x: g * m,
                                y: v * d
                            } : {
                                x: v * d,
                                y: g * m
                            }
                        }(t, e);
                        return {
                            x: n + l.x,
                            y: a + l.y,
                            data: l
                        }
                    }
                }
            };

            function P(e) {
                return "x" === e ? "y" : "x"
            }
            const O = function (e) {
                return void 0 === e && (e = {}), {
                    name: "shift",
                    options: e,
                    async fn(t) {
                        const {
                            x: n,
                            y: r,
                            placement: a
                        } = t, {
                            mainAxis: l = !0,
                            crossAxis: u = !1,
                            limiter: s = {
                                fn: e => {
                                    let {
                                        x: t,
                                        y: n
                                    } = e;
                                    return {
                                        x: t,
                                        y: n
                                    }
                                }
                            },
                            ...c
                        } = e, d = {
                            x: n,
                            y: r
                        }, m = await f(t, c), v = i(o(a)), g = P(v);
                        let b = d[v],
                            h = d[g];
                        if (l) {
                            const e = "y" === v ? "bottom" : "right";
                            b = p(b + m["y" === v ? "top" : "left"], b, b - m[e])
                        }
                        if (u) {
                            const e = "y" === g ? "bottom" : "right";
                            h = p(h + m["y" === g ? "top" : "left"], h, h - m[e])
                        }
                        const y = s.fn({
                            ...t,
                            [v]: b,
                            [g]: h
                        });
                        return {
                            ...y,
                            data: {
                                x: y.x - n,
                                y: y.y - r
                            }
                        }
                    }
                }
            }
        },
        55863: function (e, t, n) {
            n.d(t, {
                oo: function () {
                    return z
                }
            });
            var r = n(88301);

            function a(e) {
                var t;
                return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function o(e) {
                return a(e).getComputedStyle(e)
            }

            function i(e) {
                return e instanceof a(e).Node
            }

            function l(e) {
                return i(e) ? (e.nodeName || "").toLowerCase() : ""
            }

            function u(e) {
                return e instanceof a(e).HTMLElement
            }

            function s(e) {
                return e instanceof a(e).Element
            }

            function c(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof a(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function f(e) {
                const {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: a
                } = o(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a)
            }

            function d(e) {
                return ["table", "td", "th"].includes(l(e))
            }

            function m(e) {
                const t = p(),
                    n = o(e);
                return "none" !== n.transform || "none" !== n.perspective || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
            }

            function p() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function v(e) {
                return ["html", "body", "#document"].includes(l(e))
            }
            const g = Math.min,
                b = Math.max,
                h = Math.round;

            function y(e) {
                const t = o(e);
                let n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0;
                const a = u(e),
                    i = a ? e.offsetWidth : n,
                    l = a ? e.offsetHeight : r,
                    s = h(n) !== i || h(r) !== l;
                return s && (n = i, r = l), {
                    width: n,
                    height: r,
                    fallback: s
                }
            }

            function w(e) {
                return s(e) ? e : e.contextElement
            }
            const x = {
                x: 1,
                y: 1
            };

            function k(e) {
                const t = w(e);
                if (!u(t)) return x;
                const n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: a,
                        fallback: o
                    } = y(t);
                let i = (o ? h(n.width) : n.width) / r,
                    l = (o ? h(n.height) : n.height) / a;
                return i && Number.isFinite(i) || (i = 1), l && Number.isFinite(l) || (l = 1), {
                    x: i,
                    y: l
                }
            }
            const E = {
                x: 0,
                y: 0
            };

            function P(e, t, n) {
                var r, o;
                if (void 0 === t && (t = !0), !p()) return E;
                const i = e ? a(e) : window;
                return !n || t && n !== i ? E : {
                    x: (null == (r = i.visualViewport) ? void 0 : r.offsetLeft) || 0,
                    y: (null == (o = i.visualViewport) ? void 0 : o.offsetTop) || 0
                }
            }

            function O(e, t, n, o) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                const i = e.getBoundingClientRect(),
                    l = w(e);
                let u = x;
                t && (o ? s(o) && (u = k(o)) : u = k(e));
                const c = P(l, n, o);
                let f = (i.left + c.x) / u.x,
                    d = (i.top + c.y) / u.y,
                    m = i.width / u.x,
                    p = i.height / u.y;
                if (l) {
                    const e = a(l),
                        t = o && s(o) ? a(o) : o;
                    let n = e.frameElement;
                    for (; n && o && t !== e;) {
                        const e = k(n),
                            t = n.getBoundingClientRect(),
                            r = getComputedStyle(n);
                        t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, f *= e.x, d *= e.y, m *= e.x, p *= e.y, f += t.x, d += t.y, n = a(n).frameElement
                    }
                }
                return (0, r.JB)({
                    width: m,
                    height: p,
                    x: f,
                    y: d
                })
            }

            function S(e) {
                return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function T(e) {
                return s(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function A(e) {
                return O(S(e)).left + T(e).scrollLeft
            }

            function C(e) {
                if ("html" === l(e)) return e;
                const t = e.assignedSlot || e.parentNode || c(e) && e.host || S(e);
                return c(t) ? t.host : t
            }

            function R(e) {
                const t = C(e);
                return v(t) ? t.ownerDocument.body : u(t) && f(t) ? t : R(t)
            }

            function N(e, t) {
                var n;
                void 0 === t && (t = []);
                const r = R(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = a(r);
                return o ? t.concat(i, i.visualViewport || [], f(r) ? r : []) : t.concat(r, N(r))
            }

            function M(e, t, n) {
                let i;
                if ("viewport" === t) i = function (e, t) {
                    const n = a(e),
                        r = S(e),
                        o = n.visualViewport;
                    let i = r.clientWidth,
                        l = r.clientHeight,
                        u = 0,
                        s = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        const e = p();
                        (!e || e && "fixed" === t) && (u = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: u,
                        y: s
                    }
                }(e, n);
                else if ("document" === t) i = function (e) {
                    const t = S(e),
                        n = T(e),
                        r = e.ownerDocument.body,
                        a = b(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = b(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
                    let l = -n.scrollLeft + A(e);
                    const u = -n.scrollTop;
                    return "rtl" === o(r).direction && (l += b(t.clientWidth, r.clientWidth) - a), {
                        width: a,
                        height: i,
                        x: l,
                        y: u
                    }
                }(S(e));
                else if (s(t)) i = function (e, t) {
                    const n = O(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        a = n.left + e.clientLeft,
                        o = u(e) ? k(e) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: e.clientWidth * o.x,
                        height: e.clientHeight * o.y,
                        x: a * o.x,
                        y: r * o.y
                    }
                }(t, n);
                else {
                    const n = P(e);
                    i = {
                        ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.JB)(i)
            }

            function I(e, t) {
                const n = C(e);
                return !(n === t || !s(n) || v(n)) && ("fixed" === o(n).position || I(n, t))
            }

            function F(e, t) {
                return u(e) && "fixed" !== o(e).position ? t ? t(e) : e.offsetParent : null
            }

            function L(e, t) {
                const n = a(e);
                if (!u(e)) return n;
                let r = F(e, t);
                for (; r && d(r) && "static" === o(r).position;) r = F(r, t);
                return r && ("html" === l(r) || "body" === l(r) && "static" === o(r).position && !m(r)) ? n : r || function (e) {
                    let t = C(e);
                    for (; u(t) && !v(t);) {
                        if (m(t)) return t;
                        t = C(t)
                    }
                    return null
                }(e) || n
            }

            function D(e, t, n) {
                const r = u(t),
                    a = S(t),
                    o = "fixed" === n,
                    i = O(e, !0, o, t);
                let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const c = {
                    x: 0,
                    y: 0
                };
                if (r || !r && !o)
                    if (("body" !== l(t) || f(a)) && (s = T(t)), u(t)) {
                        const e = O(t, !0, o, t);
                        c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                    } else a && (c.x = A(a));
                return {
                    x: i.left + s.scrollLeft - c.x,
                    y: i.top + s.scrollTop - c.y,
                    width: i.width,
                    height: i.height
                }
            }
            const j = {
                getClippingRect: function (e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: a
                    } = e;
                    const i = "clippingAncestors" === n ? function (e, t) {
                            const n = t.get(e);
                            if (n) return n;
                            let r = N(e).filter((e => s(e) && "body" !== l(e))),
                                a = null;
                            const i = "fixed" === o(e).position;
                            let u = i ? C(e) : e;
                            for (; s(u) && !v(u);) {
                                const t = o(u),
                                    n = m(u);
                                n || "fixed" !== t.position || (a = null), (i ? !n && !a : !n && "static" === t.position && a && ["absolute", "fixed"].includes(a.position) || f(u) && !n && I(e, u)) ? r = r.filter((e => e !== u)) : a = t, u = C(u)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n),
                        u = [...i, r],
                        c = u[0],
                        d = u.reduce(((e, n) => {
                            const r = M(t, n, a);
                            return e.top = b(r.top, e.top), e.right = g(r.right, e.right), e.bottom = g(r.bottom, e.bottom), e.left = b(r.left, e.left), e
                        }), M(t, c, a));
                    return {
                        width: d.right - d.left,
                        height: d.bottom - d.top,
                        x: d.left,
                        y: d.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
                    let {
                        rect: t,
                        offsetParent: n,
                        strategy: r
                    } = e;
                    const a = u(n),
                        o = S(n);
                    if (n === o) return t;
                    let i = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        s = {
                            x: 1,
                            y: 1
                        };
                    const c = {
                        x: 0,
                        y: 0
                    };
                    if ((a || !a && "fixed" !== r) && (("body" !== l(n) || f(o)) && (i = T(n)), u(n))) {
                        const e = O(n);
                        s = k(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop
                    }
                    return {
                        width: t.width * s.x,
                        height: t.height * s.y,
                        x: t.x * s.x - i.scrollLeft * s.x + c.x,
                        y: t.y * s.y - i.scrollTop * s.y + c.y
                    }
                },
                isElement: s,
                getDimensions: function (e) {
                    return y(e)
                },
                getOffsetParent: L,
                getDocumentElement: S,
                getScale: k,
                async getElementRects(e) {
                    let {
                        reference: t,
                        floating: n,
                        strategy: r
                    } = e;
                    const a = this.getOffsetParent || L,
                        o = this.getDimensions;
                    return {
                        reference: D(t, await a(n), r),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await o(n)
                        }
                    }
                },
                getClientRects: e => Array.from(e.getClientRects()),
                isRTL: e => "rtl" === o(e).direction
            };
            const z = (e, t, n) => {
                const a = new Map,
                    o = {
                        platform: j,
                        ...n
                    },
                    i = {
                        ...o.platform,
                        _c: a
                    };
                return (0, r.oo)(e, t, {
                    ...o,
                    platform: i
                })
            }
        },
        23636: function (e, t, n) {
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function (t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function u(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [],
                        i = !0,
                        l = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        l = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (l) throw a
                        }
                    }
                    return o
                }(e, t) || c(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                return function (e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || c(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                }
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, {
                Qc: function () {
                    return bn
                },
                qv: function () {
                    return hn
                },
                vI: function () {
                    return gn
                }
            });
            var d = function () {},
                m = {},
                p = {},
                v = null,
                g = {
                    mark: d,
                    measure: d
                };
            try {
                "undefined" != typeof window && (m = window), "undefined" != typeof document && (p = document), "undefined" != typeof MutationObserver && (v = MutationObserver), "undefined" != typeof performance && (g = performance)
            } catch (e) {}
            var b, h, y, w, x, k = (m.navigator || {}).userAgent,
                E = void 0 === k ? "" : k,
                P = m,
                O = p,
                S = v,
                T = g,
                A = (P.document, !!O.documentElement && !!O.head && "function" == typeof O.addEventListener && "function" == typeof O.createElement),
                C = ~E.indexOf("MSIE") || ~E.indexOf("Trident/"),
                R = "___FONT_AWESOME___",
                N = 16,
                M = "fa",
                I = "svg-inline--fa",
                F = "data-fa-i2svg",
                L = "data-fa-pseudo-element",
                D = "data-fa-pseudo-element-pending",
                j = "data-prefix",
                z = "data-icon",
                Y = "fontawesome-i2svg",
                H = "async",
                B = ["HTML", "HEAD", "STYLE", "SCRIPT"],
                _ = function () {
                    try {
                        return !0
                    } catch (e) {
                        return !1
                    }
                }(),
                V = "classic",
                W = "sharp",
                U = [V, W];

            function $(e) {
                return new Proxy(e, {
                    get: function (e, t) {
                        return t in e ? e[t] : e[V]
                    }
                })
            }
            var G = $((l(b = {}, V, {
                    fa: "solid",
                    fas: "solid",
                    "fa-solid": "solid",
                    far: "regular",
                    "fa-regular": "regular",
                    fal: "light",
                    "fa-light": "light",
                    fat: "thin",
                    "fa-thin": "thin",
                    fad: "duotone",
                    "fa-duotone": "duotone",
                    fab: "brands",
                    "fa-brands": "brands",
                    fak: "kit",
                    "fa-kit": "kit"
                }), l(b, W, {
                    fa: "solid",
                    fass: "solid",
                    "fa-solid": "solid",
                    fasr: "regular",
                    "fa-regular": "regular",
                    fasl: "light",
                    "fa-light": "light"
                }), b)),
                q = $((l(h = {}, V, {
                    solid: "fas",
                    regular: "far",
                    light: "fal",
                    thin: "fat",
                    duotone: "fad",
                    brands: "fab",
                    kit: "fak"
                }), l(h, W, {
                    solid: "fass",
                    regular: "fasr",
                    light: "fasl"
                }), h)),
                Z = $((l(y = {}, V, {
                    fab: "fa-brands",
                    fad: "fa-duotone",
                    fak: "fa-kit",
                    fal: "fa-light",
                    far: "fa-regular",
                    fas: "fa-solid",
                    fat: "fa-thin"
                }), l(y, W, {
                    fass: "fa-solid",
                    fasr: "fa-regular",
                    fasl: "fa-light"
                }), y)),
                K = $((l(w = {}, V, {
                    "fa-brands": "fab",
                    "fa-duotone": "fad",
                    "fa-kit": "fak",
                    "fa-light": "fal",
                    "fa-regular": "far",
                    "fa-solid": "fas",
                    "fa-thin": "fat"
                }), l(w, W, {
                    "fa-solid": "fass",
                    "fa-regular": "fasr",
                    "fa-light": "fasl"
                }), w)),
                J = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
                X = "fa-layers-text",
                Q = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
                ee = $((l(x = {}, V, {
                    900: "fas",
                    400: "far",
                    normal: "far",
                    300: "fal",
                    100: "fat"
                }), l(x, W, {
                    900: "fass",
                    400: "fasr",
                    300: "fasl"
                }), x)),
                te = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ne = te.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                re = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
                ae = {
                    GROUP: "duotone-group",
                    SWAP_OPACITY: "swap-opacity",
                    PRIMARY: "primary",
                    SECONDARY: "secondary"
                },
                oe = new Set;
            Object.keys(q[V]).map(oe.add.bind(oe)), Object.keys(q[W]).map(oe.add.bind(oe));
            var ie = [].concat(U, s(oe), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ae.GROUP, ae.SWAP_OPACITY, ae.PRIMARY, ae.SECONDARY]).concat(te.map((function (e) {
                    return "".concat(e, "x")
                }))).concat(ne.map((function (e) {
                    return "w-".concat(e)
                }))),
                le = P.FontAwesomeConfig || {};
            if (O && "function" == typeof O.querySelector) {
                [
                    ["data-family-prefix", "familyPrefix"],
                    ["data-css-prefix", "cssPrefix"],
                    ["data-family-default", "familyDefault"],
                    ["data-style-default", "styleDefault"],
                    ["data-replacement-class", "replacementClass"],
                    ["data-auto-replace-svg", "autoReplaceSvg"],
                    ["data-auto-add-css", "autoAddCss"],
                    ["data-auto-a11y", "autoA11y"],
                    ["data-search-pseudo-elements", "searchPseudoElements"],
                    ["data-observe-mutations", "observeMutations"],
                    ["data-mutate-approach", "mutateApproach"],
                    ["data-keep-original-source", "keepOriginalSource"],
                    ["data-measure-performance", "measurePerformance"],
                    ["data-show-missing-icons", "showMissingIcons"]
                ].forEach((function (e) {
                    var t = u(e, 2),
                        n = t[0],
                        r = t[1],
                        a = function (e) {
                            return "" === e || "false" !== e && ("true" === e || e)
                        }(function (e) {
                            var t = O.querySelector("script[" + e + "]");
                            if (t) return t.getAttribute(e)
                        }(n));
                    null != a && (le[r] = a)
                }))
            }
            var ue = {
                styleDefault: "solid",
                familyDefault: "classic",
                cssPrefix: M,
                replacementClass: I,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0
            };
            le.familyPrefix && (le.cssPrefix = le.familyPrefix);
            var se = a(a({}, ue), le);
            se.autoReplaceSvg || (se.observeMutations = !1);
            var ce = {};
            Object.keys(ue).forEach((function (e) {
                Object.defineProperty(ce, e, {
                    enumerable: !0,
                    set: function (t) {
                        se[e] = t, fe.forEach((function (e) {
                            return e(ce)
                        }))
                    },
                    get: function () {
                        return se[e]
                    }
                })
            })), Object.defineProperty(ce, "familyPrefix", {
                enumerable: !0,
                set: function (e) {
                    se.cssPrefix = e, fe.forEach((function (e) {
                        return e(ce)
                    }))
                },
                get: function () {
                    return se.cssPrefix
                }
            }), P.FontAwesomeConfig = ce;
            var fe = [];
            var de = N,
                me = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };
            var pe = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function ve() {
                for (var e = 12, t = ""; e-- > 0;) t += pe[62 * Math.random() | 0];
                return t
            }

            function ge(e) {
                for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
                return t
            }

            function be(e) {
                return e.classList ? ge(e.classList) : (e.getAttribute("class") || "").split(" ").filter((function (e) {
                    return e
                }))
            }

            function he(e) {
                return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function ye(e) {
                return Object.keys(e || {}).reduce((function (t, n) {
                    return t + "".concat(n, ": ").concat(e[n].trim(), ";")
                }), "")
            }

            function we(e) {
                return e.size !== me.size || e.x !== me.x || e.y !== me.y || e.rotate !== me.rotate || e.flipX || e.flipY
            }
            var xe = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';

            function ke() {
                var e = M,
                    t = I,
                    n = ce.cssPrefix,
                    r = ce.replacementClass,
                    a = xe;
                if (n !== e || r !== t) {
                    var o = new RegExp("\\.".concat(e, "\\-"), "g"),
                        i = new RegExp("\\--".concat(e, "\\-"), "g"),
                        l = new RegExp("\\.".concat(t), "g");
                    a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(l, ".".concat(r))
                }
                return a
            }
            var Ee = !1;

            function Pe() {
                ce.autoAddCss && !Ee && (! function (e) {
                    if (e && A) {
                        var t = O.createElement("style");
                        t.setAttribute("type", "text/css"), t.innerHTML = e;
                        for (var n = O.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
                            var o = n[a],
                                i = (o.tagName || "").toUpperCase();
                            ["STYLE", "LINK"].indexOf(i) > -1 && (r = o)
                        }
                        O.head.insertBefore(t, r)
                    }
                }(ke()), Ee = !0)
            }
            var Oe = {
                    mixout: function () {
                        return {
                            dom: {
                                css: ke,
                                insertCss: Pe
                            }
                        }
                    },
                    hooks: function () {
                        return {
                            beforeDOMElementCreation: function () {
                                Pe()
                            },
                            beforeI2svg: function () {
                                Pe()
                            }
                        }
                    }
                },
                Se = P || {};
            Se[R] || (Se[R] = {}), Se[R].styles || (Se[R].styles = {}), Se[R].hooks || (Se[R].hooks = {}), Se[R].shims || (Se[R].shims = []);
            var Te = Se[R],
                Ae = [],
                Ce = !1;

            function Re(e) {
                var t = e.tag,
                    n = e.attributes,
                    r = void 0 === n ? {} : n,
                    a = e.children,
                    o = void 0 === a ? [] : a;
                return "string" == typeof e ? he(e) : "<".concat(t, " ").concat(function (e) {
                    return Object.keys(e || {}).reduce((function (t, n) {
                        return t + "".concat(n, '="').concat(he(e[n]), '" ')
                    }), "").trim()
                }(r), ">").concat(o.map(Re).join(""), "</").concat(t, ">")
            }

            function Ne(e, t, n) {
                if (e && e[t] && e[t][n]) return {
                    prefix: t,
                    iconName: n,
                    icon: e[t][n]
                }
            }
            A && ((Ce = (O.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(O.readyState)) || O.addEventListener("DOMContentLoaded", (function e() {
                O.removeEventListener("DOMContentLoaded", e), Ce = 1, Ae.map((function (e) {
                    return e()
                }))
            })));
            var Me = function (e, t, n, r) {
                var a, o, i, l = Object.keys(e),
                    u = l.length,
                    s = void 0 !== r ? function (e, t) {
                        return function (n, r, a, o) {
                            return e.call(t, n, r, a, o)
                        }
                    }(t, r) : t;
                for (void 0 === n ? (a = 1, i = e[l[0]]) : (a = 0, i = n); a < u; a++) i = s(i, e[o = l[a]], o, e);
                return i
            };

            function Ie(e) {
                var t = function (e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var a = e.charCodeAt(n++);
                        if (a >= 55296 && a <= 56319 && n < r) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & a) << 10) + (1023 & o) + 65536) : (t.push(a), n--)
                        } else t.push(a)
                    }
                    return t
                }(e);
                return 1 === t.length ? t[0].toString(16) : null
            }

            function Fe(e) {
                return Object.keys(e).reduce((function (t, n) {
                    var r = e[n];
                    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t
                }), {})
            }

            function Le(e, t) {
                var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                    r = void 0 !== n && n,
                    o = Fe(t);
                "function" != typeof Te.hooks.addPack || r ? Te.styles[e] = a(a({}, Te.styles[e] || {}), o) : Te.hooks.addPack(e, Fe(t)), "fas" === e && Le("fa", t)
            }
            var De, je, ze, Ye = Te.styles,
                He = Te.shims,
                Be = (l(De = {}, V, Object.values(Z[V])), l(De, W, Object.values(Z[W])), De),
                _e = null,
                Ve = {},
                We = {},
                Ue = {},
                $e = {},
                Ge = {},
                qe = (l(je = {}, V, Object.keys(G[V])), l(je, W, Object.keys(G[W])), je);

            function Ze(e, t) {
                var n, r = t.split("-"),
                    a = r[0],
                    o = r.slice(1).join("-");
                return a !== e || "" === o || (n = o, ~ie.indexOf(n)) ? null : o
            }
            var Ke, Je = function () {
                var e = function (e) {
                    return Me(Ye, (function (t, n, r) {
                        return t[r] = Me(n, e, {}), t
                    }), {})
                };
                Ve = e((function (e, t, n) {
                    (t[3] && (e[t[3]] = n), t[2]) && t[2].filter((function (e) {
                        return "number" == typeof e
                    })).forEach((function (t) {
                        e[t.toString(16)] = n
                    }));
                    return e
                })), We = e((function (e, t, n) {
                    (e[n] = n, t[2]) && t[2].filter((function (e) {
                        return "string" == typeof e
                    })).forEach((function (t) {
                        e[t] = n
                    }));
                    return e
                })), Ge = e((function (e, t, n) {
                    var r = t[2];
                    return e[n] = n, r.forEach((function (t) {
                        e[t] = n
                    })), e
                }));
                var t = "far" in Ye || ce.autoFetchSvg,
                    n = Me(He, (function (e, n) {
                        var r = n[0],
                            a = n[1],
                            o = n[2];
                        return "far" !== a || t || (a = "fas"), "string" == typeof r && (e.names[r] = {
                            prefix: a,
                            iconName: o
                        }), "number" == typeof r && (e.unicodes[r.toString(16)] = {
                            prefix: a,
                            iconName: o
                        }), e
                    }), {
                        names: {},
                        unicodes: {}
                    });
                Ue = n.names, $e = n.unicodes, _e = rt(ce.styleDefault, {
                    family: ce.familyDefault
                })
            };

            function Xe(e, t) {
                return (Ve[e] || {})[t]
            }

            function Qe(e, t) {
                return (Ge[e] || {})[t]
            }

            function et(e) {
                return Ue[e] || {
                    prefix: null,
                    iconName: null
                }
            }

            function tt() {
                return _e
            }
            Ke = function (e) {
                _e = rt(e.styleDefault, {
                    family: ce.familyDefault
                })
            }, fe.push(Ke), Je();
            var nt = function () {
                return {
                    prefix: null,
                    iconName: null,
                    rest: []
                }
            };

            function rt(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
                    n = void 0 === t ? V : t,
                    r = G[n][e],
                    a = q[n][e] || q[n][r],
                    o = e in Te.styles ? e : null;
                return a || o || null
            }
            var at = (l(ze = {}, V, Object.keys(Z[V])), l(ze, W, Object.keys(Z[W])), ze);

            function ot(e) {
                var t, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
                    r = void 0 !== n && n,
                    a = (l(t = {}, V, "".concat(ce.cssPrefix, "-").concat(V)), l(t, W, "".concat(ce.cssPrefix, "-").concat(W)), t),
                    o = null,
                    i = V;
                (e.includes(a[V]) || e.some((function (e) {
                    return at[V].includes(e)
                }))) && (i = V), (e.includes(a[W]) || e.some((function (e) {
                    return at[W].includes(e)
                }))) && (i = W);
                var u = e.reduce((function (e, t) {
                    var n = Ze(ce.cssPrefix, t);
                    if (Ye[t] ? (t = Be[i].includes(t) ? K[i][t] : t, o = t, e.prefix = t) : qe[i].indexOf(t) > -1 ? (o = t, e.prefix = rt(t, {
                            family: i
                        })) : n ? e.iconName = n : t !== ce.replacementClass && t !== a[V] && t !== a[W] && e.rest.push(t), !r && e.prefix && e.iconName) {
                        var l = "fa" === o ? et(e.iconName) : {},
                            u = Qe(e.prefix, e.iconName);
                        l.prefix && (o = null), e.iconName = l.iconName || u || e.iconName, e.prefix = l.prefix || e.prefix, "far" !== e.prefix || Ye.far || !Ye.fas || ce.autoFetchSvg || (e.prefix = "fas")
                    }
                    return e
                }), nt());
                return (e.includes("fa-brands") || e.includes("fab")) && (u.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (u.prefix = "fad"), u.prefix || i !== W || !Ye.fass && !ce.autoFetchSvg || (u.prefix = "fass", u.iconName = Qe(u.prefix, u.iconName) || u.iconName), "fa" !== u.prefix && "fa" !== o || (u.prefix = tt() || "fas"), u
            }
            var it = function () {
                    function e() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.definitions = {}
                    }
                    var t, n, r;
                    return t = e, n = [{
                        key: "add",
                        value: function () {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var o = n.reduce(this._pullDefinitions, {});
                            Object.keys(o).forEach((function (t) {
                                e.definitions[t] = a(a({}, e.definitions[t] || {}), o[t]), Le(t, o[t]);
                                var n = Z[V][t];
                                n && Le(n, o[t]), Je()
                            }))
                        }
                    }, {
                        key: "reset",
                        value: function () {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function (e, t) {
                            var n = t.prefix && t.iconName && t.icon ? {
                                0: t
                            } : t;
                            return Object.keys(n).map((function (t) {
                                var r = n[t],
                                    a = r.prefix,
                                    o = r.iconName,
                                    i = r.icon,
                                    l = i[2];
                                e[a] || (e[a] = {}), l.length > 0 && l.forEach((function (t) {
                                    "string" == typeof t && (e[a][t] = i)
                                })), e[a][o] = i
                            })), e
                        }
                    }], n && i(t.prototype, n), r && i(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                lt = [],
                ut = {},
                st = {},
                ct = Object.keys(st);

            function ft(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                return (ut[e] || []).forEach((function (e) {
                    t = e.apply(null, [t].concat(r))
                })), t
            }

            function dt(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                (ut[e] || []).forEach((function (e) {
                    e.apply(null, n)
                }))
            }

            function mt() {
                var e = arguments[0],
                    t = Array.prototype.slice.call(arguments, 1);
                return st[e] ? st[e].apply(null, t) : void 0
            }

            function pt(e) {
                "fa" === e.prefix && (e.prefix = "fas");
                var t = e.iconName,
                    n = e.prefix || tt();
                if (t) return t = Qe(n, t) || t, Ne(vt.definitions, n, t) || Ne(Te.styles, n, t)
            }
            var vt = new it,
                gt = {
                    i2svg: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return A ? (dt("beforeI2svg", e), mt("pseudoElements2svg", e), mt("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.")
                    },
                    watch: function () {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.autoReplaceSvgRoot;
                        !1 === ce.autoReplaceSvg && (ce.autoReplaceSvg = !0), ce.observeMutations = !0, e = function () {
                            ht({
                                autoReplaceSvgRoot: n
                            }), dt("watch", t)
                        }, A && (Ce ? setTimeout(e, 0) : Ae.push(e))
                    }
                },
                bt = {
                    noAuto: function () {
                        ce.autoReplaceSvg = !1, ce.observeMutations = !1, dt("noAuto")
                    },
                    config: ce,
                    dom: gt,
                    parse: {
                        icon: function (e) {
                            if (null === e) return null;
                            if ("object" === o(e) && e.prefix && e.iconName) return {
                                prefix: e.prefix,
                                iconName: Qe(e.prefix, e.iconName) || e.iconName
                            };
                            if (Array.isArray(e) && 2 === e.length) {
                                var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                                    n = rt(e[0]);
                                return {
                                    prefix: n,
                                    iconName: Qe(n, t) || t
                                }
                            }
                            if ("string" == typeof e && (e.indexOf("".concat(ce.cssPrefix, "-")) > -1 || e.match(J))) {
                                var r = ot(e.split(" "), {
                                    skipLookups: !0
                                });
                                return {
                                    prefix: r.prefix || tt(),
                                    iconName: Qe(r.prefix, r.iconName) || r.iconName
                                }
                            }
                            if ("string" == typeof e) {
                                var a = tt();
                                return {
                                    prefix: a,
                                    iconName: Qe(a, e) || e
                                }
                            }
                        }
                    },
                    library: vt,
                    findIconDefinition: pt,
                    toHtml: Re
                },
                ht = function () {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                        t = void 0 === e ? O : e;
                    (Object.keys(Te.styles).length > 0 || ce.autoFetchSvg) && A && ce.autoReplaceSvg && bt.dom.i2svg({
                        node: t
                    })
                };

            function yt(e, t) {
                return Object.defineProperty(e, "abstract", {
                    get: t
                }), Object.defineProperty(e, "html", {
                    get: function () {
                        return e.abstract.map((function (e) {
                            return Re(e)
                        }))
                    }
                }), Object.defineProperty(e, "node", {
                    get: function () {
                        if (A) {
                            var t = O.createElement("div");
                            return t.innerHTML = e.html, t.children
                        }
                    }
                }), e
            }

            function wt(e) {
                var t = e.icons,
                    n = t.main,
                    r = t.mask,
                    o = e.prefix,
                    i = e.iconName,
                    l = e.transform,
                    u = e.symbol,
                    s = e.title,
                    c = e.maskId,
                    f = e.titleId,
                    d = e.extra,
                    m = e.watchable,
                    p = void 0 !== m && m,
                    v = r.found ? r : n,
                    g = v.width,
                    b = v.height,
                    h = "fak" === o,
                    y = [ce.replacementClass, i ? "".concat(ce.cssPrefix, "-").concat(i) : ""].filter((function (e) {
                        return -1 === d.classes.indexOf(e)
                    })).filter((function (e) {
                        return "" !== e || !!e
                    })).concat(d.classes).join(" "),
                    w = {
                        children: [],
                        attributes: a(a({}, d.attributes), {}, {
                            "data-prefix": o,
                            "data-icon": i,
                            class: y,
                            role: d.attributes.role || "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 ".concat(g, " ").concat(b)
                        })
                    },
                    x = h && !~d.classes.indexOf("fa-fw") ? {
                        width: "".concat(g / b * 16 * .0625, "em")
                    } : {};
                p && (w.attributes[F] = ""), s && (w.children.push({
                    tag: "title",
                    attributes: {
                        id: w.attributes["aria-labelledby"] || "title-".concat(f || ve())
                    },
                    children: [s]
                }), delete w.attributes.title);
                var k = a(a({}, w), {}, {
                        prefix: o,
                        iconName: i,
                        main: n,
                        mask: r,
                        maskId: c,
                        transform: l,
                        symbol: u,
                        styles: a(a({}, x), d.styles)
                    }),
                    E = r.found && n.found ? mt("generateAbstractMask", k) || {
                        children: [],
                        attributes: {}
                    } : mt("generateAbstractIcon", k) || {
                        children: [],
                        attributes: {}
                    },
                    P = E.children,
                    O = E.attributes;
                return k.children = P, k.attributes = O, u ? function (e) {
                    var t = e.prefix,
                        n = e.iconName,
                        r = e.children,
                        o = e.attributes,
                        i = e.symbol,
                        l = !0 === i ? "".concat(t, "-").concat(ce.cssPrefix, "-").concat(n) : i;
                    return [{
                        tag: "svg",
                        attributes: {
                            style: "display: none;"
                        },
                        children: [{
                            tag: "symbol",
                            attributes: a(a({}, o), {}, {
                                id: l
                            }),
                            children: r
                        }]
                    }]
                }(k) : function (e) {
                    var t = e.children,
                        n = e.main,
                        r = e.mask,
                        o = e.attributes,
                        i = e.styles,
                        l = e.transform;
                    if (we(l) && n.found && !r.found) {
                        var u = {
                            x: n.width / n.height / 2,
                            y: .5
                        };
                        o.style = ye(a(a({}, i), {}, {
                            "transform-origin": "".concat(u.x + l.x / 16, "em ").concat(u.y + l.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: o,
                        children: t
                    }]
                }(k)
            }

            function xt(e) {
                var t = e.content,
                    n = e.width,
                    r = e.height,
                    o = e.transform,
                    i = e.title,
                    l = e.extra,
                    u = e.watchable,
                    s = void 0 !== u && u,
                    c = a(a(a({}, l.attributes), i ? {
                        title: i
                    } : {}), {}, {
                        class: l.classes.join(" ")
                    });
                s && (c[F] = "");
                var f = a({}, l.styles);
                we(o) && (f.transform = function (e) {
                    var t = e.transform,
                        n = e.width,
                        r = void 0 === n ? N : n,
                        a = e.height,
                        o = void 0 === a ? N : a,
                        i = e.startCentered,
                        l = void 0 !== i && i,
                        u = "";
                    return u += l && C ? "translate(".concat(t.x / de - r / 2, "em, ").concat(t.y / de - o / 2, "em) ") : l ? "translate(calc(-50% + ".concat(t.x / de, "em), calc(-50% + ").concat(t.y / de, "em)) ") : "translate(".concat(t.x / de, "em, ").concat(t.y / de, "em) "), u += "scale(".concat(t.size / de * (t.flipX ? -1 : 1), ", ").concat(t.size / de * (t.flipY ? -1 : 1), ") "), u + "rotate(".concat(t.rotate, "deg) ")
                }({
                    transform: o,
                    startCentered: !0,
                    width: n,
                    height: r
                }), f["-webkit-transform"] = f.transform);
                var d = ye(f);
                d.length > 0 && (c.style = d);
                var m = [];
                return m.push({
                    tag: "span",
                    attributes: c,
                    children: [t]
                }), i && m.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [i]
                }), m
            }
            var kt = Te.styles;

            function Et(e) {
                var t = e[0],
                    n = e[1],
                    r = u(e.slice(4), 1)[0];
                return {
                    found: !0,
                    width: t,
                    height: n,
                    icon: Array.isArray(r) ? {
                        tag: "g",
                        attributes: {
                            class: "".concat(ce.cssPrefix, "-").concat(ae.GROUP)
                        },
                        children: [{
                            tag: "path",
                            attributes: {
                                class: "".concat(ce.cssPrefix, "-").concat(ae.SECONDARY),
                                fill: "currentColor",
                                d: r[0]
                            }
                        }, {
                            tag: "path",
                            attributes: {
                                class: "".concat(ce.cssPrefix, "-").concat(ae.PRIMARY),
                                fill: "currentColor",
                                d: r[1]
                            }
                        }]
                    } : {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: r
                        }
                    }
                }
            }
            var Pt = {
                found: !1,
                width: 512,
                height: 512
            };

            function Ot(e, t) {
                var n = t;
                return "fa" === t && null !== ce.styleDefault && (t = tt()), new Promise((function (r, o) {
                    mt("missingIconAbstract");
                    if ("fa" === n) {
                        var i = et(e) || {};
                        e = i.iconName || e, t = i.prefix || t
                    }
                    if (e && t && kt[t] && kt[t][e]) return r(Et(kt[t][e]));
                    ! function (e, t) {
                        _ || ce.showMissingIcons || !e || console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
                    }(e, t), r(a(a({}, Pt), {}, {
                        icon: ce.showMissingIcons && e && mt("missingIconAbstract") || {}
                    }))
                }))
            }
            var St = function () {},
                Tt = ce.measurePerformance && T && T.mark && T.measure ? T : {
                    mark: St,
                    measure: St
                },
                At = 'FA "6.4.2"',
                Ct = function (e) {
                    Tt.mark("".concat(At, " ").concat(e, " ends")), Tt.measure("".concat(At, " ").concat(e), "".concat(At, " ").concat(e, " begins"), "".concat(At, " ").concat(e, " ends"))
                },
                Rt = {
                    begin: function (e) {
                        return Tt.mark("".concat(At, " ").concat(e, " begins")),
                            function () {
                                return Ct(e)
                            }
                    },
                    end: Ct
                },
                Nt = function () {};

            function Mt(e) {
                return "string" == typeof (e.getAttribute ? e.getAttribute(F) : null)
            }

            function It(e) {
                return O.createElementNS("http://www.w3.org/2000/svg", e)
            }

            function Ft(e) {
                return O.createElement(e)
            }

            function Lt(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
                    n = void 0 === t ? "svg" === e.tag ? It : Ft : t;
                if ("string" == typeof e) return O.createTextNode(e);
                var r = n(e.tag);
                return Object.keys(e.attributes || []).forEach((function (t) {
                    r.setAttribute(t, e.attributes[t])
                })), (e.children || []).forEach((function (e) {
                    r.appendChild(Lt(e, {
                        ceFn: n
                    }))
                })), r
            }
            var Dt = {
                replace: function (e) {
                    var t = e[0];
                    if (t.parentNode)
                        if (e[1].forEach((function (e) {
                                t.parentNode.insertBefore(Lt(e), t)
                            })), null === t.getAttribute(F) && ce.keepOriginalSource) {
                            var n = O.createComment(function (e) {
                                var t = " ".concat(e.outerHTML, " ");
                                return "".concat(t, "Font Awesome fontawesome.com ")
                            }(t));
                            t.parentNode.replaceChild(n, t)
                        } else t.remove()
                },
                nest: function (e) {
                    var t = e[0],
                        n = e[1];
                    if (~be(t).indexOf(ce.replacementClass)) return Dt.replace(e);
                    var r = new RegExp("".concat(ce.cssPrefix, "-.*"));
                    if (delete n[0].attributes.id, n[0].attributes.class) {
                        var a = n[0].attributes.class.split(" ").reduce((function (e, t) {
                            return t === ce.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e
                        }), {
                            toNode: [],
                            toSvg: []
                        });
                        n[0].attributes.class = a.toSvg.join(" "), 0 === a.toNode.length ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "))
                    }
                    var o = n.map((function (e) {
                        return Re(e)
                    })).join("\n");
                    t.setAttribute(F, ""), t.innerHTML = o
                }
            };

            function jt(e) {
                e()
            }

            function zt(e, t) {
                var n = "function" == typeof t ? t : Nt;
                if (0 === e.length) n();
                else {
                    var r = jt;
                    ce.mutateApproach === H && (r = P.requestAnimationFrame || jt), r((function () {
                        var t = !0 === ce.autoReplaceSvg ? Dt.replace : Dt[ce.autoReplaceSvg] || Dt.replace,
                            r = Rt.begin("mutate");
                        e.map(t), r(), n()
                    }))
                }
            }
            var Yt = !1;

            function Ht() {
                Yt = !0
            }

            function Bt() {
                Yt = !1
            }
            var _t = null;

            function Vt(e) {
                if (S && ce.observeMutations) {
                    var t = e.treeCallback,
                        n = void 0 === t ? Nt : t,
                        r = e.nodeCallback,
                        a = void 0 === r ? Nt : r,
                        o = e.pseudoElementsCallback,
                        i = void 0 === o ? Nt : o,
                        l = e.observeMutationsRoot,
                        u = void 0 === l ? O : l;
                    _t = new S((function (e) {
                        if (!Yt) {
                            var t = tt();
                            ge(e).forEach((function (e) {
                                if ("childList" === e.type && e.addedNodes.length > 0 && !Mt(e.addedNodes[0]) && (ce.searchPseudoElements && i(e.target), n(e.target)), "attributes" === e.type && e.target.parentNode && ce.searchPseudoElements && i(e.target.parentNode), "attributes" === e.type && Mt(e.target) && ~re.indexOf(e.attributeName))
                                    if ("class" === e.attributeName && function (e) {
                                            var t = e.getAttribute ? e.getAttribute(j) : null,
                                                n = e.getAttribute ? e.getAttribute(z) : null;
                                            return t && n
                                        }(e.target)) {
                                        var r = ot(be(e.target)),
                                            o = r.prefix,
                                            l = r.iconName;
                                        e.target.setAttribute(j, o || t), l && e.target.setAttribute(z, l)
                                    } else(u = e.target) && u.classList && u.classList.contains && u.classList.contains(ce.replacementClass) && a(e.target);
                                var u
                            }))
                        }
                    })), A && _t.observe(u, {
                        childList: !0,
                        attributes: !0,
                        characterData: !0,
                        subtree: !0
                    })
                }
            }

            function Wt(e) {
                var t, n, r = e.getAttribute("data-prefix"),
                    a = e.getAttribute("data-icon"),
                    o = void 0 !== e.innerText ? e.innerText.trim() : "",
                    i = ot(be(e));
                return i.prefix || (i.prefix = tt()), r && a && (i.prefix = r, i.iconName = a), i.iconName && i.prefix || (i.prefix && o.length > 0 && (i.iconName = (t = i.prefix, n = e.innerText, (We[t] || {})[n] || Xe(i.prefix, Ie(e.innerText)))), !i.iconName && ce.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i
            }

            function Ut(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        styleParser: !0
                    },
                    n = Wt(e),
                    r = n.iconName,
                    o = n.prefix,
                    i = n.rest,
                    l = function (e) {
                        var t = ge(e.attributes).reduce((function (e, t) {
                                return "class" !== e.name && "style" !== e.name && (e[t.name] = t.value), e
                            }), {}),
                            n = e.getAttribute("title"),
                            r = e.getAttribute("data-fa-title-id");
                        return ce.autoA11y && (n ? t["aria-labelledby"] = "".concat(ce.replacementClass, "-title-").concat(r || ve()) : (t["aria-hidden"] = "true", t.focusable = "false")), t
                    }(e),
                    u = ft("parseNodeAttributes", {}, e),
                    s = t.styleParser ? function (e) {
                        var t = e.getAttribute("style"),
                            n = [];
                        return t && (n = t.split(";").reduce((function (e, t) {
                            var n = t.split(":"),
                                r = n[0],
                                a = n.slice(1);
                            return r && a.length > 0 && (e[r] = a.join(":").trim()), e
                        }), {})), n
                    }(e) : [];
                return a({
                    iconName: r,
                    title: e.getAttribute("title"),
                    titleId: e.getAttribute("data-fa-title-id"),
                    prefix: o,
                    transform: me,
                    mask: {
                        iconName: null,
                        prefix: null,
                        rest: []
                    },
                    maskId: null,
                    symbol: !1,
                    extra: {
                        classes: i,
                        styles: s,
                        attributes: l
                    }
                }, u)
            }
            var $t = Te.styles;

            function Gt(e) {
                var t = "nest" === ce.autoReplaceSvg ? Ut(e, {
                    styleParser: !1
                }) : Ut(e);
                return ~t.extra.classes.indexOf(X) ? mt("generateLayersText", e, t) : mt("generateSvgReplacementMutation", e, t)
            }
            var qt = new Set;

            function Zt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!A) return Promise.resolve();
                var n = O.documentElement.classList,
                    r = function (e) {
                        return n.add("".concat(Y, "-").concat(e))
                    },
                    a = function (e) {
                        return n.remove("".concat(Y, "-").concat(e))
                    },
                    o = ce.autoFetchSvg ? qt : U.map((function (e) {
                        return "fa-".concat(e)
                    })).concat(Object.keys($t));
                o.includes("fa") || o.push("fa");
                var i = [".".concat(X, ":not([").concat(F, "])")].concat(o.map((function (e) {
                    return ".".concat(e, ":not([").concat(F, "])")
                }))).join(", ");
                if (0 === i.length) return Promise.resolve();
                var l = [];
                try {
                    l = ge(e.querySelectorAll(i))
                } catch (e) {}
                if (!(l.length > 0)) return Promise.resolve();
                r("pending"), a("complete");
                var u = Rt.begin("onTree"),
                    s = l.reduce((function (e, t) {
                        try {
                            var n = Gt(t);
                            n && e.push(n)
                        } catch (e) {
                            _ || "MissingIcon" === e.name && console.error(e)
                        }
                        return e
                    }), []);
                return new Promise((function (e, n) {
                    Promise.all(s).then((function (n) {
                        zt(n, (function () {
                            r("active"), r("complete"), a("pending"), "function" == typeof t && t(), u(), e()
                        }))
                    })).catch((function (e) {
                        u(), n(e)
                    }))
                }))
            }

            function Kt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                Gt(e).then((function (e) {
                    e && zt([e], t)
                }))
            }
            U.map((function (e) {
                qt.add("fa-".concat(e))
            })), Object.keys(G[V]).map(qt.add.bind(qt)), Object.keys(G[W]).map(qt.add.bind(qt)), qt = s(qt);
            var Jt = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.transform,
                        r = void 0 === n ? me : n,
                        o = t.symbol,
                        i = void 0 !== o && o,
                        l = t.mask,
                        u = void 0 === l ? null : l,
                        s = t.maskId,
                        c = void 0 === s ? null : s,
                        f = t.title,
                        d = void 0 === f ? null : f,
                        m = t.titleId,
                        p = void 0 === m ? null : m,
                        v = t.classes,
                        g = void 0 === v ? [] : v,
                        b = t.attributes,
                        h = void 0 === b ? {} : b,
                        y = t.styles,
                        w = void 0 === y ? {} : y;
                    if (e) {
                        var x = e.prefix,
                            k = e.iconName,
                            E = e.icon;
                        return yt(a({
                            type: "icon"
                        }, e), (function () {
                            return dt("beforeDOMElementCreation", {
                                iconDefinition: e,
                                params: t
                            }), ce.autoA11y && (d ? h["aria-labelledby"] = "".concat(ce.replacementClass, "-title-").concat(p || ve()) : (h["aria-hidden"] = "true", h.focusable = "false")), wt({
                                icons: {
                                    main: Et(E),
                                    mask: u ? Et(u.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: x,
                                iconName: k,
                                transform: a(a({}, me), r),
                                symbol: i,
                                title: d,
                                maskId: c,
                                titleId: p,
                                extra: {
                                    attributes: h,
                                    styles: w,
                                    classes: g
                                }
                            })
                        }))
                    }
                },
                Xt = {
                    mixout: function () {
                        return {
                            icon: (e = Jt, function (t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = (t || {}).icon ? t : pt(t || {}),
                                    o = n.mask;
                                return o && (o = (o || {}).icon ? o : pt(o || {})), e(r, a(a({}, n), {}, {
                                    mask: o
                                }))
                            })
                        };
                        var e
                    },
                    hooks: function () {
                        return {
                            mutationObserverCallbacks: function (e) {
                                return e.treeCallback = Zt, e.nodeCallback = Kt, e
                            }
                        }
                    },
                    provides: function (e) {
                        e.i2svg = function (e) {
                            var t = e.node,
                                n = void 0 === t ? O : t,
                                r = e.callback;
                            return Zt(n, void 0 === r ? function () {} : r)
                        }, e.generateSvgReplacementMutation = function (e, t) {
                            var n = t.iconName,
                                r = t.title,
                                a = t.titleId,
                                o = t.prefix,
                                i = t.transform,
                                l = t.symbol,
                                s = t.mask,
                                c = t.maskId,
                                f = t.extra;
                            return new Promise((function (t, d) {
                                Promise.all([Ot(n, o), s.iconName ? Ot(s.iconName, s.prefix) : Promise.resolve({
                                    found: !1,
                                    width: 512,
                                    height: 512,
                                    icon: {}
                                })]).then((function (s) {
                                    var d = u(s, 2),
                                        m = d[0],
                                        p = d[1];
                                    t([e, wt({
                                        icons: {
                                            main: m,
                                            mask: p
                                        },
                                        prefix: o,
                                        iconName: n,
                                        transform: i,
                                        symbol: l,
                                        maskId: c,
                                        title: r,
                                        titleId: a,
                                        extra: f,
                                        watchable: !0
                                    })])
                                })).catch(d)
                            }))
                        }, e.generateAbstractIcon = function (e) {
                            var t, n = e.children,
                                r = e.attributes,
                                a = e.main,
                                o = e.transform,
                                i = ye(e.styles);
                            return i.length > 0 && (r.style = i), we(o) && (t = mt("generateAbstractTransformGrouping", {
                                main: a,
                                transform: o,
                                containerWidth: a.width,
                                iconWidth: a.width
                            })), n.push(t || a.icon), {
                                children: n,
                                attributes: r
                            }
                        }
                    }
                },
                Qt = {
                    mixout: function () {
                        return {
                            layer: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.classes,
                                    r = void 0 === n ? [] : n;
                                return yt({
                                    type: "layer"
                                }, (function () {
                                    dt("beforeDOMElementCreation", {
                                        assembler: e,
                                        params: t
                                    });
                                    var n = [];
                                    return e((function (e) {
                                        Array.isArray(e) ? e.map((function (e) {
                                            n = n.concat(e.abstract)
                                        })) : n = n.concat(e.abstract)
                                    })), [{
                                        tag: "span",
                                        attributes: {
                                            class: ["".concat(ce.cssPrefix, "-layers")].concat(s(r)).join(" ")
                                        },
                                        children: n
                                    }]
                                }))
                            }
                        }
                    }
                },
                en = {
                    mixout: function () {
                        return {
                            counter: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.title,
                                    r = void 0 === n ? null : n,
                                    o = t.classes,
                                    i = void 0 === o ? [] : o,
                                    l = t.attributes,
                                    u = void 0 === l ? {} : l,
                                    c = t.styles,
                                    f = void 0 === c ? {} : c;
                                return yt({
                                    type: "counter",
                                    content: e
                                }, (function () {
                                    return dt("beforeDOMElementCreation", {
                                            content: e,
                                            params: t
                                        }),
                                        function (e) {
                                            var t = e.content,
                                                n = e.title,
                                                r = e.extra,
                                                o = a(a(a({}, r.attributes), n ? {
                                                    title: n
                                                } : {}), {}, {
                                                    class: r.classes.join(" ")
                                                }),
                                                i = ye(r.styles);
                                            i.length > 0 && (o.style = i);
                                            var l = [];
                                            return l.push({
                                                tag: "span",
                                                attributes: o,
                                                children: [t]
                                            }), n && l.push({
                                                tag: "span",
                                                attributes: {
                                                    class: "sr-only"
                                                },
                                                children: [n]
                                            }), l
                                        }({
                                            content: e.toString(),
                                            title: r,
                                            extra: {
                                                attributes: u,
                                                styles: f,
                                                classes: ["".concat(ce.cssPrefix, "-layers-counter")].concat(s(i))
                                            }
                                        })
                                }))
                            }
                        }
                    }
                },
                tn = {
                    mixout: function () {
                        return {
                            text: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.transform,
                                    r = void 0 === n ? me : n,
                                    o = t.title,
                                    i = void 0 === o ? null : o,
                                    l = t.classes,
                                    u = void 0 === l ? [] : l,
                                    c = t.attributes,
                                    f = void 0 === c ? {} : c,
                                    d = t.styles,
                                    m = void 0 === d ? {} : d;
                                return yt({
                                    type: "text",
                                    content: e
                                }, (function () {
                                    return dt("beforeDOMElementCreation", {
                                        content: e,
                                        params: t
                                    }), xt({
                                        content: e,
                                        transform: a(a({}, me), r),
                                        title: i,
                                        extra: {
                                            attributes: f,
                                            styles: m,
                                            classes: ["".concat(ce.cssPrefix, "-layers-text")].concat(s(u))
                                        }
                                    })
                                }))
                            }
                        }
                    },
                    provides: function (e) {
                        e.generateLayersText = function (e, t) {
                            var n = t.title,
                                r = t.transform,
                                a = t.extra,
                                o = null,
                                i = null;
                            if (C) {
                                var l = parseInt(getComputedStyle(e).fontSize, 10),
                                    u = e.getBoundingClientRect();
                                o = u.width / l, i = u.height / l
                            }
                            return ce.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([e, xt({
                                content: e.innerHTML,
                                width: o,
                                height: i,
                                transform: r,
                                title: n,
                                extra: a,
                                watchable: !0
                            })])
                        }
                    }
                },
                nn = new RegExp('"', "ug"),
                rn = [1105920, 1112319];

            function an(e, t) {
                var n = "".concat(D).concat(t.replace(":", "-"));
                return new Promise((function (r, o) {
                    if (null !== e.getAttribute(n)) return r();
                    var i, l, u, s = ge(e.children).filter((function (e) {
                            return e.getAttribute(L) === t
                        }))[0],
                        c = P.getComputedStyle(e, t),
                        f = c.getPropertyValue("font-family").match(Q),
                        d = c.getPropertyValue("font-weight"),
                        m = c.getPropertyValue("content");
                    if (s && !f) return e.removeChild(s), r();
                    if (f && "none" !== m && "" !== m) {
                        var p = c.getPropertyValue("content"),
                            v = ~["Sharp"].indexOf(f[2]) ? W : V,
                            g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? q[v][f[2].toLowerCase()] : ee[v][d],
                            b = function (e) {
                                var t, n, r, a, o, i = e.replace(nn, ""),
                                    l = (n = 0, a = (t = i).length, (o = t.charCodeAt(n)) >= 55296 && o <= 56319 && a > n + 1 && (r = t.charCodeAt(n + 1)) >= 56320 && r <= 57343 ? 1024 * (o - 55296) + r - 56320 + 65536 : o),
                                    u = l >= rn[0] && l <= rn[1],
                                    s = 2 === i.length && i[0] === i[1];
                                return {
                                    value: Ie(s ? i[0] : i),
                                    isSecondary: u || s
                                }
                            }(p),
                            h = b.value,
                            y = b.isSecondary,
                            w = f[0].startsWith("FontAwesome"),
                            x = Xe(g, h),
                            k = x;
                        if (w) {
                            var E = (l = $e[i = h], u = Xe("fas", i), l || (u ? {
                                prefix: "fas",
                                iconName: u
                            } : null) || {
                                prefix: null,
                                iconName: null
                            });
                            E.iconName && E.prefix && (x = E.iconName, g = E.prefix)
                        }
                        if (!x || y || s && s.getAttribute(j) === g && s.getAttribute(z) === k) r();
                        else {
                            e.setAttribute(n, k), s && e.removeChild(s);
                            var S = {
                                    iconName: null,
                                    title: null,
                                    titleId: null,
                                    prefix: null,
                                    transform: me,
                                    symbol: !1,
                                    mask: {
                                        iconName: null,
                                        prefix: null,
                                        rest: []
                                    },
                                    maskId: null,
                                    extra: {
                                        classes: [],
                                        styles: {},
                                        attributes: {}
                                    }
                                },
                                T = S.extra;
                            T.attributes[L] = t, Ot(x, g).then((function (o) {
                                var i = wt(a(a({}, S), {}, {
                                        icons: {
                                            main: o,
                                            mask: nt()
                                        },
                                        prefix: g,
                                        iconName: k,
                                        extra: T,
                                        watchable: !0
                                    })),
                                    l = O.createElementNS("http://www.w3.org/2000/svg", "svg");
                                "::before" === t ? e.insertBefore(l, e.firstChild) : e.appendChild(l), l.outerHTML = i.map((function (e) {
                                    return Re(e)
                                })).join("\n"), e.removeAttribute(n), r()
                            })).catch(o)
                        }
                    } else r()
                }))
            }

            function on(e) {
                return Promise.all([an(e, "::before"), an(e, "::after")])
            }

            function ln(e) {
                return !(e.parentNode === document.head || ~B.indexOf(e.tagName.toUpperCase()) || e.getAttribute(L) || e.parentNode && "svg" === e.parentNode.tagName)
            }

            function un(e) {
                if (A) return new Promise((function (t, n) {
                    var r = ge(e.querySelectorAll("*")).filter(ln).map(on),
                        a = Rt.begin("searchPseudoElements");
                    Ht(), Promise.all(r).then((function () {
                        a(), Bt(), t()
                    })).catch((function () {
                        a(), Bt(), n()
                    }))
                }))
            }
            var sn = !1,
                cn = function (e) {
                    return e.toLowerCase().split(" ").reduce((function (e, t) {
                        var n = t.toLowerCase().split("-"),
                            r = n[0],
                            a = n.slice(1).join("-");
                        if (r && "h" === a) return e.flipX = !0, e;
                        if (r && "v" === a) return e.flipY = !0, e;
                        if (a = parseFloat(a), isNaN(a)) return e;
                        switch (r) {
                            case "grow":
                                e.size = e.size + a;
                                break;
                            case "shrink":
                                e.size = e.size - a;
                                break;
                            case "left":
                                e.x = e.x - a;
                                break;
                            case "right":
                                e.x = e.x + a;
                                break;
                            case "up":
                                e.y = e.y - a;
                                break;
                            case "down":
                                e.y = e.y + a;
                                break;
                            case "rotate":
                                e.rotate = e.rotate + a
                        }
                        return e
                    }), {
                        size: 16,
                        x: 0,
                        y: 0,
                        flipX: !1,
                        flipY: !1,
                        rotate: 0
                    })
                },
                fn = {
                    mixout: function () {
                        return {
                            parse: {
                                transform: function (e) {
                                    return cn(e)
                                }
                            }
                        }
                    },
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (e, t) {
                                var n = t.getAttribute("data-fa-transform");
                                return n && (e.transform = cn(n)), e
                            }
                        }
                    },
                    provides: function (e) {
                        e.generateAbstractTransformGrouping = function (e) {
                            var t = e.main,
                                n = e.transform,
                                r = e.containerWidth,
                                o = e.iconWidth,
                                i = {
                                    transform: "translate(".concat(r / 2, " 256)")
                                },
                                l = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                                u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "),
                                s = "rotate(".concat(n.rotate, " 0 0)"),
                                c = {
                                    outer: i,
                                    inner: {
                                        transform: "".concat(l, " ").concat(u, " ").concat(s)
                                    },
                                    path: {
                                        transform: "translate(".concat(o / 2 * -1, " -256)")
                                    }
                                };
                            return {
                                tag: "g",
                                attributes: a({}, c.outer),
                                children: [{
                                    tag: "g",
                                    attributes: a({}, c.inner),
                                    children: [{
                                        tag: t.icon.tag,
                                        children: t.icon.children,
                                        attributes: a(a({}, t.icon.attributes), c.path)
                                    }]
                                }]
                            }
                        }
                    }
                },
                dn = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

            function mn(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
            }
            var pn = {
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (e, t) {
                                var n = t.getAttribute("data-fa-mask"),
                                    r = n ? ot(n.split(" ").map((function (e) {
                                        return e.trim()
                                    }))) : nt();
                                return r.prefix || (r.prefix = tt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e
                            }
                        }
                    },
                    provides: function (e) {
                        e.generateAbstractMask = function (e) {
                            var t, n = e.children,
                                r = e.attributes,
                                o = e.main,
                                i = e.mask,
                                l = e.maskId,
                                u = e.transform,
                                s = o.width,
                                c = o.icon,
                                f = i.width,
                                d = i.icon,
                                m = function (e) {
                                    var t = e.transform,
                                        n = e.containerWidth,
                                        r = e.iconWidth,
                                        a = {
                                            transform: "translate(".concat(n / 2, " 256)")
                                        },
                                        o = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
                                        i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
                                        l = "rotate(".concat(t.rotate, " 0 0)");
                                    return {
                                        outer: a,
                                        inner: {
                                            transform: "".concat(o, " ").concat(i, " ").concat(l)
                                        },
                                        path: {
                                            transform: "translate(".concat(r / 2 * -1, " -256)")
                                        }
                                    }
                                }({
                                    transform: u,
                                    containerWidth: f,
                                    iconWidth: s
                                }),
                                p = {
                                    tag: "rect",
                                    attributes: a(a({}, dn), {}, {
                                        fill: "white"
                                    })
                                },
                                v = c.children ? {
                                    children: c.children.map(mn)
                                } : {},
                                g = {
                                    tag: "g",
                                    attributes: a({}, m.inner),
                                    children: [mn(a({
                                        tag: c.tag,
                                        attributes: a(a({}, c.attributes), m.path)
                                    }, v))]
                                },
                                b = {
                                    tag: "g",
                                    attributes: a({}, m.outer),
                                    children: [g]
                                },
                                h = "mask-".concat(l || ve()),
                                y = "clip-".concat(l || ve()),
                                w = {
                                    tag: "mask",
                                    attributes: a(a({}, dn), {}, {
                                        id: h,
                                        maskUnits: "userSpaceOnUse",
                                        maskContentUnits: "userSpaceOnUse"
                                    }),
                                    children: [p, b]
                                },
                                x = {
                                    tag: "defs",
                                    children: [{
                                        tag: "clipPath",
                                        attributes: {
                                            id: y
                                        },
                                        children: (t = d, "g" === t.tag ? t.children : [t])
                                    }, w]
                                };
                            return n.push(x, {
                                tag: "rect",
                                attributes: a({
                                    fill: "currentColor",
                                    "clip-path": "url(#".concat(y, ")"),
                                    mask: "url(#".concat(h, ")")
                                }, dn)
                            }), {
                                children: n,
                                attributes: r
                            }
                        }
                    }
                },
                vn = {
                    provides: function (e) {
                        var t = !1;
                        P.matchMedia && (t = P.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function () {
                            var e = [],
                                n = {
                                    fill: "currentColor"
                                },
                                r = {
                                    attributeType: "XML",
                                    repeatCount: "indefinite",
                                    dur: "2s"
                                };
                            e.push({
                                tag: "path",
                                attributes: a(a({}, n), {}, {
                                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                                })
                            });
                            var o = a(a({}, r), {}, {
                                    attributeName: "opacity"
                                }),
                                i = {
                                    tag: "circle",
                                    attributes: a(a({}, n), {}, {
                                        cx: "256",
                                        cy: "364",
                                        r: "28"
                                    }),
                                    children: []
                                };
                            return t || i.children.push({
                                tag: "animate",
                                attributes: a(a({}, r), {}, {
                                    attributeName: "r",
                                    values: "28;14;28;28;14;28;"
                                })
                            }, {
                                tag: "animate",
                                attributes: a(a({}, o), {}, {
                                    values: "1;0;1;1;0;1;"
                                })
                            }), e.push(i), e.push({
                                tag: "path",
                                attributes: a(a({}, n), {}, {
                                    opacity: "1",
                                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                                }),
                                children: t ? [] : [{
                                    tag: "animate",
                                    attributes: a(a({}, o), {}, {
                                        values: "1;0;0;0;0;1;"
                                    })
                                }]
                            }), t || e.push({
                                tag: "path",
                                attributes: a(a({}, n), {}, {
                                    opacity: "0",
                                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                                }),
                                children: [{
                                    tag: "animate",
                                    attributes: a(a({}, o), {}, {
                                        values: "0;0;1;1;0;0;"
                                    })
                                }]
                            }), {
                                tag: "g",
                                attributes: {
                                    class: "missing"
                                },
                                children: e
                            }
                        }
                    }
                };
            ! function (e, t) {
                var n = t.mixoutsTo;
                lt = e, ut = {}, Object.keys(st).forEach((function (e) {
                    -1 === ct.indexOf(e) && delete st[e]
                })), lt.forEach((function (e) {
                    var t = e.mixout ? e.mixout() : {};
                    if (Object.keys(t).forEach((function (e) {
                            "function" == typeof t[e] && (n[e] = t[e]), "object" === o(t[e]) && Object.keys(t[e]).forEach((function (r) {
                                n[e] || (n[e] = {}), n[e][r] = t[e][r]
                            }))
                        })), e.hooks) {
                        var r = e.hooks();
                        Object.keys(r).forEach((function (e) {
                            ut[e] || (ut[e] = []), ut[e].push(r[e])
                        }))
                    }
                    e.provides && e.provides(st)
                }))
            }([Oe, Xt, Qt, en, tn, {
                hooks: function () {
                    return {
                        mutationObserverCallbacks: function (e) {
                            return e.pseudoElementsCallback = un, e
                        }
                    }
                },
                provides: function (e) {
                    e.pseudoElements2svg = function (e) {
                        var t = e.node,
                            n = void 0 === t ? O : t;
                        ce.searchPseudoElements && un(n)
                    }
                }
            }, {
                mixout: function () {
                    return {
                        dom: {
                            unwatch: function () {
                                Ht(), sn = !0
                            }
                        }
                    }
                },
                hooks: function () {
                    return {
                        bootstrap: function () {
                            Vt(ft("mutationObserverCallbacks", {}))
                        },
                        noAuto: function () {
                            _t && _t.disconnect()
                        },
                        watch: function (e) {
                            var t = e.observeMutationsRoot;
                            sn ? Bt() : Vt(ft("mutationObserverCallbacks", {
                                observeMutationsRoot: t
                            }))
                        }
                    }
                }
            }, fn, pn, vn, {
                hooks: function () {
                    return {
                        parseNodeAttributes: function (e, t) {
                            var n = t.getAttribute("data-fa-symbol"),
                                r = null !== n && ("" === n || n);
                            return e.symbol = r, e
                        }
                    }
                }
            }], {
                mixoutsTo: bt
            });
            var gn = bt.library,
                bn = bt.parse,
                hn = bt.icon
        },
        39516: function (e, t, n) {
            n.d(t, {
                d: function () {
                    return m
                },
                f: function () {
                    return f
                }
            });
            var r = n(67294),
                a = n(19946),
                o = n(12351),
                i = n(16723),
                l = n(23784),
                u = n(73781);
            let s = (0, r.createContext)(null);

            function c() {
                let e = (0, r.useContext)(s);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, c), e
                }
                return e
            }

            function f() {
                let [e, t] = (0, r.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)((() => function (e) {
                    let n = (0, u.z)((e => (t((t => [...t, e])), () => t((t => {
                            let n = t.slice(),
                                r = n.indexOf(e);
                            return -1 !== r && n.splice(r, 1), n
                        }))))),
                        a = (0, r.useMemo)((() => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [n, e.slot, e.name, e.props]);
                    return r.createElement(s.Provider, {
                        value: a
                    }, e.children)
                }), [t])]
            }
            let d = (0, o.yV)((function (e, t) {
                    let n = (0, a.M)(),
                        {
                            id: r = `headlessui-description-${n}`,
                            ...u
                        } = e,
                        s = c(),
                        f = (0, l.T)(t);
                    (0, i.e)((() => s.register(r)), [r, s.register]);
                    let d = {
                        ref: f,
                        ...s.props,
                        id: r
                    };
                    return (0, o.sY)({
                        ourProps: d,
                        theirProps: u,
                        slot: s.slot || {},
                        defaultTag: "p",
                        name: s.name || "Description"
                    })
                })),
                m = Object.assign(d, {})
        },
        67748: function (e, t, n) {
            n.d(t, {
                V: function () {
                    return be
                }
            });
            var r = n(67294),
                a = n.t(r, 2),
                o = n(32984),
                i = n(12351),
                l = n(23784),
                u = n(61363),
                s = n(64103),
                c = n(19946),
                f = n(82180),
                d = n(46045),
                m = n(84575),
                p = n(73781),
                v = n(45662),
                g = n(14879),
                b = n(51074),
                h = n(14007),
                y = n(81021),
                w = n(96599),
                x = n(94192);
            var k = n(61595);

            function E(e) {
                if (!e) return new Set;
                if ("function" == typeof e) return new Set(e());
                let t = new Set;
                for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
                return t
            }
            var P, O = ((P = O || {})[P.None = 1] = "None", P[P.InitialFocus = 2] = "InitialFocus", P[P.TabLock = 4] = "TabLock", P[P.FocusLock = 8] = "FocusLock", P[P.RestoreFocus = 16] = "RestoreFocus", P[P.All = 30] = "All", P);
            let S = (0, i.yV)((function (e, t) {
                    let n = (0, r.useRef)(null),
                        a = (0, l.T)(n, t),
                        {
                            initialFocus: u,
                            containers: s,
                            features: c = 30,
                            ...P
                        } = e;
                    (0, f.H)() || (c = 1);
                    let O = (0, b.i)(n);
                    ! function ({
                        ownerDocument: e
                    }, t) {
                        let n = function (e = !0) {
                            let t = (0, r.useRef)(A.slice());
                            return (0, w.q)((([e], [n]) => {
                                !0 === n && !1 === e && (0, y.Y)((() => {
                                    t.current.splice(0)
                                })), !1 === n && !0 === e && (t.current = A.slice())
                            }), [e, A, t]), (0, p.z)((() => {
                                var e;
                                return null != (e = t.current.find((e => null != e && e.isConnected))) ? e : null
                            }))
                        }(t);
                        (0, w.q)((() => {
                            t || (null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, m.C5)(n())
                        }), [t]), (0, k.L)((() => {
                            t && (0, m.C5)(n())
                        }))
                    }({
                        ownerDocument: O
                    }, Boolean(16 & c));
                    let S = function ({
                        ownerDocument: e,
                        container: t,
                        initialFocus: n
                    }, a) {
                        let o = (0, r.useRef)(null),
                            i = (0, g.t)();
                        return (0, w.q)((() => {
                            if (!a) return;
                            let r = t.current;
                            r && (0, y.Y)((() => {
                                if (!i.current) return;
                                let t = null == e ? void 0 : e.activeElement;
                                if (null != n && n.current) {
                                    if ((null == n ? void 0 : n.current) === t) return void(o.current = t)
                                } else if (r.contains(t)) return void(o.current = t);
                                null != n && n.current ? (0, m.C5)(n.current) : (0, m.jA)(r, m.TO.First) === m.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.current = null == e ? void 0 : e.activeElement
                            }))
                        }), [a]), o
                    }({
                        ownerDocument: O,
                        container: n,
                        initialFocus: u
                    }, Boolean(2 & c));
                    ! function ({
                        ownerDocument: e,
                        container: t,
                        containers: n,
                        previousActiveElement: r
                    }, a) {
                        let o = (0, g.t)();
                        (0, h.O)(null == e ? void 0 : e.defaultView, "focus", (e => {
                            if (!a || !o.current) return;
                            let i = E(n);
                            t.current instanceof HTMLElement && i.add(t.current);
                            let l = r.current;
                            if (!l) return;
                            let u = e.target;
                            u && u instanceof HTMLElement ? C(i, u) ? (r.current = u, (0, m.C5)(u)) : (e.preventDefault(), e.stopPropagation(), (0, m.C5)(l)) : (0, m.C5)(r.current)
                        }), !0)
                    }({
                        ownerDocument: O,
                        container: n,
                        containers: s,
                        previousActiveElement: S
                    }, Boolean(8 & c));
                    let T = (0, v.l)(),
                        R = (0, p.z)((e => {
                            let t = n.current;
                            t && (0, o.E)(T.current, {
                                [v.N.Forwards]: () => {
                                    (0, m.jA)(t, m.TO.First, {
                                        skipElements: [e.relatedTarget]
                                    })
                                },
                                [v.N.Backwards]: () => {
                                    (0, m.jA)(t, m.TO.Last, {
                                        skipElements: [e.relatedTarget]
                                    })
                                }
                            })
                        })),
                        N = (0, x.G)(),
                        M = (0, r.useRef)(!1),
                        I = {
                            ref: a,
                            onKeyDown(e) {
                                "Tab" == e.key && (M.current = !0, N.requestAnimationFrame((() => {
                                    M.current = !1
                                })))
                            },
                            onBlur(e) {
                                let t = E(s);
                                n.current instanceof HTMLElement && t.add(n.current);
                                let r = e.relatedTarget;
                                r instanceof HTMLElement && "true" !== r.dataset.headlessuiFocusGuard && (C(t, r) || (M.current ? (0, m.jA)(n.current, (0, o.E)(T.current, {
                                    [v.N.Forwards]: () => m.TO.Next,
                                    [v.N.Backwards]: () => m.TO.Previous
                                }) | m.TO.WrapAround, {
                                    relativeTo: e.target
                                }) : e.target instanceof HTMLElement && (0, m.C5)(e.target)))
                            }
                        };
                    return r.createElement(r.Fragment, null, Boolean(4 & c) && r.createElement(d._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: R,
                        features: d.A.Focusable
                    }), (0, i.sY)({
                        ourProps: I,
                        theirProps: P,
                        defaultTag: "div",
                        name: "FocusTrap"
                    }), Boolean(4 & c) && r.createElement(d._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: R,
                        features: d.A.Focusable
                    }))
                })),
                T = Object.assign(S, {
                    features: O
                }),
                A = [];

            function C(e, t) {
                for (let n of e)
                    if (n.contains(t)) return !0;
                return !1
            }! function (e) {
                function t() {
                    "loading" !== document.readyState && (e(), document.removeEventListener("DOMContentLoaded", t))
                }
                "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", t), t())
            }((() => {
                function e(e) {
                    e.target instanceof HTMLElement && e.target !== document.body && A[0] !== e.target && (A.unshift(e.target), A = A.filter((e => null != e && e.isConnected)), A.splice(10))
                }
                window.addEventListener("click", e, {
                    capture: !0
                }), window.addEventListener("mousedown", e, {
                    capture: !0
                }), window.addEventListener("focus", e, {
                    capture: !0
                }), document.body.addEventListener("click", e, {
                    capture: !0
                }), document.body.addEventListener("mousedown", e, {
                    capture: !0
                }), document.body.addEventListener("focus", e, {
                    capture: !0
                })
            }));
            var R = n(2740),
                N = n(31438),
                M = n(39516),
                I = n(16567),
                F = n(16723);
            let L = (0, r.createContext)((() => {}));
            L.displayName = "StackContext";
            var D, j = ((D = j || {})[D.Add = 0] = "Add", D[D.Remove = 1] = "Remove", D);

            function z({
                children: e,
                onUpdate: t,
                type: n,
                element: a,
                enabled: o
            }) {
                let i = (0, r.useContext)(L),
                    l = (0, p.z)(((...e) => {
                        null == t || t(...e), i(...e)
                    }));
                return (0, F.e)((() => {
                    let e = void 0 === o || !0 === o;
                    return e && l(0, n, a), () => {
                        e && l(1, n, a)
                    }
                }), [l, n, a, o]), r.createElement(L.Provider, {
                    value: l
                }, e)
            }
            var Y = n(43986);
            const H = "function" == typeof Object.is ? Object.is : function (e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                {
                    useState: B,
                    useEffect: _,
                    useLayoutEffect: V,
                    useDebugValue: W
                } = a;

            function U(e) {
                const t = e.getSnapshot,
                    n = e.value;
                try {
                    const e = t();
                    return !H(n, e)
                } catch {
                    return !0
                }
            }
            "undefined" != typeof window && void 0 !== window.document && window.document.createElement;
            const $ = (e => e.useSyncExternalStore)(a);
            var G = n(9362);

            function q() {
                let e;
                return {
                    before({
                        doc: t
                    }) {
                        var n;
                        let r = t.documentElement;
                        e = (null != (n = t.defaultView) ? n : window).innerWidth - r.clientWidth
                    },
                    after({
                        doc: t,
                        d: n
                    }) {
                        let r = t.documentElement,
                            a = r.clientWidth - r.offsetWidth,
                            o = e - a;
                        n.style(r, "paddingRight", `${o}px`)
                    }
                }
            }
            var Z = n(78657);

            function K() {
                if (!(0, Z.gn)()) return {};
                let e;
                return {
                    before() {
                        e = window.pageYOffset
                    },
                    after({
                        doc: t,
                        d: n,
                        meta: r
                    }) {
                        function a(e) {
                            return r.containers.flatMap((e => e())).some((t => t.contains(e)))
                        }
                        n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
                        let o = null;
                        n.addEventListener(t, "click", (e => {
                            if (e.target instanceof HTMLElement) try {
                                let n = e.target.closest("a");
                                if (!n) return;
                                let {
                                    hash: r
                                } = new URL(n.href), i = t.querySelector(r);
                                i && !a(i) && (o = i)
                            } catch {}
                        }), !0), n.addEventListener(t, "touchmove", (e => {
                            e.target instanceof HTMLElement && !a(e.target) && e.preventDefault()
                        }), {
                            passive: !1
                        }), n.add((() => {
                            window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({
                                block: "nearest"
                            }), o = null)
                        }))
                    }
                }
            }

            function J(e) {
                let t = {};
                for (let n of e) Object.assign(t, n(t));
                return t
            }
            let X = function (e, t) {
                let n = e(),
                    r = new Set;
                return {
                    getSnapshot() {
                        return n
                    },
                    subscribe(e) {
                        return r.add(e), () => r.delete(e)
                    },
                    dispatch(e, ...a) {
                        let o = t[e].call(n, ...a);
                        o && (n = o, r.forEach((e => e())))
                    }
                }
            }((() => new Map), {
                PUSH(e, t) {
                    var n;
                    let r = null != (n = this.get(e)) ? n : {
                        doc: e,
                        count: 0,
                        d: (0, G.k)(),
                        meta: new Set
                    };
                    return r.count++, r.meta.add(t), this.set(e, r), this
                },
                POP(e, t) {
                    let n = this.get(e);
                    return n && (n.count--, n.meta.delete(t)), this
                },
                SCROLL_PREVENT({
                    doc: e,
                    d: t,
                    meta: n
                }) {
                    let r = {
                            doc: e,
                            d: t,
                            meta: J(n)
                        },
                        a = [K(), q(), {
                            before({
                                doc: e,
                                d: t
                            }) {
                                t.style(e.documentElement, "overflow", "hidden")
                            }
                        }];
                    a.forEach((({
                        before: e
                    }) => null == e ? void 0 : e(r))), a.forEach((({
                        after: e
                    }) => null == e ? void 0 : e(r)))
                },
                SCROLL_ALLOW({
                    d: e
                }) {
                    e.dispose()
                },
                TEARDOWN({
                    doc: e
                }) {
                    this.delete(e)
                }
            });

            function Q(e, t, n) {
                let r = function (e) {
                        return $(e.subscribe, e.getSnapshot, e.getSnapshot)
                    }(X),
                    a = e ? r.get(e) : void 0,
                    o = !!a && a.count > 0;
                return (0, F.e)((() => {
                    if (e && t) return X.dispatch("PUSH", e, n), () => X.dispatch("POP", e, n)
                }), [t, e]), o
            }
            X.subscribe((() => {
                let e = X.getSnapshot(),
                    t = new Map;
                for (let [n] of e) t.set(n, n.documentElement.style.overflow);
                for (let n of e.values()) {
                    let e = "hidden" === t.get(n.doc),
                        r = 0 !== n.count;
                    (r && !e || !r && e) && X.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && X.dispatch("TEARDOWN", n)
                }
            }));
            let ee = new Map,
                te = new Map;

            function ne(e, t = !0) {
                (0, F.e)((() => {
                    var n;
                    if (!t) return;
                    let r = "function" == typeof e ? e() : e.current;
                    if (!r) return;
                    let a = null != (n = te.get(r)) ? n : 0;
                    return te.set(r, a + 1), 0 !== a || (ee.set(r, {
                            "aria-hidden": r.getAttribute("aria-hidden"),
                            inert: r.inert
                        }), r.setAttribute("aria-hidden", "true"), r.inert = !0),
                        function () {
                            var e;
                            if (!r) return;
                            let t = null != (e = te.get(r)) ? e : 1;
                            if (1 === t ? te.delete(r) : te.set(r, t - 1), 1 !== t) return;
                            let n = ee.get(r);
                            n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]), r.inert = n.inert, ee.delete(r))
                        }
                }), [e, t])
            }
            var re, ae = n(65958),
                oe = ((re = oe || {})[re.Open = 0] = "Open", re[re.Closed = 1] = "Closed", re),
                ie = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(ie || {});
            let le = {
                    0(e, t) {
                        return e.titleId === t.id ? e : {
                            ...e,
                            titleId: t.id
                        }
                    }
                },
                ue = (0, r.createContext)(null);

            function se(e) {
                let t = (0, r.useContext)(ue);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, se), t
                }
                return t
            }

            function ce(e, t) {
                return (0, o.E)(t.type, le, e, t)
            }
            ue.displayName = "DialogContext";
            let fe = i.AN.RenderStrategy | i.AN.Static;
            let de = (0, i.yV)((function (e, t) {
                    var n;
                    let a = (0, c.M)(),
                        {
                            id: s = `headlessui-dialog-${a}`,
                            open: d,
                            onClose: m,
                            initialFocus: v,
                            __demoMode: g = !1,
                            ...y
                        } = e,
                        [w, x] = (0, r.useState)(0),
                        k = (0, I.oJ)();
                    void 0 === d && null !== k && (d = (k & I.ZM.Open) === I.ZM.Open);
                    let E = (0, r.useRef)(null),
                        P = (0, l.T)(E, t),
                        O = (0, b.i)(E),
                        S = e.hasOwnProperty("open") || null !== k,
                        A = e.hasOwnProperty("onClose");
                    if (!S && !A) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!S) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!A) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof d) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d}`);
                    if ("function" != typeof m) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${m}`);
                    let C = d ? 0 : 1,
                        [F, L] = (0, r.useReducer)(ce, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, r.createRef)()
                        }),
                        D = (0, p.z)((() => m(!1))),
                        H = (0, p.z)((e => L({
                            type: 0,
                            id: e
                        }))),
                        B = !!(0, f.H)() && (!g && 0 === C),
                        _ = w > 1,
                        V = null !== (0, r.useContext)(ue),
                        [W, U] = (0, R.k)(),
                        {
                            resolveContainers: $,
                            mainTreeNodeRef: G,
                            MainTreeNode: q
                        } = (0, ae.v)({
                            portals: W,
                            defaultContainers: [null != (n = F.panelRef.current) ? n : E.current]
                        }),
                        Z = _ ? "parent" : "leaf",
                        K = null !== k && (k & I.ZM.Closing) === I.ZM.Closing,
                        J = !V && !K && B,
                        X = (0, r.useCallback)((() => {
                            var e, t;
                            return null != (t = Array.from(null != (e = null == O ? void 0 : O.querySelectorAll("body > *")) ? e : []).find((e => "headlessui-portal-root" !== e.id && (e.contains(G.current) && e instanceof HTMLElement)))) ? t : null
                        }), [G]);
                    ne(X, J);
                    let ee = !!_ || B,
                        te = (0, r.useCallback)((() => {
                            var e, t;
                            return null != (t = Array.from(null != (e = null == O ? void 0 : O.querySelectorAll("[data-headlessui-portal]")) ? e : []).find((e => e.contains(G.current) && e instanceof HTMLElement))) ? t : null
                        }), [G]);
                    ne(te, ee);
                    let re = !(!B || _);
                    (0, Y.O)($, D, re);
                    let oe = !(_ || 0 !== C);
                    (0, h.O)(null == O ? void 0 : O.defaultView, "keydown", (e => {
                        oe && (e.defaultPrevented || e.key === u.R.Escape && (e.preventDefault(), e.stopPropagation(), D()))
                    })),
                    function (e, t, n = (() => [document.body])) {
                        Q(e, t, (e => {
                            var t;
                            return {
                                containers: [...null != (t = e.containers) ? t : [], n]
                            }
                        }))
                    }(O, !(K || 0 !== C || V), $), (0, r.useEffect)((() => {
                        if (0 !== C || !E.current) return;
                        let e = new ResizeObserver((e => {
                            for (let t of e) {
                                let e = t.target.getBoundingClientRect();
                                0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && D()
                            }
                        }));
                        return e.observe(E.current), () => e.disconnect()
                    }), [C, E, D]);
                    let [ie, le] = (0, M.f)(), se = (0, r.useMemo)((() => [{
                        dialogState: C,
                        close: D,
                        setTitleId: H
                    }, F]), [C, F, D, H]), de = (0, r.useMemo)((() => ({
                        open: 0 === C
                    })), [C]), me = {
                        ref: P,
                        id: s,
                        role: "dialog",
                        "aria-modal": 0 === C || void 0,
                        "aria-labelledby": F.titleId,
                        "aria-describedby": ie
                    };
                    return r.createElement(z, {
                        type: "Dialog",
                        enabled: 0 === C,
                        element: E,
                        onUpdate: (0, p.z)(((e, t) => {
                            "Dialog" === t && (0, o.E)(e, {
                                [j.Add]: () => x((e => e + 1)),
                                [j.Remove]: () => x((e => e - 1))
                            })
                        }))
                    }, r.createElement(N.O, {
                        force: !0
                    }, r.createElement(R.h, null, r.createElement(ue.Provider, {
                        value: se
                    }, r.createElement(R.h.Group, {
                        target: E
                    }, r.createElement(N.O, {
                        force: !1
                    }, r.createElement(le, {
                        slot: de,
                        name: "Dialog.Description"
                    }, r.createElement(T, {
                        initialFocus: v,
                        containers: $,
                        features: B ? (0, o.E)(Z, {
                            parent: T.features.RestoreFocus,
                            leaf: T.features.All & ~T.features.FocusLock
                        }) : T.features.None
                    }, r.createElement(U, null, (0, i.sY)({
                        ourProps: me,
                        theirProps: y,
                        slot: de,
                        defaultTag: "div",
                        features: fe,
                        visible: 0 === C,
                        name: "Dialog"
                    }))))))))), r.createElement(q, null))
                })),
                me = (0, i.yV)((function (e, t) {
                    let n = (0, c.M)(),
                        {
                            id: a = `headlessui-dialog-backdrop-${n}`,
                            ...o
                        } = e,
                        [{
                            dialogState: u
                        }, s] = se("Dialog.Backdrop"),
                        f = (0, l.T)(t);
                    (0, r.useEffect)((() => {
                        if (null === s.panelRef.current) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                    }), [s.panelRef]);
                    let d = (0, r.useMemo)((() => ({
                        open: 0 === u
                    })), [u]);
                    return r.createElement(N.O, {
                        force: !0
                    }, r.createElement(R.h, null, (0, i.sY)({
                        ourProps: {
                            ref: f,
                            id: a,
                            "aria-hidden": !0
                        },
                        theirProps: o,
                        slot: d,
                        defaultTag: "div",
                        name: "Dialog.Backdrop"
                    })))
                })),
                pe = (0, i.yV)((function (e, t) {
                    let n = (0, c.M)(),
                        {
                            id: a = `headlessui-dialog-panel-${n}`,
                            ...o
                        } = e,
                        [{
                            dialogState: u
                        }, s] = se("Dialog.Panel"),
                        f = (0, l.T)(t, s.panelRef),
                        d = (0, r.useMemo)((() => ({
                            open: 0 === u
                        })), [u]),
                        m = (0, p.z)((e => {
                            e.stopPropagation()
                        }));
                    return (0, i.sY)({
                        ourProps: {
                            ref: f,
                            id: a,
                            onClick: m
                        },
                        theirProps: o,
                        slot: d,
                        defaultTag: "div",
                        name: "Dialog.Panel"
                    })
                })),
                ve = (0, i.yV)((function (e, t) {
                    let n = (0, c.M)(),
                        {
                            id: a = `headlessui-dialog-overlay-${n}`,
                            ...o
                        } = e,
                        [{
                            dialogState: u,
                            close: f
                        }] = se("Dialog.Overlay"),
                        d = (0, l.T)(t),
                        m = (0, p.z)((e => {
                            if (e.target === e.currentTarget) {
                                if ((0, s.P)(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), f()
                            }
                        })),
                        v = (0, r.useMemo)((() => ({
                            open: 0 === u
                        })), [u]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: d,
                            id: a,
                            "aria-hidden": !0,
                            onClick: m
                        },
                        theirProps: o,
                        slot: v,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                })),
                ge = (0, i.yV)((function (e, t) {
                    let n = (0, c.M)(),
                        {
                            id: a = `headlessui-dialog-title-${n}`,
                            ...o
                        } = e,
                        [{
                            dialogState: u,
                            setTitleId: s
                        }] = se("Dialog.Title"),
                        f = (0, l.T)(t);
                    (0, r.useEffect)((() => (s(a), () => s(null))), [a, s]);
                    let d = (0, r.useMemo)((() => ({
                        open: 0 === u
                    })), [u]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: f,
                            id: a
                        },
                        theirProps: o,
                        slot: d,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                })),
                be = Object.assign(de, {
                    Backdrop: me,
                    Panel: pe,
                    Overlay: ve,
                    Title: ge,
                    Description: M.d
                })
        },
        61363: function (e, t, n) {
            n.d(t, {
                R: function () {
                    return a
                }
            });
            var r, a = ((r = a || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
        },
        72510: function (e, t, n) {
            n.d(t, {
                v: function () {
                    return H
                }
            });
            var r, a, o = n(67294),
                i = n(32984),
                l = n(12351),
                u = n(9362),
                s = n(94192),
                c = n(16723),
                f = n(23784),
                d = n(19946),
                m = n(61363),
                p = n(11497),
                v = n(64103),
                g = n(84575),
                b = n(43986),
                h = n(31591),
                y = n(16567),
                w = n(14157),
                x = n(51074),
                k = n(73781),
                E = n(40476),
                P = n(15257),
                O = ((a = O || {})[a.Open = 0] = "Open", a[a.Closed = 1] = "Closed", a),
                S = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(S || {}),
                T = ((r = T || {})[r.OpenMenu = 0] = "OpenMenu", r[r.CloseMenu = 1] = "CloseMenu", r[r.GoToItem = 2] = "GoToItem", r[r.Search = 3] = "Search", r[r.ClearSearch = 4] = "ClearSearch", r[r.RegisterItem = 5] = "RegisterItem", r[r.UnregisterItem = 6] = "UnregisterItem", r);

            function A(e, t = (e => e)) {
                let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    r = (0, g.z2)(t(e.items.slice()), (e => e.dataRef.current.domRef.current)),
                    a = n ? r.indexOf(n) : null;
                return -1 === a && (a = null), {
                    items: r,
                    activeItemIndex: a
                }
            }
            let C = {
                    1(e) {
                        return 1 === e.menuState ? e : {
                            ...e,
                            activeItemIndex: null,
                            menuState: 1
                        }
                    },
                    0(e) {
                        return 0 === e.menuState ? e : {
                            ...e,
                            __demoMode: !1,
                            menuState: 0
                        }
                    },
                    2: (e, t) => {
                        var n;
                        let r = A(e),
                            a = (0, p.d)(t, {
                                resolveItems: () => r.items,
                                resolveActiveIndex: () => r.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return {
                            ...e,
                            ...r,
                            searchQuery: "",
                            activeItemIndex: a,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            a = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                            })),
                            o = a ? e.items.indexOf(a) : -1;
                        return -1 === o || o === e.activeItemIndex ? {
                            ...e,
                            searchQuery: r
                        } : {
                            ...e,
                            searchQuery: r,
                            activeItemIndex: o,
                            activationTrigger: 1
                        }
                    },
                    4(e) {
                        return "" === e.searchQuery ? e : {
                            ...e,
                            searchQuery: "",
                            searchActiveItemIndex: null
                        }
                    },
                    5: (e, t) => {
                        let n = A(e, (e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]));
                        return {
                            ...e,
                            ...n
                        }
                    },
                    6: (e, t) => {
                        let n = A(e, (e => {
                            let n = e.findIndex((e => e.id === t.id));
                            return -1 !== n && e.splice(n, 1), e
                        }));
                        return {
                            ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    }
                },
                R = (0, o.createContext)(null);

            function N(e) {
                let t = (0, o.useContext)(R);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, N), t
                }
                return t
            }

            function M(e, t) {
                return (0, i.E)(t.type, C, e, t)
            }
            R.displayName = "MenuContext";
            let I = o.Fragment;
            let F = l.AN.RenderStrategy | l.AN.Static;
            let L = o.Fragment;
            let D = (0, l.yV)((function (e, t) {
                    let {
                        __demoMode: n = !1,
                        ...r
                    } = e, a = (0, o.useReducer)(M, {
                        __demoMode: n,
                        menuState: n ? 0 : 1,
                        buttonRef: (0, o.createRef)(),
                        itemsRef: (0, o.createRef)(),
                        items: [],
                        searchQuery: "",
                        activeItemIndex: null,
                        activationTrigger: 1
                    }), [{
                        menuState: u,
                        itemsRef: s,
                        buttonRef: c
                    }, d] = a, m = (0, f.T)(t);
                    (0, b.O)([c, s], ((e, t) => {
                        var n;
                        d({
                            type: 1
                        }), (0, g.sP)(t, g.tJ.Loose) || (e.preventDefault(), null == (n = c.current) || n.focus())
                    }), 0 === u);
                    let p = (0, k.z)((() => {
                            d({
                                type: 1
                            })
                        })),
                        v = (0, o.useMemo)((() => ({
                            open: 0 === u,
                            close: p
                        })), [u, p]),
                        h = {
                            ref: m
                        };
                    return o.createElement(R.Provider, {
                        value: a
                    }, o.createElement(y.up, {
                        value: (0, i.E)(u, {
                            0: y.ZM.Open,
                            1: y.ZM.Closed
                        })
                    }, (0, l.sY)({
                        ourProps: h,
                        theirProps: r,
                        slot: v,
                        defaultTag: I,
                        name: "Menu"
                    })))
                })),
                j = (0, l.yV)((function (e, t) {
                    var n;
                    let r = (0, d.M)(),
                        {
                            id: a = `headlessui-menu-button-${r}`,
                            ...i
                        } = e,
                        [u, c] = N("Menu.Button"),
                        g = (0, f.T)(u.buttonRef, t),
                        b = (0, s.G)(),
                        h = (0, k.z)((e => {
                            switch (e.key) {
                                case m.R.Space:
                                case m.R.Enter:
                                case m.R.ArrowDown:
                                    e.preventDefault(), e.stopPropagation(), c({
                                        type: 0
                                    }), b.nextFrame((() => c({
                                        type: 2,
                                        focus: p.T.First
                                    })));
                                    break;
                                case m.R.ArrowUp:
                                    e.preventDefault(), e.stopPropagation(), c({
                                        type: 0
                                    }), b.nextFrame((() => c({
                                        type: 2,
                                        focus: p.T.Last
                                    })))
                            }
                        })),
                        y = (0, k.z)((e => {
                            if (e.key === m.R.Space) e.preventDefault()
                        })),
                        x = (0, k.z)((t => {
                            if ((0, v.P)(t.currentTarget)) return t.preventDefault();
                            e.disabled || (0 === u.menuState ? (c({
                                type: 1
                            }), b.nextFrame((() => {
                                var e;
                                return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))) : (t.preventDefault(), c({
                                type: 0
                            })))
                        })),
                        E = (0, o.useMemo)((() => ({
                            open: 0 === u.menuState
                        })), [u]),
                        P = {
                            ref: g,
                            id: a,
                            type: (0, w.f)(e, u.buttonRef),
                            "aria-haspopup": "menu",
                            "aria-controls": null == (n = u.itemsRef.current) ? void 0 : n.id,
                            "aria-expanded": e.disabled ? void 0 : 0 === u.menuState,
                            onKeyDown: h,
                            onKeyUp: y,
                            onClick: x
                        };
                    return null
                })),
                z = (0, l.yV)((function (e, t) {
                    var n, r;
                    let a = (0, d.M)(),
                        {
                            id: i = `headlessui-menu-items-${a}`,
                            ...c
                        } = e,
                        [v, b] = N("Menu.Items"),
                        w = (0, f.T)(v.itemsRef, t),
                        E = (0, x.i)(v.itemsRef),
                        P = (0, s.G)(),
                        O = (0, y.oJ)(),
                        S = null !== O ? (O & y.ZM.Open) === y.ZM.Open : 0 === v.menuState;
                    (0, o.useEffect)((() => {
                        let e = v.itemsRef.current;
                        e && 0 === v.menuState && e !== (null == E ? void 0 : E.activeElement) && e.focus({
                            preventScroll: !0
                        })
                    }), [v.menuState, v.itemsRef, E]), (0, h.B)({
                        container: v.itemsRef.current,
                        enabled: 0 === v.menuState,
                        accept(e) {
                            return "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                        },
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let T = (0, k.z)((e => {
                            var t, n;
                            switch (P.dispose(), e.key) {
                                case m.R.Space:
                                    if ("" !== v.searchQuery) return e.preventDefault(), e.stopPropagation(), b({
                                        type: 3,
                                        value: e.key
                                    });
                                case m.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), b({
                                            type: 1
                                        }), null !== v.activeItemIndex) {
                                        let {
                                            dataRef: e
                                        } = v.items[v.activeItemIndex];
                                        null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                                    }(0, g.wI)(v.buttonRef.current);
                                    break;
                                case m.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), b({
                                        type: 2,
                                        focus: p.T.Next
                                    });
                                case m.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), b({
                                        type: 2,
                                        focus: p.T.Previous
                                    });
                                case m.R.Home:
                                case m.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), b({
                                        type: 2,
                                        focus: p.T.First
                                    });
                                case m.R.End:
                                case m.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), b({
                                        type: 2,
                                        focus: p.T.Last
                                    });
                                case m.R.Escape:
                                    e.preventDefault(), e.stopPropagation(), b({
                                        type: 1
                                    }), (0, u.k)().nextFrame((() => {
                                        var e;
                                        return null == (e = v.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                    break;
                                case m.R.Tab:
                                    e.preventDefault(), e.stopPropagation(), b({
                                        type: 1
                                    }), (0, u.k)().nextFrame((() => {
                                        (0, g.EO)(v.buttonRef.current, e.shiftKey ? g.TO.Previous : g.TO.Next)
                                    }));
                                    break;
                                default:
                                    1 === e.key.length && (b({
                                        type: 3,
                                        value: e.key
                                    }), P.setTimeout((() => b({
                                        type: 4
                                    })), 350))
                            }
                        })),
                        A = (0, k.z)((e => {
                            if (e.key === m.R.Space) e.preventDefault()
                        })),
                        C = (0, o.useMemo)((() => ({
                            open: 0 === v.menuState
                        })), [v]),
                        R = {
                            "aria-activedescendant": null === v.activeItemIndex || null == (n = v.items[v.activeItemIndex]) ? void 0 : n.id,
                            "aria-labelledby": null == (r = v.buttonRef.current) ? void 0 : r.id,
                            id: i,
                            onKeyDown: T,
                            onKeyUp: A,
                            role: "menu",
                            tabIndex: 0,
                            ref: w
                        };
                    return (0, l.sY)({
                        ourProps: R,
                        theirProps: c,
                        slot: C,
                        defaultTag: "div",
                        features: F,
                        visible: S,
                        name: "Menu.Items"
                    })
                })),
                Y = (0, l.yV)((function (e, t) {
                    let n = (0, d.M)(),
                        {
                            id: r = `headlessui-menu-item-${n}`,
                            disabled: a = !1,
                            ...i
                        } = e,
                        [s, m] = N("Menu.Item"),
                        v = null !== s.activeItemIndex && s.items[s.activeItemIndex].id === r,
                        b = (0, o.useRef)(null),
                        h = (0, f.T)(t, b);
                    (0, c.e)((() => {
                        if (s.__demoMode || 0 !== s.menuState || !v || 0 === s.activationTrigger) return;
                        let e = (0, u.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = b.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [s.__demoMode, b, v, s.menuState, s.activationTrigger, s.activeItemIndex]);
                    let y = (0, P.x)(b),
                        w = (0, o.useRef)({
                            disabled: a,
                            domRef: b,
                            get textValue() {
                                return y()
                            }
                        });
                    (0, c.e)((() => {
                        w.current.disabled = a
                    }), [w, a]), (0, c.e)((() => (m({
                        type: 5,
                        id: r,
                        dataRef: w
                    }), () => m({
                        type: 6,
                        id: r
                    }))), [w, r]);
                    let x = (0, k.z)((() => {
                            m({
                                type: 1
                            })
                        })),
                        O = (0, k.z)((e => {
                            if (a) return e.preventDefault();
                            m({
                                type: 1
                            }), (0, g.wI)(s.buttonRef.current)
                        })),
                        S = (0, k.z)((() => {
                            if (a) return m({
                                type: 2,
                                focus: p.T.Nothing
                            });
                            m({
                                type: 2,
                                focus: p.T.Specific,
                                id: r
                            })
                        })),
                        T = (0, E.g)(),
                        A = (0, k.z)((e => T.update(e))),
                        C = (0, k.z)((e => {
                            T.wasMoved(e) && (a || v || m({
                                type: 2,
                                focus: p.T.Specific,
                                id: r,
                                trigger: 0
                            }))
                        })),
                        R = (0, k.z)((e => {
                            T.wasMoved(e) && (a || v && m({
                                type: 2,
                                focus: p.T.Nothing
                            }))
                        })),
                        M = (0, o.useMemo)((() => ({
                            active: v,
                            disabled: a,
                            close: x
                        })), [v, a, x]);
                    return (0, l.sY)({
                        ourProps: {
                            id: r,
                            ref: h,
                            role: "menuitem",
                            tabIndex: !0 === a ? void 0 : -1,
                            "aria-disabled": !0 === a || void 0,
                            disabled: void 0,
                            onClick: O,
                            onFocus: S,
                            onPointerEnter: A,
                            onMouseEnter: A,
                            onPointerMove: C,
                            onMouseMove: C,
                            onPointerLeave: R,
                            onMouseLeave: R
                        },
                        theirProps: i,
                        slot: M,
                        defaultTag: L,
                        name: "Menu.Item"
                    })
                })),
                H = Object.assign(D, {
                    Button: j,
                    Items: z,
                    Item: Y
                })
        },
        86215: function (e, t, n) {
            n.d(t, {
                J: function () {
                    return W
                }
            });
            var r, a, o = n(67294),
                i = n(32984),
                l = n(12351),
                u = n(23784),
                s = n(19946),
                c = n(61363),
                f = n(64103),
                d = n(84575),
                m = n(16567),
                p = n(14157),
                v = n(43986),
                g = n(15466),
                b = n(51074),
                h = n(14007),
                y = n(46045),
                w = n(73781),
                x = n(45662),
                k = n(3855),
                E = n(16723),
                P = n(65958),
                O = n(2740),
                S = ((a = S || {})[a.Open = 0] = "Open", a[a.Closed = 1] = "Closed", a),
                T = ((r = T || {})[r.TogglePopover = 0] = "TogglePopover", r[r.ClosePopover = 1] = "ClosePopover", r[r.SetButton = 2] = "SetButton", r[r.SetButtonId = 3] = "SetButtonId", r[r.SetPanel = 4] = "SetPanel", r[r.SetPanelId = 5] = "SetPanelId", r);
            let A = {
                    0: e => {
                        let t = {
                            ...e,
                            popoverState: (0, i.E)(e.popoverState, {
                                0: 1,
                                1: 0
                            })
                        };
                        return 0 === t.popoverState && (t.__demoMode = !1), t
                    },
                    1(e) {
                        return 1 === e.popoverState ? e : {
                            ...e,
                            popoverState: 1
                        }
                    },
                    2(e, t) {
                        return e.button === t.button ? e : {
                            ...e,
                            button: t.button
                        }
                    },
                    3(e, t) {
                        return e.buttonId === t.buttonId ? e : {
                            ...e,
                            buttonId: t.buttonId
                        }
                    },
                    4(e, t) {
                        return e.panel === t.panel ? e : {
                            ...e,
                            panel: t.panel
                        }
                    },
                    5(e, t) {
                        return e.panelId === t.panelId ? e : {
                            ...e,
                            panelId: t.panelId
                        }
                    }
                },
                C = (0, o.createContext)(null);

            function R(e) {
                let t = (0, o.useContext)(C);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, R), t
                }
                return t
            }
            C.displayName = "PopoverContext";
            let N = (0, o.createContext)(null);

            function M(e) {
                let t = (0, o.useContext)(N);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, M), t
                }
                return t
            }
            N.displayName = "PopoverAPIContext";
            let I = (0, o.createContext)(null);

            function F() {
                return (0, o.useContext)(I)
            }
            I.displayName = "PopoverGroupContext";
            let L = (0, o.createContext)(null);

            function D(e, t) {
                return (0, i.E)(t.type, A, e, t)
            }
            L.displayName = "PopoverPanelContext";
            let j = l.AN.RenderStrategy | l.AN.Static;
            let z = l.AN.RenderStrategy | l.AN.Static;
            let Y = (0, l.yV)((function (e, t) {
                    var n;
                    let {
                        __demoMode: r = !1,
                        ...a
                    } = e, s = (0, o.useRef)(null), c = (0, u.T)(t, (0, u.h)((e => {
                        s.current = e
                    }))), f = (0, o.useRef)([]), p = (0, o.useReducer)(D, {
                        __demoMode: r,
                        popoverState: r ? 0 : 1,
                        buttons: f,
                        button: null,
                        buttonId: null,
                        panel: null,
                        panelId: null,
                        beforePanelSentinel: (0, o.createRef)(),
                        afterPanelSentinel: (0, o.createRef)()
                    }), [{
                        popoverState: g,
                        button: y,
                        buttonId: x,
                        panel: E,
                        panelId: S,
                        beforePanelSentinel: T,
                        afterPanelSentinel: A
                    }, R] = p, M = (0, b.i)(null != (n = s.current) ? n : y), I = (0, o.useMemo)((() => {
                        if (!y || !E) return !1;
                        for (let e of document.querySelectorAll("body > *"))
                            if (Number(null == e ? void 0 : e.contains(y)) ^ Number(null == e ? void 0 : e.contains(E))) return !0;
                        let e = (0, d.GO)(),
                            t = e.indexOf(y),
                            n = (t + e.length - 1) % e.length,
                            r = (t + 1) % e.length,
                            a = e[n],
                            o = e[r];
                        return !E.contains(a) && !E.contains(o)
                    }), [y, E]), j = (0, k.E)(x), z = (0, k.E)(S), Y = (0, o.useMemo)((() => ({
                        buttonId: j,
                        panelId: z,
                        close: () => R({
                            type: 1
                        })
                    })), [j, z, R]), H = F(), B = null == H ? void 0 : H.registerPopover, _ = (0, w.z)((() => {
                        var e;
                        return null != (e = null == H ? void 0 : H.isFocusWithinPopoverGroup()) ? e : (null == M ? void 0 : M.activeElement) && ((null == y ? void 0 : y.contains(M.activeElement)) || (null == E ? void 0 : E.contains(M.activeElement)))
                    }));
                    (0, o.useEffect)((() => null == B ? void 0 : B(Y)), [B, Y]);
                    let [V, W] = (0, O.k)(), U = (0, P.v)({
                        portals: V,
                        defaultContainers: [y, E]
                    });
                    (0, h.O)(null == M ? void 0 : M.defaultView, "focus", (e => {
                        var t, n, r, a;
                        e.target !== window && e.target instanceof HTMLElement && 0 === g && (_() || y && E && (U.contains(e.target) || null != (n = null == (t = T.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (a = null == (r = A.current) ? void 0 : r.contains) && a.call(r, e.target) || R({
                            type: 1
                        })))
                    }), !0), (0, v.O)(U.resolveContainers, ((e, t) => {
                        R({
                            type: 1
                        }), (0, d.sP)(t, d.tJ.Loose) || (e.preventDefault(), null == y || y.focus())
                    }), 0 === g);
                    let $ = (0, w.z)((e => {
                            R({
                                type: 1
                            });
                            let t = e ? e instanceof HTMLElement ? e : "current" in e && e.current instanceof HTMLElement ? e.current : y : y;
                            null == t || t.focus()
                        })),
                        G = (0, o.useMemo)((() => ({
                            close: $,
                            isPortalled: I
                        })), [$, I]),
                        q = (0, o.useMemo)((() => ({
                            open: 0 === g,
                            close: $
                        })), [g, $]),
                        Z = {
                            ref: c
                        };
                    return o.createElement(L.Provider, {
                        value: null
                    }, o.createElement(C.Provider, {
                        value: p
                    }, o.createElement(N.Provider, {
                        value: G
                    }, o.createElement(m.up, {
                        value: (0, i.E)(g, {
                            0: m.ZM.Open,
                            1: m.ZM.Closed
                        })
                    }, o.createElement(W, null, (0, l.sY)({
                        ourProps: Z,
                        theirProps: a,
                        slot: q,
                        defaultTag: "div",
                        name: "Popover"
                    }), o.createElement(U.MainTreeNode, null))))))
                })),
                H = (0, l.yV)((function (e, t) {
                    let n = (0, s.M)(),
                        {
                            id: r = `headlessui-popover-button-${n}`,
                            ...a
                        } = e,
                        [m, v] = R("Popover.Button"),
                        {
                            isPortalled: g
                        } = M("Popover.Button"),
                        h = (0, o.useRef)(null),
                        k = `headlessui-focus-sentinel-${(0,s.M)()}`,
                        E = F(),
                        P = null == E ? void 0 : E.closeOthers,
                        O = null !== (0, o.useContext)(L);
                    (0, o.useEffect)((() => {
                        if (!O) return v({
                            type: 3,
                            buttonId: r
                        }), () => {
                            v({
                                type: 3,
                                buttonId: null
                            })
                        }
                    }), [O, r, v]);
                    let [S] = (0, o.useState)((() => Symbol())), T = (0, u.T)(h, t, O ? null : e => {
                        if (e) m.buttons.current.push(S);
                        else {
                            let e = m.buttons.current.indexOf(S); - 1 !== e && m.buttons.current.splice(e, 1)
                        }
                        m.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e && v({
                            type: 2,
                            button: e
                        })
                    }), A = (0, u.T)(h, t), C = (0, b.i)(h), N = (0, w.z)((e => {
                        var t, n, r;
                        if (O) {
                            if (1 === m.popoverState) return;
                            switch (e.key) {
                                case c.R.Space:
                                case c.R.Enter:
                                    e.preventDefault(), null == (n = (t = e.target).click) || n.call(t), v({
                                        type: 1
                                    }), null == (r = m.button) || r.focus()
                            }
                        } else switch (e.key) {
                            case c.R.Space:
                            case c.R.Enter:
                                e.preventDefault(), e.stopPropagation(), 1 === m.popoverState && (null == P || P(m.buttonId)), v({
                                    type: 0
                                });
                                break;
                            case c.R.Escape:
                                if (0 !== m.popoverState) return null == P ? void 0 : P(m.buttonId);
                                if (!h.current || null != C && C.activeElement && !h.current.contains(C.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), v({
                                    type: 1
                                })
                        }
                    })), I = (0, w.z)((e => {
                        O || e.key === c.R.Space && e.preventDefault()
                    })), D = (0, w.z)((t => {
                        var n, r;
                        (0, f.P)(t.currentTarget) || e.disabled || (O ? (v({
                            type: 1
                        }), null == (n = m.button) || n.focus()) : (t.preventDefault(), t.stopPropagation(), 1 === m.popoverState && (null == P || P(m.buttonId)), v({
                            type: 0
                        }), null == (r = m.button) || r.focus()))
                    })), j = (0, w.z)((e => {
                        e.preventDefault(), e.stopPropagation()
                    })), z = 0 === m.popoverState, Y = (0, o.useMemo)((() => ({
                        open: z
                    })), [z]), H = (0, p.f)(e, h), B = O ? {
                        ref: A,
                        type: H,
                        onKeyDown: N,
                        onClick: D
                    } : {
                        ref: T,
                        id: m.buttonId,
                        type: H,
                        "aria-expanded": e.disabled ? void 0 : 0 === m.popoverState,
                        "aria-controls": m.panel ? m.panelId : void 0,
                        onKeyDown: N,
                        onKeyUp: I,
                        onClick: D,
                        onMouseDown: j
                    }, _ = (0, x.l)(), V = (0, w.z)((() => {
                        let e = m.panel;
                        e && (0, i.E)(_.current, {
                            [x.N.Forwards]: () => (0, d.jA)(e, d.TO.First),
                            [x.N.Backwards]: () => (0, d.jA)(e, d.TO.Last)
                        }) === d.fE.Error && (0, d.jA)((0, d.GO)().filter((e => "true" !== e.dataset.headlessuiFocusGuard)), (0, i.E)(_.current, {
                            [x.N.Forwards]: d.TO.Next,
                            [x.N.Backwards]: d.TO.Previous
                        }), {
                            relativeTo: m.button
                        })
                    }));
                    return o.createElement(o.Fragment, null, (0, l.sY)({
                        ourProps: B,
                        theirProps: a,
                        slot: Y,
                        defaultTag: "button",
                        name: "Popover.Button"
                    }), z && !O && g && o.createElement(y._, {
                        id: k,
                        features: y.A.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: V
                    }))
                })),
                B = (0, l.yV)((function (e, t) {
                    let n = (0, s.M)(),
                        {
                            id: r = `headlessui-popover-overlay-${n}`,
                            ...a
                        } = e,
                        [{
                            popoverState: i
                        }, c] = R("Popover.Overlay"),
                        d = (0, u.T)(t),
                        p = (0, m.oJ)(),
                        v = null !== p ? (p & m.ZM.Open) === m.ZM.Open : 0 === i,
                        g = (0, w.z)((e => {
                            if ((0, f.P)(e.currentTarget)) return e.preventDefault();
                            c({
                                type: 1
                            })
                        })),
                        b = (0, o.useMemo)((() => ({
                            open: 0 === i
                        })), [i]);
                    return (0, l.sY)({
                        ourProps: {
                            ref: d,
                            id: r,
                            "aria-hidden": !0,
                            onClick: g
                        },
                        theirProps: a,
                        slot: b,
                        defaultTag: "div",
                        features: j,
                        visible: v,
                        name: "Popover.Overlay"
                    })
                })),
                _ = (0, l.yV)((function (e, t) {
                    let n = (0, s.M)(),
                        {
                            id: r = `headlessui-popover-panel-${n}`,
                            focus: a = !1,
                            ...f
                        } = e,
                        [p, v] = R("Popover.Panel"),
                        {
                            close: g,
                            isPortalled: h
                        } = M("Popover.Panel"),
                        k = `headlessui-focus-sentinel-before-${(0,s.M)()}`,
                        P = `headlessui-focus-sentinel-after-${(0,s.M)()}`,
                        O = (0, o.useRef)(null),
                        S = (0, u.T)(O, t, (e => {
                            v({
                                type: 4,
                                panel: e
                            })
                        })),
                        T = (0, b.i)(O);
                    (0, E.e)((() => (v({
                        type: 5,
                        panelId: r
                    }), () => {
                        v({
                            type: 5,
                            panelId: null
                        })
                    })), [r, v]);
                    let A = (0, m.oJ)(),
                        C = null !== A ? (A & m.ZM.Open) === m.ZM.Open : 0 === p.popoverState,
                        N = (0, w.z)((e => {
                            var t;
                            if (e.key === c.R.Escape) {
                                if (0 !== p.popoverState || !O.current || null != T && T.activeElement && !O.current.contains(T.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), v({
                                    type: 1
                                }), null == (t = p.button) || t.focus()
                            }
                        }));
                    (0, o.useEffect)((() => {
                        var t;
                        e.static || 1 === p.popoverState && (null == (t = e.unmount) || t) && v({
                            type: 4,
                            panel: null
                        })
                    }), [p.popoverState, e.unmount, e.static, v]), (0, o.useEffect)((() => {
                        if (p.__demoMode || !a || 0 !== p.popoverState || !O.current) return;
                        let e = null == T ? void 0 : T.activeElement;
                        O.current.contains(e) || (0, d.jA)(O.current, d.TO.First)
                    }), [p.__demoMode, a, O, p.popoverState]);
                    let I = (0, o.useMemo)((() => ({
                            open: 0 === p.popoverState,
                            close: g
                        })), [p, g]),
                        F = {
                            ref: S,
                            id: r,
                            onKeyDown: N,
                            onBlur: a && 0 === p.popoverState ? e => {
                                var t, n, r, a, o;
                                let i = e.relatedTarget;
                                i && O.current && (null != (t = O.current) && t.contains(i) || (v({
                                    type: 1
                                }), (null != (r = null == (n = p.beforePanelSentinel.current) ? void 0 : n.contains) && r.call(n, i) || null != (o = null == (a = p.afterPanelSentinel.current) ? void 0 : a.contains) && o.call(a, i)) && i.focus({
                                    preventScroll: !0
                                })))
                            } : void 0,
                            tabIndex: -1
                        },
                        D = (0, x.l)(),
                        j = (0, w.z)((() => {
                            let e = O.current;
                            e && (0, i.E)(D.current, {
                                [x.N.Forwards]: () => {
                                    var t;
                                    (0, d.jA)(e, d.TO.First) === d.fE.Error && (null == (t = p.afterPanelSentinel.current) || t.focus())
                                },
                                [x.N.Backwards]: () => {
                                    var e;
                                    null == (e = p.button) || e.focus({
                                        preventScroll: !0
                                    })
                                }
                            })
                        })),
                        Y = (0, w.z)((() => {
                            let e = O.current;
                            e && (0, i.E)(D.current, {
                                [x.N.Forwards]: () => {
                                    var e;
                                    if (!p.button) return;
                                    let t = (0, d.GO)(),
                                        n = t.indexOf(p.button),
                                        r = t.slice(0, n + 1),
                                        a = [...t.slice(n + 1), ...r];
                                    for (let t of a.slice())
                                        if ("true" === t.dataset.headlessuiFocusGuard || null != (e = p.panel) && e.contains(t)) {
                                            let e = a.indexOf(t); - 1 !== e && a.splice(e, 1)
                                        }(0, d.jA)(a, d.TO.First, {
                                            sorted: !1
                                        })
                                },
                                [x.N.Backwards]: () => {
                                    var t;
                                    (0, d.jA)(e, d.TO.Previous) === d.fE.Error && (null == (t = p.button) || t.focus())
                                }
                            })
                        }));
                    return o.createElement(L.Provider, {
                        value: r
                    }, C && h && o.createElement(y._, {
                        id: k,
                        ref: p.beforePanelSentinel,
                        features: y.A.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: j
                    }), (0, l.sY)({
                        ourProps: F,
                        theirProps: f,
                        slot: I,
                        defaultTag: "div",
                        features: z,
                        visible: C,
                        name: "Popover.Panel"
                    }), C && h && o.createElement(y._, {
                        id: P,
                        ref: p.afterPanelSentinel,
                        features: y.A.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: Y
                    }))
                })),
                V = (0, l.yV)((function (e, t) {
                    let n = (0, o.useRef)(null),
                        r = (0, u.T)(n, t),
                        [a, i] = (0, o.useState)([]),
                        s = (0, w.z)((e => {
                            i((t => {
                                let n = t.indexOf(e);
                                if (-1 !== n) {
                                    let e = t.slice();
                                    return e.splice(n, 1), e
                                }
                                return t
                            }))
                        })),
                        c = (0, w.z)((e => (i((t => [...t, e])), () => s(e)))),
                        f = (0, w.z)((() => {
                            var e;
                            let t = (0, g.r)(n);
                            if (!t) return !1;
                            let r = t.activeElement;
                            return !(null == (e = n.current) || !e.contains(r)) || a.some((e => {
                                var n, a;
                                return (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(r)) || (null == (a = t.getElementById(e.panelId.current)) ? void 0 : a.contains(r))
                            }))
                        })),
                        d = (0, w.z)((e => {
                            for (let t of a) t.buttonId.current !== e && t.close()
                        })),
                        m = (0, o.useMemo)((() => ({
                            registerPopover: c,
                            unregisterPopover: s,
                            isFocusWithinPopoverGroup: f,
                            closeOthers: d
                        })), [c, s, f, d]),
                        p = (0, o.useMemo)((() => ({})), []),
                        v = e,
                        b = {
                            ref: r
                        };
                    return o.createElement(I.Provider, {
                        value: m
                    }, (0, l.sY)({
                        ourProps: b,
                        theirProps: v,
                        slot: p,
                        defaultTag: "div",
                        name: "Popover.Group"
                    }))
                })),
                W = Object.assign(Y, {
                    Button: H,
                    Overlay: B,
                    Panel: _,
                    Group: V
                })
        },
        2740: function (e, t, n) {
            n.d(t, {
                h: function () {
                    return x
                },
                k: function () {
                    return h
                }
            });
            var r = n(67294),
                a = n(73935),
                o = n(12351),
                i = n(16723),
                l = n(31438),
                u = n(82180),
                s = n(23784),
                c = n(61595),
                f = n(51074),
                d = n(77896),
                m = n(73781);
            let p = r.Fragment;
            let v = r.Fragment,
                g = (0, r.createContext)(null);
            let b = (0, r.createContext)(null);

            function h() {
                let e = (0, r.useContext)(b),
                    t = (0, r.useRef)([]),
                    n = (0, m.z)((n => (t.current.push(n), e && e.register(n), () => a(n)))),
                    a = (0, m.z)((n => {
                        let r = t.current.indexOf(n); - 1 !== r && t.current.splice(r, 1), e && e.unregister(n)
                    })),
                    o = (0, r.useMemo)((() => ({
                        register: n,
                        unregister: a,
                        portals: t
                    })), [n, a, t]);
                return [t, (0, r.useMemo)((() => function ({
                    children: e
                }) {
                    return r.createElement(b.Provider, {
                        value: o
                    }, e)
                }), [o])]
            }
            let y = (0, o.yV)((function (e, t) {
                    let n = e,
                        m = (0, r.useRef)(null),
                        v = (0, s.T)((0, s.h)((e => {
                            m.current = e
                        })), t),
                        h = (0, f.i)(m),
                        y = function (e) {
                            let t = (0, l.n)(),
                                n = (0, r.useContext)(g),
                                a = (0, f.i)(e),
                                [o, i] = (0, r.useState)((() => {
                                    if (!t && null !== n || d.O.isServer) return null;
                                    let e = null == a ? void 0 : a.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === a) return null;
                                    let r = a.createElement("div");
                                    return r.setAttribute("id", "headlessui-portal-root"), a.body.appendChild(r)
                                }));
                            return (0, r.useEffect)((() => {
                                null !== o && (null != a && a.body.contains(o) || null == a || a.body.appendChild(o))
                            }), [o, a]), (0, r.useEffect)((() => {
                                t || null !== n && i(n.current)
                            }), [n, i, t]), o
                        }(m),
                        [w] = (0, r.useState)((() => {
                            var e;
                            return d.O.isServer ? null : null != (e = null == h ? void 0 : h.createElement("div")) ? e : null
                        })),
                        x = (0, r.useContext)(b),
                        k = (0, u.H)();
                    return (0, i.e)((() => {
                        !y || !w || y.contains(w) || (w.setAttribute("data-headlessui-portal", ""), y.appendChild(w))
                    }), [y, w]), (0, i.e)((() => {
                        if (w && x) return x.register(w)
                    }), [x, w]), (0, c.L)((() => {
                        var e;
                        !y || !w || (w instanceof Node && y.contains(w) && y.removeChild(w), y.childNodes.length <= 0 && (null == (e = y.parentElement) || e.removeChild(y)))
                    })), k && y && w ? (0, a.createPortal)((0, o.sY)({
                        ourProps: {
                            ref: v
                        },
                        theirProps: n,
                        defaultTag: p,
                        name: "Portal"
                    }), w) : null
                })),
                w = (0, o.yV)((function (e, t) {
                    let {
                        target: n,
                        ...a
                    } = e, i = {
                        ref: (0, s.T)(t)
                    };
                    return r.createElement(g.Provider, {
                        value: n
                    }, (0, o.sY)({
                        ourProps: i,
                        theirProps: a,
                        defaultTag: v,
                        name: "Popover.Group"
                    }))
                })),
                x = Object.assign(y, {
                    Group: w
                })
        },
        47031: function (e, t, n) {
            n.d(t, {
                u: function () {
                    return F
                }
            });
            var r = n(67294),
                a = n(12351),
                o = n(16567),
                i = n(32984),
                l = n(14879),
                u = n(16723),
                s = n(3855),
                c = n(82180),
                f = n(23784);
            var d = n(9362);

            function m(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function p(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }

            function v(e, t, n, r) {
                let a = n ? "enter" : "leave",
                    o = (0, d.k)(),
                    l = void 0 !== r ? function (e) {
                        let t = {
                            called: !1
                        };
                        return (...n) => {
                            if (!t.called) return t.called = !0, e(...n)
                        }
                    }(r) : () => {};
                "enter" === a && (e.removeAttribute("hidden"), e.style.display = "");
                let u = (0, i.E)(a, {
                        enter: () => t.enter,
                        leave: () => t.leave
                    }),
                    s = (0, i.E)(a, {
                        enter: () => t.enterTo,
                        leave: () => t.leaveTo
                    }),
                    c = (0, i.E)(a, {
                        enter: () => t.enterFrom,
                        leave: () => t.leaveFrom
                    });
                return p(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), m(e, ...u, ...c), o.nextFrame((() => {
                    p(e, ...c), m(e, ...s),
                        function (e, t) {
                            let n = (0, d.k)();
                            if (!e) return n.dispose;
                            let {
                                transitionDuration: r,
                                transitionDelay: a
                            } = getComputedStyle(e), [o, i] = [r, a].map((e => {
                                let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
                                return t
                            })), l = o + i;
                            if (0 !== l) {
                                n.group((n => {
                                    n.setTimeout((() => {
                                        t(), n.dispose()
                                    }), l), n.addEventListener(e, "transitionrun", (e => {
                                        e.target === e.currentTarget && n.dispose()
                                    }))
                                }));
                                let r = n.addEventListener(e, "transitionend", (e => {
                                    e.target === e.currentTarget && (t(), r())
                                }))
                            } else t();
                            n.add((() => t())), n.dispose
                        }(e, (() => (p(e, ...u), m(e, ...t.entered), l())))
                })), o.dispose
            }
            var g = n(94192);
            var b = n(73781),
                h = n(44067),
                y = n(14227);

            function w(e = "") {
                return e.split(" ").filter((e => e.trim().length > 1))
            }
            let x = (0, r.createContext)(null);
            x.displayName = "TransitionContext";
            var k, E = ((k = E || {}).Visible = "visible", k.Hidden = "hidden", k);
            let P = (0, r.createContext)(null);

            function O(e) {
                return "children" in e ? O(e.children) : e.current.filter((({
                    el: e
                }) => null !== e.current)).filter((({
                    state: e
                }) => "visible" === e)).length > 0
            }

            function S(e, t) {
                let n = (0, s.E)(e),
                    o = (0, r.useRef)([]),
                    u = (0, l.t)(),
                    c = (0, g.G)(),
                    f = (0, b.z)(((e, t = a.l4.Hidden) => {
                        let r = o.current.findIndex((({
                            el: t
                        }) => t === e)); - 1 !== r && ((0, i.E)(t, {
                            [a.l4.Unmount]() {
                                o.current.splice(r, 1)
                            },
                            [a.l4.Hidden]() {
                                o.current[r].state = "hidden"
                            }
                        }), c.microTask((() => {
                            var e;
                            !O(o) && u.current && (null == (e = n.current) || e.call(n))
                        })))
                    })),
                    d = (0, b.z)((e => {
                        let t = o.current.find((({
                            el: t
                        }) => t === e));
                        return t ? "visible" !== t.state && (t.state = "visible") : o.current.push({
                            el: e,
                            state: "visible"
                        }), () => f(e, a.l4.Unmount)
                    })),
                    m = (0, r.useRef)([]),
                    p = (0, r.useRef)(Promise.resolve()),
                    v = (0, r.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    h = (0, b.z)(((e, n, r) => {
                        m.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter((([t]) => t !== e))), null == t || t.chains.current[n].push([e, new Promise((e => {
                            m.current.push(e)
                        }))]), null == t || t.chains.current[n].push([e, new Promise((e => {
                            Promise.all(v.current[n].map((([e, t]) => t))).then((() => e()))
                        }))]), "enter" === n ? p.current = p.current.then((() => null == t ? void 0 : t.wait.current)).then((() => r(n))) : r(n)
                    })),
                    y = (0, b.z)(((e, t, n) => {
                        Promise.all(v.current[t].splice(0).map((([e, t]) => t))).then((() => {
                            var e;
                            null == (e = m.current.shift()) || e()
                        })).then((() => n(t)))
                    }));
                return (0, r.useMemo)((() => ({
                    children: o,
                    register: d,
                    unregister: f,
                    onStart: h,
                    onStop: y,
                    wait: p,
                    chains: v
                })), [d, f, o, h, y, v, p])
            }

            function T() {}
            P.displayName = "NestingContext";
            let A = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function C(e) {
                var t;
                let n = {};
                for (let r of A) n[r] = null != (t = e[r]) ? t : T;
                return n
            }
            let R = a.AN.RenderStrategy;
            let N = (0, a.yV)((function (e, t) {
                    let {
                        show: n,
                        appear: i = !1,
                        unmount: l,
                        ...s
                    } = e, d = (0, r.useRef)(null), m = (0, f.T)(d, t);
                    (0, c.H)();
                    let p = (0, o.oJ)();
                    if (void 0 === n && null !== p && (n = (p & o.ZM.Open) === o.ZM.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [v, g] = (0, r.useState)(n ? "visible" : "hidden"), h = S((() => {
                        g("hidden")
                    })), [y, w] = (0, r.useState)(!0), k = (0, r.useRef)([n]);
                    (0, u.e)((() => {
                        !1 !== y && k.current[k.current.length - 1] !== n && (k.current.push(n), w(!1))
                    }), [k, n]);
                    let E = (0, r.useMemo)((() => ({
                        show: n,
                        appear: i,
                        initial: y
                    })), [n, i, y]);
                    (0, r.useEffect)((() => {
                        if (n) g("visible");
                        else if (O(h)) {
                            let e = d.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && g("hidden")
                        } else g("hidden")
                    }), [n, h]);
                    let T = {
                            unmount: l
                        },
                        A = (0, b.z)((() => {
                            var t;
                            y && w(!1), null == (t = e.beforeEnter) || t.call(e)
                        })),
                        C = (0, b.z)((() => {
                            var t;
                            y && w(!1), null == (t = e.beforeLeave) || t.call(e)
                        }));
                    return r.createElement(P.Provider, {
                        value: h
                    }, r.createElement(x.Provider, {
                        value: E
                    }, (0, a.sY)({
                        ourProps: {
                            ...T,
                            as: r.Fragment,
                            children: r.createElement(M, {
                                ref: m,
                                ...T,
                                ...s,
                                beforeEnter: A,
                                beforeLeave: C
                            })
                        },
                        theirProps: {},
                        defaultTag: r.Fragment,
                        features: R,
                        visible: "visible" === v,
                        name: "Transition"
                    })))
                })),
                M = (0, a.yV)((function (e, t) {
                    let {
                        beforeEnter: n,
                        afterEnter: m,
                        beforeLeave: p,
                        afterLeave: k,
                        enter: E,
                        enterFrom: T,
                        enterTo: A,
                        entered: N,
                        leave: M,
                        leaveFrom: I,
                        leaveTo: F,
                        ...L
                    } = e, D = (0, r.useRef)(null), j = (0, f.T)(D, t), z = L.unmount ? a.l4.Unmount : a.l4.Hidden, {
                        show: Y,
                        appear: H,
                        initial: B
                    } = function () {
                        let e = (0, r.useContext)(x);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), [_, V] = (0, r.useState)(Y ? "visible" : "hidden"), W = function () {
                        let e = (0, r.useContext)(P);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: U,
                        unregister: $
                    } = W, G = (0, r.useRef)(null);
                    (0, r.useEffect)((() => U(D)), [U, D]), (0, r.useEffect)((() => {
                        if (z === a.l4.Hidden && D.current) return Y && "visible" !== _ ? void V("visible") : (0, i.E)(_, {
                            hidden: () => $(D),
                            visible: () => U(D)
                        })
                    }), [_, D, U, $, Y, z]);
                    let q = (0, s.E)({
                            enter: w(E),
                            enterFrom: w(T),
                            enterTo: w(A),
                            entered: w(N),
                            leave: w(M),
                            leaveFrom: w(I),
                            leaveTo: w(F)
                        }),
                        Z = function (e) {
                            let t = (0, r.useRef)(C(e));
                            return (0, r.useEffect)((() => {
                                t.current = C(e)
                            }), [e]), t
                        }({
                            beforeEnter: n,
                            afterEnter: m,
                            beforeLeave: p,
                            afterLeave: k
                        }),
                        K = (0, c.H)();
                    (0, r.useEffect)((() => {
                        if (K && "visible" === _ && null === D.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }), [D, _, K]);
                    let J = B && !H,
                        X = !K || J || G.current === Y ? "idle" : Y ? "enter" : "leave",
                        Q = (0, y.V)(0),
                        ee = (0, b.z)((e => (0, i.E)(e, {
                            enter: () => {
                                Q.addFlag(o.ZM.Opening), Z.current.beforeEnter()
                            },
                            leave: () => {
                                Q.addFlag(o.ZM.Closing), Z.current.beforeLeave()
                            },
                            idle: () => {}
                        }))),
                        te = (0, b.z)((e => (0, i.E)(e, {
                            enter: () => {
                                Q.removeFlag(o.ZM.Opening), Z.current.afterEnter()
                            },
                            leave: () => {
                                Q.removeFlag(o.ZM.Closing), Z.current.afterLeave()
                            },
                            idle: () => {}
                        }))),
                        ne = S((() => {
                            V("hidden"), $(D)
                        }), W);
                    (function ({
                        container: e,
                        direction: t,
                        classes: n,
                        onStart: r,
                        onStop: a
                    }) {
                        let o = (0, l.t)(),
                            i = (0, g.G)(),
                            c = (0, s.E)(t);
                        (0, u.e)((() => {
                            let t = (0, d.k)();
                            i.add(t.dispose);
                            let l = e.current;
                            if (l && "idle" !== c.current && o.current) return t.dispose(), r.current(c.current), t.add(v(l, n.current, "enter" === c.current, (() => {
                                t.dispose(), a.current(c.current)
                            }))), t.dispose
                        }), [t])
                    })({
                        container: D,
                        classes: q,
                        direction: X,
                        onStart: (0, s.E)((e => {
                            ne.onStart(D, e, ee)
                        })),
                        onStop: (0, s.E)((e => {
                            ne.onStop(D, e, te), "leave" === e && !O(ne) && (V("hidden"), $(D))
                        }))
                    }), (0, r.useEffect)((() => {
                        J && (z === a.l4.Hidden ? G.current = null : G.current = Y)
                    }), [Y, J, _]);
                    let re = L,
                        ae = {
                            ref: j
                        };
                    return H && Y && B && (re = {
                        ...re,
                        className: (0, h.A)(L.className, ...q.current.enter, ...q.current.enterFrom)
                    }), r.createElement(P.Provider, {
                        value: ne
                    }, r.createElement(o.up, {
                        value: (0, i.E)(_, {
                            visible: o.ZM.Open,
                            hidden: o.ZM.Closed
                        }) | Q.flags
                    }, (0, a.sY)({
                        ourProps: ae,
                        theirProps: re,
                        defaultTag: "div",
                        features: R,
                        visible: "visible" === _,
                        name: "Transition.Child"
                    })))
                })),
                I = (0, a.yV)((function (e, t) {
                    let n = null !== (0, r.useContext)(x),
                        a = null !== (0, o.oJ)();
                    return r.createElement(r.Fragment, null, !n && a ? r.createElement(N, {
                        ref: t,
                        ...e
                    }) : r.createElement(M, {
                        ref: t,
                        ...e
                    }))
                })),
                F = Object.assign(N, {
                    Child: I,
                    Root: N
                })
        },
        94192: function (e, t, n) {
            n.d(t, {
                G: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(9362);

            function o() {
                let [e] = (0, r.useState)(a.k);
                return (0, r.useEffect)((() => () => e.dispose()), [e]), e
            }
        },
        14007: function (e, t, n) {
            n.d(t, {
                O: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(3855);

            function o(e, t, n, o) {
                let i = (0, a.E)(n);
                (0, r.useEffect)((() => {
                    function n(e) {
                        i.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, o), () => e.removeEventListener(t, n, o)
                }), [e, t, o])
            }
        },
        73781: function (e, t, n) {
            n.d(t, {
                z: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(3855);
            let o = function (e) {
                let t = (0, a.E)(e);
                return r.useCallback(((...e) => t.current(...e)), [t])
            }
        },
        14227: function (e, t, n) {
            n.d(t, {
                V: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(14879);

            function o(e = 0) {
                let [t, n] = (0, r.useState)(e), o = (0, a.t)(), i = (0, r.useCallback)((e => {
                    o.current && n((t => t | e))
                }), [t, o]), l = (0, r.useCallback)((e => Boolean(t & e)), [t]), u = (0, r.useCallback)((e => {
                    o.current && n((t => t & ~e))
                }), [n, o]), s = (0, r.useCallback)((e => {
                    o.current && n((t => t ^ e))
                }), [n]);
                return {
                    flags: t,
                    addFlag: i,
                    hasFlag: l,
                    removeFlag: u,
                    toggleFlag: s
                }
            }
        },
        19946: function (e, t, n) {
            n.d(t, {
                M: function () {
                    return u
                }
            });
            var r, a = n(67294),
                o = n(16723),
                i = n(82180),
                l = n(77896);
            let u = null != (r = a.useId) ? r : function () {
                let e = (0, i.H)(),
                    [t, n] = a.useState(e ? () => l.O.nextId() : null);
                return (0, o.e)((() => {
                    null === t && n(l.O.nextId())
                }), [t]), null != t ? "" + t : void 0
            }
        },
        14879: function (e, t, n) {
            n.d(t, {
                t: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(16723);

            function o() {
                let e = (0, r.useRef)(!1);
                return (0, a.e)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        16723: function (e, t, n) {
            n.d(t, {
                e: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(77896);
            let o = (e, t) => {
                a.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
            }
        },
        3855: function (e, t, n) {
            n.d(t, {
                E: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(16723);

            function o(e) {
                let t = (0, r.useRef)(e);
                return (0, a.e)((() => {
                    t.current = e
                }), [e]), t
            }
        },
        61595: function (e, t, n) {
            n.d(t, {
                L: function () {
                    return i
                }
            });
            var r = n(67294),
                a = n(81021),
                o = n(73781);

            function i(e) {
                let t = (0, o.z)(e),
                    n = (0, r.useRef)(!1);
                (0, r.useEffect)((() => (n.current = !1, () => {
                    n.current = !0, (0, a.Y)((() => {
                        n.current && t()
                    }))
                })), [t])
            }
        },
        43986: function (e, t, n) {
            n.d(t, {
                O: function () {
                    return u
                }
            });
            var r = n(67294),
                a = n(84575),
                o = n(3855);

            function i(e, t, n) {
                let a = (0, o.E)(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        a.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }), [e, n])
            }
            var l = n(7815);

            function u(e, t, n = !0) {
                let o = (0, r.useRef)(!1);

                function u(n, r) {
                    if (!o.current || n.defaultPrevented) return;
                    let i = r(n);
                    if (null === i || !i.getRootNode().contains(i)) return;
                    let l = function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e);
                    for (let e of l) {
                        if (null === e) continue;
                        let t = e instanceof HTMLElement ? e : e.current;
                        if (null != t && t.contains(i) || n.composed && n.composedPath().includes(t)) return
                    }
                    return !(0, a.sP)(i, a.tJ.Loose) && -1 !== i.tabIndex && n.preventDefault(), t(n, i)
                }(0, r.useEffect)((() => {
                    requestAnimationFrame((() => {
                        o.current = n
                    }))
                }), [n]);
                let s = (0, r.useRef)(null);
                i("mousedown", (e => {
                    var t, n;
                    o.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }), !0), i("click", (e => {
                    s.current && (u(e, (() => s.current)), s.current = null)
                }), !0), (0, l.s)("blur", (e => u(e, (() => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
            }
        },
        51074: function (e, t, n) {
            n.d(t, {
                i: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(15466);

            function o(...e) {
                return (0, r.useMemo)((() => (0, a.r)(...e)), [...e])
            }
        },
        14157: function (e, t, n) {
            n.d(t, {
                f: function () {
                    return i
                }
            });
            var r = n(67294),
                a = n(16723);

            function o(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0
            }

            function i(e, t) {
                let [n, i] = (0, r.useState)((() => o(e)));
                return (0, a.e)((() => {
                    i(o(e))
                }), [e.type, e.as]), (0, a.e)((() => {
                    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && i("button")
                }), [n, t]), n
            }
        },
        65958: function (e, t, n) {
            n.d(t, {
                v: function () {
                    return l
                }
            });
            var r = n(67294),
                a = n(46045),
                o = n(73781),
                i = n(51074);

            function l({
                defaultContainers: e = [],
                portals: t
            } = {}) {
                let n = (0, r.useRef)(null),
                    l = (0, i.i)(n),
                    u = (0, o.z)((() => {
                        var r;
                        let a = [];
                        for (let t of e) null !== t && (t instanceof HTMLElement ? a.push(t) : "current" in t && t.current instanceof HTMLElement && a.push(t.current));
                        if (null != t && t.current)
                            for (let e of t.current) a.push(e);
                        for (let e of null != (r = null == l ? void 0 : l.querySelectorAll("html > *, body > *")) ? r : []) e !== document.body && e !== document.head && e instanceof HTMLElement && "headlessui-portal-root" !== e.id && (e.contains(n.current) || a.some((t => e.contains(t))) || a.push(e));
                        return a
                    }));
                return {
                    resolveContainers: u,
                    contains: (0, o.z)((e => u().some((t => t.contains(e))))),
                    mainTreeNodeRef: n,
                    MainTreeNode: (0, r.useMemo)((() => function () {
                        return r.createElement(a._, {
                            features: a.A.Hidden,
                            ref: n
                        })
                    }), [n])
                }
            }
        },
        82180: function (e, t, n) {
            n.d(t, {
                H: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(77896);

            function o() {
                let [e, t] = (0, r.useState)(a.O.isHandoffComplete);
                return e && !1 === a.O.isHandoffComplete && t(!1), (0, r.useEffect)((() => {
                    !0 !== e && t(!0)
                }), [e]), (0, r.useEffect)((() => a.O.handoff()), []), e
            }
        },
        23784: function (e, t, n) {
            n.d(t, {
                T: function () {
                    return l
                },
                h: function () {
                    return i
                }
            });
            var r = n(67294),
                a = n(73781);
            let o = Symbol();

            function i(e, t = !0) {
                return Object.assign(e, {
                    [o]: t
                })
            }

            function l(...e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)((() => {
                    t.current = e
                }), [e]);
                let n = (0, a.z)((e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }));
                return e.every((e => null == e || (null == e ? void 0 : e[o]))) ? void 0 : n
            }
        },
        45662: function (e, t, n) {
            n.d(t, {
                N: function () {
                    return i
                },
                l: function () {
                    return l
                }
            });
            var r, a = n(67294),
                o = n(7815),
                i = ((r = i || {})[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r);

            function l() {
                let e = (0, a.useRef)(0);
                return (0, o.s)("keydown", (t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }), !0), e
            }
        },
        15257: function (e, t, n) {
            n.d(t, {
                x: function () {
                    return l
                }
            });
            var r = n(67294);
            let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

            function o(e) {
                var t, n;
                let r = null != (t = e.innerText) ? t : "",
                    o = e.cloneNode(!0);
                if (!(o instanceof HTMLElement)) return r;
                let i = !1;
                for (let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), i = !0;
                let l = i ? null != (n = o.innerText) ? n : "" : r;
                return a.test(l) && (l = l.replace(a, "")), l
            }
            var i = n(73781);

            function l(e) {
                let t = (0, r.useRef)(""),
                    n = (0, r.useRef)("");
                return (0, i.z)((() => {
                    let r = e.current;
                    if (!r) return "";
                    let a = r.innerText;
                    if (t.current === a) return n.current;
                    let i = function (e) {
                        let t = e.getAttribute("aria-label");
                        if ("string" == typeof t) return t.trim();
                        let n = e.getAttribute("aria-labelledby");
                        if (n) {
                            let e = n.split(" ").map((e => {
                                let t = document.getElementById(e);
                                if (t) {
                                    let e = t.getAttribute("aria-label");
                                    return "string" == typeof e ? e.trim() : o(t).trim()
                                }
                                return null
                            })).filter(Boolean);
                            if (e.length > 0) return e.join(", ")
                        }
                        return o(e).trim()
                    }(r).trim().toLowerCase();
                    return t.current = a, n.current = i, i
                }))
            }
        },
        40476: function (e, t, n) {
            n.d(t, {
                g: function () {
                    return o
                }
            });
            var r = n(67294);

            function a(e) {
                return [e.screenX, e.screenY]
            }

            function o() {
                let e = (0, r.useRef)([-1, -1]);
                return {
                    wasMoved(t) {
                        let n = a(t);
                        return (e.current[0] !== n[0] || e.current[1] !== n[1]) && (e.current = n, !0)
                    },
                    update(t) {
                        e.current = a(t)
                    }
                }
            }
        },
        31591: function (e, t, n) {
            n.d(t, {
                B: function () {
                    return i
                }
            });
            var r = n(67294),
                a = n(16723),
                o = n(15466);

            function i({
                container: e,
                accept: t,
                walk: n,
                enabled: i = !0
            }) {
                let l = (0, r.useRef)(t),
                    u = (0, r.useRef)(n);
                (0, r.useEffect)((() => {
                    l.current = t, u.current = n
                }), [t, n]), (0, a.e)((() => {
                    if (!e || !i) return;
                    let t = (0, o.r)(e);
                    if (!t) return;
                    let n = l.current,
                        r = u.current,
                        a = Object.assign((e => n(e)), {
                            acceptNode: n
                        }),
                        s = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1);
                    for (; s.nextNode();) r(s.currentNode)
                }), [e, i, l, u])
            }
        },
        96599: function (e, t, n) {
            n.d(t, {
                q: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(73781);

            function o(e, t) {
                let n = (0, r.useRef)([]),
                    o = (0, a.z)(e);
                (0, r.useEffect)((() => {
                    let e = [...n.current];
                    for (let [r, a] of t.entries())
                        if (n.current[r] !== a) {
                            let r = o(t, e);
                            return n.current = t, r
                        }
                }), [o, ...t])
            }
        },
        7815: function (e, t, n) {
            n.d(t, {
                s: function () {
                    return o
                }
            });
            var r = n(67294),
                a = n(3855);

            function o(e, t, n) {
                let o = (0, a.E)(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        o.current(e)
                    }
                    return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                }), [e, n])
            }
        },
        46045: function (e, t, n) {
            n.d(t, {
                A: function () {
                    return o
                },
                _: function () {
                    return i
                }
            });
            var r = n(12351);
            var a, o = ((a = o || {})[a.None = 1] = "None", a[a.Focusable = 2] = "Focusable", a[a.Hidden = 4] = "Hidden", a);
            let i = (0, r.yV)((function (e, t) {
                let {
                    features: n = 1,
                    ...a
                } = e, o = {
                    ref: t,
                    "aria-hidden": 2 == (2 & n) || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...4 == (4 & n) && 2 != (2 & n) && {
                            display: "none"
                        }
                    }
                };
                return (0, r.sY)({
                    ourProps: o,
                    theirProps: a,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            }))
        },
        16567: function (e, t, n) {
            n.d(t, {
                ZM: function () {
                    return i
                },
                oJ: function () {
                    return l
                },
                up: function () {
                    return u
                }
            });
            var r = n(67294);
            let a = (0, r.createContext)(null);
            a.displayName = "OpenClosedContext";
            var o, i = ((o = i || {})[o.Open = 1] = "Open", o[o.Closed = 2] = "Closed", o[o.Closing = 4] = "Closing", o[o.Opening = 8] = "Opening", o);

            function l() {
                return (0, r.useContext)(a)
            }

            function u({
                value: e,
                children: t
            }) {
                return r.createElement(a.Provider, {
                    value: e
                }, t)
            }
        },
        31438: function (e, t, n) {
            n.d(t, {
                O: function () {
                    return i
                },
                n: function () {
                    return o
                }
            });
            var r = n(67294);
            let a = (0, r.createContext)(!1);

            function o() {
                return (0, r.useContext)(a)
            }

            function i(e) {
                return r.createElement(a.Provider, {
                    value: e.force
                }, e.children)
            }
        },
        64103: function (e, t, n) {
            function r(e) {
                let t = e.parentElement,
                    n = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
                return (!r || ! function (e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }
            n.d(t, {
                P: function () {
                    return r
                }
            })
        },
        11497: function (e, t, n) {
            n.d(t, {
                T: function () {
                    return a
                },
                d: function () {
                    return o
                }
            });
            var r, a = ((r = a || {})[r.First = 0] = "First", r[r.Previous = 1] = "Previous", r[r.Next = 2] = "Next", r[r.Last = 3] = "Last", r[r.Specific = 4] = "Specific", r[r.Nothing = 5] = "Nothing", r);

            function o(e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                    a = null != r ? r : -1,
                    o = (() => {
                        switch (e.focus) {
                            case 0:
                                return n.findIndex((e => !t.resolveDisabled(e)));
                            case 1: {
                                let e = n.slice().reverse().findIndex(((e, n, r) => !(-1 !== a && r.length - n - 1 >= a) && !t.resolveDisabled(e)));
                                return -1 === e ? e : n.length - 1 - e
                            }
                            case 2:
                                return n.findIndex(((e, n) => !(n <= a) && !t.resolveDisabled(e)));
                            case 3: {
                                let e = n.slice().reverse().findIndex((e => !t.resolveDisabled(e)));
                                return -1 === e ? e : n.length - 1 - e
                            }
                            case 4:
                                return n.findIndex((n => t.resolveId(n) === e.id));
                            case 5:
                                return null;
                            default:
                                ! function (e) {
                                    throw new Error("Unexpected object: " + e)
                                }(e)
                        }
                    })();
                return -1 === o ? r : o
            }
        },
        44067: function (e, t, n) {
            function r(...e) {
                return e.filter(Boolean).join(" ")
            }
            n.d(t, {
                A: function () {
                    return r
                }
            })
        },
        9362: function (e, t, n) {
            n.d(t, {
                k: function () {
                    return a
                }
            });
            var r = n(81021);

            function a() {
                let e = [],
                    t = {
                        addEventListener(e, n, r, a) {
                            return e.addEventListener(n, r, a), t.add((() => e.removeEventListener(n, r, a)))
                        },
                        requestAnimationFrame(...e) {
                            let n = requestAnimationFrame(...e);
                            return t.add((() => cancelAnimationFrame(n)))
                        },
                        nextFrame(...e) {
                            return t.requestAnimationFrame((() => t.requestAnimationFrame(...e)))
                        },
                        setTimeout(...e) {
                            let n = setTimeout(...e);
                            return t.add((() => clearTimeout(n)))
                        },
                        microTask(...e) {
                            let n = {
                                current: !0
                            };
                            return (0, r.Y)((() => {
                                n.current && e[0]()
                            })), t.add((() => {
                                n.current = !1
                            }))
                        },
                        style(e, t, n) {
                            let r = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: n
                            }), this.add((() => {
                                Object.assign(e.style, {
                                    [t]: r
                                })
                            }))
                        },
                        group(e) {
                            let t = a();
                            return e(t), this.add((() => t.dispose()))
                        },
                        add(t) {
                            return e.push(t), () => {
                                let n = e.indexOf(t);
                                if (n >= 0)
                                    for (let t of e.splice(n, 1)) t()
                            }
                        },
                        dispose() {
                            for (let t of e.splice(0)) t()
                        }
                    };
                return t
            }
        },
        77896: function (e, t, n) {
            n.d(t, {
                O: function () {
                    return o
                }
            });
            var r = Object.defineProperty,
                a = (e, t, n) => (((e, t, n) => {
                    t in e ? r(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" != typeof t ? t + "" : t, n), n);
            let o = new class {
                constructor() {
                    a(this, "current", this.detect()), a(this, "handoffState", "pending"), a(this, "currentId", 0)
                }
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
            }
        },
        84575: function (e, t, n) {
            n.d(t, {
                C5: function () {
                    return h
                },
                EO: function () {
                    return x
                },
                GO: function () {
                    return m
                },
                TO: function () {
                    return c
                },
                fE: function () {
                    return f
                },
                jA: function () {
                    return k
                },
                sP: function () {
                    return v
                },
                tJ: function () {
                    return p
                },
                wI: function () {
                    return g
                },
                z2: function () {
                    return w
                }
            });
            var r = n(9362),
                a = n(32984),
                o = n(15466);
            let i = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var l, u, s, c = ((s = c || {})[s.First = 1] = "First", s[s.Previous = 2] = "Previous", s[s.Next = 4] = "Next", s[s.Last = 8] = "Last", s[s.WrapAround = 16] = "WrapAround", s[s.NoScroll = 32] = "NoScroll", s),
                f = ((u = f || {})[u.Error = 0] = "Error", u[u.Overflow = 1] = "Overflow", u[u.Success = 2] = "Success", u[u.Underflow = 3] = "Underflow", u),
                d = ((l = d || {})[l.Previous = -1] = "Previous", l[l.Next = 1] = "Next", l);

            function m(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(i)).sort(((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))))
            }
            var p = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(p || {});

            function v(e, t = 0) {
                var n;
                return e !== (null == (n = (0, o.r)(e)) ? void 0 : n.body) && (0, a.E)(t, {
                    0() {
                        return e.matches(i)
                    },
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(i)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function g(e) {
                let t = (0, o.r)(e);
                (0, r.k)().nextFrame((() => {
                    t && !v(t.activeElement, 0) && h(e)
                }))
            }
            var b = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(b || {});

            function h(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", (e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }), !0), document.addEventListener("click", (e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }), !0));
            let y = ["textarea", "input"].join(",");

            function w(e, t = (e => e)) {
                return e.slice().sort(((e, n) => {
                    let r = t(e),
                        a = t(n);
                    if (null === r || null === a) return 0;
                    let o = r.compareDocumentPosition(a);
                    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }))
            }

            function x(e, t) {
                return k(m(), t, {
                    relativeTo: e
                })
            }

            function k(e, t, {
                sorted: n = !0,
                relativeTo: r = null,
                skipElements: a = []
            } = {}) {
                let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    i = Array.isArray(e) ? n ? w(e) : e : m(e);
                a.length > 0 && i.length > 1 && (i = i.filter((e => !a.includes(e)))), r = null != r ? r : o.activeElement;
                let l, u = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    s = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, i.indexOf(r)) - 1;
                        if (4 & t) return Math.max(0, i.indexOf(r)) + 1;
                        if (8 & t) return i.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    c = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    f = 0,
                    d = i.length;
                do {
                    if (f >= d || f + d <= 0) return 0;
                    let e = s + f;
                    if (16 & t) e = (e + d) % d;
                    else {
                        if (e < 0) return 3;
                        if (e >= d) return 1
                    }
                    l = i[e], null == l || l.focus(c), f += u
                } while (l !== o.activeElement);
                return 6 & t && function (e) {
                    var t, n;
                    return null != (n = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, y)) && n
                }(l) && l.select(), 2
            }
        },
        32984: function (e, t, n) {
            function r(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(a, r), a
            }
            n.d(t, {
                E: function () {
                    return r
                }
            })
        },
        81021: function (e, t, n) {
            function r(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                    throw e
                }))))
            }
            n.d(t, {
                Y: function () {
                    return r
                }
            })
        },
        15466: function (e, t, n) {
            n.d(t, {
                r: function () {
                    return a
                }
            });
            var r = n(77896);

            function a(e) {
                return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
        },
        78657: function (e, t, n) {
            function r() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function a() {
                return r() || /Android/gi.test(window.navigator.userAgent)
            }
            n.d(t, {
                gn: function () {
                    return r
                },
                tq: function () {
                    return a
                }
            })
        },
        12351: function (e, t, n) {
            n.d(t, {
                AN: function () {
                    return u
                },
                l4: function () {
                    return s
                },
                oA: function () {
                    return p
                },
                sY: function () {
                    return c
                },
                yV: function () {
                    return m
                }
            });
            var r, a, o = n(67294),
                i = n(44067),
                l = n(32984),
                u = ((a = u || {})[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", a[a.Static = 2] = "Static", a),
                s = ((r = s || {})[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r);

            function c({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: a,
                visible: o = !0,
                name: i
            }) {
                let u = d(t, e);
                if (o) return f(u, n, r, i);
                let s = null != a ? a : 0;
                if (2 & s) {
                    let {
                        static: e = !1,
                        ...t
                    } = u;
                    if (e) return f(t, n, r, i)
                }
                if (1 & s) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = u;
                    return (0, l.E)(e ? 0 : 1, {
                        0() {
                            return null
                        },
                        1() {
                            return f({
                                ...t,
                                hidden: !0,
                                style: {
                                    display: "none"
                                }
                            }, n, r, i)
                        }
                    })
                }
                return f(u, n, r, i)
            }

            function f(e, t = {}, n, r) {
                let {
                    as: a = n,
                    children: l,
                    refName: u = "ref",
                    ...s
                } = v(e, ["unmount", "static"]), c = void 0 !== e.ref ? {
                    [u]: e.ref
                } : {}, f = "function" == typeof l ? l(t) : l;
                "className" in s && s.className && "function" == typeof s.className && (s.className = s.className(t));
                let m = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, a] of Object.entries(t)) "boolean" == typeof a && (e = !0), !0 === a && n.push(r);
                    e && (m["data-headlessui-state"] = n.join(" "))
                }
                if (a === o.Fragment && Object.keys(p(s)).length > 0) {
                    if (!(0, o.isValidElement)(f) || Array.isArray(f) && f.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
                    let e = f.props,
                        t = "function" == typeof (null == e ? void 0 : e.className) ? (...t) => (0, i.A)(null == e ? void 0 : e.className(...t), s.className) : (0, i.A)(null == e ? void 0 : e.className, s.className),
                        n = t ? {
                            className: t
                        } : {};
                    return (0, o.cloneElement)(f, Object.assign({}, d(f.props, p(v(s, ["ref"]))), m, c, function (...e) {
                        return {
                            ref: e.every((e => null == e)) ? void 0 : t => {
                                for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                            }
                        }
                    }(f.ref, c.ref), n))
                }
                return (0, o.createElement)(a, Object.assign({}, v(s, ["ref"]), a !== o.Fragment && c, a !== o.Fragment && m), f)
            }

            function d(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
                for (let e in n) Object.assign(t, {
                    [e](t, ...r) {
                        let a = n[e];
                        for (let e of a) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            e(t, ...r)
                        }
                    }
                });
                return t
            }

            function m(e) {
                var t;
                return Object.assign((0, o.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function p(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function v(e, t = []) {
                let n = Object.assign({}, e);
                for (let e of t) e in n && delete n[e];
                return n
            }
        },
        8137: function (e, t, n) {
            n.d(t, {
                F4: function () {
                    return b
                },
                cY: function () {
                    return h
                },
                iv: function () {
                    return m
                },
                zo: function () {
                    return y
                }
            });
            let r = {
                    data: ""
                },
                a = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
                    innerHTML: " ",
                    id: "_goober"
                })).firstChild : e || r,
                o = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
                i = /\/\*[^]*?\*\/|  +/g,
                l = /\n+/g,
                u = (e, t) => {
                    let n = "",
                        r = "",
                        a = "";
                    for (let o in e) {
                        let i = e[o];
                        "@" == o[0] ? "i" == o[1] ? n = o + " " + i + ";" : r += "f" == o[1] ? u(i, o) : o + "{" + u(i, "k" == o[1] ? "" : t) + "}" : "object" == typeof i ? r += u(i, t ? t.replace(/([^,])+/g, (e => o.replace(/(^:.*)|([^,])+/g, (t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)))) : o) : null != i && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), a += u.p ? u.p(o, i) : o + ":" + i + ";")
                    }
                    return n + (t && a ? t + "{" + a + "}" : a) + r
                },
                s = {},
                c = e => {
                    if ("object" == typeof e) {
                        let t = "";
                        for (let n in e) t += n + c(e[n]);
                        return t
                    }
                    return e
                },
                f = (e, t, n, r, a) => {
                    let f = c(e),
                        d = s[f] || (s[f] = (e => {
                            let t = 0,
                                n = 11;
                            for (; t < e.length;) n = 101 * n + e.charCodeAt(t++) >>> 0;
                            return "go" + n
                        })(f));
                    if (!s[d]) {
                        let t = f !== e ? e : (e => {
                            let t, n, r = [{}];
                            for (; t = o.exec(e.replace(i, ""));) t[4] ? r.shift() : t[3] ? (n = t[3].replace(l, " ").trim(), r.unshift(r[0][n] = r[0][n] || {})) : r[0][t[1]] = t[2].replace(l, " ").trim();
                            return r[0]
                        })(e);
                        s[d] = u(a ? {
                            ["@keyframes " + d]: t
                        } : t, n ? "" : "." + d)
                    }
                    let m = n && s.g ? s.g : null;
                    return n && (s.g = s[d]), ((e, t, n, r) => {
                        r ? t.data = t.data.replace(r, e) : -1 === t.data.indexOf(e) && (t.data = n ? e + t.data : t.data + e)
                    })(s[d], t, r, m), d
                },
                d = (e, t, n) => e.reduce(((e, r, a) => {
                    let o = t[a];
                    if (o && o.call) {
                        let e = o(n),
                            t = e && e.props && e.props.className || /^go/.test(e) && e;
                        o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : u(e, "") : !1 === e ? "" : e
                    }
                    return e + r + (null == o ? "" : o)
                }), "");

            function m(e) {
                let t = this || {},
                    n = e.call ? e(t.p) : e;
                return f(n.unshift ? n.raw ? d(n, [].slice.call(arguments, 1), t.p) : n.reduce(((e, n) => Object.assign(e, n && n.call ? n(t.p) : n)), {}) : n, a(t.target), t.g, t.o, t.k)
            }
            m.bind({
                g: 1
            });
            let p, v, g, b = m.bind({
                k: 1
            });

            function h(e, t, n, r) {
                u.p = t, p = e, v = n, g = r
            }

            function y(e, t) {
                let n = this || {};
                return function () {
                    let r = arguments;

                    function a(o, i) {
                        let l = Object.assign({}, o),
                            u = l.className || a.className;
                        n.p = Object.assign({
                            theme: v && v()
                        }, l), n.o = / *go\d+/.test(u), l.className = m.apply(n, r) + (u ? " " + u : ""), t && (l.ref = i);
                        let s = e;
                        return e[0] && (s = l.as || e, delete l.as), g && s[0] && g(l), p(s, l)
                    }
                    return t ? t(a) : a
                }
            }
        }
    }
]);