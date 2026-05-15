<template>
  <div class="doc">
    <h1>Tree 树形控件</h1>
    <p class="desc">用清晰的层级结构展示信息</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiTree</span>，标签：<span class="inline-code">&lt;vai-tree /&gt;</span>。
      数据项建议包含 <span class="inline-code">id</span>（用于 key）、<span class="inline-code">label</span>（显示文本）和可选的 <span
        class="inline-code">children</span>（子节点数组）。
    </div>

    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-tree :data="data" @node-click="handleNodeClick" />
    </div>

    <h2>带复选框</h2>
    <div class="demo" style="display: block">
      <vai-tree :data="data" show-checkbox />
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
          <td>data</td>
          <td>树数据</td>
          <td>Array</td>
          <td class="muted">—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>showCheckbox</td>
          <td>是否显示复选框（仅展示，不含选择联动/输出）</td>
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
          <td>node-click</td>
          <td>点击节点内容区域触发</td>
          <td>(node: { id, label, children? })</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-tree</span></div>
      <div class="k">节点</div>
      <div class="v"><span class="inline-code">.tree-node</span> / <span class="inline-code">.node-content</span> /
        <span class="inline-code">.children</span>
      </div>
      <div class="k">展开按钮</div>
      <div class="v"><span class="inline-code">.expand</span></div>
      <div class="k">文本</div>
      <div class="v"><span class="inline-code">.label</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<template>\n  <vai-tree :data="data" @node-click="handleNodeClick" />\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      data: [\n        { id: 1, label: '一级节点 1', children: [\n          { id: 11, label: '二级节点 1-1' },\n          { id: 12, label: '二级节点 1-2' }\n        ] }\n      ]\n    }\n  },\n  methods: {\n    handleNodeClick(node) {\n      console.log('node-click:', node)\n    }\n  }\n}\n<\/script>`,
      data: [
        {
          id: 1, label: '一级节点 1', children: [
            { id: 11, label: '二级节点 1-1' },
            { id: 12, label: '二级节点 1-2' }
          ]
        },
        {
          id: 2, label: '一级节点 2', children: [
            { id: 21, label: '二级节点 2-1' },
            {
              id: 22, label: '二级节点 2-2', children: [
                { id: 221, label: '三级节点 2-2-1' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleNodeClick(node) {
      alert(`点击节点：${node.label}`)
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
