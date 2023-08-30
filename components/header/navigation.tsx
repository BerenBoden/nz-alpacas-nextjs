"use client";
import React from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import classNames from "@/lib/utils";
import Link from "next/link";
import RenderCategories from "./render-categories";
import Image from "next/image";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/cart/cart-context";
import Button from "../ui/button";

const navigation = {
  categories: [
    {
      name: "Shop",
      featured: [
        { name: "Sleep", href: "#" },
        { name: "Swimwear", href: "#" },
        { name: "Underwear", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
        { name: "Bottoms", href: "#" },
        { name: "Underwear", href: "#" },
        { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "Full Nelson", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
    {
      name: "Blog",
      featured: [
        { name: "Casual", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Outdoor", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Artwork Tees", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Basic Tees", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

export default function Navigation({
  setMobileMenuOpen,
}: {
  setMobileMenuOpen: any;
}) {
  const cart = useContextSelector(CartContext, (state) => state.cart);
  const setCart = useContextSelector(CartContext, (state) => state.setCart);
  return (
    <header className="w-full z-10 fixed">
      <nav aria-label="Top">
        <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:items-center">
                  <Link href="/">
                    <span className="sr-only">New Zealand Alpacas LTD</span>
                    <Image
                      src="/images/logo.svg"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Mega menus */}
                  <Popover.Group className="ml-8">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.pages.slice(0, 1).map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-small text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </Link>
                      ))}
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? "border-indigo-600 text-indigo-600"
                                      : "border-transparent text-gray-700 hover:text-gray-800",
                                    "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-small transition-colors duration-200 ease-out"
                                  )}
                                >
                                  {category.name}
                                  <ChevronDownIcon className="ml-2 h-2 w-2" />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                    aria-hidden="true"
                                  />

                                  <div className="relative bg-white">
                                    <div className="mx-auto max-w-7xl px-8">
                                      <div className="grid grid-cols-4 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                        <RenderCategories
                                          categories={category}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      {navigation.pages
                        .slice(1, navigation.pages.length)
                        .map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-small text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </Link>
                        ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <Button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                  </Button>

                  {/* Search */}
                  <a
                    href="#"
                    className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <Link href="/" className="lg:hidden">
                  <span className="sr-only">New Zealand Alpacas LTD</span>
                  <Image
                    src="/images/logo.svg"
                    width={100}
                    height={100}
                    alt=""
                    className="h-8 w-auto"
                  />
                </Link>

                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <a
                          href="#"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Search</span>
                          <MagnifyingGlassIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </div>

                      <div className="flex">
                        <a
                          href="#"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Account</span>
                          <UserIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span
                      className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                      aria-hidden="true"
                    />

                    <div className="flow-root">
                      <div className="group -m-2 flex items-center p-2 cursor-pointer">
                        <ShoppingCartIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                          onClick={() => {
                            setCart(!cart);
                          }}
                        />
                        <span className="ml-2 text-xs text-gray-500 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">
                          click to view items in cart
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
