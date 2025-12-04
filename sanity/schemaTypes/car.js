export const car = {
  name: 'car',
  title: 'Car Inventory',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Car Name (e.g. 2018 Honda Civic)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL - click generate)',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // 'text' allows for multiple lines (paragraphs)
      rows: 4,      // Sets the default height of the input box
      description: 'Write a detailed summary of the vehicle condition, history, and key features.',
    },
    {
      name: 'status',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold', value: 'sold' },
          { title: 'Pending', value: 'pending' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Price (Cash)',
      type: 'number',
    },
    {
      name: 'mileage',
      title: 'Mileage',
      type: 'number',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true } // Allows cropping
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}