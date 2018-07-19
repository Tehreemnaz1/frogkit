import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Dialogue from '@/components/dialogue'

const propsData = {
  visible: true,
  dark: true,
  requiredAction: false,
  lang: 'de',
  title: 'Hiergeblieben!',
  text: 'Smartfrog schenkt dir den ersten Monat!',
  codeText: 'Gutscheincode:',
  code: 'FREE1',
  btnText: 'Jetzt einlösen',
  noText: 'Jetzt nicht'
}

describe('Dialogue component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Dialogue, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit usePromo event when onUsePromo method is called', () => {
    const cmp = shallow(Dialogue, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('usePromo', stub)
    cmp.vm.onUsePromo()
    expect(stub).toBeCalled()
  })

  it('Should emit closed event when close method is called', () => {
    const cmp = shallow(Dialogue, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('closed', stub)
    cmp.vm.close()
    expect(stub).toBeCalled()
  })
})
