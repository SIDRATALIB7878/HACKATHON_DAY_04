// "use client"
// import{ client } from"@/sanity/lib/client";
// import {urlFor} from"@/sanity/lib/image";
// import {allproducts, five} from"@/sanity/lib/queries";
// import {product} from"@/types/products";
// import Image from "next/image";
// import link from "next/link";
// import React, { useEffect,useState } from "react";
// import async from '../../fourcompo/shoes/product/page';
// import { product } from '../../../types/products';

// const SHOES = () => {
//   const [products, setProducts] = useState<product[]>([]);
//   useEffect(() =>{
//     async function fetchProducts(){
//         const fetchedProducts: product[] = await client.fetch(five);
//         setProducts(fetchedProducts);
//     }
//     fetchProducts();
//   }
//   ,[]);
//   const handleAddToCart=(e:React.MouseEvent,product:product) => {
//     e.preventDefault();
//     // Add product to cart logic here
//     // Example: localStorage.setItem("cart", JSON.stringify([...JSON.parse(localStorage.getItem("cart") || "[]"), product]));
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-bold">OUR LATEST COLLECTION</h2>
//         <div className="flex space-x-2">
//           {products.map(product =>(
//             <div
//             key ={product._id}
//             className="border runded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
//               <Link href={`/product/${product.slug.current}`}>
//               {product.image &&(
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.productName}
//                   width={200}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-md"
//                 />)}
//               <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
//               <p className="text-sm text-gray-600">{product.description}</p>
//             </Link>
//             </div>

          
//           "use client";

// import { addToCart } from "@/app/actions/actions";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { five } from "@/sanity/lib/queries";
// import { product } from "@/types/products";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect ,useState } from "react";

// const SHOES = () => {
//   const [products, setProducts] = useState<product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProducts: product[] = await client.fetch(five);
//       setProducts(fetchedProducts);
//     }
//     fetchProducts();
//   }, []);

//   const handleAddToCart = (e: React.MouseEvent, product: product) => {
//     e.preventDefault()
//     addToCart(product);

//     // Add product to cart logic here
//     // Example: localStorage.setItem("cart", JSON.stringify([...JSON.parse(localStorage.getItem("cart") || "[]"), product]));
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-xl font-bold mb-6">OUR LATEST COLLECTION</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
//           >
//             <Link href={`/product/${product.slug.current}`}>
//               <div className="cursor-pointer">
//                 {product.image && (
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.productName}
//                     width={200}
//                     height={200}
//                     className="w-full h-48 object-cover rounded-md"
//                   />
//                 )}
//                 <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
//                 <p className="text-sm text-gray-600">{product.description}</p>
//                 <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
//             onClick={(e)=>handleAddToCart(e,product)}>
//               Add to Cart
//             </button>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

//  export default SHOES;
// "use client";

// import { addToCart } from "@/app/actions/actions";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { five } from "@/sanity/lib/queries";
// import { product } from "@/types/products";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const SHOES = () => {
//   const [products, setProducts] = useState<product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: product[] = await client.fetch(five);
//         setProducts(fetchedProducts);
//       } catch (err) {
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const handleAddToCart = (e: React.MouseEvent, product: product) => {
//     e.preventDefault();
//     addToCart(product);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-xl font-bold mb-6">OUR LATEST COLLECTION</h2>

//       {loading && <p>Loading products...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
//           >
//             {product.slug?.current ? (
//               <Link href={`/product/${product.slug.current}`}>
//                 <div className="cursor-pointer">
//                   {product.image && (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.productName}
//                       width={200}
//                       height={200}
//                       className="w-full h-48 object-cover rounded-md"
//                     />
//                   )}
//                   <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
//                   <p className="text-sm text-gray-600">{product.description}</p>
//                 </div>
//               </Link>
//             ) : (
//               <div>
//                 <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
//                 <p className="text-sm text-gray-600">{product.description}</p>
//               </div>
//             )}
//             <button
//               className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-2"
//               onClick={(e) => handleAddToCart(e, product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SHOES;
"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { five } from "@/sanity/lib/queries";
import { product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SHOES = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: product[] = await client.fetch(five);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: product) => {
    e.preventDefault();
    console.log("Product added to cart:", product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">OUR LATEST COLLECTION</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product._id || index} // ✅ Unique key (fallback to index if _id is missing)
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product.slug?.current || ""}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
            </Link>
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
