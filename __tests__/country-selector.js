import { mount } from 'vue-test-utils'
import Vue from 'vue'
import CountrySelector from '@/components/country-selector'
import countries from '../data/countries'

const data = {
  countries: countries,
  currentCountry: 'de',
  selectLabel: 'Your Country is missing? Click here:',
  selectPlaceholder: 'Please select a country'
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

describe('Country Selector component', () => {

  it('Should render component and match snapshot', () => {
    const wrapper = mount(CountrySelector, { propsData: data })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Dropdown items when clicked and select options when chenged should emit countryChange event', () => {
    const wrapper = mount(CountrySelector, { propsData: data })
    wrapper.vm.$emit('countryChange')
    expect(wrapper.emitted().countryChange).toBeTruthy()
  })

  it('Dropdown items when clicked and select options when chenged should emit the selected country object', () => {
    const wrapper = mount(CountrySelector, { propsData: data })
    wrapper.vm.$emit('countryChange')
    wrapper.vm.$emit('countryChange', testCountry)
    expect(wrapper.emitted().countryChange.length).toBe(2)
    expect(wrapper.emitted().countryChange[1]).toEqual([testCountry])
  })

})
