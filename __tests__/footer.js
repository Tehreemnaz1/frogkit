import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Footer from '@/components/footer'

const navItems = [
  [
    { label: 'Häufig gestellte Fragen (FAQ)', url: 'https://support.smartfrog.com/hc/de' },
    { label: 'Support', url: 'https://www.smartfrog.com/de-de/support/' },
    { label: 'Kontakt', url: 'https://www.smartfrog.com/de-de/kontakt/' },
    { label: 'Impressum', url: 'https://www.smartfrog.com/de-de/impressum/' },
    { label: 'Bezugsquellen', url: 'https://www.smartfrog.com/de-de/bezugsquellen/' }
  ],
  [
    { label: 'Nutzungsbedingungen', url: 'https://www.smartfrog.com/de-de/nutzungsbedingungen/' },
    { label: 'Datenschutzrichtlinie', url: 'https://www.smartfrog.com/de-de/datenschutzrichtlinie/' },
    { label: 'Cookies', url: 'https://www.smartfrog.com/de-de/cookies/' },
    { label: 'Glossar', url: 'https://www.smartfrog.com/de-de/glossar' },
    { label: 'Versand', url: 'https://www.smartfrog.com/de-de/versand/' }
  ],
  [
    { label: 'Über uns', url: 'https://www.smartfrog.com/de-de/ueber-uns/' },
    { label: 'Jobs', url: 'https://www.smartfrog.com/de-de/jobs/' }
  ],
  [
    { label: 'Blog', url: 'https://blog.smartfrog.com/de' },
    { label: 'Presse', url: 'https://www.smartfrog.com/de-de/presse/' }
  ]
]
const appStoreItems = {
  headline: 'App downloaden:',
  buttons: [
    {
      name: 'apple',
      url: 'https://app.adjust.com/p39urb',
      label: 'Laden im'
    },
    {
      name: 'google',
      url: 'https://app.adjust.com/vti0vj',
      label: 'JETZT BEI'
    }
  ]
}
const socialItems = {
  headline: 'Smartfrog folgen:',
  icons: [
    {
      name: 'facebook',
      url: 'http://www.facebook.com/smartfrogDE',
      label: 'Folgen Sie auf Facebook'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/smartfrog_cam',
      label: 'Auf Twitter folgen'
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCt2tBYCxnfhBWraIuOcY2Ow',
      label: 'Folgen Sie auf YouTube'
    },
    {
      name: 'instagram',
      url: 'http://instagram.com/smartfrogcam/',
      label: 'Folgen Sie auf Instagram'
    }
  ]
}

const data = {
  navItems: navItems,
  appStoreItems: appStoreItems,
  socialItems: socialItems
}

describe('Footer component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(Footer, { propsData: data })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
