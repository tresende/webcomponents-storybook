import { Component, h, Element } from '@stencil/core'
import { getElementAttributes } from '../../../utils/getElementAttributes'

@Component({
  tag: 'reppu-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Element() el: Element

  render() {
    const properties = getElementAttributes(this.el.attributes)
    console.log(properties)
    return (
      <button {...properties}>
        <slot />
      </button>
    )
  }
}
