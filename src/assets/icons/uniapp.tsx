import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const UniappSvg = () => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="21151"
    style={{
      width: '1em',
      height: '1em',
      fill: 'currentcolor',
      overflow: 'hidden',
    }}
  >
    <path
      d="M384 298.016v342.016q0 36 24.992 60.992t60.992 24.992h84q36 0 60.992-24.992t24.992-60.992V298.016h-86.016v342.016h-84V298.016h-86.016z m128-212q84 0 163.008 32t139.008 92 92 139.008 32 163.008-32 163.008-92 139.008-139.008 92-163.008 32-163.008-32-139.008-92-92-139.008-32-163.008 32-163.008 92-139.008 139.008-92 163.008-32z"
      p-id="21152"
      fill="#2b9939"
    ></path>
  </svg>
);

export const UniappIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UniappSvg} {...props} />
);
