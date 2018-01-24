import { mount } from 'vue-test-utils'
import Vue from 'vue'
import CertificateBadge from '@/components/certificate-badges'

describe('Certificate Badges component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(CertificateBadge)
    expect(wrapper.html()).toMatchSnapshot()
  })

})