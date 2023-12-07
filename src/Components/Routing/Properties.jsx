import FilterProperties from "../FilterProperties";
import AddProperty from "../SubmitProperty";

function Properties() {
    return ( 
    <div style={{marginTop: "50px", textAlign: "center"}}>
    
    <h1>Properties</h1> 
    {/* <AddNewProperty/> */}
    <br />
    <AddProperty/>
    <br />
    <br />
    <FilterProperties/>
    </div>
    );
}

export default Properties;