import { storiesOf } from '@storybook/vue'
import { number, select, boolean } from '@storybook/addon-knobs'

import inputTooltip from '@/components/input-tooltip'

const stories = storiesOf('Input Tooltip', module)


stories.addCodeExampleStory('password input', () => ({
  template:
  `<Form>
    <InputTooltip :title="title" :conditions="conditions" :status-txt="statusTxt">
      <Input v-model="value" type="password" placeholder="passsword" />  
    </InputTooltip>
      
  </Form>`,
  data () {
    return {
      title: 'Password must have:',
      conditions: {'min': 'min 6 chars', 'max': 'max 64 chars'},
      status: 'warning',
      statusTxt: 'weak password',
      value: ''
    }
  }
}), inputTooltip)

stories.addCodeExampleStory('email input', () => ({
  template:
  `<Form>
    <InputTooltip :title="title" :conditions="conditions">
      <Input v-model="value" type="email" placeholder="email" />  
    </InputTooltip>
      
  </Form>`,
  data () {
    return {
      title: 'Email address must:',
      conditions: {'valid': 'be valid'},
      value: ''
    }
  }
}), inputTooltip)

stories.addCodeExampleStory('phone number input', () => ({
  template:
  `<Form>
    <InputTooltip :title="title" :conditions="conditions">
      <Input v-model="value" type="phone" placeholder="phone" />  
    </InputTooltip>
      
  </Form>`,
  data () {
    return {
      title: 'Phone number must:',
      conditions: {'valid': 'be valid'},
      value: ''
    }
  }
}), inputTooltip)