import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../contexts/AuthContext.jsx'
import { User } from './User.jsx'

export function Header() {
  const [token, setToken] = useAuth()
  if (token) {
    const { sub } = jwtDecode(token)
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
              Signed in as <User id={sub} />
            </li>
            <li>
              <fieldset role='group'>
                <Link to='/create-post' role='button'>
                  Create a post
                </Link>
                <Link
                  to='/signout'
                  role='button'
                  onClick={(e) => {
                    e.preventDefault()
                    setToken('')
                  }}
                >
                  Signout
                </Link>
              </fieldset>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
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
