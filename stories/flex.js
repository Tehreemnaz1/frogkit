import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Layout / Flexbox', module)

stories.add('kitchen Sink', () => ({
  template: `
  <Grid style="height: 500px">
    <Flex :column="column" :justify="justify" :align="align">
      <div v-for="i in 8" :key="i" class="flex-demo" > {{i}} </div>
    </Flex>
  </Grid>
  `,
  data(){
    return {
      column: boolean('Column', false),
      justify: select('Justify', ['start', 'center', 'end', 'space-around', 'space-between'], 'start'),
      align: select('Align', ['start', 'center', 'end', 'stretch'], 'start')
    }
  }
}))

stories.add('Nested Flex', () => ({
  template: `
  <Grid style="height: 500px">
    <Flex :column="column" :justify="justify" :align="align">
      <Flex v-for="i in 8" :key="i" class="flex-demo" > {{i}} </Flex>
    </Flex>
  </Grid>
  `,
  data(){
    return {
      column: boolean('Column', false),
      justify: select('Justify', ['start', 'center', 'end', 'space-around', 'space-between'], 'start'),
      align: select('Align', ['start', 'center', 'end', 'stretch'], 'start')
    }
  }
}))
