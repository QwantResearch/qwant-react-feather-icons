import React from 'react'
import PropTypes from 'prop-types'

import getDefaultSVGProps from '../constants/props'

const Search = ({ color, size, ...props }) => (
  <svg {...getDefaultSVGProps(color, size)} {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Search.defaultProps = {
  color: 'currentColor',
  size: '24',
}

export default Search
