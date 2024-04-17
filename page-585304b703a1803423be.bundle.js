"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [9768], {
        6303: function (e, t, a) {
            var n = a(67294),
                l = a(42444),
                r = a(56126);
            const c = (0, n.memo)((e => {
                let {
                    id: t,
                    text: a,
                    place: c,
                    className: s
                } = e;
                return n.createElement(l.u, {
                    id: t,
                    place: c || "bottom",
                    className: (0, r.AK)(s, "z-50 p-2 text-xs")
                }, a)
            }));
            t.Z = c
        },
        8469: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return d
                }
            });
            var n = a(67294),
                l = a(72510),
                r = a(47031),
                c = a(67814),
                s = a(59417),
                o = a(38350),
                i = a(95998),
                m = a(56126);

            function d(e) {
                let {
                    wrapperClassName: t,
                    buttonClassName: a,
                    popupClassName: d = "right-0 top-14 lg:top-[4.63rem]",
                    hideName: u
                } = e;
                const p = (0, i.I0)(),
                    h = (0, i.v9)((e => e.network)),
                    {
                        isConnected: E
                    } = (0, o.mA)(),
                    {
                        chain: f
                    } = (0, o.LN)(),
                    g = (0, n.useCallback)((e => {
                        const t = h ?.chains.find((t => t.id === e ?.id));
                        t && p.network.setChain(t)
                    }), []),
                    {
                        switchNetwork: v,
                        isLoading: x
                    } = (0, o.g0)({
                        onSuccess(e) {
                            g(e)
                        }
                    }),
                    b = (0, n.useCallback)((e => {
                        e.id !== h ?.chain.id && (E ? v ?.(e.id) : p.network.setChain(e))
                    }), [E, v, h ?.chain]);
                return (0, n.useEffect)((() => {
                    g(f)
                }), [f]), n.createElement(l.v, {
                    as: "div",
                    className: (0, m.AK)(t, "relative")
                }, (e => {
                    let {
                        open: t
                    } = e;
                    return n.createElement(n.Fragment, null, n.createElement(l.v.Button, {
                        disabled: x,
                        className: (0, m.AK)(a, "flex items-center space-x-1 text-left")
                    }, E && f ?.unsupported && n.createElement(n.Fragment, null, n.createElement(c.G, {
                        fixedWidth: !0,
                        className: "shrink text-sell",
                        icon: s.ik8
                    }), n.createElement("span", {
                        className: (0, m.AK)(u ? "hidden lg:block" : "lg:grow", "truncate lg:grow")
                    }, "Network"), n.createElement(c.G, {
                        fixedWidth: !0,
                        className: (0, m.AK)("shrink transition-transform", t && "rotate-180"),
                        icon: s.ptq
                    })), E && x && n.createElement(n.Fragment, null, n.createElement(c.G, {
                        fixedWidth: !0,
                        className: "h-4 w-4 shrink",
                        icon: s.IJ7,
                        spin: !0
                    }), n.createElement("span", {
                        className: (0, m.AK)(u ? "hidden lg:block" : "lg:grow", "truncate lg:grow")
                    }, "Requesting"), n.createElement(c.G, {
                        className: "shrink opacity-50",
                        icon: s.ptq
                    })), !f ?.unsupported && !x && n.createElement(n.Fragment, null, n.createElement("img", {
                        src: h ?.chain.icon,
                        alt: h ?.chain.name,
                        className: "h-4 w-4 shrink"
                    }), n.createElement("span", {
                        className: (0, m.AK)(u ? "hidden lg:block" : "lg:grow", "truncate lg:grow")
                    }, h ?.chain.name), n.createElement(c.G, {
                        fixedWidth: !0,
                        className: (0, m.AK)("shrink transition-transform", t && "rotate-180"),
                        icon: s.ptq
                    }))), n.createElement(r.u, {
                        as: n.Fragment,
                        enter: "transition ease-out",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    }, n.createElement(l.v.Items, {
                        className: (0, m.AK)(d, "absolute w-60 space-y-4 overflow-hidden rounded-sm border border-white/[.3] bg-dark p-4 drop-shadow-2xl")
                    }, h ?.chains.map((e => n.createElement(l.v.Item, {
                        key: e.id,
                        as: "div",
                        className: (0, m.AK)("flex cursor-pointer items-center space-x-2 text-sm transition-all duration-500", e.id === h ?.chain ?.id ? "text-white" : "text-white/[.6] hover:text-white"),
                        onClick: () => b(e)
                    }, n.createElement("img", {
                        alt: e.name,
                        src: e.icon,
                        className: "h-4 w-4 flex-none"
                    }), n.createElement("div", {
                        className: "grow"
                    }, e.name), e.id === h ?.chain ?.id && n.createElement(c.G, {
                        fixedWidth: !0,
                        className: "shrink text-buy",
                        icon: s.diR,
                        size: "xs"
                    })))))))
                }))
            }
        },
        8981: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return c
                }
            });
            var n = a(67294),
                l = a.p + "title.png",
                r = a(56126);

            function c(e) {
                let {
                    className: t
                } = e;
                return n.createElement("div", {
                    className: (0, r.AK)(t, "flex h-screen w-auto flex-col items-center justify-center")
                }, n.createElement("img", {
                    src: l,
                    className: "h-10 w-auto animate-pulse lg:h-12",
                    alt: "Sentia"
                }))
            }
        },
        4681: function (e, t, a) {
            var n = a(48764);
            window.global = window.global ?? window, window.Buffer = window.Buffer ?? n.Buffer, window.process = window.process ?? {
                env: {}
            };
            var l = a(67294),
                r = a(95998),
                c = a(49089),
                s = a(70405),
                o = a(20745),
                i = a(23636),
                m = a(59417);
            i.vI.add(m.gPx, m.gr5, m.kZ_, m.mTx, m.ptq, m.A35, m._tD, m.r8p, m.LjC, m.eFW, m.acZ, m.r5q, m.wlW, m.l1h, m.jHE, m.ik8, m.xHz, m.iLA, m.f8k, m.DBf);
            a(47355), a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p, a.p;
            var d = a(41724),
                u = a(79655),
                p = a(89250),
                h = a(38350),
                E = a(46333),
                f = a(47031),
                g = a(67748),
                v = a(67814),
                x = a(61158);

            function b() {
                const [e, t] = (0, l.useState)(!1), {
                    chain: a,
                    chains: n
                } = (0, h.LN)(), {
                    disconnect: r
                } = (0, h.qL)(), {
                    switchNetwork: c,
                    isLoading: s
                } = (0, h.g0)({
                    onSuccess(e) {
                        t(!1)
                    }
                }), [o, i] = (0, l.useState)(), d = (0, l.useCallback)((e => {
                    c ?.(e.id), i(e)
                }), [c]);
                return (0, l.useEffect)((() => {
                    t(a ?.unsupported || !1)
                }), [a]), l.createElement(f.u, {
                    appear: !0,
                    show: e,
                    as: l.Fragment
                }, l.createElement(g.V, {
                    as: "div",
                    className: "relative z-50",
                    onClose: () => {}
                }, l.createElement(f.u.Child, {
                    as: l.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0"
                }, l.createElement("div", {
                    className: "fixed inset-0 bg-black/[.5]"
                })), l.createElement("div", {
                    className: "fixed inset-0 overflow-y-auto"
                }, l.createElement("div", {
                    className: "flex min-h-full items-center justify-center p-4"
                }, l.createElement(f.u.Child, {
                    as: l.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95"
                }, l.createElement(g.V.Panel, {
                    className: "w-full max-w-md overflow-hidden rounded-sm border border-white/[.3] bg-green-dark p-6 align-middle"
                }, l.createElement(g.V.Title, {
                    as: "div",
                    className: "font-bold text-white/[.8]"
                }, l.createElement("h3", null, "Check your network")), l.createElement("hr", {
                    className: "my-4 border-white/[0.1]"
                }), l.createElement("div", null, l.createElement("div", {
                    className: "flex flex-col space-y-2"
                }, l.createElement("div", null, "Currently Smardex only supported following chains:"), l.createElement("div", {
                    className: "grid grid-cols-2 gap-2"
                }, x.D.map((e => l.createElement("button", {
                    type: "button",
                    key: e.id,
                    className: "flex items-center space-x-1.5 rounded-sm border border-white/[.1] p-1 py-2 text-sm transition-all duration-300 hover:border-white/[.3]",
                    onClick: () => d(e),
                    disabled: s && o ?.id === e.id
                }, s && o ?.id === e.id ? l.createElement(v.G, {
                    fixedWidth: !0,
                    className: "h-4 w-4 shrink",
                    icon: m.IJ7,
                    spin: !0
                }) : l.createElement("img", {
                    className: "h-4 w-auto",
                    src: e.icon,
                    alt: e.name
                }), l.createElement("span", null, e.name))))), l.createElement("div", null, "Please choose your network to continue or disconnect.")), l.createElement("div", {
                    className: "mt-6 flex flex-col-reverse space-y-2 space-y-reverse lg:flex-row lg:space-x-2"
                }, l.createElement("div", {
                    className: "flex-1"
                }, l.createElement("button", {
                    type: "button",
                    className: "btn-outline w-full border-sell text-sell hover:border-dark hover:text-dark",
                    onClick: () => {
                        r(), t(!1)
                    }
                }, "Disconnect"))))))))))
            }
            var y = a(8981),
                w = a(84475),
                N = a(56126);
            var k = (0, l.memo)((() => {
                    const e = (0, r.I0)(),
                        {
                            notifications: t
                        } = (0, r.v9)((e => e.notificationQueue)),
                        a = (0, l.useCallback)((t => {
                            const {
                                id: a,
                                title: n,
                                type: r = "info",
                                content: c,
                                link: s,
                                duration: o = 1e4
                            } = t;
                            let i;
                            i = "error" === r ? "bg-sell" : "success" === r ? "bg-buy" : "bg-dark", w.Am.custom((t => l.createElement(f.u, {
                                show: t.visible,
                                appear: !0,
                                as: l.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95"
                            }, l.createElement("div", {
                                className: (0, N.AK)("relative relative w-96 translate-y-0 transform-gpu rounded-sm border border-white/[.3] py-6 pl-2 pr-4 shadow-2xl transition-all duration-500 ease-in-out hover:translate-y-1 hover:shadow-none", i, "success" === r ? "text-dark" : "text-white")
                            }, l.createElement("div", {
                                className: "flex items-center space-x-2"
                            }, l.createElement("div", {
                                className: "flex-none"
                            }, "info" === r && l.createElement(v.G, {
                                icon: m.IJ7,
                                size: "lg",
                                spin: !0,
                                fixedWidth: !0
                            }), "success" === r && l.createElement(v.G, {
                                icon: m.LEp,
                                size: "lg",
                                fixedWidth: !0
                            }), "error" === r && l.createElement(v.G, {
                                icon: m.gPx,
                                size: "lg",
                                fixedWidth: !0
                            })), l.createElement("div", {
                                className: "grow cursor-default overflow-hidden"
                            }, l.createElement("div", {
                                className: "text-base font-semibold"
                            }, n), c && l.createElement("div", {
                                className: "mt-2 text-sm"
                            }, s ? l.createElement("a", {
                                className: "hover:underline",
                                href: s,
                                target: "_blank",
                                rel: "noreferrer"
                            }, c) : l.createElement("span", null, c)))), l.createElement(v.G, {
                                role: "button",
                                className: "absolute right-2 top-2 text-lg transition-all",
                                icon: m.YIN,
                                onClick: () => (t => {
                                    w.Am.dismiss(t.id), e.notificationQueue.remove({
                                        id: t.id
                                    })
                                })(t)
                            })))), {
                                id: a,
                                position: "top-right",
                                duration: o
                            }), setTimeout((() => {
                                e.notificationQueue.remove({
                                    id: a
                                })
                            }), o)
                        }), []);
                    return (0, l.useEffect)((() => {
                        t.forEach((e => {
                            a(e)
                        }))
                    }), [t]), l.createElement(w.x7, null)
                })),
                A = a.p + "title.png",
                z = a(89738),
                W = a(72510);
            var F = (0, l.memo)((e => {
                let {
                    className: t
                } = e;
                return l.createElement(W.v, {
                    as: "div",
                    className: (0, N.AK)(t, "relative z-50")
                }, l.createElement(W.v.Button, null, l.createElement(v.G, {
                    icon: m.S6C,
                    size: "lg",
                    className: "text-buy hover:text-white"
                })), l.createElement(f.u, {
                    as: l.Fragment,
                    enter: "transition ease-out",
                    enterFrom: "opacity-0 translate-y-1",
                    enterTo: "opacity-100 translate-y-0",
                    leave: "transition ease-in duration-150",
                    leaveFrom: "opacity-100 translate-y-0",
                    leaveTo: "opacity-0 translate-y-1"
                }, l.createElement(W.v.Items, {
                    className: "absolute right-0 top-16 w-52 space-y-4 overflow-hidden rounded-sm border border-white/[.3] bg-dark p-4 text-left text-sm drop-shadow-2xl"
                }, z.U.filter((e => e.header && e.collapse)).map((e => l.createElement("div", {
                    key: e.value
                }, e.url ? l.createElement(W.v.Item, {
                    as: "a",
                    href: e.url,
                    target: e.target,
                    className: "flex items-center space-x-1.5 text-white/[.6] transition-all duration-300 hover:text-white"
                }, e.collapseIcon && l.createElement(v.G, {
                    fixedWidth: !0,
                    className: "shrink",
                    icon: e.collapseIcon
                }), l.createElement("div", {
                    className: "grow"
                }, e.name), l.createElement(v.G, {
                    fixedWidth: !0,
                    className: "shrink -rotate-45",
                    icon: m.eFW
                })) : l.createElement(W.v.Item, null, l.createElement(u.OL, {
                    to: e.link || "#",
                    className: e => {
                        let {
                            isActive: t
                        } = e;
                        return (0, N.AK)("flex items-center space-x-1.5 transition-all duration-300", t ? "text-white" : "text-white/[.6] hover:text-white")
                    }
                }, e.collapseIcon && l.createElement(v.G, {
                    fixedWidth: !0,
                    className: "shrink",
                    icon: e.collapseIcon
                }), l.createElement("div", {
                    className: "grow"
                }, e.name)))))))))
            }));

            function C(e) {
                let {
                    className: t
                } = e;
                return l.createElement("div", {
                    className: (0, N.AK)(t, "")
                }, l.createElement("div", {
                    className: "flex h-full w-full items-center justify-center space-x-6 text-lg"
                }, z.U.filter((e => e.header && !e.collapse)).map((e => e.url ? l.createElement("a", {
                    key: e.value,
                    href: e.url,
                    target: e.target,
                    className: "text-white/[.6] transition-all duration-300 hover:text-white"
                }, e.name) : l.createElement(u.OL, {
                    key: e.value,
                    to: e.link || "#",
                    className: e => {
                        let {
                            isActive: t
                        } = e;
                        return (0, N.AK)("transition-all duration-300", t ? "text-white" : "text-white/[.6] hover:text-white")
                    }
                }, e.name))), l.createElement(F, null)))
            }
            var B = a.p + "logo.png";
            var I = (0, l.memo)((e => {
                    let {
                        className: t,
                        hideLogo: a
                    } = e;
                    const n = (0, r.v9)((e => e.metrics));
                    return l.createElement("div", {
                        className: (0, N.AK)(t)
                    }, l.createElement("div", {
                        className: "flex items-center space-x-1"
                    }, !a && l.createElement("img", {
                        src: B,
                        alt: "Sentia price",
                        className: "h-4"
                    }), l.createElement("div", null, "$0.00")))
                })),
                T = a(86215),
                P = a(1935),
                G = a.n(P);

            function L(e) {
                let {
                    accountDisplayName: t,
                    className: a,
                    size: n = 16
                } = e;
                const r = (0, l.useRef)(null);
                return (0, l.useEffect)((() => {
                    r.current && (r.current.innerHTML = "", r.current.appendChild(G()(n, parseInt(t.slice(2, 10), 16))))
                }), [t]), l.createElement("div", {
                    ref: r,
                    className: `${a} flex items-center`
                })
            }
            var S = a(6303);

            function K(e) {
                let {
                    account: t,
                    className: a
                } = e;
                const n = (0, r.I0)(),
                    c = (0, r.v9)((e => e.transactionQueue)),
                    s = (0, r.v9)((e => e.network)),
                    {
                        disconnect: o
                    } = (0, h.qL)(),
                    [i, d] = (0, l.useState)(!1),
                    [p, E] = (0, l.useState)(!1),
                    g = (0, l.useCallback)((() => {
                        navigator.clipboard.writeText(t ?.address || "").then((() => {
                            d(!0), setTimeout((() => {
                                d(!1)
                            }), 1e3)
                        }))
                    }), [t ?.address]),
                    x = (0, l.useCallback)((() => {
                        E(!0)
                    }), []),
                    b = (0, l.useCallback)((() => {
                        E(!1)
                    }), []),
                    y = (0, l.useCallback)((() => {
                        n.transactionQueue ?.clear(void 0)
                    }), []),
                    w = (0, l.useCallback)((() => {
                        o()
                    }), []);
                return l.createElement(T.J, {
                    className: "relative z-50"
                }, (e => {
                    let {
                        open: n
                    } = e;
                    return l.createElement(l.Fragment, null, l.createElement(T.J.Button, {
                        className: (0, N.AK)(a, "flex items-center space-x-1 rounded-sm border border-white/[.3] bg-dark p-2 text-xs lg:p-4")
                    }, c ?.transactions.some((e => "pending" === e.status)) ? l.createElement(l.Fragment, null, l.createElement(v.G, {
                        icon: m.IJ7,
                        className: "text-buy",
                        spin: !0
                    }), l.createElement("div", {
                        className: "hidden grow lg:block"
                    }, c ?.transactions.filter((e => "pending" === e.status)).length, " Pending")) : l.createElement(l.Fragment, null, l.createElement(L, {
                        accountDisplayName: t ?.displayName || "",
                        size: 16,
                        className: "shrink"
                    }), l.createElement("div", {
                        className: "hidden grow text-left lg:block"
                    }, t ?.displayName)), l.createElement(v.G, {
                        fixedWidth: !0,
                        className: (0, N.AK)("shrink transition-transform", n && "rotate-180"),
                        icon: m.ptq
                    })), l.createElement(f.u, {
                        as: l.Fragment,
                        enter: "transition ease-out",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    }, l.createElement(T.J.Panel, {
                        className: "absolute right-0 top-14 overflow-hidden rounded-sm border border-white/[.3] bg-dark p-4 text-left text-sm drop-shadow-2xl lg:top-[4.63rem]"
                    }, p ? l.createElement("div", {
                        className: "flex w-60 flex-col space-y-2"
                    }, l.createElement("div", {
                        className: "flex flex-1 items-center space-x-1"
                    }, l.createElement(v.G, {
                        role: "button",
                        icon: m.acZ,
                        size: "xs",
                        className: "shrink",
                        onClick: b
                    }), l.createElement("div", {
                        className: "grow text-center"
                    }, "Transactions"), l.createElement(v.G, {
                        role: "button",
                        icon: m.I7k,
                        size: "xs",
                        className: "shrink text-sell",
                        onClick: y
                    })), l.createElement("hr", {
                        className: "flex-1 border-white/[0.25]"
                    }), c ?.transactions.slice((c ?.transactions.length || 0) - 5).map((e => l.createElement("div", {
                        key: e.hash,
                        className: "flex-1"
                    }, l.createElement("a", {
                        href: `${s?.chain.blockExplorers?.default.url}/tx/${e?.hash}`,
                        className: "mt-1 flex-1",
                        target: "_blank",
                        rel: "noreferrer"
                    }, l.createElement("div", {
                        className: "flex items-center space-x-2 p-1 transition-opacity hover:opacity-50"
                    }, l.createElement("div", {
                        className: "grow"
                    }, e.name), l.createElement("div", {
                        className: "flex-none"
                    }, "pending" === e.status && l.createElement(v.G, {
                        icon: m.IJ7,
                        spin: !0,
                        className: "text-buy"
                    }), "success" === e.status && l.createElement(v.G, {
                        icon: m.f8k,
                        className: "text-buy"
                    }), "error" === e.status && l.createElement(v.G, {
                        icon: m.gPx,
                        className: "text-sell"
                    }))))))), !c ?.transactions.length && l.createElement("div", {
                        className: "flex-1 p-1 text-center text-white/[.5]"
                    }, "Your transactions will appear here")) : l.createElement(l.Fragment, null, l.createElement(S.Z, {
                        id: "tooltip-explore",
                        text: "Explore"
                    }), l.createElement(S.Z, {
                        id: "tooltip-disconnect",
                        text: "Disconnect"
                    }), l.createElement(S.Z, {
                        id: "tooltip-copy",
                        text: "Copy"
                    }), l.createElement("div", {
                        className: "flex w-60 flex-col items-center space-y-4"
                    }, l.createElement("div", {
                        className: "flex flex-1 items-center"
                    }, l.createElement(L, {
                        accountDisplayName: t ?.displayName || "",
                        size: 24,
                        className: "mr-2 flex-none"
                    }), l.createElement("div", {
                        className: "mr-4 grow"
                    }, t ?.displayName), l.createElement("div", {
                        className: "relative mx-2 flex-1"
                    }, i && l.createElement(v.G, {
                        role: "button",
                        icon: m.kZ_,
                        className: (0, N.AK)("absolute inset-0 h-4 w-4 animate-ping text-buy")
                    }), l.createElement(v.G, {
                        role: "button",
                        "data-tooltip-id": "tooltip-copy",
                        icon: m.kZ_,
                        onClick: g,
                        className: "h-4 w-4"
                    })), l.createElement("div", {
                        className: "ml-2 mr-4 flex-1"
                    }, l.createElement("a", {
                        href: `${s?.chain.blockExplorers?.default.url}/address/${t?.address}`,
                        target: "_blank",
                        rel: "noreferrer"
                    }, l.createElement(v.G, {
                        className: "-rotate-45",
                        "data-tooltip-id": "tooltip-explore",
                        icon: m.eFW
                    }))), l.createElement(v.G, {
                        role: "button",
                        "data-tooltip-id": "tooltip-disconnect",
                        icon: m.oTz,
                        className: "h-4 w-4 flex-1 text-sell",
                        onClick: w
                    })), l.createElement("div", {
                        className: "flex-1 text-center text-xl font-bold"
                    }, t ?.displayBalance), l.createElement(u.rU, {
                        to: "/swap",
                        className: "btn-outline space-x-2 px-4"
                    }, l.createElement("span", null, "Swap to SMART"), l.createElement(v.G, {
                        className: "flex-none -rotate-45",
                        icon: m.eFW
                    })), l.createElement("hr", {
                        className: "w-full flex-1 border-white/[0.25]"
                    }), l.createElement("button", {
                        type: "button",
                        onClick: x,
                        className: "mt-1 flex w-full flex-1 items-center space-x-2 rounded-sm p-1 transition-shadow duration-300 hover:ring-1 hover:ring-white"
                    }, l.createElement("div", {
                        className: "grow text-left"
                    }, "Transactions"), l.createElement(v.G, {
                        icon: m.eFW,
                        className: "h-4 w-4 shrink"
                    })))))))
                }))
            }
            var D = a(8469);

            function _() {
                return l.createElement(E.NL.Custom, null, (e => {
                    let {
                        account: t,
                        chain: a,
                        openAccountModal: n,
                        openChainModal: r,
                        openConnectModal: c,
                        authenticationStatus: s,
                        mounted: o
                    } = e;
                    return l.createElement("div", {
                        className: (0, N.AK)(!o && "opacity-0")
                    }, l.createElement("div", {
                        className: "flex items-center space-x-2"
                    }, l.createElement(D.Z, {
                        hideName: !0,
                        wrapperClassName: "z-50",
                        buttonClassName: "btn lg:w-36 lg:p-4"
                    }), t ? l.createElement(K, {
                        className: "flex-1 lg:w-36",
                        account: t
                    }) : l.createElement("button", {
                        type: "button",
                        onClick: c,
                        className: "btn-outline flex items-center space-x-2 border-white text-white hover:border-dark hover:text-dark lg:w-36 lg:p-4"
                    }, l.createElement(v.G, {
                        icon: m.X5K
                    }), l.createElement("span", {
                        className: "hidden lg:inline"
                    }, "Connect Wallet"))))
                }))
            }

            function Z(e) {
                let {
                    className: t
                } = e;
                return l.createElement(W.v, {
                    as: "div",
                    className: (0, N.AK)(t, "relative z-50")
                }, (e => {
                    let {
                        open: t
                    } = e;
                    return l.createElement(l.Fragment, null, l.createElement(W.v.Button, {
                        className: "flex items-center"
                    }, l.createElement(v.G, {
                        icon: t ? m.g82 : m.xiG,
                        className: "h-7 w-7"
                    })), l.createElement(f.u, {
                        as: l.Fragment,
                        enter: "transition ease-out",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    }, l.createElement(W.v.Items, {
                        className: "absolute right-0 top-14 w-52 overflow-hidden rounded-sm border border-white/[.3] bg-dark p-7 drop-shadow-2xl"
                    }, l.createElement("div", {
                        className: "text-white"
                    }, l.createElement("div", {
                        className: "space-y-4"
                    }, z.U.filter((e => e.header)).map((e => l.createElement("div", {
                        key: e.value
                    }, e.url ? l.createElement(W.v.Item, {
                        as: "a",
                        href: e.url,
                        target: e.target,
                        className: "block text-white/[.6] transition-all duration-300 hover:text-white"
                    }, e.name) : l.createElement(W.v.Item, null, l.createElement(u.OL, {
                        to: e.link || "#",
                        className: e => {
                            let {
                                isActive: t
                            } = e;
                            return (0, N.AK)("block transition-all duration-300", t ? "text-white" : "text-white/[.6] hover:text-white")
                        }
                    }, e.name))))))))))
                }))
            }

            function q() {
                const e = (0, p.TH)(),
                    t = (0, l.useRef)(null);
                return (0, l.useLayoutEffect)((() => {
                    const e = () => {
                        window.scrollY > 20 ? (t.current ?.classList.remove("scale-x-0"), t.current ?.classList.add("scale-x-100")) : (t.current ?.classList.remove("scale-x-100"), t.current ?.classList.add("scale-x-0"))
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }), []), l.createElement("nav", {
                    className: "fixed z-50 w-full border-b border-white/[.1] bg-[#08171D] p-4"
                }, l.createElement("div", {
                    className: "container relative mx-auto flex items-center justify-between"
                }, l.createElement(C, {
                    className: "absolute inset-0 z-0 hidden xl:block"
                }), l.createElement("div", {
                    className: "relative z-10 shrink"
                }, l.createElement(u.rU, {
                    to: "/home"
                }, l.createElement("img", {
                    src: A,
                    className: "mt-[-0.65rem] h-[2.6rem]",
                    alt: "Sentia"
                })), l.createElement(I, {
                    hideLogo: !0,
                    className: "absolute -bottom-2.5 left-8 text-xs text-buy lg:hidden"
                })), l.createElement("div", {
                    className: "z-10 flex shrink items-center space-x-2"
                }, l.createElement(I, {
                    className: "hidden text-sm text-white lg:block"
                }), "/home" === e.pathname || "/" === e.pathname ? l.createElement(u.rU, {
                    to: "/swap",
                    className: "btn-outline lg:p-4"
                }, "Launch App") : l.createElement(_, null), l.createElement(Z, {
                    className: "block shrink xl:hidden"
                }))), l.createElement("div", {
                    ref: t,
                    className: "absolute inset-x-0 bottom-0 scale-x-0 border-b border-buy transition-transform duration-300 ease-in-out"
                }))
            }
            const j = {
                    blurs: {
                        modalOverlay: "blur(0px)"
                    },
                    colors: {
                        accentColor: "#00ffb2",
                        accentColorForeground: "#08171d",
                        actionButtonBorder: "rgba(0, 255, 255, 0.04)",
                        actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
                        actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
                        closeButton: "rgba(224, 232, 255, 0.6)",
                        closeButtonBackground: "rgba(255, 255, 255, 0.08)",
                        connectButtonBackground: "#1A1B1F",
                        connectButtonBackgroundError: "#FF494A",
                        connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
                        connectButtonText: "#FFF",
                        connectButtonTextError: "#FFF",
                        connectionIndicator: "#30E000",
                        downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
                        downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
                        error: "#FF494A",
                        generalBorder: "rgba(255, 255, 255, 0.08)",
                        generalBorderDim: "rgba(255, 255, 255, 0.04)",
                        menuItemBackground: "rgba(224, 232, 255, 0.1)",
                        modalBackdrop: "rgba(0, 0, 0, 0.5)",
                        modalBackground: "#0c262c",
                        modalBorder: "rgba(224, 232, 255, 0.25)",
                        modalText: "#FFF",
                        modalTextDim: "rgba(224, 232, 255, 0.3)",
                        modalTextSecondary: "rgba(255, 255, 255, 0.6)",
                        profileAction: "rgba(224, 232, 255, 0.1)",
                        profileActionHover: "rgba(224, 232, 255, 0.2)",
                        profileForeground: "rgba(224, 232, 255, 0.05)",
                        selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
                        standby: "#FFD641"
                    },
                    fonts: {
                        body: '"Haffer SQ", system-ui, sans-serif'
                    },
                    radii: {
                        actionButton: "1px",
                        connectButton: "1px",
                        modal: "1px",
                        modalMobile: "1px",
                        menuButton: "1px"
                    },
                    shadows: {
                        connectButton: "none",
                        dialog: "none",
                        profileDetailsAction: "none",
                        selectedOption: "none",
                        selectedWallet: "none",
                        walletLogo: "none"
                    }
                },
                M = l.lazy((() => Promise.all([a.e(7857), a.e(2155), a.e(9363), a.e(8975), a.e(2010), a.e(1657), a.e(5842), a.e(3080), a.e(3024), a.e(8687), a.e(1136), a.e(3903)]).then(a.bind(a, 67892)))),
                H = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(4288), a.e(5027), a.e(2667), a.e(6860), a.e(3095)]).then(a.bind(a, 43095)))),
                J = l.lazy((() => a.e(3742).then(a.bind(a, 3742)))),
                O = l.lazy((() => a.e(2331).then(a.bind(a, 86990)))),
                R = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(4288), a.e(3035), a.e(8840), a.e(5384), a.e(2667), a.e(209)]).then(a.bind(a, 80209)))),
                V = l.lazy((() => Promise.all([a.e(2667), a.e(14)]).then(a.bind(a, 9055)))),
                $ = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(4288), a.e(9726)]).then(a.bind(a, 6939)))),
                U = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(7857), a.e(5020)]).then(a.bind(a, 67983)))),
                X = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(7857), a.e(8820)]).then(a.bind(a, 83666)))),
                Q = l.lazy((() => a.e(1905).then(a.bind(a, 91905)))),
                Y = l.lazy((() => a.e(7410).then(a.bind(a, 84097)))),
                ee = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(5362), a.e(3679)]).then(a.bind(a, 53679)))),
                te = l.lazy((() => Promise.all([a.e(4649), a.e(5362), a.e(9106)]).then(a.bind(a, 89106)))),
                ae = l.lazy((() => a.e(4753).then(a.bind(a, 48556)))),
                ne = l.lazy((() => a.e(6088).then(a.bind(a, 39085)))),
                le = l.lazy((() => a.e(7204).then(a.bind(a, 8850)))),
                re = l.lazy((() => a.e(2513).then(a.bind(a, 12513)))),
                ce = l.lazy((() => a.e(474).then(a.bind(a, 474)))),
                se = l.lazy((() => a.e(8716).then(a.bind(a, 67146)))),
                oe = l.lazy((() => a.e(6046).then(a.bind(a, 91743)))),
                ie = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(4288), a.e(6097)]).then(a.bind(a, 96748)))),
                me = l.lazy((() => Promise.all([a.e(2155), a.e(9363), a.e(8975), a.e(2010), a.e(1657), a.e(5842), a.e(3080), a.e(2145), a.e(9448), a.e(4511), a.e(9198), a.e(8687), a.e(3413), a.e(1751)]).then(a.bind(a, 61507)))),
                de = l.lazy((() => Promise.all([a.e(2155), a.e(9363), a.e(8975), a.e(2010), a.e(1657), a.e(5842), a.e(3080), a.e(6110)]).then(a.bind(a, 4504)))),
                ue = l.lazy((() => a.e(4740).then(a.bind(a, 69700)))),
                pe = l.lazy((() => Promise.all([a.e(3024), a.e(3791)]).then(a.bind(a, 17835)))),
                he = l.lazy((() => a.e(1555).then(a.bind(a, 792)))),
                Ee = l.lazy((() => a.e(5061).then(a.bind(a, 46781)))),
                fe = l.lazy((() => a.e(5925).then(a.bind(a, 39938)))),
                ge = l.lazy((() => a.e(1801).then(a.bind(a, 60823)))),
                ve = l.lazy((() => a.e(1079).then(a.bind(a, 4094)))),
                xe = l.lazy((() => Promise.all([a.e(7857), a.e(8506)]).then(a.bind(a, 36309)))),
                be = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(2145), a.e(9448), a.e(4511), a.e(9198), a.e(8244)]).then(a.bind(a, 83757)))),
                ye = l.lazy((() => a.e(707).then(a.bind(a, 90707)))),
                we = l.lazy((() => a.e(4990).then(a.bind(a, 94990)))),
                Ne = l.lazy((() => Promise.all([a.e(5733), a.e(3745)]).then(a.bind(a, 59622))));

            function ke() {
                const e = (0, r.I0)(),
                    t = (0, r.v9)((e => e.network)),
                    [a, n] = (0, l.useState)(!0);
                return (0, l.useEffect)((() => {
                    let t;
                    return (async () => {
                        try {
                            await Promise.all([e.metrics.getGlobalTVL(void 0), e.metrics.getSDEXPrice(void 0), e.token.getApiTokens(void 0)])
                        } catch (e) {
                            console.error(`[APP:INIT] ${e}`)
                        }
                        n(!1), t = setInterval((() => {
                            e.metrics.getGlobalTVL(void 0), e.metrics.getSDEXPrice(void 0)
                        }), 3e4)
                    })(), () => {
                        clearInterval(t)
                    }
                }), [t ?.chain]), a ? l.createElement(y.Z, null) : l.createElement(h.eM, {
                    config: t ?.wagmiConfig
                }, l.createElement(E.pj, {
                    chains: t ?.chains,
                    theme: j
                }, l.createElement(u.VK, null, l.createElement(q, null), l.createElement(l.Suspense, {
                    fallback: l.createElement(y.Z, null)
                }, l.createElement(p.Z5, null, l.createElement(p.AW, {
                    path: "/",
                    element: l.createElement(M, null)
                }), l.createElement(p.AW, {
                    path: "home",
                    element: l.createElement(M, null)
                }), l.createElement(p.AW, {
                    path: "swap",
                    element: l.createElement(H, null)
                }), l.createElement(p.AW, {
                    path: "liquidity",
                    element: l.createElement(J, null)
                }, l.createElement(p.AW, {
                    index: !0,
                    element: l.createElement(O, null)
                }), l.createElement(p.AW, {
                    path: "add",
                    element: l.createElement(R, null)
                }), l.createElement(p.AW, {
                    path: "import",
                    element: l.createElement(V, null)
                }), l.createElement(p.AW, {
                    path: "remove",
                    element: l.createElement($, null)
                })), l.createElement(p.AW, {
                    path: "farming",
                    element: l.createElement(U, null)
                }), l.createElement(p.AW, {
                    path: "staking",
                    element: l.createElement(X, null)
                }), l.createElement(p.AW, {
                    path: "bridge",
                    element: l.createElement(Q, null)
                }, l.createElement(p.AW, {
                    index: !0,
                    element: l.createElement(Y, null)
                }), l.createElement(p.AW, {
                    path: "transfer",
                    element: l.createElement(ee, null)
                }), l.createElement(p.AW, {
                    path: "redeem",
                    element: l.createElement(te, null)
                })), l.createElement(p.AW, {
                    path: "community-rewards",
                    element: l.createElement(xe, null)
                }), l.createElement(p.AW, {
                    path: "security",
                    element: l.createElement(ne, null)
                }), l.createElement(p.AW, {
                    path: "resources",
                    element: l.createElement(ae, null)
                }), l.createElement(p.AW, {
                    path: "team",
                    element: l.createElement(pe, null)
                }), l.createElement(p.AW, {
                    path: "audit-reports",
                    element: l.createElement(le, null)
                }), l.createElement(p.AW, {
                    path: "performance",
                    element: l.createElement(ce, null)
                }, l.createElement(p.AW, {
                    index: !0,
                    element: l.createElement(se, null)
                }), l.createElement(p.AW, {
                    path: "comparator",
                    element: l.createElement(oe, null)
                }), l.createElement(p.AW, {
                    path: "calculator",
                    element: l.createElement(ie, null)
                }), l.createElement(p.AW, {
                    path: "historic-prices",
                    element: l.createElement(me, null)
                })), l.createElement(p.AW, {
                    path: "analytics",
                    element: l.createElement(de, null)
                }), l.createElement(p.AW, {
                    path: "jobs",
                    element: l.createElement(ue, null)
                }), l.createElement(p.AW, {
                    path: "terms",
                    element: l.createElement(he, null)
                }), l.createElement(p.AW, {
                    path: "privacy-policy",
                    element: l.createElement(Ee, null)
                }), l.createElement(p.AW, {
                    path: "*",
                    element: l.createElement(fe, null)
                }), l.createElement(p.AW, {
                    path: "farming-migration",
                    element: l.createElement(ge, null)
                }), l.createElement(p.AW, {
                    path: "staking-migration",
                    element: l.createElement(ve, null)
                }), l.createElement(p.AW, {
                    path: "farming-sponsor",
                    element: l.createElement(be, null)
                }), l.createElement(p.AW, {
                    path: "qr",
                    element: l.createElement(ye, null)
                }), l.createElement(p.AW, {
                    path: "qr2",
                    element: l.createElement(we, null)
                }), l.createElement(p.AW, {
                    path: "media-kit",
                    element: l.createElement(Ne, null)
                }), l.createElement(p.AW, {
                    path: "simulator/*",
                    element: l.createElement(re, {
                        search: "simulator",
                        replace: "performance"
                    })
                }))), l.createElement(b, null), l.createElement(k, null))))
            }
            const Ae = l.lazy((() => Promise.all([a.e(4649), a.e(7333), a.e(4288), a.e(5027), a.e(2667), a.e(6860), a.e(2955)]).then(a.bind(a, 32955))));

            function ze() {
                const e = (0, r.I0)(),
                    t = (0, r.v9)((e => e.network)),
                    [a, n] = (0, l.useState)(!0);
                return (0, l.useEffect)((() => {
                    (async () => {
                        try {
                            await e.token.getApiTokens(void 0)
                        } catch (e) {
                            console.error(`[APP:INIT] ${e}`)
                        }
                        n(!1)
                    })()
                }), [t ?.chain]), a ? l.createElement(y.Z, null) : l.createElement(h.eM, {
                    config: t ?.wagmiConfig
                }, l.createElement(E.pj, {
                    chains: t ?.chains,
                    theme: j
                }, l.createElement(u.VK, {
                    basename: "embed"
                }, l.createElement(l.Suspense, {
                    fallback: l.createElement(y.Z, null)
                }, l.createElement(p.Z5, null, l.createElement(p.AW, {
                    path: "swap",
                    element: l.createElement(Ae, null)
                }))), l.createElement(b, null), l.createElement(k, null))))
            }
            c.ZP.initialize("G-0XRX1HD37K");
            const We = document.getElementById("root");
            if (We) {
                const e = (0, o.s)(We),
                    t = window.location.pathname.startsWith("/embed/");
                e.render(l.createElement(r.zt, {
                    store: d.y
                }, l.createElement(s.B6, null, t ? l.createElement(ze, null) : l.createElement(ke, null))))
            }
        },
        89738: function (e, t, a) {
            a.d(t, {
                U: function () {
                    return l
                }
            });
            var n = a(59417);
            const l = [{
                link: "/home",
                value: "home",
                name: "Home",
                header: !1,
                footer: !0
            }, {
                link: "/swap",
                value: "swap",
                name: "Swap",
                header: !0,
                footer: !0
            }, {
                link: "/liquidity",
                value: "liquidity",
                name: "Liquidity",
                header: !0,
                footer: !0
            }, {
                link: "/farming",
                value: "farming",
                name: "Farming",
                header: !0,
                footer: !0
            }, {
                link: "/staking",
                value: "staking",
                name: "Staking",
                header: !0,
                footer: !0
            }]
        }
    },
    function (e) {
        e.O(0, [6516, 6424, 5218, 4440, 7764, 1143, 5434, 9122, 4483, 9218, 5397, 5482, 9177, 5847, 1392, 4166, 7463, 7872, 1228, 9327, 5375, 6049, 927, 901, 662, 5488, 7196, 923, 1003, 3813, 5667, 4559, 5014, 7070, 3840, 8057, 546, 9705, 7263, 2556, 4211, 8852, 7816, 1539, 5182, 6593, 1343, 1890, 4384, 7863, 1447, 1696, 780, 1836, 1740, 6486, 3720, 1698, 5107, 8880, 6298, 3108, 8447, 6273, 4687, 7885, 4758, 2237, 6333, 7103, 3935, 3036, 7342, 8065, 9917, 210, 828, 5085, 7976, 2508, 8045, 2361, 3593, 6280, 8097, 5742, 4226, 5550, 4882, 4645, 4736, 9417, 3064, 8792, 9786, 3256, 7797, 5932, 1724, 3856, 3712], (function () {
            return t = 4681, e(e.s = t);
            var t
        }));
        e.O()
    }
]);