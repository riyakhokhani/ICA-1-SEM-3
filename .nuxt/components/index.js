export { default as Arrow } from '../../components/arrow.vue'
export { default as Shopclueslogo } from '../../components/shopclueslogo.vue'
export { default as Tracking } from '../../components/tracking.vue'

export const LazyArrow = import('../../components/arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => c.default || c)
export const LazyShopclueslogo = import('../../components/shopclueslogo.vue' /* webpackChunkName: "components/shopclueslogo" */).then(c => c.default || c)
export const LazyTracking = import('../../components/tracking.vue' /* webpackChunkName: "components/tracking" */).then(c => c.default || c)
