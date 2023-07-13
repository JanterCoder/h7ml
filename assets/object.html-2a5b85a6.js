const e=JSON.parse(`{"key":"v-bc85a660","path":"/posts/interview/es6/object.html","title":"对象新增了哪些扩展？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语- 对象新增了哪些扩展？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>对象新增了哪些扩展？","order":1,"star":1,"date":"2023-02-24T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","es6"],"tag":["interview","es6"],"shortTitle":"前端物语|面试物语- 对象新增了哪些扩展？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"对象新增了哪些扩展？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/es6/object.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/es6/object.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"对象新增了哪些扩展？"}],["meta",{"property":"og:description","content":"前端物语|面试物语- 对象新增了哪些扩展？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"对象新增了哪些扩展？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:published_time","content":"2023-02-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象新增了哪些扩展？\\",\\"image\\":[\\"https://www.h7ml.cn/logo.png\\"],\\"datePublished\\":\\"2023-02-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、属性的简写","slug":"一、属性的简写","link":"#一、属性的简写","children":[]},{"level":2,"title":"二、属性名表达式","slug":"二、属性名表达式","link":"#二、属性名表达式","children":[]},{"level":2,"title":"三、super 关键字","slug":"三、super-关键字","link":"#三、super-关键字","children":[]},{"level":2,"title":"四、扩展运算符的应用","slug":"四、扩展运算符的应用","link":"#四、扩展运算符的应用","children":[]},{"level":2,"title":"五、属性的遍历","slug":"五、属性的遍历","link":"#五、属性的遍历","children":[]},{"level":2,"title":"六、对象新增的方法","slug":"六、对象新增的方法","link":"#六、对象新增的方法","children":[{"level":3,"title":"Object.is()","slug":"object-is","link":"#object-is","children":[]},{"level":3,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[]},{"level":3,"title":"Object.getOwnPropertyDescriptors()","slug":"object-getownpropertydescriptors","link":"#object-getownpropertydescriptors","children":[]},{"level":3,"title":"Object.setPrototypeOf()","slug":"object-setprototypeof","link":"#object-setprototypeof","children":[]},{"level":3,"title":"Object.getPrototypeOf()","slug":"object-getprototypeof","link":"#object-getprototypeof","children":[]},{"level":3,"title":"Object.keys()","slug":"object-keys","link":"#object-keys","children":[]},{"level":3,"title":"Object.values()","slug":"object-values","link":"#object-values","children":[]},{"level":3,"title":"Object.entries()","slug":"object-entries","link":"#object-entries","children":[]},{"level":3,"title":"Object.fromEntries()","slug":"object-fromentries","link":"#object-fromentries","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":4.6,"words":1380},"filePathRelative":"posts/interview/es6/object.md","localizedDate":"2023年2月24日","excerpt":"<h1> 对象新增了哪些扩展？</h1>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/4da4dd40-5427-11eb-ab90-d9ae814b240d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2> 一、属性的简写</h2>\\n<p>ES6 中，当对象键名与对应值名相等的时候，可以进行简写</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> baz <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">foo</span><span class=\\"token operator\\">:</span> foo <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 等同于</span>\\n<span class=\\"token keyword\\">const</span> baz <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> foo <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{e as data};
