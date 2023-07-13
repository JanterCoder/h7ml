const a=JSON.parse(`{"key":"v-b235ccf0","path":"/posts/javascript/bom/location.html","title":"JavaScript location URL 地址对象","lang":"zh-CN","frontmatter":{"description":"JavaScript location URL 地址对象 完整的 URL 地址： 协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点 如：https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa location.hash // #aaa 哈希值 location.host // 127.0.0.1:5500 域名+端口 location.hostname // 127.0.0.1 域名 location.href // https:127.0.0.1:5500/?a=ssa&amp;bd=asd#aaa url 地址 toString() 也能返回这个值 location.origin // https:127.0.0.1:5500 文件来源地址 location.pathname // /JavaScript.html 文件路径 location.port // 5500 端口 location.protocol // https: 协议 location.search // ?a=ssa&amp;bd=asd 表单提交的数据 location.port = 8080; // 可以用这样的方法修改上面的值，除了 hash 值外，页面都会以新的 URL 重新加载 location = 'http:// www.163.com'; location.assign(url)// 在当前窗口跳转到这个URL location.replace(\\"http:// baidu.com\\"); *// 在当前窗口替换成新的 URL 用户将不能回到前一个页面* location.reload();// 重新加载（可能从缓存中加载） location.reload(true);// 重新加载（从服务器重新加载）","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/bom/location.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/bom/location.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript location URL 地址对象"}],["meta",{"property":"og:description","content":"JavaScript location URL 地址对象 完整的 URL 地址： 协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点 如：https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa location.hash // #aaa 哈希值 location.host // 127.0.0.1:5500 域名+端口 location.hostname // 127.0.0.1 域名 location.href // https:127.0.0.1:5500/?a=ssa&amp;bd=asd#aaa url 地址 toString() 也能返回这个值 location.origin // https:127.0.0.1:5500 文件来源地址 location.pathname // /JavaScript.html 文件路径 location.port // 5500 端口 location.protocol // https: 协议 location.search // ?a=ssa&amp;bd=asd 表单提交的数据 location.port = 8080; // 可以用这样的方法修改上面的值，除了 hash 值外，页面都会以新的 URL 重新加载 location = 'http:// www.163.com'; location.assign(url)// 在当前窗口跳转到这个URL location.replace(\\"http:// baidu.com\\"); *// 在当前窗口替换成新的 URL 用户将不能回到前一个页面* location.reload();// 重新加载（可能从缓存中加载） location.reload(true);// 重新加载（从服务器重新加载）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript location URL 地址对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.78,"words":233},"filePathRelative":"posts/javascript/bom/location.md","localizedDate":"2023年5月3日","excerpt":"<h1> JavaScript location URL 地址对象</h1>\\n<p>完整的 URL 地址：</p>\\n<p>协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点</p>\\n<p>如：<a href=\\"https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa</a></p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>location<span class=\\"token punctuation\\">.</span>hash <span class=\\"token comment\\">// #aaa      哈希值</span>\\nlocation<span class=\\"token punctuation\\">.</span>host <span class=\\"token comment\\">// 127.0.0.1:5500 域名+端口</span>\\nlocation<span class=\\"token punctuation\\">.</span>hostname <span class=\\"token comment\\">// 127.0.0.1  域名</span>\\nlocation<span class=\\"token punctuation\\">.</span>href <span class=\\"token comment\\">// https:127.0.0.1:5500/?a=ssa&amp;bd=asd#aaa url 地址 toString() 也能返回这个值</span>\\nlocation<span class=\\"token punctuation\\">.</span>origin <span class=\\"token comment\\">// https:127.0.0.1:5500 文件来源地址</span>\\nlocation<span class=\\"token punctuation\\">.</span>pathname <span class=\\"token comment\\">// /JavaScript.html 文件路径</span>\\nlocation<span class=\\"token punctuation\\">.</span>port <span class=\\"token comment\\">// 5500 端口</span>\\nlocation<span class=\\"token punctuation\\">.</span>protocol <span class=\\"token comment\\">// https: 协议</span>\\nlocation<span class=\\"token punctuation\\">.</span>search <span class=\\"token comment\\">// ?a=ssa&amp;bd=asd 表单提交的数据</span>\\nlocation<span class=\\"token punctuation\\">.</span>port <span class=\\"token operator\\">=</span> <span class=\\"token number\\">8080</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 可以用这样的方法修改上面的值，除了 hash 值外，页面都会以新的 URL 重新加载</span>\\n\\nlocation <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'http:// www.163.com'</span><span class=\\"token punctuation\\">;</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">assign</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">)</span><span class=\\"token comment\\">// 在当前窗口跳转到这个URL</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replace</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"http:// baidu.com\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token operator\\">*</span><span class=\\"token comment\\">// 在当前窗口替换成新的 URL 用户将不能回到前一个页面*</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reload</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 重新加载（可能从缓存中加载）</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reload</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 重新加载（从服务器重新加载）</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{a as data};
