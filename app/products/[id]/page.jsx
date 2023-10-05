const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};

export default async function Product({ params }) {
  const product = await getProduct(params.id);

  return (
    <section className="mt-32">
      <div className="flex lg:flex-row lg:justify-normal lg:items-start gap-x-10 w-full max-w-6xl mx-auto px-8 sm:flex-col sm:justify-center items-center ">
        <div className=" border-[1px] border-[#eceff133] rounded-2xl overflow-hidden">
          <img src={product.thumbnail} alt="product" width={500} height={500} />
        </div>
        <div>
          <h2 className="font-semibold text-5xl mb-6">{product.title}</h2>
          <p className="text-lg">{product.description}</p>
        </div>
      </div>
    </section>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch(`https://dummyjson.com/products/${params.id}`).then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
