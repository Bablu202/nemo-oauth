import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    startDate: {
      type: "date",
      description: "The start-date of the post Trip",
      required: true,
    },
    returnDate: {
      type: "date",
      description: "The return-date of the post Trip",
      required: true,
    },
    duration: {
      type: "number",
      description: "The duration of the trip",
      required: true,
    },
    status: {
      type: "string",
      description: "The status of the post",
      required: true,
    },
    price: {
      type: "string",
      description: "The duration of the trip",
      required: true,
    },
    imageURL: {
      type: "string",
      description: "img",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
