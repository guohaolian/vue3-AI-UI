<template>
  <div class="doc">
    <h1>Attachments 附件输入</h1>
    <p class="desc">用于上传和管理文件附件</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiAttachments</span>，标签：<span class="inline-code">&lt;vai-attachments /&gt;</span>。
      支持 <span class="inline-code">v-model</span>，输出为 <span class="inline-code">File[]</span>。
      超过数量/大小限制会使用浏览器 <span class="inline-code">alert</span> 提示。
    </div>

    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-attachments v-model="files" tip="支持多文件上传，单个文件不超过 10MB" />
    </div>

    <h2>已选择的文件</h2>
    <div v-if="files.length" style="margin-top: 12px">
      <p style="font-size: 14px; color: var(--vai-text-color-secondary)">
        已选择 {{ files.length }} 个文件
      </p>
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
          <td>modelValue</td>
          <td>已选择文件列表（v-model）</td>
          <td>File[]</td>
          <td class="muted">—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>是否支持多选</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>accept</td>
          <td>文件类型过滤（原生 input accept）</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>*</td>
        </tr>
        <tr>
          <td>maxSize</td>
          <td>单文件大小限制（字节）</td>
          <td>number</td>
          <td class="muted">—</td>
          <td>10 * 1024 * 1024</td>
        </tr>
        <tr>
          <td>maxCount</td>
          <td>文件数量上限</td>
          <td>number</td>
          <td class="muted">—</td>
          <td>5</td>
        </tr>
        <tr>
          <td>buttonText</td>
          <td>按钮文本</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>添加附件</td>
        </tr>
        <tr>
          <td>tip</td>
          <td>提示文案</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用选择</td>
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
          <td>update:modelValue</td>
          <td>文件列表变化时更新 v-model</td>
          <td>(files: File[])</td>
        </tr>
        <tr>
          <td>change</td>
          <td>文件列表变化时触发</td>
          <td>(files: File[])</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-attachments</span></div>
      <div class="k">列表</div>
      <div class="v"><span class="inline-code">.attachments-list</span> / <span
          class="inline-code">.attachment-item</span></div>
      <div class="k">操作</div>
      <div class="v"><span class="inline-code">.attachments-actions</span> / <span
          class="inline-code">.action-btn</span> / <span class="inline-code">.action-tip</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      usageCode: `<vai-attachments\n  v-model="files"\n  tip="支持多文件上传，单个文件不超过 10MB"\n  :max-count="5"\n  :max-size="10 * 1024 * 1024"\n  accept=".pdf,.doc,.docx,.png,.jpg"\n  @change="handleChange"\n/>\n\n<script>\nexport default {\n  data() {\n    return { files: [] }\n  },\n  methods: {\n    handleChange(files) {\n      console.log('change:', files)\n    }\n  }\n}\n<\/script>`
    }
  },
  methods: {
    handleChange(files) {
      console.log('change:', files)
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
