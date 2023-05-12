<template>
  <div class="post">
    <h2 class="post-title">{{ post.title }}</h2>
    <div class="post-meta">
      <span class="post-date">{{ post.published_at }}</span>
      <span class="post-tags" v-if="post.tags">
        <span v-for="(tag, index) in post.tags" :key="index">
          <a :href="`/tag/${tag.slug}`">{{ tag.name }}</a>
          <span v-if="index < post.tags.length - 1">,</span>
        </span>
      </span>
    </div>
    <div class="post-content" v-html="post.html"></div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
};
</script>

<style scoped>
.post {
  margin-bottom: 40px;
}
.post-title {
  font-size: 36px;
  margin-bottom: 20px;
}
.post-meta {
  margin-bottom: 20px;
}
.post-meta span {
  margin-right: 10px;
}
.post-tags {
  display: inline-block;
}
.post-tags a {
  color: #666;
  text-decoration: none;
}
.post-tags a:hover {
  text-decoration: underline;
}
.post-content {
  line-height: 1.5;
}
</style>
