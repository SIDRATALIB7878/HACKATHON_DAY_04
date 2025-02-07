// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";

// interface productpagepops{
//     params : Promise<{slug: string}>;
// }
// async function getProduct(slug: string): Promise<product> {
//     return client.fetch(
//         groq`*[_type=="product" && slug.current==$slug][0]{
//         _id,
//         productName,
//         category,
//         price,
//         inventory,
//         colors[],
//         img}`,{slug}
//     }
// export default  async function Productpage({params}: productpagepops){
//     const{slug}=await params;
//     const product= await getProduct(slug);
//     return(
//         <div className="max-w-7xl- mx-auto px-4">
//             <div className="grid grid-col-l md:grid-cols-2 gap-12">
//             <div className="aspect-square">
//                 {product.image &&(
//                     <img
//                         src={urlFor(Product.image).url()}
//                         alt={product.productName}
//                         width={500}
//                         height={500}
//                         className="rounded-lg shadow-md"
//                     />
//                 )}
//             </div>
//             <h1>{product?.productName}</h1>
//             <h2>{product?.category}</h2>
//             <h3>Price: ${product?.price}</h3>
//             <h3>Inventory: {product?.inventory}</h3>
//             <h3>Colors: {product?.colors.join(', ')}</h3>
//             <img src={product?.img} alt={product?.productName}/>
//         </div>
//     )
// }
"use client"
import { product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Assuming urlFor is imported from the Sanity client setup

const allProducts = `*[_type == "product"]{
  _id,
  productName,
  image,
  slug,
  price // Make sure to include price and slug in the query
}`;

const SHOES = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="product-item">
            <h3>{product.productName}</h3>

            {/* Image rendering with proper validation */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()} // Generate the URL for the image
                alt={product.productName} // Use product name for alt text
                width={400}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            )}

            {/* Render price if available */}
            {product.price && <p className="text-xl font-semibold">${product.price}</p>}

            {/* Link to product page */}
            {product.slug && (
              <a
                href={`/product/${product.slug.current}`}
                className="text-blue-500 hover:underline"
              >
                View Product
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default SHOES;
