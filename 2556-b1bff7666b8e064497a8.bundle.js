"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [2556], {
        40167: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.accountSize = void 0;
            const n = r(75188);

            function o(e, t) {
                if ("enum" === t.type.kind) {
                    let r = t.type.variants.map((t => void 0 === t.fields ? 0 : t.fields.map((t => {
                        if ("object" != typeof t || !("name" in t)) throw new Error("Tuple enum variants not yet implemented.");
                        return i(e, t.type)
                    })).reduce(((e, t) => e + t))));
                    return Math.max(...r) + 1
                }
                return void 0 === t.type.fields ? 0 : t.type.fields.map((t => i(e, t.type))).reduce(((e, t) => e + t), 0)
            }

            function i(e, t) {
                var r, a;
                switch (t) {
                    case "bool":
                    case "u8":
                    case "i8":
                    case "bytes":
                    case "string":
                        return 1;
                    case "i16":
                    case "u16":
                        return 2;
                    case "u32":
                    case "i32":
                    case "f32":
                        return 4;
                    case "u64":
                    case "i64":
                    case "f64":
                        return 8;
                    case "u128":
                    case "i128":
                        return 16;
                    case "publicKey":
                        return 32;
                    default:
                        if ("vec" in t) return 1;
                        if ("option" in t) return 1 + i(e, t.option);
                        if ("coption" in t) return 4 + i(e, t.coption);
                        if ("defined" in t) {
                            const i = null !== (a = null === (r = e.types) || void 0 === r ? void 0 : r.filter((e => e.name === t.defined))) && void 0 !== a ? a : [];
                            if (1 !== i.length) throw new n.IdlError(`Type not found: ${JSON.stringify(t)}`);
                            return o(e, i[0])
                        }
                        if ("array" in t) {
                            let r = t.array[0],
                                n = t.array[1];
                            return i(e, r) * n
                        }
                        throw new Error(`Invalid type ${JSON.stringify(t)}`)
                }
            }
            t.accountSize = o
        },
        75188: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IdlError = void 0;
            class r extends Error {
                constructor(e) {
                    super(e), this.name = "IdlError"
                }
            }
            t.IdlError = r
        },
        68994: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function (e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                },
                a = this && this.__awaiter || function (e, t, r, n) {
                    return new(r || (r = Promise))((function (o, i) {
                        function a(e) {
                            try {
                                s(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            try {
                                s(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(a, c)
                        }
                        s((n = n.apply(e, t || [])).next())
                    }))
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encodeIdlAccount = t.decodeIdlAccount = t.seed = t.idlAddress = void 0;
            const c = r(48764),
                s = r(59917),
                u = i(r(49593));

            function d() {
                return "anchor:idl"
            }
            t.idlAddress = function (e) {
                return a(this, void 0, void 0, (function* () {
                    const t = (yield s.PublicKey.findProgramAddress([], e))[0];
                    return yield s.PublicKey.createWithSeed(t, "anchor:idl", e)
                }))
            }, t.seed = d;
            const l = u.struct([u.publicKey("authority"), u.vecU8("data")]);
            t.decodeIdlAccount = function (e) {
                return l.decode(e)
            }, t.encodeIdlAccount = function (e) {
                const t = c.Buffer.alloc(1e3),
                    r = l.encode(e, t);
                return t.slice(0, r)
            }
        },
        99076: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function (e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(40167), t), o(r(75188), t), o(r(68994), t)
        },
        9470: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getAccountData = t.newReadOnlyAccountMeta = t.newAccountMeta = t.deriveAddress = void 0;
            const n = r(59917);
            t.deriveAddress = function (e, t) {
                return n.PublicKey.findProgramAddressSync(e, new n.PublicKey(t))[0]
            }, t.newAccountMeta = function (e, t) {
                return {
                    pubkey: new n.PublicKey(e),
                    isWritable: !0,
                    isSigner: t
                }
            }, t.newReadOnlyAccountMeta = function (e, t) {
                return {
                    pubkey: new n.PublicKey(e),
                    isWritable: !1,
                    isSigner: t
                }
            }, t.getAccountData = function (e) {
                if (null === e) throw Error("account info is null");
                return e.data
            }
        },
        26209: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deriveUpgradeableProgramKey = t.BpfLoaderUpgradeable = void 0;
            const n = r(59917),
                o = r(9470);
            class i {
                constructor() {}
            }
            t.BpfLoaderUpgradeable = i, i.programId = new n.PublicKey("BPFLoaderUpgradeab1e11111111111111111111111"), t.deriveUpgradeableProgramKey = function (e) {
                return o.deriveAddress([new n.PublicKey(e).toBuffer()], i.programId)
            }
        },
        48846: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createReadOnlyProvider = void 0, t.createReadOnlyProvider = function (e) {
                if (void 0 !== e) return {
                    connection: e
                }
            }
        },
        41170: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function (e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(9470), t), o(r(26209), t), o(r(48846), t), o(r(45974), t), o(r(96846), t), o(r(19614), t)
        },
        45974: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Secp256k1SignatureOffsets = t.createSecp256k1Instruction = t.ETHEREUM_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
            const n = r(59917);
            t.SIGNATURE_LENGTH = 65, t.ETHEREUM_KEY_LENGTH = 20, t.createSecp256k1Instruction = function (e, t, r) {
                return {
                    keys: [],
                    programId: n.Secp256k1Program.programId,
                    data: o.serialize(e, t, r)
                }
            };
            class o {
                static serialize(e, r, n) {
                    if (0 == e.length) throw Error("signatures.length == 0");
                    if (e.length != r.length) throw Error("signatures.length != keys.length");
                    if (32 != n.length) throw Error("message.length != 32");
                    const o = e.length,
                        i = 11,
                        a = 1 + o * i,
                        c = t.SIGNATURE_LENGTH + t.ETHEREUM_KEY_LENGTH,
                        s = a + o * c,
                        u = Buffer.alloc(s + 32);
                    u.writeUInt8(o, 0), u.write(n.toString("hex"), s, "hex");
                    for (let n = 0; n < o; ++n) {
                        const o = e.at(n);
                        if ((null == o ? void 0 : o.length) != t.SIGNATURE_LENGTH) throw Error(`signatures[${n}].length != 65`);
                        const d = r.at(n);
                        if ((null == d ? void 0 : d.length) != t.ETHEREUM_KEY_LENGTH) throw Error(`keys[${n}].length != 20`);
                        const l = a + c * n,
                            f = l + 65;
                        u.writeUInt16LE(l, 1 + n * i), u.writeUInt8(0, 3 + n * i), u.writeUInt16LE(f, 4 + n * i), u.writeUInt8(0, 6 + n * i), u.writeUInt16LE(s, 7 + n * i), u.writeUInt16LE(32, 9 + n * i), u.writeUInt8(0, 10 + n * i), u.write(o.toString("hex"), l, "hex"), u.write(d.toString("hex"), f, "hex")
                    }
                    return u
                }
            }
            t.Secp256k1SignatureOffsets = o
        },
        96846: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deriveTokenMetadataKey = t.TOKEN_METADATA_PROGRAM_ID = void 0;
            const n = r(59917),
                o = r(9470);
            t.TOKEN_METADATA_PROGRAM_ID = new n.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"), t.deriveTokenMetadataKey = function (e) {
                return o.deriveAddress([Buffer.from("metadata"), t.TOKEN_METADATA_PROGRAM_ID.toBuffer(), new n.PublicKey(e).toBuffer()], t.TOKEN_METADATA_PROGRAM_ID)
            }
        },
        19614: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendAndConfirmTransactionsWithRetry = t.signSendAndConfirmTransaction = t.NodeWallet = t.modifySignTransaction = t.signTransactionFactory = void 0;
            const o = r(59917);

            function i(...e) {
                return a((e => Promise.resolve(e)), ...e)
            }

            function a(e, ...t) {
                return r => {
                    for (const e of t) r.partialSign(e);
                    return e(r)
                }
            }
            t.signTransactionFactory = i, t.modifySignTransaction = a;
            class c {
                constructor(e) {
                    this.payer = e, this.signTransaction = i(this.payer)
                }
                static fromSecretKey(e, t) {
                    return new c(o.Keypair.fromSecretKey(e, t))
                }
                publicKey() {
                    return this.payer.publicKey
                }
                pubkey() {
                    return this.publicKey()
                }
                key() {
                    return this.publicKey()
                }
                toString() {
                    return this.publicKey().toString()
                }
                keypair() {
                    return this.payer
                }
                signer() {
                    return this.keypair()
                }
            }
            t.NodeWallet = c, t.signSendAndConfirmTransaction = function (e, t, r, i, a) {
                return n(this, void 0, void 0, (function* () {
                    const n = null == a ? void 0 : a.commitment,
                        {
                            blockhash: c,
                            lastValidBlockHeight: s
                        } = yield e.getLatestBlockhash(n);
                    i.recentBlockhash = c, i.feePayer = new o.PublicKey(t);
                    const u = yield r(i), d = yield e.sendRawTransaction(u.serialize(), a);
                    return {
                        signature: d,
                        response: yield e.confirmTransaction({
                            blockhash: c,
                            lastValidBlockHeight: s,
                            signature: d
                        }, n)
                    }
                }))
            }, t.sendAndConfirmTransactionsWithRetry = function (e, t, r, i, a = 0, c) {
                return n(this, void 0, void 0, (function* () {
                    if (0 == i.length) return Promise.reject("No transactions provided to send.");
                    const n = null == c ? void 0 : c.commitment;
                    let s = 0;
                    const u = [];
                    for (const d of i) {
                        for (; s <= a;) try {
                            const i = yield e.getLatestBlockhash(n);
                            d.recentBlockhash = i.blockhash, d.feePayer = new o.PublicKey(r);
                            const a = yield t(d).catch((e => null));
                            if (null === a) return Promise.reject("Failed to sign transaction.");
                            const s = yield e.sendRawTransaction(a.serialize(), c), l = yield e.confirmTransaction(Object.assign({
                                signature: s
                            }, i), n);
                            u.push({
                                signature: s,
                                response: l
                            });
                            break
                        } catch (e) {
                            console.error(e), ++s
                        }
                        if (s > a) return Promise.reject("Reached the maximum number of retries.")
                    }
                    return Promise.resolve(u)
                }))
            }
        },
        70056: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getClaim = t.deriveClaimKey = void 0;
            const o = r(41170);

            function i(e, t, r, n) {
                const i = "string" == typeof t ? Buffer.from(t, "hex") : Buffer.from(t);
                if (32 != i.length) throw Error("address.length != 32");
                const a = Buffer.alloc(8);
                return a.writeBigUInt64BE("number" == typeof n ? BigInt(n) : n), o.deriveAddress([i, (() => {
                    const e = Buffer.alloc(2);
                    return e.writeUInt16BE(r), e
                })(), a], e)
            }
            t.deriveClaimKey = i, t.getClaim = function (e, t, r, a, c, s) {
                return n(this, void 0, void 0, (function* () {
                    return e.getAccountInfo(i(t, r, a, c), s).then((e => !!o.getAccountData(e)[0]))
                }))
            }
        },
        64153: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BridgeData = t.BridgeConfig = t.getWormholeBridgeData = t.deriveWormholeBridgeDataKey = void 0;
            const o = r(41170);

            function i(e) {
                return o.deriveAddress([Buffer.from("Bridge")], e)
            }
            t.deriveWormholeBridgeDataKey = i, t.getWormholeBridgeData = function (e, t, r) {
                return n(this, void 0, void 0, (function* () {
                    return e.getAccountInfo(i(t), r).then((e => c.deserialize(o.getAccountData(e))))
                }))
            };
            class a {
                constructor(e, t) {
                    this.guardianSetExpirationTime = e, this.fee = t
                }
                static deserialize(e) {
                    if (12 != e.length) throw new Error("data.length != 12");
                    const t = e.readUInt32LE(0),
                        r = e.readBigUInt64LE(4);
                    return new a(t, r)
                }
            }
            t.BridgeConfig = a;
            class c {
                constructor(e, t, r) {
                    this.guardianSetIndex = e, this.lastLamports = t, this.config = r
                }
                static deserialize(e) {
                    if (24 != e.length) throw new Error("data.length != 24");
                    const t = e.readUInt32LE(0),
                        r = e.readBigUInt64LE(4),
                        n = a.deserialize(e.subarray(12));
                    return new c(t, r, n)
                }
            }
            t.BridgeData = c
        },
        24871: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getProgramSequenceTracker = t.getEmitterKeys = t.deriveWormholeEmitterKey = void 0;
            const o = r(41170),
                i = r(64534);

            function a(e) {
                return o.deriveAddress([Buffer.from("emitter")], e)
            }
            t.deriveWormholeEmitterKey = a, t.getEmitterKeys = function (e, t) {
                const r = a(e);
                return {
                    emitter: r,
                    sequence: i.deriveEmitterSequenceKey(r, t)
                }
            }, t.getProgramSequenceTracker = function (e, t, r, o) {
                return n(this, void 0, void 0, (function* () {
                    return i.getSequenceTracker(e, a(t), r, o)
                }))
            }
        },
        63294: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deriveFeeCollectorKey = void 0;
            const n = r(41170);
            t.deriveFeeCollectorKey = function (e) {
                return n.deriveAddress([Buffer.from("fee_collector")], e)
            }
        },
        43946: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GuardianSetData = t.getGuardianSet = t.deriveGuardianSetKey = void 0;
            const o = r(41170);

            function i(e, t) {
                return o.deriveAddress([Buffer.from("GuardianSet"), (() => {
                    const e = Buffer.alloc(4);
                    return e.writeUInt32BE(t), e
                })()], e)
            }
            t.deriveGuardianSetKey = i, t.getGuardianSet = function (e, t, r, c) {
                return n(this, void 0, void 0, (function* () {
                    return e.getAccountInfo(i(t, r), c).then((e => a.deserialize(o.getAccountData(e))))
                }))
            };
            class a {
                constructor(e, t, r, n) {
                    this.index = e, this.keys = t, this.creationTime = r, this.expirationTime = n
                }
                static deserialize(e) {
                    const t = e.readUInt32LE(0),
                        r = e.readUInt32LE(4),
                        n = 8 + r * o.ETHEREUM_KEY_LENGTH,
                        i = e.readUInt32LE(n),
                        c = e.readUInt32LE(4 + n),
                        s = [];
                    for (let t = 0; t < r; ++t) {
                        const r = 8 + t * o.ETHEREUM_KEY_LENGTH;
                        s.push(e.subarray(r, r + o.ETHEREUM_KEY_LENGTH))
                    }
                    return new a(t, s, i, c)
                }
            }
            t.GuardianSetData = a
        },
        4412: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function (e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(70056), t), o(r(64153), t), o(r(24871), t), o(r(63294), t), o(r(43946), t), o(r(39122), t), o(r(64534), t), o(r(80533), t), o(r(48270), t)
        },
        39122: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPostedMessage = t.getPostedVaa = t.derivePostedVaaKey = t.PostedVaaData = t.PostedMessageData = void 0;
            const o = r(59917),
                i = r(41170),
                a = r(94754);
            class c {
                constructor(e) {
                    this.message = e
                }
                static deserialize(e) {
                    return new c(a.MessageData.deserialize(e.subarray(3)))
                }
            }
            t.PostedMessageData = c;
            class s extends c {}

            function u(e, t) {
                return i.deriveAddress([Buffer.from("PostedVAA"), t], e)
            }
            t.PostedVaaData = s, t.derivePostedVaaKey = u, t.getPostedVaa = function (e, t, r, o) {
                return n(this, void 0, void 0, (function* () {
                    return e.getAccountInfo(u(t, r), o).then((e => s.deserialize(i.getAccountData(e))))
                }))
            }, t.getPostedMessage = function (e, t, r) {
                return n(this, void 0, void 0, (function* () {
                    return e.getAccountInfo(new o.PublicKey(t), r).then((e => c.deserialize(i.getAccountData(e))))
                }))
            }
        },
        64534: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SequenceTracker = t.getSequenceTracker = t.deriveEmitterSequenceKey = void 0;
            const o = r(59917),
                i = r(41170);

            function a(e, t) {
                return i.deriveAddress([Buffer.from("Sequence"), new o.PublicKey(e).toBytes()], t)
            }
            t.deriveEmitterSequenceKey = a, t.getSequenceTracker = function (e, t, r, o) {
                return n(this, void 0, void 0, (function* () {
                    return e.getAccountInfo(a(t, r), o).then((e => c.deserialize(i.getAccountData(e))))
                }))
            };
            class c {
                constructor(e) {
                    this.sequence = e
                }
                static deserialize(e) {
                    if (8 != e.length) throw new Error("data.length != 8");
                    return new c(e.readBigUInt64LE(0))
                }
                value() {
                    return this.sequence
                }
            }
            t.SequenceTracker = c
        },
        80533: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignatureSetData = t.getSignatureSetData = void 0;
            const o = r(59917),
                i = r(41170);
            t.getSignatureSetData = function (e, t, r) {
                return n(this, void 0, void 0, (function* () {
                    return e.getAccountInfo(new o.PublicKey(t), r).then((e => a.deserialize(i.getAccountData(e))))
                }))
            };
            class a {
                constructor(e, t, r) {
                    this.signatures = e, this.hash = t, this.guardianSetIndex = r
                }
                static deserialize(e) {
                    const t = e.readUInt32LE(0),
                        r = [...e.subarray(4, 4 + t)].map((e => 0 != e)),
                        n = 4 + t,
                        o = e.subarray(n, n + 32),
                        i = e.readUInt32LE(n + 32);
                    return new a(r, o, i)
                }
            }
            t.SignatureSetData = a
        },
        48270: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deriveUpgradeAuthorityKey = void 0;
            const n = r(41170);
            t.deriveUpgradeAuthorityKey = function (e) {
                return n.deriveAddress([Buffer.from("upgrade")], e)
            }
        },
        19902: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WormholeAccountsCoder = void 0;
            const o = r(99076);
            t.WormholeAccountsCoder = class {
                constructor(e) {
                    this.idl = e
                }
                encode(e, t) {
                    return n(this, void 0, void 0, (function* () {
                        throw new Error(`Invalid account name: ${e}`)
                    }))
                }
                decode(e, t) {
                    return this.decodeUnchecked(e, t)
                }
                decodeUnchecked(e, t) {
                    throw new Error(`Invalid account name: ${e}`)
                }
                memcmp(e, t) {
                    if ("postVaa" === e) return {
                        dataSize: 56
                    };
                    throw new Error(`Invalid account name: ${e}`)
                }
                size(e) {
                    var t;
                    return null !== (t = o.accountSize(this.idl, e)) && void 0 !== t ? t : 0
                }
            }
        },
        30614: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WormholeEventsCoder = void 0;
            t.WormholeEventsCoder = class {
                constructor(e) {}
                decode(e) {
                    throw new Error("Wormhole program does not have events")
                }
            }
        },
        11883: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function (e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IdlCoder = void 0;
            const a = i(r(15970)),
                c = r(96486);
            class s {
                static fieldLayout(e, t) {
                    const r = void 0 !== e.name ? c.camelCase(e.name) : void 0;
                    switch (e.type) {
                        case "bool":
                            return a.bool(r);
                        case "u8":
                            return a.u8(r);
                        case "i8":
                            return a.i8(r);
                        case "u16":
                            return a.u16(r);
                        case "i16":
                            return a.i16(r);
                        case "u32":
                            return a.u32(r);
                        case "i32":
                            return a.i32(r);
                        case "f32":
                            return a.f32(r);
                        case "u64":
                            return a.u64(r);
                        case "i64":
                            return a.i64(r);
                        case "f64":
                            return a.f64(r);
                        case "u128":
                            return a.u128(r);
                        case "i128":
                            return a.i128(r);
                        case "u256":
                            return a.u256(r);
                        case "i256":
                            return a.i256(r);
                        case "bytes":
                            return a.vecU8(r);
                        case "string":
                            return a.str(r);
                        case "publicKey":
                            return a.publicKey(r);
                        default:
                            if ("vec" in e.type) return a.vec(s.fieldLayout({
                                name: void 0,
                                type: e.type.vec
                            }, t), r);
                            if ("option" in e.type) return a.option(s.fieldLayout({
                                name: void 0,
                                type: e.type.option
                            }, t), r);
                            if ("array" in e.type) {
                                let n = e.type.array[0],
                                    o = e.type.array[1],
                                    i = s.fieldLayout({
                                        name: void 0,
                                        type: n
                                    }, t);
                                return a.array(i, o, r)
                            }
                            throw new Error(`Not yet implemented: ${e}`)
                    }
                }
            }
            t.IdlCoder = s
        },
        58753: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WormholeCoder = t.WormholeInstruction = void 0;
            const n = r(19902),
                o = r(30614),
                i = r(23910),
                a = r(45097),
                c = r(96290);
            var s = r(23910);
            Object.defineProperty(t, "WormholeInstruction", {
                enumerable: !0,
                get: function () {
                    return s.WormholeInstruction
                }
            });
            t.WormholeCoder = class {
                constructor(e) {
                    this.instruction = new i.WormholeInstructionCoder(e), this.accounts = new n.WormholeAccountsCoder(e), this.state = new a.WormholeStateCoder(e), this.events = new o.WormholeEventsCoder(e), this.types = new c.WormholeTypesCoder(e)
                }
            }
        },
        23910: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function (e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                },
                a = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WormholeInstruction = t.WormholeInstructionCoder = void 0;
            const c = a(r(77191)),
                s = r(96486),
                u = i(r(15970)),
                d = r(11883);
            class l {
                constructor(e) {
                    this.ixLayout = l.parseIxLayout(e)
                }
                static parseIxLayout(e) {
                    const t = (e.state ? e.state.methods : []).map((t => {
                        let r = t.args.map((t => {
                            var r, n;
                            return d.IdlCoder.fieldLayout(t, Array.from([...null !== (r = e.accounts) && void 0 !== r ? r : [], ...null !== (n = e.types) && void 0 !== n ? n : []]))
                        }));
                        const n = s.camelCase(t.name);
                        return [n, u.struct(r, n)]
                    })).concat(e.instructions.map((t => {
                        let r = t.args.map((t => {
                            var r, n;
                            return d.IdlCoder.fieldLayout(t, Array.from([...null !== (r = e.accounts) && void 0 !== r ? r : [], ...null !== (n = e.types) && void 0 !== n ? n : []]))
                        }));
                        const n = s.camelCase(t.name);
                        return [n, u.struct(r, n)]
                    })));
                    return new Map(t)
                }
                encode(e, t) {
                    const r = Buffer.alloc(1e3),
                        n = s.camelCase(e),
                        o = this.ixLayout.get(n);
                    if (!o) throw new Error(`Unknown method: ${n}`);
                    const i = o.encode(t, r),
                        a = r.slice(0, i);
                    return function (e, t) {
                        const r = Buffer.alloc(1 + (void 0 === t ? 0 : t.length));
                        r.writeUInt8(e, 0), void 0 !== t && r.write(t.toString("hex"), 1, "hex");
                        return r
                    }(f[s.upperFirst(n)], a)
                }
                encodeState(e, t) {
                    throw new Error("Wormhole program does not have state")
                }
                decode(e, t = "hex") {
                    var r;
                    "string" == typeof e && (e = "hex" === t ? Buffer.from(e, "hex") : c.default.decode(e));
                    let n = e.slice(0, 1).readInt8(),
                        o = e.slice(1),
                        i = s.camelCase(f[n]);
                    return this.ixLayout.get(i) ? {
                        data: null === (r = this.ixLayout.get(i)) || void 0 === r ? void 0 : r.decode(o),
                        name: i
                    } : null
                }
            }
            var f;
            t.WormholeInstructionCoder = l,
                function (e) {
                    e[e.Initialize = 0] = "Initialize", e[e.PostMessage = 1] = "PostMessage", e[e.PostVaa = 2] = "PostVaa", e[e.SetFees = 3] = "SetFees", e[e.TransferFees = 4] = "TransferFees", e[e.UpgradeContract = 5] = "UpgradeContract", e[e.UpgradeGuardianSet = 6] = "UpgradeGuardianSet", e[e.VerifySignatures = 7] = "VerifySignatures", e[e.PostMessageUnreliable = 8] = "PostMessageUnreliable"
                }(f = t.WormholeInstruction || (t.WormholeInstruction = {}))
        },
        45097: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WormholeStateCoder = void 0;
            t.WormholeStateCoder = class {
                constructor(e) {}
                encode(e, t) {
                    throw new Error("Wormhole program does not have state")
                }
                decode(e) {
                    throw new Error("Wormhole program does not have state")
                }
            }
        },
        96290: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WormholeTypesCoder = void 0;
            t.WormholeTypesCoder = class {
                constructor(e) {}
                encode(e, t) {
                    throw new Error("Wormhole program does not have user-defined types")
                }
                decode(e, t) {
                    throw new Error("Wormhole program does not have user-defined types")
                }
            }
        },
        55263: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPostMessageCpiAccounts = t.getWormholeDerivedAccounts = void 0;
            const n = r(4412),
                o = r(39944);
            t.getWormholeDerivedAccounts = function (e, t) {
                const {
                    emitter: r,
                    sequence: o
                } = n.getEmitterKeys(e, t);
                return {
                    wormholeBridge: n.deriveWormholeBridgeDataKey(t),
                    wormholeEmitter: r,
                    wormholeSequence: o,
                    wormholeFeeCollector: n.deriveFeeCollectorKey(t)
                }
            }, t.getPostMessageCpiAccounts = function (e, t, r, n) {
                const i = o.getPostMessageAccounts(t, r, e, n);
                return {
                    payer: i.payer,
                    wormholeBridge: i.bridge,
                    wormholeMessage: i.message,
                    wormholeEmitter: i.emitter,
                    wormholeSequence: i.sequence,
                    wormholeFeeCollector: i.feeCollector,
                    clock: i.clock,
                    rent: i.rent,
                    systemProgram: i.systemProgram
                }
            }
        },
        2556: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function (e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(4412), t), o(r(55263), t), o(r(39944), t), o(r(94754), t), o(r(25332), t)
        },
        24991: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createBridgeFeeTransferInstruction = void 0;
            const o = r(59917),
                i = r(4412);
            t.createBridgeFeeTransferInstruction = function (e, t, r, a) {
                return n(this, void 0, void 0, (function* () {
                    const n = yield i.getWormholeBridgeData(e, t, a).then((e => e.config.fee));
                    return o.SystemProgram.transfer({
                        fromPubkey: new o.PublicKey(r),
                        toPubkey: i.deriveFeeCollectorKey(t),
                        lamports: n
                    })
                }))
            }
        },
        66624: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUpgradeContractAccounts = t.createUpgradeContractInstruction = t.getUpgradeGuardianSetAccounts = t.createUpgradeGuardianSetInstruction = t.getTransferFeesAccounts = t.createTransferFeesInstruction = t.getSetFeesAccounts = t.createSetFeesInstruction = void 0;
            const n = r(59917),
                o = r(38279),
                i = r(25332),
                a = r(4412),
                c = r(41170);

            function s(e, t, r) {
                const i = o.isBytes(r) ? o.parseGovernanceVaa(r) : r;
                return {
                    payer: new n.PublicKey(t),
                    bridge: a.deriveWormholeBridgeDataKey(e),
                    vaa: a.derivePostedVaaKey(e, i.hash),
                    claim: a.deriveClaimKey(e, i.emitterAddress, i.emitterChain, i.sequence),
                    systemProgram: n.SystemProgram.programId
                }
            }

            function u(e, t, r, i) {
                const c = o.isBytes(i) ? o.parseGovernanceVaa(i) : i;
                return {
                    payer: new n.PublicKey(t),
                    bridge: a.deriveWormholeBridgeDataKey(e),
                    vaa: a.derivePostedVaaKey(e, c.hash),
                    claim: a.deriveClaimKey(e, c.emitterAddress, c.emitterChain, c.sequence),
                    feeCollector: a.deriveFeeCollectorKey(e),
                    recipient: new n.PublicKey(r),
                    rent: n.SYSVAR_RENT_PUBKEY,
                    systemProgram: n.SystemProgram.programId
                }
            }

            function d(e, t, r) {
                const i = o.isBytes(r) ? o.parseGovernanceVaa(r) : r;
                return {
                    payer: new n.PublicKey(t),
                    bridge: a.deriveWormholeBridgeDataKey(e),
                    vaa: a.derivePostedVaaKey(e, i.hash),
                    claim: a.deriveClaimKey(e, i.emitterAddress, i.emitterChain, i.sequence),
                    guardianSetOld: a.deriveGuardianSetKey(e, i.guardianSetIndex),
                    guardianSetNew: a.deriveGuardianSetKey(e, i.guardianSetIndex + 1),
                    systemProgram: n.SystemProgram.programId
                }
            }

            function l(e, t, r, i) {
                const s = o.isBytes(r) ? o.parseGovernanceVaa(r) : r,
                    u = s.orderPayload;
                if (32 != u.length) throw new Error("implementation.length != 32");
                return {
                    payer: new n.PublicKey(t),
                    bridge: a.deriveWormholeBridgeDataKey(e),
                    vaa: a.derivePostedVaaKey(e, s.hash),
                    claim: a.deriveClaimKey(e, s.emitterAddress, s.emitterChain, s.sequence),
                    upgradeAuthority: a.deriveUpgradeAuthorityKey(e),
                    spill: new n.PublicKey(void 0 === i ? t : i),
                    implementation: new n.PublicKey(u),
                    programData: c.deriveUpgradeableProgramKey(e),
                    wormholeProgram: new n.PublicKey(e),
                    rent: n.SYSVAR_RENT_PUBKEY,
                    clock: n.SYSVAR_CLOCK_PUBKEY,
                    bpfLoaderUpgradeable: c.BpfLoaderUpgradeable.programId,
                    systemProgram: n.SystemProgram.programId
                }
            }
            t.createSetFeesInstruction = function (e, t, r) {
                const n = i.createReadOnlyWormholeProgramInterface(e).methods.setFees();
                return n._ixFn(...n._args, {
                    accounts: s(e, t, r),
                    signers: void 0,
                    remainingAccounts: void 0,
                    preInstructions: void 0,
                    postInstructions: void 0
                })
            }, t.getSetFeesAccounts = s, t.createTransferFeesInstruction = function (e, t, r, n) {
                const o = i.createReadOnlyWormholeProgramInterface(e).methods.transferFees();
                return o._ixFn(...o._args, {
                    accounts: u(e, t, r, n),
                    signers: void 0,
                    remainingAccounts: void 0,
                    preInstructions: void 0,
                    postInstructions: void 0
                })
            }, t.getTransferFeesAccounts = u, t.createUpgradeGuardianSetInstruction = function (e, t, r) {
                const n = i.createReadOnlyWormholeProgramInterface(e).methods.upgradeGuardianSet();
                return n._ixFn(...n._args, {
                    accounts: d(e, t, r),
                    signers: void 0,
                    remainingAccounts: void 0,
                    preInstructions: void 0,
                    postInstructions: void 0
                })
            }, t.getUpgradeGuardianSetAccounts = d, t.createUpgradeContractInstruction = function (e, t, r) {
                const n = i.createReadOnlyWormholeProgramInterface(e).methods.upgradeContract();
                return n._ixFn(...n._args, {
                    accounts: l(e, t, r),
                    signers: void 0,
                    remainingAccounts: void 0,
                    preInstructions: void 0,
                    postInstructions: void 0
                })
            }, t.getUpgradeContractAccounts = l
        },
        39944: function (e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
                } : function (e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function (e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(24991), t), o(r(66624), t), o(r(12432), t), o(r(45231), t), o(r(96616), t), o(r(55854), t)
        },
        12432: function (e, t, r) {
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getInitializeAccounts = t.createInitializeInstruction = void 0;
            const o = r(59917),
                i = r(25332),
                a = r(4412),
                c = n(r(13550));

            function s(e, t) {
                return {
                    bridge: a.deriveWormholeBridgeDataKey(e),
                    guardianSet: a.deriveGuardianSetKey(e, 0),
                    feeCollector: a.deriveFeeCollectorKey(e),
                    payer: new o.PublicKey(t),
                    clock: o.SYSVAR_CLOCK_PUBKEY,
                    rent: o.SYSVAR_RENT_PUBKEY,
                    systemProgram: o.SystemProgram.programId
                }
            }
            t.createInitializeInstruction = function (e, t, r, n, o) {
                const a = i.createReadOnlyWormholeProgramInterface(e).methods.initialize(r, new c.default(n.toString()), [...o]);
                return a._ixFn(...a._args, {
                    accounts: s(e, t),
                    signers: void 0,
                    remainingAccounts: void 0,
                    preInstructions: void 0,
                    postInstructions: void 0
                })
            }, t.getInitializeAccounts = s
        },
        45231: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPostMessageAccounts = void 0;
            const n = r(59917),
                o = r(4412);
            t.getPostMessageAccounts = function (e, t, r, i) {
                const {
                    emitter: a,
                    sequence: c
                } = o.getEmitterKeys(r, e);
                return {
                    bridge: o.deriveWormholeBridgeDataKey(e),
                    message: new n.PublicKey(i),
                    emitter: a,
                    sequence: c,
                    payer: new n.PublicKey(t),
                    feeCollector: o.deriveFeeCollectorKey(e),
                    clock: n.SYSVAR_CLOCK_PUBKEY,
                    rent: n.SYSVAR_RENT_PUBKEY,
                    systemProgram: n.SystemProgram.programId
                }
            }
        },
        96616: function (e, t, r) {
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPostVaaAccounts = t.createPostVaaInstruction = void 0;
            const o = r(59917),
                i = r(25332),
                a = r(4412),
                c = r(38279),
                s = n(r(13550));

            function u(e, t, r, n) {
                const i = c.isBytes(n) ? c.parseVaa(n) : n;
                return {
                    guardianSet: a.deriveGuardianSetKey(e, i.guardianSetIndex),
                    bridge: a.deriveWormholeBridgeDataKey(e),
                    signatureSet: new o.PublicKey(r),
                    vaa: a.derivePostedVaaKey(e, i.hash),
                    payer: new o.PublicKey(t),
                    clock: o.SYSVAR_CLOCK_PUBKEY,
                    rent: o.SYSVAR_RENT_PUBKEY,
                    systemProgram: o.SystemProgram.programId
                }
            }
            t.createPostVaaInstruction = function (e, t, r, n) {
                const o = c.isBytes(r) ? c.parseVaa(r) : r,
                    a = i.createReadOnlyWormholeProgramInterface(e).methods.postVaa(o.version, o.guardianSetIndex, o.timestamp, o.nonce, o.emitterChain, [...o.emitterAddress], new s.default(o.sequence.toString()), o.consistencyLevel, o.payload);
                return a._ixFn(...a._args, {
                    accounts: u(e, t, n, o),
                    signers: void 0,
                    remainingAccounts: void 0,
                    preInstructions: void 0,
                    postInstructions: void 0
                })
            }, t.getPostVaaAccounts = u
        },
        55854: function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getVerifySignatureAccounts = t.createVerifySignaturesInstructions = void 0;
            const o = r(59917),
                i = r(41170),
                a = r(4412),
                c = r(38279),
                s = r(25332);

            function u(e, t, r, n, o) {
                const i = s.createReadOnlyWormholeProgramInterface(e).methods.verifySignatures(o);
                return i._ixFn(...i._args, {
                    accounts: d(e, t, n, r),
                    signers: void 0,
                    remainingAccounts: void 0,
                    preInstructions: void 0,
                    postInstructions: void 0
                })
            }

            function d(e, t, r, n) {
                const i = c.isBytes(n) ? c.parseVaa(n) : n;
                return {
                    payer: new o.PublicKey(t),
                    guardianSet: a.deriveGuardianSetKey(e, i.guardianSetIndex),
                    signatureSet: new o.PublicKey(r),
                    instructions: o.SYSVAR_INSTRUCTIONS_PUBKEY,
                    rent: o.SYSVAR_RENT_PUBKEY,
                    systemProgram: o.SystemProgram.programId
                }
            }
            t.createVerifySignaturesInstructions = function (e, t, r, o, s, d) {
                return n(this, void 0, void 0, (function* () {
                    const n = c.isBytes(o) ? c.parseVaa(o) : o,
                        l = n.guardianSetIndex;
                    if (l != (yield a.getWormholeBridgeData(e, t)).guardianSetIndex) throw new Error("guardianSetIndex != config.guardianSetIndex");
                    const f = yield a.getGuardianSet(e, t, l, d), h = n.guardianSignatures, y = f.keys, v = [];
                    for (let e = 0; e < Math.ceil(h.length / 7); ++e) {
                        const o = 7 * e,
                            a = Math.min(h.length, 7 * (e + 1)),
                            c = new Array(19).fill(-1),
                            d = [],
                            l = [];
                        for (let e = 0; e < a - o; ++e) {
                            const t = h.at(e + o);
                            d.push(t.signature);
                            const r = y.at(t.index);
                            l.push(r), c[t.index] = e
                        }
                        v.push(i.createSecp256k1Instruction(d, l, n.hash)), v.push(u(t, r, n, s, c))
                    }
                    return v
                }))
            }, t.getVerifySignatureAccounts = d
        },
        94754: function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MessageData = void 0;
            const n = r(59917);
            class o {
                constructor(e, t, r, o, i, a, c, s, u, d) {
                    this.vaaVersion = e, this.consistencyLevel = t, this.vaaTime = r, this.vaaSignatureAccount = new n.PublicKey(o), this.submissionTime = i, this.nonce = a, this.sequence = c, this.emitterChain = s, this.emitterAddress = u, this.payload = d
                }
                static deserialize(e) {
                    const t = e.readUInt8(0),
                        r = e.readUInt8(1),
                        i = e.readUInt32LE(2),
                        a = new n.PublicKey(e.subarray(6, 38)),
                        c = e.readUInt32LE(38),
                        s = e.readUInt32LE(42),
                        u = e.readBigUInt64LE(46),
                        d = e.readUInt16LE(54),
                        l = e.subarray(56, 88),
                        f = e.readUInt32LE(88),
                        h = e.subarray(92, 92 + f);
                    return new o(t, r, i, a, c, s, u, d, l, h)
                }
            }
            t.MessageData = o
        },
        25332: function (e, t, r) {
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.coder = t.createReadOnlyWormholeProgramInterface = t.createWormholeProgramInterface = void 0;
            const o = r(59917),
                i = r(94758),
                a = r(41170),
                c = r(58753),
                s = n(r(32229));

            function u(e, t) {
                return new i.Program(s.default, new o.PublicKey(e), void 0 === t ? {
                    connection: null
                } : t, d())
            }

            function d() {
                return new c.WormholeCoder(s.default)
            }
            t.createWormholeProgramInterface = u, t.createReadOnlyWormholeProgramInterface = function (e, t) {
                return u(e, a.createReadOnlyProvider(t))
            }, t.coder = d
        }
    }
]);