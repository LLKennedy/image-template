import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import ImageTemplate from '../src/ImageTemplate.js';
import '../src/image-template.js';

import readme from '../README.md';

storiesOf('image-template', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(ImageTemplate), {
    notes: { markdown: readme },
  })
  .add(
    'Alternative Header',
    () => html`
      <image-template .header=${'Something else'}></image-template>
    `,
  );
