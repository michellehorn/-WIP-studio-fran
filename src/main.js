import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/style.scss'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret,
    faHome,
    faQuoteRight,
    faQuoteLeft,
    faAngleDoubleDown,
    faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'

/* finish import area */



Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA0_rbjaeAiLpUJK2BrUCT7VllmT9isC-A',
        libraries: 'places',
    },
});

library.add(faUserSecret, faHome, faQuoteRight, faQuoteLeft, faAngleDoubleDown, faMapMarkedAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')