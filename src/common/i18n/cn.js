import wafImg from '@/assets/images/article-waf.png';

export default {
  header: {
    home: '首页',
    aboutUs: '关于我们',
    lang: '中文-简体',
  },
  footer: {
    contact: '联系我们：',
  },
  op: {
    readMore: '了解更多',
  },
  title: {
    articles: '相关研究',
  },
  tip: {
    articleNotFound: '未找到此文章',
  },
  intro: {
    xray: {
      title: '关于 Deep X-ray',
      sum: '像X射线一样深度洞悉网络安全',
      detail:
        '数百年前，X射线的出现，使得我们有机会阅览隐藏在冰山之后的细节。今天，智能时代AI技术汹涌澎湃，日新月异，我们有了一个看到更加广阔的安全世界的机会。为此，腾讯安全平台部朱雀实验室开启了一个名为Deep X-Ray的系列研究项目，希望用新时代的X射线技术——AI，去穿透一切障碍，发现网络安全里的无限可能。',
    },
  },
  article: {
    wafRulesPrinter: {
      title: '关于 WAF 规则打印',
      sum: '用AI技术打印出WAF防火墙背后的防御规则',
      detail: `<p><br></p>
      <p><strong><span style="font-size: 26px;">简介</span></strong></p>
      <p><strong><img src="${wafImg}"></strong><br></p>
      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">通常来说WAF通过正则表达式来拦截恶意请求，这使得很多WEB攻击变得不可实施，例如SQL注入。但是如果攻击者掌握了WAF后端的规则，便可以通过绕过的方式打开一个缺口。此外，对于商业WAF产品来说，好的防护规则可以使产品具备更强的防御能力，是产品的核心竞争力，如果WAF规则被泄露了，无疑会对商业价值造成巨大损失。这里我们提出了一种全新的攻击技术，我们借助机器学习强大的预测和推理能力，完全以黑盒方式探测出WAF后端的规则，可指导安全专家进一步开展渗透等后续工作。</span>&nbsp;</p>
      <p><strong><span style="font-size: 26px;">背景</span></strong></p>
      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">人工探测WAF规则在细节处理上很容易疏漏，并且效率底下，导致探测出的规则不准确。而机器学习善于从历史攻击payload数据中学习经验，用这种经验来预测payload某个位置上所有可能的单词，可避免探测疏漏问题。此外，原始payload中可能含有多个攻击子payload，我们难以同时推出他们，必须分而治之，然而这并不容易，因为这种组合空间太大了。而机器学习能基于已有的探测数据帮助我们判断哪些子payload更有可能是恶意的，从而快速找出那些们称之为种子的能匹配WAF规则的最小payload。最终可实现自动化、批量的窃取WAF系统的防护规则。</span></p>
      <p><strong><span style="font-size: 26px;">原理</span></strong></p>
      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">具体来说，我们采集公开可获取的数据，进行数据处理后，构建二分类模型生成种子payload，接着使用多分类推荐模型对种子payload中的每个位置进行探测，通过反馈是否被WAF拦截推断出该位置的正则表达式单元，最后对这些正则表达式单元进行增删并等操作，形成最终的规则集。该方法主要解决了人工探测的两个局限，首先，人工探测由于耗时耗力难以大规模展开，此外，这种经验与攻击者的技术水平息息相关，在一些细节方面很容易疏漏，最终导致推测出来的规则可能只是真实防护规则的一个子集。</span></p>
      <p><strong><span style="font-size: 26px;">防御</span></strong></p>
      <ol>
          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">攻击得以实施的前提：</span>
              <ul>
                  <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">WAF使用基线模型分析请求并比较与正常业务的偏离程度</span></li>
                  <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">基于AI的后端策略，该策略很难以正则表达式的形式显式的输出来</span></li>
              </ul>
          </li>
          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">通过重写http响应以加深反馈结果的不确定性，可以大大增加窃取的难度</span></li>
          <li><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">限制探测频次，避免接口被滥用</span></li>
      </ol>
      <p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(30, 111, 255); background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></p>
      <p><br></p>`,
    },
  },
};
