<style lang="stylus">
  $text-color := #414141
  $link-color := #2f82c4
  .foot-note
    font-size: 14px
    color: $text-color
    a
      color: $link-color
      cursor pointer
</style>

<template>
  <section class="foot-note">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'FootNote',
  }
</script>