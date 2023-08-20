import React from 'react'

function TopSlider(props) {
  return (
    <div className='container-fluid w-100'>
        <img className='w-100' src={props.img} alt="" />
    </div>
  )
}

export default TopSlider