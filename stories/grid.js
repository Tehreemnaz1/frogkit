import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, number, boolean } from '@storybook/addon-knobs'

import Grid from '@/components/grid'


const stories = storiesOf('Layout / Grid System', module)

stories.addCodeExampleStory('kitchen Sink', () => {
  const bp = select('min breaking-point', ['xs', 'sm', 'md', 'lg', 'xl'], 'xs')
  const fluid = boolean('Fluid', false)
  return {
    template: `
    <Grid :fluid=${fluid}>
      <Row><Col ${bp}12><div class="demo"> 12 </div></Col></Row>
      <Row><Col ${bp}6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
      <Row><Col ${bp}4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
      <Row><Col ${bp}3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
      <Row><Col ${bp}2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
      <Row><Col ${bp}1 v-for="i in 12" :key="i"><div class="demo">1 </div></Col></Row>
    </Grid>
    `}
}, Grid)

stories.addCodeExampleStory('Fill space', () => {
const n = number('size', 1, {
   range: true,
   min: 1,
   max: 12,
   step: 1,
})
  return {
    template: `
    <Grid>
      <Row>
        <Col xs${n} ><div class="demo">${n} </div></Col>
        <Col><div class="demo"> fillspace </div></Col>
        <Col xs${n} ><div class="demo">${n} </div></Col>
      </Row>
    </Grid>
    `}
})

stories.addCodeExampleStory('Extra small', () => ({
  template: `
  <Grid>
    <Row><Col xs12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))

stories.addCodeExampleStory('Small', () => ({
  template: `
  <Grid>
    <Row><Col xs12 sm12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs12 sm6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs12 sm4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs12 sm3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs12 sm2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs12 sm1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))

stories.addCodeExampleStory('Medium', () => ({
  template: `
  <Grid>
    <Row><Col xs12 md12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs12 md6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs12 md4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs12 md3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs12 md2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs12 md1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))

stories.addCodeExampleStory('Large', () => ({
  template: `
  <Grid>
    <Row><Col xs12 lg12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs12 lg6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs12 lg4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs12 lg3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs12 lg2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs12 lg1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))
