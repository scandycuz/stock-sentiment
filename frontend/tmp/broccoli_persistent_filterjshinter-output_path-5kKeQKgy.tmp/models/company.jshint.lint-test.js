QUnit.module('JSHint | models/company.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/company.js should pass jshint.\nmodels/company.js: line 25, col 7, Expected \'}\' to match \'{\' from line 23 and instead saw \'anger\'.\nmodels/company.js: line 25, col 12, Missing semicolon.\nmodels/company.js: line 25, col 12, Expected \'}\' to match \'{\' from line 22 and instead saw \':\'.\nmodels/company.js: line 25, col 14, Expected \')\' and instead saw \'this\'.\nmodels/company.js: line 26, col 7, Expected \'}\' to match \'{\' from line 3 and instead saw \'disgust\'.\nmodels/company.js: line 26, col 14, Expected \')\' and instead saw \':\'.\nmodels/company.js: line 26, col 15, Missing semicolon.\nmodels/company.js: line 26, col 61, Expected an assignment or function call and instead saw an expression.\nmodels/company.js: line 26, col 62, Missing semicolon.\nmodels/company.js: line 27, col 13, Label \'fear\' on this statement.\nmodels/company.js: line 27, col 52, Expected an assignment or function call and instead saw an expression.\nmodels/company.js: line 27, col 53, Missing semicolon.\nmodels/company.js: line 28, col 12, Label \'joy\' on this statement.\nmodels/company.js: line 28, col 49, Expected an assignment or function call and instead saw an expression.\nmodels/company.js: line 28, col 50, Missing semicolon.\nmodels/company.js: line 29, col 16, Label \'sadness\' on this statement.\nmodels/company.js: line 29, col 61, Expected an assignment or function call and instead saw an expression.\nmodels/company.js: line 29, col 62, Missing semicolon.\nmodels/company.js: line 29, col 61, Unrecoverable syntax error. (87% scanned).\n\n19 errors');
});
