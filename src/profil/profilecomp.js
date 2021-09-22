import React from 'react'

const profilecomp = (props) => {
    console.log(props)
    return (
      
  

        <div>
           <h1>{props.fullName}</h1>
           <h2>{props.bio}</h2>
           <h2>{props.prof}</h2>
           <button onClick={() => props.handleClick()} >click  me</button>
           {props.children}
        </div>
    )
}

export default profilecomp
