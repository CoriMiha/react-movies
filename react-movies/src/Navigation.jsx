
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
        <ul>
          <li>
            <Link to='/'> Movies</Link>
          </li>
          <li>
          <Link to='/about'> About</Link>
          </li>
        </ul>
      </nav>
    )
}