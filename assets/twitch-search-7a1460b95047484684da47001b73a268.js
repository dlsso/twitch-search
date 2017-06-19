"use strict";define("twitch-search/app",["exports","ember","twitch-search/resolver","ember-load-initializers","twitch-search/config/environment"],function(e,t,a,n,i){Object.defineProperty(e,"__esModule",{value:!0});var s=void 0;s=t.default.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:a.default}),(0,n.default)(s,i.default.modulePrefix),e.default=s}),define("twitch-search/components/search-bar",["exports","ember","twitch-search/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Component.extend({query:"",queryChanged:t.default.observer("query",function(){var e=this,n=this.get("query");if(n.length){var i={accept:"application/vnd.twitchtv.v5+json",client_id:a.default.apiKey,limit:"10",offset:"0",query:n};t.default.$.get("https://api.twitch.tv/kraken/search/streams",i).then(function(t){t.page_number=1,t.pages=Math.ceil(t._total/parseInt(i.limit)),t.page_number>=t.pages&&delete t._links.next,t._total||(t.no_results=!0),e.set("data",t)})}else this.set("data",{})})})}),define("twitch-search/components/stream-list",["exports","ember","twitch-search/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Component.extend({actions:{changePage:function(e){var n=this,i=e.split("?")[1],s=parseInt(i.split("limit=")[1].split("&")[0]),l=parseInt(i.split("offset=")[1].split("&")[0]),r={accept:"application/vnd.twitchtv.v5+json",client_id:a.default.apiKey};t.default.$.get(e,r).then(function(e){e.page_number=l/s+1,e.pages=Math.ceil(e._total/s),e.page_number>=e.pages&&delete e._links.next,e._total||(e.no_results=!0),n.set("data",e)})},handleKeyPress:function(e){37===event.keyCode&&e.prev&&this.send("changePage",e.prev),39===event.keyCode&&e.next&&this.send("changePage",e.next)}}})}),define("twitch-search/controllers/index",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Controller.extend({})}),define("twitch-search/helpers/app-version",["exports","ember","twitch-search/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a,n){function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.hideSha?s.match(n.versionRegExp)[0]:t.hideVersion?s.match(n.shaRegExp)[0]:s}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i;var s=a.default.APP.version;e.default=t.default.Helper.helper(i)}),define("twitch-search/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("twitch-search/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("twitch-search/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","twitch-search/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0});var n=a.default.APP,i=n.name,s=n.version;e.default={name:"App Version",initialize:(0,t.default)(i,s)}}),define("twitch-search/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("twitch-search/initializers/data-adapter",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("twitch-search/initializers/ember-data",["exports","ember-data/setup-container","ember-data/index"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("twitch-search/initializers/export-application-global",["exports","ember","twitch-search/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(!1!==a.default.exportApplicationGlobal){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var i,s=a.default.exportApplicationGlobal;i="string"==typeof s?s:t.default.String.classify(a.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("twitch-search/initializers/injectStore",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("twitch-search/initializers/store",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("twitch-search/initializers/transforms",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("twitch-search/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("twitch-search/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("twitch-search/router",["exports","ember","twitch-search/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0});var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});n.map(function(){}),e.default=n}),define("twitch-search/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("twitch-search/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"OFjLhFY/",block:'{"statements":[[1,[26,["outlet"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"twitch-search/templates/application.hbs"}})}),define("twitch-search/templates/components/search-bar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"JADwaDWN",block:'{"statements":[[1,[33,["input"],null,[["id","type","value","class","placeholder","autofocus"],["twitch-search","text",[28,["query"]],"form-control input-lg","Search streams","autofocus"]]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"twitch-search/templates/components/search-bar.hbs"}})}),define("twitch-search/templates/components/stream-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"W2mBti6w",block:'{"statements":[[11,"div",[]],[15,"class","results-container container"],[5,["action"],[[28,[null]],"handleKeyPress",[28,["data","_links"]]],[["on","preventDefault"],["keyDown",false]]],[13],[0,"\\n"],[6,["if"],[[28,["data","_total"]]],null,{"statements":[[0,"  "],[11,"div",[]],[15,"class","streams-header row"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","total-results col-xs-6"],[13],[0,"\\n      Total results: "],[1,[28,["data","_total"]],false],[0,"\\n    "],[14],[0,"\\n    "],[11,"div",[]],[15,"class","pagination-controls col-xs-6"],[15,"title","Use left and right arrow keys to change pages"],[13],[0,"\\n"],[6,["if"],[[28,["data","_links","prev"]]],null,{"statements":[[0,"        "],[11,"button",[]],[15,"tabindex","0"],[15,"class","prev-page"],[5,["action"],[[28,[null]],"changePage",[28,["data","_links","prev"]]]],[13],[0,"◀"],[14],[0,"\\n"]],"locals":[]},null],[0,"      "],[11,"span",[]],[13],[1,[28,["data","page_number"]],false],[0,"/"],[1,[28,["data","pages"]],false],[14],[0,"\\n"],[6,["if"],[[28,["data","_links","next"]]],null,{"statements":[[0,"        "],[11,"button",[]],[15,"tabindex","0"],[15,"class","next-page"],[5,["action"],[[28,[null]],"changePage",[28,["data","_links","next"]]]],[13],[0,"▶"],[14],[0,"\\n"]],"locals":[]},null],[0,"    "],[14],[0,"\\n  "],[14],[0,"\\n"]],"locals":[]},{"statements":[[6,["if"],[[28,["data","no_results"]]],null,{"statements":[[0,"  "],[11,"div",[]],[15,"class","streams-header row"],[13],[0,"\\n    "],[11,"span",[]],[15,"class","no-results col-xs-6"],[13],[0,"No results found!"],[14],[0,"\\n  "],[14],[0,"\\n"]],"locals":[]},null]],"locals":[]}],[6,["each"],[[28,["data","streams"]]],null,{"statements":[[0,"  "],[11,"div",[]],[15,"class","channel-row row"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","col-sm-4 col-md-3"],[13],[0,"\\n      "],[11,"div",[]],[15,"class","channel-preview"],[13],[0,"\\n        "],[11,"img",[]],[15,"class","preview-img"],[16,"src",[34,[[28,["stream","preview","medium"]]]]],[13],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n    "],[11,"div",[]],[15,"class","col-sm-8 col-md-9"],[13],[0,"\\n      "],[11,"div",[]],[15,"class","channel-info"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","channel-name"],[13],[1,[28,["stream","channel","display_name"]],false],[14],[0,"\\n        "],[11,"div",[]],[15,"class","channel-details"],[13],[1,[28,["stream","game"]],false],[0," - "],[1,[28,["stream","viewers"]],false],[0," viewers"],[14],[0,"\\n        "],[11,"div",[]],[15,"class","channel-description"],[13],[1,[28,["stream","channel","status"]],false],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"]],"locals":["stream"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"twitch-search/templates/components/stream-list.hbs"}})}),define("twitch-search/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"JGmPed9E",block:'{"statements":[[11,"div",[]],[15,"class","container"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","row"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","col-md-12"],[13],[0,"\\n      "],[11,"h1",[]],[13],[0,"Twitch Search"],[14],[0,"\\n      "],[11,"div",[]],[15,"class","input-group col-md-6"],[13],[0,"\\n        "],[1,[33,["search-bar"],null,[["data"],[[28,["model"]]]]],false],[0,"\\n        "],[11,"span",[]],[15,"class","input-group-btn"],[13],[0,"\\n          "],[11,"button",[]],[15,"tabindex","-1"],[15,"class","btn btn-lg"],[15,"type","button"],[13],[0,"\\n            "],[11,"i",[]],[15,"class","glyphicon glyphicon-search"],[13],[14],[0,"\\n          "],[14],[0,"\\n        "],[14],[0,"\\n      "],[14],[0,"\\n      "],[11,"div",[]],[13],[0,"\\n        "],[1,[33,["stream-list"],null,[["data"],[[28,["model"]]]]],false],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"twitch-search/templates/index.hbs"}})}),define("twitch-search/config/environment",["ember"],function(e){try{var t="twitch-search/config/environment",a=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),n=JSON.parse(unescape(a)),i={default:n};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("twitch-search/app").default.create({name:"twitch-search",version:"0.0.0+bc8566f1"});