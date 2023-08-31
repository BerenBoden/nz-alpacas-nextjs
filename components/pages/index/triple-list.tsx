import Image from "next/image";

export default function TripleList() {
  return (
    <section aria-labelledby="category-heading" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> →</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded shadow-sm border sm:relative sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 sm:h-full">
            <div className="w-full h-120 flex items-center justify-center">
              <Image
                src="/images/blank-image.svg"
                height={24}
                width={24}
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="" />
                    Accessories
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded shadow-sm border sm:aspect-none sm:relative sm:h-full">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/images/blank-image.svg"
                height={24}
                width={24}
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Accessories
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded shadow-sm border sm:aspect-none sm:relative sm:h-full">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/images/blank-image.svg"
                height={24}
                width={24}
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-75 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
