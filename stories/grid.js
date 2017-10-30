import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Grid System', module)

stories.add('kitchen Sink', () => ({
  template: `
  <Grid>
    <Row xs12><div class="demo"> 12 </div></Row>
    <Row xs6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Row>
    <Row xs4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Row>
    <Row xs3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Row>
    <Row xs2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Row>
    <Row xs1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Row>
  </Grid>
  `
}))
