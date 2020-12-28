<style lang="less">
// 使用通用的 less 变量和 mixin 方法
@import '~@/assets/styles/_var.less';
@import '~@/assets/styles/_mixin.less';

.page-home {
  h2 {
    width: 530px;
    height: 121px;
    margin: 50px auto;
    font-size: 30px;
    text-align: center;
    line-height: 121px;
    background-image: url('~@/assets/images/title.png');
  }
  p {
    line-height: 1.5;
  }
  .banner-wrap {
    background-color: @color-dark;
  }
  .banner {
    width: 1280px;
    height: 400px;
    margin: 0 auto;
    background-image: url('~@/assets/images/banner.png');
  }
  .intro {
    width: 80%;
    margin: 0 auto 100px;
  }
  article {
    display: flex;
    background-color: @color-secondary;
    > figure {
      flex: 1;
      img {
        width: 640px;
        height: 340px;
      }
    }
    > div {
      flex: 1;
      width: 1%;
      h3 {
        margin: 40px 30px;
        .ellipsis();
      }
      p {
        padding: 0 30px;
        margin: 0;
        line-height: 1.5;
        .ellipsis-multi(6);
      }
    }
  }
  .read-more {
    margin-left: 30px;
    margin-top: 30px;
  }
}
</style>

<template>
  <div class="page page-home">
    <div class="banner-wrap">
      <div class="banner"></div>
    </div>
    <div class="ui-content">
      <h2>{{ $t('intro.xray.title') }}</h2>
      <div class="intro">
        <p>{{ $t('intro.xray.sum') }}</p>
        <p>{{ $t('intro.xray.detail') }}</p>
      </div>

      <h2>{{ $t('title.articles') }}</h2>
      <article>
        <figure>
          <img src="@/assets/images/article-waf.png" />
        </figure>
        <div>
          <h3>{{ $t('article.wafRulesPrinter.title') }}</h3>
          <p>{{ $t('article.wafRulesPrinter.sum') }}</p>
          <router-link to="article?id=wafRulesPrinter">
            <el-button type="primary" class="read-more">{{ $t('op.readMore') }}</el-button>
          </router-link>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import utils from '@/common/utils';

utils.reportPV();

export default {};
</script>
