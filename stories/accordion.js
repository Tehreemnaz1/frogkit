import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'
import Title from '@/components/title'

const stories = storiesOf('Accordion', module)


stories.add('kitchen sink', () => ({
  template: `<Accordion :placeholder="placeholder" :open="open">
              <Title size="md" color="primary">

                <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
                  <Title size="xs" color="primary">A title from slot.</Title>
                  The Smartfrog Cam can easily be connected with your Wi-Fi using the Smartfrog App. It will then 
                  transmit the recorded videos LIVE to the Smartfrog Cloud using secure bank-level encryption. From here, 
                  you can view the videos at any time using the Smartfrog App on your smartphone, tablet or laptop.
                </DescriptionBlock>

                 <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
                  <ul>
                    <li>Cam management<dd>Use up to 10 Smartfrog Cams at the same time.</dd></li>
                    <li>Data Protection<dd>All data is secured with bank-level encryption.</dd></li>
                  </ul>
                </DescriptionBlock>

              </Title>
            </Accordion>`,
  data(){
    return {
      placeholder: text('placeholder', 'Lorem ipsum dolorem'),
      open: boolean('Open', false)
    }
  }
}), Title)
