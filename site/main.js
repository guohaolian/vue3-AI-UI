import { createApp } from 'vue'
import App from './App.vue'
import VaiUI from '../packages/components'
import '../packages/theme/index.css'

const app = createApp(App)

// Docs helper: CodeHighlighter uses v-html, so HTML code must be escaped.
// Exposed to templates as `$escapeHtml(code)`.
app.config.globalProperties.$escapeHtml = (code) => {
	const normalized = String(code ?? '').replaceAll('<\\/script>', '</script>')
	return normalized
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
}

app.use(VaiUI)
app.mount('#app')
