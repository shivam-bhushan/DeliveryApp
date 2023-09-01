import {defineField, defineType} from 'sanity'
export default {
  name: 'featured',
  title: 'Featured Menu',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'restaurants',
      title: 'Restaurant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
