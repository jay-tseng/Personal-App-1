if (self.CavalryLogger) { CavalryLogger.start_js(["BPbLC"]); }

__d("PixelNumConverter",[],(function(a,b,c,d,e,f){function g(a){return a!=null&&!isNaN(a)&&isFinite(a)&&a!==""}a={pixelValue:function(a){return g(a)?Number(a)+"px":"auto"},numValue:function(a){a=a.replace("px","");return g(a)?Number(a):0}};e.exports=a}),null);
__d("stopIframe",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.contentWindow;a.stop?a.stop():a.document.execCommand&&a.document.execCommand("Stop")}e.exports=a}),null);
__d("AdPreviewIFramePOSTRequest",["Arbiter","CSS","DOM","DOMEventListener","Form","lowerFacebookDomain","stopIframe"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(!c)return;var d=b("DOMEventListener").add(a,"load",function(){if(!c)return;b("CSS").hide(c);d.remove();b("Arbiter").inform("AdPreview/IFrameLoadSuccess",{iframe:a})});b("CSS").show(c)}a={init:function(a,c,d,e,f){function h(){g(e,f),b("Form").post(a,c,d)}b("lowerFacebookDomain")();h();return b("Arbiter").subscribe("contextualLayer/toggle",function(a,c){if(!b("DOM").contains(c.contentRoot,e))return;c.show?h():b("stopIframe")(e)})}};e.exports=a}),null);
__d("AdPreviewIFrameResizeListener",["Arbiter","DOM","PixelNumConverter","Style","lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();a={listen:function(a,c,d,e){__p&&__p();var f=!1;b("lowerFacebookDomain")();return b("Arbiter").subscribe(["iframe/resize","contextualLayer/toggle"],function(g,h){__p&&__p();if(g==="iframe/resize"){if(f||h.frame!==a)return;c.height=h.frameHeight;if(!d)return;g=!e||!h.storyHeight?h.frameHeight:h.storyHeight-1;b("Style").set(d,"height",b("PixelNumConverter").pixelValue(g))}else{if(!b("DOM").contains(h.contentRoot,c))return;h.show?f=!1:f=!0}})}};e.exports=a}),null);
__d("MenuTogglingItem",["DOM","MenuItem"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.handleClick=function(){this.toggleMenuItem();return a.prototype.handleClick.call(this)};d.toggleMenuItem=function(){this._data=babelHelpers["extends"]({},this._data,{ajaxify:this._data.toggleAjaxify,toggleAjaxify:this._data.ajaxify,value:this._data.toggleValue,toggleValue:this._data.value,markup:this._data.toggleMarkup,toggleMarkup:this._data.markup}),this._rerender()};d.setValue=function(a){this._data=babelHelpers["extends"]({},this._data,{value:a})};d._rerender=function(){var a=this._anchor;b("DOM").replace(a,this._renderItemContent())};return c}(b("MenuItem"));e.exports=a}),null);
__d("getEventTarget",[],(function(a,b,c,d,e,f){"use strict";var g=3;function a(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return a.nodeType===g?a.parentNode:a}e.exports=a}),null);