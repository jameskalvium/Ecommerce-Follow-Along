import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/UpdateForm';
import Navbar from './components/Navbar/Navbar';
import SinglePageProduct from './Pages/SingleProductPage';
import CartPage from './Pages/CartPage'
import ProfilePage from './Pages/Profile';
import AddressCard from './components/Addresscomp/AddressCard';
import SelectAddress from './Pages/SelectAddress'
import OrderConfirmation from './Pages/OrderConfirmationPage'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm />} />
        <Route path='/product-details/:id' element={<SinglePageProduct />}/>
        <Route path = "/cart" element={<CartPage />}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path = "/address" element ={<AddressCard/>}></Route>
        <Route path = "/select-address" element ={<SelectAddress />}></Route>
        <Route path = "/order-confirmation" element ={<OrderConfirmation />}></Route>
      </Routes>
    </>
  );
}

export default App;