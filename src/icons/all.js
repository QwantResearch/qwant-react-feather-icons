import React from 'react'
import PropTypes from 'prop-types'

import getDefaultSVGProps from '../constants/props'

const All = ({ color, size, active, ...props }) => (
  <svg {...getDefaultSVGProps(color, size)} {...props}>
    <line x1="4" y1="21" x2="4" y2="3" stroke={active ? '#0fbd2b' : color} />
    <line x1="12" y1="21" x2="12" y2="3" stroke={active ? '#ff7800' : color} />
    <line x1="20" y1="21" x2="20" y2="3" stroke={active ? '#1f99f5' : color} />
  </svg>
)

All.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
}

All.defaultProps = {
  color: 'currentColor',
  size: '24',
  active: false,
}

export default All
