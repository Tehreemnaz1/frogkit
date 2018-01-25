import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, number } from '@storybook/addon-knobs'
import PriceTag from '@/components/price-tag'

const stories = storiesOf('Price Tag', module)


stories.add('kitchen sink', () => ({
  template: `<PriceTag :value="value" :code="code">
    <p slot="prefix">{{prefix}}</p>
    <p slot="suffix">{{suffix}}</p>
  </PriceTag>  
  `,
  data(){
    return {
      value: text('Value', '9.95'),
      prefix: text('Prefix', 'asdasd'),
      suffix: text('Suffix', ''),
      code: select('Code', ['EUR', 'GBP', 'CHF', 'USD'])
    }
  }
}), PriceTag)


stories.add('Price in euro', () => ({
  template: `<PriceTag :value="9.95" />`,
}), PriceTag)

stories.add('Price in Pound', () => ({
  template: `<PriceTag value="9.95" code="GBP">
    <p slot="prefix">only</p>
    <p slot="suffix">a month<sup>1</sup></p>
  </PriceTag>
  `,
}), PriceTag)