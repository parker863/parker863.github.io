<template><div><h1 id="vbox6-识别虚拟机识连接u盘" tabindex="-1"><a class="header-anchor" href="#vbox6-识别虚拟机识连接u盘"><span>VBox6 识别虚拟机识连接U盘</span></a></h1>
<p>如果升级 <code v-pre>7.0.x</code> 会导致 华三云 无法启动，这里向大家介绍 <code v-pre>6.1.x</code> 版本将U盘接入虚拟机的方法</p>
<!-- more -->
<h2 id="下载对应版本的-extension-pack" tabindex="-1"><a class="header-anchor" href="#下载对应版本的-extension-pack"><span>下载对应版本的 Extension_Pack</span></a></h2>
<p><a href="https://download.virtualbox.org/virtualbox/" target="_blank" rel="noopener noreferrer">下载地址</a></p>
<p>找到对应版本 <code v-pre>6.1.xx</code></p>
<p>进入后下载 <code v-pre> Oracle_VM_VirtualBox_Extension_Pack-6.1.xx.vbox-extpack</code></p>
<h2 id="安装扩展包" tabindex="-1"><a class="header-anchor" href="#安装扩展包"><span>安装扩展包</span></a></h2>
<p>关闭所有虚拟机</p>
<p>双击安装扩展包</p>
<p>如果你找不到打开应用</p>
<p>那么请到 <code v-pre>virtualbox</code> 的 <code v-pre>全局设定 -&gt; 扩展</code> 中去安装</p>
<p>若未找到请到 <code v-pre>管理 -&gt; 工具 -&gt; extension pack manager</code> 中安装</p>
<h2 id="更改为usb2-0控制器" tabindex="-1"><a class="header-anchor" href="#更改为usb2-0控制器"><span>更改为USB2.0控制器</span></a></h2>
<p>关闭虚拟机</p>
<p>打开对应虚拟机的设置</p>
<p>选择 <code v-pre>USB 设备 -&gt; 启用USB设备控制器 -&gt; USB 2.0 (OHCI + EHCI)控制器</code></p>
<h2 id="插入u盘" tabindex="-1"><a class="header-anchor" href="#插入u盘"><span>插入U盘</span></a></h2>
<p>缓慢插入U盘</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>一定要慢，一旦物理机识别到U盘 <strong>迅速停下</strong></p>
</div>
<p>打开虚拟机，此时U盘既可以接入虚拟机了</p>
</div></template>


