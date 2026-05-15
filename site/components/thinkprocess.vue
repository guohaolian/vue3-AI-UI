<template>
  <div class="doc">
    <h1>ThinkProcess 思考过程</h1>
    <p class="desc">展示 AI 的思考和推理步骤</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiThinkProcess</span>，标签：<span class="inline-code">&lt;vai-think-process
        /&gt;</span>。
      <br />
      <span class="inline-code">steps</span> 每项推荐结构：<span class="inline-code">{ title, description?, status?, time?
        }</span>。
      其中 <span class="inline-code">status</span> 支持 <span class="inline-code">active</span>（进行中）/ <span
        class="inline-code">done</span>（已完成）/ 其他（默认序号）。
    </div>

    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-think-process :steps="steps" />
    </div>

    <h2>展开状态</h2>
    <div class="demo" style="display: block">
      <vai-think-process :steps="steps" default-expanded />
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
          <td>标题</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>思考过程</td>
        </tr>
        <tr>
          <td>steps</td>
          <td>步骤列表</td>
          <td>Array</td>
          <td class="muted">—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>defaultExpanded</td>
          <td>默认是否展开</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>steps 数据结构</h3>
    <table class="table">
      <thead>
        <tr>
          <th>字段</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>步骤标题</td>
          <td>string</td>
          <td class="muted">—</td>
          <td class="muted">—</td>
        </tr>
        <tr>
          <td>description</td>
          <td>步骤描述</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
        </tr>
        <tr>
          <td>status</td>
          <td>状态</td>
          <td>string</td>
          <td>active / done / 其他</td>
          <td class="muted">—</td>
        </tr>
        <tr>
          <td>time</td>
          <td>耗时文本</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-think-process</span></div>
      <div class="k">头部</div>
      <div class="v"><span class="inline-code">.think-header</span> / <span class="inline-code">.think-title</span> /
        <span class="inline-code">.think-expand</span></div>
      <div class="k">步骤</div>
      <div class="v"><span class="inline-code">.think-step</span>（含 <span class="inline-code">.is-active</span> / <span
          class="inline-code">.is-done</span>）</div>
      <div class="k">内容</div>
      <div class="v"><span class="inline-code">.step-icon</span> / <span class="inline-code">.step-title</span> / <span
          class="inline-code">.step-description</span> / <span class="inline-code">.step-time</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<vai-think-process :steps="steps" />\n<vai-think-process :steps="steps" default-expanded />\n\n<script>\nexport default {\n  data() {\n    return {\n      steps: [\n        { title: '分析问题', description: '理解用户的问题意图', status: 'done', time: '0.5s' },\n        { title: '检索知识库', description: '查找相关信息和资料', status: 'done', time: '1.2s' },\n        { title: '生成回复', description: '组织语言并生成回答', status: 'active' }\n      ]\n    }\n  }\n}\n<\/script>`,
      steps: [
        { title: '分析问题', description: '理解用户的问题意图', status: 'done', time: '0.5s' },
        { title: '检索知识库', description: '查找相关信息和资料', status: 'done', time: '1.2s' },
        { title: '生成回复', description: '组织语言并生成回答', status: 'active' }
      ]
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
