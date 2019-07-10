import { html, fixture, expect } from '@open-wc/testing';

import '../src/image-template.js';

describe('<image-template>', () => {
  it('has a default property heading', async () => {
    const el = await fixture('<image-template></image-template>');

    expect(el.heading).to.equal('Hello world!');
  });

  it('allows property heading to be overwritten', async () => {
    const el = await fixture(html`
      <image-template heading="different heading"></image-template>
    `);

    expect(el.heading).to.equal('different heading');
  });
});
