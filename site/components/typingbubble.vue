<template>
  <div class="doc">
    <h1>TypingBubble 打字气泡</h1>
    <p class="desc">AI 回复时的打字动画效果</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiTypingBubble</span>，标签：<span class="inline-code">&lt;vai-typing-bubble
        /&gt;</span>。
      适用于“思考中/生成中”提示。
    </div>

    <h2>基础用法</h2>
    <div class="demo">
      <vai-typing-bubble />
    </div>

    <h2>自定义文本</h2>
    <div class="demo">
      <vai-typing-bubble text="正在生成回复..." />
    </div>

    <h2>不同类型</h2>
    <div class="demo">
      <vai-typing-bubble type="primary" text="AI 思考中" />
      <vai-typing-bubble type="secondary" text="处理中..." />
    </div>

    <h2>示例代码</h2>
    <vai-code-highlighter :code="$escapeHtml(usageCode)" language="html " :show-header="false" />

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
          <td>type</td>
          <td>气泡风格</td>
          <td>string</td>
          <td>primary / secondary</td>
          <td>primary</td>
        </tr>
        <tr>
          <td>text</td>
          <td>提示文本</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>AI 正在思考...</td>
        </tr>
        <tr>
          <td>animated</td>
          <td>是否浮动动画</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-typing-bubble</span></div>
      <div class="k">类型类</div>
      <div class="v"><span class="inline-code">.bubble-secondary</span></div>
      <div class="k">动画类</div>
      <div class="v"><span class="inline-code">.bubble-animated</span></div>
      <div class="k">内部元素</div>
      <div class="v"><span class="inline-code">.typing-dots</span> / <span class="inline-code">.dot</span> / <span
          class="inline-code">.typing-text</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<template>\n  <div>\n    <vai-typing-bubble />\n    <vai-typing-bubble text="正在生成回复..." />\n    <vai-typing-bubble type="secondary" text="处理中..." :animated="false" />\n  </div>\n</template>`
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
