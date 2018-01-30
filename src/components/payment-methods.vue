<style lang="stylus">
  @import '../stylus/mixins/payment-methods'
  .payment-methods
    payment-methods()
</style>

<template>
  <section class="payment-methods">
    <Flex class="m-b-30" grow align="center" justify="space-around">
      <img  class="payment-methods__visa" src="../assets/payment/visa.svg" />
      <img class="payment-methods__masterCard" src="../assets/payment/mastercard.svg" />
      <img class="payment-methods__americanExpress" src="../assets/payment/american_express.svg" />
      <img class="payment-methods__sepa" src="../assets/payment/sepa.svg" />
    </Flex>
    <Flex grow align="center" justify="space-around">
      <img class="payment-methods__klarna" src="../assets/payment/klarna.svg" />
      <img class="payment-methods__ec" src="../assets/payment/ec.svg" />
      <img class="payment-methods__paypal" src="../assets/payment/paypal.svg" />
    </Flex>
  </section>
</template>

<script>
  export default {
    name: 'PaymentMethods'
  }
</script>