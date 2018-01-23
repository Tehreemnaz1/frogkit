import { mount } from 'vue-test-utils'
import Vue from 'vue'
import LogisticBadges from '@/components/logistic-badges'

describe('Logistic Badges component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(LogisticBadges)
    expect(wrapper.html()).toMatchSnapshot()
  })

})