import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { Link, navigate } from 'gatsby'
import { Auth } from '../util/auth'
import PrivateRoute from '../components/private-route'

class App extends React.Component {
  auth = new Auth()
  render() {
    return (
      <>
        <Router>
          <Index path="/app" auth={this.auth} />
          <Login path="/app/login" auth={this.auth} />
          <Callback path="/app/callback" auth={this.auth} />
          <PrivateRoute component={Home} path="/app/home" auth={this.auth} />
        </Router>
        <Link to="/">Go back to the homepage</Link>
      </>
    )
  }
}

class Index extends React.Component<RouteComponentProps & { auth: Auth }> {
  handleLogIn = () => {
    this.props.auth.login()
  }

  handleLogOut = () => {
    this.props.auth.logout()
    window.location.reload()
  }

  render() {
    console.log(this.props.auth)
    return (
      <>
        <div>app</div>
        {this.props.auth.isAuthenticated() ? (
          <button onClick={this.handleLogOut}>log out</button>
        ) : (
          <button onClick={this.handleLogIn}>log in</button>
        )}
      </>
    )
  }
}

class Login extends React.Component<RouteComponentProps & { auth: Auth }> {
  componentDidMount() {
    this.props.auth.login()
  }

  render() {
    return <div>log in</div>
  }
}

class Callback extends React.Component<RouteComponentProps & { auth: Auth }> {
  componentDidMount() {
    this.props.auth.handleAuthentication().then(() => {
      navigate('/app/home')
    })
  }
  render() {
    return <div>loading</div>
  }
}

const Home = (props: RouteComponentProps) => <div>home</div>

export default App
