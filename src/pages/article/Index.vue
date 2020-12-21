<style lang="less" scoped>
// 使用通用的 less 变量和 mixin 方法
@import '~@/assets/styles/_var.less';
@import '~@/assets/styles/_mixin.less';

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
  h3 {
    margin: 40px 30px;
    text-align: center;
    font-size: 32px;
  }
  p {
    padding: 0 30px;
    margin: 30px 0;
    line-height: 1.5;
    text-indent: 2em;
  }
  /deep/ p,
  /deep/ span {
    background-color: transparent !important;
    color: #fff !important;
  }
}
.read-more {
  margin-left: 30px;
  margin-top: 30px;
}
</style>

<template>
  <div>
    <div class="banner-wrap">
      <div class="banner"></div>
    </div>
    <div class="ui-content">
      <article v-if="detail">
        <h3>{{ $t('article.waf.title') }}</h3>
        <p v-html="$t('article.waf.detail')"></p>
      </article>
      <p v-else>{{ $t('tip.articleNotFound') }}</p>
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
  },
};
</script>
