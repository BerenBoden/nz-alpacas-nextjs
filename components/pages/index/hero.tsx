"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  return (
    <div ref={emblaRef} className="embla">
      <div className="embla__container">
        <div className="flex flex-col border-b border-gray-200 lg:border-0 embla__slide">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute z-10 hidden h-full w-1/2 bg-gray-100 lg:block opacity-90"
            />
            <div className="lg:relative absolute lg:bg-transparent z-20 py-32 lg:py-60">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="text-xl font-bold tracking-tight text-white lg:text-gray-900 sm:text-2xl xl:text-4xl">
                      Heading one
                    </h1>
                    <p className="mt-4 text-sm text-white lg:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit, blanditiis beatae! Assumenda, corrupti.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/"
                        className="inline-block rounded-md border border-transparent bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-black-600"
                      >
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-10 w-full h-80 relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
            <div className="relative w-full h-full bg-gradient-to-t from-black via-black opacity-5 to-transparent z-10"></div>
              <Image
                src="/images/bg-image-5.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
            <Image
              className="absolute z-0 bg-transparent"
              src="/images/topography.svg"
              layout="fill"
              objectFit="cover"
              alt="hero"
            />
          </div>
        </div>
        <div className="flex flex-col border-b border-gray-200 lg:border-0 embla__slide">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute z-10 hidden h-full w-1/2 bg-gray-100 lg:block opacity-90"
            />
            <div className="lg:relative absolute lg:bg-transparent z-20 py-24 lg:py-60">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="text-xl font-bold tracking-tight text-white lg:text-gray-900 sm:text-2xl xl:text-4xl">
                      Heading two
                    </h1>
                    <p className="mt-4 text-sm text-white lg:text-gray-600">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eos praesentium fugiat non ratione quia.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-black-600"
                      >
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-10 w-full h-80 relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <div className="relative w-full h-full bg-gradient-to-t from-black via-black opacity-10 to-transparent z-10"></div>
              <Image
                src="/images/bg-image-7.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
            <Image
              className="absolute z-0 bg-transparent"
              src="/images/leaf.svg"
              layout="fill"
              objectFit="cover"
              alt="df"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
