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
  .icon {
    font-size: 22px;
    vertical-align: middle;
  }
  .detail {
    display: flex;
    justify-content: center;
    > div {
      width: 120px;
      img {
        width: 120px;
        height: 120px;
      }
      &.wechat {
        width: 180px;
        text-align: center;
        font-size: 14px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="ui-footer">
    <div class="detail">
      <div>
        <img src="@/assets/images/logo-dept.png" />
      </div>
      <div>
        <img src="@/assets/images/logo-zhuque.png" />
      </div>
      <div class="wechat">
        <img src="@/assets/images/qr-code-wechat.jpg" />
        <p>{{ $t('footer.wechat') }}</p>
      </div>
    </div>
    <p><i class="icon el-icon-message"></i> {{ $t('footer.contact') }} keyunluo@tencent.com</p>
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
