import '@gemeente-haarlem/design-tokens/dist/index.css';
import '@gemeente-haarlem/design-tokens/src/custom.scss';

import { defineCustomElements as defineUtrechtComponents } from '@utrecht/web-component-library-stencil';
import { defineCustomElements } from '@gemeente-haarlem/web-components-stencil';

defineCustomElements();
defineUtrechtComponents();

export const decorators = [
  // Enable `utrecht-document` component as backdrop
  // Enable `haarlem-theme` to configure the design tokens
  // (story) => `<div class="utrecht-document haarlem-theme">${story()}</div>`,
];

const statuses = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

const sidebarOrder = {
  options: {
    panelPosition: 'bottom',
    storySort: {
      order: [
        'Haarlem',
        ['README'],
        'NL Design System',
        ['README'],
        'CSS Component',
        ['README'],
        'HTML Component',
        ['README'],
        'Web Component',
        ['README'],
        'Angular Component',
        ['README'],
        'React Component',
        ['README'],
        'Vue.js Component',
        ['README'],
        'Form.io Component',
        ['README'],
      ],
    },
  },
};
export const parameters = {
  controls: { expanded: false },
  previewTabs,
  statuses,
  ...sidebarOrder,
};
