import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import StorageBundle from '@/components/storage-bundle'

const propsData = {
  storage: {
    title: 'Speichererweiterung',
    for: 'Speichererweiterung für:',
    devices: [{value: '1', label: 'iphone 8'}, {value: '2', label: 'HW Cam DEV'}, {value: '3', label: 'SM-T825'}],
    history: 'Video-Speicher der jeweils letzten:',
    upgrades: [
      {value: '24h', label: '24 Std. 2,65€ / mtl.'},
      {value: '7d', label: '7 Tage 5,35€ / mtl.'},
      {value: '30d', label: '30 Tage 13,45€ / mtl.'}
    ],
    price: {
      amount: '5.35',
      currency: 'EUR',
      prefix: 'nur',
      suffix: 'im Monat'
    },
    action: 'Video-Speicher kaufen'
  },
  selectedDevice: {value: '1', label: 'iphone 8'},
  selectedUpgrade: {value: '24h', label: '24 Std. 2,65€ / mtl.'},
  active: true
}


describe('Storage Bundle component', () => {
  it('should render component and match snapshot', () => {
    // Note: a hack to get appropriate snapshot
    StorageBundle.data = () => { return {show: true} }
    const wrapper = mount(StorageBundle, {propsData})
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit upgrade event', () => {
    const wrapper = mount(StorageBundle, {propsData})
    const stub = jest.fn()
    wrapper.vm.$on('upgrade', stub)
    wrapper.findAll('button').at(0).trigger('click')
    expect(stub).toBeCalled()
  })
  it('should emit select event', () => {
    const wrapper = mount(StorageBundle, {propsData})
    const stub = jest.fn()
    wrapper.vm.$on('select', stub)
    wrapper.findAll('select').at(0).trigger('input')
    expect(stub).toBeCalled()
  })
  it('should emit change event', () => {
    const wrapper = mount(StorageBundle, {propsData})
    const stub = jest.fn()
    wrapper.vm.$on('change', stub)
    wrapper.findAll('radio').at(0).trigger('change')
    expect(stub).toBeCalled()
  })
})