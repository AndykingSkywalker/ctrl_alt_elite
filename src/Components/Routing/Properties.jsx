import AddNewProperty from "../AddNewProperty";


function Properties() {
    return ( 
    <div style={{marginTop: "50px", textAlign: "center"}}>
    
    <h1 style={{ color: "purple", fontFamily: "monospace", textTransform: "capitalize", fontSize: "65px" }}>Properties Page</h1>
        <AddNewProperty/>
    </div>
    );
}

export default Properties;