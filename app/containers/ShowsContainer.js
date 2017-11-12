import React, { Component } from 'react'

class ShowsContainer extends Component {
  constructor (props) {
    super()
    const { db, user } = props.fb

    this.state = {
      shows: null
    }

    this.showsRef = db.ref(`users/${user.uid}/shows`)
    this.fetchData = this.fetchData.bind(this)
    this.onShows = this.onShows.bind(this)
    this.getEpisode = this.getEpisode.bind(this)
    this.getShowsList = this.getShowsList.bind(this)

    this.doNext = this.doNext.bind(this)
    this.doPrev = this.doPrev.bind(this)
    this.updateEpisode = this.updateEpisode.bind(this)
  }

  fetchData (props) {
    const currentProps = props || this.props
    const query = currentProps.filters ? currentProps.filters.toLowerCase() : null

    // remove existing 'on' listener
    if (this.showsRef) {
      this.showsRef.off('value', this.onShows)
    }

    // rebind 'on' listener
    this.showsRef
      .orderByChild('nameQuery')
      .startAt(query)
      .endAt(`${query}\uf8ff`)
      .on('value', this.onShows)
  }

  componentWillMount () {
    this.fetchData()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.filters !== this.props.filters) {
      this.fetchData(nextProps)
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
      return show.episode < 10 ? `0${show.episode}`.slice(-2) : show.episode
    } else {
      return `s${`0${show.season}`.slice(-2)}e${`0${show.episode}`.slice(-2)}`
    }
  }

  doNext (show, increaseSeason) {
    const update = {}
    if (increaseSeason && !show.onlyEps) {
      update.season = show.season + 1
      update.episode = 1
    } else {
      update.episode = show.episode + 1
    }

    return update
  }

  doPrev (show) {
    const update = {}
    if (show.episode > 1) {
      update.episode = show.episode - 1
    } else {
      update.season = show.season - 1
      update.episode = 1
    }

    return update
  }

  updateEpisode (show, showId, isNext = true, increaseSeason = false) {
    const { db, user } = this.props.fb
    const method = isNext ? this.doNext : this.doPrev
    const update = method(show, increaseSeason)

    db.ref(`users/${user.uid}/shows/${showId}`)
      .update(update)
  }

  getShowsList (shows) {
    const { i18n } = this.props
    return shows ? Object.keys(shows).map((showId, idx) => (
      <div
        className={`show ${idx % 2 === 0 ? 'even' : 'odd'}`}
        key={showId}
      >
        <div className='description'>
          <h3>{ shows[showId].name } {showId}</h3>
          <p>{ i18n.data.weekdays[shows[showId].airsOn] }</p>
          <p>Watch next: { this.getEpisode(shows[showId]) }</p>
        </div>
        <div className='actions'>
          <button
            onClick={() => this.updateEpisode(shows[showId], showId)}
            onContextMenu={(e) => {
              e.preventDefault()
              this.updateEpisode(shows[showId], showId, true, true)
            }}
          >
            +
          </button>
          <button onClick={() => this.updateEpisode(shows[showId], showId, false)}>-</button>
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
