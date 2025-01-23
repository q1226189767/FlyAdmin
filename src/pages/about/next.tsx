import { t } from '@/utils/i18n';
import { Space, Row, Col, Tag, Divider } from 'antd';
import { ElectronIcon } from '@/assets/icons/electron';
import { GolangIcon } from '@/assets/icons/golang';
const NextPage = () => {
  return (
    <div className="w-full h-full">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row gutter={32} className="flex flex-col">
          <Col span={4}>
            <h3>Electron</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('NjvbZkKu' /* 跨端 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('vsvlcuVV' /* 桌面端 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('ldqgEgav' /* 前端框架 */)}
                </span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            {/* Electron 是一个使用 JavaScript、HTML 和 CSS 构建桌面应用的框架。
            通过将 Chromium 和 Node.js 嵌入到其二进制文件中，Electron
            允许你维护一个 JavaScript 代码库并创建可在 Windows、macOS 和 Linux
            上运行的跨平台应用 — 无需原生开发经验。 */}
            {t('RcOiSabm')}
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <ElectronIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Github
              </a>
              <span className="tracking-wide">
                {' '}
                {t('KpUIwiVY' /* 发布在 */)}
              </span>
              <a href="https://www.electronjs.org/">
                {' '}
                https://www.electronjs.org/
              </a>
              <span className="ml-6 text-[#0000003f] dark:text-white">
                2025-01-22 10:00
              </span>
            </p>
          </Col>
          <Divider></Divider>
        </Row>
      </Space>

      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row gutter={32} className="flex flex-col">
          <Col span={4}>
            <h3>Golang</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('wptpOepN' /* 后端语言 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('LFOvxhey' /* 高并发 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('eHkDrlTL' /* 跨平台 */)}
                </span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            {/* Go 富有表现力、简洁、干净且高效。它的并发性
            通过各种机制，可以轻松编写充分利用多核的程序
            和联网的机器，而其新颖的类型系统使灵活和 模块化程序构建。Go
            可以快速编译为机器代码，但具有
            垃圾回收的便利性和运行时反射的强大功能。这是一个
            快速、静态类型、编译语言，感觉像是动态类型的， 解释性语言。 */}
            {t('oKWVILzH')}
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <GolangIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Google
              </a>
              <span className="tracking-wide">
                {' '}
                {t('KpUIwiVY' /* 发布在 */)}
              </span>
              <a href="https://golang.google.cn/doc/">
                {' '}
                https://golang.google.cn/doc/
              </a>
              <span className="ml-6 text-[#0000003f] dark:text-white">
                2025-01-22 10:00
              </span>
            </p>
          </Col>
          <Divider></Divider>
        </Row>
      </Space>
    </div>
  );
};

export default NextPage;
