<template>
  <Flex align="center" justify="space-around">
    <img :width="width" src="../assets/images/iso-27001.jpg" />
    <img :width="width" src="../assets/images/tuev.jpg" />
    <img :width="width" src="../assets/images/iso-9001.jpg" />
    <img :width="width" src="../assets/images/av-test.svg" />
  </Flex>
</template>

<script>
  export default {
    name: 'CertificateBadges',
    props: {
      width:{
        type: String,
        default: '65px'
      }
    }
  }
</script>