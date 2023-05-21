<template>
  <div class="bg-gray-800 text-white">
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-6">
        <nav>
          <ul class="flex justify-end space-x-6">
            <li><a href="../App.vue">Inicio</a></li>
            <li><a href="./Post.vue">Acerca de</a></li>
            <li><a href="./PostList.vue">Contacto</a></li>
            <li><Filter :tags="tags" /></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Filter from "./Filter.vue";
import api from "../api.js"; // Import the api module

export default {
  name: "Header",
  components: {
    Filter,
  },
  data() {
    return {
      tags: []
    };
  },
  async mounted() {
    try {
      this.tags = await api.fetchTags(); // Use the fetchTags function from the api module
    } catch (error) {
      console.error("Failed to fetch tags:", error);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #000000;
  height: 100%;
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
li {
  margin: 0 10px;
  text-align: center;
}
router-link {
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: background-color 0.3s ease;
  padding: 0.5rem;
}

router-link:hover {
  background-color: #8a4baf;
}

router-link:active {
  transform: translateY(2px);
}
</style>
