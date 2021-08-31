import { navigate } from '@reach/router';
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
// import Nav from '../components/Nav';

// import '../styles/loading.scss'


export default function Loading() {
    var ref = useRef(null)
    function handleLoad() {
        ref.current.continuousStart(30);
        setTimeout(() => {
            console.log("...loading something");
            ref.current.complete();
        }, 100);
        setTimeout(() => {
            navigate("/about")
        }, 600);
    }

    return (
        <>
            <div className="welcome">
                <LoadingBar
                    color="#F28585"
                    ref={ref}
                />
                {/* <Nav/> */}
                <h1>Welcome</h1>
                <p>My name's <a className="welcome__link" rel="noreferrer" href="https://www.linkedin.com/in/lasse-bruun-hindsberg/" target="_blank">Lasse Hindsberg</a> & this is my portfolio.</p>
                <div className="welcome__skills">
                    <h4>These are some of my skills</h4>
                    <ul className="skills">
                        <li className="skills__item">HTML</li>
                        <li className="skills__item">CSS/SCSS</li>
                        <li className="skills__item">JavaScript</li>
                        <li className="skills__item">React Framework</li>
                        <li className="skills__item">CMS</li>
                    </ul>
                </div>
                <h5>Would you like to learn more?</h5>
                <button className="welcome__readMoreBtn" onClick={handleLoad}>
                    <i>
                        Yes Please!
                    </i>
                </button>
            </div>



        </>
    )
}