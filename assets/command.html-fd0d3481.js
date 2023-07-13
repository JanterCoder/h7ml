import{_ as r,r as c,o,c as n,a as i,b as t,d as l,f as a}from"./app-2a9bb723.js";const h={},d=a('<h1 id="说说-git-常用的命令有哪些" tabindex="-1"><a class="header-anchor" href="#说说-git-常用的命令有哪些" aria-hidden="true">#</a> 说说 Git 常用的命令有哪些？</h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/f66b3290-f7af-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p><code>git</code>的操作可以通过命令的形式如执行，日常使用就如下图 6 个命令即可</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/fe150520-f7af-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实际上，如果想要熟练使用，超过 60 多个命令需要了解，下面则介绍下常见的的<code>git</code>命令</p><h2 id="二、有哪些" tabindex="-1"><a class="header-anchor" href="#二、有哪些" aria-hidden="true">#</a> 二、有哪些</h2><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><code>Git</code>自带一个 <code>git config</code> 的工具来帮助设置控制 <code>Git</code>外观和行为的配置变量，在我们安装完<code>git</code>之后，第一件事就是设置你的用户名和邮件地址</p><p>后续每一个提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改</p><p>设置提交代码时的用户信息命令如下：</p>',11),g={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},s=i("li",null,'git config [--global] user.email "[email address]"',-1),p=a('<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><p>一个<code>git</code>项目的初始有两个途径，分别是：</p><ul><li>git init [project-name]：创建或在当前目录初始化一个 git 代码库</li><li>git clone url：下载一个项目和它的整个代码历史</li></ul><h3 id="日常基本操作" tabindex="-1"><a class="header-anchor" href="#日常基本操作" aria-hidden="true">#</a> 日常基本操作</h3><p>在日常工作中，代码常用的基本操作如下：</p><ul><li>git init 初始化仓库，默认为 master 分支</li><li>git add . 提交全部文件修改到缓存区</li><li>git add &lt;具体某个文件路径+全名&gt; 提交某些文件到缓存区</li><li>git diff 查看当前代码 add 后，会 add 哪些内容</li><li>git diff --staged 查看现在 commit 提交后，会提交哪些内容</li><li>git status 查看当前分支状态</li><li>git pull &lt;远程仓库名&gt; &lt;远程分支名&gt; 拉取远程仓库的分支与本地当前分支合并</li><li>git pull &lt;远程仓库名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt; 拉取远程仓库的分支与本地某个分支合并</li><li>git commit -m &quot;&lt;注释&gt;&quot; 提交代码到本地仓库，并写提交注释</li><li>git commit -v 提交时显示所有 diff 信息</li><li>git commit --amend [file1] [file2] 重做上一次 commit，并包括指定文件的新变化</li></ul><p>关于提交信息的格式，可以遵循以下的规则：</p><ul><li>feat: 新特性，添加功能</li><li>fix: 修改 bug</li><li>refactor: 代码重构</li><li>docs: 文档修改</li><li>style: 代码格式修改, 注意不是 css 修改</li><li>test: 测试用例修改</li><li>chore: 其他修改, 比如构建流程, 依赖管理</li></ul><h3 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h3><ul><li>git branch 查看本地所有分支</li><li>git branch -r 查看远程所有分支</li><li>git branch -a 查看本地和远程所有分支</li><li>git merge &lt;分支名&gt; 合并分支</li><li>git merge --abort 合并分支出现冲突时，取消合并，一切回到合并前的状态</li><li>git branch &lt;新分支名&gt; 基于当前分支，新建一个分支</li><li>git checkout --orphan &lt;新分支名&gt; 新建一个空分支（会保留之前分支的所有文件）</li><li>git branch -D &lt;分支名&gt; 删除本地某个分支</li><li>git push &lt;远程库名&gt; :&lt;分支名&gt; 删除远程某个分支</li><li>git branch &lt;新分支名称&gt; &lt;提交 ID&gt; 从提交历史恢复某个删掉的某个分支</li><li>git branch -m &lt;原分支名&gt; &lt;新分支名&gt; 分支更名</li><li>git checkout &lt;分支名&gt; 切换到本地某个分支</li><li>git checkout &lt;远程库名&gt;/&lt;分支名&gt; 切换到线上某个分支</li><li>git checkout -b &lt;新分支名&gt; 把基于当前分支新建分支，并切换为这个分支</li></ul><h3 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步" aria-hidden="true">#</a> 远程同步</h3><p>远程操作常见的命令：</p><ul><li>git fetch [remote] 下载远程仓库的所有变动</li><li>git remote -v 显示所有远程仓库</li><li>git pull [remote] [branch] 拉取远程仓库的分支与本地当前分支合并</li><li>git fetch 获取线上最新版信息记录，不合并</li><li>git push [remote] [branch] 上传本地指定分支到远程仓库</li><li>git push [remote] --force 强行推送当前分支到远程仓库，即使有冲突</li><li>git push [remote] --all 推送所有分支到远程仓库</li></ul><h3 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h3><ul><li><p>git checkout [file] 恢复暂存区的指定文件到工作区</p></li><li><p>git checkout [commit] [file] 恢复某个 commit 的指定文件到暂存区和工作区</p></li><li><p>git checkout . 恢复暂存区的所有文件到工作区</p></li><li><p>git reset [commit] 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</p></li><li><p>git reset --hard 重置暂存区与工作区，与上一次 commit 保持一致</p></li><li><p>git reset [file] 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</p></li><li><p>git revert [commit] 后者的所有变化都将被前者抵消，并且应用到当前分支</p></li></ul><blockquote><p><code>reset</code>：真实硬性回滚，目标版本后面的提交记录全部丢失了</p><p><code>revert</code>：同样回滚，这个回滚操作相当于一个提价，目标版本后面的提交记录也全部都有</p></blockquote><h3 id="存储操作" tabindex="-1"><a class="header-anchor" href="#存储操作" aria-hidden="true">#</a> 存储操作</h3><p>你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作，但又不想提交这些杂乱的代码，这时候可以将代码进行存储</p><ul><li><p>git stash 暂时将未提交的变化移除</p></li><li><p>git stash pop 取出储藏中最后存入的工作状态进行恢复，会删除储藏</p></li><li><p>git stash list 查看所有储藏中的工作</p></li><li><p>git stash apply &lt;储藏的名称&gt; 取出储藏中对应的工作状态进行恢复，不会删除储藏</p></li><li><p>git stash clear 清空所有储藏中的工作</p></li><li><p>git stash drop &lt;储藏的名称&gt; 删除对应的某个储藏</p></li></ul><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p><code>git</code>常用命令速查表如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/0a10f3c0-f7b0-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>',23),f={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://segmentfault.com/a/1190000017875714",target:"_blank",rel:"noopener noreferrer"};function m(b,_){const e=c("ExternalLinkIcon");return o(),n("div",null,[d,i("ul",null,[i("li",null,[t("git config [--global] "),i("a",g,[t("user.name"),l(e)]),t(' "[name]"')]),s]),p,i("ul",null,[i("li",null,[i("p",null,[i("a",f,[t("https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),l(e)])])]),i("li",null,[i("p",null,[i("a",u,[t("https://segmentfault.com/a/1190000017875714"),l(e)])])])])])}const k=r(h,[["render",m],["__file","command.html.vue"]]);export{k as default};
