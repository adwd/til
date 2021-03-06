import React from 'react'
import { navigate, RouteComponentProps } from '@reach/router'
import { Auth } from '../util/auth'

interface Props extends RouteComponentProps {
  component: React.ComponentType
  auth: Auth
}

class PrivateRoute extends React.Component<Props> {
  render() {
    const { component: Component, auth, location, ...rest } = this.props
    if (!auth.isAuthenticated() && location.pathname !== `/app/login`) {
      // If we’re not logged in, redirect to the home page.
      navigate(`/app/login`)
      return null
    }

    return <Component {...rest} />
  }
}

export default PrivateRoute
