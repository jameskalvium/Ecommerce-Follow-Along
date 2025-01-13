
function Card({
  title,
  image,
  description,
  discountedPrice,
  originalPrice,
  rating,
}) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          -20%
        </span>
      </div>

     
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          
          {title} 
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
        With super-bright screens, powerful processors and long-lasting batteries, you can now scroll, stream and game for even longer.
        {description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">${originalPrice}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              {discountedPrice}
            </span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;