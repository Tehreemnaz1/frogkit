import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { array, text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Radio', module)

stories.add('Kitchen Sink', () => ({
  template: `<div>
              <Radio name="radio-buttons" inputValue="Value 1" :value="selectedValue" @change="changeValue" :disabled="disabled">
                  {{slot}}
              </Radio>
              <h1>Value: {{selectedValue}}</h1>
            </div>`,
  data() {
    return {
      selectedValue: '',
      slot: text('Text', 'This is the label'),
      disabled: boolean('Disabled', false)
    }
  },
  methods: {
    changeValue: function(newValue) {
        this.selectedValue = newValue;
    }
  }
}))

stories.add('Multiple radio', () => ({
  template: `<div>
              <Radio name="radio-buttons" inputValue="Value 1" :value="selectedValue" @change="changeValue" :disabled="disabled" >
                  {{slot1}}
              </Radio>
              <Radio name="radio-buttons" inputValue="Value 2" :value="selectedValue" @change="changeValue" :disabled="disabled">
                  {{slot2}}
              </Radio>
              <Radio name="radio-buttons" inputValue="Value 3" :value="selectedValue" @change="changeValue" :disabled="disabled">
                  {{slot3}}
              </Radio>
              <h1>Value: {{selectedValue}}</h1>
            </div>`,
  data() {
    return {
      selectedValue: 'Value 2',
      slot1: text('Label 1', 'Value 1'),
      slot2: text('Label 2', 'Value 2'),
      slot3: text('Label 3', 'Value 3'),
      disabled: false
    }
  },
  methods: {
    changeValue: function(newValue) {
        this.selectedValue = newValue;
    }
  }
}))

stories.add('Multiple radio disabled', () => ({
  template: `<div>
              <Radio name="radio-buttons" inputValue="Value 1" :value="selectedValue" @change="changeValue" :disabled="disabled" >
                  {{slot1}}
              </Radio>
              <Radio name="radio-buttons" inputValue="Value 2" :value="selectedValue" @change="changeValue" :disabled="disabled">
                  {{slot2}}
              </Radio>
              <Radio name="radio-buttons" inputValue="Value 3" :value="selectedValue" @change="changeValue" :disabled="disabled">
                  {{slot3}}
              </Radio>
              <h1>Value: {{selectedValue}}</h1>
            </div>`,
  data() {
    return {
      selectedValue: 'Value 3',
      slot1: text('Label 1', 'Value 1'),
      slot2: text('Label 2', 'Value 2'),
      slot3: text('Label 3', 'Value 3'),
      disabled: boolean('Disabled', true)
    }
  },
  methods: {
    changeValue: function(newValue) {
        this.selectedValue = newValue;
    }
  }
}))
