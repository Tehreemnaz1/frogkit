import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'
import Title from '@/components/title'

const stories = storiesOf('Accordion', module)


stories.add('kitchen sink', () => ({
  template: `<Accordion :placeholder="placeholder" :open="open">
              <Title size="md" color="primary">Smartfrog HD Cam</Title>
            </Accordion>`,
  data(){
    return {
      placeholder: text('placeholder', 'Lorem ipsum dolorem'),
      open: boolean('Open', false)
    }
  }
}), Title)
