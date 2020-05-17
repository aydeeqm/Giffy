import React from 'react'
import { Link } from 'wouter'

const POPULAR_GIFS = ['Peru', 'Matrix', 'Colombia']

function Home () {
  return (
    <>
      <h3 className='App-title'>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map(popularGif => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
