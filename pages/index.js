import React from 'react'
import Firebase from '../app/common/Firebase'
import Loading from '../app/common/Loading'
import Login from '../app/common/Login'
import Welcome from '../app/components/Welcome'

export default () => (
  <Firebase>
    { (fb, { login, logout }) => fb.isLoading ? <Loading /> : fb.user
      ? <Welcome user={fb.user} />
      : <Login login={login} error={fb.error} />
    }
  </Firebase>
)
