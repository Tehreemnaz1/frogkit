import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Title from '@/components/title'

const slots = { default: 'Lorem ipsum dolorem' }

describe.skip('Title component', () => {
  it('should render component and match snapshot', () => {
    // const context = { propsData: { props: { size: 'md' } }}
    // const wrapper = shallow(Title, context)
    // expect(wrapper.html()).toMatchSnapshot()
    const wrapper = shallow(Title, {context: {}})
  })

  // it('should render primary color title', () => {
  //   const wrapper = mount(Title, { slots, propsData: { color: 'primary' } })
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
  //
  // it('should render light color title', () => {
  //   const wrapper = mount(Title, { slots, propsData: { color: 'light' } })
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
  //
  // it('should render h1 title', () => {
  //   const wrapper = mount(Title, { slots, propsData: { size: 'xl' } })
  //   expect(wrapper.contains('h1')).toBe(true)
  // })
  //
  // it('should render h6 title', () => {
  //   const wrapper = mount(Title, { slots, propsData: { size: 20 } })
  //   expect(wrapper.contains('h6')).toBe(true)
  // })

})
