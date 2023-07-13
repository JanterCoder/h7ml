const t=JSON.parse('{"key":"v-02d57910","path":"/posts/designPattern/memorandum.html","title":"备忘录模式","lang":"zh-CN","frontmatter":{"title":"备忘录模式","category":["设计模式","frontend"],"tag":["设计模式","frontend"],"author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","date":"2022-03-03T08:12:19.000Z","description":"备忘录模式主要是用于来防丢失、撤销、恢复等场景，定义是：在不违背封装原则的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，以便之后恢复对象为先前的状态。 需要三个类， Memento 类提供保存对象和得到对象的方法， Originator 类利用 Memento 类提供保存和读取自身状态的方法，Caretaker 类来记录所有的备份。 把 维基百科 的例子贴过来。","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/designPattern/memorandum.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/designPattern/memorandum.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"备忘录模式"}],["meta",{"property":"og:description","content":"备忘录模式主要是用于来防丢失、撤销、恢复等场景，定义是：在不违背封装原则的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，以便之后恢复对象为先前的状态。 需要三个类， Memento 类提供保存对象和得到对象的方法， Originator 类利用 Memento 类提供保存和读取自身状态的方法，Caretaker 类来记录所有的备份。 把 维基百科 的例子贴过来。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"备忘录模式"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:published_time","content":"2022-03-03T08:12:19.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"备忘录模式\\",\\"image\\":[\\"https://www.h7ml.cn/logo.png\\"],\\"datePublished\\":\\"2022-03-03T08:12:19.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"posts/designPattern/memorandum.md","localizedDate":"2022年3月3日","excerpt":"<p>备忘录模式主要是用于来防丢失、撤销、恢复等场景，定义是：在不违背封装原则的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，以便之后恢复对象为先前的状态。</p>\\n<p>需要三个类， <code>Memento</code> 类提供保存对象和得到对象的方法， <code>Originator</code> 类利用 <code>Memento</code> 类提供保存和读取自身状态的方法，<code>Caretaker</code> 类来记录所有的备份。</p>\\n<p>把 <a href=\\"https://en.wikipedia.org/wiki/Memento_pattern\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">维基百科</a> 的例子贴过来。</p>","autoDesc":true}');export{t as data};
