import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={() => 'Home'} />
          <Route path="/:slug" component={() => 'Blog'} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
