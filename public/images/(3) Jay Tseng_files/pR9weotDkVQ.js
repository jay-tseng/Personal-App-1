if (self.CavalryLogger) { CavalryLogger.start_js(["usdwF"]); }

__d("AdsCouponPagesManagerCouponPopoverContainer.react",["AdsCouponPagesManagerCouponPopover.react","AdsCouponUtils","AdsFluxContainer","AdsSelectorUtils","React","adsGrowthCouponFetchDataForAdAccountSelector","qex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsCouponUtils").getCheckIfCouponEnrolled;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(a){return b("AdsSelectorUtils").getStores([b("adsGrowthCouponFetchDataForAdAccountSelector")])};c.calculateState=function(a,c){a=b("adsGrowthCouponFetchDataForAdAccountSelector")();return{couponData:g(a,null)&&b("qex")._("684063")?a:null}};var d=c.prototype;d.componentDidMount=function(){b("adsGrowthCouponFetchDataForAdAccountSelector")()};d.render=function(){return this.state.couponData!=null?b("React").createElement(b("AdsCouponPagesManagerCouponPopover.react"),{contextRef:this.props.contextRef,couponData:this.state.couponData,isPromoteButtonNux:this.props.isPromoteButtonNux,position:this.props.position}):null};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{withProps:!0,name:e.id})}),null);
__d("TabBarDropdownItem.react",["cx","fbt","ContextualDialogArrow","ContextualLayerAutoFlip","InlineBlock.react","PopoverMenu.react","React","ReactXUIMenu","TabBarItem.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){var a=d.props.tabComponent,c="_45hd _45hc",e=b("React").createElement("span",{className:"accessible_elem"},h._("additional tabs menu"));return b("React").createElement(a,babelHelpers["extends"]({},d.props,{shouldWrapTab:!1,className:b("joinClasses")(d.props.className,c),tabIndex:0,mockSpacebarClick:!1}),b("React").createElement("span",{className:"_1b0"},d.props.label,e))},d.convertTabItemWrapperToMenuItem=function(a,c){var e=d.props.selected?b("ReactXUIMenu").SelectableItem:b("ReactXUIMenu").Item;a=b("React").Children.only(a.type.getComponent(a.props));return b("React").createElement(e,babelHelpers["extends"]({},a.props,{key:c,onclick:a.props.onClick}),a.props.children)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){if(this.props.children){var a=this.props.selected?b("ReactXUIMenu").SelectableMenu:b("ReactXUIMenu");a=b("React").createElement(a,{className:this.props.menuClassName,maxheight:this.props.maxDropdownHeight},this.props.children.map(this.convertTabItemWrapperToMenuItem));var c=[b("ContextualLayerAutoFlip"),b("ContextualDialogArrow")];return b("React").createElement("li",{className:(this.props.focused&&this.props.hideFocusRing?"_468f":"")+" _45hd",role:"tab"},b("React").createElement(b("PopoverMenu.react"),{alignh:this.props.menuAlignh,layerBehaviors:c,menu:a,onShow:this.props.onMenuShown},this.$1()))}else return b("React").createElement("li",{className:"_45hd"},b("React").createElement(b("InlineBlock.react"),null,this.$1()))};return c}(b("React").Component);c.propTypes={menuAlignh:a.string,menuClassName:a.string,tabComponent:a.func.isRequired,focused:a.bool,hideFocusRing:a.bool,maxDropdownHeight:a.number,onMenuShown:a.func};c.defaultProps={tabComponent:b("TabBarItem.react"),focused:!1,hideFocusRing:!1};e.exports=c}),null);