import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('borc-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<borc-button></borc-button>',
    });
    expect(root).toEqualHtml(`
      <borc-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </borc-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<borc-button first="Stencil" last="'Don't call me a framework' JS"></borc-button>`,
    });
    expect(root).toEqualHtml(`
      <borc-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </borc-button>
    `);
  });
});
