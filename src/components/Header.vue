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

export default {
  name: "Header",
  components: {
    Filter,
  },
  data() {
    return {
      // Aquí puedes definir cualquier data que necesites en tu header
      tags: [],
    };
  },
  async mounted() {
    const response = await fetch(
      "/ghost/api/v3/content/tags/?key=1234567890123456789012345678901234567890&limit=all"
    );
    const json = await response.json();
    this.tags = json.tags.map((tag) => ({ value: tag.slug, label: tag.name }));
  },
  methods: {
    // Aquí puedes definir cualquier método que necesites en tu header
  },
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
a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: background-color 0.3s ease;
  padding: 0.5rem;
}

a:hover {
  background-color: #8a4baf;
}

a:active {
  transform: translateY(2px);
}
</style>



