import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import appHeader from '@/components/app-header'

const navigations = [
  { label: 'All cameras', url: 'https://app.sf-dev1.com/de-de/' },
  { label: 'My account', url: 'https://app.sf-dev1.com/de-de/account/overview' },
  { label: 'Shop', url: 'https://www.sf-dev1.com/de-de/shop' },
]

const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' }
]

const data = {
  navigations: navigations,
  languages: languages,
  username: 'john.doe@lorem.com',
  activeLang: 'en'
}

describe('Logged-in Header component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(appHeader, { propsData: data })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit logout event when logout method is called', () => {
    const cmp = shallow(appHeader, {
      propsData: data
    })
    const stub = jest.fn()
    cmp.vm.$on('logout', stub)
    cmp.vm.logout()
    expect(stub).toBeCalled()
  })

  it('Should emit changeLanguage event when changeLang method is called', () => {
    const cmp = shallow(appHeader, {
      propsData: data
    })
    const stub = jest.fn()
    cmp.vm.$on('changeLanguage', stub)
    cmp.vm.changeLang('de')
    expect(stub).toBeCalledWith('de')
  })
})
