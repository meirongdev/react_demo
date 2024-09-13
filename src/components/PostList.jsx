import PropTypes from 'prop-types'
import { Post } from './Post.jsx'

export function PostList({ posts = [] }) {
  console.log(posts)
  return (
    <section>
      {posts.map((post) => (
        <div key={post._id}>
          <Post {...post} />
        </div>
      ))}
    </section>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
