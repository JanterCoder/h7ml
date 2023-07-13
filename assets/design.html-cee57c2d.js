import{_ as n,o as s,c as a,f as e}from"./app-2a9bb723.js";const i={},t=e(`<h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h2><h2 id="数据库设计简介" tabindex="-1"><a class="header-anchor" href="#数据库设计简介" aria-hidden="true">#</a> 数据库设计简介</h2><ul><li><p>软件的研发步骤</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954963.png" alt="image-20220910095431929" tabindex="0" loading="lazy"><figcaption>image-20220910095431929</figcaption></figure></li><li><p>数据库设计概念</p><ul><li>数据库设计就是根据业务系统的具体需求，结合我们所选用的 DBMS，为这个业务系统构造出最优的数据存储模型。</li><li>建立数据库中的<mark>表结构</mark>以及<mark>表与表之间的关联关系</mark>的过程。</li><li>有哪些表？表里有哪些字段？表和表之间有什么关系？</li></ul></li><li><p>数据库设计的步骤</p><ul><li><p>需求分析（数据是什么? 数据具有哪些属性? 数据与属性的特点是什么）</p></li><li><p>逻辑分析（通过 ER 图对数据库进行逻辑建模，不需要考虑我们所选用的数据库管理系统）</p><p>如下图就是 ER(Entity/Relation)图：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954530.png" alt="image-20220910095440504" tabindex="0" loading="lazy"><figcaption>image-20220910095440504</figcaption></figure></li><li><p>物理设计（根据数据库自身的特点把逻辑设计转换为物理设计）</p></li><li><p>维护设计（1.对新的需求进行建表；2.表优化）</p></li></ul></li><li><p>表关系</p><ul><li><p>一对一</p><ul><li>如：用户 和 用户详情</li><li>一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能</li></ul><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954571.png" alt="image-20220910095444549" tabindex="0" loading="lazy"><figcaption>image-20220910095444549</figcaption></figure><p>上图左边是用户的详细信息，而我们真正在展示用户信息时最长用的则是上图右边红框所示，所以我们会将详细信息查分成两周那个表。</p></li><li><p>一对多</p><ul><li><p>如：部门 和 员工</p></li><li><p>一个部门对应多个员工，一个员工对应一个部门。如下图：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954816.png" alt="image-20220910095448786" tabindex="0" loading="lazy"><figcaption>image-20220910095448786</figcaption></figure></li></ul></li><li><p>多对多</p><ul><li><p>如：商品 和 订单</p></li><li><p>一个商品对应多个订单，一个订单包含多个商品。如下图：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954953.png" alt="image-20220910095451925" tabindex="0" loading="lazy"><figcaption>image-20220910095451925</figcaption></figure></li></ul></li></ul></li></ul><h2 id="表关系-一对多" tabindex="-1"><a class="header-anchor" href="#表关系-一对多" aria-hidden="true">#</a> 表关系(一对多)</h2><ul><li><p>一对多</p><ul><li>如：部门 和 员工</li><li>一个部门对应多个员工，一个员工对应一个部门。</li></ul></li><li><p>实现方式</p><p>==在多的一方建立外键，指向一的一方的主键==</p></li><li><p>案例</p><p>我们还是以 <code>员工表</code> 和 <code>部门表</code> 举例:</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954593.png" alt="image-20220910095455573" tabindex="0" loading="lazy"><figcaption>image-20220910095455573</figcaption></figure><p>经过分析发现，员工表属于多的一方，而部门表属于一的一方，此时我们会在员工表中添加一列（dep_id），指向于部门表的主键（id）：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954824.png" alt="image-20220910095458797" tabindex="0" loading="lazy"><figcaption>image-20220910095458797</figcaption></figure><p>建表语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除表</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> tb_emp<span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> tb_dept<span class="token punctuation">;</span>

<span class="token comment">-- 部门表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb_dept<span class="token punctuation">(</span>
 id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
 dep_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 addr <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 员工表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb_emp<span class="token punctuation">(</span>
 id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
 name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 age <span class="token keyword">int</span><span class="token punctuation">,</span>
 dep_id <span class="token keyword">int</span><span class="token punctuation">,</span>

 <span class="token comment">-- 添加外键 dep_id,关联 dept 表的id主键</span>
 <span class="token keyword">CONSTRAINT</span> fk_tb_emp_dept <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>dep_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> tb_dept<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看表结构模型图：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955443.png" alt="image-20220910095502423" tabindex="0" loading="lazy"><figcaption>image-20220910095502423</figcaption></figure></li></ul><h2 id="表关系-多对多" tabindex="-1"><a class="header-anchor" href="#表关系-多对多" aria-hidden="true">#</a> 表关系(多对多)</h2><ul><li><p>多对多</p><ul><li>如：商品 和 订单</li><li>一个商品对应多个订单，一个订单包含多个商品</li></ul></li><li><p>实现方式</p><p>==建立第三张中间表，中间表至少包含两个外键，分别关联两方主键==</p></li><li><p>案例</p><p>我们以 <code>订单表</code> 和 <code>商品表</code> 举例：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955775.png" alt="image-20220910095505739" tabindex="0" loading="lazy"><figcaption>image-20220910095505739</figcaption></figure><p>经过分析发现，订单表和商品表都属于多的一方，此时需要创建一个中间表，在中间表中添加订单表的外键和商品表的外键指向两张表的主键：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955162.png" alt="image-20220910095509140" tabindex="0" loading="lazy"><figcaption>image-20220910095509140</figcaption></figure><p>建表语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除表</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> tb_order_goods<span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> tb_order<span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> tb_goods<span class="token punctuation">;</span>

<span class="token comment">-- 订单表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb_order<span class="token punctuation">(</span>
 id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
 payment <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 payment_type <span class="token keyword">TINYINT</span><span class="token punctuation">,</span>
 <span class="token keyword">status</span> <span class="token keyword">TINYINT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 商品表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb_goods<span class="token punctuation">(</span>
 id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
 title <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 price <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 订单商品中间表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb_order_goods<span class="token punctuation">(</span>
 id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
 order_id <span class="token keyword">int</span><span class="token punctuation">,</span>
 goods_id <span class="token keyword">int</span><span class="token punctuation">,</span>
 count <span class="token keyword">int</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 建完表后，添加外键</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> tb_order_goods <span class="token keyword">add</span> <span class="token keyword">CONSTRAINT</span> fk_order_id <span class="token keyword">FOREIGN</span> <span class="token keyword">key</span><span class="token punctuation">(</span>order_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> tb_order<span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> tb_order_goods <span class="token keyword">add</span> <span class="token keyword">CONSTRAINT</span> fk_goods_id <span class="token keyword">FOREIGN</span> <span class="token keyword">key</span><span class="token punctuation">(</span>goods_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> tb_goods<span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
在中间表中添加订单表的外键和商品表的外键指向两张表的主键：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看表结构模型图：

  &lt;img src=&quot;assets/image-20210724140307910.png&quot; alt=&quot;image-20210724140307910&quot; style=&quot;zoom:80%;&quot; /&gt;

### 2.4  表关系(一对一)

* 一对一
  * 如：用户 和 用户详情
  * 一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能

* 实现方式

  ==在任意一方加入外键，关联另一方主键，并且设置外键为唯一(UNIQUE)==

* 案例

  我们以 \`用户表\` 举例：

  &lt;img src=&quot;assets/image-20210724135346913.png&quot; alt=&quot;image-20210724135346913&quot; style=&quot;zoom:70%;&quot; /&gt;

  而在真正使用过程中发现 id、photo、nickname、age、gender 字段比较常用，此时就可以将这张表查分成两张表。

   &lt;img src=&quot;assets/image-20210724135649341.png&quot; alt=&quot;image-20210724135649341&quot; style=&quot;zoom:70%;&quot; /&gt;




   建表语句如下：

\`\`\`sql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>查看表结构模型图：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955410.png" alt="image-20220910095514389" tabindex="0" loading="lazy"><figcaption>image-20220910095514389</figcaption></figure><h2 id="数据库设计案例" tabindex="-1"><a class="header-anchor" href="#数据库设计案例" aria-hidden="true">#</a> 数据库设计案例</h2><p>根据下图设计表及表和表之间的关系：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955077.png" alt="image-20220910095518049" tabindex="0" loading="lazy"><figcaption>image-20220910095518049</figcaption></figure><p>经过分析，我们分为 <code>专辑表</code> <code>曲目表</code> <code>短评表</code> <code>用户表</code> 4 张表。</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955318.png" alt="image-20220910095522282" tabindex="0" loading="lazy"><figcaption>image-20220910095522282</figcaption></figure><p>一个专辑可以有多个曲目，一个曲目只能属于某一张专辑，所以专辑表和曲目表的关系是<mark>一对多</mark>。</p><p>一个专辑可以被多个用户进行评论，一个用户可以对多个专辑进行评论，所以专辑表和用户表的关系是 <mark>多对多</mark>。</p><p>一个用户可以发多个短评，一个短评只能是某一个人发的，所以用户表和短评表的关系是 <mark>一对多</mark>。</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955488.png" alt="image-20220910095531461" tabindex="0" loading="lazy"><figcaption>image-20220910095531461</figcaption></figure>`,19),p=[t];function l(o,c){return s(),a("div",null,p)}const r=n(i,[["render",l],["__file","design.html.vue"]]);export{r as default};
