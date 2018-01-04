import React from 'react'
import PropTypes from 'prop-types'

const All = ({ color, size, active, ...props }) => (
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
