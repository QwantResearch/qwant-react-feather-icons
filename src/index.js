import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, ...props }) => {
  const Component = require(`./icons/${name}`).default

  return <Component {...props} />
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    'all',
    'chevron',
    'cross',
    'images',
    'list',
    'logo',
    'music',
    'news',
    'search',
    'settings',
    'shopping',
    'social',
    'videos',
    'web',
  ]).isRequired,
}

export default Icon
