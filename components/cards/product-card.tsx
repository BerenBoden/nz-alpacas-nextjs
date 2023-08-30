"use client";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/cart/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const products = useContextSelector(CartContext, (state) => state.products);
  const setProducts = useContextSelector(
    CartContext,
    (state) => state.setProducts
  );
  console.log(products);
  return (
    <div key={product.id} className="inline-flex flex-col border shadow-sm">
      <div className="group relative">
        <Link href={product.slug} className="aspect-h-1 aspect-w-1">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
            <Image
              src={product.image.imageSrc}
              alt={product.image.imageAlt}
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
        </Link>
        <div className="p-3 text-xs">
          <h3 className="font-semibold text-gray-900">
            <Link href={product.slug} className="aspect-h-1 aspect-w-1">
              <span className="sr-only">{product.title}</span>
              {product.title}
            </Link>
          </h3>
          <p className="mt-1">{product.description}</p>
          <p className="mt-1 text-xs text-gray-600">${product.price}</p>
          <Button
            className="mt-1 border bg-black w-full text-white"
            onClick={() => {
              const newProducts = [product.id, ...products];
              setProducts(newProducts);
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
