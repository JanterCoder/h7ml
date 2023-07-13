import{_ as t,r as p,o as e,c,a as n,b as s,d as o,f as i}from"./app-2a9bb723.js";const l={},u=n("p",null,"状态模式主要应用在游戏、工作流引擎中，其实就是有限状态机的实现，目前开发中还没有遇到过，此处留坑。",-1),k=n("p",null,[s("但状态模式也比较有意思，它可以将过多的 "),n("code",null,"if...else..."),s(" 或者 "),n("code",null,"switch...case..."),s(" 抽离出来，使得代码的扩展性更好一些。")],-1),r={href:"http://gk.link/a/11c3G",target:"_blank",rel:"noopener noreferrer"},d=i(`<p>一个超级马里奥的例子，吃了蘑菇、吃了花都会有不同的状态进行转移。</p><figure><img src="https://static001.geekbang.org/resource/image/5a/6c/5aa0310b9b3ea08794cfc2f376c8f96c.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token function">SMALL</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">SUPER</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">FIRE</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">CAPE</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token class-name">State</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MarioStateMachine</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> score<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">State</span> currentState<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">MarioStateMachine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SUPER</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">+=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">)</span> <span class="token operator">||</span> currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SUPER</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">CAPE</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">+=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">)</span> <span class="token operator">||</span> currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SUPER</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">FIRE</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">+=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">meetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SUPER</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">-=</span> <span class="token number">100</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">CAPE</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">-=</span> <span class="token number">200</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">FIRE</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">-=</span> <span class="token number">300</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApplicationDemo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MarioStateMachine</span> mario <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MarioStateMachine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mario<span class="token punctuation">.</span><span class="token function">obtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> score <span class="token operator">=</span> mario<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">State</span> state <span class="token operator">=</span> mario<span class="token punctuation">.</span><span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;mario score: &quot;</span> <span class="token operator">+</span> score <span class="token operator">+</span> <span class="token string">&quot;; state: &quot;</span> <span class="token operator">+</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上边的实现没什么问题，通过 <code>if</code> 来进行状态的转移，并进行相关操作，但可维护性和扩展性都很差。</p><p>我们可以通过状态模式进行改写，将每一种状态抽离出来，将状态的变更委托给状态类实现，原来的类不再处理。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IMario</span> <span class="token punctuation">{</span> <span class="token comment">//所有状态类的接口</span>
  <span class="token class-name">State</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//以下是定义的事件</span>
  <span class="token keyword">void</span> <span class="token function">obtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">obtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">obtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">meetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmallMario</span> <span class="token keyword">implements</span> <span class="token class-name">IMario</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">MarioStateMachine</span> stateMachine<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">SmallMario</span><span class="token punctuation">(</span><span class="token class-name">MarioStateMachine</span> stateMachine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 持有原类的引用，来帮助原类更新状态，相当于将上下文传递过来，可以直接调用上下文的方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stateMachine <span class="token operator">=</span> stateMachine<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SuperMario</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 更新原类中的状态类</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CapeMario</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FireMario</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">meetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do nothing...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperMario</span> <span class="token keyword">implements</span> <span class="token class-name">IMario</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">MarioStateMachine</span> stateMachine<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">SuperMario</span><span class="token punctuation">(</span><span class="token class-name">MarioStateMachine</span> stateMachine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stateMachine <span class="token operator">=</span> stateMachine<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SUPER</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do nothing...</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CapeMario</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FireMario</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">meetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SmallMario</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stateMachine<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span>stateMachine<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 省略CapeMario、FireMario类...</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MarioStateMachine</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> score<span class="token punctuation">;</span>
  <span class="token comment">// 包含一个状态类的引用</span>
  <span class="token keyword">private</span> <span class="token class-name">IMario</span> currentState<span class="token punctuation">;</span> <span class="token comment">// 不再使用枚举来表示状态</span>

  <span class="token keyword">public</span> <span class="token class-name">MarioStateMachine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmallMario</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 委托给状态类执行</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">obtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">obtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">obtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">obtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">meetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">meetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">int</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token class-name">IMario</span> currentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> currentState<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="总" tabindex="-1"><a class="header-anchor" href="#总" aria-hidden="true">#</a> 总</h1><p>状态模式很巧妙，虽然实际开发中还没应用到，但还是很有意思的。</p>`,8);function v(m,b){const a=p("ExternalLinkIcon");return e(),c("div",null,[u,k,n("p",null,[s("举个例子，详细解释可以查看极客时间的 "),n("a",r,[s("设计模式之美"),o(a)]),s(" 讲的。")]),d])}const y=t(l,[["render",v],["__file","state.html.vue"]]);export{y as default};
