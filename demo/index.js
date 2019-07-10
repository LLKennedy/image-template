import { html, render } from 'lit-html';
import '../src/image-template.js';

const title = 'test';
render(
  html`
    <image-template .heading=${title}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
    </image-template>
  `,
  document.querySelector('#demo'),
);
