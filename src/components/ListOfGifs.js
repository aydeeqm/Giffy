import React from 'react'
import getGifs from '../services/getGifs';
import Gif from './Gif'

export default function ListOfGifs ({ params }) {
  const [gifs, setGifs] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const { keyword } = params

  React.useEffect(function () {
    setLoading(true)
    getGifs({ keyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    });
  }, [keyword])

  if(loading) return <i>Cargando...🦴</i>

  return (
    <div>
      {
        gifs.map(({id, title, url}) => 
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
          />
        )
      }
    </div>
  )
}