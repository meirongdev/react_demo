import { useState } from 'react'
import { CreatePost } from './components/CreatePost.jsx'
import { PostSorting } from './components/PostSorting.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostList } from './components/PostList.jsx'

export default function App() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const posts = [
    {
      _id: '1',
      title: 'First Post',
      contents: 'This is the first post.',
      author: 'Alice',
      createdAt: new Date('2021-07-01'),
      updatedAt: new Date('2021-07-01'),
    },
    {
      _id: '2',
      title: 'Second Post',
      contents: 'This is the second post.',
      author: 'Bob',
      createdAt: new Date('2021-07-02'),
      updatedAt: new Date('2021-07-02'),
    },
  ]
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
