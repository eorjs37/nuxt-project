// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/reset.css"],
  logLevel: "info",
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      secretKey: process.env.SECRET_KEY,
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        {
          name: "naver-site-verification",
          content: "블라블라",
        },
        {
          name: "description",
          content: "진보된 서비스로 AI음악 큐레이션을 리딩하는 뮤직테크 스타트업",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: "(주)어플레이즈",
        },
        {
          name: "og:description",
          content: "진보된 서비스로 AI음악 큐레이션을 리딩하는 뮤직테크 스타트업",
        },
        {
          name: "og:image",
          content: "https://aplayz.co.kr/media/images/logo_500.png",
        },
        {
          name: "og:url",
          content: "https://corp.aplayz.co.kr",
        },
        {
          name: "google-site-verification",
          content: "블라블라",
        },
      ],
      title: "(주)어플레이즈",
      script: [
        {
          src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=4a44a406f85428e304ae880454edaced&libraries=services",
        },
      ],
    },
  },
});
