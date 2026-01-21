<template><div><h1 id="如何贡献文章" tabindex="-1"><a class="header-anchor" href="#如何贡献文章"><span>如何贡献文章</span></a></h1>
<p>本文主要讲述如何向技术栈贡献文章，目前可以通过GitHub自助提交和交给PC协会成员两种方式，文章都采用 <code v-pre>markdown</code> 语言编写</p>
<!-- more -->
<p>若遇到问题可以在评论区提问</p>
<h2 id="fork-仓库" tabindex="-1"><a class="header-anchor" href="#fork-仓库"><span>fork 仓库</span></a></h2>
<blockquote>
<p>本步骤为通过GitHub自助提交的前置条件</p>
</blockquote>
<p>打开<a href="https://github.com/cqnu-pc/cqnu-pc.github.io" target="_blank" rel="noopener noreferrer">技术栈仓库</a>，点击页面右上方的<code v-pre>fork</code>按键</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/mmexport1665505418818.1gb5227qnr34.webp" alt="mmexport1665505418818"></p>
<p>点击绿色的<code v-pre>Create fork</code>按键</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/mmexport1665505413239.3mm5xqhzprm0.webp" alt="mmexport1665505413239"></p>
<p>此时一个仓库副本就创建成功了</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/mmexport1665505411967.1ta21lh6jim8.webp" alt="mmexport1665505411967"></p>
<p>此后你对PC 协会仓库做出的所有操作都会在你fork的仓库中体现，并存贮在你fork的仓库中</p>
<h2 id="github-在线编辑" tabindex="-1"><a class="header-anchor" href="#github-在线编辑"><span>GitHub 在线编辑</span></a></h2>
<h3 id="打开技术栈仓库" tabindex="-1"><a class="header-anchor" href="#打开技术栈仓库"><span>打开<a href="https://github.com/cqnu-pc/cqnu-pc.github.io" target="_blank" rel="noopener noreferrer">技术栈仓库</a></span></a></h3>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image_2022-10-10_17-33-45.310ebheyo940.jpg" alt="image_2022-10-10_17-33-45"></p>
<h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">docs</span>
<span class="line">├── .vuepress</span>
<span class="line">├── 00.目录页</span>
<span class="line">├── 01.公告</span>
<span class="line">├── 02.教程</span>
<span class="line">├── 04.维修记录</span>
<span class="line">├── 05.更多</span>
<span class="line">├── 50.关于</span>
<span class="line">├── index.md</span>
<span class="line">├── @pages</span>
<span class="line">└── _posts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有文章都存储在<code v-pre>docs</code>文件夹下</p>
<p>在 <code v-pre>docs</code>文件夹下除<code v-pre>.vuepress</code> <code v-pre>@pages</code>不可以创建文章外，其他文件夹都可以存放文档</p>
<p>其中<code v-pre>01.公告</code> <code v-pre>04.维修记录</code> <code v-pre>50.关于</code>由PC协会成员撰写</p>
<p>所以大家可以在<code v-pre>02.教程</code> <code v-pre>03.更多</code> <code v-pre>_posts</code>中创建和上传文章</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.3ui8ephsh000.jpg" alt="image"></p>
<h3 id="向当前目录添加文件" tabindex="-1"><a class="header-anchor" href="#向当前目录添加文件"><span>向当前目录添加文件</span></a></h3>
<p>进入你想要存放的目录后，点击右侧的<code v-pre>Add file</code></p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.2x4vh1a57le0.jpg" alt="image"></p>
<p>此时你可以选在<code v-pre>Create New file</code>来进行在线编辑</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.6q7055avn6s0.webp" alt="image"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>注意一下命名规则</p>
<p><code v-pre>序号.文件名.md</code></p>
<p>在<code v-pre>02.教程</code> <code v-pre>03.更多</code>中创建文章文件名前序号是必须的，但是在<code v-pre>_posts</code>中创建文章可以省略序号。</p>
</div>
<h3 id="保存文件" tabindex="-1"><a class="header-anchor" href="#保存文件"><span>保存文件</span></a></h3>
<p>编辑完成后，向下滚动，点击绿色的按钮<code v-pre>Propose new file</code>保存编辑好的文件</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.5eiry6poag40.webp" alt="image"></p>
<h3 id="创建上传请求" tabindex="-1"><a class="header-anchor" href="#创建上传请求"><span>创建上传请求</span></a></h3>
<p>接下来创建一个上传请求，大家可以在比较大的文本框中输入一些描述信息，填写完成后点击右下方的绿色按钮<code v-pre>Create pull request</code></p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.4rwksh4teo80.webp" alt="image"></p>
<h3 id="等待仓库持有主合并" tabindex="-1"><a class="header-anchor" href="#等待仓库持有主合并"><span>等待仓库持有主合并</span></a></h3>
<p>此时就已经提交完成了，等待仓库持有者合并请求</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.54ob0j0we6o0.webp" alt="image"></p>
<p>点击中间的<code v-pre>Pull requests</code>就可以查看当前所有的合并请求</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.4mgja9eif8g0.webp" alt="image"></p>
<h2 id="直接上传文件" tabindex="-1"><a class="header-anchor" href="#直接上传文件"><span>直接上传文件</span></a></h2>
<h3 id="打开你fork的仓库" tabindex="-1"><a class="header-anchor" href="#打开你fork的仓库"><span>打开你fork的仓库</span></a></h3>
<p>从你的<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>打开你fork的PC 协会的仓库</p>
<h3 id="选定目录" tabindex="-1"><a class="header-anchor" href="#选定目录"><span>选定目录</span></a></h3>
<p>选择一个想要投稿的地方，点击右侧的<code v-pre>Add file</code> -&gt; <code v-pre>Upload files</code></p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.2x4vh1a57le0.jpg" alt="image"></p>
<h3 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件"><span>上传文件</span></a></h3>
<p>点击中间选择文件或者拖拽添加文件</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>注意文件命名规则 <code v-pre>序号.标题.md</code> 例如 <code v-pre>01.如何开机.md</code></p>
</div>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.444trmbsm3o0.webp" alt="image"></p>
<p>滚动到页面下方，添加描述信息，添加完成后点击绿色的 <code v-pre>Commit changes</code>，保存更改</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.3j5sz4mrjq80.webp" alt="image"></p>
<h3 id="创建提交请求" tabindex="-1"><a class="header-anchor" href="#创建提交请求"><span>创建提交请求</span></a></h3>
<p>此时回到你fork的仓库，点击 <code v-pre>Contribute</code> -&gt; <code v-pre>Open pull request</code></p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.14xmms0fre5c.webp" alt="image"></p>
<p>填写必要信息后，点击 <code v-pre>Create pull request</code></p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.16ugdpojc6tc.webp" alt="image"></p>
<h3 id="完成" tabindex="-1"><a class="header-anchor" href="#完成"><span>完成</span></a></h3>
<p>等待审核通过即可</p>
<p><img src="https://cdn.staticaly.com/gh/CQNU-PC/pc-img@master/mackenia/贡献文章/image.381jr4fnpo80.webp" alt="image"></p>
<h2 id="通过-github-拉取到本地编辑" tabindex="-1"><a class="header-anchor" href="#通过-github-拉取到本地编辑"><span>通过 GitHub 拉取到本地编辑</span></a></h2>
<blockquote>
<p>操作复杂，不建议使用<s>除非你想研究本站</s>，更建议使用在本地编写好直接上传的方式</p>
</blockquote>
<h3 id="将仓库拉取到本地" tabindex="-1"><a class="header-anchor" href="#将仓库拉取到本地"><span>将仓库拉取到本地</span></a></h3>
<p>拉取fork后的仓库到你的电脑上</p>
<h3 id="添加需要的内容" tabindex="-1"><a class="header-anchor" href="#添加需要的内容"><span>添加需要的内容</span></a></h3>
<p>接下来你就可以将这个仓库克隆到本地进行修改，就像你其他的仓库有一样。</p>
<h3 id="提交" tabindex="-1"><a class="header-anchor" href="#提交"><span>提交</span></a></h3>
<p>在本地修改完成并同步到GitHub后，便可以向原先被fork的仓库提交合并请求</p>
<h2 id="发给pc-协会的成员" tabindex="-1"><a class="header-anchor" href="#发给pc-协会的成员"><span>发给PC 协会的成员</span></a></h2>
<p>点击页面最下方的邮件，QQ图标来联系他们</p>
</div></template>


