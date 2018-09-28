import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { auth } from '../util/auth'

class IndexPage extends React.Component {
  handleLogIn = () => {
    auth.login()
  }
  handleLogOut = () => {
    auth.logout()
    window.location.reload()
  }
  render() {
    console.log('hello')
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div>
          <p>see posts</p>
          <Link to="/posts/">Go to posts</Link>
        </div>
        {auth.isAuthenticated() ? (
          <button onClick={this.handleLogOut}>log out</button>
        ) : (
          <button onClick={this.handleLogIn}>log in</button>
        )}
      </Layout>
    )
  }
}

export default IndexPage
