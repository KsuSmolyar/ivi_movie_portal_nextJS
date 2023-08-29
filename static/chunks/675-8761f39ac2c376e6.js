(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,a=i(2648).Z,l=i(1598).Z,s=i(7273).Z,c=l(i(7294)),u=a(i(3121)),d=i(2675),f=i(139),g=i(8730);i(7238);var h=a(i(9824)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function b(e,t,i,n,o,a,l){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode){if("blur"===i&&a(!0),null==n?void 0:n.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var l=!1,s=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return s},persist:function(){},preventDefault:function(){l=!0,t.preventDefault()},stopPropagation:function(){s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}}))}var y=c.forwardRef(function(e,t){var i=e.imgAttributes,n=e.heightInt,o=e.widthInt,a=(e.qualityInt,e.className),l=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.fill,g=e.placeholder,h=e.loading,m=e.srcString,p=(e.config,e.unoptimized),v=(e.loader,e.onLoadRef),y=e.onLoadingCompleteRef,w=e.setBlurComplete,S=e.setShowAltText,z=(e.onLoad,e.onError),C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},C,i,{width:o,height:n,decoding:"async","data-nimg":f?"fill":"1",className:a,loading:h,style:r({},l,u),ref:c.useCallback(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&b(e,m,g,v,y,w,p))},[m,g,v,y,w,z,p,t]),onLoad:function(e){b(e.currentTarget,m,g,v,y,w,p)},onError:function(e){S(!0),"blur"===g&&w(!0),z&&z(e)}})))}),w=c.forwardRef(function(e,t){var i,a,l,b=e.src,w=e.sizes,S=e.unoptimized,z=void 0!==S&&S,C=e.priority,E=void 0!==C&&C,j=e.loading,_=e.className,R=e.quality,I=e.width,x=e.height,L=e.fill,k=e.style,P=e.onLoad,O=e.onLoadingComplete,A=e.placeholder,N=void 0===A?"empty":A,q=e.blurDataURL,B=e.layout,D=e.objectFit,M=e.objectPosition,W=(e.lazyBoundary,e.lazyRoot,s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),F=c.useContext(g.ImageConfigContext),T=c.useMemo(function(){var e=m||F||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return r({},e,{allSizes:t,deviceSizes:i})},[F]),U=W,Z=U.loader||h.default;if(delete U.loader,"__next_img_default"in Z){if("custom"===T.loader)throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var G=Z;Z=function(e){return e.config,G(s(e,["config"]))}}if(B){"fill"===B&&(L=!0);var H={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[B];H&&(k=r({},k,H));var V={responsive:"100vw",fill:"100vw"}[B];V&&!w&&(w=V)}var J="",$=v(I),K=v(x);if("object"==typeof(i=b)&&(p(i)||void 0!==i.src)){var Q=p(b)?b.default:b;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(!Q.height||!Q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)));if(a=Q.blurWidth,l=Q.blurHeight,q=q||Q.blurDataURL,J=Q.src,!L){if($||K){if($&&!K){var X=$/Q.width;K=Math.round(Q.height*X)}else if(!$&&K){var Y=K/Q.height;$=Math.round(Q.width*Y)}}else $=Q.width,K=Q.height}}var ee=!E&&("lazy"===j||void 0===j);((b="string"==typeof b?b:J).startsWith("data:")||b.startsWith("blob:"))&&(z=!0,ee=!1),T.unoptimized&&(z=!0);var et=n(c.useState(!1),2),ei=et[0],en=et[1],eo=n(c.useState(!1),2),er=eo[0],ea=eo[1],el=v(R),es=Object.assign(L?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:M}:{},er?{}:{color:"transparent"},k),ec="blur"===N&&q&&!ei?{backgroundSize:es.objectFit||"cover",backgroundPosition:es.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:$,heightInt:K,blurWidth:a,blurHeight:l,blurDataURL:q}),'")')}:{},eu=function(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.width,a=e.quality,l=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var c=function(e,t,i){var n=e.deviceSizes,r=e.allSizes;if(i){for(var a=/(^|\s)(1?\d?\d)vw/g,l=[];s=a.exec(i);s)l.push(parseInt(s[2]));if(l.length){var s,c,u=.01*(c=Math).min.apply(c,o(l));return{widths:r.filter(function(e){return e>=n[0]*u}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return r.find(function(t){return t>=e})||r[r.length-1]}))),kind:"x"}}(t,r,l),u=c.widths,d=c.kind,f=u.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:u.map(function(e,n){return"".concat(s({config:t,src:i,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)}).join(", "),src:s({config:t,src:i,quality:a,width:u[f]})}}({config:T,src:b,unoptimized:z,width:$,quality:el,sizes:w,loader:Z}),ed=b,ef={imageSrcSet:eu.srcSet,imageSizes:eu.sizes,crossOrigin:U.crossOrigin},eg=c.useRef(P);c.useEffect(function(){eg.current=P},[P]);var eh=c.useRef(O);c.useEffect(function(){eh.current=O},[O]);var em=r({isLazy:ee,imgAttributes:eu,heightInt:K,widthInt:$,qualityInt:el,className:_,imgStyle:es,blurStyle:ec,loading:j,config:T,fill:L,unoptimized:z,placeholder:N,loader:Z,srcString:ed,onLoadRef:eg,onLoadingCompleteRef:eh,setBlurComplete:en,setShowAltText:ea},U);return c.default.createElement(c.default.Fragment,null,c.default.createElement(y,Object.assign({},em,{ref:t})),E?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+eu.src+eu.srcSet+eu.sizes,rel:"preload",as:"image",href:eu.srcSet?void 0:eu.src},ef))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,i=e.heightInt,n=e.blurWidth,o=e.blurHeight,r=e.blurDataURL,a=n||t,l=o||i,s=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},5675:function(e,t,i){e.exports=i(9749)}}]);