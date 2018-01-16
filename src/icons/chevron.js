import React from 'react'
import PropTypes from 'prop-types'

import getDefaultSVGProps from '../constants/props'

const renderFromDirection = (direction) => {
  switch (direction) {
    case 'up':
      return <polyline points="18 15 12 9 6 15" />
    case 'down':
      return <polyline points="6 9 12 15 18 9" />
    case 'left':
      return <polyline points="15 18 9 12 15 6" />
    case 'right':
      return <polyline points="9 18 15 12 9 6" />
    default:
      return false
  }
}

const Chevron = ({ color, size, direction, ...props }) => (
  <svg {...getDefaultSVGProps(color, size)} {...props}>
    {renderFromDirection(direction)}
  </svg>
)

Chevron.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
}

Chevron.defaultProps = {
  color: 'currentColor',
  size: '24',
}

export default Chevron
