<template>
  <div class="doc">
    <h1>Button 按钮</h1>
    <p class="desc">常用的操作按钮</p>

    <h2>引入</h2>
    <div class="note">
      本项目文档站点在 <span class="inline-code">site/main.js</span> 中通过 <span class="inline-code">app.use(VaiUI)</span>
      全局注册所有组件。
      如果你只想注册单个组件，也可以从组件入口按需引入并注册（见下方代码）。
    </div>
    <vai-code-highlighter :code="installCode" language="javascript" />

    <h2>基础用法</h2>
    <div class="demo">
      <vai-button>默认按钮</vai-button>
      <vai-button type="primary">主要按钮</vai-button>
      <vai-button type="success">成功按钮</vai-button>
      <vai-button type="warning">警告按钮</vai-button>
      <vai-button type="danger">危险按钮</vai-button>
      <vai-button type="info">信息按钮</vai-button>
    </div>

    <h2>禁用和加载</h2>
    <div class="demo">
      <vai-button disabled>禁用按钮</vai-button>
      <vai-button loading>加载中</vai-button>
      <vai-button type="primary" loading>加载中</vai-button>
    </div>

    <h2>不同尺寸</h2>
    <div class="demo" style="align-items: center">
      <vai-button size="large" type="primary">大型按钮</vai-button>
      <vai-button type="primary">默认按钮</vai-button>
      <vai-button size="small" type="primary">小型按钮</vai-button>
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
          <td>type</td>
          <td>按钮类型</td>
          <td>string</td>
          <td>default / primary / success / warning / danger / info</td>
          <td>default</td>
        </tr>
        <tr>
          <td>size</td>
          <td>按钮尺寸</td>
          <td>string</td>
          <td>large / default / small</td>
          <td>default</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用（禁用时不会触发 click）</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否加载中（加载时不会触发 click）</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>false</td>
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
          <td>click</td>
          <td>点击按钮（disabled/loading 时不触发）</td>
          <td>(event: MouseEvent)</td>
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
          <td>default</td>
          <td>按钮内容</td>
          <td class="muted">—</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">基础类</div>
      <div class="v"><span class="inline-code">.vai-btn</span></div>
      <div class="k">类型类</div>
      <div class="v"><span class="inline-code">.vai-btn-primary</span> / <span
          class="inline-code">.vai-btn-success</span> / ...</div>
      <div class="k">尺寸类</div>
      <div class="v"><span class="inline-code">.vai-btn-large</span> / <span class="inline-code">.vai-btn-small</span>
      </div>
      <div class="k">状态类</div>
      <div class="v"><span class="inline-code">.is-disabled</span> / <span class="inline-code">.is-loading</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      installCode: `// 全局注册（站点同款）\nimport { createApp } from 'vue'\nimport App from './App.vue'\nimport VaiUI from '../packages/components'\nimport '../packages/theme/index.css'\n\ncreateApp(App).use(VaiUI).mount('#app')\n\n// 按需注册（在本仓库中）\n// import { VaiButton } from '../packages/components'\n// app.component(VaiButton.name, VaiButton)`,
      usageCode: `<vai-button>默认按钮</vai-button>\n<vai-button type="primary">主要按钮</vai-button>\n<vai-button size="large" type="success">大号成功</vai-button>\n<vai-button disabled>禁用按钮</vai-button>\n<vai-button loading>加载中</vai-button>\n\n<!-- 监听点击 -->\n<vai-button type="primary" @click="onClick">提交</vai-button>`
    }
  },
  methods: {
    onClick() {
      // 示例：这里可以提交表单等
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
