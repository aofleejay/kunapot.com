import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from '../screens/Blog'
import Home from '../screens/Home'

const Screen = () => <div>'Screen'</div>

class Routes extends React.Component {
  public render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:slug" component={Blog} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
