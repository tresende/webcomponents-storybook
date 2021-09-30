import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Button',
  component: 'borc-button',
  argTypes: {
    text: { control: { type: 'text' } }
  }
}

const defaultAction = action('clicked')

export const Default = ({ text }) => html`
  <div style="width:300px">
    <borc-button @click=${(e) => defaultAction(e)}">${text}</borc-button>
  </div>
`

Default.args = {
  text: 'Solicitar Reserva'
}

export const Disabled = ({ text }) => html`
  <div style="width:300px">
    <borc-button @borcEvent=${(e) => defaultAction(e)} disabled>${text}</borc-button>
  </div>
`

Disabled.args = {
  text: 'Solicitar Reserva'
}
