<template lang="pug">
  .l-app.u-scroll
    .l-app__center
      .c-sign
        .c-sign__body
          h1.c-sign__title.u-fs-24 Forgot Your Password ?
          p.c-sign__text Input your registered email to reset your password
          form.u-mt-30(@submit='submit')
            .form-group.u-mb-30
              .form-control.has-icon
                i.icon-envelop3.form-icon
                input.form-input(type='email', placeholder='Your Email address')
            button.btn.btn--danger.btn--block(type='submit') Send Reset Link
        .c-sign__footer
          p.u-textCenter.u-textMuted.u-fs-12
            | OWL Power Monitoring System
            br
            | © 2017. All RIGHT RESERVED.
      // END .c-sign
</template>
<script>
  export default {
    name: 'ForgotView',
    methods: {
      submit () {
        this.$router.push('/')
      }
    }
  }
</script>
