import axios from "axios";
// installed axios (npm install axios) and then imported
import { useEffect, useState } from "react";
import Buyer from "../Buyer";


function Buyers() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [emailAdd, setEmailAdd] = useState("");
    const [buyers, setBuyers] = useState([])
    const buyerComponent = []


    function getBuyers() {
        axios
            .get("http://localhost:3030/buyers")
            .then((response) => {
                setBuyers(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getBuyers, [])

    for (let buyer of buyers) {
        buyerComponent.push(
            <Buyer
                firstName={buyer.firstName}
                lastName={buyer.lastName}
                postCode={buyer.postCode}
                phoneNum={buyer.phoneNum}
                emailAdd={buyer.emailAdd}
            />)
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
                getBuyers()
            })
            .catch(error => console.error(error))

    }
    return (




        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Buyers page</h1>
            {/* form with inputs for each piece of data */}

            <div ClassName="col">
                <form onSubmit={handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">

                    {/* NEED TO FIGURE OUT HOW TO CLEAR FIELDS ON SUBMIT */}
                    <input className="form-control" value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="First Name" type="text"></input>

                    <input className="form-control" value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Last Name" type="text"></input>
                    <input className="form-control" value={postCode} onChange={event => setPostCode(event.target.value)} placeholder="Post Code" type="text"></input>
                    <input className="form-control" value={phoneNum} onChange={event => setPhoneNum(event.target.value)} placeholder="Phone Number" type="tel"></input>
                    <input className="form-control" value={emailAdd} onChange={event => setEmailAdd(event.target.value)} placeholder="Email Address" type="email"></input>
                    <button className="form-control" type="submit" >Submit</button>

                </form>

            </div>

            {/* basic table that will eventually display the data */}
            <br />
            <br />
            <br />


            <table className="table table-bordered ">
                <thead className="table-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Post Code</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {buyerComponent}
                </tbody>

            </table>

        </div >

    )
}

export default Buyers;