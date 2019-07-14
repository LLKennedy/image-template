import { html, fixture, expect } from '@open-wc/testing';

import '../src/image-template.js';

describe('<image-template>', () => {
  it('has all default properties', async () => {
    const el = await fixture('<image-template></image-template>');
    await el.updateComplete;
    expect(el.width).to.equal(0);
    expect(el.height).to.equal(0);
    expect(el.template).to.eql({});
    expect({ ...el._template }).to.eql({});
  });
  it('allows property width to be overwritten', async () => {
    const el = await fixture(html`
      <image-template width="100"></image-template>
    `);
    await el.updateComplete;
    expect(el.width).to.equal(100);
    expect(el.height).to.equal(0);
    expect(el.template).to.eql({});
    expect({ ...el._template }).to.eql({});
  });
  it('allows property height to be overwritten', async () => {
    const el = await fixture(html`
      <image-template height="100"></image-template>
    `);
    await el.updateComplete;
    expect(el.width).to.equal(0);
    expect(el.height).to.equal(100);
    expect(el.template).to.eql({});
    expect({ ...el._template }).to.eql({});
  });
  it('allows property template to be overwritten', async () => {
    const el = await fixture(html`
      <image-template></image-template>
    `);
    await el.updateComplete;
    expect(el.count).to.equal(1);
    // const expectedEvent = oneEvent(el, 'parsed-template');
    expect(el.width).to.equal(0);
    expect(el.height).to.equal(0);
    expect(el.template).to.eql({});
    expect({ ...el._template }).to.eql({});
    el.template = { a: 2 };
    el.requestUpdate();
    await el.updateComplete;
    expect(el.template).to.deep.equal({ a: 2 });
    expect(el._template).to.eql({ a: 2 });
    // expect(el.count).to.equal(2);
  });
});
