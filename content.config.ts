import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    json: defineCollection({
      type: "data",
      source: "json/**.json",
      schema: z.object({
        company_name: z.string(),
        description: z.string(),
      })
    })
  },
})
