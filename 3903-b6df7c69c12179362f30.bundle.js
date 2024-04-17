"use strict";
(self.webpackChunksmardex_web = self.webpackChunksmardex_web || []).push([
    [3903], {
        86741: function (e, t, s) {
            var _ = s(17857),
                i = s(67294);
            const a = (0, i.memo)((e => {
                let {
                    end: t,
                    prefix: s,
                    suffix: a
                } = e;
                return i.createElement(_.ZP, {
                    end: t,
                    preserveValue: !0,
                    separator: ",",
                    decimals: 2,
                    decimal: ".",
                    prefix: s || "",
                    suffix: a || ""
                })
            }));
            t.Z = a
        },
        64463: function (e, t, s) {
            s.d(t, {
                Z: function () {
                    return r
                }
            });
            var _ = s(67294),
                i = s(70405),
                a = s(49089),
                m = s(89250),
                p = s.p + "/logo.png",
                n = s.p + "assets/images/og.webp",
                l = s(56126);
            var r = (0, _.memo)((e => {
                let {
                    title: t,
                    description: s,
                    canonical: r
                } = e;
                const c = (0, m.TH)(),
                    o = t ? "DeFi The Norm - SMART" ?.replace(" - ", ` - ${t} | `) : "DeFi The Norm - SMART";
                return (0, _.useEffect)((() => {
                    a.ZP.send({
                        hitType: "pageview",
                        page: c.pathname,
                        title: o
                    })
                }), [c]), _.createElement(i.ql, null, _.createElement("title", null, o), _.createElement("meta", {
                    name: "description",
                    content: s
                }), _.createElement("link", {
                    rel: "canonical",
                    href: r
                }), _.createElement("link", {
                    rel: "shortcut icon",
                    href: `${(0,l.ms)()}${p}`
                }), _.createElement("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), _.createElement("meta", {
                    name: "twitter:site",
                    content: "@Sentia"
                }), _.createElement("meta", {
                    name: "twitter:creator",
                    content: "@Sentia"
                }), _.createElement("meta", {
                    property: "og:site_name",
                    content: "Sentia",
                    lang: "en"
                }), _.createElement("meta", {
                    property: "og:title",
                    content: o,
                    lang: "en"
                }), _.createElement("meta", {
                    property: "og:url",
                    content: r
                }), _.createElement("meta", {
                    property: "og:type",
                    content: "website"
                }), _.createElement("meta", {
                    property: "og:description",
                    content: s,
                    lang: "en"
                }), _.createElement("meta", {
                    property: "og:image",
                    content: `${(0,l.ms)()}${n}`
                }))
            }))
        },
        67892: function (e, t, s) {
            s.r(t), s.d(t, {
                default: function () {
                    return W
                }
            });
            var _ = s(67294),
                i = s(79655),
                a = s(67814),
                m = s(59417),
                p = s(95998),
                n = s(29009),
                l = s(98687),
                r = s(14195),
                c = s(4545),
                o = s(3023),
                u = s(75358),
                x = s(56880),
                d = s(99307),
                y = JSON.parse('[{"timestamp":1514764800,"x_price_bitcoin":"733.01","y_imp_loss_uniswap_percent":"0","y_imp_loss_smardex_percent":"0"},{"timestamp":1515294000,"x_price_bitcoin":"1021.61","y_imp_loss_uniswap_percent":"-1.3619599999999963","y_imp_loss_smardex_percent":"-0.7087690000000038"},{"timestamp":1515819600,"x_price_bitcoin":"1282.19","y_imp_loss_uniswap_percent":"-3.784955999999994","y_imp_loss_smardex_percent":"-2.2100049999999953"},{"timestamp":1516345200,"x_price_bitcoin":"1011.01","y_imp_loss_uniswap_percent":"-1.2786219999999986","y_imp_loss_smardex_percent":"0.19107999999999947"},{"timestamp":1516870800,"x_price_bitcoin":"1061","y_imp_loss_uniswap_percent":"-1.685453999999993","y_imp_loss_smardex_percent":"-0.1514319999999998"},{"timestamp":1517396400,"x_price_bitcoin":"1106.08","y_imp_loss_uniswap_percent":"-2.079137000000003","y_imp_loss_smardex_percent":"-0.4633800000000008"},{"timestamp":1517922000,"x_price_bitcoin":"659.85","y_imp_loss_uniswap_percent":"-0.13804000000000372","y_imp_loss_smardex_percent":"2.761979999999994"},{"timestamp":1518566400,"x_price_bitcoin":"841.57","y_imp_loss_uniswap_percent":"-0.23795699999999442","y_imp_loss_smardex_percent":"2.0793900000000036"},{"timestamp":1519092000,"x_price_bitcoin":"951.02","y_imp_loss_uniswap_percent":"-0.8415009999999938","y_imp_loss_smardex_percent":"1.531880000000001"},{"timestamp":1519617600,"x_price_bitcoin":"845.01","y_imp_loss_uniswap_percent":"-0.2521909999999963","y_imp_loss_smardex_percent":"2.1533199999999937"},{"timestamp":1520143200,"x_price_bitcoin":"847","y_imp_loss_uniswap_percent":"-0.26058600000000354","y_imp_loss_smardex_percent":"2.1771300000000053"},{"timestamp":1520668800,"x_price_bitcoin":"729.26","y_imp_loss_uniswap_percent":"-0.0003289999999935844","y_imp_loss_smardex_percent":"2.689689999999999"},{"timestamp":1521194400,"x_price_bitcoin":"600.99","y_imp_loss_uniswap_percent":"-0.4909140000000036","y_imp_loss_smardex_percent":"2.7485599999999977"},{"timestamp":1521720000,"x_price_bitcoin":"536.39","y_imp_loss_uniswap_percent":"-1.2068610000000035","y_imp_loss_smardex_percent":"2.528400000000005"},{"timestamp":1522245600,"x_price_bitcoin":"460.81","y_imp_loss_uniswap_percent":"-2.6340650000000068","y_imp_loss_smardex_percent":"1.664829999999995"},{"timestamp":1522771200,"x_price_bitcoin":"403.8","y_imp_loss_uniswap_percent":"-4.284953000000002","y_imp_loss_smardex_percent":"0.6951899999999966"},{"timestamp":1523296800,"x_price_bitcoin":"399.14","y_imp_loss_uniswap_percent":"-4.447159999999997","y_imp_loss_smardex_percent":"0.6375299999999982"},{"timestamp":1523822400,"x_price_bitcoin":"524.51","y_imp_loss_uniswap_percent":"-1.384102999999996","y_imp_loss_smardex_percent":"3.5343799999999987"},{"timestamp":1524348000,"x_price_bitcoin":"603.59","y_imp_loss_uniswap_percent":"-0.469885000000005","y_imp_loss_smardex_percent":"4.720929999999996"},{"timestamp":1524873600,"x_price_bitcoin":"643.41","y_imp_loss_uniswap_percent":"-0.21210299999999904","y_imp_loss_smardex_percent":"5.199219999999997"},{"timestamp":1525399200,"x_price_bitcoin":"778","y_imp_loss_uniswap_percent":"-0.04433699999999874","y_imp_loss_smardex_percent":"5.988020000000006"},{"timestamp":1525924800,"x_price_bitcoin":"757.01","y_imp_loss_uniswap_percent":"-0.012973000000002344","y_imp_loss_smardex_percent":"5.966949999999997"},{"timestamp":1526450400,"x_price_bitcoin":"684","y_imp_loss_uniswap_percent":"-0.05983100000000263","y_imp_loss_smardex_percent":"5.7638199999999955"},{"timestamp":1526976000,"x_price_bitcoin":"694.27","y_imp_loss_uniswap_percent":"-0.03684300000000462","y_imp_loss_smardex_percent":"5.836410000000001"},{"timestamp":1527501600,"x_price_bitcoin":"532.99","y_imp_loss_uniswap_percent":"-1.255988000000002","y_imp_loss_smardex_percent":"4.79513"},{"timestamp":1528027200,"x_price_bitcoin":"620","y_imp_loss_uniswap_percent":"-0.3494309999999956","y_imp_loss_smardex_percent":"5.625889999999998"},{"timestamp":1528552800,"x_price_bitcoin":"599.66","y_imp_loss_uniswap_percent":"-0.5018830000000065","y_imp_loss_smardex_percent":"5.505260000000007"},{"timestamp":1529078400,"x_price_bitcoin":"503.83","y_imp_loss_uniswap_percent":"-1.7317019999999985","y_imp_loss_smardex_percent":"4.504069999999999"},{"timestamp":1529604000,"x_price_bitcoin":"523.71","y_imp_loss_uniswap_percent":"-1.396608999999998","y_imp_loss_smardex_percent":"4.8335500000000025"},{"timestamp":1530169200,"x_price_bitcoin":"433.31","y_imp_loss_uniswap_percent":"-3.357851999999994","y_imp_loss_smardex_percent":"3.220380000000006"},{"timestamp":1530720000,"x_price_bitcoin":"473.21","y_imp_loss_uniswap_percent":"-2.347048000000001","y_imp_loss_smardex_percent":"4.145160000000004"},{"timestamp":1531245600,"x_price_bitcoin":"434.81","y_imp_loss_uniswap_percent":"-3.3150679999999966","y_imp_loss_smardex_percent":"3.2988200000000063"},{"timestamp":1531771200,"x_price_bitcoin":"478.22","y_imp_loss_uniswap_percent":"-2.2375239999999934","y_imp_loss_smardex_percent":"4.34563"},{"timestamp":1532296800,"x_price_bitcoin":"456.25","y_imp_loss_uniswap_percent":"-2.7455300000000022","y_imp_loss_smardex_percent":"3.8848100000000017"},{"timestamp":1532822400,"x_price_bitcoin":"468.44","y_imp_loss_uniswap_percent":"-2.4547270000000054","y_imp_loss_smardex_percent":"4.201740000000001"},{"timestamp":1533348000,"x_price_bitcoin":"418.89","y_imp_loss_uniswap_percent":"-3.7900120000000044","y_imp_loss_smardex_percent":"2.972759999999994"},{"timestamp":1533873600,"x_price_bitcoin":"359.82","y_imp_loss_uniswap_percent":"-6.011442000000002","y_imp_loss_smardex_percent":"1.055189999999996"},{"timestamp":1534399200,"x_price_bitcoin":"283.69","y_imp_loss_uniswap_percent":"-10.295519999999996","y_imp_loss_smardex_percent":"-2.386792"},{"timestamp":1534924800,"x_price_bitcoin":"282.97","y_imp_loss_uniswap_percent":"-10.345935999999995","y_imp_loss_smardex_percent":"-2.4286850000000015"},{"timestamp":1535450400,"x_price_bitcoin":"285.44","y_imp_loss_uniswap_percent":"-10.173879","y_imp_loss_smardex_percent":"-2.2227960000000024"},{"timestamp":1535976000,"x_price_bitcoin":"286.9","y_imp_loss_uniswap_percent":"-10.073359999999994","y_imp_loss_smardex_percent":"-2.0972009999999983"},{"timestamp":1536501600,"x_price_bitcoin":"205.17","y_imp_loss_uniswap_percent":"-17.328522000000007","y_imp_loss_smardex_percent":"-8.545609999999996"},{"timestamp":1537027200,"x_price_bitcoin":"224.12","y_imp_loss_uniswap_percent":"-15.305672999999999","y_imp_loss_smardex_percent":"-6.487937000000002"},{"timestamp":1537552800,"x_price_bitcoin":"228.31","y_imp_loss_uniswap_percent":"-14.890226999999996","y_imp_loss_smardex_percent":"-5.985804999999999"},{"timestamp":1538078400,"x_price_bitcoin":"228.62","y_imp_loss_uniswap_percent":"-14.859921","y_imp_loss_smardex_percent":"-5.910304999999994"},{"timestamp":1538604000,"x_price_bitcoin":"216.95","y_imp_loss_uniswap_percent":"-16.042508999999995","y_imp_loss_smardex_percent":"-7.102138999999994"},{"timestamp":1539129600,"x_price_bitcoin":"228.4","y_imp_loss_uniswap_percent":"-14.881422","y_imp_loss_smardex_percent":"-5.862555"},{"timestamp":1539655200,"x_price_bitcoin":"212.43","y_imp_loss_uniswap_percent":"-16.524525999999994","y_imp_loss_smardex_percent":"-7.520610000000005"},{"timestamp":1540191600,"x_price_bitcoin":"208.69","y_imp_loss_uniswap_percent":"-16.934020000000004","y_imp_loss_smardex_percent":"-7.911195000000006"},{"timestamp":1540717200,"x_price_bitcoin":"204.26","y_imp_loss_uniswap_percent":"-17.431976000000006","y_imp_loss_smardex_percent":"-8.391489000000007"},{"timestamp":1541242800,"x_price_bitcoin":"200.37","y_imp_loss_uniswap_percent":"-17.881161000000006","y_imp_loss_smardex_percent":"-8.817876999999996"},{"timestamp":1541768400,"x_price_bitcoin":"211.85","y_imp_loss_uniswap_percent":"-16.587389","y_imp_loss_smardex_percent":"-7.440261000000007"},{"timestamp":1542319200,"x_price_bitcoin":"180.87","y_imp_loss_uniswap_percent":"-20.314548000000002","y_imp_loss_smardex_percent":"-11.222723000000002"},{"timestamp":1542844800,"x_price_bitcoin":"138.36","y_imp_loss_uniswap_percent":"-26.905009000000007","y_imp_loss_smardex_percent":"-17.539372"},{"timestamp":1543370400,"x_price_bitcoin":"112.13","y_imp_loss_uniswap_percent":"-32.155102","y_imp_loss_smardex_percent":"-22.412695999999997"},{"timestamp":1543896000,"x_price_bitcoin":"108.47","y_imp_loss_uniswap_percent":"-32.981305000000006","y_imp_loss_smardex_percent":"-23.220276999999996"},{"timestamp":1544421600,"x_price_bitcoin":"92.28","y_imp_loss_uniswap_percent":"-36.972199","y_imp_loss_smardex_percent":"-27.003505000000004"},{"timestamp":1544947200,"x_price_bitcoin":"86.11","y_imp_loss_uniswap_percent":"-38.657114","y_imp_loss_smardex_percent":"-28.630993000000004"},{"timestamp":1545472800,"x_price_bitcoin":"113.21","y_imp_loss_uniswap_percent":"-31.916157999999996","y_imp_loss_smardex_percent":"-21.488017"},{"timestamp":1545998400,"x_price_bitcoin":"117.25","y_imp_loss_uniswap_percent":"-31.041212","y_imp_loss_smardex_percent":"-20.409789000000004"},{"timestamp":1546524000,"x_price_bitcoin":"148.29","y_imp_loss_uniswap_percent":"-25.180103000000003","y_imp_loss_smardex_percent":"-13.582582000000002"},{"timestamp":1547049600,"x_price_bitcoin":"148.26","y_imp_loss_uniswap_percent":"-25.185125","y_imp_loss_smardex_percent":"-13.548269000000005"},{"timestamp":1547575200,"x_price_bitcoin":"125.18","y_imp_loss_uniswap_percent":"-29.405809000000005","y_imp_loss_smardex_percent":"-18.354958999999994"},{"timestamp":1548100800,"x_price_bitcoin":"116.28","y_imp_loss_uniswap_percent":"-31.248616","y_imp_loss_smardex_percent":"-20.357175999999995"},{"timestamp":1548626400,"x_price_bitcoin":"113.27","y_imp_loss_uniswap_percent":"-31.902946999999998","y_imp_loss_smardex_percent":"-21.037881999999996"},{"timestamp":1549152000,"x_price_bitcoin":"110.41","y_imp_loss_uniswap_percent":"-32.540169000000006","y_imp_loss_smardex_percent":"-21.684920000000005"},{"timestamp":1549677600,"x_price_bitcoin":"118.17","y_imp_loss_uniswap_percent":"-30.846024999999997","y_imp_loss_smardex_percent":"-19.772206999999995"},{"timestamp":1550203200,"x_price_bitcoin":"121.8","y_imp_loss_uniswap_percent":"-30.090050000000005","y_imp_loss_smardex_percent":"-18.887681"},{"timestamp":1550728800,"x_price_bitcoin":"148.22","y_imp_loss_uniswap_percent":"-25.191823","y_imp_loss_smardex_percent":"-13.115972"},{"timestamp":1551254400,"x_price_bitcoin":"138.13","y_imp_loss_uniswap_percent":"-26.946506","y_imp_loss_smardex_percent":"-15.145577000000003"},{"timestamp":1551780000,"x_price_bitcoin":"128.38","y_imp_loss_uniswap_percent":"-28.774778999999995","y_imp_loss_smardex_percent":"-17.200772999999998"},{"timestamp":1552305600,"x_price_bitcoin":"132.17","y_imp_loss_uniswap_percent":"-28.047661000000005","y_imp_loss_smardex_percent":"-16.341202999999993"},{"timestamp":1552852800,"x_price_bitcoin":"139.32","y_imp_loss_uniswap_percent":"-26.732585","y_imp_loss_smardex_percent":"-14.799955999999995"},{"timestamp":1553378400,"x_price_bitcoin":"136.65","y_imp_loss_uniswap_percent":"-27.215272","y_imp_loss_smardex_percent":"-15.322289999999995"},{"timestamp":1553904000,"x_price_bitcoin":"143.25","y_imp_loss_uniswap_percent":"-26.039597","y_imp_loss_smardex_percent":"-13.931083000000001"},{"timestamp":1554429600,"x_price_bitcoin":"157.72","y_imp_loss_uniswap_percent":"-23.654709999999994","y_imp_loss_smardex_percent":"-11.052656999999996"},{"timestamp":1554955200,"x_price_bitcoin":"168.82","y_imp_loss_uniswap_percent":"-21.986059999999995","y_imp_loss_smardex_percent":"-8.983175000000003"},{"timestamp":1555480800,"x_price_bitcoin":"165.34","y_imp_loss_uniswap_percent":"-22.495247000000006","y_imp_loss_smardex_percent":"-9.563474"},{"timestamp":1556006400,"x_price_bitcoin":"174.46","y_imp_loss_uniswap_percent":"-21.186503000000002","y_imp_loss_smardex_percent":"-7.962378000000001"},{"timestamp":1556532000,"x_price_bitcoin":"157.16","y_imp_loss_uniswap_percent":"-23.742424","y_imp_loss_smardex_percent":"-10.942300000000003"},{"timestamp":1557057600,"x_price_bitcoin":"162.64","y_imp_loss_uniswap_percent":"-22.898949","y_imp_loss_smardex_percent":"-9.931285000000003"},{"timestamp":1557583200,"x_price_bitcoin":"191.27","y_imp_loss_uniswap_percent":"-18.977654","y_imp_loss_smardex_percent":"-5.2028099999999995"},{"timestamp":1558144800,"x_price_bitcoin":"238.67","y_imp_loss_uniswap_percent":"-13.908435999999995","y_imp_loss_smardex_percent":"1.41798"},{"timestamp":1558670400,"x_price_bitcoin":"244.24","y_imp_loss_uniswap_percent":"-13.406028000000006","y_imp_loss_smardex_percent":"2.127660000000006"},{"timestamp":1559196000,"x_price_bitcoin":"282.31","y_imp_loss_uniswap_percent":"-10.392341000000002","y_imp_loss_smardex_percent":"6.154229999999998"},{"timestamp":1559721600,"x_price_bitcoin":"245.72","y_imp_loss_uniswap_percent":"-13.275402","y_imp_loss_smardex_percent":"2.4505199999999974"},{"timestamp":1560247200,"x_price_bitcoin":"244.36","y_imp_loss_uniswap_percent":"-13.395392999999999","y_imp_loss_smardex_percent":"2.3361699999999956"},{"timestamp":1560772800,"x_price_bitcoin":"270.89","y_imp_loss_uniswap_percent":"-11.224940000000004","y_imp_loss_smardex_percent":"5.064139999999995"},{"timestamp":1561298400,"x_price_bitcoin":"309.78","y_imp_loss_uniswap_percent":"-8.606612999999996","y_imp_loss_smardex_percent":"8.53895"},{"timestamp":1561824000,"x_price_bitcoin":"306.47","y_imp_loss_uniswap_percent":"-8.806730000000002","y_imp_loss_smardex_percent":"8.34805"},{"timestamp":1562349600,"x_price_bitcoin":"290.86","y_imp_loss_uniswap_percent":"-9.80507","y_imp_loss_smardex_percent":"7.119410000000002"},{"timestamp":1562875200,"x_price_bitcoin":"272.49","y_imp_loss_uniswap_percent":"-11.104832000000002","y_imp_loss_smardex_percent":"5.617890000000003"},{"timestamp":1563400800,"x_price_bitcoin":"214.06","y_imp_loss_uniswap_percent":"-16.349098999999995","y_imp_loss_smardex_percent":"-0.10284699999999702"},{"timestamp":1563926400,"x_price_bitcoin":"212.55","y_imp_loss_uniswap_percent":"-16.511549000000002","y_imp_loss_smardex_percent":"-0.25306500000000653"},{"timestamp":1564452000,"x_price_bitcoin":"208.06","y_imp_loss_uniswap_percent":"-17.003971000000007","y_imp_loss_smardex_percent":"-0.7554679999999934"},{"timestamp":1564977600,"x_price_bitcoin":"229.28","y_imp_loss_uniswap_percent":"-14.795592999999997","y_imp_loss_smardex_percent":"1.7306499999999971"},{"timestamp":1565503200,"x_price_bitcoin":"210.26","y_imp_loss_uniswap_percent":"-16.760924000000003","y_imp_loss_smardex_percent":"-0.43252099999999416"},{"timestamp":1566057600,"x_price_bitcoin":"184.21","y_imp_loss_uniswap_percent":"-19.875003000000007","y_imp_loss_smardex_percent":"-3.745587999999998"},{"timestamp":1566583200,"x_price_bitcoin":"194.12","y_imp_loss_uniswap_percent":"-18.627163999999993","y_imp_loss_smardex_percent":"-2.3753169999999955"},{"timestamp":1567108800,"x_price_bitcoin":"169.3","y_imp_loss_uniswap_percent":"-21.916791000000003","y_imp_loss_smardex_percent":"-5.861562000000006"},{"timestamp":1567634400,"x_price_bitcoin":"176.43","y_imp_loss_uniswap_percent":"-20.914456","y_imp_loss_smardex_percent":"-4.762371000000002"},{"timestamp":1568160000,"x_price_bitcoin":"179.87","y_imp_loss_uniswap_percent":"-20.448088999999996","y_imp_loss_smardex_percent":"-4.218856000000002"},{"timestamp":1568685600,"x_price_bitcoin":"197.38","y_imp_loss_uniswap_percent":"-18.234239000000002","y_imp_loss_smardex_percent":"-1.6969349999999963"},{"timestamp":1569211200,"x_price_bitcoin":"208.19","y_imp_loss_uniswap_percent":"-16.989514","y_imp_loss_smardex_percent":"-0.21517000000000053"},{"timestamp":1569736800,"x_price_bitcoin":"171.33","y_imp_loss_uniswap_percent":"-21.626379","y_imp_loss_smardex_percent":"-5.381973000000002"},{"timestamp":1570262400,"x_price_bitcoin":"175.43","y_imp_loss_uniswap_percent":"-21.052092000000002","y_imp_loss_smardex_percent":"-4.713423000000006"},{"timestamp":1570788000,"x_price_bitcoin":"185.61","y_imp_loss_uniswap_percent":"-19.693679000000003","y_imp_loss_smardex_percent":"-3.137823999999995"},{"timestamp":1571313600,"x_price_bitcoin":"176.22","y_imp_loss_uniswap_percent":"-20.943281","y_imp_loss_smardex_percent":"-4.525752999999995"},{"timestamp":1571839200,"x_price_bitcoin":"159.41","y_imp_loss_uniswap_percent":"-23.392122999999998","y_imp_loss_smardex_percent":"-7.208521000000005"},{"timestamp":1572364800,"x_price_bitcoin":"185.69","y_imp_loss_uniswap_percent":"-19.683369","y_imp_loss_smardex_percent":"-2.9976999999999947"},{"timestamp":1572890400,"x_price_bitcoin":"186.84","y_imp_loss_uniswap_percent":"-19.53577","y_imp_loss_smardex_percent":"-2.791539"},{"timestamp":1573416000,"x_price_bitcoin":"189.98","y_imp_loss_uniswap_percent":"-19.138481999999996","y_imp_loss_smardex_percent":"-2.292778999999996"},{"timestamp":1573948800,"x_price_bitcoin":"182.37","y_imp_loss_uniswap_percent":"-20.115922999999995","y_imp_loss_smardex_percent":"-3.397508000000002"},{"timestamp":1574474400,"x_price_bitcoin":"148.83","y_imp_loss_uniswap_percent":"-25.089898000000005","y_imp_loss_smardex_percent":"-8.893951000000001"},{"timestamp":1575007200,"x_price_bitcoin":"151.69","y_imp_loss_uniswap_percent":"-24.618046000000007","y_imp_loss_smardex_percent":"-8.329984999999994"},{"timestamp":1575532800,"x_price_bitcoin":"145.66","y_imp_loss_uniswap_percent":"-25.624602999999993","y_imp_loss_smardex_percent":"-9.405859000000007"},{"timestamp":1576058400,"x_price_bitcoin":"145.85","y_imp_loss_uniswap_percent":"-25.592201000000003","y_imp_loss_smardex_percent":"-9.338482999999997"},{"timestamp":1576584000,"x_price_bitcoin":"132.27","y_imp_loss_uniswap_percent":"-28.028765000000007","y_imp_loss_smardex_percent":"-11.957667999999998"},{"timestamp":1577109600,"x_price_bitcoin":"132.96","y_imp_loss_uniswap_percent":"-27.898781999999997","y_imp_loss_smardex_percent":"-11.763642000000004"},{"timestamp":1577635200,"x_price_bitcoin":"131.98","y_imp_loss_uniswap_percent":"-28.083603999999994","y_imp_loss_smardex_percent":"-11.921800000000005"},{"timestamp":1578160800,"x_price_bitcoin":"134.6","y_imp_loss_uniswap_percent":"-27.592605000000006","y_imp_loss_smardex_percent":"-11.340447999999995"},{"timestamp":1578686400,"x_price_bitcoin":"143.42","y_imp_loss_uniswap_percent":"-26.010079000000005","y_imp_loss_smardex_percent":"-9.513827000000006"},{"timestamp":1579212000,"x_price_bitcoin":"163.4","y_imp_loss_uniswap_percent":"-22.784537999999998","y_imp_loss_smardex_percent":"-5.673276000000001"},{"timestamp":1579737600,"x_price_bitcoin":"168.07","y_imp_loss_uniswap_percent":"-22.094756000000004","y_imp_loss_smardex_percent":"-4.800188000000006"},{"timestamp":1580263200,"x_price_bitcoin":"176.89","y_imp_loss_uniswap_percent":"-20.851457999999994","y_imp_loss_smardex_percent":"-3.2527900000000045"},{"timestamp":1580788800,"x_price_bitcoin":"188.08","y_imp_loss_uniswap_percent":"-19.377886000000004","y_imp_loss_smardex_percent":"-1.3861490000000032"},{"timestamp":1581318000,"x_price_bitcoin":"223.23","y_imp_loss_uniswap_percent":"-15.395334000000005","y_imp_loss_smardex_percent":"3.8309799999999967"},{"timestamp":1581843600,"x_price_bitcoin":"271.02","y_imp_loss_uniswap_percent":"-11.215137999999996","y_imp_loss_smardex_percent":"9.745019999999997"},{"timestamp":1582387200,"x_price_bitcoin":"261.05","y_imp_loss_uniswap_percent":"-11.989559999999997","y_imp_loss_smardex_percent":"8.679519999999997"},{"timestamp":1582912800,"x_price_bitcoin":"222.89","y_imp_loss_uniswap_percent":"-15.429719000000006","y_imp_loss_smardex_percent":"4.3283600000000035"},{"timestamp":1583442000,"x_price_bitcoin":"231.15","y_imp_loss_uniswap_percent":"-14.614763999999994","y_imp_loss_smardex_percent":"5.35736"},{"timestamp":1583967600,"x_price_bitcoin":"194.23","y_imp_loss_uniswap_percent":"-18.613767999999993","y_imp_loss_smardex_percent":"0.692859999999996"},{"timestamp":1584493200,"x_price_bitcoin":"116.78","y_imp_loss_uniswap_percent":"-31.141498999999996","y_imp_loss_smardex_percent":"-12.327962"},{"timestamp":1585018800,"x_price_bitcoin":"136.2","y_imp_loss_uniswap_percent":"-27.297594000000004","y_imp_loss_smardex_percent":"-7.985701000000006"},{"timestamp":1585544400,"x_price_bitcoin":"127.44","y_imp_loss_uniswap_percent":"-28.958489999999998","y_imp_loss_smardex_percent":"-9.880341999999999"},{"timestamp":1586070000,"x_price_bitcoin":"143.05","y_imp_loss_uniswap_percent":"-26.074371999999997","y_imp_loss_smardex_percent":"-6.449403000000004"},{"timestamp":1586595600,"x_price_bitcoin":"158.85","y_imp_loss_uniswap_percent":"-23.478783000000007","y_imp_loss_smardex_percent":"-3.2082050000000066"},{"timestamp":1587121200,"x_price_bitcoin":"171.16","y_imp_loss_uniswap_percent":"-21.650543","y_imp_loss_smardex_percent":"-0.882472000000007"},{"timestamp":1587646800,"x_price_bitcoin":"184.34","y_imp_loss_uniswap_percent":"-19.858093999999994","y_imp_loss_smardex_percent":"1.4532399999999939"},{"timestamp":1588179600,"x_price_bitcoin":"214.32","y_imp_loss_uniswap_percent":"-16.321285000000003","y_imp_loss_smardex_percent":"6.196470000000005"},{"timestamp":1588705200,"x_price_bitcoin":"203.48","y_imp_loss_uniswap_percent":"-17.521136999999996","y_imp_loss_smardex_percent":"4.627750000000006"},{"timestamp":1589230800,"x_price_bitcoin":"186.64","y_imp_loss_uniswap_percent":"-19.561358","y_imp_loss_smardex_percent":"2.0827000000000027"},{"timestamp":1589756400,"x_price_bitcoin":"207.51","y_imp_loss_uniswap_percent":"-17.065271999999993","y_imp_loss_smardex_percent":"5.276449999999997"},{"timestamp":1590282000,"x_price_bitcoin":"207.32","y_imp_loss_uniswap_percent":"-17.086499000000003","y_imp_loss_smardex_percent":"5.284099999999995"},{"timestamp":1590807600,"x_price_bitcoin":"219.7","y_imp_loss_uniswap_percent":"-15.755948000000004","y_imp_loss_smardex_percent":"7.033690000000007"},{"timestamp":1591333200,"x_price_bitcoin":"243.34","y_imp_loss_uniswap_percent":"-13.486045000000004","y_imp_loss_smardex_percent":"10.10727"},{"timestamp":1591858800,"x_price_bitcoin":"246.94","y_imp_loss_uniswap_percent":"-13.168610999999999","y_imp_loss_smardex_percent":"10.567970000000003"},{"timestamp":1592384400,"x_price_bitcoin":"234.16","y_imp_loss_uniswap_percent":"-14.328084000000004","y_imp_loss_smardex_percent":"9.054379999999995"},{"timestamp":1592910000,"x_price_bitcoin":"242.1","y_imp_loss_uniswap_percent":"-13.597019000000003","y_imp_loss_smardex_percent":"10.040940000000006"},{"timestamp":1593446400,"x_price_bitcoin":"223.96","y_imp_loss_uniswap_percent":"-15.321754999999996","y_imp_loss_smardex_percent":"7.859809999999996"},{"timestamp":1593972000,"x_price_bitcoin":"225.15","y_imp_loss_uniswap_percent":"-15.202532000000005","y_imp_loss_smardex_percent":"8.04392"},{"timestamp":1594497600,"x_price_bitcoin":"237.91","y_imp_loss_uniswap_percent":"-13.978335000000001","y_imp_loss_smardex_percent":"9.635589999999993"},{"timestamp":1595023200,"x_price_bitcoin":"232.73","y_imp_loss_uniswap_percent":"-14.463611999999998","y_imp_loss_smardex_percent":"9.054010000000005"},{"timestamp":1595548800,"x_price_bitcoin":"275.31","y_imp_loss_uniswap_percent":"-10.895927","y_imp_loss_smardex_percent":"13.781880000000001"},{"timestamp":1596074400,"x_price_bitcoin":"316.43","y_imp_loss_uniswap_percent":"-8.216173999999995","y_imp_loss_smardex_percent":"17.660780000000003"},{"timestamp":1596600000,"x_price_bitcoin":"389.39","y_imp_loss_uniswap_percent":"-4.801592999999997","y_imp_loss_smardex_percent":"23.07786"},{"timestamp":1597125600,"x_price_bitcoin":"395.1","y_imp_loss_uniswap_percent":"-4.591513000000006","y_imp_loss_smardex_percent":"23.455389999999994"},{"timestamp":1597651200,"x_price_bitcoin":"423.6","y_imp_loss_uniswap_percent":"-3.644617999999994","y_imp_loss_smardex_percent":"25.050610000000006"},{"timestamp":1598176800,"x_price_bitcoin":"389.82","y_imp_loss_uniswap_percent":"-4.785521000000003","y_imp_loss_smardex_percent":"23.300759999999997"},{"timestamp":1598702400,"x_price_bitcoin":"397.76","y_imp_loss_uniswap_percent":"-4.496075000000005","y_imp_loss_smardex_percent":"23.75519"},{"timestamp":1599228000,"x_price_bitcoin":"391.25","y_imp_loss_uniswap_percent":"-4.732370000000003","y_imp_loss_smardex_percent":"23.55368"},{"timestamp":1599753600,"x_price_bitcoin":"370.96","y_imp_loss_uniswap_percent":"-5.5305879999999945","y_imp_loss_smardex_percent":"22.527289999999994"},{"timestamp":1600279200,"x_price_bitcoin":"369.44","y_imp_loss_uniswap_percent":"-5.594346999999999","y_imp_loss_smardex_percent":"22.478830000000002"},{"timestamp":1600804800,"x_price_bitcoin":"343.55","y_imp_loss_uniswap_percent":"-6.773005999999995","y_imp_loss_smardex_percent":"21.047970000000007"},{"timestamp":1601330400,"x_price_bitcoin":"363.62","y_imp_loss_uniswap_percent":"-5.843847999999994","y_imp_loss_smardex_percent":"22.239680000000007"},{"timestamp":1601856000,"x_price_bitcoin":"352.34","y_imp_loss_uniswap_percent":"-6.352517000000006","y_imp_loss_smardex_percent":"21.635400000000004"},{"timestamp":1602381600,"x_price_bitcoin":"372.66","y_imp_loss_uniswap_percent":"-5.459953999999996","y_imp_loss_smardex_percent":"22.801950000000005"},{"timestamp":1602907200,"x_price_bitcoin":"368.28","y_imp_loss_uniswap_percent":"-5.643393000000003","y_imp_loss_smardex_percent":"22.6027"},{"timestamp":1603432800,"x_price_bitcoin":"416.74","y_imp_loss_uniswap_percent":"-3.8577860000000044","y_imp_loss_smardex_percent":"25.02315"},{"timestamp":1603958400,"x_price_bitcoin":"387.2","y_imp_loss_uniswap_percent":"-4.884089000000003","y_imp_loss_smardex_percent":"23.66874"},{"timestamp":1604484000,"x_price_bitcoin":"380.72","y_imp_loss_uniswap_percent":"-5.134594000000007","y_imp_loss_smardex_percent":"23.38064"},{"timestamp":1605009600,"x_price_bitcoin":"447.48","y_imp_loss_uniswap_percent":"-2.969237000000007","y_imp_loss_smardex_percent":"26.376379999999997"},{"timestamp":1605535200,"x_price_bitcoin":"455.79","y_imp_loss_uniswap_percent":"-2.7569560000000024","y_imp_loss_smardex_percent":"26.725949999999997"},{"timestamp":1606060800,"x_price_bitcoin":"534.36","y_imp_loss_uniswap_percent":"-1.2360410000000002","y_imp_loss_smardex_percent":"29.185519999999997"},{"timestamp":1606586400,"x_price_bitcoin":"541.39","y_imp_loss_uniswap_percent":"-1.136883999999995","y_imp_loss_smardex_percent":"29.45061000000001"},{"timestamp":1607115600,"x_price_bitcoin":"588.83","y_imp_loss_uniswap_percent":"-0.5966509999999943","y_imp_loss_smardex_percent":"30.48487"},{"timestamp":1607641200,"x_price_bitcoin":"563.11","y_imp_loss_uniswap_percent":"-0.862868000000006","y_imp_loss_smardex_percent":"30.060969999999998"},{"timestamp":1608166800,"x_price_bitcoin":"644.66","y_imp_loss_uniswap_percent":"-0.2058449999999965","y_imp_loss_smardex_percent":"31.325199999999995"},{"timestamp":1608706800,"x_price_bitcoin":"614.77","y_imp_loss_uniswap_percent":"-0.38556699999999466","y_imp_loss_smardex_percent":"30.996190000000013"},{"timestamp":1609236000,"x_price_bitcoin":"722.3","y_imp_loss_uniswap_percent":"-0.0027079999999983784","y_imp_loss_smardex_percent":"32.04515000000001"},{"timestamp":1609761600,"x_price_bitcoin":"976.97","y_imp_loss_uniswap_percent":"-1.022945000000007","y_imp_loss_smardex_percent":"32.62298999999999"},{"timestamp":1610287200,"x_price_bitcoin":"1309.77","y_imp_loss_uniswap_percent":"-4.068582000000006","y_imp_loss_smardex_percent":"31.155910000000006"},{"timestamp":1610812800,"x_price_bitcoin":"1276.29","y_imp_loss_uniswap_percent":"-3.724708000000007","y_imp_loss_smardex_percent":"31.11632"},{"timestamp":1611338400,"x_price_bitcoin":"1234.16","y_imp_loss_uniswap_percent":"-3.2994860000000017","y_imp_loss_smardex_percent":"31.605279999999993"},{"timestamp":1611864000,"x_price_bitcoin":"1332.36","y_imp_loss_uniswap_percent":"-4.303099000000003","y_imp_loss_smardex_percent":"30.60239999999999"},{"timestamp":1612389600,"x_price_bitcoin":"1631","y_imp_loss_uniswap_percent":"-7.4955520000000035","y_imp_loss_smardex_percent":"27.256079999999997"},{"timestamp":1612915200,"x_price_bitcoin":"1769.14","y_imp_loss_uniswap_percent":"-8.976674000000003","y_imp_loss_smardex_percent":"25.730869999999996"},{"timestamp":1613444400,"x_price_bitcoin":"1799.29","y_imp_loss_uniswap_percent":"-9.297267000000005","y_imp_loss_smardex_percent":"25.42138"},{"timestamp":1613970000,"x_price_bitcoin":"1864.22","y_imp_loss_uniswap_percent":"-9.983294999999998","y_imp_loss_smardex_percent":"24.728369999999998"},{"timestamp":1614495600,"x_price_bitcoin":"1334.53","y_imp_loss_uniswap_percent":"-4.325721999999999","y_imp_loss_smardex_percent":"31.899810000000002"},{"timestamp":1615024800,"x_price_bitcoin":"1564.17","y_imp_loss_uniswap_percent":"-6.7751070000000055","y_imp_loss_smardex_percent":"28.643640000000005"},{"timestamp":1615550400,"x_price_bitcoin":"1773.92","y_imp_loss_uniswap_percent":"-9.027579000000003","y_imp_loss_smardex_percent":"25.916740000000004"},{"timestamp":1616076000,"x_price_bitcoin":"1791.22","y_imp_loss_uniswap_percent":"-9.211574999999996","y_imp_loss_smardex_percent":"25.735370000000003"},{"timestamp":1616601600,"x_price_bitcoin":"1721.33","y_imp_loss_uniswap_percent":"-8.466032999999996","y_imp_loss_smardex_percent":"26.700370000000007"},{"timestamp":1617127200,"x_price_bitcoin":"1835.14","y_imp_loss_uniswap_percent":"-9.676833000000002","y_imp_loss_smardex_percent":"25.22685"},{"timestamp":1617652800,"x_price_bitcoin":"2104.51","y_imp_loss_uniswap_percent":"-12.456982999999994","y_imp_loss_smardex_percent":"21.952399999999997"},{"timestamp":1618178400,"x_price_bitcoin":"2135.06","y_imp_loss_uniswap_percent":"-12.763097000000002","y_imp_loss_smardex_percent":"21.61806"},{"timestamp":1618704000,"x_price_bitcoin":"2317.65","y_imp_loss_uniswap_percent":"-14.549411000000006","y_imp_loss_smardex_percent":"19.59545"},{"timestamp":1619236800,"x_price_bitcoin":"2296.81","y_imp_loss_uniswap_percent":"-14.349352999999994","y_imp_loss_smardex_percent":"19.864859999999993"},{"timestamp":1619773200,"x_price_bitcoin":"2780.74","y_imp_loss_uniswap_percent":"-18.736733","y_imp_loss_smardex_percent":"14.641810000000007"},{"timestamp":1620298800,"x_price_bitcoin":"3483.93","y_imp_loss_uniswap_percent":"-24.208197999999996","y_imp_loss_smardex_percent":"8.433310000000006"},{"timestamp":1620824400,"x_price_bitcoin":"4291.01","y_imp_loss_uniswap_percent":"-29.398595","y_imp_loss_smardex_percent":"2.624769999999998"},{"timestamp":1621350000,"x_price_bitcoin":"3311.96","y_imp_loss_uniswap_percent":"-22.960725999999994","y_imp_loss_smardex_percent":"10.424229999999994"},{"timestamp":1621875600,"x_price_bitcoin":"2467.99","y_imp_loss_uniswap_percent":"-15.962917000000004","y_imp_loss_smardex_percent":"20.274339999999995"},{"timestamp":1622401200,"x_price_bitcoin":"2456.96","y_imp_loss_uniswap_percent":"-15.860991999999996","y_imp_loss_smardex_percent":"20.471990000000005"},{"timestamp":1622926800,"x_price_bitcoin":"2633.12","y_imp_loss_uniswap_percent":"-17.455264","y_imp_loss_smardex_percent":"18.339150000000004"},{"timestamp":1623452400,"x_price_bitcoin":"2360.8","y_imp_loss_uniswap_percent":"-14.960459999999998","y_imp_loss_smardex_percent":"21.824029999999993"},{"timestamp":1623978000,"x_price_bitcoin":"2349.56","y_imp_loss_uniswap_percent":"-14.853801000000004","y_imp_loss_smardex_percent":"22.005719999999997"},{"timestamp":1624503600,"x_price_bitcoin":"1892.85","y_imp_loss_uniswap_percent":"-10.283675000000002","y_imp_loss_smardex_percent":"28.812309999999997"},{"timestamp":1625029200,"x_price_bitcoin":"2095.99","y_imp_loss_uniswap_percent":"-12.371253999999993","y_imp_loss_smardex_percent":"25.82419"},{"timestamp":1625554800,"x_price_bitcoin":"2318.38","y_imp_loss_uniswap_percent":"-14.556400999999994","y_imp_loss_smardex_percent":"22.875709999999998"},{"timestamp":1626080400,"x_price_bitcoin":"2144.01","y_imp_loss_uniswap_percent":"-12.852393000000006","y_imp_loss_smardex_percent":"25.227649999999997"},{"timestamp":1626606000,"x_price_bitcoin":"1961.79","y_imp_loss_uniswap_percent":"-11.001095000000007","y_imp_loss_smardex_percent":"27.888990000000007"},{"timestamp":1627131600,"x_price_bitcoin":"2159.07","y_imp_loss_uniswap_percent":"-13.002253999999994","y_imp_loss_smardex_percent":"25.191500000000005"},{"timestamp":1627657200,"x_price_bitcoin":"2341.68","y_imp_loss_uniswap_percent":"-14.778852","y_imp_loss_smardex_percent":"22.883170000000007"},{"timestamp":1628182800,"x_price_bitcoin":"2787.93","y_imp_loss_uniswap_percent":"-18.797901999999993","y_imp_loss_smardex_percent":"17.842399999999998"},{"timestamp":1628708400,"x_price_bitcoin":"3227.68","y_imp_loss_uniswap_percent":"-22.328923000000003","y_imp_loss_smardex_percent":"13.599609999999998"},{"timestamp":1629248400,"x_price_bitcoin":"3021.01","y_imp_loss_uniswap_percent":"-20.719853999999998","y_imp_loss_smardex_percent":"15.632149999999996"},{"timestamp":1629774000,"x_price_bitcoin":"3305.72","y_imp_loss_uniswap_percent":"-22.914417999999998","y_imp_loss_smardex_percent":"12.918030000000002"},{"timestamp":1630299600,"x_price_bitcoin":"3163.94","y_imp_loss_uniswap_percent":"-21.841858000000002","y_imp_loss_smardex_percent":"14.301559999999995"},{"timestamp":1630825200,"x_price_bitcoin":"3875.73","y_imp_loss_uniswap_percent":"-26.855868","y_imp_loss_smardex_percent":"8.106920000000002"},{"timestamp":1631350800,"x_price_bitcoin":"3253.19","y_imp_loss_uniswap_percent":"-22.521613000000002","y_imp_loss_smardex_percent":"13.649349999999998"},{"timestamp":1631876400,"x_price_bitcoin":"3460.57","y_imp_loss_uniswap_percent":"-24.041945999999996","y_imp_loss_smardex_percent":"11.686850000000007"},{"timestamp":1632402000,"x_price_bitcoin":"3068.99","y_imp_loss_uniswap_percent":"-21.101169","y_imp_loss_smardex_percent":"15.685749999999999"},{"timestamp":1632934800,"x_price_bitcoin":"2844.28","y_imp_loss_uniswap_percent":"-19.273342999999997","y_imp_loss_smardex_percent":"18.269009999999994"},{"timestamp":1633460400,"x_price_bitcoin":"3457.12","y_imp_loss_uniswap_percent":"-24.017308999999997","y_imp_loss_smardex_percent":"11.868020000000001"},{"timestamp":1633986000,"x_price_bitcoin":"3491.7","y_imp_loss_uniswap_percent":"-24.263278","y_imp_loss_smardex_percent":"11.585359999999994"},{"timestamp":1634511600,"x_price_bitcoin":"3826.16","y_imp_loss_uniswap_percent":"-26.534959999999998","y_imp_loss_smardex_percent":"8.660480000000007"},{"timestamp":1635037200,"x_price_bitcoin":"4140.91","y_imp_loss_uniswap_percent":"-28.508494999999996","y_imp_loss_smardex_percent":"6.167919999999995"},{"timestamp":1635562800,"x_price_bitcoin":"4360.16","y_imp_loss_uniswap_percent":"-29.798243","y_imp_loss_smardex_percent":"4.553669999999997"},{"timestamp":1636088400,"x_price_bitcoin":"4529.69","y_imp_loss_uniswap_percent":"-30.751468000000003","y_imp_loss_smardex_percent":"3.3735400000000055"},{"timestamp":1636614000,"x_price_bitcoin":"4669.25","y_imp_loss_uniswap_percent":"-31.509075999999993","y_imp_loss_smardex_percent":"2.445849999999993"},{"timestamp":1637139600,"x_price_bitcoin":"4195.09","y_imp_loss_uniswap_percent":"-28.833423999999994","y_imp_loss_smardex_percent":"5.987480000000005"},{"timestamp":1637665200,"x_price_bitcoin":"4155.9","y_imp_loss_uniswap_percent":"-28.598810999999998","y_imp_loss_smardex_percent":"6.339590000000001"},{"timestamp":1638190800,"x_price_bitcoin":"4308.8","y_imp_loss_uniswap_percent":"-29.502026","y_imp_loss_smardex_percent":"5.158159999999995"},{"timestamp":1638716400,"x_price_bitcoin":"4140.07","y_imp_loss_uniswap_percent":"-28.503423999999995","y_imp_loss_smardex_percent":"6.569090000000003"},{"timestamp":1639242000,"x_price_bitcoin":"4074.84","y_imp_loss_uniswap_percent":"-28.106551999999994","y_imp_loss_smardex_percent":"7.153809999999993"},{"timestamp":1639767600,"x_price_bitcoin":"3902.57","y_imp_loss_uniswap_percent":"-27.028006000000005","y_imp_loss_smardex_percent":"8.693020000000004"},{"timestamp":1640293200,"x_price_bitcoin":"4121.5","y_imp_loss_uniswap_percent":"-28.391068000000004","y_imp_loss_smardex_percent":"6.8422900000000055"},{"timestamp":1640818800,"x_price_bitcoin":"3722.63","y_imp_loss_uniswap_percent":"-25.851940999999997","y_imp_loss_smardex_percent":"10.4178"},{"timestamp":1641344400,"x_price_bitcoin":"3810.13","y_imp_loss_uniswap_percent":"-26.430345000000003","y_imp_loss_smardex_percent":"9.635639999999995"},{"timestamp":1641870000,"x_price_bitcoin":"3115.61","y_imp_loss_uniswap_percent":"-21.467133000000004","y_imp_loss_smardex_percent":"16.906850000000006"},{"timestamp":1642395600,"x_price_bitcoin":"3254.1","y_imp_loss_uniswap_percent":"-22.528463000000002","y_imp_loss_smardex_percent":"15.36215"},{"timestamp":1642921200,"x_price_bitcoin":"2462.95","y_imp_loss_uniswap_percent":"-15.916379000000006","y_imp_loss_smardex_percent":"25.608469999999997"},{"timestamp":1643446800,"x_price_bitcoin":"2556.78","y_imp_loss_uniswap_percent":"-16.773151999999996","y_imp_loss_smardex_percent":"24.352909999999994"},{"timestamp":1643972400,"x_price_bitcoin":"2832.66","y_imp_loss_uniswap_percent":"-19.175872999999996","y_imp_loss_smardex_percent":"20.84778"},{"timestamp":1644498000,"x_price_bitcoin":"3244.66","y_imp_loss_uniswap_percent":"-22.457323000000002","y_imp_loss_smardex_percent":"16.316289999999995"},{"timestamp":1645023600,"x_price_bitcoin":"3062.12","y_imp_loss_uniswap_percent":"-21.046863000000002","y_imp_loss_smardex_percent":"18.288300000000007"},{"timestamp":1645549200,"x_price_bitcoin":"2602.49","y_imp_loss_uniswap_percent":"-17.183183","y_imp_loss_smardex_percent":"23.862669999999994"},{"timestamp":1646074800,"x_price_bitcoin":"2808.26","y_imp_loss_uniswap_percent":"-18.970239000000007","y_imp_loss_smardex_percent":"21.34474"},{"timestamp":1646600400,"x_price_bitcoin":"2617.48","y_imp_loss_uniswap_percent":"-17.316604999999996","y_imp_loss_smardex_percent":"23.745450000000005"},{"timestamp":1647126000,"x_price_bitcoin":"2587.29","y_imp_loss_uniswap_percent":"-17.047368000000006","y_imp_loss_smardex_percent":"24.171629999999993"},{"timestamp":1647651600,"x_price_bitcoin":"2966.14","y_imp_loss_uniswap_percent":"-20.277883000000003","y_imp_loss_smardex_percent":"19.690330000000003"},{"timestamp":1648177200,"x_price_bitcoin":"3122.48","y_imp_loss_uniswap_percent":"-21.520686999999995","y_imp_loss_smardex_percent":"18.046899999999994"},{"timestamp":1648702800,"x_price_bitcoin":"3390.59","y_imp_loss_uniswap_percent":"-23.537930000000003","y_imp_loss_smardex_percent":"15.421710000000004"},{"timestamp":1649228400,"x_price_bitcoin":"3368.26","y_imp_loss_uniswap_percent":"-23.375193999999993","y_imp_loss_smardex_percent":"15.674880000000002"},{"timestamp":1649754000,"x_price_bitcoin":"3025.98","y_imp_loss_uniswap_percent":"-20.759574","y_imp_loss_smardex_percent":"19.25636"},{"timestamp":1650279600,"x_price_bitcoin":"2908.12","y_imp_loss_uniswap_percent":"-19.803590999999997","y_imp_loss_smardex_percent":"20.629990000000006"},{"timestamp":1650805200,"x_price_bitcoin":"2935.04","y_imp_loss_uniswap_percent":"-20.024547","y_imp_loss_smardex_percent":"20.353710000000007"},{"timestamp":1651330800,"x_price_bitcoin":"2784","y_imp_loss_uniswap_percent":"-18.764482","y_imp_loss_smardex_percent":"22.18002"},{"timestamp":1651856400,"x_price_bitcoin":"2710.81","y_imp_loss_uniswap_percent":"-18.135796999999997","y_imp_loss_smardex_percent":"23.11905"},{"timestamp":1652382000,"x_price_bitcoin":"1910.62","y_imp_loss_uniswap_percent":"-10.469413000000003","y_imp_loss_smardex_percent":"35.11398"},{"timestamp":1652907600,"x_price_bitcoin":"1967.1","y_imp_loss_uniswap_percent":"-11.055989999999994","y_imp_loss_smardex_percent":"34.132029999999986"},{"timestamp":1653433200,"x_price_bitcoin":"1982.88","y_imp_loss_uniswap_percent":"-11.218806","y_imp_loss_smardex_percent":"33.905190000000005"},{"timestamp":1653958800,"x_price_bitcoin":"1992.85","y_imp_loss_uniswap_percent":"-11.321426000000002","y_imp_loss_smardex_percent":"33.853080000000006"},{"timestamp":1654484400,"x_price_bitcoin":"1867.2","y_imp_loss_uniswap_percent":"-10.014623","y_imp_loss_smardex_percent":"35.91987"},{"timestamp":1655010000,"x_price_bitcoin":"1452.84","y_imp_loss_uniswap_percent":"-5.577938000000003","y_imp_loss_smardex_percent":"43.36940999999999"},{"timestamp":1655535600,"x_price_bitcoin":"1019.72","y_imp_loss_uniswap_percent":"-1.346977999999993","y_imp_loss_smardex_percent":"52.418000000000006"},{"timestamp":1656061200,"x_price_bitcoin":"1159.37","y_imp_loss_uniswap_percent":"-2.5711399999999998","y_imp_loss_smardex_percent":"49.901340000000005"},{"timestamp":1656586800,"x_price_bitcoin":"1021.98","y_imp_loss_uniswap_percent":"-1.364898999999994","y_imp_loss_smardex_percent":"52.23680999999999"},{"timestamp":1657112400,"x_price_bitcoin":"1136.04","y_imp_loss_uniswap_percent":"-2.352565999999996","y_imp_loss_smardex_percent":"50.402469999999994"},{"timestamp":1657638000,"x_price_bitcoin":"1076.03","y_imp_loss_uniswap_percent":"-1.8141370000000023","y_imp_loss_smardex_percent":"51.36035000000001"},{"timestamp":1658163600,"x_price_bitcoin":"1495.81","y_imp_loss_uniswap_percent":"-6.038884999999993","y_imp_loss_smardex_percent":"45.27898999999999"},{"timestamp":1658689200,"x_price_bitcoin":"1597.91","y_imp_loss_uniswap_percent":"-7.138919999999999","y_imp_loss_smardex_percent":"43.912800000000004"},{"timestamp":1659214800,"x_price_bitcoin":"1702.24","y_imp_loss_uniswap_percent":"-8.261467999999994","y_imp_loss_smardex_percent":"42.509060000000005"},{"timestamp":1659740400,"x_price_bitcoin":"1715.42","y_imp_loss_uniswap_percent":"-8.402738999999997","y_imp_loss_smardex_percent":"42.34396000000001"},{"timestamp":1660266000,"x_price_bitcoin":"1885.62","y_imp_loss_uniswap_percent":"-10.207949","y_imp_loss_smardex_percent":"40.06805"},{"timestamp":1660791600,"x_price_bitcoin":"1852.31","y_imp_loss_uniswap_percent":"-9.857940999999997","y_imp_loss_smardex_percent":"40.57255000000001"},{"timestamp":1661317200,"x_price_bitcoin":"1623.35","y_imp_loss_uniswap_percent":"-7.4131339999999994","y_imp_loss_smardex_percent":"43.941720000000004"},{"timestamp":1661842800,"x_price_bitcoin":"1576.95","y_imp_loss_uniswap_percent":"-6.912912000000006","y_imp_loss_smardex_percent":"44.707629999999995"},{"timestamp":1662368400,"x_price_bitcoin":"1565.02","y_imp_loss_uniswap_percent":"-6.784272000000001","y_imp_loss_smardex_percent":"44.92957000000001"},{"timestamp":1662894000,"x_price_bitcoin":"1762.13","y_imp_loss_uniswap_percent":"-8.901967999999997","y_imp_loss_smardex_percent":"41.98705000000001"},{"timestamp":1663419600,"x_price_bitcoin":"1424.67","y_imp_loss_uniswap_percent":"-5.2770869999999945","y_imp_loss_smardex_percent":"47.32426000000001"},{"timestamp":1663945200,"x_price_bitcoin":"1283.68","y_imp_loss_uniswap_percent":"-3.8001959999999997","y_imp_loss_smardex_percent":"49.78129000000001"},{"timestamp":1664470800,"x_price_bitcoin":"1337.45","y_imp_loss_uniswap_percent":"-4.356188000000003","y_imp_loss_smardex_percent":"48.899789999999996"},{"timestamp":1664996400,"x_price_bitcoin":"1357.38","y_imp_loss_uniswap_percent":"-4.564852999999999","y_imp_loss_smardex_percent":"48.60952"},{"timestamp":1665522000,"x_price_bitcoin":"1281.69","y_imp_loss_uniswap_percent":"-3.779843999999997","y_imp_loss_smardex_percent":"49.890600000000006"},{"timestamp":1666047600,"x_price_bitcoin":"1331.11","y_imp_loss_uniswap_percent":"-4.290075000000002","y_imp_loss_smardex_percent":"49.117459999999994"},{"timestamp":1666573200,"x_price_bitcoin":"1360.94","y_imp_loss_uniswap_percent":"-4.602250999999995","y_imp_loss_smardex_percent":"48.67878999999999"},{"timestamp":1667098800,"x_price_bitcoin":"1616.66","y_imp_loss_uniswap_percent":"-7.341041000000004","y_imp_loss_smardex_percent":"44.84666999999999"},{"timestamp":1667624400,"x_price_bitcoin":"1643.67","y_imp_loss_uniswap_percent":"-7.631998999999993","y_imp_loss_smardex_percent":"44.48205999999999"},{"timestamp":1668150000,"x_price_bitcoin":"1264.43","y_imp_loss_uniswap_percent":"-3.604093000000006","y_imp_loss_smardex_percent":"50.51186000000001"},{"timestamp":1668675600,"x_price_bitcoin":"1203.51","y_imp_loss_uniswap_percent":"-2.9964099999999974","y_imp_loss_smardex_percent":"51.5411"},{"timestamp":1669201200,"x_price_bitcoin":"1174.59","y_imp_loss_uniswap_percent":"-2.7161430000000024","y_imp_loss_smardex_percent":"52.06193999999999"},{"timestamp":1669726800,"x_price_bitcoin":"1216.26","y_imp_loss_uniswap_percent":"-3.1217790000000036","y_imp_loss_smardex_percent":"51.43523999999999"},{"timestamp":1670252400,"x_price_bitcoin":"1285.1","y_imp_loss_uniswap_percent":"-3.814729","y_imp_loss_smardex_percent":"50.401970000000006"},{"timestamp":1670778000,"x_price_bitcoin":"1273.84","y_imp_loss_uniswap_percent":"-3.699736999999999","y_imp_loss_smardex_percent":"50.60900000000001"},{"timestamp":1671303600,"x_price_bitcoin":"1177.17","y_imp_loss_uniswap_percent":"-2.740900999999994","y_imp_loss_smardex_percent":"52.13762"},{"timestamp":1671829200,"x_price_bitcoin":"1219.82","y_imp_loss_uniswap_percent":"-3.156968000000006","y_imp_loss_smardex_percent":"51.511660000000006"},{"timestamp":1672354800,"x_price_bitcoin":"1197.81","y_imp_loss_uniswap_percent":"-2.9407070000000033","y_imp_loss_smardex_percent":"51.88279"},{"timestamp":1672527600,"x_price_bitcoin":"1196.18","y_imp_loss_uniswap_percent":"-2.9248189999999994","y_imp_loss_smardex_percent":"51.91881000000001"}]'),
                v = s(56126);

            function b(e) {
                let {
                    active: t,
                    payload: s,
                    label: i
                } = e;
                if (t) {
                    const e = (0, v.bF)(s[0].payload.y_imp_loss_smardex_percent),
                        t = (0, v.bF)(s[0].payload.y_imp_loss_uniswap_percent),
                        i = (0, v.rL)(new Date(1e3 * s[0].payload.timestamp)),
                        p = (0, v.cH)(s[0].payload.x_price_bitcoin);
                    return _.createElement("div", {
                        className: "w-40 rounded-sm bg-dark/[.5] text-center font-styrene backdrop-blur sm:w-80"
                    }, _.createElement("div", {
                        className: "flex w-full flex-col p-1 text-base sm:flex-row sm:space-x-3"
                    }, _.createElement("div", {
                        className: "flex w-full flex-1 flex-col space-y-0.5 text-buy sm:w-1/2"
                    }, _.createElement("div", {
                        className: "text-[0.75rem]"
                    }, "Smart"), _.createElement("span", null, e, "%")), _.createElement("div", {
                        className: "flex w-full flex-1 flex-col space-y-0.5 text-sell sm:w-1/2"
                    }, _.createElement("div", {
                        className: "text-[0.75rem]"
                    }, "Uniswap"), _.createElement("span", null, t, "%")), _.createElement("div", {
                        className: "flex w-full flex-1 flex-col space-y-0.5 text-[#5a25f1] sm:w-1/2"
                    }, _.createElement("div", {
                        className: "text-[0.75rem]"
                    }, "ETH"), _.createElement("span", null, p))), _.createElement("div", {
                        className: "p-1 text-[0.75rem]"
                    }, _.createElement(a.G, {
                        icon: m.$nv,
                        size: "sm",
                        className: "pr-1"
                    }), i))
                }
                return null
            }

            function w(e) {
                let {
                    dex: t,
                    viewBox: s,
                    offset: i
                } = e;
                const {
                    width: a,
                    x: m,
                    y: p
                } = s, n = (a || 0) + (i || 0);
                return "SMART" === t ? _.createElement("g", {
                    className: "font-styrene",
                    fill: "#00ffb2"
                }, _.createElement("text", {
                    x: m,
                    y: p,
                    dx: n
                }, _.createElement("tspan", {
                    fontSize: "10"
                }, "SMART")), _.createElement("text", {
                    x: m,
                    y: p,
                    dx: n,
                    dy: 10
                }, _.createElement("tspan", {
                    fontSize: "10"
                }, "Impermanent Gain"))) : "UNI" === t ? _.createElement("g", {
                    className: "font-styrene",
                    fill: "#ff007a"
                }, _.createElement("text", {
                    x: m,
                    y: p,
                    dx: n
                }, _.createElement("tspan", {
                    fontSize: "10"
                }, "UNISWAP")), _.createElement("text", {
                    x: m,
                    y: p,
                    dx: n,
                    dy: 10
                }, _.createElement("tspan", {
                    fontSize: "10"
                }, "Impermanent Loss"))) : _.createElement("g", {
                    className: "font-styrene",
                    fill: "#5a25f1"
                }, _.createElement("text", {
                    x: 10,
                    y: p,
                    dx: i
                }, _.createElement("tspan", {
                    fontSize: "10"
                }, "ETH Price")))
            }

            function g() {
                const e = (0, _.useCallback)(((e, t) => new Date(1e3 * e).getFullYear().toString()), []),
                    t = (0, _.useCallback)(((e, t) => `${(0,v.bF)(e)}%`), []),
                    s = (0, _.useCallback)(((e, t) => (0, v.cH)(e)), []);
                return _.createElement(n.h, {
                    width: "100%",
                    height: 350
                }, _.createElement(l.w, {
                    data: y,
                    margin: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }
                }, _.createElement(r.q, {
                    stroke: "#435e74"
                }), _.createElement(c.d, {
                    y: 0,
                    yAxisId: "left-axis",
                    strokeWidth: .5,
                    fill: "#fff"
                }), _.createElement(o.K, {
                    dataKey: "timestamp",
                    stroke: "#435e74",
                    tick: {
                        fontSize: 12,
                        fill: "#435d74"
                    },
                    tickFormatter: e,
                    ticks: [1514764800, 1546524e3, 1578160800, 1609761600, 1641344400]
                }), _.createElement(u.B, {
                    type: "number",
                    yAxisId: "left-axis",
                    width: 75,
                    stroke: "#435e74",
                    tick: {
                        fontSize: 12,
                        fill: "#435d74"
                    },
                    tickFormatter: t,
                    ticks: ["-50", "-25", "0", "25", "50"],
                    domain: [-150, 60]
                }), _.createElement(u.B, {
                    type: "number",
                    yAxisId: "right-axis",
                    orientation: "right",
                    width: 105,
                    stroke: "#435e74",
                    tick: {
                        fontSize: 12,
                        fill: "#435d74"
                    },
                    tickFormatter: s,
                    ticks: ["0", "1000", "2000", "3000", "4000", "5000"],
                    domain: [0, 10500]
                }), _.createElement(x.x, {
                    yAxisId: "left-axis",
                    type: "monotone",
                    dataKey: "y_imp_loss_smardex_percent",
                    stroke: "#00ffb2",
                    strokeWidth: 2,
                    dot: !1
                }), _.createElement(x.x, {
                    yAxisId: "left-axis",
                    type: "monotone",
                    dataKey: "y_imp_loss_uniswap_percent",
                    stroke: "#ff007a",
                    strokeWidth: 2,
                    dot: !1
                }), _.createElement(x.x, {
                    yAxisId: "right-axis",
                    type: "monotone",
                    dataKey: "x_price_bitcoin",
                    stroke: "#5a25f1",
                    strokeWidth: 2,
                    dot: !1
                }), _.createElement(c.d, {
                    y: (0, v.bF)(parseFloat(y[y.length - 1].y_imp_loss_smardex_percent)),
                    yAxisId: "left-axis",
                    strokeWidth: 0,
                    label: _.createElement(w, {
                        dex: "SMART"
                    })
                }), _.createElement(c.d, {
                    y: (0, v.bF)(parseFloat(y[y.length - 1].y_imp_loss_uniswap_percent)),
                    yAxisId: "left-axis",
                    strokeWidth: 0,
                    label: _.createElement(w, {
                        dex: "UNI"
                    })
                }), _.createElement(c.d, {
                    y: (0, v.bF)(parseFloat(y[0].x_price_bitcoin)),
                    yAxisId: "right-axis",
                    strokeWidth: 0,
                    label: _.createElement(w, {
                        dex: "ETH_PRICE"
                    })
                }), _.createElement(d.u, {
                    wrapperStyle: {
                        outline: "none"
                    },
                    content: _.createElement(b, null)
                })))
            }
            var f = s(1136),
                E = JSON.parse('[{"timestamp":1514761200,"uni_value":20000,"sdex_value":20000},{"timestamp":1515279600,"uni_value":23537.33384,"sdex_value":23680.23},{"timestamp":1515798000,"uni_value":26484.6473,"sdex_value":26902.22},{"timestamp":1516316400,"uni_value":23157.76125,"sdex_value":23479.42},{"timestamp":1516834800,"uni_value":24444.55331,"sdex_value":24798.67},{"timestamp":1517353200,"uni_value":24265.30577,"sdex_value":24621.16},{"timestamp":1517871600,"uni_value":18034.40503,"sdex_value":18618.14},{"timestamp":1518476400,"uni_value":21422.64267,"sdex_value":21870.12},{"timestamp":1518994800,"uni_value":22630.7593,"sdex_value":23108.91},{"timestamp":1519513200,"uni_value":21280.92714,"sdex_value":21732.13},{"timestamp":1520031600,"uni_value":21685.94194,"sdex_value":22142.29},{"timestamp":1520550000,"uni_value":19449.31557,"sdex_value":19922.6},{"timestamp":1521068400,"uni_value":18223.28837,"sdex_value":18735.18},{"timestamp":1521673200,"uni_value":17392.07513,"sdex_value":17955.18},{"timestamp":1522188000,"uni_value":15644.30483,"sdex_value":16279.19},{"timestamp":1522706400,"uni_value":14451.02335,"sdex_value":15163.93},{"timestamp":1523224800,"uni_value":14974.54674,"sdex_value":15673.62},{"timestamp":1523743200,"uni_value":16717.58863,"sdex_value":17453.42},{"timestamp":1524261600,"uni_value":18222.24026,"sdex_value":19065.94},{"timestamp":1524780000,"uni_value":18917.2255,"sdex_value":19830.73},{"timestamp":1525298400,"uni_value":19738.54008,"sdex_value":20736.95},{"timestamp":1525816800,"uni_value":19890.42438,"sdex_value":20919.31},{"timestamp":1526335200,"uni_value":20028.08358,"sdex_value":21067.57},{"timestamp":1526853600,"uni_value":19796.92539,"sdex_value":20815.35},{"timestamp":1527372000,"uni_value":17740.31461,"sdex_value":18657.63},{"timestamp":1527890400,"uni_value":17942.63941,"sdex_value":18870.71},{"timestamp":1528408800,"uni_value":18042.72422,"sdex_value":18974.89},{"timestamp":1528927200,"uni_value":16242.92738,"sdex_value":17140.04},{"timestamp":1529445600,"uni_value":17039.76156,"sdex_value":17951.88},{"timestamp":1530050400,"uni_value":15375.67913,"sdex_value":16268.21},{"timestamp":1530568800,"uni_value":16140.97996,"sdex_value":17046.41},{"timestamp":1531087200,"uni_value":16197.34102,"sdex_value":17105.26},{"timestamp":1531605600,"uni_value":15619.51941,"sdex_value":16512.65},{"timestamp":1532124000,"uni_value":15812.57463,"sdex_value":16710.67},{"timestamp":1532642400,"uni_value":15865.45936,"sdex_value":16765.26},{"timestamp":1533160800,"uni_value":15008.03548,"sdex_value":15884.99},{"timestamp":1533679200,"uni_value":14152.45374,"sdex_value":15025.28},{"timestamp":1534197600,"uni_value":11848.67041,"sdex_value":12803.56},{"timestamp":1534716000,"uni_value":12571.56429,"sdex_value":13491.32},{"timestamp":1535234400,"uni_value":12225.40159,"sdex_value":13148.49},{"timestamp":1535752800,"uni_value":12825.53489,"sdex_value":13757.23},{"timestamp":1536271200,"uni_value":10915.95128,"sdex_value":11851.35},{"timestamp":1536876000,"uni_value":10575.19567,"sdex_value":11536.13},{"timestamp":1537394400,"uni_value":10685.81815,"sdex_value":11646.06},{"timestamp":1537912800,"uni_value":10944.40884,"sdex_value":11912.24},{"timestamp":1538431200,"uni_value":11214.8035,"sdex_value":12199.22},{"timestamp":1538949600,"uni_value":11092.73631,"sdex_value":12069.23},{"timestamp":1539468000,"uni_value":10473.04753,"sdex_value":11417.22},{"timestamp":1539986400,"uni_value":10681.73199,"sdex_value":11635.48},{"timestamp":1540504800,"uni_value":10538.75388,"sdex_value":11484.39},{"timestamp":1541026800,"uni_value":10410.07201,"sdex_value":11349.04},{"timestamp":1541545200,"uni_value":11020.43157,"sdex_value":12000.65},{"timestamp":1542063600,"uni_value":10729.3918,"sdex_value":11687.22},{"timestamp":1542582000,"uni_value":9171.338508,"sdex_value":10070.96},{"timestamp":1543100400,"uni_value":7855.393515,"sdex_value":8769.82},{"timestamp":1543618800,"uni_value":8021.063388,"sdex_value":8936.94},{"timestamp":1544137200,"uni_value":7146.058487,"sdex_value":8057.48},{"timestamp":1544742000,"uni_value":6830.588196,"sdex_value":7737.34},{"timestamp":1545260400,"uni_value":7340.060075,"sdex_value":8271.11},{"timestamp":1545778800,"uni_value":8375.832386,"sdex_value":9428.88},{"timestamp":1546297200,"uni_value":8461.072414,"sdex_value":9527.61},{"timestamp":1546815600,"uni_value":9132.581581,"sdex_value":10310.64},{"timestamp":1547334000,"uni_value":8207.018463,"sdex_value":9251.16},{"timestamp":1547852400,"uni_value":8087.460687,"sdex_value":9118.47},{"timestamp":1548370800,"uni_value":7962.340248,"sdex_value":8980.04},{"timestamp":1548889200,"uni_value":7714.146474,"sdex_value":8708.46},{"timestamp":1549407600,"uni_value":7523.989274,"sdex_value":8501.58},{"timestamp":1549926000,"uni_value":8103.975012,"sdex_value":9143.05},{"timestamp":1550444400,"uni_value":8702.388899,"sdex_value":9829.68},{"timestamp":1550962800,"uni_value":9444.25073,"sdex_value":10710.69},{"timestamp":1551481200,"uni_value":8538.434967,"sdex_value":9646.16},{"timestamp":1551999600,"uni_value":8625.864209,"sdex_value":9746.09},{"timestamp":1552518000,"uni_value":8491.009532,"sdex_value":9592.56},{"timestamp":1553036400,"uni_value":8681.985413,"sdex_value":9810.32},{"timestamp":1553554800,"uni_value":8533.000851,"sdex_value":9640.63},{"timestamp":1554156000,"uni_value":8794.394422,"sdex_value":9939.21},{"timestamp":1554674400,"uni_value":9752.394949,"sdex_value":11067.42},{"timestamp":1555192800,"uni_value":9442.22819,"sdex_value":10702.46},{"timestamp":1555711200,"uni_value":9738.676328,"sdex_value":11050.14},{"timestamp":1556229600,"uni_value":9281.936752,"sdex_value":10518.94},{"timestamp":1556748000,"uni_value":9359.510779,"sdex_value":10608.01},{"timestamp":1557266400,"uni_value":9656.237872,"sdex_value":10951.94},{"timestamp":1557784800,"uni_value":10630.52247,"sdex_value":12109.21},{"timestamp":1558303200,"uni_value":11595.18738,"sdex_value":13306.8},{"timestamp":1558821600,"uni_value":11644.96647,"sdex_value":13368.31},{"timestamp":1559340000,"uni_value":11977.38691,"sdex_value":13777.83},{"timestamp":1559858400,"uni_value":11629.72666,"sdex_value":13359.61},{"timestamp":1560376800,"uni_value":11874.20364,"sdex_value":13650.03},{"timestamp":1560981600,"uni_value":12099.09832,"sdex_value":13919.87},{"timestamp":1561500000,"uni_value":13160.27074,"sdex_value":15219.14},{"timestamp":1562018400,"uni_value":12688.43723,"sdex_value":14649.95},{"timestamp":1562536800,"uni_value":12835.52967,"sdex_value":14824.61},{"timestamp":1563055200,"uni_value":12106.76326,"sdex_value":13969.94},{"timestamp":1563573600,"uni_value":11079.69225,"sdex_value":12813.55},{"timestamp":1564092000,"uni_value":10826.60231,"sdex_value":12529.78},{"timestamp":1564610400,"uni_value":10791.51525,"sdex_value":12490.71},{"timestamp":1565128800,"uni_value":11131.53166,"sdex_value":12876.52},{"timestamp":1565647200,"uni_value":10699.85243,"sdex_value":12386.82},{"timestamp":1566165600,"uni_value":10480.33965,"sdex_value":12143.94},{"timestamp":1566684000,"uni_value":10122.77802,"sdex_value":11744.42},{"timestamp":1567202400,"uni_value":9593.01984,"sdex_value":11160.53},{"timestamp":1567720800,"uni_value":9657.368049,"sdex_value":11230.22},{"timestamp":1568239200,"uni_value":9894.051369,"sdex_value":11493.41},{"timestamp":1568757600,"uni_value":10731.68024,"sdex_value":12455.78},{"timestamp":1569362400,"uni_value":9550.261093,"sdex_value":11111.82},{"timestamp":1569880800,"uni_value":9829.031941,"sdex_value":11425.21},{"timestamp":1570399200,"uni_value":9633.889696,"sdex_value":11204.36},{"timestamp":1570917600,"uni_value":9927.638217,"sdex_value":11538.16},{"timestamp":1571436000,"uni_value":9687.833009,"sdex_value":11264.56},{"timestamp":1571954400,"uni_value":9385.710823,"sdex_value":10923.72},{"timestamp":1572476400,"uni_value":9981.360782,"sdex_value":11602.63},{"timestamp":1572994800,"uni_value":10224.68955,"sdex_value":11886.24},{"timestamp":1573513200,"uni_value":10075.76921,"sdex_value":11712.32},{"timestamp":1574031600,"uni_value":10001.29594,"sdex_value":11625.85},{"timestamp":1574550000,"uni_value":9074.135815,"sdex_value":10575.18},{"timestamp":1575068400,"uni_value":9145.419359,"sdex_value":10657.61},{"timestamp":1575586800,"uni_value":8935.054564,"sdex_value":10421.03},{"timestamp":1576105200,"uni_value":8837.722922,"sdex_value":10311.71},{"timestamp":1576623600,"uni_value":8336.977325,"sdex_value":9757.82},{"timestamp":1577142000,"uni_value":8370.61867,"sdex_value":9794.64},{"timestamp":1577660400,"uni_value":8471.063209,"sdex_value":9907.16},{"timestamp":1578178800,"uni_value":8671.608346,"sdex_value":10134.65},{"timestamp":1578697200,"uni_value":8934.138415,"sdex_value":10437.1},{"timestamp":1579215600,"uni_value":9605.526301,"sdex_value":11231.81},{"timestamp":1579734000,"uni_value":9415.895634,"sdex_value":11006.26},{"timestamp":1580338800,"uni_value":9795.942613,"sdex_value":11460.3},{"timestamp":1580857200,"uni_value":10153.19015,"sdex_value":11894.15},{"timestamp":1581375600,"uni_value":10969.31083,"sdex_value":12910.66},{"timestamp":1581894000,"uni_value":11736.91966,"sdex_value":13902.21},{"timestamp":1582412400,"uni_value":12157.58971,"sdex_value":14441.13},{"timestamp":1582930800,"uni_value":11093.22824,"sdex_value":13120.93},{"timestamp":1583449200,"uni_value":11445.02788,"sdex_value":13546.35},{"timestamp":1583967600,"uni_value":8642.612555,"sdex_value":10346.4},{"timestamp":1584486000,"uni_value":7940.722529,"sdex_value":9606.02},{"timestamp":1585004400,"uni_value":8659.013411,"sdex_value":10429.06},{"timestamp":1585519200,"uni_value":8491.973489,"sdex_value":10232.38},{"timestamp":1586037600,"uni_value":8826.292497,"sdex_value":10630.92},{"timestamp":1586556000,"uni_value":9216.151566,"sdex_value":11108.49},{"timestamp":1587074400,"uni_value":9629.640512,"sdex_value":11618.29},{"timestamp":1587592800,"uni_value":10161.24888,"sdex_value":12286.25},{"timestamp":1588197600,"uni_value":10824.586,"sdex_value":13137.66},{"timestamp":1588716000,"uni_value":10584.47985,"sdex_value":12829.28},{"timestamp":1589234400,"uni_value":10097.95005,"sdex_value":12223.82},{"timestamp":1589752800,"uni_value":10817.02147,"sdex_value":13121.06},{"timestamp":1590271200,"uni_value":10677.13319,"sdex_value":12944.28},{"timestamp":1590789600,"uni_value":11023.64968,"sdex_value":13380.16},{"timestamp":1591308000,"uni_value":11523.43079,"sdex_value":14020.77},{"timestamp":1591826400,"uni_value":11627.84962,"sdex_value":14154.65},{"timestamp":1592344800,"uni_value":11313.39016,"sdex_value":13753.05},{"timestamp":1592863200,"uni_value":11542.59374,"sdex_value":14042.38},{"timestamp":1593381600,"uni_value":11048.12611,"sdex_value":13423.06},{"timestamp":1593900000,"uni_value":11094.94981,"sdex_value":13481.08},{"timestamp":1594418400,"uni_value":11421.64095,"sdex_value":13888.13},{"timestamp":1594936800,"uni_value":11284.17058,"sdex_value":13717.12},{"timestamp":1595455200,"uni_value":12099.32383,"sdex_value":14745.43},{"timestamp":1595973600,"uni_value":13259.00255,"sdex_value":16265.62},{"timestamp":1596492000,"uni_value":14583.71296,"sdex_value":18062.25},{"timestamp":1597010400,"uni_value":14689.78179,"sdex_value":18206.4},{"timestamp":1597528800,"uni_value":15305.06775,"sdex_value":19042.13},{"timestamp":1598047200,"uni_value":14569.11258,"sdex_value":18057.82},{"timestamp":1598652000,"uni_value":14667.29007,"sdex_value":18185.89},{"timestamp":1599170400,"uni_value":14700.17954,"sdex_value":18244},{"timestamp":1599688800,"uni_value":13836.80391,"sdex_value":17153.05},{"timestamp":1600207200,"uni_value":13960.67616,"sdex_value":17309.1},{"timestamp":1600725600,"uni_value":13665.56963,"sdex_value":16945.69},{"timestamp":1601244000,"uni_value":13985.08483,"sdex_value":17341.76},{"timestamp":1601762400,"uni_value":13737.65663,"sdex_value":17035.05},{"timestamp":1602280800,"uni_value":14318.24745,"sdex_value":17759.78},{"timestamp":1602799200,"uni_value":14211.51755,"sdex_value":17625.93},{"timestamp":1603317600,"uni_value":14697.2095,"sdex_value":18239.27},{"timestamp":1603839600,"uni_value":14717.0602,"sdex_value":18265.59},{"timestamp":1604358000,"uni_value":14360.48931,"sdex_value":17816.78},{"timestamp":1604876400,"uni_value":15673.05556,"sdex_value":19492.87},{"timestamp":1605394800,"uni_value":15804.29001,"sdex_value":19663.84},{"timestamp":1605913200,"uni_value":16671.49992,"sdex_value":20798.11},{"timestamp":1606431600,"uni_value":16744.8225,"sdex_value":20917.21},{"timestamp":1606950000,"uni_value":18254.85293,"sdex_value":22914.77},{"timestamp":1607468400,"uni_value":17601.19454,"sdex_value":22051},{"timestamp":1607986800,"uni_value":17878.65738,"sdex_value":22411.78},{"timestamp":1608505200,"uni_value":18368.09568,"sdex_value":23060.8},{"timestamp":1609110000,"uni_value":19335.34963,"sdex_value":24333.91},{"timestamp":1609628400,"uni_value":20576.00844,"sdex_value":26004.64},{"timestamp":1610146800,"uni_value":25571.16867,"sdex_value":33154.15},{"timestamp":1610665200,"uni_value":26008.7412,"sdex_value":33741.3},{"timestamp":1611183600,"uni_value":26899.7625,"sdex_value":34991.76},{"timestamp":1611702000,"uni_value":26733.61219,"sdex_value":34755.98},{"timestamp":1612220400,"uni_value":27522.146,"sdex_value":35827.21},{"timestamp":1612738800,"uni_value":29846.69999,"sdex_value":39070.17},{"timestamp":1613257200,"uni_value":31595.71562,"sdex_value":41540.31},{"timestamp":1613775600,"uni_value":33060.63448,"sdex_value":43618.98},{"timestamp":1614294000,"uni_value":28485.26787,"sdex_value":37358.75},{"timestamp":1614812400,"uni_value":29191.9245,"sdex_value":38294.75},{"timestamp":1615330800,"uni_value":31724.03894,"sdex_value":41716.88},{"timestamp":1615849200,"uni_value":31304.04087,"sdex_value":41143.59},{"timestamp":1616367600,"uni_value":31155.69083,"sdex_value":40943.97},{"timestamp":1616886000,"uni_value":30498.69047,"sdex_value":40065.52},{"timestamp":1617400800,"uni_value":33299.92915,"sdex_value":43870.46},{"timestamp":1617919200,"uni_value":33673.5119,"sdex_value":44387},{"timestamp":1618437600,"uni_value":36777.01835,"sdex_value":48750.39},{"timestamp":1619042400,"uni_value":35909.29731,"sdex_value":47505.39},{"timestamp":1619560800,"uni_value":38054.91685,"sdex_value":50493.84},{"timestamp":1620079200,"uni_value":41998.86897,"sdex_value":56173.25},{"timestamp":1620597600,"uni_value":47267.62876,"sdex_value":64037.13},{"timestamp":1621116000,"uni_value":45437.38258,"sdex_value":61332.43},{"timestamp":1621634400,"uni_value":35040.10024,"sdex_value":47367.17},{"timestamp":1622152800,"uni_value":37424.99536,"sdex_value":50534.58},{"timestamp":1622671200,"uni_value":39339.3,"sdex_value":53154.97},{"timestamp":1623189600,"uni_value":36761.43521,"sdex_value":49665.51},{"timestamp":1623708000,"uni_value":37507.7242,"sdex_value":50671.99},{"timestamp":1624226400,"uni_value":32783.32797,"sdex_value":44473.58},{"timestamp":1624744800,"uni_value":31826.22219,"sdex_value":43257.16},{"timestamp":1625263200,"uni_value":34931.6971,"sdex_value":47362.3},{"timestamp":1625781600,"uni_value":34506.14539,"sdex_value":46789.28},{"timestamp":1626300000,"uni_value":32316.93232,"sdex_value":43881.58},{"timestamp":1626818400,"uni_value":32857.56611,"sdex_value":44605.88},{"timestamp":1627336800,"uni_value":34877.6821,"sdex_value":47345.14},{"timestamp":1627855200,"uni_value":38027.58995,"sdex_value":51758.71},{"timestamp":1628373600,"uni_value":40358.14617,"sdex_value":55121.87},{"timestamp":1628978400,"uni_value":42265.87282,"sdex_value":57916.24},{"timestamp":1629496800,"uni_value":42206.56968,"sdex_value":57817.53},{"timestamp":1630015200,"uni_value":41190.52053,"sdex_value":56361.79},{"timestamp":1630533600,"uni_value":45316.94454,"sdex_value":62350.08},{"timestamp":1631052000,"uni_value":43320.26791,"sdex_value":59463.86},{"timestamp":1631570400,"uni_value":42358.60127,"sdex_value":58104.79},{"timestamp":1632088800,"uni_value":41686.1957,"sdex_value":57183.56},{"timestamp":1632607200,"uni_value":38900.45482,"sdex_value":53400.51},{"timestamp":1633125600,"uni_value":42337.72608,"sdex_value":58108.18},{"timestamp":1633644000,"uni_value":44389.26618,"sdex_value":61006.58},{"timestamp":1634162400,"uni_value":45146.05097,"sdex_value":62081.5},{"timestamp":1634680800,"uni_value":46720.17907,"sdex_value":64344.02},{"timestamp":1635199200,"uni_value":47595.86214,"sdex_value":65614.78},{"timestamp":1635721200,"uni_value":48721.22248,"sdex_value":67246.64},{"timestamp":1636239600,"uni_value":50059.3228,"sdex_value":69199.26},{"timestamp":1636758000,"uni_value":50565.34993,"sdex_value":69942.99},{"timestamp":1637276400,"uni_value":48242.91544,"sdex_value":66605.02},{"timestamp":1637794800,"uni_value":49565.58119,"sdex_value":68480.4},{"timestamp":1638313200,"uni_value":49919.10346,"sdex_value":68981.71},{"timestamp":1638831600,"uni_value":48379.53344,"sdex_value":66810.31},{"timestamp":1639436400,"uni_value":45493.01408,"sdex_value":62838.21},{"timestamp":1639954800,"uni_value":46275.09217,"sdex_value":63905.21},{"timestamp":1640473200,"uni_value":47192.87481,"sdex_value":65171.33},{"timestamp":1640991600,"uni_value":45084.90813,"sdex_value":62283.26},{"timestamp":1641510000,"uni_value":42830.06263,"sdex_value":59255.62},{"timestamp":1642028400,"uni_value":42679.58262,"sdex_value":59075.37},{"timestamp":1642546800,"uni_value":41138.62162,"sdex_value":57020.35},{"timestamp":1643065200,"uni_value":36144.52828,"sdex_value":50573.1},{"timestamp":1643583600,"uni_value":36980.25587,"sdex_value":51657.19},{"timestamp":1644102000,"uni_value":40532.06117,"sdex_value":56484.91},{"timestamp":1644620400,"uni_value":40017.52662,"sdex_value":55773.55},{"timestamp":1645138800,"uni_value":39987.71997,"sdex_value":55733.76},{"timestamp":1645657200,"uni_value":35905.04204,"sdex_value":50212.44},{"timestamp":1646175600,"uni_value":40490.0339,"sdex_value":56485.31},{"timestamp":1646694000,"uni_value":37498.12072,"sdex_value":52343.18},{"timestamp":1647212400,"uni_value":37506.05104,"sdex_value":52353.55},{"timestamp":1647730800,"uni_value":39522.04869,"sdex_value":55151.38},{"timestamp":1648249200,"uni_value":41238.25219,"sdex_value":57586.94},{"timestamp":1648764000,"uni_value":43133.24315,"sdex_value":60329.98},{"timestamp":1649282400,"uni_value":41953.3685,"sdex_value":58633.6},{"timestamp":1649800800,"uni_value":41171.90277,"sdex_value":57524.94},{"timestamp":1650319200,"uni_value":41200.38916,"sdex_value":57565.1},{"timestamp":1650837600,"uni_value":40457.87784,"sdex_value":56523.12},{"timestamp":1651442400,"uni_value":39149.00826,"sdex_value":54707.54},{"timestamp":1651960800,"uni_value":37688.42241,"sdex_value":52710},{"timestamp":1652479200,"uni_value":33116.13022,"sdex_value":46655.74},{"timestamp":1652997600,"uni_value":33166.76207,"sdex_value":46721.53},{"timestamp":1653516000,"uni_value":32573.67323,"sdex_value":45929.3},{"timestamp":1654034400,"uni_value":32540.73763,"sdex_value":45904.64},{"timestamp":1654552800,"uni_value":30962.16089,"sdex_value":43788.06},{"timestamp":1655071200,"uni_value":27138.88877,"sdex_value":38796.09},{"timestamp":1655589600,"uni_value":22725.56588,"sdex_value":33227.61},{"timestamp":1656108000,"uni_value":25799.13342,"sdex_value":37275},{"timestamp":1656626400,"uni_value":24127.84782,"sdex_value":34987.56},{"timestamp":1657144800,"uni_value":25438.6223,"sdex_value":36807.11},{"timestamp":1657663200,"uni_value":24207.21539,"sdex_value":35087.04},{"timestamp":1658181600,"uni_value":29005.79955,"sdex_value":42070.45},{"timestamp":1658700000,"uni_value":28965.51108,"sdex_value":42013.39},{"timestamp":1659218400,"uni_value":30621.36463,"sdex_value":44523.08},{"timestamp":1659736800,"uni_value":30552.85638,"sdex_value":44412.68},{"timestamp":1660255200,"uni_value":32039.91658,"sdex_value":46686.23},{"timestamp":1660773600,"uni_value":31971.11969,"sdex_value":46587.12},{"timestamp":1661292000,"uni_value":30262.49061,"sdex_value":44020.81},{"timestamp":1661810400,"uni_value":28506.71575,"sdex_value":41468.46},{"timestamp":1662328800,"uni_value":29429.94871,"sdex_value":42803.86},{"timestamp":1662847200,"uni_value":31021.93864,"sdex_value":45155.04},{"timestamp":1663365600,"uni_value":28247.88008,"sdex_value":41111.88},{"timestamp":1663970400,"uni_value":26899.1539,"sdex_value":39212.73},{"timestamp":1664488800,"uni_value":26932.91008,"sdex_value":39261.15},{"timestamp":1665007200,"uni_value":27164.11196,"sdex_value":39590.81},{"timestamp":1665525600,"uni_value":26496.08016,"sdex_value":38641.94},{"timestamp":1666044000,"uni_value":26968.7487,"sdex_value":39315.54},{"timestamp":1666562400,"uni_value":27166.12076,"sdex_value":39600.32},{"timestamp":1667080800,"uni_value":29752.6673,"sdex_value":43412.16},{"timestamp":1667602800,"uni_value":29949.00237,"sdex_value":43704.93},{"timestamp":1668121200,"uni_value":26281.74278,"sdex_value":38384.96},{"timestamp":1668639600,"uni_value":25606.14277,"sdex_value":37428.46},{"timestamp":1669158000,"uni_value":25232.28062,"sdex_value":36905.44},{"timestamp":1669676400,"uni_value":25749.80283,"sdex_value":37640.58},{"timestamp":1670194800,"uni_value":26576.28052,"sdex_value":38832.72},{"timestamp":1670713200,"uni_value":26354.41759,"sdex_value":38510.91},{"timestamp":1671231600,"uni_value":25376.12182,"sdex_value":37104.62},{"timestamp":1671750000,"uni_value":25852.27518,"sdex_value":37787.33},{"timestamp":1672268400,"uni_value":25595.05859,"sdex_value":37417.39},{"timestamp":1672527600,"uni_value":25548.96517,"sdex_value":37351.24}]');

            function h(e) {
                let {
                    active: t,
                    payload: s,
                    label: i
                } = e;
                if (t) {
                    const e = (0, v.cH)(s[0].payload.sdex_value),
                        t = (0, v.cH)(s[0].payload.uni_value),
                        i = (0, v.rL)(new Date(1e3 * s[0].payload.timestamp));
                    return _.createElement("div", {
                        className: "w-64 rounded-sm bg-dark/[.5] text-center font-styrene backdrop-blur"
                    }, _.createElement("div", {
                        className: "flex w-full space-x-3 p-1 text-base"
                    }, _.createElement("div", {
                        className: "flex w-1/2 flex-1 flex-col space-y-0.5 text-buy"
                    }, _.createElement("div", {
                        className: "text-[0.75rem]"
                    }, "Smardex"), _.createElement("span", null, e)), _.createElement("div", {
                        className: "flex w-1/2 flex-1 flex-col space-y-0.5 text-sell"
                    }, _.createElement("div", {
                        className: "text-[0.75rem]"
                    }, "Uniswap"), _.createElement("span", null, t))), _.createElement("div", {
                        className: "p-1 text-[0.75rem]"
                    }, _.createElement(a.G, {
                        icon: m.$nv,
                        size: "sm",
                        className: "pr-1"
                    }), i))
                }
                return null
            }

            function N(e) {
                let {
                    dex: t,
                    cx: s,
                    cy: i,
                    stroke: a,
                    payload: m,
                    value: p
                } = e;
                if (1637276400 === m.timestamp) return "SMART" === t ? _.createElement("svg", {
                    x: s - 12,
                    y: i - 24,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 1048 1048"
                }, _.createElement("circle", {
                    cx: 568,
                    cy: 568,
                    r: 400,
                    fill: "#0C222C"
                }), _.createElement("path", {
                    scale: .5,
                    fill: "#00e9b1",
                    d: "M961.665 278.447c-0.017-16.71-9.042-31.309-22.479-39.204l-0.213-0.116-404.385-233.094c-6.499-3.794-14.308-6.034-22.64-6.034s-16.14 2.241-22.857 6.151l0.216-0.116-404.071 233.408c-13.734 7.915-22.845 22.494-22.902 39.207v466.613c0.090 16.601 9.1 31.078 22.478 38.89l0.214 0.115 404.279 233.617c6.487 3.844 14.298 6.115 22.64 6.115s16.153-2.271 22.849-6.229l-0.209 0.114 404.385-233.617c13.592-7.929 22.602-22.405 22.693-38.993v-0.013zM835.132 672.164c-0.152 16.555-9.144 30.976-22.478 38.785l-0.214 0.116-277.851 160.729c-6.487 3.844-14.298 6.115-22.64 6.115s-16.153-2.271-22.849-6.229l0.209 0.114-277.746-160.729c-13.662-7.993-22.693-22.595-22.693-39.305 0-0.005 0-0.010 0-0.016v0.001-119.318l300.438 173.278c6.512 3.813 14.339 6.064 22.693 6.064s16.18-2.252 22.908-6.18l-0.215 0.116 110.534-63.79v-145.88l-103.109 59.92c-6.537 3.85-14.401 6.124-22.797 6.124s-16.26-2.274-23.010-6.241l0.213 0.116-307.445-177.774v-46.431c0.017-16.71 9.042-31.309 22.479-39.204l0.213-0.116 277.538-160.31c6.516-3.793 14.343-6.032 22.693-6.032s16.175 2.24 22.911 6.15l-0.219-0.117 277.538 160.101c13.651 8.010 22.675 22.61 22.693 39.317v119.948l-126.534-73.201-173.696-100.077c-6.439-3.813-14.192-6.066-22.47-6.066-0.078 0-0.156 0-0.234 0.001h0.012c-0.039 0-0.085 0-0.131 0-8.344 0-16.163 2.252-22.882 6.181l0.214-0.116-110.011 63.685h-0.732v146.402l103.005-59.816c6.514-3.871 14.362-6.16 22.745-6.16s16.23 2.289 22.953 6.274l-0.208-0.114 181.539 104.573v-0.836l126.638 73.201z"
                })) : _.createElement("svg", {
                    x: s - 12,
                    y: i - 24,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 200 200"
                }, _.createElement("circle", {
                    cx: 101,
                    cy: 101,
                    r: 98,
                    fill: "#0C222C",
                    stroke: "#475E72",
                    strokeWidth: 4
                }), _.createElement("path", {
                    fill: "#FF007A",
                    d: "M66,44.1c-2.1-0.3-2.2-0.4-1.2-0.5c1.9-0.3,6.3,0.1,9.4,0.8c7.2,1.7,13.7,6.1,20.6,13.8l1.8,2.1l2.6-0.4 c11.1-1.8,22.5-0.4,32,4c2.6,1.2,6.7,3.6,7.2,4.2c0.2,0.2,0.5,1.5,0.7,2.8c0.7,4.7,0.4,8.2-1.1,10.9c-0.8,1.5-0.8,1.9-0.3,3.2 c0.4,1,1.6,1.7,2.7,1.7c2.4,0,4.9-3.8,6.1-9.1l0.5-2.1l0.9,1c5.1,5.7,9.1,13.6,9.7,19.2l0.2,1.5l-0.9-1.3c-1.5-2.3-2.9-3.8-4.8-5.1 c-3.4-2.3-7-3-16.5-3.5c-8.6-0.5-13.5-1.2-18.3-2.8c-8.2-2.7-12.4-6.2-22.1-19.1c-4.3-5.7-7-8.8-9.7-11.4 C79.6,48.3,73.7,45.3,66,44.1z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    d: "M140.5,56.8c0.2-3.8,0.7-6.3,1.8-8.6c0.4-0.9,0.8-1.7,0.9-1.7c0.1,0-0.1,0.7-0.4,1.5c-0.8,2.2-0.9,5.3-0.4,8.8 c0.7,4.5,1,5.1,5.8,10c2.2,2.3,4.8,5.2,5.8,6.4l1.7,2.2l-1.7-1.6c-2.1-2-6.9-5.8-8-6.3c-0.7-0.4-0.8-0.4-1.3,0.1 c-0.4,0.4-0.5,1-0.5,3.9c-0.1,4.5-0.7,7.3-2.2,10.2c-0.8,1.5-0.9,1.2-0.2-0.5c0.5-1.3,0.6-1.9,0.6-6.2c0-8.7-1-10.8-7.1-14.3 c-1.5-0.9-4.1-2.2-5.6-2.9c-1.6-0.7-2.8-1.3-2.7-1.3c0.2-0.2,6.1,1.5,8.4,2.5c3.5,1.4,4.1,1.5,4.5,1.4 C140.2,60.1,140.4,59.3,140.5,56.8z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    d: "M70.1,71.7c-4.2-5.8-6.9-14.8-6.3-21.5l0.2-2.1l1,0.2c1.8,0.3,4.9,1.5,6.4,2.4c4,2.4,5.8,5.7,7.5,13.9 c0.5,2.4,1.2,5.2,1.5,6.1c0.5,1.5,2.4,5,4,7.2c1.1,1.6,0.4,2.4-2.1,2.2C78.5,79.7,73.4,76.2,70.1,71.7z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    d: "M135.4,115.2c-19.8-8-26.8-14.9-26.8-26.6c0-1.7,0.1-3.1,0.1-3.1c0.1,0,0.8,0.6,1.7,1.3c4,3.2,8.5,4.6,21,6.4 c7.3,1.1,11.5,1.9,15.3,3.2c12.1,4,19.6,12.2,21.4,23.3c0.5,3.2,0.2,9.3-0.6,12.5c-0.7,2.5-2.7,7.1-3.2,7.2c-0.1,0-0.3-0.5-0.3-1.3 c-0.2-4.2-2.3-8.2-5.8-11.3C154,123.2,148.6,120.5,135.4,115.2z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    d: "M121.4,118.5c-0.2-1.5-0.7-3.4-1-4.2l-0.5-1.5l0.9,1.1c1.3,1.5,2.3,3.3,3.2,5.8c0.7,1.9,0.7,2.5,0.7,5.6 c0,3-0.1,3.7-0.7,5.4c-1,2.7-2.2,4.6-4.2,6.7c-3.6,3.7-8.3,5.7-15,6.6c-1.2,0.1-4.6,0.4-7.6,0.6c-7.5,0.4-12.5,1.2-17,2.8 c-0.6,0.2-1.2,0.4-1.3,0.3c-0.2-0.2,2.9-2,5.4-3.2c3.5-1.7,7.1-2.6,15-4c3.9-0.6,7.9-1.4,8.9-1.8C118.1,135.6,123,127.9,121.4,118.5 z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    d: "M130.5,134.6c-2.6-5.7-3.2-11.1-1.8-16.2c0.2-0.5,0.4-1,0.6-1c0.2,0,0.8,0.3,1.4,0.7c1.2,0.8,3.7,2.2,10.1,5.7 c8.1,4.4,12.7,7.8,15.9,11.7c2.8,3.4,4.5,7.3,5.3,12.1c0.5,2.7,0.2,9.2-0.5,11.9c-2.2,8.5-7.2,15.3-14.5,19.2c-1.1,0.6-2,1-2.1,1 c-0.1,0,0.3-1,0.9-2.2c2.4-5.1,2.7-10,0.9-15.5c-1.1-3.4-3.4-7.5-8-14.4C133.2,139.6,131.9,137.5,130.5,134.6z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    d: "M56,165.2c7.4-6.2,16.5-10.6,24.9-12c3.6-0.6,9.6-0.4,12.9,0.5c5.3,1.4,10.1,4.4,12.6,8.1 c2.4,3.6,3.5,6.7,4.6,13.6c0.4,2.7,0.9,5.5,1,6.1c0.8,3.6,2.4,6.4,4.4,7.9c3.1,2.3,8.5,2.4,13.8,0.4c0.9-0.3,1.7-0.6,1.7-0.5 c0.2,0.2-2.5,2-4.3,2.9c-2.5,1.3-4.5,1.7-7.2,1.7c-4.8,0-8.9-2.5-12.2-7.5c-0.7-1-2.1-3.9-3.3-6.6c-3.5-8.1-5.3-10.5-9.4-13.2 c-3.6-2.3-8.2-2.8-11.7-1.1c-4.6,2.2-5.8,8.1-2.6,11.7c1.3,1.5,3.7,2.7,5.7,3c3.7,0.5,6.9-2.4,6.9-6.1c0-2.4-0.9-3.8-3.3-4.9 c-3.2-1.4-6.7,0.2-6.6,3.3c0,1.3,0.6,2.1,1.9,2.7c0.8,0.4,0.8,0.4,0.2,0.3c-2.9-0.6-3.6-4.2-1.3-6.5c2.8-2.8,8.7-1.6,10.7,2.3 c0.8,1.6,0.9,4.8,0.2,6.8c-1.7,4.4-6.5,6.7-11.4,5.4c-3.3-0.9-4.7-1.8-8.7-5.9c-7-7.2-9.7-8.6-19.7-10.1l-1.9-0.3L56,165.2z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.4,4.3c23.3,28.3,59.2,72.3,61,74.7c1.5,2,0.9,3.9-1.6,5.3c-1.4,0.8-4.3,1.6-5.7,1.6c-1.6,0-3.5-0.8-4.8-2.1 c-0.9-0.9-4.8-6.6-13.6-20.3c-6.7-10.5-12.4-19.2-12.5-19.3C25.8,44,25.8,44,38,65.8C45.7,79.5,48.2,84.4,48.2,85c0,1.3-0.4,2-2,3.8 c-2.7,3-3.9,6.4-4.8,13.5c-1,7.9-3.7,13.5-11.4,23c-4.5,5.6-5.2,6.6-6.3,8.9c-1.4,2.8-1.8,4.4-2,8c-0.2,3.8,0.2,6.2,1.3,9.8 c1,3.2,2.1,5.3,4.8,9.4c2.3,3.6,3.7,6.3,3.7,7.3c0,0.8,0.2,0.8,3.8,0c8.6-2,15.7-5.4,19.6-9.6c2.4-2.6,3-4,3-7.6 c0-2.3-0.1-2.8-0.7-4.2c-1-2.2-2.9-4-7-6.8c-5.4-3.7-7.7-6.7-8.3-10.7c-0.5-3.4,0.1-5.7,3.1-12c3.1-6.5,3.9-9.2,4.4-15.8 c0.3-4.2,0.8-5.9,2-7.2c1.3-1.4,2.4-1.9,5.5-2.3c5.1-0.7,8.4-2,11-4.5c2.3-2.1,3.3-4.2,3.4-7.3l0.1-2.3L70.1,77C65.4,71.6,0.3,0,0,0 C-0.1,0,1.5,1.9,3.4,4.3z M34.1,146.5c1.1-1.9,0.5-4.3-1.3-5.5c-1.7-1.1-4.3-0.6-4.3,0.9c0,0.4,0.2,0.8,0.8,1c0.9,0.5,1,1,0.3,2.1 c-0.7,1.1-0.7,2.1,0.2,2.8C31.2,148.9,33.1,148.3,34.1,146.5z"
                }), _.createElement("path", {
                    fill: "#FF007A",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M74.6,93.9c-2.4,0.7-4.7,3.3-5.4,5.9c-0.4,1.6-0.2,4.5,0.5,5.4c1.1,1.4,2.1,1.8,4.9,1.8 c5.5,0,10.2-2.4,10.7-5.3c0.5-2.4-1.6-5.7-4.5-7.2C79.3,93.7,76.2,93.4,74.6,93.9z M81,98.9c0.8-1.2,0.5-2.5-1-3.4 c-2.7-1.7-6.8-0.3-6.8,2.3c0,1.3,2.1,2.7,4.1,2.7C78.6,100.5,80.4,99.7,81,98.9z"
                }))
            }

            function k() {
                const e = (0, _.useCallback)(((e, t) => new Date(1e3 * e).getFullYear().toString()), []);
                return _.createElement(_.Fragment, null, _.createElement(n.h, {
                    width: "100%",
                    height: 250
                }, _.createElement(f.c, {
                    width: 100,
                    height: 250,
                    data: E,
                    margin: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }
                }, _.createElement(r.q, {
                    stroke: "#fff",
                    strokeOpacity: .2
                }), _.createElement(o.K, {
                    dataKey: "timestamp",
                    tickFormatter: e,
                    tick: {
                        fontSize: 12
                    },
                    ticks: [1514764800, 154674e4, 1578088800, 1609905600, 1641200400]
                }), _.createElement(x.x, {
                    type: "monotone",
                    dataKey: "sdex_value",
                    stroke: "#00e2b6",
                    dot: _.createElement(N, {
                        dex: "SMART"
                    })
                }), _.createElement(x.x, {
                    type: "monotone",
                    dataKey: "uni_value",
                    stroke: "#ff007a",
                    dot: _.createElement(N, {
                        dex: "UNI"
                    })
                }), _.createElement(d.u, {
                    wrapperStyle: {
                        outline: "none"
                    },
                    content: _.createElement(h, null)
                }))), _.createElement("div", {
                    className: "-mt-4 font-styrene text-[0.75rem] text-gray-medium"
                }, "Your earnings are optimized on Smart compared to UniSwap"))
            }
            var F = s(89738),
                S = s(91408),
                D = s(93024);

            function A(e) {
                let {
                    className: t
                } = e;
                return _.createElement("div", {
                    className: (0, v.AK)(t, "flex items-center space-x-3")
                }, _.createElement("a", {
                    href: "https://twitter.com/sentia_exchange",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "btn h-8 w-8 p-1 text-base"
                }, _.createElement(a.G, {
                    fixedWidth: !0,
                    icon: D.NCc
                })), _.createElement("a", {
                    href: "https://t.me/sentia_exchange",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "btn h-8 w-8 p-1 text-base"
                }, _.createElement(a.G, {
                    fixedWidth: !0,
                    icon: D.Uv8
                })), _.createElement("a", {
                    href: "https://sentiaexchange.medium.com",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "btn h-8 w-8 p-1 text-base"
                }, _.createElement(a.G, {
                    fixedWidth: !0,
                    icon: m.Vkm
                })))
            }
            var z = function () {
                    const e = new Date;
                    return _.createElement("div", {
                        className: "relative"
                    }, _.createElement("div", {
                        className: "absolute inset-0 left-[50%] z-0 hidden bg-pattern-2 bg-cover lg:block"
                    }), _.createElement("div", {
                        className: "container mx-auto flex flex-col px-2 py-16 lg:flex-row lg:px-0 lg:pt-[3.75rem]"
                    }, _.createElement("div", {
                        className: "order-last mt-[6.25rem] flex flex-1 flex-col items-start lg:order-first lg:mt-0"
                    }, _.createElement(i.rU, {
                        to: "/home",
                        className: "self-start"
                    }, _.createElement("img", {
                        src: S,
                        className: "h-10",
                        alt: "Sentia"
                    })), _.createElement("div", {
                        className: "my-16 grid w-full grid-cols-3 gap-4 text-xs text-white/[.8]"
                    }, F.U.filter((e => e.footer)).map((e => e.url ? _.createElement("a", {
                        key: e.value,
                        className: "hover:text-white",
                        href: e.url,
                        target: e.target
                    }, e.name) : _.createElement(i.rU, {
                        key: e.value,
                        className: "hover:text-white",
                        to: e.link || "#"
                    }, e.name)))), _.createElement("div", {
                        className: "flex flex-col items-start space-y-4 space-y-reverse lg:flex-row lg:space-x-8 lg:space-y-0"
                    }, _.createElement("div", {
                        className: "order-last text-[0.75rem] text-white/[.3] lg:order-first"
                    }, "ALL RIGHTS RESERVED © ", e.getFullYear(), " SMART"), _.createElement("div", {
                        className: "flex space-x-8"
                    }))), _.createElement("div", {
                        className: "relative z-10 flex flex-1 flex-col items-center justify-center"
                    }, _.createElement("div", {
                        className: "absolute -inset-x-2 -top-16 bottom-[-3.75rem] z-0 bg-pattern-2 bg-cover lg:hidden"
                    }), _.createElement("h3", {
                        className: "z-10 text-center font-styrene text-2xl font-light"
                    }, "START EXCHANGING SMARTLY"), _.createElement(i.rU, {
                        to: "/swap",
                        className: "btn-outline z-10 my-6 flex shrink items-center space-x-2 px-4 py-3"
                    }, _.createElement("span", null, "Get started"), _.createElement(a.G, {
                        className: "flex-none -rotate-45",
                        icon: m.eFW
                    })), _.createElement(A, null))))
                },
                I = s(64463);

            function C(e) {
                let {
                    to: t,
                    title: s,
                    content: p
                } = e;
                return _.createElement(i.rU, {
                    to: t,
                    className: "flex-1 rounded-sm border-2 border-white/[.3] bg-white/[.1] p-8 text-white/[.5] transition-all duration-500 hover:text-white lg:hover:-translate-y-4"
                }, _.createElement("div", {
                    className: "flex items-center text-2xl"
                }, _.createElement("div", {
                    className: "grow"
                }, s), _.createElement(a.G, {
                    className: "flex-none -rotate-45 text-buy",
                    icon: m.eFW
                })), _.createElement("p", {
                    className: "py-6 leading-[145%] text-gray-light"
                }, p))
            }
            var T = s(6665),
                M = s(86741);

            function R(e) {
                let {
                    className: t,
                    fetchData: s = !0
                } = e;
                const n = (0, p.I0)(),
                    l = (0, p.v9)((e => e.farmingTop));
                return (0, _.useEffect)((() => {
                    s && n.farmingTop.getCampaigns(void 0)
                }), []), _.createElement("div", {
                    className: t
                }, l ?.campaigns.length > 0 ? _.createElement("div", {
                    className: "flex flex-col space-y-2"
                }, l ?.campaigns.map((e => e.chain.name==='Ethereum' && _.createElement("div", {
                    className: "flex items-center justify-between space-x-2 rounded-sm border border-white/[.3] bg-dark px-4 py-2",
                    key: e.pairAddress
                }, _.createElement("div", {
                    className: "flex flex-1 flex-col items-stretch lg:flex-row lg:items-center lg:space-x-1"
                }, _.createElement("div", {
                    className: "flex shrink items-center -space-x-2"
                }, _.createElement("img", {
                    src: e.token0.icon,
                    alt: e.token0.name,
                    className: "z-0 h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                }), _.createElement("img", {
                    src: e.token1.icon,
                    alt: e.token1.name,
                    className: "z-10 h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"
                })), _.createElement("div", {
                    className: "shrink text-xs lg:text-base"
                }, e.token0.symbol, "-", e.token1.symbol)), _.createElement("div", {
                    className: "flex shrink flex-col items-center lg:flex-1 lg:flex-row lg:space-x-1"
                }, _.createElement("img", {
                    src: e.chain.icon,
                    alt: e.chain.name,
                    className: "h-4 w-4"
                }), _.createElement("span", {
                    className: "hidden text-xs lg:inline"
                }, e.chain.name)), _.createElement("div", {
                    className: "flex-1 text-right"
                }, _.createElement(M.Z, {
                    end: parseFloat((0, T.d)((e.apr || 0n) + (e.aprLP || 0n))),
                    suffix: " %"
                }), " ", _.createElement("span", {
                    className: "text-xs text-gray-medium"
                }, "ROI")), _.createElement(i.rU, {
                    type: "button",
                    className: "btn shrink space-x-2 p-1",
                    to: `/farming?chainId=${e.chain.id}`
                }, _.createElement("span", null, "Farm now"), _.createElement(a.G, {
                    className: "flex-none -rotate-45",
                    icon: m.eFW
                })))))) : _.createElement("div", {
                    className: "flex flex-col space-y-2"
                }, [...Array(2)].map(((e, t) => _.createElement("div", {
                    key: t,
                    className: "h-[3.375rem] animate-pulse rounded-sm bg-white/[.3] lg:h-[2.625rem]"
                })))))
            }

            function G(e) {
                let {
                    className: t,
                    fetchData: s = !0
                } = e;
                const n = (0, p.I0)(),
                    l = (0, p.v9)((e => e.farmingTop));
                return (0, _.useEffect)((() => {
                    s && n.farmingTop.getCampaigns(void 0)
                }), []), _.createElement("div", {
                    className: t
                }, l ?.campaigns.length > 0 ? _.createElement("div", {
                    className: "flex space-x-4"
                }, l ?.campaigns.map((e => e.chain.id === 1 && _.createElement(i.rU, {
                    role: "link",
                    to: `/farming?chainId=${e.chain.id}`,
                    className: "group flex flex-1 flex-col items-center justify-between overflow-hidden rounded-sm bg-dark transition-transform duration-500 hover:scale-105",
                    key: e.pairAddress
                }, _.createElement("div", {
                    className: "flex flex-1 items-center justify-center space-x-1 self-stretch bg-white px-4 py-2 text-center text-xs uppercase text-dark transition-all duration-500 group-hover:bg-buy"
                }, _.createElement("img", {
                    src: e.chain.icon,
                    alt: e.chain.name,
                    className: "h-3 w-3"
                }), _.createElement("span", null, e.chain.name)), _.createElement("div", {
                    className: "flex flex-1 items-center space-x-1 p-4"
                }, _.createElement("div", {
                    className: "shrink"
                }, _.createElement("img", {
                    src: e.token0.icon,
                    alt: e.token0.name,
                    className: "z-0 inline h-8 w-8 rounded-full border-2 border-black/[.25] bg-white p-0.5 transition-all duration-500 group-hover:border-buy"
                }), _.createElement("img", {
                    src: e.token1.icon,
                    alt: e.token1.name,
                    className: "z-10 -ml-2.5 inline h-8 w-8 rounded-full border-2 border-black/[.25] bg-white p-0.5 transition-all duration-500 group-hover:border-buy"
                })), _.createElement("div", {
                    className: "flex-1"
                }, e.token0.symbol, "-", e.token1.symbol)), _.createElement("div", {
                    className: "flex flex-1 items-end justify-between space-x-1 self-stretch bg-green-dark px-4 py-3 text-xl"
                }, _.createElement("span", {
                    className: "shrink text-sm text-gray-light"
                }, "ROI"), _.createElement("div", {
                    className: "font-bold"
                }, _.createElement(M.Z, {
                    end: parseFloat((0, T.d)((e.apr || 0n) + (e.aprLP || 0n))),
                    suffix: " %"
                }))), _.createElement("div", {
                    className: "w-full shrink space-x-2 rounded-none bg-white py-4 text-center text-xs text-dark transition-all duration-500 group-hover:bg-buy"
                }, _.createElement("span", null, "Farm now"), _.createElement(a.G, {
                    className: "flex-none -rotate-45",
                    icon: m.eFW
                })))))) : _.createElement("div", {
                    className: "flex space-x-4"
                }, [...Array(2)].map(((e, t) => _.createElement("div", {
                    key: t,
                    className: "h-[12.375rem] flex-1 animate-pulse rounded-sm bg-white/[.3]"
                })))))
            }
            var O = JSON.parse('[{"name":"Ethereum","url":"https://ethereum.org","image":"/assets/images/partners/ethereum.svg"},{"name":"Polygon","url":"https://polygon.technology","image":"/assets/images/partners/polygon.svg"},{"name":"Arbitrum","url":"https://arbitrum.io","image":"/assets/images/partners/arbitrum.svg"},{"name":"BSC","url":"https://bnbchain.org","image":"/assets/images/partners/bsc.svg"},{"name":"Base","url":"https://base.org","image":"/assets/images/partners/base.svg"},{"name":"CoinGecko","url":"https://coingecko.com","image":"/assets/images/partners/coingecko.svg"},{"name":"OneInch","url":"https://1inch.io","image":"/assets/images/partners/1inch.svg"},{"name":"BitGet","url":"https://bitget.com","image":"/assets/images/partners/bitget.svg"},{"name":"ATOR","url":"https://ator.io","image":"/assets/images/partners/ator.webp"},{"name":"CMC","url":"https://coinmarketcap.com","image":"/assets/images/partners/cmc.svg"},{"name":"GateIO","url":"https://gate.io","image":"/assets/images/partners/gate-io.svg"},{"name":"HackenProof","url":"https://hackenproof.com","image":"/assets/images/partners/hackenproof.svg"},{"name":"Immunefi","url":"https://immunefi.com","image":"/assets/images/partners/immunefi.svg"},{"name":"LossLess","url":"https://lossless.io","image":"/assets/images/partners/lossless.svg"},{"name":"OpenOcean","url":"https://openocean.finance","image":"/assets/images/partners/openocean.svg"},{"name":"Paladin","url":"https://paladinsec.co","image":"/assets/images/partners/paladin.svg"},{"name":"TrailOfBits","url":"https://trailofbits.com","image":"/assets/images/partners/trail-of-bits.svg"},{"name":"MetaMask","url":"https://metamask.io","image":"/assets/images/partners/metamask.svg"},{"name":"RocketX","url":"https://rocketx.exchange","image":"/assets/images/partners/rocketx.webp"},{"name":"Tectum","url":"https://tectum.io","image":"/assets/images/partners/tectum.svg"},{"name":"Odos","url":"https://www.odos.xyz","image":"/assets/images/partners/odos.webp"},{"name":"KyberSwap","url":"https://kyberswap.com","image":"/assets/images/partners/kyberswap.svg"},{"name":"KyberNetwork","url":"https://kyber.network","image":"/assets/images/partners/kyber-network.svg"},{"name":"MEXC","url":"https://mexc.com","image":"/assets/images/partners/mexc.svg"},{"name":"Carbon Mobile Browser","url":"https://carbon.website","image":"/assets/images/partners/carbon.svg"},{"name":"Kaspa","url":"https://kaspa.org/","image":"/assets/images/partners/kaspa.svg"}]');

            function U(e) {
                let {
                    name: t,
                    image: s,
                    url: i
                } = e;
                return _.createElement("a", {
                    href: i,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "rounded-md border border-[#697F96] px-2 py-4 text-white/[.5] transition-all duration-500 lg:px-4 lg:py-8 lg:hover:-translate-y-2"
                }, _.createElement("img", {
                    className: "mx-auto h-8 w-auto",
                    src: s,
                    alt: `${t} partner`
                }))
            }

            function W() {
                const e = (0, p.v9)((e => e.metrics));
                return _.createElement(_.Fragment, null, _.createElement(I.Z, {
                    title: "Home",
                    description: "Discover the future of DeFi with SMART - Our innovative SMART platform solves the persistent issue of impermanent loss.",
                    canonical: (0, v.Z2)("/")
                }), _.createElement("section", {
                    className: "relative bg-pattern-0 bg-cover px-2 pb-24 pt-36 lg:px-0"
                }, _.createElement("div", {
                    className: "absolute inset-y-0 left-0 right-[50%] z-0 hidden bg-dark/[.5] lg:block"
                }), _.createElement("div", {
                    className: "container mx-auto flex flex-col lg:flex-row"
                }, _.createElement("div", {
                    className: "relative z-10 flex-1 pb-[12.25rem] lg:pb-0 lg:pr-[3.75rem]"
                }, _.createElement("div", {
                    className: "absolute -inset-x-2 -top-36 bottom-8 -z-10 block bg-dark/[.5] lg:hidden"
                }), _.createElement("h1", {
                    className: "text-5xl tracking-[-0.25rem] lg:text-7xl"
                }, "DeFi", _.createElement("br", null), "the ", _.createElement("span", {
                    className: "text-buy"
                }, "norm")), _.createElement("div", {
                    className: "mt-4 text-2xl leading-[135%] text-[#ccd2d7]"
                }, "SmartSwap is leading innovation for liquidity providers and traders who want to stay ahead of the game. Launch the app and start trading today."), _.createElement(A, {
                    className: "my-16"
                }),_.createElement("a", {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x293bb688f794e36781E953d408102099D8F95461",
                    target: "_blank",
                    className: "btn-outline lg:p-4"
                }, "Buy $STIA")), _.createElement("div", {
                    className: "flex h-full flex-1 flex-col space-y-4 lg:self-end lg:pl-8"
                }, _.createElement(R, {
                    className: "hidden flex-1 lg:block"
                }), _.createElement("div", {
                    className: "flex flex-1 flex-col space-x-0 space-y-[1.438rem] lg:flex-row lg:space-x-[1.438rem] lg:space-y-0"
                }, _.createElement("div", {
                    className: "flex-1 rounded-sm border-2 border-white/[.3] bg-white/[.1] p-8 font-styrene"
                }, _.createElement("div", {
                    className: "mb-2 text-[2.5rem] leading-[130%] text-buy"
                }, "--"), _.createElement("div", {
                    className: "text-[0.75rem] text-[#ccd2d7]"
                }, "Smart VALUE")), _.createElement("div", {
                    className: "flex-1 rounded-sm border-2 border-white/[.3] bg-white/[.1] p-8 font-styrene"
                }, _.createElement("div", {
                    className: "mb-2 text-[2.5rem] leading-[130%] text-buy"
                }, "--"), _.createElement("div", {
                    className: "text-[0.75rem] text-[#ccd2d7]"
                }, "TOTAL VALUE LOCKED")))))), _.createElement("section", {
                    className: "bg-[#0c262c] px-2 py-[3.75rem] lg:px-0"
                }, _.createElement("div", {
                    className: "container mx-auto"
                }, _.createElement("h3", {
                    className: "title-0 mb-2 text-center"
                }, "THE SMART ADVANTAGE"), _.createElement("h2", {
                    className: "mx-auto mb-12 max-w-2xl text-center font-haffer-sq text-2xl"
                }, "With a sophisticated fine-tuned algorithm, SmartSwap transforms Impermanent Loss into Impermanent Gain"), _.createElement("div", {
                    className: "mx-auto mb-12 max-w-4xl"
                }, _.createElement(g, null)), _.createElement("div", {
                    className: "text-center"
                }))), _.createElement("section", {
                    className: "px-2 py-[14.188rem] lg:px-0"
                }, _.createElement("div", {
                    className: "container mx-auto flex flex-col space-x-0 space-y-[7.5rem] lg:flex-row lg:space-x-[7.5rem] lg:space-y-0"
                }, _.createElement("div", {
                    className: "flex flex-1 items-center justify-center"
                }, _.createElement("div", {
                    className: "flex w-full flex-col items-center border border-white/[.3] bg-green-dark"
                }, _.createElement("img", {
                    className: "aspect-video w-full",
                    src: "/back.png"
                }))), _.createElement("div", {
                    className: "flex-1"
                }, _.createElement("h3", {
                    className: "title-0 mb-2"
                }, "LEARN MORE"), _.createElement("h2", {
                    className: "title-1 mb-8"
                }, "How does ", _.createElement("span", {
                    className: "text-buy"
                }, "SMART work?")), _.createElement("p", {
                    className: "mb-16 font-haffer-sq text-[#ccd2d7]"
                }, "SmartSwap is revolutionizing the DeFi space by tackling the persistent issue of impermanent loss. Our groundbreaking technology allows liquidity providers to earn smart returns, while giving users access to the best opportunities in the market."), _.createElement(i.rU, {
                    to: "/swap",
                    className: "btn space-x-2 px-4 py-3"
                }, _.createElement("span", null, "Swap now"), _.createElement(a.G, {
                    className: "flex-none -rotate-45",
                    icon: m.eFW
                }))))), _.createElement("section", {
                    className: "bg-pattern-1 bg-cover px-2 py-[6.25rem] lg:px-0"
                }, _.createElement("div", {
                    className: "container mx-auto flex flex-col items-center space-x-0 space-y-[7.5rem] lg:flex-row lg:space-x-[7.5rem] lg:space-y-0"
                }, _.createElement("div", {
                    className: "flex-1"
                }, _.createElement("h3", {
                    className: "title-0 mb-2"
                }, "MAKING DEFI COMPETITIVE"), _.createElement("h2", {
                    className: "title-1 mb-8"
                }, "Welcome to the next generation of DeFi. ", _.createElement("span", {
                    className: "text-buy"
                }, "Lower fees, better profits, fully decentralized.")), _.createElement("p", {
                    className: "mb-16 font-haffer-sq text-[#ccd2d7]"
                }, "SmartSwap is the true next-generation DeFi platform providing reliable ROIs and delivering real value through its unmatched innovations. For liquidity providers, Sentia provides a unique solution to impermanent loss, something that no other platform has succeeded in doing until now."), _.createElement("div", {
                    className: "flex flex-col items-start space-y-4 text-xs lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"
                }, _.createElement(i.rU, {
                    to: "/swap",
                    className: "btn flex shrink items-center space-x-2 px-4 py-3"
                }, _.createElement("span", null, "Swap now"), _.createElement(a.G, {
                    className: "flex-none -rotate-45",
                    icon: m.eFW
                })), _.createElement(i.rU, {
                    to: "/liquidity",
                    className: "btn-outline flex shrink items-center space-x-2 px-4 py-3"
                }, _.createElement("span", null, "Provide liquidity"), _.createElement(a.G, {
                    className: "flex-none -rotate-45",
                    icon: m.eFW
                })))), _.createElement("div", {
                    className: "flex-1"
                }, _.createElement(k, null)))), _.createElement("section", {
                    className: "bg-[#0c262c] px-2 py-[3.75rem] lg:px-0"
                }), _.createElement("section", {
                    className: "px-2 py-[6.25rem] lg:px-0"
                }, _.createElement("div", {
                    className: "container mx-auto"
                }, _.createElement("h3", {
                    className: "title-0 mb-2 text-center"
                }, "TOP HIGHEST ROI"), _.createElement("h2", {
                    className: "title-1 mb-8 text-center"
                }, "Farm the ", _.createElement("span", {
                    className: "text-buy"
                }, "highest APR’s")), _.createElement(R, {
                    className: "block w-full lg:hidden",
                    fetchData: !1
                }), _.createElement(G, {
                    className: "hidden lg:block",
                    fetchData: !1
                }))), _.createElement("section", {
                    className: "bg-pattern-0 bg-cover px-2 py-[6.25rem] lg:px-0"
                }, _.createElement("div", {
                    className: "container mx-auto"
                }, _.createElement("h3", {
                    className: "title-0 mb-2 text-center"
                }, "DEFI THE NORM"), _.createElement("h2", {
                    className: "title-1 mb-8 text-center"
                }, _.createElement("span", {
                    className: "text-buy"
                }, "The smarter"), " DeFi solution"), _.createElement("h4", {
                    className: "mb-[3.75rem] text-center font-haffer-sq\ttext-2xl font-light leading-[135%]"
                }, "An innovative, reputable, dynamic DeFi platform with reliable ROI’s."), _.createElement("div", {
                    className: "flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0"
                }, _.createElement(C, {
                    to: "/liquidity",
                    title: "Liquidity Providing",
                    content: "No more market conditions that kill you slowly with impermanent losses. Smart takes care of optimizing your profits. Automatically."
                }), _.createElement(C, {
                    to: "/farming",
                    title: "Farming",
                    content: "The key to realizing your financial goals. Unlock financial growth through crypto farming. Plant your seeds and watch your crypto grow!"
                }), _.createElement(C, {
                    to: "/staking",
                    title: "Staking",
                    content: "Benefit from a dynamic market and unmatched swap power with minimal fees and liquidity providers always ready to provide you with the smallest possible slippage."
                })))), _.createElement("footer", {
                    className: "bg-green-dark "
                }, _.createElement(z, null)))
            }
        },
        91408: function (e, t, s) {
            e.exports = s.p + "title.png"
        }
    }
]);