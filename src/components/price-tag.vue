<style lang="stylus">
  @require '../stylus/mixins/price-tag'

  .fk-price-tag
    price-tag-mixin()

</style>

<template>
  <div class="fk-price-tag" >
    <slot name="prefix"></slot>
    <p class="fk-price-tag__price">
      {{price.head}}<b>{{price.natural}}<template v-if="price.decimal">{{price.separator}}<sup class="fk-price-tag__decimal">{{price.decimal}}</sup></template></b>{{price.tail}}
    </p>
    <slot name="suffix"></slot>
  </div>
</template>

<script>
  import currencyFormatter from 'currency-formatter'

  export default {
    name: 'PriceTag',
    props: {
      value: {
        value: [String, Number],
        required: true
      },
      code: {
        value: String,
        default: 'EUR'
      }
    },
    computed:{
      price(){
        const float = Number(this.value)
        if (Number.isNaN(float)) return {}
        
        const config = currencyFormatter.findCurrency(this.code)
        const natural = Math.trunc(float)
        const decimal = (float && float === natural) ? null : (float - natural).toFixed(config.decimalDigits).toString().split(".")[1]

        let head = '' 
        let tail = ''

        if (config.symbolOnLeft) {
          head = config.symbol + (config.spaceBetweenAmountAndSymbol ? ' ' : '')
        } else {
          tail = (config.spaceBetweenAmountAndSymbol ? ' ' : '') + config.symbol
        }

        return { head, natural, decimal, tail, separator: config.decimalSeparator }
      }
    }
  }
</script>
