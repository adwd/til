import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends React.Component {
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
      </Layout>
    )
  }
}

export default IndexPage
