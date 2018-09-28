import React from 'react'
import { auth } from '../util/auth'
import { navigate } from 'gatsby'

export default class Callback extends React.Component {
  componentDidMount() {
    auth.handleAuthentication().then(() => {
      navigate('/app/home')
    })
  }
  render() {
    return <div>loading</div>
  }
}
