import {Link} from "react-router-dom";
import React, {useState} from "react";
import {routesPath} from "../App";
import './styles.css'

export const Navigation = () => {
    const [navigationVisible, setNavigationVisible] = useState<boolean>(true)
    const handleShowMobileNav = () => {
        setNavigationVisible(!navigationVisible)
    }

    return(
        <div className='Navigation'>
            <div>
                logo
                <span onClick={handleShowMobileNav} className='Navigation-mobile'>X</span>
            </div>

            {navigationVisible && <div className= 'Navigation-links'>
                <Link className='App-link' to={'/'}>Home</Link>
                <Link className='App-link' to={`/${routesPath.about}`}>About</Link>
                <Link className='App-link' to={'/form'}>Form</Link>
                <Link className='App-link' to={'/policy'}>Policy</Link>
                <Link className='App-link' to={'/nonsensopedia'}>Random_page</Link>
            </div>}
        </div>
    )
}