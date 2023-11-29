import {Link} from "react-router-dom"
 
const PhonePricingFilterPage = () => {

    return (

        

        <div style = {{marginLeft:"auto", marginRight:"auto", width : "50%", marginTop:"20vh"}}>
            <h1> Choose Price Range for Phone,</h1>

            <Link to = "/category/electronics/phone-pricing-filter/phone-under-15k"> <div style = {{backgroundColor:"lightblue"}}> <h3> less than 15,000 </h3> </div> </Link>
            <br />

            <Link to = "/category/electronics/phone-pricing-filter/phone-btw-15k-40k"> <div style = {{backgroundColor:"lightblue"}}> <h3> between 15,000 and 40,000 </h3> </div> </Link>
            <br />

            <Link to = "/category/electronics/phone-pricing-filter/phone-above-40k"> <div style = {{backgroundColor:"lightblue"}}> <h3> More than 40,000 </h3> </div> </Link>
            <br />

        </div>
    )

}

export default PhonePricingFilterPage