<style lang="less"></style>

<template>
  <div>
    <page-header></page-header>
    <router-view />
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/Header';
import PageFooter from '@/components/Footer';

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
