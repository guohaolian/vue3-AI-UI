<template>
  <div class="doc">
    <h1>PageHeader 页头</h1>
    <p class="desc">页面的顶部导航</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiPageHeader</span>，标签：<span class="inline-code">&lt;vai-page-header /&gt;</span>。
      点击左侧区域会触发 <span class="inline-code">back</span> 事件。
    </div>

    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-page-header title="详情页面" @back="handleBack">
        <template #content>这是内容描述</template>
        <template #extra>
          <vai-button type="primary">操作</vai-button>
        </template>
      </vai-page-header>
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
          <td>标题文本（未提供 title 插槽时生效）</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
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
          <td>back</td>
          <td>点击返回区域触发</td>
          <td class="muted">—</td>
        </tr>
      </tbody>
    </table>

    <h3>Slots</h3>
    <table class="table">
      <thead>
        <tr>
          <th>插槽名</th>
          <th>说明</th>
          <th>作用域参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>自定义标题区域（会替代 title prop 展示）</td>
          <td class="muted">—</td>
        </tr>
        <tr>
          <td>content</td>
          <td>内容描述区</td>
          <td class="muted">—</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>右侧操作区</td>
          <td class="muted">—</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-pageheader</span></div>
      <div class="k">左侧</div>
      <div class="v"><span class="inline-code">.left</span> / <span class="inline-code">.back</span> / <span
          class="inline-code">.title</span></div>
      <div class="k">中间</div>
      <div class="v"><span class="inline-code">.content</span></div>
      <div class="k">右侧</div>
      <div class="v"><span class="inline-code">.extra</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<vai-page-header title="详情页面" @back="handleBack">\n  <template #content>这是内容描述</template>\n  <template #extra>\n    <vai-button type="primary">操作</vai-button>\n  </template>\n</vai-page-header>\n\n<script>\nexport default {\n  methods: {\n    handleBack() {\n      console.log('back')\n    }\n  }\n}\n<\/script>`
    }
  },
  methods: {
    handleBack() {
      alert('返回上一页')
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
