import { collection, config, fields } from '@keystatic/core'
import { Video } from 'lucide-react'
import { block, wrapper } from '@keystatic/core/content-components'

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Better Dev Screencasts',
      mark: () => <Video />,
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: './src/content/posts/*',
      format: {
        contentField: 'body',
      },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Publish date' }),
        excerpt: fields.text({ label: 'Excerpt' }),
        coverImage: fields.image({
          label: 'Cover image',
          directory: 'src/images/posts',
          publicPath: '@images/posts',
        }),
        body: fields.mdx({
          label: 'Body',
          options: {
            image: false,
          },
          components: {
            Split: wrapper({ label: 'Split', schema: {} }),
            Image: block({
              label: 'Image',
              schema: {
                image: fields.image({
                  label: 'Image',
                  validation: { isRequired: true },
                  directory: 'src/images/posts',
                  publicPath: '/src/images/posts',
                }),
                altText: fields.text({
                  label: 'Alt text',
                  validation: {
                    isRequired: true,
                  },
                }),
                classes: fields.text({ label: 'classnames' }),
                caption: fields.text({ label: 'Caption' }),
              },
            }),
            YoutubeVideo: block({
              label: 'Youtube Video',
              schema: {
                id: fields.text({ label: 'Video ID' }),
              },
            }),
            Tweet: block({
              label: 'Tweet',
              schema: {
                id: fields.text({ label: 'Tweet ID' }),
              },
            }),
          },
        }),
      },
    }),
  },
})
