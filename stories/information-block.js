import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Information Block', module)

stories.addCodeExampleStory('Default', () => ({
  template: `
  <Grid>
    <Col xs6>
      <InformationBlock title="How does the Smartfrog Surveillance Bundle work?">
        <div>
        After your order, we will send you the Smartfrog Cam – with free delivery, of course. 
        Then you simply need to download the free Smartfrog App from the Apple App Store or Google Play Store and connect 
        the camera with your Wi-Fi. Now you can use your smartphone, tablet or laptop to see what’s happening at home, 
        anytime from anywhere.
        </div>
      </InformationBlock>
    </Col>
  </Grid>
  `,
}))