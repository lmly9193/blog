---
prev: false
next: false
---

<script setup>
  import { data as posts } from './index.data'
</script>

<h1>All Blog Posts</h1>
<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
  </li>
</ul>
