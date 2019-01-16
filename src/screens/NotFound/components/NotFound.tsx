import * as React from 'react'
import { Link } from 'react-router-dom'

class NotFound extends React.Component {
  public render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Page not found</p>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default NotFound
