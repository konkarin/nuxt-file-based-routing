import { addTemplate, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  setup() {
    addTemplate({
      filename: "sample.ts",
      getContents: () =>
        `export default function () { return 'this is a sample from nuxt modules.' } `,
    });
  },
});
