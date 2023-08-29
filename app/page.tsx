import Footer from "@/components/pages/index/footer";
import Hero from "@/components/pages/index/hero";
import Collections from "@/components/pages/index/collections";
import Trending from "@/components/pages/index/trending";
import Testimonials from "@/components/pages/index/testimonials";

export default function Home() {

  return (
    <div className="bg-white">
      <main>
        <Hero />
        <Trending />
        <Collections />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
