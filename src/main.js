import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'




// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

import { Video } from 'nativescript-videoplayer';
Vue.registerElement("VideoPlayer", () => Video);

Vue.use(VueDevtools)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);


new Vue({
  render: h => h('frame', [h(App)])
}).$start()
