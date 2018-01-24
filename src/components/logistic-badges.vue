<template>
  <Flex align="center" justify="space-around">
    <img :width="width" src="../assets/images/dhl.svg" />
    <img :width="width" src="../assets/images/gogreen.svg" />
  </Flex>
</template>

<script>
  export default {
    name: 'LogisticBadges',
    props: {
      width:{
        type: String,
        default: '142px'
      }
    }
  }
</script>