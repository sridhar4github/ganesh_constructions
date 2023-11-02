import React, {useState} from "react";
import { Link } from "react-router-dom";
import ganeshImgBg1 from '../src/assets/images/ganesh1-removebg-preview.png';
const Navbar =()=>{

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <img src={ganeshImgBg1} className="rounded-circle" style={{width: '50px'}}
                 alt="Avatar" />
            <a className="navbar-brand" href="#">Ganesh Constructions</a>
            <button onClick={handleOpen} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" onClick={handleClose}>
                        {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item" onClick={handleClose}>
                        <Link className="nav-link" to="/contacts">Contacts</Link>
                    </li>
                    <li className="nav-item" onClick={handleClose}>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;