import { Link } from 'react-router'

function Header() {

    return (
        <header>
            <Link to="/" className="logo">
              Wild Roots
            </Link>

            <nav>
              <Link to="/walk">The Walk</Link>
              <Link to="/about">About</Link>
              <Link to="/field-notes">Field Notes</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/walk">Book a Walk</Link>
            </nav>

        </header>
            )
        }

export default Header