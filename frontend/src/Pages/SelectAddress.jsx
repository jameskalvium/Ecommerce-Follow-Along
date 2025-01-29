import { DeleteIcon } from "lucide-react";
import { useEffect } from "react";

export default funciton SelectAddress(){
    const [AllAddress, setAllAddress]
    useEffect(()=>{
        const fetchAddress = async ()=>{
            const token = localStorage.getItem('token');
            if(!token){
                alert("token missing please login")
            }
            const response = await axios.get(
                `https://localhost:8080/user/get-address`?token=${token}
            );
            console.log(response.data.userInfo);
        }
        fetchAddress();

    },[])
    return (
        <div>
             <AddressList address ={AllAddressddress}/>
        </div>
    )
}