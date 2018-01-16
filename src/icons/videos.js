import React from 'react'
import PropTypes from 'prop-types'

import getDefaultSVGProps from '../constants/props'

const Videos = ({ color, size, ...props }) => (
  <svg {...getDefaultSVGProps(color, size)} {...props}>
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
)

Videos.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Videos.defaultProps = {
  color: 'currentColor',
  size: '24',
}

export default Videos
