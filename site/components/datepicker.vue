<template>
  <div class="doc">
    <h1>DatePicker 日期选择器</h1>
    <p class="desc">用于选择或输入日期</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiDatePicker</span>，标签：<span class="inline-code">&lt;vai-date-picker /&gt;</span>。
      支持 <span class="inline-code">v-model</span>（等价于监听 <span class="inline-code">update:modelValue</span>）。
      <br />
      注意：当前实现仅在用户选择日期时向外部发出更新；外部直接修改 <span class="inline-code">modelValue</span> 不会回写到面板选中态（你可以在外层通过重建组件或自行扩展来实现双向同步）。
    </div>

    <h2>基础用法</h2>
    <div class="demo">
      <vai-date-picker v-model="date" @change="handleChange" />
      <p style="margin-top: 12px; width: 100%">选择的日期：{{ date }}</p>
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
          <td>modelValue</td>
          <td>绑定值（输出格式为 YYYY-MM-DD 字符串）</td>
          <td>string | Date</td>
          <td class="muted">—</td>
          <td class="muted">—</td>
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
          <td>update:modelValue</td>
          <td>选择日期后更新 v-model</td>
          <td>(value: string)</td>
        </tr>
        <tr>
          <td>change</td>
          <td>选择日期后触发</td>
          <td>(value: string)</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-datepicker</span></div>
      <div class="k">输入框</div>
      <div class="v"><span class="inline-code">.input</span></div>
      <div class="k">面板</div>
      <div class="v"><span class="inline-code">.panel</span> / <span class="inline-code">.header</span> / <span
          class="inline-code">.weekdays</span> / <span class="inline-code">.days</span> / <span
          class="inline-code">.footer</span></div>
      <div class="k">日期单元</div>
      <div class="v"><span class="inline-code">.day</span>（包含 <span class="inline-code">.today</span> / <span
          class="inline-code">.selected</span> / <span class="inline-code">.other</span>）</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      usageCode: `<template>\n  <vai-date-picker v-model="date" @change="handleChange" />\n  <p>选择的日期：{{ date }}</p>\n</template>\n\n<script>\nexport default {\n  data() {\n    return { date: '' }\n  },\n  methods: {\n    handleChange(val) {\n      console.log('change:', val)\n    }\n  }\n}\n<\/script>`
    }
  },
  methods: {
    handleChange(val) {
      console.log('选择:', val)
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
