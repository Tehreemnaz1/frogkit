import { mount } from 'vue-test-utils'
import NotFound from '@/components/not-found'

describe('Not Found component', () => {
  it('should render component and match snapshot: lang de', () => {
    const wrapper = mount(NotFound, {propsData: {title: 'Ein Fehler ist aufgetreten', 
      content: 'Es tut uns leid, wir konnten die angeforderte Seite nicht finden.<br>Bitte die Internetadresse (URL) auf Fehler überprüfen.', 
      button: 'Zur Startseite'}})
    expect(wrapper.html()).toMatchSnapshot()
  })
})