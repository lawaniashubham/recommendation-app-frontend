import {Link} from 'react-router-dom'
import "../../App.css"

const LearningSubCategoryPage = () => {
    return(
        <div className='main-div'>
            <h1> Select Topic to Learn,</h1>
            

            <Link to="/category/learning/python"><div  className="child-div"> <h3> Python Programming Language </h3> </div> </Link>
            <br />

            <Link to="/category/learning/java"><div  className="child-div"> <h3> Java Programming Language </h3> </div> </Link>
            <br />

            {/* <Link to="/category/learning/htmlcss"><div  className="child-div"> <h3> HTML & CSS </h3> </div> </Link> */}
            <br />
        </div>
    )
}

export default LearningSubCategoryPage