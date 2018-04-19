import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import ProductBundle from '@/components/product-bundle'

const propsData = {
  product: {
    title: 'Kamera-Paket',
    bundle: [
      { 
        image: require('@demo/sf-app-icon.svg'),
        label: 'Smartfrog App'
      },
      { 
        image: require('@demo/sf-cam@2x.jpg'),
        label: 'Smartfrog HD Kamera'
      },
      { 
        image: require('@demo/sf-cloud.svg'),
        label: '4 Std. Video-Speicher'
      }
    ],
    features: [
      {
        placeholder: 'Live-Video rund um die Uhr'
      },
      {
        placeholder: 'Video-Speicherung',
        description: 'der jeweils letzten 4 Stunden'
      }
    ],
    additional: [
      'Kein Abo',
      'Keine Einrichtungskosten',
      'Zzgl. Versandkosten'
    ],
    link: {
      href: '#',
      text: 'Mehr Details'
    },
    price: {
      prefix: 'nur',
      amount: '5.95',
      currency: 'EUR',
      suffix: 'einmalg'
    },
    action: 'Jetzt kaufen'
  },
  hw: true,
  active: true
}


describe('Product Bundle component', () => {
  it('should render component and match snapshot', () => {
    // Note: a hack to get appropriate snapshot
    ProductBundle.data = () => { return {show: true}}
    const wrapper = mount(ProductBundle, {propsData})
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit click event', () => {
    const wrapper = mount(ProductBundle, {propsData})
    const stub = jest.fn()
    wrapper.vm.$on('click', stub)
    wrapper.findAll('button').at(0).trigger('click')
    expect(stub).toBeCalled()
  })
})