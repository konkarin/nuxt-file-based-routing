<script setup lang="ts">
// @ts-expect-error virtual file
import sample from "#build/sample"; // created by modules/sample.ts
</script>

<template>
  <h1>{{ sample() }}</h1>
</template>
