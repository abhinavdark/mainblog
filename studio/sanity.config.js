import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig({

  project: {
    basePath: '/studio'
   },


  projectId: 'lcnmavhm',
  dataset: 'production',

  plugins: [deskTool(), unsplashImageAsset(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
