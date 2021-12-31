<template>
  <section class="form-wrapper">
    <header class="page-header">
      <button type="button" class="btn" @click="back">&lt; Back</button>
      <h1 class="page-title text-center">{{ `${isEditMode ? 'Update' : 'Create'} Blog` }}</h1>
    </header>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label for="blog-title">Title</label>
        <input
          type="text"
          id="blog-title"
          placeholder="Title"
          v-model.trim="formData.title"
        />
      </div>
      <div class="input-group">
        <label for="blog-content">Content</label>
        <medium-editor
          id="blog-content"
          :prefill="editorPrefilData"
          v-model="formData.content"
          :options="options"
        />
        <p class="hint">Select word to highlight</p>
      </div>
      <div class="input-group">
        <label for="blog-author">Author</label>
        <input
          type="text"
          id="blog-author"
          disabled
          v-model="formData.author"
        />
      </div>
      <div class="button-group text-center">
        <button class="btn btn-cancel" type="button" @click="back">Back</button>
        <button class="btn btn-submit" type="submit" :disabled="!canSubmit">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts" src="./BlogForm.ts"></script>

<style lang="scss" scoped>
@import "@/styles/mixins";

@import "~medium-editor/dist/css/medium-editor.css";
@import "~vuejs-medium-editor/src/themes/default.css";

$input-label-color: #000;
$input-border-color: #ccc;

.form-wrapper {
  padding-bottom: 2rem;
  .input-group {
    margin-bottom: 2rem;
    label {
      display: block;
      margin-bottom: 1rem;
      color: $input-label-color;
      @include font-semi-bold;
    }
    input {
      padding: 0.75rem;
      width: 100%;
      border: 1px solid $input-border-color;
      font-size: 1rem;
      border-radius: 4px;
      color: #000;
      &::placeholder {
        color: $input-border-color;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .button-group {
    margin-top: 4rem;
    .btn {
      @include button;
      min-width: 140px;
      &.btn-cancel {
        margin-right: 1rem;
        background-color: transparent;
        color: purple;
        border: 1px solid purple;
      }
      &.btn-submit {
        background-color: purple;
        color: white;
      }
      &:disabled {
        opacity: 0.5;
      }
    }
  }
}
.page-header {
    .btn {
    @include button;
    background-color: transparent;
    color: purple;
  }
}
</style>
<style lang="scss">
$input-border-color: #ccc;
.input-group .medium-editor-container {
  border: 1px solid $input-border-color;
  border-radius: 4px;
  padding: 2rem;
}
</style>
