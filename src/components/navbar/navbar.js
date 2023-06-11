import Link from "next/link"
import './navbar.css'

export default function Navbar() {
    return(
        <div className="navStyle">
            <Link className="linkStyle" href={'/'}>Home</Link>
            <Link className="linkStyle" href={'../../pages/about/about.js'}>About</Link>
            <Link className="linkStyle" href={'https://www.google.com'}>Google</Link>
        </div>
    )
}