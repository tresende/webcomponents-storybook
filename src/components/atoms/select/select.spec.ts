import { newSpecPage } from '@stencil/core/testing'
import { Select } from './select'

describe('reppu-select', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Select],
      html: '<reppu-select></reppu-select>'
    })
    expect(root).toEqualHtml(`
      <reppu-select>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </reppu-select>
    `)
  })
})
