
!function(m,y,e,o){var p="lazyLoadXT",w="lazied",z="load error",t="lazy-hidden",C=e.documentElement||e.body,b={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:y.onscroll===o||!!y.operamini||!C.getBoundingClientRect,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"lazyloadall",oninit:{removeClass:"lazy"},onshow:{addClass:t},onload:{removeClass:t,addClass:"lazy-loaded"},onerror:{removeClass:t},checkDuplicates:!0},n={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},a=m(y),d=m.extend,E=m.data||function(e,t){return m(e).data(t)},T=[],L=0,r=0;function c(e,t){return e[t]===o?b[t]:e[t]}function I(){var e=y.pageYOffset;return e===o?C.scrollTop:e}function X(e,t){var o=b["on"+e];o&&("function"==typeof o?o.call(t[0]):(o.addClass&&t.addClass(o.addClass),o.removeClass&&t.removeClass(o.removeClass))),t.trigger("lazy"+e,[t]),u()}function B(e){X(e.type,m(this).off(z,B))}function i(e){if(T.length){e=e||b.forceLoad,L=1/0;for(var t=I(),o=y.innerHeight||C.clientHeight,n=y.innerWidth||C.clientWidth,a=0,r=T.length;a<r;a++){var i,l,s,d,c,u,f=T[a],h=f[0],v=f[p],A=!1,g=e||E(h,w)<0;m.contains(C,h)?(e||!v.visibleOnly||h.offsetWidth||h.offsetHeight)&&(g||(i=h.getBoundingClientRect(),l=v.edgeX,s=v.edgeY,g=(d=i.top+t-s-o)<=t&&i.bottom>-s&&i.left<=n+l&&i.right>-l),g?(f.on(z,B),X("show",f),(u="function"==typeof(c=v.srcAttr)?c(f):h.getAttribute(c))&&(h.src=u),A=!0):d<L&&(L=d)):A=!0,A&&(T.splice(a--,1),r--)}r||X("complete",m(C))}}function l(){1<r?(r=1,i(),setTimeout(l,b.throttle)):r=0}function u(e){T.length&&(e&&"scroll"===e.type&&e.currentTarget===y&&L>=I()||(r||setTimeout(l,0),r=2))}function s(){a.lazyLoadXT()}function f(){i(!0)}m[p]=d(b,n,m[p]),m.fn[p]=function(a){var e,r=c(a=a||{},"blankImage"),i=c(a,"checkDuplicates"),t=c(a,"scrollContainer"),l=c(a,"show"),s={};for(e in m(t).on("scroll",u),n)s[e]=c(a,e);return this.each(function(e,t){if(t===y)m(b.selector).lazyLoadXT(a);else{var o=i&&E(t,w),n=m(t).data(w,l?-1:1);if(o)return void u();r&&"IMG"===t.tagName&&!t.src&&(t.src=r),n[p]=d({},s),X("init",n),T.push(n),u()}})},m(e).ready(function(){X("start",a),a.on(b.updateEvent,u).on(b.forceEvent,f),m(e).on(b.updateEvent,u),b.autoInit&&(a.on(b.loadEvent,s),s())})}(window.jQuery||window.Zepto||window.$,window,document),function(l){var o=l.lazyLoadXT;o.selector+=",video,iframe[data-src],embed[data-src]",o.videoPoster="data-poster",l(document).on("lazyshow","video",function(e,t){var a=t.lazyLoadXT.srcAttr,r="function"==typeof a,i=!1;t.attr("poster",t.attr(o.videoPoster)),t.children("source,track").each(function(e,t){var o=l(t),n=r?a(o):o.attr(a);n&&(o.attr("src",n),i=!0)}),i&&void 0!==l(this).attr("preload")&&"none"!=l(this).attr("preload")&&this.load(),l(this).removeClass("lazy-hidden")}),l(document).on("lazyshow","embed",function(e,t){l(this).removeClass("lazy-hidden")})}(window.jQuery||window.Zepto||window.$);