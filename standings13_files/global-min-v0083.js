var ua=navigator.userAgent;var IE=(document.all)?1:0;var DOM=(document.getElementById)?1:0;var MAC=((navigator.appVersion.indexOf("PPC")>0)||(navigator.appVersion.indexOf("Mac")>0))?1:0;var OPERA=(ua.indexOf("Opera")>0)?1:0;var SAF=(navigator.appVersion.indexOf("Safari")>0)?1:0;var iPhone=(ua.indexOf("iPhone")>0)?1:0;var isAndroid=(ua.indexOf("android")>0)?1:0;function getEl(a){return document.all?document.all[a]:document.getElementById(a)}function getElementsByClassName(b,e){var a=[];var g=new RegExp("\\b"+b+"\\b");var f=(e)?e.getElementsByTagName("*"):document.getElementsByTagName("*");for(var d=0;d<f.length;d++){var c=f[d].className;if(g.test(c)){a.push(f[d])}}return a}function setCookie(b,c,a){if(!a){a=new Date()}document.cookie=b+"="+c+"; expires="+a.toGMTString()+";domain=.cbssports.com; path=/"}function readCookie(b){if(document.cookie==""){return false}else{var d,c;var a=document.cookie;b=b+"=";d=a.indexOf(b);if(d!=-1){d+=b.length;c=a.indexOf(";",d);if(c==-1){c=a.length}return unescape(a.substring(d,c))}else{return false}}}function killCookie(a,c,b){var d=readCookie(a);if(d){document.cookie=a+"="+d+"; expires=Fri, 13-Apr-1970 00:00:00 GMT"+((c)?";path="+c:"")+((b)?";domain="+b:"")}}function getValue(b,a){cookieValue=readCookie(b);findString=a;if(cookieValue){namePos=cookieValue.indexOf(findString,0);if(namePos==-1){return false}valueStart=(cookieValue.indexOf("&",namePos+1)+1);valueEnd=cookieValue.indexOf("&",valueStart+1);if(valueEnd==-1){valueEnd=cookieValue.length}valueIs=cookieValue.substring(valueStart,valueEnd);if(namePos!=null){return valueIs}}else{return false}}function mTrack(g,k,l,m){if(arguments.length==2){var l="mediaTrack"}var d=(m)?";expires="+m:"";var c=true;if(!readCookie(l)){newCook=g+"|"+1;document.cookie=(l+"="+newCook+";domain=.cbssports.com;path=/"+d)}else{if(readCookie(l)){oldCook=readCookie(l);var f=oldCook.indexOf(g);if(f==-1){newCook=oldCook+"|"+g+"|"+1;document.cookie=(l+"="+newCook+";domain=.cbssports.com;path=/"+d)}else{var h=oldCook.split("|");var a;var b;for(i=0;i<h.length;i+=2){b=i+1;if(h[i]==g){a=parseInt(h[b])+1;h[b]=a;if(a>k){c=false}}}newCook="";for(var e=0;e<h.length-1;e+=2){newCook+=h[e]+"|"+h[e+1];if(e+2<h.length){newCook+="|"}}document.cookie=(l+"="+newCook+";domain=.cbssports.com;path=/"+d)}}}return c}function openScroll(c,b,d,a){popupWin=window.open(c,b,"menubar=0,toolbar=0,location=0,directories=0,status=0,scrollbars=1,resizable=0,width="+d+",height="+a+",left=50,top=50")}function openPopup(c,b,d,a){popupWin=window.open(c,b,"menubar=0,toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=0,width="+d+",height="+a+",left=50,top=50")}function psuedoGetElementById(f,e){var c,b,a;if(!e){e=document}if((c=f.indexOf("?"))>0&&parent.frames.length){e=parent.frames[n.substring(c+1)].document;f=f.substring(0,c)}if(!(a=e[f])&&e.all){a=e.all[f]}for(b=0;!a&&b<e.forms.length;b++){a=e.forms[b][f]}for(b=0;!a&&e.layers&&b<e.layers.length;b++){a=document.getElementById(f,e.layers[b].document)}return a}function getCoordinates(b){var a={x:0,y:0};while(b){a.x+=b.offsetLeft;a.y+=b.offsetTop;b=b.offsetParent}return a}function whereami(b){var e=new Array();var c=($("#"+b));var a=$(c).position().left;var d=$(c).position().top;if(c){e[0]=a;e[1]=d}return e}var isOverLayer=false;var layerTimer=null;var cmTop=cmLeft=0;function OverLayer(){clearTimeout(layerTimer);isOverLayer=true}function OutLayer(){clearTimeout(layerTimer);isOverLayer=false;layerTimer=setTimeout("HideAllLayers()",100)}function ShowLayer(c,b){clearTimeout(layerTimer);HideAllLayers();var a=document.getElementById(c);whichAnchor=c+"A";whichAnchorDim=whereami(whichAnchor);cmLeft=whichAnchorDim[0];cmTop=whichAnchorDim[1]+20;a.style.visibility="visible";a.style.top=cmTop+"px";a.style.left=cmLeft+"px"}function HideAllLayers(){var b=document.getElementsByTagName("div");for(i=0;i<b.length;i++){var a=new String(b[i].id);if(a.indexOf("gndd")!=-1){b[i].style.visibility="hidden"}}}function getHTTPObject(){var c=false;if(window.XMLHttpRequest&&typeof(XMLHttpRequest)!="undefined"){try{c=new XMLHttpRequest()}catch(d){c=false}}else{if(window.ActiveXObject){var a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];for(var b=0;b<a.length;b++){try{c=new ActiveXObject(a[b])}catch(d){c=false}if(c){break}}}}return c}var toggleTabs={toClear:["active","afterActive"],show:function(l,c,g,a){var b=document.getElementById(l);var h=YAHOO.util.Dom.getElementsByClassName(a,"ul",b)[0].getElementsByTagName("li");var m=$("#"+l+" ul.content").first().children("li");if($("#videoLoader").length){try{cbsiPlayer.api.stopVideo();if(CBSi.app.VideoPlayer.openedOverlayName){cbsiPlayer.api.activateOverlay(CBSi.app.VideoPlayer.openedOverlayName,"off")}}catch(k){}if($("#"+l+" .content").css("visibility")=="hidden"){$("#"+l+" .content").css("visibility","visible")}$("#videoLoader").remove()}if(g){m[c].style.backgroundImage="url("+g+")"}for(var f=0;f<h.length;f++){for(var d=0;d<this.toClear.length;d++){YAHOO.util.Dom.removeClass(h[f],this.toClear[d])}YAHOO.util.Dom.removeClass(m[f],"active")}YAHOO.util.Dom.addClass(h[c],"active");YAHOO.util.Dom.addClass(h[c+1],"afterActive");YAHOO.util.Dom.addClass(m[c],"active")},showExternal:function(g,c,a,h){var k=this;var b=document.getElementById(g);var f=YAHOO.util.Dom.getElementsByClassName("nav","ul",b)[0].getElementsByTagName("li");var l=g+"_content";for(var e=0;e<f.length;e++){for(var d=0;d<this.toClear.length;d++){YAHOO.util.Dom.removeClass(f[e],this.toClear[d])}}YAHOO.util.Dom.addClass(f[c],"active");YAHOO.util.Dom.addClass(f[c+1],"afterActive");this.renderNewContent=function(){if(http.readyState==4){if(CBSi.app.TabGroup&&CBSi.app.TabGroup.evalScript){toggleTabs.parseAsynchContent(document.getElementById(l),http.responseText)}else{document.getElementById(l).innerHTML=http.responseText}if(h){window[h]()}}else{document.getElementById(l).innerHTML="loading"}};http=getHTTPObject();http.open("GET",a,true);http.onreadystatechange=function(){k.renderNewContent()};http.send(null)},parseAsynchContent:function(el,html){var temp=html;while(true){var sIndex=temp.indexOf("<script>"),eIndex=temp.indexOf("<\/script>",sIndex),js=temp.substring(sIndex+8,eIndex);if(sIndex<0){break}eval(js);temp=temp.substring(eIndex+9)}el.innerHTML=html},showIframe:function(g,f,c){var a=document.getElementById(g);var e=YAHOO.util.Dom.getElementsByClassName("nav","ul",a)[0].getElementsByTagName("li");var h=g+"_content";for(var d=0;d<e.length;d++){for(var b=0;b<this.toClear.length;b++){YAHOO.util.Dom.removeClass(e[d],this.toClear[b])}}YAHOO.util.Dom.addClass(e[f],"active");YAHOO.util.Dom.addClass(e[f+1],"afterActive")},clickHandler:function(h,o){var a=YAHOO.util.Event.getTarget(h);if(a.tagName=="A"){YAHOO.util.Event.preventDefault(h);var b=YAHOO.util.Dom.getAncestorByTagName(a,"li");var k=b.parentNode;var l=k.getElementsByTagName("li");var f=k.className;for(var d=0;d<l.length;d++){if(b==l[d]){var p=null;var g=YAHOO.util.Dom.getElementsByClassName("content","ul",o)[0].getElementsByTagName("li")[d];for(var c=0;c<g.attributes.length;c++){if(g.attributes[c].nodeName=="img"){p=g.attributes[c].nodeValue}}toggleTabs.show(o,d,p,f)}}if($(a).parent("li").attr("data-dw-levt")=="true"){var m="coverTabs;"+$(a).parent("li").attr("section");DW.levt("ria","log",{riaevent:"click",comp:"main",objnm:m,comptyp:"app",siteid:175,mapp:"navigation",objtyp:"tab"})}}else{YAHOO.util.Event.stopEvent(h)}}};CBSi.namespace("widget.CustomTabGroup");CBSi.widget.CustomTabGroup={init:function(a,c,d){d=d||"pageContainer";a=a||"appTabGroup";var b=a.split(" ");a=b.join(".");d=(!$(d).length)?"#"+d:d;$(d).undelegate("."+a).delegate("."+a,"click",function(h){var g=this,f=c?$("#"+c):$(g).parent().parent().next();if(g.tagName.toLowerCase()=="ul"){h.preventDefault();return}f.fadeTo(200,0.1);$.ajax({url:this.href,success:function(e){f.fadeTo(200,1);f.html(e);parentCont=c?$(g).parent():$(g).parent().parent();parentCont.children().each(function(j,k){if(c){$(k).removeClass("active");if(!$(k).hasClass("opt")){$(k).addClass("opt")}}else{$(k).removeClass("active");$(k).children().first().removeClass("active");$(k).children().first().removeClass("opt")}});$(g).addClass("active");$(g).parent().addClass("active");$(g).removeClass("opt")},dataType:"html"});h.preventDefault()})}};CBSi.namespace("widget.AppBar");CBSi.widget.AppBar={cache:{},toolBarMap:{},noCache:0,anchorLoad:0,callBack:function(a){},toolBar:function(a){if(typeof(this.toolBarMap[a])!="undefined"){for(key in this.toolBarMap[a]){buttonId=key.replace(/_/,"-");$("#"+buttonId).attr("href",this.toolBarMap[a][key])}}},init:function(c){var a=this,b;if(c.noCache){this.noCache=c.noCache}$("#pageContainer").delegate("div#appBar ul li","click",function(h){var g=this,d=$(this).attr("loc"),j=$(this).attr("callback"),f=$(".appBarContent").children(":first");if(g.tagName.toLowerCase()=="ul"){h.preventDefault();return}f.fadeTo(200,0.1);if(a.noCache||!a.cache[d]){$.ajax({url:$(this).attr("loc"),success:function(e){a.cache[d]=e;a.loadData(g,e,j)},failure:function(e){f.fadeTo(200,1);f.html("<div>Failed to load data</div>")},dataType:"html"})}else{setTimeout(function(){a.loadData(g,a.cache[d],j)},300)}h.preventDefault()});$("#pageContainer").delegate("div#appBar ul li","mouseover",function(d){if(!$(this).hasClass("active")){$(this).addClass("hover")}});$("#pageContainer").delegate("div#appBar ul li","mouseout",function(d){$(this).removeClass("hover")});if(!this.anchorLoad){b=window.location.hash;if(b&&$("."+b)[0]){$("."+b).trigger("click")}this.anchorLoad=1}},loadData:function(c,d,e){var b=$(".appBarContent").children(":first");b.fadeTo(200,1);b.html(d);try{cbsiGetDeferredAds()}catch(a){}parentCont=$(c).parent();parentCont.children().each(function(f,g){$(g).removeClass("active")});$(c).addClass("active");$(c).removeClass("hover");if(typeof(e)!=="undefined"&&typeof(window[e])==="function"){window[e](d)}if(typeof(this.callBack)=="function"){this.callBack(d)}}};CBSi.namespace("event.toggleMultiOption");CBSi.event.toggleMultiOption=function(b,d,c){var a=b.href.split(/\//);d=d||"toggleSelect";$("."+d+" li a.active").toggleClass("active");$(b).toggleClass("active");optionCont=c?$("#"+c):$(b).parent().parent().next(".multiOptions");optionCont.children().each(function(e,f){if($(f).hasClass("hideMe")&&$(f).hasClass(a[a.length-1]+"Bar")){$(f).removeClass("hideMe")}else{if(!$(f).hasClass("hideMe")&&!$(f).hasClass(a[a.length-1]+"Bar")){$(f).addClass("hideMe")}}})};function tooltipOn(k,c,d){var b=0,a=0;if(!d){var d=window.event}b=d.clientX;a=d.clientY;var j=0,g=0;if(self.pageYOffset){j=self.pageXOffset;g=self.pageYOffset}else{if(document.documentElement&&document.documentElement.scrollTop){j=document.documentElement.scrollLeft;g=document.documentElement.scrollTop}else{if(document.body){j=document.body.scrollLeft;g=document.body.scrollTop}}}document.getElementById("tooltip").innerHTML=k;var h=(c&&c!=0)?sekritLeft-j:0;var f=(c&&c!=0)?sekritTop-g:0;document.getElementById("tooltip").style.left=j+b+10+f+"px";document.getElementById("tooltip").style.top=g+a+10+h+"px";document.getElementById("tooltip").style.visibility="visible";return}function tooltipOff(){var a=document.getElementById("tooltip");if(a&&typeof(a)!="undefined"){a.style.visibility="hidden"}return}CBSi.namespace("widget.ToolTip");CBSi.widget.ToolTip={cfg:null,init:function(a){$(".tooltip").tooltip(a)}};(function(a){a.fn.simpletooltip=function(){return this.each(function(){var b=a(this).attr("title");a(this).attr("title","");if(b!=undefined){a(this).hover(function(g){var f=g.pageX+12;var d=g.pageY+12;a(this).attr("title","");a("body").append("<div id='simpleTooltip' style='position: absolute; z-index: 100; display: none;'>"+b+"</div>");if(a.browser.msie){var c=a("#simpleTooltip").outerWidth(true)}else{var c=a("#simpleTooltip").width()}a("#simpleTooltip").width(c);a("#simpleTooltip").css("left",f).css("top",d).fadeIn("medium")},function(){a("#simpleTooltip").remove();a(this).attr("title",b)});a(this).mousemove(function(h){var f=h.pageX+12;var d=h.pageY+12;var c=a("#simpleTooltip").outerWidth(true);var g=a("#simpleTooltip").outerHeight(true);if(f+c>a(window).scrollLeft()+a(window).width()){f=h.pageX-c}if(a(window).height()+a(window).scrollTop()<d+g){d=h.pageY-g}a("#simpleTooltip").css("left",f).css("top",d).fadeIn("medium")})}})}})(jQuery);function externalWrite(a){document.write(a)}function toggleHideShow(a){var b=document.getElementById(a);b.style.display=(b.style.display=="none"||b.style.display==""?"block":"none")}function hideShowCoveredBehavior(){return}CBSi.namespace("CBSi.widget.Time");(function(){var f=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");var h=new Array("Sun","Mon","Tues","Wed","Thurs","Fri","Sat");var d=new Array("Sun.","Mon.","Tues.","Wed.","Thurs.","Fri.","Sat.");var g=new Array("January","February","March","April","May","June","July","August","September","October","November","December");var b=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");var c=new Array("Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec.");var a=CBSi.pref.timezoneOffset;var e=CBSi.pref.timezoneAbbrev;if(a.charAt(0)=="<"){a="-1"}a=parseInt(a);CBSi.widget.Time={updateTimeout:0,update:function(j,m){if(!j){return}var l=$(j);var p=new Date();var o=parseInt(p.getTime()/1000);var k=false;if(l.length>0){l.filter(".updateTime, .gmtTime").not(".gmtTimeUpdated").each(function(){var q=$(this).attr("data-gmt")||$(this).attr("gmt");if(!q){return}var s=m||$(this).attr("data-gmt-format")||"%I:%M %p";if(s=="elapsed"){k=true;var r=o-q;$(this).html(CBSi.widget.Time.timeAgo(r,null,true)).attr("title",CBSi.widget.Time.formatTime($(this).attr("data-title-gmt-format")||"%I:%M %p",q))}else{$(this).removeClass("updateTime, gmtTime").addClass("gmtTimeUpdated");$(this).html(CBSi.widget.Time.formatTime(s,q))}})}if(k){if(CBSi.widget.Time.updateTimeout&&CBSi.widget.Time.updateTimeout>0){clearTimeout(CBSi.widget.Time.updateTimeout)}CBSi.widget.Time.updateTimeout=window.setTimeout(function(){CBSi.widget.Time.update("body span .updateTime, body span .gmtTime")},(5*60*1000))}return},phhmm:function(j){document.write(formatTime("%I:%M %p",j))},pMD:function(j){document.write(formatTime("%m/%d",j))},formatTime:function(z,B){B=new String(B);if(!parseInt(B)||B.indexOf(":")!=-1||B.indexOf(".")!=-1){return B}var l;var o=0;if(a!=-1&&a!=new Date().getTimezoneOffset()){o=60*(new Date().getTimezoneOffset()-(a*60))}l=new Date((parseInt(B)+parseInt(o))*1000);var C="";var A=l.getHours();var s=l.getMinutes();var p=l.getSeconds();var r=l.getDate();var k=l.getMonth();var x=l.getDay();var j=l.getYear();if(j<1900){j+=1900}var v=j%100;for(var q=0;q<z.length;q++){if(z.charAt(q)=="%"&&(q+1)<z.length){var u=z.charAt(q+1);switch(u){case"a":C+=h[x];break;case"A":C+=f[x];break;case"b":C+=b[k];break;case"B":C+=g[k];break;case"d":if(r<10){C+="0"}C+=new String(r);break;case"e":C+=new String(r);break;case"D":C+=new String(r);break;case"H":C+=new String(A);break;case"I":if(A>12){C+=new String(A-12)}else{if(A==0){C+="12"}else{C+=new String(A)}}break;case"l":if(A>12){C+=new String(A-12)}else{if(A==0){C+="12"}else{if(A>9){C+=new String(A)}else{C+=(new String(A)).replace(/^0+/,"")}}}break;case"m":C+=new String(k+1);break;case"n":if(k<9){C+="0"}C+=new String(k+1);break;case"M":if(s<10){C+="0"}C+=new String(s);break;case"p":if(A<12){C+="am"}else{C+="pm"}break;case"P":if(A<12){C+="am"}else{C+="pm"}break;case"q":C+=c[k];break;case"r":C+=d[x];break;case"S":if(p<10){C+="0"}C+=new String(p);break;case"w":C+=x;break;case"y":if(v<10){C+="0"}C+=new String(v);break;case"Y":C+=new String(j);break;case"Z":C+=new String(e);break;case"%":C+="%";break}q++}else{C+=z.charAt(q)}}return C},timeAgo:function(r,o,l,q){if(r<1){return""}if(typeof(q)=="undefined"||q==null){q=true}if(typeof(l)=="undefined"||l==null){l=false}if(typeof(o)=="undefined"||o==null){o={weeks:["week","weeks"],days:["day","days"],hours:["hour","hours"],minutes:["minute","minutes"],seconds:["second","seconds"]}}var j={weeks:7*24*60*60,days:24*60*60,hours:60*60,minutes:60,seconds:1};var p=[];var m;for(unit in j){m=j[unit];if(r/m>=1||unit=="seconds"||!q){secondsConverted=Math.floor(r/m);var k=o[unit][secondsConverted==1?0:1];if(k=="day"&&secondsConverted==1&&l){p.push("Yesterday")}else{p.push(secondsConverted+" "+k+" ago")}r-=secondsConverted*m;if(l){break}}}return p.join(", ")}}})();function formatTime(b,a){CBSi.widget.Time.formatTime(b,a)}(function(a){a.belowthefold=function(c,d){var b=a(window).height()+a(window).scrollTop();return b<=a(c).offset().top-d.threshold};a.abovethetop=function(b,c){var d=a(window).scrollTop();return d>=a(b).offset().top+a(b).height()-c.threshold};a.rightofscreen=function(c,d){var b=a(window).width()+a(window).scrollLeft();return b<=a(c).offset().left-d.threshold};a.leftofscreen=function(b,c){var d=a(window).scrollLeft();return d>=a(b).offset().left+a(b).width()-c.threshold};a.inviewport=function(b,c){return !a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)};a.extend(a.expr[":"],{"below-the-fold":function(c,d,b){return a.belowthefold(c,{threshold:0})},"above-the-top":function(c,d,b){return a.abovethetop(c,{threshold:0})},"left-of-screen":function(c,d,b){return a.leftofscreen(c,{threshold:0})},"right-of-screen":function(c,d,b){return a.rightofscreen(c,{threshold:0})},"in-viewport":function(c,d,b){return a.inviewport(c,{threshold:0})}})})(jQuery);$(document).ready(function(){if($("img[delaysrc]").length){$("img[delaysrc]:in-viewport").each(function(){var a=$(this);a.attr("src",a.attr("delaysrc")).removeAttr("delaysrc")});$(window).bind("scroll",function(a){$("img[delaysrc]:in-viewport").each(function(){var b=$(this);b.attr("src",b.attr("delaysrc")).removeAttr("delaysrc")})})}});CBSi.injectJS=function(d,e,c){var b=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");(c)?a.setAttribute("type",c):"";a.setAttribute("src",d);a.setAttribute("id",e);if(!document.getElementById(e)){b.appendChild(a)}};CBSi.hasLocalStorage=function(a){if(!a){a="CBSiTesting"}try{localStorage.setItem(a,a);localStorage.removeItem(a);return true}catch(b){return false}};function parseQueryString(c){if(!c){return}var b={url:c};if(c.indexOf("?")<0){return b}var a=c.slice(c.indexOf("?")+1).split("&");for(var d=0;d<a.length;d++){hash=a[d].split("=");b[hash[0]]=unescape(hash[1])}hash=a=null;return b}CBSi.namespace("util.DW.CookieTrack");(function(){var a="DWTrackClick";CBSi.util.DW.CookieTrack={setCookie:function(c){var b=c.tag;b=b.replace(/;/g,",");document.cookie=a+"="+b+";domain=.cbssports.com; path=/"},readCookie:function(){var c=readCookie(a);if(c!=false){var b=document.referrer;if(b.match(/cbssports\.com/i)){c=c.replace(/,/g,";")}else{c=null}this.killCookie();return c}else{return null}},killCookie:function(){killCookie(a,"/",".cbssports.com")}}})();CBSi.namespace("app.SiteTools.Share");CBSi.app.SiteTools.Share=(function(g){function d(j){if(jQuery.isEmptyObject(j)){return false}if(!j.init.appId){return false}if(g("div#fb-root").length<1){g("body").prepend('<div id="fb-root"></div>')}if(!j.fbsdk){return false}var h=jQuery.browser;if(!(h.msie&&(h.version.slice(0,1)=="7"))){CBSi.injectJS(j.fbsdk.uri,j.fbsdk.id);window.fbAsyncInit=function(){FB.init(j.init);if(typeof(j.dw)!="undefined"){FB.Event.subscribe("edge.create",function(k){DW.levt("ria","log",j.dw)})}}}return true}function e(j){if(jQuery.isEmptyObject(j)){return false}if(!j.twittersdk){return false}if(typeof(window.twttr)=="undefined"){window.twttr=(function(p,l,q){var k,o,m=p.getElementsByTagName(l)[0];if(p.getElementById(q)){return}o=p.createElement(l);o.id=q;o.src=j.twittersdk.uri;m.parentNode.insertBefore(o,m);return window.twttr||(k={_e:[],ready:function(r){k._e.push(r)}})}(document,"script",j.twittersdk.id))}function h(k){if(typeof(j.dw)!="undefined"&&k){DW.levt("ria","log",j.dw)}}if(typeof(window.twttr)!="undefined"){twttr.ready(function(k){k.events.bind("click",h)})}return true}function b(h){if(jQuery.isEmptyObject(h)){return false}if(!h.gplussdk){return false}CBSi.injectJS(h.gplussdk.uri,h.gplussdk.id);return true}function a(h){if(jQuery.isEmptyObject(h)){return false}if(!h.stumblesdk){return false}CBSi.injectJS(h.stumblesdk.uri,h.stumblesdk.id);return true}function c(h){window.open(h,"_blank","height=600,width=800,menubar=no","false")}function f(o,j,p){var l="#floatShareCtr";var h=0;if(j.length>0){h=g(".storyHdlDate").height()+parseFloat(g(".storyHdlDate").css("margin-top").replace(/auto/,0))+parseFloat(g(".storyHdlDate").css("margin-bottom").replace(/auto/,0))}var m=g(l).offset().top-parseFloat(g(l).css("margin-top").replace(/auto/,0));var k=0;g(window).scroll(function(r){var t=g(this).scrollTop();var q=g(o).height()+g(o).offset().top-g(l).height()-h;var s=g(o).height()-h-g(l).height()-p;if((t>=m)&&(t<=q)){g("#floatShareCtr").addClass("fixed");if(k==1){g("#floatShareCtr").css("marginTop",p)}}else{g("#floatShareCtr").removeClass("fixed");if(t>=q){g("#floatShareCtr").css("marginTop",s);k=1}}})}return{loaded:1,facebookLike:d,twitter:e,gplus:b,stumble:a,openShareWindow:c,initFloatingShareTools:f}})(jQuery);var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());var _rng;if(window.crypto&&crypto.getRandomValues){var _rnds8=new Uint8Array(16);_rng=function whatwgRNG(){crypto.getRandomValues(_rnds8);return _rnds8}}if(!_rng){var _rnds=new Array(16);_rng=function(){for(var a=0,b;a<16;a++){if((a&3)===0){b=Math.random()*4294967296}_rnds[a]=b>>>((a&3)<<3)&255}return _rnds}}var _byteToHex=[];var _hexToByte={};for(var i=0;i<256;i++){_byteToHex[i]=(i+256).toString(16).substr(1);_hexToByte[_byteToHex[i]]=i}function parse(d,a,e){var b=(a&&e)||0,c=0;a=a||[];d.toLowerCase().replace(/[0-9a-f]{2}/g,function(f){if(c<16){a[b+c++]=_hexToByte[f]}});while(c<16){a[b+c++]=0}return a}function unparse(a,c){var b=c||0,d=_byteToHex;return d[a[b++]]+d[a[b++]]+d[a[b++]]+d[a[b++]]+"-"+d[a[b++]]+d[a[b++]]+"-"+d[a[b++]]+d[a[b++]]+"-"+d[a[b++]]+d[a[b++]]+"-"+d[a[b++]]+d[a[b++]]+d[a[b++]]+d[a[b++]]+d[a[b++]]+d[a[b++]]}var _seedBytes=_rng();var _nodeId=[_seedBytes[0]|1,_seedBytes[1],_seedBytes[2],_seedBytes[3],_seedBytes[4],_seedBytes[5]];var _clockseq=(_seedBytes[6]<<8|_seedBytes[7])&16383;var _lastMSecs=0,_lastNSecs=0;function v1(p,d,h){var j=d&&h||0;var k=d||[];p=p||{};var g=p.clockseq!=null?p.clockseq:_clockseq;var a=p.msecs!=null?p.msecs:new Date().getTime();var o=p.nsecs!=null?p.nsecs:_lastNSecs+1;var c=(a-_lastMSecs)+(o-_lastNSecs)/10000;if(c<0&&p.clockseq==null){g=g+1&16383}if((c<0||a>_lastMSecs)&&p.nsecs==null){o=0}if(o>=10000){throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")}_lastMSecs=a;_lastNSecs=o;_clockseq=g;a+=12219292800000;var m=((a&268435455)*10000+o)%4294967296;k[j++]=m>>>24&255;k[j++]=m>>>16&255;k[j++]=m>>>8&255;k[j++]=m&255;var l=(a/4294967296*10000)&268435455;k[j++]=l>>>8&255;k[j++]=l&255;k[j++]=l>>>24&15|16;k[j++]=l>>>16&255;k[j++]=g>>>8|128;k[j++]=g&255;var f=p.node||_nodeId;for(var e=0;e<6;e++){k[j+e]=f[e]}return d?d:unparse(k)}resizeLeaderPlusTop=function(b){var a=document.getElementById("leader_plus_top");a.style.width=b+"px"};