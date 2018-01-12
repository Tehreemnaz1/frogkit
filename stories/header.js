import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import Header from '@/components/header'

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
  template: `<Header :navMainItems="navMainItems" :navExtraItems="navExtraItems" :cartCounter="cartCounter" :formItems="formItems" @login="onLogin" />`,
  data() {
    return {
      navMainItems: navMainItems,
      navExtraItems: navExtraItems,
      cartCounter: number('Cart Items', 0),
      formItems: formItems
    }
  },
  methods: {
    onLogin(email, password) {
      alert(`Email: ${email} - Password: ${password}`)
    }
  }
}), Header)
