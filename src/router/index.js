import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '@/components/index/Content'
import Box from '@/components/index/Box'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/content',
          name: 'Content',
          component: Content,
        },
        {
          path: '/box',
          name: 'Box',
          component: Box,
        }
      ]
    },
    {
      path: '/game',
      name: 'GAME',
      component: Game,
    }
  ]
})
