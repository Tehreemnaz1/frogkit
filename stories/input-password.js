import { storiesOf } from '@storybook/vue'
import InputPassword from '@/components/input-password'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Input Password', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
  <Form>
    <InputPassword v-model="password"/>
  </Form>
  <h1>value: {{password}}</h1></div>`,
  data () {
    return {
      password: ''
    }
  }
}), InputPassword)