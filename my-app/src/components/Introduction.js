import React from 'react'

function Introduction (props) {
  return (

    <div className='intro' id='intro'>
      <h3 className="carousel__caption-text text-center">{props.slide.title}</h3>
      <p>Hello</p>
    </div>

  )
}

export default Introduction
