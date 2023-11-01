import ganeshImgBg1 from '../assets/images/ganesh1-removebg-preview.png';
import fullBuilding from '../assets/images/buildings/fullBuilding.jpg';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Home =()=>{
    return (
        <div className="main-container text-center">
            <section className="animated-container position-relative">
                <div className="raysDemoHolder">
                    <div className="rays text-indent">Rays</div>
                    <img src={ganeshImgBg1} className="img-icon" alt="logo"/>
                </div>
                <div className="arrow bounce">
                    <KeyboardArrowDownOutlinedIcon color="primary" fontSize="large" />
                </div>
            </section>

            <section className="second-module lightGrey-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-block" src={ganeshImgBg1} alt="img"/>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center h-100">
                                <div className="col">
                                    <h1 className="display-4">Housing</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi consectetur cupiditate deserunt dolor dolore enim, error eum iure iusto quis rerum sapiente sit tenetur velit voluptate voluptatem voluptates!</p>
                                    <a href="#" className="btn btn-outline-dark">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="third-module">
                <div className="container">
                    {/*<div className="row">
                        <div className="col-md-6">
                            <img className="img-block" src={ganeshImgBg1} alt="img"/>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center h-100">
                                <div className="col">
                                    <h1 className="display-4">Vertically Centered Text</h1>
                                    <p className="lead">Flexbox grids help you build some really nice layouts.
                                        <br/><br/>
                                        <a href="" className="">Learn More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>*/}

                    <div className="row">
                        <div className="col-md-6 order-md-6">
                            <img className="img-block" src={ganeshImgBg1} alt="img"/>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <div className="row align-items-center h-100">
                                <div className="col">
                                    <h1 className="display-4">Housing</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi consectetur cupiditate deserunt dolor dolore enim, error eum iure iusto quis rerum sapiente sit tenetur velit voluptate voluptatem voluptates!</p>
                                    <a href="#" className="btn btn-outline-dark">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="forth-module">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-sm-12 p-0">
                            <img src={fullBuilding} alt="test" className="img-fluid" />
                            <div className="heroContent center-this d-none">
                                <h1>Jumbotron H1 goes here</h1>
                                <p className="pHero">
                                    This is the first line in the jumbotron.<br />
                                    The second line appears underneath the first line.
                                </p>
                                <button type="button" className="btn btn-primary">Chat With Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Home;