if (self.CavalryLogger) { CavalryLogger.start_js(["O15fq"]); }

__d("PageContentTabExternalCreateAdsFromPostsActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"PagesContentTab.CREATE_ADS_FROM_POSTS"}}),null);
__d("AdsPECreationUIProviderPlugin",["AdObjectLevels","PageContentTabExternalCreateAdsFromPostsActionFlux","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={campaignStructurePlannerStarted:!1,creationStartLevel:b("AdObjectLevels").CAMPAIGN_GROUP,isCreationModeChooserShown:!1,isCreationOpen:!1,isReachFrequencyConfirmDialogOpen:!1,isOneClickDraftCreation:!1,quickCreateSource:null,quickCreateStarted:!1};var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record(a));c=function(){return new g()};d={initialState:c(),legacyFluxReduce:function(a,c){switch(c.type){case b("PageContentTabExternalCreateAdsFromPostsActionFlux").actionType:return a.merge({creationStartLevel:b("AdObjectLevels").CAMPAIGN_GROUP,isCreationModeChooserShown:!1,quickCreateSource:null,quickCreateStarted:!0,isOneClickDraftCreation:!1});default:return a}}};e.exports=d}),null);
__d("AdsPECreationUIProvider",["Laminar","AdsPECreationUIProviderPlugin"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("AdsPECreationUIProviderPlugin"),"AdsPECreationUIProviderPlugin")}),null);
__d("FDSPrivateBinaryInputSelectors",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b,c){if(b)return c.inputs.disabled.backgroundColor;return a?c.inputs.active.backgroundColor:void 0}function b(a,b,c){if(b)return c.inputs.disabled.boxShadow;return a?c.inputs.focused.boxShadow:c.inputs["default"].boxShadow}function c(a,b,c,d){if(c)return d.binaryControls.unchecked.disabled.border;return a||b?d.binaryControls.unchecked.active.border:d.binaryControls.unchecked.normal.border}function d(a,b){return a?b.inputs.size.large:b.inputs.size.medium}e.exports={backgroundColorSelector:a,boxShadowSelector:b,borderSelector:c,sizingSelector:d}}),null);
__d("fdsRadioListItemStyle",["cx","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a,c){return{className:b("joinClasses")(c,"_7b3-"+(a.checked?" _7b3_":"")+(a.isFocused?" _7b40":"")+(a.isDisabled?" _7b41":"")+(a.size==="medium"?" _7b42":""))}}e.exports={fdsRadioListItemStyle:a}}),null);
__d("useBoolean",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=b("React").useState;function a(a){a=h(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:g(function(){return c(function(a){return!a})},[]),setTrue:g(function(){return c(!0)},[]),setFalse:g(function(){return c(!1)},[])}}e.exports=a}),null);
__d("FDSBaseRadioListInput.react",["cx","FDSPrivateBinaryInputSelectors","FDSPrivateThemeContext.react","React","fdsRadioListItemStyle","useBoolean"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FDSPrivateBinaryInputSelectors").backgroundColorSelector,i=b("FDSPrivateBinaryInputSelectors").borderSelector,j=b("FDSPrivateBinaryInputSelectors").boxShadowSelector,k=b("FDSPrivateBinaryInputSelectors").sizingSelector,l=b("React").useCallback,m=b("React").useContext,n=b("fdsRadioListItemStyle").fdsRadioListItemStyle;function a(a){var c=b("useBoolean")(!1),d=c.value,e=c.setFalse;c=c.setTrue;var f=b("useBoolean")(!1),g=f.value,h=f.setFalse;f=f.setTrue;var i=a.size==="large",j=l(function(a){a.target.focus()},[]);return b("React").createElement("div",{className:"_7t6e"},b("React").createElement("input",babelHelpers["extends"]({},n({checked:a.checked,isFocused:g,isDisabled:a.isDisabled,size:a.size}),{"aria-describedby":a.describedBy,checked:a.checked,disabled:a.isDisabled,id:a.htmlForInputId,name:a.name,onBlur:h,onChange:a.onChange,onClick:j,onFocus:f,onMouseDown:c,onMouseUp:e,style:o(a.checked,d,g,a.isDisabled,i),type:"radio",value:a.value})),b("React").createElement("span",{className:"_7t6f",style:p(a.isDisabled,i)}))}function o(a,c,d,e,f){var g=m(b("FDSPrivateThemeContext.react"));c=h(c,e,g);a=i(a,d,e,g);d=j(d,e,g);e=k(f,g);return{boxShadow:d,border:a,backgroundColor:(f=c)!=null?f:void 0,height:e,minHeight:e,minWidth:e,width:e}}function p(a,c){var d=m(b("FDSPrivateThemeContext.react"));c=c?d.inputs.size.large:d.inputs.size.medium;return{height:c/2,backgroundColor:a?d.binaryControls.slider.disabled.backgroundColor:void 0,width:c/2}}e.exports=a}),null);
__d("AbstractTextArea.react",["cx","AbstractTextField.react","React","TextAreaControl"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").Component;c=b("React").PropTypes;d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidUpdate=function(){this.$2&&this.$2.onupdate()};d.componentWillUnmount=function(){this.$2=null};d.render=function(){var a=this;return b("React").createElement(b("AbstractTextField.react"),this.props,b("React").createElement("textarea",{className:"_58an",onClick:this.props.onClick,onMouseDown:this.props.onMouseDown,onKeyUp:this.props.onKeyUp,rows:this.props.rows,tabIndex:this.props.tabIndex,ref:function(b){a.$1=b,a.$3()}}))};d.$3=function(){if(this.$1&&this.props.autoGrow&&!this.$2){var a=new(b("TextAreaControl"))(this.$1);a.setAutogrow(!0);a.onupdate();this.$2=a}};d.focusInput=function(){this.$1&&this.$1.focus()};d.blurInput=function(){this.$1&&this.$1.blur()};d.getTextFieldDOM=function(){return this.$1};d.getValue=function(){return this.$1?this.$1.value:""};return c}(a);d.propTypes=babelHelpers["extends"]({},b("AbstractTextField.react").propTypes,{autoGrow:c.bool});e.exports=d}),null);
__d("PagesPageCoverClickFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("pages_page_cover_click");e.exports=a}),null);
__d("AdsAPIAdAccountFields",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCOUNT_CURRENCY_RATIO_TO_USD:"account_currency_ratio_to_usd",ACCOUNT_ID:"account_id",ACCOUNT_STATUS:"account_status",ACTIVE_ASL_SCHEDULE:"active_asl_schedule",ACTIVE_BILLING_DATE_PREFERENCE:"active_billing_date_preference",ADCAMPAIGNS:"adcampaigns",ADCAMPAIGN_GROUPS:"adcampaign_groups",ADCAMPAIGNSTATS:"adcampaignstats",ADCONTRACTS:"adcontracts",AGENCIES:"agencies",ASYNC_AD_COPIES:"asyncadcopies",AUDIENCE_STUDY_SIZE:"audience_study_size",AD_ACCOUNT_CREATION_REQUEST:"ad_account_creation_request",AD_ACCOUNT_PROMOTABLE_OBJECTS:"ad_account_promotable_objects",ADCREATIVES:"adcreatives",ADDRAFTS:"addrafts",ADGROUPS:"adgroups",ADGROUPSTATS:"adgroupstats",ADIMAGES:"adimages",ADLABELS:"adlabels",ADRULES:"adrules",ADRULES_OPERATION:"adrules_operation",ADREPORTSPECS:"adreportspecs",ADTAGS:"adtags",ADS_CREATION_SAVED_STATE:"ads_creation_saved_state",ADSPAYMENTCYCLE:"adspaymentcycle",AGE:"age",AGENCY_CLIENT_DECLARATION:"agency_client_declaration",ALL_PAYMENT_METHODS:"all_payment_methods",AMOUNT_SPENT:"amount_spent",ARCHIVED_CAMPAIGN_GROUP_COUNT:"archived_campaign_group_count",ARCHIVED_CAMPAIGN_COUNT:"archived_campaign_count",ARCHIVED_ADGROUP_COUNT:"archived_adgroup_count",ATTRIBUTION_SPEC:"attribution_spec",ASSET_FEED_SPEC_FROM_EXISTING_POST:"asset_feed_spec_from_existing_post",AUDI_EXTRACT_BANNED_TERMS:"audi_extract_banned_terms",AUDIENCES:"audiences",AVERAGE_DAILY_CAMPAIGN_BUDGET:"average_daily_campaign_budget",AVERAGE_LIFETIME_CAMPAIGN_BUDGET:"average_lifetime_campaign_budget",BALANCE:"balance",BANK_INFO_LIST:"bank_info_list",BRANDS:"brands",BRAND_AUDIENCES:"brand_audiences",BROADTARGETINGCATEGORIES:"broadtargetingcategories",BUSINESS:"business",BUSINESS_AD_ACCOUNT_REQUESTS:"business_ad_account_requests",BUSINESS_CITY:"business_city",BUSINESS_COUNTRY_CODE:"business_country_code",BUSINESS_ENTITY:"business_entity",BUSINESS_NAME:"business_name",BUSINESS_STATE:"business_state",BUSINESS_STREET:"business_street",BUSINESS_STREET2:"business_street2",BUSINESS_ZIP:"business_zip",BUSINESS_VERIFICATION_STATUS:"business_verification_status",BUSINESSLABELS:"businessprojects",CAN_BYPASS_FS_CHECK:"can_bypass_fs_check",CAN_CREATE_BRAND_LIFT_STUDY:"can_create_brand_lift_study",CAN_PAY_NOW:"can_pay_now",CAN_REMOVE_CREDIT_CARDS:"can_remove_credit_cards",CAN_REPAY_NOW:"can_repay_now",CAPABILITIES:"capabilities",CHECKOUT:"checkout",CHECKOUT_PAYMENTS:"checkout_payments",CHECKOUT_UNALLOCATED_BALANCE:"checkout_unallocated_balance",CLIENT_TRANSPARENCY_STATUS:"client_transparency_status",CONNECTIONOBJECTS:"connectionobjects",CREATED_TIME:"created_time",CROSS_APP_DRAFT_FRAGMENT_COPIES:"cross_app_draft_fragment_copies",CURRENT_ADDRAFTS:"current_addrafts",CURRENCY:"currency",CURRENT_UNBILLED_SPEND:"current_unbilled_spend",CURRENT_UNPAID_UNREPAID_INVOICE:"current_unpaid_unrepaid_invoice",CUSTOM_AUDIENCES:"customaudiences",CUSTOMER_PO_NUMBER:"customer_po_number",DIRECT_DEALS_TOS:"direct_deals_tos",DCAF:"dcaf",DEFAULT_DESTINATION:"default_destination",DEFAULT_OBJECTIVE:"default_objective",DEFAULT_VALUES:"default_values",DIRECT_DEALS_TOS_ACCEPTED:"direct_deals_tos_accepted",DISABLE_REASON:"disable_reason",END_ADVERTISER:"end_advertiser",END_ADVERTISER_NAME:"end_advertiser_name",EXTENDED_CREDIT_INFO:"extended_credit_info",EXTENDED_CREDIT_INVOICE_GROUP:"extended_credit_invoice_group",EXTENDED_CREDIT_STATUS:"extended_credit_status",FAILED_DELIVERY_CHECKS:"failed_delivery_checks",FB_ENTITY:"fb_entity",FRIENDLY_NAME:"friendly_name",FUNDING_SOURCE:"funding_source",FUNDING_SOURCE_DETAILS:"funding_source_details",HAS_PAGE_AUTHORIZED_ADACCOUNT:"has_page_authorized_adaccount",HAS_EXTENDED_CREDIT:"has_extended_credit",HAS_MIGRATED_PERMISSIONS:"has_migrated_permissions",HAS_REPAY_PROCESSING_INVOICES:"has_repay_processing_invoices",ID:"id",IO_NUMBER:"io_number",INVOICING_EMAILS:"invoicing_emails",IS_ATTRIBUTION_SPEC_SYSTEM_DEFAULT:"is_attribution_spec_system_default",IS_BIZ_MIGRATION_ELIGIBLE:"is_biz_migration_eligible",IS_BR_ENTITY_ACCOUNT:"is_br_entity_account",IS_DIRECT_DEALS_ENABLED:"is_direct_deals_enabled",IS_NOTIFICATIONS_ENABLED:"is_notifications_enabled",IS_OBA_OPT_OUT:"is_oba_opt_out",IS_PERSONAL:"is_personal",IS_PREPAY_ACCOUNT:"is_prepay_account",IS_TAX_ID_REQUIRED:"is_tax_id_required",IS_TIER_0:"is_tier_0",IS_TIER_0_FULL:"is_tier_0_full",IS_TIER_1:"is_tier_1",IS_UPDATE_TIMEZONE_CURRENCY_TOO_RECENTLY:"is_update_timezone_currency_too_recently",IS_IN_MIDDLE_OF_LOCAL_ENTITY_MIGRATION:"is_in_middle_of_local_entity_migration",IS_IN_3DS_AUTHORIZATION_ENABLED_MARKET:"is_in_3ds_authorization_enabled_market",LIABLE_ADDRESS:"liable_address",LIABLE_ADDRESSES:"liable_addresses",LINE_NUMBERS:"line_numbers",MAX_BILLING_THRESHOLD:"max_billing_threshold",MEDIA_AGENCY:"media_agency",MIN_BILLING_THRESHOLD:"min_billing_threshold",MIN_CAMPAIGN_GROUP_SPEND_CAP:"min_campaign_group_spend_cap",MIN_DAILY_BUDGET:"min_daily_budget",MIN_PAYMENT:"min_payment",MOO_DEFAULT_CONVERSION_BID:"moo_default_conversion_bid",NAME:"name",NAMING_TEMPLATES:"naming_templates",NEXT_BILL_DATE:"next_bill_date",OFFSITE_PIXELS_TOS_ACCEPTED:"offsite_pixels_tos_accepted",ON_BEHALF_OF:"on_behalf_of",OPTIMAL_DELIVERY_GROWTH_OPPORTUNITIES:"optimal_delivery_growth_opportunities",OWNER:"owner",PAGES_IN_AUTHORIZATIONS:"pages_in_authorizations",PARTNER:"partner",PAYMENT_OPTIONS:"payment_options",PENDING_BILLING_DATE_PREFERENCE:"pending_billing_date_preference",PLACEMENT_USAGE:"placement_usage",PREPAY_ACCOUNT_BALANCE:"prepay_account_balance",PREPAY_DETAILS:"prepay_details",PROMOTION_PROGRESS_BAR_INFO:"promotion_progress_bar_info",REACHESTIMATE:"reachestimate",REQUIRED_TAX_ID_TYPE:"required_tax_id_type",RF_SPEC:"rf_spec",SAVED_AUDIENCES:"saved_audiences",SELF_RESOLVE_URI:"self_resolve_uri",SEND_BILL_TO_ADDRESS:"send_bill_to_address",SEND_BILL_TO_ADDRESSES:"send_bill_to_addresses",SOLD_TO_ADDRESS:"sold_to_address",SOLD_TO_ADDRESSES:"sold_to_addresses",SHOW_CHECKOUT_EXPERIENCE:"show_checkout_experience",SHOW_IMPROVED_BOLETO:"show_improved_boleto",SPEND_CAP:"spend_cap",SPEND_LIMITS:"spendlimits",STATS:"stats",STORED_BALANCE_STATUS:"stored_balance_status",SUBSIDY_AMOUNT_DETAILS:"subsidy_amount_details",SUGGESTED_CAMPAIGN_BUDGET:"suggested_campaign_budget",TAX_ID:"tax_id",TAX_ID_STATUS:"tax_id_status",TAX_ID_TYPE:"tax_id_type",TIMEZONE_ID:"timezone_id",TIMEZONE_NAME:"timezone_name",TIMEZONE_OFFSET_HOURS_UTC:"timezone_offset_hours_utc",TIMEZONE_OFFSETS:"timezoneoffsets",TOS_ACCEPTED:"tos_accepted",USER_TOS_ACCEPTED:"user_tos_accepted",TOTAL_PREPAY_BALANCE:"total_prepay_balance",TRANSACTIONS:"transactions",TRANSACTION_DETAILS:"transaction_details",UNIQUE_ADCREATIVES:"unique_adcreatives",AUDIENCE_UPDATE_QUOTA_LEFT:"audience_update_quota_left",USER_ROLE:"user_role",USER_SETTINGS:"user_settings",USERPERMISSIONS:"userpermissions",USERS:"users",VERTICAL_ID:"vertical_id",VERTICAL_NAME:"vertical_name",VIEWABLE_BUSINESS:"viewable_business",BLOCKED_PLACEMENTS:"blocked_placements",POLICY_RISK_LEVEL:"policy_risk_level",ADTRUST_DSL:"adtrust_dsl",CONVERSION_HEALTH_KPI:"conversion_health_kpi",BLOCK_LIST_USAGE:"block_list_usage",AUTHORIZED_COUNTRY_FOR_POLITICAL_ADS:"authorized_country_for_political_ads",PAGE_AUTHORIZED_COUNTRY_FOR_POLITICAL_ADS:"page_authorized_country_for_political_ads",ADVANCED_MATCHING_KPI:"advanced_matching_kpi"})}),null);
__d("AdsHelpTrayContentType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ARTICLE:"ARTICLE",CONTEXTUAL_RECOMMENDATIONS:"CONTEXTUAL_RECOMMENDATIONS",HOME:"HOME",POLICY_INFO:"POLICY_INFO",POLICY_PAGE:"POLICY_PAGE",RELEASE_NOTES:"RELEASE_NOTES",SAVED_TIP:"SAVED_TOP",SEARCH:"SEARCH",WORKFLOW:"WORKFLOW"})}),null);
__d("EventTourBadgeEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NO_TOUR:"no_tour",TOUR_BADGE_HIDDEN:"tour_badge_hidden",TOUR_BADGE_SHOWN:"tour_badge_shown"})}),null);
__d("PageActionURLHandlerType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ASYNC_DIALOG:"async-dialog",ASYNC_POST:"async-post",DIALOG:"dialog",DIALOG_POST:"dialog-post",LINK_OUT:"link-out",LINK_OUT_NEW_TAB:"link-out-new-tab"})}),null);
__d("PageLiveVideoNotifSettingType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXPLICIT:"on",INFERRED:"inferred",UNSUBSCRIBE:"off"})}),null);
__d("PagesCoverAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LOADING:"loading",NEW_COVER_DATA:"new_cover_data",COVER_REMOVING:"cover_removing",PHOTO_UPLOADING:"photo_uploading",PHOTO_PREVIEWING:"photo_previewing",PHOTO_SAVING:"photo_saving",PHOTO_SAVED:"photo_saved",PHOTO_CANCEL:"photo_cancel",PHOTO_REMOVED:"photo_removed",VIDEO_START_UPLOAD:"video_start_upload",VIDEO_UPLOADING:"video_uploading",VIDEO_ENCODING:"video_encoding",VIDEO_REPOSITIONED:"video_repositioned",VIDEO_PREVIEWING:"video_previewing",VIDEO_CHOOSING_THUMBNAIL:"video_choosing_thumbnail",VIDEO_PUBLISHING:"video_publishing",VIDEO_PUBLISHED:"video_published",VIDEO_CANCELLING:"video_cancelling",VIDEO_INVALID_UPLOAD:"video_invalid_upload",SLIDESHOW_EDIT:"slideshow_edit",SLIDESHOW_PHOTO_PREVIEWING:"slideshow_photo_previewing",SLIDESHOW_VIDEO_START_UPLOAD:"slideshow_video_start_upload",SLIDESHOW_VIDEO_UPLOADING:"slideshow_video_uploading",SLIDESHOW_VIDEO_ENCODING:"slideshow_video_encoding",SLIDESHOW_VIDEO_ENCODE_FINISHED:"slideshow_video_encode_finished",SLIDESHOW_VIDEO_SETTING_CONFIRMED:"slideshow_video_setting_confirmed",SLIDESHOW_VIDEO_UPLOADING_FAILED:"slideshow_video_uploading_failed",SLIDESHOW_VIDEO_POSTING_FAILED:"slideshow_video_encoding_failed",SLIDESHOW_CHANGE_CAROUSEL_INDEX:"slideshow_change_carousel_index",SLIDESHOW_PHOTO_UPLOADING:"slideshow_photo_uploading",SLIDESHOW_ITEM_REPOSITIONED:"slideshow_item_repositioned",SLIDESHOW_VIDEO_REPOSITIONED:"slideshow_video_repositioned",SLIDESHOW_PHOTO_REMOVED:"slideshow_photo_removed",SLIDESHOW_EDITING_CANCELLED:"slideshow_editing_cancelled",SLIDESHOW_SAVING:"slideshow_saving",SLIDESHOW_CHANGE_ORDER:"slideshow_change_order",SLIDESHOW_NUX_TOUR_ELEMENT_LOADED:"slideshow_nux_tour_element_loaded",SLIDESHOW_NUX_TOUR_FINISHED:"slideshow_nux_tour_finished",SLIDESHOW_TOGGLE_CONTENT_SWITCHER:"slideshow_toggle_content_switcher",SLIDESHOW_PREFILLED_PHOTO_LOADED:"slideshow_prefilled_photo_loaded",SLIDESHOW_CLICK_CANCEL_BUTTON:"slideshow_click_cancel_button",SLIDESHOW_EDITABLE_ITEM_LOADED:"slideshow_editable_item_loaded",LIVE_VIDEO_ENABLE:"live_video_enable",LIVE_VIDEO_DISABLE:"live_video_disable",ON_TOUR_BADGE_UPDATED:"on_tour_badge_updated"})}),null);
__d("PagesCoverSlideshowItemType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PHOTO:"photo",VIDEO:"video"})}),null);
__d("PagesCoverSlideshowNumberType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MAX_NUM_ITEMS_IN_SLIDESHOW:5})}),null);
__d("PagesCoverSlideshowOptimizerStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ON:"on",OFF:"off"})}),null);
__d("PagesCoverTrailerState",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({WATCH_TRAILER:"watch_trailer",RESUME_EPISODE:"resume_episode",LATEST_EPISODE:"latest_episode",LIVE_VIDEO:"live_video",GAMESHOW_VIDEO:"gameshow_video"})}),null);
__d("PagesCoverType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COVER_PHOTO:"cover_photo",COVER_SLIDESHOW:"cover_slideshow",COVER_TRAILER:"cover_trailer",COVER_VIDEO:"cover_video",COVER_LIVE_VIDEO:"cover_live_video",NO_COVER:"no_cover",LOADING:"loading"})}),null);
__d("PagesCoverVideoDurationType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MIN_PLAYABLE_DURATION_IN_SEC:20,MAX_PLAYABLE_DURATION_IN_SEC:120})}),null);
__d("PagesHeaderRecommendPageButtonActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INIT_DATA:"init_data",RECOMMEND_CHANGED:"recommend_changed"})}),null);
__d("ShowsWebdriverTestDataIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACTION_ITEMS_NOTICE_BOX:"action_items_notice_box",CREATE_SHOW_ADD_DESCRIPTION:"create_show_add_description",CREATE_SHOW_ADD_NAME_FIELD:"create_show_add_name_field",CREATE_SHOW_BUTTON:"create_show-button",SHOW_PAGE_FEATURED_VIDEO_CONTAINER:"SHOW_PAGE_FEATURED_VIDEO_CONTAINER"})}),null);
__d("XEventTourBadgeOnPagesCoverController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/tour/badge/",{page_id:{type:"FBID",required:!0},tour_ids:{type:"FBIDSet"},enable:{type:"Bool",defaultValue:!1},entry_point:{type:"Enum",defaultValue:"page_cover",enumType:1}})}),null);
__d("XPagesCoverCancelEditAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_delete_media/",{})}),null);
__d("XPagesCoverLiveVideoToggleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_live_video_toggle/",{})}),null);
__d("XPagesCoverOverlayEditAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_overlay_edit/",{})}),null);
__d("XPagesCoverOverlayRemoveAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_overlay_remove/",{})}),null);
__d("XPagesCoverPhotoSaveAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_photo_save/",{focus_x:{type:"Float",required:!0},focus_y:{type:"Float",required:!0},page_id:{type:"FBID",required:!0},photo_id:{type:"FBID",required:!0}})}),null);
__d("XPagesCoverReloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_reload/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XPagesCoverRemoveAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_remove/",{})}),null);
__d("XPagesCoverSlideshowEditableItemsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_slideshow/editable_items/",{page_id:{type:"FBID",required:!0},optimizer_status:{type:"String"}})}),null);
__d("XPagesCoverSlideshowSaveAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_slideshow/save/",{})}),null);
__d("XPagesCoverVideoDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_video_data/",{video_id:{type:"FBID",required:!0},supports_html5_video:{type:"Bool",defaultValue:!0},include_thumbnails:{type:"Bool",defaultValue:!1}})}),null);
__d("XPagesCoverVideoFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_video_fetch/",{page_id:{type:"FBID",required:!0},count:{type:"Int",required:!0},cursor:{type:"String"}})}),null);
__d("XPagesCoverVideoPublishController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_video_publish/",{})}),null);
__d("XPagesCoverVideoRollbackAndDeleteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_video_rollback_and_delete/",{page_id:{type:"FBID",required:!0},video_id:{type:"FBID",required:!0}})}),null);
__d("XPagesCoverVideoUploaderController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/profile/cover_video_upload/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XPagesMessagePageOwnerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/send_page_message/",{message:{type:"String",required:!0},page_id:{type:"String",required:!0}})}),null);
__d("XRecommendPageDeleteRecommendationDialogAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/async/recommendation/action_bar/delete_dialog/",{page_id:{type:"FBID",required:!0},__asyncDialog:{type:"Int"}})}),null);