import { useState } from 'react'
import { signup } from '../api/users.js'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signupMutation = useMutation({
    mutationFn: () => signup({ username, password }),
    onSuccess: () => navigate('/login'),
    onError: (error) => alert(error.message),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    signupMutation.mutate()
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Signup</legend>
        </fieldset>
        <label htmlFor='signup-username'>
          Username
          <input
            type='text'
            name='signup-username'
            id='signup-username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor='signup-password'>
          Password
          <input
            type='password'
            name='signup-password'
            id='signup-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input
          type='submit'
          role='button'
          value={signupMutation.isPending ? 'Signing up...' : 'Signup'}
          disabled={!username || !password || signupMutation.isPending}
        />
      </form>
      <Link to='/'>Back to the home page</Link>
    </div>
  )
}
