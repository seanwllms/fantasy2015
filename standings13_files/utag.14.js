//tealium universal tag - utag.14 ut4.0.201410010713, Copyright 2014 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){u.qsp_delim="&";u.kvp_delim="=";u.samplerate="100";u.siteinterceptid="ZN_eD65YNwXVsuK9Lf";u.usezones="yes";u.base_url="//zn_ed65ynwxvsuk9lf-cbs.siteintercept.qualtrics.com/WRSiteInterceptEngine/?";if(u.ev[a]||typeof u.ev.all!="undefined"){c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f]==="siteinterceptid"||e[f]==="SiteInterceptID"){u.siteinterceptid=b[d];}else if(e[f]==="samplerate"||e[f]==="SampleRate"){u.samplerate=b[d];}else if(e[f]==="usezones"||e[f]==="base_url"){u[e[f]]=b[d];}else{c.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]))}}}}
if(u.usezones==="yes"){c.push("Q_ZID="+u.siteinterceptid);}else{c.push("Q_SIID="+u.siteinterceptid);}
c.push("Q_LOC="+encodeURIComponent(window.location.href));window[u.siteinterceptid+"_ed"]="";window[u.siteinterceptid+"_sampleRate"]=u.samplerate;window[u.siteinterceptid+"_url"]=u.base_url+c.join(u.qsp_delim);if(Math.random()>=window[u.siteinterceptid+"_sampleRate"]/100){return};try{if(!document.getElementById(u.siteinterceptid)){e=document.createElement('div');e.setAttribute('id',u.siteinterceptid);document.getElementsByTagName('body')[0].appendChild(e);}}catch(e){};u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.base_url+c.join(u.qsp_delim);u.s.parentNode.insertBefore(u.scr,u.s);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('14','cbsi.cbssportssite');}catch(e){}
