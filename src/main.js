import Vue from 'vue'
import App from './App.vue'
import store from './store'

window.jQuery = window.$ = require('jquery');

require('bootstrap-sass/assets/stylesheets/_bootstrap.scss')
require('bootstrap-sass/assets/javascripts/bootstrap.min')
require('font-awesome/scss/font-awesome.scss')
require('vue2-animate/dist/vue2-animate.min.css')

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  mounted(){
    store.dispatch('load')
  }
})
