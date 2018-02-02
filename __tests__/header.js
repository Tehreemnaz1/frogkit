import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Header from '@/components/header'
import countries from '../data/countries'

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

const testCountry = {
  "countryCode": "IO",
  "countryName": "British Indian Ocean Territory",
  "market": "NHW_2",
  "currency": "USD",
  "currencySign": "US$",
  "languages": {
    "en":"British Indian Ocean Territory"
  },
  "preferred": false
}

const data = {
  navMainItems: navMainItems,
  navExtraItems: navExtraItems,
  cartCounter: 1,
  formItems: formItems,
  countries: countries,
  currentCountry: 'de',
  countrySelectLabel: 'Your Country is missing? Click here:',
  countrySelectPlaceholder: 'Please select a country'
}

describe('Header component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(Header, { propsData: data })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Login button should emit login event when clicked', () => {
    const wrapper = mount(Header, { propsData: data })
    wrapper.vm.$emit('login')
    expect(wrapper.emitted().login).toBeTruthy()
  })

  it('Login button should emit email and password values when clicked', () => {
    const wrapper = mount(Header, { propsData: data })
    wrapper.vm.$emit('login')
    wrapper.vm.$emit('login', 'test@test.com', 'test-password')
    expect(wrapper.emitted().login.length).toBe(2)
    expect(wrapper.emitted().login[1]).toEqual(['test@test.com', 'test-password'])
  })

  it('Should emit countryChange event when country is changed in Country Selector child component', () => {
    const wrapper = mount(Header, { propsData: data })
    wrapper.vm.$emit('countryChange')
    expect(wrapper.emitted().countryChange).toBeTruthy()
  })

  it('Should emit the selected country object when country is changed in Country Selector child component', () => {
    const wrapper = mount(Header, { propsData: data })
    wrapper.vm.$emit('countryChange')
    wrapper.vm.$emit('countryChange', testCountry)
    expect(wrapper.emitted().countryChange.length).toBe(2)
    expect(wrapper.emitted().countryChange[1]).toEqual([testCountry])
  })
})
