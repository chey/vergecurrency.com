
          window.__NEXT_REGISTER_PAGE('/meetup-2018', function() {
            var comp = module.exports=webpackJsonp([11],{19:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),i=l(0),c=a(i),u=l(17),m=a(u),d=l(23),p=l(24),f=a(p),h=l(25),v=a(h),g=l(26),b=a(g),E={top:0,right:0,bottom:0,left:0,width:0,height:0},w="data-lazyload-listened",y=[],N=[],x=!1;try{var _=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,_)}catch(e){}var k=!!x&&{capture:!1,passive:!0},C=function(e,t){var l=e.ref,a=void 0,n=void 0,r=void 0,s=void 0;try{var o=t.getBoundingClientRect();a=o.top,n=o.left,r=o.height,s=o.width}catch(e){a=E.top,n=E.left,r=E.height,s=E.width}var i=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,u=Math.max(a,0),m=Math.max(n,0),d=Math.min(i,a+r)-u,p=Math.min(c,n+s)-m,f=void 0,h=void 0,v=void 0,g=void 0;try{var b=l.getBoundingClientRect();f=b.top,h=b.left,v=b.height,g=b.width}catch(e){f=E.top,h=E.left,v=E.height,g=E.width}var w=f-u,y=h-m,N=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return w-N[0]<=d&&w+v+N[1]>=0&&y-N[0]<=p&&y+g+N[1]>=0},j=function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var l=void 0,a=void 0;try{var n=t.getBoundingClientRect();l=n.top,a=n.height}catch(e){l=E.top,a=E.height}var r=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return l-s[0]<=r&&l+a+s[1]>=0},T=function(e){var t=e.ref;if(t instanceof HTMLElement){var l=(0,f.default)(t);(e.props.overflow&&l!==t.ownerDocument&&l!==document&&l!==document.documentElement?C(e,l):j(e))?e.visible||(e.props.once&&N.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},A=function(){N.forEach(function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)}),N=[]},O=function(){for(var e=0;e<y.length;++e){var t=y[e];T(t)}A()},M=function(){for(var e=0;e<y.length;++e){var t=y[e];t.visible=!0,t.forceUpdate()}A()},P=void 0,D=null,L=function(e){return"string"==typeof e},V=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.visible=!1,l.setRef=l.setRef.bind(l),l}return s(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&L(t)&&(e=e.document.querySelector(t));var l=void 0!==this.props.debounce&&"throttle"===P||"debounce"===P&&void 0===this.props.debounce;if(l&&((0,d.off)(e,"scroll",D,k),(0,d.off)(window,"resize",D,k),D=null),D||(void 0!==this.props.debounce?(D=(0,v.default)(O,"number"==typeof this.props.debounce?this.props.debounce:300),P="debounce"):void 0!==this.props.throttle?(D=(0,b.default)(O,"number"==typeof this.props.throttle?this.props.throttle:300),P="throttle"):D=O),this.props.overflow){var a=(0,f.default)(this.ref);if(a&&"function"==typeof a.getAttribute){var n=+a.getAttribute(w)+1;1===n&&a.addEventListener("scroll",D,k),a.setAttribute(w,n)}}else if(0===y.length||l){var r=this.props,s=r.scroll,o=r.resize;s&&(0,d.on)(e,"scroll",D,k),o&&(0,d.on)(window,"resize",D,k)}y.push(this),T(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,f.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",D,k),e.removeAttribute(w)):e.setAttribute(w,t)}}var l=y.indexOf(this);-1!==l&&y.splice(l,1),0===y.length&&"undefined"!=typeof window&&((0,d.off)(window,"resize",D,k),(0,d.off)(window,"scroll",D,k))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){return c.default.createElement("span",{className:"lazyload-wrapper",ref:this.setRef},this.visible?this.props.children:this.props.placeholder?this.props.placeholder:c.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"}))}}]),t}(i.Component);V.propTypes={once:m.default.bool,height:m.default.oneOfType([m.default.number,m.default.string]),offset:m.default.oneOfType([m.default.number,m.default.arrayOf(m.default.number)]),overflow:m.default.bool,resize:m.default.bool,scroll:m.default.bool,children:m.default.node,throttle:m.default.oneOfType([m.default.number,m.default.bool]),debounce:m.default.oneOfType([m.default.number,m.default.bool]),placeholder:m.default.node,scrollContainer:m.default.oneOfType([m.default.string,m.default.object]),unmountIfInvisible:m.default.bool},V.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(l){function a(){n(this,a);var e=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+z(t),e}return s(a,l),o(a,[{key:"render",value:function(){return c.default.createElement(V,e,c.default.createElement(t,this.props))}}]),a}(i.Component)}};t.lazyload=B,t.default=V,t.forceCheck=O,t.forceVisible=M},23:function(e,t,l){"use strict";function a(e,t,l,a){a=a||!1,e.addEventListener?e.addEventListener(t,l,a):e.attachEvent&&e.attachEvent("on"+t,function(t){l.call(e,t||window.event)})}function n(e,t,l,a){a=a||!1,e.removeEventListener?e.removeEventListener(t,l,a):e.detachEvent&&e.detachEvent("on"+t,l)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=a,t.off=n},24:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,l=/(scroll|auto)/,a=e;a;){if(!a.parentNode)return e.ownerDocument||document.documentElement;var n=window.getComputedStyle(a),r=n.position,s=n.overflow,o=n["overflow-x"],i=n["overflow-y"];if("static"===r&&t)a=a.parentNode;else{if(l.test(s)&&l.test(o)&&l.test(i))return a;a=a.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},25:function(e,t,l){"use strict";function a(e,t,l){var a=void 0,n=void 0,r=void 0,s=void 0,o=void 0,i=function i(){var c=+new Date-s;c<t&&c>=0?a=setTimeout(i,t-c):(a=null,l||(o=e.apply(r,n),a||(r=null,n=null)))};return function(){r=this,n=arguments,s=+new Date;var c=l&&!a;return a||(a=setTimeout(i,t)),c&&(o=e.apply(r,n),r=null,n=null),o}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},26:function(e,t,l){"use strict";function a(e,t,l){t||(t=250);var a,n;return function(){var r=l||this,s=+new Date,o=arguments;a&&s<a+t?(clearTimeout(n),n=setTimeout(function(){a=s,e.apply(r,o)},t)):(a=s,e.apply(r,o))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},375:function(e,t,l){e.exports=l(376)},376:function(e,t,l){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.t;return s.default.createElement(m.default,null,s.default.createElement(i.default,null,s.default.createElement("title",{key:"title"},t("common:meta.meetup.title",{defaultValue:"The First Verge Meetup in Amsterdam 9th of June, 2018 - VergeCurrency.com"})),s.default.createElement("meta",{key:"description",name:"description",content:t("common:meta.meetup.description",{defaultValue:"The meet-up will take place on the 9th of June in Amsterdam, the capital of the Netherlands, and will take place on a boat, which we will cruise on through the Amsterdam canals."})}),s.default.createElement("script",{src:"https://www.universe.com/embed2.js","data-state":""})),s.default.createElement("div",{className:"meetup pt-large pb"},s.default.createElement("div",{className:"ribbon ribbon--meetup18"},s.default.createElement("div",{className:"ribbon-img"}),s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"row center-xs"},s.default.createElement("div",{className:"col-xs-10 col-sm-9 text-center"},s.default.createElement("div",{className:"ribbon-txt"},s.default.createElement("h1",null,"Join The First Verge Meetup in ",s.default.createElement("span",null,"Amsterdam")," June 9th, 2018"),s.default.createElement("p",null,"We are really pleased to announce that we will be",s.default.createElement("br",{className:"hidden-xs"}),"holding the very first Verge meet-up ever!")))))),s.default.createElement("div",{className:"container"},s.default.createElement(f.Sponsors,null),s.default.createElement("div",{className:"row center-xs middle-xs pt"},s.default.createElement("div",{className:"col-xs-10 pb bb"},s.default.createElement("div",{className:"meetup__counters"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-xs-6 col-sm-3 pb"},s.default.createElement("div",{className:"meetup__counter-number"},"600"),s.default.createElement("div",{className:"meetup__counter-text"},"tickets available")),s.default.createElement("div",{className:"col-xs-6 col-sm-3 pb"},s.default.createElement("div",{className:"meetup__counter-number"},"1st"),s.default.createElement("div",{className:"meetup__counter-text"},"Verge Meetup")),s.default.createElement("div",{className:"col-xs-6 col-sm-3 pb"},s.default.createElement("div",{className:"meetup__counter-number"},"9th"),s.default.createElement("div",{className:"meetup__counter-text"},"June 2018")),s.default.createElement("div",{className:"col-xs-6 col-sm-3 pb"},s.default.createElement("div",{className:"meetup__counter-number"},"10+"),s.default.createElement("div",{className:"meetup__counter-text"},"Core members")))))),s.default.createElement("div",{className:"container pb-large bb"},s.default.createElement("div",{className:"themed-container__transparent themed-container__transparent--meetup pb-xs-0"},s.default.createElement("div",{className:"row center-xs"},s.default.createElement("div",{className:"col-xs-10 col-sm-6 col-md-5 start-sm"},s.default.createElement("h2",null,"Holding the very first Verge ",s.default.createElement("br",{className:"visible-md"})," meet-up ever."),s.default.createElement("p",{className:"text--larger"},"The meet-up will take place on the 9th of June in Amsterdam, the capital of the Netherlands, and will take place on a boat, which we will cruise on through the Amsterdam canals."),s.default.createElement("p",null,"We will have several speakers and special guests during this event who will provide information about the Verge Currency project, blockchain development in general, as well as touch on topics related to other developments in the crypto space.")),s.default.createElement("a",{href:"https://www.docks.nl",target:"_blank",rel:"noreferrer noopener",className:"col-xs-10 col-sm-4 col-md-5"},s.default.createElement("span",{className:"visible-xs"},"Visit DOCKS")))))),s.default.createElement("div",{className:"container meetup--media"},s.default.createElement("div",{className:"row center-xs middle-xs pt pb"},s.default.createElement("div",{className:"col-xs-10 col-sm-8 col-md-5"},s.default.createElement("h2",null,"Verge Meetup on a ",s.default.createElement("span",null,"ship"),".",s.default.createElement("br",{className:"hidden-xs"}),"Location and place."),s.default.createElement("p",{className:"pb-small"},"The meetup will take place on a boat, which we will cruise on through the Amsterdam canals."),s.default.createElement("img",{src:"/static/img/meetup-2018/squiggly.png",className:"img-responsive",alt:"responsive"}))),s.default.createElement("div",{className:"row center-xs middle-xs pt"},s.default.createElement("div",{className:"col-xs-10"},s.default.createElement("div",{className:"row center-xs"},s.default.createElement("div",{className:"col-xs-12 col-sm-4 col--fullheight"},s.default.createElement("img",{src:"/static/img/meetup-2018/pics/pic1.png",className:"img-responsive",alt:"responsive"})),s.default.createElement("div",{className:"col-xs-12 col-sm-4 col--fullheight"},s.default.createElement("img",{src:"/static/img/meetup-2018/pics/pic2.png",className:"img-responsive",alt:"responsive"}),s.default.createElement("img",{src:"/static/img/meetup-2018/pics/pic3.png",className:"img-responsive",alt:"responsive"})),s.default.createElement("div",{className:"col-xs-12 col-sm-4 col--fullheight"},s.default.createElement("img",{src:"/static/img/meetup-2018/pics/pic4.png",className:"img-responsive",alt:"responsive"}),s.default.createElement("img",{src:"/static/img/meetup-2018/pics/pic5.png",className:"img-responsive",alt:"responsive"}))))),s.default.createElement("div",{className:"row center-xs middle-xs pb"},s.default.createElement("div",{className:"col-xs-10"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-xs-12"},s.default.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.505135614645!2d4.902052188500803!3d52.37939260409592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b646f89b21%3A0xb1f631c99dabe1b5!2sDe+Ruijterkade%2C+Amsterdam!5e0!3m2!1snl!2snl!4v1525194929869",width:"100%",height:"400",frameBorder:"0",title:"unique title"}))),s.default.createElement("div",{className:"row top-xs middle-sm pt"},s.default.createElement("div",{className:"col-xs-6 col-sm-3 start-xs"},s.default.createElement("h3",null,"Address"),s.default.createElement("p",null,"De Ruijterkade 14",s.default.createElement("br",null),"1011 AA Amsterdam")),s.default.createElement("div",{className:"col-xs-6 col-sm-6 start-xs"},s.default.createElement("h3",null,"Ship departure"),s.default.createElement("p",null,"Arrival time between 14:45 and 15:15",s.default.createElement("br",null),"The boat departs at 15:30 (Not a minute later).")),s.default.createElement("div",{className:"col-xs-12 col-sm-3"},s.default.createElement("a",{className:"unii-listing-button unii-custom unii-medium Light btn btn-primary px-large",href:"https://www.universe.com/events/verge-meet-up-tickets-amsterdam-NTL872?buttonColor=#1db6dc&buttonText=Buy Tickets Here",style:{backgroundColor:"#1db6dc"}},"Buy Tickets Here")))))),s.default.createElement("div",{className:"container pt pb"},s.default.createElement("div",{className:"row center-xs"},s.default.createElement("div",{className:"col-xs-10"},s.default.createElement("div",{className:"themed-container__dark themed-container__dark--meetup"},s.default.createElement("div",{className:"row center-xs"},s.default.createElement("div",{className:"col-xs-10 col-sm-8 start-sm"},s.default.createElement("h3",null,"The Verge meet-up is not only informative, but is equally a ",s.default.createElement("span",null,"networking opportunity")," to socialize and meet with other like-minded individuals."),s.default.createElement("h3",null,"We will finish the evening with a ",s.default.createElement("span",null,"big party"),", where our Core team and a number of special guests will be present to ",s.default.createElement("span",null,"celebrate this day with everyone"),"."))))))),s.default.createElement("div",{className:"container meetup--programme pt"},s.default.createElement("div",{className:"row center-xs pt"},s.default.createElement("div",{className:"col-xs-10 col-sm-4 col-sm-offset-1 start-sm pb-xs"},s.default.createElement("h2",null,"Program ",s.default.createElement("span",null,"Outline")),s.default.createElement("p",null,"Arrival time between 14:45 and 15:15",s.default.createElement("br",null),"The boat departs at 15:30 (Not a minute later).",s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("b",null,"Afternoon program:"),s.default.createElement("br",null),"Board between 14.45 and 15.15 until 19:30  (includes a dinner buffet)",s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("b",null,"Evening program:"),s.default.createElement("br",null),"Board between 19.15 and 19.45 until 00:00"),s.default.createElement("p",{className:"text--smaller"},"There are 3 kinds of tickets available for purchase: If your ticket includes the afternoon program, you will have access to a dinner buffet and unlimited soft drinks and/or other non-alcoholic beverages.",s.default.createElement("br",null),s.default.createElement("br",null),"The evening program will have snacks available which are also included in the ticket price.")),s.default.createElement("div",{className:"col-xs-10 col-sm-4 col-sm-offset-1 start-sm"},s.default.createElement("h2",null,"Practical Information"),s.default.createElement("p",null,"Our meet-up location is next to the ",s.default.createElement("b",null,"Central Amsterdam station"),".",s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("b",null,"Arrival:"),s.default.createElement("br",null),"The boat will depart 15:30. Come 15-30 min. BEFORE departure.",s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("b",null,"Dress Code:"),s.default.createElement("br",null),"Nice clothing!"))))),s.default.createElement("div",{className:"meetup--bottom18"}))}Object.defineProperty(t,"__esModule",{value:!0});var r=l(0),s=a(r),o=l(8),i=a(o),c=l(7),u=l(2),m=a(u),d=l(9),p=a(d),f=l(377),h=(0,c.translate)(["meetup-2018","common"],{i18n:p.default,wait:e.browser})(n);t.default=h}).call(t,l(6))},377:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Sponsors=void 0;var n=l(0),r=a(n),s=l(1),o=(a(s),l(19)),i=a(o),c=l(378).sponsors;t.Sponsors=function(){var e=c.map(function(e){return r.default.createElement("div",{className:"col-xs-4 col-sm-3 center-xs pb-xs sponsors__single",key:e.title,role:"presentation"},r.default.createElement("a",{href:e.url,target:"_blank",rel:"noopener"},r.default.createElement(i.default,{height:e.height},r.default.createElement("img",{className:"img-responsive sponsors__logo",src:e.img,style:{maxHeight:e.height},alt:e.title}))))});return r.default.createElement("div",{className:"row center-xs sponsors"},r.default.createElement("div",{className:"col-xs-10 pt-small pb-small bb"},r.default.createElement("div",{className:"row start-xs start-xs pb"},r.default.createElement("div",{className:"col-xs-12 col-sm-3 col-lg-2 end-sm"},r.default.createElement("p",{style:{textAlign:"left",padding:"10px 0"}},"Main sponsor")),r.default.createElement("div",{className:"col-xs"},r.default.createElement("div",{className:"row start-xs middle-xs"},r.default.createElement("div",{className:"col-xs-4 col-sm-3 center-xs pb-xs sponsors__single",role:"presentation"},r.default.createElement("a",{href:"https://www.blacktowerfm.com/locations/the-netherlands",target:"_blank",rel:"noopener"},r.default.createElement(i.default,{height:"100"},r.default.createElement("img",{className:"img-responsive sponsors__logo",src:"../static/img/meetup-2018/sponsors/blacktower.png",style:{maxHeight:"100px"},alt:"Blacktower financial management group"}))))))),r.default.createElement("div",{className:"row start-xs start-xs"},r.default.createElement("div",{className:"col-xs-12 col-sm-3 col-lg-2 end-sm"},r.default.createElement("p",{style:{textAlign:"left",padding:"20px 0"}},"Event sponsors")),r.default.createElement("div",{className:"col-xs"},r.default.createElement("div",{className:"row center-xs middle-xs"},e)))))}},378:function(e,t){e.exports={sponsors:[{img:"../static/img/meetup-2018/sponsors/Subway.png",title:"Subway",height:50,url:"http://www.subway.com/nl-NL"},{img:"../static/img/meetup-2018/sponsors/TokenPay.png",title:"TokenPay",height:35,url:"https://www.tokenpay.com/"},{img:"../static/img/meetup-2018/sponsors/litebit.png",title:"Litebit",height:35,url:"https://www.litebit.eu"},{img:"../static/img/meetup-2018/sponsors/CryptoDen.jpg",title:"CryptoDen",height:35,url:"https://discord.gg/5trYv7T"},{img:"../static/img/meetup-2018/sponsors/HeightCare.png",title:"TokenPay",height:30,url:"http://www.heightcare.nl/"},{img:"../static/img/meetup-2018/sponsors/David-Gokhshtein.jpg",title:"David Gokhshtein",height:60,url:"http://www.davidgokhshtein.com"},{img:"../static/img/meetup-2018/sponsors/Crypto-Whale-Clothing.png",title:"Crypto Whale Clothing",height:60,url:"https://cryptowhaleclothing.com"},{img:"../static/img/meetup-2018/sponsors/Autokey.jpg",title:"Autokey",height:35,url:"http://www.skybrake.ie"},{img:"../static/img/meetup-2018/sponsors/Coinbaas.jpg",title:"Coinbaas",height:35,url:"https://t.me/joinchat/GOzXO0XX4kcFYB_DCn7u0g"},{img:"../static/img/meetup-2018/sponsors/xwise.png",title:"Xwise",height:35,url:"https://www.xwise.eu"},{img:"../static/img/meetup-2018/sponsors/mycro.jpg",title:"Mycrojobs",height:50,url:"https://www.mycrojobs.io"},{img:"../static/img/meetup-2018/sponsors/bunker501.png",title:"Bunker501",height:35,url:"https://bunker501.nl/"},{img:"../static/img/meetup-2018/sponsors/cryptosuite.jpg",title:"Crypto Suite",height:50,url:"http://bit.ly/TheCryptoSuite"},{img:"../static/img/meetup-2018/sponsors/thepack.png",title:"The Pack",height:50,url:"https://the-pack.nl/"},{img:"../static/img/meetup-2018/sponsors/financial-services.jpg",title:"Financial Services",height:50,url:"http://stta.io"},{img:"../static/img/meetup-2018/sponsors/crypto_investors.jpg",title:"Dutch Crypto Investors",height:80,url:"https://dutchcryptoinvestors.com"},{img:"../static/img/meetup-2018/sponsors/greenpearl.jpeg",title:"Green Pearl",height:60,url:"http://greenpearl.nl"},{img:"../static/img/meetup-2018/sponsors/stroopwafelhuisje.jpg",title:"t stroopwafelhuisje",height:60,url:"https://tstroopwafelhuisje.com"},{img:"../static/img/meetup-2018/sponsors/xvgwhale.jpg",title:"XVG Whale",height:60,url:"#"},{img:"../static/img/meetup-2018/sponsors/cbdolie.jpg",title:"De wonderen van CBD olie",height:60,url:"https://dewonderenvancbdolie.nl/"}]}}},[375]);
            return { page: comp.default }
          })
        