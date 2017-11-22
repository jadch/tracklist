import React, { Component } from 'react'

// Track component
class Track extends Component {
  constructor (props) {
    super(props)
    this.state = this.props.track.votes
  }

  vote () {
    if (this.state.userVoted) {
      console.log('You already voted for this track!')
    } else {
      let votes = {
        count: this.state.count + 1,
        userVoted: true
      }
      this.setState(previous => votes)
    }
  }
  render () {
    return (
      <div>
        <article key={this.props.track.id} className='track'>
          <img src={this.props.track.pictureUrl} alt='Track Cover' />
          <div>
            <h1>{this.props.track.name}</h1>
            <h2>{this.props.track.artist}</h2>
          </div>
          <p>Ajouté par {this.props.track.adder.name}</p>
          <p>Votes {this.state.count}</p>
          <button onClick={this.vote.bind(this)}>VOTE</button>
        </article>
      </div>
    )
  }
}

export default Track
