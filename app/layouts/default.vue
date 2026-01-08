<template>
  <AppHeader />
  <main>
    <slot></slot>
  </main>
  <footer>
    <h1>FOOTER</h1>
  </footer>
</template>
<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
</script>
