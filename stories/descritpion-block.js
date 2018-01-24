import { storiesOf } from '@storybook/vue'
import DescriptionBlock from '@/components/description-block'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Description Block', module)

stories.addCodeExampleStory('Description with text', () => ({
  template: `<Grid>
                <Col md4>
                <DescriptionBlock :title="title">
                  <div>
                  <Title size="xs" color="primary">A title from slot.</Title>
                  The Smartfrog Cam can easily be connected with your Wi-Fi using the Smartfrog App. It will then 
                  transmit the recorded videos LIVE to the Smartfrog Cloud using secure bank-level encryption. From here, 
                  you can view the videos at any time using the Smartfrog App on your smartphone, tablet or laptop.
                  </div>
                </DescriptionBlock>
              </Col>
            </Grid>`,
  data () {
    return {
      title: text('Title', 'Description with text')
    }
  }
}), DescriptionBlock)
stories.addCodeExampleStory('Description with list', () => ({
  template: `<Grid>
                <Col md4>
                <DescriptionBlock :title="title">
                  <ul>
                    <li>Cam management<dd>Use up to 10 Smartfrog Cams at the same time.</dd></li>
                    <li>Data Protection<dd>All data is secured with bank-level encryption.</dd></li>
                  </ul>
                </DescriptionBlock>
              </Col>
            </Grid>`,
  data () {
    return {
      title: text('Title', 'Description with list')
    }
  }
}), DescriptionBlock)