import { Component, Prop, h, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'borc-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop() enabled: boolean
  @Prop() text: string
  @Event() borcEvent: EventEmitter

  handleClick() {
    this.borcEvent.emit({ value: 34 })
  }

  render() {
    const modifier = this.enabled == false ? 'disabled' : 'enabled'

    return (
      <button
        onClick={this.handleClick.bind(this)}
        disabled={this.enabled === false}
        class={`button button--${modifier}`}
      >
        <slot>{this.text}</slot>
      </button>
    )
  }
}
