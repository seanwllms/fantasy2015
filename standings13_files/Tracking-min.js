CBSi.namespace("event.Tracking");(function(){var a="dwTrackEvent",d="dwApp",b="dwTrackType",c=YAHOO.util.Dom;Event=YAHOO.util.Event;CBSi.event.Tracking={init:function(e){e=e||"pageContainer";Event.addListener(e,"click",CBSi.event.Tracking.eventHandler,{},CBSi.event.Tracking)},eventHandler:function(g){var f=Event.getTarget(g);this.sendToDW(f)},sendToDW:function(i){var e=i.getAttribute(a),h=i.getAttribute(d),g=i.getAttribute(b),f={};if(e){f.cval=e}else{return}if(g){f.ctype=g}else{f.ctype="ria;evt;objtyp;obj"}if(h){f.mapp=h}if(f){DW.redir(f)}}};CBSi.event.Tracking.init()})();