<style lang="less">
// 使用通用的 less 变量和 mixin 方法
@import '~@/assets/styles/_var.less';
@import '~@/assets/styles/_mixin.less';

.page-article {
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
    font-size: 16px;
    img {
      width: 100%;
    }
    h1 {
      margin: 60px 0 40px;
      text-align: center;
      font-size: 32px;
    }
    h3 {
      margin: 50px 0 20px;
      font-size: 26px;
    }
    p {
      margin: 30px 0;
      line-height: 1.5;
      text-indent: 2em;
    }
    li {
      line-height: 1.5;
    }
  }
  .read-more {
    margin-left: 30px;
    margin-top: 30px;
  }
  .no-article {
    padding: 100px 0;
    text-align: center;
  }
}
</style>

<template>
  <div class="page page-article">
    <div class="banner-wrap">
      <div class="banner"></div>
    </div>
    <div class="ui-content">
      <article v-if="detail">
        <h1>{{ $t(`article.${id}.title`) }}</h1>
        <div v-html="$t(`article.${id}.detail`)"></div>
      </article>
      <p v-else class="no-article">{{ $t('tip.articleNotFound') }}</p>
    </div>
  </div>
</template>

<script>
import utils from '@/common/utils';
import en from '@/common/i18n/en';

utils.reportPV();

export default {
  data() {
    return {
      id: '',
      detail: {},
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.detail = en.article[this.id];

    if (this.detail) {
      utils.trackData('read_article', {
        article_name: this.id,
      });
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  },
};
</script>
