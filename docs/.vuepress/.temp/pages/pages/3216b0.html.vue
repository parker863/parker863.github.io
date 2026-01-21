<template><div><p>一个比较完整的front matter示例：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 标题</span>
<span class="line"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-02-21 14:40:19</span></span>
<span class="line"><span class="token key atrule">permalink</span><span class="token punctuation">:</span> /pages/a1bc87</span>
<span class="line"><span class="token key atrule">categories</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> 分类1</span>
<span class="line">  <span class="token punctuation">-</span> 分类2</span>
<span class="line"><span class="token key atrule">tags</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> 标签1</span>
<span class="line"><span class="token key atrule">titleTag</span><span class="token punctuation">:</span> 原创 <span class="token comment"># v1.9.0+</span></span>
<span class="line"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token key atrule">article</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token key atrule">comment</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token key atrule">author</span><span class="token punctuation">:</span></span>
<span class="line"> <span class="token key atrule">name</span><span class="token punctuation">:</span> 作者</span>
<span class="line"> <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.com</span>
<span class="line"><span class="token key atrule">sticky</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<p>自动生成的front matter字段包括title、date、permalink、categories、tags，这里就不再重复赘述，参考：<RouteLink to="/pages/088c16/">自动生成front matter</RouteLink></p>
<h3 id="titletag" tabindex="-1"><a class="header-anchor" href="#titletag"><span>titleTag <Badge text="v1.9.0 +"/></span></a></h3>
<ul>
<li>用于给标题添加  <code v-pre>原创</code>、<code v-pre>转载</code> 、<code v-pre>优质</code>、<code v-pre>推荐</code> 等自定义标记。</li>
</ul>
<p>添加了标题标记的文章，在文章页和文章列表、最近更新栏、归档页的文章标题都会显示此标记。</p>
<h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar"><span>sidebar</span></a></h3>
<ul>
<li><code v-pre>false</code> 不显示侧边栏</li>
<li><code v-pre>auto</code> 显示自动侧边栏（只包含本文标题和子标题）</li>
</ul>
<h3 id="article" tabindex="-1"><a class="header-anchor" href="#article"><span>article</span></a></h3>
<ul>
<li><code v-pre>false</code> 判定当前页面为非文章页</li>
</ul>
<p>对于非文章页，如目录页、关于、友情链接等自定义页面，需要设置此项。设置之后这个页面将被认定为非文章页，不显示面包屑和作者、时间，不显示最近更新栏，不会参与到最近更新文章的数据计算中。</p>
<h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>comment</span></a></h3>
<ul>
<li><code v-pre>false</code> 不显示评论区，这是<a href="https://github.com/dongyuanxin/vuepress-plugin-comment" target="_blank" rel="noopener noreferrer">评论插件</a>的一个配置</li>
</ul>
<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3>
<ul>
<li><code v-pre>false</code> 不显示编辑链接</li>
</ul>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h3>
<ul>
<li>author.name 作者名称</li>
<li>author.link 作者链接</li>
</ul>
<p>指定当前页面的作者信息，如没有作者链接时可以这样：<code v-pre>author: 作者名称</code></p>
<h3 id="sticky-置顶" tabindex="-1"><a class="header-anchor" href="#sticky-置顶"><span>sticky (置顶)</span></a></h3>
<ul>
<li>类型： <code v-pre>number</code></li>
<li>排序：允许有多个置顶文章，按照 <code v-pre>1, 2, 3, ...</code> 来降低置顶文章的排列优先级</li>
</ul>
<p>文章置顶，设置了此项将在首页详细版文章列表中处于置顶位置。</p>
</div></template>


