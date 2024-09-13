import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

// Create a new context object
export const AuthContext = createContext({
  token: '',
  setToken: () => {},
})

// Create a new provider component
export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState('')
  return (
    // Pass the token and setToken function to the value prop
    // Other components can access the token and setToken function to update the token
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export const useAuth = () => {
  const { token, setToken } = useContext(AuthContext)
  return [token, setToken]
}
