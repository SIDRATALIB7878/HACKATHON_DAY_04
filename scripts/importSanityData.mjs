
import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';


// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Validate environment variables
const { NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN } = process.env;

if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_DATASET || !SANITY_API_TOKEN) {
  console.error("❌ Missing required environment variables. Check your .env.local file.");
  process.exit(1);
}

// Create Sanity client
const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
});

// Upload Image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    if (!imageUrl || typeof imageUrl !== "string" || !imageUrl.startsWith("http")) {
      console.warn("⚠️ Skipping invalid image URL:", imageUrl);
      return null;
    }

    console.log(`📤 Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    });

    console.log(`✅ Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`❌ Failed to upload image: ${imageUrl}`, error.message);
    return null;
  }
}

// Import Product Data
async function importData() {
  try {
    console.log('⏳ Migrating data, please wait...');

    // Fetch product data from API
    const response = await axios.get('https://template-03-api.vercel.app/api/products');

    // Validate API response
    if (!response.data || !response.data.data || !Array.isArray(response.data.data)) {
      throw new Error('Invalid API response: Expected an array of products');
    }

    const products = response.data.data;
    console.log(`✅ Retrieved ${products.length} products from API.`);

    for (const product of products) {
      let imageRef = null;

      // Validate and upload image if available
      if (product.image && typeof product.image === 'string' && product.image.startsWith('http')) {
        imageRef = await uploadImageToSanity(product.image);
      } else {
        console.warn("⚠️ No valid image found for product:", product.productName);
      }

      // Create product document for Sanity
      const sanityProduct = {
        _type: 'product',
        productName: product.productName || 'Unnamed Product',
        category: product.category || 'Uncategorized',
        price: product.price || 0,
        inventory: product.inventory || 0,
        colors: product.colors || [], // Optional, as per your schema
        status: product.status || 'Unknown',
        description: product.description || 'No description available',
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } :undefined,
      };

      // Upload product data to Sanity
      try {
        await client.create(sanityProduct);
        console.log(`✅ Successfully added product: ${product.productName}`);
      } catch (sanityError) {
        console.error(`❌ Failed to add product: ${product.productName}`, sanityError.message);
      }
    }

    console.log('🎉 Data migration completed successfully!');
  } catch (error) {
    console.error('❌ Error in migrating data:', error.message);
  }
}

// Run import function
importData();
