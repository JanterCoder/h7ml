const l=JSON.parse('{"key":"v-1b5614f0","path":"/posts/linux/","title":"Linux 基础操作","lang":"zh-CN","frontmatter":{"icon":"linux","order":1,"date":"2021-06-27T00:00:00.000Z","author":"h7ml","title":"Linux 基础操作","category":"linux","tag":"linux","description":"无界面安装 WARNING 这里不展示虚拟机安装镜像的过程 B 站视频 open in new window installation界面","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/linux/"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/linux/"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"Linux 基础操作"}],["meta",{"property":"og:description","content":"无界面安装 WARNING 这里不展示虚拟机安装镜像的过程 B 站视频 open in new window installation界面"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2021-06-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 基础操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-06-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":3,"title":"无界面安装","slug":"无界面安装","link":"#无界面安装","children":[]},{"level":3,"title":"installation界面","slug":"installation界面","link":"#installation界面","children":[]},{"level":3,"title":"按 5 进行磁盘设置","slug":"按-5-进行磁盘设置","link":"#按-5-进行磁盘设置","children":[]},{"level":3,"title":"按 8 进行秘密设置","slug":"按-8-进行秘密设置","link":"#按-8-进行秘密设置","children":[]},{"level":3,"title":"安装完成","slug":"安装完成","link":"#安装完成","children":[]},{"level":3,"title":"登录","slug":"登录","link":"#登录","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[{"level":3,"title":"/bin","slug":"bin","link":"#bin","children":[]},{"level":3,"title":"/sbin","slug":"sbin","link":"#sbin","children":[]},{"level":3,"title":"/home","slug":"home","link":"#home","children":[]},{"level":3,"title":"/root","slug":"root","link":"#root","children":[]},{"level":3,"title":"/lib","slug":"lib","link":"#lib","children":[]},{"level":3,"title":"/lost+found","slug":"lost-found","link":"#lost-found","children":[]},{"level":3,"title":"/etc","slug":"etc","link":"#etc","children":[]},{"level":3,"title":"/usr","slug":"usr","link":"#usr","children":[]},{"level":3,"title":"/boot","slug":"boot","link":"#boot","children":[]},{"level":3,"title":"/proc","slug":"proc","link":"#proc","children":[]},{"level":3,"title":"/srv","slug":"srv","link":"#srv","children":[]},{"level":3,"title":"/sys","slug":"sys","link":"#sys","children":[]},{"level":3,"title":"/tmp","slug":"tmp","link":"#tmp","children":[]},{"level":3,"title":"/dev","slug":"dev","link":"#dev","children":[]},{"level":3,"title":"/media(CentOS6)","slug":"media-centos6","link":"#media-centos6","children":[]},{"level":3,"title":"/mnt","slug":"mnt","link":"#mnt","children":[]},{"level":3,"title":"/opt","slug":"opt","link":"#opt","children":[]},{"level":3,"title":"/var","slug":"var","link":"#var","children":[]}]},{"level":2,"title":"vim 软键盘","slug":"vim-软键盘","link":"#vim-软键盘","children":[]},{"level":2,"title":"三种使用模式","slug":"三种使用模式","link":"#三种使用模式","children":[{"level":3,"title":"命令模式：","slug":"命令模式","link":"#命令模式","children":[]},{"level":3,"title":"输入模式","slug":"输入模式","link":"#输入模式","children":[]},{"level":3,"title":"底线命令模式","slug":"底线命令模式","link":"#底线命令模式","children":[]},{"level":3,"title":"完整的演示","slug":"完整的演示","link":"#完整的演示","children":[]}]},{"level":2,"title":"Vim 按键说明","slug":"vim-按键说明","link":"#vim-按键说明","children":[{"level":3,"title":"第一部分：一般模式可用的光标移动、复制粘贴、搜索替换等","slug":"第一部分-一般模式可用的光标移动、复制粘贴、搜索替换等","link":"#第一部分-一般模式可用的光标移动、复制粘贴、搜索替换等","children":[]},{"level":3,"title":"第二部分：一般模式切换到编辑模式的可用的按钮说明","slug":"第二部分-一般模式切换到编辑模式的可用的按钮说明","link":"#第二部分-一般模式切换到编辑模式的可用的按钮说明","children":[]},{"level":3,"title":"第三部分：一般模式切换到指令行模式的可用的按钮说明","slug":"第三部分-一般模式切换到指令行模式的可用的按钮说明","link":"#第三部分-一般模式切换到指令行模式的可用的按钮说明","children":[]}]},{"level":2,"title":"查看网络 IP 和 网关","slug":"查看网络-ip-和-网关","link":"#查看网络-ip-和-网关","children":[{"level":3,"title":"查看虚拟网络编辑器","slug":"查看虚拟网络编辑器","link":"#查看虚拟网络编辑器","children":[]},{"level":3,"title":"修改虚拟网卡 Ip","slug":"修改虚拟网卡-ip","link":"#修改虚拟网卡-ip","children":[]},{"level":3,"title":"查看网关","slug":"查看网关","link":"#查看网关","children":[]},{"level":3,"title":"查看 windows 环境的中 VMnet8 网络配置","slug":"查看-windows-环境的中-vmnet8-网络配置","link":"#查看-windows-环境的中-vmnet8-网络配置","children":[]}]},{"level":2,"title":"配置网络 ip 地址","slug":"配置网络-ip-地址","link":"#配置网络-ip-地址","children":[{"level":3,"title":"ifconfig 配置网络接口","slug":"ifconfig-配置网络接口","link":"#ifconfig-配置网络接口","children":[]},{"level":3,"title":"ping 测试主机之间网络连通性","slug":"ping-测试主机之间网络连通性","link":"#ping-测试主机之间网络连通性","children":[]},{"level":3,"title":"修改 IP 地址","slug":"修改-ip-地址","link":"#修改-ip-地址","children":[]},{"level":3,"title":"修改 IP 地址后可能会遇到的问题","slug":"修改-ip-地址后可能会遇到的问题","link":"#修改-ip-地址后可能会遇到的问题","children":[]},{"level":3,"title":"下面是 red hat/CentOs7 关闭防火墙的命令","slug":"下面是-red-hat-centos7-关闭防火墙的命令","link":"#下面是-red-hat-centos7-关闭防火墙的命令","children":[]}]},{"level":2,"title":"配置主机名","slug":"配置主机名","link":"#配置主机名","children":[{"level":3,"title":"修改主机名称","slug":"修改主机名称","link":"#修改主机名称","children":[]},{"level":3,"title":"修改 hosts 映射文件","slug":"修改-hosts-映射文件","link":"#修改-hosts-映射文件","children":[]}]},{"level":2,"title":"远程登录","slug":"远程登录","link":"#远程登录","children":[]},{"level":2,"title":"CentOS Node","slug":"centos-node","link":"#centos-node","children":[]},{"level":2,"title":"第一步 在 CentOS 找好安装位置","slug":"第一步-在-centos-找好安装位置","link":"#第一步-在-centos-找好安装位置","children":[]},{"level":2,"title":"第二步 解压压缩文件","slug":"第二步-解压压缩文件","link":"#第二步-解压压缩文件","children":[]},{"level":2,"title":"第三步 部署 bin 文件并建立软连接（类似于 Windows 中配置环境变量）","slug":"第三步-部署-bin-文件并建立软连接-类似于-windows-中配置环境变量","link":"#第三步-部署-bin-文件并建立软连接-类似于-windows-中配置环境变量","children":[]},{"level":2,"title":"安装 yarn","slug":"安装-yarn","link":"#安装-yarn","children":[{"level":3,"title":"配置yarnopen in new window官方 yum 存储库","slug":"配置yarnopen-in-new-window官方-yum-存储库","link":"#配置yarnopen-in-new-window官方-yum-存储库","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"验证","slug":"验证","link":"#验证","children":[]}]},{"level":2,"title":"Centos7 Mysql 安装","slug":"centos7-mysql-安装","link":"#centos7-mysql-安装","children":[]},{"level":2,"title":"1、下载","slug":"_1、下载","link":"#_1、下载","children":[]},{"level":2,"title":"2、解压","slug":"_2、解压","link":"#_2、解压","children":[]},{"level":2,"title":"3、安装","slug":"_3、安装","link":"#_3、安装","children":[]},{"level":2,"title":"4、问题","slug":"_4、问题","link":"#_4、问题","children":[]},{"level":2,"title":"5、启动","slug":"_5、启动","link":"#_5、启动","children":[{"level":3,"title":"初始化 Nysql","slug":"初始化-nysql","link":"#初始化-nysql","children":[]},{"level":3,"title":"添加权限","slug":"添加权限","link":"#添加权限","children":[]},{"level":3,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":3,"title":"查看初始密码","slug":"查看初始密码","link":"#查看初始密码","children":[]},{"level":3,"title":"登入 Mysql","slug":"登入-mysql","link":"#登入-mysql","children":[]},{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":3,"title":"修改密码","slug":"修改密码","link":"#修改密码","children":[]},{"level":3,"title":"查看数据库","slug":"查看数据库","link":"#查看数据库","children":[]}]},{"level":2,"title":"6、navicat 远程链接","slug":"_6、navicat-远程链接","link":"#_6、navicat-远程链接","children":[{"level":3,"title":"链接失败 1130","slug":"链接失败-1130","link":"#链接失败-1130","children":[]},{"level":3,"title":"链接失败 2059","slug":"链接失败-2059","link":"#链接失败-2059","children":[]}]},{"level":2,"title":"7、Node 链接 Mysql8 的一些问题","slug":"_7、node-链接-mysql8-的一些问题","link":"#_7、node-链接-mysql8-的一些问题","children":[{"level":3,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[]}]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":20.18,"words":6054},"filePathRelative":"posts/linux/README.md","localizedDate":"2021年6月27日","excerpt":"<h3> 无界面安装</h3>\\n<p>WARNING</p>\\n<p>这里不展示虚拟机安装镜像的过程</p>\\n<p><a href=\\"https://www.bilibili.com/video/BV1pT4y1U77E?spm_id_from=333.337.search-card.all.click&amp;vd_source=335bcf5c499188a85a8e39829a56fcae\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">B 站视频 open in new window</a></p>\\n<h3> <code>installation</code>界面</h3>","autoDesc":true}');export{l as data};
