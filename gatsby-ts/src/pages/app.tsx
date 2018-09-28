import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { Link } from 'gatsby'
import { auth } from '../util/auth'
import PrivateRoute from '../components/private-route'

const App = () => (
  <>
    <Router>
      <Index path="/app" />
      <PrivateRoute component={Home} path="/app/home" />
    </Router>
    <Link to="/">Go back to the homepage</Link>
  </>
)

const Index = (props: RouteComponentProps) => (
  <>
    <div>app</div>
    {console.log(props, auth)}
  </>
)

const Home = (props: RouteComponentProps) => <div>home</div>

export default App
