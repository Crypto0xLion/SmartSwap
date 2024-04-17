"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [5020], {
        86741: function (e, t, a) {
            var n = a(17857),
                l = a(67294);
            const r = (0, l.memo)((e => {
                let {
                    end: t,
                    prefix: a,
                    suffix: r
                } = e;
                return l.createElement(n.ZP, {
                    end: t,
                    preserveValue: !0,
                    separator: ",",
                    decimals: 2,
                    decimal: ".",
                    prefix: a || "",
                    suffix: r || ""
                })
            }));
            t.Z = r
        },
        64463: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return m
                }
            });
            var n = a(67294),
                l = a(70405),
                r = a(49089),
                s = a(89250),
                c = a.p + "/logo.png",
                o = a.p + "assets/images/og.webp",
                i = a(56126);
            var m = (0, n.memo)((e => {
                let {
                    title: t,
                    description: a,
                    canonical: m
                } = e;
                const u = (0, s.TH)(),
                    d = t ? "DeFi The Norm - SMART" ?.replace(" - ", ` - ${t} | `) : "DeFi The Norm - SMART";
                return (0, n.useEffect)((() => {
                    r.ZP.send({
                        hitType: "pageview",
                        page: u.pathname,
                        title: d
                    })
                }), [u]), n.createElement(l.ql, null, n.createElement("title", null, d), n.createElement("meta", {
                    name: "description",
                    content: a
                }), n.createElement("link", {
                    rel: "canonical",
                    href: m
                }), n.createElement("link", {
                    rel: "shortcut icon",
                    href: `${(0,i.ms)()}${c}`
                }), n.createElement("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), n.createElement("meta", {
                    name: "twitter:site",
                    content: "@Sentia"
                }), n.createElement("meta", {
                    name: "twitter:creator",
                    content: "@Sentia"
                }), n.createElement("meta", {
                    property: "og:site_name",
                    content: "Sentia",
                    lang: "en"
                }), n.createElement("meta", {
                    property: "og:title",
                    content: d,
                    lang: "en"
                }), n.createElement("meta", {
                    property: "og:url",
                    content: m
                }), n.createElement("meta", {
                    property: "og:type",
                    content: "website"
                }), n.createElement("meta", {
                    property: "og:description",
                    content: a,
                    lang: "en"
                }), n.createElement("meta", {
                    property: "og:image",
                    content: `${(0,i.ms)()}${o}`
                }))
            }))
        },
        27172: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return l
                }
            });
            var n = a(67294);

            function l(e) {
                let {
                    title: t,
                    subtitle: a
                } = e;
                return n.createElement("div", {
                    className: "relative -z-10 -mb-16 flex flex-1 flex-col items-center justify-center bg-pattern-1 bg-cover px-2 pb-24 pt-36 text-center font-styrene lg:px-0"
                }, n.createElement("div", {
                    className: "absolute inset-0 -z-10 bg-gradient-to-t from-dark to-dark/[.1]"
                }), n.createElement("h1", {
                    className: "title-0 mb-2"
                }, t), n.createElement("h2", {
                    className: "title-1"
                }, a))
            }
        },
        25988: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return s
                }
            });
            var n = a(67294),
                l = a(56126);
            const r = (0, n.forwardRef)(((e, t) => {
                let {
                    step: a,
                    min: r,
                    max: s,
                    disabled: c,
                    onChange: o,
                    onMouseUp: i
                } = e;
                const [m, u] = (0, n.useState)(0), d = e => {
                    o(e), u(parseFloat(e))
                };
                return (0, n.useImperativeHandle)(t, (() => ({
                    reset() {
                        u(0)
                    },
                    setPercent(e) {
                        u(e)
                    }
                }))), n.createElement(n.Fragment, null, n.createElement("div", {
                    className: "hidden cursor-pointer lg:block"
                }, n.createElement("input", {
                    type: "range",
                    min: r,
                    max: s,
                    value: m,
                    step: a,
                    onChange: e => {
                        const {
                            value: t
                        } = e.target;
                        o(t), u(t)
                    },
                    onMouseUp: () => {
                        i()
                    },
                    className: (0, l.AK)("slider w-full", c && "opacity-50"),
                    disabled: c
                })), n.createElement("div", {
                    className: "mt-2 hidden text-xs lg:flex"
                }, n.createElement("div", {
                    className: "mr-1 w-1/4 grow text-left"
                }, "0%"), n.createElement("div", {
                    className: "flex-none text-center"
                }, "25%"), n.createElement("div", {
                    className: "w-2/4 grow text-center"
                }, "50%"), n.createElement("div", {
                    className: "flex-none text-center"
                }, "75%"), n.createElement("div", {
                    className: "ml-1 w-1/4 grow text-right"
                }, "100%")), n.createElement("div", {
                    className: "mt-6 flex space-x-4 text-xs lg:text-sm"
                }, n.createElement("div", {
                    className: "flex-1"
                }, n.createElement("button", {
                    type: "button",
                    className: (0, l.AK)("btn-outline w-full", c && "opacity-50"),
                    onClick: () => d("25"),
                    disabled: c
                }, "25%")), n.createElement("div", {
                    className: "flex-1"
                }, n.createElement("button", {
                    type: "button",
                    className: (0, l.AK)("btn-outline w-full", c && "opacity-50"),
                    onClick: () => d("50"),
                    disabled: c
                }, "50%")), n.createElement("div", {
                    className: "flex-1"
                }, n.createElement("button", {
                    type: "button",
                    className: (0, l.AK)("btn-outline w-full", c && "opacity-50"),
                    onClick: () => d("75"),
                    disabled: c
                }, "75%")), n.createElement("div", {
                    className: "flex-1"
                }, n.createElement("button", {
                    type: "button",
                    className: (0, l.AK)("btn-outline w-full", c && "opacity-50"),
                    onClick: () => d("100"),
                    disabled: c
                }, "MAX"))))
            }));
            r.defaultProps = {
                step: 1,
                min: 0,
                max: 100
            };
            var s = r
        },
        48150: function (e, t, a) {
            var n = a(67294),
                l = a(77768),
                r = a(56126);
            t.Z = function (e) {
                let {
                    checked: t,
                    disabled: a,
                    onChange: s
                } = e;
                const c = (0, n.useCallback)((e => {
                    s ?.(e)
                }), [s]);
                return n.createElement(l.r, {
                    checked: t,
                    onChange: c,
                    disabled: a,
                    className: "relative inline-flex h-6 w-11 items-center rounded-full border border-gray-medium"
                }, n.createElement("span", {
                    className: (0, r.AK)(t ? "translate-x-6 bg-buy" : "translate-x-0.5 bg-white", "inline-block h-4 w-4 rounded-full transition")
                }))
            }
        },
        9642: function (e, t, a) {
            var n = a(67294);
            const l = (0, n.memo)((e => {
                let {
                    size: t = 30,
                    radius: a = 10,
                    duration: l = 60,
                    className: r,
                    onTerminate: s
                } = e;
                const c = 2 * a * Math.PI,
                    o = c / l,
                    i = (0, n.useRef)(0),
                    [m, u] = (0, n.useState)(0);
                return (0, n.useEffect)((() => {
                    const e = setInterval((() => {
                        l > 0 && (i.current <= c ? (u(c - i.current), i.current += o) : (i.current = o, u(c - i.current), s()))
                    }), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }), [l, s]), n.createElement("svg", {
                    width: t,
                    height: t,
                    viewBox: `0 0 ${t} ${t}`,
                    className: r
                }, n.createElement("circle", {
                    r: a,
                    cx: "50%",
                    cy: "50%",
                    fill: "transparent",
                    className: "stroke-white/[.25] stroke-[3px]"
                }), n.createElement("circle", {
                    r: a,
                    cx: "50%",
                    cy: "50%",
                    fill: "transparent",
                    strokeDasharray: c,
                    strokeDashoffset: m,
                    className: "origin-center -rotate-90 stroke-buy-500 stroke-[3px]"
                }))
            }));
            t.Z = l
        },
        67983: function (e, t, a) {
            a.r(t), a.d(t, {
                default: function () {
                    return G
                }
            });
            var n = a(67294),
                l = a(67814),
                r = a(59417),
                s = a(95998),
                c = a(38350),
                o = a(79655),
                i = a(64463),
                m = a(56126),
                u = a(27172),
                d = a(26141),
                p = a(47031),
                f = a(89250),
                g = a(6665),
                E = a(60263),
                b = a(46333),
                x = a(67748),
                h = a(94649),
                v = a(57333),
                N = a(58903),
                y = a(22852),
                k = a(78317),
                w = a(25988);

            function S(e) {
                let {
                    show: t,
                    campaign: a,
                    userCampaign: c,
                    mode: i,
                    onClose: u,
                    model: d
                } = e;
                const f = (0, s.I0)(),
                    b = (0, s.v9)((e => e.network)),
                    S = (0, s.v9)((e => e[d])),
                    C = (0, n.useRef)(null),
                    I = (0, n.useRef)(b ?.chain),
                    T = (0, h.TA)({
                        initialValues: {
                            amountLP: "",
                            amount0: "",
                            amount1: ""
                        },
                        onSubmit: e => {
                            const t = "STAKE" === i ? "deposit" : "withdraw";
                            f[d][t]({
                                campaign: a,
                                amount: (0, N.f)(e.amountLP)
                            }).then((() => {
                                u()
                            }))
                        },
                        validate: e => {
                            let {
                                amountLP: t,
                                amount0: a,
                                amount1: n
                            } = e;
                            const l = {};
                            if (t.trim().length) {
                                const e = (0, N.f)(t),
                                    a = "STAKE" === i ? c.balance : c.userInfo.amount.lp;
                                e > 0n ? e > a && (l.amountLP = "Balance too low") : l.amountLP = "Minimum amount required", C.current ?.setPercent(Math.round(parseFloat(t) / parseFloat((0, g.d)(a)) * 100))
                            } else l.amountLP = "Invalid amount", C.current ?.setPercent(0);
                            return l
                        }
                    }),
                    P = () => {
                        f[d].setProcessingTransaction(!1), u()
                    },
                    R = (0, n.useCallback)((e => {
                        if (parseFloat(e) > 0) {
                            const {
                                token0: t,
                                token1: n,
                                reserve0: l,
                                reserve1: r,
                                totalSupply: s
                            } = a, o = ("STAKE" === i ? c.balance : c.userInfo.amount.lp) * BigInt(e) / 100n, m = (0, g.d)(o), u = (0, E.b)(o * l / s, t.decimals), d = (0, E.b)(o * r / s, n.decimals);
                            T.setValues({
                                amountLP: m,
                                amount0: u,
                                amount1: d
                            }, !1)
                        } else T.setValues({
                            amountLP: "",
                            amount0: "",
                            amount1: ""
                        }, !1);
                        T.setErrors({})
                    }), [a, c, i]),
                    A = (0, n.useCallback)(((e, t) => {
                        if ("event" === t.source) {
                            const {
                                floatValue: t,
                                value: n
                            } = e, {
                                token0: l,
                                token1: r,
                                reserve0: s,
                                reserve1: c,
                                totalSupply: o
                            } = a, i = void 0 === t || Number.isNaN(t) ? "0" : n, m = (0, N.f)(i), u = (0, E.b)(m * s / o, l.decimals), d = (0, E.b)(m * c / o, r.decimals);
                            T.setFieldValue("amountLP", i), T.setFieldValue("amount0", u, !1), T.setFieldValue("amount1", d, !1)
                        }
                    }), [a]),
                    F = (0, n.useCallback)(((e, t) => {
                        if ("event" === t.source) {
                            const {
                                floatValue: t,
                                value: n
                            } = e, {
                                token0: l,
                                token1: r,
                                reserve0: s,
                                reserve1: c,
                                totalSupply: o
                            } = a, i = void 0 === t || Number.isNaN(t) ? "0" : n, m = (0, y.v)(i, l.decimals), u = o * k.CI / s * m, d = (0, E.b)(u / k.CI * c / o, r.decimals);
                            T.setFieldValue("amountLP", (0, g.d)(u / k.CI)), T.setFieldValue("amount0", i, !1), T.setFieldValue("amount1", d, !1)
                        }
                    }), [a]),
                    D = (0, n.useCallback)(((e, t) => {
                        if ("event" === t.source) {
                            const {
                                floatValue: t,
                                value: n
                            } = e, {
                                token0: l,
                                token1: r,
                                reserve0: s,
                                reserve1: c,
                                totalSupply: o
                            } = a, i = void 0 === t || Number.isNaN(t) ? "0" : n, m = (0, y.v)(i, r.decimals), u = o * k.CI / c * m, d = (0, E.b)(u / k.CI * s / o, l.decimals);
                            T.setFieldValue("amountLP", (0, g.d)(u / k.CI)), T.setFieldValue("amount0", d, !1), T.setFieldValue("amount1", i, !1)
                        }
                    }), [a]),
                    L = (0, n.useCallback)((() => {
                        f[d].approve({
                            campaign: a,
                            amount: k.iD
                        })
                    }), [a]),
                    K = (0, n.useCallback)((() => "STAKE" === i && 0n === c.balance), [i, c.balance]);
                return (0, n.useEffect)((() => {
                    t || (C.current ?.reset(), T.resetForm())
                }), [t, a]), (0, n.useEffect)((() => {
                    I.current.id !== b ?.chain.id ? P() : I.current = b ?.chain
                }), [b ?.chain]), n.createElement(p.u, {
                    appear: !0,
                    show: t,
                    as: n.Fragment
                }, n.createElement(x.V, {
                    as: "div",
                    className: "relative z-50",
                    onClose: P
                }, n.createElement(p.u.Child, {
                    as: n.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0"
                }, n.createElement("div", {
                    className: "fixed inset-0 bg-black/[0.5]"
                })), n.createElement("div", {
                    className: "fixed inset-0 overflow-y-auto"
                }, n.createElement("div", {
                    className: "flex min-h-full items-center justify-center p-4"
                }, n.createElement(p.u.Child, {
                    as: n.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95"
                }, n.createElement(x.V.Panel, {
                    className: "w-full max-w-md overflow-hidden rounded-sm border border-white/[.3] bg-green-dark p-6 align-middle"
                }, n.createElement(x.V.Title, {
                    as: "div",
                    className: "flex font-bold text-white/[.8]"
                }, n.createElement("h3", {
                    className: "grow"
                }, "STAKE" === i ? "Stake LP tokens" : "Unstake LP tokens"), n.createElement(l.G, {
                    role: "button",
                    icon: r.YIN,
                    size: "lg",
                    fixedWidth: !0,
                    onClick: P
                })), n.createElement("hr", {
                    className: "my-4 border-white/[0.1]"
                }), n.createElement("form", {
                    onSubmit: T.handleSubmit
                }, n.createElement("div", {
                    className: "flex flex-col space-y-4"
                }, n.createElement("div", {
                    className: "relative flex-1"
                }, n.createElement(v.h3, {
                    valueIsNumericString: !0,
                    thousandSeparator: ",",
                    placeholder: "0.00",
                    value: T.values.amountLP,
                    decimalScale: k.p8,
                    onValueChange: A,
                    allowNegative: !1,
                    className: (0, m.AK)("w-full rounded-sm border bg-transparent px-2 pb-5 pt-1 text-right text-base focus:bg-black/[.4]", T.errors.amountLP ? "border-sell" : "border-white/[.3]", K() && "opacity-50"),
                    disabled: K()
                }), n.createElement("div", {
                    className: "absolute inset-x-2 bottom-1 overflow-hidden text-right text-sm text-white/[.5]"
                }, "LP")), n.createElement("div", {
                    className: "flex flex-1 items-center space-x-2"
                }, n.createElement("div", {
                    className: "relative flex-1"
                }, n.createElement(v.h3, {
                    valueIsNumericString: !0,
                    thousandSeparator: ",",
                    placeholder: "0.00",
                    value: T.values.amount0,
                    decimalScale: a.token0.decimals,
                    onValueChange: F,
                    allowNegative: !1,
                    className: (0, m.AK)("w-full rounded-sm border bg-transparent px-2 pb-5 pt-1 text-right text-base focus:bg-black/[.4]", T.errors.amountLP ? "border-sell" : "border-white/[.3]", K() && "opacity-50"),
                    disabled: K()
                }), n.createElement("div", {
                    className: "absolute inset-x-2 bottom-1 overflow-hidden text-right text-xs text-white/[.5]"
                }, a.token0.symbol)), n.createElement("div", {
                    className: "relative flex-1"
                }, n.createElement(v.h3, {
                    valueIsNumericString: !0,
                    thousandSeparator: ",",
                    placeholder: "0.00",
                    value: T.values.amount1,
                    decimalScale: a.token1.decimals,
                    onValueChange: D,
                    allowNegative: !1,
                    className: (0, m.AK)("w-full rounded-sm border bg-transparent px-2 pb-5 pt-1 text-right text-base focus:bg-black/[.4]", T.errors.amountLP ? "border-sell" : "border-white/[.3]", K() && "opacity-50"),
                    disabled: K()
                }), n.createElement("div", {
                    className: "absolute inset-x-2 bottom-1 overflow-hidden text-right text-xs text-white/[.5]"
                }, a.token1.symbol)))), n.createElement("div", {
                    className: "mt-6 text-right text-sm"
                }, "Enter your amount of ", a.token0.symbol, "-", a.token1.symbol, " LP", n.createElement("br", null), "STAKE" === i && n.createElement("span", {
                    className: (0, m.AK)(0n === c.balance && "text-sell")
                }, "Balance ", (0, g.d)(c.balance)), "UNSTAKE" === i && n.createElement("span", null, "Staked ", (0, g.d)(c.userInfo.amount.lp))), n.createElement("div", {
                    className: "mt-4"
                }, n.createElement(w.Z, {
                    disabled: K(),
                    onChange: R,
                    onMouseUp: () => {},
                    ref: C
                })), n.createElement("div", {
                    className: "mt-4 flex items-center space-x-1 text-xs lg:text-sm"
                }, n.createElement(l.G, {
                    fixedWidth: !0,
                    icon: r.sqG
                }), n.createElement("span", null, "Adding or withdrawing liquidity will auto-harvest.")), n.createElement("div", {
                    className: "mt-4 flex space-x-2"
                }, n.createElement("button", {
                    type: "button",
                    className: "btn-outline flex-1 border-sell py-4 text-sell hover:border-dark hover:text-dark",
                    onClick: P
                }, "Cancel"), "STAKE" === i && c.allowance < (0, N.f)(T.values.amountLP.length ? T.values.amountLP : "0") ? n.createElement("button", {
                    type: "button",
                    className: (0, m.AK)("btn-outline flex-1 border-blue-400 py-4 text-blue-400 hover:border-dark hover:text-dark", S ?.processingTransaction && "opacity-50"),
                    onClick: L,
                    disabled: S ?.processingTransaction
                }, S ?.processingTransaction ? n.createElement(l.G, {
                    spin: !0,
                    icon: r.IJ7
                }) : n.createElement(n.Fragment, null, "Approve First")) : n.createElement("button", {
                    type: "submit",
                    className: (0, m.AK)("flex-1 py-4", K() ? "btn-disable" : "btn-outline", S ?.processingTransaction && "opacity-50"),
                    disabled: K() || S ?.processingTransaction
                }, S ?.processingTransaction ? n.createElement(l.G, {
                    spin: !0,
                    icon: r.IJ7
                }) : "Confirm")), "STAKE" === i && n.createElement("div", {
                    className: "mt-6 text-center"
                }, n.createElement(o.rU, {
                    to: `/liquidity/add?chainId=${b?.chain.id}&tokenA=${a.token0.address}&tokenB=${a.token1.address}`,
                    className: "underline-offset-2 hover:underline"
                }, "Get ", a.token0.symbol, "-", a.token1.symbol, " LP")))))))))
            }
            var C = a(11700),
                I = a(86741),
                T = a(6303);

            function P(e) {
                let {
                    campaign: t,
                    model: a,
                    defaultOpen: i,
                    userCampaign: u
                } = e;
                const x = (0, s.I0)(),
                    h = (0, s.v9)((e => e.network)),
                    v = (0, n.useId)(),
                    N = (0, f.s0)(),
                    y = (0, c.mA)(),
                    {
                        openConnectModal: k
                    } = (0, b.We)(),
                    [w, P] = (0, n.useState)({
                        show: !1,
                        mode: "STAKE"
                    }),
                    R = (0, n.useCallback)((() => {
                        P({
                            show: !0,
                            mode: "STAKE"
                        })
                    }), []),
                    A = (0, n.useCallback)((() => {
                        P({
                            show: !0,
                            mode: "UNSTAKE"
                        })
                    }), []),
                    F = (0, n.useCallback)((() => {
                        P({
                            ...w,
                            show: !1
                        })
                    }), [w]),
                    D = (0, n.useCallback)((() => {
                        x[a].harvest({
                            campaign: t
                        })
                    }), [t]),
                    L = (0, n.useCallback)((() => {
                        const e = `/farming?chainId=${h?.chain.id}&open=${t.slug}`;
                        N(e), navigator.clipboard.writeText(`${(0,m.ms)()}${e}`)
                    }), [t, h ?.chain]);
                return n.createElement(n.Fragment, null, n.createElement(T.Z, {
                    id: `tooltip-apr-${v}`,
                    text: n.createElement("table", {
                        className: "table table-fixed border-collapse"
                    }, n.createElement("tbody", null, n.createElement("tr", null, n.createElement("th", {
                        className: "pr-1 text-left"
                    }, "Farming"), n.createElement("td", {
                        className: "pl-1 text-right"
                    }, (0, m.bF)(parseFloat((0, g.d)(t.apr || 0n))), "%")), n.createElement("tr", null, n.createElement("th", {
                        className: "pr-1 text-left"
                    }, "Fee LP"), n.createElement("td", {
                        className: "pl-1 text-right"
                    }, (0, m.bF)(parseFloat((0, g.d)(t.aprLP || 0n))), "%"))))
                }), n.createElement(T.Z, {
                    id: `tooltip-harvest-auto-${v}`,
                    text: "Adding or withdrawing liquidity will auto-harvest."
                }), n.createElement(T.Z, {
                    id: `tooltip-end-date-${v}`,
                    text: `Ends: ${t.endDate}`
                }), n.createElement(d.p, {
                    defaultOpen: i,
                    as: "div",
                    className: "relative space-y-2 overflow-hidden border-b border-white/[.1]"
                }, (e => {
                    let {
                        open: s
                    } = e;
                    return n.createElement(n.Fragment, null, n.createElement(d.p.Button, {
                        as: "div",
                        className: "relative cursor-pointer py-4"
                    }, t.paused && n.createElement("span", {
                        className: "absolute -top-0 right-0 rounded-b-sm bg-orange-500 px-2 text-xs text-dark"
                    }, "PAUSED"), t.deprecated && n.createElement("span", {
                        className: "absolute -top-0 right-0 rounded-b-sm bg-sell px-2 text-xs text-dark"
                    }, "FINISHED"), n.createElement("div", {
                        className: "flex h-12 items-center space-x-3 lg:space-x-4"
                    }, n.createElement("div", {
                        className: "flex flex-1 flex-col items-stretch lg:flex-row lg:items-center lg:space-x-1"
                    }, n.createElement("div", null, n.createElement("img", {
                        src: t[t.tokenA].icon,
                        alt: t[t.tokenA].name,
                        className: "z-0 inline h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                    }), n.createElement("img", {
                        src: t[t.tokenB].icon,
                        alt: t[t.tokenB].name,
                        className: "z-10 -ml-2.5 inline h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                    })), n.createElement("div", {
                        className: "text-xs lg:text-base"
                    }, (t[t.tokenA].symbol.toLowerCase() === "sentia" ? "SMART" :t[t.tokenA].symbol), "-", t[t.tokenB].symbol)), n.createElement("div", {
                        className: "flex-1"
                    }, n.createElement("div", {
                        className: "hidden items-center space-x-1 text-xs lg:flex lg:text-base"
                    }, n.createElement("div", {
                        className: "relative flex-none"
                    }, u && u.userInfo.amount.lp > 0n && n.createElement("img", {
                        src: C,
                        alt: "SMART token",
                        className: "custom-animate-ping absolute h-3 w-3 lg:h-4 lg:w-4"
                    }), n.createElement("img", {
                        src: C,
                        alt: "SMART token",
                        className: "h-3 w-3 lg:h-4 lg:w-4"
                    })), y.address && u ? n.createElement("div", {
                        className: "flex-1"
                    }, n.createElement(I.Z, {
                        end: parseFloat((0, g.d)(u.pendingRewards.sdex))
                    })) : n.createElement("div", {
                        className: "flex-1"
                    }, "--")), y.address && u && u ?.pendingRewards.sdex > 0n ? n.createElement("div", {
                        className: "text-xs lg:text-sm"
                    }, n.createElement(I.Z, {
                        end: parseFloat((0, g.d)(u.pendingRewards.usd)),
                        prefix: "$"
                    })) : n.createElement("div", {
                        className: "lg:hidden"
                    }, "--")), n.createElement("div", {
                        className: "flex-1 text-xs lg:text-base"
                    }, void 0 !== t.apr && void 0 !== t.aprLP ? n.createElement("div", {
                        className: "relative"
                    }, n.createElement(l.G, {
                        "data-tooltip-id": `tooltip-apr-${v}`,
                        className: "absolute -left-3.5 top-0.5 lg:-left-5 lg:top-1",
                        icon: r.sqG
                    }), n.createElement(I.Z, {
                        end: parseFloat((0, g.d)(t.apr + t.aprLP)),
                        suffix: " %"
                    })) : n.createElement("div", {
                        className: "h-4 w-24 animate-pulse rounded-sm bg-white/[.3] lg:h-6"
                    })), n.createElement("div", {
                        className: "hidden flex-1 lg:block"
                    }, void 0 !== t.tvl ? n.createElement(I.Z, {
                        end: parseFloat((0, g.d)(t.tvl)),
                        prefix: "$"
                    }) : n.createElement("div", {
                        className: "h-6 w-24 animate-pulse rounded-sm bg-white/[.3]"
                    })), n.createElement("div", {
                        className: "hidden flex-1 lg:block"
                    }, "farmingSponsor" === a ? n.createElement("div", {
                        className: "relative"
                    }, n.createElement(l.G, {
                        "data-tooltip-id": `tooltip-end-date-${v}`,
                        className: "absolute -left-3.5 top-0.5 lg:-left-5 lg:top-1",
                        icon: r.sqG
                    }), n.createElement("div", {
                        className: "flex items-center space-x-1"
                    }, n.createElement("span", {
                        className: "shrink"
                    }, (0, m.Fc)(t.rewardsTotal || 0, 2, 2)), n.createElement("img", {
                        src: C,
                        alt: "SMART token",
                        className: "h-4 w-4 shrink"
                    }))) : n.createElement("span", null, t.multiplier, "x")), n.createElement(l.G, {
                        fixedWidth: !0,
                        className: (0, m.AK)("shrink text-buy transition-transform", s && "rotate-180"),
                        icon: r.ptq
                    }))), n.createElement(p.u, {
                        appear: !0,
                        show: s,
                        enter: "ease-in duration-500 lg:duration-300",
                        enterFrom: "opacity-0 max-h-0",
                        enterTo: "opacity-100 max-h-[37rem] lg:max-h-[8rem]",
                        leave: "ease-out duration-500 lg:duration-300",
                        leaveFrom: "opacity-100 max-h-[37rem] lg:max-h-[8rem]",
                        leaveTo: "opacity-0 max-h-0"
                    }, n.createElement(d.p.Panel, {
                        as: "div",
                        static: !0,
                        className: "flex flex-col-reverse items-stretch space-y-4 space-y-reverse px-0.5 pb-6 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0"
                    }, n.createElement("div", {
                        className: "flex flex-col space-y-2 text-xs lg:flex-row lg:space-x-1 lg:space-y-0 lg:text-sm"
                    }, n.createElement("div", {
                        className: "flex flex-1 flex-col lg:hidden"
                    }, n.createElement("span", {
                        className: "text-[0.75rem] text-white/[.3]"
                    }, "TOTAL STAKED"), n.createElement("div", {
                        className: "pb-1.5 pt-0.5 text-sm"
                    }, void 0 !== t.tvl ? (0, m.cH)(parseFloat((0, g.d)(t.tvl))) : n.createElement("div", {
                        className: "my-0.5 h-4 w-24 animate-pulse rounded-sm bg-white/[.3]"
                    })), "farmingSponsor" === a ? n.createElement(n.Fragment, null, n.createElement("span", {
                        className: "text-[0.75rem] text-white/[.3]"
                    }, "REWARDS"), n.createElement("div", {
                        className: "flex items-center space-x-1 pt-0.5"
                    }, n.createElement("span", {
                        className: "shrink text-sm"
                    }, (0, m.Fc)(t.rewardsTotal || 0, 2, 2)), n.createElement("img", {
                        src: C,
                        alt: "SMART token",
                        className: "h-3 w-3 shrink"
                    })), n.createElement("span", {
                        className: "pt-0.5 text-sm"
                    }, "Ends: ", t.endDate)) : n.createElement(n.Fragment, null, n.createElement("span", {
                        className: "text-[0.75rem] text-white/[.3]"
                    }, "MULTIPLIER"), n.createElement("span", {
                        className: "pt-0.5 text-sm"
                    }, t.multiplier, "x"))), n.createElement("div", {
                        className: "flex flex-1 flex-col items-stretch space-y-2"
                    }, n.createElement(o.rU, {
                        to: `/liquidity/add?chainId=${h?.chain.id}&tokenA=${t.token0.address}&tokenB=${t.token1.address}`,
                        className: "btn inline-flex shrink items-center justify-center space-x-2"
                    }, n.createElement("span", null, "Preview IL/IG and Provide Liquidity to Farm"), n.createElement(l.G, {
                        fixedWidth: !0,
                        className: "-rotate-45",
                        icon: r.eFW
                    })), n.createElement("div", {
                        className: "flex items-center space-x-3"
                    }, n.createElement("button", {
                        type: "button",
                        className: "btn-outline flex flex-1 items-center justify-center space-x-1",
                        onClick: L
                    }, n.createElement("span", null, "Copy link"), n.createElement(l.G, {
                        fixedWidth: !0,
                        icon: r.kZ_
                    }))))), n.createElement("div", {
                        className: "flex flex-1 flex-col items-stretch space-x-0 space-y-4 rounded-sm border border-white/[.3] bg-white/[.1] p-4 lg:flex-row lg:items-center lg:justify-between lg:space-x-6 lg:space-y-0"
                    }, n.createElement("div", {
                        className: "space-y-2 text-sm"
                    }, n.createElement("div", {
                        className: "flex items-center space-x-1"
                    }, n.createElement("span", null, "Pending Rewards"), n.createElement(l.G, {
                        "data-tooltip-id": `tooltip-harvest-auto-${v}`,
                        fixedWidth: !0,
                        icon: r.sqG,
                        size: "sm"
                    })), n.createElement("div", null, u && u.pendingRewards.sdex > 0n ? n.createElement(n.Fragment, null, (0, m.cH)(parseFloat((0, g.d)(u.pendingRewards.usd)), 4), n.createElement("div", {
                        className: "text-sm"
                    }, (0, m.bF)(parseFloat((0, g.d)(u.pendingRewards.sdex))), " SMART")) : "--")), n.createElement("button", {
                        type: "button",
                        className: (0, m.AK)(u && u.pendingRewards.sdex > 0n ? "btn px-4" : "btn-disable px-4"),
                        onClick: D,
                        disabled: u && !(u.pendingRewards.sdex > 0n)
                    }, "Harvest")), n.createElement("div", {
                        className: "flex flex-1 flex-col items-stretch space-x-0 space-y-4 rounded-sm border border-white/[.3] bg-white/[.1] p-4 lg:flex-row lg:items-center lg:justify-between lg:space-x-6 lg:space-y-0"
                    }, n.createElement("div", {
                        className: "space-y-2 text-sm"
                    }, n.createElement("div", null, "Staked"), n.createElement("div", null, u && u.userInfo.amount.lp > 0n && t.totalSupply > 0n ? n.createElement(n.Fragment, null, (0, m.cH)(parseFloat((0, g.d)(u.userInfo.amount.usd)), 4), n.createElement("div", {
                        className: "flex items-center space-x-1"
                    }, n.createElement("span", null, (0, m.bF)(parseFloat((0, E.b)(u.userInfo.amount.lp * t.reserve0 / t.totalSupply, t.token0.decimals))), " ", t.token0.symbol), n.createElement(l.G, {
                        icon: r.KtF,
                        size: "xs"
                    }), n.createElement("span", null, (0, m.bF)(parseFloat((0, E.b)(u.userInfo.amount.lp * t.reserve1 / t.totalSupply, t.token1.decimals))), " ", t.token1.symbol))) : "--")), y.address ? n.createElement("div", null, 0n === u ?.userInfo.amount.lp ? n.createElement("button", {
                        type: "button",
                        className: (0, m.AK)(t.deprecated || t.migrateId ? "btn-disable px-4" : "btn px-4"),
                        onClick: R,
                        disabled: t.deprecated || !!t.migrateId
                    }, "Stake LP") : n.createElement("div", {
                        className: "flex items-center space-x-4"
                    }, t.migrateId && n.createElement(o.rU, {
                        to: `/farming-migration?id=${t.migrateId}&idV1=${t.id}`,
                        className: "btn bg-buy px-4"
                    }, "Migrate"), n.createElement("button", {
                        type: "button",
                        className: "btn bg-sell p-1.5 hover:bg-white",
                        onClick: A
                    }, n.createElement(l.G, {
                        fixedWidth: !0,
                        icon: r.Kl4
                    })), n.createElement("button", {
                        type: "button",
                        className: (0, m.AK)("btn p-1.5", (t.deprecated || !!t.migrateId) && "opacity-50"),
                        onClick: R,
                        disabled: t.deprecated || !!t.migrateId
                    }, n.createElement(l.G, {
                        fixedWidth: !0,
                        icon: r.XSk
                    })))) : n.createElement("button", {
                        type: "button",
                        className: "btn px-4",
                        onClick: k
                    }, "Connect")))))
                })), u && n.createElement(S, {
                    show: w.show,
                    mode: w.mode,
                    campaign: t,
                    userCampaign: u,
                    onClose: F,
                    model: a
                }))
            }
            var R = a(80981);
            var A = (0, n.forwardRef)(((e, t) => {
                    let {
                        title: a,
                        onSort: s
                    } = e;
                    const [c, o] = (0, n.useState)(R.ER.NONE), i = (0, n.useCallback)((() => {
                        let e;
                        e = c === R.ER.NONE ? R.ER.ASC : c === R.ER.ASC ? R.ER.DESC : R.ER.NONE, o(e), s && s(e)
                    }), [c, s]), m = (0, n.useCallback)((() => {
                        i()
                    }), [i]);
                    return (0, n.useImperativeHandle)(t, (() => ({
                        unSort() {
                            o(R.ER.NONE)
                        }
                    }))), n.createElement("div", {
                        ref: t,
                        className: "flex items-center space-x-1",
                        role: "button",
                        onClick: m
                    }, n.createElement("div", null, a), c === R.ER.ASC && n.createElement(l.G, {
                        icon: r.FPD,
                        className: "text-buy"
                    }), c === R.ER.DESC && n.createElement(l.G, {
                        icon: r.r5q,
                        className: "text-buy"
                    }))
                })),
                F = a(9642);

            function D(e) {
                let {
                    model: t,
                    onSort: a,
                    onTimerLoaderTerminate: l,
                    className: r
                } = e;
                const s = (0, n.useRef)(null),
                    c = (0, n.useRef)(null),
                    o = (0, n.useRef)(null),
                    i = (0, n.useRef)(null),
                    u = (0, n.useRef)(null),
                    d = (0, n.useRef)(null),
                    p = (0, n.useCallback)((e => {
                        c.current ?.unSort(), o.current ?.unSort(), i.current ?.unSort(), u.current ?.unSort(), a({
                            field: "farm",
                            sortType: e
                        })
                    }), [a]),
                    f = (0, n.useCallback)((e => {
                        s.current ?.unSort(), o.current ?.unSort(), i.current ?.unSort(), u.current ?.unSort(), d.current ?.unSort(), a({
                            field: "pendingRewards",
                            sortType: e
                        })
                    }), [a]),
                    g = (0, n.useCallback)((e => {
                        s.current ?.unSort(), c.current ?.unSort(), i.current ?.unSort(), u.current ?.unSort(), d.current ?.unSort(), a({
                            field: "apr",
                            sortType: e
                        })
                    }), [a]),
                    E = (0, n.useCallback)((e => {
                        s.current ?.unSort(), c.current ?.unSort(), o.current ?.unSort(), u.current ?.unSort(), d.current ?.unSort(), a({
                            field: "tvl",
                            sortType: e
                        })
                    }), [a]),
                    b = (0, n.useCallback)((e => {
                        s.current ?.unSort(), c.current ?.unSort(), o.current ?.unSort(), i.current ?.unSort(), d.current ?.unSort(), a({
                            field: "multiplier",
                            sortType: e
                        })
                    }), [a]),
                    x = (0, n.useCallback)((e => {
                        s.current ?.unSort(), c.current ?.unSort(), o.current ?.unSort(), i.current ?.unSort(), u.current ?.unSort(), a({
                            field: "rewards",
                            sortType: e
                        })
                    }), [a]);
                return n.createElement("div", {
                    className: (0, m.AK)(r, "border-b border-white/[.1] py-1 text-xs")
                }, n.createElement("div", {
                    className: "flex items-center space-x-3 lg:space-x-4"
                }, n.createElement("div", {
                    className: "flex-1 uppercase"
                }, n.createElement(A, {
                    title: "Farm",
                    onSort: p,
                    ref: s
                })), n.createElement("div", {
                    className: "flex-1 uppercase"
                }, n.createElement(A, {
                    title: "Pending Rewards",
                    onSort: f,
                    ref: c
                })), n.createElement("div", {
                    className: "flex-1 uppercase"
                }, n.createElement(A, {
                    title: "ROI (APR)",
                    onSort: g,
                    ref: o
                })), n.createElement("div", {
                    className: "hidden flex-1 uppercase lg:block"
                }, n.createElement(A, {
                    title: "TVL",
                    onSort: E,
                    ref: i
                })), "farmingSponsor" === t ? n.createElement("div", {
                    className: "hidden flex-1 uppercase lg:block"
                }, n.createElement(A, {
                    title: "Rewards",
                    onSort: x,
                    ref: d
                })) : n.createElement("div", {
                    className: "hidden flex-1 uppercase lg:block"
                }, n.createElement(A, {
                    title: "Multiplier",
                    onSort: b,
                    ref: u
                })), n.createElement("div", {
                    className: "w-[1rem] shrink"
                }, n.createElement(T.Z, {
                    id: "tooltip-farming-timer",
                    place: "top",
                    text: "Displayed data will auto-refresh after 60 seconds."
                }), n.createElement("div", {
                    "data-tooltip-id": "tooltip-farming-timer",
                    className: "-mx-2"
                }, n.createElement(F.Z, {
                    onTerminate: l
                })))))
            }

            function L(e) {
                let {
                    model: t,
                    querySearch: a,
                    filters: i
                } = e;
                const u = (0, s.I0)(),
                    d = (0, s.v9)((e => e.network)),
                    p = (0, s.v9)((e => e[t])),
                    [f] = (0, o.lr)(),
                    {
                        address: g
                    } = (0, c.mA)(),
                    [E, b] = (0, n.useState)(p ?.campaigns[d ?.chain.sdId]),
                    x = (0, n.useRef)({
                        field: "tvl",
                        sortType: R.ER.ASC
                    }),
                    h = (0, n.useCallback)((e => {
                        const n = new RegExp(a.trim(), "i"),
                            {
                                chain: l
                            } = d;
                        if (!l) return;
                        const {
                            sdId: r,
                            Staking: s,
                            StakingV1: c
                        } = l, o = p ?.campaigns[r].filter((e => "farmingSponsor" === t || !s && !c || 0 !== e.id)), m = p ?.userCampaigns[r];
                        let u = o.filter((e => !(!i.paused && e.paused || !i.deprecated && e.deprecated))).filter((e => {
                            let t = n.test(e.token0.symbol) || n.test(e.token1.symbol) || n.test(e.token0.name) || n.test(e.token1.name);
                            if (i.staked && m) {
                                const a = m.find((t => t.campaignId === e.id));
                                t = t && !!(a && a.userInfo.amount.lp > 0n)
                            }
                            return t
                        }));
                        "farm" === e.field ? u = e.sortType === R.ER.ASC ? u.sort(((e, t) => {
                            const a = e.token0.symbol,
                                n = t.token1.symbol;
                            return a > n ? -1 : n > a ? 1 : 0
                        })) : e.sortType === R.ER.DESC ? u.sort(((e, t) => {
                            const a = e.token0.symbol,
                                n = t.token1.symbol;
                            return a > n ? 1 : n > a ? -1 : 0
                        })) : u.sort(((e, t) => t.multiplier - e.multiplier)) : "pendingRewards" === e.field ? u = e.sortType === R.ER.ASC ? u.sort(((e, t) => {
                            const a = m.find((t => t.campaignId === e.id)) ?.pendingRewards.sdex,
                                n = m.find((e => e.campaignId === t.id)) ?.pendingRewards.sdex;
                            return a && a > (n || 0n) ? -1 : n && n > (a || 0n) ? 1 : 0
                        })) : e.sortType === R.ER.DESC ? u.sort(((e, t) => {
                            const a = m.find((t => t.campaignId === e.id)) ?.pendingRewards.sdex,
                                n = m.find((e => e.campaignId === t.id)) ?.pendingRewards.sdex;
                            return a && a > (n || 0n) ? 1 : n && n > (a || 0n) ? -1 : 0
                        })) : u.sort(((e, t) => t.multiplier - e.multiplier)) : "apr" === e.field ? u = e.sortType === R.ER.ASC ? u.sort(((e, t) => Number(e.apr) - Number(t.apr))) : e.sortType === R.ER.DESC ? u.sort(((e, t) => Number(t.apr) - Number(e.apr))) : u.sort(((e, t) => t.multiplier - e.multiplier)) : "multiplier" === e.field ? u = e.sortType === R.ER.ASC ? u.sort(((e, t) => e.multiplier - t.multiplier)) : u.sort(((e, t) => t.multiplier - e.multiplier)) : "tvl" === e.field && (u = e.sortType === R.ER.ASC ? u.sort(((e, t) => {
                            const a = e.tvl,
                                n = t.tvl;
                            return a && a > (n || 0n) ? -1 : n && n > (a || 0n) ? 1 : 0
                        })) : e.sortType === R.ER.DESC ? u.sort(((e, t) => {
                            const a = e.tvl,
                                n = t.tvl;
                            return a && a > (n || 0n) ? 1 : n && n > (a || 0n) ? -1 : 0
                        })) : u.sort(((e, t) => t.multiplier - e.multiplier))), b([...u]), x.current = e
                    }), [d ?.chain, p ?.campaigns, p ?.userCampaigns, a, i]),
                    v = (0, n.useCallback)((async () => {
                        u[t].harvestAll(void 0)
                    }), []),
                    N = (0, n.useCallback)((async () => {
                        await u[t].getCampaigns({}), g ? await u[t].getUserCampaigns(void 0) : u[t].resetUserCampaigns(void 0)
                    }), [g]);
                return (0, n.useEffect)((() => {
                    h(x.current)
                }), [p ?.campaigns, p ?.userCampaigns, i, a]), (0, n.useEffect)((() => {
                    (async () => {
                        await N()
                    })()
                }), [d ?.chain, g]), n.createElement("div", {
                    className: "relative"
                }, n.createElement(T.Z, {
                    place: "top",
                    id: "tooltip-farming-sponsor",
                    className: "w-64",
                    text: "This is a sponsored campaign. The featured project has paid for the rewards that are distributed to users."
                }), n.createElement("div", {
                    className: (0, m.AK)("farming" === t && "border-white/[.3]", "farmingSponsor" === t && "border-blue-400", "farmingV1" === t && "border-sell", "relative rounded-sm border bg-green-dark p-4 lg:p-8")
                }, "farmingSponsor" === t && n.createElement("span", {
                    className: "absolute right-4 top-0 flex items-center space-x-1 bg-blue-400 px-2 text-[0.6rem] lg:right-8 lg:text-xs"
                }, n.createElement("span", null, "SPONSORED"), n.createElement(l.G, {
                    "data-tooltip-id": "tooltip-farming-sponsor",
                    icon: r.sqG,
                    fixedWidth: !0
                })), "farmingV1" === t && n.createElement("span", {
                    className: "absolute right-4 top-0 bg-sell px-2 text-[0.6rem] lg:right-8 lg:text-xs"
                }, "OLD CAMPAIGNS"), n.createElement(D, {
                    model: t,
                    onSort: h,
                    onTimerLoaderTerminate: N
                }), !E.length && n.createElement("div", {
                    className: "mt-4 text-center text-2xl text-white/[.5]"
                }, "(No results found)"), E.map((e => n.createElement(P, {
                    key: e.id,
                    defaultOpen: f.get("open") === e.slug,
                    campaign: e,
                    userCampaign: p ?.userCampaigns[d ?.chain.sdId] ?.find((t => t.campaignId === e.id)),
                    model: t
                }))), p ?.userCampaigns[d ?.chain.sdId] ?.filter((e => !(0n === e.pendingRewards.sdex))).length > 0 && n.createElement("div", {
                    className: "mt-4 flex lg:justify-end"
                }, n.createElement("button", {
                    type: "button",
                    className: "btn-outline flex-1 border-white text-white hover:text-dark lg:flex-none lg:px-8",
                    onClick: v
                }, "Harvest all"))))
            }
            var K = a(61158),
                $ = a(48150),
                V = a(8469);

            function G() {
                let e;
                const t = (0, s.I0)(),
                    a = (0, s.v9)((e => e.network)),
                    d = (0, s.v9)((e => e.farming)),
                    p = (0, s.v9)((e => e.farmingV1)),
                    f = (0, s.v9)((e => e.farmingSponsor)),
                    [g, E] = (0, o.lr)(),
                    {
                        isConnected: b
                    } = (0, c.mA)(),
                    {
                        switchNetwork: x
                    } = (0, c.g0)({
                        onSuccess(t) {
                            e()
                        }
                    }),
                    [h, v] = (0, n.useState)(!1),
                    [N, y] = (0, n.useState)(""),
                    [k, w] = (0, n.useState)({
                        staked: !1,
                        paused: !1,
                        deprecated: !1
                    }),
                    S = (0, n.useRef)(!0),
                    C = (0, n.useCallback)((e => {
                        y(e.target.value)
                    }), []),
                    I = (0, n.useCallback)(((e, t) => {
                        w({
                            ...k,
                            [t]: e
                        })
                    }), [k]);
                e = (0, n.useCallback)((() => {
                    E({
                        chainId: a ?.chain.id.toString(),
                        open: g.get("open") || ""
                    })
                }), [a ?.chain]);
                const T = (0, n.useCallback)((e => {
                    v(e)
                }), []);
                return (0, n.useEffect)((() => {
                    S.current || e()
                }), [a ?.chain]), (0, n.useEffect)((() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                    const n = g.get("chainId");
                    if (n) {
                        const e = K.D.find((e => e.id === parseInt(n, 10)));
                        e && e.id !== a ?.chain.id && (b ? x ?.(e.id) : t.network.setChain(e))
                    }
                    e(), S.current = !1
                }), []), n.createElement(n.Fragment, null, n.createElement(i.Z, {
                    title: "Farming",
                    description: "Harvest the power of Sentia technology by farming cryptocurrency.",
                    canonical: (0, m.Z2)("/farming")
                }), n.createElement(u.Z, {
                    title: "Smardex farms",
                    subtitle: n.createElement(n.Fragment, null, "Stake LP tokens and ", n.createElement("span", {
                        className: "text-buy"
                    }, "earn token rewards"))
                }), n.createElement("div", {
                    className: "container mx-auto space-y-10 px-2 pb-24 lg:px-0"
                }, n.createElement("div", {
                    className: "flex flex-col justify-between space-y-4 rounded-sm border border-white/[.3] bg-green-dark p-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0 lg:px-8"
                }, n.createElement("div", {
                    className: "relative shrink"
                }, n.createElement("div", {
                    className: "absolute left-2 top-2 text-white/[.6]"
                }, n.createElement(l.G, {
                    fixedWidth: !0,
                    icon: r.Y$T
                })), n.createElement("input", {
                    id: "search",
                    name: "search",
                    type: "text",
                    placeholder: "Search all",
                    onChange: C,
                    className: "h-10 w-full rounded-sm border border-white/[.3] bg-white/[.1] py-2 pl-8 pr-2 text-base focus:bg-black/[.4] lg:w-64"
                })), n.createElement(V.Z, {
                    wrapperClassName: "z-40",
                    buttonClassName: "h-10 w-36 btn-outline border-white text-white hover:text-dark",
                    popupClassName: "right-0 top-12"
                }), n.createElement("div", {
                    className: "flex grow flex-col items-start space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"
                }, n.createElement("label", {
                    htmlFor: "staked-filter",
                    className: "flex flex-none cursor-pointer items-center space-x-2"
                }, n.createElement("span", {
                    className: "grow text-sm font-medium text-white/[.6]"
                }, "Staked"), n.createElement("div", {
                    className: "flex flex-none"
                }, n.createElement($.Z, {
                    checked: k.staked,
                    onChange: e => I(e, "staked")
                }))), (d ?.campaigns[a ?.chain.sdId] ?.filter((e => e.paused)).length > 0 || h && p ?.campaigns[a ?.chain.sdId] ?.filter((e => e.paused)).length > 0 || f ?.campaigns[a ?.chain.sdId] ?.filter((e => e.paused)).length > 0) && n.createElement(n.Fragment, null, n.createElement("label", {
                    htmlFor: "paused-filter",
                    className: "flex flex-none cursor-pointer items-center space-x-2"
                }, n.createElement("span", {
                    className: "grow text-sm font-medium text-white/[.6]"
                }, "Paused"), n.createElement("div", {
                    className: "flex-none"
                }, n.createElement($.Z, {
                    checked: k.paused,
                    onChange: e => I(e, "paused")
                })))), (d ?.campaigns[a ?.chain.sdId] ?.filter((e => e.deprecated)).length > 0 || h && p ?.campaigns[a ?.chain.sdId] ?.filter((e => e.deprecated)).length > 0 || f ?.campaigns[a ?.chain.sdId] ?.filter((e => e.deprecated)).length > 0) && n.createElement(n.Fragment, null, n.createElement("label", {
                    htmlFor: "deprecated-filter",
                    className: "flex flex-none cursor-pointer items-center space-x-2"
                }, n.createElement("span", {
                    className: "grow text-sm font-medium text-white/[.6]"
                }, "Finished"), n.createElement("div", {
                    className: "flex-none"
                }, n.createElement($.Z, {
                    checked: k.deprecated,
                    onChange: e => I(e, "deprecated")
                })))))), n.createElement(L, {
                    model: "farming",
                    querySearch: N,
                    filters: k
                }), f ?.campaigns[a ?.chain.sdId] ?.length > 0 && n.createElement(L, {
                    model: "farmingSponsor",
                    querySearch: N,
                    filters: k
                }), a ?.chain.FarmingRangeV1 && n.createElement("div", {
                    className: "flex justify-center"
                }, n.createElement("label", {
                    className: "flex cursor-pointer items-center space-x-2 rounded-full border border-white/[.25] px-4 py-2"
                }, n.createElement("span", {
                    className: "shrink font-semibold text-white"
                }, "Show Old Farming Campaigns"), n.createElement("div", {
                    className: "flex shrink"
                }, n.createElement($.Z, {
                    checked: h,
                    onChange: T
                })))), h && a ?.chain.FarmingRangeV1 && n.createElement(L, {
                    model: "farmingV1",
                    querySearch: N,
                    filters: k
                })))
            }
        },
        80981: function (e, t, a) {
            a.d(t, {
                ER: function () {
                    return n
                },
                jj: function () {
                    return r
                },
                vi: function () {
                    return l
                }
            });
            var n = function (e) {
                    return e[e.NONE = 0] = "NONE", e[e.ASC = 1] = "ASC", e[e.DESC = 2] = "DESC", e
                }(n || {}),
                l = function (e) {
                    return e.NORMAL = "text-buy", e.WARNING = "text-yellow-500", e.DANGER = "text-sell", e
                }(l || {}),
                r = function (e) {
                    return e.NORMAL = "Low Price Impact", e.WARNING = "Price Impact Warning", e.DANGER = "High Price Impact", e
                }(r || {})
        },
        26141: function (e, t, a) {
            a.d(t, {
                p: function () {
                    return A
                }
            });
            var n, l = a(67294),
                r = a(32984),
                s = a(12351),
                c = a(23784),
                o = a(19946),
                i = a(61363),
                m = a(64103),
                u = a(16567),
                d = a(14157),
                p = a(15466),
                f = a(73781);
            let g = null != (n = l.startTransition) ? n : function (e) {
                e()
            };
            var E, b = ((E = b || {})[E.Open = 0] = "Open", E[E.Closed = 1] = "Closed", E),
                x = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(x || {});
            let h = {
                    0: e => ({
                        ...e,
                        disclosureState: (0, r.E)(e.disclosureState, {
                            0: 1,
                            1: 0
                        })
                    }),
                    1: e => 1 === e.disclosureState ? e : {
                        ...e,
                        disclosureState: 1
                    },
                    4(e) {
                        return !0 === e.linkedPanel ? e : {
                            ...e,
                            linkedPanel: !0
                        }
                    },
                    5(e) {
                        return !1 === e.linkedPanel ? e : {
                            ...e,
                            linkedPanel: !1
                        }
                    },
                    2(e, t) {
                        return e.buttonId === t.buttonId ? e : {
                            ...e,
                            buttonId: t.buttonId
                        }
                    },
                    3(e, t) {
                        return e.panelId === t.panelId ? e : {
                            ...e,
                            panelId: t.panelId
                        }
                    }
                },
                v = (0, l.createContext)(null);

            function N(e) {
                let t = (0, l.useContext)(v);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, N), t
                }
                return t
            }
            v.displayName = "DisclosureContext";
            let y = (0, l.createContext)(null);

            function k(e) {
                let t = (0, l.useContext)(y);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, k), t
                }
                return t
            }
            y.displayName = "DisclosureAPIContext";
            let w = (0, l.createContext)(null);

            function S(e, t) {
                return (0, r.E)(t.type, h, e, t)
            }
            w.displayName = "DisclosurePanelContext";
            let C = l.Fragment;
            let I = s.AN.RenderStrategy | s.AN.Static;
            let T = (0, s.yV)((function (e, t) {
                    let {
                        defaultOpen: a = !1,
                        ...n
                    } = e, o = (0, l.useRef)(null), i = (0, c.T)(t, (0, c.h)((e => {
                        o.current = e
                    }), void 0 === e.as || e.as === l.Fragment)), m = (0, l.useRef)(null), d = (0, l.useRef)(null), g = (0, l.useReducer)(S, {
                        disclosureState: a ? 0 : 1,
                        linkedPanel: !1,
                        buttonRef: d,
                        panelRef: m,
                        buttonId: null,
                        panelId: null
                    }), [{
                        disclosureState: E,
                        buttonId: b
                    }, x] = g, h = (0, f.z)((e => {
                        x({
                            type: 1
                        });
                        let t = (0, p.r)(o);
                        if (!t || !b) return;
                        let a = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(b) : t.getElementById(b);
                        null == a || a.focus()
                    })), N = (0, l.useMemo)((() => ({
                        close: h
                    })), [h]), k = (0, l.useMemo)((() => ({
                        open: 0 === E,
                        close: h
                    })), [E, h]), w = {
                        ref: i
                    };
                    return l.createElement(v.Provider, {
                        value: g
                    }, l.createElement(y.Provider, {
                        value: N
                    }, l.createElement(u.up, {
                        value: (0, r.E)(E, {
                            0: u.ZM.Open,
                            1: u.ZM.Closed
                        })
                    }, (0, s.sY)({
                        ourProps: w,
                        theirProps: n,
                        slot: k,
                        defaultTag: C,
                        name: "Disclosure"
                    }))))
                })),
                P = (0, s.yV)((function (e, t) {
                    let a = (0, o.M)(),
                        {
                            id: n = `headlessui-disclosure-button-${a}`,
                            ...r
                        } = e,
                        [u, p] = N("Disclosure.Button"),
                        g = (0, l.useContext)(w),
                        E = null !== g && g === u.panelId,
                        b = (0, l.useRef)(null),
                        x = (0, c.T)(b, t, E ? null : u.buttonRef);
                    (0, l.useEffect)((() => {
                        if (!E) return p({
                            type: 2,
                            buttonId: n
                        }), () => {
                            p({
                                type: 2,
                                buttonId: null
                            })
                        }
                    }), [n, p, E]);
                    let h = (0, f.z)((e => {
                            var t;
                            if (E) {
                                if (1 === u.disclosureState) return;
                                switch (e.key) {
                                    case i.R.Space:
                                    case i.R.Enter:
                                        e.preventDefault(), e.stopPropagation(), p({
                                            type: 0
                                        }), null == (t = u.buttonRef.current) || t.focus()
                                }
                            } else switch (e.key) {
                                case i.R.Space:
                                case i.R.Enter:
                                    e.preventDefault(), e.stopPropagation(), p({
                                        type: 0
                                    })
                            }
                        })),
                        v = (0, f.z)((e => {
                            if (e.key === i.R.Space) e.preventDefault()
                        })),
                        y = (0, f.z)((t => {
                            var a;
                            (0, m.P)(t.currentTarget) || e.disabled || (E ? (p({
                                type: 0
                            }), null == (a = u.buttonRef.current) || a.focus()) : p({
                                type: 0
                            }))
                        })),
                        k = (0, l.useMemo)((() => ({
                            open: 0 === u.disclosureState
                        })), [u]),
                        S = (0, d.f)(e, b),
                        C = E ? {
                            ref: x,
                            type: S,
                            onKeyDown: h,
                            onClick: y
                        } : {
                            ref: x,
                            id: n,
                            type: S,
                            "aria-expanded": e.disabled ? void 0 : 0 === u.disclosureState,
                            "aria-controls": u.linkedPanel ? u.panelId : void 0,
                            onKeyDown: h,
                            onKeyUp: v,
                            onClick: y
                        };
                    return (0, s.sY)({
                        ourProps: C,
                        theirProps: r,
                        slot: k,
                        defaultTag: "button",
                        name: "Disclosure.Button"
                    })
                })),
                R = (0, s.yV)((function (e, t) {
                    let a = (0, o.M)(),
                        {
                            id: n = `headlessui-disclosure-panel-${a}`,
                            ...r
                        } = e,
                        [i, m] = N("Disclosure.Panel"),
                        {
                            close: d
                        } = k("Disclosure.Panel"),
                        p = (0, c.T)(t, i.panelRef, (e => {
                            g((() => m({
                                type: e ? 4 : 5
                            })))
                        }));
                    (0, l.useEffect)((() => (m({
                        type: 3,
                        panelId: n
                    }), () => {
                        m({
                            type: 3,
                            panelId: null
                        })
                    })), [n, m]);
                    let f = (0, u.oJ)(),
                        E = null !== f ? (f & u.ZM.Open) === u.ZM.Open : 0 === i.disclosureState,
                        b = (0, l.useMemo)((() => ({
                            open: 0 === i.disclosureState,
                            close: d
                        })), [i, d]),
                        x = {
                            ref: p,
                            id: n
                        };
                    return l.createElement(w.Provider, {
                        value: i.panelId
                    }, (0, s.sY)({
                        ourProps: x,
                        theirProps: r,
                        slot: b,
                        defaultTag: "div",
                        features: I,
                        visible: E,
                        name: "Disclosure.Panel"
                    }))
                })),
                A = Object.assign(T, {
                    Button: P,
                    Panel: R
                })
        },
        95389: function (e, t, a) {
            a.d(t, {
                _: function () {
                    return p
                },
                b: function () {
                    return u
                }
            });
            var n = a(67294),
                l = a(19946),
                r = a(12351),
                s = a(16723),
                c = a(23784),
                o = a(73781);
            let i = (0, n.createContext)(null);

            function m() {
                let e = (0, n.useContext)(i);
                if (null === e) {
                    let e = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, m), e
                }
                return e
            }

            function u() {
                let [e, t] = (0, n.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, n.useMemo)((() => function (e) {
                    let a = (0, o.z)((e => (t((t => [...t, e])), () => t((t => {
                            let a = t.slice(),
                                n = a.indexOf(e);
                            return -1 !== n && a.splice(n, 1), a
                        }))))),
                        l = (0, n.useMemo)((() => ({
                            register: a,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [a, e.slot, e.name, e.props]);
                    return n.createElement(i.Provider, {
                        value: l
                    }, e.children)
                }), [t])]
            }
            let d = (0, r.yV)((function (e, t) {
                    let a = (0, l.M)(),
                        {
                            id: n = `headlessui-label-${a}`,
                            passive: o = !1,
                            ...i
                        } = e,
                        u = m(),
                        d = (0, c.T)(t);
                    (0, s.e)((() => u.register(n)), [n, u.register]);
                    let p = {
                        ref: d,
                        ...u.props,
                        id: n
                    };
                    return o && ("onClick" in p && (delete p.htmlFor, delete p.onClick), "onClick" in i && delete i.onClick), (0, r.sY)({
                        ourProps: p,
                        theirProps: i,
                        slot: u.slot || {},
                        defaultTag: "label",
                        name: u.name || "Label"
                    })
                })),
                p = Object.assign(d, {})
        },
        77768: function (e, t, a) {
            a.d(t, {
                r: function () {
                    return N
                }
            });
            var n = a(67294),
                l = a(12351),
                r = a(19946),
                s = a(61363),
                c = a(64103),
                o = a(95389),
                i = a(39516),
                m = a(14157),
                u = a(23784),
                d = a(46045),
                p = a(18689),
                f = a(73781),
                g = a(31147),
                E = a(94192);
            let b = (0, n.createContext)(null);
            b.displayName = "GroupContext";
            let x = n.Fragment;
            let h = (0, l.yV)((function (e, t) {
                    let a = (0, r.M)(),
                        {
                            id: o = `headlessui-switch-${a}`,
                            checked: i,
                            defaultChecked: x = !1,
                            onChange: h,
                            name: v,
                            value: N,
                            form: y,
                            ...k
                        } = e,
                        w = (0, n.useContext)(b),
                        S = (0, n.useRef)(null),
                        C = (0, u.T)(S, t, null === w ? null : w.setSwitch),
                        [I, T] = (0, g.q)(i, h, x),
                        P = (0, f.z)((() => null == T ? void 0 : T(!I))),
                        R = (0, f.z)((e => {
                            if ((0, c.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), P()
                        })),
                        A = (0, f.z)((e => {
                            e.key === s.R.Space ? (e.preventDefault(), P()) : e.key === s.R.Enter && (0, p.g)(e.currentTarget)
                        })),
                        F = (0, f.z)((e => e.preventDefault())),
                        D = (0, n.useMemo)((() => ({
                            checked: I
                        })), [I]),
                        L = {
                            id: o,
                            ref: C,
                            role: "switch",
                            type: (0, m.f)(e, S),
                            tabIndex: 0,
                            "aria-checked": I,
                            "aria-labelledby": null == w ? void 0 : w.labelledby,
                            "aria-describedby": null == w ? void 0 : w.describedby,
                            onClick: R,
                            onKeyUp: A,
                            onKeyPress: F
                        },
                        K = (0, E.G)();
                    return (0, n.useEffect)((() => {
                        var e;
                        let t = null == (e = S.current) ? void 0 : e.closest("form");
                        t && void 0 !== x && K.addEventListener(t, "reset", (() => {
                            T(x)
                        }))
                    }), [S, T]), n.createElement(n.Fragment, null, null != v && I && n.createElement(d._, {
                        features: d.A.Hidden,
                        ...(0, l.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            form: y,
                            checked: I,
                            name: v,
                            value: N
                        })
                    }), (0, l.sY)({
                        ourProps: L,
                        theirProps: k,
                        slot: D,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                })),
                v = function (e) {
                    var t;
                    let [a, r] = (0, n.useState)(null), [s, c] = (0, o.b)(), [m, u] = (0, i.f)(), d = (0, n.useMemo)((() => ({
                        switch: a,
                        setSwitch: r,
                        labelledby: s,
                        describedby: m
                    })), [a, r, s, m]), p = e;
                    return n.createElement(u, {
                        name: "Switch.Description"
                    }, n.createElement(c, {
                        name: "Switch.Label",
                        props: {
                            htmlFor: null == (t = d.switch) ? void 0 : t.id,
                            onClick(e) {
                                a && ("LABEL" === e.currentTarget.tagName && e.preventDefault(), a.click(), a.focus({
                                    preventScroll: !0
                                }))
                            }
                        }
                    }, n.createElement(b.Provider, {
                        value: d
                    }, (0, l.sY)({
                        ourProps: {},
                        theirProps: p,
                        defaultTag: x,
                        name: "Switch.Group"
                    }))))
                },
                N = Object.assign(h, {
                    Group: v,
                    Label: o._,
                    Description: i.d
                })
        },
        31147: function (e, t, a) {
            a.d(t, {
                q: function () {
                    return r
                }
            });
            var n = a(67294),
                l = a(73781);

            function r(e, t, a) {
                let [r, s] = (0, n.useState)(a), c = void 0 !== e, o = (0, n.useRef)(c), i = (0, n.useRef)(!1), m = (0, n.useRef)(!1);
                return !c || o.current || i.current ? !c && o.current && !m.current && (m.current = !0, o.current = c, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (i.current = !0, o.current = c, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [c ? e : r, (0, l.z)((e => (c || s(e), null == t ? void 0 : t(e))))]
            }
        },
        18689: function (e, t, a) {
            function n(e = {}, t = null, a = []) {
                for (let [n, s] of Object.entries(e)) r(a, l(t, n), s);
                return a
            }

            function l(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function r(e, t, a) {
                if (Array.isArray(a))
                    for (let [n, s] of a.entries()) r(e, l(t, n.toString()), s);
                else a instanceof Date ? e.push([t, a.toISOString()]) : "boolean" == typeof a ? e.push([t, a ? "1" : "0"]) : "string" == typeof a ? e.push([t, a]) : "number" == typeof a ? e.push([t, `${a}`]) : null == a ? e.push([t, ""]) : n(a, t, e)
            }

            function s(e) {
                var t;
                let a = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                if (a)
                    for (let e of a.elements)
                        if ("INPUT" === e.tagName && "submit" === e.type || "BUTTON" === e.tagName && "submit" === e.type || "INPUT" === e.nodeName && "image" === e.type) return void e.click()
            }
            a.d(t, {
                g: function () {
                    return s
                },
                t: function () {
                    return n
                }
            })
        }
    }
]);