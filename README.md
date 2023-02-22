<div align="center">
  <img src='https://stone-1315935641.cos.ap-chengdu.myqcloud.com/img%2Flogo.png'/>
</div>

<div align="center">致力于开源学习的UI组件库</div>

<div class="summary" align="center">
  <div align="center">
    <a>
      <img src="https://camo.githubusercontent.com/cdc69c438472be59734e5d67d12533d15e48bc94b27429f31b2d3b7d88b6639a/68747470733a2f2f7472617669732d63692e6f72672f456c656d6546452f656c656d656e742e7376673f6272616e63683d6d6173746572"/>
    </a>
    <a>
      <img src="https://camo.githubusercontent.com/78f47a09877ba9d28da1887a93e5c3bc2efb309c1e910eb21135becd2998238a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667"/>
    </a>
    <a>
      <img src="https://stone-1315935641.cos.ap-chengdu.myqcloud.com/img/coberageLabel.jpg?q-sign-algorithm=sha1&q-ak=AKIDQ9RtyzysZEIeeWBYGFzqSE2Vt_jucXVFhk9gikshBbkmL2PruadVC3fiZk_6pQzx&q-sign-time=1676987432;1676991032&q-key-time=1676987432;1676991032&q-header-list=host&q-url-param-list=&q-signature=2c5010581e697b883c666540ff90315b93c992d9&x-cos-security-token=26A9Y1tsN317DmRxi0ufi9ncme5SZ7Ka8ccb655dee8803c31abf2dbcef9175a9XdBH_zIhcNgARZUG3FnRX8AMTwy1JhfpNiyhdrCptMIIFScjKu0HKx423kYhMhK3mSa7L35ebSrdQXfaAaA26yw4sO63JoYvF1yNZ_Z2AW6HJx1wiMwDq6nriiCOH7j-8zr19s7GxFriTKgOvm8BNh3pZMqUzIjloGfZGLtZYoZjk7oB02cwjgcrXhEpBeU1" />
    </a>
    <a>
      <img src="https://stone-1315935641.cos.ap-chengdu.myqcloud.com/img/npmLabel.jpg?q-sign-algorithm=sha1&q-ak=AKIDd09j7ujK9S5KU8N3lnIA9iOUBipwnJ4Dq-ZDLsffolhI7AIpwhHkGJks40YlO5fw&q-sign-time=1676987485;1676991085&q-key-time=1676987485;1676991085&q-header-list=host&q-url-param-list=&q-signature=6843a3e218264cb3542cf64e26b693568d6d0e23&x-cos-security-token=26A9Y1tsN317DmRxi0ufi9ncme5SZ7Ka742a80b3bb51690ad3086cdcb25babfbXdBH_zIhcNgARZUG3FnRX5l5CbSfL33WX0Vbp1NSB_CEXQs6nSKzmwBF_rz_ZYlO0eEadMWc-6QpRA0W5q2N2jjUoXO889nR2ip3bqgpXD1rMnaQTL0MfQd3SjgFzU5YbJYtRZyYwQ08N7ZNVWd-5ZH6CRbQm4GjGuzRb8Op1JQHqO2XlO9EandpFMcXZaAh"/>
    </a>


  </div>
</div>

## ✨ 特性

<div >
  <li>🌈 模块化、可迭代性强，耦合度合理、结构清晰、组件与样式分离</li>
  <li>📦 开箱即用的高质量 Vue 组件</li>
  <li>🛡 使用 TypeScript 开发规范性好</li>
  <li>⚙️ 全链路开发和设计工具体系</li>
  <li>🚀 20+ 个高质量组件，覆盖PC端主流场景</li>
  <li>💪 单元测试覆盖率超过 70%，提供稳定性保障</li>
  <li>🍭 支持按需引入和 Tree Shaking</li>
</div>

## 安装
<pre>
  <code >npm i lang-ui </code>
</pre>

## 快速开始
<pre>
  <code>import LangUi from 'lang-ui';</code>
  <code>import 'lang-ui/dist/lib/assets/(请前往node_module/lang-ui/dist/lib/assets/查看css文件名字)';</code>
  <code>const app = createApp(App);</code>
  <code>app.use(LangUi).mount('#app');</code>
</pre>
由于 Vue 3 不再支持 IE11，Lang-UI 也不再支持 IE 浏览器

## 在线文档

<a target="_blank" href="https://langlangmountteam.github.io/lang-ui-docs/">https://langlangmountteam.github.io/lang-ui-docs/</a>

## 在线演示站点
- <a target="_blank" href="https://407zk09371.oicp.vip/">https://407zk09371.oicp.vip/</a>

## 使用仓库相关命令

### 安装依赖
<pre>
  <code>npm install </code>
</pre>

### 启动本地测试项目
<pre>
  <code>npm run dev </code>
</pre>

### 打包组件库
<pre>
  <code>rollup -c </code>
</pre>

### 单元测试
<pre>
  <code>npm run test </code>
</pre>

### 测试覆盖率
<pre>
  <code>pnpm run coverage </code>
</pre>





