define("frontend/templates/company", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lyw1fujl", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"company-page container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"back-link link\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"companies\"],null,13],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"company-symbol\"],[\"flush-element\"],[\"text\",\"Nasdaq: \"],[\"append\",[\"unknown\",[\"model\",\"symbol\"]],false],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"external-link\"],[\"dynamic-attr\",\"href\",[\"concat\",[\"http://www.marketwatch.com/investing/stock/\",[\"unknown\",[\"model\",\"symbol\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n       \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"external-link\"],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"value-list\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sentiment\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"sentiment\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Sentiment\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"sentiment\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sentiment\"]]],null,12,11],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_sentiment\"]],[\"get\",[\"model\",\"sentiment\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"anger\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"anger\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Anger\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"anger\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"anger\"]]],null,10,9],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_anger\"]],[\"get\",[\"model\",\"anger\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"disgust\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"disgust\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Disgust\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"disgust\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"disgust\"]]],null,8,7],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_disgust\"]],[\"get\",[\"model\",\"disgust\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"fear\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"fear\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Fear\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"fear\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"fear\"]]],null,6,5],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_fear\"]],[\"get\",[\"model\",\"fear\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"joy\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"joy\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Joy\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"joy\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"joy\"]]],null,4,3],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_joy\"]],[\"get\",[\"model\",\"joy\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sadness\"]],\"positive\",\"negative\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"values\",\"sadness\"]],\"pad-left\"],null]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        Sadness\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"value-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"value\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"format-values\"],[[\"get\",[\"model\",\"sadness\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"change\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"changes\",\"sadness\"]]],null,2,1],[\"text\",\"          \"],[\"append\",[\"helper\",[\"calculate-change\"],[[\"get\",[\"model\",\"prev_sadness\"]],[\"get\",[\"model\",\"sadness\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"company-articles-heading\"],[\"flush-element\"],[\"text\",\"Recent Articles\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"company-articles\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"articles\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"article\",\"url\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"article\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"article\"]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-down\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"caret-up\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"helper\",[\"fa-icon\"],[\"angle-double-left\"],null],false],[\"text\",\" Back to Companies\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "frontend/templates/company.hbs" } });
});