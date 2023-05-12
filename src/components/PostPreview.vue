<template>
  <div class="post-preview">
    <div class="image-wrapper">
      <img :src="post.feature_image" alt="Post preview image" />
    </div>
    <div class="content-wrapper">
      <h2 class="title">{{ post.title }}</h2>
      <p class="excerpt">{{ post.excerpt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post-preview {
  display: flex;
  flex-direction: row;
  margin: 0 10%;
  max-width: 50%;
}

.image-wrapper {
  flex: 1;
  margin-right: 1rem;
}

.content-wrapper {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.excerpt {
  font-size: 1.2rem;
  line-height: 1.4;
}
</style>
