import { Space, Row, Col, Tag, Divider } from 'antd';
import { MysqlIcon } from '@/assets/icons/mysql';
import { NginxIcon } from '@/assets/icons/nginx';
import { UniappIcon } from '@/assets/icons/uniapp';
import { WebpackIcon } from '@/assets/icons/webpack';

const MasterPage = () => {
  return (
    <div className="w-full h-full">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row gutter={32} className="flex flex-col">
          <Col span={4}>
            <h3>Uniapp</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">小程序</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">app</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">跨端</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">前端框架</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            是一个使用 Vue.js
            开发所有前端应用的框架,开发者编写一套代码,可发布到iOS、Android、Web(响应式)、以及各种小程序(微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝)、快应用等多个平台。
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <UniappIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                DCloud
              </a>
              <span className="tracking-wide"> 发布在</span>
              <a href="https://uniapp.dcloud.net.cn/">
                {' '}
                https://uniapp.dcloud.net.cn/
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
            <h3>Webpack</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">打包工具</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">缓存</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">插件众多</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">生态丰富</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            webpack 是现代 JavaScript 应用程序的静态模块打包器。当 webpack
            处理您的应用程序时，它会从一个或多个入口点内部构建依赖关系图，然后将项目所需的每个模块组合到一个或多个捆绑包中，这些捆绑包是用于提供内容的静态资产。
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <WebpackIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Tobias Koppers
              </a>
              <span className="tracking-wide"> 发布在</span>
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
                <span className=" text-[#7c4dff]">反向代理</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">负载均衡</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">运维</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">服务器</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            nginx [engine x] 是一个 HTTP 和反向代理服务器， 邮件代理服务器，
            和通用 TCP/UDP 代理服务器
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <NginxIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Igor Sysoev{' '}
              </a>
              <span className="tracking-wide"> 发布在</span>
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
                <span className=" text-[#7c4dff]">数据库</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">引擎</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">关系</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            MySQL数据库服务是一个完全托管的数据库服务,可使用世界上最受欢迎的开源数据库来部署云原生应用程序。
            它是百分百由MySQL原厂开发，管理和提供支持。
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <MysqlIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                MySQL AB{' '}
              </a>
              <span className="tracking-wide"> 发布在</span>
              <a href="https://dev.mysql.com/"> https://dev.mysql.com/</a>
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
