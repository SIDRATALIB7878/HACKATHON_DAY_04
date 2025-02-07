// "use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { product } from "@/types/products";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Fetch all products
const fetchProducts = async (): Promise<product[]> => {
  const query = `*[_type == "product"]{
    _id,
    productName,
    slug,
    image,
    price
  }`;
  return await client.fetch(query);
};

export default function ProductList() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    getProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link href={`/product/${product.slug.current}`} key={product._id}>
            <div className="border p-4 rounded-lg hover:shadow-lg">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              )}
              <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
              <p className="text-md font-semibold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
