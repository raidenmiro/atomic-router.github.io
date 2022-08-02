import{_ as s,c as a,o as e,a as o}from"./app.acf5ea2a.js";const i=JSON.parse('{"title":"createRoute","description":"","frontmatter":{},"headers":[{"level":2,"title":"Common stuff","slug":"common-stuff"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":".navigate","slug":"navigate"},{"level":3,"title":".open","slug":"open"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":".opened","slug":"opened"},{"level":3,"title":".updated","slug":"updated"},{"level":2,"title":"Stores","slug":"stores"},{"level":3,"title":"$isOpened","slug":"isopened"},{"level":3,"title":"$params","slug":"params"},{"level":3,"title":"$query","slug":"query"}],"relativePath":"api/create-route.md"}'),n={name:"api/create-route.md"},p=o(`<h1 id="createroute" tabindex="-1">createRoute <a class="header-anchor" href="#createroute" aria-hidden="true">#</a></h1><p>Creates a route.<br> You can <code>.open()</code> it subscribe to its <code>opened/closed</code> events, and watch for <code>$params/$query</code></p><h2 id="common-stuff" tabindex="-1">Common stuff <a class="header-anchor" href="#common-stuff" aria-hidden="true">#</a></h2><ul><li><code>RouteParams</code> - type for route params. Extends <code>Record&lt;string, any&gt;</code></li><li><code>RouteQuery</code> - type for route query. Extends <code>Record&lt;string, any&gt;</code></li><li><code>RouteParamsAndQuery&lt;Params&gt;</code> - extends <code>{ params: Params, query: RouteQuery }</code></li><li><strong>&quot;Route opened&quot;</strong> - means that we enter the route when it&#39;s not opened</li><li><strong>&quot;Route updated&quot;</strong> - means that currently opened route changes its params/query</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createRoute</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atomic-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> homeRoute </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRoute</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> postRoute </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRoute</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">postId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">homeRoute</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">postId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$params</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">watch</span><span style="color:#A6ACCD;">(console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">log)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="navigate" tabindex="-1"><code>.navigate</code> <a class="header-anchor" href="#navigate" aria-hidden="true">#</a></h3><p>Open the route with specified params and query</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">navigate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">postId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// /posts/:postId -&gt; /posts/123?foo=bar</span></span>
<span class="line"></span></code></pre></div><p><strong>Signature:</strong> <code>Effect&lt;RouteParamsAndQuery&lt;RouteParams&gt;, RouteParamsAndQuery&lt;RouteParams&gt;&gt;</code></p><h3 id="open" tabindex="-1"><code>.open</code> <a class="header-anchor" href="#open" aria-hidden="true">#</a></h3><p>The same as <code>.navigate</code> but with params only</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">postId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// /posts/:postId -&gt; /posts/123</span></span>
<span class="line"></span></code></pre></div><p><strong>Signature:</strong> <code>Effect&lt;RouteParams, RouteParamsAndQuery&lt;RouteParams&gt;&gt;</code></p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><h3 id="opened" tabindex="-1"><code>.opened</code> <a class="header-anchor" href="#opened" aria-hidden="true">#</a></h3><p>Triggers whenever route is opened</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">sample</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">clock</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">opened</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> params </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">postId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">postId </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fetchPostFx</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code> route.opened</code> does not trigger when the opened route updates!<br> If you want to re-fetch data on parameter change, use both <code>[route.opened, route.updated</code> or subscribe to <code>route.$params</code></p></div><p><strong>Signature:</strong> <code>Event&lt;RouteParamsAndQuery&lt;RouteParams&gt;&gt;</code></p><h3 id="updated" tabindex="-1"><code>.updated</code> <a class="header-anchor" href="#updated" aria-hidden="true">#</a></h3><p>Triggers when params/query of the <strong>currently opened</strong> route get updated.</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">sample</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">clock</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">updated</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> params </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">postId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">postId </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> refetchPostFx</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Signature:</strong> <code>Event&lt;RouteParamsAndQuery&lt;RouteParams&gt;&gt;</code></p><h2 id="stores" tabindex="-1">Stores <a class="header-anchor" href="#stores" aria-hidden="true">#</a></h2><h3 id="isopened" tabindex="-1"><code>$isOpened</code> <a class="header-anchor" href="#isopened" aria-hidden="true">#</a></h3><p>Detects whether the route is currently opened or not.</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$isOpened</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getState</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true/false</span></span>
<span class="line"></span></code></pre></div><p><strong>Signature:</strong> <code>Store&lt;boolean&gt;</code></p><h3 id="params" tabindex="-1"><code>$params</code> <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><p>Current route params. These params are used as tokens for URL set in <strong>router</strong>.</p><p>If route is not opened, <code>$params</code> will be <code>{}</code></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$params</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getState</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { postId: 123 }</span></span>
<span class="line"></span></code></pre></div><p><strong>Signature:</strong> <code>Store&lt;RouteParams&gt;</code></p><h3 id="query" tabindex="-1"><code>$query</code> <a class="header-anchor" href="#query" aria-hidden="true">#</a></h3><p>Current route query. These are used to build <a href="https://en.wikipedia.org/wiki/Query_string" target="_blank" rel="noopener noreferrer"><strong>Query String</strong></a></p><p>If route is not opened, <code>$query</code> will be <code>{}</code></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">postRoute</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$query</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getState</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { foo: &#39;bar&#39; }</span></span>
<span class="line"></span></code></pre></div><p><strong>Signature:</strong> <code>Store&lt;RouteQuery&gt;</code></p>`,40),l=[p];function t(r,c,D,y,d,F){return e(),a("div",null,l)}var C=s(n,[["render",t]]);export{i as __pageData,C as default};