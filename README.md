# FlyAdmin

FlyAdmin 是一个现代化的后台管理系统模板，基于 React 18、TypeScript、Vite 构建，提供了丰富的功能组件和优秀的开发体验。

## 🚀 特性

- 💡 **最新技术栈**：使用 React 18、TypeScript、Vite 4 等最新技术开发
- 📦 **组件封装**：提供大量开箱即用的高质量组件
- 🎨 **主题定制**：支持深色/浅色主题切换
- 🌍 **国际化**：内置中英文国际化解决方案
- 📊 **图表**：集成多种数据可视化图表
- 🔐 **权限**：完善的权限管理解决方案
- 🎯 **最佳实践**：良好的工程实践助力团队开发

## 🛠️ 技术栈

- 核心框架：React 18
- 构建工具：Vite 4
- 开发语言：TypeScript
- UI 框架：Ant Design
- 状态管理：Zustand
- 样式方案：Tailwind CSS
- 图表库：ECharts
- 代码规范：ESLint + Prettier
- 提交规范：Commitlint

## 预览地址

您可以通过以下链接预览项目：[项目预览](http://123.56.101.254:52000/)

## 📦 安装使用

```bash
# 克隆项目
git clone https://github.com/q1226189767/FlyAdmin.git

# 进入项目目录
cd flyadmin

# 安装依赖
pnpm install

# 启动项目
pnpm dev

# 构建项目
pnpm build
```

## 🌍 浏览器支持

推荐使用以下主流浏览器的最新版本：

- Chrome
- Firefox
- Safari
- Edge

## 📋 项目结构

```bash
├── src/
│   ├── layouts/            # 布局文件
│   │   ├── layout1/       # 布局方案1
│   │   └── layout2/       # 布局方案2
│   ├── pages/             # 页面文件
│   │   └── dashboard/     # 仪表盘页面
│   ├── components/        # 公共组件
│   ├── hooks/             # 自定义 Hooks
│   ├── services/          # API 服务
│   ├── utils/             # 工具函数
│   └── main.tsx          # 入口文件
├── public/                # 静态资源
├── .env                   # 环境变量
├── tailwind.config.js    # Tailwind 配置
└── package.json          # 项目配置
```

## 🔨 开发指南

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 开发规范

- 遵循 ESLint 规则进行代码检查
- 使用 Prettier 进行代码格式化
- 提交代码时需要符合 Commitlint 规范

### 国际化支持

我们推荐使用 VSCode 插件 [easy-i18n-helper](https://marketplace.visualstudio.com/items?itemName=easy-i18n-helper) 来简化国际化流程。该插件支持自动获取文件代码中的中文，自动翻译成各种语言，并自动保存到本地。

### 提交规范

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档变更
- `style`: 代码格式调整
- `refactor`: 重构代码
- `perf`: 性能优化
- `test`: 添加或修改测试
- `chore`: 构建过程或辅助工具的变动

## 📝 开源协议

[MIT License](LICENSE)

## 特别鸣谢

感谢以下人员对本项目的贡献：

- dbfu
- 快手檬
