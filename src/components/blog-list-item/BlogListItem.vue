<template>
  <div class="blog" @click="gotoBlogDetails">
    <div class="content-wrapper">
      <h3 class="blog-title">{{ blog.title }}</h3>
      <p class="blog-content editor-value" v-html="blog.content"></p>
      <div class="blog-author">{{ `- ${blog.author}` }}</div>
    </div>
    <div class="blog-actions" v-if="!hideActions">
      <button class="btn" type="button" @click.stop="updateBlog">Update</button>
      <button class="btn" type="button" @click.stop="deleteBlog">Delete</button>
    </div>
  </div>
</template>

<script lang="ts" src="./BlogListItem.ts"></script>

<style lang="scss" scoped>
@import "@/styles/mixins";
.blog {
  cursor: pointer;
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;

  .blog-actions .btn {
    @include button;
    background-color: transparent;
    color: purple;
    display: block;
    margin-bottom: 0.5rem;
  }

  .content-wrapper {
    margin-right: 1rem;
    flex: 1;
    .blog-title {
      color: #000;
      @include font-bold;
    }

    .blog-content {
      color: #000;
      margin: 0.75rem 0;
      height: 70px;
      overflow: hidden;
    }

    .blog-author {
      color: gray;
    }
  }
}
.actions {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
