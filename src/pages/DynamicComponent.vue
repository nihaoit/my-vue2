<template>
  <div>
    <!-- <button class="tab-button" v-for="tab in tabs" v-bind:key="tab" v-on:click="currentTab=tab"> -->
    <button class="tab-button" v-for="tab in tabs" :key="tab" @click="changeTab(tab)">
      {{tab}}
    </button>
    <component class="tab" :is="currentComponent"></component>
  </div>
</template>

<script>
import Home from '@/components/Home';
import Category from '@/components/Category';
import Center from '@/components/Center';
export default {
  components: {
    Home,
    Category,
    Center
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Category', 'Center']
    };
  },
  computed: {
    currentComponent() {
      return this.currentTab;
    }
  },
  methods: {
    // 如果把事件的处理函数写成方法，就是如下的写法
    changeTab(tab) {
      this.currentTab = tab;
    }
  }
};
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
