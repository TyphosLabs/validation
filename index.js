/* compilation of validation modules for server-side */

// start with the base
var Validation = require('@orchardcorset/validation-base')();

// add plugins
require('@orchardcorset/validation-invalid')(Validation);
require('@orchardcorset/validation-invalid-error')(Validation);
require('@orchardcorset/validation-types')(Validation);
require('@orchardcorset/validation-express')(Validation);

// and export
module.exports = Validation;
