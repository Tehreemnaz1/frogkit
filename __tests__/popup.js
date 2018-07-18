import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Popup from '@/components/popup'

const propsData = {
  lang: 'de',
  title: 'Hiergeblieben!',
  text: 'Smartfrog schenkt dir den ersten Monat!',
  codeLabel: 'Gutscheincode:',
  code: 'FREE1',
  btnLabel: 'Jetzt einlösen',
  noVoucherLabel: 'Jetzt nicht'
}

describe('Popup component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Popup, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit useVoucher event when useVoucher method is called', () => {
    const cmp = shallow(Popup, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('useVoucher', stub)
    cmp.vm.useVoucher()
    expect(stub).toBeCalled()
  })

  it('Should emit noVoucher event when noVoucher method is called', () => {
    const cmp = shallow(Popup, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('noVoucher', stub)
    cmp.vm.noVoucher()
    expect(stub).toBeCalled()
  })
})
