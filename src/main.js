import Vue from 'vue'
import Main from './components/Main.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(Main),
}).$mount('#app')

