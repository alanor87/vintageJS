/*
 Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 @author Robert Fleischmann
 @version 1.1.1
*/
(function(d,g,a,h){d.fn.vintage=function(h,f){var q=function(d,f,q){if(!1===d instanceof HTMLImageElement)throw"The element (1st parameter) must be an instance of HTMLImageElement";var h,r,k,v,u,l,m,e,x,t=new Image,w=new Image,y=a.createElement("canvas"),n=y.getContext("2d"),s={onStart:function(){},onStop:function(){},onError:function(){},mime:"image/jpeg"},A={curves:!1,screen:!1,desaturate:!1,vignette:!1,lighten:!1,noise:!1,viewFinder:!1,sepia:!1,brightness:!1,contrast:!1};t.onerror=s.onError;t.onload=
function(){l=y.width=t.width;m=y.height=t.height;h()};w.onerror=s.onError;w.onload=function(){n.clearRect(0,0,l,m);n.drawImage(w,0,0,l,m);(g.vjsImageCache||(g.vjsImageCache={}))[x]=n.getImageData(0,0,l,m).data;h()};r=function(a){s.onStart();e={};for(var b in A)e[b]=a[b]||A[b];v=[];e.viewFinder&&v.push(e.viewFinder);t.src==u?h():t.src=u};h=function(){if(0===v.length)return k();var a=v.pop();x=[l,m,a].join("-");if(g.vjsImageCache&&g.vjsImageCache[x])return h();w.src=a};k=function(){var a,b;n.clearRect(0,
0,l,m);n.drawImage(t,0,0,l,m);if(e.vignette||e.lighten)a=Math.sqrt(Math.pow(l/2,2)+Math.pow(m/2,2));e.vignette&&(n.globalCompositeOperation="source-over",b=n.createRadialGradient(l/2,m/2,0,l/2,m/2,a),b.addColorStop(0,"rgba(0,0,0,0)"),b.addColorStop(0.5,"rgba(0,0,0,0)"),b.addColorStop(1,["rgba(0,0,0,",e.vignette,")"].join("")),n.fillStyle=b,n.fillRect(0,0,l,m));e.lighten&&(n.globalCompositeOperation="lighter",b=n.createRadialGradient(l/2,m/2,0,l/2,m/2,a),b.addColorStop(0,["rgba(255,255,255,",e.lighten,
")"].join("")),b.addColorStop(0.5,"rgba(255,255,255,0)"),b.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=b,n.fillRect(0,0,l,m));a=n.getImageData(0,0,l,m);var f,h,q,c=a.data,k,r;e.contrast&&(r=259*(e.contrast+255)/(255*(259-e.contrast)));e.viewFinder&&(k=g.vjsImageCache[[l,m,e.viewFinder].join("-")]);for(var p=l*m;0<=p;--p){b=p<<2;e.curves&&(c[b]=e.curves.r[c[b]],c[b+1]=e.curves.g[c[b+1]],c[b+2]=e.curves.b[c[b+2]]);e.contrast&&(c[b]=r*(c[b]-128)+128,c[b+1]=r*(c[b+1]-128)+128,c[b+2]=r*(c[b+2]-128)+128);
e.brightness&&(c[b]+=e.brightness,c[b+1]+=e.brightness,c[b+2]+=e.brightness);e.screen&&(c[b]=255-(255-c[b])*(255-e.screen.r*e.screen.a)/255,c[b+1]=255-(255-c[b+1])*(255-e.screen.g*e.screen.a)/255,c[b+2]=255-(255-c[b+2])*(255-e.screen.b*e.screen.a)/255);e.noise&&(f=e.noise-Math.random()*e.noise/2,c[b]+=f,c[b+1]+=f,c[b+2]+=f);e.viewFinder&&(c[b]=c[b]*k[b]/255,c[b+1]=c[b+1]*k[b+1]/255,c[b+2]=c[b+2]*k[b+2]/255);e.sepia&&(f=c[b],h=c[b+1],q=c[b+2],c[b]=0.393*f+0.769*h+0.189*q,c[b+1]=0.349*f+0.686*h+0.168*
q,c[b+2]=0.272*f+0.534*h+0.131*q);e.desaturate&&(f=(c[b]+c[b+1]+c[b+2])/3,c[b]+=(f-c[b])*e.desaturate,c[b+1]+=(f-c[b+1])*e.desaturate,c[b+2]+=(f-c[b+2])*e.desaturate);for(f=2;0<=f;--f)c[b+f]=~~(255<c[b+f]?255:0>c[b+f]?0:c[b+f])}n.putImageData(a,0,0);d.src=n.canvas.toDataURL(s.mime);s.onStop()};u=d.src;f=f||{};for(var z in s)s[z]=f[z]||s[z];q&&r(q);return{apply:function(){u=d.src},reset:function(){d.src=u},vintage:r}};return this.each(function(){d.data(this,"vintageJS")||d.data(this,"vintageJS",new q(this,
h,f))})}})(jQuery,window,document);
var vintagePresets={vintage:{contrast:15,curves:function(){for(var d=function(a){return-12*Math.sin(2*a*Math.PI/255)+a},g=function(a){return-0.2*Math.pow(255*a,0.5)*Math.sin(Math.PI*(-1.95E-5*Math.pow(a,2)+0.0125*a))+a},a=function(a){return-0.001045244139166791*Math.pow(a,2)+1.2665372554875318*a},h=function(a){return 0.57254902*a+53},k={r:[],g:[],b:[]},f=0;255>=f;++f)k.r[f]=g(d(f)),k.g[f]=a(d(f)),k.b[f]=h(d(f));return k}(),screen:{r:227,g:12,b:169,a:0.15},vignette:0.7,viewFinder:"assets/images/viewfinder.jpg"},
sepia:{contrast:12,curves:function(){for(var d=function(a){return-12*Math.sin(2*a*Math.PI/255)+a},g={r:[],g:[],b:[]},a=0;255>=a;++a)g.r[a]=d(a),g.g[a]=d(a),g.b[a]=d(a);return g}(),sepia:!0},greenish:{curves:function(){for(var d=function(a){return-12*Math.sin(2*a*Math.PI/255)+a},g={r:[],g:[],b:[]},a=0;255>=a;++a)g.r[a]=d(a),g.g[a]=d(a),g.b[a]=d(a);return g}(),vignette:0.6,lighten:0.1,screen:{r:255,g:255,b:0,a:0.15}},reddish:{curves:function(){for(var d=function(a){return-12*Math.sin(2*a*Math.PI/255)+
a},g={r:[],g:[],b:[]},a=0;255>=a;++a)g.r[a]=d(a),g.g[a]=d(a),g.b[a]=d(a);return g}(),vignette:0.6,lighten:0.1,screen:{r:255,g:0,b:0,a:0.15}},random:function(){var d=[!1,"assets/images/viewfinder.jpg"],g=30-Math.floor(60*Math.random()),a=30-Math.floor(60*Math.random()),h=function(){if(0.5<=Math.random())return!1;for(var a=5<=Math.random(),d=5<=Math.random()?d:function(a){return a},g=a?g:function(a){return a},h=a?h:function(a){return a},k=a?k:function(a){return a},a={r:[],g:[],b:[]},p=0;255>=p;++p)a.r[p]=
g(d(p)),a.g[p]=h(d(p)),a.b[p]=k(d(p));return a}(),k;k=0.5<=Math.random()?!1:{r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random()),a:0.4*Math.random()};return{contrast:g,brightness:a,curves:h,screen:k,desaturate:Math.random(),vignette:Math.random(),lighten:0.3*Math.random(),noise:Math.floor(50*Math.random()),viewFinder:d[Math.floor(Math.random()*d.length)],sepia:0.5<=Math.random()}}},Slideshow=function(d){var g=d.find("li"),a=0,h=g.length-1,k=function(d){g.eq(d?
0>a-1?h:--a:a+1>h?0:++a).trigger("click")};d.on("click","li",function(){var f=$(this);f.hasClass("active")||(f.siblings(".active").addBack().toggleClass("active"),a=f.index(),d.trigger("slideshow:change",[f]))}).on("click",".js_next",function(){k()}).on("click",".js_prev",function(){k(!0)});return{getCurrentSlide:function(){return g.eq(a)}}},active="active",click="click",disabled="disabled",$slideshow=$(".js_slideshow"),$controls=$(".js_controls"),$select=$controls.find("select"),$reload=$controls.find(".js_reload"),
slideshow=new Slideshow($slideshow);$(".js_toggle").on(click,"dt",function(){$(this).addClass(active).siblings("dt").removeClass(active)});$slideshow.find("img").vintage();$.each(vintagePresets,function(d,g){$select.append(['<option value="',d,'">',[d.charAt(0).toUpperCase(),d.substr(1)].join(""),"</option>"].join(""))});
$controls.on("change","select",function(){var d=this.value,g=slideshow.getCurrentSlide(),a=g.find("img").data("vintageJS");d in vintagePresets?(g.data("currEffect",d),"random"===d?($reload.removeClass(disabled),a.vintage(vintagePresets[d]())):($reload.addClass(disabled),a.vintage(vintagePresets[d]))):(g.data("currEffect",!1),a.reset())}).on(click,".js_reload",function(){$select.trigger("change")});
$slideshow.on("slideshow:change",function(d,g){var a=g.data("currEffect");$select.val(a||"");$reload.toggleClass(disabled,"random"!==a)});$.getScript([/^http:/.test(document.location)?"http":"https","://platform.twitter.com/widgets.js"].join(""));$(".ghbuttons .download").after('<iframe src="http://ghbtns.com/github-btn.html?user=rendro&amp;repo=vintageJS&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe><iframe src="http://ghbtns.com/github-btn.html?user=rendro&amp;repo=vintageJS&amp;type=fork&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>');
