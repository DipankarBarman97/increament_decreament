import React, { useContext, useEffect, useRef } from 'react'
import { Context } from './index'

const Row = () => {

    const data = useContext(Context)
    // console.log(data);

    const customElement = useRef(null)

    useEffect(() => {
      console.log(customElement.current);
    }, [])
    

    return (
        <div ref={customElement}>
            { data }
        </div>
    )
}

const Home = () => {
  return (
    <div className='home'>
      <Row />
    </div>
  )
}

export default Home
