import CategoryCard from "@/components/cards/category-card";
import { Category } from "@/types/types";
import Link from "next/link";

const categories: Category[] = [
  {
    id: 1,
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio. Quos atque eaque ea velit, obcaecati quam quo unde soluta?",
    image: {
      id: 1,
      imageSrc: "/images/blank-image.svg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    },
    slug: "#",
  },
  {
    id: 2,
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa.",
    image: {
      id: 2,
      imageSrc: "/images/blank-image.svg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    },
    slug: "#",
  },
  {
    id: 3,
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat magnam nobis delectus hic dicta.",
    image: {
      id: 3,
      imageSrc: "/images/blank-image.svg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    },
    slug: "#",
  },
];

export default function CategoryList() {
  return (
    <section aria-labelledby="category-list" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Popular categories
            </h2>
            <Link
              href="/"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              See more
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map((collection) => (
              <CategoryCard category={collection} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
