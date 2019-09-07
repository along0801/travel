import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Hotel from "./components/main/hotel.vue";
// import Ticket from "./components/main/ticket.vue";
// import Tour from "./components/main/tour.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: "/home/hotel",
      name: "hotel",
      component: Hotel
    }/* ,
    {
      path: "/home/ticket",
      name: "ticket",
      component: Ticket
    },
    {
      path: "/home/tour",
      name: "tour",
      component: Tour
    }, */
  ]
});
