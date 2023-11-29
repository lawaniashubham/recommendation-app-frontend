import {Link} from "react-router-dom"
import './HomePage.css'

const HomePage = () => {
    return(
        // <div style={{backgroundImage: 'url("https://fullartonconnexions.co.uk/wp/wp-content/uploads/2018/08/explore-icon.jpg")',margin: "0",padding: "0", height: "100vh", overflow:"hidden", backgroundSize: "auto"}}>
        <div classNam="bg"> 
        <div style = {{marginLeft:"auto", marginRight:"auto", width : "50%", marginTop:"20vh", color:"White"}}>
            <h1>This is a Recommendation Application, <br></br>Hope you like our efforts</h1>
            <br></br>
            <Link to = "/category">
                <button style={{borderRadius:"20px",width:"100%", fontSize:"17px"}}> <strong> Try our Website </strong> </button> 
            </Link>

            {/* <Link to = "/category"> <div className="child-div" style={{color:"black",fontSize:"20px", minWidth:"auto"}}> <strong> Try our Website </strong>  </div></Link> */}
        </div>
        </div>
    )

}




// div {
//     margin-left: auto;
//     margin-right: auto;
//     width: 50%;
//     padding-top: 50%;
// }

export default HomePage