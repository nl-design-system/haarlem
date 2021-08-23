import { create } from '@storybook/theming/create';

// For more info on Storybook theming and an overview of all options:
// https://storybook.js.org/docs/react/configure/theming
export default create({
  base: 'light',
  colorPrimary: 'rgb(42, 99, 168)',
  colorSecondary: 'rgb(200, 58, 63)',

  // UI
  appBg: 'rgb(235, 236, 236)',
  appContentBg: 'rgb(255, 255, 255)',
  appBorderColor: 'rgb(69, 71, 71)',
  appBorderRadius: 0,

  textColor: 'rgb(59, 62, 62)',

  barTextColor: 'rgb(0, 0, 0)',
  barSelectedColor: 'rgb(42, 99, 168)',
  barBg: 'rgb(208, 208, 208)',

  // Typography
  fontBase: 'Arial, Verdana, sans-serif',
  fontCode: 'monospace',
  fontSize: '100%',

  brandTitle: 'Gemeente Haarlem',
  brandUrl: 'https://www.haarlem.nl',
  brandImage: 'foot_logo_haarlem_2018.png',
});
