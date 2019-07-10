import { html, fixture, expect } from '@open-wc/testing';

import '../src/image-template.js';

describe('<image-template>', () => {
	it('has a default property heading', async () => {
		const el = await fixture('<image-template></image-template>');
		expect(el.width).to.equal(0);
		expect(el.height).to.equal(0);
		expect(el.template).to.deep.equal({});
	});

	it('allows property heading to be overwritten', async () => {
		const el = await fixture(html`
			<image-template width="100"></image-template>
		`);
		expect(el.width).to.equal(100);
		expect(el.height).to.equal(0);
		expect(el.template).to.deep.equal({});
	});
});
