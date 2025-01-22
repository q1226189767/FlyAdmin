import { Space, Col, Row, Tag, Divider } from 'antd';
import { AntdIcon } from '@/assets/icons/antd';
import { ElementIcon } from '@/assets/icons/element';
import { NestIcon } from '@/assets/icons/nest';
import { ReactIcon } from '@/assets/icons/react';
import { TailwindIcon } from '@/assets/icons/tailwindcss';
import { VueIcon } from '@/assets/icons/vue';

const CurrentPage = () => {
  return (
    <div className="w-full h-full">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row gutter={32} className="flex flex-col">
          <Col span={4}>
            <h3>Vue</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">渐进式</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">性能出色</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">前端框架</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            渐进式JavaScript框架,易学易用，性能出色，适用场景丰富的 Web
            前端框架,
            丰富的、可渐进式集成的生态系统，可以根据应用规模在库和框架间切换自如,经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化,基于标准
            HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档。
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <VueIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Evan You
              </a>
              <span className="tracking-wide"> 发布在</span>
              <a href="https://vuejs.org/"> https://vuejs.org</a>
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
            <h3>Element Plus</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">基于 Vue 3</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">设计师</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">组件库</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">开发者</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            一致、反馈、效率、可控。与现实生活一致：
            与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念，通过界面样式和交互动效让用户可以清晰的感知自己的操作，语言表达清晰且表意明确，让用户快速理解进而作出决策，根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <ElementIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Element Plus
              </a>
              <span className="tracking-wide"> 发布在</span>
              <a href="https://element-plus.gitee.io/zh-CN/component/button.html">
                {' '}
                https://element-plus.gitee.io/zh-CN/component/button.html
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
            <h3>React</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">渐进式</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">构建用户界面</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">前端框架</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            用于构建用户界面的 JavaScript 库,以声明式编写 UI,
            可以让你的代码更加可靠,且方便调试。构建管理自身状态的封装组件，然后对其组合以构成复杂的
            UI。一次学习,跨平台编写,无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入
            React 来开发新功能。
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <ReactIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Jord Walke
              </a>
              <span className="tracking-wide"> 发布在</span>
              <a href="https://reactjs.org/">https://reactjs.org/</a>
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
            <h3>Ant Design</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">组件丰富</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">选用自如</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">开发者</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">组件库</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <AntdIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Ant Design Team
              </a>
              <span className="tracking-wide"> 发布在</span>
              <a href="https://ant.design/components/overview-cn/">
                https://ant.design/components/overview-cn//
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
            <h3>Tailwindcss</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">css框架</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">原子化</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">快速</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">灵活</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            只需书写 HTML 代码，无需书写 CSS,即可快速构建美观的网站
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <TailwindIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Tailwindcss Team
              </a>
              <span className="tracking-wide"> 发布在</span>
              <a href="https://www.tailwindcss.cn//">
                {' '}
                https://www.tailwindcss.cn/
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
          <Col span={8}>
            <h3>Nest</h3>
            <Space className="mt-2">
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">高效</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">可扩展</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">渐进式</span>
              </Tag>
              <Tag color="#7c4dff4c">
                <span className=" text-[#7c4dff]">强大</span>
              </Tag>
            </Space>
          </Col>
          <Col className="mt-3">
            一个渐进式 Node.js
            框架，用于构建高效、可靠和可扩展的服务器端应用程序。
          </Col>
          <Col className="mt-3 flex items-center ">
            <p>
              <NestIcon />
              <a href="javascript:;" className="text-[#7c4dff]  ml-2 ">
                Nestjs Team
              </a>
              <span className="tracking-wide"> 发布在</span>
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
export default CurrentPage;
