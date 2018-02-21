import { storiesOf } from '@storybook/vue'
import DarkLayer from '@/components/dark-layer'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Dark Layer', module)

stories.addCodeExampleStory('Demo', () => ({
  template: ` 
        <div>
        <img src="https://picsum.photos/1200/800" />  
        <DarkLayer>
          <div>Some text in the layer</div>
        </DarkLayer>
        </div>`,
}), DarkLayer)