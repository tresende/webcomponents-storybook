import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Button',
  component: 'reppu-button',
  argTypes: {
    text: { control: { type: 'text' } }
  }
}

const defaultAction = action('clicked')

export const Default = ({ text }) => html`
  <div style="width:500px">
    <reppu-button @click=${(e) => defaultAction(e)}">${text}</reppu-button>
  </div>
`

Default.args = {
  text: 'Solicitar Reserva'
}

export const Disabled = ({ text }) => html`
  <div style="width:500px">
    <reppu-button @borcEvent=${(e) => defaultAction(e)} disabled>${text}</reppu-button>
  </div>
`

Disabled.args = {
  text: 'Solicitar Reserva'
}
