const perks = [
  {
    name: "Free delivery over $100",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description: "Orders over $100 are free.",
  },
  {
    name: "Warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
    description: "Warranty available.",
  },
  {
    name: "Refunds",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description: "Refunds available.",
  },
  {
    name: "For the planet",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description: "Ethically sourced.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-50">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl py-16 sm:px-2 md:py-16 lg:py-16 xl:py-24 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flow-root">
                  <img className="h-24 w-28" src={perk.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 ml-3 mt-0">
                <h3 className="text-sm font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
