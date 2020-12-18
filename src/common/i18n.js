import Vue from 'vue';
import VueI18n from 'vue-i18n';
import utils from '@/common/utils';
import en from '@/common/i18n/en';
import cn from '@/common/i18n/cn';

Vue.use(VueI18n);

const storage = utils.getStorage();

const i18n = new VueI18n({
  locale: storage.lang || 'en',
  messages: {
    en,
    cn,
  },
});

export default i18n;
