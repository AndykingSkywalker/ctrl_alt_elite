import axios from "axios";
import { useEffect, useState } from "react";

function HomeTotals() {

    const [buyers, setBuyers] = useState([])
    const [sellers, setSellers] = useState([])
    const [properties, setProperties] = useState([])
    const [bookings, setBookings] = useState([])

    function getBuyers() {
        axios
            .get("http://localhost:3030/buyers")
            .then((response) => {
                setBuyers(response.data)
            })
            .catch(error => console.error(error))
    } useEffect(getBuyers, [])

    function getSellers() {
        axios
            .get("http://localhost:3030/sellers")
            .then((response) => {
                setSellers(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getSellers, [])

    function getProperties() {
        axios
            .get("http://localhost:3030/properties")
            .then((response) => {
                setProperties(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getProperties, [])

    function getBookings() {
        axios
            .get("http://localhost:3030/bookings")
            .then((response) => {
                setBookings(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getBookings, [])

    return (
        <div className="container text-center" style={{ borderStyle: "dashed", borderColor: "#f603a3" }}>
            <div className="row">
                <div className="col">
                    <h3>Buyers</h3>
                    {buyers.length}
                </div>
                <div className="col">
                    <h3>Sellers</h3>
                    {sellers.length}
                </div>
                <div className="col">
                    <h3>Properties</h3>
                    {properties.length}
                </div>
                <div className="col">
                    <h3>Bookings</h3>
                    {bookings.length}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    { }
                </div>
                <div className="col">
                    { }
                </div>
                <div className="col">
                    { }
                </div>
                <div className="col">
                    { }
                </div>
            </div>
        </div>
    );
}

export default HomeTotals;