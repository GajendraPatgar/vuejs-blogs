import { Component, Vue } from "vue-property-decorator";

import MediumEditor from "medium-editor";
import rangy from "rangy";
import "rangy/lib/rangy-classapplier";
import { Blog } from "@/store";

rangy.init();
const HighlighterButton = MediumEditor.Extension.extend({
  name: "highlighter",

  init: function () {
    this.classApplier = rangy.createClassApplier("highlight", {
      elementTagName: "mark",
      normalize: true,
    });

    this.button = this.document.createElement("button");
    this.button.classList.add("medium-editor-action");
    // this.button.innerHTML = '<i class="fa fa-paint-brush"></i>';
    this.button.innerHTML = "Highlight";
    this.button.title = "Highlight";

    this.on(this.button, "click", this.handleClick.bind(this));
  },

  getButton: function () {
    return this.button;
  },

  handleClick: function (event: any) {
    const selectedContent = document.getSelection()?.toString() ?? ''
    const regx = /^[a-zA-Z0-9]+$/i
    if(!regx.test(selectedContent)) {
        this.button.attributes.set('disabled', 'disabled')
        return
    }
    this.classApplier.toggleSelection();
    this.base.checkContentChanged();
  },

  isAlreadyApplied: function (node: HTMLElement) {
    return node.nodeName.toLowerCase() === "mark";
  },

  isActive: function () {
    return this.button.classList.contains("medium-editor-button-active");
  },

  setInactive: function () {
    this.button.classList.remove("medium-editor-button-active");
  },

  setActive: function () {
    this.button.classList.add("medium-editor-button-active");
  },
});

@Component
export default class BlogForm extends Vue {
  formData: Blog = {
    title: "",
    content: "",
    author: "Author 001",
  };
  options = {
    toolbar: {
      buttons: [
        "highlighter",
      ],
    },
    placeholder: false,
    extensions: {
      highlighter: new HighlighterButton(),
      imageDragging: {},
    },
    imageDragging: false,
    spellcheck: false,
  };
  id!: string
  editorPrefilData = ''
  isEditMode = false

  get canSubmit(): boolean {
      const regx = /(<([^>]+)>)/ig
      const text = this.formData.content.replace(regx, '')
      return this.formData.title.length > 0 && text.length > 0
  }

  async onSubmit(): Promise<void> {
    if(this.isEditMode) {
        await this.$store.dispatch('updatePost', { data: this.formData, id: this.id })
    } else {
        await this.$store.dispatch('addPost', this.formData)
    }
    this.back()
  }

  mounted() {
    const { mode, id} = this.$route.params
    this.isEditMode = mode === 'update'
    if(this.isEditMode) {
        this.id = id
        const blogDetails = this.$store.getters['blogDetail'](id)
        this.formData = { ...blogDetails }
        this.editorPrefilData = this.formData.content
        this.$forceUpdate()
    }
    setTimeout(() => {
      const el = document.querySelector(".image-handler-container");
      if(el) [
        el.classList.add('hide')
      ]
    }, 0);
  }

  back(): void {
    this.$router.push({ name: 'Home' })
  }
}