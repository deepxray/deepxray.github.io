import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import TestComponent from '@/components/TestComponent.vue';

describe('TestComponent.vue', () => {
  // test component 在传入 msg 时，应该渲染出对应的 msg 文案
  it('renders props.msg when passed the msg prop', () => {
    const msg = 'test message';
    const wrapper = shallowMount(TestComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.equal(msg);
  });

  // test component 在不传入 msg 时，应该渲染出默认文案
  it('renders default msg when not passed the msg prop', () => {
    const msg = 'default msg';
    const wrapper = shallowMount(TestComponent, {
      propsData: {},
    });

    expect(wrapper.text()).to.equal(msg);
  });
});
