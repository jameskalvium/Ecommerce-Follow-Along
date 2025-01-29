
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartCard from '../components/ProductCard/CartCard';

function CardPage() {
  const [UsersCartData, setUsersCartData] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('Token is missing , Please login');
      }
      const response = await axios.get(
        `http://localhost:8080/cart/get-user-cart-data?token=${token}`
      );
      console.log(response);
      setUsersCartData(response.data.cartData);
    };

    getCartData();
  }, []);
  return (
    <div>
      <button className = "bg slate -800 text white px t py t rounded md ml 40">
        
      </button>
      {UsersCartData?.map((singleCartObject, index) => {
        return (
          <div key={index}>
            <CartCard
              title={singleCartObject.productId.title}
              image={singleCartObject.productId.images[0]}
              //   Index={index}
              description={singleCartObject.productId.description}
              originalPrice={singleCartObject.productId.originalPrice}
              discountedPrice={singleCartObject.productId.discountedPrice}
              id={singleCartObject._id}
              createdBy={'james@k.com'}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardPage;