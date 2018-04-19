import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Product Bundle', module)


stories.addCodeExampleStory('Default', () => ({
  template: `<Grid><Col md4 sm12><ProductBundle :product="product" :hw="hw" :active="active" /></Col></Grid>`,
  data() {
    return {
      product: {
        title: 'Kamera-Paket',
        bundle: [
          { 
            image: require('@demo/sf-app-icon.svg'),
            label: 'Smartfrog App'
          },
          { 
            image: require('@demo/sf-cam@2x.jpg'),
            label: 'Smartfrog HD Kamera'
          },
          { 
            image: require('@demo/sf-cloud.svg'),
            label: '4 Std. Video-Speicher'
          }
        ],
        features: [
          {
            placeholder: 'Live-Video rund um die Uhr'
          },
          {
            placeholder: 'Video-Speicherung',
            description: 'der jeweils letzten 4 Stunden'
          }
        ],
        additional: [
          'Kein Abo',
          'Keine Einrichtungskosten',
          'Zzgl. Versandkosten'
        ],
        link: {
          href: '#',
          text: 'Mehr Details'
        },
        price: {
          prefix: 'nur',
          amount: '5.95',
          currency: 'EUR',
          suffix: 'einmalg'
        },
        action: 'Jetzt kaufen'
      },
      hw: boolean('hardware country', true),
      active: boolean('active', true)
    }
  }
}))
