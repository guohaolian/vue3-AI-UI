<template>
  <div class="doc">
    <h1>AI Chat 智能对话</h1>
    <p class="desc">基于流式 API 的智能对话组件</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiAiChat</span>，标签：<span class="inline-code">&lt;vai-ai-chat /&gt;</span>。
      当前版本为“演示实现”：内部使用模拟数据与简单 Markdown 渲染（<span class="inline-code">**加粗**</span> / <span
        class="inline-code">*斜体*</span> / <span class="inline-code">`行内代码`</span> / 换行）。
    </div>

    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-ai-chat title="AI 助手" />
    </div>

    <h2>功能特性</h2>
    <ul style="line-height: 2; color: var(--vai-text-color-regular); padding-left: 20px">
      <li>🚀 流式响应显示</li>
      <li>📝 Markdown 格式支持</li>
      <li>💾 对话历史管理</li>
      <li>⚡ 性能优化，60fps 渲染</li>
    </ul>

    <h2>示例代码</h2>
    <vai-code-highlighter :code="usageCode" language="html" />

    <h2>API</h2>
    <h3>Props</h3>
    <table class="table">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>AI 助手</td>
        </tr>
      </tbody>
    </table>

    <h3>Events</h3>
    <div class="note">当前版本不对外暴露消息发送/接收事件（仅内部演示）。如需对接真实流式接口，建议在组件外封装数据与事件，或在组件中新增 emits（此文档页不修改组件源码）。</div>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-aichat</span></div>
      <div class="k">结构</div>
      <div class="v"><span class="inline-code">.header</span> / <span class="inline-code">.messages</span> / <span
          class="inline-code">.footer</span></div>
      <div class="k">消息</div>
      <div class="v"><span class="inline-code">.msg</span> / <span class="inline-code">.msg-user</span> / <span
          class="inline-code">.msg-assistant</span> / <span class="inline-code">.bubble</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<vai-ai-chat title="AI 助手" />`
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
