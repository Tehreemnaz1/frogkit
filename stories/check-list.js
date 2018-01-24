import { storiesOf } from '@storybook/vue'
import CheckList from '@/components/check-list'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Check List', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<CheckList :color="color" :bold="bold" :placeholder="placeHolder">
              <div>{{otherText}}</div>
              </CheckList>`,
  data () {
    return {
      placeHolder: text('Default Text', 'default text'),
      otherText: text('Other Text', 'other Text'),
      color: select('Color', ['orange', 'red', 'white'], 'orange'),
      bold: boolean('Bold', false)
    }
  }
}), CheckList)