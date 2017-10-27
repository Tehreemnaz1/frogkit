import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('input', module)


stories.add('default', () => ({
  template: `<fk-input v-model="value" :type="inputType" :size="size" :color="color" :block="block" :error="error" :disabled="disabled" :placeholder="placeholder"></fk-input>`,
  data() {
    return {
      inputType: select()
    }
  }
}))
