<template lang="pug">
  .l-app.u-scroll
    .l-app__center
      .c-sign
        .c-sign__body
          h1.c-sign__title.u-fs-24 {{ title }}
          form.u-mt-30(@submit='submit')
            .form-group.u-mb-30
              .form-control.has-icon
                i.form-icon.icon-lock
                input.form-input(type='password', placeholder='New password')
            button.btn.btn--danger.btn--block(type='submit') {{ title }}
        .c-sign__footer
          p.u-textCenter.u-textMuted.u-fs-12
            | OWL Power Monitoring System
            br
            | © 2017. All RIGHT RESERVED.
      // END .c-sign
</template>
<script>
  export default {
    name: 'ResetView',
    methods: {
      submit () {
        this.$router.push('/')
      }
    },
    data () {
      return {
        title: 'Reset Password'
      }
    }
  }
</script>
