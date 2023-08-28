import Image from "next/image";

export default function Home() {
  return (
    <main className="h-80">
      <div className="h-full">
        <div className="h-5/6">
          <Image
            src="/images/topography.svg"
            height={100}
            width={100}
            className="h-5/6"
            alt="hero background"
          />
        </div>
      </div>
    </main>
  );
}
