import React from 'react'
import styles from 'styles/base.styl'

class App extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default App
