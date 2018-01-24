import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'

import Carousel from '@/components/carousel'



const stories = storiesOf('Carousel', module)

stories.addCodeExampleStory('kitchen sink', () => ({
  template: `
  <Grid>
  <Row>
    <Col xs12 sm6 md4 style="background: blue">
      <Carousel :slides="slides" :active="active" :loop="loop" />
    </Col>
  </Row>
  </Grid>
  `,
  // methods: {
  //   action: action('button-click')
  // },
  data() {
    return {
      active: number('Active', 0, {range: true, min: 0, max: 3, step: 1 }),
      loop: boolean('Loop', false), 
      slides: Array.from({length: 3}).map((_,i) => `https://unsplash.it/320?random&${i}`)
    }
  },
}), Carousel)

stories.addCodeExampleStory('Product page', () => ({
  template: `
  <Grid>
  <Row>
    <Col xs12 sm6 md4 style="background: blue">
      <Carousel :slides="slides" />
    </Col>
  </Row>
  </Grid>
  `,
  data() {
    return {
      slides: Array.from({length: 3}).map((_,i) => `https://s3-eu-west-1.amazonaws.com/cdn.smartfrog.com/design/shop/camera_picts/sf_cam${i+1}%402x.jpg`)
    }
  },
}), Carousel)