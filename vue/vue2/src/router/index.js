import Vue from 'vue'
import VueRouter from 'vue-router'
import RulesCmp from '../components/RulesCmp.vue'
import DomXss from '../components/rules/DomXss.vue'
import JSInjection from '../components/rules/JSInjection.vue'

import VHtml from '../components/rules/xss/VHtml.vue'
import VConstructor from '../components/rules/jsinjection/VConstructor.vue'



Vue.use(VueRouter);

export const routes = [
  {
    path: '/rules',
    name: 'Rules',
    component: RulesCmp,
    children: [
      {
        path: '/rules/dom_xss',
        name: "DOM XSS",
        component: DomXss,
        children: [
          {
            path: '/rules/dom_xss/v-html',
            name: "v-html",
            component: VHtml
          }
        ]
      },
      {
        path: '/rules/jsinjection',
        name: "JavaScript Injection",
        component: JSInjection,
        children: [
          {
            path: '/rules/jsinjection/constructor',
            name: "constructor",
            component: VConstructor
          }
        ]
      }
    ]
  },
  {
    path: '/sources',
    name: 'Sources',
    component: import("../components/SourceCmp.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router