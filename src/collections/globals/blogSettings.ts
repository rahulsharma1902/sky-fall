import { GlobalConfig } from "payload";

const BlogSettings: GlobalConfig = {
  slug: "blog-settings",
  label: "Blog Settings",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "bannerImage",
      label: "Blog Banner Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "fetureBlog",
      type: "relationship",
      relationTo: "blogs",
      required: true,
    },
    {
      name: "paginationCount",
      label: "Posts per Page",
      type: "number",
      defaultValue: 6,
      required: true,
    },
  ],
};

export default BlogSettings;
