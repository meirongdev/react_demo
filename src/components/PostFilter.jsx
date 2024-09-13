import PropTypes from 'prop-types'

export function PostFilter({ field, value, onChange }) {
  return (
    <label>
      {field}
      <input
        type='text'
        name={`filter-${field}`}
        id={`filter-${field}`}
        placeholder={`filter by ${field}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
