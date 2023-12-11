import axios from "axios";
import { useEffect, useState } from "react";
import Property from "./Property";

function AddProperties() {

    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [postCode, setPostCode] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("")
    const [garden, setGarden] = useState("");
    const [propertyStatus, SetPropertyStatus] = useState("");
    const [properties, setProperties] = useState([]);
    const propertyComponent = [];



    function getProperties() {
        axios
            .get("https://localhost:3030/properties")
            .then((response) => {
                setProperties(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getProperties, [])

    for (const property of properties) {
        propertyComponent.push(
            <Property
             key={property.prc + " " + property.pcod}
             price={property.prc}
             location={property.loc}
             postCode={property.pcod}
             bedrooms={property.beds}
             bathrooms={property.bath}
             garden={property.grdn}
             propertyStatus={property.status}

            />)
    }

    const handleSubmit = event => {
        event.preventDefault();


        axios.post("https://localhost:3030/properties", {price, location, postCode, bedrooms, bathrooms, garden, propertyStatus})

        .then(response => {
            setPrice("");
            setLocation("");
            setPostCode("");
            setBedrooms("");
            setBathrooms("");
            setGarden("");
            SetPropertyStatus("");
            getProperties()
        })
        .catch(error => console.error(error))
    }

    return ( 
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <br />
            <h1>Properties Page</h1>
            {/* form with inputs for each piece of data */}
            <br />
            <br />
            <div >
                <form onSubmit={handleSubmit} className="row gx-3 gy-2 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>

                    {/* NEED TO FIGURE OUT HOW TO CLEAR FIELDS ON SUBMIT */}
                    <div class="col-auto">
                        <label for="autoSizingInput">Price</label>
                        <input className="form-control" value={price} onChange={event => setPrice(event.target.value)} placeholder="" type="text" required></input>

                        <label for="autoSizingInput">Location</label>
                        <input className="form-control" value={location} onChange={event => setLocation(event.target.value)} placeholder="" type="text" required></input>

                        <label for="autoSizingInput">Postcode</label>
                        <input className="form-control" value={postCode} onChange={event => setPostCode(event.target.value)} placeholder="" type="text" required></input>
                    </div>
                    <div class="col-auto">
                        <label for="autoSizingInput">Number of Bedrooms</label>
                        <input type="number" max="4" className="form-control" value={bedrooms} onChange={event => setBedrooms(event.target.value)} placeholder=""  required></input>

                        <label for="autoSizingInput">Number of Bathrooms</label>
                        <input className="form-control" value={bathrooms} onChange={event => setBathrooms(event.target.value)} placeholder="" type="number" max="4" required></input>

                
                        <label for="autoSizingInput">Has a Garden?</label>
                        <input className="form-control" value={garden} onChange={event => setGarden(event.target.value)} placeholder="" type="text" required></input>

                    
                        <br />
                        <button className="form-control" type="submit" >Submit</button>
                    </div>
                </form>

            </div>

            {propertyComponent}

        </div >

     );
}

export default AddProperties;