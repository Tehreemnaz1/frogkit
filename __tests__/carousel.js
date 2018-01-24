import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Carousel from '@/components/carousel'

const propsData = {
  slides: Array.from({length: 3}).map((_,i) => `https://unsplash.it/320?random&${i}`),
  loop: true,
  active: 1
}

describe('Carousel component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(Carousel, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should move to the right slide without looping', () => {
    const cmp = shallow(Carousel, { propsData: { ...propsData, loop: false } })
    expect(cmp.vm.selected).toBe(1)
    cmp.vm.moveTo(2)
    expect(cmp.vm.selected).toBe(2)
    cmp.vm.moveTo(propsData.slides.length)
    expect(cmp.vm.selected).toBe(2)
    cmp.vm.moveTo(-1)
    expect(cmp.vm.selected).toBe(2)
  })

  it('Should move to the right slide when looping', () => {
    const cmp = shallow(Carousel, { propsData })
    expect(cmp.vm.selected).toBe(propsData.active)
    cmp.vm.moveTo(2)
    expect(cmp.vm.selected).toBe(2)
    cmp.vm.moveTo(propsData.slides.length)
    expect(cmp.vm.selected).toBe(0)
    cmp.vm.moveTo(-1)
    expect(cmp.vm.selected).toBe(propsData.slides.length -1)
  })

  it('Should provide the right styles', () => {
    const cmp = shallow(Carousel, { propsData })
    cmp.vm.moveTo(0)
    expect(cmp.vm.styles).toEqual({ transform: 'translateX(0%)' })
    cmp.vm.moveTo(2)
    expect(cmp.vm.styles).toEqual({ transform: 'translateX(-200%)' })
  })
})

