## Qwant React Feather Icons

### Installation
  // TODO

### Icons available

```
Videos,
Social,
Shopping,
Settings,
Search,
News,
Music,
List,
Image,
Globe,
Cross,
Chevron,
All,
```

### Usage

```javascript
import React, { Component } from 'react'
import * as Icons from 'qwant-react-feather-icons'

class MyClass extends Component {
  render() {
    return (
      <Icon.Search
        color="red"
        size={48}
      />
    )
  }
}
```

### Props

color: PropTypes.string
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])


##### Special props

###### Chevron

direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired

###### All

active: PropTypes.bool
