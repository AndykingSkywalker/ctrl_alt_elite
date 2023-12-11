import Property from './Property';
import axios from 'axios'
import { useEffect, useState } from 'react';
import FilterProperties from './FilterProperties';


function AddNewProperty() {

  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [postCode, setPostCode] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("")
    const [garden, setGarden] = useState("");
    const [propertyStatus, SetPropertyStatus] = useState("");
    const propertyComponent = [];

  function getProperties () {
    axios.get("http://localhost:3030/properties")
    .then((response) => {setProperties(response.data)})

  }
  useEffect (getProperties, [])

const propertycomponents = [];

  for (const property of properties) {
    propertycomponents.push(
        <Property
        key={property.prc + "" + property.loc}
        loc={property.loc}
        prc={property.prc}
        pcod={property.pcod}
        beds={property.beds}
        bath={property.bath}
        grdn={property.grdn}
        propertyStatus={property.status}

        />
      )
    };

    function handleSubmit(event){
      event.preventDefault();


      axios.post("http://localhost:3030/properties", {location, price, postCode, bedrooms, bathrooms, garden})
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

    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
            <br />
            <h5>Add a Property</h5>
            {/* form with inputs for each piece of data */}
          
            <div >
                <form onSubmit={handleSubmit} className="row gx-3 gy-2 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>

                    {/* NEED TO FIGURE OUT HOW TO CLEAR FIELDS ON SUBMIT */}
                    <div class="col-auto">
                        <label for="autoSizingInput">Price</label>
                        <input className="form-control" value={price} onChange={event => setPrice(event.target.value)} placeholder="Price" type="text" required></input>

                        <label for="autoSizingInput">Location</label>
                        <input className="form-control" value={location} onChange={event => setLocation(event.target.value)} placeholder="Location" type="text" required></input>

                        <label for="autoSizingInput">Postcode</label>
                        <input className="form-control" value={postCode} onChange={event => setPostCode(event.target.value)} placeholder="Post Code" type="text" required></input>
                    </div>
                    <div class="col-auto">
                        <label for="autoSizingInput">Bedrooms</label>
                        <input className="form-control" value={bedrooms} onChange={event => setBedrooms(event.target.value)} placeholder="Number of Bedrooms" type="tel" required></input>

                        <label for="autoSizingInput">Bathrooms</label>
                        <input className="form-control" value={bathrooms} onChange={event => setBathrooms(event.target.value)} placeholder="Number of Bathrooms" type="email" required></input>

                          <label htmlFor="">Has a garden?</label>
                        <select className='form-select' value={propertyStatus} name="" id="">
                          <option value="">Select an Option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                   
                       
                    </div>
                </form>

            </div>
    </div>
    <br />
    <div>
                    <button className="btn btn-primary " type="submit" >Submit</button>
                    </div>

    <div>
      <br />
    <FilterProperties/>
        <div style={{display: "none"}}>
              {propertyComponent}
        </div>
    </div>

    </div>

   );
}


export default AddNewProperty;