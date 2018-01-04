import React from 'react'
import PropTypes from 'prop-types'

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
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
