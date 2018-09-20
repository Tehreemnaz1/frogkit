import { storiesOf } from '@storybook/vue'
import { number, select, boolean } from '@storybook/addon-knobs'

import inputTooltip from '@/components/input-tooltip'

const stories = storiesOf('Input Tooltip', module)

stories.addCodeExampleStory(
  'password input',
  () => ({
    template: `<Form class="form-demo">
    <InputTooltip :title="title" :conditions="conditions" :status-txt="statusTxt">
      <Input v-model="value" type="password" placeholder="passsword" />  
    </InputTooltip>
      
  </Form>`,
    data() {
      return {
        title: 'Password must have:',
        conditions: {
          length: '8 or more characters',
          letters: 'Upper & lowercase letters',
          digit: 'At least one number',
        },
        status: 'warning',
        statusTxt: {
          danger: 'weak password',
          warning: 'good password',
          success: 'strong password',
        },
        value: '',
      }
    },
  }),
  inputTooltip
)

stories.addCodeExampleStory(
  'email input',
  () => ({
    template: `<Form class="form-demo">
    <InputTooltip :title="title" :conditions="conditions">
      <Input v-model="value" type="email" placeholder="email" />  
    </InputTooltip>
      
  </Form>`,
    data() {
      return {
        title: 'Email address must:',
        conditions: { valid: 'be valid' },
        value: '',
      }
    },
  }),
  inputTooltip
)

stories.addCodeExampleStory(
  'phone number input',
  () => ({
    template: `<Form class="form-demo">
    <InputTooltip :title="title" :conditions="conditions">
      <Input v-model="value" type="phone" placeholder="phone" />  
    </InputTooltip>
      
  </Form>`,
    data() {
      return {
        title: 'Phone number must:',
        conditions: { valid: 'be valid' },
        value: '',
      }
    },
  }),
  inputTooltip
)

stories.addCodeExampleStory(
  'Full form',
  () => ({
    template: `<Form v-model="isValid" class="form-demo m-t-60">
      <InputTooltip  :title="emailTitle" :conditions="generalCondition" >
        <Input block v-model="value[0]" type="email" placeholder="email"/>  
      </InputTooltip>
      <InputTooltip  :title="passtitle" :conditions="passConditions" :status-txt="statusTxt" >
        <Input  v-model="value[1]" type="password" placeholder="passsword"  />  
      </InputTooltip>
      <InputTooltip  :title="passtitle" :conditions="passConditions" :status-txt="statusTxt" >
        <Input  v-model="value[2]" type="password" placeholder=" repeat passsword"  />  
      </InputTooltip>

      <InputTooltip  :title="phoneTitle" :conditions="generalCondition" >
        <Input block v-model="value[3]" type="phone" placeholder="phone"/>  
      </InputTooltip>
  </Form>`,
    data() {
      return {
        isValid: true,
        emailTitle: 'Email must:',
        passtitle: 'Password must have:',
        phoneTitle: 'Phone must:',
        passConditions: {
          length: '8 or more characters',
          letters: 'Upper & lowercase letters',
          digit: 'At least one number',
        },
        generalCondition: { valid: 'be valid' },
        statusTxt: {
          danger: 'weak password',
          warning: 'good password',
          success: 'strong password',
        },
        value: ['', '', '', ''],
      }
    },
  }),
  inputTooltip
)
