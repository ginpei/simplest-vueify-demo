const App = require('./App.vue');
const Vue = require('vue');

new Vue({  // eslint-disable-line no-new
	el: '#app',
	render: f=>f(App),
});
