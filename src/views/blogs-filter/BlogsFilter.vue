<template>
  <section>
    <header class="page-header">
      <button type="button" class="btn" @click="goBack">&lt; Back</button>
      <h1 class="page-title text-center">Filter Blogs</h1>
    </header>
    <div class="keywords">
      <label
        class="keyword"
        v-for="keyword of highlightedKeywords"
        :key="keyword"
      >
        <input
          type="checkbox"
          :value="keyword"
          v-model="selectedKeyWords"
          @change="onSelectionChange"
        />
        <span class="text">{{ keyword }}</span>
      </label>
    </div>
    <div class="blog-list">
      <template v-if="blogList.length">
        <blog-list-item
          v-for="blog of blogList"
          :blog="blog"
          :key="blog.id"
          :hide-actions="true"
          :keywordsToHighlight="selectedKeyWords"
          @preview="gotoBlogDetails(blog.id)"
        />
      </template>
      <template v-else>
        <div class="no-blogs text-center">No blogs found!</div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" src="./BlogsFilter.ts"></script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.page-header {
  .btn {
    @include button;
    background-color: transparent;
    color: purple;
  }
}
.keywords {
  padding-top: 16px;
  .keyword {
    margin: 0 0.75rem 0.75rem 0;
    cursor: pointer;
    display: inline-block;
    span {
      padding: 0.5rem 1rem;
      background-color: #eee;
      border-radius: 40px;
      display: inline-block;
    }
    input[type="checkbox"] {
      display: none;
    }
    input[type="checkbox"]:checked + span {
      color: #fff;
      background-color: blue;
    }
  }
}
.blog-list {
  padding: 2rem 1rem;
}
</style>
