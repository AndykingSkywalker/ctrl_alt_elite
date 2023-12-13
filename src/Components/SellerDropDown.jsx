import axios from "axios";
import { useEffect, useState } from "react";





function SellerDropDown(props) {

    const [sellers, setSellers] = useState([])
    const sellerNameComponent = []
    function getSellers() {
        axios
            .get("http://localhost:3030/sellers")
            .then((response) => {
                setSellers(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getSellers, [])


    for (let seller of sellers) {

        sellerNameComponent.push(
            <option value={seller.firstName + " " + seller.lastName}>{seller.firstName + " " + seller.lastName}</option>)

    }
    return(

        <select value={props.value} onChange={props.onChange} required>
            <option selected>Select Seller of Property</option>
            {sellerNameComponent}
            
        </select>
    )
}


export default SellerDropDown;