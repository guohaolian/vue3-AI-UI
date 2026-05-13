# 🚀 Vue3 AI UI - AI 专属组件库

类似 Ant Design X 的 AI 驱动企业级组件库

## ✨ 特性

### 📦 基础组件（4个）
- **Button** - 按钮组件
- **Tree** - 树形控件
- **DatePicker** - 日期选择器
- **PageHeader** - 页头组件

### 🤖 AI 组件（8个）⭐
- **AI Chat** - AI 对话组件
- **Skeleton** - 骨架屏加载
- **TypingBubble** - 打字气泡动画
- **ThinkProcess** - AI 思考过程展示
- **Attachments** - 文件附件输入
- **Suggestion** - 快捷指令建议
- **FileCard** - 文件卡片展示
- **CodeHighlighter** - 代码高亮显示

### ⚡ 高级组件（1个）
- **Virtual List** - 虚拟列表（支持百万级数据）

**总计：13 个核心组件**

## 🚀 快速开始

### 1. 安装依赖

```bash
cd site
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

浏览器将自动打开 http://localhost:3000

## 📂 项目结构

```
vue3-ai-ui-complete/
├── packages/
│   ├── components/          # 13 个组件
│   │   ├── button/         # 基础
│   │   ├── tree/
│   │   ├── datepicker/
│   │   ├── pageheader/
│   │   ├── aichat/         # AI 组件
│   │   ├── skeleton/
│   │   ├── typingbubble/
│   │   ├── thinkprocess/
│   │   ├── attachments/
│   │   ├── suggestion/
│   │   ├── filecard/
│   │   ├── codehighlighter/
│   │   └── virtuallist/    # 高级
│   └── theme/              # 主题
├── site/                    # 文档站点
│   ├── components/         # 13 个文档页面
│   ├── App.vue
│   ├── main.js
│   ├── index.html
│   └── package.json
└── README.md
```

## 🎯 核心亮点

### 1. AI 专属组件库
参考 Ant Design X 设计理念，专为 AI 应用打造

### 2. 完整的 AI 交互组件
- **Skeleton** - 内容加载占位
- **TypingBubble** - AI 思考动画
- **ThinkProcess** - 思维链展示
- **Suggestion** - 智能建议
- **FileCard** - 文件管理
- **CodeHighlighter** - 代码展示

### 3. 企业级组件
- 虚拟列表支持百万级数据
- 完整的主题系统
- 响应式设计

## 📖 组件示例

### Skeleton 骨架屏

```vue
<vai-skeleton avatar :rows="4" />
```

### TypingBubble 打字气泡

```vue
<vai-typing-bubble text="AI 正在思考..." />
```

### ThinkProcess 思考过程

```vue
<vai-think-process :steps="steps" default-expanded />
```

### Attachments 附件输入

```vue
<vai-attachments v-model="files" :max-count="5" />
```

### Suggestion 快捷指令

```vue
<vai-suggestion :suggestions="suggestions" @select="handleSelect" />
```

### FileCard 文件卡片

```vue
<vai-file-card
  name="document.pdf"
  size="2.5 MB"
  :tags="['重要']"
  show-progress
  :progress="68"
/>
```

### CodeHighlighter 代码高亮

```vue
<vai-code-highlighter :code="code" language="javascript" />
```

## 🎨 设计理念

### 类似 Ant Design X
- 专注 AI 应用场景
- 完整的交互组件
- 统一的设计语言
- 开箱即用

### 组件分类
1. **基础组件** - 通用 UI 组件
2. **AI 组件** - AI 交互专用组件
3. **高级组件** - 性能优化组件

## 📊 组件对比

| 功能 | 本组件库 | Ant Design X |
|------|---------|--------------|
| AI Chat | ✅ | ✅ |
| Skeleton | ✅ | ✅ |
| TypingBubble | ✅ | ✅ |
| ThinkProcess | ✅ | ✅ |
| Attachments | ✅ | ✅ |
| Suggestion | ✅ | ✅ |
| FileCard | ✅ | ✅ |
| CodeHighlighter | ✅ | ✅ |
| Virtual List | ✅ | ❌ |

## 🎯 使用场景

### 1. AI 聊天应用
- AI Chat + TypingBubble + Skeleton

### 2. 智能问答系统
- Suggestion + ThinkProcess + CodeHighlighter

### 3. 文档处理应用
- Attachments + FileCard + Virtual List

### 4. 代码生成工具
- CodeHighlighter + ThinkProcess + AI Chat

## 📝 开发计划

- [x] 基础组件（4个）
- [x] AI 组件（8个）
- [x] 虚拟列表
- [ ] 更多 AI 组件
- [ ] TypeScript 支持
- [ ] 单元测试
- [ ] Storybook 文档

## 🔧 技术栈

- Vue 3.4.21
- Vite 5.2.0
- CSS Variables
- ES Modules

## 📄 License

MIT

---

⭐ 如果对你有帮助，请给个 Star！
