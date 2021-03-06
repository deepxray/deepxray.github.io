import wafImg from '@/assets/images/article-waf.png';

export default {
  header: {
    home: 'Home',
    aboutUs: 'About',
    lang: 'English',
  },
  footer: {
    contact: 'Contact us with: ',
    wechat: 'Weixin Official Account',
  },
  op: {
    readMore: 'Read More',
  },
  title: {
    articles: 'Our Researches',
  },
  tip: {
    articleNotFound: 'Article not found',
  },
  intro: {
    xray: {
      title: 'About Deep X-ray',
      sum: 'Deep insight into cyber security like X-Ray',
      detail:
        'Hundreds of years ago, the advent of X-rays gave us the opportunity to read the details hidden behind the iceberg. Today, AI technology in the intelligent era is surging and changing with each passing day. We have the opportunity to see a broader and safer world. To this end, the Zhuque Laboratory of Tencent Security Platform Department has launched a series of research projects called Deep X-Ray, hoping to use the new era of X-ray AI technology to penetrate all obstacles and discover the infinite possibilities in cyber security.',
    },
  },
  article: {
    wafRulesPrinter: {
      title: 'About WAF Rules Printer',
      sum: 'Print the defense rules behind the WAF firewall with AI technology',
      detail: `<img src="${wafImg}"><br>
      <h3>Intro</h3>
      <p>WAF blocks malicious requests through regular expressions, which makes many web attacks impossible to implement, such as SQL injection. If the attacker has mastered the rules of the waf backend, he can construct an attack that bypasses the waf. In addition, for commercial waf products, good protection rules can empower the defense capabilities, which is the core competitiveness of the product. If the waf rules are leaked, it will probably cause huge economic losses. Here we propose a completely new attack technique. With the help of machine learning&apos;s powerful prediction and reasoning capabilities, we are the first to realize the automation and batch theft of WAF protection rules in a black box manner, which can guide security experts to further carry out follow-up work such as penetration testing.</p>
      <h3>Background</h3>
      <p>Manual detection of WAF rules in a traditional way will cause missing processes in details, running in low efficiency and detecting inaccurate rules. Whilst, machine learning is good at collecting learning experience from historical attack payload data. It can avoid repeat detection and omission problems of using this experience to predict all possible words in a certain position of the payload. In addition, the original payload may contain multiple attack sub-payloads, which is difficult for us to launch them at the same time because of the large combination of space. Also machine learning can help us determine which sub-payloads are more likely to be malicious based on the existing detection data, so as to quickly find the smallest payload that we call seeds that can match the waf rule. In the end, we have implemented automatic and batch stealing the rules.</p>
      <h3>Principle</h3>
      <p>Specifically, we collect publicly available payload, after processing the data, build a binary-class model to generate a seed payload, and then use a multi-class recommendation model to detect each location in the seed payload, and infer the regular expression unit at this position whether it is blocked by WAF , and finally add, delete, and perform operations on these regular expression units to form the final rule set. This method mainly solves the two limitations of manual detection. First, manual detection is difficult to deploy on a large scale due to time-consuming and labor-consuming. In addition, this experience is closely related to the attacker&apos;s technical level, and it is easy to omit some details, which eventually leads to speculation. The rules that come out may only be a subset of the real protection rules.</p>
      <h3>Defense</h3>
      <ul>
          <li>This attack can only be successfully implemented under ideal conditions。The attack will fail in some cases. Some wafs set a threshold based on the number of attacks and the frequency of attacks. When the threshold is exceeded, the source IP will be blocked, or Waf filters the HTTP traffice with a whitelist, or Waf filters the HTTP traffice with the method based on machine learning, these circumstances will make the attack difficult to implement.</li>
          <li>Some suggestions for cloud vendors. Please rewrite the HTTP response before returning.Do not expose the original http response, this will also make the attack difficult to implement.</li>
          <li>Cloud vendors, please do not give users the opportunity to test your security components, such as waf, you can limit user testing by setting thresholds or other methods.</li>
      </ul>`,
    },
  },
};
