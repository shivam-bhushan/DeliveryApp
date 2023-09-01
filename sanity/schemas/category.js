import {defineType} from 'sanity'

export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Categoty name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Category',
      type: 'image',
    },
  ],
}
