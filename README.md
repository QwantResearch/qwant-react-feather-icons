## Qwant React Feather Icons

### Installation

Add the line below to your `package.json` on `dependencies` section:

```json
"dependencies": {
  ...
  "qwant-react-feather-icons": "git+https://github.com/QwantResearch/qwant-react-feather-icons.git"
}
```

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
import * as Icon from 'qwant-react-feather-icons'

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

 - **color:** PropTypes.string
 - **size:** PropTypes.oneOfType([PropTypes.string, PropTypes.number])

###### Chevron

 - **direction:** PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired

###### All

 - **active:** PropTypes.bool
