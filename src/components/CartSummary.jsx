import React from "react";

function CartSummary({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-summary p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Ringkasan Keranjang
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Keranjang masih kosong.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={item.id + "-" + index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-600">
                      Rp. {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition duration-200"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-gray-800 mt-6 pt-4 border-t-2 border-gray-200 text-right">
            Total: Rp. {total.toLocaleString("id-ID")}
          </h3>
        </>
      )}
    </div>
  );
}

export default CartSummary;
