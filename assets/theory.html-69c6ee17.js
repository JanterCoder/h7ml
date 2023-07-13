import{_ as u,r as o,o as p,c,a,b as n,d as s,w as i,f as t}from"./app-2a9bb723.js";const r={},d=t(`<h2 id="在父组件中监听子组件的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#在父组件中监听子组件的生命周期钩子" aria-hidden="true">#</a> 在父组件中监听子组件的生命周期钩子</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name"><span class="token namespace">@hook:</span>mounted</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChildMounted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">onChildMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={href:"https://github.com/vuejs/vue/blob/dev/src/core/instance/lifecycle.js#L347",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="在-methods-中使用-debounce-throttle" tabindex="-1"><a class="header-anchor" href="#在-methods-中使用-debounce-throttle" aria-hidden="true">#</a> 在 methods 中使用 debounce / throttle</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash-es&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">handleClick</span><span class="token operator">:</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"https://cn.vuejs.org/v2/guide/migration.html#%E5%B8%A6%E6%9C%89-debounce-%E7%9A%84-v-model%E7%A7%BB%E9%99%A4",target:"_blank",rel:"noopener noreferrer"},m=t('<h2 id="_1、组件化" tabindex="-1"><a class="header-anchor" href="#_1、组件化" aria-hidden="true">#</a> 1、组件化</h2><h3 id="组件化基础" tabindex="-1"><a class="header-anchor" href="#组件化基础" aria-hidden="true">#</a> 组件化基础</h3><ul><li><p>MVVM 模型</p><ul><li>模型-视图-视图模型。</li><li>模型（Model）指的是后端传递的数据。视图(View)指的是所看到的页面。视图模型(ViewModel)是 mvvm 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：一是将模型（Model）转化成视图(View)，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将视图(View)转化成模型(Model)，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。</li></ul></li><li><p>MVC</p><ul><li>模型-视图-控制器。</li><li>M 和 V 指的意思和 MVVM 中的 M 和 V 意思一样。 C 即 Controller 指的是页面业务逻辑。使用 MVC 的目的就是将 M 和 V 的代码分离。 MVC 是单向通信。也就是 View 跟 Model，必须通过 Controller 来承上启下。 MVC 和 MVVM 的区别并不是 VM 完全取代了 C，只是在 MVC 的基础上增加了一层 VM，只不过是弱化了 C 的概念，ViewModel 存在目的在于抽离 Controller 中展示的业务逻辑，而不是替代 Controller，其它视图操作业务等还是应该放在 Controller 中实现。也就是说 MVVM 实现的是业务逻辑组件的重用，使开发更高效，结构更清晰，增加代码的复用性。</li></ul></li></ul><h3 id="数据驱动视图" tabindex="-1"><a class="header-anchor" href="#数据驱动视图" aria-hidden="true">#</a> 数据驱动视图</h3><ul><li>传统组件，只是静态渲染，更新还要依赖操作 DOM</li><li>数据驱动视图 - Vue MVVM</li><li>数据驱动视图 - React setState</li></ul><h2 id="_2、响应式" tabindex="-1"><a class="header-anchor" href="#_2、响应式" aria-hidden="true">#</a> 2、响应式</h2>',6),f=a("li",null,"vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；",-1),g=a("li",null,"监听对象（深度），监听数组",-1),Q=a("li",null,"深度监听，需要递归到底，一次性计算量大",-1),T=a("li",null,"无法监听新增属性/删除属性（Vue.set Vue.delete）",-1),b=t('<p>Object.defineproperty.html</p><h2 id="_3、vdom-和-diff" tabindex="-1"><a class="header-anchor" href="#_3、vdom-和-diff" aria-hidden="true">#</a> 3、vdom 和 diff</h2><ul><li>应用背景 <ul><li>vdom 是实现 vue 和 react 的重要基石</li><li>diff 算法是 vdom 中最核心、最关键的部分</li><li>vdom 是一个热门话题，也是面试中的热门问题</li><li>DOM 操作非常耗费性能</li><li>以前用 jQuery，可以自行控制 DOM 操作的时机，手动调整</li><li>Vue 和 React 是数据驱动视图，如何有效控制 DOM 操作</li></ul></li><li>解决方案 - vdom <ul><li>有了一定复杂度，想减少计算次数比较难</li><li>能不能吧计算，更多的转移为 JS 计算？因为 JS 执行速度很快</li><li>vdom - 用 JS 模拟 DOM 结构，计算出最小的变更，操作 DOM</li></ul></li><li>vnode 结构</li><li>snabbdom 使用：vnode h patch</li></ul><h3 id="diff-算法" tabindex="-1"><a class="header-anchor" href="#diff-算法" aria-hidden="true">#</a> diff 算法</h3><ul><li>diff 算法是 vdom 中最核心、最关键的部分</li><li>diff 算法能在日常使用 vue React 中体现出来（如 key）</li><li>diff 算法是前端热门话题</li></ul><h4 id="diff-算法概述" tabindex="-1"><a class="header-anchor" href="#diff-算法概述" aria-hidden="true">#</a> diff 算法概述</h4>',6),x=a("li",null,"diff 即对比，是一个广泛的概念，如 linux diff 命令、git diff 等",-1),_={href:"https://gethub.com/cujojs/jiff",target:"_blank",rel:"noopener noreferrer"},y=t('<h2 id="_4、模版编译" tabindex="-1"><a class="header-anchor" href="#_4、模版编译" aria-hidden="true">#</a> 4、模版编译</h2><ul><li>with 语法</li><li>模版编译为 render 函数</li><li>执行 render 函数生成 vdom</li></ul><h2 id="_5、渲染过程" tabindex="-1"><a class="header-anchor" href="#_5、渲染过程" aria-hidden="true">#</a> 5、渲染过程</h2><ul><li>初次渲染过程</li><li>更新过程</li><li>异步渲染</li></ul><h2 id="_6、前端路由" tabindex="-1"><a class="header-anchor" href="#_6、前端路由" aria-hidden="true">#</a> 6、前端路由</h2><ul><li>hash</li><li>h5 history</li><li>两者对比</li></ul><h2 id="_7、vue-面试真题演练" tabindex="-1"><a class="header-anchor" href="#_7、vue-面试真题演练" aria-hidden="true">#</a> 7、vue 面试真题演练</h2><h3 id="_1、v-show-和-v-if-的区别" tabindex="-1"><a class="header-anchor" href="#_1、v-show-和-v-if-的区别" aria-hidden="true">#</a> 1、v-show 和 v-if 的区别</h3><ul><li>v-show 通过 css display 控制显示和隐藏</li><li>v-if 组件真正的渲染和销毁， 而不是显示和隐藏</li><li>频繁切换显示状态用 v-show， 否则用 v-if</li></ul><h3 id="为何在-v-for-中使用-key" tabindex="-1"><a class="header-anchor" href="#为何在-v-for-中使用-key" aria-hidden="true">#</a> 为何在 v-for 中使用 key</h3><ul><li>必须用 key， 且不能是 index 和 random</li><li>diff 算法中通过 tag 和 key 来判断， 是否是 sameNode</li><li>减少渲染次数，提升渲染性能</li></ul><h3 id="描述-vue-组件生命周期-父子组件" tabindex="-1"><a class="header-anchor" href="#描述-vue-组件生命周期-父子组件" aria-hidden="true">#</a> 描述 Vue 组件生命周期（父子组件）</h3><ul><li>单组件生命周期</li><li>父子组件生命周期关系</li></ul><h3 id="vue-组件如何通讯-常见" tabindex="-1"><a class="header-anchor" href="#vue-组件如何通讯-常见" aria-hidden="true">#</a> Vue 组件如何通讯（常见）</h3>',14),M=a("li",null,"父子组件 props 和 this.$emit",-1),q={class:"MathJax",jax:"SVG",style:{position:"relative"}},V={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.464ex",height:"1.441ex",role:"img",focusable:"false",viewBox:"0 -626 3741 637","aria-hidden":"true"},w=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(600,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(1085,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(1551,0)"><path data-c="1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path></g><g data-mml-node="mi" transform="translate(2036,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(2502,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(3102,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mo" transform="translate(3463,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path></g></g></g>',1),j=[w],C=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"n"),a("mi",null,"o"),a("mi",null,"e"),a("mi",null,"v"),a("mi",null,"e"),a("mi",null,"n"),a("mi",null,"t"),a("mo",null,".")])],-1),O=a("li",null,"vuex",-1),D=a("h3",{id:"描述组件渲染和更新的过程",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#描述组件渲染和更新的过程","aria-hidden":"true"},"#"),n(" 描述组件渲染和更新的过程")],-1),L=a("ul",null,[a("li",null,"响应式（监听属性变化）"),a("li",null,"模版渲染"),a("li",null,"vdom")],-1),H=a("h3",{id:"双向数据绑定-v-model-的实现原理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#双向数据绑定-v-model-的实现原理","aria-hidden":"true"},"#"),n(" 双向数据绑定 v-model 的实现原理")],-1),Z={href:"http://this.name",target:"_blank",rel:"noopener noreferrer"},S={href:"http://this.name",target:"_blank",rel:"noopener noreferrer"},B=a("li",null,"data 更新触发 re-render",-1),E=t(`<h3 id="对于-mvvm-的理解" tabindex="-1"><a class="header-anchor" href="#对于-mvvm-的理解" aria-hidden="true">#</a> 对于 MVVM 的理解</h3><ul><li>Model、viewModel、view</li></ul><h3 id="computed-有何特点" tabindex="-1"><a class="header-anchor" href="#computed-有何特点" aria-hidden="true">#</a> computed 有何特点</h3><ul><li>缓存，不变不会重新计算</li><li>提高性能</li></ul><h3 id="为何组件-data-必须是一个函数" tabindex="-1"><a class="header-anchor" href="#为何组件-data-必须是一个函数" aria-hidden="true">#</a> 为何组件 data 必须是一个函数？</h3><ul><li>data 必须是一个函数（为了不同的实例不冲突）</li><li>vue 是一个 class</li></ul><h3 id="ajax-请求应该放在哪个生命周期" tabindex="-1"><a class="header-anchor" href="#ajax-请求应该放在哪个生命周期" aria-hidden="true">#</a> ajax 请求应该放在哪个生命周期</h3><ul><li>mounted</li><li>js 是单线程的， ajax 异步获取数据</li><li>放在 mounted 之前没有什么用，只会让逻辑变得更混乱</li></ul><h3 id="如何将组件所有-props-传递给子组件" tabindex="-1"><a class="header-anchor" href="#如何将组件所有-props-传递给子组件" aria-hidden="true">#</a> 如何将组件所有 props 传递给子组件？</h3><ul><li>$props</li><li><code>&lt;User v-bind=&quot;$props&quot;&gt;</code></li><li>细节知识点，优先级不高</li></ul><h3 id="如何自己实现-v-model" tabindex="-1"><a class="header-anchor" href="#如何自己实现-v-model" aria-hidden="true">#</a> 如何自己实现 v-model</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(&#39;change&#39;, $event.target.value)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多个组件有相同的逻辑-如何抽离" tabindex="-1"><a class="header-anchor" href="#多个组件有相同的逻辑-如何抽离" aria-hidden="true">#</a> 多个组件有相同的逻辑，如何抽离？</h3><ul><li>mixin</li><li>以及 mixin 的一些缺点</li></ul><h3 id="为何要使用异步组件" tabindex="-1"><a class="header-anchor" href="#为何要使用异步组件" aria-hidden="true">#</a> 为何要使用异步组件？</h3><ul><li>加载大组件</li><li>路由异步加载</li></ul><h3 id="何时使用-keep-alive" tabindex="-1"><a class="header-anchor" href="#何时使用-keep-alive" aria-hidden="true">#</a> 何时使用 keep-alive？</h3><ul><li>缓存组件，不需要重复渲染</li><li>如多个静态 tab 页的切换</li><li>优化性能</li></ul><h3 id="何时需要使用-beforedestory" tabindex="-1"><a class="header-anchor" href="#何时需要使用-beforedestory" aria-hidden="true">#</a> 何时需要使用 beforeDestory</h3><ul><li>解绑自定义事件 event.$off</li><li>清除定时器</li><li>解绑自定义的 DOM 事件，如 window scroll 等</li></ul><h3 id="什么是作用域插槽" tabindex="-1"><a class="header-anchor" href="#什么是作用域插槽" aria-hidden="true">#</a> 什么是作用域插槽</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:website</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>website<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vuex-中-action-和-mutation-有何区别" tabindex="-1"><a class="header-anchor" href="#vuex-中-action-和-mutation-有何区别" aria-hidden="true">#</a> vuex 中 action 和 mutation 有何区别</h3><ul><li>action 中处理异步，mutation 不可以</li><li>mutaion 做原子操作</li><li>action 可以整合多个 mutation</li></ul><h3 id="vue-router-常用的路由模式" tabindex="-1"><a class="header-anchor" href="#vue-router-常用的路由模式" aria-hidden="true">#</a> vue-router 常用的路由模式</h3><ul><li>hash 默认</li><li>H5 history（需要服务支持）</li><li>两者比较</li></ul><h3 id="如何配置-vue-router-异步加载" tabindex="-1"><a class="header-anchor" href="#如何配置-vue-router-异步加载" aria-hidden="true">#</a> 如何配置 vue-router 异步加载</h3><ul><li>path 和 component</li><li>component: ()=&gt; import(&#39;..///&#39;)</li></ul><h3 id="请用-vnode-描述一个-dom-结构" tabindex="-1"><a class="header-anchor" href="#请用-vnode-描述一个-dom-结构" aria-hidden="true">#</a> 请用 vnode 描述一个 DOM 结构</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>vdom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ul&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;font-size: 20px&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;li&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听-data-变化的核心-api-是什么" tabindex="-1"><a class="header-anchor" href="#监听-data-变化的核心-api-是什么" aria-hidden="true">#</a> 监听 data 变化的核心 API 是什么</h3><ul><li>Object.defineProperty</li><li>以及深度监听、监听数组</li><li>有何缺点</li></ul><h3 id="vue-如何监听数组变化" tabindex="-1"><a class="header-anchor" href="#vue-如何监听数组变化" aria-hidden="true">#</a> Vue 如何监听数组变化</h3><ul><li>Object.defineProperty 不能监听数组变化</li><li>重新定义原型，重写 push pop 等方法，实现监听</li><li>proxy 可以原生支持监听数组变化</li></ul><h3 id="请描述响应式原理" tabindex="-1"><a class="header-anchor" href="#请描述响应式原理" aria-hidden="true">#</a> 请描述响应式原理</h3><ul><li>监听 data 变化</li><li>组件渲染和更新的流程</li></ul><h3 id="diff-算法的时间复杂度" tabindex="-1"><a class="header-anchor" href="#diff-算法的时间复杂度" aria-hidden="true">#</a> diff 算法的时间复杂度</h3><ul><li>O(n)</li><li>在 O(n^3)基础上做了一些调整</li></ul><h3 id="简述-diff-算法过程" tabindex="-1"><a class="header-anchor" href="#简述-diff-算法过程" aria-hidden="true">#</a> 简述 diff 算法过程</h3><ul><li>patch(elem, vnode)和 path(vnode, newVode)</li><li>pathVnode 和 addVnodes 和 removeVnodes</li><li>updataChildren（key 的重要性）</li></ul><h3 id="vue-为何是异步渲染-nexttick-何用" tabindex="-1"><a class="header-anchor" href="#vue-为何是异步渲染-nexttick-何用" aria-hidden="true">#</a> vue 为何是异步渲染， $nextTick 何用</h3><ul><li>异步渲染（以合并 data 修改），以提高渲染性能</li><li>$nextTick 在 DOM 更新完后，触发回调</li></ul><h3 id="vue-常见性能优化方式" tabindex="-1"><a class="header-anchor" href="#vue-常见性能优化方式" aria-hidden="true">#</a> Vue 常见性能优化方式</h3><ul><li>合理使用 v-show 和 v-if</li><li>合理使用 computed</li><li>v-for 时加 key， 以及避免和 v-if 同时使用</li><li>（v-for 优先级高， 每次 v-for 会重新计算一遍 v-if）</li><li>自定义事件、DOM 事件及时销毁</li><li>合理使用异步组件</li><li>合理使用 keep-alive</li><li>data 层级不要太深</li><li>使用 vue-loader 在开发环境做模版编译（预编译）</li><li>webpack 层面的优化</li><li>前端通用的性能优化，如图片懒加载</li><li>使用 SSR</li></ul><h2 id="hash-和-history-路由实现原理" tabindex="-1"><a class="header-anchor" href="#hash-和-history-路由实现原理" aria-hidden="true">#</a> hash 和 history 路由实现原理</h2><p>location.hash 的值实际就是 URL 中#后面的东西。</p><p>history 实际采用了 HTML5 中提供的 API 来实现，主要有 history.pushState()和 history.replaceState()。</p>`,48);function $(P,R){const e=o("ExternalLinkIcon"),l=o("RouterLink");return p(),c("div",null,[d,a("p",null,[a("a",h,[n("相关源码"),s(e)])]),k,a("p",null,[a("a",v,[n("官网例子"),s(e)])]),m,a("ul",null,[a("li",null,[n("核心 api Object.defineproperty "),a("ul",null,[f,a("li",null,[s(l,{to:"/posts/vue/Object.defineproperty.html"},{default:i(()=>[n("Object.defineproperty 核心代码 自定义实现")]),_:1})])])]),g,a("li",null,[n("Object.defineproperty 的缺点（vue3 用 Proxy） "),a("ul",null,[Q,T,a("li",null,[s(l,{to:"/posts/vue/Proxy.html"},{default:i(()=>[n("Proxy 核心代码 自定义实现")]),_:1})]),a("li",null,[s(l,{to:"/posts/vue/proxy-observe.html"},{default:i(()=>[n("proxy-observe 核心代码 自定义实现")]),_:1})])])])]),b,a("ul",null,[x,a("li",null,[n("两个 js 对象也可以做 diff，如"),a("a",_,[n("https://gethub.com/cujojs/jiff"),s(e)])])]),y,a("ul",null,[M,a("li",null,[n("自定义事件 event."),a("mjx-container",q,[(p(),c("svg",V,j)),C]),n("off event.emit")]),O]),D,L,H,a("ul",null,[a("li",null,[n("input 元素的 value = "),a("a",Z,[n("this.name"),s(e)])]),a("li",null,[n("绑定 input 事件 "),a("a",S,[n("this.name"),s(e)]),n(" = $event.target.value")]),B]),E])}const N=u(r,[["render",$],["__file","theory.html.vue"]]);export{N as default};
