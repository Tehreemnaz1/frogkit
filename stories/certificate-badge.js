import { storiesOf } from '@storybook/vue'
import CertificateBadge from '@/components/certificate-badge'

const stories = storiesOf('Certificate Badge', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<CertificateBadge />`
}), CertificateBadge)