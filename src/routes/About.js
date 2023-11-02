import ganeshImgBg1 from "../assets/images/ganesh1-removebg-preview.png";
import {Link} from "react-router-dom";

const About =()=>{
    return (
        <section className="second-module lightGrey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row align-items-center h-100">
                            <div className="col">
                                <h1 className="display-4">About us</h1>
                                <p className="lead">The company was established in 1985 as a private firm by <b>Mr. Chintham Yadagiri.</b></p>
                                <div className="info-contact pb-3">
                                    <h5>To Know more About Services</h5>
                                    <div className="number"> Call us | +91 9849221563, +91 9032324239</div>
                                </div>
                                <Link className="btn btn-outline-dark" to="/">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-block" src={ganeshImgBg1} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;