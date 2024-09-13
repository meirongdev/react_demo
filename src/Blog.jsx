import { useState } from 'react'
import { CreatePost } from './components/CreatePost.jsx'
import { PostSorting } from './components/PostSorting.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostList } from './components/PostList.jsx'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts.js'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  const posts = postQuery.data || []
  return (
    <div className='container'>
      <h1>Blog</h1>

      <PostFilter
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />

      <main>
        <PostList posts={posts} />
        <CreatePost />
      </main>
    </div>
  )
}
