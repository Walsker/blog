(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{J1ZC:function(e,n,t){"use strict";t("rOb9")("link",(function(e){return function(n){return e(this,"a","href",n)}}))},KT9m:function(e,n,t){e.exports=t.p+"static/saving-cindi-preview-c5af5460e2de77b3f86f1ee2a2cf85d3.jpg"},Nhdc:function(e,n,t){"use strict";t.d(n,"a",(function(){return a.a})),t.d(n,"b",(function(){return x})),t.d(n,"c",(function(){return v.a})),t.d(n,"d",(function(){return y.a}));var a=t("hhmX"),r=t("PEXJ"),i=t.n(r),o=t("S2pg"),l=(t("+6po"),function(e){return i.a.createElement("svg",Object.assign({width:44,height:44,viewBox:"0 0 44 44",stroke:"#fff"},e),i.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e.color,strokeWidth:2},i.a.createElement("circle",{cx:22,cy:22,r:1},i.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),i.a.createElement("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),i.a.createElement("circle",{cx:22,cy:22,r:1},i.a.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),i.a.createElement("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))))}),c=Object(o.a)(["display:flex;flex-direction:column;flex-shrink:0;padding:5vw;width:calc(var(--mobile-width) - 10vw);min-height:420px;@media only screen and (min-width:700px){padding:35px 40px;width:300px;min-height:460px;}@media only screen and (min-width:1200px){width:355px;}"]),s=o.b.form.withConfig({displayName:"form__FormContainer",componentId:"sc-1hberzp-0"})([""," align-items:flex-start;justify-content:space-between;background-color:",";"],c,(function(e){return e.color})),m=o.b.form.withConfig({displayName:"form__RegularContainer",componentId:"sc-1hberzp-1"})([""," align-items:center;justify-content:center;background-color:",";color:",";"],c,(function(e){return e.color}),(function(e){return"var(--yellow)"===e.color?"var(--black)":"var(--white)"})),d=o.b.label.withConfig({displayName:"form__Field",componentId:"sc-1hberzp-2"})(["display:flex;flex-direction:column;margin-bottom:5px;width:100%;font-family:'Inter',sans-serif;font-size:1rem;font-weight:600;"]),p=o.b.input.withConfig({displayName:"form__Input",componentId:"sc-1hberzp-3"})(["margin:5px 0;padding:0.5rem;border:2px solid var(--black);background-color:#ffffff;font-family:'Open Sans',sans-serif;font-size:1.125rem;"]),f=o.b.textarea.withConfig({displayName:"form__TextArea",componentId:"sc-1hberzp-4"})(["resize:none;margin-top:5px;margin-bottom:-5px;padding:0.5rem;border:2px solid var(--black);background-color:#ffffff;font-family:'Inter',sans-serif;font-size:1.125rem;"]),u=o.b.button.withConfig({displayName:"form__Button",componentId:"sc-1hberzp-5"})(["margin-top:5vw;padding:0.75rem 1rem;border:2px solid var(--text);background-color:var(--bkg);color:var(--text);font-family:'Open Sans',sans-serif;font-size:1.125rem;font-weight:600;transition:0.1s ease-in;&:hover{cursor:pointer;background-color:",";}@media only screen and (min-width:700px){margin-top:35px;}"],(function(e){return e.color})),g=o.b.p.withConfig({displayName:"form__FormMessage",componentId:"sc-1hberzp-6"})(["text-align:center;font-size:1.125rem;@media only screen and (min-width:700px){font-size:1.4rem;}"]),h=function(e){var n=Object(r.useState)("idle"),t=n[0],a=n[1];switch(t){case"idle":return i.a.createElement(s,{color:"var(--"+e.theme+")",action:"https://usebasin.com/f/9d85adb927f2",method:"POST",onSubmit:function(e){e.preventDefault(),a("loading");var n=e.currentTarget,t=new FormData(n),r=new XMLHttpRequest;console.log("data:",t),r.open("POST",n.action,!0),r.onload=function(){200===r.status?(a("submitted"),n.reset()):a("failed")},r.send(t)},id:"blog-contact-form"},i.a.createElement(d,null,"Name",i.a.createElement(p,{required:!0,name:"name",type:"text"})),i.a.createElement(d,null,"Email",i.a.createElement(p,{required:!0,name:"email",type:"email"})),i.a.createElement(d,null,"Message",i.a.createElement(f,{required:!0,name:"message",rows:7})),i.a.createElement(u,{type:"submit",color:"var(--"+e.theme+")"},"Send Message"));case"loading":return i.a.createElement(m,{color:"var(--"+e.theme+")"},i.a.createElement(l,{color:"yellow"===e.theme?"var(--black)":"var(--white)"}));case"submitted":return i.a.createElement(m,{color:"var(--"+e.theme+")"},i.a.createElement(g,null,"Thanks!",i.a.createElement("br",null),"We'll be in touch. 🙂"));case"failed":return i.a.createElement(m,{color:"var(--"+e.theme+")"},i.a.createElement(g,null,"Something went wrong. 😶",i.a.createElement("br",null),"Please try again later."))}},b=o.b.div.withConfig({displayName:"contactPrompt__StyledDiv",componentId:"xoxggy-0"})(["display:flex;flex-direction:column;align-items:flex-start;width:var(--mobile-width);margin-top:75px;margin-bottom:50px;@media only screen and (min-width:700px){flex-direction:row;align-items:center;justify-content:space-between;margin-top:150px;}@media only screen and (min-width:1200px){max-width:var(--desktop-width);}"]),w=o.b.div.withConfig({displayName:"contactPrompt__Dialogue",componentId:"xoxggy-1"})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:50px;h1{margin:0;font-family:'Inter',sans-serif;}p{margin:20px 0;font-family:'Open Sans',sans-serif;font-size:1.25rem;}@media only screen and (min-width:700px){margin-right:5vw;p{margin:10px 0 30px;font-size:1.5rem;}}"]),x=function(e){return i.a.createElement(b,null,i.a.createElement(w,null,e.children),i.a.createElement(h,{theme:e.theme}))},v=t("9Dj+"),y=t("vrFN")},QeBL:function(e,n,t){"use strict";t.r(n);var a=t("PEXJ"),r=t.n(a),i=t("S2pg"),o=t("Nhdc"),l=(t("acUJ"),t("uG1i"),t("vqrR"),t("Wd1V"),t("J1ZC"),t("Wbzz")),c=t("mSV1"),s=t("lgG8");var m=Object(i.a)(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:5vw;padding:5vw;border:2px solid var(--black);background-position:center;background-size:cover;background-color:rgba(255,255,255,0.5);background-blend-mode:overlay;transition:0.1s ease-in;h1{margin:0;font-family:'Inter',sans-serif;font-weight:800;font-size:2rem;}h2{margin:0;font-family:'Open Sans',sans-serif;font-weight:500;font-size:1.1rem;}@media only screen and (min-width:700px){margin-bottom:20px;padding:33px 38px;background-color:#ffffff;&:hover{background-color:rgba(255,255,255,0.5);}h1{font-size:2.25rem;}h2{font-size:1.375rem;color:var(--grey);}}@media only screen and (min-width:1200px){width:510px;}"]),d=Object(i.b)(l.a).withConfig({displayName:"card__LinkContainer",componentId:"sc-1ckqsol-0"})([""," background-image:",";"],m,(function(e){return"url("+e.bkg+")"})),p=i.b.a.withConfig({displayName:"card__AnchorContainer",componentId:"sc-1ckqsol-1"})([""," background-image:",";"],m,(function(e){return"url("+e.bkg+")"})),f=i.b.div.withConfig({displayName:"card__Header",componentId:"sc-1ckqsol-2"})(["display:flex;justify-content:space-between;width:100%;"]),u=i.b.div.withConfig({displayName:"card__ThemeDisplay",componentId:"sc-1ckqsol-3"})(["overflow:visible;display:flex;flex-direction:row;margin-bottom:20px;"]),g=i.b.div.withConfig({displayName:"card__ThemeDot",componentId:"sc-1ckqsol-4"})(["width:20px;height:20px;border:2px solid var(--black);border-radius:100%;margin-right:20px;background-color:",";@media only screen and (min-width:700px){width:25px;height:25px;margin-right:25px;}"],(function(e){return e.color})),h=function(e){var n=e.linkProps,t=void 0===n?{link:"/",external:!1}:n,a=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["linkProps"]);return t.external?r.a.createElement(p,{target:"_blank",rel:"noopener noreferrer external",href:t.link,bkg:a.preview},r.a.createElement(f,null,r.a.createElement(u,null,a.themeColors.map((function(e,n){return r.a.createElement(g,{key:n,color:e})}))),r.a.createElement(c.a,{icon:s.c,size:"lg"})),r.a.createElement("h1",null,a.title),r.a.createElement("h2",null,a.subtitle)):r.a.createElement(d,{to:t.link,bkg:a.preview},r.a.createElement(u,null,a.themeColors.map((function(e,n){return r.a.createElement(g,{key:n,color:e})}))),r.a.createElement("h1",null,a.title),r.a.createElement("h2",null,a.subtitle))},b=t("d5ho"),w=t.n(b),x=t("v1Lm"),v=t.n(x),y=t("loUt"),k=t.n(y),E=t("KT9m"),C=t.n(E),_=i.b.div.withConfig({displayName:"pages__Introduction",componentId:"sc-162dr3l-0"})(["display:flex;flex-direction:column;width:var(--mobile-width);margin-bottom:100px;@media only screen and (min-width:1200px){flex-direction:row;max-width:var(--desktop-width);}"]),N=i.b.div.withConfig({displayName:"pages__NameText",componentId:"sc-162dr3l-1"})(["display:flex;flex-direction:column;align-items:flex-start;background-color:var(--red);color:var(--white);font-family:'Inter',sans-serif;font-size:2rem;font-weight:300;margin:16px 0;padding:5vw;span{font-size:4rem;font-weight:900;}p{margin:0;color:var(--black);font-family:'Open Sans',sans-serif;font-size:1rem;font-weight:normal;}@media only screen and (min-width:700px){margin:0;padding:35px 40px;font-size:3rem;span{font-size:8rem;}p{font-size:1.5rem;}}@media only screen and (min-width:1200px){flex-shrink:0;font-size:4rem;span{font-size:9rem;}}"]),z=i.b.p.withConfig({displayName:"pages__IntroText",componentId:"sc-162dr3l-2"})(["strong{color:var(--red);font-weight:normal;}@media only screen and (min-width:700px){font-size:1.5rem;}@media only screen and (min-width:1200px){padding-left:40px;font-size:2rem;margin:0;}"]),I=i.b.div.withConfig({displayName:"pages__WorkContainer",componentId:"sc-162dr3l-3"})(["display:flex;flex-direction:column;align-items:flex-start;width:var(--mobile-width);@media only screen and (min-width:1200px){max-width:var(--desktop-width);}"]),S=i.b.h1.withConfig({displayName:"pages__Header",componentId:"sc-162dr3l-4"})(["align-self:flex-start;font-family:'Inter',sans-serif;font-size:1.5rem;font-weight:bold;@media only screen and (min-width:700px){font-size:2rem;}"]),O=i.b.div.withConfig({displayName:"pages__CardList",componentId:"sc-162dr3l-5"})(["display:flex;flex-direction:column;width:var(--mobile-width);@media only screen and (min-width:1200px){flex-direction:row;flex-wrap:wrap;justify-content:space-between;max-width:var(--desktop-width);}"]);n.default=function(){return r.a.createElement(o.c,null,r.a.createElement(o.d,{title:"Work",description:"Get a snapshot of Wal Wal's most recent endeavours."}),r.a.createElement(_,null,r.a.createElement(N,null,"Hi, I'm",r.a.createElement("br",null),r.a.createElement("span",null,"Wal Wal."),r.a.createElement("p",null,"Nice of you to drop by! 👋🏿 ")),r.a.createElement(z,null,"A ",r.a.createElement("strong",null,"fullstack developer")," who loves collaborating with others to create solutions that solve real-world and everyday problems.✊🏿",r.a.createElement("br",null),r.a.createElement("br",null),"Currently looking for more opportunities! 💼")),r.a.createElement(I,null,r.a.createElement(S,null,"Recent Works"),r.a.createElement(O,null,r.a.createElement(h,{title:"Developing for the Community at cuHacking",subtitle:"Director of Development | cuHacking",themeColors:["#00D0FE","#7C39BF","#280749"],preview:w.a,linkProps:{link:"/work/cuhacking",external:!1}}),r.a.createElement(h,{title:"Leading Developers at cuHacking",subtitle:"Director of Development | cuHacking 2020",themeColors:["#7C39BF","#280749"],preview:v.a,linkProps:{link:"/work/cuhacking-2020",external:!1}}),r.a.createElement(h,{title:"Interning at Ribbon Communications",subtitle:"Software Developer (Intern) | Ribbon",themeColors:["#FF007F","#C0059E","#7E00B9","#4B4B4B"],preview:k.a,linkProps:{link:"/work/ribbon-communications",external:!1}}),r.a.createElement(h,{title:"Making Saving Cindi’s Website",subtitle:"Website Designer & Developer",themeColors:["#00C9E4","#D804A9"],preview:C.a,linkProps:{link:"/work/saving-cindi",external:!1}}))),r.a.createElement(o.b,{theme:"red"},r.a.createElement("h1",null,"Don’t be shy, shoot me a message!"),r.a.createElement("p",null,"I’m always open to meeting new people. Let’s talk about anything."),r.a.createElement(o.a,{color:"var(--red)",label:"More About Me",link:"/about"})))}},d5ho:function(e,n,t){e.exports=t.p+"static/cuHacking-preview-53d0882f92431d0de2ecc5713b59afd6.jpg"},hhmX:function(e,n,t){"use strict";t("+6po"),t("J1ZC");var a=t("PEXJ"),r=t.n(a),i=t("S2pg"),o=t("Wbzz"),l=t("mSV1"),c=t("lgG8"),s=Object(i.a)(["border:2px solid var(--grey);background-color:var(--bkg);color:var(--grey);font-family:'Open Sans',sans-serif;font-size:1.125rem;font-weight:600;display:flex;justify-content:center;align-items:center;padding:0.75rem 1rem;user-select:none;"]),m=i.b.div.withConfig({displayName:"button__DisabledButton",componentId:"sc-1y5yaws-0"})(["",""],s),d=Object(i.a)([""," color:var(--text);border-color:var(--text);transition:0.1s ease-in;"],s),p=i.b.button.withConfig({displayName:"button__StyledButton",componentId:"sc-1y5yaws-1"})([""," @media only screen and (min-width:700px){&:hover{background-color:",";color:",";cursor:pointer;}}"],d,(function(e){return e.color}),(function(e){return e.whiteTextHover?"var(--white)":"var(--black)"})),f=Object(i.b)(o.a).withConfig({displayName:"button__StyledLink",componentId:"sc-1y5yaws-2"})([""," @media only screen and (min-width:700px){&:hover{background-color:",";color:",";}}"],d,(function(e){return e.color}),(function(e){return e.whiteTextHover?"var(--white)":"var(--black)"})),u=i.b.a.withConfig({displayName:"button__StyledAnchor",componentId:"sc-1y5yaws-3"})([""," @media only screen and (min-width:700px){&:hover{background-color:",";color:",";}}"],d,(function(e){return e.color}),(function(e){return e.whiteTextHover?"var(--white)":"var(--black)"})),g=Object(i.b)(l.a).withConfig({displayName:"button__StyledIcon",componentId:"sc-1y5yaws-4"})(["margin-left:10px;margin-top:-2px;margin-right:-5px;"]);n.a=function(e){return e.disabled?r.a.createElement(m,e,e.label):e.link?e.external||e.download?r.a.createElement(u,Object.assign({className:e.className,target:"_blank",rel:"noopener noreferrer external",href:e.link,color:e.color,whiteTextHover:!!e.whiteTextHover,download:e.download},e),e.label,r.a.createElement(g,{icon:e.download?c.b:c.c,size:"1x"})):r.a.createElement(f,Object.assign({className:e.className,to:e.link,color:e.color,whiteTextHover:!!e.whiteTextHover},e),e.label):r.a.createElement(p,Object.assign({className:e.className,color:e.color,whiteTextHover:!!e.whiteTextHover,onClick:e.action},e),e.label)}},loUt:function(e,n,t){e.exports=t.p+"static/ribbon-preview-c2722135d0809525e13b030f91a8fd11.svg"},rOb9:function(e,n,t){var a=t("Fe6i"),r=t("otcc"),i=t("nSLB"),o=/"/g,l=function(e,n,t,a){var r=String(i(e)),l="<"+n;return""!==t&&(l+=" "+t+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+r+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(l),a(a.P+a.F*r((function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",t)}},v1Lm:function(e,n,t){e.exports=t.p+"static/cuHacking-2020-preview-505caa9cfcee8c795d35b34253167489.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-44e091ddd622dfbfffe4.js.map