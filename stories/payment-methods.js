import { storiesOf } from '@storybook/vue'
import PaymentMethods from '@/components/payment-methods'

const stories = storiesOf('Payment Methods', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<PaymentMethods />`
}), PaymentMethods)