import React from 'react'
import PropTypes from 'prop-types'

import getDefaultSVGProps from '../constants/props'

const List = ({ color, size, ...props }) => (
  <svg {...getDefaultSVGProps(color, size)} {...props}>
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3" y2="6" />
    <line x1="3" y1="12" x2="3" y2="12" />
    <line x1="3" y1="18" x2="3" y2="18" />
  </svg>
)

List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

List.defaultProps = {
  color: 'currentColor',
  size: '24',
}

export default List
