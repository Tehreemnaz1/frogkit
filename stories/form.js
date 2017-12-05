import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Form from '@/components/form'

const stories = storiesOf('Form', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `<Form v-model="isValid">
    <Input v-model="inputs[0]" name="username" type="text" placeholder="username" :disabled="disabled" required></Input>
    <Input v-model="inputs[1]" type="password" placeholder="password" :disabled="disabled" required></Input>
    <div>
      <Input v-model="inputs[2]" type="phone" placeholder="phone" :disabled="disabled" required></Input>
    </div>
    <h1>Valid: {{isValid}}</h1>
  </Form>`,
  data() {
    return {
      inputs: Array.from({length: 5}),
      disabled: boolean('Disabled', false),
      inputValue: text('Text', 'tada'),
      isValid: null
    }
  }
}), Form)
