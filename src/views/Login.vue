<template lang="pug">
  .l-app.u-scroll
    .l-app__center
      .c-sign
        .c-sign__body
          h1.c-sign__title Owl power
          p.c-sign__text Sign in with your Administrator Account
          form(@submit='submit')
            .form-group
              label.form-label Email
              input.form-input(type='email')
            .form-group
              label.form-label Password
              input.form-input(type='password')
            .form-group.u-clearfix
              label.form-checkbox.u-floatLeft
                input(type='checkbox', checked='checked')
                span.form-checkbox__indicator
                span.form-checkbox__text Remember me
              router-link.u-floatRight(to='/forgot') Forgot Password?
            button.btn.btn--primary.btn--block(type='submit') Sign in
          .divider.u-mt-30.u-mb-10
            span OR
          .u-textCenter
            a(href='#') SSO
        .c-sign__footer
          p.u-textCenter
            | No account? Please go to
            router-link(to='/register') Register
          p.u-textCenter.u-textMuted.u-fontSize-12
            | OWL Power Monitoring System
            br
            | © 2017. All RIGHT RESERVED.
</template>
<script>
  export default {
    name: 'LoginView',
    methods: {
      submit () {
        this.$router.push('/')
      }
    }
  }
</script>
