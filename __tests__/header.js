import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Header from '@/components/header'

const navMainItems = [
  { label: 'Kamera', url: 'https://www.smartfrog.com/de-de/kamera/' },
  { label: 'Videoaufnahme', url: 'https://www.smartfrog.com/de-de/videoaufnahme/' },
  { label: 'Einsatzbereiche', url: 'https://www.smartfrog.com/de-de/einsatzbereiche/' },
  { label: 'So geht\'s', url: 'https://www.smartfrog.com/de-de/so-gehts/' }
]
const navButtonItems = [
  { label: 'Login', url: 'https://app.smartfrog.com/de-de/login' },
  { label: 'Shop', url: 'https://www.smartfrog.com/de-de/shop/products' },
  { label: 'Warenkorb', url: 'https://www.smartfrog.com/de-de/shop/cart' }
]
const formItems = {
  emailPlaceholder: 'E-Mail Adresse',
  passwordPlaceholder: 'Passwort',
  buttonLabel: 'Login',
  registerLabel: 'Noch kein Benutzerkonto?',
  registerUrl: 'https://www.smartfrog.com//de-de/shop/register',
  retriveLabel: 'Passwort vergessen?',
  retriveUrl: '/de-de/shop/resetpassword'
}

describe('Header component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Text, { propsData: { 
      logoUrl: 'https://www.smarfrog.com',
      navMainItems: navMainItems,
      navButtonItems: navButtonItems,
      cartCounter: 1,
      formItems: formItems
    } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
