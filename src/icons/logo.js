import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ color, size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    width={size}
    height={size}
    viewBox="0 0 45 45"
    {...props}
  >
    <defs>
      <path id="flat-a" d="M21.4674,0.18 C33.0064,0.18 42.3944,9.799 42.3944,21.623 C42.3944,26.162 41.0264,30.501 38.4384,34.168 L38.2154,34.486 L38.5244,34.642 L42.8394,38.436 L38.7314,43.249 L28.4884,34.223 C32.8864,31.635 35.5994,26.851 35.5994,21.623 C35.5994,13.619 29.2594,7.107 21.4674,7.107 C13.6754,7.107 7.3354,13.619 7.3354,21.623 C7.3354,29.624 13.6684,36.133 21.4574,36.139 L21.4574,43.067 C9.9224,43.06 0.5404,33.444 0.5404,21.623 C0.5404,9.799 9.9284,0.18 21.4674,0.18 Z" />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <mask id="flat-b" fill="#fff">
        <use xlinkHref="#flat-a" />
      </mask>
      <use fill="#000000" xlinkHref="#flat-a" />
      <g fill={color} mask="url(#flat-b)">
        <rect width="245" height="175" transform="translate(-94 -51)" />
      </g>
    </g>
  </svg>
)

Logo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Logo.defaultProps = {
  color: 'currentColor',
  size: 45,
}

export default Logo
