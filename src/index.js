import featureImage from './feature.svg';
import iconImage from './icon.svg';

export default {
  hidden: true,
  name: 'Color Sensor',
  description: 'Perceive the colorful world in all its colors.',
  image: featureImage,
  icon: iconImage,
  tags: ['blocks', 'sensor', 'multipin'],

  // l10n
  translations: {
    en: {
      name: 'Color Sensor',
      description: 'Perceive the colorful world in all its colors.',
    },
    'zh-Hans': {
      name: '颜色识别',
      description: '感知世界的丰富多彩。',
    },
  },
};
