export { default as Arrow } from '../../components/arrow.vue'
export { default as Shipping } from '../../components/shipping.vue'
export { default as Shopclueslogo } from '../../components/shopclueslogo.vue'

export const LazyArrow = import('../../components/arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => c.default || c)
export const LazyShipping = import('../../components/shipping.vue' /* webpackChunkName: "components/shipping" */).then(c => c.default || c)
export const LazyShopclueslogo = import('../../components/shopclueslogo.vue' /* webpackChunkName: "components/shopclueslogo" */).then(c => c.default || c)
