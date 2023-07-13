const e=JSON.parse('{"key":"v-71bb5e9c","path":"/posts/javascript/inheritance.html","title":"JavaScript 原型与继承","lang":"zh-CN","frontmatter":{"icon":"javascript","order":3,"date":"2019-09-16T00:00:00.000Z","author":"h7ml","title":"JavaScript 原型与继承","category":"javascript","tag":"javascript","star":true,"description":"简单讲讲 js 的继承，也是 js 的原型链问题的实际应用。 原型 原型和原型链都是来源于对象而服务于对象的概念： JavaScript 中一切引用类型都是对象，对象就是属性的集合。 Array 类型、Function 类型、Object 类型、Date 类型、RegExp 类型等都是引用类型。 原型与原型链 每一个对象从被创建开始就和另一个对象关联，从另一个对象上继承其属性，这个另一个对象就是原型。 当访问一个对象的属性时，先在对象的本身找，找不到就去对象的原型上找，如果还是找不到，就去对象的原型的原型上找，如此继续，直到找到为止。如果在最顶层的原型对象也没有找到，就返回undefined。这条由对象及其原型组成的链就叫做原型链。","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/inheritance.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/inheritance.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript 原型与继承"}],["meta",{"property":"og:description","content":"简单讲讲 js 的继承，也是 js 的原型链问题的实际应用。 原型 原型和原型链都是来源于对象而服务于对象的概念： JavaScript 中一切引用类型都是对象，对象就是属性的集合。 Array 类型、Function 类型、Object 类型、Date 类型、RegExp 类型等都是引用类型。 原型与原型链 每一个对象从被创建开始就和另一个对象关联，从另一个对象上继承其属性，这个另一个对象就是原型。 当访问一个对象的属性时，先在对象的本身找，找不到就去对象的原型上找，如果还是找不到，就去对象的原型的原型上找，如此继续，直到找到为止。如果在最顶层的原型对象也没有找到，就返回undefined。这条由对象及其原型组成的链就叫做原型链。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:published_time","content":"2019-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 原型与继承\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"原型","slug":"原型","link":"#原型","children":[]},{"level":2,"title":"原型与原型链","slug":"原型与原型链","link":"#原型与原型链","children":[{"level":3,"title":"原型的意义","slug":"原型的意义","link":"#原型的意义","children":[]},{"level":3,"title":"访问原型链","slug":"访问原型链","link":"#访问原型链","children":[]},{"level":3,"title":"原型链示意图","slug":"原型链示意图","link":"#原型链示意图","children":[]},{"level":3,"title":"简单总结","slug":"简单总结","link":"#简单总结","children":[]}]},{"level":2,"title":"创建对象","slug":"创建对象","link":"#创建对象","children":[{"level":3,"title":"工厂模式","slug":"工厂模式","link":"#工厂模式","children":[]},{"level":3,"title":"构造函数模式","slug":"构造函数模式","link":"#构造函数模式","children":[]},{"level":3,"title":"instanceof 原理","slug":"instanceof-原理","link":"#instanceof-原理","children":[]},{"level":3,"title":"原型模式","slug":"原型模式","link":"#原型模式","children":[]},{"level":3,"title":"组合构造函数","slug":"组合构造函数","link":"#组合构造函数","children":[]},{"level":3,"title":"创建对象总结","slug":"创建对象总结","link":"#创建对象总结","children":[]}]},{"level":2,"title":"继承","slug":"继承","link":"#继承","children":[{"level":3,"title":"原型链继承","slug":"原型链继承","link":"#原型链继承","children":[]},{"level":3,"title":"借用构造函数","slug":"借用构造函数","link":"#借用构造函数","children":[]},{"level":3,"title":"组合继承","slug":"组合继承","link":"#组合继承","children":[]},{"level":3,"title":"寄生组合继承","slug":"寄生组合继承","link":"#寄生组合继承","children":[]},{"level":3,"title":"继承的总结","slug":"继承的总结","link":"#继承的总结","children":[]}]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":8.91,"words":2672},"filePathRelative":"posts/javascript/inheritance.md","localizedDate":"2019年9月16日","excerpt":"<p>简单讲讲 js 的继承，也是 js 的原型链问题的实际应用。</p>\\n<h2> 原型</h2>\\n<p>原型和原型链都是来源于对象而服务于对象的概念：</p>\\n<p>JavaScript 中一切引用类型都是对象，对象就是属性的集合。</p>\\n<p>Array 类型、Function 类型、Object 类型、Date 类型、RegExp 类型等都是引用类型。</p>\\n<h2> 原型与原型链</h2>\\n<p>每一个对象从被创建开始就和另一个对象关联，从另一个对象上继承其属性，这个另一个对象就是原型。</p>\\n<p>当访问一个对象的属性时，先在对象的本身找，找不到就去对象的原型上找，如果还是找不到，就去对象的原型的原型上找，如此继续，直到找到为止。如果在最顶层的原型对象也没有找到，就返回<code>undefined</code>。这条由对象及其原型组成的链就叫做原型链。</p>","autoDesc":true}');export{e as data};
