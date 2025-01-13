import { useEffect, useState } from 'react';
import Card from '../components/ProductCard/Card';
import axios from 'axios';

function HomePage() {
  // const [data, setdata ] = useState(
  //   new Array(20).fill({ title: 'Product Title' })
  // );


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

  return (
    <div>
      <h1 className="text-center">Home Page for Follow Along</h1>

      <div className="grid grid-cols-3">
        {data?.map((ele, index) => {
        return (
          <div key={index} style={{ margin: 'auto' }} className="border border-white">
              <Card
                title={ele.title}
                image={ele.images[0] ? ele.images[0] : 'Product Image missing'}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
