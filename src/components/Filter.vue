<template>
  <div class="filter">
    <select v-model="selectedTag" @change="filterPosts">
      <option value="all">Todos los juegos</option>
      <option v-for="(tag, index) in tags" :key="index" :value="tag">
        {{ tag }}
      </option>
    </select>
  </div>
</template>

<script>
import mitt from "mitt";
const emitter = mitt();

export default {
  name: "Filter",
  data() {
    return {
      selectedTag: "all",
      tags: [],
    };
  },
  methods: {
    filterPosts() {
      emitter.emit("tagSelected", this.selectedTag);
    },
  },
  mounted() {
    emitter.on("tagsLoaded", (tags) => {
      this.tags = tags;
    });
  },
};
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}

select {
  padding: 5px 10px;
  border: none;
  background-color: #f3f3f3;
  color: #444;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

select:focus {
  outline: none;
  box-shadow: 0 0 2px #6e81f4;
}
</style>