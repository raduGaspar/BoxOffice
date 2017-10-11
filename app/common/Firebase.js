import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../../config'

class Firebase extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      error: null,
      user: null
    }

    this.handleError = this.handleError.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  handleError (err) {
    this.setState({
      isLoading: false,
      error: err.message
    })
  }

  handleLogin () {
    this.setState({ isLoading: true })
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(this.handleError)
  }

  handleLogout () {
    this.setState({ isLoading: true })
    firebase.auth().signOut()
  }

  updateUser (user) {
    const newState = {
      isLoading: false,
      error: null,
      user
    }
    if (user) {
      newState.auth = firebase.auth()
      newState.db = firebase.database()
    }
    this.setState(newState)
  }

  componentDidMount () {
    if (!firebase.apps.length) {
      firebase.initializeApp(config.firebase)
    }
    firebase.auth().onAuthStateChanged(this.updateUser)
  }

  render () {
    return (
      <div>
        {this.props.children(this.state, {
          login: this.handleLogin,
          logout: this.handleLogout
        })}
      </div>
    )
  }
}

export default Firebase
