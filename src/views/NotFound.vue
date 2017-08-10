<template lang="pug">
  .l-app
    .l-app__center
      .c-message
        .c-message__media
          h1.u-fs-128 404
        p.c-message__title OOPS!
        p.c-message__content
          | Sorry! The page you are looking for doesn't exist.
        router-link.btn.btn--lg.btn--smart.btn--primary(to='/') Go Back!
</template>

<script>
  export default {
    name: 'NotFoundView'
  }
</script>
