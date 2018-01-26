import { storiesOf } from '@storybook/vue'
import TickText from '@/components/tick-text'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Tick Text', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<TickText :color="color" :bold="bold" :placeholder="placeHolder">
              <div>{{otherText}}</div>
              </TickText>`,
  data () {
    return {
      placeHolder: text('Default Text', 'default text'),
      otherText: text('Other Text', 'other Text'),
      color: select('Color', ['orange', 'red', 'white'], 'orange'),
      bold: boolean('Bold', false)
    }
  }
}), TickText)