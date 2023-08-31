import { Category } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div key={category.id} className="group relative border shadow-sm">
      <div className="relative h-80 w-full overflow-hidden bg-gray-300 flex items-center justify-center">
        <Image
          src={category.image.imageSrc}
          alt={category.image.imageAlt}
          height={24}
          width={24}
          className="text-opacity-5 bg-gray-300 object-center object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-md mt-2">
          <Link href={category.slug}>
            <span className="absolute inset-0" />
            {category.title}
          </Link>
        </h3>
        <p className="text-xs text-gray-600 mt-2">{category.description}</p>
      </div>
    </div>
  );
}
