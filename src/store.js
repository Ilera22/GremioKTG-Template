import { reactive } from "vue";
import mitt from "mitt";

export const EventBus = mitt();

export const store = reactive({
  posts: [],
  filteredPosts: [],
  selectedTag: "all",
  tags: ["all"]
});

export const mutations = {
  SET_POSTS(posts) {
    store.posts = posts;
    store.filteredPosts = posts;
    store.tags = ["all", ...new Set(posts.flatMap((p) => p.tags))];
  },
  FILTER_POSTS(tag) {
    store.selectedTag = tag;
    if (tag === "all") {
      store.filteredPosts = store.posts;
    } else {
      store.filteredPosts = store.posts.filter((p) => p.tags.includes(tag));
    }
    EventBus.emit("posts-filtered");
  }
};
