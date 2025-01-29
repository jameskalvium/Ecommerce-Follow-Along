export default function OrderConfirmation() {
    const [cartData, setCartData] = usestate([]);
    const[total,setTotal] =usestate(0)
    const [address,setAddress]=usestate(
        
    )
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
    return 
}