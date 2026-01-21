<template><div><h1 id="windows下使用包管理器快速初始化编程环境" tabindex="-1"><a class="header-anchor" href="#windows下使用包管理器快速初始化编程环境"><span>windows下使用包管理器快速初始化编程环境</span></a></h1>
<blockquote>
<p>支持 <code v-pre>win7</code> 及以上的 <code v-pre>windows</code> 系统,
将会用到开源第三方包管理器 <em><a href="https://scoop.sh/" target="_blank" rel="noopener noreferrer"><code v-pre>scoop</code></a></em>,
需要<code v-pre>PowerShell 5.x</code>以上以及<code v-pre>.Net Framework 4.5</code>及以上,
所有的文件都将安装到 <code v-pre>C:\Users\Username\scoop\apps</code>目录下</p>
</blockquote>
<h2 id="安装-scoop" tabindex="-1"><a class="header-anchor" href="#安装-scoop"><span>安装 <em><a href="https://scoop.sh/" target="_blank" rel="noopener noreferrer"><code v-pre>scoop</code></a></em></span></a></h2>
<p>打开 <code v-pre>PowerShell</code></p>
<p>运行以下命令:</p>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">Set-ExecutionPolicy RemoteSigned -scope CurrentUser</span>
<span class="line">iwr -useb get.scoop.sh | iex</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出以下内容</p>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">PS C:\Users\WDAGUtilityAccount&gt; Set-ExecutionPolicy RemoteSigned -scope CurrentUser</span>
<span class="line">Execution Policy Change</span>
<span class="line">The execution policy helps protect you from scripts that you do not trust.</span>
<span class="line">Changing the execution policy might expose   you to the security risks described in the about_Execution_Policies help topic at</span>
<span class="line">https:/go.microsoft.com/fwlink/?LinkID=135170.</span>
<span class="line">Do you want to change the execution policy?</span>
<span class="line">[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is &quot;N&quot;): </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 <code v-pre>A</code> 后回车, 等待安装完成</p>
<p>运行:</p>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">scoop help</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果输入以下内容则安装成功:</p>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">PS C:\User\WDAGUtilityAccount scoop help</span>
<span class="line">Usage: scoop &lt;command&gt; [&lt;args&gt;]</span>
<span class="line"></span>
<span class="line">Some useful commands are:</span>
<span class="line"></span>
<span class="line">alias       Manage scoop aliases</span>
<span class="line">bucket      Manage Scoop buckets</span>
<span class="line">cache       Show or clear the download cache</span>
<span class="line">cat         Show content of specified manifest. If available, `bat` will be used to pretty-print the JSON.</span>
<span class="line">checkup     Check for potential problems</span>
<span class="line">cleanup     Cleanup apps by removing old versions</span>
<span class="line">config      Get or set configuration values</span>
<span class="line">create      Create a custom app manifest</span>
<span class="line">depends     List dependencies for an app</span>
<span class="line">download    Download apps in the cache folder and verify hashes</span>
<span class="line">export      Exports (an importable) list of installed apps</span>
<span class="line">help        Show help for a command</span>
<span class="line">hold        Hold an app to disable updates</span>
<span class="line">home        Opens the app homepage</span>
<span class="line">info        Display information about an app</span>
<span class="line">install     Install apps</span>
<span class="line">list        List installed apps</span>
<span class="line">prefix      Returns the path to the specified app</span>
<span class="line">reset       Reset an app to resolve conflicts</span>
<span class="line">search      Search available apps</span>
<span class="line">shim        Manipulate Scoop shims</span>
<span class="line">status      Show status and check for new app versions</span>
<span class="line">unhold      Unhold an app to enable updates</span>
<span class="line">uninstall   Uninstall an app</span>
<span class="line">update      Update apps, or Scoop itself</span>
<span class="line">virustotal  Look for app's hash on virustotal.com</span>
<span class="line">which       Locate a shim/executable (similar to 'which' on Linux)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Type 'scoop help &lt;command&gt;' to get help for a specific command.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装依赖 <code v-pre>git</code> <code v-pre>7-zip</code> 版本控制器和解压工具</p>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">scoop install git 7-zip</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="安装编程所需的环境" tabindex="-1"><a class="header-anchor" href="#安装编程所需的环境"><span>安装编程所需的环境</span></a></h2>
<h3 id="安装-c-环境" tabindex="-1"><a class="header-anchor" href="#安装-c-环境"><span>安装 <code v-pre>C++</code> 环境</span></a></h3>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">scoop install mingw-winlibs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="检查gcc版本" tabindex="-1"><a class="header-anchor" href="#检查gcc版本"><span>检查<code v-pre>gcc</code>版本</span></a></h3>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">gcc -v</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="安装-python-环境" tabindex="-1"><a class="header-anchor" href="#安装-python-环境"><span>安装 <code v-pre>Python</code> 环境</span></a></h3>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">scoop install python</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="检查python版本" tabindex="-1"><a class="header-anchor" href="#检查python版本"><span>检查<code v-pre>Python</code>版本</span></a></h3>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">python -V</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="安装-java17-环境" tabindex="-1"><a class="header-anchor" href="#安装-java17-环境"><span>安装 <code v-pre>Java17</code> 环境</span></a></h3>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">scoop bucket add java # 添加java的bucket</span>
<span class="line">scoop install java/openjdk17</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查java版本" tabindex="-1"><a class="header-anchor" href="#检查java版本"><span>检查<code v-pre>Java</code>版本</span></a></h3>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">java --version</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>java仍需自己手动配置<code v-pre>JAVA_HOME</code></p>
<blockquote>
<p>如果有其它<code v-pre>Java</code>版本需求可以在添加<code v-pre>bucket</code>之后
使用 <code v-pre>scoop search openjdk</code> 检索自己需要的版本之后安装</p>
</blockquote>
<h2 id="错误解决" tabindex="-1"><a class="header-anchor" href="#错误解决"><span>错误解决</span></a></h2>
<h3 id="无法以administrator运行" tabindex="-1"><a class="header-anchor" href="#无法以administrator运行"><span>无法以<code v-pre>administrator</code>运行</span></a></h3>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">PS C:\Users\WDAGUtilityAccount&gt; iwr -useb get.scoop.sh | iex                                                           </span>
<span class="line">Initializing..                                                             </span>
<span class="line">Running the installer as administrator is disabled by default, see https://github.com/ScoopInstaller/Install#for-admin for details.                                                    </span>
<span class="line">Abort. </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更换安装命令:</p>
<div class="language-ps1 line-numbers-mode" data-highlighter="prismjs" data-ext="ps1"><pre v-pre><code><span class="line">iwr -useb get.scoop.sh -outfile 'install.ps1'</span>
<span class="line">.\install.ps1 -RunAsAdmin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


