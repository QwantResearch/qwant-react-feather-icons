import PropTypes from 'prop-types'

import All from './icons/all'
import Chevron from './icons/chevron'
import Cross from './icons/cross'
import Images from './icons/images'
import List from './icons/list'
import Logo from './icons/logo'
import Music from './icons/music'
import News from './icons/news'
import Search from './icons/search'
import Settings from './icons/settings'
import Shopping from './icons/shopping'
import Social from './icons/social'
import Videos from './icons/videos'
import Web from './icons/web'

const Icon = ({ name }) => {
  switch (name) {
    case 'all': return All
    case 'chevron': return Chevron
    case 'cross': return Cross
    case 'images': return Images
    case 'list': return List
    case 'logo': return Logo
    case 'music': return Music
    case 'news': return News
    case 'search': return Search
    case 'settings': return Settings
    case 'shopping': return Shopping
    case 'social': return Social
    case 'videos': return Videos
    case 'web': return Web
    default: return false
  }
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
  ]),
}

export default Icon
