import { storiesOf } from '@storybook/vue'
import { number } from '@storybook/addon-knobs'
import Header from '@/components/header'
import countries from '../data/countries'

const stories = storiesOf('Header', module)
const navMainItems = [
  { label: 'Kamera', url: 'https://www.smartfrog.com/de-de/kamera/' },
  { label: 'Videoaufnahme', url: 'https://www.smartfrog.com/de-de/videoaufnahme/' },
  { label: 'Einsatzbereiche', url: 'https://www.smartfrog.com/de-de/einsatzbereiche/' },
  { label: 'So geht\'s', url: 'https://www.smartfrog.com/de-de/so-gehts/' }
]
const navExtraItems = [
  { label: 'Login', url: 'https://app.smartfrog.com/de-de/login' },
  { label: 'Shop', url: 'https://www.smartfrog.com/de-de/shop/products' },
  { label: 'Warenkorb', url: 'https://www.smartfrog.com/de-de/shop/cart' }
]
const formItems = {
  emailPlaceholder: 'E-Mail Adresse',
  passwordPlaceholder: 'Passwort',
  registerLabel: 'Noch kein Benutzerkonto?',
  registerUrl: 'https://www.smartfrog.com//de-de/shop/register',
  retriveLabel: 'Passwort vergessen?',
  retriveUrl: '/de-de/shop/resetpassword'
}

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
    <Header
      :navMainItems="navMainItems"
      :navExtraItems="navExtraItems"
      :cartCounter="cartCounter"
      :formItems="formItems"
      :countries="countries"
      :currentCountry="currentCountry"
      :countrySelectLabel="countrySelectLabel"
      @login="onLogin"
      @countryChange="onCountryChange" />
    <h1 class="demo-title">Emitted country:
      <div style="width: 50%;">{{ emitted }}</div>
    </h1>
  </div>`,
  data() {
    return {
      navMainItems: navMainItems,
      navExtraItems: navExtraItems,
      cartCounter: number('Cart Items', 0),
      formItems: formItems,
      countries: countries,
      currentCountry: 'de',
      countrySelectLabel: 'Your Country is missing? Click here:',
      emitted: ''
    }
  },
  methods: {
    onLogin(email, password) {
      alert(`Email: ${email} - Password: ${password}`)
    },
    onCountryChange(currentCountry) {
      this.emitted = JSON.stringify(currentCountry)
    }
  }
}), Header)
