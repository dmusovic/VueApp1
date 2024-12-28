export const routes = {
  courses: () => import('../components/CourseList.vue'),
  events: () => import('../components/event/EventList.vue'),
  shop: () => import('../components/shop/ShopList.vue')
};

export type RouteKey = keyof typeof routes;