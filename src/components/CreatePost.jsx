import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { createPost } from '../api/posts.js'

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: () => createPost({ title, content, author }),
    onSuccess: () => queryClient.invalidateQueries('posts'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate()
  }

  return (
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
      <label htmlFor='create-author'>
        Author
        <input
          type='text'
          name='create-author'
          id='create-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
      {createPostMutation.isSuccess ? (
        <>
          <br />
          created successfully!
        </>
      ) : null}
    </form>
  )
}
