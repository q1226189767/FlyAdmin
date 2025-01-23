import { t } from '@/utils/i18n';
import { Space, Row, Col, Tag, Divider } from 'antd';
import { MysqlIcon } from '@/assets/icons/mysql';
import { NginxIcon } from '@/assets/icons/nginx';
import { WebpackIcon } from '@/assets/icons/webpack';
import { NestIcon } from '@/assets/icons/nest';

const MasterPage = () => {
  return (
    <div className="w-full h-full">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row gutter={32} className="flex flex-col">
          <Col span={4}>
            <h3>Webpack</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('rvjuABaJ' /* 打包工具 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('tzlYFHHQ' /* 缓存 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('mhoLliYS' /* 插件众多 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('aDKEBuaP' /* 生态丰富 */)}
                </span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            {/* webpack 是现代 JavaScript 应用程序的静态模块打包器。当 webpack
            处理您的应用程序时，它会从一个或多个入口点内部构建依赖关系图，然后将项目所需的每个模块组合到一个或多个捆绑包中，这些捆绑包是用于提供内容的静态资产。 */}
            {t('xnJajUgO')}
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <WebpackIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Tobias Koppers
              </a>
              <span className="tracking-wide">
                {' '}
                {t('KpUIwiVY' /* 发布在 */)}
              </span>
              <a href="https://webpack.js.org/"> https://webpack.js.org/</a>
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
            <h3>Nginx</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('IQIPIQOq' /* 反向代理 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('poahHLPS' /* 负载均衡 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('NRVgLmeU' /* 运维 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('yuJfqYNc' /* 服务器 */)}
                </span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            {/* nginx [engine x] 是一个 HTTP 和反向代理服务器， 邮件代理服务器，
            和通用 TCP/UDP 代理服务器 */}
            {t('BvaeKvmN')}
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <NginxIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Igor Sysoev{' '}
              </a>
              <span className="tracking-wide">
                {' '}
                {t('KpUIwiVY' /* 发布在 */)}
              </span>
              <a href="https://nginx.org/"> https://nginx.org/</a>
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
            <h3>Mysql</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('IJXILBKx' /* 数据库 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('yDWkPmmO' /* 引擎 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('ILDEBsFn' /* 关系 */)}
                </span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            {/* MySQL数据库服务是一个完全托管的数据库服务,可使用世界上最受欢迎的开源数据库来部署云原生应用程序。
            它是百分百由MySQL原厂开发，管理和提供支持。 */}
            {t('vWUkZQQJ')}
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <MysqlIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                MySQL AB{' '}
              </a>
              <span className="tracking-wide">
                {' '}
                {t('KpUIwiVY' /* 发布在 */)}
              </span>
              <a href="https://dev.mysql.com/"> https://dev.mysql.com/</a>
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
          <Col span={8}>
            <h3>Nest</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('ZQtuHnrw' /* 高效 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('yhKsQeeD' /* 可扩展 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('ewKcemsn' /* 渐进式 */)}
                </span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">
                  {t('jgiOpyZk' /* 强大 */)}
                </span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            {/* 一个渐进式 Node.js
            框架，用于构建高效、可靠和可扩展的服务器端应用程序。 */}
            {t('cinZftEU')}
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <NestIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Nestjs Team
              </a>
              <span className="tracking-wide">
                {' '}
                {t('KpUIwiVY' /* 发布在 */)}
              </span>
              <a href="https://docs.nestjs.com/">https://docs.nestjs.com/</a>
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

export default MasterPage;
