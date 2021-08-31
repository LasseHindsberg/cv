import { Link } from "@reach/router";



export default function Nav() {


    return (
        <>
            <nav className="navDesktop">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <div className="mobile">

            <input id="toggle" type="checkbox" />


            <label className="toggle-container" for="toggle">

                <span className="button button-toggle"></span>
            </label>
            <nav className="navMobile">
                <Link to="/home" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item" >About</Link>
                <Link to="/projects" className="nav-item" >Projects</Link>
                <Link to="/blog" className="nav-item" >Blog</Link>
            </nav>
            </div>
        </>
    );
}