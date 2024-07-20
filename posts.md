---
editLink: false
---

<script lang="ts" setup>
import { data as posts } from './data/posts.data.ts'
import { tap } from './data/utils.ts'

function group(posts) {
  return tap(new Map(), (map) => {
    for (const post of posts) {
      const date = new Date(post.frontmatter.date);
      const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(post);
    }
  })
}
</script>

# 所有文章

<template v-for="[key, posts] of group(posts)">
  <h2 :id="key" tabindex="-1">{{ key }}</h2>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
    </li>
  </ul>
</template>
