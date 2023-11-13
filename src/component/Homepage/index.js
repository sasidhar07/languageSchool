import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../Nav";
import ExampleImage from '../../img/example-25.svg'; 
import ImageOne from "../../img/img-one.png"
import ImageTwo from "../../img/img-two.png"
import ImageThree from "../../img/img-three.png"
import french from "../../img/french.png"
import germany from "../../img/germany.png"
import uk from "../../img/uk.png"
import mapSide from "../../img/map-side.png"
import "./index.css"
class Homepage extends Component {
    
    render() {
        return (
            <div className="container">
                <Nav/>
                <div className="container py-5">
                    <div className="row py-5 justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <h1 className="font-weight-bold display-4">Learn a language for free</h1>
                            <div className="box-feature d-flex rounded p-4 text-white justify-content-between mt-4">
                                <p className="mb-0 w-20">The best new way to learn a language.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0">
                        <img alt="Language Illustration" src={ExampleImage} className="img-100" />
                        </div>
                    </div>
                </div>
                <div className="bg-light">
                    <div className="container py-5">
                        <div className="row justify-content-between text-center">
                            <div className="col-md-3 pb-5">
                                <img src={ImageOne} className="img-fluid mb-2" alt="Personalized Learning" />
                                <h4 className="font-weight-bold pb-4">Personalized Learning</h4>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing sit amet mi lacus.</p>
                            </div>
                            <div className="col-md-3 pb-5">
                                <img src={ImageTwo} className="img-fluid mb-2" alt="Receive Grading" />
                                <h4 className="font-weight-bold pb-4">Receive Grading</h4>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing sit amet mi lacus.</p>
                            </div>
                            <div className="col-md-3 pb-5">
                                <img src={ImageThree} className="img-fluid mb-2" alt="Improve Quickly" />
                                <h4 className="font-weight-bold pb-4">Improve Quickly</h4>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing sit amet mi lacus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomshadow ">
                    <div className="container py-5">
                        <div className="row py-5">
                        <div className="col-12 mb-5">
                            <h2 className="text-uppercase font-weight-bold">Our Courses</h2>
                        </div>
                        <div className="col-12">
                            <div className="items d-flex flex-row">
                            <div className="card w-40 h-50 m-2 ">
                                <img className="img-fluid card-img-top" src={french} style={{ height: '200px' }} />
                                <div className="card-body">
                                <h5 className="mb-3 text-success font-weight-bold">French for beginners</h5>
                                <p className="mb-0">Learn French even if you are a beginner till the advance</p>
                                </div>
                            </div>
                            <div className="card w-40 h-50 m-2">
                                <img className="img-fluid card-img-top" src={germany} style={{ height: '200px' }} />
                                <div className="card-body">
                                <h5 className="mb-3 text-success font-weight-bold">German for beginners</h5>
                                <p className="mb-0">Learn German from basic to till advanced lessons</p>
                                </div>
                            </div>
                            <div className="card w-40 h-50 m-2">
                                <img className="img-fluid card-img-top" src={uk} style={{ height: '200px' }} />
                                <div className="card-body">
                                <h5 className="mb-3 text-success font-weight-bold">Professional English</h5>
                                <p className="mb-0">Learn English starting from the intermediate level</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container py-2">
                    <div className="row pt-5 align-items-center">
                        <div className="col-lg-5 mb-5">
                        <h2 className="h1 font-weight-bold text-uppercase mb-4">Join 2,847 people around the world</h2>
                        </div>
                        <div className="col-lg-7 mb-5">
                        <img src={mapSide} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#fef6ed" }}>
                    <div className="container py-5">
                        <div className="row pt-5">
                        <div className="col-md-6 col-lg-3 mb-5">
                            <h3 className="font-weight-bold mb-4">LinguaMaster</h3>
                            <p className="semi-bold">The best way to learn a language.</p>
                            <div className="social-icons mt-4"> 
                            <a href="#"><i className="lni lni-facebook-filled"></i></a> 
                            <a href="#"><i className="lni lni-twitter-filled"></i></a> 
                            <a href="#"><i className="lni lni-instagram-filled"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-5">
                            <h6 className="mb-4 font-weight-bold">Products</h6>
                            <ul className="list-unstyled bb m-0">
                            <li><a href="">For Individuals</a></li>
                            <li><a href="">For Schools</a></li>
                            <li><a href="">For Universities</a></li>
                            <li><a href="">For Businesses</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-5">
                            <h6 className="mb-4 font-weight-bold">More</h6>
                            <ul className="list-unstyled bb m-0">
                            <li><a href="">Blog</a></li>
                            <li><a href="mailto:linguamaster@gmail.com">Email Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-5">
                            <h6 className="mb-4 font-weight-bold">Privacy & Terms</h6>
                            <ul className="list-unstyled bb m-0">
                            <li><a href="">Community</a></li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Terms</a></li>
                            <li><a href="">Copyright</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 bg-white">
            <div className="container">
                <p className="m-0 text-center small medium-500">Copyright &copy; Linguamaster</p>
            </div> 
            </div>
            </div>
        );
    }
}

export default Homepage;
