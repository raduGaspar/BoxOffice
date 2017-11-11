import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class I18n extends Component {
  constructor (props) {
    super()
    const { db, user } = props.fb

    this.state = {
      language: 'en'
    }

    this.settingsRef = db.ref(`users/${user.uid}/settings`)
    this.onSettings = this.onSettings.bind(this)
  }

  componentWillMount () {
    this.settingsRef.on('value', this.onSettings)
  }

  onSettings (snap) {
    const settings = snap.val()
    if (settings) {
      const { language } = settings

      fetch(`/static/i18n/${language}.json`, {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            language,
            data
          })
        })

      console.log('we have settings and the language is', language)
    } else {
      console.log('no settings available: setting default')
      this.settingsRef.update({
        language: 'en',
        showTags: false
      })
    }
  }

  render () {
    const { data } = this.state
    return data ? (
      <div>
        {this.props.children(this.state)}
      </div>
    ) : null
  }
}

export default I18n
