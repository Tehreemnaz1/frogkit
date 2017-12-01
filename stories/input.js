import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Input from '@/components/input'

const stories = storiesOf('Input', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `<div>
    <Input v-model="inputValue" :type="inputType" :size="size" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
    <h1>Value: {{inputValue}}</h1>
  </div>`,
  data() {
    return {
      inputValue: text('Text', 'tada'),
      inputType: select('Input Type', ['text', 'email', 'phone', 'password'], 'text'),
      size: select('Size', ['normal', 'small'], 'normal'),
      cutSide: select('Cut border', ['default', 'left', 'right'], 'default'),
      disabled: boolean('Disabled', false),
      block: boolean('Block', false),
      required: boolean('Required', false),
      placeholderText: text('Placeholder', 'Username')
    }
  }
}), Input)

stories.addCodeExampleStory('Type Password', () => ({
  template:
  `<div>
    <Input v-model="inputValue" type="password" :size="size" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
  </div>`,
  data() {
    return {
      inputValue: '',
      size: select('Size', ['normal', 'small'], 'normal'),
      cutSide: select('Cut border', ['default', 'left', 'right'], 'default'),
      disabled: boolean('Disabled', false),
      block: boolean('Block', false),
      required: boolean('Required', false),
      placeholderText: text('Placeholder', 'Password')
    }
  }
}))

stories.addCodeExampleStory('Type Phone Number', () => ({
  template:
  `<div>
    <Input v-model="inputValue" type="phone" :size="size" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
  </div>`,
  data() {
    return {
      inputValue: '',
      size: select('Size', ['normal', 'small'], 'normal'),
      cutSide: select('Cut border', ['default', 'left', 'right'], 'default'),
      disabled: boolean('Disabled', false),
      block: boolean('Block', false),
      required: boolean('Required', false),
      placeholderText: text('Placeholder', 'Phone Number')
    }
  }
}))

stories.addCodeExampleStory('Type Email', () => ({
  template:
  `<div>
    <Input v-model="inputValue" type="email" :size="size" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
  </div>`,
  data() {
    return {
      inputValue: '',
      size: select('Size', ['normal', 'small'], 'normal'),
      cutSide: select('Cut border', ['default', 'left', 'right'], 'default'),
      disabled: boolean('Disabled', false),
      block: boolean('Block', false),
      required: boolean('Required', false),
      placeholderText: text('Placeholder', 'Email')
    }
  }
}))
