import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { array, text, boolean, select } from '@storybook/addon-knobs'
import Select from '@/components/select'

const stories = storiesOf('Select', module)

const options = [
  { label: 'Option 1', value:'Value 1'},
  { label: 'Option 2', value:'Value 2'},
  { label: 'Option 3', value:'Value 3'},
  { label: 'Option 4', value:'Value 4'},
  { label: 'Option 5', value:'Value 5'}
]

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `
  <div>
    <Select v-model="value" :disabled="disabled" :block="block" :placeholder="placeholder" :options="options" :required="required"></Select>
    <h1 class="demo-title">Value: {{value}}</h1>
  </div>
    `,
  data() {
    return {
      placeholder: text('label', 'Select an option'),
      options: options,
      required: boolean('Required', false),
      disabled: boolean('Disabled', false),
      block: boolean('Full Width', false),
      value: select('Value', ['', ...options.map(i => i.value)], '')
    }
  }
}), Select)
