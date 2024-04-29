import React from 'react'

function Button({fun, value}) {
  return (
      <button onClick={fun} className='w-16 h-8 rounded-md bg-green-200'> {value}</button>
     
  )
}

export default Button
