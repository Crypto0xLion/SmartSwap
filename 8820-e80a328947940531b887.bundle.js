"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [8820], {
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
        83666: function (e, t, a) {
            a.r(t), a.d(t, {
                default: function () {
                    return F
                }
            });
            var n = a(67294),
                l = a(95998),
                r = a(38350),
                s = a(64463),
                c = a(56126),
                o = a(61158),
                i = a(27172),
                m = a(26141),
                u = a(47031),
                d = a(67814),
                p = a(59417),
                f = a(6665),
                b = a(24889),
                E = a(46333),
                g = a(79655),
                x = a(67748),
                h = a(94649),
                v = a(57333),
                k = a(58903),
                y = a(60263),
                w = a(25988),
                N = a(78317);

            function S(e) {
                let {
                    show: t,
                    mode: a,
                    campaign: r,
                    userCampaign: s,
                    onClose: o,
                    v1: i
                } = e;
                const m = i ? "stakingV1" : "staking",
                    b = (0, l.I0)(),
                    E = (0, l.v9)((e => e[m])),
                    S = (0, l.v9)((e => e.network)),
                    [C, T] = (0, n.useState)(0),
                    A = (0, n.useRef)(null),
                    P = (0, n.useRef)(S ?.chain),
                    I = (0, h.TA)({
                        initialValues: {
                            amount: "",
                            shares: 0n
                        },
                        onSubmit: e => {
                            "STAKE" === a ? b[m].deposit({
                                campaign: r,
                                amount: (0, k.f)(e.amount)
                            }).then((() => {
                                o()
                            })) : b[m].withdraw({
                                campaign: r,
                                shares: e.shares
                            }).then((() => {
                                o()
                            }))
                        },
                        validate: e => {
                            let {
                                amount: t
                            } = e;
                            const n = {};
                            if (t.trim().length) {
                                const e = (0, k.f)(t),
                                    l = s["STAKE" === a ? "balance" : "staked"],
                                    c = 10n ** 54n,
                                    o = e * c / l * 1000000n;
                                if (e <= 0n ? n.amount = "Minimum amount required" : e > l && (n.amount = "Balance too low"), T(parseFloat((0, f.d)(e * r.token.price / N.CI))), A.current ?.setPercent(Math.round(Number(o / c) / 1e4)), "UNSTAKE" === a) {
                                    const e = s.shares * o / c / 1000000n;
                                    I.setFieldValue("shares", e, !1)
                                }
                            } else n.amount = "Invalid amount", T(0), A.current ?.setPercent(0);
                            return n
                        }
                    }),
                    F = () => {
                        b[m].setProcessingTransaction(!1), o()
                    },
                    D = (0, n.useCallback)((e => {
                        void 0 !== e.floatValue ? I.setFieldValue("amount", e.value) : "" === e.value && I.setFieldValue("amount", "")
                    }), []),
                    K = (0, n.useCallback)((e => {
                        const t = parseFloat(e) / 100;
                        if (t > 0) {
                            const e = s ? s["STAKE" === a ? "balance" : "staked"] * (0, k.f)(t.toString()) / N.CI : 0n;
                            if (T(parseFloat((0, f.d)(e * r.token.price / N.CI))), I.setFieldValue("amount", (0, y.b)(e, r.token.decimals), !1), "UNSTAKE" === a) {
                                const e = s ? s.shares * (0, k.f)(t.toString()) / N.CI : 0n;
                                I.setFieldValue("shares", e, !1)
                            } else I.setFieldValue("shares", 0n, !1)
                        } else T(0), I.setValues({
                            amount: "",
                            shares: 0n
                        }, !1);
                        A.current ?.setPercent(parseFloat(e))
                    }), [r, s, a]),
                    M = (0, n.useCallback)((() => {
                        b[m].approve({
                            campaign: r,
                            amount: N.iD
                        })
                    }), [r]),
                    R = (0, n.useCallback)((() => "STAKE" === a && 0n === s.balance), [a, s.balance]);
                return (0, n.useEffect)((() => {
                    t || (T(0), A.current ?.reset(), I.resetForm())
                }), [t]), (0, n.useEffect)((() => {
                    P.current.id !== S ?.chain.id ? F() : P.current = S ?.chain
                }), [S ?.chain]), n.createElement(u.u, {
                    appear: !0,
                    show: t,
                    as: n.Fragment
                }, n.createElement(x.V, {
                    as: "div",
                    className: "relative z-50",
                    onClose: F
                }, n.createElement(u.u.Child, {
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
                }, n.createElement(u.u.Child, {
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
                }, "STAKE" === a ? "Stake" : "Unstake", " ", r.token.symbol), n.createElement(d.G, {
                    role: "button",
                    icon: p.YIN,
                    size: "lg",
                    fixedWidth: !0,
                    onClick: F
                })), n.createElement("hr", {
                    className: "my-4 border-white/[0.1]"
                }), n.createElement("form", {
                    onSubmit: I.handleSubmit
                }, n.createElement("div", {
                    className: "relative mt-2"
                }, n.createElement("div", {
                    className: "relative"
                }, n.createElement(v.h3, {
                    valueIsNumericString: !0,
                    thousandSeparator: ",",
                    placeholder: "0.00",
                    decimalScale: r.token.decimals,
                    value: I.values.amount,
                    onValueChange: D,
                    allowNegative: !1,
                    className: (0, c.AK)("w-full rounded-sm border bg-transparent px-2 pb-5 pt-1 text-right text-base focus:bg-black/[.4]", I.errors.amount ? "border-sell" : "border-white/[.3]", R() && "opacity-50"),
                    disabled: R()
                }), n.createElement("div", {
                    className: "absolute inset-x-2 bottom-1 overflow-hidden text-right text-sm text-white/[.5]"
                }, C > 0 && "≈ ", (0, c.k)(C))), I.errors.amount && n.createElement("div", {
                    className: "absolute right-0 top-14 text-xs text-sell"
                }, I.errors.amount), n.createElement("div", {
                    className: "mt-6 text-right text-sm"
                }, "Enter your amount of ", r.token.symbol, " Token", n.createElement("br", null), "STAKE" === a && n.createElement("span", {
                    className: (0, c.AK)(0n === s.balance && "text-sell")
                }, "Balance ", (0, f.d)(s.balance)), "UNSTAKE" === a && n.createElement("span", null, "Staked ", (0, f.d)(s.staked)))), n.createElement("div", {
                    className: "mt-4"
                }, n.createElement(w.Z, {
                    disabled: R(),
                    onChange: K,
                    onMouseUp: () => {},
                    ref: A
                })), n.createElement("div", {
                    className: "mt-8 flex space-x-2"
                }, n.createElement("button", {
                    type: "button",
                    className: "btn-outline flex-1 border-sell py-4 text-sell hover:border-dark hover:text-dark",
                    onClick: F
                }, "Cancel"), "STAKE" === a && s.allowance < (0, k.f)(I.values.amount.length ? I.values.amount : "0") ? n.createElement("button", {
                    type: "button",
                    className: (0, c.AK)("btn-outline flex-1 border-blue-400 py-4 text-blue-400 hover:border-dark hover:text-dark", E ?.processingTransaction && "opacity-50"),
                    onClick: M,
                    disabled: E ?.processingTransaction
                }, E ?.processingTransaction ? n.createElement(d.G, {
                    spin: !0,
                    icon: p.IJ7
                }) : n.createElement(n.Fragment, null, "Approve First")) : n.createElement("button", {
                    type: "submit",
                    className: (0, c.AK)("flex-1 py-4", R() ? "btn-disable" : "btn-outline", E ?.processingTransaction && "opacity-50"),
                    disabled: R() || E ?.processingTransaction
                }, E ?.processingTransaction ? n.createElement(d.G, {
                    spin: !0,
                    icon: p.IJ7
                }) : "Confirm")), "STAKE" === a && n.createElement("div", {
                    className: "mt-6 text-center"
                }, n.createElement(g.rU, {
                    className: "border-b border-white",
                    to: "/swap"
                }, "Get ", r.token.symbol)))))))))
            }
            var C = a(86741),
                T = a(6303);

            function A(e) {
                let {
                    campaign: t,
                    userCampaign: a,
                    v1: s
                } = e;
                const o = (0, l.v9)((e => e.network)),
                    i = (0, n.useId)(),
                    x = (0, r.mA)(),
                    {
                        openConnectModal: h
                    } = (0, E.We)(),
                    [v, k] = (0, n.useState)({
                        show: !1,
                        mode: "STAKE"
                    }),
                    y = (0, n.useCallback)((() => {
                        k({
                            show: !0,
                            mode: "STAKE"
                        })
                    }), []),
                    w = (0, n.useCallback)((() => {
                        k({
                            show: !0,
                            mode: "UNSTAKE"
                        })
                    }), []),
                    A = (0, n.useCallback)((() => {
                        k({
                            ...v,
                            show: !1
                        })
                    }), [v]),
                    P = (0, n.useCallback)((() => {
                        (0, b.xz)({
                            chainId: o ?.chain.id
                        }).then((e => {
                            e ?.watchAsset({
                                type: "ERC20",
                                options: {
                                    address: t.token.address,
                                    symbol: t.token.symbol,
                                    decimals: t.token.decimals,
                                    image: `${(0,c.ms)()}${t.token.icon}`
                                }
                            })
                        }))
                    }), [o ?.chain]);
                return n.createElement(n.Fragment, null, n.createElement(T.Z, {
                    id: `tooltip-apy-${i}`,
                    className: "w-48",
                    text: "Auto-compounding enabled: staked tokens are consistently reinvested, ensuring real-time growth of your earnings."
                }), n.createElement(m.p, {
                    as: "div",
                    className: "overflow-hidden"
                }, (e => {
                    let {
                        open: l
                    } = e;
                    return n.createElement(n.Fragment, null, n.createElement(m.p.Button, {
                        as: "div",
                        className: "flex cursor-pointer py-4"
                    }, n.createElement("div", {
                        className: "flex flex-1 flex-col items-stretch lg:flex-row lg:items-center lg:space-x-1"
                    }, n.createElement("div", null, n.createElement("img", {
                        src: t.token.icon,
                        alt: `${t.token.icon}token`,
                        className: "z-0 inline h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-7 lg:w-7"
                    })), n.createElement("span", {
                        className: "text-xs lg:text-base"
                    }, t.token.symbol)), n.createElement("div", {
                        className: "flex flex-1 flex-col space-y-2"
                    }, n.createElement("div", {
                        className: "text-xs text-white/[.3]"
                    }, "STAKED"), n.createElement("div", {
                        className: "text-xs lg:text-base"
                    }, x.address && a ? n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "hidden lg:block"
                    }, n.createElement(C.Z, {
                        end: parseFloat((0, f.d)(a.staked))
                    })), n.createElement("div", {
                        className: "lg:text-sm"
                    }, n.createElement(C.Z, {
                        end: parseFloat((0, f.d)(a.staked * t.token.price / N.CI)),
                        prefix: "$"
                    }))) : n.createElement("span", null, "--"))), n.createElement("div", {
                        className: "flex flex-1 flex-col space-y-2"
                    }, n.createElement("div", {
                        className: "flex items-center space-x-1"
                    }, n.createElement("div", {
                        className: "text-xs text-white/[.3]"
                    }, "ROI (APY)"), n.createElement(d.G, {
                        "data-tooltip-id": `tooltip-apy-${i}`,
                        fixedWidth: !0,
                        className: "text-white",
                        icon: p.sqG,
                        size: "xs"
                    })), n.createElement("div", {
                        className: "text-xs lg:text-base"
                    }, void 0 !== t.apy ? n.createElement(C.Z, {
                        end: t.apy,
                        suffix: " %"
                    }) : n.createElement("div", {
                        className: "h-4 w-24 animate-pulse rounded-sm bg-white/[.3] lg:h-6"
                    }))), n.createElement("div", {
                        className: "hidden flex-1 flex-col space-y-2 lg:flex"
                    }, n.createElement("div", {
                        className: "text-xs text-white/[.3]"
                    }, "TOTAL STAKED"), n.createElement("div", null, void 0 !== t.tvl ? n.createElement(n.Fragment, null, n.createElement("div", null, n.createElement(C.Z, {
                        end: parseFloat((0, f.d)(t.totalStaked))
                    })), n.createElement("div", {
                        className: "text-sm"
                    }, n.createElement(C.Z, {
                        end: parseFloat((0, f.d)(t.tvl)),
                        prefix: "$"
                    }))) : n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "my-0.5 h-5 w-24 animate-pulse rounded-sm bg-white/[.3]"
                    }), n.createElement("div", {
                        className: "h-5 w-20 animate-pulse rounded-sm bg-white/[.3]"
                    })))), n.createElement("div", {
                        className: "hidden flex-1 flex-col space-y-2 lg:flex"
                    }, n.createElement("div", {
                        className: "text-xs text-white/[.3]"
                    }, "MULTIPLIER"), n.createElement("span", null, t.multiplier, "x")), n.createElement(d.G, {
                        fixedWidth: !0,
                        className: (0, c.AK)("shrink self-center text-buy transition-transform", l && "rotate-180"),
                        icon: p.ptq
                    })), n.createElement(u.u, {
                        appear: !0,
                        show: l,
                        enter: "ease-in duration-500 lg:duration-300",
                        enterFrom: "opacity-0 max-h-0",
                        enterTo: "opacity-100 max-h-[17rem] lg:max-h-[6.5rem]",
                        leave: "ease-out duration-500 lg:duration-300",
                        leaveFrom: "opacity-100 max-h-[17rem] lg:max-h-[6.5rem]",
                        leaveTo: "opacity-0 max-h-0"
                    }, n.createElement(m.p.Panel, {
                        as: "div",
                        static: !0,
                        className: "flex flex-col-reverse items-stretch space-y-4 space-y-reverse px-0.5 pb-6 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0"
                    }, n.createElement("div", {
                        className: "flex shrink space-x-1 text-xs lg:text-sm"
                    }, n.createElement("div", {
                        className: "flex flex-1 flex-col lg:hidden"
                    }, n.createElement("span", {
                        className: "text-[0.75rem] text-white/[.3]"
                    }, "TOTAL STAKED"), n.createElement("div", {
                        className: "pb-1.5 pt-0.5 text-sm"
                    }, void 0 !== t.tvl ? n.createElement(n.Fragment, null, (0, c.bF)(parseFloat((0, f.d)(t.totalStaked))), n.createElement("br", null), (0, c.cH)(parseFloat((0, f.d)(t.tvl)))) : n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "mb-1 h-4 w-24 animate-pulse rounded-sm bg-white/[.3]"
                    }), n.createElement("div", {
                        className: "h-4 w-20 animate-pulse rounded-sm bg-white/[.3]"
                    }))), n.createElement("span", {
                        className: "text-[0.75rem] text-white/[.3]"
                    }, "MULTIPLIER"), n.createElement("span", {
                        className: "pt-0.5 text-sm"
                    }, t.multiplier, "x")), n.createElement("div", {
                        className: "flex flex-1 flex-col space-y-2"
                    }, !s && n.createElement("div", {
                        className: "flex shrink items-center space-x-1 rounded-full border border-buy p-2 text-xs text-buy"
                    }, n.createElement(d.G, {
                        fixedWidth: !0,
                        icon: p.QDM,
                        spin: !0
                    }), n.createElement("span", {
                        className: "whitespace-nowrap"
                    }, "Auto-compounding enabled")), n.createElement("div", {
                        className: "flex items-center space-x-3"
                    }, n.createElement("button", {
                        type: "button",
                        className: "flex flex-1 items-center space-x-1 whitespace-nowrap underline-offset-2 hover:underline",
                        onClick: P
                    }, n.createElement(d.G, {
                        icon: p.X5K
                    }), n.createElement("span", null, "Add to wallet"))))), n.createElement("div", {
                        className: "flex grow flex-col items-stretch space-x-0 space-y-4 rounded-sm border border-white/[.3] bg-white/[.1] p-4 lg:flex-row lg:items-center lg:justify-between lg:space-x-6 lg:space-y-0"
                    }, n.createElement("div", {
                        className: "space-y-2"
                    }, n.createElement("div", {
                        className: "text-xs"
                    }, "STAKED"), n.createElement("div", {
                        className: "text-sm"
                    }, a && 0n !== a.staked ? n.createElement(n.Fragment, null, (0, c.bF)(parseFloat((0, f.d)(a.staked))), " ", t.token.symbol, n.createElement("span", {
                        className: "mx-1"
                    }, "≈"), (0, c.cH)(parseFloat((0, f.d)(a.staked * t.token.price / N.CI)))) : "--")), x.address ? n.createElement("div", null, 0n === a ?.staked ? n.createElement("button", {
                        type: "button",
                        className: (0, c.AK)(s ? "btn-disable px-4" : "btn px-4"),
                        onClick: y,
                        disabled: s
                    }, "Stake SMART") : n.createElement("div", {
                        className: "flex items-center space-x-4"
                    }, s && n.createElement(g.rU, {
                        to: "/staking-migration",
                        className: "btn bg-buy px-4"
                    }, "Migrate"), n.createElement("button", {
                        type: "button",
                        className: "btn bg-sell p-1.5 hover:bg-white",
                        onClick: w
                    }, n.createElement(d.G, {
                        fixedWidth: !0,
                        icon: p.Kl4
                    })), n.createElement("button", {
                        type: "button",
                        className: (0, c.AK)("btn p-1.5", s && "opacity-50"),
                        onClick: y,
                        disabled: s
                    }, n.createElement(d.G, {
                        fixedWidth: !0,
                        icon: p.XSk
                    })))) : n.createElement("button", {
                        type: "button",
                        className: "btn px-4",
                        onClick: h
                    }, "Connect")))))
                })), a && n.createElement(S, {
                    show: v.show,
                    mode: v.mode,
                    campaign: t,
                    userCampaign: a,
                    onClose: A,
                    v1: s
                }))
            }

            function P(e) {
                let {
                    v1: t
                } = e;
                const a = t ? "stakingV1" : "staking",
                    s = (0, l.I0)(),
                    o = (0, l.v9)((e => e.network)),
                    i = (0, l.v9)((e => e[a])),
                    m = (0, r.mA)();
                return (0, n.useEffect)((() => {
                    (async () => {
                        o ?.chain.Staking && (await s[a].getCampaigns(void 0), m.address ? await s[a].getUserCampaigns(void 0) : s[a].resetUserCampaigns(void 0))
                    })()
                }), [o ?.chain, m.address]), n.createElement("div", {
                    className: (0, c.AK)("relative rounded-sm border bg-green-dark px-4 lg:px-8 lg:pt-4", t ? "border-sell" : "border-white/[.3]")
                }, t && n.createElement("span", {
                    className: "absolute right-4 top-0 bg-sell px-2 text-[0.6rem] lg:right-8 lg:text-xs"
                }, "OLD CAMPAIGN"), i ?.campaigns[o ?.chain.sdId] ?.map((e => n.createElement(A, {
                    key: e.id,
                    campaign: e,
                    userCampaign: i ?.userCampaigns[o ?.chain.sdId] ?.find((t => t.campaignId === e.id)),
                    v1: t
                }))))
            }
            var I = a(48150);

            function F() {
                const e = (0, l.I0)(),
                    t = (0, l.v9)((e => e.network)),
                    {
                        isConnected: a
                    } = (0, r.mA)(),
                    {
                        switchNetwork: m
                    } = (0, r.g0)(),
                    [u, d] = (0, n.useState)(!1),
                    p = (0, n.useCallback)((e => {
                        d(e)
                    }), []),
                    f = (0, n.useCallback)((() => {
                        a ? m ?.(o.D[0].id) : e.network.setChain(o.D[0])
                    }), [m, a]);
                return n.createElement(n.Fragment, null, n.createElement(s.Z, {
                    title: "Staking",
                    description: "Stake your crypto, be a part of the network, earn a reward.",
                    canonical: (0, c.Z2)("/staking")
                }), t ?.chain.Staking ? n.createElement(n.Fragment, null, n.createElement(i.Z, {
                    title: "Smardex staking",
                    subtitle: n.createElement(n.Fragment, null, "Stake your tokens to ", n.createElement("span", {
                        className: "text-buy"
                    }, "earn more SMART"))
                }), n.createElement("div", {
                    className: "container mx-auto space-y-10 px-2 pb-24 lg:px-0"
                }, n.createElement(P, null), n.createElement("div", {
                    className: "flex justify-center"
                }, n.createElement("label", {
                    className: "flex cursor-pointer items-center space-x-2 rounded-full border border-white/[.25] px-4 py-2"
                }, n.createElement("span", {
                    className: "shrink font-semibold text-white"
                }, "Show Old Staking Campaign"), n.createElement("div", {
                    className: "shrink"
                }, n.createElement(I.Z, {
                    checked: u,
                    onChange: p
                })))), u && t ?.chain.StakingV1 && n.createElement(P, {
                    v1: !0
                }))) : n.createElement("div", {
                    className: "flex h-screen flex-col items-center justify-center space-y-6 px-2 lg:px-0"
                }, n.createElement("div", {
                    className: "font-styrene"
                }, n.createElement("div", {
                    className: "text-xl text-gray-medium"
                }, "Staking is only supported on Ethereum network."), n.createElement("div", {
                    className: "text-3xl"
                }, "Please switch network to continue.")), n.createElement("button", {
                    type: "button",
                    className: "btn-outline p-4 text-lg ",
                    onClick: f
                }, "Switch Network")))
            }
        },
        26141: function (e, t, a) {
            a.d(t, {
                p: function () {
                    return F
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
            let b = null != (n = l.startTransition) ? n : function (e) {
                e()
            };
            var E, g = ((E = g || {})[E.Open = 0] = "Open", E[E.Closed = 1] = "Closed", E),
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

            function k(e) {
                let t = (0, l.useContext)(v);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, k), t
                }
                return t
            }
            v.displayName = "DisclosureContext";
            let y = (0, l.createContext)(null);

            function w(e) {
                let t = (0, l.useContext)(y);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, w), t
                }
                return t
            }
            y.displayName = "DisclosureAPIContext";
            let N = (0, l.createContext)(null);

            function S(e, t) {
                return (0, r.E)(t.type, h, e, t)
            }
            N.displayName = "DisclosurePanelContext";
            let C = l.Fragment;
            let T = s.AN.RenderStrategy | s.AN.Static;
            let A = (0, s.yV)((function (e, t) {
                    let {
                        defaultOpen: a = !1,
                        ...n
                    } = e, o = (0, l.useRef)(null), i = (0, c.T)(t, (0, c.h)((e => {
                        o.current = e
                    }), void 0 === e.as || e.as === l.Fragment)), m = (0, l.useRef)(null), d = (0, l.useRef)(null), b = (0, l.useReducer)(S, {
                        disclosureState: a ? 0 : 1,
                        linkedPanel: !1,
                        buttonRef: d,
                        panelRef: m,
                        buttonId: null,
                        panelId: null
                    }), [{
                        disclosureState: E,
                        buttonId: g
                    }, x] = b, h = (0, f.z)((e => {
                        x({
                            type: 1
                        });
                        let t = (0, p.r)(o);
                        if (!t || !g) return;
                        let a = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(g) : t.getElementById(g);
                        null == a || a.focus()
                    })), k = (0, l.useMemo)((() => ({
                        close: h
                    })), [h]), w = (0, l.useMemo)((() => ({
                        open: 0 === E,
                        close: h
                    })), [E, h]), N = {
                        ref: i
                    };
                    return l.createElement(v.Provider, {
                        value: b
                    }, l.createElement(y.Provider, {
                        value: k
                    }, l.createElement(u.up, {
                        value: (0, r.E)(E, {
                            0: u.ZM.Open,
                            1: u.ZM.Closed
                        })
                    }, (0, s.sY)({
                        ourProps: N,
                        theirProps: n,
                        slot: w,
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
                        [u, p] = k("Disclosure.Button"),
                        b = (0, l.useContext)(N),
                        E = null !== b && b === u.panelId,
                        g = (0, l.useRef)(null),
                        x = (0, c.T)(g, t, E ? null : u.buttonRef);
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
                        w = (0, l.useMemo)((() => ({
                            open: 0 === u.disclosureState
                        })), [u]),
                        S = (0, d.f)(e, g),
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
                        slot: w,
                        defaultTag: "button",
                        name: "Disclosure.Button"
                    })
                })),
                I = (0, s.yV)((function (e, t) {
                    let a = (0, o.M)(),
                        {
                            id: n = `headlessui-disclosure-panel-${a}`,
                            ...r
                        } = e,
                        [i, m] = k("Disclosure.Panel"),
                        {
                            close: d
                        } = w("Disclosure.Panel"),
                        p = (0, c.T)(t, i.panelRef, (e => {
                            b((() => m({
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
                        g = (0, l.useMemo)((() => ({
                            open: 0 === i.disclosureState,
                            close: d
                        })), [i, d]),
                        x = {
                            ref: p,
                            id: n
                        };
                    return l.createElement(N.Provider, {
                        value: i.panelId
                    }, (0, s.sY)({
                        ourProps: x,
                        theirProps: r,
                        slot: g,
                        defaultTag: "div",
                        features: T,
                        visible: E,
                        name: "Disclosure.Panel"
                    }))
                })),
                F = Object.assign(A, {
                    Button: P,
                    Panel: I
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
                    return k
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
                b = a(31147),
                E = a(94192);
            let g = (0, n.createContext)(null);
            g.displayName = "GroupContext";
            let x = n.Fragment;
            let h = (0, l.yV)((function (e, t) {
                    let a = (0, r.M)(),
                        {
                            id: o = `headlessui-switch-${a}`,
                            checked: i,
                            defaultChecked: x = !1,
                            onChange: h,
                            name: v,
                            value: k,
                            form: y,
                            ...w
                        } = e,
                        N = (0, n.useContext)(g),
                        S = (0, n.useRef)(null),
                        C = (0, u.T)(S, t, null === N ? null : N.setSwitch),
                        [T, A] = (0, b.q)(i, h, x),
                        P = (0, f.z)((() => null == A ? void 0 : A(!T))),
                        I = (0, f.z)((e => {
                            if ((0, c.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), P()
                        })),
                        F = (0, f.z)((e => {
                            e.key === s.R.Space ? (e.preventDefault(), P()) : e.key === s.R.Enter && (0, p.g)(e.currentTarget)
                        })),
                        D = (0, f.z)((e => e.preventDefault())),
                        K = (0, n.useMemo)((() => ({
                            checked: T
                        })), [T]),
                        M = {
                            id: o,
                            ref: C,
                            role: "switch",
                            type: (0, m.f)(e, S),
                            tabIndex: 0,
                            "aria-checked": T,
                            "aria-labelledby": null == N ? void 0 : N.labelledby,
                            "aria-describedby": null == N ? void 0 : N.describedby,
                            onClick: I,
                            onKeyUp: F,
                            onKeyPress: D
                        },
                        R = (0, E.G)();
                    return (0, n.useEffect)((() => {
                        var e;
                        let t = null == (e = S.current) ? void 0 : e.closest("form");
                        t && void 0 !== x && R.addEventListener(t, "reset", (() => {
                            A(x)
                        }))
                    }), [S, A]), n.createElement(n.Fragment, null, null != v && T && n.createElement(d._, {
                        features: d.A.Hidden,
                        ...(0, l.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            form: y,
                            checked: T,
                            name: v,
                            value: k
                        })
                    }), (0, l.sY)({
                        ourProps: M,
                        theirProps: w,
                        slot: K,
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
                    }, n.createElement(g.Provider, {
                        value: d
                    }, (0, l.sY)({
                        ourProps: {},
                        theirProps: p,
                        defaultTag: x,
                        name: "Switch.Group"
                    }))))
                },
                k = Object.assign(h, {
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