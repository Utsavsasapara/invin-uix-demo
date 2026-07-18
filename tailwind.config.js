import invinPreset from 'invin-uix/preset';

export default {
  presets: [invinPreset],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/invin-uix/dist/**/*.js',
    '../../Invin-ui/invin-uix/dist/**/*.js',
  ],
};
