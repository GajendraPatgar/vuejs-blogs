import { Blog } from "@/store";
import { Component, Vue } from "vue-property-decorator";
import BlogListItem from "@/components/blog-list-item/BlogListItem.vue";

@Component({
  components: {
    BlogListItem,
  },
})
export default class BlogsFilter extends Vue {
  selectedKeyWords: string[] = [];
  blogList: Blog[] = [];
  get highlightedKeywords(): string[] {
    return this.$store.getters["highlightedTexts"];
  }

  mounted(): void {
    if (this.highlightedKeywords.length) {
      this.selectedKeyWords.push(this.highlightedKeywords[0]);
      this.onSelectionChange()
    }
  }

  onSelectionChange() {
    this.blogList = this.$store.getters["getBlogsByKeywords"](
      this.selectedKeyWords
    );
  }

  gotoBlogDetails(id: string) {
    this.$router.push({ name: "BlogDetails", params: { id } });
  }
  
  goBack() {
      this.$router.go(-1)
  }
}
