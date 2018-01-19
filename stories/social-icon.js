import { storiesOf } from '@storybook/vue'
import SocialIcon from '@/components/social-icon'

const stories = storiesOf('Social Icon', module)
const socialItems = {
  headline: 'Smartfrog folgen:',
  icons: [
    {
      name: 'facebook',
      url: 'http://www.facebook.com/smartfrogDE',
      label: 'Folgen Sie auf Facebook'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/smartfrog_cam',
      label: 'Auf Twitter folgen'
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCt2tBYCxnfhBWraIuOcY2Ow',
      label: 'Folgen Sie auf YouTube'
    },
    {
      name: 'instagram',
      url: 'http://instagram.com/smartfrogcam/',
      label: 'Folgen Sie auf Instagram'
    }
  ]
}

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div><SocialIcon v-for="icon in socialItems.icons" :href="icon.url" :class="icon.name" label="icon.label" :key="icon.name" /></div>`,
  data () {
    return {
      socialItems: socialItems
    }
  }
}), SocialIcon)
