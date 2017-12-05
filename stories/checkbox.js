import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Checkbox from '@/components/checkbox'


const stories = storiesOf('Checkbox', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
              <Checkbox name="checkbox-buttons" :value="value" :checked="selectedValue" v-model="selectedValue">
                {{slot}}
              </Checkbox>
              <h1>Value: <span v-if="selectedValue">{{value}}</span></h1>
            </div>`,
  data() {
    return {
      value: 'accepted',
      selectedValue: true,
      slot: text('Text', 'I accept terms of use')
    }
  }
}), Checkbox)

stories.addCodeExampleStory('Multiple checkbox', () => ({
  template: `<div>
              <Checkbox name="checkbox-buttons" value="value1" v-model="selectedValue1" :checked="selectedValue1">
                {{slot1}}
              </Checkbox>
              <Checkbox name="checkbox-buttons" value="value2" v-model="selectedValue2" :checked="selectedValue2">
                  {{slot2}}
              </Checkbox>
              <Checkbox name="checkbox-buttons" value="value3" v-model="selectedValue3" :checked="selectedValue3">
                {{slot3}}
              </Checkbox>
              <h1>Value: <span v-if="selectedValue1">{{value1}}</span> <span v-if="selectedValue2">{{value2}}</span> <span v-if="selectedValue3">{{value3}}</span></h1>
            </div>`,
  data() {
    return {
      selectedValue1: false,
      selectedValue2: true,
      selectedValue3: false,
      value1: 'accepted',
      value2: 'mail',
      value3: 'other',
      slot1: text('Label 1', 'Accept terms of use'),
      slot2: text('Label 2', 'subscribe to mail list'),
      slot3: text('Label 3', 'Other')
    }
  }
}))

stories.addCodeExampleStory('Multiple checkbox disabled', () => ({
  template: `<div>
              <Checkbox name="checkbox-buttons" value="value1" v-model="selectedValue1" :checked="selectedValue1" :disabled="disabled">
                {{slot1}}
              </Checkbox>
              <Checkbox name="checkbox-buttons" value="value2" v-model="selectedValue2" :checked="selectedValue2" :disabled="disabled">
                  {{slot2}}
              </Checkbox>
              <Checkbox name="checkbox-buttons" value="value3" v-model="selectedValue3" :checked="selectedValue3" :disabled="disabled">
                {{slot3}}
              </Checkbox>
              <h1>Value: <span v-if="selectedValue1">{{value1}}</span> <span v-if="selectedValue2">{{value2}}</span> <span v-if="selectedValue3">{{value3}}</span></h1>
            </div>`,
  data() {
    return {
      disabled: true,
      selectedValue1: false,
      selectedValue2: true,
      selectedValue3: false,
      value1: 'accepted',
      value2: 'mail',
      value3: 'other',
      slot1: text('Label 1', 'Accept terms of use'),
      slot2: text('Label 2', 'subscribe to mail list'),
      slot3: text('Label 3', 'Other')
    }
  }
}))
