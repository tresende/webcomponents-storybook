import { Component, h, Event, Element, EventEmitter, Prop } from '@stencil/core'
import { getElementAttributes } from '../../../utils/getElementAttributes'

@Component({
  tag: 'reppu-select',
  styleUrl: 'select.scss',
  shadow: true
})
export class Select {
  @Element() host: HTMLReppuSelectElement
  @Event() change: EventEmitter
  @Prop() label?: string

  private children: Element[]

  componentWillLoad() {
    this.children = Array.from(this.host.children)
    this.host.innerHTML = ''
  }

  private handleChange(e: Event) {
    const { value } = e.target as HTMLInputElement
    this.change.emit({ value })
  }

  render() {
    const properties = getElementAttributes(this.host.attributes)
    const hasLabel = !!this.label
    return (
      <host class="wrapper">
        {hasLabel && <label class="wrapper__label--visible">{this.label}</label>}
        <div class="wrapper__container">
          <select class="wrapper__select" {...properties} onChange={this.handleChange.bind(this)}>
            {this.children.map((child) => {
              const value = child.getAttribute('value')
              return (
                <option selected={value === properties['value']} value={value}>
                  {child.innerHTML}
                </option>
              )
            })}
          </select>
        </div>
      </host>
    )
  }
}
