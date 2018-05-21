<template>
  <div class="page" :style="{fontSize:postsize+'em'}">
    <!-- <blog-post v-for="post in posts" :key="post.title" :post="post" @enlargeText="enlargeText"></blog-post> -->
    <blog-post v-for="post in posts" :key="post.title" :post="post" @enlargeText="postsize+=$event"></blog-post>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost';

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
    BlogPost
  },
  methods: {
    enlargeText(enlargeAmount) {
      this.postsize += enlargeAmount;
      // console.log(this.postsize);
    }
  }
};
</script>

