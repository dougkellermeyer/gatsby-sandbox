import React from 'react'
import {Link} from 'gatsby'

const Menu = () => {
    return (
        <div style={{background: "#ffeb3b"}}>
            <ul style={{listStyle: "none", display: "flex", justifyContent: "space-evenly"}}>
                <li style={{marginTop: "10px"}}><Link style={{textDecoration: "none", verticalAlign: "middle"}} to="/">Home</Link></li>
                <li style={{marginTop: "10px"}}><Link style={{textDecoration: "none",verticalAlign: "middle"}} to="/about">About</Link></li>
                <li style={{marginTop: "10px"}}><Link style={{textDecoration: "none", verticalAlign: "middle"}} to="/blog">Blog</Link></li>
                <li style={{marginTop: "10px"}}><Link style={{textDecoration: "none", verticalAlign: "middle"}} to="/page-2">Page 2</Link></li>

            </ul>
        </div>
    )
}

export default Menu
