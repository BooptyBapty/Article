import React, {useEffect} from 'react'
import '../CSS/Header.css'

function Header(props) {
    
    useEffect(() => {
        document.getElementById(props.currLoc).classList.add("selected")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="nav">
            <ul>
                <li id='Home'><a href="/">Home</a></li>
                <li id='Articles'><a href="/articles">Articles</a></li>
            </ul>
        </div>
    )
}

export default Header
