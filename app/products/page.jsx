import Link from "next/link";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export default async function Products() {
  const productsList = await getData();

  return (
    <section className="my-10">
      <div className="w-full max-w-6xl mx-auto px-8 grid lg:grid-cols-4 gap-x-6 gap-y-14 sm:grid-cols-1 md:grid-cols-2">
        {productsList.products.map(({ id, thumbnail, title, description }) => {
          return (
            <Link
              key={id}
              href={`/products/${id}`}
              className="bg-[#2b2b2b] border-[1px] border-[#eceff133] rounded-2xl overflow-hidden hover:bg-black duration-200"
            >
              <div className="w-full h-32 overflow-hidden">
                <img src={thumbnail} alt="product" width={500} height={500} />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-4">{title}</h3>
                <p className="leading-5">{description.slice(0, 50)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
