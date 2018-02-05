import React from 'react'
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

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'all': return <All {...props} />
    case 'chevron': return <Chevron {...props} />
    case 'cross': return <Cross {...props} />
    case 'images': return <Images {...props} />
    case 'list': return <List {...props} />
    case 'logo': return <Logo {...props} />
    case 'music': return <Music {...props} />
    case 'news': return <News {...props} />
    case 'search': return <Search {...props} />
    case 'settings': return <Settings {...props} />
    case 'shopping': return <Shopping {...props} />
    case 'social': return <Social {...props} />
    case 'videos': return <Videos {...props} />
    case 'web': return <Web {...props} />
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
  ]).isRequired,
}

export default Icon
