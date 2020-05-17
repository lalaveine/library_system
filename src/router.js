import Vue from 'vue';
import Router from 'vue-router'

// import Main from '@/components/Main'
import SearchComponent from "@/components/SearchComponents/SearchComponent.vue";
import InputComponent from "@/components/InputComponents/InputComponent.vue";
import Journal from "@/components/JournalComponent/Journal.vue";
import Author from "@/components/AuthorComponents/Author.vue";
import CityInput from "@/components/CityComponent/CityInput.vue";
import Editions from "@/components/EditionsComponent/Editions.vue";
import library from "@/components/LibraryComponent/Library.vue";
import Publisher from "@/components/PublisherComponent/Publisher.vue";


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
    },{
        path: '/Author',
        component: Author
    },{
        path: '/CityInput',
        component: CityInput
    },{
        path: '/Editions',
        component: Editions
    },{
        path: '/library',
        component: library
    },{
        path: '/Publisher',
        component: Publisher
    }


    ]
})
