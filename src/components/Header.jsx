import { Link } from 'react-router-dom'
export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <strong>Blog</strong>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/create-post'>Create a post</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
          <li>
            <Link to='/signin'>Signin</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
