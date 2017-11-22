import React, { Component } from 'react'
import './App.css'
import tracklist from './data.json'
import compareFunction from './helperFunctions'

// Importing components
import Track from './tinyComponents/Track'
import NoTrack from './tinyComponents/NoTrack'

class App extends Component {
  render () {
    // Sorting the Tracklist using compareFunction
    const sortedTracklist = tracklist.sort(compareFunction)

    // Creating the HTML by applying the Track component for each track
    const HTMLify = (sortedTracklist) => {
      // If the tracklist is empty
      if (sortedTracklist.length === 0) {
        return <NoTrack />
      }

      let HTML = []
      sortedTracklist.forEach(item => {
        HTML.push(<Track track={item} key={item.id} />)
      })
      return HTML
    }

    // Rendering
    return (
      <div className='App'>
        {/* {HTMLify([])} */}
        {HTMLify(sortedTracklist)}
      </div>
    )
  }
}

export default App
