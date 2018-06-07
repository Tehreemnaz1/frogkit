import { mount } from 'vue-test-utils'
import NotFound from '@/components/not-found'

describe('Not Found component', () => {
  it('should render component and match snapshot: lang de', () => {
    const wrapper = mount(NotFound, {propsData: {lang: 'de'}})
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render component and match snapshot: lang en', () => {
    const wrapper = mount(NotFound, {propsData: {lang: 'en'}})
    expect(wrapper.html()).toMatchSnapshot()
  })
})