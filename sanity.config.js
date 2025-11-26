import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Fresno Auto Sales',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  basePath: '/studio', // This makes the dashboard live at /studio

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})