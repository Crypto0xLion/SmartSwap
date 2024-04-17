"use strict";(self.webpackChunksmardex_web=self.webpackChunksmardex_web||[]).push([[209],{84107:function(e,t,a){var l=a(67294),n=a(67814),r=a(59417),s=a(56126);const o=(0,l.memo)((e=>{let{className:t,url:a,value:o}=e;const[i,c]=(0,l.useState)(!1),m=(0,l.useCallback)((()=>{navigator.clipboard.writeText(o||"").then((()=>{c(!0),setTimeout((()=>{c(!1)}),1e3)}))}),[o]);return l.createElement("div",{className:(0,s.AK)(t,"flex items-center justify-center space-x-1")},l.createElement("a",{href:a,target:"_blank",rel:"noreferrer",className:"underline-offset-2 hover:underline"},(0,s.Dh)(o,8,8)),l.createElement("div",{className:"relative"},i&&l.createElement(n.G,{role:"button",icon:r.kZ_,className:(0,s.AK)("absolute inset-0 h-4 w-4 animate-ping text-buy")}),l.createElement(n.G,{role:"button",icon:r.kZ_,onClick:m,className:"h-4 w-4"})))}));t.Z=o},25288:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(67294),n=a(47031),r=a(67748),s=a(67814),o=a(59417),i=a(95998);function c(e){let{show:t,token:a,onClose:c}=e;const m=(0,i.v9)((e=>e.network)),d=(0,l.useCallback)((()=>{c()}),[]),u=(0,l.useCallback)((()=>{c(a)}),[a]);return l.createElement(n.u,{appear:!0,show:t,as:l.Fragment},l.createElement(r.V,{as:"div",className:"relative z-[100]",onClose:d},l.createElement(n.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in",leaveFrom:"opacity-100",leaveTo:"opacity-0"},l.createElement("div",{className:"fixed inset-0 bg-black/[0.5]"})),l.createElement("div",{className:"fixed inset-0 overflow-y-auto"},l.createElement("div",{className:"flex min-h-full items-center justify-center p-4"},l.createElement(n.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},l.createElement(r.V.Panel,{className:"w-full max-w-md overflow-hidden rounded-sm border border-buy bg-green-dark p-6 align-middle"},l.createElement("div",{className:"flex flex-col items-center"},l.createElement("img",{className:"h-8 w-8 rounded-full border-2 border-black/[.25] bg-white p-0.5",src:a?.icon,alt:a?.name}),l.createElement("p",{className:"mt-4 text-center"},"To proceed with the selected amount, this token needs two more approvals."),l.createElement("div",{className:"mt-4 flex items-center space-x-1 text-blue-400 underline-offset-2 hover:underline"},l.createElement("a",{href:`${m?.chain.blockExplorers?.default.url}/address/${a?.address}`,target:"_blank",rel:"noreferrer"},"Explore ",a?.name," smart contract"),l.createElement(s.G,{icon:o.wlW,size:"sm"})),l.createElement("button",{type:"button",className:"btn-outline mt-4 px-4 py-1 text-xl",onClick:u},"Confirm"),l.createElement("button",{type:"button",className:"mt-2",onClick:d},"Cancel"))))))))}},80209:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var l=a(67294),n=a(95998),r=a(89250),s=a(79655),o=a(67814),i=a(59417),c=a(22852),m=a(60263),d=a(6665),u=a(38350),p=a(46333),b=a(64463),f=a(56126),x=a(57333),v=a(94649),h=a(58903),g=a(33344),y=a(6303),E=a(78317),k=a(51228),w=a(37123);const N=(0,l.forwardRef)(((e,t)=>{let{searchTokenModalFeature:a,onSelectToken:r,onAmountChange:s,onAllowanceChange:p,onErrors:b}=e;const N=(0,n.I0)(),F=(0,n.v9)((e=>e.network)),S=(0,u.mA)(),C=(0,w.Z)(),[I,A]=(0,l.useState)(!1),[$,T]=(0,l.useState)(0),[G,P]=(0,l.useState)(0n),[D,R]=(0,l.useState)({show:!1}),[q,B]=(0,l.useState)(void 0),Z=(0,l.useRef)(0n),L=(0,l.useRef)(0n),j=(0,l.useRef)(0n),V=(0,v.TA)({initialValues:{amount:""},onSubmit:e=>{},validate:e=>{let{amount:t}=e;const a={};if(T(0),t.trim().length){if(q){const e=(0,h.f)(t);e<=0n?a.amount="Minimum amount required":S.address&&e>(0,h.f)((0,m.b)(j.current,q.decimals))&&(a.amount="Balance too low"),T(parseFloat((0,d.d)(e*Z.current/E.CI)))}}else a.amount="Invalid amount";return b(a),a}}),z=(0,l.useCallback)((e=>{A(!0),Promise.all([N.token.getPrice(e),N.token.getBalance(e),N.token.getAllowance({token:e,spender:F?.chain.SmardexRouter.address})]).then((e=>{let[t,a,l]=e;C()&&(Z.current=t,j.current=a||0n,L.current=l||0n,p(L.current),P(j.current),A(!1),V.dirty&&V.validateForm())}))}),[p,V.dirty,C,F?.chain]),K=(0,l.useCallback)(((e,t)=>{"event"===t.source&&(void 0!==e.floatValue?V.setFieldValue("amount",e.value):""===e.value&&V.setFieldValue("amount",""),s(e.value))}),[s]),W=(0,l.useCallback)((()=>{R({show:!0})}),[]),M=(0,l.useCallback)((e=>{R({show:!1}),e&&(r(e),B({...e}),z(e))}),[r,z]),H=(0,l.useCallback)((()=>{if(q){const e=(0,m.b)(G,q.decimals);V.setFieldValue("amount",e),s(e)}}),[s,q,G]);return(0,l.useImperativeHandle)(t,(()=>({selectToken(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&r(e),B({...e}),z(e)},setAmount(e){if(q){const t={},{decimals:a}=q;V.setFieldValue("amount",e,!1),(0,c.v)(e,a)>j.current&&(t.amount="Balance too low"),V.setErrors(t),b(t),T(parseFloat((0,d.d)((0,h.f)(e)*Z.current/E.CI)))}},resetAmount(){V.resetForm(),T(0)},refresh(){q&&z(q)},reload(){s(V.values.amount)}})),[q,z,V.values.amount,s,r]),l.createElement(l.Fragment,null,l.createElement(y.Z,{id:`tooltip-price-info-${q?.address}`,className:"w-48",text:"It is likely possible that the value in USD of the added token may not be the same, read the doc for more information"}),l.createElement("div",{className:"relative"},l.createElement("div",{className:"relative"},l.createElement(x.h3,{valueIsNumericString:!0,thousandSeparator:",",placeholder:"0.00",decimalScale:q?.decimals,value:V.values.amount,onValueChange:K,allowNegative:!1,className:(0,f.AK)("w-full rounded-sm border bg-white/[.1] py-8 pl-36 pr-6 text-right text-2xl text-white",V.errors.amount?"border-sell":"border-white/[.3]")}),l.createElement("div",{className:"absolute inset-y-0 left-6 text-white/[.6]"},l.createElement("div",{className:"flex h-full items-center space-x-2"},l.createElement("div",{role:"button",className:"flex items-center space-x-1 rounded-sm bg-buy px-4 py-[0.813rem] text-xs text-dark transition-all duration-300 hover:bg-white",onClick:W},l.createElement("img",{src:q?.icon||k.x.getNotFoundIcon(),alt:q?.name||"Select a token",className:"h-5 w-5 rounded-full border border-buy bg-white p-0.5"}),l.createElement("span",null,q?.symbol||"---"),l.createElement(o.G,{icon:i.ptq})))),I?l.createElement("div",{className:"absolute right-6 top-1.5 h-4 w-20 animate-pulse rounded-sm bg-white/[.3]"}):l.createElement("div",{className:"absolute inset-x-6 top-1.5 overflow-hidden text-right text-xs text-gray-light"},S.address?l.createElement("div",null,"Balance:"," ",q?l.createElement(l.Fragment,null,(0,f.bF)(parseFloat((0,m.b)(G,q.decimals)))," ",l.createElement("button",{type:"button",className:"inline text-buy",onClick:H},"Max")):"(Select a token)"):l.createElement("span",null,"Balance: Wallet not connected")),l.createElement("div",{className:(0,f.AK)("absolute inset-x-6 bottom-1.5 overflow-hidden text-right text-xs text-gray-light",!$&&"hidden")},"≈ ",(0,f.k)($),l.createElement(o.G,{fixedWidth:!0,"data-tooltip-id":`tooltip-price-info-${q?.address}`,className:(0,f.AK)("ml-0.5",0===$&&"hidden"),icon:i.sqG,size:"sm"}))),V.errors.amount&&l.createElement("div",{className:"absolute right-0 top-[6.25rem] text-xs text-sell"},V.errors.amount)),l.createElement(g.Z,{show:D.show,feature:a,onClose:M}))}));var F=N,S=a(46969),C=a(62618),I=a(25288),A=a(61158),$=a(95384),T=a(79646),G=a.n(T),P=a(75708),D=a.n(P);function R(e){let{loading:t,symbol0:a,symbol1:n,data:r,onPriceReverse:s}=e;const c=(0,l.useRef)(!1),m=(0,l.useRef)(null),d=(0,l.useRef)({lang:{loading:"(Loading preview)",noData:"(No preview available)"},noData:{style:{fontSize:"1rem",color:"#ccd2d7",display:"none"}},loading:{hideDuration:500,showDuration:500,labelStyle:{fontSize:"1rem",color:"#ccd2d7",top:"48%"},style:{backgroundColor:"#fff2",opacity:1}},chart:{backgroundColor:"transparent",style:{fontFamily:"Haffer SQ, system-ui, sans-serif"},zooming:{type:"x"},animation:!0},navigator:{enabled:!1,xAxis:{visible:!1},outlineWidth:0,maskFill:"#60a5fa22",handles:{borderColor:"#00cf82",backgroundColor:"#00ffb2"}},title:{text:void 0},legend:{enabled:!1,itemHoverStyle:{color:"#fff"},itemHiddenStyle:{color:"#ccd2d799"},itemStyle:{color:"#ccd2d7"}},credits:{enabled:!1},tooltip:{backgroundColor:"#08171d88",padding:0,useHTML:!0,shared:!0,style:{color:"#fff"}},plotOptions:{series:{animation:{duration:2e3},showInNavigator:!0,marker:{symbol:"circle"}}},xAxis:{lineColor:"#fff",ordinal:!1,type:"datetime",minTickInterval:36e5,labels:{style:{color:"#fff"}}},yAxis:[{title:{text:"IL/IG",style:{color:"#ccd2d799"}},labels:{format:"{text}%",style:{color:"#fff"}}},{title:{text:"Price",style:{color:"#ccd2d799"}},opposite:!0,labels:{style:{color:"#fff"}}}]}),u=(0,l.useCallback)((()=>c.current?`${n}/${a}`:`${a}/${n}`),[a,n]),p=(0,l.useCallback)((()=>{m.current?.chart.zoomOut()}),[]),b=(0,l.useCallback)((()=>{const{current:e}=d,{current:l}=m;if(e&&l)if(t)l.chart.showLoading(),l.chart.update(e,!0,!0);else{const t=!!r.length,s=e.xAxis,o=e.yAxis;l.chart.update({...e,noData:{style:{...e.noData?.style,display:"inline"}},navigator:{...e.navigator,enabled:t},legend:{...e.legend,enabled:t},tooltip:{...e.tooltip,formatter(){const e=r.find((e=>e[0]===this.point.x));return e?`<div class="backdrop-blur-sm p-1"><table class="table table-fixed border-collapse"><tr><th colspan="2" class="text-center px-1 text-xs">${$.dateFormat("%b. %e, %Y",e[0])}</th></tr><tr class="text-xs text-[#a590d1]"><td class="p-1">Sentia + Fees ${e[2]<0?"IL":"IG"}</td><td class="text-right font-semibold p-1"><b>${e[2]}%</b></td></tr><tr class="text-xs text-[#f7931a]"><td class="p-1">Global deposit ${a} evol.</td><td class="text-right font-semibold p-1"><b>${(0,f.v3)(e[5])}</b></td></tr><tr class="text-xs text-[#f7931a]"><td class="p-1">Global deposit ${n} evol.</td><td class="text-right font-semibold p-1"><b>${(0,f.v3)(e[6])}</b></td></tr><tr class="text-xs text-buy"><td class="p-1">Sentia ${e[3]<0?"IL":"IG"}</td><td class="text-right font-semibold p-1"><b>${e[3]}%</b></td></tr><tr class="text-xs text-sell"><td class="p-1">Uniswap IL</td><td class="text-right font-semibold p-1"><b>${e[4]}%</b></td></tr><tr class="text-xs text-blue-400"><td class="p-1">${u()} Price</td><td class="text-right font-semibold p-1"><b>${(0,f.v3)(c.current?1/e[1]:e[1])}</b></tr></table></div>`:null}},series:[{name:"Sentia IL/IG",type:"line",color:"#00ffb2",tooltip:{valueSuffix:"%"},data:r.map((e=>[e[0],e[3]]))},{name:"Sentia + Fees",type:"line",color:"#a590d1",visible:!1,tooltip:{valueSuffix:"%"},data:r.map((e=>[e[0],e[2]]))},{name:"Uniswap IL",type:"line",color:"#ff007a",tooltip:{valueSuffix:"%"},data:r.map((e=>[e[0],e[4]]))},{name:(c.current?`${n}/${a}`:`${a}/${n}`)+" Price",type:"line",yAxis:1,color:"#14c2e5",showInNavigator:!1,data:r.map((e=>[e[0],c.current?1/e[1]:e[1]]))}],xAxis:t?{...s,labels:{...s.labels,enabled:!0}}:{labels:{enabled:!1}},yAxis:[o?.[0],{...o[1],title:{...o[1].title,text:t?`${u()} Price`:"Price"}}]},!0,!0),l.chart.hideLoading(),p()}}),[t,u]),x=(0,l.useCallback)((()=>{c.current=!c.current,b(),s(c.current)}),[a,n,b,s]);return(0,l.useEffect)((()=>{b()}),[t]),l.createElement("div",{className:"flex flex-col space-y-3"},r.length>0&&l.createElement("div",{className:"mx-4 flex items-center space-x-1 self-end"},l.createElement("button",{type:"button",className:"flex items-center space-x-1 rounded-sm bg-[#60a5fa22] px-2 py-1 text-xs transition-all duration-500 hover:bg-[#71b6fb33]",onClick:x},l.createElement("span",null,"Price"),l.createElement(o.G,{icon:i.a_u})),l.createElement("button",{type:"button",className:"flex items-center space-x-1 rounded-sm bg-[#60a5fa22] px-2 py-1 text-xs transition-all duration-500 hover:bg-[#71b6fb33]",onClick:p},l.createElement("span",null,"Zoom Out"),l.createElement(o.G,{icon:i.Wq6}))),l.createElement(D(),{highcharts:$,options:d.current,ref:m}))}G()($);var q=a(84107);function B(e){let{tokens:t,amounts:a,pool:r,className:s}=e;const o=(0,n.I0)(),i=(0,w.Z)(),[c,u]=(0,l.useState)({a:void 0,b:void 0}),[p,b]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if(r){const e=parseFloat((0,m.b)(r.fictiveReserve0,r.token0.decimals)),a=parseFloat((0,m.b)(r.fictiveReserve1,r.token1.decimals));t.a?.address===r.token0.address||t.a?.wrap?.address===r.token0.address?u({a:e/a,b:a/e}):u({a:a/e,b:e/a})}else a.a&&a.b?u({a:parseFloat(a.a)/parseFloat(a.b),b:parseFloat(a.b)/parseFloat(a.a)}):u({a:void 0,b:void 0})}),[r,t,a]),(0,l.useEffect)((()=>{r&&Promise.all([o.token.getPrice(r.token0),o.token.getPrice(r.token1)]).then((e=>{let[t,a]=e;if(i()){const e=100*Math.abs(parseFloat((0,d.d)(t))/parseFloat((0,d.d)(a))/(parseFloat((0,m.b)(r.fictiveReserve1,r.token1.decimals))/parseFloat((0,m.b)(r.fictiveReserve0,r.token0.decimals)))-1);b(e>E.nZ)}}))}),[r]),l.createElement(l.Fragment,null,l.createElement(y.Z,{id:"tooltip-reserves-unbalanced",className:"w-48",text:"Reserves of the added tokens are unbalanced, read the doc for more information"}),l.createElement("div",{className:(0,f.AK)(s,"overflow-hidden rounded-sm text-center")},l.createElement("div",{className:"bg-white p-2 text-xs font-semibold text-dark"},r?"Prices":"Initial prices"),l.createElement("div",{className:"flex items-center space-x-2 bg-dark px-2 py-3 text-xs"},l.createElement("div",{className:"w-1/2"},t.a&&t.b?`${t.b.symbol} ≈ ${(0,f.v3)(c.a||0,4)} ${t.a.symbol}`:"--"),l.createElement("div",{className:"w-1/2"},t.a&&t.b?`${t.a.symbol} ≈ ${(0,f.v3)(c.b||0,4)} ${t.b.symbol}`:"--")),p&&l.createElement("div",{className:"bg-[#f7931a] p-2 text-sm text-dark"},"The current imbalance in the liquidity pool reserves presents a rare arbitrage risk that may affect your position.")))}function Z(){let e;const t=(0,n.I0)(),a=(0,n.v9)((e=>e.network)),x=(0,r.s0)(),v=(0,w.Z)(),{isConnected:h,address:g}=(0,u.mA)(),{openConnectModal:k}=(0,p.We)(),[N,$]=(0,s.lr)(),{switchNetwork:T}=(0,u.g0)({onSuccess(t){e()}}),[G,P]=(0,l.useState)(!1),[D,Z]=(0,l.useState)({a:void 0,b:void 0}),[L,j]=(0,l.useState)(!1),[V,z]=(0,l.useState)({a:void 0,b:void 0}),[K,W]=(0,l.useState)(null),[M,H]=(0,l.useState)(null),[_,J]=(0,l.useState)({a:!1,b:!1}),[U,O]=(0,l.useState)(!1),[Y,Q]=(0,l.useState)({show:!1}),[X,ee]=(0,l.useState)(!0),[te,ae]=(0,l.useState)({smardex:0,uniswap:0,delta:0}),le=(0,l.useRef)(!0),ne=(0,l.useRef)({a:void 0,b:void 0}),re=(0,l.useRef)({a:void 0,b:void 0}),se=(0,l.useRef)({a:0n,b:0n}),oe=(0,l.useRef)(null),ie=(0,l.useRef)(null),ce=(0,l.useRef)({a:void 0,b:void 0}),me=(0,l.useRef)({tokenA:null,tokenB:null});e=(0,l.useCallback)((()=>{const e=me.current.tokenA||N.get("tokenA"),l=me.current.tokenB||N.get("tokenB");let n,r;e!==l&&e&&l&&(n=t.token.getTokenFromState(e),r=t.token.getTokenFromState(l)),n&&r||(n=t.token.getNativeFromState(void 0),r=t.token.getSDEXFromState(void 0)),n&&r&&(ne.current={a:n,b:r},oe.current?.selectToken(n),ie.current?.selectToken(r),$({chainId:a?.chain.id.toString(),tokenA:n?.address||"",tokenB:r?.address||""}),Z({...ne.current}))}),[N,a?.chain]);const de=(0,l.useCallback)((()=>{v()&&(re.current={a:void 0,b:void 0},$({chainId:a?.chain.id.toString(),tokenA:ne.current.a?.address||"",tokenB:ne.current.b?.address||""}),Z({...ne.current}),z({a:void 0,b:void 0}),oe.current?.resetAmount(),ie.current?.resetAmount())}),[v,a?.chain]),ue=(0,l.useCallback)((()=>{O(void 0!==ne.current.a&&void 0!==re.current.a&&void 0===ce.current.a&&void 0!==ne.current.b&&void 0!==re.current.b&&void 0===ce.current.b),J({a:(re.current.a||0n)>se.current.a,b:(re.current.b||0n)>se.current.b})}),[]),pe=(0,l.useCallback)((e=>{const t=ne.current.a,a=ne.current.b;if(t&&a)if(e.trim().length){const l=(0,c.v)(e,t.decimals);if(re.current.a=l,K&&K?.reserve0>0n&&K?.reserve1>0n){const{reserve0:e,reserve1:n,token0:r}=K,s=r.address===(t.wrap?.address||t.address)?l*n/e:l*e/n;ie.current?.setAmount((0,m.b)(s,a.decimals)),re.current.b=s}}else ie.current?.setAmount("");ue(),z({...V,a:e})}),[K,ue,V]),be=(0,l.useCallback)((e=>{const t=ne.current.a,a=ne.current.b;if(t&&a)if(e.trim().length){const l=(0,c.v)(e,a.decimals);if(re.current.b=l,K&&K.reserve0>0n&&K.reserve1>0n){const{reserve0:e,reserve1:n,token0:r}=K,s=r.address===(a.wrap?.address||a.address)?l*n/e:l*e/n;oe.current?.setAmount((0,m.b)(s,t.decimals)),re.current.a=s}}else oe.current?.setAmount("");ue(),z({...V,b:e})}),[K,ue,V]),fe=(0,l.useCallback)((e=>{const{a:t,b:a}=ne.current;t&&a&&((e.wrap?.address||e.address)===(a.wrap?.address||a.address)?(ne.current.a=a,ne.current.b=t,oe.current?.selectToken(a,!1),ie.current?.selectToken(t,!1)):ne.current.a=e),de()}),[de]),xe=(0,l.useCallback)((e=>{const{a:t,b:a}=ne.current;t&&a&&((e.wrap?.address||e.address)===(t.wrap?.address||t.address)?(ne.current.b=t,ne.current.a=a,ie.current?.selectToken(t,!1),oe.current?.selectToken(a,!1)):ne.current.b=e),de()}),[de]),ve=(0,l.useCallback)(((e,t)=>{ce.current={...ce.current,[e]:t.amount||void 0},ue()}),[ue]),he=(0,l.useCallback)((async()=>{if(D.a&&void 0!==re.current.a&&D.b&&re.current.b){const[e,a]=t.token.sort([D.a,D.b]),{a:l,b:n}=re.current,[r,s]=(D.a.wrap?.address||D.a.address)===e.address?[l,n]:[n,l],{fictiveReserve0:o,fictiveReserve1:i}=K||{fictiveReserve0:r,fictiveReserve1:s};P(!0),await t.liquidity.add({token0:e,token1:a,amount0:r,amount1:s,fictiveReserve0:o,fictiveReserve1:i,onSuccess:async()=>{if(v()){let e=K;!e&&D.a&&D.b&&(e=await t.liquidity.getPool([D.a,D.b])),e&&(t.liquidity.savePool({pool:e}),x(".."))}},onError:async()=>{v()&&P(!1)}})}}),[D,K,v]),ge=(0,l.useCallback)((e=>{if(a&&e){const l=0n===e.allowance?E.iD:0n,n=e.address===D.a?.address?oe:ie,r=a.chain.SmardexRouter.address;t.token.approve({token:e,spender:r,amount:l,onSuccess:async()=>{0n===l?await t.token.approve({token:e,spender:r,amount:E.iD,onSuccess:async()=>{v()&&(n.current?.refresh(),P(!1))},onError:async()=>{v()&&(n.current?.refresh(),P(!1))}}):v()&&(n.current?.refresh(),P(!1))},onError:async()=>{v()&&(n.current?.refresh(),P(!1))}})}else P(!1);Q({show:!1,token:void 0})}),[D,a?.chain]),ye=(0,l.useCallback)(((e,t)=>{se.current[e]=t,ue()}),[ue]),Ee=(0,l.useCallback)((async e=>{const l=D[e];if(P(!0),a&&l){const e=l.address===D.a?.address?oe:ie,n=a.chain.SmardexRouter.address,r=await t.token.getAllowance({token:l,spender:n});l.resetAllowance&&r?(l.allowance=r,r>0n?Q({show:!0,token:l}):ge(l)):t.token.approve({token:l,spender:n,amount:E.iD,onSuccess:async()=>{v()&&(e.current?.refresh(),P(!1))},onError:async()=>{v()&&(e.current?.refresh(),P(!1))}})}}),[D,ge,a?.chain]);(0,l.useEffect)((()=>{W(null),H(null),ae({smardex:0,uniswap:0,delta:0}),ee(!0),D.a&&D.b&&t.liquidity.getPool([D.a,D.b]).then((e=>{v()&&D.a&&D.b&&(W(e),t.pair.getPairIG([D.a,D.b]).then((e=>{if(v()&&(H(e),ee(!1),e?.chartData.length)){const[,,,t,a]=e.chartData[e.chartData.length-1];ae({smardex:t,uniswap:a,delta:t-a})}})))}))}),[D,g]),(0,l.useEffect)((()=>{le.current||e()}),[a?.chain,g]),(0,l.useEffect)((()=>{const l=N.get("chainId");if(l){const e=A.D.find((e=>e.id===parseInt(l,10)));e&&e.id!==a?.chain.id&&(h?(me.current={tokenA:N.get("tokenA"),tokenB:N.get("tokenB")},T?.(e.id)):t.network.setChain(e))}e(),le.current=!1}),[]);const ke=(0,l.useCallback)((e=>{j(e)}),[]);return l.createElement(l.Fragment,null,l.createElement(b.Z,{title:"Add Liquidity",description:"Boost your profits by depositing your tokens in a Liquidity Pool and enjoy high-yielding Sentia Tokens as a reward.",canonical:(0,f.Z2)("/liquidity/add")}),l.createElement(y.Z,{id:"tooltip-total-fees",text:l.createElement("table",{className:"table table-fixed border-collapse"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{className:"pr-1 text-left"},"LP fees"),l.createElement("td",{className:"pl-1 text-right"},(0,f.v3)(parseFloat((0,m.b)(BigInt(M?.feesLP||0),4))),"%")),l.createElement("tr",null,l.createElement("th",{className:"pr-1 text-left"},a?.chain.Staking?"Staking":"Burn"," fees"),l.createElement("td",{className:"pl-1 text-right"},(0,f.v3)(parseFloat((0,m.b)(BigInt(M?.feesPool||0),4))),"%"))))}),l.createElement("div",{className:"container mx-auto px-2 pb-24 pt-36 lg:px-0"},l.createElement("div",{className:"flex flex-col space-x-0 space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0"},l.createElement("div",{className:"space-y-6 rounded-sm border border-white/[.3] bg-green-dark p-4 lg:w-2/5 lg:p-8"},l.createElement("div",{className:"flex items-center justify-between space-x-4"},l.createElement(s.rU,{to:"..",className:"flex shrink items-center text-white/[.6]"},l.createElement(o.G,{className:"flex-none",icon:i.acZ,fixedWidth:!0}),l.createElement("div",null,"Back to Pools")),l.createElement("div",{className:"flex-none"},l.createElement(S.Z,null))),l.createElement("div",{className:"flex flex-col items-stretch"},l.createElement("h1",{className:"mb-1 text-sm"},"Add tokens to liquidity pool to earn attractive rewards."),l.createElement("p",{className:"mb-4 text-sm text-gray-light"},"By contributing liquidity, you can make ",l.createElement("span",{className:"text-buy"},"impermanent gain")," and earn fees from all trades on this pair in proportion to your pool share. These fees are seamlessly incorporated into the pool in real time and can be claimed at your convenience by withdrawing your provided liquidity."),l.createElement(F,{ref:oe,searchTokenModalFeature:"liquidity",onSelectToken:fe,onAmountChange:pe,onAllowanceChange:e=>ye("a",e),onErrors:e=>ve("a",e)}),l.createElement(o.G,{className:"my-4 text-buy",icon:i.r8p,size:"lg"}),l.createElement(F,{ref:ie,searchTokenModalFeature:"liquidity",onSelectToken:xe,onAmountChange:be,onAllowanceChange:e=>ye("b",e),onErrors:e=>ve("b",e)}),l.createElement(B,{className:"mt-6",tokens:D,amounts:V,pool:K}),g?l.createElement(l.Fragment,null,l.createElement("div",{className:"flex items-center space-x-2"},_.a&&l.createElement("button",{type:"button",className:(0,f.AK)("btn-outline mt-6 w-full border-blue-400 p-4 text-blue-400 hover:border-dark hover:text-dark",G&&"opacity-50"),onClick:()=>Ee("a"),disabled:G},G?l.createElement(o.G,{spin:!0,icon:i.IJ7}):`Approve ${D.a?.symbol}`),_.b&&l.createElement("button",{type:"button",className:(0,f.AK)("btn-outline mt-6 w-full border-blue-400 p-4 text-blue-400 hover:border-dark hover:text-dark",G&&"opacity-50"),onClick:()=>Ee("b"),disabled:G},G?l.createElement(o.G,{spin:!0,icon:i.IJ7}):`Approve ${D.b?.symbol}`)),!_.a&&!_.b&&l.createElement("button",{type:"button",className:(0,f.AK)("mt-6 w-full p-4",U?"btn-outline":"btn-disable",G&&"opacity-50"),onClick:he,disabled:!U||G},G?l.createElement(o.G,{spin:!0,icon:i.IJ7}):"Add liquidity")):l.createElement("button",{type:"button",className:"btn-outline mt-6 w-full p-4",onClick:k},"Connect")),!K&&D.a&&D.b&&l.createElement("div",{className:"flex space-x-2 rounded-sm border border-sell bg-sell/[.25] p-2"},l.createElement(o.G,{fixedWidth:!0,className:"mt-1 shrink text-sell-200",icon:i.ik8}),l.createElement("div",{className:"grow"},l.createElement("p",{className:"font-semibold"},"You are the first liquidity provider."),l.createElement("p",null,"The ratio of tokens you add will set the price of this pair."))),K&&l.createElement(C.Z,{pool:K})),l.createElement("div",{className:"space-y-4 rounded-sm border border-white/[.3] lg:w-3/5"},l.createElement("div",{className:"flex flex-col items-center space-x-1 border-b border-white/[.3] bg-green-dark p-1 font-semibold tracking-tight"},l.createElement("div",{className:"text-[0.75rem] text-gray-light"},"IL/IG PREVIEW"),l.createElement("div",{className:"flex items-center space-x-1"},L?l.createElement(l.Fragment,null,l.createElement("div",{className:"flex items-center space-x-1"},l.createElement("img",{className:"h-4 w-auto",src:M?.token1.icon||D.b?.wrap?.icon||D.b?.icon,alt:`${M?.token1.symbol||D.b?.wrap?.symbol||D.b?.symbol} token`}),l.createElement("span",null,M?.token1.symbol||D.b?.wrap?.symbol||D.b?.symbol)),l.createElement("span",null,"•"),l.createElement("div",{className:"flex items-center space-x-1"},l.createElement("span",null,M?.token0.symbol||D.a?.wrap?.symbol||D.a?.symbol),l.createElement("img",{className:"h-4 w-auto",src:M?.token0.icon||D.a?.wrap?.icon||D.a?.icon,alt:`${M?.token0.symbol||D.a?.wrap?.symbol||D.a?.symbol} token`}))):l.createElement(l.Fragment,null,l.createElement("div",{className:"flex items-center space-x-1"},l.createElement("img",{className:"h-4 w-auto",src:M?.token0.icon||D.a?.wrap?.icon||D.a?.icon,alt:`${M?.token0.symbol||D.a?.wrap?.symbol||D.a?.symbol} token`}),l.createElement("span",null,M?.token0.symbol||D.a?.wrap?.symbol||D.a?.symbol)),l.createElement("span",null,"•"),l.createElement("div",{className:"flex items-center space-x-1"},l.createElement("span",null,M?.token1.symbol||D.b?.wrap?.symbol||D.b?.symbol),l.createElement("img",{className:"h-4 w-auto",src:M?.token1.icon||D.b?.wrap?.icon||D.b?.icon,alt:`${M?.token1.symbol||D.b?.wrap?.symbol||D.b?.symbol} token`}))))),l.createElement(R,{loading:X,data:M?.chartData||[],symbol0:M?.token0.symbol||"",symbol1:M?.token1.symbol||"",onPriceReverse:ke}),l.createElement("div",{className:"flex flex-col items-center space-y-4 p-4"},l.createElement("div",{className:"flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0"},l.createElement("div",{className:"shrink rounded-sm border border-buy px-4 py-2 text-center"},l.createElement("div",{className:"text-xs text-buy"},"Sentia Outperforms By"),l.createElement("div",{className:"text-lg font-bold text-buy"},te.delta.toFixed(2),"%")),l.createElement("div",{className:"shrink rounded-sm border border-white px-4 py-2 text-center"},l.createElement("div",{className:"text-xs text-white"},"Initial Global Deposit Transaction"),l.createElement("div",{className:"text-lg font-bold text-white"},M?l.createElement(q.Z,{value:M.firstDepositTxHash,url:`${a?.chain.blockExplorers?.default.url}/tx/${M.firstDepositTxHash}`}):"No data"))),l.createElement("div",{className:"w-full space-y-2 overflow-hidden rounded-sm text-sm"},l.createElement("div",{className:"flex justify-between space-x-1 bg-gradient-to-r from-buy-700 to-dark"},l.createElement("span",{className:"p-1 text-white"},"Sentia ",te.smardex<0?"IL":"IG"),l.createElement("span",{className:"p-1 text-right text-buy"},te.smardex,"%")),l.createElement("div",{className:"flex justify-between space-x-1 bg-gradient-to-r from-sell to-dark"},l.createElement("span",{className:"p-1 text-white"},"Uniswap IL"),l.createElement("span",{className:"p-1 text-right text-sell"},te.uniswap,"%")),l.createElement("div",{className:"flex justify-between space-x-1 bg-gradient-to-r from-[#f7931a] to-dark"},l.createElement("span",{className:"p-1 text-white"},"Initial Global Deposit ",M?.token0.symbol||D.a?.wrap?.symbol||D.a?.symbol),l.createElement("span",{className:"p-1 text-right text-[#f7931a]"},(0,f.v3)(parseFloat((0,m.b)(BigInt(M?.r0||0),M?.token0.decimals||0))))),l.createElement("div",{className:"flex justify-between space-x-1 bg-gradient-to-r from-[#f7931a] to-dark"},l.createElement("span",{className:"p-1 text-white"},"Initial Global Deposit ",M?.token1.symbol||D.b?.wrap?.symbol||D.b?.symbol),l.createElement("span",{className:"p-1 text-right text-[#f7931a]"},(0,f.v3)(parseFloat((0,m.b)(BigInt(M?.r1||0),M?.token1.decimals||0))))),l.createElement("div",{className:"flex justify-between space-x-1 bg-gradient-to-r from-white/[.6] to-dark"},l.createElement("span",{className:"p-1 text-white"},"Initial Global Deposit LP Supply"),l.createElement("span",{className:"p-1 text-right text-white"},(0,f.v3)(parseFloat((0,d.d)(BigInt(M?.initialSupply||0)))))),l.createElement("div",{className:"flex justify-between space-x-1 bg-gradient-to-r from-white/[.6] to-dark"},l.createElement("span",{className:"p-1 text-white"},"Total fees"),l.createElement("span",{className:"p-1 text-right text-white"},(0,f.v3)(parseFloat((0,m.b)(BigInt(M?.feesLP||0)+BigInt(M?.feesPool||0),4))),"%")),l.createElement("div",{className:"flex justify-between space-x-1 bg-gradient-to-r from-white/[.6] to-dark"},l.createElement("span",{className:"p-1 text-white"},"Initial Global Deposit ",M?.token0.symbol||D.a?.wrap?.symbol||D.a?.symbol,"/",M?.token1.symbol||D.b?.wrap?.symbol||D.b?.symbol," Price"),l.createElement("span",{className:"p-1 text-right text-white"},M?(e=>{const t=64-e.token0.decimals+e.token1.decimals,a=BigInt(e.r1lf)*10n**64n/BigInt(e.r0lf);return(0,f.v3)(parseFloat((0,m.b)(a,t)))})(M):"0"))))),l.createElement(I.Z,{show:Y.show,token:Y.token,onClose:ge}))))}},62618:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(67294),n=a(67814),r=a(59417),s=a(6665),o=a(95998),i=a(79655),c=a(78317),m=a(6303),d=a(56126);function u(e){let{pool:t,className:a}=e;const u=(0,o.v9)((e=>e.network));return l.createElement(l.Fragment,null,l.createElement(m.Z,{id:"tooltip-liquidity-from-native",text:`${u?.chain.nativeCurrency.symbol} is auto wrapped for technical reason`}),l.createElement(m.Z,{id:"tooltip-reward-apr",text:"Based on the last 7d volume"}),l.createElement("div",{className:(0,d.AK)(a,"space-y-2 rounded-sm border border-buy p-3")},l.createElement("div",{className:"font-semibold text-buy"},"LP tokens ",t.balance>0n&&"in your wallet"),l.createElement("div",{className:"my-2 flex items-start justify-between text-sm"},l.createElement("div",{className:"flex shrink items-center space-x-1 text-white/[.6]"},l.createElement("div",{className:"shrink"},l.createElement("img",{src:t.token0.wrap?.icon||t.token0.icon,alt:t.token0.wrap?.name||t.token0.name,className:"z-0 inline h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"}),l.createElement("img",{src:t.token1.wrap?.icon||t.token1.icon,alt:t.token1.wrap?.name||t.token1.name,className:"z-10 -ml-2.5 inline h-5 w-5 rounded-full border-2 border-black/[.25] bg-white p-0.5 lg:h-6 lg:w-6"})),l.createElement("div",{className:"flex items-center space-x-1"},l.createElement("div",null,t.token0.wrap?.symbol||t.token0.symbol,"-",t.token1.wrap?.symbol||t.token1.symbol," LP"),l.createElement(n.G,{"data-tooltip-id":"tooltip-liquidity-from-native",className:(0,d.AK)("text-white",t.token0.wrap||t.token1.wrap?"":"hidden"),fixedWidth:!0,icon:r.sqG,size:"sm"}))),t.balance>0n&&l.createElement("div",{className:"pt-0.5 text-right"},(0,d.v3)(parseFloat((0,s.d)(t.balance)))," LP",l.createElement("br",null),l.createElement("span",{className:"text-xs text-white/[.6]"},"≈ ",(0,d.k)(parseFloat((0,s.d)(t.balance*t.price/c.CI)))))),l.createElement("div",{className:"flex items-center justify-between space-x-2 text-sm"},l.createElement("div",{className:"text-white/[.6]"},"Total supply"),l.createElement("div",{className:"text-white"},(0,d.v3)(parseFloat((0,s.d)(t.totalSupply)))," LP")),l.createElement("div",{className:"flex items-center justify-between space-x-2 text-sm"},l.createElement("div",{className:"flex items-center space-x-1"},l.createElement("div",{className:"text-white/[.6]"},"LP fee reward APR"),l.createElement(n.G,{"data-tooltip-id":"tooltip-reward-apr",fixedWidth:!0,className:"text-white",icon:r.sqG,size:"sm"})),l.createElement("div",{className:"text-white"},(0,d.v3)(parseFloat((0,s.d)(t.apr||0n)))," %")),t.canBeFarmed&&l.createElement("div",{className:"flex items-center justify-between space-x-2 text-sm"},l.createElement("div",{className:"flex items-center space-x-1"},l.createElement(i.rU,{to:`/farming?chainId=${u?.chain.id}&open=campaign-${t.token0.wrap?.symbol||t.token0.symbol}-${t.token1.wrap?.symbol||t.token1.symbol}`.toLowerCase(),className:"text-white/[.6] underline underline-offset-2"},"Farming APR"),l.createElement(n.G,{fixedWidth:!0,icon:r.jTV,shake:!0,style:{"--fa-animation-duration":"3s"}})),l.createElement("div",{className:"text-white"},(0,d.v3)(parseFloat((0,s.d)(t.aprFarming||0n)))," %")),t.balance>0n&&l.createElement("div",{className:"flex items-center justify-between space-x-2 text-sm"},l.createElement("div",{className:"text-white/[.6]"},"Share in Trading Pair"),l.createElement("div",{className:"text-white"},(0,d.v3)(parseFloat((0,s.d)(t.shares||0n)))," %"))))}},46969:function(e,t,a){a.d(t,{Z:function(){return f}});var l=a(67814),n=a(86215),r=a(47031),s=a(67294),o=a(59417),i=a(34288),c=a(57333),m=a(94649),d=a(95998),u=a(56126),p=a(6303),b=a(78317);function f(){const e=(0,d.I0)(),t=(0,d.v9)((e=>e.liquidity)),a=(0,m.TA)({initialValues:{slippage:"",deadline:""},onSubmit:e=>{},validate:t=>{let{slippage:a,deadline:l}=t;const n={};if(a.trim().length){const t=parseFloat(a);t<=0?n.slippage="Minimum slippage required":t>=100?n.slippage="Bigger than maximum":e.liquidity.setSlippage(parseFloat(t.toFixed(2)))}else e.liquidity.setSlippage(void 0);if(l.trim().length){const t=parseFloat(l);t<=0?n.deadline="Minimum deadline required":e.liquidity.setDeadline(t)}else e.liquidity.setDeadline(void 0);return n}}),f=(0,s.useCallback)((e=>{a.setFieldValue("slippage",e.value)}),[]),x=(0,s.useCallback)((e=>{a.setFieldValue("deadline",e.value)}),[]);return(0,s.useEffect)((()=>{t?.settings.slippage&&a.setFieldValue("slippage",t?.settings.slippage.toString(),!1),t?.settings.deadline&&a.setFieldValue("deadline",t?.settings.deadline.toString(),!1)}),[t?.settings]),s.createElement(n.J,{className:"relative z-40"},(e=>{let{open:t}=e;return s.createElement(s.Fragment,null,s.createElement(n.J.Button,null,s.createElement(l.G,{spin:t,icon:o.gr5,size:"lg"})),s.createElement(r.u,{as:s.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1"},s.createElement(n.J.Panel,{className:"absolute right-8 top-0 w-56 rounded-sm border border-white/[.3] bg-dark"},(e=>{let{close:t}=e;return s.createElement("div",{className:"p-4"},s.createElement(p.Z,{id:"tooltip-slippage",className:"w-48",place:"left",text:"Your transaction will revert if the price changes unfavorably by more than this percentage."}),s.createElement(p.Z,{id:"tooltip-deadline",className:"w-48",place:"left",text:"Your transaction will revert if it is pending for more than this period of time."}),s.createElement("div",null,"Settings"),s.createElement("div",{className:"mt-3 flex items-center space-x-1 text-xs"},s.createElement("div",{className:"shrink text-white/[.6]"},"Slippage tolerance"),s.createElement(l.G,{fixedWidth:!0,"data-tooltip-id":"tooltip-slippage",className:"shrink",icon:i.FDd,size:"1x"})),s.createElement("div",{className:"relative mt-1"},s.createElement(c.h3,{valueIsNumericString:!0,placeholder:b.Kq.toString(),value:a.values.slippage,onValueChange:f,decimalScale:2,allowNegative:!1,className:(0,u.AK)("w-full rounded-sm border bg-black/[.4] py-1 pl-1 pr-6 text-right text-sm",a.errors.slippage?"border-sell":"border-white/[.25]")}),s.createElement(l.G,{className:"absolute right-2 top-2 text-white/[.6]",size:"sm",icon:o.jGC})),s.createElement("div",{className:"mt-3 flex items-center space-x-1 text-xs"},s.createElement("div",{className:"shrink text-white/[.6]"},"Transaction deadline"),s.createElement(l.G,{fixedWidth:!0,"data-tooltip-id":"tooltip-deadline",className:"flex-none",icon:i.FDd,size:"1x"})),s.createElement("div",{className:"mt-1 flex items-center space-x-1"},s.createElement(c.h3,{valueIsNumericString:!0,placeholder:b.l$.toString(),value:a.values.deadline,onValueChange:x,className:(0,u.AK)("w-full flex-1 rounded-sm border bg-black/[.4] p-1 text-right text-sm",a.errors.deadline?"border-sell":"border-white/[.25]")}),s.createElement("div",{className:"flex-none text-xs text-white/[.6]"},"minutes")))}))))}))}}}]);