import { storiesOf } from '@storybook/vue'
import CountrySelector from '@/components/country-selector'
import countries from '../data/countries'

const stories = storiesOf('Country Selector', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
  <CountrySelector
    :countries="countries"
    :currentCountry="currentCountry"
    :selectLabel="selectLabel"
    @change="onCountryChange" />
  </div>`,
  data() {
    return {
      countries: countries,
      currentCountry: 'de',
      selectLabel: 'Your Country is missing? Click here:'
    }
  },
  methods: {
    onCountryChange(currentCountry) {
      alert(JSON.stringify(currentCountry))
    }
  }
}), CountrySelector)
