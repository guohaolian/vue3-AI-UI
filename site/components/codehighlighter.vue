<template>
  <div class="doc">
    <h1>CodeHighlighter 代码高亮</h1>
    <p class="desc">带语法高亮的代码展示组件</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiCodeHighlighter</span>，标签：<span class="inline-code">&lt;vai-code-highlighter
        /&gt;</span>。
      <span class="inline-code">code</span> 为必填字符串。
      <br />
      注意：当前版本的 <span class="inline-code">theme</span> 仅作为 prop 保留，样式未根据 theme 切换（默认暗色风格）。
    </div>

    <h2>JavaScript</h2>
    <div class="demo" style="display: block">
      <vai-code-highlighter :code="jsCode" language="javascript " />
    </div>

    <h2>Python</h2>
    <div class="demo" style="display: block">
      <vai-code-highlighter :code="pyCode" language="python " />
    </div>

    <h2>HTML</h2>
    <div class="demo" style="display: block">
      <vai-code-highlighter :code="$escapeHtml(htmlCode)" language="html " :show-header="false" />
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
          <td>code</td>
          <td>代码内容</td>
          <td>string</td>
          <td class="muted">—</td>
          <td class="muted">必填</td>
        </tr>
        <tr>
          <td>language</td>
          <td>语言类型（影响简单高亮规则）</td>
          <td>string</td>
          <td>javascript / typescript / python / html / css</td>
          <td>javascript</td>
        </tr>
        <tr>
          <td>showHeader</td>
          <td>是否显示顶部栏</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>showLineNumbers</td>
          <td>是否显示行号</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>theme</td>
          <td>主题（当前未接入样式切换）</td>
          <td>string</td>
          <td>dark / light</td>
          <td>dark</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-code-highlighter</span></div>
      <div class="k">头部</div>
      <div class="v"><span class="inline-code">.code-header</span> / <span class="inline-code">.code-language</span> /
        <span class="inline-code">.action-btn</span>
      </div>
      <div class="k">内容</div>
      <div class="v"><span class="inline-code">.code-container</span> / <span class="inline-code">.line-numbers</span> /
        <span class="inline-code">.code-content</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<template>\n  <vai-code-highlighter\n    :code="code"\n    language="javascript"\n    :show-header="true"\n    :show-line-numbers="true"\n  />\n</template>\n\n<script>\nexport default {\n  data() {\n    return { code: 'const answer = 42' }\n  }\n}\n<\/script>`,
      jsCode: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 计算前 10 个斐波那契数
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}`,
      pyCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 测试
numbers = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(numbers))`,
      htmlCode: `<div class="container">
  <h1>Hello World</h1>
  <p class="description">This is a demo</p>
</div>`
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
