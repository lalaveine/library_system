import Vue from 'vue';
import Router from 'vue-router'

// import Main from '@/components/Main'
import SearchComponent from "@/components/SearchComponents/SearchComponent.vue";
import InputComponent from "@/components/InputComponents/InputComponent.vue";
import Journal from "@/components/JournalComponent/Journal.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {  path: '/',
        component: Journal
    },
      {  path: '/search',
        component: SearchComponent
    }, {
        path: '/input',
        component: InputComponent
    }

    ]
})
