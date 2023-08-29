"use client";
import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import classNames from "@/lib/utils";
import Link from "next/link";

const navigation = {
  categories: [
    { name: "Home", href: "/", current: false },
    {
      name: "Clothing",
      children: [
        { name: "GraphQL API", href: "#", current: false },
        { name: "iOS App", href: "#", current: false },
        { name: "Android App", href: "#", current: false },
        { name: "New Customer Portal", href: "#", current: false },
      ],
    },
    {
      name: "Accessories",
      children: [
        { name: "GraphQL API", href: "#", current: false },
        { name: "iOS App", href: "#", current: false },
        { name: "Android App", href: "#", current: false },
        { name: "New Customer Portal", href: "#", current: false },
      ],
    },
    { name: "Gallery", href: "/gallery", current: false },
    { name: "Contact", href: "/contact", current: false },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: any;
}) {
  return (
    <Transition.Root show={mobileMenuOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setMobileMenuOpen}
      >
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              {navigation.categories.map((item) => (
                <li key={item.name} className="list-none">
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? "bg-gray-50" : "hover:bg-gray-50",
                              "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                            )}
                          >
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "h-5 w-5 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? "bg-gray-50"
                                      : "hover:bg-gray-50",
                                    "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 block p-2 font-small text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-small text-gray-900"
                  >
                    Register
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-small text-gray-900"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
