import Image from "next/image";

export default function callToAction() {
  return (
    <section aria-labelledby="sale-heading">
      <div className="overflow-hidden pt-32 sm:pt-14">
        <div className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative pb-16 pt-48 sm:pb-24">
              <div>
                <h2
                  id="sale-heading"
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Final Stock.
                  <br />
                  Up to 50% off.
                </h2>
                <div className="mt-6 text-base">
                  <a href="#" className="font-semibold text-white">
                    Shop the sale
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0 flex items-center justify-center border h-64 w-64 shadow-sm rounded">
                      <Image
                        className="bg-white rounded object-cover"
                        src="/images/blank-image.svg"
                        width={24}
                        height={24}
                        alt="a"
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 flex items-center justify-center border h-64 w-64 shadow-sm sm:mt-0 rounded">
                      <Image
                        width={24}
                        height={24}
                        className="bg-white rounded object-cover"
                        src="/images/blank-image.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0 flex items-center justify-center rounded border h-64 w-64">
                      <Image
                        width={24}
                        height={24}
                        className="bg-white rounded object-cover"
                        src="/images/blank-image.svg"
                        alt=""
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 flex items-center justify-center border h-64 w-64 shadow-sm sm:mt-0 rounded">
                      <Image
                        width={24}
                        height={24}
                        className="bg-white rounded object-cover"
                        src="/images/blank-image.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0 flex items-center justify-center rounded border h-64 w-64">
                      <Image
                        width={24}
                        height={24}
                        className="bg-white rounded object-cover"
                        src="/images/blank-image.svg"
                        alt=""
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 flex items-center justify-center border h-64 w-64 shadow-sm sm:mt-0  rounded">
                      <Image
                        width={24}
                        height={24}
                        className="bg-white rounded object-cover"
                        src="/images/blank-image.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
