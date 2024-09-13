import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { signin } from '../api/users.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export function Signin() {
  const [, setToken] = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signinMutation = useMutation({
    mutationFn: () => signin({ username, password }),
    onSuccess: (data) => {
      setToken(data.token)
      navigate('/')
    },
    onError: (error) => alert(error.message),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    signinMutation.mutate()
  }

  return (
    <div className='container'>
      <form>
        <fieldset>
          <legend>Signin</legend>
        </fieldset>
        <label htmlFor='signin-username'>
          Username
          <input
            type='text'
            name='signin-username'
            id='signin-username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor='signin-password'>
          Password
          <input
            type='password'
            name='signin-password'
            id='signin-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input
          type='submit'
          role='button'
          value={signinMutation.isPending ? 'Logging in...' : 'Signin'}
          onClick={handleSubmit}
          disabled={!username || !password || signinMutation.isPending}
        />
      </form>
    </div>
  )
}
