import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Checkbox from '@/components/checkbox'


const stories = storiesOf('Checkbox', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
              <Checkbox :value="value" :disabled="disabled" v-model="selectedValue">
                {{slot}}
              </Checkbox>
              <h1>Model: {{selectedValue}}</h1>
            </div>`,
  data() {
    return {
      disabled: boolean('Disabled', true),
      value: text('value', 'accepted'),
      selectedValue: false,
      slot: text('Text', 'I accept terms of use')
    }
  }
}), Checkbox)

stories.addCodeExampleStory('Default Binding', () => ({
  template: `<Checkbox v-model="selectedValue">
                {{selectedValue}}
              </Checkbox>`,
  data() {
    return {
      selectedValue: false
    }
  }
}), Checkbox)

stories.addCodeExampleStory('Value Binding', () => ({
  template: `<Checkbox :value="value" v-model="selectedValue">
                {{selectedValue}}
              </Checkbox>`,
  data() {
    return {
      value: text('Value', 'selected'),
      selectedValue: ''
    }
  }
}), Checkbox)

stories.addCodeExampleStory('Binding other value ', () => ({
  template: `<Checkbox :true-value="trueValue" :false-value="falseValue" v-model="selectedValue">
                {{selectedValue}}
              </Checkbox>`,
  data() {
    return {
      trueValue: text('True Value', 'Yep'),
      falseValue: text('False Value', 'Nope'),
      selectedValue: 'Yep'
    }
  }
}), Checkbox)
