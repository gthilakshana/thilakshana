import { createClient } from '@sanity/client';

let client = null;

export const getSanityClient = () => {
  if (!client) {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    if (!projectId) {
      console.warn('Sanity Project ID is missing');
    }
    client = createClient({
      projectId: projectId || 'placeholder-id',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      apiVersion: '2023-05-03',
      token: process.env.SANITY_API_TOKEN,
    });
  }
  return client;
};
