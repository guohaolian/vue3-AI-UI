<template>
  <div class="doc">
    <h1>Skeleton 骨架屏</h1>
    <p class="desc">在内容加载前显示占位图，提升用户体验</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiSkeleton</span>，标签：<span class="inline-code">&lt;vai-skeleton /&gt;</span>。
      <br />
      注意：当前版本虽然提供 <span class="inline-code">loading</span> prop，但模板中并未用它控制显示/隐藏；推荐在外层使用 <span
        class="inline-code">v-if</span> 控制是否渲染骨架屏。
    </div>

    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-skeleton />
    </div>

    <h2>带头像</h2>
    <div class="demo" style="display: block">
      <vai-skeleton avatar :rows="4" />
    </div>

    <h2>不同形状</h2>
    <div class="demo" style="display: block">
      <vai-skeleton avatar avatar-shape="square" :rows="3" />
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
          <td>avatar</td>
          <td>是否显示头像占位</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>avatarShape</td>
          <td>头像形状</td>
          <td>string</td>
          <td>circle / square</td>
          <td>circle</td>
        </tr>
        <tr>
          <td>title</td>
          <td>是否显示标题占位</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>titleWidth</td>
          <td>标题宽度</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>40%</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>段落行数</td>
          <td>number</td>
          <td class="muted">—</td>
          <td>3</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否加载中（当前版本未接入显示逻辑）</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-skeleton</span></div>
      <div class="k">头像</div>
      <div class="v"><span class="inline-code">.skeleton-avatar</span>（<span class="inline-code">-circle</span> / <span
          class="inline-code">-square</span>）</div>
      <div class="k">内容</div>
      <div class="v"><span class="inline-code">.skeleton-content</span> / <span
          class="inline-code">.skeleton-title</span> / <span class="inline-code">.skeleton-row</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<vai-skeleton />\n<vai-skeleton avatar :rows="4" />\n<vai-skeleton avatar avatar-shape="square" :rows="3" />\n\n<!-- 推荐：外部用 v-if 控制是否展示 -->\n<vai-skeleton v-if="loading" avatar />`
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
