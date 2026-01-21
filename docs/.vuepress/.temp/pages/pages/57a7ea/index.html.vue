<template><div><p>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</p>
<h3 id="如何在virtualbox上安装arch虚拟机" tabindex="-1"><a class="header-anchor" href="#如何在virtualbox上安装arch虚拟机"><span>如何在virtualBox上安装arch虚拟机</span></a></h3>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span>=======</span></a></h2>
<p>title: 如何在 VirtualBox 上安装 Arch Linux
date: 2023-11-25 14:19:06
permalink: /pages/885974/
categories:</p>
<ul>
<li>教程</li>
<li>精品教程
tags:</li>
<li></li>
</ul>
<hr>
<h4 id="如何在virtualbox上安装arch虚拟机-1" tabindex="-1"><a class="header-anchor" href="#如何在virtualbox上安装arch虚拟机-1"><span>如何在virtualBox上安装arch虚拟机</span></a></h4>
<blockquote>
<blockquote>
<blockquote>
<blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>a5f32a9e8ae4bc927d8e95766f7cec8b518b9f59</p>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
<h4 id="arch与virtualbox介绍" tabindex="-1"><a class="header-anchor" href="#arch与virtualbox介绍"><span>Arch与VirtualBox介绍</span></a></h4>
<h2 id="arch" tabindex="-1"><a class="header-anchor" href="#arch"><span><i><a href="">Arch</a></i>：</span></a></h2>
<p>Arch Linux 是一个独立开发的x86-64架构通用GNU/Linux发行版，它致力于通过滚动更新来提供大多数软件的最新稳定版本。默认安装是一个最小的基本系统，由用户自行添加需要的软件。Arch Linux使用pacman作为包管理器。</p>
<h2 id="virtualbox" tabindex="-1"><a class="header-anchor" href="#virtualbox"><span><a href="">virtualBox</a>：</span></a></h2>
<p>VirtualBox 是一款开源虚拟机软件。VirtualBox 是由德国 Innotek 公司开发，由Sun Microsystems公司出品的软件，使用Qt编写，在 Sun 被 Oracle 收购后正式更名成 Oracle VM VirtualBox。Innotek 以 GNU General Public License (GPL) 释出 VirtualBox，并提供二进制版本及 OSE 版本的代码。使用者可以在VirtualBox上安装并且执行Solaris、Windows、DOS、Linux、OS/2 Warp、BSD等系统作为客户端操作系统。</p>
<hr>
<h4 id="在virtualbox上安装arch" tabindex="-1"><a class="header-anchor" href="#在virtualbox上安装arch"><span>在virtualBox上安装Arch</span></a></h4>
<h5 id="下载arch" tabindex="-1"><a class="header-anchor" href="#下载arch"><span>下载Arch</span></a></h5>
<p>要在 Virtual Box 上安装 Arch Linux，您必须拥有最新的 Arch Linux 版本，您可以从其<a href="https://archlinux.org/" target="_blank" rel="noopener noreferrer">官方网站</a>下载该版本。您可以选择直接下载选项或 torrent 下载（位于安全服务器上）。安装之前，请确保系统中有 20 MB 的可用磁盘空间和 1 GB 的 RAM。</p>
<h5 id="下载virtualbox" tabindex="-1"><a class="header-anchor" href="#下载virtualbox"><span>下载VirtualBox</span></a></h5>
<h5 id="引导在-virtual-box-上安装-arch-linux" tabindex="-1"><a class="header-anchor" href="#引导在-virtual-box-上安装-arch-linux"><span>引导在 Virtual Box 上安装 Arch Linux</span></a></h5>
<p>您将看到 Arch Linux 的第一个打开页面。单击“Boot Arch Linux (x86_64)”（适用于 64 位）或单击“Boot Arch Linux (i686)”（适用于 32 位）。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121211.png?ezimgfmt=rs:550x414/rscb10/ng:webp/ngcb9" alt="">
选择启动Arch Linux
一旦您单击第一个选项，系统就会开始启动。当它完成临时启动时，我们基本上进入实时版本并以根用户身份登录。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121212.png?ezimgfmt=rs:550x311/rscb10/ng:webp/ngcb9" alt="">
启动进入 Arch Linux live 版本</p>
<p>输入以下命令检查 Internet 连接。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"> ping google.com </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>ping 这个词代表数据包互联网地鼠。您很快就会看到表示 Arch Linux 已激活互联网连接的响应。这对于执行某些安装步骤至关重要。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121213.png?ezimgfmt=rs:550x298/rscb10/ng:webp/ngcb9" alt="">
使用 ping 测试互联网连接</p>
<p>通过键入清除命令</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">clear ## 或者使用电脑快捷键ctrl + l</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在开始安装之前，您应该对驱动器进行分区。输入#fdisk –l ，你会看到当前系统的磁盘分区。重点关注您一开始分配给 Arch 的 20 GB 硬盘。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">fsdisk -l</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121214.png?ezimgfmt=rs:550x296/rscb10/ng:webp/ngcb9" alt=""></p>
<!-- 对硬盘进行分区 -->
<h5 id="对硬盘进行分区" tabindex="-1"><a class="header-anchor" href="#对硬盘进行分区"><span>对硬盘进行分区</span></a></h5>
<p>我们将把这 20 GB 空间划分为三个分区。第一个是主根分区，大小为 10 GB。第二个是交换分区，它是初始 RAM 分配的两倍，即 2048 MB。第三个是分配 8 GB 的逻辑分区。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121215.png?ezimgfmt=rs:550x296/rscb10/ng:webp/ngcb9" alt=""></p>
<p>可以分成三个区（根分区+home分区+ 交换分区），也可以分配成两个(根分区+交换分区)，还有更多分区方式，请阅读，</p>
<b>创建3个磁盘分区</b>
<p>输入命令：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">cfdisk</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>您将看到 gpt、dos、sgi 和 sun。选择 dos选项并按Enter。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121216.png?ezimgfmt=rs:550x307/rscb10/ng:webp/ngcb9" alt=""></p>
<p>创建<b>DOS</b>类型的分区</p>
<p>在这里您将看到主磁盘空间，为 20 GB。要更改此设置，请在可用空间上按 <enter> 并输入10G。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121217.png?ezimgfmt=rs:550x321/rscb10/ng:webp/ngcb9" alt="">
选择10GB分区大小</p>
<p>按Enter键，然后单击“primary”分区。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121218.png?ezimgfmt=rs:550x358/rscb10/ng:webp/ngcb9" alt="">
现在，通过在可引导上按 Enter 键来选择“可引导”类型。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121219.png?ezimgfmt=rs:550x338/rscb10/ng:webp/ngcb9" alt="使分区可启动"></p>
<p>进入write并按 Enter 键，将分区写入磁盘。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121220.png?ezimgfmt=rs:550x346/rscb10/ng:webp/ngcb9" alt="将分区写入磁盘"></p>
<p>然后输入yes即可成功进行更改。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121221.png?ezimgfmt=rs:550x354/rscb10/ng:webp/ngcb9" alt="确认更改"></p>
<p>现在 10 GB 分区已创建。点击可用空间，然后输入分区大小2048M。</p>
<p>创建2GB交换分区</p>
<p>现在按照相同的步骤创建逻辑分区。然后按 Enter 键退出并通过键入清除命令</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">clear</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121223.png?ezimgfmt=rs:550x357/rscb10/ng:webp/ngcb9" alt="退出cfdisk"></p>
<p>通过键入以下内容格式化新分区的磁盘：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mkfs.ext4 /dev/sda1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这里 sda1是分区名称。通过键入以下内容对第二个驱动器重复此操作：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mkfs.ext4 /dev/sda3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>对于交换分区，</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mkswap /dev/sda2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121224.png?ezimgfmt=rs:550x312/rscb10/ng:webp/ngcb9" alt="使用 mkswap 格式化交换分区"></p>
<p>输入以下命令激活交换：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">swapon /dev/sda2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并通过键入以下内容清除命令：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">clear</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/121225.png?ezimgfmt=rs:550x327/rscb10/ng:webp/ngcb9" alt="">
通过键入以下命令挂载主分区以开始安装部分：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mount /dev/sda1 /mnt </span>
<span class="line">mkdir /mnt/home</span>
<span class="line">mount /dev/sda3 /mnt/home</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/121226.png" alt="挂载分区"></p>
<h5 id="bootstrap-arch-linux" tabindex="-1"><a class="header-anchor" href="#bootstrap-arch-linux"><span>Bootstrap Arch Linux</span></a></h5>
<p>通过键入以下内容引导系统：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">pacstrap /mnt base base-level linux linux-firmware vim dpchcd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可以看到正在同步数据包。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/121227.png" alt="">
安装将开始，需要几分钟时间。
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/121228.png" alt="">
Arch Linux安装已经开始</p>
<p>基本安装后，通过键入以下命令创建 fstab 文件：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">genfstab /mnt>> /mnt/etc/fstab</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/121229.png" alt="生成/etc/fstab"></p>
<p>配置区域设置、时间和 root 密码。</p>
<p>通过键入以下命令将系统根目录更改为 Arch Linux 安装目录：</p>
<p>arch-chroot /mnt /bin/bash</p>
<p>现在配置语言设置：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">vim /etc/locale.gen</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/121230.png" alt="在 Arch Linux 中设置语言"></p>
<p>通过删除 # 并按 ctrl + x、按y并按Enter选择以下语言配置 (en_US.UTF-8 UTF-8) 。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/121231.png" alt="选择语言"></p>
<p>现在输入以下命令激活它：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">locale-gen</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并按Enter。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/121232.png" alt="在 Arch Linux 中生成语言环境"></p>
<p>通过键入以下内容创建 /etc/locale.conf 文件：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">vim /etc/locale.conf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后按Enter。现在，您可以通过将此行添加到文件中来将您的语言添加到系统中：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">LANG=en_US.UTF-8</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后按 ctrl + x并按y，然后按Enter。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/11.png?ezimgfmt=rs:550x293/rscb10/ng:webp/ngcb9" alt="设置默认语言"></p>
<p>通过键入以下内容同步区域信息：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">ls /usr/share/zoneinfo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>您将找到世界上所有区域的列表。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/12.png?ezimgfmt=rs:550x208/rscb10/ng:webp/ngcb9" alt="设置系统默认语言"></p>
<p>要选择您的区域，请输入：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">ln –s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者您可以从下面的列表中选择任何名称。</p>
<p>使用命令设置时间标准。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">hwclock --systohc --utc</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并且硬件时钟是同步的。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/13.png?ezimgfmt=rs:550x258/rscb10/ng:webp/ngcb9" alt="设置时间"></p>
<p>通过键入以下内容设置 root 用户密码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">passwd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后按Enter。然后输入您的密码并按 Enter 键。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/14.png?ezimgfmt=rs:550x219/rscb10/ng:webp/ngcb9" alt="设置root密码"></p>
<h5 id="设置主机名和网络" tabindex="-1"><a class="header-anchor" href="#设置主机名和网络"><span>设置主机名和网络</span></a></h5>
<p>通过键入以下内容输入网络的主机名：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">vim /etc/hostname</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并按Enter。现在输入任意名称，然后按control + x和y，然后按Enter。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/15.png?ezimgfmt=rs:550x325/rscb10/ng:webp/ngcb9" alt="设置主机名"></p>
<p>通过键入以下内容启用 dhcpcd：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">systemctl enable dhcpcd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并且会在下次启动时自动获取IP地址。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/16.png?ezimgfmt=rs:550x217/rscb10/ng:webp/ngcb9" alt="启用 dhcpd"></p>
<h5 id="安装引导加载程序" tabindex="-1"><a class="header-anchor" href="#安装引导加载程序"><span>安装引导加载程序</span></a></h5>
<p>最后一步，启动 grub 安装。类型：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">pacman –S grub os-prober</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后按y键，下载部分将开始。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/17.png" alt="配置grub"></p>
<p>通过键入以下命令将 grub 引导加载程序安装到硬盘：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">grub-install  /dev/sda</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>并配置它：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">grub-mkconfig –o /boot/grub/grub.cfg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/18.png" alt="安装并配置 grub 引导加载程序"></p>
<p>最后，退出 chroot，然后输入以下命令重新启动系统：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">exit</span>
<span class="line">reboot</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>并按回车键。</p>
<p>重新启动系统</p>
<h5 id="引导至已安装的-archlinux-操作系统" tabindex="-1"><a class="header-anchor" href="#引导至已安装的-archlinux-操作系统"><span>引导至已安装的 ArchLinux 操作系统</span></a></h5>
<p>选择“Boot Existing OS”在 Virtual Box 上启动 Arch Linux。</p>
<p><img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/110.png" alt="引导架构 Linux"></p>
<p>使用您的 root 用户名和密码登录，您将进入新的 Arch Linux 操作系统。</p>
<p>ArchLinux安装成功
<img src="https://www.howtoforge.com/images/install_arch_linux_on_virtual_box/big/111.png" alt=""></p>
<p>后续需要自己安装桌面环境和其他软件，具体请参考这篇文章<a href="https://zhuanlan.zhihu.com/p/405352705" target="_blank" rel="noopener noreferrer">Arch Linux 安装并配置桌面环境</a></p>
</div></template>


