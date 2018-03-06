## Qwant React Feather Icons

### Installation

```bash
yarn add @qwant/react-feather-icons
```

### Usage

```javascript
import React, { Component } from 'react'
import Icon from '@qwant/react-feather-icons'

class MyClass extends Component {
  render() {
    return (
      <Icon
        name="search"
        color="red"
        size={48}
      />
    )
  }
}
```

### Props

 - **name:** PropTypes.oneOf(['all', 'chevron', 'cross', 'images', 'list', 'logo', 'music', 'news', 'search', 'settings', 'shopping', 'social', 'videos', 'web']).isRequired
 - **color:** PropTypes.string
 - **size:** PropTypes.oneOfType([PropTypes.string, PropTypes.number])

###### chevron

 - **direction:** PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired

###### all

 - **active:** PropTypes.bool
