import {Link} from "react-router-dom"
 
const LaptopPricingFilterPage = () => {

    return (

        

        <div style = {{marginLeft:"auto", marginRight:"auto", width : "50%", marginTop:"20vh"}}>
            <h1> Choose Price Range for Laptop,</h1>

            <Link to = "/category/electronics/laptop-pricing-filter/laptop-under-30k"> <div style = {{backgroundColor:"lightblue"}}> <h3> less than 30,000 </h3> </div> </Link>
            <br />

            <Link to = "/category/electronics/laptop-pricing-filter/laptop-btw-30k-60k"> <div style = {{backgroundColor:"lightblue"}}> <h3> between 30,000 and 60,000 </h3> </div> </Link>
            <br />

            <Link to = "/category/electronics/laptop-pricing-filter/laptop-above-60k"> <div style = {{backgroundColor:"lightblue"}}> <h3> More than 60,000 </h3> </div> </Link>
            <br />

        </div>
    )

}

export default LaptopPricingFilterPage