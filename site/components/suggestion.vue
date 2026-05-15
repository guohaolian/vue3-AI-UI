<template>
  <div class="doc">
    <h1>Suggestion 快捷指令</h1>
    <p class="desc">提供常用的快捷操作建议</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiSuggestion</span>，标签：<span class="inline-code">&lt;vai-suggestion /&gt;</span>。
      建议项结构：<span class="inline-code">{ icon?, title, description? }</span>。
    </div>

    <h2>网格布局</h2>
    <div class="demo" style="display: block">
      <vai-suggestion title="你可以问我：" :suggestions="suggestions" @select="handleSelect" />
    </div>

    <h2>列表布局</h2>
    <div class="demo" style="display: block">
      <vai-suggestion :suggestions="suggestions" layout="list" @select="handleSelect" />
    </div>

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
          <td>标题（可选）</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
        </tr>
        <tr>
          <td>suggestions</td>
          <td>建议项列表</td>
          <td>Array</td>
          <td class="muted">—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>layout</td>
          <td>布局方式</td>
          <td>string</td>
          <td>grid / list</td>
          <td>grid</td>
        </tr>
        <tr>
          <td>showArrow</td>
          <td>是否显示右侧箭头</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>

    <h3>Events</h3>
    <table class="table">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>select</td>
          <td>点击某个建议项触发</td>
          <td>(item: { icon?, title, description? })</td>
        </tr>
      </tbody>
    </table>

    <h3>suggestions 数据结构</h3>
    <table class="table">
      <thead>
        <tr>
          <th>字段</th>
          <th>说明</th>
          <th>类型</th>
          <th>必填</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>icon</td>
          <td>图标（emoji 或文本）</td>
          <td>string</td>
          <td>否</td>
        </tr>
        <tr>
          <td>title</td>
          <td>主标题</td>
          <td>string</td>
          <td>是</td>
        </tr>
        <tr>
          <td>description</td>
          <td>描述</td>
          <td>string</td>
          <td>否</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-suggestion</span></div>
      <div class="k">列表</div>
      <div class="v"><span class="inline-code">.suggestion-list</span>（<span class="inline-code">.layout-grid</span> /
        <span class="inline-code">.layout-list</span>）</div>
      <div class="k">项</div>
      <div class="v"><span class="inline-code">.suggestion-item</span> / <span class="inline-code">.item-icon</span> /
        <span class="inline-code">.item-title</span> / <span class="inline-code">.item-description</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<vai-suggestion\n  title="你可以问我："\n  :suggestions="suggestions"\n  layout="grid"\n  :show-arrow="true"\n  @select="handleSelect"\n/>\n\n<script>\nexport default {\n  data() {\n    return {\n      suggestions: [\n        { icon: '💡', title: '写一篇文章', description: '关于 AI 技术的发展' },\n        { icon: '🎨', title: '设计方案', description: '产品界面设计建议' }\n      ]\n    }\n  },\n  methods: {\n    handleSelect(item) {\n      console.log('select:', item)\n    }\n  }\n}\n<\/script>`,
      suggestions: [
        { icon: '💡', title: '写一篇文章', description: '关于 AI 技术的发展' },
        { icon: '🎨', title: '设计方案', description: '产品界面设计建议' },
        { icon: '📊', title: '数据分析', description: '分析销售数据趋势' },
        { icon: '🔍', title: '问题解答', description: '解答技术相关问题' }
      ]
    }
  },
  methods: {
    handleSelect(item) {
      alert(`选择了：${item.title}`)
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
