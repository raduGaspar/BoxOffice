import React, { Component } from 'react'

class ShowsContainer extends Component {
  constructor (props) {
    super()
    const { db, user } = props.fb

    this.state = {
      shows: null
    }

    this.showsRef = db.ref(`users/${user.uid}/shows`)
    this.onShows = this.onShows.bind(this)
    this.getEpisode = this.getEpisode.bind(this)
    this.getShowsList = this.getShowsList.bind(this)
  }

  componentWillMount () {
    this.showsRef.on('value', this.onShows)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.filters !== this.props.filters) {
      const query = nextProps.filters ? nextProps.filters.toLowerCase() : null
      this.showsRef
        .orderByChild('nameQuery')
        .startAt(query)
        .endAt(`${query}\uf8ff`)
        .once('value', this.onShows)
    }
  }

  onShows (snap) {
    const shows = snap.val()

    // watching
    this.setState({
      shows
    })
  }

  getEpisode (show) {
    if (show.onlyEps) {
      return `0${show.episode}`.slice(-2)
    } else {
      return `s${`0${show.season}`.slice(-2)}e${`0${show.episode}`.slice(-2)}`
    }
  }

  getShowsList (shows) {
    const { i18n } = this.props
    return shows ? Object.keys(shows).map((showId, idx) => (
      <div
        className={`show ${idx % 2 === 0 ? 'even' : 'odd'}`}
        key={showId}
      >
        <div className="description">
          <h3>{ shows[showId].name }</h3>
          <p>{ i18n.data.weekdays[shows[showId].airsOn] }</p>
          <p>Watch next: { this.getEpisode(shows[showId]) }</p>
        </div>
        <div className="actions">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <style jsx>{`
          .show {
            padding: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .show.odd {
            background: #ededed;
          }

          button {
            display: inline-block;
            outline: 0 none;
            width: 30px;
            height: 30px;
            border: 0 none;
            background: #ccc;
          }
          button:hover {
            background: #dedede;
          }
        `}</style>
      </div>
    )) : null
  }

  render () {
    const { shows } = this.state

    return (
      <div>
        { this.getShowsList(shows) }
      </div>
    )
  }
}

export default ShowsContainer
