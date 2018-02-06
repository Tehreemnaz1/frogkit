import {
  mount,
  shallow
} from 'vue-test-utils'
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
  "countryCode": "AR",
  "countryName": "Argentina",
  "currency": "USD",
  "currencySign": "US$",
  "languages": {
    "en": "Argentina"
  },
  "market": "NHW_2",
  "preferred": true
}

describe('Country Selector component', () => {

  it('Should render component and match snapshot', () => {
    const wrapper = mount(CountrySelector, {
      propsData: data
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit change event when updateCountry method is called', () => {
    const cmp = shallow(CountrySelector, {
      propsData: data
    })
    const stub = jest.fn()
    cmp.vm.$on('change', stub)
    cmp.vm.updateCountry('AR')
    expect(stub).toBeCalledWith(testCountry)
  })

})
