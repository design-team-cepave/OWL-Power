<template lang="pug">
  mixin menu-itm(url, icon, item)
    li.c-menu__item
      router-link.c-menu__link(to=url)
        .c-menu__icon
          i(class='icon-'+ icon)
        .c-menu__text
          | #{item}
  mixin menu-itm--sub(url, item)
    li.c-menu__item
      router-link.c-menu__link(to=url)
        .c-menu__text
          | #{item}
  .l-app
    sidebar
      .logo(slot='start')
        img(src='/static/images/logo-white.svg', alt='Logo')
      ul.c-menu.c-menu--dark(v-menu='', slot='content')
        +menu-itm('/', 'grid', '{{ nav.dashboard }}')
        +menu-itm('/users', 'users', '{{ nav.users }}')
        li.c-menu__item.has-sub
          a.c-menu__link(role='button')
            .c-menu__icon
              i.icon-files-empty
            .c-menu__text Pages
          ul.c-menu
            +menu-itm--sub('/login', '{{ nav.pages[0] }}')
            +menu-itm--sub('/register', 'Register')
            +menu-itm--sub('/forgot', 'Forgot')
            +menu-itm--sub('/reset', 'Reset')
    .l-app__content
      .l-app__body
        router-view
</template>

<script>
  export default {
    name: 'DashView',
    data () {
      return {
        nav: {
          dashboard: 'Dashboard',
          users: 'Users',
          pages: [
            'Login',
            'Register',
            'Forgot',
            'Reset'
          ]
        }
      }
    }
  }
</script>
