function Listings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-extrabold text-green-700 text-center mb-10 tracking-tight">
          Available Listings
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-semibold text-green-800 mb-3">
                {listing.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {listing.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
