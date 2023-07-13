const a=JSON.parse('{"key":"v-8d51314c","path":"/posts/ecmascript/async.html","title":"JavaScript ES6 async 函数","lang":"zh-CN","frontmatter":{"description":"JavaScript ES6 async 函数 async 函数返回 Promise 对象，用同步流程来表达异步操作 虽然返回的是 Promise 对象，但不能在 async 函数中调用 resolve，reject 函数 async 可以单独使用，await 只能在 async 函数中使用 调用 async 函数会立即执行，遇到 await 关键字会暂停执行，await 后的指向完成后，async 函数接着执行。 如果 await 后的异步需要时间，await 下一行会接着执行，导致 await 的结果比下一行代码后得到 解决异步需要时间的问题，await 等待的是 Promise 的结果。所以 await 后面配合 Promise 执行异步函数，但 await 不能处理 Promise 失败后的结果 解决失败结果方法一：await prm().catch(e =&gt; {}); 阅读不方便 解决方法二 ： 在 prm() 结果中不管成功还是失败,都调用 resolve 方法,成功传[null,数据]，失败传 [err]; await 执行后 [e,d]=await prm(); 结构判断 e 是否出错","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/ecmascript/async.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/ecmascript/async.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript ES6 async 函数"}],["meta",{"property":"og:description","content":"JavaScript ES6 async 函数 async 函数返回 Promise 对象，用同步流程来表达异步操作 虽然返回的是 Promise 对象，但不能在 async 函数中调用 resolve，reject 函数 async 可以单独使用，await 只能在 async 函数中使用 调用 async 函数会立即执行，遇到 await 关键字会暂停执行，await 后的指向完成后，async 函数接着执行。 如果 await 后的异步需要时间，await 下一行会接着执行，导致 await 的结果比下一行代码后得到 解决异步需要时间的问题，await 等待的是 Promise 的结果。所以 await 后面配合 Promise 执行异步函数，但 await 不能处理 Promise 失败后的结果 解决失败结果方法一：await prm().catch(e =&gt; {}); 阅读不方便 解决方法二 ： 在 prm() 结果中不管成功还是失败,都调用 resolve 方法,成功传[null,数据]，失败传 [err]; await 执行后 [e,d]=await prm(); 结构判断 e 是否出错"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript ES6 async 函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"posts/ecmascript/async.md","localizedDate":"2023年5月3日","excerpt":"<h1> JavaScript ES6 async 函数</h1>\\n<ol>\\n<li>async 函数返回 Promise 对象，用同步流程来表达异步操作</li>\\n<li>虽然返回的是 Promise 对象，但不能在 async 函数中调用 resolve，reject 函数</li>\\n<li>async 可以单独使用，await 只能在 async 函数中使用</li>\\n<li>调用 async 函数会立即执行，遇到 await 关键字会暂停执行，await 后的指向完成后，async 函数接着执行。</li>\\n<li>如果 await 后的异步需要时间，await 下一行会接着执行，导致 await 的结果比下一行代码后得到</li>\\n<li>解决异步需要时间的问题，await 等待的是 Promise 的结果。所以 await 后面配合 Promise 执行异步函数，但 await 不能处理 Promise 失败后的结果</li>\\n<li>解决失败结果方法一：await prm().catch(e =&gt; {}); 阅读不方便</li>\\n<li>解决方法二 ： 在 prm() 结果中不管成功还是失败,都调用 resolve 方法,成功传[null,数据]，失败传 [err]; await 执行后 [e,d]=await prm(); 结构判断 e 是否出错</li>\\n</ol>","autoDesc":true}');export{a as data};
