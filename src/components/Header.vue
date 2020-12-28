<style lang="less">
@import '~@/assets/styles/_var.less';
@import '~@/assets/styles/_mixin.less';

.ui-header-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: @color-dark;
}
.ui-header {
  display: flex;
  width: 1280px;
  margin: 0 auto;
  .logo {
    width: 100px;
    vertical-align: middle;
    line-height: 60px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
  .el-menu {
    flex: 1;
    background-color: transparent;
    &.el-menu--horizontal {
      border: transparent;
    }
    .lang-selector {
      float: right;
    }
  }
  .el-menu-item:focus,
  .el-menu-item:hover,
  .el-submenu__title {
    background-color: transparent !important;
  }
  .el-menu-item,
  .el-submenu__title,
  .el-submenu__title i {
    color: #fff !important;
  }
}
</style>

<template>
  <div class="ui-header-wrap">
    <div class="ui-header">
      <router-link to="home" class="logo">LOGO</router-link>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        router
        default-active="home"
        @select="onLangChange"
      >
        <el-menu-item index="home">
          {{ $t('header.home') }}
        </el-menu-item>
        <!-- <el-menu-item index="about">{{ $t('header.aboutUs') }}</el-menu-item> -->
        <el-submenu class="lang-selector" index="lang">
          <template slot="title">{{ $t('header.lang') }}</template>
          <el-menu-item index="cn">中文-简体</el-menu-item>
          <el-menu-item index="en">English</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
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
