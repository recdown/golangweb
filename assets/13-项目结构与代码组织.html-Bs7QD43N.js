import{_ as s,c as a,a as e,o as i}from"./app-C-YxjjId.js";const p={};function l(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="项目结构与代码组织" tabindex="-1"><a class="header-anchor" href="#项目结构与代码组织"><span>项目结构与代码组织</span></a></h1><h2 id="_1-标准go项目布局" tabindex="-1"><a class="header-anchor" href="#_1-标准go项目布局"><span>1. 标准Go项目布局</span></a></h2><p>参考Golang标准项目布局：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">myproject/</span>
<span class="line">├── api/                  # API协议定义(Swagger, protobuf)</span>
<span class="line">├── assets/               # 静态资源文件</span>
<span class="line">├── build/               # 构建脚本和Dockerfile</span>
<span class="line">├── cmd/                 # 主应用程序入口</span>
<span class="line">│   └── myapp/           # 主程序包</span>
<span class="line">│       └── main.go      # 主程序入口</span>
<span class="line">├── configs/             # 配置文件模板或默认配置</span>
<span class="line">├── deployments/         # 部署配置(k8s, nomad)</span>
<span class="line">├── docs/                # 设计文档</span>
<span class="line">├── examples/            # 示例代码</span>
<span class="line">├── githooks/            # Git钩子</span>
<span class="line">├── init/                # 系统初始化脚本</span>
<span class="line">├── internal/            # 私有应用程序代码</span>
<span class="line">│   ├── app/             # 应用层</span>
<span class="line">│   ├── domain/          # 领域层</span>
<span class="line">│   └── infrastructure/  # 基础设施层</span>
<span class="line">├── pkg/                 # 可复用的公共库</span>
<span class="line">├── scripts/             # 各种脚本</span>
<span class="line">├── test/                # 测试工具和测试数据</span>
<span class="line">├── third_party/         # 第三方工具和代码</span>
<span class="line">├── web/                 # Web应用特定组件</span>
<span class="line">├── go.mod               # Go模块定义</span>
<span class="line">├── go.sum               # Go模块校验</span>
<span class="line">├── Makefile             # 构建管理</span>
<span class="line">└── README.md            # 项目说明</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-分层架构设计" tabindex="-1"><a class="header-anchor" href="#_2-分层架构设计"><span>2. 分层架构设计</span></a></h2><h3 id="清晰的分层架构" tabindex="-1"><a class="header-anchor" href="#清晰的分层架构"><span>清晰的分层架构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">internal/</span>
<span class="line">├── app/                 # 应用层(用例)</span>
<span class="line">│   ├── handlers/       # HTTP处理器</span>
<span class="line">│   ├── services/       # 业务服务</span>
<span class="line">│   └── workers/        # 后台任务</span>
<span class="line">├── domain/             # 领域层</span>
<span class="line">│   ├── models/         # 领域模型</span>
<span class="line">│   ├── repositories/   # 仓储接口</span>
<span class="line">│   └── services/       # 领域服务</span>
<span class="line">└── infrastructure/     # 基础设施层</span>
<span class="line">    ├── db/             # 数据库访问</span>
<span class="line">    ├── cache/          # 缓存实现</span>
<span class="line">    ├── queue/          # 消息队列</span>
<span class="line">    └── config/         # 配置加载</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖关系" tabindex="-1"><a class="header-anchor" href="#依赖关系"><span>依赖关系</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">HTTP Handler → Application Service → Domain Service → Repository → DB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-模块化组织" tabindex="-1"><a class="header-anchor" href="#_3-模块化组织"><span>3. 模块化组织</span></a></h2><h3 id="按功能模块组织" tabindex="-1"><a class="header-anchor" href="#按功能模块组织"><span>按功能模块组织</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">internal/</span>
<span class="line">├── user/               # 用户模块</span>
<span class="line">│   ├── handler.go      # HTTP处理器</span>
<span class="line">│   ├── service.go      # 业务逻辑</span>
<span class="line">│   ├── repository.go   # 数据访问</span>
<span class="line">│   └── model.go        # 数据模型</span>
<span class="line">├── order/              # 订单模块</span>
<span class="line">│   ├── handler.go</span>
<span class="line">│   ├── service.go</span>
<span class="line">│   ├── repository.go</span>
<span class="line">│   └── model.go</span>
<span class="line">└── product/            # 产品模块</span>
<span class="line">    ├── handler.go</span>
<span class="line">    ├── service.go</span>
<span class="line">    ├── repository.go</span>
<span class="line">    └── model.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块间通信" tabindex="-1"><a class="header-anchor" href="#模块间通信"><span>模块间通信</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code><span class="line"><span class="token comment">// 通过接口定义模块边界</span></span>
<span class="line"><span class="token keyword">type</span> UserRepository <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">FindByID</span><span class="token punctuation">(</span>id <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">Save</span><span class="token punctuation">(</span>user <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token builtin">error</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 实现可以独立替换</span></span>
<span class="line"><span class="token keyword">type</span> MySQLUserRepository <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    db <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>MySQLUserRepository<span class="token punctuation">)</span> <span class="token function">FindByID</span><span class="token punctuation">(</span>id <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 数据库查询实现</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-配置管理" tabindex="-1"><a class="header-anchor" href="#_4-配置管理"><span>4. 配置管理</span></a></h2><h3 id="使用viper管理配置" tabindex="-1"><a class="header-anchor" href="#使用viper管理配置"><span>使用Viper管理配置</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">&quot;github.com/spf13/viper&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    Database <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">        Host     <span class="token builtin">string</span></span>
<span class="line">        Port     <span class="token builtin">int</span></span>
<span class="line">        Username <span class="token builtin">string</span></span>
<span class="line">        Password <span class="token builtin">string</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    Server <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">        Port <span class="token builtin">int</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">LoadConfig</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Config<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    viper<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span><span class="token string">&quot;config&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    viper<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">var</span> config Config</span>
<span class="line">    <span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> config<span class="token punctuation">,</span> <span class="token boolean">nil</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量覆盖" tabindex="-1"><a class="header-anchor" href="#环境变量覆盖"><span>环境变量覆盖</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># config.yaml</span></span>
<span class="line">database:</span>
<span class="line">  host: localhost</span>
<span class="line">  port: <span class="token number">3306</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过环境变量覆盖</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">APP_DATABASE_HOST</span><span class="token operator">=</span>mysql.prod</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">APP_DATABASE_PORT</span><span class="token operator">=</span><span class="token number">3307</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code><span class="line"><span class="token comment">// 自动绑定环境变量</span></span>
<span class="line">viper<span class="token punctuation">.</span><span class="token function">AutomaticEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">viper<span class="token punctuation">.</span><span class="token function">SetEnvPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span></span>
<span class="line">viper<span class="token punctuation">.</span><span class="token function">SetEnvKeyReplacer</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">NewReplacer</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-文档与代码生成" tabindex="-1"><a class="header-anchor" href="#_5-文档与代码生成"><span>5. 文档与代码生成</span></a></h2><h3 id="swagger文档生成" tabindex="-1"><a class="header-anchor" href="#swagger文档生成"><span>Swagger文档生成</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code><span class="line"><span class="token comment">// main.go</span></span>
<span class="line"><span class="token comment">// @title My API</span></span>
<span class="line"><span class="token comment">// @version 1.0</span></span>
<span class="line"><span class="token comment">// @description This is a sample server.</span></span>
<span class="line"><span class="token comment">// @host localhost:8080</span></span>
<span class="line"><span class="token comment">// @BasePath /api/v1</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 路由定义</span></span>
<span class="line">    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/users/:id&quot;</span><span class="token punctuation">,</span> getUser<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// Swagger</span></span>
<span class="line">    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger/*any&quot;</span><span class="token punctuation">,</span> ginSwagger<span class="token punctuation">.</span><span class="token function">WrapHandler</span><span class="token punctuation">(</span>swaggerFiles<span class="token punctuation">.</span>Handler<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// @Summary 获取用户</span></span>
<span class="line"><span class="token comment">// @Description 通过ID获取用户详情</span></span>
<span class="line"><span class="token comment">// @ID get-user-by-id</span></span>
<span class="line"><span class="token comment">// @Produce json</span></span>
<span class="line"><span class="token comment">// @Param id path string true &quot;用户ID&quot;</span></span>
<span class="line"><span class="token comment">// @Success 200 {object} User</span></span>
<span class="line"><span class="token comment">// @Router /users/{id} [get]</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">getUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 实现...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wire依赖注入生成" tabindex="-1"><a class="header-anchor" href="#wire依赖注入生成"><span>Wire依赖注入生成</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code><span class="line"><span class="token comment">// provider.go</span></span>
<span class="line"><span class="token keyword">var</span> UserSet <span class="token operator">=</span> wire<span class="token punctuation">.</span><span class="token function">NewSet</span><span class="token punctuation">(</span></span>
<span class="line">    ProvideUserRepository<span class="token punctuation">,</span></span>
<span class="line">    ProvideUserService<span class="token punctuation">,</span></span>
<span class="line">    ProvideUserHandler<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">ProvideUserRepository</span><span class="token punctuation">(</span>db <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token operator">*</span>MySQLUserRepository <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&amp;</span>MySQLUserRepository<span class="token punctuation">{</span>db<span class="token punctuation">:</span> db<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">ProvideUserService</span><span class="token punctuation">(</span>repo UserRepository<span class="token punctuation">)</span> <span class="token operator">*</span>UserService <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&amp;</span>UserService<span class="token punctuation">{</span>repo<span class="token punctuation">:</span> repo<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">ProvideUserHandler</span><span class="token punctuation">(</span>service <span class="token operator">*</span>UserService<span class="token punctuation">)</span> <span class="token operator">*</span>UserHandler <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&amp;</span>UserHandler<span class="token punctuation">{</span>service<span class="token punctuation">:</span> service<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// wire.go</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">InitializeUserHandler</span><span class="token punctuation">(</span>db <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>UserHandler<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    wire<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span></span>
<span class="line">        UserSet<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&amp;</span>UserHandler<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>提示：良好的项目结构应该随着项目规模的增长而演进。从简单开始，在需要时逐步引入更复杂的结构。</p></blockquote>`,26)]))}const o=s(p,[["render",l]]),r=JSON.parse('{"path":"/13-%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E4%BB%A3%E7%A0%81%E7%BB%84%E7%BB%87.html","title":"项目结构与代码组织","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. 标准Go项目布局","slug":"_1-标准go项目布局","link":"#_1-标准go项目布局","children":[]},{"level":2,"title":"2. 分层架构设计","slug":"_2-分层架构设计","link":"#_2-分层架构设计","children":[{"level":3,"title":"清晰的分层架构","slug":"清晰的分层架构","link":"#清晰的分层架构","children":[]},{"level":3,"title":"依赖关系","slug":"依赖关系","link":"#依赖关系","children":[]}]},{"level":2,"title":"3. 模块化组织","slug":"_3-模块化组织","link":"#_3-模块化组织","children":[{"level":3,"title":"按功能模块组织","slug":"按功能模块组织","link":"#按功能模块组织","children":[]},{"level":3,"title":"模块间通信","slug":"模块间通信","link":"#模块间通信","children":[]}]},{"level":2,"title":"4. 配置管理","slug":"_4-配置管理","link":"#_4-配置管理","children":[{"level":3,"title":"使用Viper管理配置","slug":"使用viper管理配置","link":"#使用viper管理配置","children":[]},{"level":3,"title":"环境变量覆盖","slug":"环境变量覆盖","link":"#环境变量覆盖","children":[]}]},{"level":2,"title":"5. 文档与代码生成","slug":"_5-文档与代码生成","link":"#_5-文档与代码生成","children":[{"level":3,"title":"Swagger文档生成","slug":"swagger文档生成","link":"#swagger文档生成","children":[]},{"level":3,"title":"Wire依赖注入生成","slug":"wire依赖注入生成","link":"#wire依赖注入生成","children":[]}]}],"git":{},"filePathRelative":"13-项目结构与代码组织.md"}');export{o as comp,r as data};
