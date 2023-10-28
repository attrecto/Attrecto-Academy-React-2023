import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
// npm install react-loader-spinner kell küülönben nem működik




export const Loader = () => {
  return (
    <div>
    <div className='d-flex justify-content-center'>
  <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
  
</div>
<h3 className='d-flex justify-content-center'>Loading...</h3>
</div>
  )
}

export default Loader
