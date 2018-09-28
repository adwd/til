import auth0 from 'auth0-js'

const isBrowser = typeof window !== 'undefined'

export class Auth {
  webAuth = isBrowser
    ? new auth0.WebAuth({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        redirectUri: process.env.AUTH_CALLBACK_URL,
        responseType: 'token id_token',
        scope: 'openid',
      })
    : {
        authorize: () => {},
        parseHash: (
          callback: auth0.Auth0Callback<auth0.Auth0DecodedHash>
        ) => {},
      }

  login = () => {
    this.webAuth.authorize()
  }

  handleAuthentication: () => Promise<auth0.Auth0DecodedHash> = () => {
    return new Promise((resolve, reject) => {
      this.webAuth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          // history.replace('/home');
          resolve(authResult)
        } else if (err) {
          // history.replace('/home');
          console.log(err)
          // alert(`Error: ${err.error}. Check the console for further details.`);
          reject(err)
        }
      })
    })
  }

  setSession: (a: auth0.Auth0DecodedHash) => void = authResult => {
    if (!isBrowser) {
      return
    }

    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    // navigate to the home route
    // history.replace('/home');
  }

  logout = () => {
    if (!isBrowser) {
      return
    }

    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to the home route
    // history.replace('/home');
  }

  isAuthenticated: () => boolean = () => {
    if (!isBrowser) {
      return false
    }

    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
