# Nuxt

## Nuxt.config.ts

```
Nuxt의 환경 설정파일이다.
import없이도 전역적으로 사용이 가능하다
```

### .env.development

```
NUXT_PUBLIC_API_BASE_URL=https://abc.com
SECRET_KEY=1234
LOG_LEVEL=debug
```

### .env.production

```
NUXT_PUBLIC_API_BASE_URL=https://prodction.com
SECRET_KEY=5678
LOG_LEVEL=debug
```

### nuxt.config.ts 설정

```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  logLevel: "info",
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      secretKey: process.env.SECRET_KEY,
    },
  },
});
```

### 페이지에 보여주기

```
useRuntimeConfig 를 통해 접근하여
보여줘야한다
```

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <h1>{{ config.public.apiBaseUrl }}</h1>
    <h1>{{ config.public.secretKey }}</h1>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
</script>
```

### nuxt 실행

```bash
nuxi dev --dotenv .env.development
## nuxi dev --dotenv .env.production
```

## app.config.ts
