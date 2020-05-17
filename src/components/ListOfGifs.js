import React from 'react'
import getGifs from '../services/getGifs';
import Gif from './Gif'

export default function ListOfGifs ({ params }) {
  const [gifs, setGifs] = React.useState(
    {loading: false, results: []}
  )
  const { keyword } = params

  React.useEffect(function () {
    setGifs(
      actualGifs => ({loading: true, result: actualGifs.results})
    )

    getGifs({ keyword }).then(gifs => {
      setGifs({ loading: false, results: gifs })
    });
  }, [keyword])

  if(gifs.loading) return <i>Cargando...🦴</i>

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