/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'ProductName'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 200,
                slugify: (input: any) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: "alt",
                            type: "text",
                            title: "Alternative text",
                        }
                    ]
                }
            ]
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Quantity'
        },
    ]
}
