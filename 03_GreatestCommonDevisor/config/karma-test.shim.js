Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

var appContext = require.context('../app', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);
