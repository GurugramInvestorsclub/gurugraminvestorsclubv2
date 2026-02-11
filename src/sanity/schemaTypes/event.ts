import { defineType, defineField } from 'sanity'

export const event = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'eventDate',
            title: 'Event Date',
            type: 'datetime',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Upcoming', value: 'Upcoming' },
                    { title: 'Completed', value: 'Completed' },
                ],
            },
            initialValue: 'Upcoming',
        }),
        defineField({
            name: 'registrationLink',
            title: 'Razorpay Registration Link',
            type: 'url',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        })
    ],
})
