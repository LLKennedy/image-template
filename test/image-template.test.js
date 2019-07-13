import { html, fixture, expect } from '@open-wc/testing';

import '../src/image-template.js';

describe('<image-template>', () => {
	it('has all default properties', async () => {
		const el = await fixture('<image-template></image-template>');
		expect(el.width).to.equal(0);
		expect(el.height).to.equal(0);
		expect(el.template).to.deep.equal({});
	});
	it('allows property width to be overwritten', async () => {
		const el = await fixture(html`
			<image-template width="100"></image-template>
		`);
		expect(el.width).to.equal(100);
		expect(el.height).to.equal(0);
		expect(el.template).to.deep.equal({});
	});
	it('allows property height to be overwritten', async () => {
		const el = await fixture(html`
			<image-template height="100"></image-template>
		`);
		expect(el.width).to.equal(0);
		expect(el.height).to.equal(100);
		expect(el.template).to.deep.equal({});
	});
	it('allows property template to be overwritten', async () => {
		const el = await fixture(html`
			<image-template template="{\"a\": 1}"></image-template>
		`);
		expect(el.width).to.equal(0);
		expect(el.height).to.equal(0);
		expect(el.template).to.deep.equal({a: 1});
	});
});
