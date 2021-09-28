import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Button',
  component: 'borc-button', // which is also found in the `custom-elements.json`
  argTypes: {
    enabled: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } }
  }
}

const defaultAction = action('clicked')

export const basic = ({ text, enabled, onclick }) => html`
  <div style="width:300px">
    <borc-button @borcEvent=${(e) => defaultAction(e)} enabled="${enabled}">${text}</borc-button>
  </div>
`
basic.args = {
  text: 'Solicitar Reserva',
  enabled: true
}
