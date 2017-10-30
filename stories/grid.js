import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, number } from '@storybook/addon-knobs'

const stories = storiesOf('Grid System', module)

stories.add('kitchen Sink', () => {
const bp = select('min breaking-point', ['xs', 'sm', 'md', 'lg', 'xl'], 'xs')
  return {
    template: `
    <Grid>
      <Row ${bp}12><div class="demo"> 12 </div></Row>
      <Row ${bp}6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Row>
      <Row ${bp}4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Row>
      <Row ${bp}3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Row>
      <Row ${bp}2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Row>
      <Row ${bp}1 v-for="i in 12" ><div class="demo">1 </div></Row>
    </Grid>
    `}
})

stories.add('Fill space', () => {
const n = number('size', 1, {
   range: true,
   min: 1,
   max: 12,
   step: 1,
})
  return {
    template: `
    <Grid>
      <Row xs${n} ><div class="demo">${n} </div></Row>
      <Row><div class="demo"> fillspace </div></Row>
      <Row xs${n} ><div class="demo">${n} </div></Row>

    </Grid>
    `}
})

stories.add('Extra small', () => ({
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

stories.add('Small', () => ({
  template: `
  <Grid>
    <Row sm12><div class="demo"> 12 </div></Row>
    <Row sm6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Row>
    <Row sm4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Row>
    <Row sm3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Row>
    <Row sm2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Row>
    <Row sm1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Row>
  </Grid>
  `
}))

stories.add('Medium', () => ({
  template: `
  <Grid>
    <Row md12><div class="demo"> 12 </div></Row>
    <Row md6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Row>
    <Row md4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Row>
    <Row md3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Row>
    <Row md2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Row>
    <Row md1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Row>
  </Grid>
  `
}))

stories.add('Large', () => ({
  template: `
  <Grid>
    <Row lg12><div class="demo"> 12 </div></Row>
    <Row lg6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Row>
    <Row lg4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Row>
    <Row lg3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Row>
    <Row lg2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Row>
    <Row lg1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Row>
  </Grid>
  `
}))
