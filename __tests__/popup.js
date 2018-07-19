import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Popup from '@/components/popup'

const propsData = {
  lang: 'de',
  title: 'Hiergeblieben!',
  text: 'Smartfrog schenkt dir den ersten Monat!',
  codeText: 'Gutscheincode:',
  code: 'FREE1',
  btnText: 'Jetzt einlösen',
  noText: 'Jetzt nicht'
}

describe('Popup component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Popup, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit usePromo event when usePromo method is called', () => {
    const cmp = shallow(Popup, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('usePromo', stub)
    cmp.vm.usePromo()
    expect(stub).toBeCalled()
  })

  it('Should emit noPromo event when noPromo method is called', () => {
    const cmp = shallow(Popup, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('noPromo', stub)
    cmp.vm.noPromo()
    expect(stub).toBeCalled()
  })
})
