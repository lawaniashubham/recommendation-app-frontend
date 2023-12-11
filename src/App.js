import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import AllCategoryPage from "./components/all category/AllCategoryPage";
import ElectronicsSubCategoryPage from "./components/sub category/ElectronicsSubCategoryPage";

import JaipurTourAndTravelRecommendPage from "./components/final page recommendation/Tour and Travel Recommendation/JaipurTourAndTravelRecommendPage";
import AjmerTourAndTravelRecommendPage from "./components/final page recommendation/Tour and Travel Recommendation/AjmerTourAndTravelRecommendPage"
import UdaipurTourAndTravelRecommendPage from "./components/final page recommendation/Tour and Travel Recommendation/UdaipurTourAndTravelRecommendPage"

import PhonePricingFilterPage from "./components/pricing filter/Electronics/Phone/PhonePricingFilterPage";
import LaptopPricingFilterPage from "./components/pricing filter/Electronics/Laptop/LaptopPricingFilterPage";

import PythonRecommendPage from "./components/final page recommendation/Learning Recommendation/PythonRecommendPage";
import JavaRecommendPage from "./components/final page recommendation/Learning Recommendation/JavaRecommendPage";
import HtmlCssRecommendPage from "./components/final page recommendation/Learning Recommendation/HtmlCssRecommendPage";

import LaptopAbove60KRecommendPage from "./components/final page recommendation/Electronics Recommendation/Laptop Recommendation/LaptopAbove60KRecommendPage";
import LaptopIn30KTo60KRecommendPage from "./components/final page recommendation/Electronics Recommendation/Laptop Recommendation/LaptopIn30KTo60KRecommendPage";
import LaptopUnder30KRecommendPage from "./components/final page recommendation/Electronics Recommendation/Laptop Recommendation/LaptopUnder30KRecommendPage";
import PhoneUnder15KRecommendPage from "./components/final page recommendation/Electronics Recommendation/Phone Recommendation/PhoneUnder15KRecommendPage";
import PhoneIn15KTO40KRecommendPage from "./components/final page recommendation/Electronics Recommendation/Phone Recommendation/PhoneIn15KTO40KRecommendPage";
import PhoneAbove40KRecommendPage from "./components/final page recommendation/Electronics Recommendation/Phone Recommendation/PhoneAbove40KRecommendPage";
import TourAndTravelSubCategoryPage from "./components/sub category/TourAndTravelSubCategoryPage";
import LearningSubCategoryPage from "./components/sub category/LearningSubCategoryPage";
import './App.css'
// import SubCategoryPage from "./components/sub category/SubCategoryPage";


function App() {
  return (
    
    <Router>


      <Routes>

        <Route path = "/" Component={HomePage}/>
        <Route path = "/category" Component={AllCategoryPage}/>

        // Route for sub-category 
        <Route path = "/category/electronics" Component={ElectronicsSubCategoryPage} />
        <Route path = "/category/tourandtravel" Component={TourAndTravelSubCategoryPage} />
        <Route path = "/category/learning" Component={LearningSubCategoryPage} />

        // Pricing Filter Page Route
        <Route path = "/category/electronics/phone-pricing-filter" Component={PhonePricingFilterPage} />
        <Route path = "/category/electronics/laptop-pricing-filter" Component={LaptopPricingFilterPage} />
        
        
        // final page (our recommendation)
        <Route path = "/category/electronics/phone-pricing-filter/phone-under-15k" Component={PhoneUnder15KRecommendPage} />
        <Route path = "/category/electronics/phone-pricing-filter/phone-btw-15k-40k" Component={PhoneIn15KTO40KRecommendPage} />
        <Route path = "/category/electronics/phone-pricing-filter/phone-above-40k" Component={PhoneAbove40KRecommendPage} />

        <Route path = "/category/electronics/laptop-pricing-filter/laptop-under-30k" Component={LaptopUnder30KRecommendPage} />
        <Route path = "/category/electronics/laptop-pricing-filter/laptop-btw-30k-60k" Component={LaptopIn30KTo60KRecommendPage} />
        <Route path = "/category/electronics/laptop-pricing-filter/laptop-above-60k" Component={LaptopAbove60KRecommendPage} />

        <Route path = "/category/tourandtravel/jaipur" Component={JaipurTourAndTravelRecommendPage} />
        <Route path = "/category/tourandtravel/udaipur" Component={UdaipurTourAndTravelRecommendPage} />
        <Route path = "/category/tourandtravel/ajmer" Component={AjmerTourAndTravelRecommendPage} />

        <Route path = "/category/learning/java" Component={JavaRecommendPage}/>
        <Route path = "/category/learning/python" Component={PythonRecommendPage}/>
        <Route path = "/category/learning/htmlcss" Component={HtmlCssRecommendPage}/>

        <Route path = "/category/learning/:tech'" Component={LearningRecommendPage}/>
      


      </Routes>


    </Router>
  );
}

export default App;
