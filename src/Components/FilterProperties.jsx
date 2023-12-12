import { useState, useEffect } from "react";
import Property from "./Property";
import axios from "axios";

function FilterProperties() {
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [bathFilter, setBathFilter] = useState("");
  const [bedFilter, setBedFilter] = useState("");
  const [gardenFilter, setGardenFilter] = useState("");
  const [properties, setProperties] = useState([]);


  const propertyComponents = [];

  function getProperties() {
    axios
        .get("http://localhost:3030/properties")
        .then((response) => {
            setProperties(response.data)
        })
        .catch(error => console.error(error))
}
useEffect(getProperties, [])


  for (const property of properties) {
    if (
      (locationFilter &&
        !property.loc.toLowerCase().startsWith(locationFilter.toLowerCase())) ||
      (bedFilter &&
        !property.beds.toLowerCase().startsWith(bedFilter.toLowerCase())) ||
      (priceFilter && property.prc !== priceFilter) ||
      (bathFilter && property.bath !== bathFilter) ||
      (gardenFilter &&
        !property.grdn.toLowerCase().startsWith(gardenFilter.toLowerCase()))
    
    ) {
      continue;
    }

    console.log("Property:", property);
    propertyComponents.push(
      <Property
        key={property.prc + " " + property.loc}
        prc={property.prc}
        pcod={property.pcod}
        loc={property.loc}
        beds={property.beds}
        bath={property.bath}
        grdn={property.grdn}
        id={property.id}
      />
    );
  }



  function handleLocationFilter(event) {
    setLocationFilter(event.target.value);
    console.log("Bedroom Handler:");
  }

  function handleBathFilter(event) {
    setBathFilter(event.target.value);
    console.log("Bathroom Handler:", event.target.value);
  }

  function handleBedFilter(event) {
    setBedFilter(event.target.value);
    console.log("Bedroom Handler:");
  }

  function handleGardenFilter(event) {
    setGardenFilter(event.target.value);
    console.log("Garden Handler:");
  }

  function handlePriceFilter(event) {
    setPriceFilter(event.target.value);
    console.log("Price Handler:");
  }

  return (
    <div className="container text-center">
        <h2 style={{textAlign: "center"}}>Filter Properties</h2>
      <div className="row">
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Location
          </label>
          <input
            id="exampleFormControlInput1"
            className="form-control"
            type="text"
            placeholder="Search by Location"
            value={locationFilter}
            onChange={handleLocationFilter}
            style={{ maxWidth: "100%" }}
          />
          <br />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Number of Bedrooms
          </label>
          <select
            onChange={handleBedFilter}
            value={bedFilter}
            className="form-select"
            aria-label="Default"
          >
            <option value="">--Number of Bedrooms--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            id="exampleFormControlInput1"
            className="form-control"
            type="text"
            placeholder="Search by Price"
            value={priceFilter}
            onChange={handlePriceFilter}
            style={{ maxWidth: "100%" }}
          />
          <br />

          <label htmlFor="exampleFormControlInput1" className="form-label">
            Has a garden?
          </label>
          <select
            onChange={handleGardenFilter}
            value={gardenFilter}
            className="form-select"
            aria-label="Default"
          >
            <option value="">Select an Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Number of Bathrooms
          </label>
          <select
            onChange={handleBathFilter}
            value={bathFilter}
            className="form-select"
            aria-label="Default"
          >
            <option value="">--Number of Bathrooms--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      <div className="row row-cols-4 g-4 mt-1">{propertyComponents}</div>
    </div>
  );
}

export default FilterProperties;