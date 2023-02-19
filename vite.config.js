import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        shop: resolve(__dirname, "src/shop.html"),
        about: resolve(__dirname, "src/about.html"),
        contact: resolve(__dirname, "src/contact.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        // product1: resolve(
        //   __dirname,
        //   "src/product_pages/cedar-ridge-rimrock-2.html"
        // ),
        // product2: resolve(__dirname, "src/product_pages/marmot-ajax-3.html"),
        // product3: resolve(
        //   __dirname,
        //   "src/product_pages/northface-alpine-3.html"
        // ),
        // product4: resolve(
        //   __dirname,
        //   "src/product_pages/northface-talus-4.html"
        // ),
      },
    },
  },
});
