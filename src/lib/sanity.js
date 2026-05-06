import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Must be false for write operations
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // Required for uploads
});
