import {defineType} from 'sanity'

export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of dish',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of dish',
      type: 'image',
    },
  ],
}
