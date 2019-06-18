if (self.CavalryLogger) { CavalryLogger.start_js(["Q9TuC"]); }

__d("HomepagePanelPageInsights.react",["cx","fbt","FacepileRounded.react","InlineBlock.react","Link.react","List.react","PagesEventObserver","PagesEventType","React","XUIButton.react","XUIButtonGroup.react","intlNumUtils"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=32,j=Object.freeze({LIKE:"like",VIEW:"view",POST:"post"});a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={selectedTab:j.LIKE},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$1=function(){return b("React").createElement(b("XUIButtonGroup.react"),{className:"_2n5z"},b("React").createElement(b("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===j.LIKE?" _2n60":""),label:b("React").createElement(b("React").Fragment,null,h._("Likes")),onClick:this.$2.bind(this,j.LIKE)}),b("React").createElement(b("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===j.VIEW?" _2n60":""),label:b("React").createElement(b("React").Fragment,null,h._("Views")),onClick:this.$2.bind(this,j.VIEW)}),b("React").createElement(b("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===j.POST?" _2n60":""),label:b("React").createElement(b("React").Fragment,null,h._("Posts")),onClick:this.$2.bind(this,j.POST)}))};d.$3=function(){__p&&__p();var a=b("React").createElement("div",{className:"_1oso"},b("React").createElement(b("InlineBlock.react"),null,this.props.date_range));switch(this.state.selectedTab){case j.LIKE:return b("React").createElement(b("List.react"),{border:"none",spacing:"none"},b("React").createElement("li",{className:"_2n66"},b("React").createElement(b("Link.react"),{className:"_2n67",href:this.props.insights_uri.pageLikesURI},this.props.total_likes)),b("React").createElement("li",{className:"_2n68"},b("React").createElement(b("Link.react"),{className:"_2n69"+(this.props.new_likes===0?" _21t8":""),href:this.props.insights_uri.pageLikesURI},h._({"*":"{number} new likes this week","_1":"1 new like this week"},[h._plural(this.props.new_likes,"number")]))),b("React").createElement("li",{className:"_2n6a"},b("React").createElement(b("Link.react"),{ajaxify:this.props.friend_inviter_uri,"aria-label":"People who recently liked this Page",rel:"dialog"},b("React").createElement(b("FacepileRounded.react"),{hoverBehavior:"name",imageSize:i,profiles:this.$4()}))));case j.VIEW:var c=b("React").createElement(b("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.pageViewsURI},b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_views)),d=b("React").createElement(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.pageViewsURI},h._({"*":"Page Views","_1":" Page View"},[h._plural(this.props.new_views)])),e=b("React").createElement(b("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_engagements)),f=b("React").createElement(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},h._({"*":"Post Engagements","_1":" Post Engagement"},[h._plural(this.props.new_engagements)]));return b("React").createElement(b("List.react"),{border:"none",spacing:"none"},b("React").createElement("li",null,a),b("React").createElement("li",{className:"_1os-"},b("React").createElement(b("List.react"),{border:"light",direction:"horizontal",spacing:"none"},b("React").createElement("li",{className:"_1os_"},b("React").createElement(b("List.react"),{border:"none",spacing:"none"},b("React").createElement("li",null,c),b("React").createElement("li",null,d))),b("React").createElement("li",{className:"_1os_"},b("React").createElement(b("List.react"),{border:"none",spacing:"none"},b("React").createElement("li",null,e),b("React").createElement("li",null,f))))));case j.POST:c=b("React").createElement(b("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_comments));d=b("React").createElement(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},h._({"*":"Comments","_1":" Comment"},[h._plural(this.props.new_comments)]));e=b("React").createElement(b("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_shares));f=b("React").createElement(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},h._({"*":"Shares","_1":" Share"},[h._plural(this.props.new_shares)]));return b("React").createElement(b("List.react"),{border:"none",spacing:"none"},b("React").createElement("li",null,a),b("React").createElement("li",{className:"_1os-"},b("React").createElement(b("List.react"),{border:"light",direction:"horizontal",spacing:"none"},b("React").createElement("li",{className:"_1os_"},b("React").createElement(b("List.react"),{border:"none",spacing:"none"},b("React").createElement("li",null,c),b("React").createElement("li",null,d))),b("React").createElement("li",{className:"_1os_"},b("React").createElement(b("List.react"),{border:"none",spacing:"none"},b("React").createElement("li",null,e),b("React").createElement("li",null,f))))));default:return b("React").createElement("div",null)}};d.$4=function(){var a=this.props.friends_data;return Object.keys(a).map(function(b){return{image_src:"https://graph.facebook.com/"+a[b].uniqueID+"/picture?height="+i*2+"&width="+i*2,name:a[b].name}})};d.$2=function(a){this.setState({selectedTab:a}),b("PagesEventObserver").notify(b("PagesEventType").VISIT_INSIGHTS_TAB,this.props.page_id,{ref:"aymt_homepage_panel"})};d.render=function(){return b("React").createElement("div",null,this.$1(),this.$3())};return c}(b("React").PureComponent);e.exports=a}),null);
__d("HomepagePanelPromoteFooterLoader",["csx","cx","Bootloader","ReactRenderer"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a={register:function(a,c,d,e){__p&&__p();var f=!1,g=!1,h=!1;function i(a){a.button||(d.classList.add("_1tt"),g=!0,h=!1),k()}function j(a){a.button||(d.classList.remove("_1tt"),g=!1,h=!0),k()}function k(){if(f)return;f=!0;b("Bootloader").loadModules(["PagesManagerConsolidatedPromoteButton.react"],function(f){d.removeEventListener("click",i),e.removeEventListener("click",j),b("ReactRenderer").constructAndRenderComponent(f,babelHelpers["extends"]({},a,{clickOnMount:g}),c,h?l:function(){})},"HomepagePanelPromoteFooterLoader")}function l(){var a=c.querySelector("._764l");a&&a.click()}d.addEventListener("click",i);e.addEventListener("click",j)}};e.exports=a}),null);