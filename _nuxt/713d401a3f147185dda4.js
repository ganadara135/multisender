(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1241:function(t,e,r){"use strict";var n=r(13),o=r(72),c={props:{txs:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:""},subtitle:{type:String,default:""},txName:{type:String,default:""}},computed:Object(n.a)({},Object(o.c)("txHashKeeper",["txExplorerUrl","txHashToRender","txStatusClass"]),{show:function(){return"multisendTxs"===this.txName?this.txs.length>0:this.txs.txHash},multisend:function(){return"multisendTxs"===this.txName}})},l=r(15),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",{staticClass:"token-field"},[t.title?r("div",{staticClass:"title",class:{"is-spaced":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?r("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.multisend?r("ol",{staticClass:"txs"},t._l(t.txs,function(e){var n=e.txHash,o=e.status;return r("li",{key:n,staticClass:"txs__item",class:t.txStatusClass(o)},[r("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName,n),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName,n))+"\n      ")]),t._v(" "),r("div",{staticClass:"txs__status"})])}),0):r("div",{staticClass:"txs"},[r("div",{staticClass:"txs__item",class:t.txStatusClass(t.txs.status)},[r("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName))+"\n      ")]),t._v(" "),r("div",{staticClass:"txs__status"})])])]):t._e()},[],!1,null,null,null);e.a=component.exports},1243:function(t,e,r){"use strict";r(1244)("link",function(t){return function(e){return t(this,"a","href",e)}})},1244:function(t,e,r){var n=r(26),o=r(35),c=r(57),l=/"/g,d=function(t,e,r,n){var o=String(c(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(n).replace(l,"&quot;")+'"'),d+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(d),n(n.P+n.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},1373:function(t,e,r){"use strict";var n=r(26),o=r(517)(5),c=!0;"find"in[]&&Array(1).find(function(){c=!1}),n(n.P+n.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(195)("find")},1383:function(t,e,r){"use strict";r.r(e);r(1243),r(73),r(36),r(113),r(42);var n=r(4),o=(r(1373),r(13)),c=r(1241),l=r(72),d={components:{Tx:c.a},data:function(){return{ipfsHash:"",isDataLoaded:!1,hasAlreadyBeenClaimed:!0,sending:!1,link:"",error:null}},computed:Object(o.a)({},Object(l.c)("token",["getTokenSymbol","toDecimals"]),Object(l.d)("distribution",["airdropRawData","airdrop"]),Object(l.d)("metamask",["ethAccount"]),Object(l.d)("txHashKeeper",["claimAirdropTx"]),Object(l.d)("token",["decimals"]),{isOwner:function(){return!!this.airdrop&&this.ethAccount.toLowerCase()===this.airdrop.owner.toLowerCase()},isParticipant:function(){return!!this.participantObject},participantShare:function(){var object=this.participantObject;return object?this.toDecimals(object[1]):0},participantObject:function(){var t=this;return this.airdropRawData?this.airdropRawData.find(function(e){return e[0].toLowerCase()===t.ethAccount.toLowerCase()}):null},role:function(){return this.isOwner?this.$t("owner"):this.isParticipant?this.$t("participant"):this.$t("notParticipant")},initialized:function(){return this.isDataLoaded&&0!==this.decimals&&this.getTokenSymbol}}),watch:{ethAccount:function(t,e){e?t&&this.loadHasClaimed():this.initialize()}},mounted:function(){this.initialize()},methods:Object(o.a)({},Object(l.b)("distribution",["loadAirdropFromIPFS","loadAirdropFromContract","hasClaimed","claimAirdrop"]),{loadHasClaimed:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.hasClaimed(this.ipfsHash);case 2:this.hasAlreadyBeenClaimed=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),loadFromContract:function(){return Promise.all([this.loadAirdropFromContract(this.ipfsHash),this.loadHasClaimed()])},initialize:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e=window.localStorage.getItem("provider"),r=window.localStorage.getItem("network"),e){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.$store.dispatch("metamask/initialize",{providerName:e,networkName:r});case 7:return n=this.$nuxt.$route.query.ipfs,this.ipfsHash=n,this.link="".concat(window.location.origin,"/merkle?ipfs=").concat(n),t.next=12,Promise.all([this.loadAirdropFromIPFS(n),this.loadFromContract()]);case 12:this.isDataLoaded=!0,t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log("error",t.t0),this.error=this.$t("airdropNotFound");case 19:case"end":return t.stop()}},t,this,[[0,15]])}));return function(){return t.apply(this,arguments)}}(),claim:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.sending=!0,t.next=3,this.claimAirdrop(this.ipfsHash);case 3:this.loadFromContract(),this.sending=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),copy:function(){var t=this;navigator.clipboard.writeText(this.link).then(function(){t.$toast.open({message:t.$t("copied"),type:"is-primary"})})}})},h=r(15),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-container"},[t.error?r("div",[t._v(t._s(t.error))]):t._e(),t._v(" "),t.initialized?r("div",[t.isOwner?r("div",{staticClass:"token-field",attrs:{id:"owner-block"}},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("roleAirdrop",{role:t.role})))]),t._v(" "),r("a",{staticClass:"button is-text-link has-merkle-link",attrs:{href:t.link}},[t._v(t._s(t.link))]),t._v(" "),r("div",{staticClass:"buttons is-centered"},[r("b-button",{staticClass:"is-next",attrs:{type:"is-primary"},on:{click:t.copy}},[t._v("\n          "+t._s(t.$t("copyLink"))+"\n        ")])],1)]):t._e(),t._v(" "),t.isParticipant&&!t.isOwner?r("div",{staticClass:"result",attrs:{id:"participant-block"}},[r("div",{staticClass:"result__ico"}),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.$t("roleAirdrop",{role:t.role})))]),t._v(" "),r("div",{staticClass:"result__data"},[r("div",{staticClass:"result__name"},[t._v("\n          "+t._s(t.hasAlreadyBeenClaimed?t.$t("alreadyСlaimed"):t.$t("youHaveToClaim"))+"\n          "+t._s(t.participantShare)+" "+t._s(t.getTokenSymbol)+"\n        ")]),t._v(" "),t.hasAlreadyBeenClaimed?t._e():r("b-button",{staticClass:"is-next",attrs:{type:"is-primary",loading:t.sending},on:{click:t.claim}},[t._v("\n          "+t._s(t.$t("claim"))+"\n        ")])],1)]):t._e(),t._v(" "),t.isParticipant||t.isOwner?t._e():r("div",{staticClass:"result result--error",attrs:{id:"not-participant-block"}},[r("div",{staticClass:"result__ico"}),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.$t("roleAirdrop",{role:t.role})))]),t._v(" "),r("div",{staticClass:"result__data"},[r("div",{staticClass:"result__content"},[r("p",[t._v("\n            "+t._s(t.$t("noTokens",{token:t.getTokenSymbol}))+" "),r("span",[t._v(t._s(t.ethAccount))])]),t._v(" "),r("p",[t._v("\n            "+t._s(t.$t("contactCreator"))+" "),r("span",[t._v(t._s(t.airdrop.owner))])])])])]),t._v(" "),r("Tx",{attrs:{txs:t.claimAirdropTx,"tx-name":"claimAirdropTx",title:t.$t("txHashOfClaim")}})],1):t._e()])},[],!1,null,null,null);e.default=component.exports}}]);