import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../api/users'
import PropTypes from 'prop-types'

export function User({ id }) {
  const userQuery = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserInfo(id),
  })

  const user = userQuery.data ?? {}
  return <strong>{user.username}</strong>
}

User.propTypes = {
  id: PropTypes.string.isRequired,
}
