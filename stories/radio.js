import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Radio from '@/components/radio'


const stories = storiesOf('Radio', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
              <Radio name="radio-buttons" value="Value 1" v-model="selectedValue">
                {{slot}}
              </Radio>
              <h1 class="demo-title">Value: {{selectedValue}}</h1>
            </div>`,
  data() {
    return {
      selectedValue: '',
      slot: text('Text', 'This is the label')
    }
  }
}), Radio)

stories.addCodeExampleStory('Multiple radio', () => ({
  template: `<div>
              <Radio name="radio-buttons" value="Value 1" v-model="selectedValue">
                {{slot1}}
              </Radio>
              <Radio name="radio-buttons" value="Value 2" v-model="selectedValue">
                  {{slot2}}
              </Radio>
              <Radio name="radio-buttons" value="Value 3" v-model="selectedValue">
                {{slot3}}
              </Radio>
              <h1 class="demo-title">Value: {{selectedValue}}</h1>
            </div>`,
  data() {
    return {
      selectedValue: 'Value 2',
      slot1: text('Label 1', 'Value 1'),
      slot2: text('Label 2', 'Value 2'),
      slot3: text('Label 3', 'Value 3')
    }
  }
}))

stories.addCodeExampleStory('Multiple radio disabled', () => ({
  template: `<div>
              <Radio name="radio-buttons" value="Value 1" v-model="selectedValue" :disabled="disabled" >
                  {{slot1}}
              </Radio>
              <Radio name="radio-buttons" value="Value 2" v-model="selectedValue" :disabled="disabled">
                  {{slot2}}
              </Radio>
              <Radio name="radio-buttons" value="Value 3" v-model="selectedValue" :disabled="disabled">
                  {{slot3}}
              </Radio>
              <h1 class="demo-title">Value: {{selectedValue}}</h1>
            </div>`,
  data() {
    return {
      selectedValue: 'Value 3',
      slot1: text('Label 1', 'Value 1'),
      slot2: text('Label 2', 'Value 2'),
      slot3: text('Label 3', 'Value 3'),
      disabled: true
    }
  }
}))
