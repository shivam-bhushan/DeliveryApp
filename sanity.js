import sanityClient, { SanityClient, createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "t644eof1",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-30",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;