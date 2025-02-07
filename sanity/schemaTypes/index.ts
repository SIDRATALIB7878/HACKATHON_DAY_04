// import { type SchemaTypeDefinition } from 'sanity';
// // import ProductSchema from './productSchema'; // Ensure the correct path to your productSchema file

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [productSchema],
// };
import { SchemaTypeDefinition } from 'sanity';
import { productSchema } from './productSchema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
};


