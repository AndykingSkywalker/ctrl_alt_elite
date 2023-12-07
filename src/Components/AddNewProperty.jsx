import Property from './Property';
import axios from 'axios'
import { useEffect, useState } from 'react';


function AddNewProperty() {

  const [properties, setProperties] = useState([])

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
        />
      )
    };

  return ( 
  <div>
     {propertycomponents} 
  </div> );
}


export default AddNewProperty;