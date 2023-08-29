import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div key={product.id} className="inline-flex flex-col border shadow-sm">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
          <Image
            src={product.image.imageSrc}
            alt={product.image.imageAlt}
            width={1000}
            height={1000}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="p-3 text-xs">
          <h3 className="font-semibold text-gray-900">
            <Link href={product.slug}>
              <span className="absolute inset-0" />
              {product.title}
            </Link>
          </h3>
          <p className="mt-1">{product.description}</p>
          <p className="mt-1 text-xs text-gray-600">${product.price}</p>
          <Button className="mt-1 border bg-black w-full text-white" >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
