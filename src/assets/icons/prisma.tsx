import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const PrismaSvg = () => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '1em',
      height: '1em',
      fill: 'currentcolor',
      overflow: 'hidden',
    }}
  >
    <path
      d="M802.474667 762.197333L409.173333 875.52c-12.032 3.456-23.552-6.656-21.034666-18.474667L528.64 201.429333c2.645333-12.245333 20.053333-14.208 25.514667-2.816l260.181333 538.24a18.176 18.176 0 0 1-11.861333 25.301334z m67.413333-26.709333L568.704 112.213333a48.384 48.384 0 0 0-41.173333-26.88 48.170667 48.170667 0 0 0-43.989334 22.272L156.8 623.189333c-10.154667 16.042667-9.941333 35.84 0.554667 51.754667l159.701333 241.024c9.514667 14.378667 26.026667 22.698667 43.136 22.698667 4.864 0 9.770667-0.682667 14.549333-2.048l463.573334-133.546667c14.208-4.138667 25.813333-13.909333 31.914666-26.88 6.058667-12.970667 5.973333-27.818667-0.298666-40.746667z"
      fill="#00BFA5"
      p-id="28089"
    ></path>
  </svg>
);

export const PrismaIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PrismaSvg} {...props} />
);
