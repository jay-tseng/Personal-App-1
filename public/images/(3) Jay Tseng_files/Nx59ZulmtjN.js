if (self.CavalryLogger) { CavalryLogger.start_js(["FfHBr"]); }

__d("AYMTHomepagePanelLogger",["BanzaiLogger","Event","tidyEvent"],(function(a,b,c,d,e,f){a={init:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(a){b("BanzaiLogger").log("AYMTHomepagePanelLoggerConfig",c)}))}};e.exports=a}),null);
__d("FDSTextCodeRender.react",["cssVar","FDSCard.react","FDSSection.react","FDSText.react","FlexLayout.react","React","SourceCode.react","SUIBusinessTheme","SUIRadioList.react","SUIText.react","SUITextUniform.fds","SUITheme","firstx","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state=d.$1(),d.$2=i(b("SUITextUniform.fds")),d.$3=l(b("SUITextUniform.fds")),d.$5=function(a){a=a.split("-");var b=a[0];a=a[1];a!=="bold"&&a!=="normal"&&(a="normal");b=b;var c=d.$4(b,d.$2);d.setState({selectedColor:c,selectedSize:b,selectedWeight:a})},d.$6=function(a){return d.setState({selectedColor:a})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){var a=i(b("SUITextUniform.fds")),c=a[0];return{selectedColor:this.$4(c.size,a),selectedWeight:b("firstx")(c.weight),selectedSize:c.size}};d.$4=function(a,c){if(!a)return null;c=c.find(function(b){return b.size===a});return c?b("firstx")(c.colors):null};d.render=function(){return b("React").createElement(b("FDSCard.react"),null,b("React").createElement(b("FDSSection.react"),null,b("React").createElement(b("FlexLayout.react"),{align:"stretch",direction:"horizontal"},b("React").createElement("div",{style:{padding:8,flex:"1 0 50%"}},b("React").createElement(j,{onChange:this.$5,size:this.state.selectedSize,textTypes:this.$2,weight:this.state.selectedWeight})),b("React").createElement("div",{style:{padding:8,flex:"1 0 50%"}},b("React").createElement(m,{color:this.state.selectedColor,colorTypes:this.$3,onChange:this.$6,size:this.state.selectedSize,textTypes:this.$2}))),b("React").createElement(o,{color:this.state.selectedColor,size:this.state.selectedSize,weight:this.state.selectedWeight})))};return c}(b("React").PureComponent);a.contextTypes={theme:b("prop-types").instanceOf(b("SUITheme"))};var h=[{name:"Header 1",size:"header1",colors:["primary","primaryDark","white"],weight:["normal"]},{name:"Header 2",size:"header2",colors:["primary","primaryDark","white"],weight:["normal"]},{name:"Header 3",size:"header3",colors:["primary","primaryDark","white"],weight:["bold"]},{name:"Header 4",size:"header4",colors:["primary","primaryDark","white"],weight:["bold"]},{name:"Body 1",size:"body1",colors:["primary","secondary","blueLink","placeholder","disabled","interactive","white","positive","negative","primaryDark","secondaryDark","disabledDark"],weight:["bold","normal"]},{name:"Body 2",size:"body2",colors:["primary","secondary","blueLink","placeholder","disabled","interactive","white","positive","negative","primaryDark","secondaryDark","disabledDark"],weight:["bold","normal"]},{name:"Body 3",size:"body3",colors:["primary","secondary","blueLink","placeholder","disabled","interactive","white","positive","negative","primaryDark","secondaryDark","disabledDark"],weight:["bold","normal"]},{name:"Meta",size:"meta1",colors:["secondary","secondaryDark","positive","negative"],weight:["normal"]}];function i(a){return h.map(function(b){return babelHelpers["extends"]({},b,{fontSize:a[b.size].fontSize,lineHeight:a[b.size].lineHeight})})}function j(a){var c=a.onChange,d=a.size,e=a.weight;a=a.textTypes;return b("React").createElement(b("SUIRadioList.react"),{onChange:c,radioAlignment:"center",theme:b("SUIBusinessTheme"),value:d&&e?d+"-"+e:null},a.reduce(function(a,d){d.weight.includes("normal")&&a.push(b("React").createElement(b("SUIRadioList.react").Item,{key:d.size+"-normal",onSelect:c,theme:b("SUIBusinessTheme"),value:d.size+"-normal"},b("React").createElement(b("FlexLayout.react"),{align:"center",direction:"horizontal",justify:"all"},b("React").createElement(b("FDSText.react"),{display:"block",size:d.size},d.name),b("React").createElement(b("FDSText.react"),{display:"block",size:"body2"},d.fontSize,"/",d.lineHeight))));d.weight.includes("bold")&&a.push(b("React").createElement(b("SUIRadioList.react").Item,{key:d.size+"-bold",onSelect:c,value:d.size+"-bold"},b("React").createElement(b("FlexLayout.react"),{align:"center",direction:"horizontal",justify:"all"},b("React").createElement(b("FDSText.react"),{display:"block",size:d.size,weight:"bold"},d.name),b("React").createElement(b("FDSText.react"),{display:"block",size:"body2"},d.fontSize,"/",d.lineHeight))));return a},[]))}var k=[{name:"Primary",color:"primary",palette:"light"},{name:"Secondary",color:"secondary",palette:"light"},{name:"Blue Link",color:"blueLink",palette:"light"},{name:"Placeholder",color:"placeholder",palette:"light"},{name:"Disabled",color:"disabled",palette:"light"},{name:"Highlight",color:"interactive",palette:"light"},{name:"White",color:"white",palette:"light"},{name:"Positive",color:"positive",palette:"light"},{name:"Negative",color:"negative",palette:"light"},{name:"(Dark) Primary",color:"primaryDark",palette:"dark"},{name:"(Dark) Secondary",color:"secondaryDark",palette:"dark"},{name:"(Dark) Disabled",color:"disabledDark",palette:"dark"}];function l(a){return k.map(function(b){return babelHelpers["extends"]({},b,{value:a.color[b.color]})})}function m(a){__p&&__p();var c=a.color,d=a.colorTypes,e=a.onChange,f=a.size;a=a.textTypes;if(!f)return null;a=a.find(function(a){return a.size===f});if(!a)return null;var g=a.colors;a=d.filter(function(a){return g.includes(a.color)}).map(function(a){return b("React").createElement(b("SUIRadioList.react").Item,{key:a.color,onSelect:e,theme:b("SUIBusinessTheme"),value:a.color},b("React").createElement(b("FlexLayout.react"),{align:"center",direction:"horizontal",justify:"start"},b("React").createElement("div",{style:{borderRadius:2,height:12,width:12,backgroundColor:a.value}}),b("React").createElement("div",{style:{marginLeft:8}},b("React").createElement(b("SUIText.react"),{size:"body2"},a.name))))});return b("React").createElement(b("SUIRadioList.react"),{onChange:e,radioAlignment:"center",theme:b("SUIBusinessTheme"),value:c},a)}function n(a){if(!a)return"primary";switch(a){case"primaryDark":return"primary";case"secondaryDark":return"secondary";case"disabledDark":return"disabled";case"interactive":return"highlight";default:return a}}function o(a){var c=a.size,d=a.color;a=a.weight;if(!c||!d||!a)return null;var e="light";d.includes("Dark")&&(e="dark");var f=e==="dark"?' palette="dark"':"",g=a==="bold"?' weight="bold"':"",h=n(d);f='<FDSText color="'+h+'"'+f+' size="'+c+'"'+g+">\n  The quick brown fox jumps over the lazy dog\n</FDSText>";return b("React").createElement("div",null,b("React").createElement("div",{style:{backgroundColor:d==="white"?"#000000":"#FFFFFF",marginTop:16}},b("React").createElement(b("FDSText.react"),{color:h,palette:e,size:c,weight:a},"The quick brown fox jumps over the lazy dog")),b("React").createElement(b("SourceCode.react"),{isClickToSelectEnabled:!0},f))}e.exports=a}),null);