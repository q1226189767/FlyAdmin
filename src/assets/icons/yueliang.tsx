import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const SVGYueliang = () => (
  <svg
    style={{
      width: '1em',
      height: '1em',
      fill: 'currentcolor',
      overflow: 'hidden',
    }}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M572.4 229.9c8.8-8.8 21.9-11.7 33.6-7.5 115.1 41.7 197.5 152 197.5 281.6 0 165.4-134.1 299.5-299.5 299.5-129.6 0-239.9-82.3-281.6-197.5-4.2-11.7-1.3-24.8 7.5-33.6s21.9-11.7 33.6-7.5c25 9 51.9 14 80.1 14 129.9 0 235.3-105.3 235.3-235.3 0-28.2-4.9-55.2-14-80.1-4.2-11.7-1.3-24.8 7.5-33.6z m69.1 83.2c1 10 1.5 20.2 1.5 30.5C643 509 508.9 643 343.6 643c-10.3 0-20.5-0.5-30.5-1.5 42.7 59.3 112.4 97.8 191 97.8C634 739.3 739.3 634 739.3 504c0-78.5-38.5-148.2-97.8-190.9z"></path>
  </svg>
);

export const IconYueliang = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SVGYueliang} {...props} />
);
