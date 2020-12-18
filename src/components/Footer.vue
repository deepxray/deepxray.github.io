<style lang="less">
@import '~@/assets/styles/_var.less';
@import '~@/assets/styles/_mixin.less';

.ui-footer {
  width: 1280px;
  margin: 100px auto 50px;
  p {
    color: #fff;
    text-align: center;
  }
}
</style>

<template>
  <div class="ui-footer">
    <p>{{ $t('footer.contact') }} keyunluo@tencent.com</p>
  </div>
</template>

<script>
import utils from '@/common/utils';

export default {
  methods: {
    onLangChange(index) {
      if (['en', 'cn'].indexOf(index) > -1) {
        utils.setStorage('lang', index);
        location.reload();
      }
    },
  },
};
</script>
