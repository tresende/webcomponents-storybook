import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Select',
  component: 'reppu-select', // which is also found in the `custom-elements.json`
  argTypes: {
    title: { control: { type: 'text' } }
  }
}

const defaultAction = action('changed')

export const basic = ({ title }) => html`
  <div style="width:200px">
    <reppu-select title="${title}" @change=${(e) => defaultAction(e)}">
    <option value="1">1 Participante</option>
    <option value="2">2 Participantes</option>
    <option value="3">3 Participantes</option>
    <option value="4">4 Participantes</option>
    <option value="5">5 Participantes</option>
    </reppu-select>
  </div>
`
basic.args = {
  title: 'Quantidade de participantes'
}
