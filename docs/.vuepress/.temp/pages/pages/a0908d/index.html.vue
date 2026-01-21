<template><div><p>Markdown 容器是对 Markdown 语法的一个扩展，使用简单的语法就可以在页面中呈现丰富的效果。</p>
<p>除了原默认主题自带的容器外，本主题还新增了一些好用的自定义容器。</p>
<h2 id="信息框容器" tabindex="-1"><a class="header-anchor" href="#信息框容器"><span>信息框容器</span></a></h2>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">::: tip</span>
<span class="line">这是一条提示</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: warning</span>
<span class="line">这是一条注意</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: danger</span>
<span class="line">这是一条警告</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: note</span>
<span class="line">这是笔记容器，在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v1.5.0 +<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> 版本才支持哦~</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>这是一条提示</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>这是一条注意</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>这是一条警告</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>这是笔记容器，在 <Badge text="v1.5.0 +" /> 以上版本才支持哦~</p>
</div>
<p>以上容器均可自定义标题，如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">::: tip 我的提示</span>
<span class="line">自定义标题的提示框</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">我的提示</p>
<p>自定义标题的提示框</p>
</div>
<h2 id="布局容器" tabindex="-1"><a class="header-anchor" href="#布局容器"><span>布局容器  <Badge text="v1.3.3 +" /></span></a></h2>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">::: center</span>
<span class="line">  <span class="token title important"><span class="token punctuation">###</span> 我是居中的内容</span></span>
<span class="line">  （可用于标题、图片等的居中）</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: right</span>
<span class="line">  <span class="token url">[<span class="token content">我是右浮动的内容</span>](<span class="token url">https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B</span>)</span></span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details</span>
<span class="line">这是一个详情块，在 IE / Edge 中不生效</span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span></span>
<span class="line"><span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是一个详情块'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: theorem 牛顿第一定律</span>
<span class="line">假若施加于某物体的外力为零，则该物体的运动速度不变。</span>
<span class="line">::: right</span>
<span class="line">来自 <span class="token url">[<span class="token content">维基百科</span>](<span class="token url">https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B</span>)</span></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong>
::: center</p>
<h3 id="我是居中的内容" tabindex="-1"><a class="header-anchor" href="#我是居中的内容"><span>我是居中的内容</span></a></h3>
<p>（可用于标题、图片等的居中）
:::</p>
<p>::: right
<a href="https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B" target="_blank" rel="noopener noreferrer">我是右浮动的内容</a>
:::</p>
<details class="hint-container details"><summary>Details</summary>
<p>这是一个详情块，在 IE / Edge 中不生效</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是一个详情块'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></details>
<p>::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。</p>
<p>::: right
来自 <a href="https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B" target="_blank" rel="noopener noreferrer">维基百科</a>
:::</p>
<blockquote>
<p>注意：<code v-pre>right</code>、<code v-pre>details</code>、<code v-pre>theorem</code>这三个容器在<code v-pre>v1.3.0 +</code>版本才支持。<code v-pre>center</code>容器在<code v-pre>v1.3.3 +</code>版本才支持。</p>
</blockquote>
<h2 id="普通卡片列表" tabindex="-1"><a class="header-anchor" href="#普通卡片列表"><span>普通卡片列表 <Badge text="v1.1.0 +"/></span></a></h2>
<p>普通卡片列表容器，可用于<code v-pre>友情链接</code>、<code v-pre>项目推荐</code>、<code v-pre>诗词展示</code>等。</p>
<p>先来看看效果：</p>
<p><strong>输出</strong>
::: cardList</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 麋鹿鲁哟</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 大道至简，知易行难</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200122153807.jpg <span class="token comment"># 可选</span></span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.cnblogs.com/miluluyo/ <span class="token comment"># 可选</span></span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#CBEAFA'</span> <span class="token comment"># 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#6854A1'</span> <span class="token comment"># 可选，默认var(--textColor)</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> XAOXUU</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> <span class="token string">'#IOS #Volantis主题作者'</span></span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xaoxuu.com</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#718971'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#fff'</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 平凡的你我</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 理想成为大牛的小陈同学</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//reinness.com/avatar.png</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//reinness.com</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#FCDBA0'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#A05F2C'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>上面效果在Markdown中的代码是这样的：</p>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">::: cardList</span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">yaml</span></span>
<span class="line"><span class="token code-block language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 麋鹿鲁哟</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 大道至简，知易行难</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200122153807.jpg <span class="token comment"># 可选</span></span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.cnblogs.com/miluluyo/ <span class="token comment"># 可选</span></span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#CBEAFA'</span> <span class="token comment"># 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#6854A1'</span> <span class="token comment"># 可选，默认var(--textColor)</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> XAOXUU</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> <span class="token string">'#IOS #Volantis主题作者'</span></span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xaoxuu.com</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#718971'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#fff'</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 平凡的你我</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 理想成为大牛的小陈同学</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//reinness.com/avatar.png</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//reinness.com</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#FCDBA0'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#A05F2C'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">::: cardList <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>每行显示数量</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language"> yaml</span></span>
<span class="line"><span class="token code-block language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 名称</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg <span class="token comment"># 头像，可选</span></span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx/ <span class="token comment"># 链接，可选</span></span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#CBEAFA'</span> <span class="token comment"># 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#6854A1'</span> <span class="token comment"># 文本色，可选，默认var(--textColor)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;每行显示数量&gt;</code> 数字，表示每行最多显示多少个，选值范围1~4，默认3。在小屏时会根据屏幕宽度减少每行显示数量。</li>
<li>代码块需指定语言为<code v-pre>yaml</code></li>
<li>代码块内是一个<code v-pre>yaml</code>格式的数组列表</li>
<li>数组成员的属性有：
<ul>
<li><code v-pre>name</code>名称</li>
<li><code v-pre>desc</code>描述</li>
<li><code v-pre>avatar</code>头像，可选</li>
<li><code v-pre>link</code>链接，可选</li>
<li><code v-pre>bgColor</code>背景色，可选，默认<code v-pre>var(--bodyBg)</code>。颜色值有<code v-pre>#</code>号时请添加引号</li>
<li><code v-pre>textColor</code>文本色，可选，默认<code v-pre>var(--textColor)</code></li>
</ul>
</li>
</ul>
<p>下面再来看另外一个示例：</p>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">::: cardList 2</span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">yaml</span></span>
<span class="line"><span class="token code-block language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 《静夜思》</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 床前明月光，疑是地上霜。举头望明月，低头思故乡。</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#F0DFB1'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#242A38'</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Vdoing</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 🚀一款简洁高效的VuePress 知识管理<span class="token important">&amp;博客(blog)</span> 主题</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/xugaoyi/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>vdoing</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#DFEEE7'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#2A3344'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong>
::: cardList 2</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 《静夜思》</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 床前明月光，疑是地上霜。举头望明月，低头思故乡。</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#F0DFB1'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#242A38'</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Vdoing</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 🚀一款简洁高效的VuePress 知识管理<span class="token important">&amp;博客(blog)</span> 主题</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/xugaoyi/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>vdoing</span>
<span class="line">  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">'#DFEEE7'</span></span>
<span class="line">  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">'#2A3344'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="图文卡片列表" tabindex="-1"><a class="header-anchor" href="#图文卡片列表"><span>图文卡片列表 <Badge text="v1.1.0 +" /></span></a></h2>
<p>图文卡片列表容器，可用于<code v-pre>项目展示</code>、<code v-pre>产品展示</code>等。</p>
<p>先看效果：</p>
<p><strong>输出</strong>
::: cardImgList</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200529162253.jpg</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 <span class="token comment"># 描述，可选</span></span>
<span class="line">  <span class="token key atrule">author</span><span class="token punctuation">:</span> Evan Xu <span class="token comment"># 作者，可选</span></span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg <span class="token comment"># 头像，可选</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200530100256.jpg</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
<span class="line">  <span class="token key atrule">author</span><span class="token punctuation">:</span> Evan Xu</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg</span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200530100257.jpg</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
<span class="line">  <span class="token key atrule">author</span><span class="token punctuation">:</span> Evan Xu</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">::: cardImgList</span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">yaml</span></span>
<span class="line"><span class="token code-block language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200529162253.jpg</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 <span class="token comment"># 描述，可选</span></span>
<span class="line">  <span class="token key atrule">author</span><span class="token punctuation">:</span> Evan Xu <span class="token comment"># 作者，可选</span></span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg <span class="token comment"># 头像，可选</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200530100256.jpg</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
<span class="line">  <span class="token key atrule">author</span><span class="token punctuation">:</span> Evan Xu</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg</span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200530100257.jpg</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
<span class="line">  <span class="token key atrule">author</span><span class="token punctuation">:</span> Evan Xu</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg</span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">::: cardImgList <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>每行显示数量</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language"> yaml</span></span>
<span class="line"><span class="token code-block language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg <span class="token comment"># 图片地址</span></span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.com <span class="token comment"># 链接地址</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述 <span class="token comment"># 可选</span></span>
<span class="line">  <span class="token key atrule">author</span><span class="token punctuation">:</span> 作者名称 <span class="token comment"># 可选</span></span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg <span class="token comment"># 作者头像，可选</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;每行显示数量&gt;</code> 数字，表示每行最多显示多少个，选值范围1~4，默认3。在小屏时会根据屏幕宽度减少每行显示数量。</li>
<li>代码块需指定语言为<code v-pre>yaml</code></li>
<li>代码块内是一个<code v-pre>yaml</code>格式的数组列表</li>
<li>数组成员的属性有：
<ul>
<li><code v-pre>img</code>图片地址</li>
<li><code v-pre>link</code>链接地址</li>
<li><code v-pre>name</code>标题</li>
<li><code v-pre>desc</code>描述，可选</li>
<li><code v-pre>author</code>作者名称，可选</li>
<li><code v-pre>avatar</code>作者头像，可选</li>
</ul>
</li>
</ul>
<h2 id="增强配置" tabindex="-1"><a class="header-anchor" href="#增强配置"><span>增强配置 <Badge text="v1.9.0 +"/></span></a></h2>
<p>为了适应更多需求场景，<code v-pre>v1.9.0+</code>版本的普通卡片和图文卡片容器添加了一些新的配置：</p>
<h3 id="_1-普通卡片和图文卡片容器" tabindex="-1"><a class="header-anchor" href="#_1-普通卡片和图文卡片容器"><span>1. 普通卡片和图文卡片容器</span></a></h3>
<h4 id="target" tabindex="-1"><a class="header-anchor" href="#target"><span>target</span></a></h4>
<ul>
<li>
<p>链接的打开方式，默认<code v-pre>_blank</code></p>
<ul>
<li>
<p><code v-pre>_self</code> 当前页面</p>
</li>
<li>
<p><code v-pre>_blank</code> 新窗口打开</p>
</li>
</ul>
</li>
</ul>
<h3 id="_2-图文卡片容器" tabindex="-1"><a class="header-anchor" href="#_2-图文卡片容器"><span>2. 图文卡片容器</span></a></h3>
<h4 id="imgheight" tabindex="-1"><a class="header-anchor" href="#imgheight"><span>imgHeight</span></a></h4>
<ul>
<li>
<p>设置图片高度，默认 <code v-pre>auto</code></p>
<ul>
<li>带单位</li>
</ul>
</li>
</ul>
<h4 id="objectfit" tabindex="-1"><a class="header-anchor" href="#objectfit"><span>objectFit</span></a></h4>
<ul>
<li>
<p>设置图片的填充方式(object-fit)，默认 <code v-pre>cover</code></p>
<ul>
<li><code v-pre>fill</code> 拉伸 (会改变宽高比)</li>
<li><code v-pre>contain</code> 缩放 (保持宽高比，会留空)</li>
<li><code v-pre>cover</code> 填充 (会裁剪)</li>
<li><code v-pre>none</code> 保持原有尺寸 (会留空或裁剪)</li>
<li><code v-pre>scale-down</code> 保证显示完整图片 (保持宽高比，会留空)</li>
</ul>
</li>
</ul>
<h4 id="lineclamp" tabindex="-1"><a class="header-anchor" href="#lineclamp"><span>lineClamp</span></a></h4>
<ul>
<li>描述文本超出多少行显示省略号，默认<code v-pre>1</code></li>
</ul>
<p>​</p>
<h3 id="_3-配置示例" tabindex="-1"><a class="header-anchor" href="#_3-配置示例"><span>3. 配置示例：</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">::</span><span class="token punctuation">:</span> cardImgList</span>
<span class="line">``` yaml</span>
<span class="line"><span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">target</span><span class="token punctuation">:</span> _blank</span>
<span class="line">    <span class="token key atrule">imgHeight</span><span class="token punctuation">:</span> auto</span>
<span class="line">    <span class="token key atrule">objectFit</span><span class="token punctuation">:</span> cover</span>
<span class="line">    <span class="token key atrule">lineClamp</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">data</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg</span>
<span class="line">    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/</span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题</span>
<span class="line">    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容</span>
<span class="line">    <span class="token key atrule">author</span><span class="token punctuation">:</span> Evan Xu</span>
<span class="line">    <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg</span>
<span class="line">```</span>
<span class="line"><span class="token key atrule">::</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


