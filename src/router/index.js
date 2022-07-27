import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/client/HomeView.vue'
import BlogClient from '../views/client/BlogClient.vue'
import ContactClient from '../views/client/ContactClient.vue'
import LoginView from '../views/client/LoginView.vue'
import SignUp from '../views/client/SignUp.vue'
import ListRooms from '../views/client/ListRooms.vue'
import ListRoomFilter from '../views/client/ListRoomFilter.vue'
import RoomDetail from '../views/client/RoomDetail.vue'
import BookingRoom from '../views/client/BookingRoom.vue'
import BookingConfirmation from '../views/client/BookingConfirmation.vue'
import TicketDetail from '../views/client/TicketDetail.vue'
import HomeDashboard from '../views/dashboard/HomeDashboard.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/blog',
        name: 'BlogClient',
        component: BlogClient
    },
    {
        path: '/contact',
        name: 'ContactClient',
        component: ContactClient
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/list-room/:locationId',
        name: 'ListRooms',
        component: ListRooms
    },
    {
        path: '/list-room-filter/:filter',
        name: 'ListRoomFilter',
        component: ListRoomFilter
    },
    {
        path: '/room-detail/:roomId',
        name: 'RoomDetail',
        component: RoomDetail
    },
    {
        path: '/booking-room/:roomId',
        name: 'BookingRoom',
        component: BookingRoom
    },
    {
        path: '/booking-confirmation',
        name: 'BookingConfirmation',
        component: BookingConfirmation
    },
    {
        path: '/view-ticket-detail',
        name: 'TicketDetail',
        component: TicketDetail
    },
    {
        path: '/dashboard',
        name: 'HomeDashboard',
        component: HomeDashboard
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "current"
})

export default router