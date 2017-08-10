import Vue           from 'vue'
import Router        from 'vue-router'
import LoginView     from '@/views/Login'
import RegisterView  from '@/views/Register'
import ForgotView    from '@/views/Forgot'
import ResetView     from '@/views/Reset'
import DashView      from '@/views/Dash'
import DashboardView from '@/views/Dashboard'
import UsersView     from '@/views/Users'
import NotFoundView  from '@/views/NotFound'
import HelloView     from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ForgotView
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetView
    },
    {
      path: '/',
      component: DashView,
      children: [
        {
          path: '',
          name: 'index',
          component: HelloView
        },
        {
          path: '',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: 'users',
          name: 'users',
          component: UsersView
        }
      ]
    },
    {
      path: '*',
      component: NotFoundView
    }
  ]
})
