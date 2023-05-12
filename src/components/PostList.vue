<template>
  <div class="post-list">
    <div class="post" v-for="(post, index) in filteredPosts" :key="index">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <ul>
        <li v-for="(tag, index) in post.tags" :key="index">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import mitt from "mitt";
const emitter = mitt();

export default {
  name: "PostList",
  props: {
    posts: Array,
  },
  data() {
    return {
      selectedTag: "all",
      filteredPosts: [],
    };
  },
  methods: {
    filterPosts(tag) {
      this.selectedTag = tag;
      if (tag === "all") {
        this.filteredPosts = this.posts;
      } else {
        this.filteredPosts = this.posts.filter((post) =>
          post.tags.includes(tag)
        );
      }
    },
  },
  created() {
    emitter.on("tagSelected", (tag) => {
      this.filterPosts(tag);
    });
  },
  mounted() {
    this.filteredPosts = this.posts;
  },
};
</script>





