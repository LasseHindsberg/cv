import { navigate } from "@reach/router";
import { useRef } from 'react';
import Nav from "../components/Nav";
import Profile from "../components/Profile";



export default function Index() {
    var ref = useRef(null)
    // eslint-disable-next-line
    function handleLoad() {
        ref.current.continuousStart(25, 60);
        setTimeout(() => {
            console.log("...loading something");
            ref.current.complete();
        }, 800);
        setTimeout(() => {
            navigate(`/`)
        }, 1500);
    }



    
    return (
        <>
    
        <Nav/>
        <Profile />
        </>
    );
}