<template>

  <!-- 我还不明白原来:style样式可以这么写, 会被翻译成下面的代码 -->
  <!-- <div class="page" style="font-size: 1em;"> -->
  <div class="page" :style="{fontSize:postsize+'em'}">
    <!-- <blog-post v-for="post in posts" :key="post.title" :post="post" @enlargeText="enlargeText"></blog-post> -->
    <blog-post v-for="post in posts" :key="post.title" :post="post" @enlargeText="postsize+=$event"></blog-post>
    <alert-box>这是一个错误提示</alert-box>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost';
import AlertBox from '@/components/AlertBox';
export default {
  data() {
    return {
      postsize: 1,
      posts: [
        { title: 'hello1', content: 'content1' },
        { title: 'hello2', content: 'content2' },
        { title: 'hello3', content: 'content3' }
      ]
    };
  },
  components: {
    BlogPost,
    AlertBox
  },
  methods: {
    enlargeText(enlargeAmount) {
      this.postsize += enlargeAmount;
      // console.log(this.postsize);
    }
  }
};
</script>

