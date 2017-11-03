import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Select from '@/components/select'

const options = [
  { label: 'Option 1', value:'Value 1'},
  { label: 'Option 2', value:'Value 2'},
  { label: 'Option 3', value:'Value 3'}
]

describe('Select component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(Select)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render disabled select', () => {
    const wrapper = mount(Select, { propsData: { disabled: true, options } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Select component | required', () => {
    it('should render with error', () => {
      const wrapper = mount(Select, { propsData : { value:'', required: true, options } })
      wrapper.findAll('option').at(0).trigger('change')
      expect(wrapper.hasClass('fk-select--error')).toBe(true)
    })

    it('should render without error', () => {
      const wrapper = mount(Select, { propsData : { value:'tada', required: true, options } })
      wrapper.findAll('option').at(1).trigger('change')
      expect(wrapper.hasClass('fk-select--error')).toBe(false)
    })
  })

})
