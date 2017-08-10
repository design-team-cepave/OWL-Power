<template lang="pug">
  .l-app.u-scroll
    .l-app__center
      .c-sign
        .c-sign__body
          h1.c-sign__title Owl power
          p.c-sign__text {{ title }}
          form(@submit='submit')
            .form-group
              label.form-label {{ label[0] }}
              input.form-input(:type='inputType.t')
            .form-group
              label.form-label {{ label[1] }}
              input.form-input(:type='inputType.e')
            .form-group
              label.form-label {{ label[2] }}
              input.form-input(:type='inputType.p')
            .form-group
              label.form-label {{ label[3] }}
              input.form-input(:type='inputType.p')
            button.btn.btn--primary.btn--block(type='submit') {{ button }}
          .divider.u-mt-30.u-mb-10
            span OR
          .u-textCenter
            a(href='#') SSO
        .c-sign__footer
          p.u-textCenter
            | Already have an account?
            router-link(to='/login') Sign in
          p.u-textCenter.u-textMuted.u-fontSize-12
            | OWL Power Monitoring System
            br
            | © 2017. All RIGHT RESERVED.
</template>
<script>
  export default {
    name: 'RegisterView',
    methods: {
      submit () {
        this.$router.push('/')
      }
    },
    data () {
      return {
        title: 'Sign up to your App Account',
        label: ['Name', 'Email', 'Password', 'Repeat Password'],
        button: 'Sign up',
        inputType: {
          t: 'text',
          e: 'email',
          p: 'password'
        }
      }
    }
  }
</script>
