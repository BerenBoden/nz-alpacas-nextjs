import ProductCard from "@/components/cards/product-card";
import { Product } from "@/types/types";
import Link from "next/link";

const products: Product[] = [
  {
    id: 1,
    title: "Machined Pen",
    price: 35,
    slug: "machined-pen",
    image: {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    stock: 3,
    category: "Accessories",
    description: "The Pen is machined from solid steel and painted black.",
  },
  {
    id: 1,
    title: "Machined Pen",
    price: 35,
    slug: "machined-pen",
    image: {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    stock: 3,
    category: "Accessories",
    description: "The Pen is machined from solid steel and painted black.",
  },
  {
    id: 1,
    title: "Machined Pen",
    price: 35,
    slug: "machined-pen",
    image: {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    stock: 3,
    category: "Accessories",
    description: "The Pen is machined from solid steel and painted black.",
  },
  {
    id: 1,
    title: "Machined Pen",
    price: 35,
    slug: "machined-pen",
    image: {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    stock: 3,
    category: "Accessories",
    description: "The Pen is machined from solid steel and painted black.",
  },
];

export default function Trending() {
  return (
    <section aria-labelledby="trending-heading" className="bg-white">
      <div className="py-16 sm:py-24 mx-auto max-w-7xl px-8 lg:py-32">
        <div className="flex items-center justify-between">
          <h2
            id="trending-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Trending products
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            See more
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="relative mt-8">
          <div className="relative">
            <div
              role="list"
              className="grid grid-cols-2 gap-y-4 gap-x-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-4"
            >
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 px-4 sm:hidden">
          <Link
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            See more
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
