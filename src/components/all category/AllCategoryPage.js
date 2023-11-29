import {Link} from "react-router-dom"
import "../../App.css"; 

const AllCategoryPage = () => {
    return (
        <div style={{marginLeft:"auto", marginRight:"auto", width : "50%", marginTop:"20vh", border:"2px solid white", minHeight:"auto", padding:"20px" , borderRadius:"10px"}}>
            <h1> Choose from the below categories,</h1>

            {/* <Link to = "/category/electronics"> <div style = {{backgroundColor:"lightblue"}}> <h3> Electronic </h3> </div> </Link>
            <br/>  */}
            
            <Link to = "/category/tourandtravel"> <div className="child-div"> <h3> Tour & Travel </h3> </div></Link>
            <br />

            <Link to = "/category/learning" > <div  className="child-div"> <h3> Learning (Coding) </h3> </div> </Link>
        </div>
    )

}

export default AllCategoryPage