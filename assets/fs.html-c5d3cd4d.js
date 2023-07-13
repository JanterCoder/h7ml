const e=JSON.parse(`{"key":"v-2f989b4b","path":"/posts/interview/NodeJS/fs.html","title":"说说对 Node 中的 fs 模块的理解? 有哪些常用方法","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说对 Node 中的 fs 模块的理解? 有哪些常用方法","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>说说对 Node 中的 fs 模块的理解? 有哪些常用方法","order":3,"star":3,"date":"2023-02-27T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","NodeJS"],"tag":["interview","NodeJS"],"shortTitle":"前端物语|面试物语-说说对 Node 中的 fs 模块的理解? 有哪些常用方法","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说对 Node 中的 fs 模块的理解? 有哪些常用方法"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/NodeJS/fs.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/NodeJS/fs.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说对 Node 中的 fs 模块的理解? 有哪些常用方法"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说对 Node 中的 fs 模块的理解? 有哪些常用方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"说说对 Node 中的 fs 模块的理解? 有哪些常用方法"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"NodeJS"}],["meta",{"property":"article:published_time","content":"2023-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说对 Node 中的 fs 模块的理解? 有哪些常用方法\\",\\"image\\":[\\"https://www.h7ml.cn/logo.png\\"],\\"datePublished\\":\\"2023-02-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[{"level":3,"title":"二、文件知识","slug":"二、文件知识","link":"#二、文件知识","children":[]},{"level":3,"title":"权限位 mode","slug":"权限位-mode","link":"#权限位-mode","children":[]},{"level":3,"title":"标识位","slug":"标识位","link":"#标识位","children":[]},{"level":3,"title":"文件描述为 fd","slug":"文件描述为-fd","link":"#文件描述为-fd","children":[]}]},{"level":2,"title":"三、方法","slug":"三、方法","link":"#三、方法","children":[{"level":3,"title":"文件读取","slug":"文件读取","link":"#文件读取","children":[]},{"level":3,"title":"文件写入","slug":"文件写入","link":"#文件写入","children":[]},{"level":3,"title":"文件追加写入","slug":"文件追加写入","link":"#文件追加写入","children":[]},{"level":3,"title":"文件拷贝","slug":"文件拷贝","link":"#文件拷贝","children":[]},{"level":3,"title":"创建目录","slug":"创建目录","link":"#创建目录","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":5.52,"words":1656},"filePathRelative":"posts/interview/NodeJS/fs.md","localizedDate":"2023年2月27日","excerpt":"<h1> 说说对 Node 中的 fs 模块的理解? 有哪些常用方法</h1>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/a141e5c0-c46a-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2> 一、是什么</h2>\\n<p>fs（filesystem），该模块提供本地文件的读写能力，基本上是<code>POSIX</code>文件操作命令的简单包装</p>"}`);export{e as data};
