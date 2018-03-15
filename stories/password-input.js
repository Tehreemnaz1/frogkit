import { storiesOf } from '@storybook/vue'
import PasswordInput from '@/components/password-input'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Password Input', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
  <Form>
    <PasswordInput v-model="password"/>
  </Form>
  <h1>value: {{password}}</h1></div>`,
  data () {
    return {
      password: ''
    }
  }
}), PasswordInput)