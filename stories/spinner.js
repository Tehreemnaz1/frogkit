import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Spinner', module)


stories.add('Kitchen Sink', () => ({
  template: `<Spinner />`,
  methods: { action: action('button-click') }
}))
