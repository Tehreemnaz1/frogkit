import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Storage Bundle', module)


stories.addCodeExampleStory('Default', () => ({
  template: `<Grid><Col md4 sm12><StorageBundle :storage="storage" :selectedDevice="selectedDevice" :selectedUpgrade="selectedUpgrade" @change="handleChange"/></Col></Grid>`,
  data() {
    return {
      storage: {
        title: 'Speichererweiterung',
        for: 'Speichererweiterung für:',
        devices: [{value: '1', label: 'iphone 8'}, {value: '2', label: 'HW Cam DEV'}, {value: '3', label: 'SM-T825'}],
        history: 'Video-Speicher der jeweils letzten:',
        upgrades: [
          {value: '24h', label: '24 Std. 2,65€ / mtl.'},
          {value: '7d', label: '7 Tage 5,35€ / mtl.'},
          {value: '30d', label: '30 Tage 13,45€ / mtl.'}
        ],
        price: {
          amount: '5.35',
          currency: 'EUR',
          prefix: 'nur',
          suffix: 'im Monat'
        },
        action: 'Video-Speicher kaufen'
      },
      selectedDevice: {value: '1', label: 'iphone 8'},
      selectedUpgrade: {value: '24h', label: '24 Std. 2,65€ / mtl.'}
    }
  },
  methods: {
    handleChange(val) {
      this.selectedUpgrade = {value: val}
    }
  }
}))