import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Form from '@/components/form'

const stories = storiesOf('Form', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `<Form v-model="isValid" class="form-demo">
    <div>
      <Select v-model="inputs[4]" :disabled="disabled" block placeholder="Title" :options="options" :wrong="wrong" required></Select>
    </div>
    <div>
      <Input v-model="inputs[0]" name="username" type="text" placeholder="username" :disabled="disabled" :wrong="wrong" required block></Input>
    </div>
    <div>
      <Input v-model="inputs[1]" type="password" placeholder="password" :disabled="disabled" :wrong="wrong" required block></Input>
    </div>
    <div>
      <Input v-model="inputs[2]" type="phone" placeholder="phone" :disabled="disabled" :wrong="wrong" required block></Input>
    </div>
    <div>
      <Checkbox v-model="inputs[3]" true-value="yep" false-value="nope" :wrong="wrong" required>Accept TOS: {{inputs[3]}}</Checkbox>
    </div>
    <h1 class="demo-title">Valid: {{isValid}}</h1>
    <Button @click="submit" color="primary" block> Submit </Button>
  </Form>`,
  data() {
    return {
      inputs: Array.from({length: 5}),
      disabled: boolean('Disabled', false),
      wrong: boolean('Wrong', false),
      options: [{value: 'Mr', label: 'Mr'}, {value: 'Mrs', label: 'Mrs'}],
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


stories.addCodeExampleStory('Auto Scroll to Error', () => ({
  template:
  `<Form v-model="isValid" class="form-demo">
    <div>
      <Input v-model="inputs[0]" name="username" type="text" placeholder="username" :disabled="disabled" required block></Input>
    </div>
    <div class="space-demo" /> 
    
    <div>
      <Input v-model="inputs[1]" type="password" placeholder="password" :disabled="disabled" required block></Input>
    </div>
    <div class="space-demo" /> 
    
    <div>
      <Input v-model="inputs[2]" type="phone" placeholder="phone" :disabled="disabled" required block></Input>
    </div>
    <div class="space-demo" /> 
    
    <div>
      <Checkbox v-model="inputs[3]" true-value="yep" false-value="nope" required>Accept TOS: {{inputs[3]}}</Checkbox>
    </div>
    <div class="space-demo" /> 
    <h1 class="demo-title">Valid: {{isValid}}</h1>
    <Button @click="submit" color="primary" block> Submit </Button>
  </Form>`,
  data() {
    return {
      inputs: Array.from({length: 5}),
      disabled: boolean('Disabled', false),
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
