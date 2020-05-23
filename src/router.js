import Vue from 'vue';
import Router from 'vue-router'

// import Main from '@/components/Main'
import Book from "@/components/BookComponent/Book.vue";
import Reader from "@/components/ReaderComponents/Reader.vue";
import Journal from "@/components/JournalComponent/Journal.vue";
import Author from "@/components/AuthorComponents/Author.vue";
import City from "@/components/CityComponent/City.vue";
import Edition from "@/components/EditionComponent/Edition.vue";
import Library from "@/components/LibraryComponent/Library.vue";
import Publisher from "@/components/PublisherComponent/Publisher.vue";


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Journal
        },
        {
            path: '/Book',
            component: Book
        }, {
            path: '/Reader',
            component: Reader
        }, {
            path: '/Author',
            component: Author
        }, {
            path: '/City',
            component: City
        }, {
            path: '/Edition',
            component: Edition
        }, {
            path: '/Library',
            component: Library
        }, {
            path: '/Publisher',
            component: Publisher
        }


    ]
})
