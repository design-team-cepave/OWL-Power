<template lang="pug">
  main.l-app__main(role="main")
    h1
      | {{ msg }}
      =' '
      .vuejs-logo
        img.vuejs(src='https://011.vuejs.org/images/logo.png')
        span Vue.js
      =' '
      | App
    h4 Essential Links
    ul
      li: a(href='https://vuejs.org', target='_blank') Core Docs
      li: a(href='https://forum.vuejs.org', target='_blank') Forum
      li: a(href='https://gitter.im/vuejs/vue', target='_blank') Gitter Chat
      li: a(href='https://twitter.com/vuejs', target='_blank') Twitter
      li: a(href='http://vuejs-templates.github.io/webpack/', target='_blank') Docs for This Template
    h4 Ecosystem
    ul
      li: a(href='http://router.vuejs.org/', target='_blank') vue-router
      li: a(href='http://vuex.vuejs.org/', target='_blank') vuex
      li: a(href='http://vue-loader.vuejs.org/', target='_blank') vue-loader
      li: a(href='https://github.com/vuejs/awesome-vue', target='_blank') awesome-vue
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your'
      }
    }
  }
</script>

<style>
  .l-app__body {
    background: white;
  }
</style>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  main {
    text-align: center;
    padding: 8em 2em;
  }
  .vuejs-logo {
    display: inline-block;
  }
  .vuejs-logo img {
    vertical-align: bottom;
    margin-right: 6px;
    width: 80px;
    height: 80px;
  }
  .vuejs-logo span {
    line-height: 80px;
    color: #2c3e50;
    font-family: 'Lato', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  }
  h1 {
    margin-bottom: 2em;
    font-size: 3rem;
  }
  h1, h4 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
