import { antdUtils } from '@/utils/antd';
import { t } from '@/utils/i18n';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    antdUtils.message?.error(t('IrkXPQuD' /* 文件类型错误 */));
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    antdUtils.message?.error(t('ghBOBkBd' /* 文件大小不能超过2M */));
  }

  if (!(isJpgOrPng && isLt2M)) {
    return Upload.LIST_IGNORE;
  }

  return true;
};

interface PropsType {
  value?: UploadFile[];
  onChange?: (value: UploadFile[]) => void;
}

function Avatar({ value, onChange }: PropsType) {
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (onChange) {
      onChange(info.fileList);
    }
  };

  const onPreview = async (file: UploadFile) => {
    const src = file.url || file?.response?.filePath;
    if (src) {
      const imgWindow = window.open(src);

      if (imgWindow) {
        const image = new Image();
        image.src = src;
        imgWindow.document.write(image.outerHTML);
      } else {
        window.location.href = src;
      }
    }
  };

  return (
    <ImgCrop showGrid rotationSlider showReset>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        action="/api/file/upload"
        onChange={handleChange}
        fileList={value}
        beforeUpload={beforeUpload}
        onPreview={onPreview}
      >
        {(value?.length || 0) < 1 && <PlusOutlined />}
      </Upload>
    </ImgCrop>
  );
}

export default Avatar;
