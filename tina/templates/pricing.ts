

import type { TinaField } from "tinacms";
export function pricingFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "title",
      label: "Meta Title",
    },
    {
      type: "string",
      name: "cover_title",
      label: "Page Title",
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover Image",
    },
    {
      type: "object",
      name: "monthly_card",
      label: "Monthly Card",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "main_price",
          label: "Main Price",
        },
        {
          type: "string",
          name: "second_price",
          label: "Second Price",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "object",
          name: "features",
          label: "Features",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            },
          ]
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        }
      ]
    },
    {
      type: "object",
      name: "yearly_card",
      label: "Yearly Card",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "main_price",
          label: "Main Price",
        },
        {
          type: "string",
          name: "second_price",
          label: "Second Price",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "object",
          name: "features",
          label: "Features",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            },
          ]
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        }
      ]
    }
    
   
  ] as TinaField[];
}