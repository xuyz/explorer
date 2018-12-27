import Layout from '../views/layout/Layout'

export default {
  path: '/test',
  component: Layout,
  redirect: '/test/get',
  name: 'Test',
  meta: { title: 'Test', icon: 'example' },
  children: [
    {
      path: 'get',
      name: 'TestDetail',
      hidden: true,
      component: () => import('@/views/test/index'),
      meta: { title: 'TestDetail', icon: 'example' }
    }
  ]
}
