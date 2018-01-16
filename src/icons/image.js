import React from 'react'
import PropTypes from 'prop-types'

import getDefaultSVGProps from '../constants/props'

const Image = ({ color, size, ...props }) => (
  <svg {...getDefaultSVGProps(color, size)} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

Image.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Image.defaultProps = {
  color: 'currentColor',
  size: '24',
}

export default Image
