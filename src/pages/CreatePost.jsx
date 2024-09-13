import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { createPost } from '../api/posts.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [token] = useAuth()

  const navigate = useNavigate()

  const createPostMutation = useMutation({
    mutationFn: () => createPost(token, { title, content }),
    onSuccess: () => {
      navigate('/')
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate()
  }

  if (!token) {
    return <p>You must be signed in to create a post.</p>
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create a new post</legend>
        </fieldset>
        <label htmlFor='create-title'>
          Title
          <input
            type='text'
            name='create-title'
            id='create-title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label htmlFor='create-content'>
          Content
          <textarea
            id='create-content'
            name='create-content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <input
          type='submit'
          role='button'
          value={createPostMutation.isPending ? 'Creating...' : 'Create'}
          disabled={!title || createPostMutation.isPending}
        />
      </form>
    </div>
  )
}
