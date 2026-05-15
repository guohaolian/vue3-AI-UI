<template>
  <div class="doc">
    <h1>FileCard 文件卡片</h1>
    <p class="desc">展示文件信息的卡片组件</p>

    <h2>引入</h2>
    <div class="note">
      组件名：<span class="inline-code">VaiFileCard</span>，标签：<span class="inline-code">&lt;vai-file-card /&gt;</span>。
      支持点击卡片、下载按钮以及关闭按钮三种交互（分别对应 <span class="inline-code">click</span> / <span class="inline-code">download</span> /
      <span class="inline-code">close</span> 事件）。
    </div>

    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-file-card name="项目文档.pdf" size="2.5 MB" time="2024-12-24" icon="📄" @click="handleClick"
        @download="handleDownload" />
    </div>

    <h2>带标签</h2>
    <div class="demo" style="display: block">
      <vai-file-card name="设计稿.sketch" size="15.8 MB" description="UI 设计稿最终版" icon="🎨" :tags="['设计', '重要']"
        @click="handleClick" />
    </div>

    <h2>上传进度</h2>
    <div class="demo" style="display: block">
      <vai-file-card name="视频文件.mp4" size="125 MB" icon="🎬" :progress="68" show-progress :clickable="false" />
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
          <td>type</td>
          <td>卡片样式类型</td>
          <td>string</td>
          <td>default / compact / detailed</td>
          <td>default</td>
        </tr>
        <tr>
          <td>name</td>
          <td>文件名</td>
          <td>string</td>
          <td class="muted">—</td>
          <td class="muted">必填</td>
        </tr>
        <tr>
          <td>size</td>
          <td>文件大小展示文本</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
        </tr>
        <tr>
          <td>time</td>
          <td>时间展示文本</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
        </tr>
        <tr>
          <td>description</td>
          <td>描述</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>''</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>文件图标（emoji 或文本）</td>
          <td>string</td>
          <td class="muted">—</td>
          <td>📄</td>
        </tr>
        <tr>
          <td>tags</td>
          <td>标签列表</td>
          <td>string[]</td>
          <td class="muted">—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>progress</td>
          <td>进度百分比</td>
          <td>number</td>
          <td>0 - 100</td>
          <td>0</td>
        </tr>
        <tr>
          <td>showProgress</td>
          <td>是否显示进度条</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>showDownload</td>
          <td>是否显示下载按钮</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>clickable</td>
          <td>是否可点击（影响 hover 与 click 事件）</td>
          <td>boolean</td>
          <td class="muted">—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>是否显示关闭按钮</td>
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
          <td>点击卡片（clickable 为 true 时触发）</td>
          <td class="muted">—</td>
        </tr>
        <tr>
          <td>download</td>
          <td>点击下载按钮触发</td>
          <td class="muted">—</td>
        </tr>
        <tr>
          <td>close</td>
          <td>点击关闭按钮触发</td>
          <td class="muted">—</td>
        </tr>
      </tbody>
    </table>

    <h3>样式类名</h3>
    <div class="api-kv">
      <div class="k">根容器</div>
      <div class="v"><span class="inline-code">.vai-file-card</span>（含 <span class="inline-code">.is-clickable</span>）
      </div>
      <div class="k">类型类</div>
      <div class="v"><span class="inline-code">.card-compact</span> / <span class="inline-code">.card-detailed</span>
      </div>
      <div class="k">内部</div>
      <div class="v"><span class="inline-code">.download-btn</span> / <span class="inline-code">.close-btn</span> /
        <span class="inline-code">.progress-fill</span> 等
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usageCode: `<template>\n  <vai-file-card\n    name="项目文档.pdf"\n    size="2.5 MB"\n    time="2024-12-24"\n    icon="📄"\n    :tags="['重要']"\n    show-progress\n    :progress="68"\n    @click="handleClick"\n    @download="handleDownload"\n  />\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleClick() {\n      console.log('click')\n    },\n    handleDownload() {\n      console.log('download')\n    }\n  }\n}\n<\/script>`
    }
  },
  methods: {
    handleClick() {
      alert('点击了文件卡片')
    },
    handleDownload() {
      alert('下载文件')
    }
  }
}
</script>
<style scoped>
@import './style.css';
</style>
