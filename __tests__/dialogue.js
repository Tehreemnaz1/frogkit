import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Dialogue from '@/components/dialogue'

const propsData = {
  visible: true,
  dark: true,
  requiredAction: false
}

const slotData = {
  emitEvent: 'testEvent',
  emitValue: 'xxx'
}

describe('Dialogue component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Dialogue, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit change event when close method is called', () => {
    const cmp = shallow(Dialogue, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('change', stub)
    cmp.vm.close()
    expect(stub).toBeCalled()
  })
})
