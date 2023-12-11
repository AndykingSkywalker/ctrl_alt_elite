import Property from './Property';
import axios from 'axios'
import { useEffect, useState } from 'react';
import FilterProperties from './FilterProperties';
import SellerDropDown from './SellerDropDown';


function AddNewProperty() {

  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [postCode, setPostCode] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("")
    const [garden, setGarden] = useState("");
    const [newlyCreated, setNewlyCreated] = useState("");
    const [propertyStatus, SetPropertyStatus] = useState("");
    const [sellerName, setSellerName] = useState("")




    function handleSubmit(event){
      event.preventDefault();

      const newProperty = {
        sellnme: sellerName,
        prc: price,
        loc: location,
        pcod: postCode,
        beds: bedrooms,
        bath: bathrooms,
        grdn: garden,
      }


      axios.post("http://localhost:3030/properties", newProperty)
      .then(response => {

        const newData = newlyCreated

        newData.push(newProperty)
        setNewlyCreated(newData)
        setPrice("");
        setLocation("");
        setPostCode("");
        setBedrooms("");
        setBathrooms("");
        setGarden("");
        SetPropertyStatus("");
        setSellerName("");
      })
      .catch(error => console.error(error))
    }

    
  function getProperties () {
    axios.get("http://localhost:3030/properties")
    .then((response) => {setNewlyCreated(response.data)})

  }
  useEffect (getProperties, [])



  const newComponents = []
  for (let created of newlyCreated) {
    newComponents.push(
        <Property
        key={created.prc + "" + created.loc}
        prc={created.prc}
        pcod={created.pcod}
        loc={created.loc}
        beds={created.beds}
        bath={created.bath}
        grdn={created.grdn}
        propertyStatus={created.status}
        sellnme={created.sellnme}

        />
      )
    };

  return ( 

    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
            <br />
            <h5>Add a Property</h5>
            {/* form with inputs for each piece of data */}
          
            <div >
                <form onSubmit={handleSubmit} className="row gx-3 gy-2 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>
                <div class="col-auto">
                    <SellerDropDown value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
                </div>

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
                        <input className="form-control" value={bedrooms} onChange={event => setBedrooms(event.target.value)} placeholder="Number of Bedrooms" type="number" max="4" required></input>

                        <label for="autoSizingInput">Bathrooms</label>
                        <input className="form-control" value={bathrooms} onChange={event => setBathrooms(event.target.value)} placeholder="Number of Bathrooms" type="number" max="4" required></input>
                        <label htmlFor="">Has a Garden?</label>
                        <select className='form-select' value={garden} onChange={(e) => setGarden(e.target.value)}  name="" id="">
                          <option value="">Select an Option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                   
                       <br />
                       <div> 
                    <button className="btn btn-primary " type="submit" >Submit</button>
                    </div>
                    </div>
                </form>

            </div>
    </div>
    <br />

    <div>
      <br />
    <FilterProperties/>
        <div style={{display: "none"}}>
              {newComponents}
        </div>
    </div>

    </div>

   );
}


export default AddNewProperty;