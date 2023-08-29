import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'featured',
  title: 'Featured Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurants',
      title: 'array',
      type: 'Restaurant',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
