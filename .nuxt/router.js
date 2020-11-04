import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _abebf1de = () => interopDefault(import('../pages/arrow button.vue' /* webpackChunkName: "pages/arrow button" */))
const _7f2464a2 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _161a8e93 = () => interopDefault(import('../pages/track.vue' /* webpackChunkName: "pages/track" */))
const _8b0eaacc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/ICA-1-SEM-3/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/arrow button",
    component: _abebf1de,
    name: "arrow button"
  }, {
    path: "/inspire",
    component: _7f2464a2,
    name: "inspire"
  }, {
    path: "/track",
    component: _161a8e93,
    name: "track"
  }, {
    path: "/",
    component: _8b0eaacc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
