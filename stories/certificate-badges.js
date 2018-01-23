import { storiesOf } from '@storybook/vue'
import CertificateBadges from '@/components/certificate-badges'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Certificate Badges', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<CertificateBadges :width="width"/>`,
  data () {
    return {
      width: text('Width', '65px')
    }
  }
}), CertificateBadges)