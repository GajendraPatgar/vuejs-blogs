<template>
  <section class="blog-details" v-if="blogDetails">
    <div class="back">
      <button type="button" class="btn" @click="goBack">&lt; Back</button>
    </div>
    <header>
      <h1 class="blog-title">{{ blogDetails.title }}</h1>
      <p class="blog-author">By - {{ blogDetails.author }}</p>
    </header>
    <div class="blog-content" v-html="blogDetails.content"></div>
  </section>
</template>

<script lang="ts" src="./BlogDetails.ts"></script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.blog-details {
  padding: 16px 0;
  .blog-title {
    font-size: 2rem;
    @include font-bold;
    display: inline-block;
    padding: 0.5rem 0;
    border-bottom: 5px solid #aaa;
  }
  .blog-author {
    padding: 0.5rem 0;
    color: #4a4a4a;
  }
  .blog-content {
    padding: 2rem 0;
    line-height: 1.5;
  }
}
.back {
  margin-bottom: 1rem;
  .btn {
    @include button;
    background-color: transparent;
    color: purple;
  }
}
</style>
