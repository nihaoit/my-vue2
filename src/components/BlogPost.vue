<template>
  <div class="container">
    <h1>{{post.title}}</h1>
    <button @click="$emit('enlargeText',0.1)">
      enlarge text
    </button>
    <div class="content" v-html="post.content"></div>
  </div>
</template>

<script>
/*
这个demo演示了子组件的事件如何传递一个值出去，当父组件中触发这个事件时，可以使用这个值
特别注意，事件处理函数如果是一个表达式，可以使用$event
如果事件处理函数是一个方法，则是通过参数传递的方法来使用这个值

*/
export default {
  name: 'blog-post',
  // props可以是对象的写法，对象里面的各个属性就是这个组件的属性
  /* props: {
    post: {
      type: Object,
      default: function() {
        return { title: 'default', content: 'default' };
      }
    }
  }, */
  // props还可以是数组写法，数组里面的各个元素就是这个组件的属性！
  props: ['post'],
  methods: {
    enlarge() {}
  }
};
</script>
