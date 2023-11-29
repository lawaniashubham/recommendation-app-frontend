import {Link} from 'react-router-dom'

const ElectronicsSubCategoryPage = () => {
    return(
        <div className='main-div'>
            <h1> Options in Electronics are,</h1>

            <Link to ="/category/electronics/phone-pricing-filter"><div style = {{backgroundColor:"lightblue"}}> <h3> Phone </h3> </div> </Link>
            <br />

            <Link to ="/category/electronics/laptop-pricing-filter"><div style = {{backgroundColor:"lightblue"}}> <h3> Laptop </h3> </div> </Link>
            <br />

            {/* <div style = {{backgroundColor:"lightblue"}}> <h3>  </h3> </div> */}
        </div>
    )
}

export default ElectronicsSubCategoryPage