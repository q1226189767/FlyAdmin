import { SystemSettingType } from './interface';

export const defaultSetting = {
  primaryColor: 'rgb(24,144,255)',
  filterType: 'light',
  showFormType: 'modal',
  showKeepAliveTab: true,
  title: 'FlyAdmin',
  headerHeight: 80,
  slideWidth: 240,
  collapsedSlideWidth: 112,
  mobileMargin: 16,
  showWatermark: false,
  watermarkPos: 'content',
  languages: [
    {
      key: 'zh',
      name: '中文',
    },
    {
      key: 'en',
      name: 'English',
    },
  ],
  defaultLang: 'zh',
} as SystemSettingType;
