import { storiesOf } from '@storybook/vue'
import { number, select, boolean } from '@storybook/addon-knobs'

import inputTooltip from '@/components/input-tooltip'

const stories = storiesOf('Input Tooltip', module)


stories.addCodeExampleStory('kitchen sink', () => ({
  template:
  `<Form>
    <inputTooltip>
      <Input type="password" placeholder="passsword" />
      <div slot="content"><b>Password must contain</b></div>
    </inputTooltip>
      
  </Form>`,
  data() {
    return {
      tit
    }
  }
}), inputTooltip)