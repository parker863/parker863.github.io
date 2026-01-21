<template><div><p>文章摘要会显示于首页的详细版文章列表中，在编写文章时（<code v-pre>.md</code>文件中）在合适的位置添加一个<code v-pre>&lt;!-- more --&gt;</code>注释。注释前面的内容将会暴露在摘要中。</p>
<p>示例：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 如何根据系统主题自动响应CSS深色模式</span></span>
<span class="line"></span>
<span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">Dark</span>](<span class="token url">https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200427163531.jpg</span>)</span></span>
<span class="line"></span>
<span class="line">很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。这篇文章将告诉你如何在网站中实现一个自动的CSS深色模式，根据访客的系统主题来自动响应。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- more --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> CSS 深色模式 (Dark Mode)</span></span>
<span class="line"></span>
<span class="line">...</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如示例的内容，在<code v-pre>&lt;!-- more --&gt;</code>注释前面的除了标题之外所有内容将显示到摘要中。摘要在文章列表的显示效果如下：</p>
<p align="center">
  <img src="https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200513165502.png" width="600">
</p>
<p>值得注意的是摘要的内容也是文章内容的一部分，会显示在文章详情页中。</p>
</div></template>


