<template>
  <div class="doc">
    <h1>Virtual List 虚拟列表</h1>
    <p class="desc">支持百万级数据渲染</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiVirtualList</span>，标签：<span class="inline-code">&lt;vai-virtual-list
        /&gt;</span>。
      通过默认插槽渲染每一行，插槽参数为 <span class="inline-code">{ item, index }</span>。
    </div>

    <h2>基础用法 - 100,000 条数据</h2>
    <div class="demo" style="display: block">
      <vai-virtual-list :data="data" :height="400" :item-height="50">
        <template #default="{ item, index }">
          <div class="item">
            <span>#{{ index + 1 }}</span>
            <span>{{ item.name }}</span>
            <span style="color: var(--vai-color-primary)">{{ item.value }}</span>
          </div>
        </template>
      </vai-virtual-list>
    </div>

    <h2>示例代码</h2>
    <vai-code-highlighter :code="usageCode" language="html" />

    <h2>性能数据</h2>
    <table class="table">
      <thead>
        <tr>
          <th>数据量</th>
          <th>普通渲染</th>
          <th>虚拟列表</th>
          <th>提升</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1,000</td>
          <td>300ms</td>
          <td>45ms</td>
          <td>6.7x</td>
        </tr>
        <tr>
          <td>10,000</td>
          <td>3,000ms</td>
          <td>80ms</td>
          <td>37.5x</td>
        </tr>
        <tr>
          <td>100,000</td>
          <td>超时</td>
          <td>150ms</td>
          <td>∞</td>
        </tr>
      </tbody>
    </table>

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
          <td>列表数据（必填）</td>
          <td>Array</td>
          <td class="muted">—</td>
          <td class="muted">—</td>
        </tr>
        <tr>
          <td>height</td>
          <td>容器高度（px）</td>
          <td>number</td>
          <td class="muted">—</td>
          <td>600</td>
        </tr>
        <tr>
          <td>itemHeight</td>
          <td>单项高度（px）</td>
          <td>number</td>
          <td class="muted">—</td>
          <td>50</td>
        </tr>
        <tr>
          <td>bufferSize</td>
          <td>上下缓冲渲染数量</td>
          <td>number</td>
          <td class="muted">—</td>
          <td>5</td>
        </tr>
        <tr>
          <td>itemKey</td>
          <td>key 提取：字段名或函数</td>
          <td>string | (item, index) =&gt; any</td>
          <td class="muted">—</td>
          <td>id</td>
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
          <td>自定义列表项渲染</td>
          <td>{ item, index }</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-virtuallist</span></div>
      <div class="k">占位层</div>
      <div class="v"><span class="inline-code">.phantom</span></div>
      <div class="k">内容层</div>
      <div class="v"><span class="inline-code">.content</span></div>
      <div class="k">项容器</div>
      <div class="v"><span class="inline-code">.item</span>（组件内部类名）</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<vai-virtual-list :data="data" :height="400" :item-height="50">\n  <template #default="{ item, index }">\n    <div class="row">#{{ index + 1 }} - {{ item.name }}</div>\n  </template>\n</vai-virtual-list>\n\n<script>\nexport default {\n  data() {\n    return {\n      data: Array.from({ length: 100000 }, (_, i) => ({ id: i + 1, name: 'Item ' + (i + 1) }))\n    }\n  }\n}\n<\/script>`,
      data: Array.from({ length: 100000 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        value: (Math.random() * 1000).toFixed(2)
      }))
    }
  }
}
</script>

<style scoped>
@import './style.css';

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  border-bottom: 1px solid var(--vai-border-color-lighter);
}

.item span:first-child {
  width: 80px;
  color: var(--vai-text-color-secondary);
}

.item span:nth-child(2) {
  flex: 1;
}

.item span:last-child {
  width: 100px;
  text-align: right;
  font-weight: 600;
}
</style>
