import AddNewProperty from "../AddNewProperty";


function Properties() {
    return ( 
    <div style={{marginTop: "50px", textAlign: "center"}}>
    
    <h1 style={{color: "purple", fontFamily: "monospace", textDecoration: "underline", textTransform: "capitalize"}}>Properties Page</h1>
        <AddNewProperty/>
    </div>
    );
}

export default Properties;