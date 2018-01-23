import { mount } from 'vue-test-utils'
import Vue from 'vue'
import CertificateBadge from '@/components/certificate-badge'

describe('Certificate Badge component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(CertificateBadge)
    expect(wrapper.html()).toMatchSnapshot()
  })

})