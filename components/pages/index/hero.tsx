export default function Hero() {
  return (
    <div className="flex flex-col border-b border-gray-200 lg:border-0">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
        />
        <div className="relative bg-gray-100 lg:bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
              <div className="lg:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                  Focus on what matters
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  All the charts, datepickers, and notifications in the world
                  can't beat checking off some items on a paper card.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Productivity
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}