import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import Carousel from '@/components/carousel'



const stories = storiesOf('Carousel', module)

stories.addCodeExampleStory('kitchen sink', () => ({
  template: `
  <Grid>
  <Row>
    <Col xs12 sm6 md4 style="background: blue">
      <Carousel :slides="slides" />
    </Col>
  </Row>
  </Grid>
  
  `,
  methods: { action: action('button-click') },
  data() {
    return {
      // count
      slides: Array.from({length: 3}).map((_,i) => `https://unsplash.it/320?random&${i}`)
    }
  },
}), Carousel)
