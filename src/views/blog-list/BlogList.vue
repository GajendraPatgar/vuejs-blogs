<template>
  <section class="blog-list">
    <header class="page-header">
      <h1 class="page-title text-center">Blogs</h1>
    </header>
    <div class="buttons">
      <router-link
        to="blogs-by-keyword"
        tag="button"
        class="btn create-blog-btn"
        type="button"
        >Filter By Keyword</router-link
      >
      <router-link
        to="blog/create"
        tag="button"
        class="btn create-blog-btn"
        type="button"
        >Create</router-link
      >
    </div>
    <template v-if="blogs.length">
      <blog-list-item
        v-for="blog of blogs"
        :blog="blog"
        :key="blog.id"
        @update="updateBlog(blog.id)"
        @delete="deleteBlog(blog.id)"
        @preview="gotoBlogDetails(blog.id)"
      />
    </template>
    <template v-else>
      <div class="no-blogs text-center">No blogs found!</div>
    </template>
  </section>
</template>

<script lang="ts" src="./BlogList.ts"></script>

<style lang="scss" scoped>
@import "@/styles/mixins";
.buttons {
  margin-bottom: 2rem;
  text-align: right;
  position: sticky;
  top: 70px;
  padding: 0.75rem;
  background-color: #fff;
  z-index: 1;
  .create-blog-btn {
    @include button;
    color: #fff;
    background-color: purple;
    margin-left: 1rem;
  }
}
</style>
