<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

useSeoMeta({
  title: "about",
  description: "우리서비스 about",
  ogTitle: "about",
  ogDescription: "우리서비스 about",
  ogType: "website",
});
</script>
