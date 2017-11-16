import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Spinner', module)


stories.add('Default', () => ({
  template: `<Spinner />`,
}))

stories.add('Fullscreen', () => ({
  template: `<Spinner fullscreen />`,
}))
