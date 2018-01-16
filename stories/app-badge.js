import { storiesOf } from '@storybook/vue'
import AppBadge from '@/components/app-badge'

const stories = storiesOf('App Badges', module)
const appStoreItems = {
  buttons: [
    {
      name: 'apple',
      url: 'https://app.adjust.com/p39urb',
      label: 'Laden im'
    },
    {
      name: 'google',
      url: 'https://app.adjust.com/vti0vj',
      label: 'JETZT BEI'
    }
  ]
}

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div><AppBadge v-for="btn in appStoreItems.buttons" :href="btn.url" :class="btn.name" :label="btn.label" :key="btn.name" /></div>`,
  data () {
    return {
      appStoreItems: appStoreItems
    }
  }
}), AppBadge)
