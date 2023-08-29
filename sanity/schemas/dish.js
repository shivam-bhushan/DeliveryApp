import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'string',
      type: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price of dish',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of dish',
      type: 'image',
    }),
  ],
})