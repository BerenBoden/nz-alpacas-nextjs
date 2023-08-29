import React from "react";

type CategoryItem = {
  name: string;
  href: string;
};

type Categories = {
  [key: string]: CategoryItem[] | string;
};

export default function RenderCategories({
  categories,
}: {
  categories: Categories;
}) {
  const elements = [];
  for (const key in categories) {
    if (
      Object.prototype.hasOwnProperty.call(categories, key) &&
      key !== "name"
    ) {
      const currentCategory = categories[key];
      if (Array.isArray(currentCategory)) {
        elements.push(
          <div key={key}>
            <p
              id={`desktop-${key}-heading`}
              className="capitalize font-medium text-gray-900"
            >
              {key}
            </p>
            <ul
              role="list"
              aria-labelledby={`desktop-${key}-heading`}
              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
            >
              {currentCategory.map((item: CategoryItem) => (
                <li key={item.name} className="flex">
                  <a href={item.href} className="hover:text-gray-800">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }
  }

  return <>{elements}</>;
}
