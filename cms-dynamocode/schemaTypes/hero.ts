import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (H1)',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroTagline',
      title: 'Frase de Impacto',
      type: 'text',
      description: 'Uma frase curta que resume sua proposta ou valor',
    }),
  ],
})
