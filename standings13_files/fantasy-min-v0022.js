(function($){$.contentSourceBar=function(el,options){var self=this;self.elJQ=$(el);self.el=el;self.elJQ.data("contentSourceBar",self);function _adjustBarWidth(){var buttonsWidth=self.leftArrowBtn.outerWidth()+self.rightArrowBtn.outerWidth()+self.getMoreAppsBtn.outerWidth()+1;var barWidth=parseInt(self.elJQ.width());var width=barWidth-buttonsWidth;$(".contentSourceBar",self.elJQ).width(width)}function _bindSourceClickFetchListeners(){$("div.sourceContainer",self.elJQ).each(function(index){if(!$(this).hasClass("sourceContainerGetApp")){$(this).click(function(event){_selectSourceTab(this);var appId=this.id;if(self.cachedComponentHtmlById[appId]){$("#"+self.options.containerTargetId).html(self.cachedComponentHtmlById[appId])}else{_fetchSourceContent(appId)}})}else{if($(this).hasClass("sourceContainerGetApp")){$(this).click(function(event){_redirectExternalTab(this)})}}})}function _preventDefaultAnchorEventBehavior(){$("a",self.elJQ).click(function(event){event.preventDefault()})}function _initTabWidths(){for(var tabIndex=0;tabIndex<self.tabs.length;tabIndex++){var tabWidth=$("div",$(self.tabs[tabIndex])).outerWidth()+self.tabsMargin;self.tabWidths.push(tabWidth)}}function _checkTabs(){for(var i=0;i<self.tabWidths.length;i++){if(self.tabWidths[i]<9){return true}}return false}function _traverseFindHiddenParent(){var currentEl=self.elJQ,parent;while(currentEl){parent=currentEl.parent();var displayVal=parent.css("display");if(displayVal=="none"){return parent}else{currentEl=$(parent)||null}}return null}function _fetchSourceContent(appId){var queryParams,urlTarget,containerTargetHeight=self.targetContainer.height();if(self.options.urlTarget){queryParams=self.options.queryParams||[];urlTarget=[self.options.urlTarget,"?",[queryParams,"source_id="+appId].join("&")].join(""),self.targetContainer.html(["<div style='width:100%; height:",containerTargetHeight,"px;'><img style='padding:10px;' src='http://www.cbssports.com/images/fantasy/contacts/loader.gif' /></div>"].join(""));$.ajax({url:urlTarget,dataType:"html",success:function(data){self.targetContainer.html(data);self.cachedComponentHtmlById[appId]=data},error:function(){self.targetContainer.html(["<div style='padding:10px; width:100%; height:",containerTargetHeight,"px;'>",self.errorMessage,"</div>"].join(""))}})}else{if(self.options.javascriptTrigger){if(typeof(self.options.javascriptTrigger)=="string"){eval("callback = "+self.options.javascriptTrigger)}else{if(typeof(self.options.javascriptTrigger)=="function"){callback=self.options.javascriptTrigger}}callback(appId)}}}function _redirectExternalTab(externalTab){var redirect_url="http://www.cbssports.com/app/"+$(externalTab).attr("id");window.open(redirect_url,"_blank",null,"scrollbars=yes")}function _selectSourceTab(sourceTab){$("li.selContentSource",self.elJQ).attr("class","");$(sourceTab).closest("li").attr("class","selContentSource")}function _cacheInitialSelectedContent(){var appId=self.elJQ.find("li.selContentSource div.sourceContainer").attr("id");if(appId){self.cachedComponentHtmlById[appId]=$("#"+self.options.containerTargetId).html()}}function _sliderBindAndCalculate(){var widthSum=0,workingTabs=self.tabs,animateWidth=0,currentTabWidth,tabIndex;for(tabIndex=self.currentTabIndex;tabIndex<workingTabs.length;tabIndex++){currentTabWidth=self.tabWidths[tabIndex];widthSum+=currentTabWidth;if(widthSum>=self.slidePageWidth){if(widthSum==self.slidePageWidth){self.currentTabIndexIfRightClicked=(tabIndex+1);animateWidth=self.slidePageWidth}else{var widthDifference=widthSum-self.slidePageWidth;if(widthDifference>self.tabsMargin){self.currentTabIndexIfRightClicked=tabIndex;animateWidth=widthSum-currentTabWidth}else{self.currentTabIndexIfRightClicked=(tabIndex+1);animateWidth=widthSum}}_enableButton({button:"right",enable:1,animateBy:animateWidth});break}}if(widthSum<self.slidePageWidth){_enableButton({button:"right",enable:0})}widthSum=0;animateWidth=0;if(self.currentTabIndex!=0){var previousTabIndex=self.currentTabIndex-1;for(tabIndex=previousTabIndex;tabIndex>=0;tabIndex--){currentTabWidth=self.tabWidths[tabIndex];widthSum+=currentTabWidth;if(widthSum>self.slidePageWidth){var widthDifference=widthSum-self.slidePageWidth;if(widthDifference>self.tabsMargin){self.currentTabIndexIfLeftClicked=(tabIndex+1);animateWidth=widthSum-currentTabWidth}else{self.currentTabIndexIfLeftClicked=tabIndex;animateWidth=widthSum}break}else{if(widthSum==self.slidePageWidth){self.currentTabIndexIfLeftClicked=tabIndex;animateWidth=self.slidePageWidth;break}}}if(widthSum<self.slidePageWidth){self.currentTabIndexIfLeftClicked=(tabIndex+1);animateWidth=widthSum}_enableButton({button:"left",enable:1,animateBy:animateWidth})}else{_enableButton({button:"left",enable:0})}}function _enableButton(args){var button=args.button,enable=args.enable,animateBy=args.animateBy||0,buttonVariable="",classStates=[],direction;if(button=="right"){direction="-";buttonVariable="rightArrowBtn";classStates=["contentSourceBarBtn contSrcBarBtnRightActive","contentSourceBarBtn contSrcBarBtnRightInactive"]}else{if(button=="left"){direction="+";buttonVariable="leftArrowBtn";classStates=["contentSourceBarBtn contSrcBarBtnLeftActive","contentSourceBarBtn contSrcBarBtnLeftInactive"]}}if(enable){self[buttonVariable].attr("class",classStates[0]);self[buttonVariable].unbind().one("click",function(){if(button=="right"){self.currentTabIndex=self.currentTabIndexIfRightClicked}else{if(button=="left"){self.currentTabIndex=self.currentTabIndexIfLeftClicked}}self.contentSourceSlider.animate({left:[direction,"=",animateBy].join("")},{duration:350,complete:function(){_sliderBindAndCalculate()}})})}else{self[buttonVariable].attr("class",classStates[1]);self[buttonVariable].unbind()}}self.init=function(){self.tabs=$("li",self.elJQ).toArray();self.tabWidths=[];self.tabsMargin=parseInt($(self.tabs[0]).css("margin-right").replace("px",""));self.rightArrowBtn=$(".contSrcBarBtnRightInactive",self.elJQ);self.leftArrowBtn=$(".contSrcBarBtnLeftInactive",self.elJQ);self.getMoreAppsBtn=$(".contentSourceBarGetApps",self.elJQ);_adjustBarWidth();_initTabWidths();if(_checkTabs()){var hiddenParent=_traverseFindHiddenParent();hiddenParent.css("display","block");self.init();hiddenParent.css("display","none");return}self.options=$.extend({},$.contentSourceBar.defaultOptions,options);self.cachedComponentHtmlById={};self.contentSourceSlider=$(".contentSourceBarSlider",self.elJQ);self.slidePageWidth=self.contentSourceSlider.width();self.currentTabIndex=0;self.animateAdjustment=0;self.currentTabIndexIfRightClicked=0;self.currentTabIndexIfLeftClicked=0;self.targetContainer=$("#"+self.options.containerTargetId);self.errorMessage="<b>Data is not currently Available.<br/> Please try again later.</b>";self._getMoreManageAppsWidget=new CBSi.widget.GetMoreManageApps({subType:self.options.subType,ownerContainer:self.elJQ,getMoreAppsBtn:$(".contentSourceBarGetApps",self.elJQ)});self._getMoreManageAppsWidget.init();_bindSourceClickFetchListeners();_sliderBindAndCalculate();_cacheInitialSelectedContent();_preventDefaultAnchorEventBehavior()};self.init()};$.contentSourceBar.defaultOptions={containerTargetId:"",urlTarget:"",subType:"",queryParams:""};$.fn.contentSourceBar=function(options){return this.each(function(){(new $.contentSourceBar(this,options))})}})(jQuery);if(!CBSi.app){CBSi.namespace("app")}if(!CBSi.widget){CBSi.namespace("widget")}if(!CBSi.widget.AppDetails){CBSi.namespace("CBSi.widget.AppDetails")}(function(){CBSi.widget.AppDetails=function(a){this.appDetailsUrl="/app-details";this.cachedDetails={};this.currentId=null;this.openFlag=false;this.overDialog=false;this.overTrigger=false;this.popupObj=null;this.showTime=600;this.transitionTime=100;this.timer=null};CBSi.widget.AppDetails.prototype={_initPopup:function(){$("body").append("<div id='appDetailsPopUp'></div>");this.popupObj=$("#appDetailsPopUp")},_bindHoverListeners:function(){var a=this;$(document).delegate("div.sourceContainer,div.appContainer","mouseenter",function(){var f=$(this),d=f.attr("id");if(d!=a.currentId){a.popupObj.hide();a.openFlag=false;a.overDialog=false}a.currentId=d;a.overTrigger=true;var c=f.offset(),b=c.left,e=c.top+f.outerHeight();if(a.openFlag==false){a.timer=setTimeout(function(){a._showDetails({appId:d,x:b,y:e})},a.showTime)}});$(document).delegate("div.sourceContainer,div.appContainer","mouseleave",function(){var c=$(this),b=c.attr("id");clearTimeout(a.timer);a.overTrigger=false;setTimeout(function(){if(a.overDialog==false&&a.openFlag){a.popupObj.hide();a.openFlag=false}},a.transitionTime)});$(document).delegate("div.sourceContainer","mousedown",function(){var b=$(this);clearTimeout(a.timer);a.overTrigger=false;setTimeout(function(){if(a.overDialog==false&&a.openFlag){a.popupObj.hide();a.openFlag=false}},a.transitionTime)});$(document).delegate("div.appContainer","click",function(){var b=$(this);clearTimeout(a.timer);a.popupObj.hide();a.openFlag=false;a.overTrigger=false;$(document).undelegate("div.appContainer")})},_showDetails:function(b){var e=this,c=b.appId||"",a=b.x||"",f=b.y||"";if(this.cachedDetails[c]){this._showContainer({x:a,y:f,html:this.cachedDetails[c]})}else{var d="<div id=\"innerAppDetailsPopup\"><div style=\"padding:10px;\"><img style='padding:10px;' src='http://www.cbssports.com/images/fantasy/contacts/loader.gif' /></div></div>";this._showContainer({x:a,y:f,html:d});$.ajax({url:[this.appDetailsUrl,"?","app_id=",c].join(""),dataType:"html",success:function(g){e._showContainer({x:a,y:f,html:g});e.cachedDetails[c]=g},error:function(){e._showContainer({x:a,y:f,html:"<div class='innerAppDetailsPopup'><div style=\"padding:10px\">Error</div></div>"})}})}this.openFlag=true;this.popupObj.unbind();this.popupObj.mouseenter(function(){e.overDialog=true});this.popupObj.mouseleave(function(){e.overDialog=false;setTimeout(function(){if(e.overTrigger==false&&e.openFlag){e.popupObj.hide();e.openFlag=false}},e.transitionTime)})},_showContainer:function(a){this.popupObj.css("left",a.x);this.popupObj.css("top",a.y);this.popupObj.fadeIn("fast");this.popupObj.html(a.html)},init:function(){this._initPopup();this._bindHoverListeners()}}})();if(!CBSi.widget.GetMoreManageApps){CBSi.namespace("CBSi.widget.GetMoreManageApps")}(function(){CBSi.widget.GetMoreManageApps=function(a){this.subType=a.subType||"";this.ownerContainer=a.ownerContainer||null;this.getMoreAppsBtn=a.getMoreAppsBtn||null;this._cachedAppsHtml;this._cachedManageHtml;this._isGetMoreAppsOpen;this._getMoreAppsContainer;this._loaderHtml;this._overGetMoreContainer;this._overGetMoreBtn;this._slideTimer;this._targetGetAppsUrl;this._transitionTime};CBSi.widget.GetMoreManageApps.prototype={_fetch_get_apps:function(){var a=this;$.ajax({url:a._targetGetAppsUrl,dataType:"html",success:function(b){a._getMoreAppsContainer.html(b);a._cachedAppsHtml=b},error:function(){a._getMoreAppsContainer.html('<div class="appSettingsContainer"><div class="appSettingsInnerContainer"><div style="padding:10px;">Error</div></div></div>')}});return},_bindBtnHandlers:function(){var a=this;this.getMoreAppsBtn.click(function(){var c=a.getMoreAppsBtn.offset(),b=c.left+a.getMoreAppsBtn.outerWidth()-a._getMoreAppsContainer.outerWidth(),d=c.top+a.getMoreAppsBtn.outerHeight();if(a._isGetMoreAppsOpen){a._isGetMoreAppsOpen=false}else{a._getMoreAppsContainer.css("left",b);a._getMoreAppsContainer.css("top",d);if(a._cachedAppsHtml){a._getMoreAppsContainer.html(a._cachedAppsHtml)}else{a._getMoreAppsContainer.html(a._loaderHtml);a._fetch_get_apps()}a._isGetMoreAppsOpen=true}a._getMoreAppsContainer.slideToggle()});this._getMoreAppsContainer.bind("mouseenter",function(){a._overGetMoreContainer=true;if(!a.getMoreAppsBtn.hasClass("activeBtn")){a.getMoreAppsBtn.addClass("activeBtn")}});this.getMoreAppsBtn.bind("mouseenter",function(){a._overGetMoreBtn=true;if(!a.getMoreAppsBtn.hasClass("activeBtn")){a.getMoreAppsBtn.addClass("activeBtn")}});this._getMoreAppsContainer.bind("mouseleave",function(){a._overGetMoreContainer=false;setTimeout(function(){if(a._isGetMoreAppsOpen&&!a._overGetMoreBtn){a._isGetMoreAppsOpen=false;a._getMoreAppsContainer.fadeOut("slow");a.getMoreAppsBtn.removeClass("activeBtn")}},a._transitionTime)});this.getMoreAppsBtn.bind("mouseleave",function(){a._overGetMoreBtn=false;setTimeout(function(){if(a._isGetMoreAppsOpen&&!a._overGetMoreContainer){a._isGetMoreAppsOpen=false;a._getMoreAppsContainer.fadeOut("slow");a.getMoreAppsBtn.removeClass("activeBtn")}else{if(!a._isGetMoreAppsOpen){a.getMoreAppsBtn.removeClass("activeBtn")}}},a._transitionTime)});$(".getMoreAppsContainer").delegate(".appSettingsAppContainer","mouseenter",function(){$(this).addClass("appDetailsContainerHover")});$(".getMoreAppsContainer").delegate(".appSettingsAppContainer","mouseleave",function(){$(this).removeClass("appDetailsContainerHover")});return},_renderMoreManageAppsContainers:function(){var a=Math.floor(Math.random()*9999999);var b="getMoreApps"+a;$("body").append("<div class='getMoreAppsContainer' style='z-index: 6999997; display:none;' id='"+b+"'></div>");this._getMoreAppsContainer=$("#"+b);return},init:function(){if(!this.ownerContainer||!this.ownerContainer.length||!this.subType||!this.getMoreAppsBtn||!this.getMoreAppsBtn.length){return}this._cachedAppsHtml=null;this._isGetMoreAppsOpen=false;this._loaderHtml='<div class="appSettingsContainer"><div class="appSettingsInnerContainer"><div style="padding:10px;"><img style=\'padding:10px;\' src=\'http://www.cbssports.com/images/fantasy/contacts/loader.gif\' /></div></div></div>';this._overGetMoreContainer=false;this._overGetMoreBtn=false;this._sliderTimer=1000;this._targetGetAppsUrl="/get-more-apps?app_sub_type="+this.subType;this._transitionTime=250;this._renderMoreManageAppsContainers();this._bindBtnHandlers();return},close:function(){var a=this;if(this._isGetMoreAppsOpen){this._getMoreAppsContainer.hide();this._isOpen=false}return}}})();if(!CBSi.widget.AppBar){CBSi.namespace("CBSi.widget.AppBar")}CBSi.namespace("CBSi.widget.AppBar");(function(){CBSi.widget.AppBar=function(a){this._slideDuration=500;this._slideWidth;this._sliderAppBar;this._pivot=0;this._pivotMax=0;this._rightBtn;this._leftBtn;this._maxApps=10;this._getMoreAppsWidget};CBSi.widget.AppBar.prototype={_buttonBinder:function(){var a=this;if(this._pivot==0||this._pivot<this._pivotMax){this._rightBtn.attr("class","appBarBtn rightBtn");this._rightBtn.unbind("click").bind("click",function(){a._pivot++;a._buttonBinder();a._sliderAppBar.animate({left:"-="+a._slideWidth},{duration:a._slideDuration})})}else{this._rightBtn.attr("class","appBarBtn rightBtnInactive");this._rightBtn.unbind("click")}if(this._pivot>0){this._leftBtn.attr("class","appBarBtn leftBtn");this._leftBtn.unbind("click").bind("click",function(){a._pivot--;a._buttonBinder();a._sliderAppBar.animate({left:"+="+a._slideWidth},{duration:a._slideDuration})})}else{this._leftBtn.attr("class","appBarBtn leftBtnInactive");this._leftBtn.unbind("click")}return},_setDefaultBarPage:function(c,a){for(var b=0;b<c;b++){if(a[b].className=="selApp"){if(c>this._maxApps){this._pivot=Math.floor(b/(this._maxApps));this._sliderAppBar.css("left",this._pivot*this._slideWidth*-1)}break}}return},init:function(){var a=$(".appBarList li");var c=a.length;var b=$(".appBarList li").width();$(".appBarList").width(b*c);this._sliderAppBar=$("#appBar");this._slideWidth=this._maxApps*b;this._pivotMax=Math.floor(c/(this._maxApps+1));if($(".appBarBtn.rightBtn")){this._rightBtn=$(".appBarBtn.rightBtn");this._leftBtn=$(".appBarBtn.leftBtnInactive");this._setDefaultBarPage(c,a);this._buttonBinder()}this._getMoreManageAppsWidget=new CBSi.widget.GetMoreManageApps({subType:CBSi.widget.AppBar.AppPlacement,ownerContainer:$("#appBarContainer"),getMoreAppsBtn:$(".moreBtn",$("#appBarContainer"))});this._getMoreManageAppsWidget.init();return}}})();$(document).ready(function(){var a=new CBSi.widget.AppDetails();a.init()});