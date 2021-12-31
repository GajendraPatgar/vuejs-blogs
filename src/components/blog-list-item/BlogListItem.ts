import { Component, Prop, Vue } from "vue-property-decorator";
import { Blog } from "@/store";

@Component
export default class BlogListItem extends Vue {
  @Prop({ required: true }) blog!: Blog;
  @Prop({ default: () => [] }) keywordsToHighlight!: string[];
  @Prop({ default: false }) hideActions!: boolean;

  gotoBlogDetails() {
    this.$emit("preview");
  }

  updateBlog() {
    this.$emit("update");
  }

  deleteBlog() {
    this.$emit("delete");
  }

  mounted() {
    const markTags = this.$el.querySelectorAll(".highlight");
    for (const node of markTags) {
      console.log(node);
      if (this.keywordsToHighlight.includes(node.innerHTML)) {
        node.scrollIntoView({
          block: "center",
        });
        return
      }
    }
  }
}
