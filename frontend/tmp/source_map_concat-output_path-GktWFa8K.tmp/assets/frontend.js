"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('frontend/adapters/application', ['exports', 'ember-data', 'frontend/config/environment', 'frontend/adapters/custom-adapter'], function (exports, _emberData, _frontendConfigEnvironment, _frontendAdaptersCustomAdapter) {

  var adapter = _emberData['default'].RESTAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'api'
  });

  if (_frontendConfigEnvironment['default'].environment === 'production') {
    adapter = _frontendAdaptersCustomAdapter['default'];
  }

  exports['default'] = adapter;
});
define('frontend/adapters/custom-adapter', ['exports', 'ember-data'], function (exports, _emberData) {

  var adapter = _emberData['default'].RESTAdapter.extend({
    host: 'https://stocksentimentanalyzer.herokuapp.com',
    namespace: 'api'
  });

  exports['default'] = adapter;
});
define('frontend/app', ['exports', 'ember', 'frontend/resolver', 'ember-load-initializers', 'frontend/config/environment'], function (exports, _ember, _frontendResolver, _emberLoadInitializers, _frontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _frontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _frontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _frontendResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _frontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('frontend/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('frontend/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('frontend/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('frontend/controllers/article', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('frontend/controllers/company', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('frontend/helpers/app-version', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _frontendConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('frontend/helpers/calculate-change', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.calculateChange = calculateChange;

  function calculateChange(params /*, hash*/) {
    var _params = _slicedToArray(params, 2);

    var prev = _params[0];
    var curr = _params[1];

    var diff = curr - prev;

    diff = Math.abs(parseFloat(Math.round(diff * 100) / 100)).toFixed(2);

    return '' + diff;
  }

  exports['default'] = _ember['default'].Helper.helper(calculateChange);
});
define('frontend/helpers/format-values', ['exports', 'ember'], function (exports, _ember) {
  exports.formatValues = formatValues;

  function formatValues(number) {
    number = parseFloat(Math.round(number * 100) / 100).toFixed(2);
    return number;
  }

  exports['default'] = _ember['default'].Helper.helper(formatValues);
});
define('frontend/helpers/is-positive', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.isPositive = isPositive;

  function isPositive(params) {
    var _params = _slicedToArray(params, 2);

    var prev = _params[0];
    var curr = _params[1];

    var diff = curr - prev;

    return diff > 0;
  }

  exports['default'] = _ember['default'].Helper.helper(isPositive);
});
define('frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _frontendConfigEnvironment) {
  var _config$APP = _frontendConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('frontend/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('frontend/initializers/export-application-global', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_frontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _frontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_frontendConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('frontend/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('frontend/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('frontend/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("frontend/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('frontend/models/article', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    company: _emberData['default'].belongsTo('company', { async: true }),
    title: _emberData['default'].attr('string'),
    url: _emberData['default'].attr('string'),
    sentiment: _emberData['default'].attr('number'),
    anger: _emberData['default'].attr('number'),
    disgust: _emberData['default'].attr('number'),
    fear: _emberData['default'].attr('number'),
    joy: _emberData['default'].attr('number'),
    sadness: _emberData['default'].attr('number'),
    company_id: _emberData['default'].attr('number')
  });
});
define('frontend/models/company', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    symbol: _emberData['default'].attr('string'),
    slug: _emberData['default'].attr('string'),
    sentiment: _emberData['default'].attr('number'),
    anger: _emberData['default'].attr('number'),
    disgust: _emberData['default'].attr('number'),
    fear: _emberData['default'].attr('number'),
    joy: _emberData['default'].attr('number'),
    sadness: _emberData['default'].attr('number'),
    prev_sentiment: _emberData['default'].attr('number'),
    prev_anger: _emberData['default'].attr('number'),
    prev_disgust: _emberData['default'].attr('number'),
    prev_fear: _emberData['default'].attr('number'),
    prev_joy: _emberData['default'].attr('number'),
    prev_sadness: _emberData['default'].attr('number'),
    articles: _emberData['default'].hasMany('article', { async: true }),
    values: _ember['default'].computed('sentiment', 'anger', 'disgust', 'fear', 'joy', 'sadness', function () {
      return {
        sentiment: this.get('sentiment') > -0.005,
        anger: this.get('anger') > -0.005,
        disgust: this.get('disgust') > -0.005,
        fear: this.get('fear') > -0.005,
        joy: this.get('joy') > 0.005,
        sadness: this.get('sadness') > -0.005
      };
    }),
    changes: _ember['default'].computed('sentiment', 'prev_sentiment', 'anger', 'prev_anger', 'disgust', 'prev_disgust', 'fear', 'prev_fear', 'joy', 'prev_joy', 'sadness', 'prev_sadness', function () {
      return {
        sentiment: this.get('sentiment') > this.get('prev_sentiment'),
        anger: this.get('anger') > this.get('prev_anger'),
        disgust: this.get('disgust') > this.get('prev_disgust'),
        fear: this.get('fear') > this.get('prev_fear'),
        joy: this.get('joy') > this.get('prev_joy'),
        sadness: this.get('sadness') > this.get('prev_sadness')
      };
    })
  });
});
define('frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _frontendConfigEnvironment['default'].locationType,
    rootURL: _frontendConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('companies', { path: '/' });
    this.route('articles', { path: 'articles' });
    this.route('company', { path: 'companies/:company_slug' });
    this.route('article', { path: 'articles/:article_id' });
  });

  exports['default'] = Router;
});
define('frontend/routes/article', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      console.log(params);
      var company = this.modelFor('company');
      return this.store.query('article', { company_id: company.id });
    }
  });
});
define('frontend/routes/articles', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('article');
    }
  });
});
define('frontend/routes/companies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('company');
    }
  });
});
define('frontend/routes/company', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return this.store.queryRecord('company', { slug: params.company_slug });
    }
  });
});
define('frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JKpU59fN", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"id\",\"header\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Stock Sentiment\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"header-right\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Created by Trevor Scandalios\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"social-list\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://www.linkedin.com/in/trevorscandalios\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"append\",[\"helper\",[\"fa-icon\"],[\"linkedin\"],null],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://angel.co/trevor-scandalios\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"append\",[\"helper\",[\"fa-icon\"],[\"angellist\"],null],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:trevorscandalios@gmail.com\"],[\"static-attr\",\"target\",\"_top\"],[\"flush-element\"],[\"append\",[\"helper\",[\"fa-icon\"],[\"envelope\"],null],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "frontend/templates/application.hbs" } });
});
define("frontend/templates/article", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LxZh8c8d", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"url\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "frontend/templates/article.hbs" } });
});
define("frontend/templates/articles", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FxmDZ8s/", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"unknown\",[\"article\",\"url\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"article\"]}],\"hasPartials\":false}", "meta": { "moduleName": "frontend/templates/articles.hbs" } });
});
define("frontend/templates/companies", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "k4ew7EN9", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container group info-header group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"span-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Stock Sentiment\"],[\"close-element\"],[\"text\",\" keeps a running average of what people are saying about publicly listed companies. It uses the \"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"text\",\"Intrinio News API\"],[\"close-element\"],[\"text\",\" to pull recent stories about companies and the \"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"text\",\"Watson Alchemy API\"],[\"close-element\"],[\"text\",\" to analyze their sentiment and emotion.\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container group company-header\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title-header span-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"span-9\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"column-names\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Sentiment\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Anger\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Disgust\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Fear\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Joy\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Sadness\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container group company-list\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,13],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"disclaimer\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"disclaimer-text\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Notice:\"],[\"close-element\"],[\"text\",\" StockSentiment should not be used as an investment tool, and is only for entertainment/informational purposes. Also, due to API cost limitations, not all of the data is current, as it is only possible to analyze recent articles for a handful of companies per day. If you would like to help increase the daily API limit, please don't hesitate to donate. All funds will go towards increasing the amount of companies that are be analyzed each day.\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"disclaimer-button\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"donate-button\"],[\"static-attr\",\"href\",\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EZG9VXKE4XBQA\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n        Donate\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"unknown\",[\"company\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"company-info group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"company-name span-3\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"company\",[\"get\",[\"company\",\"slug\"]]],null,12],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"company-values span-9\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"sentiment\"]],\"positive\",\"negative\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"value \",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"values\",\"sentiment\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"company\",\"sentiment\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"sentiment\"]]],null,11,10],[\"text\",\"              \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"company\",\"prev_sentiment\"]],[\"get\",[\"company\",\"sentiment\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"anger\"]],\"positive\",\"negative\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"value \",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"values\",\"anger\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"company\",\"anger\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"anger\"]]],null,9,8],[\"text\",\"              \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"company\",\"prev_anger\"]],[\"get\",[\"company\",\"anger\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"disgust\"]],\"positive\",\"negative\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"value \",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"values\",\"disgust\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"company\",\"disgust\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"disgust\"]]],null,7,6],[\"text\",\"              \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"company\",\"prev_disgust\"]],[\"get\",[\"company\",\"disgust\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"fear\"]],\"positive\",\"negative\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"value \",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"values\",\"fear\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"company\",\"fear\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"fear\"]]],null,5,4],[\"text\",\"              \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"company\",\"prev_fear\"]],[\"get\",[\"company\",\"fear\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"joy\"]],\"positive\",\"negative\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"value \",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"values\",\"joy\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"company\",\"joy\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"joy\"]]],null,3,2],[\"text\",\"              \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"company\",\"prev_joy\"]],[\"get\",[\"company\",\"joy\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"sadness\"]],\"positive\",\"negative\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"value  \",[\"helper\",[\"if\"],[[\"get\",[\"company\",\"values\",\"sadness\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"company\",\"sadness\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"company\",\"changes\",\"sadness\"]]],null,1,0],[\"text\",\"              \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"company\",\"prev_sadness\"]],[\"get\",[\"company\",\"sadness\"]]],null],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"company\"]}],\"hasPartials\":false}", "meta": { "moduleName": "frontend/templates/companies.hbs" } });
});
define("frontend/templates/company", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "zYQPozzs", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"company-page container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"back-link link\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"companies\"],null,12],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"company-symbol\"],[\"flush-element\"],[\"text\",\"Nasdaq: \"],[\"append\",[\"unknown\",[\"model\",\"symbol\"]],false],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"external-link\"],[\"dynamic-attr\",\"href\",[\"concat\",[\"http://www.marketwatch.com/investing/stock/\",[\"unknown\",[\"model\",\"symbol\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n       \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"external-link\"],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"value-list\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sentiment\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"sentiment\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Sentiment\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"sentiment\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sentiment\"]]],null,11,10],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_sentiment\"]],[\"get\",[\"model\",\"sentiment\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"anger\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"anger\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Anger\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"anger\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"anger\"]]],null,9,8],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_anger\"]],[\"get\",[\"model\",\"anger\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"disgust\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"disgust\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Disgust\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"disgust\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"disgust\"]]],null,7,6],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_disgust\"]],[\"get\",[\"model\",\"disgust\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"fear\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"fear\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Fear\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"fear\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"fear\"]]],null,5,4],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_fear\"]],[\"get\",[\"model\",\"fear\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"joy\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"joy\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Joy\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"joy\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"joy\"]]],null,3,2],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_joy\"]],[\"get\",[\"model\",\"joy\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sadness\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"sadness\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Sadness\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"sadness\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sadness\"]]],null,1,0],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_sadness\"]],[\"get\",[\"model\",\"sadness\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"helper\",[\"fa-icon\"],[\"angle-double-left\"],null],false],[\"text\",\" Back to Companies\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "frontend/templates/company.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("frontend/app")["default"].create({"name":"frontend","version":"0.0.0+49576e0e"});
}

/* jshint ignore:end */
//# sourceMappingURL=frontend.map