import React from 'react'

const Helmert = (props) => {
    document.title='Maltimart -'+props.title;
  return (
    <div style={{width: "100"}}>{props.childern} </div>
  )
}

export default Helmert