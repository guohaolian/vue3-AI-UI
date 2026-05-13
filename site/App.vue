<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header-inner">
          <div class="logo">
            <span class="icon">✨</span>
            <span class="text">Vue AI UI</span>
            <span class="version">v1.0.0</span>
          </div>
          <nav>
            <a href="#" class="active">组件</a>
          </nav>
          <button @click="toggleTheme" class="theme-btn">
            {{ theme === 'light' ? '🌙' : '☀️' }}
          </button>
        </div>
      </div>
    </header>
    
    <div class="content">
      <div class="container">
        <aside class="sidebar">
          <div class="group">
            <p class="group-title">基础组件</p>
            <ul>
              <li :class="{ active: current === 'button' }" @click="current = 'button'">Button 按钮</li>
              <li :class="{ active: current === 'tree' }" @click="current = 'tree'">Tree 树形控件</li>
              <li :class="{ active: current === 'datepicker' }" @click="current = 'datepicker'">DatePicker 日期选择器</li>
              <li :class="{ active: current === 'pageheader' }" @click="current = 'pageheader'">PageHeader 页头</li>
            </ul>
          </div>
          <div class="group">
            <p class="group-title">AI 组件</p>
            <ul>
              <li :class="{ active: current === 'aichat' }" @click="current = 'aichat'">AI Chat 智能对话</li>
              <li :class="{ active: current === 'skeleton' }" @click="current = 'skeleton'">Skeleton 骨架屏</li>
              <li :class="{ active: current === 'typingbubble' }" @click="current = 'typingbubble'">TypingBubble 打字气泡</li>
              <li :class="{ active: current === 'thinkprocess' }" @click="current = 'thinkprocess'">ThinkProcess 思考过程</li>
              <li :class="{ active: current === 'attachments' }" @click="current = 'attachments'">Attachments 附件输入</li>
              <li :class="{ active: current === 'suggestion' }" @click="current = 'suggestion'">Suggestion 快捷指令</li>
              <li :class="{ active: current === 'filecard' }" @click="current = 'filecard'">FileCard 文件卡片</li>
              <li :class="{ active: current === 'codehighlighter' }" @click="current = 'codehighlighter'">CodeHighlighter 代码高亮</li>
            </ul>
          </div>
          <div class="group">
            <p class="group-title">高级组件</p>
            <ul>
              <li :class="{ active: current === 'virtuallist' }" @click="current = 'virtuallist'">Virtual List 虚拟列表</li>
            </ul>
          </div>
        </aside>
        
        <main class="main">
          <component :is="currentDoc" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDoc from './components/button.vue'
import TreeDoc from './components/tree.vue'
import DatePickerDoc from './components/datepicker.vue'
import PageHeaderDoc from './components/pageheader.vue'
import AiChatDoc from './components/aichat.vue'
import VirtualListDoc from './components/virtuallist.vue'
import SkeletonDoc from './components/skeleton.vue'
import TypingBubbleDoc from './components/typingbubble.vue'
import ThinkProcessDoc from './components/thinkprocess.vue'
import AttachmentsDoc from './components/attachments.vue'
import SuggestionDoc from './components/suggestion.vue'
import FileCardDoc from './components/filecard.vue'
import CodeHighlighterDoc from './components/codehighlighter.vue'

const docs = {
  button: ButtonDoc,
  tree: TreeDoc,
  datepicker: DatePickerDoc,
  pageheader: PageHeaderDoc,
  aichat: AiChatDoc,
  virtuallist: VirtualListDoc,
  skeleton: SkeletonDoc,
  typingbubble: TypingBubbleDoc,
  thinkprocess: ThinkProcessDoc,
  attachments: AttachmentsDoc,
  suggestion: SuggestionDoc,
  filecard: FileCardDoc,
  codehighlighter: CodeHighlighterDoc
}

export default {
  data() {
    return {
      theme: 'light',
      current: 'button'
    }
  },
  computed: {
    currentDoc() {
      return docs[this.current]
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', this.theme)
    }
  }
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  color: var(--vai-text-color-primary);
  background: var(--vai-fill-color-blank);
}
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 60px;
  background: var(--vai-fill-color-blank);
  border-bottom: 1px solid var(--vai-border-color-lighter);
}
.container { max-width: 1440px; margin: 0 auto; padding: 0 24px; }
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
}
.icon { font-size: 28px; }
.text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.version {
  padding: 2px 8px;
  font-size: 12px;
  background: var(--vai-fill-color);
  border-radius: 12px;
  color: var(--vai-text-color-secondary);
}
nav { display: flex; gap: 32px; }
nav a {
  font-size: 14px;
  color: var(--vai-text-color-regular);
  text-decoration: none;
}
nav a:hover, nav a.active { color: var(--vai-color-primary); }
.theme-btn {
  padding: 6px 12px;
  font-size: 18px;
  background: var(--vai-fill-color);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.content { padding: 24px 0; min-height: calc(100vh - 60px); }
.sidebar {
  position: sticky;
  top: 84px;
  width: 240px;
  height: calc(100vh - 108px);
  overflow-y: auto;
  float: left;
}
.group { margin-bottom: 24px; }
.group-title {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--vai-text-color-secondary);
  text-transform: uppercase;
}
.group ul { list-style: none; }
.group li {
  padding: 8px 16px;
  font-size: 14px;
  color: var(--vai-text-color-regular);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
}
.group li:hover {
  color: var(--vai-color-primary);
  background: var(--vai-fill-color-light);
}
.group li.active {
  color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-9);
  font-weight: 600;
}
.main { margin-left: 264px; padding: 0 24px; }
</style>
