import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Accordion from '@/components/accordion'

const propsData = {
  placeholder: 'Title',
  open: false
}

describe('Accordion component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(Accordion, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })


  it('Should open and close', () => {
    const cmp = shallow(Accordion, { propsData })
    expect(cmp.vm.isOpen).toBe(false)
    cmp.vm.toggle()
    expect(cmp.vm.isOpen).toBe(true)
    cmp.vm.toggle()
    expect(cmp.vm.isOpen).toBe(false)
  })

  it('Should close and open', () => {
    const cmp = shallow(Accordion, { propsData: {...propsData, open: true} })
    expect(cmp.vm.isOpen).toBe(true)
    cmp.vm.toggle()
    expect(cmp.vm.isOpen).toBe(false)
    cmp.vm.toggle()
    expect(cmp.vm.isOpen).toBe(true)
  })

})
