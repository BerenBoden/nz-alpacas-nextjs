import Hero from "@/components/pages/index/hero";
import CategoryList from "@/components/cards/category-list";
import ProductList from "@/components/cards/product-list";
import Incentives from "@/components/pages/index/incentives";
import CallToAction from "@/components/pages/index/call-to-action";
import TripleList from "@/components/pages/index/triple-list";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <main>
        <Hero />
        <ProductList />
        <CategoryList />
        <TripleList />
        <Incentives />
        <CallToAction />
      </main>
    </div>
  );
}
