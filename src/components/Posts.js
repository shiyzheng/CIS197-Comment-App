import * as React from 'react'
import { useState } from 'react'

export const Posts = ({name, post, depth}) => {
    const [myPosts, setMyPosts] = useState([])
    if (depth === 0) {
      // Base case
      return null
    }
    
    return (
      <>
        <div>{post}</div>
        <Voter />
        <h1>Depth: {depth}</h1>
        <Posts depth={depth - 1} />
      </>
    )
  }