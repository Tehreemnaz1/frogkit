import { storiesOf } from '@storybook/vue'
import AppHeader from '@/components/app-header'

const stories = storiesOf('App Header', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
    <AppHeader />
    <!--<h1 class="demo-title">Emitted:
      <div style="width: 50%;">{{ emitted }}</div>
    </h1>-->
  </div>`,
  data() {
    return {
      emitted: ''
    }
  },
  methods: {
  }
}), AppHeader)
