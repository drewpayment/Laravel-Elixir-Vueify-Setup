var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
Vue.use(VueRouter);
Vue.use(VueResource);

import Greeter from './components/Greeter.vue';

var Bar = Vue.extend({
	template: '<p>This is bar.</p>'
})

Vue.component('greeter', Greeter)

// Root instance
var App = Vue.extend({})

var router = new VueRouter()

router.map({
	'/foo': {
		component: require('./components/Foo.vue')
	},
	'/bar': {
		component: Bar
	}
})

router.start(App, '#app')