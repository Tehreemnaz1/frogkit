import { storiesOf } from '@storybook/vue'
import BundleRecap from '@/components/bundle-recap'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Bundle Recap', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<BundleRecap :bundle="bundle" sticker="FREE">`,
  data () {
    return {
      bundle: [
        { 
          image: require('@demo/sf-app-icon.svg'),
          label: 'Smartfrog App'
        },
        { 
          image: require('@demo/sf-cam@2x.jpg'),
          label: 'Smartfrog HD Cam'
        },
        { 
          image: require('@demo/sf-cloud.svg'),
          label: 'Video History'
        }
      ]
    }
  }
}), BundleRecap)


stories.addCodeExampleStory('Free Camera', () => ({
  template: `<BundleRecap :bundle="bundle">
              <p slot="sticker" class="demo-sticker">FREE</p>
            </BundleRecap>`,
  data () {
    return {
      bundle: [
        { 
          image: require('@demo/sf-app-icon.svg'),
          label: 'Smartfrog App'
        },
        { 
          image: require('@demo/sf-cam@2x.jpg'),
          label: 'Smartfrog HD Cam'
        },
        { 
          image: require('@demo/sf-cloud.svg'),
          label: 'Video History'
        }
      ]
    }
  }
}), BundleRecap)


