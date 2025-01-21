import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const NginxSvg = () => (
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
      d="M512 0L68.48 256v512l443.52 256 443.52-256V256z m256 707.84c0 30.08-27.552 55.04-65.248 55.04-26.912 0-57.632-10.88-76.832-34.56l-256-304.672v284.16c0 30.752-24.32 55.04-54.368 55.04h-3.232c-30.752 0-55.04-25.6-55.04-55.04V316.16c0-30.08 26.88-55.04 64-55.04 27.552 0 58.88 10.88 78.08 34.56L654.08 600.352V316.16c0-30.752 25.6-55.04 55.04-55.04h3.2c30.72 0 55.04 25.6 55.04 55.04v391.68z"
      fill="#269539"
      p-id="38546"
    ></path>
  </svg>
);
export const NginxIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NginxSvg} {...props} />
);
