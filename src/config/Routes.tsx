import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../screens/About'
import Blog from '../screens/Blog'
import Home from '../screens/Home'
class Routes extends React.Component {
  public render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
