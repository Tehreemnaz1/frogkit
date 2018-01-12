import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Form from '@/components/form'

const stories = storiesOf('Form', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `<Form v-model="isValid" class="form-demo">
    <div>
      <Input v-model="inputs[0]" name="username" type="text" placeholder="username" :disabled="disabled" required block></Input>
    </div>
    <div>
      <Input v-model="inputs[1]" type="password" placeholder="password" :disabled="disabled" required block></Input>
    </div>
    <div>
      <Input v-model="inputs[2]" type="phone" placeholder="phone" :disabled="disabled" required block></Input>
    </div>
    <div>
      <Checkbox v-model="inputs[3]" true-value="yep" false-value="nope" required>Accept TOS: {{inputs[3]}}</Checkbox>
    </div>
    <h1 class="demo-title">Valid: {{isValid}}</h1>
    <Button @click="submit" color="primary" block> Submit </Button>
  </Form>`,
  data() {
    return {
      inputs: Array.from({length: 5}),
      disabled: boolean('Disabled', false),
      inputValue: text('Text', 'tada'),
      isValid: null
    }
  },
  methods: {
    submit() {
      if (!this.isValid) return
      alert('Form Submitted!')
    }
  }
}), Form)
