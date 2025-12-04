import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Fresno Auto Sales',

  projectId: 'ygeoeveq',
  dataset: 'production',

  basePath: '/studio', // This makes the dashboard live at /studio

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})