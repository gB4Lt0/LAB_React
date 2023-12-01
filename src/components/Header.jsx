import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
export default function Header() {
    return(
        <nav className="flex bg-orange-200 items-center p-4 gap-4">
            <img src={reactLogo} alt="React logo" />
            <ul className="flex gap-4">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/contact-us'>Contact us</Link></li>
            </ul>
        </nav>
    )
}