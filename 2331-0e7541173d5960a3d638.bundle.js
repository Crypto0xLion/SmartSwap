"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [2331], {
        64463: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return m
                }
            });
            var n = a(67294),
                r = a(70405),
                l = a(49089),
                s = a(89250),
                o = a.p + "/logo.png",
                i = a.p + "assets/images/og.webp",
                c = a(56126);
            var m = (0, n.memo)((e => {
                let {
                    title: t,
                    description: a,
                    canonical: m
                } = e;
                const d = (0, s.TH)(),
                    u = t ? "DeFi The Norm - SMART" ?.replace(" - ", ` - ${t} | `) : "DeFi The Norm - SMART";
                return (0, n.useEffect)((() => {
                    l.ZP.send({
                        hitType: "pageview",
                        page: d.pathname,
                        title: u
                    })
                }), [d]), n.createElement(r.ql, null, n.createElement("title", null, u), n.createElement("meta", {
                    name: "description",
                    content: a
                }), n.createElement("link", {
                    rel: "canonical",
                    href: m
                }), n.createElement("link", {
                    rel: "shortcut icon",
                    href: `${(0,c.ms)()}${o}`
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
                    content: u,
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
                    content: `${(0,c.ms)()}${i}`
                }))
            }))
        },
        27172: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return r
                }
            });
            var n = a(67294);

            function r(e) {
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
        48150: function (e, t, a) {
            var n = a(67294),
                r = a(77768),
                l = a(56126);
            t.Z = function (e) {
                let {
                    checked: t,
                    disabled: a,
                    onChange: s
                } = e;
                const o = (0, n.useCallback)((e => {
                    s ?.(e)
                }), [s]);
                return n.createElement(r.r, {
                    checked: t,
                    onChange: o,
                    disabled: a,
                    className: "relative inline-flex h-6 w-11 items-center rounded-full border border-gray-medium"
                }, n.createElement("span", {
                    className: (0, l.AK)(t ? "translate-x-6 bg-buy" : "translate-x-0.5 bg-white", "inline-block h-4 w-4 rounded-full transition")
                }))
            }
        },
        86990: function (e, t, a) {
            a.r(t), a.d(t, {
                default: function () {
                    return k
                }
            });
            var n = a(67294),
                r = a(95998),
                l = a(79655),
                s = a(38350),
                o = a(64463),
                i = a(56126),
                c = a(26141),
                m = a(47031),
                d = a(67814),
                u = a(59417),
                p = a(6665),
                f = a(6303),
                b = a(78317);
            var h = (0, n.memo)((e => {
                    let {
                        pool: t,
                        className: a
                    } = e;
                    const o = (0, r.I0)(),
                        {
                            chain: h
                        } = (0, s.LN)(),
                        [v, E] = (0, n.useState)(null),
                        x = (0, n.useCallback)((async () => {
                            E(await o.liquidity.getPool([t.token0, t.token1]))
                        }), [t]);
                    return n.createElement(n.Fragment, null, n.createElement(f.Z, {
                        id: `tooltip-farming-available-${t.address}`,
                        text: "Stake your LP tokens and earn token rewards"
                    }), n.createElement(f.Z, {
                        id: `tooltip-reward-apr-${t.address}`,
                        text: "Based on the last 7d volume"
                    }), n.createElement(c.p, {
                        as: "div",
                        className: (0, i.AK)(a, "space-y-2 overflow-hidden")
                    }, (e => {
                        let {
                            open: a
                        } = e;
                        return n.createElement(n.Fragment, null, n.createElement(c.p.Button, {
                            as: "div",
                            className: "flex cursor-pointer items-center space-x-3 py-6",
                            onClick: x
                        }, n.createElement("div", {
                            className: "flex grow items-center"
                        }, n.createElement("img", {
                            src: t.token0.wrap ?.icon || t.token0.icon,
                            alt: t.token0.wrap ?.name || t.token0.name,
                            className: "z-0 h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                        }), n.createElement("img", {
                            src: t.token1.wrap ?.icon || t.token1.icon,
                            alt: t.token1.wrap ?.name || t.token1.name,
                            className: "z-10 -ml-2.5 mr-1 h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                        }), n.createElement("div", {
                            className: "text-sm lg:text-base"
                        }, t.token0.wrap ?.symbol || t.token0.symbol, "-", t.token1.wrap ?.symbol || t.token1.symbol)), t.canBeFarmed && !t.farmed && n.createElement("span", {
                            className: "shrink rounded-sm border border-buy px-1.5 text-xs text-buy"
                        }, "Farmable"), t.farmed && n.createElement("span", {
                            className: "flex shrink items-center space-x-1 rounded-sm border border-blue-400 px-1.5 text-xs text-blue-400"
                        }, n.createElement(d.G, {
                            fixedWidth: !0,
                            icon: u.QDM,
                            spin: !0
                        }), n.createElement("span", null, "Farming")), n.createElement(d.G, {
                            fixedWidth: !0,
                            className: (0, i.AK)("shrink transition-transform", a && "rotate-180"),
                            icon: u.ptq
                        })), n.createElement(m.u, {
                            appear: !0,
                            show: a,
                            enter: "ease-in duration-500",
                            enterFrom: "opacity-0 max-h-0",
                            enterTo: "opacity-100 max-h-[17.5rem]",
                            leave: "ease-out duration-500",
                            leaveFrom: "opacity-100 max-h-[17.5rem]",
                            leaveTo: "opacity-0 max-h-0"
                        }, n.createElement(c.p.Panel, {
                            as: "div",
                            className: "px-0.5 pb-6",
                            static: !0
                        }, n.createElement("div", {
                            className: "space-y-2 rounded-sm border border-white p-3"
                        }, t.canBeFarmed && n.createElement("div", {
                            className: "flex items-center justify-between space-x-2 py-2 text-xs"
                        }, n.createElement("div", {
                            className: "flex items-center space-x-1"
                        }, n.createElement("div", null, "Farming available"), n.createElement(d.G, {
                            "data-tooltip-id": `tooltip-farming-available-${t.address}`,
                            fixedWidth: !0,
                            icon: u.sqG,
                            size: "sm"
                        })), n.createElement(l.rU, {
                            to: `/farming?chainId=${h?.id}&open=campaign-${(t.token0.wrap?.symbol||t.token0.symbol)?.toLowerCase()}-${(t.token1.wrap?.symbol||t.token1.symbol).toLowerCase()}`,
                            className: "flex items-center space-x-1 rounded-sm px-1 py-0.5 text-xs text-blue-400 ring-1 ring-blue-400 transition-shadow duration-300 hover:ring-2"
                        }, n.createElement(d.G, {
                            fixedWidth: !0,
                            icon: u.jTV,
                            shake: !0,
                            style: {
                                "--fa-animation-duration": "3s"
                            }
                        }), n.createElement("span", null, t.farmed ? "Harvest Time" : "Start Farming"))), n.createElement("div", {
                            className: "flex items-center justify-between space-x-2 text-sm"
                        }, n.createElement("div", {
                            className: "text-white/[.6]"
                        }, "Balance", t.farmed && n.createElement(n.Fragment, null, n.createElement("br", null), n.createElement("span", {
                            className: "font-semibold"
                        }, "(farming excluded)"))), n.createElement("div", {
                            className: "pt-0.5 text-right"
                        }, v ? n.createElement(n.Fragment, null, (0, i.v3)(parseFloat((0, p.d)(v.balance))), " LP", n.createElement("br", null), n.createElement("span", {
                            className: "text-xs text-white/[.6]"
                        }, "≈ ", (0, i.k)(parseFloat((0, p.d)(v.balance * v.price / b.CI))))) : n.createElement(n.Fragment, null, n.createElement("div", {
                            className: "mb-1 h-5 w-16 animate-pulse rounded-sm bg-white/[.3]"
                        }), n.createElement("div", {
                            className: "float-right h-4 w-12 animate-pulse rounded-sm bg-white/[.3]"
                        })))), n.createElement("div", {
                            className: "flex items-center justify-between space-x-2 text-sm"
                        }, n.createElement("div", {
                            className: "text-white/[.6]"
                        }, "Total supply"), v ? n.createElement("div", null, (0, i.v3)(parseFloat((0, p.d)(v.totalSupply))), " LP") : n.createElement("div", {
                            className: "h-4 w-16 animate-pulse rounded-sm bg-white/[.3]"
                        })), n.createElement("div", {
                            className: "flex items-center justify-between space-x-2 text-sm"
                        }, n.createElement("div", {
                            className: "flex items-center space-x-1"
                        }, n.createElement("div", {
                            className: "text-white/[.6]"
                        }, "LP fee reward APR"), n.createElement(d.G, {
                            "data-tooltip-id": `tooltip-reward-apr-${t.address}`,
                            fixedWidth: !0,
                            icon: u.sqG,
                            size: "sm"
                        })), v ? n.createElement("div", null, (0, i.v3)(parseFloat((0, p.d)(v.apr || 0n))), " %") : n.createElement("div", {
                            className: "h-4 w-14 animate-pulse rounded-sm bg-white/[.3]"
                        })), n.createElement("div", {
                            className: "flex items-center justify-between space-x-2 text-sm"
                        }, n.createElement("div", {
                            className: "text-white/[.6]"
                        }, "Share in Trading Pair"), v ? n.createElement("div", null, (0, i.v3)(parseFloat((0, p.d)(v.shares || 0n))), " %") : n.createElement("div", {
                            className: "h-4 w-14 animate-pulse rounded-sm bg-white/[.3]"
                        }))), n.createElement("div", {
                            className: "mt-2 flex items-center space-x-3 text-center"
                        }, t.balance > 0n ? n.createElement(l.rU, {
                            to: `remove?chainId=${h?.id}&tokenA=${t.token0.address}&tokenB=${t.token1.address}`,
                            className: "btn-outline flex-1 border-sell p-4 text-sell hover:border-dark hover:text-dark"
                        }, "Remove liquidity") : n.createElement("button", {
                            disabled: !0,
                            type: "button",
                            className: "btn-disable flex-1 p-4"
                        }, "Remove liquidity"), n.createElement(l.rU, {
                            to: `add?chainId=${h?.id}&tokenA=${t.token0.address}&tokenB=${t.token1.address}`,
                            className: "btn-outline flex-1 p-4"
                        }, "Increase liquidity")))))
                    })))
                })),
                v = a(37123),
                E = a(27172),
                x = a(89250),
                y = a(48150);
            var g = (0, n.memo)((e => {
                let {
                    pool: t,
                    className: a
                } = e;
                const s = (0, r.I0)(),
                    o = (0, r.v9)((e => e.network)),
                    h = (0, x.s0)(),
                    E = (0, v.Z)(),
                    [g, k] = (0, n.useState)(!1),
                    [w, N] = (0, n.useState)(null),
                    [P, S] = (0, n.useState)(!1),
                    C = (0, n.useCallback)((async () => {
                        N(await s.liquidity.getPoolDeprecated([t.token0, t.token1]))
                    }), [t]),
                    T = (0, n.useCallback)((e => {
                        S(e)
                    }), []),
                    I = (0, n.useCallback)((() => {
                        w && (k(!0), s.liquidity.approvePair({
                            pool: w,
                            amount: b.iD,
                            onSuccess: async () => {
                                if (E()) {
                                    const e = await s.liquidity.getPoolDeprecated([w.token0, w.token1]);
                                    e && N({
                                        ...e
                                    }), k(!1)
                                }
                            },
                            onError: async () => {
                                E() && k(!1)
                            }
                        }))
                    }), [w, E]),
                    D = (0, n.useCallback)((() => {
                        if (w) {
                            const {
                                token0: e,
                                token1: a,
                                reserve0: n,
                                reserve1: r,
                                balance: l,
                                totalSupply: i
                            } = w;
                            k(!0), s.liquidity.remove({
                                token0: {
                                    ...e,
                                    ...e.wrap
                                },
                                token1: {
                                    ...a,
                                    ...a.wrap
                                },
                                amount0: l * n / i,
                                amount1: l * r / i,
                                amountLP: l,
                                nativeOut: P,
                                deprecated: !0,
                                onSuccess: async () => {
                                    if (E()) {
                                        const n = await s.liquidity.getPoolDeprecated([e, a]);
                                        n && n.balance > 0n ? (N({
                                            ...n
                                        }), k(!1)) : h(`/liquidity/add?chainId=${o?.chain.id}&tokenA=${t.token0.address}&tokenB=${t.token1.address}`)
                                    }
                                },
                                onError: async () => {
                                    E() && k(!1)
                                }
                            })
                        }
                    }), [w, P, E]);
                return n.createElement(n.Fragment, null, n.createElement(f.Z, {
                    id: `tooltip-farming-available-${t.address}`,
                    text: "Stake your LP tokens and earn token rewards"
                }), n.createElement(f.Z, {
                    id: `tooltip-reward-apr-${t.address}`,
                    text: "Based on the last 7d volume"
                }), n.createElement(c.p, {
                    as: "div",
                    className: (0, i.AK)(a, "space-y-2 overflow-hidden")
                }, (e => {
                    let {
                        open: a
                    } = e;
                    return n.createElement(n.Fragment, null, n.createElement(c.p.Button, {
                        as: "div",
                        className: "flex cursor-pointer items-center space-x-3 py-6",
                        onClick: C
                    }, n.createElement("div", {
                        className: "flex grow items-center"
                    }, n.createElement("img", {
                        src: t.token0.wrap ?.icon || t.token0.icon,
                        alt: t.token0.wrap ?.name || t.token0.name,
                        className: "z-0 h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                    }), n.createElement("img", {
                        src: t.token1.wrap ?.icon || t.token1.icon,
                        alt: t.token1.wrap ?.name || t.token1.name,
                        className: "z-10 -ml-2.5 mr-1 h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                    }), n.createElement("div", {
                        className: "text-sm lg:text-base"
                    }, t.token0.wrap ?.symbol || t.token0.symbol, "-", t.token1.wrap ?.symbol || t.token1.symbol)), n.createElement("span", {
                        className: "shrink rounded-sm border border-[#f7931a] px-1.5 text-xs text-[#f7931a]"
                    }, "Migrate"), n.createElement(d.G, {
                        fixedWidth: !0,
                        className: (0, i.AK)("shrink transition-transform", a && "rotate-180"),
                        icon: u.ptq
                    })), n.createElement(m.u, {
                        appear: !0,
                        show: a,
                        enter: "ease-in duration-500",
                        enterFrom: "opacity-0 max-h-0",
                        enterTo: "opacity-100 max-h-[23rem]",
                        leave: "ease-out duration-500",
                        leaveFrom: "opacity-100 max-h-[23rem]",
                        leaveTo: "opacity-0 max-h-0"
                    }, n.createElement(c.p.Panel, {
                        as: "div",
                        className: "px-0.5 pb-6",
                        static: !0
                    }, n.createElement("div", {
                        className: "space-y-2 rounded-sm border border-white p-3"
                    }, n.createElement("div", {
                        className: "border border-[#f7931a] p-1.5 text-[#f7931a]"
                    }, n.createElement("div", {
                        className: "font-bold"
                    }, "Migrate your pool"), n.createElement("div", {
                        className: "text-sm"
                    }, w ?.farmed ? "Harvest farming, remove" : "Remove", " your liquidity and add liquidity into the new", " ", t.token0.symbol, "/", t.token1.symbol, " pool.")), w ?.farmed && n.createElement("div", {
                        className: "flex items-center justify-between space-x-2 py-2 text-xs"
                    }, n.createElement("div", {
                        className: "flex items-center space-x-1"
                    }, n.createElement("div", null, "Farming available"), n.createElement(d.G, {
                        "data-tooltip-id": `tooltip-farming-available-${t.address}`,
                        fixedWidth: !0,
                        icon: u.sqG,
                        size: "sm"
                    })), n.createElement(l.rU, {
                        to: `/farming?chainId=${o?.chain.id}&open=campaign-${(t.token0.wrap?.symbol||t.token0.symbol)?.toLowerCase()}-${(t.token1.wrap?.symbol||t.token1.symbol).toLowerCase()}`,
                        className: "flex items-center space-x-1 rounded-sm px-1 py-0.5 text-xs text-blue-400 ring-1 ring-blue-400 transition-shadow duration-300 hover:ring-2"
                    }, n.createElement(d.G, {
                        fixedWidth: !0,
                        icon: u.jTV,
                        shake: !0,
                        style: {
                            "--fa-animation-duration": "3s"
                        }
                    }), n.createElement("span", null, "Harvest Time"))), n.createElement("div", {
                        className: "flex items-center justify-between space-x-2 text-sm"
                    }, n.createElement("div", {
                        className: "text-white/[.6]"
                    }, "Balance", w ?.farmed && n.createElement(n.Fragment, null, n.createElement("br", null), n.createElement("span", {
                        className: "font-semibold"
                    }, "(farming excluded)"))), n.createElement("div", {
                        className: "pt-0.5 text-right"
                    }, w ? n.createElement(n.Fragment, null, (0, i.v3)(parseFloat((0, p.d)(w.balance))), " LP", n.createElement("br", null), n.createElement("span", {
                        className: "text-xs text-white/[.6]"
                    }, "≈ ", (0, i.k)(parseFloat((0, p.d)(w.balance * w.price / b.CI))))) : n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "mb-1 h-5 w-16 animate-pulse rounded-sm bg-white/[.3]"
                    }), n.createElement("div", {
                        className: "float-right h-4 w-12 animate-pulse rounded-sm bg-white/[.3]"
                    })))), n.createElement("div", {
                        className: "flex items-center justify-between space-x-2 text-sm"
                    }, n.createElement("div", {
                        className: "text-white/[.6]"
                    }, "Total supply"), w ? n.createElement("div", null, (0, i.v3)(parseFloat((0, p.d)(w.totalSupply))), " LP") : n.createElement("div", {
                        className: "h-4 w-16 animate-pulse rounded-sm bg-white/[.3]"
                    })), n.createElement("div", {
                        className: "flex items-center justify-between space-x-2 text-sm"
                    }, n.createElement("div", {
                        className: "text-white/[.6]"
                    }, "Share in Trading Pair"), w ? n.createElement("div", null, (0, i.v3)(parseFloat((0, p.d)(w.shares || 0n))), " %") : n.createElement("div", {
                        className: "h-4 w-14 animate-pulse rounded-sm bg-white/[.3]"
                    })), (w ?.token0.hasNative || w ?.token0.wrap || w ?.token1.hasNative || w ?.token1.wrap) && n.createElement("label", {
                        className: "mt-4 flex flex-none cursor-pointer items-center space-x-2"
                    }, n.createElement("span", {
                        className: "grow text-sm font-medium text-white/[.6]"
                    }, "Auto convert ", w.token0.wrap ?.symbol || w.token1.wrap ?.symbol, " to", " ", o ?.chain ?.nativeCurrency.symbol), n.createElement("div", {
                        className: "flex-none"
                    }, n.createElement(y.Z, {
                        id: "native-out",
                        checked: P,
                        onChange: T
                    })))), n.createElement("div", {
                        className: "mt-2 flex items-center space-x-3 text-center"
                    }, w && w.balance > 0n ? n.createElement("div", {
                        className: (0, i.AK)(w ?.farmed ? "w-1/2" : "w-full")
                    }, w.allowance < w.balance ? n.createElement("button", {
                        type: "button",
                        className: (0, i.AK)("btn-outline w-full border-blue-400 p-4 text-blue-400 hover:border-dark hover:text-dark", g && "opacity-50"),
                        onClick: I,
                        disabled: g
                    }, g ? n.createElement(d.G, {
                        spin: !0,
                        icon: u.IJ7
                    }) : `Approve ${t.token0.symbol}-${w.token1.symbol} LP`) : n.createElement("button", {
                        type: "button",
                        className: (0, i.AK)("btn-outline w-full border-sell p-4 text-sell hover:border-dark hover:text-dark", g && "opacity-50"),
                        onClick: D,
                        disabled: g
                    }, "Remove liquidity")) : n.createElement("button", {
                        disabled: !0,
                        type: "button",
                        className: (0, i.AK)("btn-disable p-4", w ?.farmed ? "w-1/2" : "w-full")
                    }, "Remove liquidity"), w ?.farmed && n.createElement(l.rU, {
                        to: `/farming?chainId=${o?.chain.id}&open=campaign-${(t.token0.wrap?.symbol||t.token0.symbol)?.toLowerCase()}-${(t.token1.wrap?.symbol||t.token1.symbol).toLowerCase()}`,
                        className: "btn-outline w-1/2 p-4"
                    }, "Harvest farming")))))
                })))
            }));

            function k() {
                const e = (0, r.I0)(),
                    t = (0, r.v9)((e => e.network)),
                    a = (0, r.v9)((e => e.liquidity)),
                    c = (0, s.mA)(),
                    m = (0, v.Z)(),
                    [d, u] = (0, n.useState)(!0);
                return (0, n.useEffect)((() => {
                    u(!0), e.liquidity.getSavedPools(void 0).then((() => {
                        m() && u(!1)
                    }))
                }), [t ?.chain, c.address]), n.createElement(n.Fragment, null, n.createElement(o.Z, {
                    title: "Liquidities",
                    description: "Boost your profits by depositing your tokens in a Liquidity Pool and enjoy high-yielding Sentia Tokens as a reward.",
                    canonical: (0, i.Z2)("/liquidity")
                }), n.createElement(E.Z, {
                    title: "Smardex pools",
                    subtitle: n.createElement(n.Fragment, null, "Add tokens to pools and ", n.createElement("span", {
                        className: "text-buy"
                    }, "maximize earnings"))
                }), n.createElement("div", {
                    className: "container mx-auto px-2 lg:px-0"
                }, n.createElement("div", {
                    className: "mx-auto pb-24 lg:w-2/3 xl:w-1/2"
                }, n.createElement("div", {
                    className: "rounded-sm border border-white/[.3] bg-green-dark p-4 lg:p-8"
                }, n.createElement("div", {
                    className: "mb-6 flex items-center justify-between space-x-2"
                }, n.createElement("h3", {
                    className: "text-2xl"
                }, "Liquidity"), n.createElement(l.rU, {
                    type: "button",
                    className: "btn-outline shrink px-8 py-4",
                    to: "add"
                }, "New position")), d && n.createElement("div", {
                    className: "h-20 animate-pulse bg-white/[.3]"
                }), !d && (!c.address || !a ?.pools.filter((e => e.balance > 0n || e.farmed)).length) && n.createElement("div", {
                    className: "flex h-20 items-center justify-center border-y border-white/[.1]"
                }, n.createElement("span", {
                    className: "text-2xl text-white/[.5]"
                }, "(No pools found)")), !d && c.address && a ?.pools.filter((e => e.balance > 0n || e.farmed)).map(((e, t, a) => e.deprecated ? n.createElement(g, {
                    className: (0, i.AK)(t < a.length - 1 ? "border-t" : "border-y", "border-white/[.1]"),
                    key: `${e.address}-deprecated`,
                    pool: e
                }) : n.createElement(h, {
                    className: (0, i.AK)(t < a.length - 1 ? "border-t" : "border-y", "border-white/[.1]"),
                    key: e.address,
                    pool: e
                }))), !d && n.createElement("div", {
                    className: "mt-6 flex flex-col items-center space-y-2"
                }, n.createElement("div", {
                    className: "text-center"
                }, "Don’t see a pool you joined?"), n.createElement(l.rU, {
                    type: "button",
                    to: "import",
                    className: "rounded-sm px-4 py-1 text-xs ring-1 ring-white transition-shadow duration-300 hover:ring"
                }, "Import liquidity pool"))))))
            }
        },
        37123: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return r
                }
            });
            var n = a(67294);

            function r() {
                const e = (0, n.useRef)(!1);
                return (0, n.useEffect)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), (0, n.useCallback)((() => e.current), [])
            }
        },
        26141: function (e, t, a) {
            a.d(t, {
                p: function () {
                    return F
                }
            });
            var n, r = a(67294),
                l = a(32984),
                s = a(12351),
                o = a(23784),
                i = a(19946),
                c = a(61363),
                m = a(64103),
                d = a(16567),
                u = a(14157),
                p = a(15466),
                f = a(73781);
            let b = null != (n = r.startTransition) ? n : function (e) {
                e()
            };
            var h, v = ((h = v || {})[h.Open = 0] = "Open", h[h.Closed = 1] = "Closed", h),
                E = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(E || {});
            let x = {
                    0: e => ({
                        ...e,
                        disclosureState: (0, l.E)(e.disclosureState, {
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
                y = (0, r.createContext)(null);

            function g(e) {
                let t = (0, r.useContext)(y);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, g), t
                }
                return t
            }
            y.displayName = "DisclosureContext";
            let k = (0, r.createContext)(null);

            function w(e) {
                let t = (0, r.useContext)(k);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, w), t
                }
                return t
            }
            k.displayName = "DisclosureAPIContext";
            let N = (0, r.createContext)(null);

            function P(e, t) {
                return (0, l.E)(t.type, x, e, t)
            }
            N.displayName = "DisclosurePanelContext";
            let S = r.Fragment;
            let C = s.AN.RenderStrategy | s.AN.Static;
            let T = (0, s.yV)((function (e, t) {
                    let {
                        defaultOpen: a = !1,
                        ...n
                    } = e, i = (0, r.useRef)(null), c = (0, o.T)(t, (0, o.h)((e => {
                        i.current = e
                    }), void 0 === e.as || e.as === r.Fragment)), m = (0, r.useRef)(null), u = (0, r.useRef)(null), b = (0, r.useReducer)(P, {
                        disclosureState: a ? 0 : 1,
                        linkedPanel: !1,
                        buttonRef: u,
                        panelRef: m,
                        buttonId: null,
                        panelId: null
                    }), [{
                        disclosureState: h,
                        buttonId: v
                    }, E] = b, x = (0, f.z)((e => {
                        E({
                            type: 1
                        });
                        let t = (0, p.r)(i);
                        if (!t || !v) return;
                        let a = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(v) : t.getElementById(v);
                        null == a || a.focus()
                    })), g = (0, r.useMemo)((() => ({
                        close: x
                    })), [x]), w = (0, r.useMemo)((() => ({
                        open: 0 === h,
                        close: x
                    })), [h, x]), N = {
                        ref: c
                    };
                    return r.createElement(y.Provider, {
                        value: b
                    }, r.createElement(k.Provider, {
                        value: g
                    }, r.createElement(d.up, {
                        value: (0, l.E)(h, {
                            0: d.ZM.Open,
                            1: d.ZM.Closed
                        })
                    }, (0, s.sY)({
                        ourProps: N,
                        theirProps: n,
                        slot: w,
                        defaultTag: S,
                        name: "Disclosure"
                    }))))
                })),
                I = (0, s.yV)((function (e, t) {
                    let a = (0, i.M)(),
                        {
                            id: n = `headlessui-disclosure-button-${a}`,
                            ...l
                        } = e,
                        [d, p] = g("Disclosure.Button"),
                        b = (0, r.useContext)(N),
                        h = null !== b && b === d.panelId,
                        v = (0, r.useRef)(null),
                        E = (0, o.T)(v, t, h ? null : d.buttonRef);
                    (0, r.useEffect)((() => {
                        if (!h) return p({
                            type: 2,
                            buttonId: n
                        }), () => {
                            p({
                                type: 2,
                                buttonId: null
                            })
                        }
                    }), [n, p, h]);
                    let x = (0, f.z)((e => {
                            var t;
                            if (h) {
                                if (1 === d.disclosureState) return;
                                switch (e.key) {
                                    case c.R.Space:
                                    case c.R.Enter:
                                        e.preventDefault(), e.stopPropagation(), p({
                                            type: 0
                                        }), null == (t = d.buttonRef.current) || t.focus()
                                }
                            } else switch (e.key) {
                                case c.R.Space:
                                case c.R.Enter:
                                    e.preventDefault(), e.stopPropagation(), p({
                                        type: 0
                                    })
                            }
                        })),
                        y = (0, f.z)((e => {
                            if (e.key === c.R.Space) e.preventDefault()
                        })),
                        k = (0, f.z)((t => {
                            var a;
                            (0, m.P)(t.currentTarget) || e.disabled || (h ? (p({
                                type: 0
                            }), null == (a = d.buttonRef.current) || a.focus()) : p({
                                type: 0
                            }))
                        })),
                        w = (0, r.useMemo)((() => ({
                            open: 0 === d.disclosureState
                        })), [d]),
                        P = (0, u.f)(e, v),
                        S = h ? {
                            ref: E,
                            type: P,
                            onKeyDown: x,
                            onClick: k
                        } : {
                            ref: E,
                            id: n,
                            type: P,
                            "aria-expanded": e.disabled ? void 0 : 0 === d.disclosureState,
                            "aria-controls": d.linkedPanel ? d.panelId : void 0,
                            onKeyDown: x,
                            onKeyUp: y,
                            onClick: k
                        };
                    return (0, s.sY)({
                        ourProps: S,
                        theirProps: l,
                        slot: w,
                        defaultTag: "button",
                        name: "Disclosure.Button"
                    })
                })),
                D = (0, s.yV)((function (e, t) {
                    let a = (0, i.M)(),
                        {
                            id: n = `headlessui-disclosure-panel-${a}`,
                            ...l
                        } = e,
                        [c, m] = g("Disclosure.Panel"),
                        {
                            close: u
                        } = w("Disclosure.Panel"),
                        p = (0, o.T)(t, c.panelRef, (e => {
                            b((() => m({
                                type: e ? 4 : 5
                            })))
                        }));
                    (0, r.useEffect)((() => (m({
                        type: 3,
                        panelId: n
                    }), () => {
                        m({
                            type: 3,
                            panelId: null
                        })
                    })), [n, m]);
                    let f = (0, d.oJ)(),
                        h = null !== f ? (f & d.ZM.Open) === d.ZM.Open : 0 === c.disclosureState,
                        v = (0, r.useMemo)((() => ({
                            open: 0 === c.disclosureState,
                            close: u
                        })), [c, u]),
                        E = {
                            ref: p,
                            id: n
                        };
                    return r.createElement(N.Provider, {
                        value: c.panelId
                    }, (0, s.sY)({
                        ourProps: E,
                        theirProps: l,
                        slot: v,
                        defaultTag: "div",
                        features: C,
                        visible: h,
                        name: "Disclosure.Panel"
                    }))
                })),
                F = Object.assign(T, {
                    Button: I,
                    Panel: D
                })
        },
        95389: function (e, t, a) {
            a.d(t, {
                _: function () {
                    return p
                },
                b: function () {
                    return d
                }
            });
            var n = a(67294),
                r = a(19946),
                l = a(12351),
                s = a(16723),
                o = a(23784),
                i = a(73781);
            let c = (0, n.createContext)(null);

            function m() {
                let e = (0, n.useContext)(c);
                if (null === e) {
                    let e = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, m), e
                }
                return e
            }

            function d() {
                let [e, t] = (0, n.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, n.useMemo)((() => function (e) {
                    let a = (0, i.z)((e => (t((t => [...t, e])), () => t((t => {
                            let a = t.slice(),
                                n = a.indexOf(e);
                            return -1 !== n && a.splice(n, 1), a
                        }))))),
                        r = (0, n.useMemo)((() => ({
                            register: a,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [a, e.slot, e.name, e.props]);
                    return n.createElement(c.Provider, {
                        value: r
                    }, e.children)
                }), [t])]
            }
            let u = (0, l.yV)((function (e, t) {
                    let a = (0, r.M)(),
                        {
                            id: n = `headlessui-label-${a}`,
                            passive: i = !1,
                            ...c
                        } = e,
                        d = m(),
                        u = (0, o.T)(t);
                    (0, s.e)((() => d.register(n)), [n, d.register]);
                    let p = {
                        ref: u,
                        ...d.props,
                        id: n
                    };
                    return i && ("onClick" in p && (delete p.htmlFor, delete p.onClick), "onClick" in c && delete c.onClick), (0, l.sY)({
                        ourProps: p,
                        theirProps: c,
                        slot: d.slot || {},
                        defaultTag: "label",
                        name: d.name || "Label"
                    })
                })),
                p = Object.assign(u, {})
        },
        77768: function (e, t, a) {
            a.d(t, {
                r: function () {
                    return g
                }
            });
            var n = a(67294),
                r = a(12351),
                l = a(19946),
                s = a(61363),
                o = a(64103),
                i = a(95389),
                c = a(39516),
                m = a(14157),
                d = a(23784),
                u = a(46045),
                p = a(18689),
                f = a(73781),
                b = a(31147),
                h = a(94192);
            let v = (0, n.createContext)(null);
            v.displayName = "GroupContext";
            let E = n.Fragment;
            let x = (0, r.yV)((function (e, t) {
                    let a = (0, l.M)(),
                        {
                            id: i = `headlessui-switch-${a}`,
                            checked: c,
                            defaultChecked: E = !1,
                            onChange: x,
                            name: y,
                            value: g,
                            form: k,
                            ...w
                        } = e,
                        N = (0, n.useContext)(v),
                        P = (0, n.useRef)(null),
                        S = (0, d.T)(P, t, null === N ? null : N.setSwitch),
                        [C, T] = (0, b.q)(c, x, E),
                        I = (0, f.z)((() => null == T ? void 0 : T(!C))),
                        D = (0, f.z)((e => {
                            if ((0, o.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), I()
                        })),
                        F = (0, f.z)((e => {
                            e.key === s.R.Space ? (e.preventDefault(), I()) : e.key === s.R.Enter && (0, p.g)(e.currentTarget)
                        })),
                        $ = (0, f.z)((e => e.preventDefault())),
                        R = (0, n.useMemo)((() => ({
                            checked: C
                        })), [C]),
                        A = {
                            id: i,
                            ref: S,
                            role: "switch",
                            type: (0, m.f)(e, P),
                            tabIndex: 0,
                            "aria-checked": C,
                            "aria-labelledby": null == N ? void 0 : N.labelledby,
                            "aria-describedby": null == N ? void 0 : N.describedby,
                            onClick: D,
                            onKeyUp: F,
                            onKeyPress: $
                        },
                        L = (0, h.G)();
                    return (0, n.useEffect)((() => {
                        var e;
                        let t = null == (e = P.current) ? void 0 : e.closest("form");
                        t && void 0 !== E && L.addEventListener(t, "reset", (() => {
                            T(E)
                        }))
                    }), [P, T]), n.createElement(n.Fragment, null, null != y && C && n.createElement(u._, {
                        features: u.A.Hidden,
                        ...(0, r.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            form: k,
                            checked: C,
                            name: y,
                            value: g
                        })
                    }), (0, r.sY)({
                        ourProps: A,
                        theirProps: w,
                        slot: R,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                })),
                y = function (e) {
                    var t;
                    let [a, l] = (0, n.useState)(null), [s, o] = (0, i.b)(), [m, d] = (0, c.f)(), u = (0, n.useMemo)((() => ({
                        switch: a,
                        setSwitch: l,
                        labelledby: s,
                        describedby: m
                    })), [a, l, s, m]), p = e;
                    return n.createElement(d, {
                        name: "Switch.Description"
                    }, n.createElement(o, {
                        name: "Switch.Label",
                        props: {
                            htmlFor: null == (t = u.switch) ? void 0 : t.id,
                            onClick(e) {
                                a && ("LABEL" === e.currentTarget.tagName && e.preventDefault(), a.click(), a.focus({
                                    preventScroll: !0
                                }))
                            }
                        }
                    }, n.createElement(v.Provider, {
                        value: u
                    }, (0, r.sY)({
                        ourProps: {},
                        theirProps: p,
                        defaultTag: E,
                        name: "Switch.Group"
                    }))))
                },
                g = Object.assign(x, {
                    Group: y,
                    Label: i._,
                    Description: c.d
                })
        },
        31147: function (e, t, a) {
            a.d(t, {
                q: function () {
                    return l
                }
            });
            var n = a(67294),
                r = a(73781);

            function l(e, t, a) {
                let [l, s] = (0, n.useState)(a), o = void 0 !== e, i = (0, n.useRef)(o), c = (0, n.useRef)(!1), m = (0, n.useRef)(!1);
                return !o || i.current || c.current ? !o && i.current && !m.current && (m.current = !0, i.current = o, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (c.current = !0, i.current = o, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [o ? e : l, (0, r.z)((e => (o || s(e), null == t ? void 0 : t(e))))]
            }
        },
        18689: function (e, t, a) {
            function n(e = {}, t = null, a = []) {
                for (let [n, s] of Object.entries(e)) l(a, r(t, n), s);
                return a
            }

            function r(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function l(e, t, a) {
                if (Array.isArray(a))
                    for (let [n, s] of a.entries()) l(e, r(t, n.toString()), s);
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