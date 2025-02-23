import { useEffect, useState } from 'react';
import Card from '../components/ProductCard/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function HomePage() {
  const dataRedux = useSelector((state) =>state.user);

  const [data, setdata] = useState();
  const fetchProduct = async () => {
    const response = await axios.get(
      'http://localhost:8080/product/get-products'
    );
    setdata(response.data.data);
    // console.log(response);
  };

  useEffect(() => {
    console.log('clicked');

    const callhandle = async () => {
      await fetchProduct();
    };
    callhandle();
  }, []);
  console.log(data);

  const handleDelete = async (id) => {
    console.log('id', id);
    const data = await axios.delete(`http://localhost:8080/product/${id}`);
    setdata(data.data.data);
  };

  return (
    <div>
      <h1 className="text-center">Home Page for Follow along</h1>

      <div className="grid grid-cols-3">
        {data?.map((ele, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div style={{ margin: 'auto' }} className="border border-white">
              key={ele._id || index}
             <Link to={`/product-details/${ele._id}`}>
                <Card
                  title={ele.title}
                  image={ele.images[0] ? ele.images[0] : 'Product Image missing' }
                  Index={index}
                  description={ele.description}
                  originalPrice={ele.originalPrice}
                  discountedPrice={ele.discountedPrice}
                  rating={ele.rating}
                  id={ele._id}
                  handleDelete={handleDelete}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;