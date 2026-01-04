<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <h1>{{ config.public.apiBaseUrl }}</h1>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
</script>
