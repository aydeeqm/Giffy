import React from 'react'
import getGifs from '../services/getGifs';
import Gif from './Gif'

export default function ListOfGifs ({ keyword }) {
  const [gifs, setGifs] = React.useState([])

  React.useEffect(function () {
    getGifs({ keyword }).then(gifs => setGifs(gifs));
  }, [keyword])

  return (
    gifs.map(({id, title, url}) => 
      <Gif
        key={id}
        id={id}
        title={title}
        url={url}
      />
    )
  )
}