import ganeshImgBg1 from '../assets/images/ganesh1-removebg-preview.png';
const Home =()=>{
    return (
        <div>
            <div className="main-container text-center">
            <div className="animated-container position-relative">
                <div className="raysDemoHolder">
                    <div className="rays text-indent">Rays</div>
                    <img src={ganeshImgBg1} className="img-icon" alt="logo" />
                </div>
            </div>
            <div className="second-module d-none">
                <p>Ganesh Constructions</p>
            </div>
        </div>
        </div>
    )
}
export default Home;