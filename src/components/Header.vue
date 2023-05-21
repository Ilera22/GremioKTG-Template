<template>
  <div class="bg-gray-800 text-white">
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-6">
        <nav>
          <ul class="flex justify-end space-x-6">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/about">Acerca de</router-link></li>
            <li><router-link to="/contact">Contacto</router-link></li>
            <li><Filter :tags="tags" /></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Filter from "./Filter.vue";

export default {
  name: "Header",
  components: {
    Filter,
  },
  setup() {
    const tags = ref([])

    onMounted(async () => {
      try {
        const response = await fetch(
          `/ghost/api/v3/content/tags/?key=${process.env.VUE_APP_GHOST_API_KEY}&limit=all`
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json()
        tags.value = json.tags.map((tag) => ({ value: tag.slug, label: tag.name }))
      } catch (error) {
        console.error("Failed to fetch tags:", error)
      }
    })

    return { tags }
  }
}
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
