import {Link} from 'react-router-dom'
// import "../../App.css"

const TourAndTravelSubCategoryPage = () => {
    return(
        <div className="main-div">
            <h1> Select City,</h1>

            <Link to="/category/tourandtravel/jaipur"> <div  className="child-div"> <h3> Jaipur </h3> </div> </Link>
            <br />

            <Link to="/category/tourandtravel/udaipur"> <div  className="child-div"> <h3> Udaipur </h3> </div> </Link>
            <br />

            <Link to="/category/tourandtravel/ajmer"> <div  className="child-div"> <h3> Ajmer </h3> </div> </Link>
            <br />

        </div>
    )
}

export default TourAndTravelSubCategoryPage