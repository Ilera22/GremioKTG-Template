const API_URL = "https://gremioktg.com/ghost/api/v3/content";
const API_KEY = process.env.VUE_APP_GHOST_API_KEY;

async function fetchTags() {
  const response = await fetch(`${API_URL}/tags/?key=${API_KEY}&limit=all`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.tags.map(tag => ({ value: tag.slug, label: tag.name }));
}

export default {
  fetchTags
};
