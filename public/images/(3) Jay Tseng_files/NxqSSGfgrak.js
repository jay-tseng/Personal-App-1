if (self.CavalryLogger) { CavalryLogger.start_js(["fZnNY"]); }

__d("FeedBlacklistButton",["Arbiter","Event"],(function(a,b,c,d,e,f){__p&&__p();var g={BLACKLIST:"feed_blacklist",UNBLACKLIST:"feed_unblacklist",init:function(a,c,d,e){b("Event").listen(c,"click",function(){var a={profile_id:e};b("Arbiter").inform(g.BLACKLIST,a);b("Arbiter").inform("UnfollowingUser",a)}),b("Event").listen(d,"click",function(){var a={profile_id:e};b("Arbiter").inform(g.UNBLACKLIST,a);b("Arbiter").inform("FollowingUser",a)}),b("Arbiter").subscribe(g.BLACKLIST,function(b,c){e==c.profile_id&&a.swap()}),b("Arbiter").subscribe(g.UNBLACKLIST,function(b,c){e==c.profile_id&&a.unswap()})}};e.exports=a.FeedBlacklistButton||g}),null);
__d("FollowRequestResultEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REVERT:"revert"})}),null);
__d("ProfileSubFollowStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REGULAR_FOLLOW:"follow",RECAP:"recap",SEE_FIRST:"see_first",SEE_MORE:"see_more",HIGHLIGHTS_ONLY:"highlights_only",SUBSCRIBE_ALL_LIVE_NOTIFICATIONS:"subscribe_all_live_notifications",SUBSCRIBE_SUGGESTED_LIVE_NOTIFICATIONS:"subscribe_suggested_live_notifications",SUBSCRIBE_NONE_LIVE_NOTIFICATIONS:"subscribe_none_live_notifications",UNFOLLOW:"unfollow"})}),null);
__d("SeeFirstNuxEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"})}),null);
__d("QualityOfConnectionsExperimentEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SHOW_MODAL:"SHOW_MODAL",CLICK_LIKE:"CLICK_LIKE",CLICK_FOLLOW:"CLICK_FOLLOW",CLICK_UNFOLLOW:"CLICK_UNFOLLOW",CLICK_MODAL_LIKE:"CLICK_MODAL_LIKE",CLICK_MODAL_UNLIKE:"CLICK_MODAL_UNLIKE",CLICK_MODAL_FOLLOW:"CLICK_MODAL_FOLLOW",CLICK_MODAL_UNFOLLOW:"CLICK_MODAL_UNFOLLOW",CLOSE_MODAL:"CLOSE_MODAL",LIKE_BUTTON_IMPRESSION:"LIKE_BUTTON_IMPRESSION",FOLLOW_BUTTON_IMPRESSION:"FOLLOW_BUTTON_IMPRESSION"})}),null);
__d("QualityOfConnectionsExperimentTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setError=function(a){this.$1.error=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExperimentGroup=function(a){this.$1.experiment_group=a;return this};c.setFollowPage=function(a){this.$1.follow_page=a;return this};c.setLikePage=function(a){this.$1.like_page=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={error:!0,event:!0,experiment_group:!0,follow_page:!0,like_page:!0,page_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/follow/follow_privacy/nux/log/view/",{})}),null);
__d("XPagesQualityOfConnectionsExperimentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/quality_of_connections_experiment/",{page_id:{type:"FBID",required:!0},__asyncDialog:{type:"Int"}})}),null);
__d("XPubcontentChainedSuggestionsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/chained_suggestions/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:!1},friendid:{type:"Int"}})}),null);
__d("SubscribeButton",["Arbiter","AsyncRequest","Button","CSS","Event","QualityOfConnectionsExperimentEvents","QualityOfConnectionsExperimentTypedLogger","TooltipData","XFollowPrivacyNuxLogViewAsyncController","XPagesQualityOfConnectionsExperimentController","XPubcontentChainedSuggestionsController","qex"],(function(a,b,c,d,e,f){__p&&__p();var g={SUBSCRIBED:"FollowingUser",UNSUBSCRIBED:"UnfollowingUser",_enable:function(a){b("Button").setEnabled(a,!0),b("TooltipData").remove(a)},_disable:function(a,c){b("Button").setEnabled(a,!1),c&&b("TooltipData").set(a,c)},init:function(a,c,d,e,f,h,i,j,k,l,m,n,o,p,q){__p&&__p();q===void 0&&(q=!1);var r=!m&&!o,s=!(k===void 0||k===null);s&&!i&&!j&&g._disable(c,k);b("Event").listen(c,"click",function(){__p&&__p();b("Arbiter").inform(g.SUBSCRIBED,{profile_id:e,contextID:n,suppress:!0});if(l){l.show();var a=b("XFollowPrivacyNuxLogViewAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).send()}if(p){a=b("XPagesQualityOfConnectionsExperimentController").getURIBuilder().setFBID("page_id",e).getURI();new(b("AsyncRequest"))().setURI(a).send()}if(q){a=b("qex")._("812260");a!==null&&new(b("QualityOfConnectionsExperimentTypedLogger"))().setExperimentGroup(a).setEvent(b("QualityOfConnectionsExperimentEvents").CLICK_FOLLOW).setPageID(e).log()}});b("Arbiter").subscribe(g.SUBSCRIBED,function(k,l){__p&&__p();if(e==l.profile_id){f||d.suppressNextMouseEnter&&d.suppressNextMouseEnter();s&&(typeof l.connected!=="undefined"&&(i=l.connected),(i||j)&&g._enable(c));l.focusOnClick!==void 0&&(r=l.focusOnClick);a.swap(r);if(h===!0&&l.chaining!==!1){k=b("XPubcontentChainedSuggestionsController").getURIBuilder().setInt("profileid",e).getURI();new(b("AsyncRequest"))().setURI(k).send()}}});b("Arbiter").subscribe(g.UNSUBSCRIBED,function(f,h){e==h.profile_id&&(a.unswap(r),d.hideFlyout&&d.hideFlyout(),s&&(typeof h.connected!=="undefined"&&(i=h.connected),!i&&!j&&g._disable(c,k)),b("Arbiter").inform("SubMenu/Reset"))})},initSubscribe:function(a,c){b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.SUBSCRIBED,{profile_id:c}),0)})},initUnsubscribe:function(a,c,d,e){e===void 0&&(e=!1),b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.UNSUBSCRIBED,{profile_id:c,contextID:d}),0);if(e){var a=b("qex")._("812260");a!==null&&new(b("QualityOfConnectionsExperimentTypedLogger"))().setExperimentGroup(a).setEvent(b("QualityOfConnectionsExperimentEvents").CLICK_UNFOLLOW).setPageID(c).log()}})},initSubscribeMenuItem:function(a,c,d){b("CSS").hide(c),this._initMenuItem(a,c,d)},initUnsubscribeMenuItem:function(a,c,d){b("CSS").hide(a),this._initMenuItem(a,c,d)},_initMenuItem:function(a,c,d){this.initSubscribe(a,d),this.initUnsubscribe(c,d),b("Arbiter").subscribe(g.SUBSCRIBED,function(d,e){b("CSS").hide(a),b("CSS").show(c)}),b("Arbiter").subscribe(g.UNSUBSCRIBED,function(d,e){b("CSS").hide(c),b("CSS").show(a)})}};e.exports=g}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","FollowRequestResultEnum","MenuStaticItem","ProfileSubFollowStatus","QE2Logger","Run","SeeFirstNuxEvents","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=1,j="live_notifs",k={follow:0,see_first:0,see_more:0,highlights_only:0,subscribe_all_live_notifications:j,subscribe_suggested_live_notifications:j,subscribe_none_live_notifications:j};a=function(){"use strict";__p&&__p();function a(a,c,d,e,f){__p&&__p();var g=this;this.$1=c;this.$2=d;this.$3=f;this.$4=e;this.$5=a;this.$6=null;this.$7=new(b("SubscriptionsHandler"))();this.$5.getPopover().subscribe("show",function(){b("QE2Logger").logExposureForUser("feed_control_highlight_only")});this.$2.subscribe("itemclick",function(a,c){if(c.item instanceof b("MenuStaticItem"))return;a=c.item.getValue();a==="unfollow"?(b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$3.id}),b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,{profile_id:this.$3.id}),this.$4&&this.$4.hide(),this.$5.getPopover().hideLayer()):(this.setSelected(a),a===b("ProfileSubFollowStatus").SEE_FIRST?(this.$4&&(this.$4.hide(),this.logNux(b("SeeFirstNuxEvents").SEE_FIRST_SELECTED)),b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!0,see_more:!1,highlights_only:!1})):a===b("ProfileSubFollowStatus").SEE_MORE?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!0,highlights_only:!1}):a===b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!0}):b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!1}))}.bind(this));this.$7.addSubscriptions(b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,function(a,c){if(g.$3.id!==c.profile_id)return;c.see_first?g.setSelected(b("ProfileSubFollowStatus").SEE_FIRST):c.see_more?g.setSelected(b("ProfileSubFollowStatus").SEE_MORE):c.highlights_only?g.setSelected(b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY):g.setSelected(b("ProfileSubFollowStatus").REGULAR_FOLLOW)}));this.$7.addSubscriptions(b("Arbiter").subscribe(b("FollowRequestResultEnum").REVERT,this.handleResponse.bind(this)));this.$4&&(this.$4.show(),this.logNux(b("SeeFirstNuxEvents").IMP),this.$7.addSubscriptions(b("Event").listen(b("DOM").find(this.$4.getRoot(),"._50zy"),"click",this.logNux.bind(this,b("SeeFirstNuxEvents").XOUT))));b("Run").onLeave(this.cleanUp.bind(this))}var c=a.prototype;c.logNux=function(a){var c=b("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setData({event:a,id:this.$3.id}).send()};c.getButtons=function(){return b("DOM").scry(this.$1,"._3oz-")};c.getSelected=function(){var a=this.getButtons(),c=null;a.forEach(function(a){var d=a.getAttribute("data-status");b("CSS").matchesSelector(a,"._52-0")&&(c=d)});return c};c.setSelected=function(a){__p&&__p();this.$6=this.getSelected();var c=this.getButtons(),d=k[a];c.forEach(function(c){if(d===j)return;var e=c.getAttribute("data-status");e===a?b("CSS").addClass(c,"_52-0"):b("CSS").removeClass(c,"_52-0")});this.$2.forEachItem(function(c){if(!c.getValue)return;var e=c.getValue(),f=k[e];if(e==="unfollow")return;c=c.getRoot();e===a?b("CSS").addClass(c,"_52-0"):f===d&&b("CSS").removeClass(c,"_52-0")})};c.handleResponse=function(a,c){if(c.id!==this.$3.id||c.location!==i)return;a===b("FollowRequestResultEnum").REVERT&&this.revert()};c.revert=function(){if(this.$6===null)return;this.setSelected(this.$6)};c.cleanUp=function(){this.$7&&this.$7.release(),this.$7=null,this.$1=null,this.$2=null,this.$3=null};return a}();e.exports=a}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c._onMenuDone=function(a){};return b}(b("PopoverMenu"));e.exports=a}),null);
__d("SubscriptionLevels",[],(function(a,b,c,d,e,f){a=Object.freeze({ALL:"162318810514679",DEFAULT:"271670892858696",TOP:"266156873403755"});e.exports=a}),null);
__d("EditSubscriptions",["csx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","MenuDeprecated","Parent","SubscriptionLevels","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();var h=45,i=[b("SubscriptionLevels").ALL,b("SubscriptionLevels").DEFAULT,b("SubscriptionLevels").TOP],j={},k={},l={},m={},n={},o={},p={},q={},r={},s={},t={},u="/ajax/follow/follow_profile.php",v="/ajax/follow/unfollow_profile.php",w="/ajax/settings/notifications/notify_me.php",x={},y={},z={},A=null,B={};function C(a){return i.includes(a)}function D(a,c,d,e){__p&&__p();e=b("Parent").byClass(e,"uiMenuItem")||b("Parent").bySelector(e,"._54ni");var f=b("getOrCreateDOMID")(a);if(!e||!b("DOM").contains(a,e))return;else if(b("CSS").hasClass(e,"SubscribeMenuSubscribeCheckbox")){l[c]?I(f,c):H(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuUnsubscribe")){I(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuSettingsItem")){U(a,!0);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuGoBack")){U(a,!1);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuItem")){F(a,c,d,e);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuNotifyMeCheckbox")){E(a,c);return!1}}function E(a,b){m[b]?Y(a,b):X(a,b)}function F(a,c,d,e){if(b("CSS").hasClass(e,"SubscriptionMenuLevel")){if(b("MenuDeprecated").isItemChecked(e))return;S(a,c,L(e),!0,d)}else b("CSS").hasClass(e,"SubscriptionMenuCategory")?P(c,e,!b("MenuDeprecated").isItemChecked(e),!0,d):b("CSS").hasClass(e,"SubscriptionAppStory")&&R(c,e,!b("MenuDeprecated").isItemChecked(e),d)}function G(a){return B[a]?B[a]:0}function H(a,c){var d={profile_id:c};b("Arbiter").inform("FollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").UNBLACKLIST,d);new(b("AsyncRequest"))().setURI(u).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"FollowUserFail",d)).send()}function I(a,c){var d={profile_id:c};b("Arbiter").inform("UnfollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,d);new(b("AsyncRequest"))().setURI(v).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"UnfollowUserFail",d)).send()}function J(a,c,d){c={profile_id:a,level:q[a],custom_categories:r[a],location:d};new(b("AsyncRequest"))().setURI("/ajax/follow/manage_subscriptions.php").setData(c).send()}function K(a,c){__p&&__p();var d=r[c]||[],e=b("MenuDeprecated").getItems(a);e.forEach(function(a){if(b("CSS").hasClass(a,"SubscriptionMenuCategory")){var e=L(a);d.includes(e)?N(a):O(a)}else if(b("CSS").hasClass(a,"SubscriptionAppStory")){e=L(a);z[c]&&z[c][e]?N(a):O(a)}});S(a,c,q[c],!1)}function L(a){a=b("DOM").scry(a,"input")[0];return a&&a.value}function M(a){return b("DOM").find(a,"a.itemAnchor")}function N(a){b("CSS").addClass(a,"checked"),M(a).setAttribute("aria-checked",!0)}function O(a){b("CSS").removeClass(a,"checked"),M(a).setAttribute("aria-checked",!1)}function P(a,b,c,d,e){__p&&__p();c?N(b):O(b);b=L(b);if(C(b))c&&Q(a,b);else if(c)r[a].includes(b)||r[a].push(b);else{c=r[a].indexOf(b);c!==-1&&r[a].splice(c,1)}d&&J(a,b,e)}function Q(a,c){q[a]=c,b("Arbiter").inform("SubscriptionLevelUpdated",{profile_id:a,level:c})}function R(a,c,d,e){e="/ajax/feed/filter_action/";var f=L(c),g={actor_id:a,app_id:f};d?(N(c),e+="resubscribe_user_app/",g.action="resubscribe_user_app",z[a]||(z[a]={}),z[a][f]=!0):(O(c),e+="unsubscribe_user_app_checkbox/",g.action="unsubscribe_user_app_checkbox",z[a]&&(z[a][f]=!1));new(b("AsyncRequest"))().setURI(e).setData(g).send()}function S(a,c,d,e,f){a=b("DOM").scry(a,".SubscriptionMenuLevel");var g=null;a.forEach(function(a){L(a)==d?g=a:b("MenuDeprecated").isItemChecked(a)&&P(c,a,!1,!1)});g&&P(c,g,!0,e,f)}function T(a,c,d){l[c]=d;b("CSS").conditionClass(a,"isUnsubscribed",!d);c=b("DOM").scry(a,"li.SubscribeMenuSubscribeCheckbox");if(c.length!==0){a=c[0];d?N(a):O(a)}}function U(a,c){b("CSS").conditionClass(a,"subscriptionMenuOpen",c)}function V(a,c,d){c=b("DOM").find(a,".FriendListSubscriptionsMenu");var e=b("DOM").find(c,".uiMenuInner");A!=null&&A.forEach(function(a){e.removeChild(a)});d.forEach(function(a){e.appendChild(a)});A=d}b("Arbiter").subscribe("UnfollowUser",function(a,b){s[b.profile_id]&&(Q(b.profile_id,s[b.profile_id]),r[b.profile_id]=t[b.profile_id].slice())});b("Arbiter").subscribe("UpdateSubscriptionLevel",function(a,c){a=c.profile_id+"";c=c.level+"";Q(a,c);var d;for(d in j)if(j[d]===a){var e=b("ge")(d);e&&S(e,a,c,!1)}});b("Arbiter").subscribe("listeditor/close_editor",function(){var a;for(a in j){var c=b("ge")(a);c&&U(c,!1)}});function W(a,c,d){__p&&__p();m[c]=d;c=y[c];if(c){d?c.select():c.deselect();return}c=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckbox");if(c.length!==0){c=c[0];b("CSS").conditionShow(c,!0);a=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckboxSeparator");a.length>0&&b("CSS").conditionShow(a[0],!0);d?N(c):O(c)}}function X(a,c){a={profile_id:c};b("Arbiter").inform("EnableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!0}).setErrorHandler(b("Arbiter").inform.bind(null,"EnableNotifsForUserFail",a)).send()}function Y(a,c){a={profile_id:c};b("Arbiter").inform("DisableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!1}).setErrorHandler(b("Arbiter").inform.bind(null,"DisableNotifsForUserFail",a)).send()}c={init:function(a,c,d){__p&&__p();var e=b("getOrCreateDOMID")(a);B[e]=d;j[e]||b("Event").listen(a,"click",function(b){return D(a,j[e],d,b.getTarget())});d===h&&x[c].length&&V(a,c,x[c]);q[c]&&K(a,c);j[e]=c;b("CSS").conditionClass(a,"NonFriendSubscriptionMenu",!k[c]);b("CSS").conditionClass(a,"cannotSubscribe",!n[c]);b("CSS").conditionClass(a,"noSubscriptionLevels",o[c]&&!p[c]);b("CSS").conditionClass(a,"noSubscribeCheckbox",!k[c]&&!o[c]);T(a,c,l[c]);W(a,c,m[c]);b("Arbiter").subscribe(["FollowUser","FollowingUser","UnfollowUserFail"],function(b,d){d.profile_id==c&&T(a,c,!0)}.bind(this));b("Arbiter").subscribe(["UnfollowUser","UnfollowingUser","FollowUserFail"],function(d,e){e.profile_id==c&&(b("Arbiter").inform("SubMenu/Reset"),T(a,c,!1))}.bind(this));b("Arbiter").subscribe(["EnableNotifsForUser","DisableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!0)}.bind(this));b("Arbiter").subscribe(["DisableNotifsForUser","EnableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!1)}.bind(this));b("Arbiter").subscribe("listeditor/friend_lists_changed",function(b,c){if(c.notify_state){b=c.added_uid?c.added_uid:c.removed_uid;W(a,b,c.notify_state.is_notified)}}.bind(this))},getSubscriptions:function(a){return{level:q[a],custom_categories:r[a]}},registerTimelineNotifySelector:function(a,c){var d=a.getInitialMenu(),e=a.getContentRoot();d.forEachItem(function(a){var d=a.getRoot();b("CSS").hasClass(d,"SubscribeMenuNotifyMeCheckbox")&&(y[c]=a,W(e,c,m[c]))});d.subscribe("itemclick",function(a,b){b.item===y[c]&&E(e,c);return!0})},toggleNotificationsOnJoin:function(a,b){m[a]!==b&&E(null,a)},setSubscriptions:function(a,b,c,d,e,f,g,h,i,j,q,u){Q(a,g+""),k[a]=b,l[a]=c,n[a]=d,o[a]=e,p[a]=f,s[a]=i+"",r[a]=h.map(String),t[a]=j.map(String),x[a]=u,m[a]=q}};e.exports=a.EditSubscriptions||c}),null);
__d("TimelineCoverCollapse",["DOMDimensions","Style","TidyArbiter","$","getViewportDimensions"],(function(a,b,c,d,e,f){f.collapse=function(a,c){c--;a=b("getViewportDimensions")().height;var d=b("DOMDimensions").getDocumentDimensions().height;a=a+c;d<=a&&b("Style").set(b("$")("globalContainer"),"min-height",a+"px");window.scrollBy(0,c);b("TidyArbiter").inform("TimelineCover/coverCollapsed",c,"state")}}),null);