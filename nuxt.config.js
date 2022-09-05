export default {
    head: {
        title: "NIBMG Web Development",
        htmlAttrs: { lang: "en" },
        meta: [
            { charset: "utf-8" },
            { name: "format-detection", content: "telephone=no" },
            { hid: "description", name: "description", content: "" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
            {
                rel: "apple-touch-icon",
                type: "image/x-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
            { rel: "manifest", href: "/site.webmanifest" },
        ],
    },

    css: [],
    axios: {},
    build: {},
    plugins: [],
    components: true,
    router: { base: "/" },
    modules: ["@nuxtjs/axios"],
    tailwindcss: { viewer: false },
    buildModules: ["@nuxtjs/tailwindcss"],
};
