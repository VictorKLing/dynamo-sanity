import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sobre',
  title: 'Sobre nós',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutImage',
      title: 'Imagem da seção About',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutText',
      title: 'Texto da seção About',
      type: 'text',
    }),
    defineField({
      name: 'aboutLink',
      title: 'Link do Projeto',
      type: 'url'
    }),
  ],
  preview: {
    select: {
      title: 'aboutText',
      media: 'aboutImage'
    },
    prepare({ title, media }) {
      return {
        title: title ? title.substring(0, 60) + '...' : 'Sem descrição',
        media
      }
    }
  }
})
