import axios from "axios";
// installed axios (npm install axios) and then imported
import { useState } from "react";


function Buyers() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [emailAdd, setEmailAdd] = useState("");
    const [buyers, setBuyers] = useState([])
    const buyerComponent =[]

    function fetchBuyers() {

        axios.get("http://localhost:3030/buyers")
            .then((response) => {
                setBuyers(response.data)
            })
            .catch(error => console.error(error))

            
        for (let buyer of buyers) {
            buyerComponent.push(<tr>{buyer}</tr>)
        }

    }






    const handleSubmit = event => {
        event.preventDefault();

        // Please update url to match the port your JSON server is running in! I was silly and didn't use the same as everyone else!!

        axios.post("http://localhost:3030/buyers", { firstName, lastName, postCode, phoneNum, emailAdd })


            .then(response => {
                setFirstName("");
                setLastName("");
                setPostCode("");
                setPhoneNum("");
                setEmailAdd("");
            })
            .catch(error => console.error(error))

    }
    return (




        <div >
            <h1>Buyers page</h1>
            {/* form with inputs for each piece of data */}
            <form onSubmit={handleSubmit}>
                {/* NEED TO FIGURE OUT HOW TO CLEAR FIELDS ON SUBMIT */}
                <input value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="First Name" type="text"></input>
                <input value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Last Name" type="text"></input>
                <input value={postCode} onChange={event => setPostCode(event.target.value)} placeholder="Post Code" type="text"></input>
                <input value={phoneNum} onChange={event => setPhoneNum(event.target.value)} placeholder="Phone Number" type="tel"></input>
                <input value={emailAdd} onChange={event => setEmailAdd(event.target.value)} placeholder="Email Address" type="email"></input>
                <button type="submit" >Submit</button>
            </form>


            {/* basic table that will eventually display the data */}



            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Post Code</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                {/* {fetchBuyers()}
                {buyerComponent} */}
                

            </table>

        </div>

    )
}

export default Buyers;