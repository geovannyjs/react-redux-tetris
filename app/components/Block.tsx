import React from 'react'

const Block = ({ status, color }) => {
  var cn = "block"
  if(status) cn += ` ${color}`
  return (
    <div className={cn}>
    </div>
  )
}

export default Block
