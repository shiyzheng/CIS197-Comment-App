import React, { useState, useEffect } from 'react'

const Vote = () => {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <div>
      <button class="button is-warning" onClick={() => setVoteCount(voteCount + 1)}>
        Upvote
      </button>
      <p> {voteCount}</p>
      <button class="button is-link" onClick={() => setVoteCount(voteCount - 1)}>
        Downvote
      </button>
    </div>
  )
}

export default Vote