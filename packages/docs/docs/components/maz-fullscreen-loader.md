---
title: MazFullscreenLoader
description: MazFullscreenLoader is a standalone component
---

<!-- markdownlint-disable MD033 -->

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<!--@include: ./../.vitepress/mixins/getting-started.md-->

## Basic usage

<MazFullscreenLoader v-if="showLoader" @click="showLoader = false">
  <p>
    Loading...
  </p>
  <p>
    (click to hide loader)
  </p>
</MazFullscreenLoader>

<MazBtn @click="showLoader = true">
  Show loader
</MazBtn>

```vue
<template>
  <MazFullscreenLoader v-if="showLoader" @click="showLoader = false">
    <p>
      Loading...
    </p>
    <p>
      (click to hide loader)
    </p>
  </MazFullscreenLoader>

  <MazBtn @click="showLoader = true">
    Show loader
  </MazBtn>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  import MazFullscreenLoader from 'maz-ui/components/MazFullscreenLoader'
  import MazBtn from 'maz-ui/components/MazBtn'

  const showLoader = ref(false)
</script>
```

<script lang="ts" setup>
  import { ref } from 'vue'

  const showLoader = ref(false)
</script>

<!--@include: ./../.vitepress/generated-docs/maz-fullscreen-loader.doc.md-->
