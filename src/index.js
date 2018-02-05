import PropTypes from 'prop-types'

const Icon = ({ name }) => require(`./icons/${name}`)

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
  ]),
}

export default Icon
