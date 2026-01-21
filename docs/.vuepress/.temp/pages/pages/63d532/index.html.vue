<template><div><h1 id="markdown快速上手" tabindex="-1"><a class="header-anchor" href="#markdown快速上手"><span>markdown快速上手</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">介绍</p>
<p>Markdown 是一种轻量级标记语言。它为网页写作者提供了一种简单的文本与html转换手段。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">作者John Gruber的描述：</p>
<p>Markdown is a text-to-HTML conversion tool for web writers.
Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).</p>
</div>
<h2 id="markdown基础语法一览-速查" tabindex="-1"><a class="header-anchor" href="#markdown基础语法一览-速查"><span>markdown基础语法一览/速查</span></a></h2>
<table>
<thead>
<tr>
<th>元素</th>
<th>语法</th>
<th>演示</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/headings.html" target="_blank" rel="noopener noreferrer">标题（Heading）</a></td>
<td><code v-pre># 一级标题</code> <br> <code v-pre>## 二级标题</code> <br> <code v-pre>### 三级标题</code><br> <code v-pre>### 四级标题</code></td>
<td><h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3><h4>四级标题</h4></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/emphasis.html" target="_blank" rel="noopener noreferrer">粗体（Bold）</a></td>
<td><code v-pre>**粗体**</code></td>
<td><strong>粗体</strong></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/emphasis.html" target="_blank" rel="noopener noreferrer">斜体（Italic）</a></td>
<td><code v-pre>*斜体*</code></td>
<td><em>斜体</em></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/emphasis.html" target="_blank" rel="noopener noreferrer">加粗斜体 （Bold Italic）</a></td>
<td><code v-pre>***加粗斜体***</code></td>
<td><em><strong>加粗斜体</strong></em></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/extended-syntax/strikethrough.html" target="_blank" rel="noopener noreferrer">删除线（Strikethrough）</a></td>
<td><code v-pre>~~删除线~~</code></td>
<td><s>删除线</s></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/blockquotes.html" target="_blank" rel="noopener noreferrer">引用块（Blockquote）</a></td>
<td><code v-pre>&gt; 引用块</code></td>
<td><blockquote> 引用块</td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/lists.html" target="_blank" rel="noopener noreferrer">有序列表（Ordered List）</a></td>
<td><code v-pre>1. First item</code> <br> <code v-pre>2. Second item</code> <br> <code v-pre>3. Third item</code></td>
<td><ol><li>First item</li><li>Second item</li><li>Third item</li></ol></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/lists.html" target="_blank" rel="noopener noreferrer">无序列表（Unordered List）</a></td>
<td><code v-pre>- First item</code> <br> <code v-pre>- Second item</code> <br> <code v-pre>- Third item</code></td>
<td><ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/horizontal-rules.html" target="_blank" rel="noopener noreferrer">分隔线（Horizontal Rule）</a></td>
<td><code v-pre>---</code></td>
<td><hr></td>
</tr>
<tr>
<td><a href="https://markdown.com.cn/basic-syntax/links.html" target="_blank" rel="noopener noreferrer">链接（Link）</a></td>
<td><code v-pre>[样例](https://cqnu-pc.github.io)</code></td>
<td><a href="https://cqnu-pc.github.io" target="_blank" rel="noopener noreferrer">样例</a></td>
</tr>
</tbody>
</table>
<h3 id="图片的插入" tabindex="-1"><a class="header-anchor" href="#图片的插入"><span>图片的插入</span></a></h3>
<ul>
<li>
<p>图片的插入与链接类似</p>
<ul>
<li>
<p><strong>样例</strong>：<code v-pre>![picture name](link)</code></p>
</li>
<li>
<p><strong>演示</strong>：</p>
</li>
</ul>
</li>
</ul>
<p><img src="https://cdn.staticaly.com/gh/wujings/picX-img@master/pc/lying,-breasts,-long-hair,-female,artbook,gloves,-thighhighs,-red_thighhighs,-smile,-smiley-face,-blue_hair,absurdres,boots,-1gi-s-1304950564.3ruq1nbpet34.webp" alt="pc协会娘"></p>
<ul>
<li>推荐使用<a href="https://picx.xpoet.cn" target="_blank" rel="noopener noreferrer"><strong>图床</strong></a>上传图片后插入。</li>
</ul>
<h3 id="代码的处理" tabindex="-1"><a class="header-anchor" href="#代码的处理"><span>代码的处理</span></a></h3>
<ul>
<li>
<p>语句内的代码应使用一对<code v-pre>`</code>符号（esc下方的按键）括起来</p>
<ul>
<li><strong>样例</strong>：<code v-pre>`code`</code></li>
<li><strong>演示</strong>：想在JAVA中使用<code v-pre>Scanner</code>类，需先导入<code v-pre>java.util.Scanner</code>包</li>
</ul>
</li>
<li>
<p>对于一整段代码，可以使用三个<code v-pre>`</code>符号</p>
<ul>
<li><strong>样例</strong>:
`` ```</li>
</ul>
</li>
</ul>
<p>codeblock</p>
<p>``` ``</p>
<ul>
<li><strong>演示</strong>:</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;iosteam></span>
<span class="line">int main(){</span>
<span class="line">    std::cout&lt;&lt;"hello,world."&lt;&lt;std::endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用markdown创作文章" tabindex="-1"><a class="header-anchor" href="#使用markdown创作文章"><span>使用markdown创作文章</span></a></h2>
<ul>
<li>
<p>可以选择使用专门的markdown编辑器进行编辑，<a href="https://typora.io/" target="_blank" rel="noopener noreferrer">typora</a>是一款比较知名的付费编辑器，但使用<a href="https://azure.microsoft.com/zh-cn/products/visual-studio-code/" target="_blank" rel="noopener noreferrer">vscode</a>配合插件也能有不错的体验</p>
</li>
<li>
<p>markdown文件以.md为后缀名</p>
</li>
<li>
<p>markdown的一大特点在于：不需要像word一样管理文章、字体等内容的格式，只需关注文章整体的结构与内容的重点。</p>
</li>
<li>
<p>写作markdown文档时，可以通过各级标题将文章的要点进行分割，使得文章更清晰明了。</p>
</li>
<li>
<p>在写作markdown文档时也可以使用html语法。部分情况下（如表格较大）可以加快渲染速度。</p>
</li>
<li>
<p>利用<a href="https://github.com/CQNU-PC/cqnu-pc.github.io/blob/master/docs/02.%E6%95%99%E7%A8%8B/02.%E8%B4%A1%E7%8C%AE%E6%96%87%E7%AB%A0/07.Markdown%20%E5%AE%B9%E5%99%A8.md" target="_blank" rel="noopener noreferrer">markdown容器</a>可以丰富页面的效果</p>
</li>
</ul>
</div></template>


