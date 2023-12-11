import { useState, useEffect } from "react";
import axios from "axios";
import FilterProperties from './FilterProperties';
import bathroomPicture from "../images/bathroom-svgrepo-com.svg";
import bedroomPicture from "../images/bed-svgrepo-com.svg";
import gardenPicture from "../images/garden-svgrepo-com.svg";

const AddProperty = () => {

    const [price, setPrice] = useState ("");
    const [location, setLocation] = useState ("");
    const [postcode, setPostcode] = useState ("");
    const [bedrooms, setBedrooms] = useState ("");
    const [bathrooms, setBathrooms] = useState ("");
    const [garden, setGarden] = useState ("");
    const [status, SetPropertyStatus] = useState("");
    const [newlyCreated, setNewlyCreated] = useState ([]);
    

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const newProperty =  {
            prc: price,
            loc: location,
            pcod: postcode,
            beds: bedrooms,
            bath: bathrooms,
            grdn: garden,
            propertyStatus: status
        }

    axios.post("http://localhost:3030/properties", newProperty)

        .then((response) => {
            const newData = newlyCreated

            newData.push (newProperty)

            setNewlyCreated (newData)
            console.log(response);
            setPrice("");
            setLocation("");
            setPostcode("");
            setBedrooms("");
            setBathrooms("");
            setGarden("");
            SetPropertyStatus("");
            
            
        })
        
        .catch((err) => console.error(err));

}

    function getProperties () {
        axios.get("http://localhost:3030/properties")
        .then((response) => {setNewlyCreated(response.data)})
        .catch(error => console.error(error))
    }
    useEffect(getProperties, [])

    const newComponents = []
    for (let created of newlyCreated) {
        newComponents.push(
            
            <div className='col'>
            <div className='card'>
            <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='card-img-top' alt="house" />
                <div className='card-body'>
                    <h5 className='card-title'>Price: {created.prc}</h5>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>{created.loc}: {created.pcod}</li>
                            <li className='list-group-item'> <img alt='bed' width="30px" src={bedroomPicture}/> {created.beds}</li>
                            <li className='list-group-item'> <img alt='bath' width="30px" src={bathroomPicture}/> {created.bath}</li>
                            <li className='list-group-item'> <img alt='garden' width="30px" src={gardenPicture}/> {created.grdn}</li>
                        </ul>
                        <div class="card-body">
                         <select 
                         value ={created.status}
                         className="form-select" id="">
                            <option value="For Sale">For Sale</option>
                            <option value="sold">Sold</option>
                            <option value="withdrawn">Withdrawn</option>
                         </select>
                         <div className='card-footer'>
                        <button className='btn btn-success '>Update</button>
                         </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }


    return (
        <div>
            <h2>Add new property</h2>
            <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>

<div className="col-auto">
    <label for="autoSizingInput">Price</label>
    <input className="form-control" type="text" id="autoSizingInput" value={price} onChange={(e) => setPrice(e.target.value)} required/>

    <label for="autoSizingInput">Location</label>
    <input className="form-control" type="text" name="location" id="autoSizingInput" value={location} onChange={(e) => setLocation(e.target.value)} required/>

    <label for="autoSizingInput">Postcode</label>
    <input className="form-control" type="text" name="postcode" id="autoSizingInput" value={postcode} onChange={(e) => setPostcode(e.target.value)} required/>
</div>
<div className="col-auto">
    <label for="autoSizingInput">Bedrooms</label>
    <input className="form-control" type="number" name="bedrooms" id="autoSizingInput"  value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required/>

    <label for="autoSizingInput">Bathrooms</label>
    <input className="form-control" type="number" name="bathrooms" id="autoSizingInput" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required/>

    <label for="autoSizingSelect">Garden</label>
    <select className="form-select" name="garden" id="autoSizingSelect" value={garden} onChange={(e) => setGarden(e.target.value)} required>
        <option value="">Select an Option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
    <br />
    <button className="btn btn-primary" type="submit" >Submit</button>
</div>
</form>
<br />  
        <FilterProperties/>
        <div style={{display: "none"}}>
              {newComponents}
        </div>
        
</div>
    )
    }

export default AddProperty;