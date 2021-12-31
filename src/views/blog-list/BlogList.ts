import { Blog } from "@/store";
import { Vue, Component } from "vue-property-decorator";

import BlogListItem from "@/components/blog-list-item/BlogListItem.vue";

@Component({
  components: {
    BlogListItem,
  },
})
export default class BlogList extends Vue {
  get blogs(): Blog[] {
    return this.$store.getters["blogs"];
  }

  updateBlog(id: string) {
    const params = { 
        mode : 'update',
        id
    }
    this.$router.push({ name: 'BlogForm', params })
  }

  deleteBlog(id: string) {
    this.$store.dispatch('deleteBlog', id)
  }

  gotoBlogDetails(id: string) {
      this.$router.push({ name: 'BlogDetails', params: { id }})
  }
}
