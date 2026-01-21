<template><div><h1 id="dactyl-manuform-build-guide-handwired" tabindex="-1"><a class="header-anchor" href="#dactyl-manuform-build-guide-handwired"><span>Dactyl-manuform build guide (handwired)</span></a></h1>
<p>这是一篇关于 <a href="https://github.com/tshort/dactyl-keyboard" target="_blank" rel="noopener noreferrer">dactyl-manuform</a> 的小白友好 (<s>因为我本身就是小白</s>) 的中文组建指南，如果你没有任何组建键盘的经验(<s>比如我</s>)，通过阅读本指南，你大概可以对整个流程有清晰一点的了解。本指南是基于我组建此键盘的经历的一些经验分享，以及一些网上不容易找到的一些资源的整合。</p>
<!-- more -->
<p><img src="https://cdn.staticaly.com/gh/wivl/dactyl-build-guide@master/pics/IMG_2496.png" alt="dactyl_manuform"></p>
<h2 id="物料准备" tabindex="-1"><a class="header-anchor" href="#物料准备"><span>物料准备</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>数量</th>
<th>价格(估计)</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>Arduino Pro Micro</td>
<td>2</td>
<td>76 (38*2)</td>
<td></td>
</tr>
<tr>
<td>轴体</td>
<td>64</td>
<td>96 (1.5*64)</td>
<td></td>
</tr>
<tr>
<td>RJ9 插头</td>
<td>2</td>
<td>5</td>
<td>又叫电话机听筒线、123线序头</td>
</tr>
<tr>
<td>开关二极管1N4148</td>
<td>64</td>
<td>3.8</td>
<td>一般按100个一包购买</td>
</tr>
<tr>
<td>40p杜邦线</td>
<td>1</td>
<td>2</td>
<td>建议 30cm 以上</td>
</tr>
<tr>
<td>M3*5 平头螺丝</td>
<td>10</td>
<td>4</td>
<td>M3*5 是规格 螺纹内经 3mm 长度 5mm 一般100个一包</td>
</tr>
<tr>
<td>注塑热容螺母 M3*4*5</td>
<td>10</td>
<td>11</td>
<td>100个一包</td>
</tr>
<tr>
<td>铜箔胶带</td>
<td>1</td>
<td>10</td>
<td>建议宽度小于等于 1cm</td>
</tr>
<tr>
<td>防静电胶带</td>
<td>1</td>
<td>9</td>
<td>透明的较好</td>
</tr>
<tr>
<td>type-c母 to micro-usb公转接线</td>
<td>2</td>
<td>30 (15*2)</td>
<td>线软、短一点好</td>
</tr>
<tr>
<td>电话机听筒线</td>
<td>1</td>
<td>5.5</td>
<td>座机连接线、4芯电话线</td>
</tr>
</tbody>
</table>
<p>共计: 252.3</p>
<p>键盘外壳需要 3D 打印，底板需要切割。如果你没有 3D 打印或切割条件，那么你需要去找商家定制，价格参考：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>数量</th>
<th>价格</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>外壳</td>
<td>2 (左 右)</td>
<td>122 (45*2+32快递)</td>
<td>5x6 的左右 stl 文件</td>
</tr>
<tr>
<td>底板</td>
<td>2 (左 右)</td>
<td>50</td>
<td>5x6 底板 dxf 文件(原仓库只有一边，切割两个)</td>
</tr>
</tbody>
</table>
<p>共计: 172</p>
<p>同时，你需要有一些工具：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>数量</th>
<th>价格</th>
</tr>
</thead>
<tbody>
<tr>
<td>电烙铁</td>
<td>1</td>
<td>20 (便宜的)</td>
</tr>
<tr>
<td>热熔胶枪 (含胶棒)</td>
<td>1</td>
<td>20</td>
</tr>
</tbody>
</table>
<p>共计: 40</p>
<h2 id="组建" tabindex="-1"><a class="header-anchor" href="#组建"><span>组建</span></a></h2>
<p><strong>组建过程可以直接查看 <a href="https://youtube.com/playlist?list=PLJcTwFs4jAY0VnJDXhexZw7X3OIjXQkiY" target="_blank" rel="noopener noreferrer">此 YouTube 播放列表</a></strong></p>
<p>由于原视频已经足够详细，这里仅对一些细节或是视频里面疏忽的地方进行补充</p>
<ol>
<li>
<p>在组建键盘前你可以选择打磨 3D 打印件，以获得更好的手感</p>
</li>
<li>
<p>在<a href="https://www.youtube.com/watch?v=dWC_8BOArzc&amp;list=PLJcTwFs4jAY0VnJDXhexZw7X3OIjXQkiY&amp;index=1" target="_blank" rel="noopener noreferrer">第一个视频</a> 中 第一步你需要先把<em>注塑热容螺母</em>放置到外壳螺母放置位置，用电烙铁加热并轻轻按压</p>
</li>
<li>
<p>在<a href="https://www.youtube.com/watch?v=Oloh3Yabu6I&amp;list=PLJcTwFs4jAY0VnJDXhexZw7X3OIjXQkiY&amp;index=4" target="_blank" rel="noopener noreferrer">第四个视频</a> 18分20秒 你不应该按照视频的颜色链接，而该按照<a href="https://github.com/tshort/dactyl-keyboard/blob/master/resources/dactyl_manuform_left_wire_diagram.png" target="_blank" rel="noopener noreferrer">此图</a>的颜色连接。同时<a href="https://github.com/tshort/dactyl-keyboard/blob/master/resources/dactyl_manuform_right_wire_diagram.png" target="_blank" rel="noopener noreferrer">右侧</a>连接方式也不同</p>
</li>
</ol>
<p><img src="https://cdn.staticaly.com/gh/wivl/dactyl-build-guide@master/pics/dactyl_manuform_left_wire_diagram.png" alt="左侧"></p>
<p><img src="https://cdn.staticaly.com/gh/wivl/dactyl-build-guide@master/pics/dactyl_manuform_right_wire_diagram.png" alt="右侧"></p>
<ol>
<li>在<a href="https://www.youtube.com/watch?v=Oloh3Yabu6I&amp;list=PLJcTwFs4jAY0VnJDXhexZw7X3OIjXQkiY&amp;index=4" target="_blank" rel="noopener noreferrer">第四个视频</a>中作者最后在底板上加了个 <kbd>reset</kbd> 开关，在后面刷固件部分会用到。如果你觉得烦的话你其实可以跳过这步，稍后会讲到替代方法，只是稍微麻烦一点点</li>
</ol>
<h2 id="固件" tabindex="-1"><a class="header-anchor" href="#固件"><span>固件</span></a></h2>
<p>参考<a href="https://www.youtube.com/watch?v=fR-w97o7dgg&amp;list=PLJcTwFs4jAY0VnJDXhexZw7X3OIjXQkiY&amp;index=5" target="_blank" rel="noopener noreferrer">第五个视频</a></p>
<p>首先如果你要跟视频步骤，<em><strong>不要</strong></em> 使用<a href="https://github.com/tshort/qmk_firmware/tree/master/keyboards/dactyl-manuform" target="_blank" rel="noopener noreferrer">此</a>仓库下的固件</p>
<p>Windows 用户请直接按照视频教程 因为在环境准备上需要额外步骤。附上<a href="https://docs.qmk.fm/" target="_blank" rel="noopener noreferrer">qmk文档</a></p>
<p>Linux 和 macOS 可以参考视频直接按照文档步骤，下载时建议使用终端代理</p>
<h3 id="生成-hex-文件" tabindex="-1"><a class="header-anchor" href="#生成-hex-文件"><span>生成 hex 文件</span></a></h3>
<p>视频中作者第一次编译的 <code>keymap</code> 为 <code>default</code>，在之后才演示了如何自定义 <code>keymap</code>。我建议在第一次刷固件之前就修改好自己的 <code>keymap</code>，否则你可能需要重复刷固件多次才能找到你满意的 <code>keymap</code></p>
<p>你可以参考<a href="https://github.com/wivl/configs/tree/main/keymaps" target="_blank" rel="noopener noreferrer">我用的keymap配置文件</a></p>
<p>编译 <code>keymap</code> 请参考视频</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">qmk compile -kb handwired/dactyl_manuform/5x6 -km macos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中 <code>macos</code> 为我自己的 <code>keymap</code> 命名，请换成你自己的</p>
<p>在<a href="https://docs.qmk.fm/#/keycodes_basic" target="_blank" rel="noopener noreferrer">此</a>可以找到 qmk 提供的 keycode</p>
<h3 id="刷固件" tabindex="-1"><a class="header-anchor" href="#刷固件"><span>刷固件</span></a></h3>
<p><strong>刷固件前需要断开连接两个键盘的听筒线，并且两侧都需要刷</strong></p>
<p>在刷固件时，如同视频所说，你需要 <code>reset</code> arduino，但是如果你没有在底板上钻孔设置开关的话，你需要手动进行接线 reset。</p>
<p>首先你需要一根杜邦线</p>
<p><img src="https://cdn.staticaly.com/gh/wivl/dactyl-build-guide@master/pics/杜邦线.png" alt="杜邦线"></p>
<p>然后两端分别连接 <kbd>RST</kbd> 和 <kbd>GND</kbd>。其中 <kbd>GND</kbd> 有 3 个，有一个已经被占用，所以随便选择剩下两个中的一个即可。</p>
<p><img src="https://cdn.staticaly.com/gh/wivl/dactyl-build-guide@master/pics/xarduino_pro_micro_reset_pins.jpg.pagespeed.ic.SDTatP2YA3.webp" alt="arduino 针脚图片"></p>
<p>打开下载好的 <code>qmk toolbox</code>，加载编译好的 <code>.hex</code> 文件</p>
<p>连接 usb 给 arduino 通电的情况下 <code>reset</code>，然后点 <code>flash</code> 按钮。</p>
<blockquote>
<p>如果你发现 reset arduino 后 qmk toolbox 才检测到连接，并且几秒后自动断开，那么你需要在 reset 并且检测到连接后快速进行 flash</p>
</blockquote>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>DEBUG</span></a></h3>
<p>默认设置为将 usb 连接到左侧键盘，即左键盘为 master，右键盘为 slave。
若要使用右侧连接 usb，你可以在 你的 keymap 文件夹中的 <code>config.h</code> 设置</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MASTER_RIGHT</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并注释掉</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MASTER_LEFT</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>
<p>如果 usb 连接在左右键盘都可以使用 （键位是对称的，这是正常情况。这取决于键盘 master-slave 关系的设置）那么固件就是正常工作的。</p>
</li>
<li>
<p>如果某个按键不响应，但是同排同列的按键都正常使用，说明当前按键的某个针脚焊接不到位，可以加一点锡</p>
</li>
<li>
<p>如果某一排或者某一列按键都不响应，可能是连接行或列的线接触不良</p>
</li>
<li>
<p>如果按一个按键触发很多按键，可能是 arduino 针脚接触到了裸露的线缆，可以使用防静电胶布包裹线缆</p>
</li>
<li>
<p>如果刷固件之后 usb 连接两侧都只有 master 可以正常使用，那么可能是你的 rj9 接口线缆接错，参考上面的连接图纠正。正常连接时 slave 的 arduino 将亮黄灯</p>
</li>
<li>
<p>如果排除上述错误 slave 还是不可以使用，在 <code>config.h</code> 里加上</p>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SPLIT_USB_DETECT</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SPLIT_USB_TIMEOUT</span> <span class="token expression"><span class="token number">2000</span></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>
<p><a href="https://www.youtube.com/playlist?list=PLJcTwFs4jAY0VnJDXhexZw7X3OIjXQkiY" target="_blank" rel="noopener noreferrer">Kevin Eckert 的 YouTube 视频</a></p>
<p><a href="https://github.com/tshort/dactyl-keyboard" target="_blank" rel="noopener noreferrer">tshort/dactyl-keyboard</a></p>
<p><a href="https://docs.qmk.fm/" target="_blank" rel="noopener noreferrer">qmk 文档</a></p>
<p><a href="https://www.shellhacks.com/arduino-pro-micro-reset-restore-bootloader/" target="_blank" rel="noopener noreferrer">reset arduino</a></p>
<p><a href="https://github.com/qmk/qmk_firmware/issues/9697" target="_blank" rel="noopener noreferrer">slave 无响应解决方法</a></p>
<p><a href="https://docs.splitkb.com/hc/en-us/articles/360010588860-Only-one-half-of-my-keyboard-works-at-a-time-but-not-when-they-are-both-connected" target="_blank" rel="noopener noreferrer">一些排错</a></p>
</div></template>


