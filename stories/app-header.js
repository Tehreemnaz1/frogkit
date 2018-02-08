import { storiesOf } from '@storybook/vue'
import AppHeader from '@/components/app-header'
import { select } from '@storybook/addon-knobs'

const stories = storiesOf('App Header', module)

const navigations = [
  { label: 'All cameras', url: 'https://app.sf-dev1.com/de-de/' },
  { label: 'My account', url: 'https://app.sf-dev1.com/de-de/account/overview' },
  { label: 'Shop', url: 'https://www.sf-dev1.com/de-de/shop' },
]

const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' }
]

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
    <AppHeader
      :navigations="navigations"
      :username="username"
      :languages="languages"
      :activeLang="activeLang"
      logoutlabel="Logout"
      @logout="onLogout"
      @changeLanguage="onChangeLang" />
    <h1 class="demo-title">Emitted:
      <div style="width: 50%;"><b>{{ emitted }}</b></div>
    </h1>
  </div>`,
  data() {
    return {
      navigations,
      username: 'john.doe@lorem.com',
      languages,
      emitted: '',
      activeLang: select('activeLang', ['en', 'de'], 'en')
    }
  },
  methods: {
    onLogout() {
      this.emitted = 'logged out'
    },
    onChangeLang(lang) {
      this.emitted = lang
    }
  }
}), AppHeader)
