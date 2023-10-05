import Link from "next/link";
export default function Home() {
  return (
    <section className="mt-20">
      <div className="w-full max-w-6xl mx-auto px-8">
        <h1 className="text-8xl font-bold mb-10">Welcome</h1>
        <Link
          href="/products"
          className="py-3 px-4 bg-[#2b2b2b] border-[1px] border-[#eceff133] rounded-2xl overflow-hidden hover:bg-black duration-200"
        >
          Check out merch
        </Link>
      </div>
    </section>
  );
}
