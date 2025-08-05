function Product({ products, addToCart }) {
  const product1 = products[0];
  const product2 = products[1];
  const product3 = products[2];

  return (
    <div className="product-list p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Daftar Produk
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Produk Pertama */}
        {product1 && (
          <div className="product-item bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={product1.image}
              alt={product1.alt}
              className="w-40 h-40 object-cover rounded-md mb-4 shadow-sm"
            />
            <p className="text-lg font-semibold text-gray-700 mb-4 text-center">
              {product1.name} - Rp. {product1.price.toLocaleString("id-ID")}
            </p>
            <button
              onClick={() => addToCart(product1)}
              className="mt-auto w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Tambah ke Keranjang
            </button>
          </div>
        )}

        {/* Produk Kedua */}
        {product2 && (
          <div className="product-item bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={product2.image}
              alt={product2.alt}
              className="w-40 h-40 object-cover rounded-md mb-4 shadow-sm"
            />
            <p className="text-lg font-semibold text-gray-700 mb-4 text-center">
              {product2.name} - Rp. {product2.price.toLocaleString("id-ID")}
            </p>
            <button
              onClick={() => addToCart(product2)}
              className="mt-auto w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Tambah ke Keranjang
            </button>
          </div>
        )}

        {/* Produk Ketiga */}
        {product3 && (
          <div className="product-item bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={product3.image}
              alt={product3.alt}
              className="w-40 h-40 object-cover rounded-md mb-4 shadow-sm"
            />
            <p className="text-lg font-semibold text-gray-700 mb-4 text-center">
              {product3.name} - Rp. {product3.price.toLocaleString("id-ID")}
            </p>
            <button
              onClick={() => addToCart(product3)}
              className="mt-auto w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Tambah ke Keranjang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
