(this.webpackJsonpaudiomatch=this.webpackJsonpaudiomatch||[]).push([[0],{29:function(e,t,n){},49:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a,c,o,i,s=n(0),r=n(14),l=n.n(r),u=n(39),b=(n(48),n(49),n(35)),d=n(4),f=n(8),j=n(3),m=n(18),h=[{icon:"fas fa-cat",label:"Cat"},{icon:"fas fa-feather",label:"Feather"},{icon:"fas fa-star",label:"Star"},{icon:"fas fa-dragon",label:"Dragon"},{icon:"fas fa-fish",label:"Fish"},{icon:"far fa-sun",label:"Sun"},{icon:"fas fa-car",label:"Car"},{icon:"fas fa-bug",label:"Bug"},{icon:"fas fa-frog",label:"Frog"},{icon:"fas fa-heart",label:"Heart"},{icon:"fas fa-ice-cream",label:"Ice Cream"},{icon:"fas fa-paperclip",label:"Paperclip"},{icon:"fas fa-dog",label:"Dog"},{icon:"fas fa-bell",label:"Bell"},{icon:"fas fa-cut",label:"Scissors"},{icon:"fas fa-bus-alt",label:"Bus"},{icon:"fas fa-moon",label:"Moon"},{icon:"fas fa-plane",label:"Airplane"},{icon:"fas fa-crow",label:"Bird"},{icon:"fas fa-tree",label:"Tree"},{icon:"fas fa-umbrella",label:"Umbrella"},{icon:"fab fa-canadian-maple-leaf",label:"Leaf"},{icon:"fas fa-truck",label:"Truck"},{icon:"fas fa-robot",label:"Robot"},{icon:"fas fa-anchor",label:"Anchor"},{icon:"fas fa-bone",label:"Bone"},{icon:"far fa-eye",label:"Eye"},{icon:"fas fa-trophy",label:"Trophy"},{icon:"fas fa-circle",label:"Circle"},{icon:"fas fa-football-ball",label:"Football"},{icon:"fas fa-user-astronaut",label:"Astronaut"},{icon:"fas fa-glasses",label:"Glasses"}],O=n(26),g=n(10),x=function(e){return!(e<2)&&!(e%2>0)},v=function(e){var t=[].concat(Object(O.a)(e),Object(O.a)(e));return function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n=0,a=0,c=parseInt(Math.sqrt(e.length),10);return Object(m.shuffle)(e).map((function(e,o){(o===c||n>0&&o%c===0)&&(n+=1),a+=1;var i="";(0===o||o+1===n*c+1)&&(i=t[n]);var s=Object(g.a)(Object(g.a)({},e),{},{id:t[n]+a.toString(),yLabel:i,xLabel:o<=c-1?o+1:""});return a===c&&(a=0),s}))}(Object(m.shuffle)(t))},p=function(e){return x(e.length)?!(e.length>12)||(f.b.error("12 symbols is the maximum allowed.",{toastId:"evenSymbols",autoClose:!1}),!1):(f.b.error("An even number of symbols is required.",{toastId:"evenSymbols",autoClose:!1}),!1)},w=function(e){var t=e.length;return 2===t||4===t?"col-6":6===t?"col-4":"col-3"},y=n(19),N=n(24),S=n.n(N),k=n(31),C=n(1),A=function(e){var t=e.onSubmit,n=e.loading;return Object(C.jsxs)("div",{className:"m-auto",children:[Object(C.jsx)("input",{id:"keyboardInput",name:"inputOrderedPair",type:"text",maxLength:"2",minLength:"2",className:"text-capitalize form-control-lg",autoFocus:!0,disabled:n,onKeyUp:function(e){e.preventDefault();var n=e.currentTarget.value;""!==n&&2===n.length&&t(n)}}),Object(C.jsx)("div",{className:"text-muted text-center small",children:"Enter ordered pair, ex: A2"})]})},M=["A1","A2","A3","A4","A5","A6","A7","B1","B2","B3","B4","B5","B6","B7","C1","C2","C3","C4","C5","C6","C7","D1","D2","D3","D4","D5","D6","D7","E1","E2","E3","E4","E5","E6","E7","F1","F2","F3","F4","F5","F6","F7","G1","G2","G3","G4","G5","G6","G7","H1","H2","H3","H4","H5","H6","H7","J1","J2","J3","J4","J5","J6","J7"],F=n(12),B=n(13),E=B.a.h1(a||(a=Object(F.a)(["\n  font-family: 'Orbitron', sans-serif;\n  text-align: center;\n  margin-bottom: 4rem;\n"]))),T=B.a.div(c||(c=Object(F.a)(["\n  max-width: 760px;\n"]))),L=B.a.div(o||(o=Object(F.a)(["\n  position: relative;\n"]))),D=B.a.div(i||(i=Object(F.a)(['\n  min-height: 60px;\n  min-width: 60px;\n\n  &::before {\n    position: absolute;\n    content: "','";\n    top: -40px;\n    color: black;\n  }\n\n  &::after {\n    position: absolute;\n    content: "','";\n    left: -40px;\n    color: black;\n  }\n\n  @media (min-width: 600px) {\n    min-height: 80px;\n    min-width: 80px;\n  }\n'])),(function(e){return e.xLabel}),(function(e){return e.yLabel})),G=function(){return Object(C.jsx)("div",{className:"m-auto",children:Object(C.jsx)("div",{className:"text-muted text-center small",children:"Speak ordered pair, ex: A2"})})},I=function(){return Object(C.jsx)("div",{className:"m-auto",children:Object(C.jsx)("div",{className:"text-muted text-center small",children:"Press a card to find matching symbols."})})};!function(){var e=window.webkitSpeechRecognition,t=window.webkitSpeechGrammarList;if(void 0===window.AudioMatch&&(window.AudioMatch={recognition:{}}),e&&(window.AudioMatch.recognition=new e,window.AudioMatch.recognition.continuous=!1,window.AudioMatch.recognition.lang="en-US",window.AudioMatch.recognition.interimResults=!1,window.AudioMatch.recognition.maxAlternatives=1,t)){var n=new t,a="#JSGF V1.0; grammar pairs; public <pair> = ".concat(M.join(" | ")," ;");n.addFromString(a,1),window.AudioMatch.recognition.grammars=n}}();var R,J=function(e){var t=e.squares,n=e.className,a=e.symbols,c=e.loadNextRound,o=e.roundData,i=Object(s.useState)("touch"),r=Object(j.a)(i,2),l=r[0],u=r[1],b=Object(s.useState)(0),d=Object(j.a)(b,2),m=d[0],h=d[1],O=Object(s.useState)(!1),x=Object(j.a)(O,2),v=x[0],p=x[1],N=Object(s.useState)(!1),M=Object(j.a)(N,2),F=M[0],B=M[1],R=Object(s.useState)(!1),J=Object(j.a)(R,2),U=J[0],H=J[1],P=Object(s.useState)(!1),q=Object(j.a)(P,2),z=q[0],Y=q[1],K=Object(s.useState)(null),V=Object(j.a)(K,2),W=V[0],_=V[1],Q=Object(s.useState)(null),X=Object(j.a)(Q,2),Z=X[0],$=X[1],ee=Object(s.useState)({}),te=Object(j.a)(ee,2),ne=te[0],ae=te[1],ce=Object(s.useState)(""),oe=Object(j.a)(ce,2),ie=oe[0],se=oe[1],re=Object(s.useState)(!1),le=Object(j.a)(re,2),ue=le[0],be=le[1];Object(s.useEffect)((function(){navigator.permissions.query({name:"microphone"}).then((function(e){se(e.state)}))}),[]);var de=Object(s.useMemo)((function(){return window.webkitSpeechRecognition&&window.webkitSpeechGrammarList}),[window.webkitSpeechRecognition,window.webkitSpeechGrammarList]);window.AudioMatch.recognition.onstart=function(){console.log("recognition (onstart)"),be(!0)},window.AudioMatch.recognition.onresult=function(e){var t=e.results[0][0].transcript;console.log("recognition (onresult) : transcript",t),console.log("recognition (onresult) : confidence",e.results[0][0].confidence),Oe(t)},window.AudioMatch.recognition.onerror=function(e){console.log("recognition (onerror): ".concat(e.error)),"voice"===l&&"no-speech"===(null===e||void 0===e?void 0:e.error)&&(f.b.error("No speech detected. Click microphone to reactivate.",{autoClose:!1}),be(!1),window.AudioMatch.recognition.stop(),u("touch")),"voice"===l&&"aborted"===(null===e||void 0===e?void 0:e.error)&&fe()};var fe=function(){setTimeout((function(){try{window.AudioMatch.recognition.start(),be(!0),console.log("recognition (start) success")}catch(e){console.log("recognition (error)",e)}}),400)},je=function(){window.AudioMatch.recognition.abort(),be(!1),console.log("recognition (abort)")};Object(s.useEffect)((function(){v||z||(c(m),p(!0))}),[t,a]);var me=function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:t=e.sent,console.log("getUserMedia (success)",t),se(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("getUserMedia (error)",e.t0),se(!1),u("touch");case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=document.getElementById("keyboardInput");$(null),_(null),B(!1),console.log("resetForNextSelection"),"voice"===l&&fe(),e&&"keyboard"===l&&e.focus()},Oe=function(e){var t=e.toUpperCase(),n=document.getElementById(t),a=document.getElementById("keyboardInput");if(f.b.dismiss(),"voice"===l&&je(),!n)return f.b.error("Guess ordered pairs within the grid."),"keyboard"===l&&(a.value=""),"voice"===l&&fe(),!1;var c=n.dataset.label;if(Z&&_(Z),$([t,c]),Z)if(B(!0),Z[1]===c&&Z[0]!==t){var o,i=Object(g.a)(Object(g.a)({},ne),{},(o={},Object(y.a)(o,t,c),Object(y.a)(o,Z[0],Z[1]),o));ae(i),setTimeout((function(){he()}),400)}else f.b.error("Try again"),setTimeout((function(){he()}),1500);Z||"voice"!==l||fe(),a&&"keyboard"===l&&(a.value="")},ge=function(e){var t=!1;return void 0!==ne[e.id]&&(t=!0),Z&&Z[0]===e.id&&(t=!0),W&&W[0]===e.id&&(t=!0),t};if(!t||!a)return null;if(!U&&Object.keys(ne).length===t.length){H(!0);var xe=2*(m+1+1);if(xe>12||xe>o.length)return Y(!0),f.b.success("You win!"),null;f.b.success("Nice job!")}var ve=function(e){f.b.dismiss(),"voice"===l&&"voice"!==e&&je(),l!==e&&(u(e),"voice"===e&&navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){fe()})).catch((function(){me()})))};return console.log("Listening",ue),Object(C.jsx)(T,{className:"m-auto px-5 d-flex align-items-center justify-content-center h-100 ".concat(n||""),children:Object(C.jsxs)("div",{children:[Object(C.jsxs)(E,{className:"text-muted",children:["Round ",m+1]}),Object(C.jsx)("div",{className:"row align-items-start",children:t.map((function(e,t){return Object(C.jsx)("div",{className:w(a),children:Object(C.jsx)(L,{children:Object(C.jsx)(D,{id:e.id,inputMethod:l,"data-label":e.label,className:"game-square bg-".concat(void 0!==ne[e.id]?"success":"secondary"," mb-3 d-flex align-items-center justify-content-center text-white"),xLabel:"touch"!==l?e.xLabel:" ",yLabel:"touch"!==l?e.yLabel:" ",onClick:function(){"touch"!==l&&u("touch"),F||Oe(e.id)},children:ge(e)&&Object(C.jsx)("i",{className:e.icon,style:{fontSize:"2rem"}})})})},t)}))}),!U&&Object(C.jsxs)("div",{className:"d-flex align-item-center justify-content-center flex-column",children:["keyboard"===l&&Object(C.jsx)(A,{onSubmit:function(e){Oe(e)},loading:F}),"voice"===l&&Object(C.jsx)(G,{}),"touch"===l&&Object(C.jsx)(I,{}),Object(C.jsx)("div",{className:"mx-auto mt-3",children:Object(C.jsxs)("div",{className:"btn-group border rounded",role:"group","aria-label":"Basic example",children:[Object(C.jsx)("button",{type:"button",className:"btn btn-".concat("touch"===l?"primary":"light"," border-right"),onClick:function(){ve("touch")},children:Object(C.jsx)("i",{className:"fa fa-hand-pointer-o"})}),Object(C.jsx)("button",{type:"button",className:"btn btn-".concat("keyboard"===l?"primary":"light"," border-right"),onClick:function(){ve("keyboard")},children:Object(C.jsx)("i",{className:"fas fa-keyboard"})}),de&&Object(C.jsx)("button",{type:"button",className:"position-relative btn btn-".concat("voice"===l?"primary":"light"),onClick:function(){ve("voice")},children:"denied"!==ie?Object(C.jsx)("i",{className:"fas fa-microphone"}):Object(C.jsx)("i",{className:"fa fa-microphone-slash text-muted"})})]})})]}),U&&Object(C.jsx)("div",{className:"d-flex align-item-center justify-content-center flex-column",children:Object(C.jsx)("div",{className:"mx-auto mt-3",children:z?Object(C.jsx)("div",{children:Object(C.jsxs)("h4",{children:[Object(C.jsx)("i",{className:"fas fa-check-circle text-success"})," You win!"]})}):Object(C.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){!function(){var e=m+1;H(!1),p(!1),ae({}),h(e),c(e),"voice"===l&&fe()}()},children:"Next Round"})})})]})})},U=(n(29),function(e){var t=e.icon,n=e.show,a=e.className,c=void 0===a?"col-sm-6":a,o=e.backClassName,i=void 0===o?"bg-success":o;return Object(C.jsx)("div",{className:c,children:Object(C.jsx)("div",{className:"flip-card ".concat(n?"show-icon":""),children:Object(C.jsxs)("div",{className:"flip-card-inner",children:[Object(C.jsx)("div",{className:"flip-card-front"}),Object(C.jsx)("div",{className:"flip-card-back ".concat(i),children:Object(C.jsx)("i",{className:t,style:{fontSize:"2rem"}})})]})})})}),H=B.a.h1(R||(R=Object(F.a)(["\n  font-family: 'Orbitron', sans-serif;\n  text-align: center;\n  margin-bottom: 4rem;\n"]))),P=function(e){var t=e.startGame,n=Object(s.useState)(!1),a=Object(j.a)(n,2),c=a[0],o=a[1],i=Object(s.useState)(!1),r=Object(j.a)(i,2),l=r[0],u=r[1],b=Object(s.useState)(!1),d=Object(j.a)(b,2),f=d[0],m=d[1],h=Object(s.useState)(!1),O=Object(j.a)(h,2),g=O[0],x=O[1],v=Object(s.useState)(!1),p=Object(j.a)(v,2),w=p[0],y=p[1];return Object(s.useEffect)((function(){var e=!0;return setTimeout((function(){e&&o(!0)}),150),setTimeout((function(){e&&u(!0)}),300),setTimeout((function(){e&&m(!0)}),450),setTimeout((function(){e&&x(!0)}),600),setTimeout((function(){e&&y(!0)}),750),function(){e=!1}})),Object(C.jsx)("div",{className:"d-flex align-items-center justify-content-center h-100",children:Object(C.jsxs)("div",{children:[Object(C.jsx)(H,{className:"text-muted",children:"Memory Match"}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"row mb-3",children:[Object(C.jsx)(U,{icon:"fas fa-robot",show:f,backClassName:w?"bg-success":"bg-secondary"}),Object(C.jsx)(U,{icon:"fas fa-anchor",show:!w&&c,backClassName:"bg-secondary"})]}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)(U,{icon:"fas fa-plane",show:!w&&l,backClassName:"bg-secondary"}),Object(C.jsx)(U,{icon:"fas fa-robot",show:g,backClassName:w?"bg-success":"bg-secondary"})]})]}),Object(C.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(C.jsx)("button",{className:"btn btn-lg ".concat(w?"btn-primary":"btn-light border"),onClick:t,disabled:!w,type:"button",children:"Start Game"})})]})})},q=function(e){var t=e.className,n=Object(s.useState)(null),a=Object(j.a)(n,2),c=a[0],o=a[1],i=Object(s.useState)(null),r=Object(j.a)(i,2),l=r[0],u=r[1],b=Object(s.useState)(!0),d=Object(j.a)(b,2),f=d[0],O=d[1];return f?Object(C.jsx)(P,{startGame:function(){O(!1)}}):Object(C.jsx)(J,{className:t,squares:c,symbols:l,roundData:h,loadNextRound:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=2*(e+1),n=Object(m.shuffle)(h),a=n.slice(0,t);if(!p(a))return null;o(v(a)),u(a)}})},z=function(){return Object(C.jsx)(q,{})};n(54),n(55);var Y=function(){return Object(C.jsx)(b.a,{basename:"/",children:Object(C.jsxs)(s.Fragment,{children:[Object(C.jsx)("div",{className:"container-fluid",children:Object(C.jsx)(d.c,{children:Object(C.jsx)(d.a,{exact:!0,path:"/",component:z})})}),Object(C.jsx)(f.a,{className:"text-center",position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))},V=n(21),W=n(38),_=n(37),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),X="RESET_CURRENT_FILES",Z={loading:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(g.a)(Object(g.a)({},e),t);default:return e}};var ee=function(e){var t=[W.a],n=V.applyMiddleware.apply(void 0,t),a=[n],c=Q?_.composeWithDevTools.apply(void 0,a):n,o=Object(V.createStore)($,e,c);return o.dispatch=function(e){var t=e.dispatch;return function(e){return"function"===typeof e.then?e.then(t):t(e)}}(o),o}();l.a.render(Object(C.jsx)(u.a,{store:ee,children:Object(C.jsx)(Y,{})}),document.getElementById("root")),K()}},[[57,1,2]]]);
//# sourceMappingURL=main.b82e2be0.chunk.js.map