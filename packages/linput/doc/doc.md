# Input 输入框         
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import demo8 from './demo8.vue';
import codeds from '@/components/codeds.vue';
import DOC from '@/components/docview.vue';
const propDoc =  [
  [ "type","类型","string","text/password","text"],
  ["readonly", "只读", "boolean", "large/medium/small ", "false"],
  ["size", "大小", "string", "", "medium"],
  ["maxLength", "输入最大长度", "number", "-", "-"],
  ["placeholder", "提示内容", "string", "-", "Basic usage"],
  ["showpwd", "是否显示密码", "boolean", "false/true", "fasle"],
  ["v-model", "双向绑定", "string/number", "-", "-"],
  ["clearable", "是否可清除", "boolean", "false/true", "false"],
  ["prefixIcon", "前面添加icon", "string", "-", "-"],
  ["suffixIcon", "后面添加icon", "string", "-", "-"],
];
const eventDoc = [
  ["input", "输入时行为","input=(e)=>{console.log(e)}"],
  ["focus", "获取焦点","focus=(e)=>{console.log(e)}"] ,
  ["blur", "失去焦点","blur=(e)=>{console.log(e}"],
  ["clear", "清除input","clear=(e)=>{console.log(e)}"],
  ["change", "输入结束时触发","change=(e)=>{console.log(e)}"],
];
</script>

<div class="doc1">基本使用</div>
<div class="doc2">
  <demo8></demo8>
</div>
<Suspense><codeds compname="linput" demoname="demo1"></codeds></Suspense>


<div class="doc1">使用 icon</div>
<div class="doc2">
  <demo1></demo1>
</div>
<Suspense><codeds compname="linput" demoname="demo1"></codeds></Suspense>

<div class="doc1">不同的大小</div>
<div class="doc2">
  <demo2></demo2>
</div>
<Suspense><codeds compname="linput" demoname="demo2"></codeds></Suspense>
<div class="doc1">禁用状态 </div>
<div class="doc2">
  <demo3></demo3>
</div>
<Suspense><codeds compname="linput" demoname="demo3"></codeds></Suspense>

<div class="doc1">可清空 clear事件</div>
<div class="doc2">
  <demo4></demo4>
</div>
<Suspense><codeds compname="linput" demoname="demo4"></codeds></Suspense>
<div class="doc1">双向绑定 长度限制</div>
<div class="doc2">
  <demo5></demo5>
</div>
<Suspense><codeds compname="linput" demoname="demo5"></codeds></Suspense>
<div class="doc1">密码显示</div>
<div class="doc2">
  <demo6></demo6>
</div>
<Suspense><codeds compname="linput" demoname="demo6"></codeds></Suspense>
<div class="doc1">获取焦点和失去焦点事件</div>
<div class="doc2">
  <demo7></demo7>
</div>
<Suspense><codeds compname="linput" demoname="demo7"></codeds></Suspense>


<br/>

<DOC title="属性" type=prop :body="propDoc"></DOC>

<br/>


<DOC title="input 事件" type=event :body="eventDoc"></DOC>
<style>
.doc2{
    display:"block";
    border:1px solid #f0f0f0;
    /* height:20vh; */
    padding:2vw;
    margin-top:2vh;
}
.doc1{
    margin-top:2vh;
}
</style>
