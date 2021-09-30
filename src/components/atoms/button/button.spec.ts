import { newSpecPage } from '@stencil/core/testing'
import { Button } from './button'

describe('reppu-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<reppu-button></reppu-button>'
    })
    expect(root).toEqualHtml(`
      <reppu-button>
        BeerOrCoffee
      </reppu-button>
    `)
  })
})
